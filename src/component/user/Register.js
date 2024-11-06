import React from 'react';

const Register = () => {
    return (
        <div className="container" style={{ marginTop: "90px", padding: "20px" }}>
            <form className="p-4 border rounded" style={{ borderColor: "#ccc", marginBottom: "30px" }}>
                <h2 className="mb-4">Create New Account</h2>
                
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                </div>
    
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;
