import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <div className="card">
            <div className="card--photo">
                <div className="card--status">SOLD OUT</div>
            </div>
            <div className="card--text">
                <div className="rating">5.0 <span className="text--light">(6)·USA</span></div>
                <p className="info"></p>
                <p className="price">From $136 <span className="text--light">/ person</span></p>
            </div>
        </div>
    )
}