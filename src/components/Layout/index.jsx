import React from 'react';
// import PropTypes from 'prop-types';
import emergence from 'emergence.js';

import Navi from '../Navi';
import Footer from '../Footer';
import { siteMetadata } from '../../../gatsby-config';

import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import '../../scss/gatstrap.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

class Layout extends React.Component {
  componentDidMount() {
    emergence.init();
  }

  componentDidUpdate() {
    emergence.init();
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    );
  }
}

Layout.propTypes = {};

export default Layout;
