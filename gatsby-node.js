const { CertificationData, ProjectData } = require("./src/data.ts")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `File`) {
    if (node.relativeDirectory === "Certification") {
      createNodeField({
        name: `title`,
        node,
        value: CertificationData[node.name].title,
      })

      createNodeField({
        name: `url`,
        node,
        value: CertificationData[node.name].url,
      })
    }

    if (node.relativeDirectory === "Project") {
      createNodeField({
        name: `title`,
        node,
        value: ProjectData[node.name].title,
      })

      createNodeField({
        name: `subtitle`,
        node,
        value: ProjectData[node.name].subtitle,
      })

      createNodeField({
        name: `urlarray`,
        node,
        value: ProjectData[node.name].url,
      })
    }
  }
}
