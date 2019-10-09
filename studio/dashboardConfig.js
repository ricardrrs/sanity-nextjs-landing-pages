export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d9e39c2985af40173eee541',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-coz16yex',
                  apiId: '01c7403d-4ecd-4efa-afe1-a032f3f3fb1f'
                },
                {
                  buildHookId: '5d9e39c1f6bf28018753b6c9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ucfqwtqb',
                  apiId: '438e59d4-5cb0-4e23-85c1-292e3c481e73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ricardrrs/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ucfqwtqb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
