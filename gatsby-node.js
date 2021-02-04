
const data = {
    "dataanalyst.jpg": {
        title: "data science certication"
    },
    "datamanipulation.jpg": {
        title: "data science certication"
    },
    "datascience.jpg": {
        title: "data science certication"
    },
    "machinelearning.jpg": {
        title: "data science certication"
    },
    "python.jpg": {
        title: "data science certication"
    },
    "pythonprogrammer.jpg": {
        title: "data science certication"
    },
    "cloudarchitecture.jpg": {
        title: "data science certication"
    },
    "cloudengineering.jpg": {
        title: "data science certication"
    },
    "googleitautomation.jpg": {
        title: "data science certication"
    },
    "googleitsupport.jpg": {
        title: "data science certication"
    },
    "k8s.jpg": {
        title: "data science certication"
    },
}

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `File`) {
        if (node.relativeDirectory=== 'Certification') {
            
            createNodeField({
                name: `title`,
                node,
                value: data[node.base].title,
              })

        }
        
        
    }
}