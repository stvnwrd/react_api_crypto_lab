import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import CryptoList from '../components/CryptoList.js'
import CryptoDetail from '../components/CryptoDetail.js'

class CryptoContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleCurrencySelected = this.handleCurrencySelected.bind(this);
    this.state ={
      currencies: [],
      currentCurrency: ""
    };
  }


  componentDidMount(){
    fetch('https://coinbin.org/coins')
    .then(response => response.json())
    .then(json => this.setState({currencies:json.coins}));
  }

  handleCurrencySelected(currency){

    const selectCurrency = this.state.currencies[currency];
    this.setState({currentCurrency: selectCurrency})
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <CryptoList
          currencies={this.state.currencies}
          onCurrencySelected ={this.handleCurrencySelected}
        />
        <CryptoDetail currency={this.state.currentCurrency} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default CryptoContainer;
