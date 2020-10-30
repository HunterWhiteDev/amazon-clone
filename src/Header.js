// import React from 'react'
// import "./Header.css";
// import {Link} from "react-router-dom";
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import { useStateValue } from './StateProvider';
// import { Dashboard, Email } from '@material-ui/icons';
// import { auth } from './Firebase';
// function Header() {
//    const [{ basket, user }, dispatch] = useStateValue();


//  const handleAuthentication = () => {
//     if(user) {
//        auth.signOut();
//     }
//  }

//     return (
//         <nav className="header">
//         {/* Logo on the left => img */}
//         <Link to="/">
//         <img  className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
//         </Link>
//         {/* Search Box */}
//         <div className="header__search">
//         <input type="text" className="header__searchInput"/>
//         <SearchIcon className="header__searchIcon" />
//         </div>
//         {/* 3 Links */}
//         <div className="header__nav">
//           {/* 1st link */}
//           <Link to="/login" className="header__link"> 
//           <div className="header__option">
//              <span className="header__optionLineOne">Hello {}</span>
//              <span className="header__optionLineTwo">{user? "Sign Out" : "Sign In"} </span>
//           </div>
//           </Link>
//           {/* 2nd link */}
//           <Link to={!user && "/login"} className="header__link"> 
//           <div className="header__option">
//              <span className="header__optionLineOne">Returns</span>
//              <span className="header__optionLineTwo">& Orders </span>
//           </div>
//           </Link>
//           {/* 3rd Link*/}
//           <Link to="/login" className="header__link"> 
//           <div onClick={login} className="header__option">
//              <span className="header__optionLineOne">Your</span>
//              <span className="header__optionLineTwo">Prime</span>
//           </div>
//           </Link>


    
//         </div>

//         {/* Basket Icon with number */}
//         <Link to="/checkout" className="header__link">
//              <div className="header__optionBasket">
//               <ShoppingBasketIcon />
             
//              <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
//              </div>
//         </Link>


//         </nav>
//     )
// }

// export default Header


import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link className="header__link" to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="header__link" to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link className="header__link" to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option header__link">
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