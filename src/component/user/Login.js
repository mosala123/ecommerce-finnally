import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container" style={{ marginTop: "93px", padding: "20px" }}>
            <h2>Login</h2>
            <form style={{ marginBottom: "40px ", border: "1px solid #ccc", padding: "30px ", margin: "30px auto", borderRadius: "10px" }}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" placeholder="please enter username" className="form-control" id="username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" placeholder="please enter password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
