import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import {API} from "./global"
import { useFormik } from "formik";
import * as yup from'yup';


const formValidationSchema=yup.object({
  poster:yup.string().required("fill the poster"),
  name:yup.string().required().max(10,"not more than 20 characters"),
  rating:yup.number().required().min(3),
  category:yup.string().required(),
  price:yup.number().required(),
  description:yup.string().required().max(20),
})


export function Addproduct({productlist,setProductlist}) {
  // const [poster, setPoster] = useState("");
  // const [name, setName] = useState("");
  // const [rating, setRating] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDiscription] = useState("");
  const navigate=useNavigate()

  const createProduct=(newProduct)=>{
    //  fetch(`${API}/products`,{
    //           method:"POST",
    //           body:JSON.stringify(newProduct),
    //           headers:{
    //             "Content-Type":"application/json",
    //           }
    //         }).then(()=>navigate("/products"))

  }
const formik=useFormik({
  initialValues:{poster:"",name:"iphone",rating:"",category:"",price:"",description:""},
  validationSchema:formValidationSchema,
  onSubmit:(newProduct)=>{
    console.log(newProduct)
    // createProduct(newProduct)
  }

})


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="addproductform">
        <TextField
        type="text"
        id="poster"
        name="poster"
        value={formik.values.poster}
        placeholder="Poster..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
           
        />
        {formik.touched.poster&&formik.errors.poster?formik.errors.poster:""}
        <TextField
           type="text"
           id="name"
           name="name"
           value={formik.values.name}
           placeholder="Name..."
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
        />
        {formik.touched.name&&formik.errors.name?formik.errors.name:""}
        <TextField
           type="number"
           id="rating"
           name="rating"
           value={formik.values.rating}
           placeholder="Rating..."
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
        />
        {formik.touched.rating&&formik.errors.rating?formik.errors.rating:""}
        <TextField
           type="text"
           id="category"
           name="category"
           value={formik.values.category}
           placeholder="Category..."
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
        />
                {formik.touched.category&&formik.errors.category?formik.errors.category:""}

        <TextField
           type="number"
           id="price"
           name="price"
           value={formik.values.price}
           placeholder="Price..."
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
        />
                {formik.touched.price&&formik.errors.price?formik.errors.price:""}

        <TextField
           type="text"
           id="description"
           name="description"
           value={formik.values.description}
           placeholder="Description..."
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
        />
                {formik.touched.description&&formik.errors.description?formik.errors.description:""}

        <Button
          style={{ width: "250px", marginLeft: "600px" }}
          variant="outlined"
          onClick={createProduct}
          type="submit"
          // onClick={() => {
          //   const newProduct = {
          //     poster,
          //     name,
          //     rating,
          //     category,
          //     price,
          //     description,
          //   };
          //   fetch(`${API}/products`,{
          //     method:"POST",
          //     body:JSON.stringify(newProduct),
          //     headers:{
          //       "Content-Type":"application/json",
          //     }
          //   }).then(()=>navigate("/products"))

          //   // setProductlist([...productlist, newProduct]);
            
          // }}
          >
          ADD PRODUCT
        </Button>
      </div>
    </form>
  );
}
