import React, { Component } from "react";
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import List from "./components/List";
import Top from "./components/Top";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik"/>
        <Top/>
        <Main/>
        <List/>
        <Footer name='Makanan Nusantara' tahun='1998'/>
      </div>

    );
  }
}

export default App;
