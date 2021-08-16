import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

function Header(props) {
  const navList = props.categoriesData.map((nav) => {
    return (
      <NavLink
        key={nav.route}
        className="menu-link"
        to={nav.route}
        activeClassName="menu-link--selected"
        exact
      >
        {nav.label}
      </NavLink>)
  });

  const changeZenMode = (event) => {
    props.setZenMode();
    console.log('zen', event.target);
  }
  return (
    <header className="menu">
      <nav>
        {navList}
        <button className="menu-btn" type="button" onClick={changeZenMode}>Activer le mode zen</button>
      </nav>
    </header>
  )
};
Header.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  setZenMode: PropTypes.func.isRequired,
}


export default Header;
