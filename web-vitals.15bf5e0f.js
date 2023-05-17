(function () {
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
parcelRequire.register("hKXWV", function(module, exports) {

$parcel$export(module.exports, "getFCP", function () { return $ced53c4117432d2d$export$52489892712e8192; });
$parcel$export(module.exports, "getCLS", function () { return $ced53c4117432d2d$export$fc6227831ee7c7; });
$parcel$export(module.exports, "getFID", function () { return $ced53c4117432d2d$export$134ed2977d320dfd; });
$parcel$export(module.exports, "getLCP", function () { return $ced53c4117432d2d$export$da982ced0ff8a670; });
$parcel$export(module.exports, "getTTFB", function () { return $ced53c4117432d2d$export$6e8eea9a35032c92; });
var $ced53c4117432d2d$var$e, $ced53c4117432d2d$var$t, $ced53c4117432d2d$var$n, $ced53c4117432d2d$var$i, $ced53c4117432d2d$var$r = function(e, t) {
    return {
        name: e,
        value: void 0 === t ? -1 : t,
        delta: 0,
        entries: [],
        id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
    };
}, $ced53c4117432d2d$var$a = function(e, t) {
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
}, $ced53c4117432d2d$var$o = function(e, t) {
    var n = function n(i) {
        "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
    };
    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
}, $ced53c4117432d2d$var$u = function(e) {
    addEventListener("pageshow", function(t) {
        t.persisted && e(t);
    }, !0);
}, $ced53c4117432d2d$var$c = function(e, t, n) {
    var i;
    return function(r) {
        t.value >= 0 && (r || n) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)));
    };
}, $ced53c4117432d2d$var$f = -1, $ced53c4117432d2d$var$s = function() {
    return "hidden" === document.visibilityState ? 0 : 1 / 0;
}, $ced53c4117432d2d$var$m = function() {
    $ced53c4117432d2d$var$o(function(e) {
        var t = e.timeStamp;
        $ced53c4117432d2d$var$f = t;
    }, !0);
}, $ced53c4117432d2d$var$v = function() {
    return $ced53c4117432d2d$var$f < 0 && ($ced53c4117432d2d$var$f = $ced53c4117432d2d$var$s(), $ced53c4117432d2d$var$m(), $ced53c4117432d2d$var$u(function() {
        setTimeout(function() {
            $ced53c4117432d2d$var$f = $ced53c4117432d2d$var$s(), $ced53c4117432d2d$var$m();
        }, 0);
    })), {
        get firstHiddenTime () {
            return $ced53c4117432d2d$var$f;
        }
    };
}, $ced53c4117432d2d$export$52489892712e8192 = function(e, t) {
    var n, i = $ced53c4117432d2d$var$v(), o = $ced53c4117432d2d$var$r("FCP"), f = function(e) {
        "first-contentful-paint" === e.name && (m && m.disconnect(), e.startTime < i.firstHiddenTime && (o.value = e.startTime, o.entries.push(e), n(!0)));
    }, s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], m = s ? null : $ced53c4117432d2d$var$a("paint", f);
    (s || m) && (n = $ced53c4117432d2d$var$c(e, o, t), s && f(s), $ced53c4117432d2d$var$u(function(i) {
        o = $ced53c4117432d2d$var$r("FCP"), n = $ced53c4117432d2d$var$c(e, o, t), requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                o.value = performance.now() - i.timeStamp, n(!0);
            });
        });
    }));
}, $ced53c4117432d2d$var$p = !1, $ced53c4117432d2d$var$l = -1, $ced53c4117432d2d$export$fc6227831ee7c7 = function(e, t) {
    $ced53c4117432d2d$var$p || ($ced53c4117432d2d$export$52489892712e8192(function(e) {
        $ced53c4117432d2d$var$l = e.value;
    }), $ced53c4117432d2d$var$p = !0);
    var n, i = function(t) {
        $ced53c4117432d2d$var$l > -1 && e(t);
    }, f = $ced53c4117432d2d$var$r("CLS", 0), s = 0, m = [], v = function(e) {
        if (!e.hadRecentInput) {
            var t = m[0], i = m[m.length - 1];
            s && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (s += e.value, m.push(e)) : (s = e.value, m = [
                e
            ]), s > f.value && (f.value = s, f.entries = m, n());
        }
    }, h = $ced53c4117432d2d$var$a("layout-shift", v);
    h && (n = $ced53c4117432d2d$var$c(i, f, t), $ced53c4117432d2d$var$o(function() {
        h.takeRecords().map(v), n(!0);
    }), $ced53c4117432d2d$var$u(function() {
        s = 0, $ced53c4117432d2d$var$l = -1, f = $ced53c4117432d2d$var$r("CLS", 0), n = $ced53c4117432d2d$var$c(i, f, t);
    }));
}, $ced53c4117432d2d$var$T = {
    passive: !0,
    capture: !0
}, $ced53c4117432d2d$var$y = new Date, $ced53c4117432d2d$var$g = function(i, r) {
    $ced53c4117432d2d$var$e || ($ced53c4117432d2d$var$e = r, $ced53c4117432d2d$var$t = i, $ced53c4117432d2d$var$n = new Date, $ced53c4117432d2d$var$w(removeEventListener), $ced53c4117432d2d$var$E());
}, $ced53c4117432d2d$var$E = function() {
    if ($ced53c4117432d2d$var$t >= 0 && $ced53c4117432d2d$var$t < $ced53c4117432d2d$var$n - $ced53c4117432d2d$var$y) {
        var r = {
            entryType: "first-input",
            name: $ced53c4117432d2d$var$e.type,
            target: $ced53c4117432d2d$var$e.target,
            cancelable: $ced53c4117432d2d$var$e.cancelable,
            startTime: $ced53c4117432d2d$var$e.timeStamp,
            processingStart: $ced53c4117432d2d$var$e.timeStamp + $ced53c4117432d2d$var$t
        };
        $ced53c4117432d2d$var$i.forEach(function(e) {
            e(r);
        }), $ced53c4117432d2d$var$i = [];
    }
}, $ced53c4117432d2d$var$S = function(e) {
    if (e.cancelable) {
        var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
        "pointerdown" == e.type ? function(e, t) {
            var n = function() {
                $ced53c4117432d2d$var$g(e, t), r();
            }, i = function() {
                r();
            }, r = function() {
                removeEventListener("pointerup", n, $ced53c4117432d2d$var$T), removeEventListener("pointercancel", i, $ced53c4117432d2d$var$T);
            };
            addEventListener("pointerup", n, $ced53c4117432d2d$var$T), addEventListener("pointercancel", i, $ced53c4117432d2d$var$T);
        }(t, e) : $ced53c4117432d2d$var$g(t, e);
    }
}, $ced53c4117432d2d$var$w = function(e) {
    [
        "mousedown",
        "keydown",
        "touchstart",
        "pointerdown"
    ].forEach(function(t) {
        return e(t, $ced53c4117432d2d$var$S, $ced53c4117432d2d$var$T);
    });
}, $ced53c4117432d2d$export$134ed2977d320dfd = function(n, f) {
    var s, m = $ced53c4117432d2d$var$v(), d = $ced53c4117432d2d$var$r("FID"), p = function(e) {
        e.startTime < m.firstHiddenTime && (d.value = e.processingStart - e.startTime, d.entries.push(e), s(!0));
    }, l = $ced53c4117432d2d$var$a("first-input", p);
    s = $ced53c4117432d2d$var$c(n, d, f), l && $ced53c4117432d2d$var$o(function() {
        l.takeRecords().map(p), l.disconnect();
    }, !0), l && $ced53c4117432d2d$var$u(function() {
        var a;
        d = $ced53c4117432d2d$var$r("FID"), s = $ced53c4117432d2d$var$c(n, d, f), $ced53c4117432d2d$var$i = [], $ced53c4117432d2d$var$t = -1, $ced53c4117432d2d$var$e = null, $ced53c4117432d2d$var$w(addEventListener), a = p, $ced53c4117432d2d$var$i.push(a), $ced53c4117432d2d$var$E();
    });
}, $ced53c4117432d2d$var$b = {}, $ced53c4117432d2d$export$da982ced0ff8a670 = function(e, t) {
    var n, i = $ced53c4117432d2d$var$v(), f = $ced53c4117432d2d$var$r("LCP"), s = function(e) {
        var t = e.startTime;
        t < i.firstHiddenTime && (f.value = t, f.entries.push(e), n());
    }, m = $ced53c4117432d2d$var$a("largest-contentful-paint", s);
    if (m) {
        n = $ced53c4117432d2d$var$c(e, f, t);
        var d = function() {
            $ced53c4117432d2d$var$b[f.id] || (m.takeRecords().map(s), m.disconnect(), $ced53c4117432d2d$var$b[f.id] = !0, n(!0));
        };
        [
            "keydown",
            "click"
        ].forEach(function(e) {
            addEventListener(e, d, {
                once: !0,
                capture: !0
            });
        }), $ced53c4117432d2d$var$o(d, !0), $ced53c4117432d2d$var$u(function(i) {
            f = $ced53c4117432d2d$var$r("LCP"), n = $ced53c4117432d2d$var$c(e, f, t), requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    f.value = performance.now() - i.timeStamp, $ced53c4117432d2d$var$b[f.id] = !0, n(!0);
                });
            });
        });
    }
}, $ced53c4117432d2d$export$6e8eea9a35032c92 = function(e) {
    var t, n = $ced53c4117432d2d$var$r("TTFB");
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

})();
//# sourceMappingURL=web-vitals.15bf5e0f.js.map
