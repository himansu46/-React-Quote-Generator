import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));

    changeColour();
  };

  useEffect(() => getQuote(), []);
  const randomFunc = [
    "Chocolate",
    "DarkCyan",
    "SeaGreen",
    "gray",
    "DarkSlateGrey",
    "Crimson",
    "Olive",
    "SaddleBrown",
    "purple",
    "teal",
  ];

  const changeColour = () => {
    const i = Math.floor(Math.random() * randomFunc.length);
    const func = randomFunc[i];
    document.body.style.background = func;
  };

  return (
    <div>
      <h1 style={{ color: "#d3d3d3", textAlign: "center", marginTop: "4%" }}>
        QuoteGenerator
      </h1>
      <div className="innerbox">
        <h2>"{quote.content}"</h2>
        <br />
        <div className="author">
          <i>~{quote.author}</i>
        </div>

        <br />
        <hr></hr>
        <button
          onClick={getQuote}
          class="bg-primary text-white quotebutton"
          type="submit"
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
}

export default App;

