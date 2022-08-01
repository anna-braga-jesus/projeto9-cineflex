import React from "react";
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header(){
    return (
        <>
            
            <Link to="/"> <header>
                <h1>CINEFLEX</h1>
            </header></Link>
        </>
    )
}