import React, { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";

const Login =()=>{

    const [username, setUsername]=useState('');
    console.log({username});
    const [password, setPassword]=useState('');
    console.log({password});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async(e)=>{
         setMessage("Awesome!!! Your Login was successfull, you can now view Products.");
         e.preventDefault();
         setIsSubmitted(true);

         const userData = {
            username: username,
            password: password
         }
         console.log({userData});

    
         try{
            const response = await fetch('https://dummyjson.com/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(userData)               
            })
            const result = await response.json();
            console.log(result);
        }
        catch(error){
            console.log(error.message);
        }        
         

    }
    return(

        <div>

            <form className="form" onSubmit={handleSubmit}>
                <h1>Input Your LogIn details</h1>
                <input type="text" placeholder="User Name"/>
                <br /><br />
                <input type="text" placeholder="Password" />
                <br /><br />

                <Link to={`/AllProducts`}> <button  type="submit" className="loginBtn">Login</button></Link> 

            </form>
            {isSubmitted && <p>{message}</p>}


        </div>
    )
}
export default Login;