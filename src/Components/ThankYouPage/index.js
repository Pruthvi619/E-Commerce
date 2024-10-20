import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";
import Footer from "../Footer";
import Header from "../Header";

const ThankYouPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      <Header />
      <div className="thank-you-page">
        <h1>Thank You!</h1>

        <img
          alt="Thank You"
          src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__"
        />
        {product ? (
          <p>
            Thank you for your interest in <strong>{product.name}</strong>!
          </p>
        ) : (
          <p>Thank you for your interest in our products!</p>
        )}
        <Link to="/" className="back-btn">
          CONTINUE SHOPPING
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
