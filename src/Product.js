import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import InfoIcon from '@mui/icons-material/Info';

export function Product({ product,id,deleteButton,editButton }) {
    const styles = {
      color: product.rating > 7 ? "green" : "red",
    };
    const [show, setShow] = useState(true);
    //
    const navigate=useNavigate()
    return (
      <div>
        <div className="product-container">
          <img className="product-poster" src={product.poster} alt="img1" />
          <div className="product-spec">
            <h3 className="product-name">{product.name}-{id}</h3>
            <h3 style={styles} className="product-rating">
              ⭐{product.rating}
            </h3>
          </div>
<div className="product-info">
          <IconButton color="primary" aria-label="toggle" onClick={() => setShow(!show)}> 
            {show?<ArrowDropUpIcon/>:<ArrowDropDownOutlinedIcon/>}</IconButton>
            <IconButton color="primary" aria-label="info" onClick={() =>navigate("/products/"+id) }><InfoIcon/></IconButton>
          {show ? (
            <p className="product-description">{product.description}</p>
          ) : null}
          </div>
          
          <div className="product-cat">
            <h3 className="product-price">{product.price}</h3>
            <h3 className="product-category">{product.category}</h3>
          </div>
        </div>
        
          <div>
          <Counter/>
          {deleteButton}
        {editButton}
       
        </div>
      </div>
    );
  }

