import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteProduct, updateProductInState } from './Slice';  // Import the necessary actions

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.Slice.cart); // Get cart items

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleDelete = (productId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to remove this item from the cart?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(productId)); // Dispatch delete action
                Swal.fire('Deleted!', 'The product has been removed from the cart.', 'success');
            }
        });
    };

    const handleUpdate = (product) => {
        Swal.fire({
            title: 'Update Product',
            input: 'text',
            inputLabel: 'Enter new quantity',
            inputPlaceholder: 'Quantity',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value || isNaN(value) || value <= 0) {
                    return 'Please enter a valid quantity!';
                }
            }
        }).then((result) => {
            if (result.value) {
                const updatedProduct = { ...product, quantity: parseInt(result.value) };
                dispatch(updateProductInState(updatedProduct)); // Dispatch update action
                Swal.fire('Updated!', 'The product has been updated.', 'success');
            }
        });
    };

    return (
        <div className=" mt-5 p-2">
            <div className="text-right">
                        <h3>Total Price: <span style={{color:"green",fontSize:"22px",fontWeight:"700"}}>{totalPrice.toFixed(2)}  $ </span></h3>
                    </div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => handleUpdate(item)} className="btn btn-warning btn-sm   mb-2" style={{marginRight:"10px"}}>
                                            Update
                                        </button>
                                        <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm  mb-2"  style={{marginRight:"10px"}}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </>
            )}
        </div>
    );
};

export default Cart;
