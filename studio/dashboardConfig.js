export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60d628cc43e89500b196aafe',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-meetup-studio',
                  apiId: 'e39a9998-4a25-4092-92aa-0e2c8376f28b'
                },
                {
                  buildHookId: '60d628ccfb2e8500e51296cc',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-meetup',
                  apiId: '2d393def-276e-4448-89c8-5a2cbbfbdaf3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siakaramalegos/sanity-eleventy-meetup',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-meetup.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
