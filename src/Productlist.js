import {Product} from "./Product";
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {INITIAL_PRODUCT_LIST } from "./App";
import { useState ,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {API} from "./global"
import { useNavigate } from "react-router-dom";

export function Productlist(){
  const styles={
    borderColor:"red",
    width:"600px",
}
const [productlist, setProductlist] = useState([]);
const navigate=useNavigate()
const getProducts=()=>{
  fetch(`${API}/products`,{
    method:"GET"
  })
  .then((res)=>res.json())
  .then((data)=>setProductlist(data))
}
useEffect(()=>getProducts(),[])
 return(
     
      <div className="product-list">
        {productlist.map((pd,index)=>(
           <Product key={pd.id} product={pd} id={pd.id} deleteButton={ <IconButton color="primary" aria-label="delete" onClick={() =>{fetch(`${API}/products/${pd.id}`,{
            method:"DELETE"
          })
        .then(()=>getProducts())} }><DeleteOutlineIcon/></IconButton>}
        editButton={ <IconButton color="secondary" aria-label="edit" onClick={() =>navigate(`/products/edit/${pd.id}`) }><ModeEditIcon/></IconButton>}/>
        ))}
      </div>
     
    
  );
}
