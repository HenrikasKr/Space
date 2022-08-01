import React from "react";
import './Footer.css'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const routeChange = () =>{ 
        navigate(`/login`);
      }
    return (
        <footer className="page-footer">
            <button className="admin-login" onClick={routeChange}>
                Admin Login
            </button>
        </footer>
    )
}

export default Footer;