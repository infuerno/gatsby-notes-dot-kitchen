import React from "react";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query IndexPageQuery {
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          title
          publishedAt
          slug {
            current
          }
          author {
            name
          }
          categories {
            title
            description
          }
          content
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const posts = data.posts.edges;
  return posts.map(({ node }) => (
    <article className="post" key={node.id}>
      <header className="post-header">
        <h1 className="post-title">
          <Link to={`/${node.slug.current}`}>{node.title}</Link>
        </h1>
        <section>
          <time>
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(node.publishedAt))}
          </time>
        </section>
      </header>
      <section className="page-content">{node.content}</section>
    </article>
  ));
};

export default HomePage;
