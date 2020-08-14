export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f3633ffe1428aae814ef31e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-roe1ci3u',
                  apiId: '2b37a5a4-e2bc-4180-ae2d-109927e9a3cd'
                },
                {
                  buildHookId: '5f3633ffc614e980b98d946c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zvjatcze',
                  apiId: '9c8baf9d-e2a4-4a1b-8812-3ddc9b90a4d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dansiver/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zvjatcze.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
