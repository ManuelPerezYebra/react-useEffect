import { useEffect } from "react"

const UseEffectComponent =()=>{
 
   
   useEffect(()=>{
    
    window.addEventListener('click', printData);

    return ()=>window.removeEventListener('click', printData);
     
   },[]);
        
  
    return <>
         <h1>Use Effect</h1>
       
         
    </>
   
};
const printData =event=>{
    console.log(event);
};

// // const fetchData = async (url, setData)=>{
// //     try{
// //         const response = await fetch (url);
// //         const data = await response.json();
// //         setData(data)
// //     }catch(err){
// //         console.error(err)
// //     }
// }
export default UseEffectComponent