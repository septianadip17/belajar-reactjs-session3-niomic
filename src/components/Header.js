import React, { Component } from "react";

class Header extends Component {
//  ini adalah state dan props
  constructor(props) {
    super(props);
    this.state = {
      daftar: 'Daftar Makanan Nusantara',
      dataList: this.props.list
    }
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(value, e){
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  render() {
    return  (
      <div>
        <h2>Makanan Khas Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        <a href="/" onClick={e => this.handlePesan("Pesan Dari Header", e)}>Halaman Header</a>
      </div>
    )
  }
}

export default Header;
