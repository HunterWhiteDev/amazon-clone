export const initialState = {
    basket: [
    {
        id:"223123123123123",
        title:"New Apple Ipad pro",
        price:"598.65",
        rating:4,
        image:"https://ss7.vzw.com/is/image/VerizonWireless/ipad-pro-11-in-cellular-space-gray?fmt=pjpg&hei=520"
    }
],
    user: null
  };
  
  // Selector
  
  const reducer = (state, action) => {

    console.log("State: ", state, " Action: ", action)

   switch(action.type) {
    case "ADD_TO_BASKET":
    return {
        ...state,
        basket: [...state.basket, action.item]
    }
    break;
    case "REMOVE_FROM_BASKET": 
    let newBasket = [...state.basket];
    const index = state.basket.findIndex((basketItem) => 
        basketItem.id === action.id
    );
    
    if(index >= 0){
        newBasket.splice(index, 1)
    } else {
        console.warn("Cant remove product not found")
    }

    return {
    ...state, basket: newBasket
      
     }
    break;
      default:
        return state;
    }
  };
  
  export default reducer;