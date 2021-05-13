import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const ContentStyles = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  .container div {
    margin: 0 0.5rem;
    height: calc(100vh - 73px);
  }
  .logo {
    padding-top: 0.5rem;
  }
  .post-header h1,
  .page-header h1 {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 2.5rem;
    line-height: 1.2em;
    letter-spacing: -0.2px;
    border-bottom: 1px solid var(--off-black);
    font-weight: bold;
    color: var(--dark-grey);
  }
  .post-header,
  .page-header {
    margin-bottom: 20px;
  }
  .post-meta,
  .page-meta,
  .tags {
    color: var(--off-black);
    text-transform: uppercase;
  }
`;

const Content = ({ children }) => (
  <>
    <ContentStyles>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content">{children}</div>
      </div>
    </ContentStyles>
  </>
);
export default Content;
