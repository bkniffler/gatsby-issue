import { Link, StaticQuery } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';

const SecondPage = () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
              html
              htmlAst
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <Layout>
        <Container>
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
        </Container>
      </Layout>
    )}
  />
);

export default SecondPage;
