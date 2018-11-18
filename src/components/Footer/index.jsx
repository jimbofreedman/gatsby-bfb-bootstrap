import React from 'react';
// import PropTypes from 'prop-types';
import BfbFooter from 'bfb-footer';

import './style.scss';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <BfbFooter />
    </div>
  </div>
);

Footer.propTypes = {
};

export default Footer;
