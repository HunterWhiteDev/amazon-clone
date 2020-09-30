import React from 'react'
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product({id, title, price, image, rating}) {

    const [{basket}, dispatch] = useStateValue()



const addToBasket = () => {
                  dispatch({
                      type: "ADD_TO_BASKET",
                      item: {
                        id: id,
                        title: title,
                        image: image,
                        price: price,
                        rating: rating
                      }
                  })
}


    return (
        <div className="product">
            <p>{title}</p>
             <p className="pdocut__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
         <div className="product__rating">
           {
               Array(rating).fill().map((e) => (
                   <p>🌟</p>
               ))
           }
         </div>
         <img src={image} alt="" />
         <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
