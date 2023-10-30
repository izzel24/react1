import React, { useState,useEffect } from "react";
import "./quotes.scss";
import x from "./img/twitter_x_new_logo_square_x_icon_256075.png";



function Quotes(){
    const[text,setText] = useState("");
    const[author,setAuthor] = useState("");

    const randQuotes = () => {
        fetch("https://type.fit/api/quotes")
        .then(Response => Response.json())
        .then(data => {
            const rand = Math.floor(Math.random()*data.length)
            setText(data[rand].text)
            setAuthor(data[rand].author)
        })
    }
    useEffect ( () => {
        randQuotes();
    },[]);
    const text1 = '"'+text+'"';
    const author1 = '-'+author+'-';
return(
        <div id="quote-box">
            <h4 id="text">{text1}</h4>
            <p id="author">{author1}</p>
            <div className="container">
                <button id="new-quote" className="onecolor" onClick={randQuotes}>More</button>
                <a href={`https://twitter.com/intent/tweet?text=${text1}${author1}`} target="_blank"><img src={x} alt="share-x"/></a>
            </div>
        </div>
)
}
export default Quotes;