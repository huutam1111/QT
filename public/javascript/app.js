var DOM = document
  , HTML = document.documentElement
  , LoadSig = 0
  , Xwidth = window.innerWidth
  , Yheight = window.innerHeight
  , Html = DOM.querySelector("html")
  , Body = DOM.querySelector("body")
  , Main = DOM.querySelector("main")
  , DataScroll = Main.querySelector(".data-scroll");
Container = Body.querySelector(".container");
var Details = 0;
if (Header = DOM.querySelector(".header"),
Logo = Header.querySelector(".logo"),
NavClick = Header.querySelector(".nav-click"),
OpenNav = NavClick.querySelector(".open-nav"),
CloseNav = NavClick.querySelector(".close-nav"),
Navigation = Header.querySelector(".navigation"),
NavLi = Header.querySelectorAll(".navigation li"),
NavLiA = Header.querySelectorAll(".navigation li a"),
RightHeader = Header.querySelector(".right-header"),
SecondMenu = Header.querySelector(".second-menu"),
OverlayMenu = Header.querySelector(".overlay-menu"),
OverMenuDark = OverlayMenu.querySelector(".overmenu-dark"),
OuterNav = DOM.querySelector(".outer-nav"),
SearchBut = Header.querySelector(".search-but"),
SearchForm = Header.querySelector(".search-form"),
FormRowSearch = Header.querySelector(".form-row-search"),
LoginBox = Header.querySelector(".login-box"),
LoginOverlay = Header.querySelector(".login-overlay"),
Hotline = Header.querySelector(".hotline"),
LinkHome = DOM.querySelectorAll(".link-home"),
WhiteHeader = Header.querySelector(".white-header"),
Footer = DOM.querySelector(".footer"),
LeftFooter = Footer.querySelector(".left-footer"),
Wheel = DOM.querySelector(".wheel"),
GoTop = DOM.querySelector(".go-top"),
OverlayDark = DOM.querySelector(".overlay-dark"),
albumLoad = DOM.querySelector(".all-album"),
AllAlbum = DOM.querySelector(".all-album"),
AllPics = DOM.querySelector(".all-pics"),
AllVideo = DOM.querySelector(".allvideo"),
Mask = DOM.querySelector(".mask"),
LoadIcon = Body.querySelector(".loadicon"),
HomePage = DOM.querySelector("#home-page"),
AboutPage = DOM.querySelector("#about-page"),
ServicePage = DOM.querySelector("#service-page"),
ProjectPage = DOM.querySelector("#project-page"),
ProjectDetailsPage = DOM.querySelector("#project-details-page"),
SustainablePage = DOM.querySelector("#sustainable-page"),
RecruitmentPage = DOM.querySelector("#recruitment-page"),
NewsPage = DOM.querySelector("#news-page"),
NewsDetailsPage = DOM.querySelector("#news-details-page"),
ContactPage = DOM.querySelector("#contact-page"),
ThankYouPage = DOM.querySelector("#thankyou-page"),
SlidePagi = Container.querySelector(".slide-pagi"),
BoxSlider = Container.querySelector(".box-slider"),
Background = DOM.querySelector(".background"),
SlideBanner = DOM.querySelector(".slide-background"),
Title = DOM.querySelectorAll(".slide-title"),
HomeBanner = Container.querySelector(".home-banner") || Container.querySelector(".banner-inner"),
Stop = DOM.querySelector(".stop"),
Play = DOM.querySelector(".play"),
ButBackground = Container.querySelector(".but-background"),
PaginationBg = Container.querySelector(".pagination-background"),
PagiBg = Container.querySelectorAll(".pagi-bg"),
NextBg = Container.querySelector(".next-background"),
PrevBg = Container.querySelector(".prev-background"),
OnTime = 0,
AllBackG = Container.querySelectorAll(".bg"),
BoxSlider) {
    var BoxNav = Container.querySelector(".box-nav")
      , BoxNavLi = BoxNav.querySelectorAll("li")
      , BoxNavLiA = BoxNav.querySelectorAll("a")
      , GroupCentral = Container.querySelectorAll(".group-central")
      , GroupLength = GroupCentral.length;
    LastGroup = GroupCentral[GroupLength - 1]
}

var AniItems = document.querySelectorAll(".ani-item")
  , TextAniItems = document.querySelectorAll(".text-ani-item")
  , TextAniSpans = document.querySelectorAll(".text-ani-item span");
if (HomePage) {
    var YoutubeVideo = Container.querySelector(".youtube-video")
      , HomeBanner = Container.querySelector(".home-banner")
      , HomeMessage = Container.querySelector(".home-message")
      , LogoMessage = HomeMessage.querySelector(".logo-message")
      , HomeBusiness = Container.querySelector(".home-buisness")
      , SlideBusHome = Container.querySelector(".slide-business-home")
      , HomeProject = Container.querySelector(".home-project")
      , SlideProHome = Container.querySelector(".slide-project")
      , HomeNews = Container.querySelector(".home-news")
      , HomeRecruitment = Container.querySelector(".home-recruitment")
      , HomeContact = Container.querySelector(".home-contact");
    if (HomeNews)
        var LogoNews = HomeNews.querySelector(".logo-news")
} else if (AboutPage)
    var BoxValue = Container.querySelectorAll(".box-value")
      , AboutHistory = Container.querySelector(".about-history")
      , AboutManager = Container.querySelector(".about-manager")
      , AboutEquip = Container.querySelector(".about-equipment")
      , AboutAchieveMent = Container.querySelector(".about-achievement")
      , BoxDirects = Container.querySelectorAll(".box-direct")
      , LibraryVideo = Container.querySelector(".library-video")
      , LibraryAlbum = Container.querySelector(".library-album")
      , LibraryItems = Container.querySelectorAll(".item-library")
      , BoxAchieve = Container.querySelectorAll(".box-achievement");
else if (ProjectPage)
    var ProjectList = Container.querySelector(".project-list")
      , ProjectItems = ProjectList.querySelectorAll(".project-item");
else if (ProjectDetailsPage)
    var BoxPictures = Container.querySelectorAll(".box-picture");
else if (SustainablePage)
    ;
else if (NewsPage)
    var newslist = Container.querySelector(".news-list")
      , NewsItem = Container.querySelectorAll(".news-item");
else if (NewsDetailsPage) {
    var LoadContent = DOM.querySelector(".load-content")
      , BoxNews = Container.querySelectorAll(".box-news")
      , NewsRelative = Container.querySelector(".news-relative");
    LoadDetails = DOM.querySelector(".load-details")
} else if (RecruitmentPage)
    var RecruitmentCareer = Container.querySelector(".recruitment-career");
var LinkPopup = Container.querySelectorAll(".link-popup, .link-member")
  , AllAlbum = DOM.querySelector(".all-album");
if (!HomePage)
    var BannerInner = Container.querySelector(".banner-inner");
var XWidth = document.body.clientWidth
  , YHeight = document.body.clientHeight;
