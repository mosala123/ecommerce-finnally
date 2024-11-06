import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [catname, setCatname] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then((data) => setCatname(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const fetchProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then((data) => setProducts(data))
      .catch(error => console.error('Error fetching products by category:', error));
  };

  return (
    <div className="container mt-4">
      <h1 className='p-2'>Products</h1>

      <div className='text-center mb-1 ' style={{textTransform:"capitalize"}}>
        {catname.map((cat) => (
          <button 
            style={{ margin: '0 10px',textTransform:"capitalize" }}
            className='btn btn-primary mb-2'
            onClick={() => fetchProductsByCategory(cat)}
            key={cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row p-2">
        {products.map((pro) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={pro.id}>
            <div className="card" style={{ maxHeight: "400px" }}>
              <img
                className="card-img-top"
                src={pro.image}
                alt={pro.title}
                style={{ height: "220px", objectFit: "cover", padding: "10px 0" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {pro.title}
                </h5>
                <p className="card-text">{pro.description.slice(0, 29)}...</p>
                <Link to={`/product/${pro.id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productlist;
