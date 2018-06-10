import { Link } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Page2 from '../components/Page2';

const SecondPage = () => (
  <Layout>
    <Container>
      <Page2 />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default SecondPage;

export const query = graphql`
  query QueryForPosts($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      headings {
        depth
        value
      }
      frontmatter {
        title
      }
    }
  }
`;
