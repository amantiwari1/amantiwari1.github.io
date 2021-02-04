const data = require('./data.json');

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `File`) {
        if (node.relativeDirectory=== 'Certification') {
            
            createNodeField({
                name: `title`,
                node,
                value: data[node.base].title,
              })

              createNodeField({
                name: `downloadurl`,
                node,
                value: data[node.base].downloadurl,
              })

        }
        
        
    }
}