function inStanceof(t, e) {
    return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? e[Symbol.hasInstance](t) : t instanceof e
}
function nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}
function slicedToArray(t, e) {
    return arrayWithHoles(t) || iterableToArrayLimit(t, e) || nonIterableRest()
}
function nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}
function iterableToArrayLimit(t, e) {
    var n = []
      , i = !0
      , o = !1
      , s = void 0;
    try {
        for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value),
        !e || n.length !== e); i = !0)
            ;
    } catch (t) {
        o = !0,
        s = t
    } finally {
        try {
            i || null == a.return || a.return()
        } finally {
            if (o)
                throw s
        }
    }
    return n
}
function iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
        return Array.from(t)
}
function arrayWithHoles(t) {
    if (Array.isArray(t))
        return t
}
function arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
        return n
    }
}
function classCallCheck(t, e) {
    if (!inStanceof(t, e))
        throw new TypeError("Cannot call a class as a function")
}
function defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i)
    }
}
function createClass(t, e, n) {
    return e && defineProperties(t.prototype, e),
    n && defineProperties(t, n),
    t
}
function toConsumableArray(t) {
    return arrayWithoutHoles(t) || iterableToArray(t) || nonIterableSpread()
}
function possibleConstructorReturn(t, e) {
    return !e || "object" !== Typeof(e) && "function" != typeof e ? assertThisInitialized(t) : e
}
function assertThisInitialized(t) {
    if (void 0 === t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function Get(t, e, n) {
    return (Get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
        var i = superPropBase(t, e);
        if (i) {
            var o = Object.getOwnPropertyDescriptor(i, e);
            return o.get ? o.get.call(n) : o.value
        }
    }
    )(t, e, n || t)
}
function superPropBase(t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = getPrototypeOf(t)); )
        ;
    return t
}
function getPrototypeOf(t) {
    return (getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }
    )(t)
}
function Inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }),
    e && setPrototypeOf(t, e)
}
function setPrototypeOf(t, e) {
    return (setPrototypeOf = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e,
        t
    }
    )(t, e)
}
function Typeof(t) {
    return (Typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(t)
}
var MathUtils = {
    lineEq: function(t, e, n, i, o) {
        var s = (t - e) / (n - i);
        return s * o + (e - s * i)
    },
    map: function(t, e, n, i, o) {
        return (t - e) * (o - i) / (n - e) + i
    },
    lerp: function(t, e, n) {
        return (1 - n) * t + n * e
    },
    getRandomFloat: function(t, e) {
        return (Math.random() * (e - t) + t).toFixed(2)
    }
}
  , shuffleArray = function(t) {
    return t.sort(function() {
        return Math.random() - .5
    })
};
function RanDom(t, e) {
    return Math.max(Math.random() * (e - t) + t)
}
var winsize, debounce = function(i, o, s) {
    var r;
    return function() {
        var t = this
          , e = arguments
          , n = s && !r;
        clearTimeout(r),
        r = setTimeout(function() {
            r = null,
            s || i.apply(t, e)
        }, o),
        n && i.apply(t, e)
    }
}, calcWinsize = function() {
    return winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    }
}, getMousePos = function(t) {
    var e = 0
      , n = 0;
    return t || (t = window.event),
    t.pageX || t.pageY ? (e = t.pageX,
    n = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + body.scrollLeft + document.documentElement.scrollLeft,
    n = t.clientY + body.scrollTop + document.documentElement.scrollTop),
    {
        x: e,
        y: n
    }
};
function isInViewport(t) {
    var e = t.getBoundingClientRect()
      , n = window.innerHeight || document.documentElement.clientHeight
      , i = window.innerWidth || document.documentElement.clientWidth
      , o = e.top <= n && 0 <= e.top + e.height
      , s = e.left <= i && 0 <= e.left + e.width;
    return o && s
}
function SplitText(t) {
    var e = t.textContent.split(" ");
    t.innerHTML = "";
    for (var n = 0; n < e.length; ++n) {
        var i = document.createElement("span");
        i.textContent = e[n] + " ",
        i.setAttribute("class", "wordPar"),
        t.appendChild(i)
    }
    (t.querySelectorAll(".wordPar") || t).forEach(function(t) {
        var e = t.textContent.split("");
        t.innerHTML = "";
        for (var n = 0; n < e.length; ++n) {
            var i = document.createElement("span");
            i.textContent = e[n],
            i.setAttribute("class", "words"),
            t.appendChild(i)
        }
    })
}
mousePos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
},
function(t, i) {
    "use strict";
    "function" != typeof t.CustomEvent && (t.CustomEvent = function(t, e) {
        e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = i.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
        n
    }
    ,
    t.CustomEvent.prototype = t.Event.prototype),
    i.addEventListener("touchstart", n, !1),
    i.addEventListener("touchmove", o, !1),
    i.addEventListener("touchend", e, !1),
    i.addEventListener("mousedown", n, !1),
    i.addEventListener("mousemove", o, !1),
    i.addEventListener("mouseup", e, !1);
    var s = null
      , r = null
      , a = null
      , l = null
      , c = null
      , h = null;
    function e(t) {
        if (h === t.target) {
            var e = parseInt(h.getAttribute("data-swipe-threshold") || "20", 10)
              , n = parseInt(h.getAttribute("data-swipe-timeout") || "500", 10)
              , i = Date.now() - c
              , o = "";
            Math.abs(a) > Math.abs(l) ? Math.abs(a) > e && i < n && (o = 0 < a ? "swiped-left" : "swiped-right") : Math.abs(l) > e && i < n && (o = 0 < l ? "swiped-up" : "swiped-down"),
            "" !== o && h.dispatchEvent(new CustomEvent(o,{
                bubbles: !0,
                cancelable: !0
            })),
            c = r = s = null
        }
    }
    function n(t) {
        "true" !== t.target.getAttribute("data-swipe-ignore") && (h = t.target,
        c = Date.now(),
        s = t.touches ? t.touches[0].clientX : t.clientX,
        r = t.touches ? t.touches[0].clientY : t.clientY,
        l = a = 0)
    }
    function o(t) {
        if (s && r) {
            var e = t.touches ? t.touches[0].clientX : t.clientX
              , n = t.touches ? t.touches[0].clientY : t.clientY;
            a = s - e,
            l = r - n
        }
    }
}(window, document),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["exports"], e);
    else if ("undefined" != typeof exports)
        e(exports);
    else {
        var n = {};
        e(n),
        t.PinchZoom = n
    }
}(this, function(t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t, e) {
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o)
                    for (var s in o)
                        Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }),
    "function" != typeof Array.from && (Array.from = function(t) {
        return [].slice.call(t)
    }
    );
    var s = function(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !1),
        t.dispatchEvent(n)
    }
      , e = function() {
        var t = function(t, e) {
            this.el = t,
            this.zoomFactor = 1,
            this.lastScale = 1,
            this.offset = {
                x: 0,
                y: 0
            },
            this.initialOffset = {
                x: 0,
                y: 0
            },
            this.options = Object.assign({}, this.defaults, e),
            this.setupMarkup(),
            this.bindEvents(),
            this.update(),
            this.isImageLoaded(this.el) && (this.updateAspectRatio(),
            this.setupOffsets()),
            this.enable()
        }
          , e = function(t, e) {
            return t + e
        };
        t.prototype = {
            defaults: {
                tapZoomFactor: 2,
                zoomOutFactor: 1.3,
                animationDuration: 300,
                maxZoom: 4,
                minZoom: .5,
                draggableUnzoomed: !0,
                lockDragAxis: !1,
                setOffsetsOnce: !1,
                use2d: !0,
                zoomStartEventName: "pz_zoomstart",
                zoomUpdateEventName: "pz_zoomupdate",
                zoomEndEventName: "pz_zoomend",
                dragStartEventName: "pz_dragstart",
                dragUpdateEventName: "pz_dragupdate",
                dragEndEventName: "pz_dragend",
                doubleTapEventName: "pz_doubletap",
                verticalPadding: 0,
                horizontalPadding: 0,
                onZoomStart: null,
                onZoomEnd: null,
                onZoomUpdate: null,
                onDragStart: null,
                onDragEnd: null,
                onDragUpdate: null,
                onDoubleTap: null
            },
            handleDragStart: function(t) {
                s(this.el, this.options.dragStartEventName),
                "function" == typeof this.options.onDragStart && this.options.onDragStart(this, t),
                this.stopAnimation(),
                this.lastDragPosition = !1,
                this.hasInteraction = !0,
                this.handleDrag(t)
            },
            handleDrag: function(t) {
                var e = this.getTouches(t)[0];
                this.drag(e, this.lastDragPosition),
                this.offset = this.sanitizeOffset(this.offset),
                this.lastDragPosition = e
            },
            handleDragEnd: function() {
                s(this.el, this.options.dragEndEventName),
                "function" == typeof this.options.onDragEnd && this.options.onDragEnd(this, event),
                this.end()
            },
            handleZoomStart: function(t) {
                s(this.el, this.options.zoomStartEventName),
                "function" == typeof this.options.onZoomStart && this.options.onZoomStart(this, t),
                this.stopAnimation(),
                this.lastScale = 1,
                this.nthZoom = 0,
                this.lastZoomCenter = !1,
                this.hasInteraction = !0
            },
            handleZoom: function(t, e) {
                var n = this.getTouchCenter(this.getTouches(t))
                  , i = e / this.lastScale;
                this.lastScale = e,
                this.nthZoom += 1,
                3 < this.nthZoom && (this.scale(i, n),
                this.drag(n, this.lastZoomCenter)),
                this.lastZoomCenter = n
            },
            handleZoomEnd: function() {
                s(this.el, this.options.zoomEndEventName),
                "function" == typeof this.options.onZoomEnd && this.options.onZoomEnd(this, event),
                this.end()
            },
            handleDoubleTap: function(t) {
                var e = this.getTouches(t)[0]
                  , n = 1 < this.zoomFactor ? 1 : this.options.tapZoomFactor
                  , i = this.zoomFactor
                  , o = function(t) {
                    this.scaleTo(i + t * (n - i), e)
                }
                .bind(this);
                this.hasInteraction || (this.isDoubleTap = !0,
                n < i && (e = this.getCurrentZoomCenter()),
                this.animate(this.options.animationDuration, o, this.swing),
                s(this.el, this.options.doubleTapEventName),
                "function" == typeof this.options.onDoubleTap && this.options.onDoubleTap(this, t))
            },
            computeInitialOffset: function() {
                this.initialOffset = {
                    x: -Math.abs(this.el.offsetWidth * this.getInitialZoomFactor() - this.containPinch.offsetWidth) / 2,
                    y: -Math.abs(this.el.offsetHeight * this.getInitialZoomFactor() - this.containPinch.offsetHeight) / 2
                }
            },
            resetOffset: function() {
                this.offset.x = this.initialOffset.x,
                this.offset.y = this.initialOffset.y
            },
            isImageLoaded: function(t) {
                return "IMG" === t.nodeName ? t.complete && 0 !== t.naturalHeight : Array.from(t.querySelectorAll("img")).every(this.isImageLoaded)
            },
            setupOffsets: function() {
                this.options.setOffsetsOnce && this._isOffsetsSet || (this._isOffsetsSet = !0,
                this.computeInitialOffset(),
                this.resetOffset())
            },
            sanitizeOffset: function(t) {
                var e = this.el.offsetWidth * this.getInitialZoomFactor() * this.zoomFactor
                  , n = this.el.offsetHeight * this.getInitialZoomFactor() * this.zoomFactor
                  , i = e - this.getContainerX() + this.options.horizontalPadding
                  , o = n - this.getContainerY() + this.options.verticalPadding
                  , s = Math.max(i, 0)
                  , r = Math.max(o, 0)
                  , a = Math.min(i, 0) - this.options.horizontalPadding
                  , l = Math.min(o, 0) - this.options.verticalPadding;
                return {
                    x: Math.min(Math.max(t.x, a), s),
                    y: Math.min(Math.max(t.y, l), r)
                }
            },
            scaleTo: function(t, e) {
                this.scale(t / this.zoomFactor, e)
            },
            scale: function(t, e) {
                t = this.scaleZoomFactor(t),
                this.addOffset({
                    x: (t - 1) * (e.x + this.offset.x),
                    y: (t - 1) * (e.y + this.offset.y)
                }),
                s(this.el, this.options.zoomUpdateEventName),
                "function" == typeof this.options.onZoomUpdate && this.options.onZoomUpdate(this, event)
            },
            scaleZoomFactor: function(t) {
                var e = this.zoomFactor;
                return this.zoomFactor *= t,
                this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)),
                this.zoomFactor / e
            },
            canDrag: function() {
                return this.options.draggableUnzoomed || (t = this.zoomFactor,
                !((e = 1) - .01 < t && t < e + .01));
                var t, e
            },
            drag: function(t, e) {
                e && (this.options.lockDragAxis ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? this.addOffset({
                    x: -(t.x - e.x),
                    y: 0
                }) : this.addOffset({
                    y: -(t.y - e.y),
                    x: 0
                }) : this.addOffset({
                    y: -(t.y - e.y),
                    x: -(t.x - e.x)
                }),
                s(this.el, this.options.dragUpdateEventName),
                "function" == typeof this.options.onDragUpdate && this.options.onDragUpdate(this, event))
            },
            getTouchCenter: function(t) {
                return this.getVectorAvg(t)
            },
            getVectorAvg: function(t) {
                return {
                    x: t.map(function(t) {
                        return t.x
                    }).reduce(e) / t.length,
                    y: t.map(function(t) {
                        return t.y
                    }).reduce(e) / t.length
                }
            },
            addOffset: function(t) {
                this.offset = {
                    x: this.offset.x + t.x,
                    y: this.offset.y + t.y
                }
            },
            sanitize: function() {
                this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
            },
            isInsaneOffset: function(t) {
                var e = this.sanitizeOffset(t);
                return e.x !== t.x || e.y !== t.y
            },
            sanitizeOffsetAnimation: function() {
                var e = this.sanitizeOffset(this.offset)
                  , n = this.offset.x
                  , i = this.offset.y
                  , t = function(t) {
                    this.offset.x = n + t * (e.x - n),
                    this.offset.y = i + t * (e.y - i),
                    this.update()
                }
                .bind(this);
                this.animate(this.options.animationDuration, t, this.swing)
            },
            zoomOutAnimation: function() {
                if (1 !== this.zoomFactor) {
                    var e = this.zoomFactor
                      , n = this.getCurrentZoomCenter()
                      , t = function(t) {
                        this.scaleTo(e + t * (1 - e), n)
                    }
                    .bind(this);
                    this.animate(this.options.animationDuration, t, this.swing)
                }
            },
            updateAspectRatio: function() {
                this.unsetContainerY(),
                null !== document.querySelector(".pinch-zoom-container") && this.setContainerY(this.containPinch.parentNode.offsetHeight)
            },
            getInitialZoomFactor: function() {
                var t = this.containPinch.offsetWidth / this.el.offsetWidth
                  , e = this.containPinch.offsetHeight / this.el.offsetHeight;
                return Math.min(t, e)
            },
            getAspectRatio: function() {
                return this.el.offsetWidth / this.el.offsetHeight
            },
            getCurrentZoomCenter: function() {
                var t = this.offset.x - this.initialOffset.x
                  , e = -1 * this.offset.x - t / (1 / this.zoomFactor - 1)
                  , n = this.offset.y - this.initialOffset.y;
                return {
                    x: e,
                    y: -1 * this.offset.y - n / (1 / this.zoomFactor - 1)
                }
            },
            getTouches: function(t) {
                var e = this.containPinch.getBoundingClientRect()
                  , n = document.documentElement.scrollTop || document.body.scrollTop
                  , i = document.documentElement.scrollLeft || document.body.scrollLeft
                  , o = e.top + n
                  , s = e.left + i;
                return Array.prototype.slice.call(t.touches).map(function(t) {
                    return {
                        x: t.pageX - s,
                        y: t.pageY - o
                    }
                })
            },
            animate: function(n, i, o, s) {
                var r = (new Date).getTime()
                  , a = function() {
                    if (this.inAnimation) {
                        var t = (new Date).getTime() - r
                          , e = t / n;
                        n <= t ? (i(1),
                        s && s(),
                        this.update(),
                        this.stopAnimation(),
                        this.update()) : (o && (e = o(e)),
                        i(e),
                        this.update(),
                        requestAnimationFrame(a))
                    }
                }
                .bind(this);
                this.inAnimation = !0,
                requestAnimationFrame(a)
            },
            stopAnimation: function() {
                this.inAnimation = !1
            },
            swing: function(t) {
                return -Math.cos(t * Math.PI) / 2 + .5
            },
            getContainerX: function() {
                return this.containPinch.offsetWidth
            },
            getContainerY: function() {
                return this.containPinch.offsetHeight
            },
            setContainerY: function(t) {
                return this.containPinch.style.height = t + "px"
            },
            unsetContainerY: function() {
                this.containPinch.style.height = null
            },
            setupMarkup: function() {
                var t, e;
                this.containPinch = (t = '<div class="pinch-zoom-container"></div>',
                (e = document.implementation.createHTMLDocument("")).body.innerHTML = t,
                Array.from(e.body.children)[0]),
                this.el.parentNode.insertBefore(this.containPinch, this.el),
                this.containPinch.appendChild(this.el),
                this.containPinch.style.overflow = "hidden",
                this.containPinch.style.position = "relative",
                this.el.style.webkitTransformOrigin = "0% 0%",
                this.el.style.mozTransformOrigin = "0% 0%",
                this.el.style.msTransformOrigin = "0% 0%",
                this.el.style.oTransformOrigin = "0% 0%",
                this.el.style.transformOrigin = "0% 0%",
                this.el.style.position = "absolute"
            },
            end: function() {
                this.hasInteraction = !1,
                this.sanitize(),
                this.update()
            },
            bindEvents: function() {
                var e = this;
                n(this.containPinch, this),
                window.addEventListener("resize", this.update.bind(this)),
                Array.from(this.el.querySelectorAll("img")).forEach(function(t) {
                    t.addEventListener("load", e.update.bind(e))
                }),
                "IMG" === this.el.nodeName && this.el.addEventListener("load", this.update.bind(this))
            },
            update: function(r) {
                this.updatePlaned || (this.updatePlaned = !0,
                window.setTimeout(function() {
                    this.updatePlaned = !1,
                    r && "resize" === r.type && (this.updateAspectRatio(),
                    this.setupOffsets()),
                    r && "load" === r.type && (this.updateAspectRatio(),
                    this.setupOffsets());
                    var t = this.getInitialZoomFactor() * this.zoomFactor
                      , e = -this.offset.x / t
                      , n = -this.offset.y / t
                      , i = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + n + "px,0px)"
                      , o = "scale(" + t + ", " + t + ") translate(" + e + "px," + n + "px)"
                      , s = function() {
                        this.clone && (this.clone.parentNode.removeChild(this.clone),
                        delete this.clone)
                    }
                    .bind(this);
                    !this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0,
                    s(),
                    this.el.style.webkitTransform = i,
                    this.el.style.mozTransform = o,
                    this.el.style.msTransform = o,
                    this.el.style.oTransform = o,
                    this.el.style.transform = i) : (this.is3d && (this.clone = this.el.cloneNode(!0),
                    this.clone.style.pointerEvents = "none",
                    this.containPinch.appendChild(this.clone),
                    window.setTimeout(s, 100)),
                    this.el.style.webkitTransform = o,
                    this.el.style.mozTransform = o,
                    this.el.style.msTransform = o,
                    this.el.style.oTransform = o,
                    this.el.style.transform = o,
                    this.is3d = !1)
                }
                .bind(this), 0))
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            }
        };
        var n = function(t, o) {
            var s = null
              , n = 0
              , i = null
              , r = null
              , e = function(t, e) {
                if (s !== t) {
                    if (s && !t)
                        switch (s) {
                        case "zoom":
                            o.handleZoomEnd(e);
                            break;
                        case "drag":
                            o.handleDragEnd(e)
                        }
                    switch (t) {
                    case "zoom":
                        o.handleZoomStart(e);
                        break;
                    case "drag":
                        o.handleDragStart(e)
                    }
                }
                s = t
            }
              , a = function(t) {
                2 === n ? e("zoom") : 1 === n && o.canDrag() ? e("drag", t) : e(null, t)
            }
              , l = function(t) {
                return Array.from(t).map(function(t) {
                    return {
                        x: t.pageX,
                        y: t.pageY
                    }
                })
            }
              , c = function(t, e) {
                var n, i;
                return n = t.x - e.x,
                i = t.y - e.y,
                Math.sqrt(n * n + i * i)
            }
              , h = function(t) {
                t.stopPropagation(),
                t.preventDefault()
            }
              , u = !0;
            t.addEventListener("touchstart", function(t) {
                o.enabled && (u = !0,
                n = t.touches.length,
                function(t) {
                    var e = (new Date).getTime();
                    if (1 < n && (i = null),
                    e - i < 300)
                        switch (h(t),
                        o.handleDoubleTap(t),
                        s) {
                        case "zoom":
                            o.handleZoomEnd(t);
                            break;
                        case "drag":
                            o.handleDragEnd(t)
                        }
                    else
                        o.isDoubleTap = !1;
                    1 === n && (i = e)
                }(t))
            }),
            t.addEventListener("touchmove", function(t) {
                if (o.enabled && !o.isDoubleTap) {
                    if (u)
                        a(t),
                        s && h(t),
                        r = l(t.touches);
                    else {
                        switch (s) {
                        case "zoom":
                            2 == r.length && 2 == t.touches.length && o.handleZoom(t, (e = r,
                            n = l(t.touches),
                            i = c(e[0], e[1]),
                            c(n[0], n[1]) / i));
                            break;
                        case "drag":
                            o.handleDrag(t)
                        }
                        s && (h(t),
                        o.update())
                    }
                    u = !1
                }
                var e, n, i
            }),
            t.addEventListener("touchend", function(t) {
                o.enabled && (n = t.touches.length,
                a(t))
            })
        };
        return t
    }();
    t.default = e
}),
function() {
    "use strict";
    var s = "undefined" != typeof window && void 0 !== window.document ? window.document : {}
      , t = "undefined" != typeof module && module.exports
      , r = function() {
        for (var t, e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, i = e.length, o = {}; n < i; n++)
            if ((t = e[n]) && t[1]in s) {
                for (n = 0; n < t.length; n++)
                    o[e[0][n]] = t[n];
                return o
            }
        return !1
    }()
      , i = {
        change: r.fullscreenchange,
        error: r.fullscreenerror
    }
      , e = {
        request: function(o) {
            return new Promise(function(t, e) {
                var n = function() {
                    this.off("change", n),
                    t()
                }
                .bind(this);
                this.on("change", n);
                var i = (o = o || s.documentElement)[r.requestFullscreen]();
                i instanceof Promise && i.then(n).catch(e)
            }
            .bind(this))
        },
        exit: function() {
            return new Promise(function(t, e) {
                if (this.isFullscreen) {
                    var n = function() {
                        this.off("change", n),
                        t()
                    }
                    .bind(this);
                    this.on("change", n);
                    var i = s[r.exitFullscreen]();
                    i instanceof Promise && i.then(n).catch(e)
                } else
                    t()
            }
            .bind(this))
        },
        toggle: function(t) {
            return this.isFullscreen ? this.exit() : this.request(t)
        },
        onchange: function(t) {
            this.on("change", t)
        },
        onerror: function(t) {
            this.on("error", t)
        },
        on: function(t, e) {
            var n = i[t];
            n && s.addEventListener(n, e, !1)
        },
        off: function(t, e) {
            var n = i[t];
            n && s.removeEventListener(n, e, !1)
        },
        raw: r
    };
    r ? (Object.defineProperties(e, {
        isFullscreen: {
            get: function() {
                return Boolean(s[r.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return s[r.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return Boolean(s[r.fullscreenEnabled])
            }
        }
    }),
    t ? module.exports = e : window.screenfull = e) : t ? module.exports = {
        isEnabled: !1
    } : window.screenfull = {
        isEnabled: !1
    }
}();
function scrollTranslate() {
    var s, l, c, r = function(t, e, i, n, s) {
        return (t - e) * (s - n) / (i - e) + n
    }, h = function(t, e, i) {
        return (1 - i) * t + i * e
    }, i = function(t, e) {
        return (Math.random() * (e - t) + t).toFixed(2)
    }, e = document.body, t = function() {
        return s = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    };
    t(),
    window.addEventListener("resize", t);
    var n = function() {
        return l = window.pageYOffset || document.documentElement.scrollTop
    };
    window.addEventListener("scroll", n);
    var a = function() {
        function e(t) {
            var n = this;
            classCallCheck(this, e),
            this.DOM = {
                el: t
            },
            this.DOM.image = this.DOM.el.querySelectorAll(".pic-scale"),
            this.DOM.pictures = this.DOM.el.querySelectorAll(".trans-slow"),
            this.DOM.title = this.DOM.el.querySelectorAll(".trans-fast"),
            this.DOM.RotLeft = this.DOM.el.querySelectorAll(".rotate-left"),
            this.DOM.RotRight = this.DOM.el.querySelectorAll(".rotate-right"),
            this.DOM.TransX = this.DOM.el.querySelectorAll(".trans-x"),
            this.DOM.TransOpacity = this.DOM.el.querySelectorAll(".trans-opacity"),
            this.aniStyles = {
                Opacity: {
                    previous: 0,
                    current: 0,
                    ease: .05,
                    setValue: function() {
                        var t = r(n.props.top - l, s.height, -1 * n.props.height, 0, .5);
                        return Math.max(Math.min(t, .5), 0)
                    }
                },
                itemRotation: {
                    previous: 0,
                    current: 0,
                    ease: .1,
                    toValue: Number(i(-70, -50)),
                    setValue: function() {
                        var t = n.aniStyles.itemRotation.toValue
                          , e = -1 * t
                          , i = r(n.props.top - l, 1.5 * s.height, -1 * n.props.height, e, t);
                        return Math.min(Math.max(i, t), e)
                    }
                },
                itemScale: {
                    previous: 0,
                    current: 0,
                    ease: .1,
                    setValue: function() {
                        var t = r(n.props.top - l, s.height, -1 * n.props.height, 1, 1.2);
                        return Math.max(Math.min(t, 1.2), 1)
                    }
                },
                itemTranslationY: {
                    previous: 0,
                    current: 0,
                    ease: .1,
                    setValue: function() {
                        var t = parseInt(window.innerHeight / 7)
                          , e = -1 * t;
                        return Math.max(Math.min(r(n.props.top - l, s.height, -1 * n.props.height, e, t), t), e)
                    }
                },
                titleTranslationY: {
                    previous: 0,
                    current: 0,
                    ease: .2,
                    fromValue: Number(i(window.innerHeight / 2, window.innerHeight / 2)),
                    setValue: function() {
                        var t = n.aniStyles.titleTranslationY.fromValue
                          , e = -1 * t
                          , i = r(n.props.top - l, s.height, -1 * n.props.height, t, e);
                        return t < 0 ? Math.min(Math.max(i, t), e) : Math.max(Math.min(i, t), e)
                    }
                }
            },
            this.getSize(),
            this.upDate(),
            this.observer = new IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    return n.isVisible = 0 < t.intersectionRatio
                })
            }
            ),
            this.observer.observe(this.DOM.el),
            this.initEvents()
        }
        return createClass(e, [{
            key: "upDate",
            value: function() {
                for (var t in this.aniStyles)
                    this.aniStyles[t].current = this.aniStyles[t].previous = this.aniStyles[t].setValue();
                this.Ani()
            }
        }, {
            key: "getSize",
            value: function() {
                var t = this.DOM.el.getBoundingClientRect();
                this.props = {
                    height: t.height,
                    top: l + t.top
                }
            }
        }, {
            key: "initEvents",
            value: function() {
                var t = this;
                window.addEventListener("resize", function() {
                    return t.resizeItem()
                })
            }
        }, {
            key: "resizeItem",
            value: function() {
                this.getSize(),
                this.upDate()
            }
        }, {
            key: "renderAni",
            value: function() {
                for (var t in this.aniStyles)
                    this.aniStyles[t].current = this.aniStyles[t].setValue(),
                    this.aniStyles[t].previous = h(this.aniStyles[t].previous, this.aniStyles[t].current, this.aniStyles[t].ease);
                this.Ani()
            }
        }, {
            key: "Ani",
            value: function() {
                var e = this;
                null !== this.DOM.image && this.DOM.image.forEach(function(t) {
                    1100 < window.innerWidth ? t.style.transform = "scale3d(".concat(e.aniStyles.itemScale.previous, ",").concat(e.aniStyles.itemScale.previous, ",1) translate3d(0,").concat(.6 * e.aniStyles.itemTranslationY.previous, "px,0)") : t.style.transform = "none"
                }),
                null !== this.DOM.pictures && this.DOM.pictures.forEach(function(t) {
                    1100 < window.innerWidth ? t.style.transform = "translate3d(0,".concat(e.aniStyles.itemTranslationY.previous, "px,0)") : t.style.transform = "none"
                }),
                null !== this.DOM.TransOpacity && this.DOM.TransOpacity.forEach(function(t) {
                    1100 < window.innerWidth ? t.style.opacity = 5 * e.aniStyles.Opacity.previous : t.style.opacity = "1"
                }),
                null !== this.DOM.title && this.DOM.title.forEach(function(t) {
                    t.style.transform = "translate3d(0,".concat(e.aniStyles.titleTranslationY.previous, "px,0)")
                }),
                this.DOM.TransX && this.DOM.TransX.forEach(function(t) {
                    t.style.transform = "translate3d(-".concat(e.aniStyles.titleTranslationY.previous, "px, 0, 0)")
                }),
                null !== this.DOM.RotLeft && (1024 < window.innerWidth ? this.DOM.RotLeft.forEach(function(t) {
                    t.style.transform = "scale3d(".concat(e.aniStyles.itemScale.previous, ",").concat(e.aniStyles.itemScale.previous, ",1) translate3d(0,").concat(.8 * e.aniStyles.itemTranslationY.previous, "px,0) rotate3d(0,0,1,").concat(.3 * e.aniStyles.itemRotation.previous, "deg)")
                }) : this.DOM.RotLeft.forEach(function(t) {
                    t.style.transform = "none"
                })),
                null !== this.DOM.RotRight && (1024 < window.innerWidth ? this.DOM.RotRight.forEach(function(t) {
                    t.style.transform = "scale3d(".concat(e.aniStyles.itemScale.previous, ",").concat(e.aniStyles.itemScale.previous, ",1) translate3d(0,").concat(.8 * e.aniStyles.itemTranslationY.previous, "px,0) rotate3d(0,0,1,").concat(-.3 * e.aniStyles.itemRotation.previous, "deg)")
                }) : this.DOM.RotRight.forEach(function(t) {
                    t.style.transform = "none"
                }))
            }
        }]),
        e
    }()
      , o = function() {
        function i() {
            var e = this;
            classCallCheck(this, i),
            this.DOM = {
                main: document.querySelector(".smooth-scroll")
            },
            this.items = [],
            this.DOM.scrollable = this.DOM.main.querySelector(".scroll-content"),
            this.DOM.banner = this.DOM.main.querySelector(".banner-inner"),
            this.items = [],
            this.DOM.content = this.DOM.main.querySelector(".container");
            var t = this.DOM.content.getAttribute("id");
            "about-page" == t || "service-page" == t || "project-page" == t ? toConsumableArray(this.DOM.content.querySelectorAll(".has-scroll")).forEach(function(t) {
                return e.items.push(new a(t))
            }) : toConsumableArray(this.DOM.content.querySelectorAll("section")).forEach(function(t) {
                return e.items.push(new a(t))
            }),
            this.ScrollStyles = {
                translationY: {
                    previous: 0,
                    current: 0,
                    ease: .09,
                    setValue: function() {
                        return l
                    }
                }
            },
            this.setSize(),
            this.upDate(),
            this.initEvents(),
            requestAnimationFrame(function() {
                return e.InitScroll()
            })
        }
        return createClass(i, [{
            key: "upDate",
            value: function() {
                for (var t in this.ScrollStyles)
                    this.ScrollStyles[t].current = this.ScrollStyles[t].previous = this.ScrollStyles[t].setValue();
                this.Respone()
            }
        }, {
            key: "Respone",
            value: function() {
                1100 < window.innerWidth ? (this.DOM.scrollable.style.transform = "translate3d(0,".concat(-1 * this.ScrollStyles.translationY.previous, "px,0)"),
                this.DOM.banner.style.transform = "translate3d(0,".concat(.5 * this.ScrollStyles.translationY.previous, "px,0)")) : (this.DOM.scrollable.style.transform = "translate3d(0,0,0)",
                this.DOM.banner.style.transform = "translate3d(0,0,0)")
            }
        }, {
            key: "setSize",
            value: function() {
                window.innerWidth;
                var t = "".concat(this.DOM.scrollable.scrollHeight, "px");
                e.style.height = t
            }
        }, {
            key: "initEvents",
            value: function() {
                var t = this;
                window.addEventListener("resize", function() {
                    return t.setSize()
                })
            }
        }, {
            key: "InitScroll",
            value: function() {
                var t = this;
                for (var e in Math.abs(l - c),
                c = l,
                this.ScrollStyles)
                    this.ScrollStyles[e].current = this.ScrollStyles[e].setValue(),
                    this.ScrollStyles[e].previous = h(this.ScrollStyles[e].previous, this.ScrollStyles[e].current, this.ScrollStyles[e].ease);
                this.Respone(),
                this.setSize();
                var i = !0
                  , n = !1
                  , s = void 0;
                try {
                    for (var r, a = this.items[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
                        var o = r.value;
                        o.isVisible ? o.insideViewport ? o.renderAni() : (o.insideViewport = !0,
                        o.upDate()) : o.insideViewport = !1
                    }
                } catch (t) {
                    n = !0,
                    s = t
                } finally {
                    try {
                        i || null === a.return || a.return()
                    } finally {
                        if (n)
                            throw s
                    }
                }
                requestAnimationFrame(function() {
                    return t.InitScroll()
                })
            }
        }]),
        i
    }();
    n(),
    c = l,
    new o
}
var core_event = function() {
    var o = [];
    function i(t) {
        t.elm && t.elm.removeEventListener(t.event, t.handler, t.options)
    }
    return {
        on: function(t, e, n, i) {
            void 0 === n && (n = null),
            void 0 === i && (i = {}),
            t.split(" ").forEach(function(t) {
                n && n.addEventListener(t, e, i, {
                    passive: !1
                }),
                o.push({
                    event: t,
                    handler: e,
                    elm: n,
                    options: i
                })
            })
        },
        off: function(t, n) {
            void 0 === n && (n = null),
            t.split(" ").forEach(function(e) {
                o = o.filter(function(t) {
                    return !t || t.event !== e || t.elm !== n || (i(t),
                    !1)
                })
            })
        },
        emit: function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
            o.forEach(function(t) {
                t.elm || t.event.split(".")[0] !== e || t.handler.apply(t, n)
            })
        },
        destroy: function() {
            o.forEach(i),
            o = []
        }
    }
}
  , state = function(t) {
    var e = t;
    return {
        set: function(t) {
            e = t
        },
        is: function(t) {
            return t === e
        }
    }
};
function Extends() {
    return (Extends = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ).apply(this, arguments)
}
var keys = Object.keys;
function each(n, i) {
    keys(n).some(function(t, e) {
        return i(n[t], t, e)
    })
}
function values(e) {
    return keys(e).map(function(t) {
        return e[t]
    })
}
function isObject(t) {
    return "object" == typeof t
}
function merge(t, e) {
    var n = Extends({}, t);
    return each(e, function(t, e) {
        isObject(t) ? (isObject(n[e]) || (n[e] = {}),
        n[e] = merge(n[e], t)) : n[e] = t
    }),
    n
}
function object_assign(e, n) {
    return e._s = n,
    keys(n).forEach(function(t) {
        e[t] || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }),
    e
}
function toArray(t) {
    return Array.isArray(t) ? t : [t]
}
function between(t, e, n) {
    return Math.min(Math.max(t, n < e ? n : e), n < e ? e : n)
}
function sprintf(t, e) {
    var n = 0;
    return t.replace(/%s/g, function() {
        return toArray(e)[n++]
    })
}
function unit(t) {
    var e = typeof t;
    return "number" === e && 0 < t ? parseFloat(t) + "px" : "string" === e ? t : ""
}
function pad(t) {
    return t < 10 ? "0" + t : t
}
function toPixel(t, e) {
    if ("string" == typeof e) {
        var n = create("div", {});
        applyStyle(n, {
            position: "absolute",
            width: e
        }),
        append(t, n),
        e = n.clientWidth,
        dom_remove(n)
    }
    return e
}
function find(t, e) {
    return t ? t.querySelector(e.split(" ")[0]) : null
}
function child(t, e) {
    return t && values(t.children).filter(function(t) {
        return hasClass(t, e.split(" ")[0]) || t.tagName === e
    })[0] || null
}
function create(t, e) {
    var n = document.createElement(t);
    return each(e, function(t, e) {
        return setAttribute(n, e, t)
    }),
    n
}
function domify(t) {
    var e = create("div", {});
    return e.innerHTML = t,
    e.firstChild
}
function dom_remove(t) {
    toArray(t).forEach(function(t) {
        if (t) {
            var e = t.parentElement;
            e && e.removeChild(t)
        }
    })
}
function append(t, e) {
    t && t.appendChild(e)
}
function before(t, e) {
    if (t && e) {
        var n = e.parentElement;
        n && n.insertBefore(t, e)
    }
}
function applyStyle(n, t) {
    n && each(t, function(t, e) {
        null !== t && (n.style[e] = t)
    })
}
function addOrRemoveClasses(e, t, n) {
    e && toArray(t).forEach(function(t) {
        t && e.classList[n ? "remove" : "add"](t)
    })
}
function addClass(t, e) {
    addOrRemoveClasses(t, e, !1)
}
function removeClass(t, e) {
    addOrRemoveClasses(t, e, !0)
}
function hasClass(t, e) {
    return !!t && t.classList.contains(e)
}
function setAttribute(t, e, n) {
    t && t.setAttribute(e, n)
}
function getAttribute(t, e) {
    return t ? t.getAttribute(e) : ""
}
function removeAttribute(t, e) {
    toArray(e).forEach(function(e) {
        toArray(t).forEach(function(t) {
            return t && t.removeAttribute(e)
        })
    })
}
function dom_loaded(t, e) {
    var n = t.querySelectorAll("img")
      , i = n.length;
    if (i) {
        var o = 0;
        each(n, function(t) {
            t.onload = t.onerror = function() {
                ++o === i && e()
            }
        })
    } else
        e()
}
var SLIDE = "slide"
  , LOOP = "loop"
  , FADE = "fade"
  , transitions_slide = function(u, c) {
    var l, d;
    return {
        mount: function() {
            l = c.Elements.list,
            u.on("transitionend", function(t) {
                t.target === l && d && d()
            }, l)
        },
        start: function(t, e, n, i, o) {
            var r = u.options
              , s = c.Controller.edgeIndex
              , a = r.speed;
            d = o,
            u.is(SLIDE) && (0 === n && s <= e || s <= n && 0 === e) && (a = r.rewindSpeed || a),
            applyStyle(l, {
                transition: "transform " + a + "ms " + r.easing,
                transform: "translate(" + i.x + "px," + i.y + "px)"
            })
        }
    }
}
  , fade = function(n, s) {
    function a(t) {
        var e = n.options;
        applyStyle(s.Elements.slides[t], {
            transition: "opacity " + e.speed + "ms " + e.easing
        })
    }
    return s.Drag && (s.Drag.required = !1),
    {
        mount: function() {
            a(n.index)
        },
        start: function(t, e, n, i, o) {
            var r = s.Elements.track;
            applyStyle(r, {
                height: unit(r.clientHeight)
            }),
            a(e),
            o(),
            applyStyle(r, {
                height: ""
            })
        }
    }
};
function compose(n, t, e) {
    var i = {};
    return each(t, function(t, e) {
        i[e] = t(n, i, e.toLowerCase())
    }),
    e || (e = n.is(FADE) ? fade : transitions_slide),
    i.Transition = e(n, i),
    i
}
var MESSAGE_PREFIX = "[SLIDE-BOX]";
function error_error(t) {
}
function exist(t, e) {
    if (!t)
        throw new Error(e)
}
var ROOT = "slidebox"
  , ELEMENT_CLASSES = {
    root: ROOT,
    slider: ROOT + "-slider",
    track: ROOT + "-track",
    list: ROOT + "-list",
    slide: ROOT + "-item",
    container: ROOT + "-container",
    modify: ROOT + "-modify",
    arrows: ROOT + "-arrows",
    arrow: ROOT + "-arrow",
    prev: ROOT + "-arrow-prev",
    next: ROOT + "-arrow-next",
    pagination: ROOT + "-pagination",
    page: ROOT + "-pagi-item",
    num: ROOT + "-pagi-num",
    clone: ROOT + "-item-clone",
    progress: ROOT + "-progress",
    bar: ROOT + "-progress-bar",
    autoplay: ROOT + "-autoplay",
    play: ROOT + "-play",
    pause: ROOT + "-pause",
    spinner: ROOT + "-spinner",
    sr: ROOT + "-sr"
}
  , STATUS_CLASSES = {
    active: "is-active",
    visible: "is-visible",
    loading: "is-loading"
}
  , I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay"
}
  , DEFAULTS = {
    type: "slide",
    rewind: !1,
    speed: 400,
    rewindSpeed: 0,
    width: 0,
    height: 0,
    fixedWidth: 0,
    fixedHeight: 0,
    heightRatio: 0,
    autoWidth: !1,
    perPage: 1,
    perMove: 0,
    clones: 0,
    start: 0,
    focus: !1,
    gap: 0,
    padding: 0,
    arrows: !0,
    arrowPath: "",
    SizeW: 40,
    SizeH: 40,
    pagination: !0,
    dotNum: !1,
    intoNav: !1,
    autoplay: !1,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    lazyLoad: !1,
    preloadPages: 1,
    easing: "cubic-bezier(.42,.65,.27,.99)",
    keyboard: !0,
    drag: !0,
    dragAngleThreshold: 30,
    swipeDistanceThreshold: 150,
    flickVelocityThreshold: .6,
    flickPower: 600,
    flickMaxPages: 1,
    direction: "ltr",
    cover: !1,
    accessibility: !0,
    isNavigation: !1,
    trimSpace: !0,
    updateOnMove: !1,
    throttle: 100,
    breakpoints: !1,
    classes: ELEMENT_CLASSES,
    i18n: I18N
}
  , CREATED = 1
  , MOUNTED = 2
  , IDLE = 3
  , MOVING = 4
  , DESTROYED = 5
  , splide_Splide = function() {
    function t(t, e, n) {
        void 0 === e && (e = {}),
        void 0 === n && (n = {}),
        this.root = t instanceof Element ? t : document.querySelector(t),
        exist(this.root, "An invalid element/selector was given."),
        this.Components = null,
        this.Event = core_event(),
        this.State = state(CREATED),
        this.STATES = {},
        this._o = merge(DEFAULTS, e),
        this._i = 0,
        this._c = n,
        this._e = {},
        this._t = null
    }
    var e = t.prototype;
    return e.mount = function(t, e) {
        var i = this;
        void 0 === t && (t = this._e),
        void 0 === e && (e = this._t),
        this._e = t,
        this._t = e,
        this.Components = compose(this, merge(this._c, t), e);
        try {
            each(this.Components, function(t, e) {
                var n = t.required;
                void 0 === n || n ? t.mount && t.mount() : delete i.Components[e]
            })
        } catch (t) {
            return void error_error(t.message)
        }
        var n = this.State;
        return n.set(MOUNTED),
        each(this.Components, function(t) {
            t.mounted && t.mounted()
        }),
        this.emit("mounted"),
        n.set(IDLE),
        this.emit("ready"),
        applyStyle(this.root, {
            visibility: "visible"
        }),
        this.on("move drag", function() {
            return n.set(MOVING)
        }).on("moved dragged", function() {
            return n.set(IDLE)
        }),
        this
    }
    ,
    e.sync = function(t) {
        return this.sibling = t,
        this
    }
    ,
    e.on = function(t, e, n, i) {
        return void 0 === n && (n = null),
        void 0 === i && (i = {}),
        this.Event.on(t, e, n, i),
        this
    }
    ,
    e.off = function(t, e) {
        return void 0 === e && (e = null),
        this.Event.off(t, e),
        this
    }
    ,
    e.emit = function(t) {
        for (var e, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++)
            i[o - 1] = arguments[o];
        return (e = this.Event).emit.apply(e, [t].concat(i)),
        this
    }
    ,
    e.go = function(t, e) {
        return void 0 === e && (e = !0),
        (this.State.is(IDLE) || this.State.is(MOVING) && !e) && this.Components.Controller.go(t, !1),
        this
    }
    ,
    e.is = function(t) {
        return t === this._o.type
    }
    ,
    e.add = function(t, e) {
        return void 0 === e && (e = -1),
        this.Components.Elements.add(t, e, this.refresh.bind(this)),
        this
    }
    ,
    e.remove = function(t) {
        return this.Components.Elements.remove(t),
        this.refresh(),
        this
    }
    ,
    e.refresh = function() {
        return this.emit("refresh").emit("resize"),
        this
    }
    ,
    e.destroy = function(e) {
        var t = this;
        if (void 0 === e && (e = !0),
        !this.State.is(CREATED))
            return values(this.Components).reverse().forEach(function(t) {
                t.destroy && t.destroy(e)
            }),
            this.emit("destroy", e),
            this.Event.destroy(),
            this.State.set(DESTROYED),
            this;
        this.on("ready", function() {
            return t.destroy(e)
        })
    }
    ,
    createClass(t, [{
        key: "index",
        get: function() {
            return this._i
        },
        set: function(t) {
            this._i = parseInt(t)
        }
    }, {
        key: "length",
        get: function() {
            return this.Components.Elements.length
        }
    }, {
        key: "options",
        get: function() {
            return this._o
        },
        set: function(t) {
            var e = this.State.is(CREATED);
            e || this.emit("update"),
            this._o = merge(this._o, t),
            e || this.emit("updated", this._o)
        }
    }, {
        key: "classes",
        get: function() {
            return this._o.classes
        }
    }, {
        key: "i18n",
        get: function() {
            return this._o.i18n
        }
    }]),
    t
}()
  , components_options = function(t) {
    var e = getAttribute(t.root, "data-splide");
    if (e)
        try {
            t.options = JSON.parse(e)
        } catch (t) {
            error_error(t.message)
        }
    return {
        mount: function() {
            t.State.is(CREATED) && (t.index = t.options.start)
        }
    }
}
  , LTR = "ltr"
  , RTL = "rtl"
  , TTB = "ttb"
  , STYLE_RESTORE_EVENTS = "update.slide"
  , elements_slide = function(c, l, e, o) {
    var n = c.options.updateOnMove
      , i = (document.querySelector("#home-page"),
    "ready.slide updated.slide resize.slide move.slide" + (n ? " move.slide" : ""))
      , r = {
        slide: o,
        index: l,
        realIndex: e,
        container: child(o, c.classes.container),
        isClone: -1 < e,
        mount: function() {
            var t = this;
            this.isClone || (o.id = c.root.id + "-slide" + pad(l + 1)),
            r.slide.classList.contains("album-pic-center") && (i = "ready.slide updated.slide resize.slide moved.slide" + (n ? " move.slide" : "")),
            c.on(i, function() {
                return t.update()
            }).on(STYLE_RESTORE_EVENTS, a).on("click", function() {
                return c.emit("click", t)
            }, o),
            n && c.on("move.slide", function(t) {
                t === e && s(!0, !1)
            }),
            applyStyle(o, {
                display: ""
            }),
            this.styles = getAttribute(o, "style") || ""
        },
        destroy: function() {
            c.off(i).off(STYLE_RESTORE_EVENTS).off("click", o),
            removeClass(o, values(STATUS_CLASSES)),
            a()
        },
        update: function() {
            s(this.isActive(), !1),
            s(this.isVisible(), !0)
        },
        isActive: function() {
            return c.index === l
        },
        isVisible: function() {
            var t = this.isActive();
            if (c.is(FADE) || t)
                return t;
            var e = Math.floor
              , n = c.Components
              , i = n.Track
              , o = n.Layout
              , r = c.options.direction === TTB
              , s = e((i.toPosition(l) + i.offset(l) - i.position) * i.sign)
              , a = e(s + o[r ? "slideHeight" : "slideWidth"](l))
              , u = o[r ? "height" : "width"];
            return 0 <= s && s <= u && 0 <= a && a <= u
        },
        isWithin: function(t, e) {
            var n = Math.abs(t - l);
            return c.is(SLIDE) || this.isClone || (n = Math.min(n, c.length - n)),
            n < e
        }
    };
    function s(t, e) {
        var n = e ? "visible" : "active"
          , i = STATUS_CLASSES[n];
        t ? (addClass(o, i),
        c.emit("" + n, r)) : hasClass(o, i) && (removeClass(o, i),
        c.emit(e ? "hidden" : "inactive", r))
    }
    function a() {
        setAttribute(o, "style", r.styles)
    }
    return r
}
  , UID_NAME = "uid"
  , components_elements = function(o, r) {
    var n = o.root
      , i = o.classes
      , s = [];
    if (!n.id) {
        window.splide = window.splide || {};
        var t = window.splide[UID_NAME] || 0;
        window.splide[UID_NAME] = ++t,
        n.id = "splide" + pad(t)
    }
    var a = {
        mount: function() {
            var t = this;
            !function() {
                a.slider = child(n, i.slider),
                a.track = find(n, "." + i.track),
                a.list = child(a.track, i.list),
                exist(a.track && a.list, "Track or list was not found."),
                a.slides = values(a.list.children);
                var t = u(i.arrows);
                a.arrows = {
                    prev: find(t, "." + i.prev),
                    next: find(t, "." + i.next)
                };
                var e = u(i.autoplay);
                a.bar = find(u(i.progress), "." + i.bar),
                a.play = find(e, "." + i.play),
                a.pause = find(e, "." + i.pause),
                a.track.id = a.track.id || n.id + "-track",
                a.list.id = a.list.id || n.id + "-list"
            }(),
            this.init(),
            o.on("refresh", function() {
                t.destroy(),
                t.init()
            }).on("updated", function() {
                removeClass(n, e()),
                addClass(n, e())
            })
        },
        destroy: function() {
            s.forEach(function(t) {
                t.destroy()
            }),
            s = [],
            removeClass(n, e())
        },
        init: function() {
            addClass(n, e()),
            a.slides.forEach(function(t, e) {
                a.register(t, e, -1)
            })
        },
        register: function(t, e, n) {
            var i = elements_slide(o, e, n, t);
            i.mount(),
            s.push(i)
        },
        getSlide: function(e) {
            return s.filter(function(t) {
                return t.index === e
            })[0]
        },
        getSlides: function(t) {
            return t ? s : s.filter(function(t) {
                return !t.isClone
            })
        },
        getSlidesByPage: function(t) {
            var n = r.Controller.toIndex(t)
              , e = o.options
              , i = !1 !== e.focus ? 1 : e.perPage;
            return s.filter(function(t) {
                var e = t.index;
                return n <= e && e < n + i
            })
        },
        add: function(t, e, n) {
            if ("string" == typeof t && (t = domify(t)),
            t instanceof Element) {
                var i = this.slides[e];
                applyStyle(t, {
                    display: "none"
                }),
                i ? (before(t, i),
                this.slides.splice(e, 0, t)) : (append(this.list, t),
                this.slides.push(t)),
                dom_loaded(t, function() {
                    n && n(t)
                })
            }
        },
        remove: function(t) {
            dom_remove(this.slides.splice(t, 1)[0])
        },
        each: function(t) {
            s.forEach(t)
        },
        get length() {
            return this.slides.length
        },
        get total() {
            return s.length
        }
    };
    function e() {
        var t = i.root
          , e = o.options;
        return [t + "--" + e.type, t + "--" + e.direction, e.drag ? t + "-draggable" : "", e.isNavigation ? t + "-nav" : ""]
    }
    function u(t) {
        return child(n, t) || child(a.slider, t)
    }
    return a
}
  , controller_floor = Math.floor
  , controller = function(r, i) {
    var s, n, a = {
        mount: function() {
            s = r.options,
            n = r.is(LOOP),
            r.on("move", function(t) {
                r.index = t
            }).on("updated refresh", function(t) {
                s = t || s,
                r.index = between(r.index, 0, a.edgeIndex)
            })
        },
        go: function(t, e) {
            var n = this.trim(this.parse(t));
            i.Track.go(n, this.rewind(n), e)
        },
        parse: function(t) {
            var e = r.index
              , n = String(t).match(/([+\-<>]+)(\d+)?/)
              , i = n ? n[1] : ""
              , o = n ? parseInt(n[2]) : 0;
            switch (i) {
            case "+":
                e += o || 1;
                break;
            case "-":
                e -= o || 1;
                break;
            case ">":
            case "<":
                e = function(t, e, n) {
                    if (-1 < t)
                        return a.toIndex(t);
                    var i = s.perMove
                      , o = n ? -1 : 1;
                    if (i)
                        return e + i * o;
                    return a.toIndex(a.toPage(e) + o)
                }(o, e, "<" === i);
                break;
            default:
                e = parseInt(t)
            }
            return e
        },
        toIndex: function(t) {
            if (o())
                return t;
            var e = r.length
              , n = s.perPage
              , i = t * n;
            return e - n <= (i -= (this.pageLength * n - e) * controller_floor(i / e)) && i < e && (i = e - n),
            i
        },
        toPage: function(t) {
            if (o())
                return t;
            var e = r.length
              , n = s.perPage;
            return controller_floor(e - n <= t && t < e ? (e - 1) / n : t / n)
        },
        trim: function(t) {
            return n || (t = s.rewind ? this.rewind(t) : between(t, 0, this.edgeIndex)),
            t
        },
        rewind: function(t) {
            var e = this.edgeIndex;
            if (n) {
                for (; e < t; )
                    t -= e + 1;
                for (; t < 0; )
                    t += e + 1
            } else
                e < t ? t = 0 : t < 0 && (t = e);
            return t
        },
        isRtl: function() {
            return s.direction === RTL
        },
        get pageLength() {
            var t = r.length;
            return o() ? t : Math.ceil(t / s.perPage)
        },
        get edgeIndex() {
            var t = r.length;
            return t ? o() || s.isNavigation || n ? t - 1 : t - s.perPage : 0
        },
        get prevIndex() {
            var t = r.index - 1;
            return (n || s.rewind) && (t = this.rewind(t)),
            -1 < t ? t : -1
        },
        get nextIndex() {
            var t = r.index + 1;
            return (n || s.rewind) && (t = this.rewind(t)),
            r.index < t && t <= this.edgeIndex || 0 === t ? t : -1
        }
    };
    function o() {
        return !1 !== s.focus
    }
    return a
}
  , vertical = function(n, i) {
    var o;
    return {
        axis: "Y",
        sign: -1,
        init: function() {
            o = i.Layout
        },
        toPosition: function(t) {
            return -((t + i.Clones.length / 2) * (o.slideHeight() + o.gap) + this.offset())
        },
        toIndex: function(t) {
            var e = o.slideHeight()
              , n = (e + o.gap) * i.Clones.length / 2;
            return Math.round(-(t + n + this.offset()) / (e + o.gap))
        },
        trim: function(t) {
            return between(t, -(o.listHeight - (o.height + o.gap)), 0)
        },
        offset: function() {
            var t = n.options.focus
              , e = o.slideHeight();
            return "center" === t ? -(o.height - e) / 2 : -(parseInt(t) || 0) * (e + o.gap)
        }
    }
}
  , horizontal = function(r, t) {
    var s, a;
    return {
        axis: "X",
        sign: r.options.direction === RTL ? 1 : -1,
        init: function() {
            s = t.Layout,
            a = t.Elements
        },
        toPosition: function(t) {
            return this.sign * (s.totalWidth(t - 1) + this.offset(t))
        },
        toIndex: function(t) {
            t *= this.sign,
            r.is(SLIDE) && (t = between(t, s.totalWidth(a.total), 0));
            var e = a.getSlides(!0);
            for (var n in e) {
                var i = e[n].index
                  , o = this.sign * this.toPosition(i);
                if (o < t && t <= o + s.slideWidth(i) + s.gap)
                    return i
            }
            return 0
        },
        trim: function(t) {
            return between(t, this.sign * (s.totalWidth(a.total) - (s.width + s.gap)), 0)
        },
        offset: function(t) {
            var e = r.options.focus
              , n = s.slideWidth(t);
            return "center" === e ? -(s.width - n) / 2 : -(parseInt(e) || 0) * (n + s.gap)
        }
    }
}
  , components_track = function(s, a) {
    var o, u = 0, e = s.options.direction === TTB, c = s.is(FADE), n = object_assign({
        mount: function() {
            o = a.Elements.list,
            this.init()
        },
        mounted: function() {
            var t = this;
            c || s.on("mounted resize updated", function() {
                t.jump(s.index)
            })
        },
        go: function(t, e, n) {
            var i = this
              , o = l(t)
              , r = s.index;
            n || s.emit("move", e, r, t),
            1 <= Math.abs(o - u) || c ? a.Transition.start(t, e, r, this.toCoord(o), function() {
                i.end(t, e, r, n)
            }) : t !== r && "move" === s.options.trimSpace ? a.Controller.go(t + t - r, n) : this.end(t, e, r, n)
        },
        end: function(t, e, n, i) {
            applyStyle(o, {
                transition: ""
            }),
            c || this.jump(e),
            i || s.emit("moved", e, n, t)
        },
        jump: function(t) {
            this.translate(l(t))
        },
        translate: function(t) {
            u = t,
            applyStyle(o, {
                transform: "translate" + this.axis + "(" + t + "px)"
            })
        },
        trim: function(t) {
            return !s.options.trimSpace || s.is(LOOP) ? t : this._s.trim(t)
        },
        toCoord: function(t) {
            return {
                x: e ? 0 : t,
                y: e ? t : 0
            }
        },
        get position() {
            return u
        }
    }, e ? vertical(s, a) : horizontal(s, a));
    function l(t) {
        return n.trim(n.toPosition(t))
    }
    return n
}
  , components_clones = function(o, t) {
    var s = []
      , e = 0
      , a = t.Elements
      , n = {
        mount: function() {
            o.is(LOOP) && (i(),
            o.on("refresh", i).on("resize", function() {
                e !== r() && o.refresh()
            }))
        },
        destroy: function() {
            dom_remove(s),
            s = []
        },
        get clones() {
            return s
        },
        get length() {
            return s.length
        }
    };
    function i() {
        n.destroy(),
        function(i) {
            var o = a.length;
            if (!o)
                return;
            var r = a.slides;
            for (; r.length < i; )
                r = r.concat(r);
            r.slice(0, i).forEach(function(t, e) {
                var n = u(t);
                append(a.list, n),
                s.push(n),
                a.register(n, e + o, e % o)
            }),
            r.slice(-i).forEach(function(t, e) {
                var n = u(t);
                before(n, r[0]),
                s.push(n),
                a.register(n, e - i, (o + e - i % o) % o)
            })
        }(e = r())
    }
    function r() {
        var t = o.options;
        if (t.clones)
            return t.clones;
        var e = t.autoWidth ? a.length : t.perPage
          , n = t.direction === TTB ? "Height" : "Width"
          , i = t["fixed" + n];
        return i && (e = Math.ceil(a.track["client" + n] / i)),
        e * (t.drag ? t.flickMaxPages + 1 : 1)
    }
    function u(t) {
        var e = t.cloneNode(!0);
        return addClass(e, o.classes.clone),
        removeAttribute(e, "id"),
        e
    }
    return n
}
  , SLIDE_MAX_WIDTH = 5e3
  , directions_horizontal = function(r, t) {
    var s, a = t.Elements, u = r.root, c = r.options;
    return {
        margin: "margin" + (c.direction === RTL ? "Left" : "Right"),
        height: 0,
        listHeight: 0,
        init: function() {
            c = r.options,
            s = a.track,
            this.gap = toPixel(u, c.gap);
            var t = c.padding
              , e = t.left
              , n = void 0 === e ? t : e
              , i = t.right
              , o = void 0 === i ? t : i;
            this.padding = {
                left: toPixel(u, n),
                right: toPixel(u, o)
            },
            applyStyle(s, {
                paddingLeft: unit(n),
                paddingRight: unit(o)
            })
        },
        totalWidth: function(e) {
            var n = this;
            return a.getSlides(!0).filter(function(t) {
                return t.index <= e
            }).reduce(function(t, e) {
                return t + n.slideWidth(e.index) + n.gap
            }, 0)
        },
        slideWidth: function(t) {
            if (c.autoWidth)
                return .27 * window.innerWidth;
            var e = c.fixedWidth || (this.width + this.gap) / c.perPage - this.gap;
            return toPixel(u, e)
        },
        slideHeight: function() {
            var t = c.height || c.fixedHeight || this.width * c.heightRatio;
            return toPixel(u, t)
        },
        get width() {
            return s.clientWidth - this.padding.left - this.padding.right
        },
        get listWidth() {
            var t = a.total;
            return c.autoWidth ? t * SLIDE_MAX_WIDTH : this.totalWidth(t)
        }
    }
}
  , directions_vertical = function(r, t) {
    var s, a, u = t.Elements, c = r.root;
    return {
        margin: "marginBottom",
        init: function() {
            a = r.options,
            s = u.track,
            this.gap = toPixel(c, a.gap);
            var t = a.padding
              , e = t.top
              , n = void 0 === e ? t : e
              , i = t.bottom
              , o = void 0 === i ? t : i;
            this.padding = {
                top: toPixel(c, n),
                bottom: toPixel(c, o)
            },
            applyStyle(s, {
                paddingTop: unit(n),
                paddingBottom: unit(o)
            })
        },
        slideWidth: function() {
            return toPixel(c, a.fixedWidth || this.width)
        },
        slideHeight: function() {
            var t = a.fixedHeight || (this.height + this.gap) / a.perPage - this.gap;
            return toPixel(c, t)
        },
        get width() {
            return s.clientWidth
        },
        get height() {
            var t = a.height || this.width * a.heightRatio;
            return exist(t, '"height" or "heightRatio" is missing.'),
            toPixel(c, t) - this.padding.top - this.padding.bottom
        },
        get listWidth() {
            return this.width
        },
        get listHeight() {
            return (this.slideHeight() + this.gap) * u.total
        }
    }
};
function throttle(t, e) {
    var n;
    return function() {
        n || (n = setTimeout(function() {
            t(),
            n = null
        }, e))
    }
}
function createInterval(n, i, o) {
    var r, s, a, u = window.requestAnimationFrame, c = !0, e = function t(e) {
        c || (r || (r = e,
        a && a < 1 && (r -= a * i)),
        a = (s = e - r) / i,
        i <= s && (r = 0,
        a = 1,
        n()),
        o && o(a),
        u(t))
    };
    return {
        pause: function() {
            c = !0,
            r = 0
        },
        play: function(t) {
            r = 0,
            c && (c = !1,
            t && (a = 0),
            u(e))
        }
    }
}
var layout = function(n, t) {
    var i = t.Elements
      , o = object_assign({
        mount: function() {
            n.on("resize load", throttle(function() {
                n.emit("resize")
            }, n.options.throttle), window).on("resize", r).on("updated refresh", e),
            e()
        },
        destroy: function() {
            removeAttribute([i.list, i.track], "style")
        }
    }, n.options.direction === TTB ? directions_vertical(n, t) : directions_horizontal(n, t));
    function e() {
        o.init(),
        applyStyle(n.root, {
            maxWidth: unit(n.options.width)
        }),
        i.each(function(t) {
            t.slide.style[o.margin] = unit(o.gap)
        }),
        r()
    }
    function r() {
        applyStyle(i.list, {
            width: unit(o.listWidth),
            height: unit(o.listHeight)
        }),
        applyStyle(i.track, {
            height: unit(o.height)
        });
        var e = unit(o.slideHeight())
          , t = o.width;
        i.each(function(t) {
            applyStyle(t.container, {
                height: e
            }),
            applyStyle(t.slide, {
                width: n.options.autoWidth ? null : unit(o.slideWidth(t.index)),
                height: t.container ? null : e
            })
        }),
        t !== o.width && r()
    }
    return o
}
  , abs = Math.abs
  , FRICTION_REDUCER = 7
  , drag = function(u, c) {
    var n, i, o, r, l = c.Track, d = c.Controller, s = u.options.direction === TTB, f = s ? "y" : "x", e = {
        disabled: !u.options.drag,
        mount: function() {
            var t = this
              , e = c.Elements.list;
            u.on("touchstart mousedown", a, e).on("touchmove mousemove", p, e, {
                passive: !1
            }).on("touchend touchcancel mouseleave mouseup dragend", h, e).on("mounted refresh", function() {
                each(e.querySelectorAll("img, a"), function(t) {
                    u.off("dragstart", t).on("dragstart", function(t) {
                        t.preventDefault()
                    }, t, {
                        passive: !1
                    })
                })
            }).on("mounted updated", function() {
                t.disabled = !u.options.drag
            })
        }
    };
    function a(t) {
        e.disabled || r || !u.State.is(IDLE) || (n = l.toCoord(l.position),
        i = g(t, {}),
        o = i)
    }
    function p(t) {
        if (i)
            if (o = g(t, i),
            r) {
                t.cancelable && t.preventDefault();
                var e = n[f] + o.offset[f];
                l.translate(function(t) {
                    if (!u.is(LOOP)) {
                        var e = l.sign
                          , n = e * l.trim(l.toPosition(0))
                          , i = e * l.trim(l.toPosition(d.edgeIndex));
                        (t *= e) < n ? t = n - FRICTION_REDUCER * Math.log(n - t) : i < t && (t = i + FRICTION_REDUCER * Math.log(t - i)),
                        t *= e
                    }
                    return t
                }(e))
            } else
                (function(t) {
                    var e = t.offset;
                    if (u.State.is(IDLE)) {
                        var n = 180 * Math.atan(abs(e.y) / abs(e.x)) / Math.PI;
                        return s && (n = 90 - n),
                        n < u.options.dragAngleThreshold
                    }
                    return !1
                }
                )(o) && (u.emit("drag", i),
                u.root.classList.add("dragging"),
                r = !0)
    }
    function h() {
        i = null,
        r && (u.emit("dragged", o),
        u.root.classList.remove("dragging"),
        function(t) {
            var e = t.velocity[f]
              , n = abs(e);
            if (0 < n) {
                var i = c.Layout
                  , o = u.options
                  , r = e < 0 ? -1 : 1
                  , s = l.position;
                n > o.flickVelocityThreshold && abs(t.offset[f]) < o.swipeDistanceThreshold && (s += r * Math.min(n * o.flickPower, i.width * (o.flickMaxPages || 1)));
                var a = l.toIndex(s);
                a === u.index && (a += r * l.sign),
                u.is(LOOP) || (a = between(a, 0, d.edgeIndex)),
                d.go(a, o.isNavigation)
            }
        }(o),
        r = !1)
    }
    function g(t, e) {
        var n = t.timeStamp
          , i = t.touches
          , o = i ? i[0] : t
          , r = o.clientX
          , s = o.clientY
          , a = e.to || {}
          , u = a.x
          , c = void 0 === u ? r : u
          , l = a.y
          , d = {
            x: r - c,
            y: s - (void 0 === l ? s : l)
        }
          , f = n - (e.time || 0);
        return {
            to: {
                x: r,
                y: s
            },
            offset: d,
            time: n,
            velocity: {
                x: d.x / f,
                y: d.y / f
            }
        }
    }
    return e
}
  , click = function(t, e) {
    var n = !1;
    function i(t) {
        n && (t.preventDefault(),
        t.stopPropagation(),
        t.stopImmediatePropagation())
    }
    return {
        required: t.options.drag && !t.is(FADE),
        mount: function() {
            t.on("click", i, e.Elements.track, {
                capture: !0
            }).on("drag", function() {
                n = !0
            }).on("move", function() {
                n = !1
            })
        }
    }
}
  , PAUSE_FLAGS = {
    HOVER: 1,
    FOCUS: 2,
    MANUAL: 3
}
  , components_autoplay = function(o, t, n) {
    var i, r = [], s = t.Elements, a = {
        required: o.options.autoplay,
        mount: function() {
            var t = o.options;
            s.slides.length > t.perPage && (i = createInterval(function() {
                o.go(">")
            }, t.interval, function(t) {
                o.emit(n + ":playing", t),
                s.bar && applyStyle(s.bar, {
                    width: 100 * t + "%"
                })
            }),
            function() {
                var t = o.options
                  , e = o.sibling
                  , n = [o.root, e ? e.root : null];
                t.pauseOnHover && (u(n, "mouseleave", PAUSE_FLAGS.HOVER, !0),
                u(n, "mouseenter", PAUSE_FLAGS.HOVER, !1));
                t.pauseOnFocus && (u(n, "focusout", PAUSE_FLAGS.FOCUS, !0),
                u(n, "focusin", PAUSE_FLAGS.FOCUS, !1));
                o.on("click", function() {
                    a.play(PAUSE_FLAGS.FOCUS),
                    a.play(PAUSE_FLAGS.MANUAL)
                }, s.play).on("move refresh", function() {
                    a.play()
                }).on("destroy", function() {
                    a.pause()
                }),
                u([s.pause], "click", PAUSE_FLAGS.MANUAL, !1)
            }(),
            this.play())
        },
        play: function(e) {
            void 0 === e && (e = 0),
            (r = r.filter(function(t) {
                return t !== e
            })).length || (o.emit(n + ":play"),
            i.play(o.options.resetProgress))
        },
        pause: function(t) {
            void 0 === t && (t = 0),
            i.pause(),
            -1 === r.indexOf(t) && r.push(t),
            1 === r.length && o.emit(n + ":pause")
        }
    };
    function u(t, e, n, i) {
        t.forEach(function(t) {
            o.on(e, function() {
                a[i ? "play" : "pause"](n)
            }, t)
        })
    }
    return a
}
  , components_cover = function(t, e) {
    function n(n) {
        e.Elements.each(function(t) {
            var e = child(t.slide, "IMG") || child(t.container, "IMG");
            e && e.src && i(e, n)
        })
    }
    function i(t, e) {
        applyStyle(t.parentElement, {
            background: e ? "" : 'center/cover no-repeat url("' + t.src + '")'
        }),
        applyStyle(t, {
            display: e ? "" : "none"
        })
    }
    return {
        required: t.options.cover,
        mount: function() {
            t.on("lazyload:loaded", function(t) {
                i(t, !1)
            }),
            t.on("mounted updated refresh", function() {
                return n(!1)
            })
        },
        destroy: function() {
            n(!0)
        }
    }
}
  , XML_NAME_SPACE = "http://www.w3.org/2000/svg"
  , PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
  , PATHS1 = "M33.9,110.3V59.7c0-5.2,4.2-9.4,9.4-9.4h102.8V29.6c0-3.5,1.9-6.7,5-8.3c3.1-1.6,6.8-1.5,9.7,0.5l83.9,55.9c2.6,1.8,4.2,4.7,4.2,7.8l0,0c0,3.2-1.6,6.1-4.2,7.8l-83.9,55.9c-2.9,1.9-6.6,2.1-9.7,0.5c-3.1-1.6-5-4.8-5-8.3v-25.9c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2v25.9c0,0.5,0.3,0.8,0.5,0.9c0.3,0.1,0.6,0.2,1.1-0.1L240,86.4c0.4-0.3,0.5-0.6,0.5-0.9s-0.1-0.6-0.5-0.9l-83.9-55.9c-0.4-0.3-0.8-0.2-1.1-0.1c-0.3,0.1-0.5,0.4-0.5,0.9v29H43.3c-0.6,0-1,0.5-1,1v50.7c0,0.6,0.5,1,1,1h53.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2H43.3C38.1,119.8,33.9,115.5,33.9,110.3z"
  , PATHS2 = "M123.3,120c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5c2.5,0,4.5,2,4.5,4.5C127.8,118,125.8,120,123.3,120z"
  , components_arrows = function(o, r, s) {
    var a, u, e, c = o.classes, l = o.root, d = r.Elements;
    function t() {
        var t = r.Controller
          , e = t.prevIndex
          , n = t.nextIndex
          , i = o.length > o.options.perPage || o.is(LOOP);
        a.disabled = e < 0 || !i,
        u.disabled = n < 0 || !i,
        o.emit(s + ":updated", a, u, e, n)
    }
    function n(t) {
        return "special" != o.options.arrowPath ? domify('<button class="' + c.arrow + " " + (t ? c.prev : c.next) + '"><svg xmlns="' + XML_NAME_SPACE + '"\tviewBox="0 0 ' + o.options.SizeW + " " + o.options.SizeH + '"\twidth="' + o.options.SizeW + '"\theight="' + o.options.SizeH + '"><path fill="currentColor" d="' + (o.options.arrowPath || PATH) + '" />') : domify('<button class="special ' + c.arrow + " " + (t ? c.prev : c.next) + '"><svg xmlns="' + XML_NAME_SPACE + '"\tviewBox="0 0 ' + o.options.SizeW + " " + o.options.SizeH + '"\twidth="' + o.options.SizeW + '"\theight="' + o.options.SizeH + '"><path fill="currentColor" d="' + PATHS1 + '" /><path fill="currentColor" d="' + PATHS2 + '" />')
    }
    return {
        required: o.options.arrows,
        mount: function() {
            a = d.arrows.prev,
            u = d.arrows.next,
            a && u || !o.options.arrows || (a = n(!0),
            u = n(!1),
            e = !0,
            function() {
                var t = o.root.querySelector(".slidebox-modify");
                if (o.options.intoNav) {
                    if (!t) {
                        var e = create("div", {
                            class: c.arrows
                        });
                        append(e, a),
                        append(e, u);
                        var t = create("div", {
                            class: c.modify
                        });
                        append(o.root, t),
                        append(t, e)
                    }
                } else {
                    var e = create("div", {
                        class: c.arrows
                    });
                    append(e, a),
                    append(e, u);
                    var n = d.slider
                      , i = "slider" === o.options.arrows && n ? n : l;
                    before(e, i.firstElementChild)
                }
            }()),
            a && u && o.on("click", function() {
                o.go("<")
            }, a).on("click", function() {
                o.go(">")
            }, u).on("mounted move updated refresh", t),
            this.arrows = {
                prev: a,
                next: u
            }
        },
        mounted: function() {
            o.emit(s + ":mounted", a, u)
        },
        destroy: function() {
            if (removeAttribute([a, u], "disabled"),
            e) {
                dom_remove(a.parentElement);
                var t = o.root.querySelector(".slidebox-modify");
                t && t.remove()
            }
        }
    }
}
  , ATTRIBUTES_UPDATE_EVENT = "move.page"
  , UPDATE_EVENT = "updated.page refresh.page"
  , components_pagination = function(c, e, r) {
    var l = {}
      , d = e.Elements
      , f = {
        mount: function() {
            var i, o, r, t, e = c.options.pagination;
            if (e) {
                i = c.options,
                o = c.classes,
                r = create("div", {
                    class: o.pagination
                }),
                t = d.getSlides(!1).filter(function(t) {
                    return !1 !== i.focus || t.index % i.perPage == 0
                }).map(function(t, e) {
                    if (i.dotNum) {
                        var n = create("div", {
                            class: o.num
                        });
                        n.innerHTML = e <= 9 ? "0" + (e + 1) : e + 1
                    } else
                        var n = create("div", {
                            class: o.page
                        });
                    return append(r, n),
                    c.on("click", function() {
                        c.go(">" + e)
                    }, n),
                    {
                        button: n,
                        page: e,
                        Slides: d.getSlidesByPage(e)
                    }
                }),
                l = {
                    list: r,
                    items: t
                };
                var n = d.slider
                  , s = "slider" === e && n ? n : c.root
                  , a = c.root.querySelector(".slidebox-arrows")
                  , u = c.root.querySelector(".slidebox-pagination");
                c.options.intoNav ? a && !u && append(a, l.list) : append(s, l.list),
                c.on(ATTRIBUTES_UPDATE_EVENT, p)
            }
            c.off(UPDATE_EVENT).on(UPDATE_EVENT, function() {
                f.destroy(),
                c.options.pagination && (f.mount(),
                f.mounted())
            })
        },
        mounted: function() {
            if (c.options.pagination) {
                var t = c.index;
                c.emit(r + ":mounted", l, this.getItem(t)),
                p(t, -1)
            }
        },
        destroy: function() {
            dom_remove(l.list),
            l.items && l.items.forEach(function(t) {
                c.off("click", t.button)
            }),
            c.off(ATTRIBUTES_UPDATE_EVENT),
            l = {}
        },
        getItem: function(t) {
            return l.items[e.Controller.toPage(t)]
        },
        get data() {
            return l
        }
    };
    function p(t, e) {
        var n = f.getItem(e)
          , i = f.getItem(t)
          , o = STATUS_CLASSES.active;
        n && removeClass(n.button, o),
        i && addClass(i.button, o),
        c.emit(r + ":updated", l, n, i)
    }
    return f
}
  , SRC_DATA_NAME = "data-lazy"
  , lazyload = function(o, t, r) {
    var e, n, i = o.options, s = "sequential" === i.lazyLoad;
    function a() {
        n = [],
        e = 0
    }
    function u(e) {
        e = isNaN(e) ? o.index : e,
        (n = n.filter(function(t) {
            return !t.Slide.isWithin(e, i.perPage * (i.preloadPages + 1)) || (c(t.img, t.Slide),
            !1)
        }))[0] || o.off("moved." + r)
    }
    function c(t, e) {
        addClass(e.slide, STATUS_CLASSES.loading);
        var n = create("span", {
            class: o.classes.spinner
        });
        append(t.parentElement, n),
        t.onload = function() {
            d(t, n, e, !1)
        }
        ,
        t.onerror = function() {
            d(t, n, e, !0)
        }
        ,
        setAttribute(t, "src", getAttribute(t, SRC_DATA_NAME))
    }
    function l() {
        if (e < n.length) {
            var t = n[e];
            c(t.img, t.Slide)
        }
        e++
    }
    function d(t, e, n, i) {
        removeClass(n.slide, STATUS_CLASSES.loading),
        i || (dom_remove(e),
        applyStyle(t, {
            display: ""
        }),
        o.emit(r + ":loaded", t).emit("resize")),
        s && l()
    }
    return {
        required: i.lazyLoad,
        mount: function() {
            o.on("mounted refresh", function() {
                a(),
                t.Elements.each(function(e) {
                    each(e.slide.querySelectorAll("[" + SRC_DATA_NAME + "]"), function(t) {
                        t.src || (n.push({
                            img: t,
                            Slide: e
                        }),
                        applyStyle(t, {
                            display: "none"
                        }))
                    })
                }),
                s && l()
            }),
            s || o.on("mounted refresh moved." + r, u)
        },
        destroy: a
    }
}
  , KEY_MAP = {
    ltr: {
        ArrowLeft: "<",
        ArrowRight: ">",
        Left: "<",
        Right: ">"
    },
    rtl: {
        ArrowLeft: ">",
        ArrowRight: "<",
        Left: ">",
        Right: "<"
    },
    ttb: {
        ArrowUp: "<",
        ArrowDown: ">",
        Up: "<",
        Down: ">"
    }
}
  , keyboard = function(n) {
    var t = n.root;
    return {
        mount: function() {
            var e = KEY_MAP[n.options.direction];
            n.on("mounted updated", function() {
                n.off("keydown", t),
                n.options.keyboard && n.on("keydown", function(t) {
                    e[t.key] && n.go(e[t.key])
                }, t)
            })
        }
    }
}
  , ARIA_CURRENRT = "aria-current"
  , ARIA_CONTROLS = "aria-controls"
  , ARIA_LABEL = "aria-label"
  , ARIA_LABELLEDBY = "aria-labelledby"
  , ARIA_HIDDEN = "aria-hidden"
  , TAB_INDEX = "tabindex"
  , a11y = function(a, n) {
    var u = a.i18n
      , i = n.Elements
      , o = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, "role"];
    function e(t, e) {
        setAttribute(t, ARIA_HIDDEN, !e),
        setAttribute(t, TAB_INDEX, e ? 0 : -1)
    }
    function t(t, e) {
        var n = i.track.id;
        setAttribute(t, ARIA_CONTROLS, n),
        setAttribute(e, ARIA_CONTROLS, n)
    }
    function r(t, e, n, i) {
        var o = a.index
          , r = -1 < n && o < n ? u.last : u.prev
          , s = -1 < i && i < o ? u.first : u.next;
        setAttribute(t, ARIA_LABEL, r),
        setAttribute(e, ARIA_LABEL, s)
    }
    function s(t, e) {
        e && setAttribute(e.button, ARIA_CURRENRT, !0),
        t.items.forEach(function(t) {
            var e = a.options
              , n = sprintf(!1 === e.focus && 1 < e.perPage ? u.pageX : u.slideX, t.page + 1)
              , i = t.button
              , o = t.Slides.map(function(t) {
                return t.slide.id
            });
            setAttribute(i, ARIA_CONTROLS, o.join(" ")),
            setAttribute(i, ARIA_LABEL, n)
        })
    }
    function c(t, e, n) {
        e && removeAttribute(e.button, ARIA_CURRENRT),
        n && setAttribute(n.button, ARIA_CURRENRT, !0)
    }
    function l(s) {
        i.each(function(t) {
            var e = t.slide
              , n = t.realIndex;
            f(e) || setAttribute(e, "role", "button");
            var i = -1 < n ? n : t.index
              , o = sprintf(u.slideX, i + 1)
              , r = s.Components.Elements.getSlide(i);
            setAttribute(e, ARIA_LABEL, o),
            r && setAttribute(e, ARIA_CONTROLS, r.slide.id)
        })
    }
    function d(t, e) {
        var n = t.slide;
        e ? setAttribute(n, ARIA_CURRENRT, !0) : removeAttribute(n, ARIA_CURRENRT)
    }
    function f(t) {
        return "BUTTON" === t.tagName
    }
    return {
        mount: function() {
            a.on("visible", function(t) {
                e(t.slide, !0)
            }).on("hidden", function(t) {
                e(t.slide, !1)
            }).on("arrows:mounted", t).on("arrows:updated", r).on("pagination:mounted", s).on("pagination:updated", c).on("refresh", function() {
                removeAttribute(n.Clones.clones, o)
            }),
            a.options.isNavigation && a.on("navigation:mounted", l).on("active", function(t) {
                d(t, !0)
            }).on("inactive", function(t) {
                d(t, !1)
            }),
            ["play", "pause"].forEach(function(t) {
                var e = i[t];
                e && (f(e) || setAttribute(e, "role", "button"),
                setAttribute(e, ARIA_CONTROLS, i.track.id),
                setAttribute(e, ARIA_LABEL, u[t]))
            })
        },
        destroy: function() {
            var t = n.Arrows
              , e = t ? t.arrows : {};
            removeAttribute(i.slides.concat([e.prev, e.next, i.play, i.pause]), o)
        }
    }
}
  , SYNC_EVENT = "move.sync"
  , TRIGGER_KEYS = [" ", "Enter", "Spacebar"]
  , sync = function(i) {
    var o = i.sibling
      , t = o && o.options.isNavigation;
    function r() {
        i.on(SYNC_EVENT, function(t, e, n) {
            o.off(SYNC_EVENT).go(o.is(LOOP) ? n : t, !1),
            s()
        })
    }
    function s() {
        o.on(SYNC_EVENT, function(t, e, n) {
            i.off(SYNC_EVENT).go(i.is(LOOP) ? n : t, !1),
            r()
        })
    }
    function a(t) {
        i.State.is(IDLE) && o.go(t)
    }
    return {
        required: !!o,
        mount: function() {
            r(),
            s(),
            t && o.Components.Elements.each(function(t) {
                var e = t.slide
                  , n = t.index;
                i.on("mouseup touchend", function(t) {
                    t.button && 0 !== t.button || a(n)
                }, e),
                i.on("keyup", function(t) {
                    -1 < TRIGGER_KEYS.indexOf(t.key) && (t.preventDefault(),
                    a(n))
                }, e, {
                    passive: !1
                })
            })
        },
        mounted: function() {
            t && o.emit("navigation:mounted", i)
        }
    }
}
  , THROTTLE = 50
  , components_breakpoints = function(r) {
    var s, a, u = r.options.breakpoints, e = throttle(t, THROTTLE), c = [];
    function t() {
        var t, e = (t = c.filter(function(t) {
            return t.mql.matches
        })[0]) ? t.point : -1;
        if (e !== a) {
            a = e;
            var n = r.State
              , i = u[e] || s
              , o = i.destroy;
            o ? (r.options = s,
            r.destroy("completely" === o)) : (n.is(DESTROYED) && (n.set(CREATED),
            r.mount()),
            r.options = i)
        }
    }
    return {
        required: u && matchMedia,
        mount: function() {
            c = Object.keys(u).sort(function(t, e) {
                return parseInt(t) - parseInt(e)
            }).map(function(t) {
                return {
                    point: t,
                    mql: matchMedia("(max-width:" + t + "px)")
                }
            }),
            this.destroy(!0),
            addEventListener("resize", e),
            s = r.options,
            t()
        },
        destroy: function(t) {
            t && removeEventListener("resize", e)
        }
    }
}
  , COMPLETE = {
    Options: components_options,
    Breakpoints: components_breakpoints,
    Controller: controller,
    Elements: components_elements,
    Track: components_track,
    Clones: components_clones,
    Layout: layout,
    Drag: drag,
    Click: click,
    Autoplay: components_autoplay,
    Cover: components_cover,
    Arrows: components_arrows,
    Pagination: components_pagination,
    LazyLoad: lazyload,
    Keyboard: keyboard,
    Sync: sync,
    A11y: a11y
}
  , LIGHT = {
    Options: components_options,
    Elements: components_elements,
    Controller: controller,
    Track: components_track,
    Clones: components_clones,
    Layout: layout,
    Drag: drag,
    Arrows: components_arrows,
    Pagination: components_pagination,
    A11y: a11y
};
function inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype),
    (t.prototype.constructor = t).__proto__ = e
}
var complete_Splide = function(n) {
    function t(t, e) {
        return n.call(this, t, e, COMPLETE) || this
    }
    return inheritsLoose(t, n),
    t
}(splide_Splide);
window.Splide = complete_Splide;
var Sketch = function() {
    function n(e) {
        var t = this
          , i = $(".httptemplate").text();
        classCallCheck(this, n);
        var s = [i ];
        this.BGslide = DOM.querySelector(".background"),
        this.BG = this.BGslide.querySelectorAll(".bg"),
        this.SlideEffect = this.BGslide.querySelector(".slide-background"),
        this.timeSlide = this.SlideEffect.getAttribute("data-time"),
        this.Disp = s[Math.floor(Math.random() * s.length)],
        this.images = this.BGslide.querySelectorAll(".bg > img"),
        this.Stop = this.BGslide.querySelector(".stop"),
        this.Play = this.BGslide.querySelector(".play"),
        this.NextBg = this.BGslide.querySelector(".next-background"),
        this.PrevBg = this.BGslide.querySelector(".prev-background"),
        this.scene = new THREE.Scene,
        this.vertex = "varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}",
        this.renderer = new THREE.WebGLRenderer({
            alpha: !0
        }),
        this.loader = new THREE.TextureLoader,
        this.width = window.innerWidth,
        1100 < window.innerWidth ? HomePage ? this.height = window.innerHeight : this.height = .7 * window.innerHeight : this.height = 1125 * window.innerWidth / 2e3,
        this.SlideEffect.appendChild(this.renderer.domElement),
        this.renderer.setPixelRatio(window.devicePixelRatio),
        this.renderer.setSize(this.width, this.height),
        this.renderer.setClearColor(16777215, 0),
        this.camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight,.001,1e3),
        this.camera.position.set(0, 0, 2),
        this.duration = e.duration || 1,
        this.debug = e.debug || !1,
        this.easing = e.easing || "easeInOut",
        this.fragment = e.fragment,
        this.uniforms = e.uniforms,
        this.time = 0,
        this.current = 0,
        this.textures = [],
        this.paused = !0,
        this.Initiate(function() {
            t.addObjects(),
            t.settings(),
            t.Setsize(),
            t.bindEvents()
        }),
        this.loadDone = function() {
            1 <= t.images.length && (clearInterval(t.slide),
            t.paused = !0)
        }
        ,
        this.Stop.addEventListener("click", function() {
            t.stopSlide()
        }),
        this.Play.addEventListener("click", function() {
            t.playSlide()
        }),
        this.NextBg.addEventListener("click", function() {
            t.clickNext()
        }),
        this.PrevBg.addEventListener("click", function() {
            t.clickPrev()
        })
    }
    return createClass(n, [{
        key: "Initiate",
        value: function(e) {
            var t = []
              , n = this;
            this.images.forEach(function(i, s) {
                var e = new Promise(function(e) {
                    var t = i.getAttribute("data-src");
                    n.textures[s] = (new THREE.TextureLoader).load(t, e)
                }
                );
                t.push(e)
            }),
            Promise.all(t).then(function() {
                e(),
                n.Render(),
                n.loadDone()
            })
        }
    }, {
        key: "addObjects",
        value: function() {
            this.material = new THREE.ShaderMaterial({
                extensions: {
                    derivatives: "#extension GL_OES_standard_derivatives : enable"
                },
                side: THREE.DoubleSide,
                uniforms: {
                    time: {
                        type: "f",
                        value: 0
                    },
                    progress: {
                        type: "f"
                    },
                    border: {
                        type: "f",
                        value: 0
                    },
                    intensity: {
                        type: "f",
                        value: 0
                    },
                    scaleX: {
                        type: "f",
                        value: 30
                    },
                    scaleY: {
                        type: "f",
                        value: 30
                    },
                    transition: {
                        type: "f",
                        value: 30
                    },
                    swipe: {
                        type: "f",
                        value: 0
                    },
                    width: {
                        type: "f",
                        value: 0
                    },
                    height: {
                        type: "f",
                        value: 0
                    },
                    radius: {
                        type: "f",
                        value: 0
                    },
                    texture1: {
                        type: "f",
                        value: this.textures[0]
                    },
                    texture2: {
                        type: "f",
                        value: this.textures[1]
                    },
                    displacement: {
                        type: "f",
                        value: (new THREE.TextureLoader).load(this.Disp)
                    },
                    resolution: {
                        type: "v4",
                        value: new THREE.Vector4
                    }
                },
                vertexShader: this.vertex,
                fragmentShader: this.fragment
            }),
            this.geometry = new THREE.PlaneGeometry(1,1,2,2),
            this.mesh = new THREE.Mesh(this.geometry,this.material),
            this.scene.add(this.mesh)
        }
    }, {
        key: "Setsize",
        value: function() {
            var e, t;
            this.width = window.innerWidth,
            1100 < window.innerWidth ? HomePage || ProjectDetailsPage ? this.height = window.innerHeight : this.height = .8 * window.innerHeight : this.height = 1125 * window.innerWidth / 2e3,
            this.renderer.setSize(this.width, this.height),
            this.camera.aspect = this.width / this.height,
            this.imageAspect = this.textures[0].image.height / this.textures[0].image.width,
            t = this.height / this.width > this.imageAspect ? (e = this.width / this.height * this.imageAspect,
            1) : (e = 1,
            this.height / this.width / this.imageAspect),
            this.material.uniforms.resolution.value.x = this.width,
            this.material.uniforms.resolution.value.y = this.height,
            this.material.uniforms.resolution.value.z = e,
            this.material.uniforms.resolution.value.w = t;
            var i = this.camera.position.z;
            this.camera.fov = 180 / Math.PI * 2 * Math.atan(1 / (2 * i)),
            this.mesh.scale.x = this.camera.aspect,
            this.mesh.scale.y = 1,
            this.camera.updateProjectionMatrix()
        }
    }, {
        key: "bindEvents",
        value: function() {
            window.addEventListener("resize", this.Setsize.bind(this), {
                passive: !0
            }),
            this.BGslide.addEventListener("wheel", this.onScroll.bind(this), {
                passive: !0
            }),
            this.BGslide.addEventListener("swiped-left", this.clickNext.bind(this), {
                passive: !0
            }),
            this.BGslide.addEventListener("swiped-right", this.clickPrev.bind(this), {
                passive: !0
            })
        }
    }, {
        key: "onScroll",
        value: function(e) {
            var t = Math.sign(e.deltaY);
            if (clearInterval(this.slide),
            !this.paused)
                if (0 < t) {
                    if (!doWheel)
                        return;
                    doWheel = !1,
                    this.clickNext(),
                    setTimeout(turnWheelTouch, 500)
                } else {
                    if (!doWheel)
                        return;
                    doWheel = !1,
                    this.clickPrev(),
                    setTimeout(turnWheelTouch, 500)
                }
        }
    }, {
        key: "addClass",
        value: function(e) {
            for (var t = this, i = 0; i < t.BG.length; i++)
                t.BG[i].classList.remove("move");
            t.BG[e].classList.add("move")
        }
    }, {
        key: "setCurrent",
        value: function(e) {
            this.paused || this.toggleCurrent(e, !0)
        }
    }, {
        key: "unsetCurrent",
        value: function(e) {
            this.paused || this.toggleCurrent(e, !1)
        }
    }, {
        key: "toggleCurrent",
        value: function(e, t) {
            var i = this;
            if (0 == this.paused && (this.BG[e].classList[t ? "add" : "remove"]("slide-current"),
            this.Current = DOM.querySelector(".slide-current"),
            void 0 !== i.BG[e].classList.contains("slide-current"))) {
                var s = i.BG[e].getAttribute("data-pagi");
                Container.querySelectorAll(".pagi-bg").forEach(function(e) {
                    e.classList.remove("current")
                }),
                Container.querySelector('.pagi-bg[data-pagi="' + s + '"]').classList.add("current"),
                AllBackG.forEach(function(e) {
                    e.style.zIndex = "0"
                }),
                i.BG[e].style.zIndex = "2"
            }
        }
    }, {
        key: "StartTimer",
        value: function() {
            var e = this;
            clearInterval(e.slide),
            e.slide = setInterval(function() {
                1 == OnTime && e.clickNext()
            }, e.timeSlide)
        }
    }, {
        key: "clickNext",
        value: function() {
            clearInterval(this.slide),
            1 == OnTime ? this.next() : 0 == OnTime && (OnTime = 1,
            clearInterval(this.slide),
            this.paused = !1,
            this.RenderSlide(),
            this.next())
        }
    }, {
        key: "clickPrev",
        value: function() {
            clearInterval(this.slide),
            1 == OnTime ? this.prev() : 0 == OnTime && (OnTime = 1,
            clearInterval(this.slide),
            this.paused = !1,
            this.RenderSlide(),
            this.prev())
        }
    }, {
        key: "stopSlide",
        value: function() {
            var e = this;
            e.paused = !0,
            clearInterval(e.slide),
            e.RenderSlide()
        }
    }, {
        key: "playSlide",
        value: function() {
            var e = this;
            1 == OnTime && (clearInterval(e.slide),
            e.paused = !1,
            e.RenderSlide(),
            e.next())
        }
    }, {
        key: "Render",
        value: function() {
            this.paused = !1,
            OnTime = 0,
            this.RenderSlide(),
            this.setCurrent(this.current)
        }
    }, {
        key: "settings",
        value: function() {
            var t = this;
            this.settings = {
                progress: .5
            },
            Object.keys(this.uniforms).forEach(function(e) {
                t.settings[e] = t.uniforms[e].value
            })
        }
    }, {
        key: "next",
        value: function() {
            var e = this;
            if (!this.isRunning) {
                this.isRunning = !0;
                var t = this.textures.length
                  , i = this.textures[(this.current + 1) % t];
                this.material.uniforms.texture2.value = i,
                this.unsetCurrent(this.current),
                this.BG[this.current].classList.remove("slide-current"),
                this.material.uniforms.progress.value = 0,
                gsap.to(this.material.uniforms.progress, this.duration, {
                    value: 1,
                    ease: Power2[this.easing],
                    onComplete: function() {
                        e.current = (e.current + 1) % t,
                        e.material.uniforms.texture1.value = i,
                        e.material.uniforms.progress.value = 0,
                        e.isRunning = !1,
                        e.setCurrent(e.current)
                    }
                })
            }
        }
    }, {
        key: "prev",
        value: function() {
            var e = this;
            if (!this.isRunning) {
                this.isRunning = !0;
                var t = this.textures.length
                  , i = 0 == this.current ? t - 1 : this.current - 1
                  , s = this.textures[i];
                this.material.uniforms.texture1.value = s,
                this.unsetCurrent(this.current),
                this.BG[this.current].classList.remove("slide-current"),
                this.material.uniforms.progress.value = 1,
                gsap.to(this.material.uniforms.progress, this.duration, {
                    value: 0,
                    ease: Power2[this.easing],
                    onComplete: function() {
                        e.current = i,
                        e.material.uniforms.texture2.value = s,
                        e.material.uniforms.progress.value = 1,
                        e.isRunning = !1,
                        e.setCurrent(e.current)
                    }
                })
            }
        }
    }, {
        key: "RenderSlide",
        value: function() {
            var t = this;
            SlideBanner.classList.add("show"),
            this.paused || (this.time += .05,
            Object.keys(this.uniforms).forEach(function(e) {
            }),
            this.renderer.render(this.scene, this.camera),
            requestAnimationFrame(this.RenderSlide.bind(this)))
        }
    }]),
    n
}()
  , FragMent = "\nuniform float time;\nuniform float progress;\nuniform float intensity;\nuniform float width;\nuniform float scaleX;\nuniform float scaleY;\nuniform float transition;\nuniform float radius;\nuniform float swipe;\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform sampler2D displacement;\nuniform vec4 resolution;\nvarying vec2 vUv;\nmat2 getRotM(float angle) {\n    float s = sin(angle);\n    float c = cos(angle);\n    return mat2(c, -s, s, c);\n}\nconst float PI = 3.1415;\nconst float angle1 = PI *0.25;\nconst float angle2 = -PI *0.75;\n\n\nvoid main()\t{\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n\n    vec4 disp = texture2D(displacement, newUV);\n    vec2 dispVec = vec2(disp.r, disp.g);\n\n    vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;\n    vec4 t1 = texture2D(texture1, distortedPosition1);\n\n    vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);\n    vec4 t2 = texture2D(texture2, distortedPosition2);\n\n    gl_FragColor = mix(t1, t2, progress);\n\n}\n\n"
  , Banner = function() {
    new Sketch({
        debug: !0,
        uniforms: {
            intensity: {
                duration: 3,
                debug: !0,
                easing: "easeOut",
                value: 0,
                type: "f"
            }
        },
        fragment: FragMent
    })
};
var UA = navigator.userAgent
  , HTML = document.documentElement
  , isFirefox = "undefined" != typeof InstallTrigger
  , isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString()
  , isIE9 = /MSIE 9/i.test(UA)
  , isIE10 = /MSIE 10/i.test(UA)
  , isIE11 = /rv:11.0/i.test(UA)
  , isIE = !!document.documentMode
  , isEdge = !isIE && !!window.StyleMedia && !isIE11
  , isChrome = -1 < UA.indexOf("Chrome") || !!window.chrome && !!window.chrome.webstore
  , Mobile = window.matchMedia("(max-width: 1024px)")
  , Touch = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart"in document.documentElement
  , iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
