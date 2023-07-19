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
            }), t.handleUpdateContractAdmin = t.handleUpdateContract = t.handleStoreCode = void 0;
            const n = r(380);
            t.handleStoreCode = async function(e) {
                var t;
                const r = null === (t = e.tx.tx.events[4].attributes.find((e => "Y29udHJhY3RfYWRkcmVzcw==" === e.key))) || void 0 === t ? void 0 : t.value;
                if (!r) return;
                const o = Buffer.from(r, "base64"), a = n.Contract.create({
                    id: o.toString(),
                    blockHeight: BigInt(e.block.block.header.height),
                    txHash: e.tx.hash,
                    creator: e.msg.decodedMsg.creator,
                    admin: e.msg.decodedMsg.admin,
                    contract: o.toString(),
                    code: e.msg.decodedMsg.code
                });
                await a.save();
            }, t.handleUpdateContract = async function(e) {
                const t = await n.Contract.get(e.msg.decodedMsg.contract);
                t && (t.code = e.msg.decodedMsg.code, await t.save());
            }, t.handleUpdateContractAdmin = async function(e) {
                const t = await n.Contract.get(e.msg.decodedMsg.contract);
                t && (t.admin = e.msg.decodedMsg.admin, await t.save());
            };
        },
        380: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(582).__exportStar(r(980), t);
        },
        739: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Contract = void 0;
            const n = r(582).__importDefault(r(491));
            t.Contract = class {
                constructor(e, t, r, n, o, a, i) {
                    this.id = e, this.creator = t, this.admin = r, this.contract = n, this.code = o, 
                    this.blockHeight = a, this.txHash = i;
                }
                get _name() {
                    return "Contract";
                }
                async save() {
                    let e = this.id;
                    (0, n.default)(null !== e, "Cannot save Contract entity without an ID"), await store.set("Contract", e.toString(), this);
                }
                static async remove(e) {
                    (0, n.default)(null !== e, "Cannot remove Contract entity without an ID"), await store.remove("Contract", e.toString());
                }
                static async get(e) {
                    (0, n.default)(null != e, "Cannot get Contract entity without an ID");
                    const t = await store.get("Contract", e.toString());
                    return t ? this.create(t) : void 0;
                }
                static create(e) {
                    (0, n.default)("string" == typeof e.id, "id must be provided");
                    let t = new this(e.id, e.creator, e.admin, e.contract, e.code, e.blockHeight, e.txHash);
                    return Object.assign(t, e), t;
                }
            };
        },
        980: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Contract = void 0;
            var n = r(739);
            Object.defineProperty(t, "Contract", {
                enumerable: !0,
                get: function() {
                    return n.Contract;
                }
            });
        },
        491: e => {
            e.exports = require("assert");
        },
        582: (e, t, r) => {
            r.r(t), r.d(t, {
                __addDisposableResource: () => R,
                __assign: () => a,
                __asyncDelegator: () => P,
                __asyncGenerator: () => S,
                __asyncValues: () => x,
                __await: () => j,
                __awaiter: () => y,
                __classPrivateFieldGet: () => k,
                __classPrivateFieldIn: () => I,
                __classPrivateFieldSet: () => D,
                __createBinding: () => h,
                __decorate: () => c,
                __disposeResources: () => F,
                __esDecorate: () => u,
                __exportStar: () => v,
                __extends: () => o,
                __generator: () => _,
                __importDefault: () => M,
                __importStar: () => T,
                __makeTemplateObject: () => C,
                __metadata: () => p,
                __param: () => s,
                __propKey: () => f,
                __read: () => w,
                __rest: () => i,
                __runInitializers: () => l,
                __setFunctionName: () => d,
                __spread: () => m,
                __spreadArray: () => O,
                __spreadArrays: () => g,
                __values: () => b,
                default: () => H
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
            function c(e, t, r, n) {
                var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
                return a > 3 && i && Object.defineProperty(t, r, i), i;
            }
            function s(e, t) {
                return function(r, n) {
                    t(r, n, e);
                };
            }
            function u(e, t, r, n, o, a) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e;
                }
                for (var c, s = n.kind, u = "getter" === s ? "get" : "setter" === s ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
                    var y = {};
                    for (var _ in n) y[_] = "access" === _ ? {} : n[_];
                    for (var _ in n.access) y.access[_] = n.access[_];
                    y.addInitializer = function(e) {
                        if (d) throw new TypeError("Cannot add initializers after decoration has completed");
                        a.push(i(e || null));
                    };
                    var h = (0, r[p])("accessor" === s ? {
                        get: f.get,
                        set: f.set
                    } : f[u], y);
                    if ("accessor" === s) {
                        if (void 0 === h) continue;
                        if (null === h || "object" != typeof h) throw new TypeError("Object expected");
                        (c = i(h.get)) && (f.get = c), (c = i(h.set)) && (f.set = c), (c = i(h.init)) && o.unshift(c);
                    } else (c = i(h)) && ("field" === s ? o.unshift(c) : f[u] = c);
                }
                l && Object.defineProperty(l, n.name, f), d = !0;
            }
            function l(e, t, r) {
                for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
                return n ? r : void 0;
            }
            function f(e) {
                return "symbol" == typeof e ? e : "".concat(e);
            }
            function d(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), 
                Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                });
            }
            function p(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function y(e, t, r, n) {
                return new (r || (r = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            s(n.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function c(e) {
                        try {
                            s(n.throw(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t);
                        }))).then(i, c);
                    }
                    s((n = n.apply(e, t || [])).next());
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this;
                }), a;
                function c(c) {
                    return function(s) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (;a && (a = 0, c[0] && (i = 0)), i; ) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 
                                0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                switch (n = 0, o && (c = [ 2 & c[0], o.value ]), c[0]) {
                                  case 0:
                                  case 1:
                                    o = c;
                                    break;

                                  case 4:
                                    return i.label++, {
                                        value: c[1],
                                        done: !1
                                    };

                                  case 5:
                                    i.label++, n = c[1], c = [ 0 ];
                                    continue;

                                  case 7:
                                    c = i.ops.pop(), i.trys.pop();
                                    continue;

                                  default:
                                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        i.label = c[1];
                                        break;
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                        i.label = o[1], o = c;
                                        break;
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(c);
                                        break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                c = t.call(e, i);
                            } catch (e) {
                                c = [ 6, e ], n = 0;
                            } finally {
                                r = o = 0;
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            };
                        }([ c, s ]);
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
            function w(e, t) {
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
            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
                return e;
            }
            function g() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e), o = 0;
                for (t = 0; t < r; t++) for (var a = arguments[t], i = 0, c = a.length; i < c; i++, 
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
            function S(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), a = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n;
                function i(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            a.push([ e, t, r, n ]) > 1 || c(e, t);
                        }));
                    });
                }
                function c(e, t) {
                    try {
                        (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(s, u) : l(a[0][2], r);
                    } catch (e) {
                        l(a[0][3], e);
                    }
                    var r;
                }
                function s(e) {
                    c("next", e);
                }
                function u(e) {
                    c("throw", e);
                }
                function l(e, t) {
                    e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
                }
            }
            function P(e) {
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
            function C(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e;
            }
            var E = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            };
            function T(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && h(t, e, r);
                return E(t, e), t;
            }
            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function k(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
            }
            function D(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
            }
            function I(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }
            function R(e, t, r) {
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
            var A = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
            };
            function F(e) {
                function t(t) {
                    e.error = e.hasError ? new A(t, e.error, "An error was suppressed during disposal.") : t, 
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
            const H = {
                __extends: o,
                __assign: a,
                __rest: i,
                __decorate: c,
                __param: s,
                __metadata: p,
                __awaiter: y,
                __generator: _,
                __createBinding: h,
                __exportStar: v,
                __values: b,
                __read: w,
                __spread: m,
                __spreadArrays: g,
                __spreadArray: O,
                __await: j,
                __asyncGenerator: S,
                __asyncDelegator: P,
                __asyncValues: x,
                __makeTemplateObject: C,
                __importStar: T,
                __importDefault: M,
                __classPrivateFieldGet: k,
                __classPrivateFieldSet: D,
                __classPrivateFieldIn: I,
                __addDisposableResource: R,
                __disposeResources: F
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUt4RjtRQUNILHNCQUFYc0osVUFBMEJBLE9BQU93RSxlQUMxQ2hPLE9BQU9DLGVBQWVDLEdBQVNzSixPQUFPd0UsYUFBYTtZQUFFN04sT0FBTztZQUU3REgsT0FBT0MsZUFBZUMsR0FBUyxjQUFjO1lBQUVDLFFBQU87O0FBQU87SUNGOUQsSUFBSThOLElBQXNCUixFQUFvQixNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvLi9zcmMvbWFwcGluZ3MvbWFwcGluZ0hhbmRsZXJzLnRzIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL3R5cGVzL21vZGVscy9Db250cmFjdC50cyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci8uL3NyYy90eXBlcy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImFzc2VydFwiIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pheC1pbmRleGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuLy9FeHBvcnRzIGFsbCBoYW5kbGVyIGZ1bmN0aW9uc1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWFwcGluZ3MvbWFwcGluZ0hhbmRsZXJzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVVcGRhdGVDb250cmFjdEFkbWluID0gZXhwb3J0cy5oYW5kbGVVcGRhdGVDb250cmFjdCA9IGV4cG9ydHMuaGFuZGxlU3RvcmVDb2RlID0gdm9pZCAwO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbi8vIFN0b3JlIGNvbnRyYWN0IGNvZGUgb24gZGVwbG95LlxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3RvcmVDb2RlKG1zZykge1xuICAgIHZhciBfYTtcbiAgICAvLyBZMjl1ZEhKaFkzUmZZV1JrY21WemN3PT0gPT0gXCJjb250cmFjdF9hZGRyZXNzXCJcbiAgICBjb25zdCBjcmVhdGVDb250cmFjdEV2ZW50ID0gKF9hID0gbXNnLnR4LnR4LmV2ZW50c1s0XS5hdHRyaWJ1dGVzLmZpbmQoYXR0ciA9PiBhdHRyLmtleSA9PT0gJ1kyOXVkSEpoWTNSZllXUmtjbVZ6Y3c9PScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgaWYgKCFjcmVhdGVDb250cmFjdEV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29udHJhY3RBZGRyZXNzQnVmZmVyID0gQnVmZmVyLmZyb20oY3JlYXRlQ29udHJhY3RFdmVudCwgJ2Jhc2U2NCcpO1xuICAgIGNvbnN0IGNvbnRyYWN0UmVjb3JkID0gdHlwZXNfMS5Db250cmFjdC5jcmVhdGUoe1xuICAgICAgICBpZDogY29udHJhY3RBZGRyZXNzQnVmZmVyLnRvU3RyaW5nKCksXG4gICAgICAgIGJsb2NrSGVpZ2h0OiBCaWdJbnQobXNnLmJsb2NrLmJsb2NrLmhlYWRlci5oZWlnaHQpLFxuICAgICAgICB0eEhhc2g6IG1zZy50eC5oYXNoLFxuICAgICAgICBjcmVhdG9yOiBtc2cubXNnLmRlY29kZWRNc2cuY3JlYXRvcixcbiAgICAgICAgYWRtaW46IG1zZy5tc2cuZGVjb2RlZE1zZy5hZG1pbixcbiAgICAgICAgY29udHJhY3Q6IGNvbnRyYWN0QWRkcmVzc0J1ZmZlci50b1N0cmluZygpLFxuICAgICAgICBjb2RlOiBtc2cubXNnLmRlY29kZWRNc2cuY29kZSxcbiAgICB9KTtcbiAgICBhd2FpdCBjb250cmFjdFJlY29yZC5zYXZlKCk7XG59XG5leHBvcnRzLmhhbmRsZVN0b3JlQ29kZSA9IGhhbmRsZVN0b3JlQ29kZTtcbi8vIFVwZGF0ZSBjb250cmFjdCBjb2RlIHdoZW4gdXBkYXRlZC5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUNvbnRyYWN0KG1zZykge1xuICAgIGNvbnN0IGNvbnRyYWN0UmVjb3JkID0gYXdhaXQgdHlwZXNfMS5Db250cmFjdC5nZXQobXNnLm1zZy5kZWNvZGVkTXNnLmNvbnRyYWN0KTtcbiAgICBpZiAoIWNvbnRyYWN0UmVjb3JkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udHJhY3RSZWNvcmQuY29kZSA9IG1zZy5tc2cuZGVjb2RlZE1zZy5jb2RlO1xuICAgIGF3YWl0IGNvbnRyYWN0UmVjb3JkLnNhdmUoKTtcbn1cbmV4cG9ydHMuaGFuZGxlVXBkYXRlQ29udHJhY3QgPSBoYW5kbGVVcGRhdGVDb250cmFjdDtcbi8vIFVwZGF0ZSBjb250cmFjdCBhZG1pbiB3aGVuIHVwZGF0ZWQuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVVcGRhdGVDb250cmFjdEFkbWluKG1zZykge1xuICAgIGNvbnN0IGNvbnRyYWN0UmVjb3JkID0gYXdhaXQgdHlwZXNfMS5Db250cmFjdC5nZXQobXNnLm1zZy5kZWNvZGVkTXNnLmNvbnRyYWN0KTtcbiAgICBpZiAoIWNvbnRyYWN0UmVjb3JkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udHJhY3RSZWNvcmQuYWRtaW4gPSBtc2cubXNnLmRlY29kZWRNc2cuYWRtaW47XG4gICAgYXdhaXQgY29udHJhY3RSZWNvcmQuc2F2ZSgpO1xufVxuZXhwb3J0cy5oYW5kbGVVcGRhdGVDb250cmFjdEFkbWluID0gaGFuZGxlVXBkYXRlQ29udHJhY3RBZG1pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG4vLyBBdXRvLWdlbmVyYXRlZCAsIERPIE5PVCBFRElUXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tb2RlbHNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbnRyYWN0ID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGFzc2VydF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFzc2VydFwiKSk7XG5jbGFzcyBDb250cmFjdCB7XG4gICAgY29uc3RydWN0b3IoaWQsIGNyZWF0b3IsIGFkbWluLCBjb250cmFjdCwgY29kZSwgYmxvY2tIZWlnaHQsIHR4SGFzaCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgICAgIHRoaXMuYWRtaW4gPSBhZG1pbjtcbiAgICAgICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLmJsb2NrSGVpZ2h0ID0gYmxvY2tIZWlnaHQ7XG4gICAgICAgIHRoaXMudHhIYXNoID0gdHhIYXNoO1xuICAgIH1cbiAgICBnZXQgX25hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ29udHJhY3QnO1xuICAgIH1cbiAgICBhc3luYyBzYXZlKCkge1xuICAgICAgICBsZXQgaWQgPSB0aGlzLmlkO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoaWQgIT09IG51bGwsIFwiQ2Fubm90IHNhdmUgQ29udHJhY3QgZW50aXR5IHdpdGhvdXQgYW4gSURcIik7XG4gICAgICAgIGF3YWl0IHN0b3JlLnNldCgnQ29udHJhY3QnLCBpZC50b1N0cmluZygpLCB0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIHJlbW92ZShpZCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoaWQgIT09IG51bGwsIFwiQ2Fubm90IHJlbW92ZSBDb250cmFjdCBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgYXdhaXQgc3RvcmUucmVtb3ZlKCdDb250cmFjdCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0KGlkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KSgoaWQgIT09IG51bGwgJiYgaWQgIT09IHVuZGVmaW5lZCksIFwiQ2Fubm90IGdldCBDb250cmFjdCBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgc3RvcmUuZ2V0KCdDb250cmFjdCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKHJlY29yZCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkodHlwZW9mIHJlY29yZC5pZCA9PT0gJ3N0cmluZycsIFwiaWQgbXVzdCBiZSBwcm92aWRlZFwiKTtcbiAgICAgICAgbGV0IGVudGl0eSA9IG5ldyB0aGlzKHJlY29yZC5pZCwgcmVjb3JkLmNyZWF0b3IsIHJlY29yZC5hZG1pbiwgcmVjb3JkLmNvbnRyYWN0LCByZWNvcmQuY29kZSwgcmVjb3JkLmJsb2NrSGVpZ2h0LCByZWNvcmQudHhIYXNoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbnRpdHksIHJlY29yZCk7XG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxufVxuZXhwb3J0cy5Db250cmFjdCA9IENvbnRyYWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db250cmFjdCA9IHZvaWQgMDtcbi8vIEF1dG8tZ2VuZXJhdGVkICwgRE8gTk9UIEVESVRcbnZhciBDb250cmFjdF8xID0gcmVxdWlyZShcIi4vQ29udHJhY3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb250cmFjdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ29udHJhY3RfMS5Db250cmFjdDsgfSB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMzQxKTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9fZXhwb3J0U3RhciIsImhhbmRsZVVwZGF0ZUNvbnRyYWN0QWRtaW4iLCJoYW5kbGVVcGRhdGVDb250cmFjdCIsImhhbmRsZVN0b3JlQ29kZSIsInR5cGVzXzEiLCJhc3luYyIsIm1zZyIsIl9hIiwiY3JlYXRlQ29udHJhY3RFdmVudCIsInR4IiwiZXZlbnRzIiwiYXR0cmlidXRlcyIsImZpbmQiLCJhdHRyIiwia2V5IiwiY29udHJhY3RBZGRyZXNzQnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImNvbnRyYWN0UmVjb3JkIiwiQ29udHJhY3QiLCJjcmVhdGUiLCJpZCIsInRvU3RyaW5nIiwiYmxvY2tIZWlnaHQiLCJCaWdJbnQiLCJibG9jayIsImhlYWRlciIsImhlaWdodCIsInR4SGFzaCIsImhhc2giLCJjcmVhdG9yIiwiZGVjb2RlZE1zZyIsImFkbWluIiwiY29udHJhY3QiLCJjb2RlIiwic2F2ZSIsImdldCIsImFzc2VydF8xIiwiX19pbXBvcnREZWZhdWx0IiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiX25hbWUiLCJkZWZhdWx0Iiwic3RvcmUiLCJzZXQiLCJzdGF0aWMiLCJyZW1vdmUiLCJyZWNvcmQiLCJlbnRpdHkiLCJhc3NpZ24iLCJDb250cmFjdF8xIiwiZW51bWVyYWJsZSIsIm1vZHVsZSIsInJlcXVpcmUiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fZXh0ZW5kcyIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiX19hc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJfX3BhcmFtIiwicGFyYW1JbmRleCIsImRlY29yYXRvciIsIl9fZXNEZWNvcmF0ZSIsImN0b3IiLCJkZXNjcmlwdG9ySW4iLCJjb250ZXh0SW4iLCJpbml0aWFsaXplcnMiLCJleHRyYUluaXRpYWxpemVycyIsImFjY2VwdCIsImYiLCJfIiwia2luZCIsImRlc2NyaXB0b3IiLCJuYW1lIiwiZG9uZSIsImNvbnRleHQiLCJhY2Nlc3MiLCJhZGRJbml0aWFsaXplciIsInB1c2giLCJyZXN1bHQiLCJpbml0IiwidW5zaGlmdCIsIl9fcnVuSW5pdGlhbGl6ZXJzIiwidGhpc0FyZyIsInVzZVZhbHVlIiwiX19wcm9wS2V5IiwieCIsImNvbmNhdCIsIl9fc2V0RnVuY3Rpb25OYW1lIiwicHJlZml4IiwiZGVzY3JpcHRpb24iLCJjb25maWd1cmFibGUiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJ5IiwiZyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJwb3AiLCJfX2NyZWF0ZUJpbmRpbmciLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsIl9fZXNNb2R1bGUiLCJ3cml0YWJsZSIsIl9fdmFsdWVzIiwiX19yZWFkIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkIiwiX19zcHJlYWRBcnJheXMiLCJpbCIsImEiLCJqIiwiamwiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJwYWNrIiwibCIsInNsaWNlIiwiX19hd2FpdCIsIl9fYXN5bmNHZW5lcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwicSIsInJlc3VtZSIsImZ1bGZpbGwiLCJzZXR0bGUiLCJzaGlmdCIsIl9fYXN5bmNEZWxlZ2F0b3IiLCJfX2FzeW5jVmFsdWVzIiwiX19tYWtlVGVtcGxhdGVPYmplY3QiLCJjb29rZWQiLCJyYXciLCJfX3NldE1vZHVsZURlZmF1bHQiLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImhhcyIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkSW4iLCJfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSIsImVudiIsImRpc3Bvc2UiLCJhc3luY0Rpc3Bvc2UiLCJzdGFjayIsIl9TdXBwcmVzc2VkRXJyb3IiLCJTdXBwcmVzc2VkRXJyb3IiLCJzdXBwcmVzc2VkIiwibWVzc2FnZSIsIkVycm9yIiwiX19kaXNwb3NlUmVzb3VyY2VzIiwiZmFpbCIsImhhc0Vycm9yIiwicmVjIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImRlZmluaXRpb24iLCJvYmoiLCJwcm9wIiwidG9TdHJpbmdUYWciLCJfX3dlYnBhY2tfZXhwb3J0c19fIl0sInNvdXJjZVJvb3QiOiIifQ==