import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Post from '../templates/Post';
import Meta from '../components/Meta';
import Layout from '../components/Layout';

const Index = ({ data, location }) => {
  const posts = get(data, 'remark.posts');
  return (
    <Layout location={location}>
      <Meta />
      {posts.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true,
          }}
          key={i} // eslint-disable-line react/no-array-index-key
        />
      ))}
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
