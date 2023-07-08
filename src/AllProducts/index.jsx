import React, { useState, useEffect } from "react";
import './style.css'
import { Link } from "react-router-dom";

const AllProducts = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    //     (async()=>{
    //         await getAllProducts();
    //     })();
    // }, []);


    const getAllProducts = async()=>{
        try{
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
        
            setProducts(result.products);
            setLoading(false);
    }
    catch(error){
        console.log(error.message);
    }
};
getAllProducts();
    },[]);
    console.log({products});


if (loading){
    return <h1>Loading ...</h1>

}
return(
    <div className="displays">
        <h1 className="head1">Available Products</h1>
        <div className="display">
            {products.map((item)=>(
                <div className="details" key={item.id}>
          <img  src={item.images[0]} alt={item.title} className="productimage" />
                    <h3 className="title">{item.title}</h3>
                    <h3 className="price">{item.price}</h3>
                    <h4 className="discount">{item.discountPercentage}</h4> 
                    <Link to={`/productDetails/${item.id}`} key={item.id}> 
                    <button className="viewProduct">View Product</button> </Link>

                    </div>
            ))}
        </div>
        <Link to={`/form`} ><button className="button-add">Add Product</button></Link>      

    </div>
)
};
export default AllProducts;