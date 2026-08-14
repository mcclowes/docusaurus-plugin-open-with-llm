'use strict'
;(self.webpackChunkdocusaurus_plugin_open_with_llm =
  self.webpackChunkdocusaurus_plugin_open_with_llm || []).push([
  [976],
  {
    6987(e, t, n) {
      ;(n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => d,
        }))
      const s = JSON.parse(
        '{"id":"intro","title":"Developer docs","description":"These example docs show the Open with AI menu in context. Open the menu above to copy this page as Markdown, view the source, or send its URL to an LLM.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/","permalink":"/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/","sidebar_position":1,"title":"Developer docs"},"sidebar":"docs","next":{"title":"Accept a payment","permalink":"/payments"}}'
      )
      var o = n(1276),
        i = n(8793)
      const r = { slug: '/', sidebar_position: 1, title: 'Developer docs' },
        a = 'Build with Acme',
        c = {},
        d = [{ value: 'Try the widget', id: 'try-the-widget', level: 2 }]
      function h(e) {
        const t = {
          a: 'a',
          h1: 'h1',
          h2: 'h2',
          header: 'header',
          p: 'p',
          strong: 'strong',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.header, {
              children: (0, o.jsx)(t.h1, { id: 'build-with-acme', children: 'Build with Acme' }),
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'These example docs show the ',
                (0, o.jsx)(t.strong, { children: 'Open with AI' }),
                ' menu in context. Open the menu above to copy this page as Markdown, view the source, or send its URL to an LLM.',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, { id: 'try-the-widget', children: 'Try the widget' }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                'The Markdown copy is served as a static file, just as it would be after a documentation export step in a production site.',
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'Continue to ',
                (0, o.jsx)(t.a, { href: '/payments', children: 'accepting a payment' }),
                ' to try it on another route.',
              ],
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e)
      }
    },
    8793(e, t, n) {
      n.d(t, { R: () => r })
      var s = n(5952)
      const o = {},
        i = s.createContext(o)
      function r(e) {
        const t = s.useContext(i)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
    },
  },
])
