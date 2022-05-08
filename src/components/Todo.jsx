import {
  useEffect,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Link } from 'react-router-dom';

import { addtodo } from './action';

export const Todo = () => {
  const todos = useSelector((store) => store.todos);
  const [text, setText] = useState("");
  
   const [data,setData]=useState([])

  const dispatch = useDispatch();
  const addtask = () => {
    dispatch(
      addtodo({
        title: text,
        status: false,
        detail:"",
      })
    );
    handleSubmit()
  };
  const handleSubmit=async (e)=>{
    // e.preventDefault();
    try{
   await fetch(`http://localhost:8080/posts`,{
        method:"POST",
        body : JSON.stringify({title:text,status:false,detail:""}),
        headers : {"Content-Type" : "application/json"}
    })
    getdata();
   }
   catch(err){
       console.log(err)
   }
   }

   const getdata=async()=>{
    try{
         let data=await fetch("http://localhost:8080/posts");
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

const deletetask=async(e)=>{
    try{
        await fetch(`http://localhost:8080/posts/${e}`,{
             method:"DELETE",
             body : JSON.stringify({title:text,status:false}),
             headers : {"Content-Type" : "application/json"}
         })
         getdata();
        }
        catch(err){
            console.log(err)
        }
}
  return (
    <div>
      <input
        type="text"
        placeholder="Eneter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addtask}>ADD</button>
      {data.map((t) => (
         <div>
        <Link to={`/todo/${t.id}`}><div key={t.title}>{t.title}</div></Link>
        <button onClick={()=>{
           deletetask(t.id)
        }}>delete</button>
        </div>
      ))}
    </div>
  );
};
