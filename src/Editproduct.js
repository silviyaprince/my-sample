import { useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate,useParams } from "react-router-dom";
import {API} from "./global"



export function Editproduct() {
    const { productid } = useParams();

  

  
    // const product=productlist[productid]
    const [product, setProduct] = useState(null);
    useEffect(()=>{
      fetch(`${API}/products/${productid}`,{
        method:"GET"
      })
      .then((res)=>res.json())
      .then((data)=>setProduct(data))
    },[])
    
  return product?<EditProductForm product={product}/>:"Loading..."
}

function EditProductForm({product}){
    const [poster, setPoster] = useState(product.poster);
  const [name, setName] = useState(product.name);
  const [rating, setRating] = useState(product.rating);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [description, setDiscription] = useState(product.description);
  const navigate=useNavigate()
    return(
        <div>
        <div className="addproductform">
          <TextField
            id="outlined-basic"
            label="poster"
            variant="outlined"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="rating"
            variant="outlined"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="category"
            variant="outlined"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="price"
            variant="outlined"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="description"
            variant="outlined"
            value={description}
            onChange={(event) => setDiscription(event.target.value)}
          />
          <Button
            style={{ width: "250px", marginLeft: "600px" }}
            variant="outlined"
          //   onClick={() => {
          //     const newProduct = {
          //       poster,
          //       name,
          //       rating,
          //       category,
          //       price,
          //       description,
          //     };
          //     fetch(`${API}/products`,{
          //       method:"POST",
          //       body:JSON.stringify(newProduct),
          //       headers:{
          //         "Content-Type":"application/json",
          //       }
          //     }).then(()=>navigate("/products"))
  
          //     // setProductlist([...productlist, newProduct]);
              
          //   }}
          >
            SAVE
          </Button>
        </div>
      </div>
    )
    
}