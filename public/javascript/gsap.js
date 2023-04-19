!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function r(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function k(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var F, i, n, s, e, a, l, o, u, h, f, p, c, _, d, m, g, v, y, w, x, T, b, M, Y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, E = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, O = 1e8, B = 1 / O, C = 2 * Math.PI, A = C / 4, D = 0, P = Math.sqrt, S = Math.cos, z = Math.sin, U = function(t) {
        return "string" == typeof t
    }, R = function(t) {
        return "function" == typeof t
    }, L = function(t) {
        return "number" == typeof t
    }, I = function(t) {
        return void 0 === t
    }, N = function(t) {
        return "object" == typeof t
    }, X = function(t) {
        return !1 !== t
    }, q = function() {
        return "undefined" != typeof window
    }, V = function(t) {
        return R(t) || U(t)
    }, j = Array.isArray, Q = /(?:-?\.?\d|\.)+/gi, G = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, W = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Z = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, H = /\(([^()]+)\)/i, $ = /[+-]=-?[\.\d]+/, J = /[#\-+.]*\b[a-z\d-=+%.]+/gi, K = {}, tt = {}, et = function(t) {
        return (tt = Ct(t, K)) && sr
    }, rt = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, it = function(t, e) {
        return !e && console.warn(t)
    }, nt = function(t, e) {
        return t && (K[t] = e) && tt && (tt[t] = e) || K
    }, st = function() {
        return 0
    }, at = {}, ot = [], ut = {}, ht = {}, lt = {}, ft = 30, pt = [], ct = "", _t = function(t) {
        var e, r, i = t[0];
        if (N(i) || R(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = pt.length; r-- && !pt[r].targetTest(i); )
                ;
            e = pt[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Se(t[r],e))) || t.splice(r, 1);
        return t
    }, dt = function(t) {
        return t._gsap || _t($t(t))[0]._gsap
    }, mt = function(t, e) {
        var r = t[e];
        return R(r) ? t[e]() : I(r) && t.getAttribute(e) || r
    }, gt = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, vt = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, yt = function(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }, wt = function(t, e, r) {
        var i, n = L(t[1]), s = (n ? 2 : 1) + (e < 2 ? 0 : 1), a = t[s];
        if (n && (a.duration = t[1]),
        a.parent = r,
        e) {
            for (i = a; r && !("immediateRender"in i); )
                i = r.vars.defaults || {},
                r = X(r.vars.inherit) && r.parent;
            a.immediateRender = X(i.immediateRender),
            e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
        }
        return a
    }, xt = function() {
        var t, e, r = ot.length, i = ot.slice(0);
        for (ut = {},
        t = ot.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, Tt = function(t, e, r, i) {
        ot.length && xt(),
        t.render(e, r, i),
        ot.length && xt()
    }, bt = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(J).length < 2 ? e : t
    }, Mt = function(t) {
        return t
    }, Ot = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, kt = function(t, e) {
        for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }, Ct = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, At = function t(e, r) {
        for (var i in r)
            e[i] = N(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i];
        return e
    }, Dt = function(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }, Pt = function(t) {
        var e = t.parent || F
          , r = t.keyframes ? kt : Ot;
        if (X(t.inherit))
            for (; e; )
                r(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }, St = function(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , s = e._next;
        n ? n._next = s : t[r] === e && (t[r] = s),
        s ? s._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }, zt = function(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }, Rt = function(t) {
        for (var e = t; e; )
            e._dirty = 1,
            e = e.parent;
        return t
    }, Ft = function(t) {
        return t._repeat ? Et(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, Et = function(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    }, Bt = function(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, Lt = function(t) {
        return t._end = vt(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0))
    }, It = function(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Bt(t.rawTime(), e),
        (!e._dur || Gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)),
        Rt(t)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -B
        }
    }, Yt = function(t, e, r, i) {
        return e.parent && zt(e),
        e._start = vt(r + e._delay),
        e._end = vt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, r, i, n) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var s, a = t[i];
            if (n)
                for (s = e[n]; a && a[n] > s; )
                    a = a._prev;
            a ? (e._next = a._next,
            a._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = a,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        t._recent = e,
        i || It(t, e),
        t
    }, Ut = function(t, e) {
        return (K.ScrollTrigger || rt("scrollTrigger", e)) && K.ScrollTrigger.create(e, t)
    }, Nt = function(t, e, r, i) {
        return Le(t, e),
        t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && a !== ve.frame ? (ot.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }, Xt = function(t, e, r) {
        var i = t._repeat
          , n = vt(e) || 0;
        return t._dur = n,
        t._tDur = i ? i < 0 ? 1e10 : vt(n * (i + 1) + t._rDelay * i) : n,
        t._time > n && (t._time = n,
        t._tTime = Math.min(t._tTime, t._tDur)),
        !r && Rt(t.parent),
        t.parent && Lt(t),
        t
    }, qt = function(t) {
        return t instanceof Re ? Rt(t) : Xt(t, t._dur)
    }, Vt = {
        _start: 0,
        endTime: st
    }, jt = function t(e, r) {
        var i, n, s = e.labels, a = e._recent || Vt, o = e.duration() >= O ? a.endTime(!1) : e._dur;
        return U(r) && (isNaN(r) || r in s) ? "<" === (i = r.charAt(0)) || ">" === i ? ("<" === i ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(r.substr(1)) || 0) : (i = r.indexOf("=")) < 0 ? (r in s || (s[r] = o),
        s[r]) : (n = +(r.charAt(i - 1) + r.substr(i + 1)),
        1 < i ? t(e, r.substr(0, i - 1)) + n : o + n) : null == r ? o : +r
    }, Qt = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, Gt = function(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, Wt = function(t) {
        return (t + "").substr((parseFloat(t) + "").length)
    }, Zt = [].slice, Ht = function(t, e) {
        return t && N(t) && "length"in t && (!e && !t.length || t.length - 1 in t && N(t[0])) && !t.nodeType && t !== i
    }, $t = function(t, e) {
        return !U(t) || e || !n && ye() ? j(t) ? (r = e,
        void 0 === i && (i = []),
        t.forEach(function(t) {
            var e;
            return U(t) && !r || Ht(t, 1) ? (e = i).push.apply(e, $t(t)) : i.push(t)
        }) || i) : Ht(t) ? Zt.call(t, 0) : t ? [t] : [] : Zt.call(s.querySelectorAll(t), 0);
        var r, i
    }, Jt = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }, Kt = function(t) {
        if (R(t))
            return t;
        var _ = N(t) ? t : {
            each: t
        }
          , d = ke(_.ease)
          , m = _.from || 0
          , g = parseFloat(_.base) || 0
          , v = {}
          , e = 0 < m && m < 1
          , y = isNaN(m) || e
          , w = _.axis
          , x = m
          , T = m;
        return U(m) ? x = T = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && y && (x = m[0],
        T = m[1]),
        function(t, e, r) {
            var i, n, s, a, o, u, h, l, f, p = (r || _).length, c = v[p];
            if (!c) {
                if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, O])[1])) {
                    for (h = -O; h < (h = r[f++].getBoundingClientRect().left) && f < p; )
                        ;
                    f--
                }
                for (c = v[p] = [],
                i = y ? Math.min(f, p) * x - .5 : m % f,
                n = y ? p * T / f - .5 : m / f | 0,
                l = O,
                u = h = 0; u < p; u++)
                    s = u % f - i,
                    a = n - (u / f | 0),
                    c[u] = o = w ? Math.abs("y" === w ? a : s) : P(s * s + a * a),
                    h < o && (h = o),
                    o < l && (l = o);
                "random" === m && Jt(c),
                c.max = h - l,
                c.min = l,
                c.v = p = (parseFloat(_.amount) || parseFloat(_.each) * (p < f ? p - 1 : w ? "y" === w ? p / f : f : Math.max(f, p / f)) || 0) * ("edges" === m ? -1 : 1),
                c.b = p < 0 ? g - p : g,
                c.u = Wt(_.amount || _.each) || 0,
                d = d && p < 0 ? Me(d) : d
            }
            return p = (c[t] - c.min) / c.max || 0,
            vt(c.b + (d ? d(p) : p) * c.v) + c.u
        }
    }, te = function(e) {
        var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function(t) {
            return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (L(t) ? 0 : Wt(t))
        }
    }, ee = function(u, t) {
        var h, l, e = j(u);
        return !e && N(u) && (h = e = u.radius || O,
        u.values ? (u = $t(u.values),
        (l = !L(u[0])) && (h *= h)) : u = te(u.increment)),
        Qt(t, e ? R(u) ? function(t) {
            return l = u(t),
            Math.abs(l - t) <= h ? l : t
        }
        : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), s = O, a = 0, o = u.length; o--; )
                (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < s && (s = e,
                a = o);
            return a = !h || s <= h ? u[a] : t,
            l || a === t || L(t) ? a : a + Wt(t)
        }
        : te(u))
    }, re = function(t, e, r, i) {
        return Qt(j(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return j(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
        })
    }, ie = function(e, r, t) {
        return Qt(t, function(t) {
            return e[~~r(t)]
        })
    }, ne = function(t) {
        for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? J : Q),
            a += t.substr(s, e - s) + re(n ? r : +r[0], +r[1], +r[2] || 1e-5),
            s = i + 1;
        return a + t.substr(s, t.length - s)
    }, se = function(e, t, r, i, n) {
        var s = t - e
          , a = i - r;
        return Qt(n, function(t) {
            return r + ((t - e) / s * a || 0)
        })
    }, ae = function(t, e, r) {
        var i, n, s, a = t.labels, o = O;
        for (i in a)
            (n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i,
            o = n);
        return s
    }, oe = function(t, e, r) {
        var i, n, s = t.vars, a = s[e];
        if (a)
            return i = s[e + "Params"],
            n = s.callbackScope || t,
            r && ot.length && xt(),
            i ? a.apply(n, i) : void 0 !== a.call ? a.call(n) : null
    }, ue = function(t) {
        return zt(t),
        t.progress() < 1 && oe(t, "onInterrupt"),
        t
    }, he = 255, le = {
        aqua: [0, he, he],
        lime: [0, he, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, he],
        navy: [0, 0, 128],
        white: [he, he, he],
        olive: [128, 128, 0],
        yellow: [he, he, 0],
        orange: [he, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [he, 0, 0],
        pink: [he, 192, 203],
        cyan: [0, he, he],
        transparent: [he, he, he, 0]
    }, fe = function(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * he + .5 | 0
    }, pe = function(t, e, r) {
        var i, n, s, a, o, u, h, l, f, p, c = t ? L(t) ? [t >> 16, t >> 8 & he, t & he] : 0 : le.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            le[t])
                c = le[t];
            else if ("#" === t.charAt(0))
                4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s),
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & he, t & he];
            else if ("hsl" === t.substr(0, 3))
                if (c = p = t.match(Q),
                e) {
                    if (~t.indexOf("="))
                        return c = t.match(G),
                        r && c.length < 4 && (c[3] = 1),
                        c
                } else
                    a = +c[0] % 360 / 360,
                    o = +c[1] / 100,
                    i = 2 * (u = +c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < c.length && (c[3] *= 1),
                    c[0] = fe(a + 1 / 3, i, n),
                    c[1] = fe(a, i, n),
                    c[2] = fe(a - 1 / 3, i, n);
            else
                c = t.match(Q) || le.transparent;
            c = c.map(Number)
        }
        return e && !p && (i = c[0] / he,
        n = c[1] / he,
        s = c[2] / he,
        u = ((h = Math.max(i, n, s)) + (l = Math.min(i, n, s))) / 2,
        h === l ? a = o = 0 : (f = h - l,
        o = .5 < u ? f / (2 - h - l) : f / (h + l),
        a = h === i ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - i) / f + 2 : (i - n) / f + 4,
        a *= 60),
        c[0] = ~~(a + .5),
        c[1] = ~~(100 * o + .5),
        c[2] = ~~(100 * u + .5)),
        r && c.length < 4 && (c[3] = 1),
        c
    }, ce = function(t) {
        var r = []
          , i = []
          , n = -1;
        return t.split(de).forEach(function(t) {
            var e = t.match(W) || [];
            r.push.apply(r, e),
            i.push(n += e.length + 1)
        }),
        r.c = i,
        r
    }, _e = function(t, e, r) {
        var i, n, s, a, o = "", u = (t + o).match(de), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = pe(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (s = ce(t),
        (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(de, "1").split(W)).length - 1; l < a; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
        if (!n)
            for (a = (n = t.split(de)).length - 1; l < a; l++)
                o += n[l] + u[l];
        return o + n[a]
    }, de = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in le)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), me = /hsl[a]?\(/, ge = function(t) {
        var e, r = t.join(" ");
        if (de.lastIndex = 0,
        de.test(r))
            return e = me.test(r),
            t[1] = _e(t[1], e),
            t[0] = _e(t[0], e, ce(t[1])),
            !0
    }, ve = (c = Date.now,
    _ = 500,
    d = 33,
    m = c(),
    g = m,
    y = v = 1 / 240,
    x = function t(e) {
        var r, i, n = c() - g, s = !0 === e;
        _ < n && (m += n - d),
        g += n,
        p.time = (g - m) / 1e3,
        (0 < (r = p.time - y) || s) && (p.frame++,
        y += r + (v <= r ? .004 : v - r),
        i = 1),
        s || (u = h(t)),
        i && w.forEach(function(t) {
            return t(p.time, n, p.frame, e)
        })
    }
    ,
    p = {
        time: 0,
        frame: 0,
        tick: function() {
            x(!0)
        },
        wake: function() {
            e && (!n && q() && (i = n = window,
            s = i.document || {},
            K.gsap = sr,
            (i.gsapVersions || (i.gsapVersions = [])).push(sr.version),
            et(tt || i.GreenSockGlobals || !i.gsap && i || {}),
            f = i.requestAnimationFrame),
            u && p.sleep(),
            h = f || function(t) {
                return setTimeout(t, 1e3 * (y - p.time) + 1 | 0)
            }
            ,
            o = 1,
            x(2))
        },
        sleep: function() {
            (f ? i.cancelAnimationFrame : clearTimeout)(u),
            o = 0,
            h = st
        },
        lagSmoothing: function(t, e) {
            _ = t || 1e8,
            d = Math.min(e, _, 0)
        },
        fps: function(t) {
            v = 1 / (t || 240),
            y = p.time + v
        },
        add: function(t) {
            w.indexOf(t) < 0 && w.push(t),
            ye()
        },
        remove: function(t) {
            var e;
            ~(e = w.indexOf(t)) && w.splice(e, 1)
        },
        _listeners: w = []
    }), ye = function() {
        return !o && ve.wake()
    }, we = {}, xe = /^[\d.\-M][\d.\-,\s]/, Te = /["']/g, be = function(t) {
        var e = (t + "").split("(")
          , r = we[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function(t) {
            for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++)
                r = s[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[a] = isNaN(i) ? i.replace(Te, "").trim() : +i,
                a = r.substr(e + 1).trim();
            return n
        }(e[1])] : H.exec(t)[1].split(",").map(bt)) : we._CE && xe.test(t) ? we._CE("", t) : r
    }, Me = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Oe = function t(e, r) {
        for (var i, n = e._first; n; )
            n instanceof Re ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease,
            n._ease = n._yEase,
            n._yEase = i,
            n._yoyo = r)),
            n = n._next
    }, ke = function(t, e) {
        return t && (R(t) ? t : we[t] || be(t)) || e
    }, Ce = function(t, e, r, i) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return gt(t, function(t) {
            for (var e in we[t] = K[t] = s,
            we[n = t.toLowerCase()] = r,
            s)
                we[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = we[t + "." + e] = s[e]
        }),
        s
    }, Ae = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }, De = function r(i, t, e) {
        var n = 1 <= t ? t : 1
          , s = (e || (i ? .3 : .45)) / (t < 1 ? t : 1)
          , a = s / C * (Math.asin(1 / n) || 0)
          , o = function(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * z((t - a) * s) + 1
        }
          , u = "out" === i ? o : "in" === i ? function(t) {
            return 1 - o(1 - t)
        }
        : Ae(o);
        return s = C / s,
        u.config = function(t, e) {
            return r(i, t, e)
        }
        ,
        u
    }, Pe = function e(r, i) {
        void 0 === i && (i = 1.70158);
        var n = function(t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
        }
          , t = "out" === r ? n : "in" === r ? function(t) {
            return 1 - n(1 - t)
        }
        : Ae(n);
        return t.config = function(t) {
            return e(r, t)
        }
        ,
        t
    };
    gt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Ce(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }),
    we.Linear.easeNone = we.none = we.Linear.easeIn,
    Ce("Elastic", De("in"), De("out"), De()),
    T = 7.5625,
    b = 1 / 2.75,
    Ce("Bounce", function(t) {
        return 1 - M(1 - t)
    }, M = function(t) {
        return t < b ? T * t * t : t < .7272727272727273 ? T * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? T * (t -= 2.25 / 2.75) * t + .9375 : T * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ),
    Ce("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Ce("Circ", function(t) {
        return -(P(1 - t * t) - 1)
    }),
    Ce("Sine", function(t) {
        return 1 === t ? 1 : 1 - S(t * A)
    }),
    Ce("Back", Pe("in"), Pe("out"), Pe()),
    we.SteppedEase = we.steps = K.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , i = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((i * Gt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    E.ease = we["quad.out"],
    gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ct += t + "," + t + "Params,"
    });
    var Se = function(t, e) {
        this.id = D++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : mt,
        this.set = e ? e.getSetter : Qe
    }
      , ze = function() {
        function t(t, e) {
            var r = t.parent || F;
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Xt(this, +t.duration, 1),
            this.data = t.data,
            o || ve.wake(),
            r && Yt(r, this, e || 0 === e ? e : r._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0)
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            Xt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (ye(),
            !arguments.length)
                return this._tTime;
            var r = this.parent || this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (this._start = vt(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)),
                Lt(this),
                r._dirty || Rt(r); r.parent; )
                    r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Yt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B || !t && !this._initted) && (this._ts || (this._pTime = t),
            Tt(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ft(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ft(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Et(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(t) {
            if (!arguments.length)
                return this._rts === -B ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || t === -B ? 0 : this._rts,
            function(t) {
                for (var e = t.parent; e && e.parent; )
                    e._dirty = 1,
                    e.totalDuration(),
                    e = e.parent;
                return t
            }(this.totalTime(Gt(0, this._tDur, e), !0))
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (ye(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Yt(e, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            qt(this)) : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            return arguments.length ? (this._rDelay = t,
            qt(this)) : this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(jt(this, t), X(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, X(e))
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = 0,
            this._zTime = -B,
            this
        }
        ,
        e.isActive = function(t) {
            var e, r = this.parent || this._dp, i = this._start;
            return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B))
        }
        ,
        e.eventCallback = function(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e,
            r && (i[t + "Params"] = r),
            "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
            this) : i[t]
        }
        ,
        e.then = function(i) {
            var n = this;
            return new Promise(function(e) {
                var r = R(i) ? i : Mt
                  , t = function() {
                    var t = n.then;
                    n.then = null,
                    R(r) && (r = r(n)) && (r.then || r === n) && (n.then = t),
                    e(r),
                    n.then = t
                };
                n._initted && 1 === n.totalProgress() && 0 <= n._ts || !n._tTime && n._ts < 0 ? t() : n._prom = t
            }
            )
        }
        ,
        e.kill = function() {
            ue(this)
        }
        ,
        t
    }();
    Ot(ze.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -B,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Re = function(i) {
        function t(t, e) {
            var r;
            return void 0 === t && (t = {}),
            (r = i.call(this, t, e) || this).labels = {},
            r.smoothChildTiming = !!t.smoothChildTiming,
            r.autoRemoveChildren = !!t.autoRemoveChildren,
            r._sort = X(t.sortChildren),
            r.parent && It(r.parent, k(r)),
            t.scrollTrigger && Ut(k(r), t.scrollTrigger),
            r
        }
        r(t, i);
        var e = t.prototype;
        return e.to = function(t, e, r) {
            return new Ne(t,wt(arguments, 0, this),jt(this, L(e) ? arguments[3] : r)),
            this
        }
        ,
        e.from = function(t, e, r) {
            return new Ne(t,wt(arguments, 1, this),jt(this, L(e) ? arguments[3] : r)),
            this
        }
        ,
        e.fromTo = function(t, e, r, i) {
            return new Ne(t,wt(arguments, 2, this),jt(this, L(e) ? arguments[4] : i)),
            this
        }
        ,
        e.set = function(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            Pt(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new Ne(t,e,jt(this, r),1),
            this
        }
        ,
        e.call = function(t, e, r) {
            return Yt(this, Ne.delayedCall(0, t, e), jt(this, r))
        }
        ,
        e.staggerTo = function(t, e, r, i, n, s, a) {
            return r.duration = e,
            r.stagger = r.stagger || i,
            r.onComplete = s,
            r.onCompleteParams = a,
            r.parent = this,
            new Ne(t,r,jt(this, n)),
            this
        }
        ,
        e.staggerFrom = function(t, e, r, i, n, s, a) {
            return r.runBackwards = 1,
            Pt(r).immediateRender = X(r.immediateRender),
            this.staggerTo(t, e, r, i, n, s, a)
        }
        ,
        e.staggerFromTo = function(t, e, r, i, n, s, a, o) {
            return i.startAt = r,
            Pt(i).immediateRender = X(i.immediateRender),
            this.staggerTo(t, e, i, n, s, a, o)
        }
        ,
        e.render = function(t, e, r) {
            var i, n, s, a, o, u, h, l, f, p, c, _, d = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t, y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (d !== this._time && g && (v += this._time - d,
                t += this._time - d),
                i = v,
                f = this._start,
                u = !(l = this._ts),
                y && (g || (d = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat && (c = this._yoyo,
                o = g + this._rDelay,
                (g < (i = vt(v % o)) || m === v) && (i = g),
                (a = ~~(v / o)) && a === v / o && (i = g,
                a--),
                p = Et(this._tTime, o),
                !d && this._tTime && p !== a && (p = a),
                c && 1 & a && (i = g - i,
                _ = 1),
                a !== p && !this._lock)) {
                    var w = c && 1 & p
                      , x = w === (c && 1 & a);
                    if (a < p && (w = !w),
                    d = w ? 0 : g,
                    this._lock = 1,
                    this.render(d || (_ ? 0 : vt(a * o)), e, !g)._lock = 0,
                    !e && this.parent && oe(this, "onRepeat"),
                    this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                    d !== this._time || u !== !this._ts)
                        return this;
                    if (x && (this._lock = 2,
                    d = w ? g + 1e-4 : -1e-4,
                    this.render(d, !0),
                    this.vars.repeatRefresh && !_ && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !u)
                        return this;
                    Oe(this, _)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, r) {
                    var i;
                    if (e < r)
                        for (i = t._first; i && i._start <= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, vt(d), vt(i))) && (v -= i - (i = h._start)),
                this._tTime = v,
                this._time = i,
                this._act = !l,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t),
                d || !i || e || oe(this, "onStart"),
                d <= i && 0 <= t)
                    for (n = this._first; n; ) {
                        if (s = n._next,
                        (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                s && (v += this._zTime = -B);
                                break
                            }
                        }
                        n = s
                    }
                else {
                    n = this._last;
                    for (var T = t < 0 ? t : i; n; ) {
                        if (s = n._prev,
                        (n._act || T <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (T - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (T - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                s && (v += this._zTime = T ? -B : B);
                                break
                            }
                        }
                        n = s
                    }
                }
                if (h && !e && (this.pause(),
                h.render(d <= i ? 0 : -B)._zTime = d <= i ? 1 : -1,
                this._ts))
                    return this._start = f,
                    Lt(this),
                    this.render(t, e, r);
                this._onUpdate && !e && oe(this, "onUpdate", !0),
                (v === m && m >= this.totalDuration() || !v && d) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || ((t || !g) && (v === m && 0 < this._ts || !v && this._ts < 0) && zt(this, 1),
                e || t < 0 && !d || !v && !d || (oe(this, v === m ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(v < m && 0 < this.timeScale()) && this._prom())))
            }
            return this
        }
        ,
        e.add = function(t, e) {
            var r = this;
            if (L(e) || (e = jt(this, e)),
            !(t instanceof ze)) {
                if (j(t))
                    return t.forEach(function(t) {
                        return r.add(t, e)
                    }),
                    Rt(this);
                if (U(t))
                    return this.addLabel(t, e);
                if (!R(t))
                    return this;
                t = Ne.delayedCall(0, t)
            }
            return this !== t ? Yt(this, t, e) : this
        }
        ,
        e.getChildren = function(t, e, r, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -O);
            for (var n = [], s = this._first; s; )
                s._start >= i && (s instanceof Ne ? e && n.push(s) : (r && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, r)))),
                s = s._next;
            return n
        }
        ,
        e.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        e.remove = function(t) {
            return U(t) ? this.removeLabel(t) : R(t) ? this.killTweensOf(t) : (St(this, t),
            t === this._recent && (this._recent = this._last),
            Rt(this))
        }
        ,
        e.totalTime = function(t, e) {
            return arguments.length ? (this._forcing = 1,
            this.parent || this._dp || !this._ts || (this._start = vt(ve.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function(t, e) {
            return this.labels[t] = jt(this, e),
            this
        }
        ,
        e.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function(t, e, r) {
            var i = Ne.delayedCall(0, e || st, r);
            return i.data = "isPause",
            this._hasPause = 1,
            Yt(this, i, jt(this, t))
        }
        ,
        e.removePause = function(t) {
            var e = this._first;
            for (t = jt(this, t); e; )
                e._start === t && "isPause" === e.data && zt(e),
                e = e._next
        }
        ,
        e.killTweensOf = function(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Fe !== i[n] && i[n].kill(t, e);
            return this
        }
        ,
        e.getTweensOf = function(t, e) {
            for (var r, i = [], n = $t(t), s = this._first; s; )
                s instanceof Ne ? !yt(s._targets, n) || e && !s.isActive("started" === e) || i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                s = s._next;
            return i
        }
        ,
        e.tweenTo = function(t, e) {
            e = e || {};
            var r = this
              , i = jt(r, t)
              , n = e
              , s = n.startAt
              , a = n.onStart
              , o = n.onStartParams
              , u = Ne.to(r, Ot(e, {
                ease: "none",
                lazy: !1,
                time: i,
                duration: e.duration || Math.abs((i - (s && "time"in s ? s.time : r._time)) / r.timeScale()) || B,
                onStart: function() {
                    r.pause();
                    var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                    u._dur !== t && Xt(u, t).render(u._time, !0, !0),
                    a && a.apply(u, o || [])
                }
            }));
            return u
        }
        ,
        e.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, Ot({
                startAt: {
                    time: jt(this, t)
                }
            }, r))
        }
        ,
        e.recent = function() {
            return this._recent
        }
        ,
        e.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            ae(this, jt(this, t))
        }
        ,
        e.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            ae(this, jt(this, t), 1)
        }
        ,
        e.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B)
        }
        ,
        e.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n; )
                n._start >= r && (n._start += t),
                n = n._next;
            if (e)
                for (i in s)
                    s[i] >= r && (s[i] += t);
            return Rt(this)
        }
        ,
        e.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return i.prototype.invalidate.call(this)
        }
        ,
        e.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._time = this._tTime = this._pTime = 0,
            t && (this.labels = {}),
            Rt(this)
        }
        ,
        e.totalDuration = function(t) {
            var e, r, i, n, s = 0, a = this, o = a._last, u = O;
            if (arguments.length)
                return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (n = a.parent; o; )
                    e = o._prev,
                    o._dirty && o.totalDuration(),
                    u < (i = o._start) && a._sort && o._ts && !a._lock ? (a._lock = 1,
                    Yt(a, o, i - o._delay, 1)._lock = 0) : u = i,
                    i < 0 && o._ts && (s -= i,
                    (!n && !a._dp || n && n.smoothChildTiming) && (a._start += i / a._ts,
                    a._time -= i,
                    a._tTime -= i),
                    a.shiftChildren(-i, !1, -Infinity),
                    u = 0),
                    s < (r = Lt(o)) && o._ts && (s = r),
                    o = e;
                Xt(a, a === F && a._time > s ? a._time : s, 1),
                a._dirty = 0
            }
            return a._tDur
        }
        ,
        t.updateRoot = function(t) {
            if (F._ts && (Tt(F, Bt(t, F)),
            a = ve.frame),
            ve.frame >= ft) {
                ft += Y.autoSleep || 120;
                var e = F._first;
                if ((!e || !e._ts) && Y.autoSleep && ve._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || ve.sleep()
                }
            }
        }
        ,
        t
    }(ze);
    Ot(Re.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Fe, Ee = function(t, e, r, i, n, s, a, o, u) {
        R(i) && (i = i(n || 0, t, s));
        var h, l = t[e], f = "get" !== r ? r : R(l) ? u ? t[e.indexOf("set") || !R(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l, p = R(l) ? u ? Ve : qe : Xe;
        if (U(i) && (~i.indexOf("random(") && (i = ne(i)),
        "=" === i.charAt(1) && (i = parseFloat(f) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Wt(f) || 0))),
        f !== i)
            return isNaN(f + i) ? (!l && !(e in t) && rt(e, i),
            function(t, e, r, i, n, s, a) {
                var o, u, h, l, f, p, c, _, d = new er(this._pt,t,e,0,1,Ze,null,n), m = 0, g = 0;
                for (d.b = r,
                d.e = i,
                r += "",
                (c = ~(i += "").indexOf("random(")) && (i = ne(i)),
                s && (s(_ = [r, i], t, e),
                r = _[0],
                i = _[1]),
                u = r.match(Z) || []; o = Z.exec(i); )
                    l = o[0],
                    f = i.substring(m, o.index),
                    h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                    l !== u[g++] && (p = parseFloat(u[g - 1]) || 0,
                    d._pt = {
                        _next: d._pt,
                        p: f || 1 === g ? f : ",",
                        s: p,
                        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - p,
                        m: h && h < 4 ? Math.round : 0
                    },
                    m = Z.lastIndex);
                return d.c = m < i.length ? i.substring(m, i.length) : "",
                d.fp = a,
                ($.test(i) || c) && (d.e = 0),
                this._pt = d
            }
            .call(this, t, e, f, i, p, o || Y.stringFilter, u)) : (h = new er(this._pt,t,e,+f || 0,i - (f || 0),"boolean" == typeof l ? We : Ge,0,p),
            u && (h.fp = u),
            a && h.modifier(a, this, t),
            this._pt = h)
    }, Be = function(t, e, r, i, n, s) {
        var a, o, u, h;
        if (ht[t] && !1 !== (a = new ht[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
            if (R(t) && (t = Ie(t, n, e, r, i)),
            !N(t) || t.style && t.nodeType || j(t))
                return U(t) ? Ie(t, n, e, r, i) : t;
            var s, a = {};
            for (s in t)
                a[s] = Ie(t[s], n, e, r, i);
            return a
        }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new er(r._pt,n,t,0,1,a.render,a,0,a.priority),
        r !== l))
            for (u = r._ptLookup[r._targets.indexOf(n)],
            h = a._props.length; h--; )
                u[a._props[h]] = o;
        return a
    }, Le = function t(e, r) {
        var i, n, s, a, o, u, h, l, f, p, c, _, d = e.vars, m = d.ease, g = d.startAt, v = d.immediateRender, y = d.lazy, w = d.onUpdate, x = d.onUpdateParams, T = d.callbackScope, b = d.runBackwards, M = d.yoyoEase, O = d.keyframes, k = d.autoRevert, C = e._dur, A = e._startAt, D = e._targets, P = e.parent, S = P && "nested" === P.data ? P.parent._targets : D, z = "auto" === e._overwrite, R = e.timeline;
        if (R && (!O || !m) && (m = "none"),
        e._ease = ke(m, E.ease),
        e._yEase = M ? Me(ke(!0 === M ? m : M, E.ease)) : 0,
        M && e._yoyo && !e._repeat && (M = e._yEase,
        e._yEase = e._ease,
        e._ease = M),
        !R) {
            if (_ = (l = D[0] ? dt(D[0]).harness : 0) && d[l.prop],
            i = Dt(d, at),
            A && A.render(-1, !0).kill(),
            g) {
                if (zt(e._startAt = Ne.set(D, Ot({
                    data: "isStart",
                    overwrite: !1,
                    parent: P,
                    immediateRender: !0,
                    lazy: X(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: x,
                    callbackScope: T,
                    stagger: 0
                }, g))),
                v)
                    if (0 < r)
                        !k && (e._startAt = 0);
                    else if (C)
                        return
            } else if (b && C)
                if (A)
                    !k && (e._startAt = 0);
                else if (r && (v = !1),
                s = Ot({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: v && X(y),
                    immediateRender: v,
                    stagger: 0,
                    parent: P
                }, i),
                _ && (s[l.prop] = _),
                zt(e._startAt = Ne.set(D, s)),
                v) {
                    if (!r)
                        return
                } else
                    t(e._startAt, B);
            for (e._pt = 0,
            y = C && X(y) || y && !C,
            n = 0; n < D.length; n++) {
                if (h = (o = D[n])._gsap || _t(D)[n]._gsap,
                e._ptLookup[n] = p = {},
                ut[h.id] && xt(),
                c = S === D ? n : S.indexOf(o),
                l && !1 !== (f = new l).init(o, _ || i, e, c, S) && (e._pt = a = new er(e._pt,o,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(t) {
                    p[t] = a
                }),
                f.priority && (u = 1)),
                !l || _)
                    for (s in i)
                        ht[s] && (f = Be(s, i, e, c, o, S)) ? f.priority && (u = 1) : p[s] = a = Ee.call(e, o, s, "get", i[s], c, S, 0, d.stringFilter);
                e._op && e._op[n] && e.kill(o, e._op[n]),
                z && e._pt && (Fe = e,
                F.killTweensOf(o, p, "started"),
                Fe = 0),
                e._pt && y && (ut[h.id] = 1)
            }
            u && tr(e),
            e._onInit && e._onInit(e)
        }
        e._from = !R && !!d.runBackwards,
        e._onUpdate = w,
        e._initted = !!e.parent
    }, Ie = function(t, e, r, i, n) {
        return R(t) ? t.call(e, r, i, n) : U(t) && ~t.indexOf("random(") ? ne(t) : t
    }, Ye = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ue = (Ye + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Ne = function(O) {
        function n(t, e, r, i) {
            var n;
            "number" == typeof e && (r.duration = e,
            e = r,
            r = null);
            var s, a, o, u, h, l, f, p, c = (n = O.call(this, i ? e : Pt(e), r) || this).vars, _ = c.duration, d = c.delay, m = c.immediateRender, g = c.stagger, v = c.overwrite, y = c.keyframes, w = c.defaults, x = c.scrollTrigger, T = c.yoyoEase, b = n.parent, M = (j(t) ? L(t[0]) : "length"in e) ? [t] : $t(t);
            if (n._targets = M.length ? _t(M) : it("GSAP target " + t + " not found. https://greensock.com", !Y.nullTargetWarn) || [],
            n._ptLookup = [],
            n._overwrite = v,
            y || g || V(_) || V(d)) {
                if (e = n.vars,
                (s = n.timeline = new Re({
                    data: "nested",
                    defaults: w || {}
                })).kill(),
                s.parent = k(n),
                y)
                    Ot(s.vars.defaults, {
                        ease: "none"
                    }),
                    y.forEach(function(t) {
                        return s.to(M, t, ">")
                    });
                else {
                    if (u = M.length,
                    f = g ? Kt(g) : st,
                    N(g))
                        for (h in g)
                            ~Ye.indexOf(h) && (p || (p = {}),
                            p[h] = g[h]);
                    for (a = 0; a < u; a++) {
                        for (h in o = {},
                        e)
                            Ue.indexOf(h) < 0 && (o[h] = e[h]);
                        o.stagger = 0,
                        T && (o.yoyoEase = T),
                        p && Ct(o, p),
                        l = M[a],
                        o.duration = +Ie(_, k(n), a, l, M),
                        o.delay = (+Ie(d, k(n), a, l, M) || 0) - n._delay,
                        !g && 1 === u && o.delay && (n._delay = d = o.delay,
                        n._start += d,
                        o.delay = 0),
                        s.to(l, o, f(a, l, M))
                    }
                    s.duration() ? _ = d = 0 : n.timeline = 0
                }
                _ || n.duration(_ = s.duration())
            } else
                n.timeline = 0;
            return !0 === v && (Fe = k(n),
            F.killTweensOf(M),
            Fe = 0),
            b && It(b, k(n)),
            (m || !_ && !y && n._start === vt(b._time) && X(m) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(k(n)) && "nested" !== b.data) && (n._tTime = -B,
            n.render(Math.max(0, -d))),
            x && Ut(k(n), x),
            n
        }
        r(n, O);
        var t = n.prototype;
        return t.render = function(t, e, r) {
            var i, n, s, a, o, u, h, l, f, p = this._time, c = this._tDur, _ = this._dur, d = c - B < t && 0 <= t ? c : t < B ? 0 : t;
            if (_) {
                if (d !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = d,
                    l = this.timeline,
                    this._repeat) {
                        if (a = _ + this._rDelay,
                        (_ < (i = vt(d % a)) || c === d) && (i = _),
                        (s = ~~(d / a)) && s === d / a && (i = _,
                        s--),
                        (u = this._yoyo && 1 & s) && (f = this._yEase,
                        i = _ - i),
                        o = Et(this._tTime, a),
                        i === p && !r && this._initted)
                            return this;
                        s !== o && (l && this._yEase && Oe(l, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                        this.render(vt(a * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Nt(this, i, r, e))
                            return this._tTime = 0,
                            this;
                        if (_ !== this._dur)
                            return this.render(t, e, r)
                    }
                    for (this._tTime = d,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = h = (f || this._ease)(i / _),
                    this._from && (this.ratio = h = 1 - h),
                    i && !p && !e && oe(this, "onStart"),
                    n = this._pt; n; )
                        n.r(h, n.d),
                        n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    oe(this, "onUpdate")),
                    this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && oe(this, "onRepeat"),
                    d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    (t || !_) && (d === this._tDur && 0 < this._ts || !d && this._ts < 0) && zt(this, 1),
                    e || t < 0 && !p || !d && !p || (oe(this, d === c ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(d < c && 0 < this.timeScale()) && this._prom()))
                }
            } else
                !function(t, e, r, i) {
                    var n, s, a = t.ratio, o = e < 0 || !e && a && !t._start && t._zTime > B && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1, u = t._rDelay, h = 0;
                    if (u && t._repeat && (h = Gt(0, t._tDur, e),
                    Et(h, u) !== (s = Et(t._tTime, u)) && (a = 1 - o,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    t._initted || !Nt(t, e, i, r))
                        if (o !== a || i || t._zTime === B || !e && t._zTime) {
                            for (s = t._zTime,
                            t._zTime = e || (r ? B : 0),
                            r || (r = e && !s),
                            t.ratio = o,
                            t._from && (o = 1 - o),
                            t._time = 0,
                            t._tTime = h,
                            r || oe(t, "onStart"),
                            n = t._pt; n; )
                                n.r(o, n.d),
                                n = n._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                            t._onUpdate && !r && oe(t, "onUpdate"),
                            h && t._repeat && !r && t.parent && oe(t, "onRepeat"),
                            (e >= t._tDur || e < 0) && t.ratio === o && (o && zt(t, 1),
                            r || (oe(t, o ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()))
                        } else
                            t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        t.targets = function() {
            return this._targets
        }
        ,
        t.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            O.prototype.invalidate.call(this)
        }
        ,
        t.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e) && (this._lazy = 0,
            this.parent))
                return ue(this);
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite)._first || ue(this),
                this.parent && r !== this.timeline.totalDuration() && Xt(this, this._dur * this.timeline._tDur / r),
                this
            }
            var i, n, s, a, o, u, h, l = this._targets, f = t ? $t(t) : l, p = this._ptLookup, c = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(l, f))
                return ue(this);
            for (i = this._op = this._op || [],
            "all" !== e && (U(e) && (o = {},
            gt(e, function(t) {
                return o[t] = 1
            }),
            e = o),
            e = function(t, e) {
                var r, i, n, s, a = t[0] ? dt(t[0]).harness : 0, o = a && a.aliases;
                if (!o)
                    return e;
                for (i in r = Ct({}, e),
                o)
                    if (i in r)
                        for (n = (s = o[i].split(",")).length; n--; )
                            r[s[n]] = r[i];
                return r
            }(l, e)),
            h = l.length; h--; )
                if (~f.indexOf(l[h]))
                    for (o in n = p[h],
                    "all" === e ? (i[h] = e,
                    a = n,
                    s = {}) : (s = i[h] = i[h] || {},
                    a = e),
                    a)
                        (u = n && n[o]) && ("kill"in u.d && !0 !== u.d.kill(o) || St(this, u, "_pt"),
                        delete n[o]),
                        "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && c && ue(this),
            this
        }
        ,
        n.to = function(t, e) {
            return new n(t,e,arguments[2])
        }
        ,
        n.from = function(t, e) {
            return new n(t,wt(arguments, 1))
        }
        ,
        n.delayedCall = function(t, e, r, i) {
            return new n(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        n.fromTo = function(t, e, r) {
            return new n(t,wt(arguments, 2))
        }
        ,
        n.set = function(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new n(t,e)
        }
        ,
        n.killTweensOf = function(t, e, r) {
            return F.killTweensOf(t, e, r)
        }
        ,
        n
    }(ze);
    Ot(Ne.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    gt("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Ne[r] = function() {
            var t = new Re
              , e = Zt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
            t[r].apply(t, e)
        }
    });
    var Xe = function(t, e, r) {
        return t[e] = r
    }
      , qe = function(t, e, r) {
        return t[e](r)
    }
      , Ve = function(t, e, r, i) {
        return t[e](i.fp, r)
    }
      , je = function(t, e, r) {
        return t.setAttribute(e, r)
    }
      , Qe = function(t, e) {
        return R(t[e]) ? qe : I(t[e]) && t.setAttribute ? je : Xe
    }
      , Ge = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    }
      , We = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , Ze = function(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , He = function(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , $e = function(t, e, r, i) {
        for (var n, s = this._pt; s; )
            n = s._next,
            s.p === i && s.modifier(t, e, r),
            s = n
    }
      , Je = function(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            i.p === t && !i.op || i.op === t ? St(this, i, "_pt") : i.dep || (e = 1),
            i = r;
        return !e
    }
      , Ke = function(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
      , tr = function(t) {
        for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next,
            r = i; r && r.pr > s.pr; )
                r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s : i = s,
            (s._next = r) ? r._prev = s : n = s,
            s = e
        }
        t._pt = i
    }
      , er = function() {
        function t(t, e, r, i, n, s, a, o, u) {
            this.t = e,
            this.s = i,
            this.c = n,
            this.p = r,
            this.r = s || Ge,
            this.d = a || this,
            this.set = o || Xe,
            this.pr = u || 0,
            (this._next = t) && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set,
            this.set = Ke,
            this.m = t,
            this.mt = r,
            this.tween = e
        }
        ,
        t
    }();
    gt(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return at[t] = 1
    }),
    K.TweenMax = K.TweenLite = Ne,
    K.TimelineLite = K.TimelineMax = Re,
    F = new Re({
        sortChildren: !1,
        defaults: E,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    Y.stringFilter = ge;
    var rr = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return function(t) {
                    var e = (t = !t.name && t.default || t).name
                      , r = R(t)
                      , i = e && !r && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , n = {
                        init: st,
                        render: He,
                        add: Ee,
                        kill: Je,
                        modifier: $e,
                        rawVars: 0
                    }
                      , s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Qe,
                        aliases: {},
                        register: 0
                    };
                    if (ye(),
                    t !== i) {
                        if (ht[e])
                            return;
                        Ot(i, Ot(Dt(t, n), s)),
                        Ct(i.prototype, Ct(n, Dt(t, s))),
                        ht[i.prop = e] = i,
                        t.targetTest && (pt.push(i),
                        at[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    nt(e, i),
                    t.register && t.register(sr, i, er)
                }(t)
            })
        },
        timeline: function(t) {
            return new Re(t)
        },
        getTweensOf: function(t, e) {
            return F.getTweensOf(t, e)
        },
        getProperty: function(i, t, e, r) {
            U(i) && (i = $t(i)[0]);
            var n = dt(i || {}).get
              , s = e ? Mt : bt;
            return "native" === e && (e = ""),
            i ? t ? s((ht[t] && ht[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return s((ht[t] && ht[t].get || n)(i, t, e, r))
            }
            : i
        },
        quickSetter: function(r, e, i) {
            if (1 < (r = $t(r)).length) {
                var n = r.map(function(t) {
                    return sr.quickSetter(t, e, i)
                })
                  , s = n.length;
                return function(t) {
                    for (var e = s; e--; )
                        n[e](t)
                }
            }
            r = r[0] || {};
            var a = ht[e]
              , o = dt(r)
              , u = o.harness && (o.harness.aliases || {})[e] || e
              , h = a ? function(t) {
                var e = new a;
                l._pt = 0,
                e.init(r, i ? t + i : t, l, 0, [r]),
                e.render(1, e),
                l._pt && He(1, l)
            }
            : o.set(r, u);
            return a ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function(t) {
            return 0 < F.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = ke(t.ease, E.ease)),
            At(E, t || {})
        },
        config: function(t) {
            return At(Y, t || {})
        },
        registerEffect: function(t) {
            var i = t.name
              , n = t.effect
              , e = t.plugins
              , s = t.defaults
              , r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ht[t] && !K[t] && it(i + " effect requires " + t + " plugin.")
            }),
            lt[i] = function(t, e, r) {
                return n($t(t), Ot(e || {}, s), r)
            }
            ,
            r && (Re.prototype[i] = function(t, e, r) {
                return this.add(lt[i](t, N(e) ? e : (r = e) && {}, this), r)
            }
            )
        },
        registerEase: function(t, e) {
            we[t] = ke(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? ke(t, e) : we
        },
        getById: function(t) {
            return F.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Re(t);
            for (n.smoothChildTiming = X(t.smoothChildTiming),
            F.remove(n),
            n._dp = 0,
            n._time = n._tTime = F._time,
            r = F._first; r; )
                i = r._next,
                !e && !r._dur && r instanceof Ne && r.vars.onComplete === r._targets[0] || Yt(n, r, r._start - r._delay),
                r = i;
            return Yt(F, n, 0),
            n
        },
        utils: {
            wrap: function t(e, r, i) {
                var n = r - e;
                return j(e) ? ie(e, t(0, e.length), r) : Qt(i, function(t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, r, i) {
                var n = r - e
                  , s = 2 * n;
                return j(e) ? ie(e, t(0, e.length - 1), r) : Qt(i, function(t) {
                    return e + (n < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: Kt,
            random: re,
            snap: ee,
            normalize: function(t, e, r) {
                return se(t, e, 0, 1, r)
            },
            getUnit: Wt,
            clamp: function(e, r, t) {
                return Qt(t, function(t) {
                    return Gt(e, r, t)
                })
            },
            splitColor: pe,
            toArray: $t,
            mapRange: se,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Wt(t))
                }
            },
            interpolate: function t(e, r, i, n) {
                var s = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!s) {
                    var a, o, u, h, l, f = U(e), p = {};
                    if (!0 === i && (n = 1) && (i = null),
                    f)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (j(e) && !j(r)) {
                        for (u = [],
                        h = e.length,
                        l = h - 2,
                        o = 1; o < h; o++)
                            u.push(t(e[o - 1], e[o]));
                        h--,
                        s = function(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        i = r
                    } else
                        n || (e = Ct(j(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r)
                            Ee.call(p, e, a, "get", r[a]);
                        s = function(t) {
                            return He(t, p) || (f ? e.p : e)
                        }
                    }
                }
                return Qt(i, s)
            },
            shuffle: Jt
        },
        install: et,
        effects: lt,
        ticker: ve,
        updateRoot: Re.updateRoot,
        plugins: ht,
        globalTimeline: F,
        core: {
            PropTween: er,
            globals: nt,
            Tween: Ne,
            Timeline: Re,
            Animation: ze,
            getCache: dt,
            _removeLinkedListItem: St
        }
    };
    gt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return rr[t] = Ne[t]
    }),
    ve.add(Re.updateRoot),
    l = rr.to({}, {
        duration: 0
    });
    var ir = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
      , nr = function(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (U(i) && (e = {},
                    gt(i, function(t) {
                        return e[t] = 1
                    }),
                    i = e),
                    n) {
                        for (r in e = {},
                        i)
                            e[r] = n(i[r]);
                        i = e
                    }
                    !function(t, e) {
                        var r, i, n, s = t._targets;
                        for (r in e)
                            for (i = s.length; i--; )
                                (n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = ir(n, r)),
                                n && n.modifier && n.modifier(e[r], t, s[i], r))
                    }(t, i)
                }
            }
        }
    }
      , sr = rr.registerPlugin({
        name: "attr",
        init: function(t, e, r, i, n) {
            var s, a;
            for (s in e)
                (a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s),
                this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, nr("roundProps", te), nr("modifiers"), nr("snap", ee)) || rr;
    Ne.version = Re.version = sr.version = "3.3.4",
    e = 1,
    q() && ye();
    var ar, or, ur, hr, lr, fr, pr, cr, _r = we.Power0, dr = we.Power1, mr = we.Power2, gr = we.Power3, vr = we.Power4, yr = we.Linear, wr = we.Quad, xr = we.Cubic, Tr = we.Quart, br = we.Quint, Mr = we.Strong, Or = we.Elastic, kr = we.Back, Cr = we.SteppedEase, Ar = we.Bounce, Dr = we.Sine, Pr = we.Expo, Sr = we.Circ, zr = {}, Rr = 180 / Math.PI, Fr = Math.PI / 180, Er = Math.atan2, Br = /([A-Z])/g, Lr = /(?:left|right|width|margin|padding|x)/i, Ir = /[\s,\(]\S/, Yr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ur = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Nr = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Xr = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, qr = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, Vr = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, jr = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, Qr = function(t, e, r) {
        return t.style[e] = r
    }, Gr = function(t, e, r) {
        return t.style.setProperty(e, r)
    }, Wr = function(t, e, r) {
        return t._gsap[e] = r
    }, Zr = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, Hr = function(t, e, r, i, n) {
        var s = t._gsap;
        s.scaleX = s.scaleY = r,
        s.renderTransform(n, s)
    }, $r = function(t, e, r, i, n) {
        var s = t._gsap;
        s[e] = r,
        s.renderTransform(n, s)
    }, Jr = "transform", Kr = Jr + "Origin", ti = function(t, e) {
        var r = or.createElementNS ? or.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : or.createElement(t);
        return r.style ? r : or.createElement(t)
    }, ei = function t(e, r, i) {
        var n = getComputedStyle(e);
        return n[r] || n.getPropertyValue(r.replace(Br, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, ii(r) || r, 1) || ""
    }, ri = "O,Moz,ms,Ms,Webkit".split(","), ii = function(t, e, r) {
        var i = (e || lr).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(ri[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? ri[n] : "") + t
    }, ni = function() {
        "undefined" != typeof window && window.document && (ar = window,
        or = ar.document,
        ur = or.documentElement,
        lr = ti("div") || {
            style: {}
        },
        fr = ti("div"),
        Jr = ii(Jr),
        Kr = ii(Kr),
        lr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        cr = !!ii("perspective"),
        hr = 1)
    }, si = function t(e) {
        var r, i = ti("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, s = this.nextSibling, a = this.style.cssText;
        if (ur.appendChild(i),
        i.appendChild(this),
        this.style.display = "block",
        e)
            try {
                r = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = t
            } catch (t) {}
        else
            this._gsapBBox && (r = this._gsapBBox());
        return n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        ur.removeChild(i),
        this.style.cssText = a,
        r
    }, ai = function(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }, oi = function(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = si.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === si || (r = si.call(e, !0)),
        !r || r.width || r.x || r.y ? r : {
            x: +ai(e, ["x", "cx", "x1"]) || 0,
            y: +ai(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, ui = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !oi(t))
    }, hi = function(t, e) {
        if (e) {
            var r = t.style;
            e in zr && (e = Jr),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(Br, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }, li = function(t, e, r, i, n, s) {
        var a = new er(t._pt,e,r,0,1,s ? jr : Vr);
        return (t._pt = a).b = i,
        a.e = n,
        t._props.push(r),
        a
    }, fi = {
        deg: 1,
        rad: 1,
        turn: 1
    }, pi = function t(e, r, i, n) {
        var s, a, o, u, h = parseFloat(i) || 0, l = (i + "").trim().substr((h + "").length) || "px", f = lr.style, p = Lr.test(r), c = "svg" === e.tagName.toLowerCase(), _ = (c ? "client" : "offset") + (p ? "Width" : "Height"), d = "px" === n, m = "%" === n;
        return n === l || !h || fi[n] || fi[l] ? h : ("px" !== l && !d && (h = t(e, r, i, "px")),
        u = e.getCTM && ui(e),
        m && (zr[r] || ~r.indexOf("adius")) ? vt(h / (u ? e.getBBox()[p ? "width" : "height"] : e[_]) * 100) : (f[p ? "width" : "height"] = 100 + (d ? l : n),
        a = ~r.indexOf("adius") || "em" === n && e.appendChild && !c ? e : e.parentNode,
        u && (a = (e.ownerSVGElement || {}).parentNode),
        a && a !== or && a.appendChild || (a = or.body),
        (o = a._gsap) && m && o.width && p && o.time === ve.time ? vt(h / o.width * 100) : ((m || "%" === l) && (f.position = ei(e, "position")),
        a === e && (f.position = "static"),
        a.appendChild(lr),
        s = lr[_],
        a.removeChild(lr),
        f.position = "absolute",
        p && m && ((o = dt(a)).time = ve.time,
        o.width = a[_]),
        vt(d ? s * h / 100 : s && h ? 100 / s * h : 0))))
    }, ci = function(t, e, r, i) {
        var n;
        return hr || ni(),
        e in Yr && "transform" !== e && ~(e = Yr[e]).indexOf(",") && (e = e.split(",")[0]),
        zr[e] && "transform" !== e ? (n = Mi(t, i),
        n = "transformOrigin" !== e ? n[e] : Oi(ei(t, Kr)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = gi[e] && gi[e](t, e, r) || ei(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").indexOf(" ") ? pi(t, e, n, r) + r : n
    }, _i = function(t, e, r, i) {
        if (!r || "none" === r) {
            var n = ii(e, t, 1)
              , s = n && ei(t, n, 1);
            s && s !== r && (e = n,
            r = s)
        }
        var a, o, u, h, l, f, p, c, _, d, m, g, v = new er(this._pt,t.style,e,0,1,Ze), y = 0, w = 0;
        if (v.b = r,
        v.e = i,
        r += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = ei(t, e) || i,
        t.style[e] = r),
        ge(a = [r, i]),
        i = a[1],
        u = (r = a[0]).match(W) || [],
        (i.match(W) || []).length) {
            for (; o = W.exec(i); )
                p = o[0],
                _ = i.substring(y, o.index),
                l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1),
                p !== (f = u[w++] || "") && (h = parseFloat(f) || 0,
                m = f.substr((h + "").length),
                (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                c = parseFloat(p),
                d = p.substr((c + "").length),
                y = W.lastIndex - d.length,
                d || (d = d || Y.units[e] || m,
                y === i.length && (i += d,
                v.e += d)),
                m !== d && (h = pi(t, e, f, d) || 0),
                v._pt = {
                    _next: v._pt,
                    p: _ || 1 === w ? _ : ",",
                    s: h,
                    c: g ? g * c : c - h,
                    m: l && l < 4 ? Math.round : 0
                });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else
            v.r = "display" === e && "none" === i ? jr : Vr;
        return $.test(i) && (v.e = 0),
        this._pt = v
    }, di = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, mi = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t, a = s.style, o = e.u, u = s._gsap;
            if ("all" === o || !0 === o)
                a.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    zr[r] && (i = 1,
                    r = "transformOrigin" === r ? Kr : Jr),
                    hi(s, r);
            i && (hi(s, Jr),
            u && (u.svg && s.removeAttribute("transform"),
            Mi(s, 1),
            u.uncache = 1))
        }
    }, gi = {
        clearProps: function(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var s = t._pt = new er(t._pt,e,r,0,0,mi);
                return s.u = i,
                s.pr = -10,
                s.tween = n,
                t._props.push(r),
                1
            }
        }
    }, vi = [1, 0, 0, 1, 0, 0], yi = {}, wi = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, xi = function(t) {
        var e = ei(t, Jr);
        return wi(e) ? vi : e.substr(7).match(G).map(vt)
    }, Ti = function(t, e) {
        var r, i, n, s, a = t._gsap || dt(t), o = t.style, u = xi(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? vi : u : (u !== vi || t.offsetParent || t === ur || a.svg || (n = o.display,
        o.display = "block",
        (r = t.parentNode) && t.offsetParent || (s = 1,
        i = t.nextSibling,
        ur.appendChild(t)),
        u = xi(t),
        n ? o.display = n : hi(t, "display"),
        s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ur.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }, bi = function(t, e, r, i, n, s) {
        var a, o, u, h = t._gsap, l = n || Ti(t, !0), f = h.xOrigin || 0, p = h.yOrigin || 0, c = h.xOffset || 0, _ = h.yOffset || 0, d = l[0], m = l[1], g = l[2], v = l[3], y = l[4], w = l[5], x = e.split(" "), T = parseFloat(x[0]) || 0, b = parseFloat(x[1]) || 0;
        r ? l !== vi && (o = d * v - m * g) && (u = T * (-m / o) + b * (d / o) - (d * w - m * y) / o,
        T = T * (v / o) + b * (-g / o) + (g * w - v * y) / o,
        b = u) : (T = (a = oi(t)).x + (~x[0].indexOf("%") ? T / 100 * a.width : T),
        b = a.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * a.height : b)),
        i || !1 !== i && h.smooth ? (y = T - f,
        w = b - p,
        h.xOffset = c + (y * d + w * g) - y,
        h.yOffset = _ + (y * m + w * v) - w) : h.xOffset = h.yOffset = 0,
        h.xOrigin = T,
        h.yOrigin = b,
        h.smooth = !!i,
        h.origin = e,
        h.originIsAbsolute = !!r,
        t.style[Kr] = "0px 0px",
        s && (li(s, h, "xOrigin", f, T),
        li(s, h, "yOrigin", p, b),
        li(s, h, "xOffset", c, h.xOffset),
        li(s, h, "yOffset", _, h.yOffset)),
        t.setAttribute("data-svg-origin", T + " " + b)
    }, Mi = function(t, e) {
        var r = t._gsap || new Se(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, s, a, o, u, h, l, f, p, c, _, d, m, g, v, y, w, x, T, b, M, O, k, C, A, D, P, S, z, R, F, E = t.style, B = r.scaleX < 0, L = "deg", I = ei(t, Kr) || "0";
        return i = n = s = u = h = l = f = p = c = 0,
        a = o = 1,
        r.svg = !(!t.getCTM || !ui(t)),
        m = Ti(t, r.svg),
        r.svg && (k = !r.uncache && t.getAttribute("data-svg-origin"),
        bi(t, k || I, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
        _ = r.xOrigin || 0,
        d = r.yOrigin || 0,
        m !== vi && (w = m[0],
        x = m[1],
        T = m[2],
        b = m[3],
        i = M = m[4],
        n = O = m[5],
        6 === m.length ? (a = Math.sqrt(w * w + x * x),
        o = Math.sqrt(b * b + T * T),
        u = w || x ? Er(x, w) * Rr : 0,
        (f = T || b ? Er(T, b) * Rr + u : 0) && (o *= Math.cos(f * Fr)),
        r.svg && (i -= _ - (_ * w + d * T),
        n -= d - (_ * x + d * b))) : (F = m[6],
        z = m[7],
        D = m[8],
        P = m[9],
        S = m[10],
        R = m[11],
        i = m[12],
        n = m[13],
        s = m[14],
        h = (g = Er(F, S)) * Rr,
        g && (k = M * (v = Math.cos(-g)) + D * (y = Math.sin(-g)),
        C = O * v + P * y,
        A = F * v + S * y,
        D = M * -y + D * v,
        P = O * -y + P * v,
        S = F * -y + S * v,
        R = z * -y + R * v,
        M = k,
        O = C,
        F = A),
        l = (g = Er(-T, S)) * Rr,
        g && (v = Math.cos(-g),
        R = b * (y = Math.sin(-g)) + R * v,
        w = k = w * v - D * y,
        x = C = x * v - P * y,
        T = A = T * v - S * y),
        u = (g = Er(x, w)) * Rr,
        g && (k = w * (v = Math.cos(g)) + x * (y = Math.sin(g)),
        C = M * v + O * y,
        x = x * v - w * y,
        O = O * v - M * y,
        w = k,
        M = C),
        h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
        l = 180 - l),
        a = vt(Math.sqrt(w * w + x * x + T * T)),
        o = vt(Math.sqrt(O * O + F * F)),
        g = Er(M, O),
        f = 2e-4 < Math.abs(g) ? g * Rr : 0,
        c = R ? 1 / (R < 0 ? -R : R) : 0),
        r.svg && (k = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !wi(ei(t, Jr)),
        k && t.setAttribute("transform", k))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (a *= -1,
        f += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (o *= -1,
        f += f <= 0 ? 180 : -180)),
        r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px",
        r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px",
        r.z = s + "px",
        r.scaleX = vt(a),
        r.scaleY = vt(o),
        r.rotation = vt(u) + L,
        r.rotationX = vt(h) + L,
        r.rotationY = vt(l) + L,
        r.skewX = f + L,
        r.skewY = p + L,
        r.transformPerspective = c + "px",
        (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (E[Kr] = Oi(I)),
        r.xOffset = r.yOffset = 0,
        r.force3D = Y.force3D,
        r.renderTransform = r.svg ? zi : cr ? Si : Ci,
        r.uncache = 0,
        r
    }, Oi = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, ki = function(t, e, r) {
        var i = Wt(e);
        return vt(parseFloat(e) + parseFloat(pi(t, "x", r + "px", i))) + i
    }, Ci = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Si(t, e)
    }, Ai = "0deg", Di = "0px", Pi = ") ", Si = function(t, e) {
        var r = e || this
          , i = r.xPercent
          , n = r.yPercent
          , s = r.x
          , a = r.y
          , o = r.z
          , u = r.rotation
          , h = r.rotationY
          , l = r.rotationX
          , f = r.skewX
          , p = r.skewY
          , c = r.scaleX
          , _ = r.scaleY
          , d = r.transformPerspective
          , m = r.force3D
          , g = r.target
          , v = r.zOrigin
          , y = ""
          , w = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== Ai || h !== Ai)) {
            var x, T = parseFloat(h) * Fr, b = Math.sin(T), M = Math.cos(T);
            T = parseFloat(l) * Fr,
            x = Math.cos(T),
            s = ki(g, s, b * x * -v),
            a = ki(g, a, -Math.sin(T) * -v),
            o = ki(g, o, M * x * -v + v)
        }
        d !== Di && (y += "perspective(" + d + Pi),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (w || s !== Di || a !== Di || o !== Di) && (y += o !== Di || w ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Pi),
        u !== Ai && (y += "rotate(" + u + Pi),
        h !== Ai && (y += "rotateY(" + h + Pi),
        l !== Ai && (y += "rotateX(" + l + Pi),
        f === Ai && p === Ai || (y += "skew(" + f + ", " + p + Pi),
        1 === c && 1 === _ || (y += "scale(" + c + ", " + _ + Pi),
        g.style[Jr] = y || "translate(0, 0)"
    }, zi = function(t, e) {
        var r, i, n, s, a, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, p = o.rotation, c = o.skewX, _ = o.skewY, d = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, w = o.xOffset, x = o.yOffset, T = o.forceCSS, b = parseFloat(l), M = parseFloat(f);
        p = parseFloat(p),
        c = parseFloat(c),
        (_ = parseFloat(_)) && (c += _ = parseFloat(_),
        p += _),
        p || c ? (p *= Fr,
        c *= Fr,
        r = Math.cos(p) * d,
        i = Math.sin(p) * d,
        n = Math.sin(p - c) * -m,
        s = Math.cos(p - c) * m,
        c && (_ *= Fr,
        a = Math.tan(c - _),
        n *= a = Math.sqrt(1 + a * a),
        s *= a,
        _ && (a = Math.tan(_),
        r *= a = Math.sqrt(1 + a * a),
        i *= a)),
        r = vt(r),
        i = vt(i),
        n = vt(n),
        s = vt(s)) : (r = d,
        s = m,
        i = n = 0),
        (b && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (b = pi(g, "x", l, "px"),
        M = pi(g, "y", f, "px")),
        (v || y || w || x) && (b = vt(b + v - (v * r + y * n) + w),
        M = vt(M + y - (v * i + y * s) + x)),
        (u || h) && (a = g.getBBox(),
        b = vt(b + u / 100 * a.width),
        M = vt(M + h / 100 * a.height)),
        a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + M + ")",
        g.setAttribute("transform", a),
        T && (g.style[Jr] = a)
    }, Ri = function(t, e, r) {
        var i, n, s, a, o, u, h, l = fr.style, f = r._gsap;
        for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;",
        l[Jr] = e,
        or.body.appendChild(fr),
        i = Mi(fr, 1),
        zr)
            (s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Wt(s) !== (h = Wt(a)) ? pi(r, n, s, h) : parseFloat(s),
            u = parseFloat(a),
            t._pt = new er(t._pt,f,n,o,u - o,Ur),
            t._pt.u = h || 0,
            t._props.push(n));
        or.body.removeChild(fr)
    };
    gt("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
          , i = "Bottom"
          , n = "Left"
          , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        gi[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var s, a;
            if (arguments.length < 4)
                return s = o.map(function(t) {
                    return ci(e, t, r)
                }),
                5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "),
            a = {},
            o.forEach(function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }),
            e.init(t, a, n)
        }
    });
    var Fi, Ei, Bi, Li = {
        name: "css",
        register: ni,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
            var s, a, o, u, h, l, f, p, c, _, d, m, g, v, y, w, x, T, b, M, O, k, C, A, D, P, S, z, R, F, E, B, L = this._props, I = t.style;
            for (f in hr || ni(),
            e)
                if ("autoRound" !== f && (a = e[f],
                !ht[f] || !Be(f, e, r, i, t, n)))
                    if (h = typeof a,
                    l = gi[f],
                    "function" === h && (h = typeof (a = a.call(r, i, t, n))),
                    "string" === h && ~a.indexOf("random(") && (a = ne(a)),
                    l)
                        l(this, t, f, a, r) && (y = 1);
                    else if ("--" === f.substr(0, 2))
                        this.add(I, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", a + "", i, n, 0, 0, f);
                    else {
                        if (s = ci(t, f),
                        u = parseFloat(s),
                        (_ = "string" === h && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                        o = parseFloat(a),
                        f in Yr && ("autoAlpha" === f && (1 === u && "hidden" === ci(t, "visibility") && o && (u = 0),
                        li(this, I, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== f && "transform" !== f && ~(f = Yr[f]).indexOf(",") && (f = f.split(",")[0])),
                        d = f in zr)
                            if (m || ((g = t._gsap).renderTransform || Mi(t),
                            v = !1 !== e.smoothOrigin && g.smooth,
                            (m = this._pt = new er(this._pt,I,Jr,0,1,g.renderTransform,g,0,-1)).dep = 1),
                            "scale" === f)
                                this._pt = new er(this._pt,g,"scaleY",g.scaleY,_ ? _ * o : o - g.scaleY),
                                L.push("scaleY", f),
                                f += "X";
                            else {
                                if ("transformOrigin" === f) {
                                    B = E = F = void 0,
                                    F = (R = a).split(" "),
                                    E = F[0],
                                    B = F[1] || "50%",
                                    "top" !== E && "bottom" !== E && "left" !== B && "right" !== B || (R = E,
                                    E = B,
                                    B = R),
                                    F[0] = di[E] || E,
                                    F[1] = di[B] || B,
                                    a = F.join(" "),
                                    g.svg ? bi(t, a, 0, v, 0, this) : ((c = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && li(this, g, "zOrigin", g.zOrigin, c),
                                    li(this, I, f, Oi(s), Oi(a)));
                                    continue
                                }
                                if ("svgOrigin" === f) {
                                    bi(t, a, 1, v, 0, this);
                                    continue
                                }
                                if (f in yi) {
                                    w = this,
                                    x = g,
                                    T = f,
                                    b = u,
                                    O = _,
                                    S = C = k = void 0,
                                    A = 360,
                                    D = U(M = a),
                                    P = parseFloat(M) * (D && ~M.indexOf("rad") ? Rr : 1),
                                    z = b + (S = O ? P * O : P - b) + "deg",
                                    D && ("short" === (k = M.split("_")[1]) && (S %= A) != S % 180 && (S += S < 0 ? A : -A),
                                    "cw" === k && S < 0 ? S = (S + 36e9) % A - ~~(S / A) * A : "ccw" === k && 0 < S && (S = (S - 36e9) % A - ~~(S / A) * A)),
                                    w._pt = C = new er(w._pt,x,T,b,S,Nr),
                                    C.e = z,
                                    C.u = "deg",
                                    w._props.push(T);
                                    continue
                                }
                                if ("smoothOrigin" === f) {
                                    li(this, g, "smooth", g.smooth, a);
                                    continue
                                }
                                if ("force3D" === f) {
                                    g[f] = a;
                                    continue
                                }
                                if ("transform" === f) {
                                    Ri(this, a, t);
                                    continue
                                }
                            }
                        else
                            f in I || (f = ii(f) || f);
                        if (d || (o || 0 === o) && (u || 0 === u) && !Ir.test(a) && f in I)
                            o || (o = 0),
                            (p = (s + "").substr((u + "").length)) !== (c = (a + "").substr((o + "").length) || (f in Y.units ? Y.units[f] : p)) && (u = pi(t, f, s, c)),
                            this._pt = new er(this._pt,d ? g : I,f,u,_ ? _ * o : o - u,"px" !== c || !1 === e.autoRound || d ? Ur : qr),
                            this._pt.u = c || 0,
                            p !== c && (this._pt.b = s,
                            this._pt.r = Xr);
                        else if (f in I)
                            _i.call(this, t, f, s, a);
                        else {
                            if (!(f in t)) {
                                rt(f, a);
                                continue
                            }
                            this.add(t, f, t[f], a, i, n)
                        }
                        L.push(f)
                    }
            y && tr(this)
        },
        get: ci,
        aliases: Yr,
        getSetter: function(t, e, r) {
            var i = Yr[e];
            return i && i.indexOf(",") < 0 && (e = i),
            e in zr && e !== Kr && (t._gsap.x || ci(t, "x")) ? r && pr === r ? "scale" === e ? Zr : Wr : (pr = r || {}) && ("scale" === e ? Hr : $r) : t.style && !I(t.style[e]) ? Qr : ~e.indexOf("-") ? Gr : Qe(t, e)
        },
        core: {
            _removeProperty: hi,
            _getMatrix: Ti
        }
    };
    sr.utils.checkPrefix = ii,
    Bi = gt((Fi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Ei = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        zr[t] = 1
    }),
    gt(Ei, function(t) {
        Y.units[t] = "deg",
        yi[t] = 1
    }),
    Yr[Bi[13]] = Fi + "," + Ei,
    gt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Yr[e[1]] = Bi[e[0]]
    }),
    gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Y.units[t] = "px"
    }),
    sr.registerPlugin(Li);
    var Ii = sr.registerPlugin(Li) || sr
      , Yi = Ii.core.Tween;
    t.Back = kr,
    t.Bounce = Ar,
    t.CSSPlugin = Li,
    t.Circ = Sr,
    t.Cubic = xr,
    t.Elastic = Or,
    t.Expo = Pr,
    t.Linear = yr,
    t.Power0 = _r,
    t.Power1 = dr,
    t.Power2 = mr,
    t.Power3 = gr,
    t.Power4 = vr,
    t.Quad = wr,
    t.Quart = Tr,
    t.Quint = br,
    t.Sine = Dr,
    t.SteppedEase = Cr,
    t.Strong = Mr,
    t.TimelineLite = Re,
    t.TimelineMax = Re,
    t.TweenLite = Ne,
    t.TweenMax = Yi,
    t.default = Ii,
    t.gsap = Ii,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete window.default
});
