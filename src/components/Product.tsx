import React, { useEffect } from 'react'
import '../css/Product.css';
import Axios from 'axios';
import { useState } from 'react';



function Product() {
const [state, setState] = useState<any>([]);

const abc = () => {
  return (
    alert("Bạn đã thêm vào giỏ hàng thành công")
  )
}


useEffect(() => {
  const getAllProducts = async () => {
    const baseURL = "http://localhost:8888/api/v1/product";
    try {
      const param = {}
      const response = await Axios.post(`${baseURL}/search`, param);
      console.log(response);
      setState(response.data.content)
    }
    catch (err) {
    } 
  } 
  getAllProducts();
}, []);


return (
  <div className='body1'>
    <div className='container-product'>
      {state.map((post: any) => (
          <div className='product'>
            <img src= {post.image} alt="" />
            <h1>{post.name}</h1>
            <h4>{post.productManufacturing}</h4>
            <p>{post.price}</p>
            {/* <input type="button" id="btn" value="Thêm vào giỏ hàng"/> */}
            <button onClick={abc} type="button" className="btn btn-outline-danger">Thêm vào giỏ hàng</button>
          </div>
      ))}
    </div>
  </div>
);


}
export default Product
