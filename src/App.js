import React from "react";
import "./App.css";
// import { render } from "react-dom";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';


class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      quotes: '',
      randomQuote: null,
      author:''
    };
  }
  randomQuoteNumber=()=> {
    const randNum = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randNum];
    this.setState({
      randomQuote: randomQuote.quote,
      author: randomQuote.author
    });
  }
  async componentDidMount() {
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quotes: data["quotes"], loading: false });
    window.addEventListener('load', this.randomQuoteNumber);
  }
  
  
 
  
  
  render() {
    return (
      <div id="wrapper">
          <div className="header">Random Quote Generator</div>
          <div className="App" id="quote-box">
              <div className="grid">
            
                
                <div className="text" id="text"><FaQuoteLeft id="left-quote" />{this.state.randomQuote}</div>
              </div>
              <div id="author">- {this.state.author}</div>
              <div className="button-anchor-tag">
                  <a href={`http://twitter.com/intent/tweet?hashtags=quotes&text="${this.state.randomQuote}--${this.state.author} `}   id="tweet-quote"><FaTwitterSquare /></a>
                  <button id="new-quote" onClick={this.randomQuoteNumber}>New Quote</button>
              </div>
          </div>
          <a href="http://jyothiprakash.herokuapp.com/" className="coded_by">by JyothiPrakash K</a>
      </div>
      
    );
  }
}

export default QuoteGenerator;