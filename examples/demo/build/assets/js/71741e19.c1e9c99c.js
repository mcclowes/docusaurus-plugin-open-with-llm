'use strict'
;(self.webpackChunkdocusaurus_plugin_open_with_llm =
  self.webpackChunkdocusaurus_plugin_open_with_llm || []).push([
  [594],
  {
    6641(e, t, n) {
      ;(n.r(t),
        n.d(t, {
          assets: () => i,
          contentTitle: () => o,
          default: () => m,
          frontMatter: () => c,
          metadata: () => a,
          toc: () => p,
        }))
      const a = JSON.parse(
        '{"id":"payments","title":"Accept a payment","description":"Create a payment intent, collect a payment method, then confirm the payment.","source":"@site/docs/payments.md","sourceDirName":".","slug":"/payments","permalink":"/payments","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Accept a payment"},"sidebar":"docs","previous":{"title":"Developer docs","permalink":"/"}}'
      )
      var s = n(1276),
        r = n(8793)
      const c = { sidebar_position: 2, title: 'Accept a payment' },
        o = 'Accept a payment',
        i = {},
        p = []
      function d(e) {
        const t = {
          code: 'code',
          h1: 'h1',
          header: 'header',
          p: 'p',
          pre: 'pre',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.header, {
              children: (0, s.jsx)(t.h1, { id: 'accept-a-payment', children: 'Accept a payment' }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Create a payment intent, collect a payment method, then confirm the payment.',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-js',
                children:
                  "const payment = await acme.payments.create({\n  amount: 2400,\n  currency: 'GBP',\n})\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The widget gives readers the raw version of this page without navigation, styling, or other page chrome.',
            }),
          ],
        })
      }
      function m(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e)
      }
    },
    8793(e, t, n) {
      n.d(t, { R: () => c })
      var a = n(5952)
      const s = {},
        r = a.createContext(s)
      function c(e) {
        const t = a.useContext(r)
        return a.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
    },
  },
])
