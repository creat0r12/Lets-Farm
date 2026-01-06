import { useState } from "react";
import "./Products.css";

/* =========================
   TYPES
========================= */
type Role = "buyer" | "farmer";

type Product = {
  id: number;
  name: string;
  category: string;
  farmingType: "Organic" | "Natural" | "Chemical-Free";
  quantity: string;
  price: string;
  location: string;
  farmerName: string;
  description: string;
};

/* =========================
   INITIAL PRODUCTS
========================= */
const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Organic Wheat",
    category: "Grains",
    farmingType: "Organic",
    quantity: "500 Quintals",
    price: "₹2400 / Quintal",
    location: "Pune, Maharashtra",
    farmerName: "Ramesh Patil",
    description: "High quality organic wheat grown without chemicals."
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    farmingType: "Natural",
    quantity: "120 Tons",
    price: "₹18 / Kg",
    location: "Nashik, Maharashtra",
    farmerName: "Sunita Deshmukh",
    description: "Naturally grown seasonal tomatoes."
  }
];

function Products() {
  const [role, setRole] = useState<Role>("buyer");
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);

  /* FILTER STATES */
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [farmingFilter, setFarmingFilter] = useState("All");

  /* PRODUCT MODAL */
  const [showProductModal, setShowProductModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState<Omit<Product, "id">>({
    name: "",
    category: "Grains",
    farmingType: "Organic",
    quantity: "",
    price: "",
    location: "",
    farmerName: "",
    description: ""
  });

  /* =========================
     FILTER LOGIC
  ========================= */
  const filteredProducts = products.filter((p) => {
    const categoryOK =
      categoryFilter === "All" || p.category === categoryFilter;
    const farmingOK =
      farmingFilter === "All" || p.farmingType === farmingFilter;
    return categoryOK && farmingOK;
  });

  /* =========================
     ADD TO CART
  ========================= */
  const addToCart = (product: Product) => {
    if (cart.some((c) => c.id === product.id)) {
      alert("Already in cart");
      return;
    }
    setCart([...cart, product]);
  };

  /* =========================
     SAVE PRODUCT
  ========================= */
  const saveProduct = () => {
    if (!form.name || !form.price) {
      alert("Fill required fields");
      return;
    }

    if (editMode && editingId !== null) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...form, id: editingId } : p
        )
      );
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }

    setShowProductModal(false);
    setEditMode(false);
    setEditingId(null);
    setForm({
      name: "",
      category: "Grains",
      farmingType: "Organic",
      quantity: "",
      price: "",
      location: "",
      farmerName: "",
      description: ""
    });
  };

  /* =========================
     EDIT PRODUCT
  ========================= */
  const editProduct = (product: Product) => {
    setRole("farmer");
    setEditMode(true);
    setEditingId(product.id);
    setSelected(null);
    setShowProductModal(true);

    setForm({
      name: product.name,
      category: product.category,
      farmingType: product.farmingType,
      quantity: product.quantity,
      price: product.price,
      location: product.location,
      farmerName: product.farmerName,
      description: product.description
    });
  };

  return (
    <section className="marketplace-page">
      {/* HEADER */}
      <header className="marketplace-header">
        <h1>Farm Products Marketplace</h1>
        <p>Connect farmers directly with buyers</p>
      </header>

      {/* ROLE SWITCH */}
      <div className="role-switch">
        <button
          className={role === "buyer" ? "active" : ""}
          onClick={() => setRole("buyer")}
        >
          Buyer
        </button>
        <button
          className={role === "farmer" ? "active" : ""}
          onClick={() => setRole("farmer")}
        >
          Farmer
        </button>
      </div>

      {/* BUYER FILTERS */}
      {role === "buyer" && (
        <div className="filter-bar">
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="All">All Categories</option>
            <option>Grains</option>
            <option>Vegetables</option>
            <option>Pulses</option>
            <option>Oil Seeds</option>
          </select>

          <select onChange={(e) => setFarmingFilter(e.target.value)}>
            <option value="All">All Farming Types</option>
            <option>Organic</option>
            <option>Natural</option>
            <option>Chemical-Free</option>
          </select>
        </div>
      )}

      {/* FARMER ADD BUTTON */}
      {role === "farmer" && (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <button
            className="add-product-btn"
            onClick={() => setShowProductModal(true)}
          >
            ➕ Add Product
          </button>
        </div>
      )}

      {/* PRODUCT LIST */}
      <div className="product-list">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product-card" onClick={() => setSelected(p)}>
            <h3>{p.name}</h3>
            <p className="category">{p.category}</p>
            <p><strong>Farming:</strong> {p.farmingType}</p>
            <p><strong>Price:</strong> {p.price}</p>
            <span className="view-details">View Details</span>
          </div>
        ))}
      </div>

      {/* CART */}
      {role === "buyer" && cart.length > 0 && (
        <div className="farmer-panel">
          <h2>Your Cart</h2>
          {cart.map((c) => (
            <p key={c.id}>🛒 {c.name} — {c.price}</p>
          ))}
        </div>
      )}

      {/* PRODUCT DETAILS MODAL */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>

            <ul>
              <li><strong>Category:</strong> {selected.category}</li>
              <li><strong>Farming Type:</strong> {selected.farmingType}</li>
              <li><strong>Quantity:</strong> {selected.quantity}</li>
              <li><strong>Price:</strong> {selected.price}</li>
              <li><strong>Location:</strong> {selected.location}</li>
              <li><strong>Farmer:</strong> {selected.farmerName}</li>
            </ul>

            {role === "buyer" && (
              <button className="contact-btn" onClick={() => addToCart(selected)}>
                Add to Cart
              </button>
            )}

            {role === "farmer" && (
              <button className="edit-btn" onClick={() => editProduct(selected)}>
                Edit Product
              </button>
            )}

            <button className="close-btn" onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ADD / EDIT PRODUCT MODAL */}
      {showProductModal && (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editMode ? "Edit Product" : "Add Product"}</h2>

            <input placeholder="Product Name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />

            <select value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option>Grains</option>
              <option>Vegetables</option>
              <option>Pulses</option>
              <option>Oil Seeds</option>
            </select>

            <select value={form.farmingType}
              onChange={(e) => setForm({ ...form, farmingType: e.target.value as any })}>
              <option>Organic</option>
              <option>Natural</option>
              <option>Chemical-Free</option>
            </select>

            <input placeholder="Quantity" value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })} />

            <input placeholder="Price" value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })} />

            <input placeholder="Location" value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })} />

            <input placeholder="Farmer Name" value={form.farmerName}
              onChange={(e) => setForm({ ...form, farmerName: e.target.value })} />

            <textarea placeholder="Description" value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })} />

            <button onClick={saveProduct}>
              {editMode ? "Update Product" : "Add Product"}
            </button>

            <button className="close-btn" onClick={() => setShowProductModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
