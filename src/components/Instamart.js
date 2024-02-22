import React, { useState, useEffect } from 'react';
import InstamartCart from './InstamartCart';
import { filterProductData } from '../Utilis/helper';

const Instamart = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  // const [productNodes,setProductNodes]=useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProduct(); 
  }, []);

  async function getProduct() {
    try {
      const data = await fetch("https://www.swiggy.com/api/instamart/home?pageNo=1&layoutId=3173&storeId=1387080&clientId=INSTAMART-APP");
      const json = await data.json();
      console.log(json);
      setProducts(json?.data?.widgets[1]?.data);
      setFilteredProducts(json?.data.widgets[1]?.data);
    } catch(err) {
      console.log(err);
    }
  }
  
  // useEffect(()=>{

  // })
  return (
    <div>
      <div className="search-container p-5 bg-pink-50 my-2 border-4 ">
        <input 
          type="text"
          className="focus:bg-gray-400" 
          placeholder="Search" 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button 
          className="p-2 m-2 bg-purple-400 hover:bg-gray-200 rounded-lg" 
          onClick={() => {
             const data=filterProductData(searchText,products);
             setFilteredProducts(data);
          }}
        >search</button>
      </div>
      <div className='flex flex-wrap'>
        {filteredProducts.map((product) => {
          return(
            
            <InstamartCart key={product.nodeId} {...product} />
          )
          
          })}
      </div>
    </div>
  );
};

export default Instamart;
