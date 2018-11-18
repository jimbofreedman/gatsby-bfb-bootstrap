import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Page = ({ data }) => (
  <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
);

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Page;
