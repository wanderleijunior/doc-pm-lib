const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Pm-Lib',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/doc-pm-lib/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2d68c3' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */


  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guia',
        link: '/guia/',
      },
      {
        text: 'Componentes',
        link: '/components/'
      },
      {
        text: 'Classes',
        link: '/classes/'
      },
      {
        text: 'Changelog',
        link: '/changelog/'
      },
    ],
    sidebar: {
      '/guia/': [
        {
          title: 'Guia',
          collapsable: false,
          children: [
            '',
            'instalation',
            'configuration',
          ]
        }
      ],
      '/components/': [
        {
          title: 'Componentes',
          collapsable: true,
          children: [
            '',
            'pm-form-save'
          ]
        }
      ],
      '/classes/': [
        '',
        {
          title: 'Controllers',
          collapsable: true,
          children: [
            {
              title: 'pmLibUtilController',
              collapsable: false,
              path: '/classes/controllers/pmLibUtilController.html'
            },
          ]
        },
        {
          title: 'Services',
          collapsable: true,
          children: [
            {
              title: 'PmLibAlertService',
              collapsable: false,
              path: '/classes/services/pmLibAlertService.html'
            },
            {
              title: 'PmLibDialogService',
              collapsable: false,
              path: '/classes/services/pmLibDialogService.html'
            },
            {
              title: 'PmLibHttp',
              collapsable: false,
              path: '/classes/services/pmLibHttp.html'
            },
            {
              title: 'PmLibInstance',
              collapsable: false,
              path: '/classes/services/pmLibInstance.html'
            },
            {
              title: 'PmLibValidations',
              collapsable: false,
              path: '/classes/services/pmLibValidations.html'
            },
          ]
        },
        {
          title: 'Utilities',
          collapsable: true,
          children: [
            {
              title: 'pmLibUtil',
              collapsable: false,
              path: '/classes/utilities/pmLibUtil.html'
            },
          ]
        }
      ],
      '/services/': [
        {
          title: 'Serviços',
          collapsable: false,
          children: [
            '',
            'tekLibAuth',
          ]
        }
      ],
      '/changelog/': [
        {
          title: 'Changelog',
          collapsable: false,
          children: [
            '',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
