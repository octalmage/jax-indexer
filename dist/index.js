(() => {
    "use strict";
    var e = {
        341: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(582).__exportStar(r(575), t);
        },
        575: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleEvent = void 0;
            const n = r(380);
            t.handleEvent = async function(e) {
                const t = e.event.attributes.find((e => "gameResult" === e.key)), r = e.event.attributes.find((e => "player" === e.key));
                if (void 0 !== t && void 0 !== r) {
                    const o = JSON.parse(t.value), a = n.Game.create({
                        id: `${e.tx.hash}-${e.msg.idx}-${e.idx}`,
                        blockHeight: BigInt(e.block.block.header.height),
                        txHash: e.tx.hash,
                        player: r.value,
                        guessedColor: o.colorGuess,
                        winningColor: o.winningColor,
                        timestamp: BigInt(o.startTime),
                        result: o.result
                    });
                    await a.save();
                }
            };
        },
        380: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(582).__exportStar(r(980), t);
        },
        430: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Game = void 0;
            const n = r(582).__importDefault(r(491));
            t.Game = class {
                constructor(e, t, r, n, o, a, i, s) {
                    this.id = e, this.player = t, this.guessedColor = r, this.winningColor = n, this.result = o, 
                    this.blockHeight = a, this.timestamp = i, this.txHash = s;
                }
                get _name() {
                    return "Game";
                }
                async save() {
                    let e = this.id;
                    (0, n.default)(null !== e, "Cannot save Game entity without an ID"), await store.set("Game", e.toString(), this);
                }
                static async remove(e) {
                    (0, n.default)(null !== e, "Cannot remove Game entity without an ID"), await store.remove("Game", e.toString());
                }
                static async get(e) {
                    (0, n.default)(null != e, "Cannot get Game entity without an ID");
                    const t = await store.get("Game", e.toString());
                    return t ? this.create(t) : void 0;
                }
                static create(e) {
                    (0, n.default)("string" == typeof e.id, "id must be provided");
                    let t = new this(e.id, e.player, e.guessedColor, e.winningColor, e.result, e.blockHeight, e.timestamp, e.txHash);
                    return Object.assign(t, e), t;
                }
            };
        },
        980: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Game = void 0;
            var n = r(430);
            Object.defineProperty(t, "Game", {
                enumerable: !0,
                get: function() {
                    return n.Game;
                }
            });
        },
        491: e => {
            e.exports = require("assert");
        },
        582: (e, t, r) => {
            r.r(t), r.d(t, {
                __addDisposableResource: () => M,
                __assign: () => a,
                __asyncDelegator: () => S,
                __asyncGenerator: () => P,
                __asyncValues: () => x,
                __await: () => j,
                __awaiter: () => y,
                __classPrivateFieldGet: () => D,
                __classPrivateFieldIn: () => C,
                __classPrivateFieldSet: () => I,
                __createBinding: () => h,
                __decorate: () => s,
                __disposeResources: () => A,
                __esDecorate: () => u,
                __exportStar: () => v,
                __extends: () => o,
                __generator: () => _,
                __importDefault: () => k,
                __importStar: () => G,
                __makeTemplateObject: () => E,
                __metadata: () => d,
                __param: () => c,
                __propKey: () => f,
                __read: () => m,
                __rest: () => i,
                __runInitializers: () => l,
                __setFunctionName: () => p,
                __spread: () => w,
                __spreadArray: () => O,
                __spreadArrays: () => g,
                __values: () => b,
                default: () => F
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }, n(e, t);
            };
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function r() {
                    this.constructor = e;
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, 
                new r);
            }
            var a = function() {
                return a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }, a.apply(this, arguments);
            };
            function i(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                }
                return r;
            }
            function s(e, t, r, n) {
                var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
                return a > 3 && i && Object.defineProperty(t, r, i), i;
            }
            function c(e, t) {
                return function(r, n) {
                    t(r, n, e);
                };
            }
            function u(e, t, r, n, o, a) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e;
                }
                for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
                    var y = {};
                    for (var _ in n) y[_] = "access" === _ ? {} : n[_];
                    for (var _ in n.access) y.access[_] = n.access[_];
                    y.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        a.push(i(e || null));
                    };
                    var h = (0, r[d])("accessor" === c ? {
                        get: f.get,
                        set: f.set
                    } : f[u], y);
                    if ("accessor" === c) {
                        if (void 0 === h) continue;
                        if (null === h || "object" != typeof h) throw new TypeError("Object expected");
                        (s = i(h.get)) && (f.get = s), (s = i(h.set)) && (f.set = s), (s = i(h.init)) && o.unshift(s);
                    } else (s = i(h)) && ("field" === c ? o.unshift(s) : f[u] = s);
                }
                l && Object.defineProperty(l, n.name, f), p = !0;
            }
            function l(e, t, r) {
                for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
                return n ? r : void 0;
            }
            function f(e) {
                return "symbol" == typeof e ? e : "".concat(e);
            }
            function p(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), 
                Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                });
            }
            function d(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function y(e, t, r, n) {
                return new (r || (r = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t);
                        }))).then(i, s);
                    }
                    c((n = n.apply(e, t || [])).next());
                }));
            }
            function _(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this;
                }), a;
                function s(s) {
                    return function(c) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (;a && (a = 0, s[0] && (i = 0)), i; ) try {
                                if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 
                                0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                                switch (n = 0, o && (s = [ 2 & s[0], o.value ]), s[0]) {
                                  case 0:
                                  case 1:
                                    o = s;
                                    break;

                                  case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };

                                  case 5:
                                    i.label++, n = s[1], s = [ 0 ];
                                    continue;

                                  case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;

                                  default:
                                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break;
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break;
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                s = t.call(e, i);
                            } catch (e) {
                                s = [ 6, e ], n = 0;
                            } finally {
                                r = o = 0;
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            };
                        }([ s, c ]);
                    };
                }
            }
            var h = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, n, o);
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r];
            };
            function v(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || h(t, e, r);
            }
            function b(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function m(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e), i = [];
                try {
                    for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return i;
            }
            function w() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
                return e;
            }
            function g() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e), o = 0;
                for (t = 0; t < r; t++) for (var a = arguments[t], i = 0, s = a.length; i < s; i++, 
                o++) n[o] = a[i];
                return n;
            }
            function O(e, t, r) {
                if (r || 2 === arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), 
                n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t));
            }
            function j(e) {
                return this instanceof j ? (this.v = e, this) : new j(e);
            }
            function P(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), a = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n;
                function i(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            a.push([ e, t, r, n ]) > 1 || s(e, t);
                        }));
                    });
                }
                function s(e, t) {
                    try {
                        (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, u) : l(a[0][2], r);
                    } catch (e) {
                        l(a[0][3], e);
                    }
                    var r;
                }
                function c(e) {
                    s("next", e);
                }
                function u(e) {
                    s("throw", e);
                }
                function l(e, t) {
                    e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
                }
            }
            function S(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e;
                })), n("return"), t[Symbol.iterator] = function() {
                    return this;
                }, t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: j(e[n](t)),
                            done: !1
                        } : o ? o(t) : t;
                    } : o;
                }
            }
            function x(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = b(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this;
                }, t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    });
                                }), t);
                            })(n, o, (t = e[r](t)).done, t.value);
                        }));
                    };
                }
            }
            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e;
            }
            var T = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            };
            function G(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && h(t, e, r);
                return T(t, e), t;
            }
            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function D(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
            }
            function I(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
            }
            function C(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }
            function M(e, t, r) {
                if (null != t) {
                    if ("object" != typeof t) throw new TypeError("Object expected.");
                    var n;
                    if (r) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose];
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose];
                    }
                    if ("function" != typeof n) throw new TypeError("Object not disposable.");
                    e.stack.push({
                        value: t,
                        dispose: n,
                        async: r
                    });
                } else r && e.stack.push({
                    async: !0
                });
                return t;
            }
            var R = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
            };
            function A(e) {
                function t(t) {
                    e.error = e.hasError ? new R(t, e.error, "An error was suppressed during disposal.") : t, 
                    e.hasError = !0;
                }
                return function r() {
                    for (;e.stack.length; ) {
                        var n = e.stack.pop();
                        try {
                            var o = n.dispose && n.dispose.call(n.value);
                            if (n.async) return Promise.resolve(o).then(r, (function(e) {
                                return t(e), r();
                            }));
                        } catch (e) {
                            t(e);
                        }
                    }
                    if (e.hasError) throw e.error;
                }();
            }
            const F = {
                __extends: o,
                __assign: a,
                __rest: i,
                __decorate: s,
                __param: c,
                __metadata: d,
                __awaiter: y,
                __generator: _,
                __createBinding: h,
                __exportStar: v,
                __values: b,
                __read: m,
                __spread: w,
                __spreadArrays: g,
                __spreadArray: O,
                __await: j,
                __asyncGenerator: P,
                __asyncDelegator: S,
                __asyncValues: x,
                __makeTemplateObject: E,
                __importStar: G,
                __importDefault: k,
                __classPrivateFieldGet: D,
                __classPrivateFieldSet: I,
                __classPrivateFieldIn: C,
                __addDisposableResource: M,
                __disposeResources: A
            };
        }
    }, t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports;
    }
    r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        });
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    };
    var n = r(341), o = exports;
    for (var a in n) o[a] = n[a];
    n.__esModule && Object.defineProperty(o, "__esModule", {
        value: !0
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBWTtnQkFDQWM7Z0JBQ0F6SjtnQkFDQWlLO2dCQUNBQztnQkFDQUc7Z0JBQ0FDO2dCQUNBSztnQkFDQU07Z0JBQ0FDO2dCQUNBTztnQkFDQUM7Z0JBQ0FDO2dCQUNBSTtnQkFDQTFKO2dCQUNBNEo7Z0JBQ0FJO2dCQUNBQztnQkFDQUM7Z0JBQ0FVOzs7T0MvV0VJLElBQTJCLENBQUM7SUFHaEMsU0FBU0MsRUFBb0JDO1FBRTVCLElBQUlDLElBQWVILEVBQXlCRTtRQUM1QyxTQUFxQnpELE1BQWpCMEQsR0FDSCxPQUFPQSxFQUFhMU47UUFHckIsSUFBSXVELElBQVNnSyxFQUF5QkUsS0FBWTtZQUdqRHpOLFNBQVMsQ0FBQzs7UUFPWCxPQUhBMk4sRUFBb0JGLEdBQVVsSyxHQUFRQSxFQUFPdkQsU0FBU3dOLElBRy9DakssRUFBT3ZEO0FBQ2Y7SUNyQkF3TixFQUFvQjlKLElBQUksQ0FBQzFELEdBQVM0TjtRQUNqQyxLQUFJLElBQUlqTixLQUFPaU4sR0FDWEosRUFBb0I1RCxFQUFFZ0UsR0FBWWpOLE9BQVM2TSxFQUFvQjVELEVBQUU1SixHQUFTVyxNQUM1RWIsT0FBT0MsZUFBZUMsR0FBU1csR0FBSztZQUFFMkMsYUFBWTtZQUFNSixLQUFLMEssRUFBV2pOOztBQUUxRSxPQ05ENk0sRUFBb0I1RCxJQUFJLENBQUNpRSxHQUFLQyxNQUFVaE8sT0FBT2tFLFVBQVVDLGVBQWVDLEtBQUsySixHQUFLQyxJQ0NsRk4sRUFBb0IvSCxJQUFLekY7UUFDSCxzQkFBWHNKLFVBQTBCQSxPQUFPeUUsZUFDMUNqTyxPQUFPQyxlQUFlQyxHQUFTc0osT0FBT3lFLGFBQWE7WUFBRTlOLE9BQU87WUFFN0RILE9BQU9DLGVBQWVDLEdBQVMsY0FBYztZQUFFQyxRQUFPOztBQUFPO0lDRjlELElBQUkrTixJQUFzQlIsRUFBb0IsTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL21hcHBpbmdzL21hcHBpbmdIYW5kbGVycy50cyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci8uL3NyYy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci8uL3NyYy90eXBlcy9tb2RlbHMvR2FtZS50cyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci8uL3NyYy90eXBlcy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImFzc2VydFwiIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pheC1pbmRleGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuLy9FeHBvcnRzIGFsbCBoYW5kbGVyIGZ1bmN0aW9uc1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWFwcGluZ3MvbWFwcGluZ0hhbmRsZXJzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVFdmVudCA9IHZvaWQgMDtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5hc3luYyBmdW5jdGlvbiBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGNvbnN0IHJlc3VsdEF0dHIgPSBldmVudC5ldmVudC5hdHRyaWJ1dGVzLmZpbmQoYXR0ciA9PiBhdHRyLmtleSA9PT0gJ2dhbWVSZXN1bHQnKTtcbiAgICBjb25zdCBwbGF5ZXJBdHRyID0gZXZlbnQuZXZlbnQuYXR0cmlidXRlcy5maW5kKGF0dHIgPT4gYXR0ci5rZXkgPT09ICdwbGF5ZXInKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdEF0dHIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwbGF5ZXJBdHRyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBwYXJzZWRFdmVudCA9IEpTT04ucGFyc2UocmVzdWx0QXR0ci52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGdhbWVSZWNvcmQgPSB0eXBlc18xLkdhbWUuY3JlYXRlKHtcbiAgICAgICAgICAgIGlkOiBgJHtldmVudC50eC5oYXNofS0ke2V2ZW50Lm1zZy5pZHh9LSR7ZXZlbnQuaWR4fWAsXG4gICAgICAgICAgICBibG9ja0hlaWdodDogQmlnSW50KGV2ZW50LmJsb2NrLmJsb2NrLmhlYWRlci5oZWlnaHQpLFxuICAgICAgICAgICAgdHhIYXNoOiBldmVudC50eC5oYXNoLFxuICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXJBdHRyLnZhbHVlLFxuICAgICAgICAgICAgZ3Vlc3NlZENvbG9yOiBwYXJzZWRFdmVudC5jb2xvckd1ZXNzLFxuICAgICAgICAgICAgd2lubmluZ0NvbG9yOiBwYXJzZWRFdmVudC53aW5uaW5nQ29sb3IsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IEJpZ0ludChwYXJzZWRFdmVudC5zdGFydFRpbWUpLFxuICAgICAgICAgICAgcmVzdWx0OiBwYXJzZWRFdmVudC5yZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBnYW1lUmVjb3JkLnNhdmUoKTtcbiAgICB9XG59XG5leHBvcnRzLmhhbmRsZUV2ZW50ID0gaGFuZGxlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuLy8gQXV0by1nZW5lcmF0ZWQgLCBETyBOT1QgRURJVFxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbW9kZWxzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGFzc2VydF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFzc2VydFwiKSk7XG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgcGxheWVyLCBndWVzc2VkQ29sb3IsIHdpbm5pbmdDb2xvciwgcmVzdWx0LCBibG9ja0hlaWdodCwgdGltZXN0YW1wLCB0eEhhc2gpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5ndWVzc2VkQ29sb3IgPSBndWVzc2VkQ29sb3I7XG4gICAgICAgIHRoaXMud2lubmluZ0NvbG9yID0gd2lubmluZ0NvbG9yO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgdGhpcy5ibG9ja0hlaWdodCA9IGJsb2NrSGVpZ2h0O1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy50eEhhc2ggPSB0eEhhc2g7XG4gICAgfVxuICAgIGdldCBfbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdHYW1lJztcbiAgICB9XG4gICAgYXN5bmMgc2F2ZSgpIHtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5pZDtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKGlkICE9PSBudWxsLCBcIkNhbm5vdCBzYXZlIEdhbWUgZW50aXR5IHdpdGhvdXQgYW4gSURcIik7XG4gICAgICAgIGF3YWl0IHN0b3JlLnNldCgnR2FtZScsIGlkLnRvU3RyaW5nKCksIHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgcmVtb3ZlKGlkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KShpZCAhPT0gbnVsbCwgXCJDYW5ub3QgcmVtb3ZlIEdhbWUgZW50aXR5IHdpdGhvdXQgYW4gSURcIik7XG4gICAgICAgIGF3YWl0IHN0b3JlLnJlbW92ZSgnR2FtZScsIGlkLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0KGlkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KSgoaWQgIT09IG51bGwgJiYgaWQgIT09IHVuZGVmaW5lZCksIFwiQ2Fubm90IGdldCBHYW1lIGVudGl0eSB3aXRob3V0IGFuIElEXCIpO1xuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBzdG9yZS5nZXQoJ0dhbWUnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShyZWNvcmQpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKHR5cGVvZiByZWNvcmQuaWQgPT09ICdzdHJpbmcnLCBcImlkIG11c3QgYmUgcHJvdmlkZWRcIik7XG4gICAgICAgIGxldCBlbnRpdHkgPSBuZXcgdGhpcyhyZWNvcmQuaWQsIHJlY29yZC5wbGF5ZXIsIHJlY29yZC5ndWVzc2VkQ29sb3IsIHJlY29yZC53aW5uaW5nQ29sb3IsIHJlY29yZC5yZXN1bHQsIHJlY29yZC5ibG9ja0hlaWdodCwgcmVjb3JkLnRpbWVzdGFtcCwgcmVjb3JkLnR4SGFzaCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW50aXR5LCByZWNvcmQpO1xuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZSA9IEdhbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWUgPSB2b2lkIDA7XG4vLyBBdXRvLWdlbmVyYXRlZCAsIERPIE5PVCBFRElUXG52YXIgR2FtZV8xID0gcmVxdWlyZShcIi4vR2FtZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdhbWVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdhbWVfMS5HYW1lOyB9IH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNDEpO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX19leHBvcnRTdGFyIiwiaGFuZGxlRXZlbnQiLCJ0eXBlc18xIiwiYXN5bmMiLCJldmVudCIsInJlc3VsdEF0dHIiLCJhdHRyaWJ1dGVzIiwiZmluZCIsImF0dHIiLCJrZXkiLCJwbGF5ZXJBdHRyIiwicGFyc2VkRXZlbnQiLCJKU09OIiwicGFyc2UiLCJnYW1lUmVjb3JkIiwiR2FtZSIsImNyZWF0ZSIsImlkIiwidHgiLCJoYXNoIiwibXNnIiwiaWR4IiwiYmxvY2tIZWlnaHQiLCJCaWdJbnQiLCJibG9jayIsImhlYWRlciIsImhlaWdodCIsInR4SGFzaCIsInBsYXllciIsImd1ZXNzZWRDb2xvciIsImNvbG9yR3Vlc3MiLCJ3aW5uaW5nQ29sb3IiLCJ0aW1lc3RhbXAiLCJzdGFydFRpbWUiLCJyZXN1bHQiLCJzYXZlIiwiYXNzZXJ0XzEiLCJfX2ltcG9ydERlZmF1bHQiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJfbmFtZSIsImRlZmF1bHQiLCJzdG9yZSIsInNldCIsInRvU3RyaW5nIiwic3RhdGljIiwicmVtb3ZlIiwicmVjb3JkIiwiZ2V0IiwiZW50aXR5IiwiYXNzaWduIiwiR2FtZV8xIiwiZW51bWVyYWJsZSIsIm1vZHVsZSIsInJlcXVpcmUiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fZXh0ZW5kcyIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiX19hc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJfX3BhcmFtIiwicGFyYW1JbmRleCIsImRlY29yYXRvciIsIl9fZXNEZWNvcmF0ZSIsImN0b3IiLCJkZXNjcmlwdG9ySW4iLCJjb250ZXh0SW4iLCJpbml0aWFsaXplcnMiLCJleHRyYUluaXRpYWxpemVycyIsImFjY2VwdCIsImYiLCJfIiwia2luZCIsImRlc2NyaXB0b3IiLCJuYW1lIiwiZG9uZSIsImNvbnRleHQiLCJhY2Nlc3MiLCJhZGRJbml0aWFsaXplciIsInB1c2giLCJpbml0IiwidW5zaGlmdCIsIl9fcnVuSW5pdGlhbGl6ZXJzIiwidGhpc0FyZyIsInVzZVZhbHVlIiwiX19wcm9wS2V5IiwieCIsImNvbmNhdCIsIl9fc2V0RnVuY3Rpb25OYW1lIiwicHJlZml4IiwiZGVzY3JpcHRpb24iLCJjb25maWd1cmFibGUiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJ5IiwiZyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJwb3AiLCJfX2NyZWF0ZUJpbmRpbmciLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsIl9fZXNNb2R1bGUiLCJ3cml0YWJsZSIsIl9fdmFsdWVzIiwiX19yZWFkIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkIiwiX19zcHJlYWRBcnJheXMiLCJpbCIsImEiLCJqIiwiamwiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImwiLCJzbGljZSIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJmdWxmaWxsIiwic2V0dGxlIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJoYXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEluIiwiX19hZGREaXNwb3NhYmxlUmVzb3VyY2UiLCJlbnYiLCJkaXNwb3NlIiwiYXN5bmNEaXNwb3NlIiwic3RhY2siLCJfU3VwcHJlc3NlZEVycm9yIiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsIm1lc3NhZ2UiLCJFcnJvciIsIl9fZGlzcG9zZVJlc291cmNlcyIsImZhaWwiLCJoYXNFcnJvciIsInJlYyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkZWZpbml0aW9uIiwib2JqIiwicHJvcCIsInRvU3RyaW5nVGFnIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJzb3VyY2VSb290IjoiIn0=