iOS && HTML.classList.add("is-iOS"),
1 == Touch && HTML.classList.add("is-touch"),
isFirefox ? HTML.classList.add("is-Firefox") : isEdge ? HTML.classList.add("is-Edge") : isSafari ? HTML.classList.add("is-Safari") : isChrome && HTML.classList.add("is-Chrome");
var NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge
  , debounce = function(i, n, a) {
    var s;
    return function() {
        var e = this
          , t = arguments
          , o = a && !s;
        clearTimeout(s),
        s = setTimeout(function() {
            s = null,
            a || i.apply(e, t)
        }, n),
        o && i.apply(e, t)
    }
};
function RanDom(e, t) {
    return Math.max(Math.random() * (.1 + t - e) + e)
}
var httptemplate = $(".httptemplate").text();
function changeUrl(e, t, o, i, n, a, s, r) {
    void 0 !== window.history.pushState && (document.URL != e && "" != e && window.history.pushState({
        path: e,
        dataName: n,
        title: t,
        keyword: i,
        description: o,
        titleog: a,
        descriptionog: s
    }, "", e));
    if ("" != t && (DOM.title = t,
    DOM.querySelector('meta[name="description"]').setAttribute("content", o),
    DOM.querySelector('meta[name="keywords"]').setAttribute("content", i),
    DOM.querySelector('meta[property="og:title"]').setAttribute("content", a),
    DOM.querySelector('meta[property="og:description"]').setAttribute("content", s),
    DOM.querySelector('meta[property="og:url"]').setAttribute("content", e),
    DOM.querySelector('link[rel="canonical"]').setAttribute("href", e),
    null != DOM.querySelector('link[rel="amphtml"]')))
        if (-1 != e.indexOf(".html", 0)) {
            var l = e.replace(".html", "/amp/");
            DOM.querySelector('link[rel="amphtml"]').setAttribute("href", l)
        } else
            DOM.querySelector('link[rel="amphtml"]').setAttribute("href", e + "amp/")
}
function changeAlternate(e, t) {
    null !== t && (t.classList.contains("alternate-hl-en") ? (DOM.querySelector('link[hreflang="vi-vn"]').setAttribute("href", e),
    DOM.querySelector('link[hreflang="en-vn"]').setAttribute("href", t.innerHTML),
    DOM.getElementById("changlanguage_redirect").value = e) : (DOM.querySelector('link[hreflang="vi-vn"]').setAttribute("href", t.innerHTML),
    DOM.querySelector('link[hreflang="en-vn"]').setAttribute("href", e)),
    DOM.getElementById("changlanguage_redirect").value = t.innerHTML)
}
function ResizeWindows() {
    if (CheckWidthBut(),
    RecruitmentPage) {
        var e = RecruitmentCareer.querySelector(".mount-rect")
          , t = RecruitmentCareer.querySelector(".location-rect")
          , o = RecruitmentCareer.querySelector(".date-rect");
        window.innerWidth < 1100 ? (e.style.width = "120px",
        t.style.width = "120px",
        o.style.width = "120px") : (e.style.width = "140px",
        t.style.width = "240px",
        o.style.width = "200px")
    }
    if (ProjectPage) {
        var i = ProjectList.querySelector(".wrap-project-list");
        setTimeout(function() {
            var e = i.offsetHeight;
            ProjectList.style.height = e + "px"
        }, 200)
    }
    if (NewsPage) {
        var n = newslist.querySelector(".wrap-news-list");
        setTimeout(function() {
            var e = n.offsetHeight;
            newslist.style.height = e + "px"
        }, 200)
    }
    Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile")
}
function ChangeBg() {
    var e = document.querySelectorAll(".pic-img");
    null !== e && e.forEach(function(e) {
        var t = e.querySelector("img").getAttribute("src");
        if (t) {
            var o = t.replace(/(^url\()|(\)$|[\"\'])/g, "");
            e.style.backgroundImage = "url(" + o + ")"
        }
    })
}
function AnimationDelay() {
    Container.querySelectorAll(".ani-item-home").forEach(function(e, t) {
        var o = 300 * Math.random(e);
        t.style.animationDelay = o + "ms"
    })
}
function DrawLoad() {
    LoadIcon.querySelectorAll("path").forEach(function(e) {
        var t = e.getTotalLength();
        (isIE10 || isIE11 || isEdge) && (this.style.strokeDasharray = t,
        this.style.animationDirection = "reverse",
        TweenMax.fromTo(this, 1, {
            strokeDashoffset: "0"
        }, {
            strokeDashoffset: t,
            ease: Power2.easeOut
        }),
        setTimeout(function() {
            LoadIcon.classList.add("show")
        }, 1200)),
        setTimeout(function() {
            LoadIcon.classList.add("show")
        }, 1200)
    })
}
function Done() {
    if (ResizeWindows(),
    1100 < window.innerWidth && (HomePage || ContactPage) && BoxSlide(),
    window.innerWidth < 540) {
        var e = DOM.querySelectorAll(".slide-pagination");
        e && e.forEach(function(e) {
            e.parentNode.querySelectorAll(".slide-translate > div") < 2 && (e.style.display = "none")
        })
    }
    HideMask(),
    DOM.querySelectorAll(".scroll-text h3, .text-ani-item h2, .title-page h1, .open-nav, .close-nav, .num-service").forEach(function(e) {
        SplitText(e)
    }),
    ContentLoad(),
    LoadIcon && (LoadIcon.classList.add("blur"),
    TweenMax.to(LoadIcon, 1.6, {
        scale: 3,
        ease: Power2.easeOut,
        opacity: "0",
        delay: .1,
        onComplete: function() {
            LoadIcon.remove()
        }
    }));
    var t = DOM.querySelector(".loadx");
    t && (t.classList.add("blur"),
    gsap.to(t, {
        duration: .6,
        ease: Power0.easeOut,
        opacity: "0",
        onComplete: function() {
            t.remove()
        }
    }))
}
function HideMask() {
    Mask.classList.add("show"),
    setTimeout(function() {
        Mask.classList.add("finish")
    }, 1300)
}
function RemoveClass(e) {
    for (var t = 0; t < e.length; t++)
        e[t].classList.remove("active"),
        e[t].classList.remove("current"),
        e[t].classList.remove("current-move")
}
DOM.addEventListener("DOMContentLoaded", function() {
    if (SlideBanner)
        if (!SlideBanner.classList.contains("show") && 1 < AllBackG.length)
            Banner();
        else {
            var e = document.querySelector(".bg");
            if (e) {
                var t = e.querySelector("img").getAttribute("data-src");
                if (t) {
                    var o = t.replace(/(^url\()|(\)$|[\"\'])/g, "");
                    e.style.backgroundImage = "url(" + o + ")",
                    e.classList.add("")
                }
            }
        }
    if (ResizeWindows(),
    HomePage)
        LoadIcon.classList.contains("loading") || (LoadIcon.classList.add("loading"),
        DrawLoad()),
        setTimeout(function() {
            Wheel.classList.add("show")
        }, 2500),
        Body.classList.add("hidden");
    else if (ContactPage) {
        LoadIcon.remove(),
        setTimeout(function() {
            Wheel.classList.add("show")
        }, 2500),
        Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
        DOM.querySelector(".loadx").style.opacity = "1",
        Body.classList.add("hidden")
    } else {
        setTimeout(function() {
            Wheel.classList.add("show")
        }, 2500),
        Html.classList.add("auto"),
        Body.classList.add("auto"),
        Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
        DOM.querySelector(".loadx").style.opacity = "1"
    }
    if (DOM.querySelectorAll(".pic-img") && ChangeBg(),
    OuterNav) {
        var i = OuterNav.cloneNode(!0);
        i.querySelector(".sub-nav").style.opacity = 1,
        i.classList.add("second"),
        Header.appendChild(i)
    }
    CheckWidthBut()
}),
gsap.config({
    nullTargetWarn: !1
});
var originalWarning = console.warn;
function NavMouseOver() {
    var e = OpenNav.querySelectorAll(".open-nav .words");
    setTimeout(function() {
        gsap.to(e, {
            delay: 0,
            duration: 1,
            opacity: "1",
            ease: Power2.easeOut,
            stagger: {
                each: -.1
            }
        })
    }, 600);
    var t = NavClick.querySelectorAll(".close-nav .words")
      , o = NavClick.querySelectorAll(".open-nav .words");
    NavClick.addEventListener("mouseover", function() {
        for (var e = 0; e < t.length; e++)
            t[e].style.transitionDelay = .07 * e + "s";
        for (e = 0; e < o.length; e++)
            o[e].style.transitionDelay = .07 * e + "s"
    }),
    NavClick.addEventListener("mouseout", function() {
        for (var e = 0; e < t.length; e++)
            t[e].style.transitionDelay = .28 - .07 * e + "s";
        for (e = 0; e < o.length; e++)
            o[e].style.transitionDelay = .28 - .07 * e + "s";
        setTimeout(function() {
            t.forEach(function(e) {
                e.style.transitionDelay = "0s"
            }),
            o.forEach(function(e) {
                e.style.transitionDelay = "0s"
            })
        }, 300)
    })
}
function CheckWidthBut() {
    if (Background && PaginationBg)
        if (Count = PagiBg.length,
        Count <= 1)
            ButBackground.remove(),
            PaginationBg.remove();
        else if (HomePage) {
            if (1500 < window.innerWidth)
                var e = 25 * Count + 140;
            else
                e = 25 * Count + 110;
            ButBackground.style.width = e + "px",
            ButBackground.style.left = window.innerWidth / 2 - e / 2 + "px"
        }
}
function CheckButBg() {
    if (1 == AllBackG.length)
        ButBackground.remove(),
        PaginationBg.remove();
    else {
        setTimeout(function() {
            ButBackground.classList.add("active")
        }, 1200);
        var e = SlideBanner.getAttribute("data-time");
        e && null != e && setInterval(function() {
            NextBg.click()
        }, e)
    }
}
function ZoomControl(t) {
    $(".zoom-control a").on("click", function() {
        var e = t.getZoom();
        switch ($(this).attr("id")) {
        case "zoom-in":
            t.setZoom(++e);
            break;
        case "zoom-out":
            t.setZoom(--e)
        }
        return !1
    })
}
console.warn = function() {}
;
var BranchList = [];
function initialize() {
    var e = $(".httptemplate").text()
      , t = new google.maps.LatLng(16.8013159,107.0181198)
      , o = new google.maps.StyledMapType([{}, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            lightness: 0
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            visibility: "on"
        }]
    }],{
        name: "Styled Map"
    })
      , i = {
        center: t,
        zoom: 5,
        disableDefaultUI: !0,
        clickableIcons: !1,
        scrollwheel: !1,
        draggable: !0,
        zoomControl: !0,
        fullscreenControl: !0,
        gestureHandling: "cooperative",
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    }
      , n = new google.maps.Map(document.getElementById("map-canvas"),i);
    if (n.mapTypes.set("map_style", o),
    n.setMapTypeId("map_style"),
    ContactPage || HomePage)
        for (var a = [], s = e + "images/marker.svg", r = 0; r < BranchList.length; ++r) {
            BranchList[r].id;
            var l = BranchList[r].lat
              , c = BranchList[r].lng
              , d = BranchList[r].html
              , u = new google.maps.InfoWindow
              , m = "<div class='infobox'><div class='infobox-inner'>" + d + "</div></div>"
              , g = new google.maps.Marker({
                position: {
                    lat: l,
                    lng: c
                },
                icon: s,
                map: n,
                info: m,
                animation: google.maps.Animation.DROP
            });
            a.push(g),
            google.maps.event.addListener(g, "click", function() {
                for (var e = 0; e < a.length; e++)
                    a[e].setAnimation(null),
                    a[e].setZIndex(10);
                this.open ? (u.close(n, this),
                g.open = !1) : (this.setZIndex(9999),
                u.setContent(this.info),
                u.open(n, this),
                h(this),
                n.setCenter(g.getPosition()),
                n.getZoom() <= 6 && n.setZoom(5),
                g.open = !0);
                google.maps.event.addListener(u, "closeclick", function() {
                    u.close(n, this),
                    g.open = !1,
                    n.setCenter(t);
                    for (var e = 0; e < a.length; e++)
                        a[e].setAnimation(null),
                        a[e].setZIndex(10)
                })
            })
        }
    function h(e) {
        null !== e.getAnimation() ? e.setAnimation(null) : e.setAnimation(google.maps.Animation.BOUNCE)
    }
    google.maps.event.addDomListener(window, "resize", function() {
        google.maps.event.trigger(n, "resize"),
        n.setCenter(t)
    }),
    window.google.maps.event.addListener(n, "bounds_changed", function() {
        n.getDiv().firstChild.clientHeight === window.innerHeight && n.getDiv().firstChild.clientWidth === window.innerWidth ? (Body.classList.add("full-screen"),
        n.setOptions({
            scrollwheel: !0
        })) : (Body.classList.remove("full-screen"),
        n.setOptions({
            scrollwheel: !1
        }))
    }),
    ZoomControl(n)
}
0 < $(".json-map").length && (BranchList = JSON.parse($(".json-map").text()));
var timex, Arrhash, timer, News = 0, Details = 0, Videoload = 0, doWheel = !0, doTouch = !0, windscroll = $(document).scrollTop();
function onScroll() {
    console.log();
    if(screen.width >= 1100){
        var e = document.querySelectorAll(".ani-item")
        , t = document.querySelectorAll(".text-ani-item")
        , o = Container.querySelectorAll(".logo-info")
        , s = Container.querySelectorAll(".lazy-img")
        , i = Container.querySelectorAll(".lazy-slide");
    }else{
        var e = document.querySelectorAll(".ani-item2")
        , t = document.querySelectorAll(".text-ani-item2")
        , o = Container.querySelectorAll(".logo-info2")
        , s = Container.querySelectorAll(".lazy-img2")
        , i = Container.querySelectorAll(".lazy-slide2");
    }
    
    observer = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            .2 < e.intersectionRatio && !e.target.classList.contains("on-show") && e.target.classList.add("on-show")
        })
    }
    ,{
        threshold: [.05, .1, .15, .2, .25]
    }),
    observer2 = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            if (e.target.classList.contains("underline") && e.isIntersecting && !e.target.classList.contains("show-line") && e.target.classList.add("show-line"),
            HomePage || ContactPage) {
                if (e.isIntersecting && !e.target.classList.contains("show-text-ani")) {
                    1100 < window.innerWidth ? e.target.classList.remove("show-text-ani") : e.target.classList.add("show-text-ani");
                    var t = e.target.querySelectorAll("h2 > span > span");
                    TweenMax.staggerFromTo(t, 1, {
                        opacity: 0,
                        x: -15,
                        rotationY: -30
                    }, {
                        opacity: 1,
                        x: 0,
                        rotationY: 0,
                        ease: Power2.easeOut,
                        delay: 1
                    }, .05)
                }
            } else if (e.isIntersecting && !e.target.classList.contains("show-text-ani")) {
                e.target.classList.add("show-text-ani");
                t = e.target.querySelectorAll("h2 > span > span");
                TweenMax.staggerFromTo(t, 1, {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                }, {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    ease: Power2.easeOut,
                    delay: .3
                }, .06)
            }
        })
    }
    ),
    observer3 = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            .2 < e.intersectionRatio && !e.target.classList.contains("loading") && (e.target.classList.add("loading"),
            setTimeout(function() {
                e.target.classList.add("show")
            }, 2e3))
        })
    }
    ,{
        threshold: [.05, .1, .15, .2, .25]
    }),
    LazyLoad = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            if (e.intersectionRatio && !e.target.classList.contains("loaded")) {
                e.target.classList.add("loaded");
                var t = e.target.querySelector("img").getAttribute("data-src");
                e.target.style.backgroundImage = "url(" + t + ")"
            }
        })
    }
    ),
    LazyLoadSlide = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            e.intersectionRatio && !e.target.classList.contains("loaded") && (e.target.classList.add("loaded"),
            e.target.querySelectorAll(".pic-img").forEach(function(e) {
                var t = e.querySelector("img").getAttribute("data-src");
                e.style.backgroundImage = "url(" + t + ")"
            }))
        })
    }
    ),
    e.forEach(function(e) {
        observer.observe(e)
    }),
    t.forEach(function(e) {
        observer2.observe(e)
    }),
    o && o.forEach(function(e) {
        observer3.observe(e)
    }),
    s && s.forEach(function(e) {
        LazyLoad.observe(e)
    }),
    i && i.forEach(function(e) {
        LazyLoadSlide.observe(e)
    })
}
function InsertAfter(e, t) {
    e.parentNode.insertBefore(t, e.nextSibling)
}
function execSearch() {
    var e = document.getElementById("qsearch").value
      , t = document.getElementById("href_search").value
      , o = document.getElementById("defaultvalue").value
      , s = document.getElementById("errorsearch").value;
    if (hidemsg(),
    e == o || "" == e)
        return !1;
    if (e.length <= 1) {
        var i = document.createElement("div");
        return i.className = "contact-success color-red",
        i.innerHTML = s,
        document.querySelector(".overlay-dark").after(i),
        !1
    }
    if ("" !== e) {
        var a = t + "?qsearch=" + encodeURIComponent(e);
        return window.location = a,
        !1
    }
}
function Search() {
    SearchBut.addEventListener("click", function(e) {
        this.classList.contains("active") ? (FormRowSearch.classList.remove("active"),
        SearchBut.classList.remove("active"),
        SearchForm.classList.remove("active")) : (document.getElementById("search").reset(),
        SearchBut.classList.add("active"),
        SearchForm.classList.add("active"),
        FormRowSearch.classList.add("active"),
        execSearch(),
        NavClick.classList.contains("active") && NavClick.click(),
        null !== LoginBox && LoginBox.classList.contains("active") && (LoginBox.classList.remove("active"),
        LoginOverlay.classList.remove("active")))
    })
}
function NavClickFn() {
    var t = OpenNav.querySelectorAll(".open-nav .words")
      , o = CloseNav.querySelectorAll(".close-nav  .words");
    gsap.to(o, {
        duration: 1,
        opacity: "0",
        ease: Power2.easeOut,
        delay: 1
    }),
    NavClick.addEventListener("click", function() {
        var e;
        NavClick.classList.contains("active") ? (Html.classList.remove("no-scroll"),
        Body.classList.remove("no-scroll"),
        NavClick.classList.remove("active"),
        Navigation.classList.remove("active"),
        OverlayMenu.classList.remove("active"),
        OverMenuDark.classList.add("fadeoutright"),
        setTimeout(function() {
            OverMenuDark.classList.remove("fadeoutright")
        }, 500),
        Container.classList.contains("blur") && (Container.classList.remove("blur"),
        Footer.classList.remove("blur")),
        gsap.to(o, {
            delay: 0,
            duration: 1,
            opacity: "0",
            ease: Power2.easeOut,
            stagger: {
                each: -.1
            }
        }),
        gsap.to(t, {
            delay: 0,
            duration: 1,
            opacity: "1",
            ease: Power2.easeOut,
            stagger: {
                each: -.1
            }
        }),
        Header.classList.contains("hide") && WhiteHeader.classList.add("show"),
        (e = Header.querySelector(".outer-nav.second")) && e.querySelector(".sub-nav").classList.contains("on-show") && e.classList.add("fixed")) : (Html.classList.add("no-scroll"),
        Body.classList.add("no-scroll"),
        Navigation.classList.add("active"),
        NavClick.classList.add("active"),
        OverlayMenu.classList.add("active"),
        gsap.to(o, {
            delay: 0,
            duration: 1,
            opacity: "1",
            ease: Power2.easeOut,
            stagger: {
                each: -.1
            }
        }),
        gsap.to(t, {
            delay: 0,
            duration: 1,
            opacity: "0",
            ease: Power2.easeOut,
            stagger: {
                each: -.1
            }
        }),
        Header.classList.contains("hide") && WhiteHeader.classList.remove("show"),
        1100 < window.innerWidth && (Container.classList.add("blur"),
        Footer.classList.add("blur")),
        SearchBut.classList.contains("active") && (SearchBut.classList.remove("active"),
        SearchForm.classList.remove("active")),
        Wheel.classList.contains("show") && Wheel.classList.remove("show"),
        (e = Header.querySelector(".outer-nav.second")) && e.classList.contains("fixed") && e.classList.remove("fixed"))
    }),
    OverlayMenu.addEventListener("click", function(e) {
        NavClick.classList.contains("active") && NavClick.click()
    })
}
function BoxSlide() {
    var o = 0
      , s = !1;
    function e() {
        setTimeout(function() {
            GroupCentral.forEach(function(e, t) {
                t !== o && TweenMax.set(GroupCentral[t], {
                    y: "100%"
                })
            }),
            s = !1
        }, 1e3)
    }
    function i() {
        document.querySelectorAll(".row__message").forEach(tmp=>{
            tmp.classList.add("row__messageAnimation")
        })
        s = !0,
        GroupCentral.forEach(function(e) {
            TweenMax.set(e, {
                zIndex: ""
            })
        }),
        TextAniSpans.forEach(function(e) {
            e.classList.remove("move")
        }),
        Wheel.classList.contains("white") && Wheel.classList.remove("white"),

        LogoMessage && LogoMessage.classList.contains("loading") && setTimeout(function() {
            LogoMessage.classList.remove("loading", "show")
            
        }, 500),
        LogoNews && LogoNews.classList.contains("loading") && setTimeout(function() {
            LogoNews.classList.remove("loading", "show")
        }, 500),
        Wheel.classList.add("show"),
        GoTop.classList.remove("show"),
        TweenMax.fromTo(GroupCentral[o], .8, {
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                GroupCentral.forEach(function(e) {
                    e.classList.remove("show-text")
                }),
                GroupCentral[o].classList.add("show-text"),
                BoxNavLi.forEach(function(e) {
                    e.classList.remove("current")
                }),
                BoxNavLi[o].classList.add("current"),
                HomePage && null !== YoutubeVideo && HomeVideo.classList.contains("show-text") && PlayButton.click(),
                HomeMessage && HomeMessage.classList.contains("show-text") && (LogoMessage.classList.add("loading"),
                setTimeout(function() {
                    LogoMessage.classList.add("show")
                }, 2e3)),
                HomeNews && HomeNews.classList.contains("show-text") && (LogoNews.classList.add("loading"),
                setTimeout(function() {
          
                    LogoNews.classList.add("show")
                }, 2e3)),
                LastGroup.classList.contains("show-text") && setTimeout(function() {
                    Wheel.classList.remove("show"),
                    GoTop.classList.add("show")
                }, 300),
                e()
            }
        })
    }
    function a() {
        s = !0,
        GroupCentral.forEach(function(e) {
            TweenMax.set(e, {
                zIndex: ""
            })
        }),
        TextAniSpans.forEach(function(e) {
            e.classList.remove("move")
        }),
        Wheel.classList.contains("white") && Wheel.classList.remove("white"),
        LogoMessage && LogoMessage.classList.contains("loading") && setTimeout(function() {
            LogoMessage.classList.remove("loading", "show")
        }, 500),
        LogoNews && LogoNews.classList.contains("loading") && setTimeout(function() {
            LogoNews.classList.remove("loading", "show")
        }, 500),
        Wheel.classList.add("show"),
        GoTop.classList.remove("show"),
        TweenMax.fromTo(GroupCentral[o], .8, {
            y: "-100%",
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                GroupCentral.forEach(function(e) {
                    e.classList.remove("show-text")
                }),
                GroupCentral[o].classList.add("show-text"),
                BoxNavLi.forEach(function(e) {
                    e.classList.remove("current")
                }),
                BoxNavLi[o].classList.add("current"),
                HomePage && null !== YoutubeVideo && HomeVideo.classList.contains("show-text") && PlayButton.click(),
                HomeMessage && HomeMessage.classList.contains("show-text") && (LogoMessage.classList.add("loading"),
                setTimeout(function() {
                    LogoMessage.classList.add("show")
                }, 2e3)),
                HomeNews && HomeNews.classList.contains("show-text") && (LogoNews.classList.add("loading"),
                setTimeout(function() {
                    LogoNews.classList.add("show")
                }, 2e3)),
                LastGroup.classList.contains("show-text") && setTimeout(function() {
                    Wheel.classList.remove("show"),
                    GoTop.classList.add("show")
                }, 300),
                e()
            }
        })
    }
    1100 < window.innerWidth && !Body.classList.contains("fullscreen") && 1 < GroupLength && (BoxSlider.addEventListener("wheel", function(e) {
        var t;
        !1 === s && (t = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY || -e.detail))),
        1100 < window.innerWidth && !Body.classList.contains("fullscreen") && (null !== GroupCentral[o] && -1 === parseInt(t) ? (o >= GroupLength - 1 ? o = 0 : o += 1,
        i()) : null !== GroupCentral[o] && 1 === parseInt(t) && (o <= 0 ? o = GroupLength - 1 : o -= 1,
        a()))
    }, {
        passive: !0
    }),
    BoxSlider.addEventListener("swiped-up", function(e) {
        doTouch && (doTouch = !1,
        1100 < window.innerWidth && !Body.classList.contains("fullscreen") && (BoxNav.querySelector("current").nextSibling.click(),
        setTimeout(turnWheelTouch, 500)))
    }),
    BoxSlider.addEventListener("swiped-down", function(e) {
        doTouch && (doTouch = !1,
        1100 < window.innerWidth && !Body.classList.contains("fullscreen") && (BoxNav.querySelector("current").previousSibling.click(),
        setTimeout(turnWheelTouch, 500)))
    })),
    BoxNavLi.forEach(function(e, t) {
        e.addEventListener("click", function() {
            if (s)
                return !1;
            !s && o < t ? (o = t,
            i()) : !s && t < o && (o = t,
            a())
        })
    }),
    Wheel.addEventListener("click", function() {
        return BoxNav.querySelector(".current").nextElementSibling.click(),
        !1
    }),
    setTimeout(function() {
        GroupCentral[0].classList.add("show-text"),
        BoxNavLi[0].classList.add("current"),
        BoxNav.classList.add("show")
    }, 500),
    GroupLength <= 1 && (BoxNav.classList.add("display-none"),
    Body.classList.add("fullmap"))
}
function MouseHandler(s) {
    function e(e) {
        if (!Mobile.matches) {
            var t = s.querySelector(".slidebox-arrow-next")
              , o = s.querySelector(".slidebox-arrow-prev");
            e = window.event || e;
            if (0 < Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))) {
                if (!doWheel)
                    return;
                o.click(),
                setTimeout(turnWheelTouch, 300)
            } else {
                if (!doWheel)
                    return;
                t.click(),
                setTimeout(turnWheelTouch, 300)
            }
            return !1
        }
    }
    HTML.classList.contains("is-Firefox") ? s.addEventListener("DOMMouseScroll", e, {
        passive: !0
    }) : (s.addEventListener("wheel", e, {
        passive: !0
    }),
    s.addEventListener("mousewheel", e, {
        passive: !0
    }))
}
function MakeOption(e) {
    1050 < window.innerWidth ? toView = 3 : window.innerWidth < 1050 && 600 < window.innerWidth ? toView = 2 : toView = 1;
    var t = e.querySelectorAll(".slidebox-item").length;
    1 < t / toView ? e.classList.add("true-option") : e.classList.remove("true-option"),
    1 == t && e.classList.add("single")
}
DOM.getElementById("qsearch").addEventListener("keydown", function(e) {
    13 === e.keyCode && execSearch()
});
var SlidePicture = {
    BusHomeSlide: function() {
        var e = DOM.querySelector(".slide-business-home");
        if (e) {
            var t = new Splide(e,{
                rewind: !0,
                trimSpace: !1,
                perPage: 1,
                pagination: !1,
                gap: "0px",
                SizeW: 100,
                SizeH: 100,
                arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                speed: 600,
                autoWidth: !0,
                breakpoints: {
                    1100: {
                        destroy: !0
                    }
                }
            });
            t.on("mounted", function() {
                2 < Container.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t.on("resize", function() {
                2 < Container.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t.mount()
        }
    },
    ProHomeSlide: function() {
        var e = DOM.querySelector(".slide-project");
        if (e) {
            var t = new Splide(e,{
                rewind: !0,
                pagination: !1,
                gap: "0",
                SizeW: 100,
                SizeH: 100,
                start: 1,
                arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                speed: 600,
                focus: "center",
                trimSpace: !1,
                perPage: 2,
                breakpoints: {
                    1100: {
                        pagination: !0,
                        arrowPath: !1
                    },
                    540: {
                        pagination: !0,
                        arrowPath: !1,
                        perPage: 1,
                        focus: !1
                    }
                }
            });
            t.on("mounted", function() {
                2 < Container.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t.on("resize", function() {
                2 < Container.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
            }),
            t.mount()
        }
    },
    Sliderprocess: function() {
        if (AboutHistory) {
            var e = DOM.querySelector(".slide-process")
              , t = e.querySelectorAll(".box-history").length - 1;
            if (e) {
                var o = new Splide(e,{
                    pagination: !1,
                    gap: "30px",
                    SizeW: 100,
                    SizeH: 100,
                    start: t,
                    arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                    speed: 600,
                    focus: "center",
                    perPage: 2,
                    trimSpace: !1,
                    breakpoints: {
                        1100: {
                            pagination: !0,
                            perPage: 2
                        },
                        660: {
                            pagination: !0,
                            perPage: 1
                        }
                    }
                });
                o.on("mounted", function() {
                    3 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
                }),
                o.on("resize", function() {
                    3 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
                }),
                o.mount()
            }
        }
    },
    SliderManager: function() {
        if (AboutManager) {
            var t = DOM.querySelector(".list-direct");
            if (t) {
                var e = new Splide(t,{
                    start: 0,
                    rewind: !0,
                    pagination: !1,
                    gap: "40px",
                    SizeW: 100,
                    SizeH: 100,
                    arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                    speed: 600,
                    perPage: 3,
                    breakpoints: {
                        1100: {
                            pagination: !0,
                            perPage: 2
                        },
                        540: {
                            pagination: !0,
                            perPage: 1
                        }
                    }
                });
                e.on("mounted", function() {
                    var e = t.querySelectorAll(".slidebox-item").length;
                    1100 < window.innerWidth ? 3 < e ? t.classList.add("true-option") : t.classList.remove("true-option") : t.classList.add("true-option")
                }),
                e.on("resize", function() {
                    var e = t.querySelectorAll(".slidebox-item").length;
                    1100 < window.innerWidth ? 3 < e ? t.classList.add("true-option") : t.classList.remove("true-option") : t.classList.add("true-option")
                }),
                e.mount()
            }
        }
    },
    SliderEquipMent: function() {
        if (AboutEquip) {
            var s = DOM.querySelector(".slide-equip");
            if (s) {
                var e = new Splide(s,{
                    rewind: !0,
                    pagination: !1,
                    gap: "0",
                    SizeW: 100,
                    SizeH: 100,
                    arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                    speed: 600,
                    perPage: 1,
                    perMove: 1,
                    breakpoints: {
                        1100: {
                            pagination: !0,
                            gap: "0"
                        }
                    }
                });
                e.on("mounted", function() {
                    1 < s.querySelectorAll(".slidebox-item").length ? s.classList.add("true-option") : s.classList.remove("true-option")
                }),
                e.on("resize", function() {
                    1 < s.querySelectorAll(".slidebox-item").length ? s.classList.add("true-option") : s.classList.remove("true-option")
                }),
                e.on("moved", function() {
                    if (window.innerWidth < 1100) {
                        var e = s.querySelector(".is-active").offsetHeight
                          , t = s.querySelector(".slidebox-track")
                          , o = s.querySelector(".slidebox-list");
                        s.style.height = e + 45 + "px",
                        t.style.height = e + "px",
                        o.style.height = e + "px"
                    }
                }),
                e.mount()
            }
        }
    },
    SliderAchievement: function() {
        if (AboutAchieveMent) {
            var e = DOM.querySelector(".slide-achieve");
            if (e) {
                var t = new Splide(e,{
                    start: 1,
                    rewind: !0,
                    pagination: !1,
                    gap: "0",
                    SizeW: 100,
                    SizeH: 100,
                    arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                    speed: 600,
                    focus: "center",
                    perPage: 1,
                    trimSpace: !1,
                    breakpoints: {
                        1100: {
                            pagination: !0,
                            start: 1
                        },
                        660: {
                            pagination: !0,
                            start: 0
                        }
                    }
                });
                t.on("mounted", function() {
                    1 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
                }),
                t.on("resize", function() {
                    1 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option")
                }),
                t.mount()
            }
        }
    },
    SliderLirabry: function() {
        DOM.querySelectorAll(".slide-library").forEach(function(e) {
            var t = new Splide(e,{
                perPage: 2,
                gap: "50px",
                pagination: !1,
                arrowPath: "special",
                SizeW: 100,
                SizeH: 100,
                arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                speed: 600,
                breakpoints: {
                    1100: {
                        perPage: 2,
                        gap: "10px",
                        pagination: !0,
                        arrowPath: !1
                    },
                    600: {
                        perPage: 1,
                        gap: "0",
                        pagination: !0,
                        arrowPath: !1
                    }
                }
            });
            t.on("mounted", function() {
                1100 < window.innerWidth ? 2 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option") : e.classList.add("true-option")
            }),
            t.on("resize", function() {
                1100 < window.innerWidth && (2 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option"))
            }),
            t.mount()
        })
    },
    SliderRelative: function() {
        if (NewsRelative) {
            var t = DOM.querySelector(".slide-news-relative");
            if (t) {
                var o = new Splide(t,{
                    rewind: !0,
                    pagination: !1,
                    gap: "30px",
                    SizeW: 100,
                    SizeH: 100,
                    arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                    speed: 600,
                    perPage: 3,
                    perMove: 1,
                    breakpoints: {
                        1100: {
                            pagination: !0,
                            perPage: 2,
                            gap: "15px"
                        },
                        540: {
                            pagination: !0,
                            perPage: 1,
                            gap: "0px"
                        }
                    }
                });
                o.on("mounted", function() {
                    var e = t.querySelectorAll(".slidebox-item").length;
                    1100 < window.innerWidth ? 3 < e ? t.classList.add("true-option") : t.classList.remove("true-option") : t.classList.add("true-option")
                }),
                o.on("resize", function() {
                    var e = t.querySelectorAll(".slidebox-item").length;
                    1100 < window.innerWidth ? 3 < e ? t.classList.add("true-option") : t.classList.remove("true-option") : t.classList.add("true-option")
                });
                var s, i, a, r, e = NewsRelative.querySelectorAll(".news-item-relative"), n = e.length - 1;
                e && e.forEach(function(e) {
                    e.addEventListener("mousedown", function(e) {
                        s = e.screenX,
                        i = e.screenY
                    }),
                    e.addEventListener("mouseup", function(e) {
                        if (a = e.screenX,
                        r = e.screenY,
                        s == a && i == r) {
                            var t = [].slice.call(this.parentNode.children).indexOf(this);
                            1100 < window.innerWidth ? n - 2 <= t ? o.go(n - 2) : o.go(t) : 540 < window.innerWidth < 1100 && n - 1 <= t ? o.go(n - 1) : o.go(t)
                        }
                    })
                }),
                o.mount()
            }
        }
    }
};
function AniText() {
    $(".title-page h1").children().children().each(function(e) {
        var t = $(this);
        setTimeout(function() {
            $(t).addClass("move")
        }, 60 * (e + 1))
    })
}
function NewsLoad(i) {
    var e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    e.open("GET", i, !0),
    e.onload = function() {
        if (200 <= this.status && this.status < 400) {
            var s = this.response
              , e = Container.querySelector(".load-details");
            TweenMax.to(e, .6, {
                opacity: "0",
                ease: Power2.easeOut,
                onComplete: function() {
                    (e = Container.querySelector(".load-details")).remove(),
                    LoadContent.insertAdjacentHTML("beforeend", s),
                    Details = 1,
                    PrintShare(),
                    onScroll();
                    var e, t = (e = DOM.querySelector(".load-details")).querySelectorAll("a"), o = e.querySelectorAll("a");
                    t.forEach(function(e) {
                        e.addEventListener("click", function(e) {
                            e.preventDefault();
                            var t = this.getAttribute("href");
                            return window.open(t, "_blank"),
                            !1
                        })
                    }),
                    window.innerWidth <= 840 && (o.forEach(function(e) {
                        e.classList.add("zoom-pic")
                    }),
                    ZoomPic()),
                    changeAlternate(i, DOM.querySelector(".alternate-hl-news"))
                }
            });
            var t = DOM.querySelector(".loadx");
            TweenMax.to(t, .5, {
                opacity: "0",
                ease: Power2.easeOut,
                delay: .3,
                onComplete: function() {
                    t.remove()
                }
            }),
            Main.classList.contains("smooth-scroll") && scrollTranslate()
        }
    }
    ,
    e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    e.send()
}
function LoadManager(e, c, d, u, h, v) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0),
    t.onreadystatechange = function() {
        if (4 <= this.readyState && this.status < 2e3) {
            var e = this.response;
            Body.insertAdjacentHTML("beforeend", e);
            var t = DOM.querySelector(".details-content")
              , o = DOM.querySelector(".details-manager")
              , s = t.querySelectorAll(".pic-img")
              , i = t.querySelector(".title-manger-details h3")
              , a = t.querySelector(".title-manger-details p")
              , r = t.querySelector(".direct-pic-details")
              , n = o.querySelector(".text-manager-details");
            r.insertAdjacentHTML("beforeend", '<img src= "' + u + '"alt="' + h + '"/>'),
            i.textContent = c,
            a.textContent = d,
            n.innerHTML = v,
            s && ChangeBg(),
            o.classList.add("show"),
            Container.classList.add("blur"),
            TweenMax.fromTo(o, 1, {
                opacity: "0",
                transform: "translateY(150px)"
            }, {
                opacity: "1",
                transform: "none",
                ease: Power2.easeOut
            }),
            setTimeout(function() {
                t.querySelector(".close-popup").classList.add("flipInX")
            }, 500);
            var l = DOM.querySelector(".loadx");
            TweenMax.to(l, .4, {
                opacity: "0",
                ease: Power2.easeOut,
                onComplete: function() {
                    o.clientHeight > window.innerheight && o.classList.add("no-after"),
                    l.remove()
                }
            }),
            DOM.querySelectorAll(".close-popup, .details-content > span").forEach(function(e) {
                e.addEventListener("click", function() {
                    return TweenMax.to(t, .6, {
                        opacity: "0",
                        ease: Power2.easeOut,
                        onComplete: function() {
                            t.remove()
                        }
                    }),
                    OverlayDark.classList.remove("show"),
                    Body.classList.remove("no-scroll"),
                    HTML.classList.remove("no-scroll"),
                    Container.classList.remove("blur"),
                    !1
                })
            })
        }
    }
    ,
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send()
}
function ProjectLoadList(e) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0),
    t.onload = function() {
        if (200 <= this.status && this.status < 400) {
            var s = this.response
              , i = Container.querySelector(".project-list")
              , a = i.querySelector(".wrap-project-list")
              , r = Container.querySelector(".view-more-pro")
              , e = Container.querySelector(".form-project-section").offsetTop - 60
              , n = Container.querySelector(".search-project");
            Html.scrollTo({
                top: e,
                left: 0,
                behavior: "smooth"
            }),
            TweenMax.to(a, .6, {
                opacity: "0",
                ease: Power2.easeOut,
                onComplete: function() {
                    a.remove(),
                    i.insertAdjacentHTML("beforeend", s),
                    PrintShare(),
                    LinkPage();
                    var e = i.querySelectorAll(".project-item");
                    n.classList.remove("pointer-events");
                    for (var t = e.length + 5; 0 <= t; t--)
                        t % 6 == 0 && (e[t - 1] && e[t - 1].classList.add("left"),
                        e[t - 2] && e[t - 2].classList.add("left"),
                        e[t - 3] && e[t - 3].classList.add("left"));
                    if (e.length <= 6)
                        r.classList.add("display-none"),
                        i.removeAttribute("style");
                    else {
                        r.classList.remove("display-none"),
                        r.classList.contains("hide") && r.classList.remove("hide");
                        for (t = 6; t < e.length; t++)
                            e[t].style.display = "none";
                        var o = i.querySelector(".wrap-project-list").offsetHeight;
                        i.style.height = o + "px"
                    }
                    onScroll()
                }
            }),
            Details = 1;
            var t = DOM.querySelector(".loadx");
            TweenMax.to(t, .5, {
                opacity: "0",
                ease: Power2.easeOut,
                delay: .3,
                onComplete: function() {
                    t.remove()
                }
            }),
            Main.classList.contains("smooth-scroll") && scrollTranslate()
        }
    }
    ,
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send()
}
function popupLoad(r) {
    var e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    e.open("GET", r, !0),
    e.onreadystatechange = function() {
        if (4 <= this.readyState && this.status < 2e3) {
            var e = this.response;
            Body.insertAdjacentHTML("beforeend", e);
            var t = DOM.querySelector(".details-content")
              , o = DOM.querySelector(".details-center")
              , s = t.querySelector(".close-popup")
              , i = DOM.querySelector(".download-but");
            if (DOM.querySelectorAll(".pic-img") && ChangeBg(),
            changeAlternate(r, DOM.querySelector(".alternate-hl-news")),
            Container.classList.add("blur"),
            TweenMax.fromTo(o, 1, {
                opacity: "0",
                transform: "translateY(150px)"
            }, {
                opacity: "1",
                transform: "none",
                ease: Power2.easeOut
            }),
            s.classList.add("flipInX"),
            i)
                null == i.querySelector("a").getAttribute("href") && i.classList.add("display-none");
            var a = DOM.querySelector(".loadx");
            TweenMax.to(a, .4, {
                opacity: "0",
                ease: Power2.easeOut,
                onComplete: function() {
                    o.clientHeight > window.innerheight && o.classList.add("no-after"),
                    a.remove()
                }
            }),
            (s = DOM.querySelectorAll(".close-popup, .details-content > span")).forEach(function(e) {
                e.addEventListener("click", function() {
                    return RecruitmentPage && (removeURL(DOM.querySelector(".nav li.current a"), DOM.querySelector(".nav li.current a").getAttribute("data-name")),
                    changeAlternate(DOM.querySelector(".nav li.current a").getAttribute("href"), DOM.querySelector(".alternate-hl-recruitment"))),
                    TweenMax.to(t, .6, {
                        opacity: "0",
                        ease: Power2.easeOut,
                        onComplete: function() {
                            t.remove()
                        }
                    }),
                    OverlayDark.classList.remove("show"),
                    Body.classList.remove("no-scroll"),
                    HTML.classList.remove("no-scroll"),
                    Container.classList.remove("blur"),
                    !1
                })
            })
        }
    }
    ,
    e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    e.send()
}
function FocusText() {
    DOM.querySelectorAll(".input-text:not(.file-up), .input-area").forEach(function(e) {
        e.addEventListener("focusin", function(e) {
            this.querySelector(".holder").classList.add("hide")
        }),
        e.addEventListener("focusout", function(e) {
            this.querySelector("input, textarea").value.length <= 0 && this.querySelector(".holder").classList.remove("hide")
        })
    })
}
function AlbumLoad(e, L) {
    var g = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    g.open("GET", e, !0),
    g.onreadystatechange = function() {
        if (4 == g.readyState && 200 == g.status) {
            AllAlbum.innerHTML = g.responseText;
            var s, e = AllAlbum.querySelector(".album-load"), t = AllAlbum.querySelector(".close-album");
            Array.from(AllAlbum.querySelectorAll(".pic-name > h3"), function(e) {
                return SplitText(e),
                e
            }),
            Array.from(AllAlbum.querySelectorAll(".pinch-zoom"), function(e) {
                new PinchZoom.default(e,{
                    draggableUnzoomed: !1
                })
            });
            var o = e.querySelectorAll(".container-zoom img")
              , i = document.createElement("div");
            i.className = "all-bg-album";
            for (var a = [].slice.call(o), r = 0; r < o.length; r++) {
                var n = document.createElement("div");
                n.className = "bg-album";
                var l = a[r].src;
                n.style.backgroundImage = "url(" + l + ")",
                i.appendChild(n)
            }
            OverlayDark.append(i);
            var c = e.querySelector(".album-center")
              , d = e.querySelector(".thumbs")
              , u = e.querySelectorAll(".slidebox-item").length
              , h = (DOM.querySelectorAll(".slidebox-item"),
            DOM.querySelector(".all-bg-album"))
              , v = DOM.querySelectorAll(".bg-album");
            1 < u && (d.classList.add("display-block"),
            c.classList.add("true-option"));
            var f = new Splide(c,{
                gap: 0,
                perPage: 1,
                speed: 600,
                start: L,
                pagination: !1,
                SizeW: 100,
                SizeH: 100,
                arrowPath: "M26.4,2.8 26.4,18.1 58.2,50 26.4,81.9 26.4,97.2 73.6,50z",
                speed: 600
            });
            f.on("mounted", function() {}),
            f.on("moved", function(e) {
                Array.from(DOM.querySelectorAll(".slidebox-item, .bg-album, .pic-name .box"), function(e) {
                    e.classList.remove("this-view", "current", "move")
                })
            }),
            f.on("active", function(e) {
                var t = c.querySelector(".is-active");
                t.classList.add("this-view"),
                clearTimeout(s),
                AllAlbum.querySelector(".this-view"),
                document.querySelectorAll(".this-view .words").forEach(function(e, t) {
                    s = setTimeout(function() {
                        e.classList.add("move")
                    }, 50 * (t + 1))
                });
                var o = Array.from(c.querySelectorAll(".slidebox-item")).indexOf(t);
                v[o].classList.add("current")
            });
            var m = new Splide(d,{
                rewind: !0,
                fixedWidth: 90,
                fixedHeight: 50,
                isNavigation: !0,
                gap: 5,
                focus: "center",
                pagination: !1,
                arrows: !1,
                cover: !0,
                start: L,
                breakpoints: {
                    600: {
                        fixedWidth: 66,
                        fixedHeight: 40
                    }
                }
            }).mount();
            f.sync(m).mount();
            var p = DOM.querySelector(".loadx");
            gsap.to(e, {
                duration: .8,
                opacity: 1,
                ease: Power0.easeOut,
                onComplete: function() {
                    t.classList.add("goleft"),
                    c.classList.add("fadein"),
                    d.classList.add("fadeinup"),
                    p.classList.remove("display-block"),
                    gsap.to(h, {
                        duration: .5,
                        opacity: .3,
                        delay: .5,
                        ease: Power0.easeOut
                    }),
                    gsap.to(p, {
                        duration: .4,
                        opacity: 0,
                        ease: Power0.easeOut,
                        onComplete: function() {
                            p.remove()
                        }
                    })
                }
            }),
            t.addEventListener("click", function() {
                return gsap.to([e, h], {
                    duration: .5,
                    opacity: 0,
                    ease: Power0.easeOut,
                    onComplete: function() {
                        AllAlbum.classList.remove("show"),
                        OverlayDark.classList.remove("show"),
                        Body.classList.remove("no-scroll"),
                        HTML.classList.remove("no-scroll"),
                        OverlayDark.innerHTML = "",
                        AllAlbum.innerHTML = "",
                        Container.classList.contains("blur") && (Container.classList.remove("blur"),
                        Footer.classList.remove("blur"),
                        Header.classList.remove("blur")),
                        1100 < window.innerWidth && onScroll()
                    }
                }),
                !1
            }),
            MouseHandler(c)
        }
    }
    ,
    g.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    g.send()
}
function LinkPage() {
    var e = DOM.querySelectorAll(".link-blank");
    DOM.querySelectorAll(".link-load, .link-home, .view-details").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault(),
            null != this.dataset.service && null != this.dataset.service && localStorage.setItem("serviceActice", this.dataset.service);
            var t = this.href;
            return Mask.classList.remove("show", "finish"),
            Mask.classList.add("show-page"),
            gsap.to(Container, {
                duration: .4,
                opacity: .5,
                ease: Power0.easeInOut,
                onComplete: function() {
                    window.location = t
                }
            }),
            !1
        })
    }),
    e.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.href;
            return window.open(t, "_blank"),
            !1
        })
    })
}
function subNav() {
    var o = document.querySelectorAll(".sub-nav:not(.release) li a")
      , s = Header.querySelector(".outer-nav.second")
      , i = s.querySelector(".sub-nav");
    o.forEach(function(e) {
        e.addEventListener("click", function() {
            var e = this.getAttribute("data-name")
              , t = document.querySelector(".set-post[data-post='" + e + "']").offsetTop - 70;
            return o.forEach(function(e) {
                e.classList.remove("current")
            }),
            Html.scrollTo({
                top: t,
                left: 0,
                behavior: "smooth"
            }),
            Header.querySelector(".second li a[data-name='" + e + "']").classList.add("current"),
            s.classList.add("fixed"),
            i.classList.add("on-show"),
            setTimeout(function() {
                detectBut()
            }, 300),
            !1
        })
    }),
    OuterNav.querySelector("li:first-child a").classList.add("current"),
    s.querySelector("li:first-child a").classList.add("current")
}
function onChange(e) {
    Container.querySelector(".file-name").html(e.files[0].name)
}
var deferredPrompt, removeURL = function(e, t) {
    var o = e.href
      , s = e.childNodes[0].dataset.title
      , i = e.childNodes[0].dataset.title
      , a = e.childNodes[0].dataset.title;
    changeUrl(o, s, a, i, t, s, a)
}, addURL = function(e, t) {
    var o = e.href
      , s = e.childNodes[0].dataset.title
      , i = e.childNodes[0].dataset.title
      , a = e.childNodes[0].dataset.title;
    changeUrl(o, s, a, i, t, s, a)
};
function ContentLoad() {
    LinkPage(),
    FocusText(),
    NavClickFn(),
    Option(),
    ZoomPic(),
    PrintShare(),
    Search(),
    onScroll();
    Container.getAttribute("id");
    (ProjectDetailsPage || NewsDetailsPage) && (Navigation.querySelector("a.current").classList.add("active"),
    Navigation.querySelector("a.current").classList.remove("current"),
    null != SecondMenu.querySelector("a.current") && (SecondMenu.querySelector("a.current").classList.add("active"),
    SecondMenu.querySelector("a.current").classList.remove("current"))),
    ContactPage || CheckButBg(),
    setTimeout(function() {
        NavMouseOver()
    }, 1500),
    setTimeout(function() {
        Footer.classList.add("show"),
        Header.classList.add("show")
    }, 600),
    LinkPopup.forEach(function(i) {
        i.addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.getAttribute("data-name")
              , o = this.getAttribute("href")
              , s = DOM.querySelector(".details-content");
            return s && s.remove(),
            null != t && addURL(i, t),
            Body.classList.contains("scroll") && 0 == Details && (this.parentElement.classList.add("to-scrollZ"),
            Details = 1),
            OverlayDark.classList.add("show"),
            Body.classList.add("no-scroll"),
            HTML.classList.add("no-scroll"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>'),
            DOM.querySelector(".loadx").style.opacity = "1",
            popupLoad(o),
            !1
        })
    });
    var e = DOM.querySelector(".link-popup.current") || DOM.querySelector(".popup-partner.current") || DOM.querySelector(".link-member.current") || DOM.querySelector(".link-progress.current");
    if (null !== e && setTimeout(function() {
        e.click()
    }, 1e3),
    HomePage)
        setTimeout(function() {
            Wheel.classList.add("show")
        }, 600);
    else {
        var t = Container.querySelectorAll(".title-page h1 .words");
        TweenMax.staggerFromTo(t, 1, {
            opacity: 0,
            transform: "translateX(-20px)"
        }, {
            opacity: 1,
            transform: "none",
            ease: Power2.easeOut,
            delay: .7
        }, .07),
        RightHeader.classList.add("white"),
        Logo.style.cursor = "pointer",
        Logo.addEventListener("click", function() {
            NavLi[0].querySelector("a").click()
        }),
        1100 < window.innerWidth && Footer.classList.add("show")
    }
    if (HomePage) {
        SlidePicture.BusHomeSlide(),
        SlidePicture.ProHomeSlide();
        var o = Container.querySelectorAll(".pic-project-home");
        o && o.forEach(function(e) {
            e.addEventListener("mousedown", function(e) {
                d = e.screenX,
                u = e.screenY
            }),
            e.addEventListener("mouseup", function(e) {
                h = e.screenX,
                v = e.screenY,
                d == h && u == v && this.parentElement.querySelector("a").click()
            })
        }),
        null !== DOM.querySelector(".home-popup") && setTimeout(function() {
            var e = DOM.querySelector(".home-popup").getAttribute("data-href");
            return OverlayDark.classList.add("show"),
            Body.classList.add("no-scroll"),
            HTML.classList.add("no-scroll"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>'),
            DOM.querySelector(".loadx").style.opacity = "1",
            popupLoad(e),
            !1
        }, 1e3)
    }
    if (AboutPage) {
        if (SlidePicture.Sliderprocess(),
        SlidePicture.SliderManager(),
        SlidePicture.SliderAchievement(),
        SlidePicture.SliderEquipMent(),
        LibraryVideo || LibraryAlbum)
            if (SlidePicture.SliderLirabry(),
            LibraryItems)
                LibraryItems.forEach(function(e) {
                    e.addEventListener("mousedown", function(e) {
                        d = e.screenX,
                        u = e.screenY
                    }),
                    e.addEventListener("mouseup", function(e) {
                        h = e.screenX,
                        v = e.screenY,
                        d == h && u == v && this.querySelector("a").click()
                    })
                });
        if (AboutAchieveMent)
            if (BoxAchieve)
                BoxAchieve.forEach(function(e) {
                    e.addEventListener("mousedown", function(e) {
                        d = e.screenX,
                        u = e.screenY
                    }),
                    e.addEventListener("mouseup", function(e) {
                        h = e.screenX,
                        v = e.screenY,
                        d == h && u == v && this.querySelector("img").click()
                    })
                });
        if (BoxValue)
            if (!BoxValue.length % 2 == 0)
                Container.querySelector(".value-list").classList.add("even");
        if (BoxDirects)
            BoxDirects.forEach(function(e) {
                e.addEventListener("mousedown", function(e) {
                    d = e.screenX,
                    u = e.screenY
                }),
                e.addEventListener("mouseup", function(e) {
                    if (h = e.screenX,
                    v = e.screenY,
                    d == h && u == v) {
                        var t = this.getAttribute("data-name")
                          , o = this.querySelector("a").getAttribute("href")
                          , s = DOM.querySelector(".details-content")
                          , i = this.querySelector("h3").textContent
                          , a = this.querySelector(".des-manager p").textContent
                          , r = this.querySelector("img").getAttribute("src")
                          , n = this.querySelector("img").getAttribute("alt")
                          , l = this.querySelector(".text-des-manager").innerHTML
                          , c = AboutManager.offsetTop - 30;
                        Html.scrollTo({
                            top: c,
                            left: 0,
                            behavior: "smooth"
                        }),
                        s && s.remove(),
                        null != t && (window.location.hash = t),
                        OverlayDark.classList.add("show"),
                        Body.classList.add("no-scroll"),
                        HTML.classList.add("no-scroll"),
                        Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>'),
                        DOM.querySelector(".loadx").style.opacity = "1",
                        LoadManager(o, i, a, r, n, l)
                    }
                })
            }),
            1 < window.location.hash.length && setTimeout(function() {
                LocationHash()
            }, 1e3)
    }
    if (ProjectPage) {
        for (var s = ProjectItems.length + 5; 0 <= s; s--)
            s % 6 == 0 && (ProjectItems[s - 1] && ProjectItems[s - 1].classList.add("left"),
            ProjectItems[s - 2] && ProjectItems[s - 2].classList.add("left"),
            ProjectItems[s - 3] && ProjectItems[s - 3].classList.add("left"));
        var r = Container.querySelector(".view-more-pro")
          , i = ProjectList.querySelector(".wrap-project-list");
        if (ProjectItems.length <= 6)
            r.classList.add("display-none");
        else {
            for (s = 6; s < ProjectItems.length; s++)
                ProjectItems[s].style.display = "none";
            var n = i.offsetHeight;
            ProjectList.style.height = n + "px",
            r.addEventListener("click", function() {
                var e = ProjectList.querySelector(".wrap-project-list")
                  , t = e.querySelectorAll(".project-item")
                  , o = Container.querySelector(".form-project-section").offsetTop - 60
                  , s = Container.querySelector(".project-section").offsetTop;
                if (r.classList.contains("hide")) {
                    if (1100 < window.innerWidth)
                        Html.scrollTo({
                            top: o,
                            left: 0,
                            behavior: "smooth"
                        }),
                        setTimeout(function() {
                            ProjectList.style.height = n + "px";
                            for (var e = 6; e < t.length; e++)
                                t[e].classList.remove("on-show")
                        }, 1e3);
                    else {
                        ProjectList.style.height = n + "px";
                        for (i = 6; i < t.length; i++)
                            t[i].classList.remove("on-show")
                    }
                    r.classList.remove("hide")
                } else {
                    for (var i = 6; i < t.length; i++)
                        t[i].style.display = "block";
                    var a = e.offsetHeight;
                    ProjectList.style.height = a + "px",
                    r.classList.add("hide"),
                    Html.scrollTo({
                        top: s + n,
                        left: 0,
                        behavior: "smooth"
                    })
                }
            })
        }
        Container.querySelector(".search-project").addEventListener("click", function(e) {
            e.preventDefault(),
            this.classList.add("pointer-events"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
            DOM.querySelector(".loadx").style.opacity = "1";
            var t = this.getAttribute("data-href")
              , o = ""
              , s = document.getElementById("groups").value;
            "0" != s && (o += "&groups=" + encodeURIComponent(s));
            var i = document.getElementById("years").value;
            "0" != i && (o += "&years=" + encodeURIComponent(i));
            var a = document.getElementById("regions").value;
            "0" != a && (o += "&regions=" + encodeURIComponent(a));
            var r = document.getElementById("status").value;
            return "-1" != r && (o += "&status=" + encodeURIComponent(r)),
            "" != o && (t += "?" + o.substring(1)),
            ProjectLoadList(t),
            !1
        })
    }
    if (ProjectDetailsPage) {
        BoxPictures.forEach(function(e) {
            e.addEventListener("click", function() {
                $(this).find(".zoom").trigger("click")
            })
        });
        for (s = BoxPictures.length + 5; 0 <= s; s--)
            s % 6 == 0 && (BoxPictures[s - 1] && BoxPictures[s - 1].classList.add("left"),
            BoxPictures[s - 2] && BoxPictures[s - 2].classList.add("left"),
            BoxPictures[s - 3] && BoxPictures[s - 3].classList.add("left"))
    }
    if (NewsPage) {
        var a = newslist.querySelector(".news-item:nth-child(1)");
        a.classList.contains("on-show") || a.classList.add("on-show");
        for (s = NewsItem.length + 5; 0 <= s; s--)
            s % 6 == 0 && (NewsItem[s - 1] && NewsItem[s - 1].classList.add("left"),
            NewsItem[s - 2] && NewsItem[s - 2].classList.add("left"),
            NewsItem[s - 3] && NewsItem[s - 3].classList.add("left"));
        r = Container.querySelector(".view-more-pro");
        var l = newslist.querySelector(".wrap-news-list");
        if (NewsItem.length <= 6)
            r.classList.add("display-none");
        else {
            for (s = 6; s < NewsItem.length; s++)
                NewsItem[s].style.display = "none";
            n = l.offsetHeight;
            newslist.style.height = n + "px",
            r.addEventListener("click", function() {
                var e = Container.querySelector(".news-section").offsetTop - 40;
                if (r.classList.contains("hide")) {
                    if (1100 < window.innerWidth)
                        Html.scrollTo({
                            top: e,
                            left: 0,
                            behavior: "smooth"
                        }),
                        setTimeout(function() {
                            newslist.style.height = n + "px"
                        }, 500),
                        setTimeout(function() {
                            for (var e = 6; e < NewsItem.length; e++)
                                NewsItem[e].classList.remove("on-show")
                        }, 1e3);
                    else {
                        newslist.style.height = n + "px";
                        for (t = 6; t < NewsItem.length; t++)
                            NewsItem[t].classList.remove("on-show")
                    }
                    r.classList.remove("hide")
                } else {
                    for (var t = 6; t < NewsItem.length; t++)
                        NewsItem[t].style.display = "block";
                    var o = l.offsetHeight;
                    newslist.style.height = o + "px",
                    r.classList.add("hide"),
                    Html.scrollTo({
                        top: e + n + 25,
                        left: 0,
                        behavior: "smooth"
                    })
                }
            })
        }
    }
    if (NewsDetailsPage) {
        SlidePicture.SliderRelative();
        var d, u, h, v, c = NewsRelative.querySelectorAll(".news-item-relative"), f = NewsRelative.querySelectorAll(".news-item-relative a");
        if (c && c.forEach(function(e) {
            e.addEventListener("mousedown", function(e) {
                d = e.screenX,
                u = e.screenY
            }),
            e.addEventListener("mouseup", function(e) {
                h = e.screenX,
                v = e.screenY,
                d == h && u == v && this.querySelector("a").click()
            })
        }),
        f.forEach(function(i) {
            i.addEventListener("click", function(e) {
                e.preventDefault(),
                c.forEach(function(e) {
                    e.classList.remove("current")
                }),
                this.parentNode.classList.add("current"),
                Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
                DOM.querySelector(".loadx").style.opacity = "1";
                var t = this.getAttribute("data-details")
                  , o = this.getAttribute("href");
                if (addURL(i, t),
                1 == Details) {
                    var s = Container.querySelector(".load-content").offsetTop - 80;
                    Html.scrollTo({
                        top: s,
                        left: 0,
                        behavior: "smooth"
                    }),
                    NewsLoad(o)
                } else
                    NewsLoad(o);
                return !1
            })
        }),
        null !== Container.querySelector(".slide-news-relative .news-item-relative.current"))
            Container.querySelector(".slide-news-relative .news-item-relative.current a").click();
        else
            Container.querySelector(".slide-news-relative .news-item-relative:first-child a").click()
    }
    if (RecruitmentPage) {
        var m = Container.querySelectorAll(".table-recruitment tr")
          , p = Container.querySelector(".file-mark");
        m.forEach(function(e) {
            e.addEventListener("click", function() {
                this.querySelector("a").click()
            })
        }),
        p && p.addEventListener("click", function() {
            this.parentNode.querySelector('input[type="file"]').click()
        })
    }
    if (ServicePage) {
        var L = localStorage.getItem("serviceActice");
        if ("" != L) {
            localStorage.setItem("serviceActice", "");
            var g = $('.service-group[data-service="' + L + '"]').offset().top - 60;
            setTimeout(function() {
                Html.scrollTo({
                    top: g,
                    left: 0,
                    behavior: "smooth"
                })
            }, 1e3)
        }
    }
    ContactPage && Footer.querySelector(".box-footer").remove();
    Body.classList.contains("auto") && 1100 < window.innerWidth && (Main.classList.add("smooth-scroll"),
    DataScroll.classList.add("scroll-content"),
    scrollTranslate())
}
function VideoLoad(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".allvideo").append(e);
            DOM.querySelector(".close-video");
            $(".video-wrap").append(t),
            $(".loadx").fadeOut(400, "linear", function() {
                $(".loadx").remove()
            }),
            $(".close-video").addClass("show"),
            $(".close-video").on("click", function() {
                $(".allvideo").fadeOut(500, "linear", function() {
                    if ($(".overlay-dark").removeClass("show"),
                    $(".allvideo .video-list").remove(),
                    Html.classList.remove("no-scroll"),
                    Body.classList.remove("no-scroll"),
                    $("body").hasClass("scroll") && ScrollBody(),
                    $(".to-scrollV").length) {
                        var e = $(".to-scrollV").offset().top;
                        Xwidth < 1100 && $("html, body").scrollTop(e),
                        $(".to-scrollV").removeClass("to-scrollV")
                    }
                }),
                $(this).removeClass("show")
            })
        }
    })
}
function LoadAPI() {
    var e = document.createElement("script");
    e.src = "https://www.youtube.com/player_api";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}
