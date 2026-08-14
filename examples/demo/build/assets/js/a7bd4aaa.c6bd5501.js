'use strict'
;(self.webpackChunkdocusaurus_plugin_open_with_llm =
  self.webpackChunkdocusaurus_plugin_open_with_llm || []).push([
  [98],
  {
    8131(n, e, s) {
      ;(s.r(e), s.d(e, { default: () => d }))
      s(5952)
      var r = s(9956)
      function o(n, e) {
        return 'docs-' + n + '-' + e
      }
      var i = s(905),
        t = s(2451),
        u = s(2959),
        a = s(1276)
      function c(n) {
        var e = n.version
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(u.A, { version: e.version, tag: o(e.pluginId, e.version) }),
            (0, a.jsx)(r.be, {
              children:
                e.noIndex && (0, a.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }),
            }),
          ],
        })
      }
      function l(n) {
        var e = n.version,
          s = n.route
        return (0, a.jsx)(r.e3, {
          className: e.className,
          children: (0, a.jsx)(i.n, { version: e, children: (0, t.v)(s.routes) }),
        })
      }
      function d(n) {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c, Object.assign({}, n)), (0, a.jsx)(l, Object.assign({}, n))],
        })
      }
    },
  },
])
