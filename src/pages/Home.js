import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  return (
    <div>
      <NavBar />
      <ProductCard
        left={<ProductCard.Image />}
        middle={
          <ProductCard.Content>
            <ProductCard.Price />
            <ProductCard.Title />
          </ProductCard.Content>
        }
        right={<ProductCard.Ubication/>}
      />
    </div>
  );
}

export default Home;