function turnWheelTouch() {
    doTouch = doWheel = !0
}
function LocationHash() {
    var t = window.location.hash;
    t = t.slice(1);
    var e = Container.querySelector(".news-item-relative a[data-details='" + t + "']")
      , o = Container.querySelector(".link-page a[data-details='" + t + "']")
      , s = Container.querySelector(".link-popup[data-name='" + t + "']")
      , i = Container.querySelector(".slide-pagi a[data-number='" + t + "']");
    e && e.click(),
    o && o.click(),
    s && s.click(),
    i && i.click(),
    BoxNav && BoxNavLiA.forEach(function(e) {
        e.getAttribute("data-page") == t && e.click()
    })
}
document.addEventListener("keydown", function(e) {
    var t = e.keyCode || e.which;
    38 === t && $(".box-nav li.current").prev().trigger("click"),
    40 === t && $(".box-nav li.current").next().trigger("click"),
    27 === t && SearchBut.classList.contains("active") && SearchBut.click()
}),
document.addEventListener("DOMContentLoaded", function() {
    GoTop.addEventListener("click", function() {
        1100 < window.innerWidth && void 0 !== BoxNav ? BoxNavLi[0].click() : Html.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }),
    Container.addEventListener("click", function() {
        $(".search-but").hasClass("active") && ($(".search-form, .search-but").removeClass("active"),
        $(".contact").removeClass("current"))
    }),
    HomePage ? setTimeout(function() {
        0 == LoadSig && (LoadSig = 1,
        Done())
    }, 2e3) : setTimeout(function() {
        Done()
    }, 1e3)
}),
HomePage && ContactPage || window.addEventListener("scroll", function() {
    var s = $(document).scrollTop();
    
    Container.querySelector(".title-page");
    if (1100 < window.innerWidth && (70 <= windscroll ? (Header.classList.add("hide"),
    WhiteHeader.classList.add("show"),
    Wheel.classList.remove("show"),
    RightHeader.classList.remove("white")) : (Header.classList.remove("hide"),
    WhiteHeader.classList.remove("show"),
    Wheel.classList.add("show"),
    RightHeader.classList.add("white"))),
    s > $(window).height() / 2 ? GoTop.classList.add("show") : GoTop.classList.remove("show"),
    OuterNav) {
        var e = Header.querySelector(".outer-nav.second");
        s >= OuterNav.getBoundingClientRect().top + window.scrollY - 40 ? (e.classList.add("fixed"),
        OuterNav.classList.add("fixed")) : (e.classList.remove("fixed"),
        OuterNav.classList.remove("fixed"))
    }
    SetPost = Container.querySelectorAll(".set-post"),
    SetPost && SetPost.forEach(function(e) {
        var t = e.offsetTop - 300;
        if ((o = e.clientHeight) < window.innerHeight)
            var o = window.innerHeight;
        if (t <= s && s <= t + o) {
            if (e.classList.add("active"),
            1 == doWheel)
                document.querySelectorAll(".sub-nav:not(.release) li a").forEach(function(e) {
                    e.classList.remove("current")
                }),
                document.querySelectorAll('.sub-nav:not(.release) li a[data-name="' + e.getAttribute("data-post") + '"]').forEach(function(e) {
                    e.classList.add("current")
                });
            detectBut()
        }
    }),
    windscroll = s
}, {
    passive: !0
}),
window.onorientationchange = ResizeWindows,
$(window).on("orientationchange", function() {
    window.innerWidth <= 1100 && $(".outer-nav.second").length && detectBut()
}),
window.addEventListener("resize", function() {
    if (ResizeWindows(),
    1100 < window.innerWidth) {
        var e = !1;
        if (HomePage)
            DOM.querySelector(".show-text") ? 1 == e && BoxSlide() : BoxSlide(),
            HomeBanner.classList.contains("show-text") && NextBg.click();
        else
            ContactPage || NextBg.click();
        if (AboutPage) {
            var t = Container.querySelector(".slide-equip");
            if (t) {
                var o = t.querySelector(".slidebox-track")
                  , s = t.querySelector(".slidebox-list");
                t.removeAttribute("style"),
                o.removeAttribute("style"),
                s.removeAttribute("style")
            }
        }
        $(".full.dragscroll").length && !$(".img-chart").length && (Html.classList.remove("no-scroll"),
        Body.classList.remove("no-scroll"),
        $(".close-pics").trigger("click")),
        $(".dragscroll").length && (detectMargin(),
        $(".dragscroll").draptouch()),
        Body.classList.contains("auto") && !Body.classList.contains("fullscreen") && (Main.classList.contains("smooth-scroll") || (Main.classList.add("smooth-scroll"),
        DataScroll.classList.add("scroll-content"),
        setTimeout(function() {
            scrollTranslate()
        }, 600)))
    } else {
        HomePage ? e = !1 : ContactPage || NextBg.click(),
        $(".dragscroll").length && (detectMargin(),
        $(".dragscroll").draptouch());
        e = !0;
         $(".outer-nav.second").length && detectBut(),
        Main.classList.contains("smooth-scroll") && (Main.classList.remove("smooth-scroll"),
        Main.removeAttribute("style"),
        DataScroll.classList.remove("scroll-content"),
        DataScroll.removeAttribute("style"),
        DataScroll.style.transform = "translate3d(0,0,0)",
        Body.removeAttribute("style"))
    }
}, 250),
window.onpopstate = function(e) {
    e.preventDefault();
    var t = DOM.querySelector(".httpserver").innerHTML;
    if (null !== history.state) {
        var o = history.state.path;
        history.state.dataName,
        history.state.title,
        o.replace(t, "")
    } else
        o = document.URL;
    null !== RecruitmentPage && (null != DOM.querySelector(".close-popup") ? DOM.querySelector(".close-popup").click() : (DOM.querySelectorAll(".nav a").forEach(function(e) {
        e.href == o && (window.location = o)
    }),
    DOM.querySelectorAll(".link-member").forEach(function(e) {
        e.href == o && e.click()
    }))),
    null !== NewsDetailsPage && (DOM.querySelectorAll(".nav a").forEach(function(e) {
        e.href == o && (window.location = o)
    }),
    DOM.querySelectorAll(".sub-nav a").forEach(function(e) {
        e.href == o && (window.location = o)
    }),
    DOM.querySelectorAll(".news-item-relative a").forEach(function(e) {
        if (e.href == o) {
            e.classList.add("current");
            var t = document.querySelector(".load-content").offsetTop - 110;
            gsap.to("html", {
                duration: .6,
                scrollTop: t,
                onComplete: function() {
                    e.click()
                }
            })
        }
    }))
}
;
var addBtn = document.querySelector(".add-button")
  , closeAdd = document.querySelector(".close-add")
  , installApp = document.querySelector(".install-app");
