function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequire4232"];
parcelRequire.register("gq5UB", function(module, exports) {

$parcel$export(module.exports, "getFCP", function () { return $bf43a9099f5c60c9$export$52489892712e8192; });
$parcel$export(module.exports, "getCLS", function () { return $bf43a9099f5c60c9$export$fc6227831ee7c7; });
$parcel$export(module.exports, "getFID", function () { return $bf43a9099f5c60c9$export$134ed2977d320dfd; });
$parcel$export(module.exports, "getLCP", function () { return $bf43a9099f5c60c9$export$da982ced0ff8a670; });
$parcel$export(module.exports, "getTTFB", function () { return $bf43a9099f5c60c9$export$6e8eea9a35032c92; });
var $bf43a9099f5c60c9$var$e, $bf43a9099f5c60c9$var$t, $bf43a9099f5c60c9$var$n, $bf43a9099f5c60c9$var$i, $bf43a9099f5c60c9$var$r = function(e, t) {
    return {
        name: e,
        value: void 0 === t ? -1 : t,
        delta: 0,
        entries: [],
        id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
    };
}, $bf43a9099f5c60c9$var$a = function(e, t) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
            var n = new PerformanceObserver(function(e) {
                return e.getEntries().map(t);
            });
            return n.observe({
                type: e,
                buffered: !0
            }), n;
        }
    } catch (e) {}
}, $bf43a9099f5c60c9$var$o = function(e, t) {
    var n = function n(i) {
        "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
    };
    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
}, $bf43a9099f5c60c9$var$u = function(e) {
    addEventListener("pageshow", function(t) {
        t.persisted && e(t);
    }, !0);
}, $bf43a9099f5c60c9$var$c = function(e, t, n) {
    var i;
    return function(r) {
        t.value >= 0 && (r || n) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)));
    };
}, $bf43a9099f5c60c9$var$f = -1, $bf43a9099f5c60c9$var$s = function() {
    return "hidden" === document.visibilityState ? 0 : 1 / 0;
}, $bf43a9099f5c60c9$var$m = function() {
    $bf43a9099f5c60c9$var$o(function(e) {
        var t = e.timeStamp;
        $bf43a9099f5c60c9$var$f = t;
    }, !0);
}, $bf43a9099f5c60c9$var$v = function() {
    return $bf43a9099f5c60c9$var$f < 0 && ($bf43a9099f5c60c9$var$f = $bf43a9099f5c60c9$var$s(), $bf43a9099f5c60c9$var$m(), $bf43a9099f5c60c9$var$u(function() {
        setTimeout(function() {
            $bf43a9099f5c60c9$var$f = $bf43a9099f5c60c9$var$s(), $bf43a9099f5c60c9$var$m();
        }, 0);
    })), {
        get firstHiddenTime () {
            return $bf43a9099f5c60c9$var$f;
        }
    };
}, $bf43a9099f5c60c9$export$52489892712e8192 = function(e, t) {
    var n, i = $bf43a9099f5c60c9$var$v(), o = $bf43a9099f5c60c9$var$r("FCP"), f = function(e) {
        "first-contentful-paint" === e.name && (m && m.disconnect(), e.startTime < i.firstHiddenTime && (o.value = e.startTime, o.entries.push(e), n(!0)));
    }, s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], m = s ? null : $bf43a9099f5c60c9$var$a("paint", f);
    (s || m) && (n = $bf43a9099f5c60c9$var$c(e, o, t), s && f(s), $bf43a9099f5c60c9$var$u(function(i) {
        o = $bf43a9099f5c60c9$var$r("FCP"), n = $bf43a9099f5c60c9$var$c(e, o, t), requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                o.value = performance.now() - i.timeStamp, n(!0);
            });
        });
    }));
}, $bf43a9099f5c60c9$var$p = !1, $bf43a9099f5c60c9$var$l = -1, $bf43a9099f5c60c9$export$fc6227831ee7c7 = function(e, t) {
    $bf43a9099f5c60c9$var$p || ($bf43a9099f5c60c9$export$52489892712e8192(function(e) {
        $bf43a9099f5c60c9$var$l = e.value;
    }), $bf43a9099f5c60c9$var$p = !0);
    var n, i = function(t) {
        $bf43a9099f5c60c9$var$l > -1 && e(t);
    }, f = $bf43a9099f5c60c9$var$r("CLS", 0), s = 0, m = [], v = function(e) {
        if (!e.hadRecentInput) {
            var t = m[0], i = m[m.length - 1];
            s && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (s += e.value, m.push(e)) : (s = e.value, m = [
                e
            ]), s > f.value && (f.value = s, f.entries = m, n());
        }
    }, h = $bf43a9099f5c60c9$var$a("layout-shift", v);
    h && (n = $bf43a9099f5c60c9$var$c(i, f, t), $bf43a9099f5c60c9$var$o(function() {
        h.takeRecords().map(v), n(!0);
    }), $bf43a9099f5c60c9$var$u(function() {
        s = 0, $bf43a9099f5c60c9$var$l = -1, f = $bf43a9099f5c60c9$var$r("CLS", 0), n = $bf43a9099f5c60c9$var$c(i, f, t);
    }));
}, $bf43a9099f5c60c9$var$T = {
    passive: !0,
    capture: !0
}, $bf43a9099f5c60c9$var$y = new Date, $bf43a9099f5c60c9$var$g = function(i, r) {
    $bf43a9099f5c60c9$var$e || ($bf43a9099f5c60c9$var$e = r, $bf43a9099f5c60c9$var$t = i, $bf43a9099f5c60c9$var$n = new Date, $bf43a9099f5c60c9$var$w(removeEventListener), $bf43a9099f5c60c9$var$E());
}, $bf43a9099f5c60c9$var$E = function() {
    if ($bf43a9099f5c60c9$var$t >= 0 && $bf43a9099f5c60c9$var$t < $bf43a9099f5c60c9$var$n - $bf43a9099f5c60c9$var$y) {
        var r = {
            entryType: "first-input",
            name: $bf43a9099f5c60c9$var$e.type,
            target: $bf43a9099f5c60c9$var$e.target,
            cancelable: $bf43a9099f5c60c9$var$e.cancelable,
            startTime: $bf43a9099f5c60c9$var$e.timeStamp,
            processingStart: $bf43a9099f5c60c9$var$e.timeStamp + $bf43a9099f5c60c9$var$t
        };
        $bf43a9099f5c60c9$var$i.forEach(function(e) {
            e(r);
        }), $bf43a9099f5c60c9$var$i = [];
    }
}, $bf43a9099f5c60c9$var$S = function(e) {
    if (e.cancelable) {
        var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
        "pointerdown" == e.type ? function(e, t) {
            var n = function() {
                $bf43a9099f5c60c9$var$g(e, t), r();
            }, i = function() {
                r();
            }, r = function() {
                removeEventListener("pointerup", n, $bf43a9099f5c60c9$var$T), removeEventListener("pointercancel", i, $bf43a9099f5c60c9$var$T);
            };
            addEventListener("pointerup", n, $bf43a9099f5c60c9$var$T), addEventListener("pointercancel", i, $bf43a9099f5c60c9$var$T);
        }(t, e) : $bf43a9099f5c60c9$var$g(t, e);
    }
}, $bf43a9099f5c60c9$var$w = function(e) {
    [
        "mousedown",
        "keydown",
        "touchstart",
        "pointerdown"
    ].forEach(function(t) {
        return e(t, $bf43a9099f5c60c9$var$S, $bf43a9099f5c60c9$var$T);
    });
}, $bf43a9099f5c60c9$export$134ed2977d320dfd = function(n, f) {
    var s, m = $bf43a9099f5c60c9$var$v(), d = $bf43a9099f5c60c9$var$r("FID"), p = function(e) {
        e.startTime < m.firstHiddenTime && (d.value = e.processingStart - e.startTime, d.entries.push(e), s(!0));
    }, l = $bf43a9099f5c60c9$var$a("first-input", p);
    s = $bf43a9099f5c60c9$var$c(n, d, f), l && $bf43a9099f5c60c9$var$o(function() {
        l.takeRecords().map(p), l.disconnect();
    }, !0), l && $bf43a9099f5c60c9$var$u(function() {
        var a;
        d = $bf43a9099f5c60c9$var$r("FID"), s = $bf43a9099f5c60c9$var$c(n, d, f), $bf43a9099f5c60c9$var$i = [], $bf43a9099f5c60c9$var$t = -1, $bf43a9099f5c60c9$var$e = null, $bf43a9099f5c60c9$var$w(addEventListener), a = p, $bf43a9099f5c60c9$var$i.push(a), $bf43a9099f5c60c9$var$E();
    });
}, $bf43a9099f5c60c9$var$b = {}, $bf43a9099f5c60c9$export$da982ced0ff8a670 = function(e, t) {
    var n, i = $bf43a9099f5c60c9$var$v(), f = $bf43a9099f5c60c9$var$r("LCP"), s = function(e) {
        var t = e.startTime;
        t < i.firstHiddenTime && (f.value = t, f.entries.push(e), n());
    }, m = $bf43a9099f5c60c9$var$a("largest-contentful-paint", s);
    if (m) {
        n = $bf43a9099f5c60c9$var$c(e, f, t);
        var d = function() {
            $bf43a9099f5c60c9$var$b[f.id] || (m.takeRecords().map(s), m.disconnect(), $bf43a9099f5c60c9$var$b[f.id] = !0, n(!0));
        };
        [
            "keydown",
            "click"
        ].forEach(function(e) {
            addEventListener(e, d, {
                once: !0,
                capture: !0
            });
        }), $bf43a9099f5c60c9$var$o(d, !0), $bf43a9099f5c60c9$var$u(function(i) {
            f = $bf43a9099f5c60c9$var$r("LCP"), n = $bf43a9099f5c60c9$var$c(e, f, t), requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    f.value = performance.now() - i.timeStamp, $bf43a9099f5c60c9$var$b[f.id] = !0, n(!0);
                });
            });
        });
    }
}, $bf43a9099f5c60c9$export$6e8eea9a35032c92 = function(e) {
    var t, n = $bf43a9099f5c60c9$var$r("TTFB");
    t = function() {
        try {
            var t = performance.getEntriesByType("navigation")[0] || function() {
                var e = performance.timing, t = {
                    entryType: "navigation",
                    startTime: 0
                };
                for(var n in e)"navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                return t;
            }();
            if (n.value = n.delta = t.responseStart, n.value < 0 || n.value > performance.now()) return;
            n.entries = [
                t
            ], e(n);
        } catch (e) {}
    }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("load", function() {
        return setTimeout(t, 0);
    });
};

});


//# sourceMappingURL=web-vitals.e5c9a779.js.map
