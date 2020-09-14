export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6002df6fed700113329663',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yrns259u',
                  apiId: '6975bd33-5d0b-4b60-9a8b-4569e0b37862'
                },
                {
                  buildHookId: '5f6002dfa956c3012adbe80a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y9row66g',
                  apiId: 'dd892789-56db-46d3-95ac-406e196e4647'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tszhoip/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y9row66g.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