addBtn && window.addEventListener("beforeinstallprompt", function(e) {
    e.preventDefault(),
    deferredPrompt = e,
    addBtn.classList.add("show"),
    installApp.addEventListener("click", function(e) {
        deferredPrompt.prompt(),
        deferredPrompt.userChoice.then(function(e) {
            "accepted" === e.outcome ? (console.log("User accepted Manifest"),
            addBtn.remove()) : console.log("User dismissed Manifest"),
            deferredPrompt = null
        })
    }),
    closeAdd.addEventListener("click", function(e) {
        e.preventDefault(),
        addBtn.remove()
    })
});
function Option() {
    $(".view-pdf").on("click", function(e) {
        e.preventDefault();
        var a = $(this).attr("href");
        return window.open(a, "_blank"),
        !1
    }),
    $(".library-thumb").on("click", function(e) {
        $(".player").trigger("click")
    }),
    Container.querySelectorAll(".view-album, .zoom-album").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var a = this.getAttribute("href") || this.getAttribute("data-href");
            if (Body.classList.add("no-scroll"),
            HTML.classList.add("no-scroll"),
            OverlayDark.classList.add("show"),
            AllAlbum.classList.add("show"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
            Container.classList.add("blur"),
            Footer.classList.add("blur"),
            Header.classList.add("blur"),
            DOM.querySelector(".loadx").style.opacity = "1",
            ProjectDetailsPage) {
                var l = this.parentNode
                  , t = [].slice.call(l.parentNode.children).indexOf(l);
                AlbumLoad(a, t)
            } else
                AlbumLoad(a, 0);
            return !1
        })
    }),
    $(".view-video").on("click", function(e) {
        e.preventDefault(),
        $(this).parent().addClass("to-scrollV");
        var a, l = $(this).attr("href"), t = $(this).attr("data-embed").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/), o = '<iframe id="VYT" src="https://www.youtube.com/embed/' + (a = t && 11 == t[2].length ? t[2] : "no video found") + "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + a + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
        return Html.classList.add("no-scroll"),
        Body.classList.add("no-scroll"),
        OverlayDark.classList.add("show"),
        $(".allvideo").fadeIn(300, "linear", function() {
            VideoLoad(l, o)
        }),
        !1
    }),
    $(".zoom:not(.zoom-album), .zoom-details").on("click", function() {
        Html.classList.add("no-scroll"),
        Body.classList.add("no-scroll"),
        Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>');
        var e = DOM.querySelector(".loadx");
        e.style.opacity = "1",
        $(".container").addClass("blur"),
        $(".all-pics").addClass("show"),
        $(".all-pics").append('<div class="full" style="display:block"></div>'),
        $(".overlay-dark").addClass("show");
        var a = $(this).parent().find("img").attr("src") || $(this).parent().find("img").attr("data-src") || $(this).attr("data-src")
          , l = $(this).parent().find("h3").text();
        1 <= l.length && $(".all-pics").prepend('<div class="text-length"><h3></h3></div>'),
        $(".all-pics").find(".full").append('<img src ="' + a + '" alt="pic" />'),
        $(".all-pics").find(".full").append("<span></span>"),
        Body.insertAdjacentHTML("beforeend", '<button class="close-pics" href="javascript:void(0);"></button>');
        var t = DOM.querySelector(".close-pics");
        return TweenMax.fromTo(t, .5, {
            opacity: "0"
        }, {
            opacity: "1",
            ease: Power2.easeOut
        }),
        $(".all-pics img").on("load", function() {
            $(".text-length h3").text(l),
            $(".all-pics").addClass("show"),
            Mobile.matches && ($(".full img").addClass("pinch-zoom"),
            $(".pinch-zoom").each(function(e, a) {
                new PinchZoom.default(a,{
                    draggableUnzoomed: !1
                })
            })),
            1 < $(".full img").length && $(".full img").last().remove(),
            TweenMax.to(e, .4, {
                opacity: "0",
                ease: Power2.easeOut,
                onComplete: function() {
                    $(".full img, .text-length").addClass("fadein"),
                    e.remove()
                }
            })
        }),
        $(".full span").on("click", function() {
            $(".close-pics").trigger("click")
        }),
        $(".close-pics").on("click", function() {
            $(".full").fadeOut(300, "linear", function() {
                $(".overlay-dark").removeClass("show"),
                $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(),
                $(".close-pics").remove(),
                $(".all-pics").removeClass("show"),
                Html.classList.remove("no-scroll"),
                Body.classList.remove("no-scroll"),
                $(".container, .header").removeClass("blur")
            })
        }),
        !1
    })
}
function ZoomPic() {
    $("img").on("click", function() {
        if ($(this).hasClass("zoom-pic")) {
            Html.classList.add("no-scroll"),
            Body.classList.add("no-scroll"),
            Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
            DOM.querySelector(".loadx").style.opacity = "1",
            Container.classList.add("blur"),
            Header.classList.add("blur"),
            $(".all-pics").addClass("show"),
            $(".all-pics").append('<div class="full"  style="display:block"></div>'),
            $(".overlay-dark").addClass("show");
            var e = $(this).attr("data-src") || $(this).attr("src");
            if ($(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'),
            $(".all-pics").find(".full").append("<span></span>"),
            $("body").append('<div class="close-pics"></div>'),
            $(".all-pics img").on("load", function() {
                $(".all-pics").addClass("show"),
                Mobile.matches && ($(".full").addClass("pinch-zoom"),
                $(".pinch-zoom").each(function(e, a) {
                    new PinchZoom.default(a,{})
                })),
                1 < $(".full img").length && $(".full img").last().remove();
                var e = DOM.querySelector(".loadx");
                TweenMax.to(e, .6, {
                    opacity: "0",
                    ease: Power2.easeOut,
                    onComplete: function() {
                        $(".close-pics").addClass("goleft"),
                        $(".full img").addClass("fadein"),
                        e.remove()
                    }
                })
            }),
            AboutAchieveMent) {
                var a = AboutAchieveMent.offsetTop + 80;
                Html.scrollTo({
                    top: a,
                    left: 0,
                    behavior: "smooth"
                })
            }
            $(".full span").on("click", function() {
                $(".close-pics").trigger("click")
            }),
            $(".close-pics").on("click", function() {
                $(".loadx").remove(),
                $(".full").fadeOut(300, "linear", function() {
                    $(".all-pics .full,  .all-pics .pinch-zoom-container").remove(),
                    $(".close-pics").remove(),
                    $(".all-pics").removeClass("show"),
                    Container.classList.remove("blur"),
                    Header.classList.remove("blur"),
                    $(".details-content").length ? $(".overlay-dark").removeClass("level-index-in") : (Html.classList.remove("no-scroll"),
                    Body.classList.remove("no-scroll"),
                    $(".overlay-dark").removeClass("show"))
                })
            })
        } else if ($(this).hasClass("zoom-pic-large")) {
            Html.classList.add("no-scroll"),
            Body.classList.add("no-scroll"),
            $(".all-pics").addClass("show"),
            $(".all-pics").append('<div class="full" style="display:block"></div>'),
            $(".details-content").length ? $(".overlay-dark").addClass("level-index-in") : $(".overlay-dark").addClass("show");
            e = $(this).attr("data-src");
            $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'),
            $(".all-pics").find(".full").append("<span></span>"),
            $("body").append('<div class="close-pics"></div>'),
            $(".all-pics img").on("load", function() {
                $(".all-pics").addClass("show"),
                Mobile.matches && ($(".full").addClass("pinch-zoom"),
                $(".pinch-zoom").each(function(e, a) {
                    new PinchZoom.default(a,{})
                })),
                1 < $(".full img").length && $(".full img").last().remove(),
                $(".loadx").fadeOut(400, "linear", function() {
                    $(".full img").addClass("fadein"),
                    $(".loadx").remove()
                })
            }),
            $(".full span").on("click", function() {
                $(".close-pics").trigger("click")
            }),
            $(".close-pics").on("click", function() {
                $(".loadx").remove(),
                $(".full").fadeOut(300, "linear", function() {
                    $(".all-pics .full,  .all-pics .pinch-zoom-container").remove(),
                    $(".close-pics").remove(),
                    $(".all-pics").removeClass("show"),
                    $(".details-content").length ? $(".overlay-dark").removeClass("level-index-in") : (Html.classList.remove("no-scroll"),
                    Body.classList.remove("no-scroll"),
                    $(".overlay-dark").removeClass("show"))
                })
            })
        }
        return !1
    })
}
function detectBut() {
    if (Xwidth <= 1100 && $(".sub-nav li.current").length) {
        var e = $(".sub-nav ul").offset().left
          , a = $(".sub-nav li.current").offset().left
          , l = Xwidth / 2 - $(".sub-nav li.current").width() / 2;
        $(".sub-nav").stop().animate({
            scrollLeft: a - l - e
        }, "slow")
    }
    if (Xwidth <= 1100 && $(".link-page").hasClass("current")) {
        var t = $(".link-page.current").parent().parent()
          , o = (e = $(".news-link").offset().left,
        a = $(".link-page.current").offset().left,
        $(".scroll-slide").width() / 2 - $(".link-page.current").width() / 2);
        $(t).stop().animate({
            scrollLeft: a - o - e
        }, "slow")
    }
}
function PrintShare() {
    var e = $(".save-but");
    $(e).on("click", function() {
        return window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(document.title, window.location.href, "") : window.external && "AddFavorite"in window.external ? window.external.AddFavorite(location.href, document.title) : alert("Nhấn " + (-1 !== navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D để tạo bookmark cho trang này."),
        !1
    }),
    $(".share-but").on("mouseenter", function() {
        $(this).addClass("active")
    }),
    $(".save-but, .print-but").on("mouseenter", function() {
        $(".share-but").removeClass("active")
    }),
    $(".print-box").on("mouseleave", function() {
        $(".share-but").removeClass("active")
    }),
    $(".print-but").on("click", function() {
        Main.classList.contains("smooth-scroll") && (Main.classList.remove("smooth-scroll"),
        DataScroll.classList.remove("scroll-content"),
        DataScroll.removeAttribute("style"),
        Body.removeAttribute("style"),
        DataScroll.style.transform = "none"),
        window.print()
    })
}
if ($(".youtube-video").length && !$("#youtube_js").length) {
    var script = document.createElement("script");
    script.id = "youtube_js",
    script.setAttribute("rel", "preload"),
    script.setAttribute("as", "script"),
    script.src = "https://www.youtube.com/iframe_api",
    document.body.appendChild(script);
    var youTubeId, youTubeUrl = $(".youtube-video").attr("data-embed"), regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/, match = youTubeUrl.match(regExp);
    youTubeId = match && 11 == match[2].length ? match[2] : "no video found";
    var youTube = $(".youtube-video")
      , Source = "https://img.youtube.com/vi/" + youTubeId + "/sddefault.jpg";
    if (Mobile.matches)
        var SRC = '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    else
        SRC = '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=0&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    if ($(youTube).append(SRC),
    $("#youtube_js").length) {
        var player, timer, time_update = 0;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player("VYT",{
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            })
        }
        function onPlayerStateChange(e) {
            switch (e.data) {
            case YT.PlayerState.PLAYING:
                Mobile.matches || $(".control").removeClass("show"),
                $(".bg-video").addClass("hide"),
                $(".play-button").removeClass("show"),
                $("#playpause").attr("data-state", "pause");
                break;
            case YT.PlayerState.PAUSED:
                Mobile.matches || $(".control").addClass("show"),
                $(".bg-video").removeClass("hide"),
                $(".play-button").addClass("show"),
                $("#playpause").attr("data-state", "play");
                break;
            case YT.PlayerState.ENDED:
            }
        }
        function cleanTime() {
            return Math.round(player.getCurrentTime())
        }
        function onPlayerReady(e) {
            if (e.target.mute(),
            $("#mutetoggle").attr("data-state", "unmute"),
            updateTimerDisplay(),
            updateProgressBar(),
            player.pauseVideo(),
            $(".play-button").addClass("show"),
            $("#playpause").attr("data-state", "pause"),
            1 < player.getPlayerState()) {
                var a = player.getVideoData().title;
                $(".youtube-video iframe").attr("title", a)
            }
        }
        function updateTimerDisplay() {
            $("#current-time").text(formatTime(player.getCurrentTime())),
            $("#duration").text(formatTime(player.getDuration()))
        }
        function formatTime(e) {
            e = Math.round(e);
            var a = Math.floor(e / 60)
              , l = e - 60 * a;
            return a + ":" + (l = l < 10 ? "0" + l : l)
        }
        function updateProgressBar() {
            $("#progress-bar").val(player.getCurrentTime() / player.getDuration() * 100)
        }
        $("#progress-bar").on("mouseup touchend", function(e) {
            var a = player.getDuration() * (e.target.value / 100);
            player.seekTo(a),
            $(".bg-video").hasClass("hide") || $(".bg-video").addClass("hide")
        }),
        $("#playpause").bind("click", function() {
            "play" == $(this).attr("data-state") ? (player.playVideo(),
            $(this).attr("data-state", "pause"),
            $(".bg-video").addClass("hide"),
            $(".play-button").removeClass("show")) : (player.pauseVideo(),
            $(this).attr("data-state", "play"),
            $(".play-button").addClass("show"),
            $(".bg-video").removeClass("hide"))
        }),
        $("#mutetoggle").bind("click", function() {
            "unmute" == $(this).attr("data-state") ? (player.unMute(),
            $(this).attr("data-state", "mute")) : (player.mute(),
            $(this).attr("data-state", "unmute"))
        }),
        $("#fullscreen").bind("click", function() {
            "go-fullscreen" == $(this).attr("data-state") ? ($(this).attr("data-state", "cancel-fullscreen"),
            $(".video-youtube-full").addClass("full-frame"),
            $("html, body").addClass("no-scroll fullscreen"),
            iOS ? ($('.group-central[data-name="video-home"]').addClass("fullmode"),
            $(".header, .go-top, .footer").addClass("level-index-out")) : screenfull.request($(".video-youtube-full")[0])) : ($(this).attr("data-state", "go-fullscreen"),
            $(".video-youtube-full").removeClass("full-frame"),
            $("html, body").removeClass("no-scroll fullscreen"),
            iOS ? ($('.group-central[data-name="video-home"]').removeClass("fullmode"),
            $(".header, .go-top, .footer").removeClass("level-index-out")) : screenfull.exit())
        }),
        $(".play-button").on("click", function(e) {
            e.preventDefault(),
            player.playVideo(),
            $(this).removeClass("show"),
            $("#playpause").attr("data-state", "pause"),
            $(".bg-video").addClass("hide"),
            $(".control").addClass("show"),
            $(".video-youtube-full").addClass("playing"),
            clearInterval(time_update),
            time_update = setInterval(function() {
                updateTimerDisplay(),
                updateProgressBar()
            }, 300),
            clearInterval(timer),
            timer = setInterval(function() {
                Mobile.matches || $(".control").removeClass("show")
            }, 5e3)
        }),
        $(".pause-button").on("click", function(e) {
            e.preventDefault(),
            $(".play-button").addClass("show"),
            $("#playpause").attr("data-state", "play"),
            $(".bg-video, .slogan").removeClass("hide"),
            clearInterval(timer),
            Mobile.matches || $(".control").addClass("show"),
            $(".youtube-video").length && player && player.pauseVideo()
        }),
        $(".youtube-video").on("click", function(e) {
            e.preventDefault(),
            $("#playpause").trigger("click")
        }),
        $(".youtube-video, .control").on("mouseenter mousemove", function(e) {
            e.preventDefault(),
            Mobile.matches || $(".control").hasClass("show") || $(".control").addClass("show")
        })
    }
}
