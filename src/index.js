import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss'
import Header from './components/Header'
import Home from './pages/Home/index'
import CuratorItem from './components/Curator/index'
import Footer from './components/Footer'
import Slider from './components/Slider';

const CONFIG = {
  city: 'Ferraz de vasconcelos',
  cityAbrev: 'Ferraz',
  state: 'SP'
}

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} state={CONFIG.state} />
      <Home city={CONFIG.cityAbrev} />
      <Slider />
      <CuratorItem />
    </div>
    <Footer />
  </div>,
  document.getElementById('root')
)