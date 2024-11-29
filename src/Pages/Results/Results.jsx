import { useState, useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard'


function Results () {
    const [results, setResults] = useState([]);
    const {categoryName} = useParams()
    // console.log(categoryName)

    useEffect(()=>{
          axios
            .get(`${productUrl}/products/category/${categoryName}`)
            .then((res) => {
              setResults(res.data);
                           
            })
            .catch((err) => {
              console.log(err);
            });


    },[])
//  console.log(results);
  
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }} category></p>
        <hr />

          <div className={classes.products_container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />;
            })}
          </div>
      </section>
    </LayOut>
  );
}


export default Results