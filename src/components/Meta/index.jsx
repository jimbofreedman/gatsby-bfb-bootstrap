import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import { siteMetadata } from '../../../gatsby-config';

const Meta = ({ title }) => {
  const siteTitle = get(siteMetadata, 'title');
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return (
    <Helmet
      title={pageTitle}
      meta={[
        { name: 'description', content: get(siteMetadata, 'description') },
        { name: 'keywords', content: get(siteMetadata, 'keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: `@${get(siteMetadata, 'twitter')}` },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: get(siteMetadata, 'description') },
        {
          name: 'twitter:image',
          content: `${get(siteMetadata, 'siteUrl')}/img/twitter_card.jpg`,
        },
        { name: 'twitter:domain', content: get(siteMetadata, 'siteUrl') },
        { name: 'twitter:creator', content: get(siteMetadata, 'author') },

        { property: 'og:site_name', content: siteTitle },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: get(siteMetadata, 'description') },
        { property: 'og:url', content: `${get(siteMetadata, 'siteUrl')}/profile` },
        {
          property: 'og:image',
          content: `${get(siteMetadata, 'siteUrl')}/img/profile.jpg`,
        },
      ]}
    />
  );
};

Meta.propTypes = {
  title: PropTypes.string,
};

Meta.defaultProps = {
  title: null,
};

export default ({ title }) => (
  <Meta title={title} />
);
