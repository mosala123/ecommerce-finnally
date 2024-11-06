import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteProduct } from './Slice'; // Ensure you have a deleteProduct action

const Productslicedetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Convert productId to integer for comparison
    const id = parseInt(productId, 10);
    
    // Access products from Redux store
    const product = useSelector((state) =>
        state.Slice.products.find((item) => item.id === id)
    );

    if (!product) {
        return <div>Product not found!</div>;
    }

    // Handle product deletion
    const handleDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            dispatch(deleteProduct(id)); // Dispatch the delete action
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            );
            navigate('/');
        }
    };

    // Handle product update
    const handleUpdate = () => {
        // Navigate to update page or show an update form
        navigate(`/update-product/${id}`); // Ensure this route exists
    };

    // Calculate the total price
    const totalPrice = product.price; // Assuming price is a single value; adjust if needed

    return (
        <div className="container mt-5 p-3" style={{ marginBottom: "100px" }}>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6 p-4">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h5>Price:<span style={{color:"green",fontWeight:"700",fontSize:"21px"}}>{product.price}$</span>   </h5>
                    
                 
                    <button onClick={() => navigate(-1)} className='btn btn-info mt-2 text-light'>Back</button>
                    <br />
                 
                    <br />
                   
                </div>
            </div>
        </div>
    );
};

export default Productslicedetails;
