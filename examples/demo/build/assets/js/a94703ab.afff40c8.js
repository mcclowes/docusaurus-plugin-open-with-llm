'use strict'
;(self.webpackChunkdocusaurus_plugin_open_with_llm =
  self.webpackChunkdocusaurus_plugin_open_with_llm || []).push([
  [48],
  {
    7623(e, t, n) {
      ;(n.r(t), n.d(t, { default: () => Be }))
      var a = n(5952),
        i = n(2992),
        r = n(9956),
        s = n(7423),
        o = n(3078),
        l = n(8259),
        c = n(1276),
        d = Symbol('EmptyContext'),
        u = a.createContext(d)
      function m(e) {
        var t = e.children,
          n = e.name,
          i = e.items,
          r = (0, a.useMemo)(
            function () {
              return n && i ? { name: n, items: i } : null
            },
            [n, i]
          )
        return (0, c.jsx)(u.Provider, { value: r, children: t })
      }
      function b() {
        var e = (0, a.useContext)(u)
        if (e === d) throw new l.dV('DocsSidebarProvider')
        return e
      }
      var h = n(4472),
        p = n(3304),
        v = n(7406)
      const x = 'backToTopButton_jvhH',
        f = 'backToTopButtonShow_zyYa'
      function j() {
        var e = (function (e) {
            var t = e.threshold,
              n = (0, a.useState)(!1),
              i = n[0],
              r = n[1],
              s = (0, a.useRef)(!1),
              o = (0, p.gk)(),
              l = o.startScroll,
              c = o.cancelScroll
            return (
              (0, p.Mq)(function (e, n) {
                var a = e.scrollY,
                  i = null == n ? void 0 : n.scrollY
                i &&
                  (s.current
                    ? (s.current = !1)
                    : a >= i
                      ? (c(), r(!1))
                      : a < t
                        ? r(!1)
                        : a + window.innerHeight < document.documentElement.scrollHeight && r(!0))
              }),
              (0, v.$)(function (e) {
                e.location.hash && ((s.current = !0), r(!1))
              }),
              {
                shown: i,
                scrollToTop: function () {
                  return l(0)
                },
              }
            )
          })({ threshold: 300 }),
          t = e.shown,
          n = e.scrollToTop
        return (0, c.jsx)('button', {
          'aria-label': (0, h.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button',
          }),
          className: (0, i.A)('clean-btn', s.G.common.backToTopButton, x, t && f),
          type: 'button',
          onClick: n,
        })
      }
      var g = n(6029),
        _ = n(8191),
        A = n(7421),
        C = n(2814),
        k = n(9009)
      function S(e) {
        return (0, c.jsx)(
          'svg',
          Object.assign({ width: '20', height: '20', 'aria-hidden': 'true' }, e, {
            children: (0, c.jsxs)('g', {
              fill: '#7a7a7a',
              children: [
                (0, c.jsx)('path', {
                  d: 'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0',
                }),
                (0, c.jsx)('path', {
                  d: 'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0',
                }),
              ],
            }),
          })
        )
      }
      const N = 'collapseSidebarButton_UN_q',
        y = 'collapseSidebarButtonIcon_VfMM'
      function T(e) {
        var t = e.onClick
        return (0, c.jsx)('button', {
          type: 'button',
          title: (0, h.T)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar',
          }),
          'aria-label': (0, h.T)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar',
          }),
          className: (0, i.A)('button button--secondary button--outline', N),
          onClick: t,
          children: (0, c.jsx)(S, { className: y }),
        })
      }
      var I = n(1817),
        w = n(7887),
        L = Symbol('EmptyContext'),
        M = a.createContext(L)
      function E(e) {
        var t = e.children,
          n = (0, a.useState)(null),
          i = n[0],
          r = n[1],
          s = (0, a.useMemo)(
            function () {
              return { expandedItem: i, setExpandedItem: r }
            },
            [i]
          )
        return (0, c.jsx)(M.Provider, { value: s, children: t })
      }
      var P = n(7430),
        B = n(489),
        H = n(4302),
        O = n(1479),
        G = n(22),
        D = n(5482)
      const R = 'menuExternalLink_OdB9',
        V = 'linkLabel_XPq9'
      var W = ['item', 'onItemClick', 'activePath', 'level', 'index']
      function U(e) {
        var t = e.label
        return (0, c.jsx)('span', { title: t, className: V, children: t })
      }
      function z(e) {
        var t = e.item,
          n = e.onItemClick,
          a = e.activePath,
          r = e.level,
          l = (e.index, (0, w.A)(e, W)),
          d = t.href,
          u = t.label,
          m = t.className,
          b = t.autoAddBaseUrl,
          h = (0, o.w8)(t, a),
          p = (0, G.A)(d)
        return (0, c.jsx)(
          'li',
          {
            className: (0, i.A)(
              s.G.docs.docSidebarItemLink,
              s.G.docs.docSidebarItemLinkLevel(r),
              'menu__list-item',
              m
            ),
            children: (0, c.jsxs)(
              H.A,
              Object.assign(
                {
                  className: (0, i.A)('menu__link', !p && R, { 'menu__link--active': h }),
                  autoAddBaseUrl: b,
                  'aria-current': h ? 'page' : void 0,
                  to: d,
                },
                p && {
                  onClick: n
                    ? function () {
                        return n(t)
                      }
                    : void 0,
                },
                l,
                { children: [(0, c.jsx)(U, { label: u }), !p && (0, c.jsx)(D.A, {})] }
              )
            ),
          },
          u
        )
      }
      const Y = 'categoryLink_ZYZD',
        Z = 'categoryLinkLabel_mTZr'
      var q = ['item'],
        F = ['type', 'collapsed', 'collapsible', 'items', 'linkUnlisted'],
        K = ['item', 'onItemClick', 'activePath', 'level', 'index']
      function X(e) {
        var t = e.collapsed,
          n = e.categoryLabel,
          a = e.onClick
        return (0, c.jsx)('button', {
          'aria-label': t
            ? (0, h.T)(
                {
                  id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
                  message: "Expand sidebar category '{label}'",
                  description: 'The ARIA label to expand the sidebar category',
                },
                { label: n }
              )
            : (0, h.T)(
                {
                  id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
                  message: "Collapse sidebar category '{label}'",
                  description: 'The ARIA label to collapse the sidebar category',
                },
                { label: n }
              ),
          'aria-expanded': !t,
          type: 'button',
          className: 'clean-btn menu__caret',
          onClick: a,
        })
      }
      function J(e) {
        var t = e.label
        return (0, c.jsx)('span', { title: t, className: Z, children: t })
      }
      function Q(e) {
        return 0 === (0, o.Y)(e.item.items, e.activePath).length
          ? (0, c.jsx)($, Object.assign({}, e))
          : (0, c.jsx)(ee, Object.assign({}, e))
      }
      function $(e) {
        var t = e.item,
          n = (0, w.A)(e, q)
        if ('string' != typeof t.href) return null
        ;(t.type, t.collapsed, t.collapsible, t.items, t.linkUnlisted)
        var a = (0, w.A)(t, F),
          i = Object.assign({ type: 'link' }, a)
        return (0, c.jsx)(z, Object.assign({ item: i }, n))
      }
      function ee(e) {
        var t = e.item,
          n = e.onItemClick,
          r = e.activePath,
          d = e.level,
          u = e.index,
          m = (0, w.A)(e, K),
          b = t.items,
          h = t.label,
          p = t.collapsible,
          v = t.className,
          x = t.href,
          f = (0, C.p)().docs.sidebar.autoCollapseCategories,
          j = (function (e) {
            var t = (0, O.A)()
            return (0, a.useMemo)(
              function () {
                return e.href && !e.linkUnlisted
                  ? e.href
                  : !t && e.collapsible
                    ? (0, o.Nr)(e)
                    : void 0
              },
              [e, t]
            )
          })(t),
          g = (0, o.w8)(t, r),
          _ = (0, B.ys)(x, r),
          A = (0, P.u)({
            initialState: function () {
              return !!p && !g && t.collapsed
            },
          }),
          k = A.collapsed,
          S = A.setCollapsed,
          N = (function () {
            var e = (0, a.useContext)(M)
            if (e === L) throw new l.dV('DocSidebarItemsExpandedStateProvider')
            return e
          })(),
          y = N.expandedItem,
          T = N.setExpandedItem,
          I = function (e) {
            ;(void 0 === e && (e = !k), T(e ? null : u), S(e))
          }
        ;(!(function (e) {
          var t = e.isActive,
            n = e.collapsed,
            i = e.updateCollapsed,
            r = e.activePath,
            s = (0, l.ZC)(t),
            o = (0, l.ZC)(r)
          ;(0, a.useEffect)(
            function () {
              ;((t && !s) || (t && s && r !== o)) && n && i(!1)
            },
            [t, s, n, i, r, o]
          )
        })({ isActive: g, collapsed: k, updateCollapsed: I, activePath: r }),
          (0, a.useEffect)(
            function () {
              p && null != y && y !== u && f && S(!0)
            },
            [p, y, u, S, f]
          ))
        return (0, c.jsxs)('li', {
          className: (0, i.A)(
            s.G.docs.docSidebarItemCategory,
            s.G.docs.docSidebarItemCategoryLevel(d),
            'menu__list-item',
            { 'menu__list-item--collapsed': k },
            v
          ),
          children: [
            (0, c.jsxs)('div', {
              className: (0, i.A)('menu__list-item-collapsible', {
                'menu__list-item-collapsible--active': _,
              }),
              children: [
                (0, c.jsx)(
                  H.A,
                  Object.assign(
                    {
                      className: (0, i.A)(Y, 'menu__link', {
                        'menu__link--sublist': p,
                        'menu__link--sublist-caret': !x && p,
                        'menu__link--active': g,
                      }),
                      onClick: function (e) {
                        ;(null == n || n(t),
                          p &&
                            (x
                              ? _
                                ? (e.preventDefault(), I())
                                : I(!1)
                              : (e.preventDefault(), I())))
                      },
                      'aria-current': _ ? 'page' : void 0,
                      role: p && !x ? 'button' : void 0,
                      'aria-expanded': p && !x ? !k : void 0,
                      href: p ? (null != j ? j : '#') : j,
                    },
                    m,
                    { children: (0, c.jsx)(J, { label: h }) }
                  )
                ),
                x &&
                  p &&
                  (0, c.jsx)(X, {
                    collapsed: k,
                    categoryLabel: h,
                    onClick: function (e) {
                      ;(e.preventDefault(), I())
                    },
                  }),
              ],
            }),
            (0, c.jsx)(P.N, {
              lazy: !0,
              as: 'ul',
              className: 'menu__list',
              collapsed: k,
              children: (0, c.jsx)(oe, {
                items: b,
                tabIndex: k ? -1 : 0,
                onItemClick: n,
                activePath: r,
                level: d + 1,
              }),
            }),
          ],
        })
      }
      const te = 'menuHtmlItem_WkV7'
      function ne(e) {
        var t = e.item,
          n = e.level,
          a = e.index,
          r = t.value,
          o = t.defaultStyle,
          l = t.className
        return (0, c.jsx)(
          'li',
          {
            className: (0, i.A)(
              s.G.docs.docSidebarItemLink,
              s.G.docs.docSidebarItemLinkLevel(n),
              o && [te, 'menu__list-item'],
              l
            ),
            dangerouslySetInnerHTML: { __html: r },
          },
          a
        )
      }
      var ae = ['item']
      function ie(e) {
        var t = e.item,
          n = (0, w.A)(e, ae)
        switch (t.type) {
          case 'category':
            return (0, c.jsx)(Q, Object.assign({ item: t }, n))
          case 'html':
            return (0, c.jsx)(ne, Object.assign({ item: t }, n))
          default:
            return (0, c.jsx)(z, Object.assign({ item: t }, n))
        }
      }
      var re = ['items']
      function se(e) {
        var t = e.items,
          n = (0, w.A)(e, re),
          a = (0, o.Y)(t, n.activePath)
        return (0, c.jsx)(E, {
          children: a.map(function (e, t) {
            return (0, c.jsx)(ie, Object.assign({ item: e, index: t }, n), t)
          }),
        })
      }
      const oe = (0, a.memo)(se),
        le = 'menu_HTi3',
        ce = 'menuWithAnnouncementBar_LtC0'
      function de(e) {
        var t = e.path,
          n = e.sidebar,
          r = e.className,
          o = (function () {
            var e = (0, I.M)().isActive,
              t = (0, a.useState)(e),
              n = t[0],
              i = t[1]
            return (
              (0, p.Mq)(
                function (t) {
                  var n = t.scrollY
                  e && i(0 === n)
                },
                [e]
              ),
              e && n
            )
          })()
        return (0, c.jsx)('nav', {
          'aria-label': (0, h.T)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation',
          }),
          className: (0, i.A)('menu thin-scrollbar', le, o && ce, r),
          children: (0, c.jsx)('ul', {
            className: (0, i.A)(s.G.docs.docSidebarMenu, 'menu__list'),
            children: (0, c.jsx)(oe, { items: n, activePath: t, level: 1 }),
          }),
        })
      }
      const ue = 'sidebar_Kuie',
        me = 'sidebarWithHideableNavbar_ZMmQ',
        be = 'sidebarHidden_O1uk',
        he = 'sidebarLogo_BbVr'
      function pe(e) {
        var t = e.path,
          n = e.sidebar,
          a = e.onCollapse,
          r = e.isHidden,
          s = (0, C.p)(),
          o = s.navbar.hideOnScroll,
          l = s.docs.sidebar.hideable
        return (0, c.jsxs)('div', {
          className: (0, i.A)(ue, o && me, r && be),
          children: [
            o && (0, c.jsx)(k.A, { tabIndex: -1, className: he }),
            (0, c.jsx)(de, { path: t, sidebar: n }),
            l && (0, c.jsx)(T, { onClick: a }),
          ],
        })
      }
      const ve = a.memo(pe)
      var xe = n(8856),
        fe = n(4109),
        je = function (e) {
          var t = e.sidebar,
            n = e.path,
            a = (0, fe.M)()
          return (0, c.jsx)('ul', {
            className: (0, i.A)(s.G.docs.docSidebarMenu, 'menu__list'),
            children: (0, c.jsx)(oe, {
              items: t,
              activePath: n,
              onItemClick: function (e) {
                ;('category' === e.type && e.href && a.toggle(), 'link' === e.type && a.toggle())
              },
              level: 1,
            }),
          })
        }
      function ge(e) {
        return (0, c.jsx)(xe.GX, { component: je, props: e })
      }
      const _e = a.memo(ge)
      function Ae(e) {
        var t = (0, A.l)(),
          n = 'desktop' === t || 'ssr' === t,
          a = 'mobile' === t
        return (0, c.jsxs)(c.Fragment, {
          children: [
            n && (0, c.jsx)(ve, Object.assign({}, e)),
            a && (0, c.jsx)(_e, Object.assign({}, e)),
          ],
        })
      }
      const Ce = 'expandButton_qAh5',
        ke = 'expandButtonIcon_eZ9e'
      function Se(e) {
        var t = e.toggleSidebar
        return (0, c.jsx)('div', {
          className: Ce,
          title: (0, h.T)({
            id: 'theme.docs.sidebar.expandButtonTitle',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar',
          }),
          'aria-label': (0, h.T)({
            id: 'theme.docs.sidebar.expandButtonAriaLabel',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar',
          }),
          tabIndex: 0,
          role: 'button',
          onKeyDown: t,
          onClick: t,
          children: (0, c.jsx)(S, { className: ke }),
        })
      }
      const Ne = {
        docSidebarContainer: 'docSidebarContainer_rf7A',
        docSidebarContainerHidden: 'docSidebarContainerHidden_vqPa',
        sidebarViewport: 'sidebarViewport_tnb2',
      }
      function ye(e) {
        var t,
          n = e.children,
          i = b()
        return (0, c.jsx)(
          a.Fragment,
          { children: n },
          null != (t = null == i ? void 0 : i.name) ? t : 'noSidebar'
        )
      }
      function Te(e) {
        var t = e.sidebar,
          n = e.hiddenSidebarContainer,
          r = e.setHiddenSidebarContainer,
          o = (0, _.zy)().pathname,
          l = (0, a.useState)(!1),
          d = l[0],
          u = l[1],
          m = (0, a.useCallback)(
            function () {
              ;(d && u(!1),
                !d && (0, g.O)() && u(!0),
                r(function (e) {
                  return !e
                }))
            },
            [r, d]
          )
        return (0, c.jsx)('aside', {
          className: (0, i.A)(
            s.G.docs.docSidebarContainer,
            Ne.docSidebarContainer,
            n && Ne.docSidebarContainerHidden
          ),
          onTransitionEnd: function (e) {
            e.currentTarget.classList.contains(Ne.docSidebarContainer) && n && u(!0)
          },
          children: (0, c.jsx)(ye, {
            children: (0, c.jsxs)('div', {
              className: (0, i.A)(Ne.sidebarViewport, d && Ne.sidebarViewportHidden),
              children: [
                (0, c.jsx)(Ae, { sidebar: t, path: o, onCollapse: m, isHidden: d }),
                d && (0, c.jsx)(Se, { toggleSidebar: m }),
              ],
            }),
          }),
        })
      }
      const Ie = {
        docMainContainer: 'docMainContainer_Hzn6',
        docMainContainerEnhanced: 'docMainContainerEnhanced_A9Sv',
        docItemWrapperEnhanced: 'docItemWrapperEnhanced_dJAa',
      }
      function we(e) {
        var t = e.hiddenSidebarContainer,
          n = e.children,
          a = b()
        return (0, c.jsx)('main', {
          className: (0, i.A)(Ie.docMainContainer, (t || !a) && Ie.docMainContainerEnhanced),
          children: (0, c.jsx)('div', {
            className: (0, i.A)(
              'container padding-top--md padding-bottom--lg',
              Ie.docItemWrapper,
              t && Ie.docItemWrapperEnhanced
            ),
            children: n,
          }),
        })
      }
      const Le = 'docRoot_zKGA',
        Me = 'docsWrapper_Uhr8'
      function Ee(e) {
        var t = e.children,
          n = b(),
          i = (0, a.useState)(!1),
          r = i[0],
          s = i[1]
        return (0, c.jsxs)('div', {
          className: Me,
          children: [
            (0, c.jsx)(j, {}),
            (0, c.jsxs)('div', {
              className: Le,
              children: [
                n &&
                  (0, c.jsx)(Te, {
                    sidebar: n.items,
                    hiddenSidebarContainer: r,
                    setHiddenSidebarContainer: s,
                  }),
                (0, c.jsx)(we, { hiddenSidebarContainer: r, children: t }),
              ],
            }),
          ],
        })
      }
      var Pe = n(3275)
      function Be(e) {
        var t = (0, o.B5)(e)
        if (!t) return (0, c.jsx)(Pe.A, {})
        var n = t.docElement,
          a = t.sidebarName,
          l = t.sidebarItems
        return (0, c.jsx)(r.e3, {
          className: (0, i.A)(s.G.page.docsDocPage),
          children: (0, c.jsx)(m, { name: a, items: l, children: (0, c.jsx)(Ee, { children: n }) }),
        })
      }
    },
    3275(e, t, n) {
      n.d(t, { A: () => o })
      n(5952)
      var a = n(2992),
        i = n(4472),
        r = n(4640),
        s = n(1276)
      function o(e) {
        var t = e.className
        return (0, s.jsx)('main', {
          className: (0, a.A)('container margin-vert--xl', t),
          children: (0, s.jsx)('div', {
            className: 'row',
            children: (0, s.jsxs)('div', {
              className: 'col col--6 col--offset-3',
              children: [
                (0, s.jsx)(r.A, {
                  as: 'h1',
                  className: 'hero__title',
                  children: (0, s.jsx)(i.A, {
                    id: 'theme.NotFound.title',
                    description: 'The title of the 404 page',
                    children: 'Page Not Found',
                  }),
                }),
                (0, s.jsx)('p', {
                  children: (0, s.jsx)(i.A, {
                    id: 'theme.NotFound.p1',
                    description: 'The first paragraph of the 404 page',
                    children: 'We could not find what you were looking for.',
                  }),
                }),
                (0, s.jsx)('p', {
                  children: (0, s.jsx)(i.A, {
                    id: 'theme.NotFound.p2',
                    description: 'The 2nd paragraph of the 404 page',
                    children:
                      'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.',
                  }),
                }),
              ],
            }),
          }),
        })
      }
    },
  },
])
