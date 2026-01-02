import { useState } from "react";
import "./Products.css";

/* =========================
   TYPES
========================= */
type UserRole = "buyer" | "farmer";

type Product = {
  id: number;
  name: string;
  category: string;
  farmingType: "Organic" | "Natural" | "Chemical-Free";
  quantity: string;
  price: string;
  location: string;
  farmerName: string;
  buyerType: string;
  description: string;
};

/* =========================
   DUMMY DATA (REALISTIC)
========================= */
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Organic Wheat",
    category: "Grains",
    farmingType: "Organic",
    quantity: "500 Quintals",
    price: "₹2400 / Quintal",
    location: "Pune, Maharashtra",
    farmerName: "Ramesh Patil",
    buyerType: "Wholesaler / Processor",
    description:
      "Organically grown wheat without chemical fertilizers. Suitable for flour mills and bulk buyers.",
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
    buyerType: "Retailers / Wholesalers",
    description:
      "Seasonal fresh tomatoes grown using natural farming methods.",
  },
  {
    id: 3,
    name: "Tur Dal",
    category: "Pulses",
    farmingType: "Organic",
    quantity: "200 Quintals",
    price: "₹8200 / Quintal",
    location: "Solapur, Maharashtra",
    farmerName: "Mahadev Jadhav",
    buyerType: "Exporters / Processors",
    description:
      "High-quality organic tur dal with good grain size and yield.",
  },
  {
    id: 4,
    name: "Groundnut",
    category: "Oil Seeds",
    farmingType: "Chemical-Free",
    quantity: "350 Quintals",
    price: "₹6000 / Quintal",
    location: "Ahmednagar, Maharashtra",
    farmerName: "Anil Pawar",
    buyerType: "Oil Mills",
    description:
      "Groundnut cultivated without chemical pesticides, ideal for oil extraction.",
  },
];

/* =========================
   MAIN COMPONENT
========================= */
function Products() {
  /* =========================
     STATE
  ========================= */
  const [role, setRole] = useState<UserRole>("buyer");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [farmingFilter, setFarmingFilter] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  /* =========================
     FILTER LOGIC
  ========================= */
  const filteredProducts = PRODUCTS.filter((product) => {
    const categoryMatch =
      categoryFilter === "All" || product.category === categoryFilter;
    const farmingMatch =
      farmingFilter === "All" || product.farmingType === farmingFilter;

    return categoryMatch && farmingMatch;
  });

  return (
    <section className="marketplace-page">

      {/* =========================
          PAGE HEADER
      ========================= */}
      <header className="marketplace-header">
        <h1>Farm Products Marketplace</h1>
        <p>
          A farmer-first marketplace connecting producers directly with
          wholesalers and bulk buyers.
        </p>
      </header>

      {/* =========================
          ROLE SELECTION
      ========================= */}
      <div className="role-switch">
        <button
          className={role === "buyer" ? "active" : ""}
          onClick={() => setRole("buyer")}
        >
          I am a Buyer
        </button>
        <button
          className={role === "farmer" ? "active" : ""}
          onClick={() => setRole("farmer")}
        >
          I am a Farmer
        </button>
      </div>

      {/* =========================
          FILTER BAR (BUYER ONLY)
      ========================= */}
      {role === "buyer" && (
        <div className="filter-bar">
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Grains">Grains</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Pulses">Pulses</option>
            <option value="Oil Seeds">Oil Seeds</option>
          </select>

          <select onChange={(e) => setFarmingFilter(e.target.value)}>
            <option value="All">All Farming Types</option>
            <option value="Organic">Organic</option>
            <option value="Natural">Natural</option>
            <option value="Chemical-Free">Chemical-Free</option>
          </select>
        </div>
      )}

      {/* =========================
          FARMER INFO PANEL
      ========================= */}
      {role === "farmer" && (
        <div className="farmer-panel">
          <h2>Farmer Dashboard (Demo)</h2>
          <p>
            Farmers will be able to list products, manage quantities,
            and connect directly with buyers.
          </p>
          <button disabled>Add New Product (Coming Soon)</button>
        </div>
      )}

      {/* =========================
          PRODUCT LIST
      ========================= */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>

            <p><strong>Farming:</strong> {product.farmingType}</p>
            <p><strong>Quantity:</strong> {product.quantity}</p>
            <p><strong>Price:</strong> {product.price}</p>

            <span className="view-details">View Details</span>
          </div>
        ))}
      </div>

      {/* =========================
          PRODUCT DETAILS MODAL
      ========================= */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>

            <ul>
              <li><strong>Farmer:</strong> {selectedProduct.farmerName}</li>
              <li><strong>Location:</strong> {selectedProduct.location}</li>
              <li><strong>Buyer Type:</strong> {selectedProduct.buyerType}</li>
              <li><strong>Quantity:</strong> {selectedProduct.quantity}</li>
              <li><strong>Price:</strong> {selectedProduct.price}</li>
            </ul>

            {role === "buyer" && (
              <button className="contact-btn">
                Request Contact
              </button>
            )}

            <button className="close-btn" onClick={() => setSelectedProduct(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default Products;
