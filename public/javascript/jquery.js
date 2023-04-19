!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    function g(e, t, n) {
        var r, i, o = (n = n || fe).createElement("script");
        if (o.text = e,
        t)
            for (r in pe)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function v(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[ie.call(e)] || "object" : typeof e
    }
    function s(e) {
        var t = !!e && "length"in e && e.length
          , n = v(e);
        return !le(e) && !ce(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function t(e, n, r) {
        return le(n) ? de.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? de.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? de.grep(e, function(e) {
            return -1 < ne.call(n, e) !== r
        }) : de.filter(n, e, r)
    }
    function n(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function c(e) {
        return e
    }
    function f(e) {
        throw e
    }
    function u(e, t, n, r) {
        var i;
        try {
            e && le(i = e.promise) ? i.call(e).done(t).fail(n) : e && le(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function r() {
        fe.removeEventListener("DOMContentLoaded", r),
        C.removeEventListener("load", r),
        de.ready()
    }
    function i(e, t) {
        return t.toUpperCase()
    }
    function p(e) {
        return e.replace(Ae, "ms-").replace(Ne, i)
    }
    function o() {
        this.expando = de.expando + o.uid++
    }
    function d(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(He, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Le.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                qe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function h(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return de.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (de.cssNumber[t] ? "" : "px"), c = e.nodeType && (de.cssNumber[t] || "px" !== l && +u) && Pe.exec(de.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                de.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            de.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    function y(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = je.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && Fe(r) && (i[o] = (f = l = u = void 0,
            l = (s = r).ownerDocument,
            c = s.nodeName,
            (f = Be[c]) || (u = l.body.appendChild(l.createElement(c)),
            f = de.css(u, "display"),
            u.parentNode.removeChild(u),
            "none" === f && (f = "block"),
            Be[c] = f)))) : "none" !== n && (i[o] = "none",
            je.set(r, "display", n)));
        var s, u, l, c, f;
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function m(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && l(e, t) ? de.merge([e], n) : n
    }
    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            je.set(e[n], "globalEval", !t || je.get(t[n], "globalEval"))
    }
    function b(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === v(o))
                    de.merge(p, o.nodeType ? [o] : o);
                else if (Ge.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (Ue.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Ve[s] || Ve._default,
                    a.innerHTML = u[1] + de.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    de.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && -1 < de.inArray(o, r))
                i && i.push(o);
            else if (l = Ie(o),
            a = m(f.appendChild(o), "script"),
            l && x(a),
            n)
                for (c = 0; o = a[c++]; )
                    Xe.test(o.type || "") && n.push(o);
        return f
    }
    function a() {
        return !0
    }
    function w() {
        return !1
    }
    function T(e, t) {
        return e === function() {
            try {
                return fe.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                E(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = w;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return de().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = de.guid++)),
        e.each(function() {
            de.event.add(this, t, i, r, n)
        })
    }
    function S(e, i, o) {
        return o ? (je.set(e, i, !1),
        void de.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = je.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (de.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = Z.call(arguments),
                    je.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = je.get(this, i)) || t ? je.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (je.set(this, i, {
                        value: de.event.trigger(de.extend(r[0], de.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void (void 0 === je.get(e, i) && de.event.add(e, i, a))
    }
    function k(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && de(e).children("tbody")[0] || e
    }
    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function N(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function D(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (je.hasData(e) && (s = je.get(e).events))
                for (i in je.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        de.event.add(t, i, s[i][n]);
            qe.hasData(e) && (o = qe.access(e),
            a = de.extend({}, o),
            qe.set(t, a))
        }
    }
    function j(n, r, i, o) {
        r = ee(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = le(d);
        if (h || 1 < f && "string" == typeof d && !ue.checkClone && Ze.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                j(t, r, i, o)
            });
        if (f && (t = (e = b(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = de.map(m(e, "script"), A)).length; c < f; c++)
                u = e,
                c !== p && (u = de.clone(u, !0, !0),
                s && de.merge(a, m(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                de.map(a, N),
                c = 0; c < s; c++)
                    u = a[c],
                    Xe.test(u.type || "") && !je.access(u, "globalEval") && de.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? de._evalUrl && !u.noModule && de._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : g(u.textContent.replace(et, ""), u, l))
        }
        return n
    }
    function q(e, t, n) {
        for (var r, i = t ? de.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || de.cleanData(m(r)),
            r.parentNode && (n && Ie(r) && x(m(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function L(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || nt(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || Ie(e) || (a = de.style(e, t)),
        !ue.pixelBoxStyles() && tt.test(a) && it.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function H(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function O(e) {
        var t = de.cssProps[e] || st[e];
        return t || (e in at ? e : st[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ot.length; n--; )
                if ((e = ot[n] + t)in at)
                    return e
        }(e) || e)
    }
    function P(e, t, n) {
        var r = Pe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function R(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += de.css(e, n + Re[a], !0, i)),
            r ? ("content" === n && (u -= de.css(e, "padding" + Re[a], !0, i)),
            "margin" !== n && (u -= de.css(e, "border" + Re[a] + "Width", !0, i))) : (u += de.css(e, "padding" + Re[a], !0, i),
            "padding" !== n ? u += de.css(e, "border" + Re[a] + "Width", !0, i) : s += de.css(e, "border" + Re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function M(e, t, n) {
        var r = nt(e)
          , i = (!ue.boxSizingReliable() || n) && "border-box" === de.css(e, "boxSizing", !1, r)
          , o = i
          , a = L(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (tt.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!ue.boxSizingReliable() && i || !ue.reliableTrDimensions() && l(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === de.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === de.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + R(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function I(e, t, n, r, i) {
        return new I.prototype.init(e,t,n,r,i)
    }
    function W() {
        dt && (!1 === fe.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(W) : C.setTimeout(W, de.fx.interval),
        de.fx.tick())
    }
    function F() {
        return C.setTimeout(function() {
            pt = void 0
        }),
        pt = Date.now()
    }
    function B(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = Re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function $(e, t, n) {
        for (var r, i = (_.tweeners[t] || []).concat(_.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function _(o, e, t) {
        var n, a, r = 0, i = _.prefilters.length, s = de.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = pt || F(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: de.extend({}, e),
            opts: de.extend(!0, {
                specialEasing: {},
                easing: de.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: pt || F(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = de.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = p(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = de.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = _.prefilters[r].call(l, o, c, l.opts))
                return le(n.stop) && (de._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return de.map(c, $, l),
        le(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        de.fx.timer(de.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    function z(e) {
        return (e.match(Ce) || []).join(" ")
    }
    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function X(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Ce) || []
    }
    function V(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            de.each(e, function(e, t) {
                r || Nt.test(n) ? i(n, t) : V(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== v(e))
            i(n, e);
        else
            for (t in e)
                V(n + "[" + t + "]", e[t], r, i)
    }
    function G(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(Ce) || [];
            if (le(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Y(t, i, o, a) {
        function s(e) {
            var r;
            return u[e] = !0,
            de.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || l || u[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                s(n),
                !1)
            }),
            r
        }
        var u = {}
          , l = t === Wt;
        return s(i.dataTypes[0]) || !u["*"] && s("*")
    }
    function Q(e, t) {
        var n, r, i = de.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && de.extend(!0, e, r),
        e
    }
    var J = []
      , K = Object.getPrototypeOf
      , Z = J.slice
      , ee = J.flat ? function(e) {
        return J.flat.call(e)
    }
    : function(e) {
        return J.concat.apply([], e)
    }
      , te = J.push
      , ne = J.indexOf
      , re = {}
      , ie = re.toString
      , oe = re.hasOwnProperty
      , ae = oe.toString
      , se = ae.call(Object)
      , ue = {}
      , le = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , ce = function(e) {
        return null != e && e === e.window
    }
      , fe = C.document
      , pe = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }
      , de = function(e, t) {
        return new de.fn.init(e,t)
    };
    de.fn = de.prototype = {
        jquery: "3.5.1",
        constructor: de,
        length: 0,
        toArray: function() {
            return Z.call(this)
        },
        get: function(e) {
            return null == e ? Z.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return de.each(this, e)
        },
        map: function(n) {
            return this.pushStack(de.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(de.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(de.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: te,
        sort: J.sort,
        splice: J.splice
    },
    de.extend = de.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || le(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (de.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || de.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = de.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    de.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ie.call(e)) && (!(t = K(e)) || "function" == typeof (n = oe.call(t, "constructor") && t.constructor) && ae.call(n) === se)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            g(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (s(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ne.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (s(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return ee(a)
        },
        guid: 1,
        support: ue
    }),
    "function" == typeof Symbol && (de.fn[Symbol.iterator] = J[Symbol.iterator]),
    de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        re["[object " + t + "]"] = t.toLowerCase()
    });
    var he = function(n) {
        function b(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (j(e),
            e = e || q,
            H)) {
                if (11 !== p && (u = ye.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && M(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return J.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && y.getElementsByClassName && e.getElementsByClassName)
                            return J.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (y.qsa && !U[t + " "] && (!O || !O.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (le.test(t) || ue.test(t))) {
                        for ((f = me.test(t) && d(e.parentNode) || e) === e && y.scope || ((s = e.getAttribute("id")) ? s = s.replace(we, Te) : e.setAttribute("id", s = I)),
                        o = (l = E(t)).length; o--; )
                            l[o] = (s ? "#" + s : ":scope") + " " + h(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return J.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        U(t, !0)
                    } finally {
                        s === I && e.removeAttribute("id")
                    }
                }
            }
            return k(t.replace(ae, "$1"), e, n, r)
        }
        function e() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > T.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function u(e) {
            return e[I] = !0,
            e
        }
        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function l(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function a(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ee(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function s(a) {
            return u(function(o) {
                return o = +o,
                u(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function d(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function h(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function f(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = B++;
            return e.first ? function(e, t, n) {
                for (; e = e[u]; )
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [F, p];
                if (n) {
                    for (; e = e[u]; )
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[u]; )
                        if (1 === e.nodeType || f)
                            if (i = (o = e[I] || (e[I] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === F && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function p(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function w(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function m(d, h, g, v, y, e) {
            return v && !v[I] && (v = m(v)),
            y && !y[I] && (y = m(y, e)),
            u(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        b(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : w(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v)
                    for (i = w(p, u),
                    v(i, [], n, r),
                    o = i.length; o--; )
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (y || d) {
                        if (y) {
                            for (i = [],
                            o = p.length; o--; )
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        for (o = p.length; o--; )
                            (a = p[o]) && -1 < (i = y ? Z(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = w(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : J.apply(t, p)
            })
        }
        function g(e) {
            for (var i, t, n, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = f(function(e) {
                return e === i
            }, a, !0), l = f(function(e) {
                return -1 < Z(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== A) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = T.relative[e[s].type])
                    c = [f(p(c), t)];
                else {
                    if ((t = T.filter[e[s].type].apply(null, e[s].matches))[I]) {
                        for (n = ++s; n < r && !T.relative[e[n].type]; n++)
                            ;
                        return m(1 < s && p(c), 1 < s && h(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ae, "$1"), t, s < n && g(e.slice(s, n)), n < r && g(e = e.slice(n)), n < r && h(e))
                    }
                    c.push(t)
                }
            return p(c)
        }
        var v, y, T, x, C, E, S, k, A, N, D, j, q, L, H, O, P, R, M, I = "sizzle" + 1 * new Date, W = n.document, F = 0, B = 0, $ = e(), _ = e(), z = e(), U = e(), X = function(e, t) {
            return e === t && (D = !0),
            0
        }, V = {}.hasOwnProperty, G = [], Y = G.pop, Q = G.push, J = G.push, K = G.slice, Z = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", te = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]", ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", oe = new RegExp(te + "+","g"), ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$","g"), se = new RegExp("^" + te + "*," + te + "*"), ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"), le = new RegExp(te + "|>"), ce = new RegExp(ie), fe = new RegExp("^" + ne + "$"), pe = {
            ID: new RegExp("^#(" + ne + ")"),
            CLASS: new RegExp("^\\.(" + ne + ")"),
            TAG: new RegExp("^(" + ne + "|[*])"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ee + ")$","i"),
            needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)","i")
        }, de = /HTML$/i, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, xe = new RegExp("\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])","g"), be = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Te = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, Ce = function() {
            j()
        }, Ee = f(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            J.apply(G = K.call(W.childNodes), W.childNodes),
            G[W.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: G.length ? function(e, t) {
                    Q.apply(e, K.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (v in y = b.support = {},
        C = b.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !de.test(t || n && n.nodeName || "HTML")
        }
        ,
        j = b.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : W;
            return r != q && 9 === r.nodeType && r.documentElement && (L = (q = r).documentElement,
            H = !C(q),
            W != q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
            y.scope = i(function(e) {
                return L.appendChild(e).appendChild(q.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            y.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            y.getElementsByTagName = i(function(e) {
                return e.appendChild(q.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            y.getElementsByClassName = ve.test(q.getElementsByClassName),
            y.getById = i(function(e) {
                return L.appendChild(e).id = I,
                !q.getElementsByName || !q.getElementsByName(I).length
            }),
            y.getById ? (T.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (T.filter.ID = function(e) {
                var n = e.replace(xe, be);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            T.find.TAG = y.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            T.find.CLASS = y.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
            }
            ,
            P = [],
            O = [],
            (y.qsa = ve.test(q.querySelectorAll)) && (i(function(e) {
                var t;
                L.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + te + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:value|" + ee + ")"),
                e.querySelectorAll("[id~=" + I + "-]").length || O.push("~="),
                (t = q.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || O.push("\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || O.push(":checked"),
                e.querySelectorAll("a#" + I + "+*").length || O.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                O.push("[\\r\\n\\f]")
            }),
            i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && O.push("name" + te + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"),
                L.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                O.push(",.*:")
            })),
            (y.matchesSelector = ve.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                y.disconnectedMatch = R.call(e, "*"),
                R.call(e, "[s!='']:x"),
                P.push("!=", ie)
            }),
            O = O.length && new RegExp(O.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = ve.test(L.compareDocumentPosition),
            M = t || ve.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            X = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e == q || e.ownerDocument == W && M(W, e) ? -1 : t == q || t.ownerDocument == W && M(W, t) ? 1 : N ? Z(N, e) - Z(N, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == q ? -1 : t == q ? 1 : i ? -1 : o ? 1 : N ? Z(N, e) - Z(N, t) : 0;
                if (i === o)
                    return l(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? l(a[r], s[r]) : a[r] == W ? -1 : s[r] == W ? 1 : 0
            }
            ),
            q
        }
        ,
        b.matches = function(e, t) {
            return b(e, null, null, t)
        }
        ,
        b.matchesSelector = function(e, t) {
            if (j(e),
            y.matchesSelector && H && !U[t + " "] && (!P || !P.test(t)) && (!O || !O.test(t)))
                try {
                    var n = R.call(e, t);
                    if (n || y.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    U(t, !0)
                }
            return 0 < b(t, q, null, [e]).length
        }
        ,
        b.contains = function(e, t) {
            return (e.ownerDocument || e) != q && j(e),
            M(e, t)
        }
        ,
        b.attr = function(e, t) {
            (e.ownerDocument || e) != q && j(e);
            var n = T.attrHandle[t.toLowerCase()]
              , r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : y.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        b.escape = function(e) {
            return (e + "").replace(we, Te)
        }
        ,
        b.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        b.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (D = !y.detectDuplicates,
            N = !y.sortStable && e.slice(0),
            e.sort(X),
            D) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return N = null,
            e
        }
        ,
        x = b.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += x(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += x(t);
            return n
        }
        ,
        (T = b.selectors = {
            cacheLength: 50,
            createPseudo: u,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, be),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && b.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = b.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(oe, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                for (; l; ) {
                                    for (a = e; a = a[l]; )
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                for (d = (s = (r = (i = (o = (a = c)[I] || (a[I] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === F && r[1]) && r[2],
                                a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop(); )
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [F, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[I] || (a[I] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === F && r[1]),
                            !1 === d)
                                for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[I] || (a[I] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [F, d]),
                                a !== e)); )
                                    ;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
                    return a[I] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = Z(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: u(function(e) {
                    var r = []
                      , i = []
                      , s = S(e.replace(ae, "$1"));
                    return s[I] ? u(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: u(function(t) {
                    return function(e) {
                        return 0 < b(t, e).length
                    }
                }),
                contains: u(function(t) {
                    return t = t.replace(xe, be),
                    function(e) {
                        return -1 < (e.textContent || x(e)).indexOf(t)
                    }
                }),
                lang: u(function(n) {
                    return fe.test(n || "") || b.error("unsupported lang: " + n),
                    n = n.replace(xe, be).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = T.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[v] = r(v);
        for (v in {
            submit: !0,
            reset: !0
        })
            T.pseudos[v] = o(v);
        return c.prototype = T.filters = T.pseudos,
        T.setFilters = new c,
        E = b.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = _[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (a = e,
            s = [],
            u = T.preFilter; a; ) {
                for (o in n && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = ue.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(ae, " ")
                }),
                a = a.slice(n.length)),
                T.filter)
                    !(r = pe[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? b.error(e) : _(e, s).slice(0)
        }
        ,
        S = b.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = z[e + " "];
            if (!a) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    (a = g(t[n]))[I] ? i.push(a) : o.push(a);
                (a = z(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = A, d = e || x && T.find.TAG("*", i), h = F += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (A = t == q || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0,
                            t || o.ownerDocument == q || (j(o),
                            n = !H); s = v[a++]; )
                                if (s(o, t || q, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (F = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        for (a = 0; s = y[a++]; )
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--; )
                                    c[l] || f[l] || (f[l] = Y.call(r));
                            f = w(f)
                        }
                        J.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && b.uniqueSort(r)
                    }
                    return i && (F = h,
                    A = p),
                    c
                }
                ,
                m ? u(r) : r))).selector = e
            }
            return a
        }
        ,
        k = b.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && E(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && H && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(a.matches[0].replace(xe, be), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !T.relative[s = a.type]); )
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(xe, be), me.test(o[0].type) && d(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && h(o)))
                            return J.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || S(e, c))(r, t, !H, n, !t || me.test(e) && d(t.parentNode) || t),
            n
        }
        ,
        y.sortStable = I.split("").sort(X).join("") === I,
        y.detectDuplicates = !!D,
        j(),
        y.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("fieldset"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        y.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(ee, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        b
    }(C);
    de.find = he,
    de.expr = he.selectors,
    de.expr[":"] = de.expr.pseudos,
    de.uniqueSort = de.unique = he.uniqueSort,
    de.text = he.getText,
    de.isXMLDoc = he.isXML,
    de.contains = he.contains,
    de.escapeSelector = he.escape;
    var ge = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && de(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , ve = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , ye = de.expr.match.needsContext
      , me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    de.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? de.find.matchesSelector(r, e) ? [r] : [] : de.find.matches(e, de.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    de.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(de(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (de.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                de.find(e, i[t], n);
            return 1 < r ? de.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && ye.test(e) ? de(e) : e || [], !1).length
        }
    });
    var xe, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (de.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || xe,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : le(e) ? void 0 !== n.ready ? n.ready(e) : e(de) : de.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : be.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof de ? t[0] : t,
            de.merge(this, de.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)),
            me.test(r[1]) && de.isPlainObject(t))
                for (r in t)
                    le(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = fe.getElementById(r[2])) && (this[0] = i,
        this.length = 1),
        this
    }
    ).prototype = de.fn,
    xe = de(fe);
    var we = /^(?:parents|prev(?:Until|All))/
      , Te = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    de.fn.extend({
        has: function(e) {
            var t = de(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (de.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && de(e);
            if (!ye.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? de.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ne.call(de(e), this[0]) : ne.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ge(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ge(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return ge(e, "nextSibling")
        },
        prevAll: function(e) {
            return ge(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ge(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ge(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ve((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ve(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && K(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e),
            de.merge([], e.childNodes))
        }
    }, function(r, i) {
        de.fn[r] = function(e, t) {
            var n = de.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = de.filter(t, n)),
            1 < this.length && (Te[r] || de.uniqueSort(n),
            we.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var Ce = /[^\x20\t\r\n\f]+/g;
    de.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        de.each(e.match(Ce) || [], function(e, t) {
            n[t] = !0
        }),
        n) : de.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1)
                for (t = u.shift(); ++l < s.length; )
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1);
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    de.each(e, function(e, t) {
                        le(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== v(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return de.each(arguments, function(e, t) {
                    for (var n; -1 < (n = de.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < de.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    de.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2], ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return de.Deferred(function(r) {
                        de.each(o, function(e, t) {
                            var n = le(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && le(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    function u(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < l)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    le(t) ? s ? t.call(e, u(l, o, c, s), u(l, o, f, s)) : (l++,
                                    t.call(e, u(l, o, c, s), u(l, o, f, s), u(l, o, c, o.notifyWith))) : (a !== c && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= i + 1 && (a !== f && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (de.Deferred.getStackHook && (t.stackTrace = de.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    var l = 0;
                    return de.Deferred(function(e) {
                        o[0][3].add(u(0, e, le(r) ? r : c, e.notifyWith)),
                        o[1][3].add(u(0, e, le(t) ? t : c)),
                        o[2][3].add(u(0, e, le(n) ? n : f))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? de.extend(e, a) : a
                }
            }
              , s = {};
            return de.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = Z.call(arguments)
              , o = de.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? Z.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (u(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || le(i[t] && i[t].then)))
                return o.then();
            for (; t--; )
                u(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var Ee = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    de.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && Ee.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    de.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var Se = de.Deferred();
    de.fn.ready = function(e) {
        return Se.then(e).catch(function(e) {
            de.readyException(e)
        }),
        this
    }
    ,
    de.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --de.readyWait : de.isReady) || ((de.isReady = !0) !== e && 0 < --de.readyWait || Se.resolveWith(fe, [de]))
        }
    }),
    de.ready.then = Se.then,
    "complete" === fe.readyState || "loading" !== fe.readyState && !fe.documentElement.doScroll ? C.setTimeout(de.ready) : (fe.addEventListener("DOMContentLoaded", r),
    C.addEventListener("load", r));
    var ke = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === v(n))
            for (s in i = !0,
            n)
                ke(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        le(r) || (a = !0),
        l && (t = a ? (t.call(e, r),
        null) : (l = t,
        function(e, t, n) {
            return l.call(de(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , Ae = /^-ms-/
      , Ne = /-([a-z])/g
      , De = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    o.uid = 1,
    o.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[p(t)] = n;
            else
                for (r in t)
                    i[p(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(p) : (t = p(t))in r ? [t] : t.match(Ce) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || de.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !de.isEmptyObject(t)
        }
    };
    var je = new o
      , qe = new o
      , Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , He = /[A-Z]/g;
    de.extend({
        hasData: function(e) {
            return qe.hasData(e) || je.hasData(e)
        },
        data: function(e, t, n) {
            return qe.access(e, t, n)
        },
        removeData: function(e, t) {
            qe.remove(e, t)
        },
        _data: function(e, t, n) {
            return je.access(e, t, n)
        },
        _removeData: function(e, t) {
            je.remove(e, t)
        }
    }),
    de.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    qe.set(this, n)
                }) : ke(this, function(e) {
                    var t;
                    if (o && void 0 === e) {
                        if (void 0 !== (t = qe.get(o, n)))
                            return t;
                        if (void 0 !== (t = d(o, n)))
                            return t
                    } else
                        this.each(function() {
                            qe.set(this, n, e)
                        })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = qe.get(o),
            1 === o.nodeType && !je.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--; )
                    a[t] && (0 === (r = a[t].name).indexOf("data-") && (r = p(r.slice(5)),
                    d(o, r, i[r])));
                je.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                qe.remove(this, e)
            })
        }
    }),
    de.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = je.get(e, t),
            n && (!r || Array.isArray(n) ? r = je.access(e, t, de.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = de.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = de._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                de.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return je.get(e, n) || je.access(e, n, {
                empty: de.Callbacks("once memory").add(function() {
                    je.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    de.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? de.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = de.queue(this, t, n);
                de._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && de.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = de.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = je.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Pe = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$","i")
      , Re = ["Top", "Right", "Bottom", "Left"]
      , Me = fe.documentElement
      , Ie = function(e) {
        return de.contains(e.ownerDocument, e)
    }
      , We = {
        composed: !0
    };
    Me.getRootNode && (Ie = function(e) {
        return de.contains(e.ownerDocument, e) || e.getRootNode(We) === e.ownerDocument
    }
    );
    var Fe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && Ie(e) && "none" === de.css(e, "display")
    }
      , Be = {};
    de.fn.extend({
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? de(this).show() : de(this).hide()
            })
        }
    });
    var $e, _e, ze = /^(?:checkbox|radio)$/i, Ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Xe = /^$|^module$|\/(?:java|ecma)script/i;
    $e = fe.createDocumentFragment().appendChild(fe.createElement("div")),
    (_e = fe.createElement("input")).setAttribute("type", "radio"),
    _e.setAttribute("checked", "checked"),
    _e.setAttribute("name", "t"),
    $e.appendChild(_e),
    ue.checkClone = $e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    $e.innerHTML = "<textarea>x</textarea>",
    ue.noCloneChecked = !!$e.cloneNode(!0).lastChild.defaultValue,
    $e.innerHTML = "<option></option>",
    ue.option = !!$e.lastChild;
    var Ve = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
    Ve.th = Ve.td,
    ue.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Ge = /<|&#?\w+;/
      , Ye = /^key/
      , Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Je = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = je.get(t);
            if (De(t))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && de.find.matchesSelector(Me, i),
                n.guid || (n.guid = de.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return void 0 !== de && de.event.triggered !== e.type ? de.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(Ce) || [""]).length; l--; )
                    d = g = (s = Je.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = de.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = de.event.special[d] || {},
                    c = de.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && de.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a, {
                        passive: !1
                    })),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    de.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = je.hasData(e) && je.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(Ce) || [""]).length; l--; )
                    if (d = g = (s = Je.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = de.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || de.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            de.event.remove(e, d + t[l], n, r, !0);
                de.isEmptyObject(u) && je.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = de.event.fix(e), l = (je.get(this, "events") || Object.create(null))[u.type] || [], c = de.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = de.event.handlers.call(this, u, l),
                t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((de.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < de(i, this).index(l) : de.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(de.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: le(e) ? function() {
                    return this.originalEvent ? e(this.originalEvent) : void 0
                }
                : function() {
                    return this.originalEvent ? this.originalEvent[t] : void 0
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[de.expando] ? e : new de.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return ze.test(t.type) && t.click && l(t, "input") && S(t, "click", a),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return ze.test(t.type) && t.click && l(t, "input") && S(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return ze.test(t.type) && t.click && l(t, "input") && je.get(t, "click") || l(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    de.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    de.Event = function(e, t) {
        return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? a : w,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && de.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        void (this[de.expando] = !0)) : new de.Event(e,t)
    }
    ,
    de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = a,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = a,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    de.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, de.event.addProp),
    de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        de.event.special[e] = {
            setup: function() {
                return S(this, e, T),
                !1
            },
            trigger: function() {
                return S(this, e),
                !0
            },
            delegateType: t
        }
    }),
    de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        de.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || de.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    de.fn.extend({
        on: function(e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                de(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = w),
                this.each(function() {
                    de.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        }
    });
    var Ke = /<script|<style|<link/i
      , Ze = /checked\s*(?:[^=]|=\s*.checked.)/i
      , et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = Ie(e);
            if (!(ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                for (a = m(c),
                r = 0,
                i = (o = m(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && ze.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || m(e),
                    a = a || m(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        D(o[r], a[r]);
                else
                    D(e, c);
            return 0 < (a = m(c, "script")).length && x(a, !f && m(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = de.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (De(n)) {
                    if (t = n[je.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? de.event.remove(n, r) : de.removeEvent(n, r, t.handle);
                        n[je.expando] = void 0
                    }
                    n[qe.expando] && (n[qe.expando] = void 0)
                }
        }
    }),
    de.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return ke(this, function(e) {
                return void 0 === e ? de.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (de.cleanData(m(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return de.clone(this, e, t)
            })
        },
        html: function(e) {
            return ke(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ke.test(e) && !Ve[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (de.cleanData(m(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return j(this, arguments, function(e) {
                var t = this.parentNode;
                de.inArray(this, n) < 0 && (de.cleanData(m(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        de.fn[e] = function(e) {
            for (var t, n = [], r = de(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                de(r[o])[a](t),
                te.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var tt = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$","i")
      , nt = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , rt = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , it = new RegExp(Re.join("|"),"i");
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                Me.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                Me.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = fe.createElement("div"), l = fe.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        ue.clearCloneStyle = "content-box" === l.style.backgroundClip,
        de.extend(ue, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = fe.createElement("table"),
                t = fe.createElement("tr"),
                n = fe.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                Me.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                Me.removeChild(e)),
                a
            }
        }))
    }();
    var ot = ["Webkit", "Moz", "ms"]
      , at = fe.createElement("div").style
      , st = {}
      , ut = /^(none|table(?!-c[ea]).+)/
      , lt = /^--/
      , ct = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ft = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = p(t), u = lt.test(t), l = e.style;
                return u || (t = O(s)),
                a = de.cssHooks[t] || de.cssHooks[s],
                void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = Pe.exec(n)) && i[1] && (n = h(e, t, i),
                o = "number"),
                void (null != n && n == n && ("number" !== o || u || (n += i && i[3] || (de.cssNumber[s] ? "" : "px")),
                ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = p(t);
            return lt.test(t) || (t = O(s)),
            (a = de.cssHooks[t] || de.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = L(e, t, r)),
            "normal" === i && t in ft && (i = ft[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    de.each(["height", "width"], function(e, u) {
        de.cssHooks[u] = {
            get: function(e, t, n) {
                return t ? !ut.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, u, n) : rt(e, ct, function() {
                    return M(e, u, n)
                }) : void 0
            },
            set: function(e, t, n) {
                var r, i = nt(e), o = !ue.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === de.css(e, "boxSizing", !1, i), s = n ? R(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - R(e, u, "border", !1, i) - .5)),
                s && (r = Pe.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = de.css(e, u)),
                P(0, t, s)
            }
        }
    }),
    de.cssHooks.marginLeft = H(ue.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - rt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        de.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + Re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (de.cssHooks[i + o].set = P)
    }),
    de.fn.extend({
        css: function(e, t) {
            return ke(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = nt(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = de.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? de.style(e, t, n) : de.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((de.Tween = I).prototype = {
        constructor: I,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || de.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (de.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : I.propHooks._default.set(this),
            this
        }
    }).init.prototype = I.prototype,
    (I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !de.cssHooks[e.prop] && null == e.elem.style[O(e.prop)] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    de.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    de.fx = I.prototype.init,
    de.fx.step = {};
    var pt, dt, ht, gt, vt = /^(?:toggle|show|hide)$/, yt = /queueHooks$/;
    de.Animation = de.extend(_, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Pe.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = le(e) ? (t = e,
            ["*"]) : e.match(Ce)).length; r < i; r++)
                n = e[r],
                _.tweeners[n] = _.tweeners[n] || [],
                _.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && Fe(e), v = je.get(e, "fxshow");
            for (r in n.queue || (null == (a = de._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    de.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                vt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || de.style(e, r)
                }
            if ((u = !de.isEmptyObject(t)) || !de.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = je.get(e, "display")),
                "none" === (c = de.css(e, "display")) && (l ? c = l : (y([e], !0),
                l = e.style.display || l,
                c = de.css(e, "display"),
                y([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === de.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = je.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && y([e], !0),
                    p.done(function() {
                        for (r in g || y([e]),
                        je.remove(e, "fxshow"),
                        d)
                            de.style(e, r, d[r])
                    })),
                    u = $(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? _.prefilters.unshift(e) : _.prefilters.push(e)
        }
    }),
    de.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? de.extend({}, e) : {
            complete: n || !n && t || le(e) && e,
            duration: e,
            easing: n && t || t && !le(t) && t
        };
        return de.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in de.fx.speeds ? r.duration = de.fx.speeds[r.duration] : r.duration = de.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            le(r.old) && r.old.call(this),
            r.queue && de.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    de.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Fe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = de.isEmptyObject(t)
              , o = de.speed(e, n, r)
              , a = function() {
                var e = _(this, de.extend({}, t), o);
                (i || je.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = de.timers
                  , r = je.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && yt.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || de.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = je.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = de.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                de.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    de.each(["toggle", "show", "hide"], function(e, r) {
        var i = de.fn[r];
        de.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(B(r, !0), e, t, n)
        }
    }),
    de.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        de.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    de.timers = [],
    de.fx.tick = function() {
        var e, t = 0, n = de.timers;
        for (pt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || de.fx.stop(),
        pt = void 0
    }
    ,
    de.fx.timer = function(e) {
        de.timers.push(e),
        de.fx.start()
    }
    ,
    de.fx.interval = 13,
    de.fx.start = function() {
        dt || (dt = !0,
        W())
    }
    ,
    de.fx.stop = function() {
        dt = null
    }
    ,
    de.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    de.fn.delay = function(r, e) {
        return r = de.fx && de.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    ht = fe.createElement("input"),
    gt = fe.createElement("select").appendChild(fe.createElement("option")),
    ht.type = "checkbox",
    ue.checkOn = "" !== ht.value,
    ue.optSelected = gt.selected,
    (ht = fe.createElement("input")).value = "t",
    ht.type = "radio",
    ue.radioValue = "t" === ht.value;
    var mt, xt = de.expr.attrHandle;
    de.fn.extend({
        attr: function(e, t) {
            return ke(this, de.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e)
            })
        }
    }),
    de.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (i = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? mt : void 0)),
                void 0 !== n ? null === n ? void de.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = de.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.radioValue && "radio" === t && l(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(Ce);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    mt = {
        set: function(e, t, n) {
            return !1 === t ? de.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || de.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o],
            xt[o] = r,
            r = null != a(e, t, n) ? o : null,
            xt[o] = i),
            r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i
      , wt = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return ke(this, de.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[de.propFix[e] || e]
            })
        }
    }),
    de.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t,
                i = de.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ue.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        de.propFix[this.toLowerCase()] = this
    }),
    de.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (le(t))
                return this.each(function(e) {
                    de(this).addClass(t.call(this, e, U(this)))
                });
            if ((e = X(t)).length)
                for (; n = this[u++]; )
                    if (i = U(n),
                    r = 1 === n.nodeType && " " + z(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = z(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (le(t))
                return this.each(function(e) {
                    de(this).removeClass(t.call(this, e, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = X(t)).length)
                for (; n = this[u++]; )
                    if (i = U(n),
                    r = 1 === n.nodeType && " " + z(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = z(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : le(i) ? this.each(function(e) {
                de(this).toggleClass(i.call(this, e, U(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0,
                    n = de(this),
                    r = X(i); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" !== o || ((e = U(this)) && je.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : je.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + z(U(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    de.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = le(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, de(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = de.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = de.valHooks[t.type] || de.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Tt, "") : null == e ? "" : e : void 0
        }
    }),
    de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : z(de.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                            if (t = de(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = de.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < de.inArray(de.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    de.each(["radio", "checkbox"], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                return Array.isArray(t) ? e.checked = -1 < de.inArray(de(e).val(), t) : void 0
            }
        },
        ue.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    ue.focusin = "onfocusin"in C;
    var Ct = /^(?:focusinfocus|focusoutblur)$/
      , Et = function(e) {
        e.stopPropagation()
    };
    de.extend(de.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || fe], d = oe.call(e, "type") ? e.type : e, h = oe.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || fe,
            3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(d + de.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[de.expando] ? e : new de.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : de.makeArray(t, [e]),
            c = de.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !ce(n)) {
                    for (s = c.delegateType || d,
                    Ct.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || fe) && p.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0; (o = p[i++]) && !e.isPropagationStopped(); )
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (je.get(o, "events") || Object.create(null))[e.type] && je.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && De(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !De(n) || u && le(n[d]) && !ce(n) && ((a = n[u]) && (n[u] = null),
                de.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Et),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Et),
                de.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = de.extend(new de.Event, n, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(r, null, t)
        }
    }),
    de.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? de.event.trigger(e, t, n, !0) : void 0
        }
    }),
    ue.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            de.event.simulate(r, e.target, de.event.fix(e))
        };
        de.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = je.access(e, r);
                t || e.addEventListener(n, i, !0),
                je.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = je.access(e, r) - 1;
                t ? je.access(e, r, t) : (e.removeEventListener(n, i, !0),
                je.remove(e, r))
            }
        }
    });
    var St = C.location
      , kt = {
        guid: Date.now()
    }
      , At = /\?/;
    de.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt = /\[\]$/
      , Dt = /\r?\n/g
      , jt = /^(?:submit|button|image|reset|file)$/i
      , qt = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = le(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !de.isPlainObject(e))
            de.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                V(n, e[n], t, i);
        return r.join("&")
    }
    ,
    de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && qt.test(this.nodeName) && !jt.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null : Array.isArray(n) ? de.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ht = /#.*$/
      , Ot = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Rt = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , It = {}
      , Wt = {}
      , Ft = "*/".concat("*")
      , Bt = fe.createElement("a");
    Bt.href = St.href,
    de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, de.ajaxSettings), t) : Q(de.ajaxSettings, e)
        },
        ajaxPrefilter: G(It),
        ajaxTransport: G(Wt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    return o ? (o !== u[0] && u.unshift(o),
                    n[o]) : void 0
                }(v, T, n)),
                !i && -1 < de.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (de.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (de.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --de.active || de.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, r, d, i, h, g, o, a, v = de.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? de(y) : de.event, x = de.Deferred(), b = de.Callbacks("once memory"), w = v.statusCode || {}, s = {}, u = {}, l = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!r)
                            for (r = {}; t = Pt.exec(p); )
                                r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = r[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = u[e.toLowerCase()] = u[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return c && c.abort(t),
                    n(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || St.href) + "").replace(Mt, St.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(Ce) || [""],
            null == v.crossDomain) {
                i = fe.createElement("a");
                try {
                    i.href = v.url,
                    i.href = i.href,
                    v.crossDomain = Bt.protocol + "//" + Bt.host != i.protocol + "//" + i.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = de.param(v.data, v.traditional)),
            Y(It, v, t, T),
            h)
                return T;
            for (o in (g = de.event && v.global) && 0 == de.active++ && de.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Rt.test(v.type),
            f = v.url.replace(Ht, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (a = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Ot, "$1"),
            a = (At.test(f) ? "&" : "?") + "_=" + kt.guid++ + a),
            v.url = f + a),
            v.ifModified && (de.lastModified[f] && T.setRequestHeader("If-Modified-Since", de.lastModified[f]),
            de.etag[f] && T.setRequestHeader("If-None-Match", de.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(o, v.headers[o]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (l = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Y(Wt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(s, n)
                } catch (e) {
                    if (h)
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return de.get(e, void 0, t, "script")
        }
    }),
    de.each(["get", "post"], function(e, i) {
        de[i] = function(e, t, n, r) {
            return le(t) && (r = r || n,
            n = t,
            t = void 0),
            de.ajax(de.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, de.isPlainObject(e) && e))
        }
    }),
    de.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    de._evalUrl = function(e, t, n) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                de.globalEval(e, t, n)
            }
        })
    }
    ,
    de.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (le(e) && (e = e.call(this[0])),
            t = de(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return le(n) ? this.each(function(e) {
                de(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = de(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = le(t);
            return this.each(function(e) {
                de(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                de(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    de.expr.pseudos.hidden = function(e) {
        return !de.expr.pseudos.visible(e)
    }
    ,
    de.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    de.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var $t = {
        0: 200,
        1223: 204
    }
      , _t = de.ajaxSettings.xhr();
    ue.cors = !!_t && "withCredentials"in _t,
    ue.ajax = _t = !!_t,
    de.ajaxTransport(function(i) {
        var o, a;
        return ue.cors || _t && !i.crossDomain ? {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
                    for (n in i.xhrFields)
                        r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                e)
                    r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                        "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t($t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }
                ,
                r.onload = o(),
                a = r.onerror = r.ontimeout = o("error"),
                void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }
                ,
                o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o)
                        throw e
                }
            },
            abort: function() {
                o && o()
            }
        } : void 0
    }),
    de.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e),
                e
            }
        }
    }),
    de.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    de.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = de("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    fe.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var zt, Ut = [], Xt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || de.expando + "_" + kt.guid++;
            return this[e] = !0,
            e
        }
    }),
    de.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = le(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        a ? e[a] = e[a].replace(Xt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
        e.converters["script json"] = function() {
            return o || de.error(r + " was not called"),
            o[0]
        }
        ,
        e.dataTypes[0] = "json",
        i = C[r],
        C[r] = function() {
            o = arguments
        }
        ,
        n.always(function() {
            void 0 === i ? de(C).removeProp(r) : C[r] = i,
            e[r] && (e.jsonpCallback = t.jsonpCallback,
            Ut.push(r)),
            o && le(i) && i(o[0]),
            o = i = void 0
        }),
        "script") : void 0
    }),
    ue.createHTMLDocument = ((zt = fe.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === zt.childNodes.length),
    de.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (ue.createHTMLDocument ? ((r = (t = fe.implementation.createHTMLDocument("")).createElement("base")).href = fe.location.href,
        t.head.appendChild(r)) : t = fe),
        o = !n && [],
        (i = me.exec(e)) ? [t.createElement(i[1])] : (i = b([e], t, o),
        o && o.length && de(o).remove(),
        de.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    de.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = z(e.slice(s)),
        e = e.slice(0, s)),
        le(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && de.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? de("<div>").append(de.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    de.expr.pseudos.animated = function(t) {
        return de.grep(de.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    de.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = de.css(e, "position"), c = de(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = de.css(e, "top"),
            u = de.css(e, "left"),
            i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            r.left) : (a = parseFloat(o) || 0,
            parseFloat(u) || 0),
            le(t) && (t = t.call(e, n, de.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    de.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    de.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === de.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === de.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = de(e).offset()).top += de.css(e, "borderTopWidth", !0),
                    i.left += de.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - de.css(r, "marginTop", !0),
                    left: t.left - i.left - de.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === de.css(e, "position"); )
                    e = e.offsetParent;
                return e || Me
            })
        }
    }),
    de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        de.fn[t] = function(e) {
            return ke(this, function(e, t, n) {
                var r;
                return ce(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    de.each(["top", "left"], function(e, n) {
        de.cssHooks[n] = H(ue.pixelPosition, function(e, t) {
            return t ? (t = L(e, n),
            tt.test(t) ? de(e).position()[n] + "px" : t) : void 0
        })
    }),
    de.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        de.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            de.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return ke(this, function(e, t, n) {
                    var r;
                    return ce(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? de.css(e, t, i) : de.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    de.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        de.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    de.proxy = function(e, t) {
        var n, r, i;
        return "string" == typeof t && (n = e[t],
        t = e,
        e = n),
        le(e) ? (r = Z.call(arguments, 2),
        (i = function() {
            return e.apply(t || this, r.concat(Z.call(arguments)))
        }
        ).guid = e.guid = e.guid || de.guid++,
        i) : void 0
    }
    ,
    de.holdReady = function(e) {
        e ? de.readyWait++ : de.ready(!0)
    }
    ,
    de.isArray = Array.isArray,
    de.parseJSON = JSON.parse,
    de.nodeName = l,
    de.isFunction = le,
    de.isWindow = ce,
    de.camelCase = p,
    de.type = v,
    de.now = Date.now,
    de.isNumeric = function(e) {
        var t = de.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    de.trim = function(e) {
        return null == e ? "" : (e + "").replace(Vt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return de
    });
    var Gt = C.jQuery
      , Yt = C.$;
    return de.noConflict = function(e) {
        return C.$ === de && (C.$ = Yt),
        e && C.jQuery === de && (C.jQuery = Gt),
        de
    }
    ,
    void 0 === e && (C.jQuery = C.$ = de),
    de
});
