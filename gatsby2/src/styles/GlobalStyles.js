import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root {
     --deep-pink: #d33682;
     --deep-pink-half: #e072a8;
     --black: #000;
     --off-black: #272727;
     --dark-grey: #444;
     --white: #fff;
     --off-white: #bfbfbf;
 }

/* MOVE THIS TO THE RIGHT PLACE IFFFFFF REQUIRED */
/* ensure no images are larger than 600px */
img {
  max-width: 600px;
}

article {
  margin-bottom: 50px;
}

/* HEADERS */
.post-header h1, .page-header h1 {
  margin-top: 30px;
  margin-bottom: 0;
}

.post-header, .page-header {
  margin-bottom: 20px;
}

.post-meta, .page-meta, .tags {
  color: #272727;
  text-transform: uppercase;
}
/* END */

h1,
h2 {
  color: #444;
  font-weight: bold;
}

h1 {
  font-size: 2.4rem;
  line-height: 1.2em;
  letter-spacing: -0.2px;
  border-bottom: 1px solid #444;
}

h2 {
  font-size: 1.7rem;
  letter-spacing: -0.4px;
  border-bottom: 1px dotted #d33682;
}

h3 {
  font-size: 1.5rem;
  letter-spacing: -0.4px;
}

/* NOTES */
.note {
  background-color: #fafeff;
  border-top: 1px dotted #00a3d9;
  border-bottom: 1px dotted #00a3d9;
  font-style: italic;
  padding: 0.5rem;
  margin: 1.5rem 0;
}

/* TABLES */
table {
  font-size: .92rem;
}

th, td {
  padding: 8px 10px;
  text-align: left;
  border-bottom: 1px #ccc solid;
}

th {
  font-weight: bold;
  vertical-align: middle;
  background: #eee;
  border-bottom: 2px #ccc solid;
}

/* LINKS */
a {
  color: #12c;
  text-decoration: underline;
}

a:hover, a:active {
  color: #d33682;
}

a:notused {
  color: #009688;
}

h1 a, h1 a:visited {
  text-decoration: none;
  color: #333;
}

h1 a:hover {
  text-decoration: underline;
  color: #d33682;
}
`;

export default GlobalStyles;
