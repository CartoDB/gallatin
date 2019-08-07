import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import HeaderToggle from './header/HeaderToggle'
import HeaderLink from './header/HeaderLink'
import Avatar from './Avatar'

class Header extends Component {

  constructor(props) {
    super(props);
      this.state = {
        ...props
      }

  }

  render() {
    return(
      <header className="as-toolbar">
        <HeaderToggle />
      <div className="as-toolbar__group">
      <div className="as-toolbar__item">
        <img src="https://www.gallatinrealtors.com/images/GAR/GAR-logo-at-top.jpg" style={{width: "88px"}} alt="GAR" />
      </div>
        <nav className="as-toolbar__actions">
          <ul>
            <HeaderLink name='Home' link='/' />
            <HeaderLink name='Help' link='/' />
          </ul>
        </nav>
      </div>

      <div className="as-toolbar__item as-body">
        <i className="as-icon-settings as-subheader as-m--0"></i>
      </div>

    </header>
    );
  }
}


const mapStateToProps = state => ({
  client: state.client,
  map: state.map,
  layers: state.layers,
  viewport: state.viewport,
  boundingbox: state.boundingbox
});

const mapDispatchToProps = dispatch => ({
  setNeighbourhoods: selected => dispatch(setNeighbourhoods(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
