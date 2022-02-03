import React from "react";
import "../assets/css/Content.css";

export default function Content() {
  return (
    <section className="content">
      <div className="about">
        <h1>About</h1>
        <p>
          I am an aspiring frontend developer with passion for efficiency and
          feel-good user experience. I am excited for new things to
          learn, and enjoy fresh and unique insights from others.
        </p>
      </div>
      <div className="interests">
        <h1>Interests</h1>
        <ul>
          <li>🍳Occasional chef</li>
          <li>🎒Part-time adventurer</li>
          <li>⚽Avid football lover</li>
          <li>🎮Professional causal gamer</li>
        </ul>
      </div>
    </section>
  );
}
