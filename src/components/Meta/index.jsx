import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';

const Meta = ({ site, title }) => {
  const siteTitle = get(site, 'title');
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return (
    <Helmet
      title={pageTitle}
      meta={[
        { name: 'description', content: get(site, 'description') },
        { name: 'keywords', content: get(site, 'keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: get(site, 'description') },
        {
          name: 'twitter:image',
          content: `${get(site, 'siteUrl')}/img/twitter_card.jpg`,
        },
        { name: 'twitter:domain', content: get(site, 'siteUrl') },
        { name: 'twitter:creator', content: get(site, 'author') },

        { property: 'og:site_name', content: siteTitle },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: get(site, 'description') },
        { property: 'og:url', content: `${get(site, 'siteUrl')}/profile` },
        {
          property: 'og:image',
          content: `${get(site, 'siteUrl')}/img/profile.jpg`,
        },
      ]}
    />
  );
};

Meta.propTypes = {
  site: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Meta;
