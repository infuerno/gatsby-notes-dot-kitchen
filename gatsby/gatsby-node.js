exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type SanityPost implements Node {
    content: Date
  }
  `;
  createTypes(typeDefs);
};

// exports.onCreateNode = ({ actions }) => {
//   const { createNode } = actions;
//   createNode({
//     // Data for the node.
//     field1: `a string`,
//     field2: 10,
//     field3: true,
//     id: `a-node-id`,
//     parent: `the-id-of-the-parent-node`, // or null if it's a source node without a parent
//     children: [],
//     internal: {
//       type: `CoolServiceMarkdownField`,
//       mediaType: `text/markdown`, // optional
//     },
//   });
// };

// import { remark, html } from "gatsby-transformer-remark";
// // const remark = require(`remark`);
// // const html = require(`remark-html`);

// exports.createSchemaCustomization = ({ actions }) => {
//   // Define the @md tag to mark a field which should be interpreted as markdown
//   // and converted to HTML
//   actions.createFieldExtension({
//     name: "md",
//     args: {
//       sanitize: {
//         type: "Boolean!",
//         defaultValue: true,
//       },
//     },
//     // The extension `args` (above) are passed to `extend` as
//     // the first argument (`options` below)
//     // eslint-disable-next-line no-unused-vars
//     extend(options, prevFieldConfig) {
//       return {
//         args: {
//           sanitize: "Boolean",
//         },
//         resolve(source, args, context, info) {
//           const fieldValue = context.defaultFieldResolver(
//             source,
//             args,
//             context,
//             info
//           );
//           const shouldSanitize =
//             args.sanitize != null ? args.sanitize : options.sanitize;
//           const processor = remark().use(html, { sanitize: shouldSanitize });
//           return processor.processSync(fieldValue).contents;
//         },
//       };
//     },
//   });

//   // Add a type definition for this field which marks
//   // `summary` as a markdown field.
//   actions.createTypes(`
//     type MarkdownRemarkFrontmatter {
//       summary: String @md
//     }
//   `);
// };
