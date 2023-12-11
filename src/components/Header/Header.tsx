import React, { Dispatch, useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import HeaderProducts from "./HeaderProducts";

function Header() {
  const [input, setInput] = useState("");
  const [showProducts, setShowProducts] = useState(false);
  //ProductLength is the last integer we will call in our .splice() function
  //ex: products.length(0, productLength)
  const [productLength, setProductLength] = useState(0);

  const [{ basket, user }, dispatch]: [{ basket: any; user: any }, any] =
    useStateValue();

  const { productSlug } = useParams<any>();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    if (val.length <= 2 && val.length >= 1) setProductLength(6);
    if (val.length <= 4 && val.length > 2) setProductLength(5);
    if (val.length <= 6 && val.length > 4) setProductLength(4);
    if (val.length <= 8 && val.length > 6) setProductLength(3);
    if (val.length <= 10 && val.length > 8) setProductLength(2);

    if (!val) return setShowProducts(false);
    //else
    setShowProducts(true);
  };

  useEffect(() => {
    setInput("");
  }, [productSlug]);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      </Link>

      <div className="header__search">
        <input
          placeholder="Search..."
          className="header__searchInput"
          type="text"
          onChange={handleSearch}
          value={input}
        />
        <SearchIcon className="header__searchIcon" />
        {showProducts && (
          <HeaderProducts
            productsLength={productLength}
            setShowProducts={setShowProducts}
          />
        )}
      </div>

      <div className="header__nav">
        <Link to={!user ? "/login" : ""}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
