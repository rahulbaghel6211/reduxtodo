import { useParams ,Navigate} from "react-router-dom";
import { useEffect, useState} from "react";

export const Tododetails=()=>{
    const {id}=useParams();
   const [det,setDetail]=useState("")
   const [data,setData]=useState([]);
   const handleset =async()=>{
    try{
        await fetch(`http://localhost:8080/posts/${id}`,{
             method:"PATCH",
             body : JSON.stringify({detail:det}),
             headers : {"Content-Type" : "application/json"}
         })
         
        }
        catch(err){
            console.log(err)
        }
   }
   const getdata=async()=>{
    try{
         let data=await fetch(`http://localhost:8080/posts/${id}`);
            data=await data.json();
         //console.log(data)
         setData(data);
    }catch(err){
        console.log(err)
    }
}
useEffect(() => {
    getdata();
}, []);
    return (
        <div>
            <input type="text" onChange={(e)=>setDetail(e.target.value)} placeholder="add task detail"/>
            <button onClick={handleset}>Add Details</button>

            
                <div>
                    <div>{data.title}</div>
                    <div>{data.detail}</div>
                </div>
           
        </div>
    )
}