import exp from "constants";
import React from "react";
import { useState } from "react";

const AddToCartButton = () => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
  
    const handleAddToCart = () => {
      // Logic to add item to cart
      setIsAddedToCart(true);
    };
  
    return (
      <button
        onClick={handleAddToCart}
        style={{borderRadius:'24px'}}
        className={`px-4 py-2 text-white rounded ${
          isAddedToCart ? 'bg-orange-500' : 'bg-orange-500'
        }`}
      >
        {isAddedToCart ? 'View Cart' : 'Add to Cart'}
      </button>
    );
  };



type Props = {
    stock:String,
    price:number
}

const AddToCart = ({props}: any) => {
  const [quanitity, setQuanity] = useState(1);
  
  // console.log("here is is price props",props)
    const  {stock,price,currency} = props

    return(
      <div className="p-4 border rounded shadow-lg" style={{width:"100%",display:'flex',alignContent:'center',flexDirection:'column',flexWrap:'wrap'}}>
      <div className="mb-2">
        <span className="text-lg font-semibold">Stock: {stock}</span>
      </div>

      <div className="mb-2">
        <span className="text-lg font-semibold">QUANTITY</span> <br />
        <input type="number" min={1} value={quanitity} max={stock} onChange={(e) => setQuanity(parseInt(e.target.value))} className="w-md p-2 border rounded" />
      </div>

      <div className="mb-4">
        <span className="text-lg">Price: ${price.toFixed(2)}</span>
      </div>
      <div>
        <AddToCartButton />
      </div>
    </div>
    )
}
export default AddToCart