import { useState, useEffect } from "react";
import products from "../../products.json";
import { useHistory } from "react-router-dom";
import { Product } from "../../types";
interface HeaderProductsProps {
  productsLength: number;
  setShowProducts: Function;
}

function HeaderProducts({
  productsLength,
  setShowProducts,
}: HeaderProductsProps) {
  const [index, setIndex] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "ArrowUp") {
        if (index > 0) {
          setIndex(index - 1);
        } else setIndex(productsLength - 1);
      }

      if (key === "ArrowDown") {
        if (index < productsLength - 1) {
          setIndex(index + 1);
        } else setIndex(0);
      }

      if (key === "Enter") {
        const selectedProduct: Product = Object.entries(products).filter(
          (product, idx) => idx === index
        )[0][1];
        console.log(selectedProduct.slug);
        history.push("/product/" + selectedProduct.slug);
        setShowProducts(false);
      }
      if (key === "Escape") {
        setIndex(0);
        setShowProducts(false);
      }
    };

    window.addEventListener("keydown", onKeyPress);

    return () => window.removeEventListener("keydown", onKeyPress);
  }, [index]);

  const handleClick = (slug: string) => {
    setIndex(0);
    setShowProducts(false);
    history.push(`/product/${slug}`);
  };

  return (
    <div className="headerProducts">
      {Object.entries(products)
        .map(([key, product], idx) => (
          <div
            onClick={() => handleClick(product.slug)}
            className={`headerProducts__product ${
              idx === index ? "headerProducts__productSelected" : ""
            }`}
          >
            <div className="headerProducts__productLeft">
              <img src={product.image} alt="" />
              <div className="headerProducts__productLeftInfo">
                <h4>{product.title}</h4>
                <p>
                  {" "}
                  <strong>Price:</strong> ${product.price}
                </p>
                <span>Sold By: {product.soldBy}</span>
              </div>
            </div>
            <div className="headerProducts__productRight"></div>
          </div>
        ))
        .splice(0, productsLength)}
    </div>
  );
}

export default HeaderProducts;
