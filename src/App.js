import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      working: true
    };
  }
  updateHomer = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const working = this.state.working ? "Homer travaille" : "Homer se repose";
    const workingStyle = this.state.working ? "WorkingYes" : "WorkingNo";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={workingStyle} alt="logo" />
          <h1 className="App-title">
            En ce moment {this.state.working} {working}!
          </h1>
        </header>
        <h1 />
        <button onClick={this.updateHomer}>Click me!</button>
        <p>
          <img
            src={
              this.state.working
                ? "https://cs8.pikabu.ru/images/big_size_comm/2016-06_3/1465952488182154588.jpg"
                : "http://cdn-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/medias-tele/d-oh-homer-simpson-vieillit-bien-278586/5908412-1-fre-FR/D-oh-!-Homer-Simpson-vieillit-bien.png"
            }
          />
        </p>
        <Quote />
        <Lamp />
        <Lamp />
      </div>
    );
  }
}

export default App;
