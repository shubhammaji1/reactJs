
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [product, setProduct] =useState([]);
    const fetchProduct = async ()=>{
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      if(data && data.product){
        setProduct(data.product);
        }
    };

    console.log(product)

    useEffect(()=>{
      fetchProduct();

    },[])

  return (
   <div>      
      {
        product.length>0 && <div className='product'>
          {
            product.map((currEle)=>{
                <span>{currEle.title}</span>
            })
          }
        </div>
      }

   </div>
  );
}

export default App;
