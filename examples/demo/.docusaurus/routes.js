import React from 'react'
import ComponentCreator from '@docusaurus/ComponentCreator'

export default [
  {
    path: '/',
    component: ComponentCreator('/', '656'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '813'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '101'),
            routes: [
              {
                path: '/payments',
                component: ComponentCreator('/payments', 'e67'),
                exact: true,
                sidebar: 'docs',
              },
              {
                path: '/',
                component: ComponentCreator('/', '7da'),
                exact: true,
                sidebar: 'docs',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
]
