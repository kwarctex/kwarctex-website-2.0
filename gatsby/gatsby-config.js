// IF this file is empty, some people report that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
module.exports = {
    siteMetadata: {
        title: 'Kwarctex website',
        description: 'Oficjalny przedstawiciel firmy Belenco®',
    },
    plugins: [
        {
          resolve: "gatsby-plugin-react-svg",
          options: {
            rule: {
              include: /assets/
            }
          }
        }
      ],
}
