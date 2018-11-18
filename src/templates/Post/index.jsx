import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import map from 'lodash/map';
import Img from 'gatsby-image';

import Adsense from '../../components/Adsense';
import './style.scss';

const getAd = (isIndex, adsense) =>
  !isIndex ? <Adsense clientId={adsense} slotId="" format="auto" /> : '';

const getDescription = body => {
  let description = body.replace(
    /<blockquote>/g,
    '<blockquote class="blockquote">'
  );
  if (description.match('<!--more-->')) {
    description = description.split('<!--more-->');
    if (typeof description[0] !== 'undefined') {
      return description[0];
    }
  }
  return description;
};

const Button = ({ path, label, primary }) => (
  <Link className="readmore" to={path}>
    <span
      className={`btn btn-outline-primary btn-block ${
        primary ? 'btn-outline-primary' : 'btn-outline-secondary'
      }`}
    >
      {label}
    </span>
  </Link>
);

Button.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
};

const Badges = ({ items, primary }) =>
  map(items, (item, i) => (
    <span
      className={`badge ${primary ? 'badge-primary' : 'badge-secondary'}`}
      key={i} // eslint-disable-line react/no-array-index-key
    >
      {item}
    </span>
  ));

Badges.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};

const Post = ({ data, options }) => {
  const {
    category,
    tags,
    description,
    title,
    path,
    date,
    image,
  } = data.frontmatter;
  const { isIndex, adsense } = options;
  const html = get(data, 'html');
  const isMore = isIndex && !!html.match('<!--more-->');
  const fixed = get(image, 'childImageSharp.fixed');

  return (
    <div className="article" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            <h1>{title}</h1>
            <time dateTime={date}>{date}</time>
          </Link>
          {Badges({ items: [category], primary: true })}
          {Badges({ items: tags })}
        </div>
        <div className="content">
          <p>{description}</p>
          {fixed ? (
            <Img fixed={fixed} style={{ display: 'block', margin: '0 auto' }} />
          ) : (
            ''
          )}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: isMore ? getDescription(html) : html,
          }}
        />
        {isMore ? Button({ path, label: 'MORE', primary: true }) : ''}
        {getAd(isIndex, adsense)}
      </div>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};

export default Post;
