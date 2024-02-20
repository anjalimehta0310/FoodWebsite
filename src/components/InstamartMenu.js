// import { useEffect, useState } from "react"

// const InstamartMenu=()=>{
    
//     cosnt [dataProduct,setDataProduct]=useState([]);
//     useEffect(()=>{
//         DataProduct();
//     },[]);

//     async function DataProduct(){
//         const data=await fetch("https://www.swiggy.com/api/instamart/home?pageNo=1&layoutId=3173&storeId=1387080&clientId=INSTAMART-APP");
//         const json=data.json();
//         console.log(json);
//         setDataProduct(json?.data?.widgets[1]?.data.nodes);
//     }
// }
// export default InstamartMenu;
