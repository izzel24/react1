import React, { useState,useEffect } from "react";
import "./quotes.scss";
import x from "./img/twitter.png";



function Quotes(){
    const[text,setText] = useState("");
    const[author,setAuthor] = useState("");

    const randQuotes = () => {
        fetch("https://api.api-ninjas.com/v1/quotes?category=happiness",{
            headers: {
                "X-Api-Key" : process.env.REACT_APP_API_KEY
            }
        })
        .then(Response => Response.json())
        .then(data => {
            const rand = Math.floor(Math.random()*data.length)
            setText(data[rand].quote)
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
                <a href={`https://twitter.com/intent/tweet?text=${text1}${author1}`} target="_blank" id="tweet-quote"><img src={x} alt="share-x"/></a>
            </div>
        </div>
)
}
export default Quotes;