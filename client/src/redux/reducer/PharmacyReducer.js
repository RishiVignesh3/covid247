import * as actionTypes from '../actions/actionTypes'

const initialState = {
   medicines:"",
  cartItems:[]
};

const PharmacyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ITEMS_DATA :
      return {
        ...state,
        cartItems:action.payload.map(item => item.id ? {...item,qty:1}: item)
      }
      case actionTypes.CART_ITEMS :
        const inCart = state.cartItems.find(item=>item.id!==action.payload.id?false:true)
        if(!inCart){return{ 
          ...state,
          cartItems:[...state.cartItems,{...action.payload,qty:1}]
         }}
        else{
        return{
          ...state,

        }
        } case actionTypes.EMPTY_CART:
        return{
          ...state,
          cartItems:[]
        }
        case actionTypes.REMOVE:
        return{
          ...state,
         cartItems:state.cartItems.filter(item => item.id !==action.payload )
        }
        case actionTypes.INCREMENT:
          return{
            ...state,
            cartItems:state.cartItems.map(item => item.id ===action.payload ? {...item,qty:item.qty+1}: item) 
          }
          case actionTypes.DECREMENT:
            return{
              ...state,
              cartItems:state.cartItems.map(item => item.id ===action.payload ? {...item,qty:item.qty-1}: item) 
            }
         
                default:
                  break
                }
                
                return state;
};
export default PharmacyReducer;
