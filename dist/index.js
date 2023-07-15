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
                const t = e.event.attributes.find((e => "contract_address" === e.key)), r = e.event.attributes.find((e => "result" === e.key)), o = e.event.attributes.find((e => "method" === e.key)), a = e.event.attributes.find((e => "sender" === e.key));
                if (void 0 !== t && void 0 !== r && void 0 !== a && void 0 !== o) {
                    const i = n.ExecuteEvent.create({
                        id: `${e.tx.hash}-${e.msg.idx}-${e.idx}`,
                        blockHeight: BigInt(e.block.block.header.height),
                        txHash: e.tx.hash,
                        contractAddress: t.value,
                        result: r.value,
                        senderAddress: a.value,
                        method: o.value
                    });
                    await i.save();
                }
            };
        },
        380: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(582).__exportStar(r(980), t);
        },
        482: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExecuteEvent = void 0;
            const n = r(582).__importDefault(r(491));
            t.ExecuteEvent = class {
                constructor(e, t, r, n, o, a, i) {
                    this.id = e, this.blockHeight = t, this.txHash = r, this.contractAddress = n, this.result = o, 
                    this.senderAddress = a, this.method = i;
                }
                get _name() {
                    return "ExecuteEvent";
                }
                async save() {
                    let e = this.id;
                    (0, n.default)(null !== e, "Cannot save ExecuteEvent entity without an ID"), await store.set("ExecuteEvent", e.toString(), this);
                }
                static async remove(e) {
                    (0, n.default)(null !== e, "Cannot remove ExecuteEvent entity without an ID"), await store.remove("ExecuteEvent", e.toString());
                }
                static async get(e) {
                    (0, n.default)(null != e, "Cannot get ExecuteEvent entity without an ID");
                    const t = await store.get("ExecuteEvent", e.toString());
                    return t ? this.create(t) : void 0;
                }
                static create(e) {
                    (0, n.default)("string" == typeof e.id, "id must be provided");
                    let t = new this(e.id, e.blockHeight, e.txHash, e.contractAddress, e.result, e.senderAddress, e.method);
                    return Object.assign(t, e), t;
                }
            };
        },
        319: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Message = void 0;
            const n = r(582).__importDefault(r(491));
            t.Message = class {
                constructor(e, t, r, n, o) {
                    this.id = e, this.blockHeight = t, this.txHash = r, this.sender = n, this.contract = o;
                }
                get _name() {
                    return "Message";
                }
                async save() {
                    let e = this.id;
                    (0, n.default)(null !== e, "Cannot save Message entity without an ID"), await store.set("Message", e.toString(), this);
                }
                static async remove(e) {
                    (0, n.default)(null !== e, "Cannot remove Message entity without an ID"), await store.remove("Message", e.toString());
                }
                static async get(e) {
                    (0, n.default)(null != e, "Cannot get Message entity without an ID");
                    const t = await store.get("Message", e.toString());
                    return t ? this.create(t) : void 0;
                }
                static create(e) {
                    (0, n.default)("string" == typeof e.id, "id must be provided");
                    let t = new this(e.id, e.blockHeight, e.txHash, e.sender, e.contract);
                    return Object.assign(t, e), t;
                }
            };
        },
        980: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Message = t.ExecuteEvent = void 0;
            var n = r(482);
            Object.defineProperty(t, "ExecuteEvent", {
                enumerable: !0,
                get: function() {
                    return n.ExecuteEvent;
                }
            });
            var o = r(319);
            Object.defineProperty(t, "Message", {
                enumerable: !0,
                get: function() {
                    return o.Message;
                }
            });
        },
        491: e => {
            e.exports = require("assert");
        },
        582: (e, t, r) => {
            r.r(t), r.d(t, {
                __addDisposableResource: () => C,
                __assign: () => a,
                __asyncDelegator: () => x,
                __asyncGenerator: () => j,
                __asyncValues: () => P,
                __await: () => E,
                __awaiter: () => y,
                __classPrivateFieldGet: () => D,
                __classPrivateFieldIn: () => A,
                __classPrivateFieldSet: () => I,
                __createBinding: () => v,
                __decorate: () => s,
                __disposeResources: () => R,
                __esDecorate: () => u,
                __exportStar: () => h,
                __extends: () => o,
                __generator: () => _,
                __importDefault: () => T,
                __importStar: () => k,
                __makeTemplateObject: () => S,
                __metadata: () => p,
                __param: () => c,
                __propKey: () => f,
                __read: () => w,
                __rest: () => i,
                __runInitializers: () => l,
                __setFunctionName: () => d,
                __spread: () => g,
                __spreadArray: () => O,
                __spreadArrays: () => m,
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
                for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
                    var y = {};
                    for (var _ in n) y[_] = "access" === _ ? {} : n[_];
                    for (var _ in n.access) y.access[_] = n.access[_];
                    y.addInitializer = function(e) {
                        if (d) throw new TypeError("Cannot add initializers after decoration has completed");
                        a.push(i(e || null));
                    };
                    var v = (0, r[p])("accessor" === c ? {
                        get: f.get,
                        set: f.set
                    } : f[u], y);
                    if ("accessor" === c) {
                        if (void 0 === v) continue;
                        if (null === v || "object" != typeof v) throw new TypeError("Object expected");
                        (s = i(v.get)) && (f.get = s), (s = i(v.set)) && (f.set = s), (s = i(v.init)) && o.unshift(s);
                    } else (s = i(v)) && ("field" === c ? o.unshift(s) : f[u] = s);
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
            var v = Object.create ? function(e, t, r, n) {
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
            function h(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || v(t, e, r);
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
            function g() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
                return e;
            }
            function m() {
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
            function E(e) {
                return this instanceof E ? (this.v = e, this) : new E(e);
            }
            function j(e, t, r) {
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
                        (r = o[e](t)).value instanceof E ? Promise.resolve(r.value.v).then(c, u) : l(a[0][2], r);
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
            function x(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e;
                })), n("return"), t[Symbol.iterator] = function() {
                    return this;
                }, t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: E(e[n](t)),
                            done: !1
                        } : o ? o(t) : t;
                    } : o;
                }
            }
            function P(e) {
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
            function S(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e;
            }
            var M = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            };
            function k(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && v(t, e, r);
                return M(t, e), t;
            }
            function T(e) {
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
            function A(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }
            function C(e, t, r) {
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
            var H = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
            };
            function R(e) {
                function t(t) {
                    e.error = e.hasError ? new H(t, e.error, "An error was suppressed during disposal.") : t, 
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
                __metadata: p,
                __awaiter: y,
                __generator: _,
                __createBinding: v,
                __exportStar: h,
                __values: b,
                __read: w,
                __spread: g,
                __spreadArrays: m,
                __spreadArray: O,
                __await: E,
                __asyncGenerator: j,
                __asyncDelegator: x,
                __asyncValues: P,
                __makeTemplateObject: S,
                __importStar: k,
                __importDefault: T,
                __classPrivateFieldGet: D,
                __classPrivateFieldSet: I,
                __classPrivateFieldIn: A,
                __addDisposableResource: C,
                __disposeResources: R
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztZQUNBQSxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7Z0JBQUVDLFFBQU87O1lBQ3RDLEVBQVEsS0FFaEJDLGFBQWEsRUFBUSxNQUErQkY7OztZQ0g1REYsT0FBT0MsZUFBZUMsR0FBUyxjQUFjO2dCQUFFQyxRQUFPO2dCQUN0REQsRUFBUUcsbUJBQWM7WUFDdEIsTUFBTUMsSUFBVSxFQUFRO1lBNEN4QkosRUFBUUcsY0FsQlJFLGVBQTJCQztnQkFDdkIsTUFBTUMsSUFBY0QsRUFBTUEsTUFBTUUsV0FBV0MsTUFBS0MsS0FBcUIsdUJBQWJBLEVBQUtDLE9BQ3ZEQyxJQUFhTixFQUFNQSxNQUFNRSxXQUFXQyxNQUFLQyxLQUFxQixhQUFiQSxFQUFLQyxPQUN0REUsSUFBYVAsRUFBTUEsTUFBTUUsV0FBV0MsTUFBS0MsS0FBcUIsYUFBYkEsRUFBS0MsT0FDdERHLElBQWFSLEVBQU1BLE1BQU1FLFdBQVdDLE1BQUtDLEtBQXFCLGFBQWJBLEVBQUtDO2dCQUM1RCxTQUEyQixNQUFoQkosVUFBcUQsTUFBZkssVUFBb0QsTUFBZkUsVUFBb0QsTUFBZkQsR0FBNEI7b0JBQ25KLE1BQU1FLElBQWNYLEVBQVFZLGFBQWFDLE9BQU87d0JBQzVDQyxJQUFJLEdBQUdaLEVBQU1hLEdBQUdDLFFBQVFkLEVBQU1lLElBQUlDLE9BQU9oQixFQUFNZ0I7d0JBQy9DQyxhQUFhQyxPQUFPbEIsRUFBTW1CLE1BQU1BLE1BQU1DLE9BQU9DO3dCQUM3Q0MsUUFBUXRCLEVBQU1hLEdBQUdDO3dCQUNqQlMsaUJBQWlCdEIsRUFBWU47d0JBQzdCNkIsUUFBUWxCLEVBQVdYO3dCQUNuQjhCLGVBQWVqQixFQUFXYjt3QkFDMUIrQixRQUFRbkIsRUFBV1o7OzBCQUVqQmMsRUFBWWtCO0FBQ3RCO0FBQ0o7OztZQzVDQW5DLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztnQkFBRUMsUUFBTzs7WUFDdEMsRUFBUSxLQUVoQkMsYUFBYSxFQUFRLE1BQWFGOzs7WUNKMUNGLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztnQkFBRUMsUUFBTztnQkFDdERELEVBQVFnQixvQkFBZTtZQUN2QixNQUNNa0IsSUFEVSxFQUFRLEtBQ0NDLGdCQUFnQixFQUFRO1lBd0NqRG5DLEVBQVFnQixlQXZDUjtnQkFDSW9CLFlBQVlsQixHQUFJSyxHQUFhSyxHQUFRQyxHQUFpQkMsR0FBUUMsR0FBZUM7b0JBQ3pFSyxLQUFLbkIsS0FBS0EsR0FDVm1CLEtBQUtkLGNBQWNBLEdBQ25CYyxLQUFLVCxTQUFTQSxHQUNkUyxLQUFLUixrQkFBa0JBLEdBQ3ZCUSxLQUFLUCxTQUFTQTtvQkFDZE8sS0FBS04sZ0JBQWdCQSxHQUNyQk0sS0FBS0wsU0FBU0E7QUFDbEI7Z0JBQ0lNO29CQUNBLE9BQU87QUFDWDtnQkFDQWpDO29CQUNJLElBQUlhLElBQUttQixLQUFLbkI7cUJBQ2QsR0FBSWdCLEVBQVNLLFNBQWdCLFNBQVByQixHQUFhLHdEQUM3QnNCLE1BQU1DLElBQUksZ0JBQWdCdkIsRUFBR3dCLFlBQVlMO0FBQ25EO2dCQUNBTSxvQkFBb0J6QjtxQkFDaEIsR0FBSWdCLEVBQVNLLFNBQWdCLFNBQVByQixHQUFhLDBEQUM3QnNCLE1BQU1JLE9BQU8sZ0JBQWdCMUIsRUFBR3dCO0FBQzFDO2dCQUNBQyxpQkFBaUJ6QjtxQkFDYixHQUFJZ0IsRUFBU0ssU0FBUyxRQUFDckIsR0FBa0M7b0JBQ3pELE1BQU0yQixVQUFlTCxNQUFNTSxJQUFJLGdCQUFnQjVCLEVBQUd3QjtvQkFDbEQsT0FBSUcsSUFDT1IsS0FBS3BCLE9BQU80QixVQUduQjtBQUVSO2dCQUNBRixjQUFjRTtxQkFDVixHQUFJWCxFQUFTSyxTQUE4QixtQkFBZE0sRUFBTzNCLElBQWlCO29CQUNyRCxJQUFJNkIsSUFBUyxJQUFJVixLQUFLUSxFQUFPM0IsSUFBSTJCLEVBQU90QixhQUFhc0IsRUFBT2pCLFFBQVFpQixFQUFPaEIsaUJBQWlCZ0IsRUFBT2YsUUFBUWUsRUFBT2QsZUFBZWMsRUFBT2I7b0JBRXhJLE9BREFsQyxPQUFPa0QsT0FBT0QsR0FBUUYsSUFDZkU7QUFDWDs7OztZQ3pDSmpELE9BQU9DLGVBQWVDLEdBQVMsY0FBYztnQkFBRUMsUUFBTztnQkFDdERELEVBQVFpRCxlQUFVO1lBQ2xCLE1BQ01mLElBRFUsRUFBUSxLQUNDQyxnQkFBZ0IsRUFBUTtZQXNDakRuQyxFQUFRaUQsVUFyQ1I7Z0JBQ0liLFlBQVlsQixHQUFJSyxHQUFhSyxHQUFRc0IsR0FBUUM7b0JBQ3pDZCxLQUFLbkIsS0FBS0EsR0FDVm1CLEtBQUtkLGNBQWNBLEdBQ25CYyxLQUFLVCxTQUFTQSxHQUNkUyxLQUFLYSxTQUFTQSxHQUNkYixLQUFLYyxXQUFXQTtBQUNwQjtnQkFDSWI7b0JBQ0EsT0FBTztBQUNYO2dCQUNBakM7b0JBQ0ksSUFBSWEsSUFBS21CLEtBQUtuQjtxQkFDZCxHQUFJZ0IsRUFBU0ssU0FBZ0IsU0FBUHJCLEdBQWEsbURBQzdCc0IsTUFBTUMsSUFBSSxXQUFXdkIsRUFBR3dCLFlBQVlMO0FBQzlDO2dCQUNBTSxvQkFBb0J6QjtxQkFDaEIsR0FBSWdCLEVBQVNLLFNBQWdCLFNBQVByQixHQUFhLHFEQUM3QnNCLE1BQU1JLE9BQU8sV0FBVzFCLEVBQUd3QjtBQUNyQztnQkFDQUMsaUJBQWlCekI7cUJBQ2IsR0FBSWdCLEVBQVNLLFNBQVMsUUFBQ3JCLEdBQWtDO29CQUN6RCxNQUFNMkIsVUFBZUwsTUFBTU0sSUFBSSxXQUFXNUIsRUFBR3dCO29CQUM3QyxPQUFJRyxJQUNPUixLQUFLcEIsT0FBTzRCLFVBR25CO0FBRVI7Z0JBQ0FGLGNBQWNFO3FCQUNWLEdBQUlYLEVBQVNLLFNBQThCLG1CQUFkTSxFQUFPM0IsSUFBaUI7b0JBQ3JELElBQUk2QixJQUFTLElBQUlWLEtBQUtRLEVBQU8zQixJQUFJMkIsRUFBT3RCLGFBQWFzQixFQUFPakIsUUFBUWlCLEVBQU9LLFFBQVFMLEVBQU9NO29CQUUxRixPQURBckQsT0FBT2tELE9BQU9ELEdBQVFGLElBQ2ZFO0FBQ1g7Ozs7WUN0Q0pqRCxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7Z0JBQUVDLFFBQU87Z0JBQ3RERCxFQUFRaUQsVUFBVWpELEVBQVFnQixvQkFBZTtZQUV6QyxJQUFJb0MsSUFBaUIsRUFBUTtZQUM3QnRELE9BQU9DLGVBQWVDLEdBQVMsZ0JBQWdCO2dCQUFFcUQsYUFBWTtnQkFBTVAsS0FBSztvQkFBYyxPQUFPTSxFQUFlcEM7QUFBYzs7WUFDMUgsSUFBSXNDLElBQVksRUFBUTtZQUN4QnhELE9BQU9DLGVBQWVDLEdBQVMsV0FBVztnQkFBRXFELGFBQVk7Z0JBQU1QLEtBQUs7b0JBQWMsT0FBT1EsRUFBVUw7QUFBUzs7OztZQ1IzR00sRUFBT3ZELFVBQVV3RCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDZ0J6QixJQUFJQyxJQUFnQixTQUFTQyxHQUFHQztnQkFJOUIsT0FIQUYsSUFBZ0IzRCxPQUFPOEQsa0JBQ2xCO29CQUFFQyxXQUFXOzZCQUFnQkMsU0FBUyxTQUFVSixHQUFHQztvQkFBS0QsRUFBRUcsWUFBWUY7QUFBRyxxQkFDMUUsU0FBVUQsR0FBR0M7b0JBQUssS0FBSyxJQUFJSSxLQUFLSixHQUFPN0QsT0FBT2tFLFVBQVVDLGVBQWVDLEtBQUtQLEdBQUdJLE9BQUlMLEVBQUVLLEtBQUtKLEVBQUVJO0FBQUksbUJBQzdGTixFQUFjQyxHQUFHQztBQUMxQjtZQUVPLFNBQVNRLEVBQVVULEdBQUdDO2dCQUMzQixJQUFpQixxQkFBTkEsS0FBMEIsU0FBTkEsR0FDM0IsTUFBTSxJQUFJUyxVQUFVLHlCQUF5QkMsT0FBT1YsS0FBSztnQkFFN0QsU0FBU1c7b0JBQU9qQyxLQUFLRCxjQUFjc0I7QUFBRztnQkFEdENELEVBQWNDLEdBQUdDLElBRWpCRCxFQUFFTSxZQUFrQixTQUFOTCxJQUFhN0QsT0FBT21CLE9BQU8wQyxNQUFNVyxFQUFHTixZQUFZTCxFQUFFSztnQkFBVyxJQUFJTTtBQUNqRjtZQUVPLElBQUlDLElBQVc7Z0JBUXBCLE9BUEFBLElBQVd6RSxPQUFPa0QsVUFBVSxTQUFrQndCO29CQUMxQyxLQUFLLElBQUlDLEdBQUdDLElBQUksR0FBR0MsSUFBSUMsVUFBVUMsUUFBUUgsSUFBSUMsR0FBR0QsS0FFNUMsS0FBSyxJQUFJWCxLQURUVSxJQUFJRyxVQUFVRixJQUNPNUUsT0FBT2tFLFVBQVVDLGVBQWVDLEtBQUtPLEdBQUdWLE9BQUlTLEVBQUVULEtBQUtVLEVBQUVWO29CQUU5RSxPQUFPUztBQUNYLG1CQUNPRCxFQUFTTyxNQUFNekMsTUFBTXVDO0FBQzlCO1lBRU8sU0FBU0csRUFBT04sR0FBR087Z0JBQ3hCLElBQUlSLElBQUksQ0FBQztnQkFDVCxLQUFLLElBQUlULEtBQUtVLEdBQU8zRSxPQUFPa0UsVUFBVUMsZUFBZUMsS0FBS08sR0FBR1YsTUFBTWlCLEVBQUVDLFFBQVFsQixLQUFLLE1BQzlFUyxFQUFFVCxLQUFLVSxFQUFFVjtnQkFDYixJQUFTLFFBQUxVLEtBQXFELHFCQUFqQzNFLE9BQU9vRix1QkFDdEI7b0JBQUEsSUFBSVIsSUFBSTtvQkFBYixLQUFnQlgsSUFBSWpFLE9BQU9vRixzQkFBc0JULElBQUlDLElBQUlYLEVBQUVjLFFBQVFILEtBQzNETSxFQUFFQyxRQUFRbEIsRUFBRVcsTUFBTSxLQUFLNUUsT0FBT2tFLFVBQVVtQixxQkFBcUJqQixLQUFLTyxHQUFHVixFQUFFVyxRQUN2RUYsRUFBRVQsRUFBRVcsTUFBTUQsRUFBRVYsRUFBRVc7QUFGNEI7Z0JBSXRELE9BQU9GO0FBQ1Q7WUFFTyxTQUFTWSxFQUFXQyxHQUFZQyxHQUFRM0UsR0FBSzRFO2dCQUNsRCxJQUEySDdCLEdBQXZIOEIsSUFBSVosVUFBVUMsUUFBUVksSUFBSUQsSUFBSSxJQUFJRixJQUFrQixTQUFUQyxJQUFnQkEsSUFBT3pGLE9BQU80Rix5QkFBeUJKLEdBQVEzRSxLQUFPNEU7Z0JBQ3JILElBQXVCLG1CQUFaSSxXQUFvRCxxQkFBckJBLFFBQVFDLFVBQXlCSCxJQUFJRSxRQUFRQyxTQUFTUCxHQUFZQyxHQUFRM0UsR0FBSzRFLFNBQ3BILEtBQUssSUFBSWIsSUFBSVcsRUFBV1IsU0FBUyxHQUFHSCxLQUFLLEdBQUdBLE1BQVNoQixJQUFJMkIsRUFBV1gsUUFBSWUsS0FBS0QsSUFBSSxJQUFJOUIsRUFBRStCLEtBQUtELElBQUksSUFBSTlCLEVBQUU0QixHQUFRM0UsR0FBSzhFLEtBQUsvQixFQUFFNEIsR0FBUTNFLE9BQVM4RTtnQkFDaEosT0FBT0QsSUFBSSxLQUFLQyxLQUFLM0YsT0FBT0MsZUFBZXVGLEdBQVEzRSxHQUFLOEUsSUFBSUE7QUFDOUQ7WUFFTyxTQUFTSSxFQUFRQyxHQUFZQztnQkFDbEMsT0FBTyxTQUFVVCxHQUFRM0U7b0JBQU9vRixFQUFVVCxHQUFRM0UsR0FBS21GO0FBQWE7QUFDdEU7WUFFTyxTQUFTRSxFQUFhQyxHQUFNQyxHQUFjYixHQUFZYyxHQUFXQyxHQUFjQztnQkFDcEYsU0FBU0MsRUFBT0M7b0JBQUssU0FBVSxNQUFOQSxLQUE2QixxQkFBTkEsR0FBa0IsTUFBTSxJQUFJbkMsVUFBVTtvQkFBc0IsT0FBT21DO0FBQUc7Z0JBS3RILEtBSkEsSUFHSUMsR0FIQUMsSUFBT04sRUFBVU0sTUFBTTlGLElBQWUsYUFBVDhGLElBQW9CLFFBQWlCLGFBQVRBLElBQW9CLFFBQVEsU0FDckZuQixLQUFVWSxLQUFnQkQsSUFBT0UsRUFBa0IsU0FBSUYsSUFBT0EsRUFBS2pDLFlBQVksTUFDL0UwQyxJQUFhUixNQUFpQlosSUFBU3hGLE9BQU80Rix5QkFBeUJKLEdBQVFhLEVBQVVRLFFBQVEsQ0FBQyxJQUMvRkMsS0FBTyxHQUNMbEMsSUFBSVcsRUFBV1IsU0FBUyxHQUFHSCxLQUFLLEdBQUdBLEtBQUs7b0JBQzdDLElBQUltQyxJQUFVLENBQUM7b0JBQ2YsS0FBSyxJQUFJOUMsS0FBS29DLEdBQVdVLEVBQVE5QyxLQUFXLGFBQU5BLElBQWlCLENBQUMsSUFBSW9DLEVBQVVwQztvQkFDdEUsS0FBSyxJQUFJQSxLQUFLb0MsRUFBVVcsUUFBUUQsRUFBUUMsT0FBTy9DLEtBQUtvQyxFQUFVVyxPQUFPL0M7b0JBQ3JFOEMsRUFBUUUsaUJBQWlCLFNBQVVSO3dCQUFLLElBQUlLLEdBQU0sTUFBTSxJQUFJeEMsVUFBVTt3QkFBMkRpQyxFQUFrQlcsS0FBS1YsRUFBT0MsS0FBSztBQUFRO29CQUM1SyxJQUFJekUsS0FBUyxHQUFJdUQsRUFBV1gsSUFBYSxlQUFUK0IsSUFBc0I7d0JBQUUzRCxLQUFLNEQsRUFBVzVEO3dCQUFLTCxLQUFLaUUsRUFBV2pFO3dCQUFRaUUsRUFBVy9GLElBQU1rRztvQkFDdEgsSUFBYSxlQUFUSixHQUFxQjt3QkFDckIsU0FBZSxNQUFYM0UsR0FBbUI7d0JBQ3ZCLElBQWUsU0FBWEEsS0FBcUMsbUJBQVhBLEdBQXFCLE1BQU0sSUFBSXNDLFVBQVU7eUJBQ25Fb0MsSUFBSUYsRUFBT3hFLEVBQU9nQixVQUFNNEQsRUFBVzVELE1BQU0wRCxLQUN6Q0EsSUFBSUYsRUFBT3hFLEVBQU9XLFVBQU1pRSxFQUFXakUsTUFBTStELEtBQ3pDQSxJQUFJRixFQUFPeEUsRUFBT21GLFVBQU9iLEVBQWFjLFFBQVFWO0FBQ3RELDRCQUNTQSxJQUFJRixFQUFPeEUsUUFDSCxZQUFUMkUsSUFBa0JMLEVBQWFjLFFBQVFWLEtBQ3RDRSxFQUFXL0YsS0FBTzZGO0FBRS9CO2dCQUNJbEIsS0FBUXhGLE9BQU9DLGVBQWV1RixHQUFRYSxFQUFVUSxNQUFNRCxJQUMxREUsS0FBTztBQUNUO1lBRU8sU0FBU08sRUFBa0JDLEdBQVNoQixHQUFjbkc7Z0JBRXZELEtBREEsSUFBSW9ILElBQVd6QyxVQUFVQyxTQUFTLEdBQ3pCSCxJQUFJLEdBQUdBLElBQUkwQixFQUFhdkIsUUFBUUgsS0FDckN6RSxJQUFRb0gsSUFBV2pCLEVBQWExQixHQUFHUixLQUFLa0QsR0FBU25ILEtBQVNtRyxFQUFhMUIsR0FBR1IsS0FBS2tEO2dCQUVuRixPQUFPQyxJQUFXcEgsU0FBUTtBQUM1QjtZQUVPLFNBQVNxSCxFQUFVQztnQkFDeEIsT0FBb0IsbUJBQU5BLElBQWlCQSxJQUFJLEdBQUdDLE9BQU9EO0FBQy9DO1lBRU8sU0FBU0UsRUFBa0JsQixHQUFHSSxHQUFNZTtnQkFFekMsT0FEb0IsbUJBQVRmLE1BQW1CQSxJQUFPQSxFQUFLZ0IsY0FBYyxJQUFJSCxPQUFPYixFQUFLZ0IsYUFBYSxPQUFPO2dCQUNyRjdILE9BQU9DLGVBQWV3RyxHQUFHLFFBQVE7b0JBQUVxQixlQUFjO29CQUFNM0gsT0FBT3lILElBQVMsR0FBR0YsT0FBT0UsR0FBUSxLQUFLZixLQUFRQTs7QUFDL0c7WUFFTyxTQUFTa0IsRUFBV0MsR0FBYUM7Z0JBQ3RDLElBQXVCLG1CQUFacEMsV0FBb0QscUJBQXJCQSxRQUFRcUMsVUFBeUIsT0FBT3JDLFFBQVFxQyxTQUFTRixHQUFhQztBQUNsSDtZQUVPLFNBQVNFLEVBQVViLEdBQVNjLEdBQVlDLEdBQUdDO2dCQUVoRCxPQUFPLEtBQUtELE1BQU1BLElBQUlFLFdBQVUsU0FBVUMsR0FBU0M7b0JBQy9DLFNBQVNDLEVBQVV2STt3QkFBUzs0QkFBTXdJLEVBQUtMLEVBQVVNLEtBQUt6STtBQUFTLDBCQUFFLE9BQU8rRTs0QkFBS3VELEVBQU92RDtBQUFJO0FBQUU7b0JBQzFGLFNBQVMyRCxFQUFTMUk7d0JBQVM7NEJBQU13SSxFQUFLTCxFQUFpQixNQUFFbkk7QUFBUywwQkFBRSxPQUFPK0U7NEJBQUt1RCxFQUFPdkQ7QUFBSTtBQUFFO29CQUM3RixTQUFTeUQsRUFBSzNHO3dCQUpsQixJQUFlN0I7d0JBSWE2QixFQUFPOEUsT0FBTzBCLEVBQVF4RyxFQUFPN0IsVUFKMUNBLElBSXlENkIsRUFBTzdCLE9BSmhEQSxhQUFpQmtJLElBQUlsSSxJQUFRLElBQUlrSSxHQUFFLFNBQVVHOzRCQUFXQSxFQUFRckk7QUFBUSw2QkFJakIySSxLQUFLSixHQUFXRztBQUFXO29CQUM3R0YsR0FBTUwsSUFBWUEsRUFBVXRELE1BQU1zQyxHQUFTYyxLQUFjLEtBQUtRO0FBQ2xFO0FBQ0Y7WUFFTyxTQUFTRyxFQUFZekIsR0FBUzBCO2dCQUNuQyxJQUFzR3ZDLEdBQUd3QyxHQUFHdkUsR0FBR3dFLEdBQTNHeEMsSUFBSTtvQkFBRXlDLE9BQU87b0JBQUdDLE1BQU07d0JBQWEsSUFBVyxJQUFQMUUsRUFBRSxJQUFRLE1BQU1BLEVBQUU7d0JBQUksT0FBT0EsRUFBRTtBQUFJO29CQUFHMkUsTUFBTTtvQkFBSUMsS0FBSzs7Z0JBQ2hHLE9BQU9KLElBQUk7b0JBQUVOLE1BQU1XLEVBQUs7b0JBQUksT0FBU0EsRUFBSztvQkFBSSxRQUFVQSxFQUFLO21CQUF3QixxQkFBWEMsV0FBMEJOLEVBQUVNLE9BQU9DLFlBQVk7b0JBQWEsT0FBT2xIO0FBQU0sb0JBQUkyRztnQkFDdkosU0FBU0ssRUFBSzFFO29CQUFLLE9BQU8sU0FBVTZFO3dCQUFLLE9BQ3pDLFNBQWNDOzRCQUNWLElBQUlsRCxHQUFHLE1BQU0sSUFBSW5DLFVBQVU7NEJBQzNCLE1BQU80RSxNQUFNQSxJQUFJLEdBQUdTLEVBQUcsT0FBT2pELElBQUksS0FBS0E7Z0NBQ25DLElBQUlELElBQUksR0FBR3dDLE1BQU12RSxJQUFZLElBQVJpRixFQUFHLEtBQVNWLEVBQVUsU0FBSVUsRUFBRyxLQUFLVixFQUFTLFdBQU92RSxJQUFJdUUsRUFBVSxXQUFNdkUsRUFBRU4sS0FBSzZFO2dDQUFJLEtBQUtBLEVBQUVMLFdBQVdsRSxJQUFJQSxFQUFFTixLQUFLNkUsR0FBR1UsRUFBRyxLQUFLN0MsTUFBTSxPQUFPcEM7Z0NBRTNKLFFBREl1RSxJQUFJLEdBQUd2RSxNQUFHaUYsSUFBSyxFQUFTLElBQVJBLEVBQUcsSUFBUWpGLEVBQUV2RSxVQUN6QndKLEVBQUc7a0NBQ1AsS0FBSztrQ0FBRyxLQUFLO29DQUFHakYsSUFBSWlGO29DQUFJOztrQ0FDeEIsS0FBSztvQ0FBYyxPQUFYakQsRUFBRXlDLFNBQWdCO3dDQUFFaEosT0FBT3dKLEVBQUc7d0NBQUk3QyxPQUFNOzs7a0NBQ2hELEtBQUs7b0NBQUdKLEVBQUV5QyxTQUFTRixJQUFJVSxFQUFHLElBQUlBLElBQUssRUFBQztvQ0FBSTs7a0NBQ3hDLEtBQUs7b0NBQUdBLElBQUtqRCxFQUFFNEMsSUFBSU0sT0FBT2xELEVBQUUyQyxLQUFLTztvQ0FBTzs7a0NBQ3hDO29DQUNJLE1BQU1sRixJQUFJZ0MsRUFBRTJDLE9BQU0zRSxJQUFJQSxFQUFFSyxTQUFTLEtBQUtMLEVBQUVBLEVBQUVLLFNBQVMsT0FBa0IsTUFBVjRFLEVBQUcsTUFBc0IsTUFBVkEsRUFBRyxLQUFXO3dDQUFFakQsSUFBSTt3Q0FBRztBQUFVO29DQUMzRyxJQUFjLE1BQVZpRCxFQUFHLFFBQWNqRixLQUFNaUYsRUFBRyxLQUFLakYsRUFBRSxNQUFNaUYsRUFBRyxLQUFLakYsRUFBRSxLQUFNO3dDQUFFZ0MsRUFBRXlDLFFBQVFRLEVBQUc7d0NBQUk7QUFBTztvQ0FDckYsSUFBYyxNQUFWQSxFQUFHLE1BQVlqRCxFQUFFeUMsUUFBUXpFLEVBQUUsSUFBSTt3Q0FBRWdDLEVBQUV5QyxRQUFRekUsRUFBRSxJQUFJQSxJQUFJaUY7d0NBQUk7QUFBTztvQ0FDcEUsSUFBSWpGLEtBQUtnQyxFQUFFeUMsUUFBUXpFLEVBQUUsSUFBSTt3Q0FBRWdDLEVBQUV5QyxRQUFRekUsRUFBRSxJQUFJZ0MsRUFBRTRDLElBQUlwQyxLQUFLeUM7d0NBQUs7QUFBTztvQ0FDOURqRixFQUFFLE1BQUlnQyxFQUFFNEMsSUFBSU0sT0FDaEJsRCxFQUFFMkMsS0FBS087b0NBQU87O2dDQUV0QkQsSUFBS1gsRUFBSzVFLEtBQUtrRCxHQUFTWjtBQUM1Qiw4QkFBRSxPQUFPeEI7Z0NBQUt5RSxJQUFLLEVBQUMsR0FBR3pFLEtBQUkrRCxJQUFJO0FBQUcsOEJBQUU7Z0NBQVV4QyxJQUFJL0IsSUFBSTtBQUFHOzRCQUN6RCxJQUFZLElBQVJpRixFQUFHLElBQVEsTUFBTUEsRUFBRzs0QkFBSSxPQUFPO2dDQUFFeEosT0FBT3dKLEVBQUcsS0FBS0EsRUFBRyxVQUFLO2dDQUFRN0MsT0FBTTs7QUFDOUUseUJBdEJnRDZCLENBQUssRUFBQzlELEdBQUc2RTtBQUFLO0FBQUc7QUF1Qm5FO1lBRU8sSUFBSUcsSUFBa0I3SixPQUFPbUIsU0FBUyxTQUFVMkksR0FBR0MsR0FBR0MsR0FBR0M7cUJBQ25EQyxNQUFQRCxNQUFrQkEsSUFBS0Q7Z0JBQzNCLElBQUl2RSxJQUFPekYsT0FBTzRGLHlCQUF5Qm1FLEdBQUdDO2dCQUN6Q3ZFLE9BQVMsU0FBU0EsS0FBUXNFLEVBQUVJLGFBQWExRSxFQUFLMkUsWUFBWTNFLEVBQUtxQyxrQkFDaEVyQyxJQUFPO29CQUFFbEMsYUFBWTtvQkFBTVAsS0FBSzt3QkFBYSxPQUFPK0csRUFBRUM7QUFBSTtvQkFFOURoSyxPQUFPQyxlQUFlNkosR0FBR0csR0FBSXhFO0FBQzlCLGdCQUFJLFNBQVVxRSxHQUFHQyxHQUFHQyxHQUFHQztxQkFDWEMsTUFBUEQsTUFBa0JBLElBQUtELElBQzNCRixFQUFFRyxLQUFNRixFQUFFQztBQUNYO1lBRU0sU0FBUzVKLEVBQWEySixHQUFHRDtnQkFDOUIsS0FBSyxJQUFJN0YsS0FBSzhGLEdBQWEsY0FBTjlGLEtBQW9CakUsT0FBT2tFLFVBQVVDLGVBQWVDLEtBQUswRixHQUFHN0YsTUFBSTRGLEVBQWdCQyxHQUFHQyxHQUFHOUY7QUFDN0c7WUFFTyxTQUFTb0csRUFBU1A7Z0JBQ3ZCLElBQUluRixJQUFzQixxQkFBWDZFLFVBQXlCQSxPQUFPQyxVQUFVTSxJQUFJcEYsS0FBS21GLEVBQUVuRixJQUFJQyxJQUFJO2dCQUM1RSxJQUFJbUYsR0FBRyxPQUFPQSxFQUFFM0YsS0FBSzBGO2dCQUNyQixJQUFJQSxLQUF5QixtQkFBYkEsRUFBRS9FLFFBQXFCLE9BQU87b0JBQzFDNkQsTUFBTTt3QkFFRixPQURJa0IsS0FBS2xGLEtBQUtrRixFQUFFL0UsV0FBUStFLFNBQUksSUFDckI7NEJBQUUzSixPQUFPMkosS0FBS0EsRUFBRWxGOzRCQUFNa0MsT0FBT2dEOztBQUN4Qzs7Z0JBRUosTUFBTSxJQUFJeEYsVUFBVUssSUFBSSw0QkFBNEI7QUFDdEQ7WUFFTyxTQUFTMkYsRUFBT1IsR0FBR2pGO2dCQUN4QixJQUFJa0YsSUFBc0IscUJBQVhQLFVBQXlCTSxFQUFFTixPQUFPQztnQkFDakQsS0FBS00sR0FBRyxPQUFPRDtnQkFDZixJQUFtQm5FLEdBQVlULEdBQTNCTixJQUFJbUYsRUFBRTNGLEtBQUswRixJQUFPUyxJQUFLO2dCQUMzQjtvQkFDSSxZQUFjLE1BQU4xRixLQUFnQkEsTUFBTSxRQUFRYyxJQUFJZixFQUFFZ0UsUUFBUTlCLFFBQU15RCxFQUFHckQsS0FBS3ZCLEVBQUV4RjtBQUN4RSxrQkFDQSxPQUFPcUs7b0JBQVN0RixJQUFJO3dCQUFFc0YsT0FBT0E7O0FBQVMsa0JBQ3RDO29CQUNJO3dCQUNRN0UsTUFBTUEsRUFBRW1CLFNBQVNpRCxJQUFJbkYsRUFBVSxXQUFJbUYsRUFBRTNGLEtBQUtRO0FBQ2xELHNCQUNBO3dCQUFVLElBQUlNLEdBQUcsTUFBTUEsRUFBRXNGO0FBQU87QUFDcEM7Z0JBQ0EsT0FBT0Q7QUFDVDtZQUdPLFNBQVNFO2dCQUNkLEtBQUssSUFBSUYsSUFBSyxJQUFJM0YsSUFBSSxHQUFHQSxJQUFJRSxVQUFVQyxRQUFRSCxLQUMzQzJGLElBQUtBLEVBQUc3QyxPQUFPNEMsRUFBT3hGLFVBQVVGO2dCQUNwQyxPQUFPMkY7QUFDVDtZQUdPLFNBQVNHO2dCQUNkLEtBQUssSUFBSS9GLElBQUksR0FBR0MsSUFBSSxHQUFHK0YsSUFBSzdGLFVBQVVDLFFBQVFILElBQUkrRixHQUFJL0YsS0FBS0QsS0FBS0csVUFBVUYsR0FBR0c7Z0JBQ3hFLElBQUlZLElBQUkzQixNQUFNVyxJQUFJcUYsSUFBSTtnQkFBM0IsS0FBOEJwRixJQUFJLEdBQUdBLElBQUkrRixHQUFJL0YsS0FDekMsS0FBSyxJQUFJZ0csSUFBSTlGLFVBQVVGLElBQUlpRyxJQUFJLEdBQUdDLElBQUtGLEVBQUU3RixRQUFROEYsSUFBSUMsR0FBSUQ7Z0JBQUtiLEtBQzFEckUsRUFBRXFFLEtBQUtZLEVBQUVDO2dCQUNqQixPQUFPbEY7QUFDVDtZQUVPLFNBQVNvRixFQUFjQyxHQUFJQyxHQUFNQztnQkFDdEMsSUFBSUEsS0FBNkIsTUFBckJwRyxVQUFVQyxRQUFjLEtBQUssSUFBNEJ3RixHQUF4QjNGLElBQUksR0FBR3VHLElBQUlGLEVBQUtsRyxRQUFZSCxJQUFJdUcsR0FBR3ZHLE1BQ3hFMkYsS0FBUTNGLEtBQUtxRyxNQUNSVixNQUFJQSxJQUFLdkcsTUFBTUUsVUFBVWtILE1BQU1oSCxLQUFLNkcsR0FBTSxHQUFHckc7Z0JBQ2xEMkYsRUFBRzNGLEtBQUtxRyxFQUFLckc7Z0JBR3JCLE9BQU9vRyxFQUFHdEQsT0FBTzZDLEtBQU12RyxNQUFNRSxVQUFVa0gsTUFBTWhILEtBQUs2RztBQUNwRDtZQUVPLFNBQVNJLEVBQVEzQjtnQkFDdEIsT0FBT25ILGdCQUFnQjhJLEtBQVc5SSxLQUFLbUgsSUFBSUEsR0FBR25ILFFBQVEsSUFBSThJLEVBQVEzQjtBQUNwRTtZQUVPLFNBQVM0QixFQUFpQmhFLEdBQVNjLEdBQVlFO2dCQUNwRCxLQUFLa0IsT0FBTytCLGVBQWUsTUFBTSxJQUFJakgsVUFBVTtnQkFDL0MsSUFBb0RNLEdBQWhEc0UsSUFBSVosRUFBVXRELE1BQU1zQyxHQUFTYyxLQUFjLEtBQVFvRCxJQUFJO2dCQUMzRCxPQUFPNUcsSUFBSSxDQUFDLEdBQUcyRSxFQUFLLFNBQVNBLEVBQUssVUFBVUEsRUFBSyxXQUFXM0UsRUFBRTRFLE9BQU8rQixpQkFBaUI7b0JBQWMsT0FBT2hKO0FBQU0sbUJBQUdxQztnQkFDcEgsU0FBUzJFLEVBQUsxRTtvQkFBU3FFLEVBQUVyRSxPQUFJRCxFQUFFQyxLQUFLLFNBQVU2RTt3QkFBSyxPQUFPLElBQUluQixTQUFRLFNBQVVxQyxHQUFHL0c7NEJBQUsySCxFQUFFdEUsS0FBSyxFQUFDckMsR0FBRzZFLEdBQUdrQixHQUFHL0csT0FBTSxLQUFLNEgsRUFBTzVHLEdBQUc2RTtBQUFJO0FBQUk7QUFBRztnQkFDekksU0FBUytCLEVBQU81RyxHQUFHNkU7b0JBQUs7eUJBQ1YvRCxJQURxQnVELEVBQUVyRSxHQUFHNkUsSUFDbkJ2SixpQkFBaUJrTCxJQUFVOUMsUUFBUUMsUUFBUTdDLEVBQUV4RixNQUFNdUosR0FBR1osS0FBSzRDLEdBQVNqRCxLQUFVa0QsRUFBT0gsRUFBRSxHQUFHLElBQUk3RjtBQUR0RSxzQkFBRSxPQUFPVDt3QkFBS3lHLEVBQU9ILEVBQUUsR0FBRyxJQUFJdEc7QUFBSTtvQkFDL0UsSUFBY1M7QUFEbUU7Z0JBRWpGLFNBQVMrRixFQUFRdkw7b0JBQVNzTCxFQUFPLFFBQVF0TDtBQUFRO2dCQUNqRCxTQUFTc0ksRUFBT3RJO29CQUFTc0wsRUFBTyxTQUFTdEw7QUFBUTtnQkFDakQsU0FBU3dMLEVBQU9sRixHQUFHaUQ7b0JBQVNqRCxFQUFFaUQsSUFBSThCLEVBQUVJLFNBQVNKLEVBQUV6RyxVQUFRMEcsRUFBT0QsRUFBRSxHQUFHLElBQUlBLEVBQUUsR0FBRztBQUFLO0FBQ25GO1lBRU8sU0FBU0ssRUFBaUIvQjtnQkFDL0IsSUFBSWxGLEdBQUdYO2dCQUNQLE9BQU9XLElBQUksQ0FBQyxHQUFHMkUsRUFBSyxTQUFTQSxFQUFLLFVBQVMsU0FBVXJFO29CQUFLLE1BQU1BO0FBQUcscUJBQUlxRSxFQUFLLFdBQVczRSxFQUFFNEUsT0FBT0MsWUFBWTtvQkFBYyxPQUFPbEg7QUFBTSxtQkFBR3FDO2dCQUMxSSxTQUFTMkUsRUFBSzFFLEdBQUc0QjtvQkFBSzdCLEVBQUVDLEtBQUtpRixFQUFFakYsS0FBSyxTQUFVNkU7d0JBQUssUUFBUXpGLEtBQUtBLEtBQUs7NEJBQUU5RCxPQUFPa0wsRUFBUXZCLEVBQUVqRixHQUFHNkU7NEJBQUs1QyxPQUFNOzRCQUFVTCxJQUFJQSxFQUFFaUQsS0FBS0E7QUFBRyx3QkFBSWpEO0FBQUc7QUFDdkk7WUFFTyxTQUFTcUYsRUFBY2hDO2dCQUM1QixLQUFLTixPQUFPK0IsZUFBZSxNQUFNLElBQUlqSCxVQUFVO2dCQUMvQyxJQUFpQ00sR0FBN0JtRixJQUFJRCxFQUFFTixPQUFPK0I7Z0JBQ2pCLE9BQU94QixJQUFJQSxFQUFFM0YsS0FBSzBGLE1BQU1BLElBQXFDTyxFQUFTUCxJQUEyQmxGLElBQUksQ0FBQyxHQUFHMkUsRUFBSyxTQUFTQSxFQUFLLFVBQVVBLEVBQUssV0FBVzNFLEVBQUU0RSxPQUFPK0IsaUJBQWlCO29CQUFjLE9BQU9oSjtBQUFNLG1CQUFHcUM7Z0JBQzlNLFNBQVMyRSxFQUFLMUU7b0JBQUtELEVBQUVDLEtBQUtpRixFQUFFakYsTUFBTSxTQUFVNkU7d0JBQUssT0FBTyxJQUFJbkIsU0FBUSxTQUFVQyxHQUFTQzs2QkFDdkYsU0FBZ0JELEdBQVNDLEdBQVE3RSxHQUFHOEY7Z0NBQUtuQixRQUFRQyxRQUFRa0IsR0FBR1osTUFBSyxTQUFTWTtvQ0FBS2xCLEVBQVE7d0NBQUVySSxPQUFPdUo7d0NBQUc1QyxNQUFNbEQ7O0FBQU0sb0NBQUc2RTtBQUFTLDhCQURia0QsQ0FBT25ELEdBQVNDLElBQTdCaUIsSUFBSUksRUFBRWpGLEdBQUc2RSxJQUE4QjVDLE1BQU00QyxFQUFFdko7QUFBUTtBQUFJO0FBQUc7QUFFaks7WUFFTyxTQUFTNEwsRUFBcUJDLEdBQVFDO2dCQUUzQyxPQURJak0sT0FBT0MsaUJBQWtCRCxPQUFPQyxlQUFlK0wsR0FBUSxPQUFPO29CQUFFN0wsT0FBTzhMO3FCQUFpQkQsRUFBT0MsTUFBTUEsR0FDbEdEO0FBQ1Q7WUFFQSxJQUFJRSxJQUFxQmxNLE9BQU9tQixTQUFTLFNBQVUySSxHQUFHSjtnQkFDcEQxSixPQUFPQyxlQUFlNkosR0FBRyxXQUFXO29CQUFFdkcsYUFBWTtvQkFBTXBELE9BQU91Sjs7QUFDaEUsZ0JBQUksU0FBU0ksR0FBR0o7Z0JBQ2ZJLEVBQVcsVUFBSUo7QUFDakI7WUFFTyxTQUFTeUMsRUFBYUM7Z0JBQzNCLElBQUlBLEtBQU9BLEVBQUlqQyxZQUFZLE9BQU9pQztnQkFDbEMsSUFBSXBLLElBQVMsQ0FBQztnQkFDZCxJQUFXLFFBQVBvSyxHQUFhLEtBQUssSUFBSXBDLEtBQUtvQyxHQUFlLGNBQU5wQyxLQUFtQmhLLE9BQU9rRSxVQUFVQyxlQUFlQyxLQUFLZ0ksR0FBS3BDLE1BQUlILEVBQWdCN0gsR0FBUW9LLEdBQUtwQztnQkFFdEksT0FEQWtDLEVBQW1CbEssR0FBUW9LLElBQ3BCcEs7QUFDVDtZQUVPLFNBQVNLLEVBQWdCK0o7Z0JBQzlCLE9BQVFBLEtBQU9BLEVBQUlqQyxhQUFjaUMsSUFBTTtvQkFBRTNKLFNBQVMySjs7QUFDcEQ7WUFFTyxTQUFTQyxFQUF1QkMsR0FBVUMsR0FBTzVGLEdBQU1GO2dCQUM1RCxJQUFhLFFBQVRFLE1BQWlCRixHQUFHLE1BQU0sSUFBSW5DLFVBQVU7Z0JBQzVDLElBQXFCLHFCQUFWaUksSUFBdUJELE1BQWFDLE1BQVU5RixLQUFLOEYsRUFBTUMsSUFBSUYsSUFBVyxNQUFNLElBQUloSSxVQUFVO2dCQUN2RyxPQUFnQixRQUFUcUMsSUFBZUYsSUFBYSxRQUFURSxJQUFlRixFQUFFckMsS0FBS2tJLEtBQVk3RixJQUFJQSxFQUFFdEcsUUFBUW9NLEVBQU12SixJQUFJc0o7QUFDdEY7WUFFTyxTQUFTRyxFQUF1QkgsR0FBVUMsR0FBT3BNLEdBQU93RyxHQUFNRjtnQkFDbkUsSUFBYSxRQUFURSxHQUFjLE1BQU0sSUFBSXJDLFVBQVU7Z0JBQ3RDLElBQWEsUUFBVHFDLE1BQWlCRixHQUFHLE1BQU0sSUFBSW5DLFVBQVU7Z0JBQzVDLElBQXFCLHFCQUFWaUksSUFBdUJELE1BQWFDLE1BQVU5RixLQUFLOEYsRUFBTUMsSUFBSUYsSUFBVyxNQUFNLElBQUloSSxVQUFVO2dCQUN2RyxPQUFpQixRQUFUcUMsSUFBZUYsRUFBRXJDLEtBQUtrSSxHQUFVbk0sS0FBU3NHLElBQUlBLEVBQUV0RyxRQUFRQSxJQUFRb00sRUFBTTVKLElBQUkySixHQUFVbk0sSUFBU0E7QUFDdEc7WUFFTyxTQUFTdU0sRUFBc0JILEdBQU9EO2dCQUMzQyxJQUFpQixTQUFiQSxLQUEwQyxtQkFBYkEsS0FBNkMscUJBQWJBLEdBQTBCLE1BQU0sSUFBSWhJLFVBQVU7Z0JBQy9HLE9BQXdCLHFCQUFWaUksSUFBdUJELE1BQWFDLElBQVFBLEVBQU1DLElBQUlGO0FBQ3RFO1lBRU8sU0FBU0ssRUFBd0JDLEdBQUt6TSxHQUFPSTtnQkFDbEQsSUFBSUosV0FBb0M7b0JBQ3RDLElBQXFCLG1CQUFWQSxHQUFvQixNQUFNLElBQUltRSxVQUFVO29CQUNuRCxJQUFJdUk7b0JBQ0osSUFBSXRNLEdBQU87d0JBQ1AsS0FBS2lKLE9BQU9zRCxjQUFjLE1BQU0sSUFBSXhJLFVBQVU7d0JBQzlDdUksSUFBVTFNLEVBQU1xSixPQUFPc0Q7QUFDM0I7b0JBQ0EsU0FBZ0IsTUFBWkQsR0FBb0I7d0JBQ3BCLEtBQUtyRCxPQUFPcUQsU0FBUyxNQUFNLElBQUl2SSxVQUFVO3dCQUN6Q3VJLElBQVUxTSxFQUFNcUosT0FBT3FEO0FBQzNCO29CQUNBLElBQXVCLHFCQUFaQSxHQUF3QixNQUFNLElBQUl2SSxVQUFVO29CQUN2RHNJLEVBQUlHLE1BQU03RixLQUFLO3dCQUFFL0csT0FBT0E7d0JBQU8wTSxTQUFTQTt3QkFBU3RNLE9BQU9BOztBQUMxRCx1QkFDU0EsS0FDUHFNLEVBQUlHLE1BQU03RixLQUFLO29CQUFFM0csUUFBTzs7Z0JBRTFCLE9BQU9KO0FBQ1Q7WUFFQSxJQUFJNk0sSUFBOEMscUJBQXBCQyxrQkFBaUNBLGtCQUFrQixTQUFVekMsR0FBTzBDLEdBQVlDO2dCQUM1RyxJQUFJakksSUFBSSxJQUFJa0ksTUFBTUQ7Z0JBQ2xCLE9BQU9qSSxFQUFFMkIsT0FBTyxtQkFBbUIzQixFQUFFc0YsUUFBUUEsR0FBT3RGLEVBQUVnSSxhQUFhQSxHQUFZaEk7QUFDakY7WUFFTyxTQUFTbUksRUFBbUJUO2dCQUNqQyxTQUFTVSxFQUFLcEk7b0JBQ1owSCxFQUFJcEMsUUFBUW9DLEVBQUlXLFdBQVcsSUFBSVAsRUFBaUI5SCxHQUFHMEgsRUFBSXBDLE9BQU8sOENBQThDdEY7b0JBQzVHMEgsRUFBSVcsWUFBVztBQUNqQjtnQkFjQSxPQWJBLFNBQVMzRTtvQkFDUCxNQUFPZ0UsRUFBSUcsTUFBTWhJLFVBQVE7d0JBQ3ZCLElBQUl5SSxJQUFNWixFQUFJRyxNQUFNbkQ7d0JBQ3BCOzRCQUNFLElBQUk1SCxJQUFTd0wsRUFBSVgsV0FBV1csRUFBSVgsUUFBUXpJLEtBQUtvSixFQUFJck47NEJBQ2pELElBQUlxTixFQUFJak4sT0FBTyxPQUFPZ0ksUUFBUUMsUUFBUXhHLEdBQVE4RyxLQUFLRixJQUFNLFNBQVMxRDtnQ0FBYyxPQUFUb0ksRUFBS3BJLElBQVcwRDtBQUFRO0FBQ2pHLDBCQUNBLE9BQU8xRDs0QkFDSG9JLEVBQUtwSTtBQUNUO0FBQ0Y7b0JBQ0EsSUFBSTBILEVBQUlXLFVBQVUsTUFBTVgsRUFBSXBDO0FBQzlCLGlCQUNPNUI7QUFDVDtZQUVBO2dCQUNFdkU7Z0JBQ0FJO2dCQUNBUTtnQkFDQUs7Z0JBQ0FTO2dCQUNBZ0M7Z0JBQ0FJO2dCQUNBWTtnQkFDQWM7Z0JBQ0F6SjtnQkFDQWlLO2dCQUNBQztnQkFDQUc7Z0JBQ0FDO2dCQUNBSztnQkFDQU07Z0JBQ0FDO2dCQUNBTztnQkFDQUM7Z0JBQ0FDO2dCQUNBSTtnQkFDQTlKO2dCQUNBZ0s7Z0JBQ0FJO2dCQUNBQztnQkFDQUM7Z0JBQ0FVOzs7T0MvV0VJLElBQTJCLENBQUM7SUFHaEMsU0FBU0MsRUFBb0JDO1FBRTVCLElBQUlDLElBQWVILEVBQXlCRTtRQUM1QyxTQUFxQnpELE1BQWpCMEQsR0FDSCxPQUFPQSxFQUFhMU47UUFHckIsSUFBSXVELElBQVNnSyxFQUF5QkUsS0FBWTtZQUdqRHpOLFNBQVMsQ0FBQzs7UUFPWCxPQUhBMk4sRUFBb0JGLEdBQVVsSyxHQUFRQSxFQUFPdkQsU0FBU3dOLElBRy9DakssRUFBT3ZEO0FBQ2Y7SUNyQkF3TixFQUFvQjlKLElBQUksQ0FBQzFELEdBQVM0TjtRQUNqQyxLQUFJLElBQUlqTixLQUFPaU4sR0FDWEosRUFBb0I1RCxFQUFFZ0UsR0FBWWpOLE9BQVM2TSxFQUFvQjVELEVBQUU1SixHQUFTVyxNQUM1RWIsT0FBT0MsZUFBZUMsR0FBU1csR0FBSztZQUFFMEMsYUFBWTtZQUFNUCxLQUFLOEssRUFBV2pOOztBQUUxRSxPQ05ENk0sRUFBb0I1RCxJQUFJLENBQUNpRSxHQUFLQyxNQUFVaE8sT0FBT2tFLFVBQVVDLGVBQWVDLEtBQUsySixHQUFLQyxJQ0NsRk4sRUFBb0IvSCxJQUFLekY7UUFDSCxzQkFBWHNKLFVBQTBCQSxPQUFPeUUsZUFDMUNqTyxPQUFPQyxlQUFlQyxHQUFTc0osT0FBT3lFLGFBQWE7WUFBRTlOLE9BQU87WUFFN0RILE9BQU9DLGVBQWVDLEdBQVMsY0FBYztZQUFFQyxRQUFPOztBQUFPO0lDRjlELElBQUkrTixJQUFzQlIsRUFBb0IsTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL21hcHBpbmdzL21hcHBpbmdIYW5kbGVycy50cyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci8uL3NyYy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci8uL3NyYy90eXBlcy9tb2RlbHMvRXhlY3V0ZUV2ZW50LnRzIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL3R5cGVzL21vZGVscy9NZXNzYWdlLnRzIiwid2VicGFjazovL2pheC1pbmRleGVyLy4vc3JjL3R5cGVzL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF4LWluZGV4ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXgtaW5kZXhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pheC1pbmRleGVyL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG4vL0V4cG9ydHMgYWxsIGhhbmRsZXIgZnVuY3Rpb25zXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tYXBwaW5ncy9tYXBwaW5nSGFuZGxlcnNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUV2ZW50ID0gdm9pZCAwO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbi8qXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQmxvY2soYmxvY2s6IENvc21vc0Jsb2NrKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIElmIHlvdSB3YW50IHRvIGluZGV4IGVhY2ggYmxvY2sgaW4gQ29zbW9zIChKdW5vKSwgeW91IGNvdWxkIGRvIHRoYXQgaGVyZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVHJhbnNhY3Rpb24odHg6IENvc21vc1RyYW5zYWN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIElmIHlvdSB3YW50IHRvIGluZGV4IGVhY2ggdHJhbnNhY3Rpb24gaW4gQ29zbW9zIChKdW5vKSwgeW91IGNvdWxkIGRvIHRoYXQgaGVyZVxuICBjb25zdCB0cmFuc2FjdGlvblJlY29yZCA9IFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgaWQ6IHR4Lmhhc2gsXG4gICAgYmxvY2tIZWlnaHQ6IEJpZ0ludCh0eC5ibG9jay5ibG9jay5oZWFkZXIuaGVpZ2h0KSxcbiAgICB0aW1lc3RhbXA6IHR4LmJsb2NrLmJsb2NrLmhlYWRlci50aW1lLFxuICB9KTtcbiAgYXdhaXQgdHJhbnNhY3Rpb25SZWNvcmQuc2F2ZSgpO1xufVxuKi9cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKG1zZzogQ29zbW9zTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuLy8gICBjb25zdCBtZXNzYWdlUmVjb3JkID0gTWVzc2FnZS5jcmVhdGUoe1xuLy8gICAgIGlkOiBgJHttc2cudHguaGFzaH0tJHttc2cuaWR4fWAsXG4vLyAgICAgYmxvY2tIZWlnaHQ6IEJpZ0ludChtc2cuYmxvY2suYmxvY2suaGVhZGVyLmhlaWdodCksXG4vLyAgICAgdHhIYXNoOiBtc2cudHguaGFzaCxcbi8vICAgICBzZW5kZXI6IG1zZy5tc2cuZGVjb2RlZE1zZy5zZW5kZXIsXG4vLyAgICAgY29udHJhY3Q6IG1zZy5tc2cuZGVjb2RlZE1zZy5jb250cmFjdCxcbi8vICAgfSk7XG4vLyAgIGF3YWl0IG1lc3NhZ2VSZWNvcmQuc2F2ZSgpO1xuLy8gfVxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBhZGRyZXNzQXR0ciA9IGV2ZW50LmV2ZW50LmF0dHJpYnV0ZXMuZmluZChhdHRyID0+IGF0dHIua2V5ID09PSAnY29udHJhY3RfYWRkcmVzcycpO1xuICAgIGNvbnN0IHJlc3VsdEF0dHIgPSBldmVudC5ldmVudC5hdHRyaWJ1dGVzLmZpbmQoYXR0ciA9PiBhdHRyLmtleSA9PT0gJ3Jlc3VsdCcpO1xuICAgIGNvbnN0IG1ldGhvZEF0dHIgPSBldmVudC5ldmVudC5hdHRyaWJ1dGVzLmZpbmQoYXR0ciA9PiBhdHRyLmtleSA9PT0gJ21ldGhvZCcpO1xuICAgIGNvbnN0IHNlbmRlckF0dHIgPSBldmVudC5ldmVudC5hdHRyaWJ1dGVzLmZpbmQoYXR0ciA9PiBhdHRyLmtleSA9PT0gJ3NlbmRlcicpO1xuICAgIGlmICh0eXBlb2YgYWRkcmVzc0F0dHIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiByZXN1bHRBdHRyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2VuZGVyQXR0ciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1ldGhvZEF0dHIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50UmVjb3JkID0gdHlwZXNfMS5FeGVjdXRlRXZlbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGlkOiBgJHtldmVudC50eC5oYXNofS0ke2V2ZW50Lm1zZy5pZHh9LSR7ZXZlbnQuaWR4fWAsXG4gICAgICAgICAgICBibG9ja0hlaWdodDogQmlnSW50KGV2ZW50LmJsb2NrLmJsb2NrLmhlYWRlci5oZWlnaHQpLFxuICAgICAgICAgICAgdHhIYXNoOiBldmVudC50eC5oYXNoLFxuICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiBhZGRyZXNzQXR0ci52YWx1ZSxcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0QXR0ci52YWx1ZSxcbiAgICAgICAgICAgIHNlbmRlckFkZHJlc3M6IHNlbmRlckF0dHIudmFsdWUsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZEF0dHIudmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBldmVudFJlY29yZC5zYXZlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5oYW5kbGVFdmVudCA9IGhhbmRsZUV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbi8vIEF1dG8tZ2VuZXJhdGVkICwgRE8gTk9UIEVESVRcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZGVsc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhlY3V0ZUV2ZW50ID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGFzc2VydF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFzc2VydFwiKSk7XG5jbGFzcyBFeGVjdXRlRXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBibG9ja0hlaWdodCwgdHhIYXNoLCBjb250cmFjdEFkZHJlc3MsIHJlc3VsdCwgc2VuZGVyQWRkcmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5ibG9ja0hlaWdodCA9IGJsb2NrSGVpZ2h0O1xuICAgICAgICB0aGlzLnR4SGFzaCA9IHR4SGFzaDtcbiAgICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MgPSBjb250cmFjdEFkZHJlc3M7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB0aGlzLnNlbmRlckFkZHJlc3MgPSBzZW5kZXJBZGRyZXNzO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICB9XG4gICAgZ2V0IF9uYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0V4ZWN1dGVFdmVudCc7XG4gICAgfVxuICAgIGFzeW5jIHNhdmUoKSB7XG4gICAgICAgIGxldCBpZCA9IHRoaXMuaWQ7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KShpZCAhPT0gbnVsbCwgXCJDYW5ub3Qgc2F2ZSBFeGVjdXRlRXZlbnQgZW50aXR5IHdpdGhvdXQgYW4gSURcIik7XG4gICAgICAgIGF3YWl0IHN0b3JlLnNldCgnRXhlY3V0ZUV2ZW50JywgaWQudG9TdHJpbmcoKSwgdGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyByZW1vdmUoaWQpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKGlkICE9PSBudWxsLCBcIkNhbm5vdCByZW1vdmUgRXhlY3V0ZUV2ZW50IGVudGl0eSB3aXRob3V0IGFuIElEXCIpO1xuICAgICAgICBhd2FpdCBzdG9yZS5yZW1vdmUoJ0V4ZWN1dGVFdmVudCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0KGlkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KSgoaWQgIT09IG51bGwgJiYgaWQgIT09IHVuZGVmaW5lZCksIFwiQ2Fubm90IGdldCBFeGVjdXRlRXZlbnQgZW50aXR5IHdpdGhvdXQgYW4gSURcIik7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHN0b3JlLmdldCgnRXhlY3V0ZUV2ZW50JywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyZWNvcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUocmVjb3JkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KSh0eXBlb2YgcmVjb3JkLmlkID09PSAnc3RyaW5nJywgXCJpZCBtdXN0IGJlIHByb3ZpZGVkXCIpO1xuICAgICAgICBsZXQgZW50aXR5ID0gbmV3IHRoaXMocmVjb3JkLmlkLCByZWNvcmQuYmxvY2tIZWlnaHQsIHJlY29yZC50eEhhc2gsIHJlY29yZC5jb250cmFjdEFkZHJlc3MsIHJlY29yZC5yZXN1bHQsIHJlY29yZC5zZW5kZXJBZGRyZXNzLCByZWNvcmQubWV0aG9kKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbnRpdHksIHJlY29yZCk7XG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxufVxuZXhwb3J0cy5FeGVjdXRlRXZlbnQgPSBFeGVjdXRlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVzc2FnZSA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBhc3NlcnRfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJhc3NlcnRcIikpO1xuY2xhc3MgTWVzc2FnZSB7XG4gICAgY29uc3RydWN0b3IoaWQsIGJsb2NrSGVpZ2h0LCB0eEhhc2gsIHNlbmRlciwgY29udHJhY3QpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmJsb2NrSGVpZ2h0ID0gYmxvY2tIZWlnaHQ7XG4gICAgICAgIHRoaXMudHhIYXNoID0gdHhIYXNoO1xuICAgICAgICB0aGlzLnNlbmRlciA9IHNlbmRlcjtcbiAgICAgICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgIH1cbiAgICBnZXQgX25hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTWVzc2FnZSc7XG4gICAgfVxuICAgIGFzeW5jIHNhdmUoKSB7XG4gICAgICAgIGxldCBpZCA9IHRoaXMuaWQ7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KShpZCAhPT0gbnVsbCwgXCJDYW5ub3Qgc2F2ZSBNZXNzYWdlIGVudGl0eSB3aXRob3V0IGFuIElEXCIpO1xuICAgICAgICBhd2FpdCBzdG9yZS5zZXQoJ01lc3NhZ2UnLCBpZC50b1N0cmluZygpLCB0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIHJlbW92ZShpZCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoaWQgIT09IG51bGwsIFwiQ2Fubm90IHJlbW92ZSBNZXNzYWdlIGVudGl0eSB3aXRob3V0IGFuIElEXCIpO1xuICAgICAgICBhd2FpdCBzdG9yZS5yZW1vdmUoJ01lc3NhZ2UnLCBpZC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGdldChpZCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoKGlkICE9PSBudWxsICYmIGlkICE9PSB1bmRlZmluZWQpLCBcIkNhbm5vdCBnZXQgTWVzc2FnZSBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgc3RvcmUuZ2V0KCdNZXNzYWdlJywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyZWNvcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUocmVjb3JkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KSh0eXBlb2YgcmVjb3JkLmlkID09PSAnc3RyaW5nJywgXCJpZCBtdXN0IGJlIHByb3ZpZGVkXCIpO1xuICAgICAgICBsZXQgZW50aXR5ID0gbmV3IHRoaXMocmVjb3JkLmlkLCByZWNvcmQuYmxvY2tIZWlnaHQsIHJlY29yZC50eEhhc2gsIHJlY29yZC5zZW5kZXIsIHJlY29yZC5jb250cmFjdCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW50aXR5LCByZWNvcmQpO1xuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbn1cbmV4cG9ydHMuTWVzc2FnZSA9IE1lc3NhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lc3NhZ2UgPSBleHBvcnRzLkV4ZWN1dGVFdmVudCA9IHZvaWQgMDtcbi8vIEF1dG8tZ2VuZXJhdGVkICwgRE8gTk9UIEVESVRcbnZhciBFeGVjdXRlRXZlbnRfMSA9IHJlcXVpcmUoXCIuL0V4ZWN1dGVFdmVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkV4ZWN1dGVFdmVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRXhlY3V0ZUV2ZW50XzEuRXhlY3V0ZUV2ZW50OyB9IH0pO1xudmFyIE1lc3NhZ2VfMSA9IHJlcXVpcmUoXCIuL01lc3NhZ2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNZXNzYWdlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNZXNzYWdlXzEuTWVzc2FnZTsgfSB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMzQxKTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9fZXhwb3J0U3RhciIsImhhbmRsZUV2ZW50IiwidHlwZXNfMSIsImFzeW5jIiwiZXZlbnQiLCJhZGRyZXNzQXR0ciIsImF0dHJpYnV0ZXMiLCJmaW5kIiwiYXR0ciIsImtleSIsInJlc3VsdEF0dHIiLCJtZXRob2RBdHRyIiwic2VuZGVyQXR0ciIsImV2ZW50UmVjb3JkIiwiRXhlY3V0ZUV2ZW50IiwiY3JlYXRlIiwiaWQiLCJ0eCIsImhhc2giLCJtc2ciLCJpZHgiLCJibG9ja0hlaWdodCIsIkJpZ0ludCIsImJsb2NrIiwiaGVhZGVyIiwiaGVpZ2h0IiwidHhIYXNoIiwiY29udHJhY3RBZGRyZXNzIiwicmVzdWx0Iiwic2VuZGVyQWRkcmVzcyIsIm1ldGhvZCIsInNhdmUiLCJhc3NlcnRfMSIsIl9faW1wb3J0RGVmYXVsdCIsImNvbnN0cnVjdG9yIiwidGhpcyIsIl9uYW1lIiwiZGVmYXVsdCIsInN0b3JlIiwic2V0IiwidG9TdHJpbmciLCJzdGF0aWMiLCJyZW1vdmUiLCJyZWNvcmQiLCJnZXQiLCJlbnRpdHkiLCJhc3NpZ24iLCJNZXNzYWdlIiwic2VuZGVyIiwiY29udHJhY3QiLCJFeGVjdXRlRXZlbnRfMSIsImVudW1lcmFibGUiLCJNZXNzYWdlXzEiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2V4dGVuZHMiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsIl9fYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0IiwiZGVzYyIsImMiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX2VzRGVjb3JhdGUiLCJjdG9yIiwiZGVzY3JpcHRvckluIiwiY29udGV4dEluIiwiaW5pdGlhbGl6ZXJzIiwiZXh0cmFJbml0aWFsaXplcnMiLCJhY2NlcHQiLCJmIiwiXyIsImtpbmQiLCJkZXNjcmlwdG9yIiwibmFtZSIsImRvbmUiLCJjb250ZXh0IiwiYWNjZXNzIiwiYWRkSW5pdGlhbGl6ZXIiLCJwdXNoIiwiaW5pdCIsInVuc2hpZnQiLCJfX3J1bkluaXRpYWxpemVycyIsInRoaXNBcmciLCJ1c2VWYWx1ZSIsIl9fcHJvcEtleSIsIngiLCJjb25jYXQiLCJfX3NldEZ1bmN0aW9uTmFtZSIsInByZWZpeCIsImRlc2NyaXB0aW9uIiwiY29uZmlndXJhYmxlIiwiX19tZXRhZGF0YSIsIm1ldGFkYXRhS2V5IiwibWV0YWRhdGFWYWx1ZSIsIm1ldGFkYXRhIiwiX19hd2FpdGVyIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwicmVqZWN0ZWQiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwieSIsImciLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidiIsIm9wIiwicG9wIiwiX19jcmVhdGVCaW5kaW5nIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJfX2VzTW9kdWxlIiwid3JpdGFibGUiLCJfX3ZhbHVlcyIsIl9fcmVhZCIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZCIsIl9fc3ByZWFkQXJyYXlzIiwiaWwiLCJhIiwiaiIsImpsIiwiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJsIiwic2xpY2UiLCJfX2F3YWl0IiwiX19hc3luY0dlbmVyYXRvciIsImFzeW5jSXRlcmF0b3IiLCJxIiwicmVzdW1lIiwiZnVsZmlsbCIsInNldHRsZSIsInNoaWZ0IiwiX19hc3luY0RlbGVnYXRvciIsIl9fYXN5bmNWYWx1ZXMiLCJfX21ha2VUZW1wbGF0ZU9iamVjdCIsImNvb2tlZCIsInJhdyIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsIl9faW1wb3J0U3RhciIsIm1vZCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwiaGFzIiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsIl9fY2xhc3NQcml2YXRlRmllbGRJbiIsIl9fYWRkRGlzcG9zYWJsZVJlc291cmNlIiwiZW52IiwiZGlzcG9zZSIsImFzeW5jRGlzcG9zZSIsInN0YWNrIiwiX1N1cHByZXNzZWRFcnJvciIsIlN1cHByZXNzZWRFcnJvciIsInN1cHByZXNzZWQiLCJtZXNzYWdlIiwiRXJyb3IiLCJfX2Rpc3Bvc2VSZXNvdXJjZXMiLCJmYWlsIiwiaGFzRXJyb3IiLCJyZWMiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZGVmaW5pdGlvbiIsIm9iaiIsInByb3AiLCJ0b1N0cmluZ1RhZyIsIl9fd2VicGFja19leHBvcnRzX18iXSwic291cmNlUm9vdCI6IiJ9