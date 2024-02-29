import { useState, useEffect } from "react";
import LayOut from "../../components/LayOut/LayOut"
import classes from "./Results.module.css";
import { useParams } from "react-router-dom"
import axios from "axios";
import {productUrl} from '../../Api/endPoints'
import ProductCard from "../../components/Product/ProductCard";
function Results() {
  const {categoryName} = useParams(); 
  const [results, setResults] = useState([]);

  useEffect(() => {
  axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      })}, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "38px" }}>Category / {categoryName}</p>
        <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />
            ))}
          </div>
      </section>
    </LayOut>
  )
}

export default Results