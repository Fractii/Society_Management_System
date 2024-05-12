import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.get('https://localhost:443/api/user', { params: { email, password } })
            .then(function(response){
                console.log(response.data);
                if (response.data.status === 1) {
                    // Login successful, save user data to localStorage
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    navigate("/profile");
                } else {
                    // Login failed, display error message
                    alert(response.data.message);
                }
            })
            .catch(function(error) {
                // Handle network errors
                console.error('Login error:', error);
            });
    }

    return (
        <>
            <div>
            <form onSubmit={handleSubmit} className="form justify-content-center" style={{ background: 'rgb(0, 38, 77)',marginTop: "40px", marginLeft:'20%', marginRight:'20%', marginBottom:'40px', margin: "0 auto", }}>
                <h2 style={{ color: 'white' }}>LOGIN</h2>
                <p style={{ color: 'white' }}>Please enter your email and password to login.</p>
                <hr></hr>
                <div className="row mb-3">
                    <div  className="mb-5">
                        <label htmlFor="semail" style={{ color: 'white' }}>Society Email:</label>
                        <br />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="semail" id="s_email" placeholder="Society Email" style={{ border: '2px solid rgb(191, 128, 64)', height: '40px', width: '50%', }} required />
                    </div>
                    <div>
                        <label htmlFor="psw" style={{ color: 'white' }}>Password</label>
                        <br />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" id="psw" style={{ border: '2px solid rgb(191, 128, 64)', height: '40px', width: '50%', }} required />
                    </div>
                </div>
                <br />
                <br />
                <p style={{ color: 'white' }}> <b><a href="../src/components/About.js">Forgot password?</a></b> </p>
                <input className="btn btn-lg btn-light" type="submit" value="LOGIN" style={{ border: '2px solid rgb(191, 128, 64)' }} />
                <p style={{ color: 'white', marginBottom: '10px' }}>Don't have account? <b><a href="../signup">Create an account</a></b> </p>
            </form>
            </div>
        </>
    );
}
