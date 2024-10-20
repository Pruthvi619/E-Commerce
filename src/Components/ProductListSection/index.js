import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ProductListSection = () => {
  const navigate = useNavigate();
  const allProducts = [
    {
      id: 1,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      price: 299,
      image:
        "https://i.pinimg.com/enabled/564x/d3/a9/54/d3a954b16cc724e5be09ff81d2bced03.jpg",
    },
    {
      id: 2,
      name: "Snake Plant",
      description: "Indoor Plant, Low maintenance",
      rating: 4.7,
      originalPrice: 400,
      price: 350,
      image:
        "https://i.pinimg.com/564x/4c/88/d4/4c88d4a418e8cec4445984d394e0cc5e.jpg",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      description: "Large, broad-leaved indoor plant",
      rating: 4.8,
      originalPrice: 499,
      price: 450,
      image:
        "https://i.pinimg.com/564x/a9/f2/30/a9f2307753ce43699f103d3136c76ed8.jpg",
    },
    {
      id: 4,
      name: "Aloe Vera",
      description: "Succulent, minimal care required",
      rating: 4.5,
      originalPrice: 150,
      price: 120,
      image:
        "https://i.pinimg.com/564x/aa/ca/39/aaca396e3f183468355dacf7b4f25b97.jpg",
    },
    {
      id: 5,
      name: "Spider Plant",
      description: "Air-purifying plant, easy to maintain",
      rating: 4.6,
      originalPrice: 200,
      price: 180,
      image:
        "https://i.pinimg.com/564x/82/24/ab/8224ab69b24a2c850de24a4ed8debafb.jpg",
    },
    {
      id: 6,
      name: "ZZ Plant",
      description: "Hardy indoor plant, requires little water",
      rating: 4.7,
      originalPrice: 350,
      price: 300,
      image:
        "https://i.pinimg.com/564x/02/24/e1/0224e1ec5b8c59e874b78ea1fbc2613c.jpg",
    },
    {
      id: 7,
      name: "Pothos",
      description: "Trailing vine, thrives in low light",
      rating: 4.8,
      originalPrice: 180,
      price: 150,
      image:
        "https://i.pinimg.com/564x/65/da/fa/65dafa35f7bcee6923a50d652850c0f9.jpg",
    },
    {
      id: 8,
      name: "Peace Lily",
      description: "Flowering plant, good for air purification",
      rating: 4.9,
      originalPrice: 450,
      price: 399,
      image:
        "https://i.pinimg.com/736x/b4/75/f0/b475f02f3ec63fba113b0e7d3a4d8bbc.jpg",
    },
    {
      id: 9,
      name: "Areca Palm",
      description: "Large indoor plant, brightens up spaces",
      rating: 4.6,
      originalPrice: 600,
      price: 550,
      image:
        "https://i.pinimg.com/564x/17/a8/3e/17a83ea543cdac727557ec760b6e399a.jpg",
    },
    {
      id: 10,
      name: "Rubber Plant",
      description: "Indoor tree, low water requirements",
      rating: 4.7,
      originalPrice: 499,
      price: 450,
      image:
        "https://i.pinimg.com/564x/5b/c7/fc/5bc7fc8c4a7ef49c3d3ac29d24289b76.jpg",
    },
    {
      id: 11,
      name: "Bamboo Plant",
      description: "Lucky plant, easy to care for",
      rating: 4.5,
      originalPrice: 300,
      price: 250,
      image:
        "https://i.pinimg.com/564x/a0/a5/a3/a0a5a35f494a961ccead7ca90fa4597a.jpg",
    },
    {
      id: 12,
      name: "Jade Plant",
      description: "Succulent, low water needs",
      rating: 4.6,
      originalPrice: 299,
      price: 249,
      image:
        "https://i.pinimg.com/736x/fb/29/5d/fb295de803123c4aab4be5b0fb40b2ea.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  const handleViewProduct = (product) => {
    navigate("/thank-you", { state: { product } });
  };
  const handleConfirmAddToCart = () => {
    alert(`${selectedProduct.name} has been added to your cart!`);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <div className="catalog-container">
      <div className="filter-section">
        <h3>Filter</h3>
        <button className="clear-btn">CLEAR ALL</button>
        <ul>
          <li>Type of Plants</li>
          <li>Price</li>
          <li>Nursery</li>
          <li>Ideal Plants Location</li>
          <li>Indoor/Outdoor</li>
          <li>Maintenance</li>
          <li>Plant Size</li>
          <li>Water Schedule</li>
          <li>Color</li>
          <li>Seasonal</li>
          <li>Light Efficient</li>
        </ul>
      </div>

      <div className="product-section">
        <div className="product-header">
          <span>{allProducts.length} products</span>
          <div className="sort-by">
            <label>Sort By</label>
            <select>
              <option>Best Selling</option>
              <option>Price - Low to High</option>
              <option>Price - High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-list">
          {currentProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <button
                  className="cart-btn"
                  onClick={() => handleViewProduct(product)}
                >
                  View Product
                </button>
              </div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <div className="product-rating">
                <span>⭐{product.rating}</span>
              </div>
              <div className="product-price">
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discounted-price">₹{product.price}</span>
              </div>
              <button
                className="cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
              <button className="rent-btn">Buy on Rent</button>
            </div>
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {showModal && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <p>Your Cart</p>
            <hr />
            <h2>
              Congratulations
              <br /> Order Placed!
            </h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>
              Thank you for choosing Chaperone services. We will soon get in
              touch with you!
            </p>
            <div>
              <button className="confirm-btn" onClick={handleConfirmAddToCart}>
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductListSection;
