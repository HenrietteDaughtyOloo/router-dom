import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const productDetails=()=>{
    const{productId}=useParams();
    const[products,setProducts]=useState(null);

    useEffect(()=>{
        const details = async ()=>{
            try{
                const response = await fetch(`https://dummyjson.com/product/${productId}`);
                const data = await response.json();
                setProducts(data);
            }
            catch(error){
                console.error(error);
            }
        };
        details();

     }, [productId]);

     if(!products){
        return <h3>Loading...</h3>;
     }

     return(
        <div>
            <h3>Product Description</h3>
            <div>
                <img src="{product.thumbnail}" alt="{product.title}" />
                <h3>{products.title}</h3>
                <p>{products.brand}</p>
                <p>{products.price}</p>
                <p>{products.rating}</p>
            </div>
        </div>
     )
}
export default productDetails;