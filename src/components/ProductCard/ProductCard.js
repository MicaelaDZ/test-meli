import React from "react";
import "./_Product.styles.scss";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ProductUbication from "./ProductUbication";

function ProductCard({left, middle, right}) {
  return (
    <>
      <div className="product-card">
        {left}
        {middle}
        {right}
      </div>
    </>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Content = ProductContent;
ProductCard.Price = ProductPrice;
ProductCard.Title = ProductTitle;
ProductCard.Ubication = ProductUbication;

export default ProductCard;

