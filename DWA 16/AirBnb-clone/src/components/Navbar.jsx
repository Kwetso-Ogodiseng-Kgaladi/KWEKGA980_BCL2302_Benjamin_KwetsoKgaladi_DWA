import React from "react"
import photo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={photo} className="nav--logo" />
        </nav>
    )
}