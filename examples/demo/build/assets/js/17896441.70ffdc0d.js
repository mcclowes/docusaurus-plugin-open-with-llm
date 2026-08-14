/*! For license information please see 17896441.70ffdc0d.js.LICENSE.txt */
'use strict'
;(self.webpackChunkdocusaurus_plugin_open_with_llm =
  self.webpackChunkdocusaurus_plugin_open_with_llm || []).push([
  [401],
  {
    1103(e, n, t) {
      ;(t.r(n), t.d(n, { default: () => E }))
      var r = t(5952),
        o = t(9956),
        i = t(8259),
        a = t(1276),
        c = r.createContext(null)
      function u(e) {
        var n = e.children,
          t = (function (e) {
            return (0, r.useMemo)(
              function () {
                return {
                  metadata: e.metadata,
                  frontMatter: e.frontMatter,
                  assets: e.assets,
                  contentTitle: e.contentTitle,
                  toc: e.toc,
                }
              },
              [e]
            )
          })(e.content)
        return (0, a.jsx)(c.Provider, { value: t, children: n })
      }
      function s() {
        var e,
          n = (function () {
            var e = (0, r.useContext)(c)
            if (null === e) throw new i.dV('DocProvider')
            return e
          })(),
          t = n.metadata,
          u = n.frontMatter,
          s = n.assets
        return (0, a.jsx)(o.be, {
          title: t.title,
          description: t.description,
          keywords: u.keywords,
          image: null != (e = s.image) ? e : u.image,
        })
      }
      function l(e, n, t, r) {
        var o = Object.defineProperty
        try {
          o({}, '', {})
        } catch (e) {
          o = 0
        }
        ;((l = function (e, n, t, r) {
          function i(n, t) {
            l(e, n, function (e) {
              return this._invoke(n, t, e)
            })
          }
          n
            ? o
              ? o(e, n, { value: t, enumerable: !r, configurable: !r, writable: !r })
              : (e[n] = t)
            : (i('next', 0), i('throw', 1), i('return', 2))
        }),
          l(e, n, t, r))
      }
      function d() {
        var e,
          n,
          t = 'function' == typeof Symbol ? Symbol : {},
          r = t.iterator || '@@iterator',
          o = t.toStringTag || '@@toStringTag'
        function i(t, r, o, i) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype)
          return (
            l(
              s,
              '_invoke',
              (function (t, r, o) {
                var i,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (n, t) {
                      return ((i = n), (c = 0), (u = e), (f.n = t), a)
                    },
                  }
                function p(t, r) {
                  for (c = t, u = r, n = 0; !d && s && !o && n < l.length; n++) {
                    var o,
                      i = l[n],
                      p = f.p,
                      h = i[2]
                    t > 3
                      ? (o = h === r) && ((u = i[(c = i[4]) ? 5 : ((c = 3), 3)]), (i[4] = i[5] = e))
                      : i[0] <= p &&
                        ((o = t < 2 && p < i[1])
                          ? ((c = 0), (f.v = r), (f.n = i[1]))
                          : p < h &&
                            (o = t < 3 || i[0] > r || r > h) &&
                            ((i[4] = t), (i[5] = r), (f.n = h), (c = 0)))
                  }
                  if (o || t > 1) return a
                  throw ((d = !0), r)
                }
                return function (o, l, h) {
                  if (s > 1) throw TypeError('Generator is already running')
                  for (d && 1 === l && p(l, h), c = l, u = h; (n = c < 2 ? e : u) || !d; ) {
                    i || (c ? (c < 3 ? (c > 1 && (f.n = -1), p(c, u)) : (f.n = u)) : (f.v = u))
                    try {
                      if (((s = 2), i)) {
                        if ((c || (o = 'next'), (n = i[o]))) {
                          if (!(n = n.call(i, u)))
                            throw TypeError('iterator result is not an object')
                          if (!n.done) return n
                          ;((u = n.value), c < 2 && (c = 0))
                        } else
                          (1 === c && (n = i.return) && n.call(i),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" + o + "' method"
                              )),
                              (c = 1)))
                        i = e
                      } else if ((n = (d = f.n < 0) ? u : t.call(r, f)) !== a) break
                    } catch (n) {
                      ;((i = e), (c = 1), (u = n))
                    } finally {
                      s = 1
                    }
                  }
                  return { value: n, done: d }
                }
              })(t, o, i),
              !0
            ),
            s
          )
        }
        var a = {}
        function c() {}
        function u() {}
        function s() {}
        n = Object.getPrototypeOf
        var f = [][r]
            ? n(n([][r]()))
            : (l((n = {}), r, function () {
                return this
              }),
              n),
          p = (s.prototype = c.prototype = Object.create(f))
        function h(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), l(e, o, 'GeneratorFunction')),
            (e.prototype = Object.create(p)),
            e
          )
        }
        return (
          (u.prototype = s),
          l(p, 'constructor', s),
          l(s, 'constructor', u),
          (u.displayName = 'GeneratorFunction'),
          l(s, o, 'GeneratorFunction'),
          l(p),
          l(p, o, 'Generator'),
          l(p, r, function () {
            return this
          }),
          l(p, 'toString', function () {
            return '[object Generator]'
          }),
          (d = function () {
            return { w: i, m: h }
          })()
        )
      }
      function f(e, n, t, r, o, i, a) {
        try {
          var c = e[i](a),
            u = c.value
        } catch (e) {
          return void t(e)
        }
        c.done ? n(u) : Promise.resolve(u).then(r, o)
      }
      var p = t(8191),
        h = t(1473),
        m = t(1074),
        v = t(1540)
      const w = 'container__iFr',
        x = 'trigger_uIcn',
        j = 'menu_baBV',
        y = 'menuItem_fl8z',
        b = 'menuLabel_jwi4',
        g = 'menuHint_uwzd'
      function k() {
        return (0, a.jsx)('svg', {
          width: '14',
          height: '14',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          'aria-hidden': 'true',
          children: (0, a.jsx)('polyline', { points: '6 9 12 15 18 9' }),
        })
      }
      function _() {
        return (0, a.jsx)('svg', {
          width: '14',
          height: '14',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '1.8',
          'aria-hidden': 'true',
          children: (0, a.jsx)('path', {
            d: 'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2',
          }),
        })
      }
      function N() {
        return (0, a.jsx)('svg', {
          width: '14',
          height: '14',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2.4',
          'aria-hidden': 'true',
          children: (0, a.jsx)('polyline', { points: '20 6 9 17 4 12' }),
        })
      }
      function C() {
        var e = (0, v.P_)('docusaurus-plugin-open-with-llm'),
          n = (0, m.A)().siteConfig,
          t = (0, p.zy)().pathname,
          o = (0, h.Ay)('/'),
          i = (0, r.useRef)(null),
          c = (0, r.useState)(!1),
          u = c[0],
          s = c[1],
          l = (0, r.useState)(!1),
          C = l[0],
          M = l[1],
          O = (function (e, n, t) {
            var r = e.endsWith('/') ? e : e + '/'
            return '' + n.replace(/\/$/, '') + r + t
          })(t, o, e.markdownFile),
          P = (function (e, n) {
            try {
              return new URL(n, e).toString()
            } catch (t) {
              return n
            }
          })(n.url, O),
          E = encodeURIComponent(e.prompt.replaceAll('{url}', P))
        ;(0, r.useEffect)(
          function () {
            if (u) {
              var e = function (e) {
                  i.current && !i.current.contains(e.target) && s(!1)
                },
                n = function (e) {
                  'Escape' === e.key && s(!1)
                }
              return (
                document.addEventListener('mousedown', e),
                document.addEventListener('keydown', n),
                function () {
                  ;(document.removeEventListener('mousedown', e),
                    document.removeEventListener('keydown', n))
                }
              )
            }
          },
          [u]
        )
        var T = (function () {
          var e,
            n =
              ((e = d().m(function e() {
                var n, t
                return d().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          return ((e.p = 0), (e.n = 1), fetch(O))
                        case 1:
                          if ((n = e.v).ok) {
                            e.n = 2
                            break
                          }
                          throw new Error('Fetch failed: ' + n.status)
                        case 2:
                          return ((t = navigator.clipboard), (e.n = 3), n.text())
                        case 3:
                          return ((e.n = 4), t.writeText.call(t, e.v))
                        case 4:
                          ;(M(!0),
                            window.setTimeout(function () {
                              return M(!1)
                            }, 2e3),
                            (e.n = 6))
                          break
                        case 5:
                          ;((e.p = 5), e.v, window.open(O, '_blank', 'noopener,noreferrer'))
                        case 6:
                          s(!1)
                        case 7:
                          return e.a(2)
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                )
              })),
              function () {
                var n = this,
                  t = arguments
                return new Promise(function (r, o) {
                  var i = e.apply(n, t)
                  function a(e) {
                    f(i, r, o, a, c, 'next', e)
                  }
                  function c(e) {
                    f(i, r, o, a, c, 'throw', e)
                  }
                  a(void 0)
                })
              })
          return function () {
            return n.apply(this, arguments)
          }
        })()
        return (0, a.jsxs)('div', {
          className: w,
          ref: i,
          children: [
            (0, a.jsxs)('button', {
              type: 'button',
              className: x,
              'aria-haspopup': 'menu',
              'aria-expanded': u,
              onClick: function () {
                return s(function (e) {
                  return !e
                })
              },
              children: [
                C ? (0, a.jsx)(N, {}) : (0, a.jsx)(_, {}),
                (0, a.jsx)('span', { children: C ? 'Copied' : e.buttonLabel }),
                (0, a.jsx)(k, {}),
              ],
            }),
            u &&
              (0, a.jsxs)('div', {
                className: j,
                role: 'menu',
                children: [
                  (0, a.jsxs)('button', {
                    type: 'button',
                    role: 'menuitem',
                    className: y,
                    onClick: T,
                    children: [
                      (0, a.jsx)('span', { className: b, children: 'Copy as Markdown' }),
                      (0, a.jsx)('span', {
                        className: g,
                        children: 'Paste into any AI chat as context',
                      }),
                    ],
                  }),
                  (0, a.jsxs)('a', {
                    role: 'menuitem',
                    className: y,
                    href: O,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    onClick: function () {
                      return s(!1)
                    },
                    children: [
                      (0, a.jsx)('span', { className: b, children: 'View as Markdown' }),
                      (0, a.jsx)('span', { className: g, children: 'Open the raw .md source' }),
                    ],
                  }),
                  e.providers.map(function (e) {
                    return (0, a.jsxs)(
                      'a',
                      {
                        role: 'menuitem',
                        className: y,
                        href: e.url.replaceAll('{prompt}', E),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        onClick: function () {
                          return s(!1)
                        },
                        children: [
                          (0, a.jsx)('span', { className: b, children: e.label }),
                          (0, a.jsx)('span', {
                            className: g,
                            children: 'Pre-fill a chat with this page',
                          }),
                        ],
                      },
                      e.label
                    )
                  }),
                ],
              }),
          ],
        })
      }
      const M = 'wrapper_GH0p',
        O = 'toolbar_g9oU'
      function P(e) {
        return (0, a.jsxs)('div', {
          className: M,
          children: [
            (0, a.jsx)('div', { className: O, children: (0, a.jsx)(C, {}) }),
            (0, a.jsx)(P, Object.assign({}, e)),
          ],
        })
      }
      function E(e) {
        var n = 'docs-doc-id-' + e.content.metadata.id,
          t = e.content
        return (0, a.jsx)(u, {
          content: e.content,
          children: (0, a.jsxs)(o.e3, {
            className: n,
            children: [(0, a.jsx)(s, {}), (0, a.jsx)(P, { children: (0, a.jsx)(t, {}) })],
          }),
        })
      }
    },
  },
])
