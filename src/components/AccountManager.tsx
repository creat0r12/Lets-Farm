import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";

import "./AccountManager.css";

type Mode = "login" | "signup" | "account" | "edit";


interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}




const AccountManager = ({ open, onClose }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [mode, setMode] = useState<Mode>("login");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: ""
  });


  const [editName, setEditName] = useState("");


  /* Load user once */
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
        setMode("account");
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAuth = async () => {
    const url =
      mode === "login"
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/signup";

    const payload =
      mode === "login"
        ? { email: form.email, password: form.password }
        : form;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Authentication failed");
        return;
      }

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setMode("account");
      }

    } catch (err) {
      console.error("Auth error", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMode("login");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="account-overlay" onClick={onClose}>
      <div className="account-panel" onClick={(e) => e.stopPropagation()}>

        {/* ACCOUNT VIEW */}
        {mode === "account" && user && (
          <>
            <div className="account-header">
              <div className="avatar-wrapper">
                <div className="avatar">👤</div>
              </div>

              <div className="account-title">
                <h2>Welcome , {user.name}🌱 </h2>
                <span className="email">{user.email}</span>
              </div>
            </div>

            <div className="account-info">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Role:</strong> Platform User</p>
              <p><strong>Location:</strong> Maharashtra, India</p>
              <p><strong>Status:</strong> Active</p>
            </div>

            <div className="account-actions">
              <button
                className="primary"
                onClick={() => {
                  setEditName(user.name);
                  setMode("edit");
                }}
              >
                Edit Profile
              </button>

              <button className="danger" onClick={logout}>Logout</button>
            </div>
          </>
        )}


        {/* EDIT PROFILE VIEW */}
        {mode === "edit" && user && (
          <>
            <h2 className="auth-title">Edit Profile</h2>

            <input
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Full Name"
            />

            <div className="account-actions">
              <button
                className="primary"
                onClick={async () => {
                  try {
                    const res = await fetch(
                      "http://localhost:5000/api/auth/update-profile",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          id: user.id,
                          name: editName
                        })
                      }
                    );

                    const data = await res.json();

                    if (!res.ok) {
                      alert(data.message || "Update failed");
                      return;
                    }

                    const updatedUser = { ...user, name: editName };
                    localStorage.setItem("user", JSON.stringify(updatedUser));
                    setUser(updatedUser);
                    setMode("account");
                  } catch {
                    alert("Server error");
                  }
                }}
              >
                Save
              </button>

              <button className="danger" onClick={() => setMode("account")}>
                Cancel
              </button>
            </div>
          </>
        )}



        {/* AUTH VIEW */}
        {(mode === "login" || mode === "signup") && (
          <>
            <h2 className="auth-title">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h2>

            {mode === "signup" && (
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
            )}

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button className="auth-submit" onClick={handleAuth}>
              {mode === "login" ? "Login" : "Create Account"}
            </button>

            <p className="auth-switch">
              {mode === "login" ? (
                <>New here? <span onClick={() => setMode("signup")}>Sign up</span></>
              ) : (
                <>Already have an account? <span onClick={() => setMode("login")}>Login</span></>
              )}
            </p>
          </>
        )}

      </div>
    </div>
  );
};

export default AccountManager;
