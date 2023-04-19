function onChange(e) {
    document.querySelector(".file-name").innerHTML = e.files[0].name
}
function isNumber(e) {
    var t = e.which ? e.which : e.keyCode;
    return !(46 != t && 31 < t && (t < 48 || 57 < t)) || (e.returnValue = !1)
}
function serialize(e) {
    if (e && "FORM" === e.nodeName) {
        var t, r, n = [];
        for (t = e.elements.length - 1; 0 <= t; t -= 1)
            if ("" !== e.elements[t].name)
                switch (e.elements[t].nodeName) {
                case "INPUT":
                    switch (e.elements[t].type) {
                    case "text":
                    case "tel":
                    case "email":
                    case "hidden":
                    case "password":
                    case "button":
                    case "reset":
                    case "submit":
                        n.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                        break;
                    case "checkbox":
                    case "radio":
                        e.elements[t].checked && n.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                    }
                    break;
                case "file":
                    break;
                case "TEXTAREA":
                    n.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                    break;
                case "SELECT":
                    switch (e.elements[t].type) {
                    case "select-one":
                        n.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                        break;
                    case "select-multiple":
                        for (r = e.elements[t].options.length - 1; 0 <= r; r -= 1)
                            e.elements[t].options[r].selected && n.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].options[r].value))
                    }
                    break;
                case "BUTTON":
                    switch (e.elements[t].type) {
                    case "reset":
                    case "submit":
                    case "button":
                        n.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                    }
                }
        return n.join("&")
    }
}
function hideerror() {
    document.querySelectorAll(".formError").forEach(function(e) {
        e.remove()
    })
}
function hidemsg() {
    null != document.querySelector(".contact-success") && document.querySelector(".contact-success").remove(),
    null != document.querySelector(".register-success") && document.querySelector(".register-success").remove()
}
function checkEmail(e) {
    var t = document.getElementById(e);
    return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t.value)
}
function checkNull(e, t, r, n, m) {
    var o = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" != o && o != r)
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = t;
    else {
        var c = document.createElement("div");
        c.className = "nameformError parentFormfrm_contact formError";
        var d = document.createElement("div");
        d.className = "formErrorContent",
        d.id = "error_" + e,
        d.innerHTML = t,
        c.appendChild(d),
        document.getElementById(e).after(c)
    }
    return !1
}
function checkPhone(e, t, r, n, m) {
    var o = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == o || o == r || o.length < 10 || 11 < o.length) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var c = document.createElement("div");
            c.className = "nameformError parentFormfrm_contact formError";
            var d = document.createElement("div");
            d.className = "formErrorContent",
            d.id = "error_" + e,
            d.innerHTML = t,
            c.appendChild(d),
            document.getElementById(e).after(c)
        }
        return !1
    }
    return !0
}
function checkMail(e, t, r, n, m) {
    if (checkEmail(e))
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = t;
    else {
        var o = document.createElement("div");
        o.className = "nameformError parentFormfrm_contact formError";
        var c = document.createElement("div");
        c.className = "formErrorContent",
        c.id = "error_" + e,
        c.innerHTML = t,
        o.appendChild(c),
        document.getElementById(e).after(o)
    }
    return !1
}
function checkCaptcha(e, t, r, n, m) {
    if ((null != document.getElementById(e) ? document.getElementById(e).value.trim() : "") == (null != document.getElementById(e + "_bk") ? document.getElementById(e + "_bk").value.trim() : ""))
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = t;
    else {
        var o = document.createElement("div");
        o.className = "nameformError parentFormfrm_contact formError";
        var c = document.createElement("div");
        c.className = "formErrorContent",
        c.id = "error_" + e,
        c.innerHTML = t,
        o.appendChild(c),
        document.getElementById(e).after(o)
    }
    return !1
}
function checkNullTwo(e, t, r, n, m, o, c) {
    var d = null != document.getElementById(e) ? document.getElementById(e).value.trim() : ""
      , l = null != document.getElementById(t) ? document.getElementById(t).value.trim() : "";
    if ("" == d || d == n || "" == l || l == m) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = r;
        else {
            var a = document.createElement("div");
            a.className = "nameformError parentFormfrm_contact formError";
            var u = document.createElement("div");
            u.className = "formErrorContent",
            u.id = "error_" + e,
            u.innerHTML = r,
            a.appendChild(u),
            document.getElementById(e).after(a)
        }
        return !1
    }
}
function checkSelect(e, t, r, n, m) {
    var o = null != document.getElementById(e) ? document.getElementById(e).value : "";
    if ("" != o && o != r && 0 != o)
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = t;
    else {
        var c = document.createElement("div");
        c.className = "nameformError parentFormfrm_contact formError";
        var d = document.createElement("div");
        d.className = "formErrorContent",
        d.id = "error_" + e,
        d.innerHTML = t,
        c.appendChild(d),
        document.getElementById(e).after(c)
    }
    return !1
}
function checkComment(e, t, r, n, m, o) {
    var c = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if (1 != (null != document.getElementById(t) && document.getElementById(t).checked) || "" != c && c != n)
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = r;
    else {
        var d = document.createElement("div");
        d.className = "nameformError parentFormfrm_contact formError";
        var l = document.createElement("div");
        l.className = "formErrorContent",
        l.id = "error_" + e,
        l.innerHTML = r,
        d.appendChild(l),
        document.getElementById(e).after(d)
    }
    return !1
}
function checkNhucau(e, t, r, n, m, o) {
    var c = null != document.getElementById(e) && document.getElementById(e).checked;
    if (0 != (null != document.getElementById(t) && document.getElementById(t).checked) || 0 != c)
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = r;
    else {
        var d = document.createElement("div");
        d.className = "nameformError parentFormfrm_contact formError";
        var l = document.createElement("div");
        l.className = "formErrorContent",
        l.id = "error_" + e,
        l.innerHTML = r,
        d.appendChild(l),
        document.getElementById(e).after(d)
    }
    return !1
}
function checkCheckbox(e, t, r, n, m) {
    var o = !1;
    if (document.querySelectorAll("." + e).forEach(function(e) {
        1 == e.checked && (o = !0)
    }),
    0 != o)
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = t;
    else {
        var c = document.createElement("div");
        c.className = "nameformError parentFormfrm_contact formError";
        var d = document.createElement("div");
        d.className = "formErrorContent",
        d.id = "error_" + e,
        d.innerHTML = t,
        c.appendChild(d),
        document.querySelector(".listcheckbox").after(c)
    }
    return !1
}
function checkQuocTich(e, t, r, n, m) {
    if (0 != (null != document.getElementById(e) && document.getElementById(e).checked))
        return !0;
    if (null != document.getElementById("error_" + e))
        document.getElementById("error_" + e).innerHTML = t;
    else {
        var o = document.createElement("div");
        o.className = "nameformError parentFormfrm_contact formError";
        var c = document.createElement("div");
        c.className = "formErrorContent",
        c.id = "error_" + e,
        c.innerHTML = t,
        o.appendChild(c),
        document.getElementById(e).after(o)
    }
    return !1
}
function checkCMND(e, t, r, n, m) {
    var o = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == o || o == r || 9 != o.length && 12 != o.length) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var c = document.createElement("div");
            c.className = "nameformError parentFormfrm_contact formError";
            var d = document.createElement("div");
            d.className = "formErrorContent",
            d.id = "error_" + e,
            d.innerHTML = t,
            c.appendChild(d),
            document.getElementById(e).after(c)
        }
        return !1
    }
    return !0
}
function checkPassport(e, t, r, n, m) {
    var o = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == o || o == r || 12 < o.length) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var c = document.createElement("div");
            c.className = "nameformError parentFormfrm_contact formError";
            var d = document.createElement("div");
            d.className = "formErrorContent",
            d.id = "error_" + e,
            d.innerHTML = t,
            c.appendChild(d),
            document.getElementById(e).after(c)
        }
        return !1
    }
    return !0
}
function parseDate(e) {
    var t = e.split("/");
    return new Date(t[2],t[1],t[0])
}
function checkDate(e, t, r, n, m, o) {
    var c = null != document.getElementById(e) ? document.getElementById(e).value.trim() : ""
      , d = c.split("/");
    null != d[1] && null != d[2] || (null != document.getElementById("error_" + e) ? document.getElementById("error_" + e).innerHTML = t : ((s = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
    (E = document.createElement("div")).className = "formErrorContent",
    E.id = "error_" + e,
    E.innerHTML = t,
    s.appendChild(E),
    document.getElementById(e).after(s)));
    var l = d[0] + "/" + d[1] + "/" + (parseInt(d[2]) + 18)
      , a = new Date
      , u = parseDate(l).getTime()
      , i = parseDate(a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear()).getTime();
    if ("" == c || c == r) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else
            (s = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
            (E = document.createElement("div")).className = "formErrorContent",
            E.id = "error_" + e,
            E.innerHTML = t,
            s.appendChild(E),
            document.getElementById(e).after(s);
        return !1
    }
    if (i < u) {
        var s, E;
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = o;
        else
            (s = document.createElement("div")).className = "nameformError parentFormfrm_contact formError",
            (E = document.createElement("div")).className = "formErrorContent",
            E.id = "error_" + e,
            E.innerHTML = o,
            s.appendChild(E),
            document.getElementById(e).after(s);
        return !1
    }
    return !0
}
var httpserver = null
function _scrollToElement(e, t) {
    var r = Math.round(e.getBoundingClientRect().top);
    scrollToY(document.scrollingElement.scrollTop + r, t)
}
if (null != document.getElementById("contact_form")) {
    function validatecontact() {
        hidemsg();
        var e = !0
          , t = checkNull("name", document.getElementById("name").getAttribute("data-error"), document.getElementById("name").getAttribute("data-default"), "40", "-270")
          , r = checkNull("comments", document.getElementById("comments").getAttribute("data-error"), document.getElementById("comments").getAttribute("data-default"), "40", "-270")
          , n = checkPhone("phone", document.getElementById("phone").getAttribute("data-error"), document.getElementById("phone").getAttribute("data-default"), "40", "-270")
          , m = checkMail("email", document.getElementById("email").getAttribute("data-error"), document.getElementById("email").getAttribute("data-default"), "40", "-270");
        return t && r && n && m || (e = !1,
        setTimeout(hideerror, 5e3)),
        e
    }
    document.getElementById("btn-contact-submit").addEventListener("click", function(e) {
        if (e.preventDefault(),
        1 != validatecontact())
            return document.querySelectorAll(".formError").forEach(function(e) {
                e.addEventListener("click", function(e) {
                    this.remove()
                })
            }),
            !1;
        document.getElementById("btn-contact-submit").setAttribute("disabled", "disabled"),
        document.getElementById("btn-contact-submit").style.pointerEvents = "none";
        var t = document.createElement("div");
        t.className = "loadx",
        t.style.display = "block",
        document.body.after(t);
        null != document.getElementById("checkpage") && document.getElementById("checkpage").getAttribute("value");
        var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        r.open("POST", httpserver + "send-contact.html", !0);
        var n = serialize(document.forms.contact_form);
        return r.onreadystatechange = function() {
            if (4 == r.readyState && 200 == r.status) {
                var e, t = JSON.parse(r.responseText);
                if (document.querySelector(".loadx").remove(),
                "200" == t.status)
                    document.getElementById("contact_form").reset(),
                    (e = document.createElement("div")).className = "contact-success color-blue",
                    e.innerHTML = t.message,
                    document.querySelectorAll(".holder").forEach(function(e) {
                        e.classList.remove("hide")
                    });
                else
                    (e = document.createElement("div")).className = "contact-success color-red",
                    e.innerHTML = t.message;
                document.querySelector(".overlay-dark").after(e),
                grecaptcha.reset(),
                document.getElementById("btn-contact-submit").removeAttribute("disabled"),
                document.getElementById("btn-contact-submit").style.pointerEvents = "auto",
                setTimeout(hidemsg, 5e3)
            }
        }
        ,
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        r.send(n),
        !1
    }),
    null != document.getElementById("phone") && document.getElementById("phone").addEventListener("keypress", isNumber),
    document.getElementById("contact_form").addEventListener("keydown", function(e) {
        document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btn-recruitment-submit").click()
    })
}
if (null != document.getElementById("recruitment-send")) {
    function validaterecruitment() {
        hidemsg();
        var e = !0
          , t = checkNull("namerecruitment", document.getElementById("namerecruitment").getAttribute("data-error"), document.getElementById("namerecruitment").getAttribute("data-default"), "40", "-270")
          , r = checkPhone("phonerecruitment", document.getElementById("phonerecruitment").getAttribute("data-error"), document.getElementById("phonerecruitment").getAttribute("data-default"), "40", "-270");
        if (email = checkMail("emailrecruitment", document.getElementById("emailrecruitment").getAttribute("data-error"), document.getElementById("emailrecruitment").getAttribute("data-default"), "40", "-270"),
        !t || !r || !email) {
            var n = null != document.querySelector(".career-form") ? document.querySelector(".career-form") : null;
            null != n && _scrollToElement(n, 1e3),
            e = !1,
            setTimeout(hideerror, 5e3)
        }
        return e
    }
    function stopUpload(e) {
        var t;
        (document.querySelector(".loadx").remove(),
        "200" == e.status) ? ((t = document.createElement("div")).className = "contact-success color-blue",
        t.innerHTML = e.message,
        document.getElementById("recruitment-send").reset(),
        document.querySelectorAll(".holder").forEach(function(e) {
            e.classList.remove("hide")
        })) : ((t = document.createElement("div")).className = "contact-success color-red",
        t.innerHTML = e.message);
        return document.getElementById("fileInput").value = "",
        document.querySelector(".file-name").innerHTML = document.querySelector(".file-name").getAttribute("data-default"),
        document.querySelector(".overlay-dark").after(t),
        document.getElementById("btn-recruitment-submit").removeAttribute("disabled"),
        document.getElementById("btn-recruitment-submit").style.pointerEvents = "auto",
        setTimeout(hidemsg, 5e3),
        !0
    }
    document.getElementById("btn-recruitment-submit").addEventListener("click", function(e) {
        if (e.preventDefault(),
        1 != validaterecruitment())
            return document.querySelectorAll(".formError").forEach(function(e) {
                e.addEventListener("click", function(e) {
                    this.remove()
                })
            }),
            !1;
        document.getElementById("btn-recruitment-submit").setAttribute("disabled", "disabled"),
        document.getElementById("btn-recruitment-submit").style.pointerEvents = "none";
        var t = document.createElement("div");
        return t.className = "loadx",
        t.style.display = "block",
        document.body.after(t),
        document.getElementById("recruitment-send").submit(),
        !1
    }),
    null != document.getElementById("phonerecruitment") && document.getElementById("phonerecruitment").addEventListener("keypress", isNumber),
    document.getElementById("recruitment-send").addEventListener("keydown", function(e) {
        document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btn-recruitment-submit").click()
    })
}
if (null != document.getElementById("register_form")) {
    function validateregister() {
        hidemsg();
        var e = !0;
        if (email = checkMail("emailregister", document.getElementById("emailregister").getAttribute("data-error"), document.getElementById("emailregister").getAttribute("data-default"), "40", "-270"),
        !email) {
            var t = null != document.querySelector(".register-form") ? document.querySelector(".register-form") : null;
            null != t && _scrollToElement(t, 1e3),
            e = !1,
            setTimeout(hideerror, 5e3)
        }
        return e
    }
    document.getElementById("btn-register-submit").addEventListener("click", function(e) {
        if (e.preventDefault(),
        1 != validateregister())
            return document.querySelectorAll(".formError").forEach(function(e) {
                e.addEventListener("click", function(e) {
                    this.remove()
                })
            }),
            !1;
        document.getElementById("btn-register-submit").setAttribute("disabled", "disabled"),
        document.getElementById("btn-register-submit").style.pointerEvents = "none";
        var t = document.createElement("div");
        t.className = "loadx",
        t.style.display = "block",
        document.body.after(t);
        var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        r.open("POST", httpserver + "send-register.html", !0);
        var n = serialize(document.forms.register_form);
        return r.onreadystatechange = function() {
            if (4 == r.readyState && 200 == r.status) {
                var e, t = JSON.parse(r.responseText);
                if (document.querySelector(".loadx").remove(),
                "200" == t.status)
                    document.getElementById("register_form").reset(),
                    (e = document.createElement("div")).className = "contact-success color-blue",
                    e.innerHTML = t.message,
                    document.querySelector(".holder").classList.remove("hide");
                else
                    document.getElementById("register_form").reset(),
                    (e = document.createElement("div")).className = "contact-success color-red",
                    e.innerHTML = t.message;
                document.querySelector(".overlay-dark").after(e),
                document.getElementById("btn-register-submit").removeAttribute("disabled"),
                document.getElementById("btn-register-submit").style.pointerEvents = "auto",
                setTimeout(hidemsg, 5e3)
            }
        }
        ,
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        r.send(n),
        !1
    }),
    null != document.getElementById("phoneregister") && document.getElementById("phoneregister").addEventListener("keypress", isNumber),
    document.getElementById("register_form").addEventListener("keydown", function(e) {
        return e.preventDefault(),
        13 === e.keyCode && document.getElementById("btn-register-submit").click(),
        !1
    })
}
