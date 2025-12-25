import "./AccountPanel.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

function AccountPanel({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="account-overlay" onClick={onClose}>
      <div
        className="account-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="account-header">
          <div className="avatar-wrapper">
            <img
              src="/assets/profile-placeholder.png"
              alt="Profile"
              className="avatar"
            />
            <button className="edit-avatar">✎</button>
          </div>

          <div className="account-title">
            <h2>Raj More</h2>
            <span className="email">rajmore@email.com</span>
          </div>
        </div>

        {/* INFO */}
        <div className="account-info">
          <p><strong>User ID:</strong> LF-102938</p>
          <p><strong>Phone:</strong> 98******12</p>

          <p className="location-row">
            <strong>Location:</strong> Maharashtra, India
            <span className="edit-location" title="Update location">📍</span>
          </p>

          <p><strong>Role:</strong> Platform User</p>
          <p><strong>Joined:</strong> December 2025</p>
        </div>

        {/* ACTIONS */}
        <div className="account-actions">
          <button className="primary">Edit / Update Profile</button>
          <button className="danger">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default AccountPanel;
