import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import products from "../../products.json";
import "./ProductPage.css";
import { Product } from "../../types";
import Rating from "../../components/Rating/Rating";
import ProductComponent from "../../components/Product/Product";
import { useStateValue } from "../../StateProvider";
function ProductPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string>("");

  const descRef = useRef<HTMLDivElement | null>(null);

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    setProduct(products[productSlug as keyof typeof products]);
  }, [productSlug]);

  useEffect(() => {
    if (product) setMediaUrl(product["media"][0].url);
    if (descRef.current) descRef.current.innerHTML = product?.desc || "";
  }, [product]);

  const addToBasket = () => {
    if (product)
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          rating: product.rating,
        },
      });
  };

  return (
    <>
      <div className="productPage">
        <div className="productPage__left">
          <div className="productPage__leftMediaSelector">
            {product?.media.map(({ type, url }) =>
              type === "image" ? (
                <img onClick={() => setMediaUrl(url)} src={url} alt="" />
              ) : (
                <video src={url}></video>
              )
            )}
          </div>
          <div className="productPage__leftMedia">
            <img src={mediaUrl} alt="" />
          </div>
        </div>
        <div className="productPage__right">
          <h2>{product?.title}</h2>
          <div className="productPage__rightRating">
            <span>{product?.rating.toFixed(2)}</span>
            <Rating rating={product?.rating} />
            <span>23 Ratings | 7 Answers</span>
          </div>
          <div className="productPage__rightPrice">
            <h4>${product?.price}</h4>
            <button
              className="productPage__rightBuyButton"
              onClick={addToBasket}
            >
              Add to Basket
            </button>
          </div>
          <div className="productPage__desc" ref={descRef}></div>
        </div>
      </div>

      <h3 className="productPage__relatedHeader">Similar Products:</h3>
      <div className="productPage__related">
        {Object.entries(products).map(([slug, product]: Product | any) => {
          if (product.slug !== productSlug)
            return <ProductComponent {...product} />;
          else return null;
        })}
      </div>
    </>
  );
}

export default ProductPage;
