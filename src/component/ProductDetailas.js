import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
const ProductDetailas = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState(null);
const navigate=useNavigate()


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container p-3 mt-5" style={{marginTop:"60px"}}>
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={details.image}
            alt={details.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover',textAlign:"center" }}
          />
        </div>
        <div className="col-md-6   p-4">
          <h3 className="text-primary">{details.title}</h3>
          <p className="text-muted">{details.description}</p>
          <h4 className="text-danger">
            <strong className='text-dark'>Price:</strong>  {details.price} $
          </h4>
          <button className="btn btn-success mt-3" onClick={()=>navigate(-1)}>Go To Home Page</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailas;
