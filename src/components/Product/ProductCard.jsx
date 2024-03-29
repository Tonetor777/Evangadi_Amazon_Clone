import classes from "./product.module.css";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { useContext } from "react";


function ProductCard({ product , flex , renderDesc, renderAdd}) {
  if (!product) {
    return null;
  }
  const { image, title, id, rating, price, description } = product;
  const ratingValue = rating && rating.rate;
  const ratingCount = rating && rating.count;


  const [state, dispatch] = useContext(DataContext)

  const addToCart = () => {
    dispatch({
      type:Type.ADD_TO_BASKET,
      item:{
        image, title, id, rating, price, description 
      }
    })
  }
  
  return (
    <div  className={`${classes.card_container} ${
      flex ? classes.product_flexed : ""
    }`}>
      <Link to={`/products/${id}`}>
        <img src={image} className={classes.img_container} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={ratingValue} precision={0.1} />
          <small>{ratingCount}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {
          renderAdd && <button onClick={addToCart} className={classes.button}>add to cart</button>
        }
        
      </div>
    </div>
  );
}

export default ProductCard;
