import React from "react"
import photo from "../images/troll-face.png"
import "../App.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={photo} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}