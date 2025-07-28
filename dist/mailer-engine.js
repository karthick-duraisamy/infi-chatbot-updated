var C0 = Object.defineProperty;
var S0 = (e, t, n) => t in e ? C0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var an = (e, t, n) => S0(e, typeof t != "symbol" ? t + "" : t, n);
import * as d from "react";
import Y, { useCallback as dn, useMemo as Nt, useDebugValue as ic, useState as ct, useEffect as Ge, useRef as we, useLayoutEffect as ku, version as E0, isValidElement as zp, useContext as tn, createContext as Xa, forwardRef as Cr, Children as w0, useImperativeHandle as ys, cloneElement as x0, Component as Vp } from "react";
import * as Bp from "react-dom";
import Gd, { createPortal as Hp, unstable_batchedUpdates as $0, flushSync as tl } from "react-dom";
function O0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nl = { exports: {} }, mi = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function N0() {
  if (Xd) return mi;
  Xd = 1;
  var e = Symbol.for("react.fragment");
  return mi.Fragment = e, mi.jsxDEV = void 0, mi;
}
var pi = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd;
function _0() {
  return Qd || (Qd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Y, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function p(z) {
      if (z === null || typeof z != "object")
        return null;
      var ee = g && z[g] || z[y];
      return typeof ee == "function" ? ee : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(z) {
      {
        for (var ee = arguments.length, se = new Array(ee > 1 ? ee - 1 : 0), Oe = 1; Oe < ee; Oe++)
          se[Oe - 1] = arguments[Oe];
        E("error", z, se);
      }
    }
    function E(z, ee, se) {
      {
        var Oe = C.ReactDebugCurrentFrame, je = Oe.getStackAddendum();
        je !== "" && (ee += "%s", se = se.concat([je]));
        var Ke = se.map(function(He) {
          return String(He);
        });
        Ke.unshift("Warning: " + ee), Function.prototype.apply.call(console[z], console, Ke);
      }
    }
    var h = !1, b = !1, w = !1, x = !1, N = !1, $;
    $ = Symbol.for("react.module.reference");
    function O(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === a || N || z === o || z === l || z === u || x || z === v || h || b || w || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === m || z.$$typeof === i || z.$$typeof === s || z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === $ || z.getModuleId !== void 0));
    }
    function _(z, ee, se) {
      var Oe = z.displayName;
      if (Oe)
        return Oe;
      var je = ee.displayName || ee.name || "";
      return je !== "" ? se + "(" + je + ")" : se;
    }
    function R(z) {
      return z.displayName || "Context";
    }
    function P(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
        return z.displayName || z.name || null;
      if (typeof z == "string")
        return z;
      switch (z) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case s:
            var ee = z;
            return R(ee) + ".Consumer";
          case i:
            var se = z;
            return R(se._context) + ".Provider";
          case c:
            return _(z, z.render, "ForwardRef");
          case m:
            var Oe = z.displayName || null;
            return Oe !== null ? Oe : P(z.type) || "Memo";
          case f: {
            var je = z, Ke = je._payload, He = je._init;
            try {
              return P(He(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, D = 0, M, k, j, T, H, q, U;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function L() {
      {
        if (D === 0) {
          M = console.log, k = console.info, j = console.warn, T = console.error, H = console.group, q = console.groupCollapsed, U = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: z,
            log: z,
            warn: z,
            error: z,
            group: z,
            groupCollapsed: z,
            groupEnd: z
          });
        }
        D++;
      }
    }
    function A() {
      {
        if (D--, D === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, z, {
              value: M
            }),
            info: I({}, z, {
              value: k
            }),
            warn: I({}, z, {
              value: j
            }),
            error: I({}, z, {
              value: T
            }),
            group: I({}, z, {
              value: H
            }),
            groupCollapsed: I({}, z, {
              value: q
            }),
            groupEnd: I({}, z, {
              value: U
            })
          });
        }
        D < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = C.ReactCurrentDispatcher, Z;
    function G(z, ee, se) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (je) {
            var Oe = je.stack.trim().match(/\n( *(at )?)/);
            Z = Oe && Oe[1] || "";
          }
        return `
` + Z + z;
      }
    }
    var re = !1, J;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      J = new te();
    }
    function ne(z, ee) {
      if (!z || re)
        return "";
      {
        var se = J.get(z);
        if (se !== void 0)
          return se;
      }
      var Oe;
      re = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = W.current, W.current = null, L();
      try {
        if (ee) {
          var He = function() {
            throw Error();
          };
          if (Object.defineProperty(He.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(He, []);
            } catch ($t) {
              Oe = $t;
            }
            Reflect.construct(z, [], He);
          } else {
            try {
              He.call();
            } catch ($t) {
              Oe = $t;
            }
            z.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($t) {
            Oe = $t;
          }
          z();
        }
      } catch ($t) {
        if ($t && Oe && typeof $t.stack == "string") {
          for (var Fe = $t.stack.split(`
`), ut = Oe.stack.split(`
`), Ze = Fe.length - 1, et = ut.length - 1; Ze >= 1 && et >= 0 && Fe[Ze] !== ut[et]; )
            et--;
          for (; Ze >= 1 && et >= 0; Ze--, et--)
            if (Fe[Ze] !== ut[et]) {
              if (Ze !== 1 || et !== 1)
                do
                  if (Ze--, et--, et < 0 || Fe[Ze] !== ut[et]) {
                    var vt = `
` + Fe[Ze].replace(" at new ", " at ");
                    return z.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", z.displayName)), typeof z == "function" && J.set(z, vt), vt;
                  }
                while (Ze >= 1 && et >= 0);
              break;
            }
        }
      } finally {
        re = !1, W.current = Ke, A(), Error.prepareStackTrace = je;
      }
      var xt = z ? z.displayName || z.name : "", Ct = xt ? G(xt) : "";
      return typeof z == "function" && J.set(z, Ct), Ct;
    }
    function ue(z, ee, se) {
      return ne(z, !1);
    }
    function K(z) {
      var ee = z.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function de(z, ee, se) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return ne(z, K(z));
      if (typeof z == "string")
        return G(z);
      switch (z) {
        case l:
          return G("Suspense");
        case u:
          return G("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case c:
            return ue(z.render);
          case m:
            return de(z.type, ee, se);
          case f: {
            var Oe = z, je = Oe._payload, Ke = Oe._init;
            try {
              return de(Ke(je), ee, se);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, pe = {}, Ce = C.ReactDebugCurrentFrame;
    function fe(z) {
      if (z) {
        var ee = z._owner, se = de(z.type, z._source, ee ? ee.type : null);
        Ce.setExtraStackFrame(se);
      } else
        Ce.setExtraStackFrame(null);
    }
    function be(z, ee, se, Oe, je) {
      {
        var Ke = Function.call.bind(ae);
        for (var He in z)
          if (Ke(z, He)) {
            var Fe = void 0;
            try {
              if (typeof z[He] != "function") {
                var ut = Error((Oe || "React class") + ": " + se + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ut.name = "Invariant Violation", ut;
              }
              Fe = z[He](ee, He, Oe, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ze) {
              Fe = Ze;
            }
            Fe && !(Fe instanceof Error) && (fe(je), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", se, He, typeof Fe), fe(null)), Fe instanceof Error && !(Fe.message in pe) && (pe[Fe.message] = !0, fe(je), S("Failed %s type: %s", se, Fe.message), fe(null));
          }
      }
    }
    var me = Array.isArray;
    function Pe(z) {
      return me(z);
    }
    function $e(z) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, se = ee && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return se;
      }
    }
    function ce(z) {
      try {
        return xe(z), !1;
      } catch {
        return !0;
      }
    }
    function xe(z) {
      return "" + z;
    }
    function Ne(z) {
      if (ce(z))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(z)), xe(z);
    }
    var rt = C.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, tt, Le;
    Le = {};
    function qe(z) {
      if (ae.call(z, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function Me(z) {
      if (ae.call(z, "key")) {
        var ee = Object.getOwnPropertyDescriptor(z, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function ie(z, ee) {
      if (typeof z.ref == "string" && rt.current && ee && rt.current.stateNode !== ee) {
        var se = P(rt.current.type);
        Le[se] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(rt.current.type), z.ref), Le[se] = !0);
      }
    }
    function Se(z, ee) {
      {
        var se = function() {
          Ve || (Ve = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        se.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function ve(z, ee) {
      {
        var se = function() {
          tt || (tt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        se.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var ge = function(z, ee, se, Oe, je, Ke, He) {
      var Fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: ee,
        ref: se,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(Fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
    };
    function ze(z, ee, se, Oe, je) {
      {
        var Ke, He = {}, Fe = null, ut = null;
        se !== void 0 && (Ne(se), Fe = "" + se), Me(ee) && (Ne(ee.key), Fe = "" + ee.key), qe(ee) && (ut = ee.ref, ie(ee, je));
        for (Ke in ee)
          ae.call(ee, Ke) && !Ue.hasOwnProperty(Ke) && (He[Ke] = ee[Ke]);
        if (z && z.defaultProps) {
          var Ze = z.defaultProps;
          for (Ke in Ze)
            He[Ke] === void 0 && (He[Ke] = Ze[Ke]);
        }
        if (Fe || ut) {
          var et = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          Fe && Se(He, et), ut && ve(He, et);
        }
        return ge(z, Fe, ut, je, Oe, rt.current, He);
      }
    }
    var lt = C.ReactCurrentOwner, _t = C.ReactDebugCurrentFrame;
    function gt(z) {
      if (z) {
        var ee = z._owner, se = de(z.type, z._source, ee ? ee.type : null);
        _t.setExtraStackFrame(se);
      } else
        _t.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Ht(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function Rt() {
      {
        if (lt.current) {
          var z = P(lt.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function ot(z) {
      {
        if (z !== void 0) {
          var ee = z.fileName.replace(/^.*[\\\/]/, ""), se = z.lineNumber;
          return `

Check your code at ` + ee + ":" + se + ".";
        }
        return "";
      }
    }
    var Ye = {};
    function Te(z) {
      {
        var ee = Rt();
        if (!ee) {
          var se = typeof z == "string" ? z : z.displayName || z.name;
          se && (ee = `

Check the top-level render call using <` + se + ">.");
        }
        return ee;
      }
    }
    function ke(z, ee) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var se = Te(ee);
        if (Ye[se])
          return;
        Ye[se] = !0;
        var Oe = "";
        z && z._owner && z._owner !== lt.current && (Oe = " It was passed a child from " + P(z._owner.type) + "."), gt(z), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, Oe), gt(null);
      }
    }
    function Ie(z, ee) {
      {
        if (typeof z != "object")
          return;
        if (Pe(z))
          for (var se = 0; se < z.length; se++) {
            var Oe = z[se];
            Ht(Oe) && ke(Oe, ee);
          }
        else if (Ht(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var je = p(z);
          if (typeof je == "function" && je !== z.entries)
            for (var Ke = je.call(z), He; !(He = Ke.next()).done; )
              Ht(He.value) && ke(He.value, ee);
        }
      }
    }
    function Be(z) {
      {
        var ee = z.type;
        if (ee == null || typeof ee == "string")
          return;
        var se;
        if (typeof ee == "function")
          se = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === m))
          se = ee.propTypes;
        else
          return;
        if (se) {
          var Oe = P(ee);
          be(se, z.props, "prop", Oe, z);
        } else if (ee.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var je = P(ee);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xe(z) {
      {
        for (var ee = Object.keys(z.props), se = 0; se < ee.length; se++) {
          var Oe = ee[se];
          if (Oe !== "children" && Oe !== "key") {
            gt(z), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), gt(null);
            break;
          }
        }
        z.ref !== null && (gt(z), S("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    var jt = {};
    function at(z, ee, se, Oe, je, Ke) {
      {
        var He = O(z);
        if (!He) {
          var Fe = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (Fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = ot(je);
          ut ? Fe += ut : Fe += Rt();
          var Ze;
          z === null ? Ze = "null" : Pe(z) ? Ze = "array" : z !== void 0 && z.$$typeof === t ? (Ze = "<" + (P(z.type) || "Unknown") + " />", Fe = " Did you accidentally export a JSX literal instead of a component?") : Ze = typeof z, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ze, Fe);
        }
        var et = ze(z, ee, se, je, Ke);
        if (et == null)
          return et;
        if (He) {
          var vt = ee.children;
          if (vt !== void 0)
            if (Oe)
              if (Pe(vt)) {
                for (var xt = 0; xt < vt.length; xt++)
                  Ie(vt[xt], z);
                Object.freeze && Object.freeze(vt);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(vt, z);
        }
        if (ae.call(ee, "key")) {
          var Ct = P(z), $t = Object.keys(ee).filter(function(nt) {
            return nt !== "key";
          }), Je = $t.length > 0 ? "{key: someKey, " + $t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!jt[Ct + Je]) {
            var De = $t.length > 0 ? "{" + $t.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, Ct, De, Ct), jt[Ct + Je] = !0;
          }
        }
        return z === r ? Xe(et) : Be(et), et;
      }
    }
    var nn = at;
    pi.Fragment = r, pi.jsxDEV = nn;
  }()), pi;
}
process.env.NODE_ENV === "production" ? nl.exports = N0() : nl.exports = _0();
var le = nl.exports, rl = { exports: {} }, sc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function P0() {
  if (Yd) return sc;
  Yd = 1;
  var e = Y;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, s = e.useDebugValue;
  return sc.useSyncExternalStoreWithSelector = function(c, l, u, m, f) {
    var v = o(null);
    if (v.current === null) {
      var g = { hasValue: !1, value: null };
      v.current = g;
    } else g = v.current;
    v = i(
      function() {
        function p(b) {
          if (!C) {
            if (C = !0, S = b, b = m(b), f !== void 0 && g.hasValue) {
              var w = g.value;
              if (f(w, b))
                return E = w;
            }
            return E = b;
          }
          if (w = E, n(S, b)) return w;
          var x = m(b);
          return f !== void 0 && f(w, x) ? (S = b, w) : (S = b, E = x);
        }
        var C = !1, S, E, h = u === void 0 ? null : u;
        return [
          function() {
            return p(l());
          },
          h === null ? void 0 : function() {
            return p(h());
          }
        ];
      },
      [l, u, m, f]
    );
    var y = r(c, v[0], v[1]);
    return a(
      function() {
        g.hasValue = !0, g.value = y;
      },
      [y]
    ), s(y), y;
  }, sc;
}
var cc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;
function R0() {
  return Zd || (Zd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Y, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, a = t.useEffect, i = t.useMemo, s = t.useDebugValue;
    cc.useSyncExternalStoreWithSelector = function(c, l, u, m, f) {
      var v = o(null);
      if (v.current === null) {
        var g = { hasValue: !1, value: null };
        v.current = g;
      } else g = v.current;
      v = i(
        function() {
          function p(b) {
            if (!C) {
              if (C = !0, S = b, b = m(b), f !== void 0 && g.hasValue) {
                var w = g.value;
                if (f(w, b))
                  return E = w;
              }
              return E = b;
            }
            if (w = E, n(S, b))
              return w;
            var x = m(b);
            return f !== void 0 && f(w, x) ? (S = b, w) : (S = b, E = x);
          }
          var C = !1, S, E, h = u === void 0 ? null : u;
          return [
            function() {
              return p(l());
            },
            h === null ? void 0 : function() {
              return p(h());
            }
          ];
        },
        [l, u, m, f]
      );
      var y = r(c, v[0], v[1]);
      return a(
        function() {
          g.hasValue = !0, g.value = y;
        },
        [y]
      ), s(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), cc;
}
process.env.NODE_ENV === "production" ? rl.exports = P0() : rl.exports = R0();
var I0 = rl.exports;
function Wp(e) {
  e();
}
function M0() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Wp(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = t = {
        callback: n,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var Jd = {
  notify() {
  },
  get: () => []
};
function T0(e, t) {
  let n, r = Jd, o = 0, a = !1;
  function i(y) {
    u();
    const p = r.subscribe(y);
    let C = !1;
    return () => {
      C || (C = !0, p(), m());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function l() {
    return a;
  }
  function u() {
    o++, n || (n = e.subscribe(c), r = M0());
  }
  function m() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Jd);
  }
  function f() {
    a || (a = !0, u());
  }
  function v() {
    a && (a = !1, m());
  }
  const g = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: v,
    getListeners: () => r
  };
  return g;
}
var D0 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", A0 = /* @__PURE__ */ D0(), k0 = () => typeof navigator < "u" && navigator.product === "ReactNative", j0 = /* @__PURE__ */ k0(), F0 = () => A0 || j0 ? d.useLayoutEffect : d.useEffect, L0 = /* @__PURE__ */ F0();
function ef(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ba(e, t) {
  if (ef(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !ef(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var lc = /* @__PURE__ */ Symbol.for("react-redux-context"), uc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function z0() {
  if (!d.createContext) return {};
  const e = uc[lc] ?? (uc[lc] = /* @__PURE__ */ new Map());
  let t = e.get(d.createContext);
  return t || (t = d.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(d.createContext, t)), t;
}
var Mr = /* @__PURE__ */ z0();
function V0(e) {
  const { children: t, context: n, serverState: r, store: o } = e, a = d.useMemo(() => {
    const c = T0(o), l = {
      store: o,
      subscription: c,
      getServerState: r ? () => r : void 0
    };
    if (process.env.NODE_ENV === "production")
      return l;
    {
      const { identityFunctionCheck: u = "once", stabilityCheck: m = "once" } = e;
      return /* @__PURE__ */ Object.assign(l, {
        stabilityCheck: m,
        identityFunctionCheck: u
      });
    }
  }, [o, r]), i = d.useMemo(() => o.getState(), [o]);
  L0(() => {
    const { subscription: c } = a;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), i !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [a, i]);
  const s = n || Mr;
  return /* @__PURE__ */ d.createElement(s.Provider, { value: a }, t);
}
var B0 = V0;
function ju(e = Mr) {
  return function() {
    const n = d.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Up = /* @__PURE__ */ ju();
function qp(e = Mr) {
  const t = e === Mr ? Up : (
    // @ts-ignore
    ju(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Kp = /* @__PURE__ */ qp();
function H0(e = Mr) {
  const t = e === Mr ? Kp : qp(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Gp = /* @__PURE__ */ H0(), W0 = (e, t) => e === t;
function U0(e = Mr) {
  const t = e === Mr ? Up : ju(e), n = (r, o = {}) => {
    const { equalityFn: a = W0 } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!r)
        throw new Error("You must pass a selector to useSelector");
      if (typeof r != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof a != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const i = t(), { store: s, subscription: c, getServerState: l } = i, u = d.useRef(!0), m = d.useCallback(
      {
        [r.name](v) {
          const g = r(v);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: y = {} } = typeof o == "function" ? {} : o, { identityFunctionCheck: p, stabilityCheck: C } = i, {
              identityFunctionCheck: S,
              stabilityCheck: E
            } = {
              stabilityCheck: C,
              identityFunctionCheck: p,
              ...y
            };
            if (E === "always" || E === "once" && u.current) {
              const h = r(v);
              if (!a(g, h)) {
                let b;
                try {
                  throw new Error();
                } catch (w) {
                  ({ stack: b } = w);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: v,
                    selected: g,
                    selected2: h,
                    stack: b
                  }
                );
              }
            }
            if ((S === "always" || S === "once" && u.current) && g === v) {
              let h;
              try {
                throw new Error();
              } catch (b) {
                ({ stack: h } = b);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: h }
              );
            }
            u.current && (u.current = !1);
          }
          return g;
        }
      }[r.name],
      [r]
    ), f = I0.useSyncExternalStoreWithSelector(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      m,
      a
    );
    return d.useDebugValue(f), f;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Xp = /* @__PURE__ */ U0(), q0 = Wp;
function on(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var K0 = typeof Symbol == "function" && Symbol.observable || "@@observable", tf = K0, dc = () => Math.random().toString(36).substring(7).split("").join("."), G0 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ dc()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ dc()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${dc()}`
}, Kr = G0;
function tr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function X0(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Z0(e))
    return "date";
  if (Y0(e))
    return "error";
  const n = Q0(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Q0(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Y0(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Z0(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Or(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = X0(e)), t;
}
function Qp(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? on(2) : `Expected the root reducer to be a function. Instead, received: '${Or(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? on(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? on(1) : `Expected the enhancer to be a function. Instead, received: '${Or(n)}'`);
    return n(Qp)(e, t);
  }
  let r = e, o = t, a = /* @__PURE__ */ new Map(), i = a, s = 0, c = !1;
  function l() {
    i === a && (i = /* @__PURE__ */ new Map(), a.forEach((p, C) => {
      i.set(C, p);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? on(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function m(p) {
    if (typeof p != "function")
      throw new Error(process.env.NODE_ENV === "production" ? on(4) : `Expected the listener to be a function. Instead, received: '${Or(p)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? on(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let C = !0;
    l();
    const S = s++;
    return i.set(S, p), function() {
      if (C) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? on(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        C = !1, l(), i.delete(S), a = null;
      }
    };
  }
  function f(p) {
    if (!tr(p))
      throw new Error(process.env.NODE_ENV === "production" ? on(7) : `Actions must be plain objects. Instead, the actual type was: '${Or(p)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof p.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? on(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof p.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? on(17) : `Action "type" property must be a string. Instead, the actual type was: '${Or(p.type)}'. Value was: '${p.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? on(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, p);
    } finally {
      c = !1;
    }
    return (a = i).forEach((S) => {
      S();
    }), p;
  }
  function v(p) {
    if (typeof p != "function")
      throw new Error(process.env.NODE_ENV === "production" ? on(10) : `Expected the nextReducer to be a function. Instead, received: '${Or(p)}`);
    r = p, f({
      type: Kr.REPLACE
    });
  }
  function g() {
    const p = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(C) {
        if (typeof C != "object" || C === null)
          throw new Error(process.env.NODE_ENV === "production" ? on(11) : `Expected the observer to be an object. Instead, received: '${Or(C)}'`);
        function S() {
          const h = C;
          h.next && h.next(u());
        }
        return S(), {
          unsubscribe: p(S)
        };
      },
      [tf]() {
        return this;
      }
    };
  }
  return f({
    type: Kr.INIT
  }), {
    dispatch: f,
    subscribe: m,
    getState: u,
    replaceReducer: v,
    [tf]: g
  };
}
function nf(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function J0(e, t, n, r) {
  const o = Object.keys(t), a = n && n.type === Kr.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!tr(e))
    return `The ${a} has unexpected type of "${Or(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const i = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (i.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === Kr.REPLACE) && i.length > 0)
    return `Unexpected ${i.length > 1 ? "keys" : "key"} "${i.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function ey(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Kr.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? on(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: Kr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? on(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Kr.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Yp(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && nf(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let a;
  try {
    ey(n);
  } catch (i) {
    a = i;
  }
  return function(s = {}, c) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const m = J0(s, n, c, o);
      m && nf(m);
    }
    let l = !1;
    const u = {};
    for (let m = 0; m < r.length; m++) {
      const f = r[m], v = n[f], g = s[f], y = v(g, c);
      if (typeof y > "u") {
        const p = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? on(14) : `When called with an action of type ${p ? `"${String(p)}"` : "(unknown type)"}, the slice reducer for key "${f}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[f] = y, l = l || y !== g;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function Qi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ty(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? on(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const i = {
      getState: o.getState,
      dispatch: (c, ...l) => a(c, ...l)
    }, s = e.map((c) => c(i));
    return a = Qi(...s)(o.dispatch), {
      ...o,
      dispatch: a
    };
  };
}
function Fu(e) {
  return tr(e) && "type" in e && typeof e.type == "string";
}
var Lu = Symbol.for("immer-nothing"), ya = Symbol.for("immer-draftable"), hn = Symbol.for("immer-state"), Zp = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function qt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Zp[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Xr = Object.getPrototypeOf;
function nr(e) {
  return !!e && !!e[hn];
}
function Hn(e) {
  var t;
  return e ? Jp(e) || Array.isArray(e) || !!e[ya] || !!((t = e.constructor) != null && t[ya]) || Qa(e) || Ya(e) : !1;
}
var ny = Object.prototype.constructor.toString();
function Jp(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Xr(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === ny;
}
function ry(e) {
  return nr(e) || qt(15, e), e[hn].base_;
}
function _a(e, t) {
  Qr(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Qr(e) {
  const t = e[hn];
  return t ? t.type_ : Array.isArray(e) ? 1 : Qa(e) ? 2 : Ya(e) ? 3 : 0;
}
function Pa(e, t) {
  return Qr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function fc(e, t) {
  return Qr(e) === 2 ? e.get(t) : e[t];
}
function ev(e, t, n) {
  const r = Qr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function oy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Qa(e) {
  return e instanceof Map;
}
function Ya(e) {
  return e instanceof Set;
}
function Hr(e) {
  return e.copy_ || e.base_;
}
function ol(e, t) {
  if (Qa(e))
    return new Map(e);
  if (Ya(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Jp(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[hn];
    let o = Reflect.ownKeys(r);
    for (let a = 0; a < o.length; a++) {
      const i = o[a], s = r[i];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[i]
      });
    }
    return Object.create(Xr(e), r);
  } else {
    const r = Xr(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function zu(e, t = !1) {
  return Cs(e) || nr(e) || !Hn(e) || (Qr(e) > 1 && (e.set = e.add = e.clear = e.delete = ay), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => zu(r, !0))), e;
}
function ay() {
  qt(2);
}
function Cs(e) {
  return Object.isFrozen(e);
}
var al = {};
function Yr(e) {
  const t = al[e];
  return t || qt(0, e), t;
}
function iy(e, t) {
  al[e] || (al[e] = t);
}
var Ra;
function tv() {
  return Ra;
}
function sy(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function rf(e, t) {
  t && (Yr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function il(e) {
  sl(e), e.drafts_.forEach(cy), e.drafts_ = null;
}
function sl(e) {
  e === Ra && (Ra = e.parent_);
}
function of(e) {
  return Ra = sy(Ra, e);
}
function cy(e) {
  const t = e[hn];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function af(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[hn].modified_ && (il(t), qt(4)), Hn(e) && (e = Yi(t, e), t.parent_ || Zi(t, e)), t.patches_ && Yr("Patches").generateReplacementPatches_(
    n[hn].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Yi(t, n, []), il(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Lu ? e : void 0;
}
function Yi(e, t, n) {
  if (Cs(t))
    return t;
  const r = t[hn];
  if (!r)
    return _a(
      t,
      (o, a) => sf(e, r, t, o, a, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Zi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let a = o, i = !1;
    r.type_ === 3 && (a = new Set(o), o.clear(), i = !0), _a(
      a,
      (s, c) => sf(e, r, o, s, c, n, i)
    ), Zi(e, o, !1), n && e.patches_ && Yr("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function sf(e, t, n, r, o, a, i) {
  if (process.env.NODE_ENV !== "production" && o === n && qt(5), nr(o)) {
    const s = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Pa(t.assigned_, r) ? a.concat(r) : void 0, c = Yi(e, o, s);
    if (ev(n, r, c), nr(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else i && n.add(o);
  if (Hn(o) && !Cs(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Yi(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Zi(e, o);
  }
}
function Zi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && zu(t, n);
}
function ly(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : tv(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = r, a = Vu;
  n && (o = [r], a = Ia);
  const { revoke: i, proxy: s } = Proxy.revocable(o, a);
  return r.draft_ = s, r.revoke_ = i, s;
}
var Vu = {
  get(e, t) {
    if (t === hn)
      return e;
    const n = Hr(e);
    if (!Pa(n, t))
      return uy(e, n, t);
    const r = n[t];
    return e.finalized_ || !Hn(r) ? r : r === mc(e.base_, t) ? (pc(e), e.copy_[t] = ll(r, e)) : r;
  },
  has(e, t) {
    return t in Hr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Hr(e));
  },
  set(e, t, n) {
    const r = nv(Hr(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = mc(Hr(e), t), a = o == null ? void 0 : o[hn];
      if (a && a.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (oy(n, o) && (n !== void 0 || Pa(e.base_, t)))
        return !0;
      pc(e), cl(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return mc(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, pc(e), cl(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Hr(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    qt(11);
  },
  getPrototypeOf(e) {
    return Xr(e.base_);
  },
  setPrototypeOf() {
    qt(12);
  }
}, Ia = {};
_a(Vu, (e, t) => {
  Ia[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ia.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && qt(13), Ia.set.call(this, e, t, void 0);
};
Ia.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && qt(14), Vu.set.call(this, e[0], t, n, e[0]);
};
function mc(e, t) {
  const n = e[hn];
  return (n ? Hr(n) : e)[t];
}
function uy(e, t, n) {
  var o;
  const r = nv(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function nv(e, t) {
  if (!(t in e))
    return;
  let n = Xr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Xr(n);
  }
}
function cl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && cl(e.parent_));
}
function pc(e) {
  e.copy_ || (e.copy_ = ol(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var dy = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const a = n;
        n = t;
        const i = this;
        return function(c = a, ...l) {
          return i.produce(c, (u) => n.call(this, u, ...l));
        };
      }
      typeof n != "function" && qt(6), r !== void 0 && typeof r != "function" && qt(7);
      let o;
      if (Hn(t)) {
        const a = of(this), i = ll(t, void 0);
        let s = !0;
        try {
          o = n(i), s = !1;
        } finally {
          s ? il(a) : sl(a);
        }
        return rf(a, r), af(o, a);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Lu && (o = void 0), this.autoFreeze_ && zu(o, !0), r) {
          const a = [], i = [];
          Yr("Patches").generateReplacementPatches_(t, o, a, i), r(a, i);
        }
        return o;
      } else
        qt(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (i, ...s) => this.produceWithPatches(i, (c) => t(c, ...s));
      let r, o;
      return [this.produce(t, n, (i, s) => {
        r = i, o = s;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Hn(e) || qt(8), nr(e) && (e = fy(e));
    const t = of(this), n = ll(e, void 0);
    return n[hn].isManual_ = !0, sl(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[hn];
    (!n || !n.isManual_) && qt(9);
    const { scope_: r } = n;
    return rf(r, t), af(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Yr("Patches").applyPatches_;
    return nr(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function ll(e, t) {
  const n = Qa(e) ? Yr("MapSet").proxyMap_(e, t) : Ya(e) ? Yr("MapSet").proxySet_(e, t) : ly(e, t);
  return (t ? t.scope_ : tv()).drafts_.push(n), n;
}
function fy(e) {
  return nr(e) || qt(10, e), rv(e);
}
function rv(e) {
  if (!Hn(e) || Cs(e))
    return e;
  const t = e[hn];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = ol(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = ol(e, !0);
  return _a(n, (r, o) => {
    ev(n, r, rv(o));
  }), t && (t.finalized_ = !1), n;
}
function my() {
  process.env.NODE_ENV !== "production" && Zp.push(
    'Sets cannot have "replace" patches.',
    function(f) {
      return "Unsupported patch operation: " + f;
    },
    function(f) {
      return "Cannot apply patch, path doesn't resolve: " + f;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", n = "add", r = "remove";
  function o(f, v, g, y) {
    switch (f.type_) {
      case 0:
      case 2:
        return i(
          f,
          v,
          g,
          y
        );
      case 1:
        return a(f, v, g, y);
      case 3:
        return s(
          f,
          v,
          g,
          y
        );
    }
  }
  function a(f, v, g, y) {
    let { base_: p, assigned_: C } = f, S = f.copy_;
    S.length < p.length && ([p, S] = [S, p], [g, y] = [y, g]);
    for (let E = 0; E < p.length; E++)
      if (C[E] && S[E] !== p[E]) {
        const h = v.concat([E]);
        g.push({
          op: t,
          path: h,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(S[E])
        }), y.push({
          op: t,
          path: h,
          value: m(p[E])
        });
      }
    for (let E = p.length; E < S.length; E++) {
      const h = v.concat([E]);
      g.push({
        op: n,
        path: h,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(S[E])
      });
    }
    for (let E = S.length - 1; p.length <= E; --E) {
      const h = v.concat([E]);
      y.push({
        op: r,
        path: h
      });
    }
  }
  function i(f, v, g, y) {
    const { base_: p, copy_: C } = f;
    _a(f.assigned_, (S, E) => {
      const h = fc(p, S), b = fc(C, S), w = E ? Pa(p, S) ? t : n : r;
      if (h === b && w === t)
        return;
      const x = v.concat(S);
      g.push(w === r ? { op: w, path: x } : { op: w, path: x, value: b }), y.push(
        w === n ? { op: r, path: x } : w === r ? { op: n, path: x, value: m(h) } : { op: t, path: x, value: m(h) }
      );
    });
  }
  function s(f, v, g, y) {
    let { base_: p, copy_: C } = f, S = 0;
    p.forEach((E) => {
      if (!C.has(E)) {
        const h = v.concat([S]);
        g.push({
          op: r,
          path: h,
          value: E
        }), y.unshift({
          op: n,
          path: h,
          value: E
        });
      }
      S++;
    }), S = 0, C.forEach((E) => {
      if (!p.has(E)) {
        const h = v.concat([S]);
        g.push({
          op: n,
          path: h,
          value: E
        }), y.unshift({
          op: r,
          path: h,
          value: E
        });
      }
      S++;
    });
  }
  function c(f, v, g, y) {
    g.push({
      op: t,
      path: [],
      value: v === Lu ? void 0 : v
    }), y.push({
      op: t,
      path: [],
      value: f
    });
  }
  function l(f, v) {
    return v.forEach((g) => {
      const { path: y, op: p } = g;
      let C = f;
      for (let b = 0; b < y.length - 1; b++) {
        const w = Qr(C);
        let x = y[b];
        typeof x != "string" && typeof x != "number" && (x = "" + x), (w === 0 || w === 1) && (x === "__proto__" || x === "constructor") && qt(19), typeof C == "function" && x === "prototype" && qt(19), C = fc(C, x), typeof C != "object" && qt(18, y.join("/"));
      }
      const S = Qr(C), E = u(g.value), h = y[y.length - 1];
      switch (p) {
        case t:
          switch (S) {
            case 2:
              return C.set(h, E);
            case 3:
              qt(16);
            default:
              return C[h] = E;
          }
        case n:
          switch (S) {
            case 1:
              return h === "-" ? C.push(E) : C.splice(h, 0, E);
            case 2:
              return C.set(h, E);
            case 3:
              return C.add(E);
            default:
              return C[h] = E;
          }
        case r:
          switch (S) {
            case 1:
              return C.splice(h, 1);
            case 2:
              return C.delete(h);
            case 3:
              return C.delete(g.value);
            default:
              return delete C[h];
          }
        default:
          qt(17, p);
      }
    }), f;
  }
  function u(f) {
    if (!Hn(f))
      return f;
    if (Array.isArray(f))
      return f.map(u);
    if (Qa(f))
      return new Map(
        Array.from(f.entries()).map(([g, y]) => [g, u(y)])
      );
    if (Ya(f))
      return new Set(Array.from(f).map(u));
    const v = Object.create(Xr(f));
    for (const g in f)
      v[g] = u(f[g]);
    return Pa(f, ya) && (v[ya] = f[ya]), v;
  }
  function m(f) {
    return nr(f) ? u(f) : f;
  }
  iy("Patches", {
    applyPatches_: l,
    generatePatches_: o,
    generateReplacementPatches_: c
  });
}
var On = new dy(), Za = On.produce, ov = On.produceWithPatches.bind(
  On
);
On.setAutoFreeze.bind(On);
On.setUseStrictShallowCopy.bind(On);
var cf = On.applyPatches.bind(On);
On.createDraft.bind(On);
On.finishDraft.bind(On);
var py = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let r = !1;
    try {
      const o = {};
      e(o) === o && (r = !0);
    } catch {
    }
    if (r) {
      let o;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: o } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, vy = (e, t, n) => {
  const { memoize: r, memoizeOptions: o } = t, { inputSelectorResults: a, inputSelectorResultsCopy: i } = e, s = r(() => ({}), ...o);
  if (!(s.apply(null, a) === s.apply(null, i))) {
    let l;
    try {
      throw new Error();
    } catch (u) {
      ({ stack: l } = u);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: a,
        secondInputs: i,
        stack: l
      }
    );
  }
}, gy = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function hy(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function by(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function yy(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var lf = (e) => Array.isArray(e) ? e : [e];
function Cy(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return yy(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function uf(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var Sy = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...gy,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: py
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: vy
    }
  };
}, Ey = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, wy = typeof WeakRef < "u" ? WeakRef : Ey, xy = 0, df = 1;
function vi() {
  return {
    s: xy,
    v: void 0,
    o: null,
    p: null
  };
}
function Ji(e, t = {}) {
  let n = vi();
  const { resultEqualityCheck: r } = t;
  let o, a = 0;
  function i() {
    var m;
    let s = n;
    const { length: c } = arguments;
    for (let f = 0, v = c; f < v; f++) {
      const g = arguments[f];
      if (typeof g == "function" || typeof g == "object" && g !== null) {
        let y = s.o;
        y === null && (s.o = y = /* @__PURE__ */ new WeakMap());
        const p = y.get(g);
        p === void 0 ? (s = vi(), y.set(g, s)) : s = p;
      } else {
        let y = s.p;
        y === null && (s.p = y = /* @__PURE__ */ new Map());
        const p = y.get(g);
        p === void 0 ? (s = vi(), y.set(g, s)) : s = p;
      }
    }
    const l = s;
    let u;
    if (s.s === df)
      u = s.v;
    else if (u = e.apply(null, arguments), a++, r) {
      const f = ((m = o == null ? void 0 : o.deref) == null ? void 0 : m.call(o)) ?? o;
      f != null && r(f, u) && (u = f, a !== 0 && a--), o = typeof u == "object" && u !== null || typeof u == "function" ? new wy(u) : u;
    }
    return l.s = df, l.v = u, u;
  }
  return i.clearCache = () => {
    n = vi(), i.resetResultsCount();
  }, i.resultsCount = () => a, i.resetResultsCount = () => {
    a = 0;
  }, i;
}
function $y(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let a = 0, i = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), hy(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...n,
      ...c
    }, {
      memoize: m,
      memoizeOptions: f = [],
      argsMemoize: v = Ji,
      argsMemoizeOptions: g = [],
      devModeChecks: y = {}
    } = u, p = lf(f), C = lf(g), S = Cy(o), E = m(function() {
      return a++, l.apply(
        null,
        arguments
      );
    }, ...p);
    let h = !0;
    const b = v(function() {
      i++;
      const x = uf(
        S,
        arguments
      );
      if (s = E.apply(null, x), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: N, inputStabilityCheck: $ } = Sy(h, y);
        if (N.shouldRun && N.run(
          l,
          x,
          s
        ), $.shouldRun) {
          const O = uf(
            S,
            arguments
          );
          $.run(
            { inputSelectorResults: x, inputSelectorResultsCopy: O },
            { memoize: m, memoizeOptions: p },
            arguments
          );
        }
        h && (h = !1);
      }
      return s;
    }, ...C);
    return Object.assign(b, {
      resultFunc: l,
      memoizedResultFunc: E,
      dependencies: S,
      dependencyRecomputations: () => i,
      resetDependencyRecomputations: () => {
        i = 0;
      },
      lastResult: () => s,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: m,
      argsMemoize: v
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Bu = /* @__PURE__ */ $y(Ji), Oy = Object.assign(
  (e, t = Bu) => {
    by(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (a) => e[a]
    );
    return t(
      r,
      (...a) => a.reduce((i, s, c) => (i[n[c]] = s, i), {})
    );
  },
  { withTypes: () => Oy }
);
function av(e) {
  return ({ dispatch: n, getState: r }) => (o) => (a) => typeof a == "function" ? a(n, r, e) : o(a);
}
var Ny = av(), _y = av, Py = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Qi : Qi.apply(null, arguments);
}, iv = (e) => e && typeof e.match == "function";
function Ln(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? ft(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Fu(r) && r.type === e, n;
}
function Ry(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  iv(e);
}
function Iy(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function My(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = Ry
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(Iy(r.type)), n(r));
}
function sv(e, t) {
  let n = 0;
  return {
    measureTime(r) {
      const o = Date.now();
      try {
        return r();
      } finally {
        const a = Date.now();
        n += a - o;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${t} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var cv = class fa extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, fa.prototype);
  }
  static get [Symbol.species]() {
    return fa;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new fa(...t[0].concat(this)) : new fa(...t.concat(this));
  }
};
function ff(e) {
  return Hn(e) ? Za(e, () => {
  }) : e;
}
function gi(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Ty(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Dy(e, t, n) {
  const r = lv(e, t, n);
  return {
    detectMutations() {
      return uv(e, t, r, n);
    }
  };
}
function lv(e, t = [], n, r = "", o = /* @__PURE__ */ new Set()) {
  const a = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), a.children = {};
    for (const i in n) {
      const s = r ? r + "." + i : i;
      t.length && t.indexOf(s) !== -1 || (a.children[i] = lv(e, t, n[i], s));
    }
  }
  return a;
}
function uv(e, t = [], n, r, o = !1, a = "") {
  const i = n ? n.value : void 0, s = i === r;
  if (o && !s && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(i) || e(r))
    return {
      wasMutated: !1
    };
  const c = {};
  for (let u in n.children)
    c[u] = !0;
  for (let u in r)
    c[u] = !0;
  const l = t.length > 0;
  for (let u in c) {
    const m = a ? a + "." + u : u;
    if (l && t.some((g) => g instanceof RegExp ? g.test(m) : m === g))
      continue;
    const f = uv(e, t, n.children[u], r[u], s, m);
    if (f.wasMutated)
      return f;
  }
  return {
    wasMutated: !1
  };
}
function Ay(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(s, c, l, u) {
      return JSON.stringify(s, n(c, u), l);
    }, n = function(s, c) {
      let l = [], u = [];
      return c || (c = function(m, f) {
        return l[0] === f ? "[Circular ~]" : "[Circular ~." + u.slice(0, l.indexOf(f)).join(".") + "]";
      }), function(m, f) {
        if (l.length > 0) {
          var v = l.indexOf(this);
          ~v ? l.splice(v + 1) : l.push(this), ~v ? u.splice(v, 1 / 0, m) : u.push(m), ~l.indexOf(f) && (f = c.call(this, m, f));
        } else l.push(f);
        return s == null ? f : s.call(this, m, f);
      };
    }, {
      isImmutable: r = Ty,
      ignoredPaths: o,
      warnAfter: a = 32
    } = e;
    const i = Dy.bind(null, r, o);
    return ({
      getState: s
    }) => {
      let c = s(), l = i(c), u;
      return (m) => (f) => {
        const v = sv(a, "ImmutableStateInvariantMiddleware");
        v.measureTime(() => {
          if (c = s(), u = l.detectMutations(), l = i(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ft(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = m(f);
        return v.measureTime(() => {
          if (c = s(), u = l.detectMutations(), l = i(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ft(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(f)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), v.warnIfExceeded(), g;
      };
    };
  }
}
function dv(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || tr(e);
}
function ul(e, t = "", n = dv, r, o = [], a) {
  let i;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a != null && a.has(e)) return !1;
  const s = r != null ? r(e) : Object.entries(e), c = o.length > 0;
  for (const [l, u] of s) {
    const m = t ? t + "." + l : l;
    if (!(c && o.some((v) => v instanceof RegExp ? v.test(m) : m === v))) {
      if (!n(u))
        return {
          keyPath: m,
          value: u
        };
      if (typeof u == "object" && (i = ul(u, m, n, r, o, a), i))
        return i;
    }
  }
  return a && fv(e) && a.add(e), !1;
}
function fv(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !fv(t))
      return !1;
  return !0;
}
function ky(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = dv,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: i = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = e, u = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (f) => (v) => {
      if (!Fu(v))
        return f(v);
      const g = f(v), y = sv(i, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(v.type) !== -1) && y.measureTime(() => {
        const p = ul(v, "", t, n, o, u);
        if (p) {
          const {
            keyPath: C,
            value: S
          } = p;
          console.error(`A non-serializable value was detected in an action, in the path: \`${C}\`. Value:`, S, `
Take a look at the logic that dispatched this action: `, v, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (y.measureTime(() => {
        const p = m.getState(), C = ul(p, "", t, n, a, u);
        if (C) {
          const {
            keyPath: S,
            value: E
          } = C;
          console.error(`A non-serializable value was detected in the state, in the path: \`${S}\`. Value:`, E, `
Take a look at the reducer(s) handling this action type: ${v.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), y.warnIfExceeded()), g;
    };
  }
}
function hi(e) {
  return typeof e == "boolean";
}
var jy = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let i = new cv();
  if (n && (hi(n) ? i.push(Ny) : i.push(_y(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      hi(r) || (s = r), i.unshift(Ay(s));
    }
    if (o) {
      let s = {};
      hi(o) || (s = o), i.push(ky(s));
    }
    if (a) {
      let s = {};
      hi(a) || (s = a), i.unshift(My(s));
    }
  }
  return i;
}, Ss = "RTK_autoBatch", na = () => (e) => ({
  payload: e,
  meta: {
    [Ss]: !0
  }
}), mf = (e) => (t) => {
  setTimeout(t, e);
}, Fy = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, a = !1, i = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : mf(10)
  ) : e.type === "callback" ? e.queueNotification : mf(e.timeout), l = () => {
    i = !1, a && (a = !1, s.forEach((u) => u()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const m = () => o && u(), f = r.subscribe(m);
      return s.add(u), () => {
        f(), s.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var m;
      try {
        return o = !((m = u == null ? void 0 : u.meta) != null && m[Ss]), a = !o, a && (i || (i = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Ly = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new cv(e);
  return r && o.push(Fy(typeof r == "object" ? r : void 0)), o;
};
function zy(e) {
  const t = jy(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    duplicateMiddlewareCheck: a = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let c;
  if (typeof n == "function")
    c = n;
  else if (tr(n))
    c = Yp(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? ft(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ft(2) : "`middleware` field must be a callback");
  let l;
  if (typeof r == "function") {
    if (l = r(t), process.env.NODE_ENV !== "production" && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? ft(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = t();
  if (process.env.NODE_ENV !== "production" && l.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ft(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && a) {
    let y = /* @__PURE__ */ new Set();
    l.forEach((p) => {
      if (y.has(p))
        throw new Error(process.env.NODE_ENV === "production" ? ft(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      y.add(p);
    });
  }
  let u = Qi;
  o && (u = Py({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const m = ty(...l), f = Ly(m);
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ft(5) : "`enhancers` field must be a callback");
  let v = typeof s == "function" ? s(f) : f();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(v))
    throw new Error(process.env.NODE_ENV === "production" ? ft(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && v.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ft(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && l.length && !v.includes(m) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const g = u(...v);
  return Qp(c, i, g);
}
function mv(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(a, i) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? ft(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? ft(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof a == "string" ? a : a.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? ft(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? ft(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = i, o;
    },
    addMatcher(a, i) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? ft(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: a,
        reducer: i
      }), o;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? ft(31) : "`builder.addDefaultCase` can only be called once");
      return r = a, o;
    }
  };
  return e(o), [t, n, r];
}
function Vy(e) {
  return typeof e == "function";
}
function By(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? ft(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, o] = mv(t), a;
  if (Vy(e))
    a = () => ff(e());
  else {
    const s = ff(e);
    a = () => s;
  }
  function i(s = a(), c) {
    let l = [n[c.type], ...r.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, m) => {
      if (m)
        if (nr(u)) {
          const v = m(u, c);
          return v === void 0 ? u : v;
        } else {
          if (Hn(u))
            return Za(u, (f) => m(f, c));
          {
            const f = m(u, c);
            if (f === void 0) {
              if (u === null)
                return u;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return f;
          }
        }
      return u;
    }, s);
  }
  return i.getInitialState = a, i;
}
var pv = (e, t) => iv(e) ? e.match(t) : e(t);
function vr(...e) {
  return (t) => e.some((n) => pv(n, t));
}
function Ca(...e) {
  return (t) => e.every((n) => pv(n, t));
}
function Es(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Ja(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Hu(...e) {
  return e.length === 0 ? (t) => Es(t, ["pending"]) : Ja(e) ? vr(...e.map((t) => t.pending)) : Hu()(e[0]);
}
function To(...e) {
  return e.length === 0 ? (t) => Es(t, ["rejected"]) : Ja(e) ? vr(...e.map((t) => t.rejected)) : To()(e[0]);
}
function ws(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Ca(To(...e), t) : Ja(e) ? Ca(To(...e), t) : ws()(e[0]);
}
function Tr(...e) {
  return e.length === 0 ? (t) => Es(t, ["fulfilled"]) : Ja(e) ? vr(...e.map((t) => t.fulfilled)) : Tr()(e[0]);
}
function dl(...e) {
  return e.length === 0 ? (t) => Es(t, ["pending", "fulfilled", "rejected"]) : Ja(e) ? vr(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : dl()(e[0]);
}
var Hy = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Wu = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Hy[Math.random() * 64 | 0];
  return t;
}, Wy = ["name", "message", "stack", "code"], vc = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    an(this, "_type");
    this.payload = e, this.meta = t;
  }
}, pf = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    an(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Uy = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of Wy)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, vf = "External signal was aborted", fl = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = Ln(t + "/fulfilled", (c, l, u, m) => ({
      payload: c,
      meta: {
        ...m || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), a = Ln(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), i = Ln(t + "/rejected", (c, l, u, m, f) => ({
      payload: m,
      error: (r && r.serializeError || Uy)(c || "Rejected"),
      meta: {
        ...f || {},
        arg: u,
        requestId: l,
        rejectedWithValue: !!m,
        requestStatus: "rejected",
        aborted: (c == null ? void 0 : c.name) === "AbortError",
        condition: (c == null ? void 0 : c.name) === "ConditionError"
      }
    }));
    function s(c, {
      signal: l
    } = {}) {
      return (u, m, f) => {
        const v = r != null && r.idGenerator ? r.idGenerator(c) : Wu(), g = new AbortController();
        let y, p;
        function C(E) {
          p = E, g.abort();
        }
        l && (l.aborted ? C(vf) : l.addEventListener("abort", () => C(vf), {
          once: !0
        }));
        const S = async function() {
          var b, w;
          let E;
          try {
            let x = (b = r == null ? void 0 : r.condition) == null ? void 0 : b.call(r, c, {
              getState: m,
              extra: f
            });
            if (Ky(x) && (x = await x), x === !1 || g.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const N = new Promise(($, O) => {
              y = () => {
                O({
                  name: "AbortError",
                  message: p || "Aborted"
                });
              }, g.signal.addEventListener("abort", y);
            });
            u(a(v, c, (w = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : w.call(r, {
              requestId: v,
              arg: c
            }, {
              getState: m,
              extra: f
            }))), E = await Promise.race([N, Promise.resolve(n(c, {
              dispatch: u,
              getState: m,
              extra: f,
              requestId: v,
              signal: g.signal,
              abort: C,
              rejectWithValue: ($, O) => new vc($, O),
              fulfillWithValue: ($, O) => new pf($, O)
            })).then(($) => {
              if ($ instanceof vc)
                throw $;
              return $ instanceof pf ? o($.payload, v, c, $.meta) : o($, v, c);
            })]);
          } catch (x) {
            E = x instanceof vc ? i(null, v, c, x.payload, x.meta) : i(x, v, c);
          } finally {
            y && g.signal.removeEventListener("abort", y);
          }
          return r && !r.dispatchConditionRejection && i.match(E) && E.meta.condition || u(E), E;
        }();
        return Object.assign(S, {
          abort: C,
          requestId: v,
          arg: c,
          unwrap() {
            return S.then(qy);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: a,
      rejected: i,
      fulfilled: o,
      settled: vr(i, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function qy(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Ky(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Gy = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Xy(e, t) {
  return `${e}/${t}`;
}
function Qy({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Gy];
  return function(o) {
    const {
      name: a,
      reducerPath: i = a
    } = o;
    if (!a)
      throw new Error(process.env.NODE_ENV === "production" ? ft(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof o.reducers == "function" ? o.reducers(Zy()) : o.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(h, b) {
        const w = typeof h == "string" ? h : h.type;
        if (!w)
          throw new Error(process.env.NODE_ENV === "production" ? ft(12) : "`context.addCase` cannot be called with an empty action type");
        if (w in l.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? ft(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + w);
        return l.sliceCaseReducersByType[w] = b, u;
      },
      addMatcher(h, b) {
        return l.sliceMatchers.push({
          matcher: h,
          reducer: b
        }), u;
      },
      exposeAction(h, b) {
        return l.actionCreators[h] = b, u;
      },
      exposeCaseReducer(h, b) {
        return l.sliceCaseReducersByName[h] = b, u;
      }
    };
    c.forEach((h) => {
      const b = s[h], w = {
        reducerName: h,
        type: Xy(a, h),
        createNotation: typeof o.reducers == "function"
      };
      eC(b) ? nC(w, b, u, t) : Jy(w, b, u);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? ft(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [h = {}, b = [], w = void 0] = typeof o.extraReducers == "function" ? mv(o.extraReducers) : [o.extraReducers], x = {
        ...h,
        ...l.sliceCaseReducersByType
      };
      return By(o.initialState, (N) => {
        for (let $ in x)
          N.addCase($, x[$]);
        for (let $ of l.sliceMatchers)
          N.addMatcher($.matcher, $.reducer);
        for (let $ of b)
          N.addMatcher($.matcher, $.reducer);
        w && N.addDefaultCase(w);
      });
    }
    const f = (h) => h, v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new WeakMap();
    let y;
    function p(h, b) {
      return y || (y = m()), y(h, b);
    }
    function C() {
      return y || (y = m()), y.getInitialState();
    }
    function S(h, b = !1) {
      function w(N) {
        let $ = N[h];
        if (typeof $ > "u") {
          if (b)
            $ = gi(g, w, C);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? ft(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return $;
      }
      function x(N = f) {
        const $ = gi(v, b, () => /* @__PURE__ */ new WeakMap());
        return gi($, N, () => {
          const O = {};
          for (const [_, R] of Object.entries(o.selectors ?? {}))
            O[_] = Yy(R, N, () => gi(g, N, C), b);
          return O;
        });
      }
      return {
        reducerPath: h,
        getSelectors: x,
        get selectors() {
          return x(w);
        },
        selectSlice: w
      };
    }
    const E = {
      name: a,
      reducer: p,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: C,
      ...S(i),
      injectInto(h, {
        reducerPath: b,
        ...w
      } = {}) {
        const x = b ?? i;
        return h.inject({
          reducerPath: x,
          reducer: p
        }, w), {
          ...E,
          ...S(x, !0)
        };
      }
    };
    return E;
  };
}
function Yy(e, t, n, r) {
  function o(a, ...i) {
    let s = t(a);
    if (typeof s > "u") {
      if (r)
        s = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? ft(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...i);
  }
  return o.unwrapped = e, o;
}
var _r = /* @__PURE__ */ Qy();
function Zy() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Jy({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let a, i;
  if ("reducer" in r) {
    if (n && !tC(r))
      throw new Error(process.env.NODE_ENV === "production" ? ft(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = r.reducer, i = r.prepare;
  } else
    a = r;
  o.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, i ? Ln(e, i) : Ln(e));
}
function eC(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function tC(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function nC({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? ft(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: i,
    pending: s,
    rejected: c,
    settled: l,
    options: u
  } = n, m = o(e, a, u);
  r.exposeAction(t, m), i && r.addCase(m.fulfilled, i), s && r.addCase(m.pending, s), c && r.addCase(m.rejected, c), l && r.addMatcher(m.settled, l), r.exposeCaseReducer(t, {
    fulfilled: i || bi,
    pending: s || bi,
    rejected: c || bi,
    settled: l || bi
  });
}
function bi() {
}
function ft(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const rC = {
  messages: [
    {
      id: "1",
      sender: "ai",
      content: "Hello! I'm your AI assistant for airline reporting. I can help you generate custom reports, filter data by date ranges, select specific columns, and analyze booking and payment information. What would you like to explore today?",
      timestamp: Date.now()
    }
  ],
  isTyping: !1,
  currentUser: {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe"
  }
}, Sa = fl(
  "chat/sendMessageToAI",
  async ({ message: e, attachments: t, requestData: n }, { dispatch: r, extra: o }) => {
    var s, c;
    const a = e.toLowerCase().trim();
    let i = "hello.json";
    a.includes("hello") || a.includes("hi") ? i = "hello.json" : a.includes("booking") || a.includes("flight") ? i = "bookingdetails.json" : a.includes("group") || a.includes("request") ? i = "GroupRequestReport.json" : a.includes("last 3 months") || a.includes("3 months") ? i = "last3months.json" : (a.includes("report") || a.includes("get report")) && (i = "getthereport.json");
    try {
      const { ChatBotSerice: l } = await Promise.resolve().then(() => eS);
      return await r(
        (c = (s = l == null ? void 0 : l.endpoints) == null ? void 0 : s.getresponse1data) == null ? void 0 : c.initiate(i)
      ).unwrap();
    } catch (l) {
      return console.error("Error loading JSON response:", l), {
        id: "error-" + Date.now(),
        choices: [{
          message: {
            role: "assistant",
            content: `<p>I apologize, but I encountered an error loading the response for "${e}". Please try again or contact support.</p>`
          }
        }]
      };
    }
  }
), vv = _r({
  name: "chat",
  initialState: rC,
  reducers: {
    addUserMessage: (e, t) => {
      const n = {
        id: Date.now().toString(),
        sender: "user",
        content: t.payload.content,
        timestamp: Date.now(),
        attachments: t.payload.attachments
      };
      e.messages.push(n);
    },
    updateUser: (e, t) => {
      e.currentUser = { ...e.currentUser, ...t.payload };
    },
    setTyping: (e, t) => {
      e.isTyping = t.payload;
    },
    clearMessages: (e) => {
      e.messages = [], e.isTyping = !1;
    }
  },
  extraReducers: (e) => {
    e.addCase(Sa.pending, (t) => {
      t.isTyping = !0;
    }).addCase(Sa.fulfilled, (t, n) => {
      t.isTyping = !1;
      const r = n.payload;
      let o = "", a;
      r.choices && r.choices.length > 0 && (o = r.choices[0].message.content, a = r.choices);
      const i = {
        id: r.id || Date.now().toString(),
        sender: "ai",
        content: o,
        timestamp: Date.now(),
        choices: a
      };
      t.messages.push(i);
    }).addCase(Sa.rejected, (t) => {
      t.isTyping = !1;
      const n = {
        id: Date.now().toString(),
        sender: "ai",
        content: "I apologize, but I encountered an error processing your request. Please try again.",
        timestamp: Date.now()
      };
      t.messages.push(n);
    });
  }
}), { addUserMessage: gv, setTyping: GM, clearMessages: oC } = vv.actions, aC = vv.reducer, hv = localStorage.getItem("theme") === "dark";
typeof document < "u" && (document.body.className = hv ? "dark" : "light");
const iC = {
  isDark: hv
}, bv = _r({
  name: "theme",
  initialState: iC,
  reducers: {
    toggleTheme: (e) => {
      e.isDark = !e.isDark, localStorage.setItem("theme", e.isDark ? "dark" : "light"), document.body.className = e.isDark ? "dark" : "light";
    },
    setTheme: (e, t) => {
      e.isDark = t.payload, localStorage.setItem("theme", e.isDark ? "dark" : "light"), document.body.className = e.isDark ? "dark" : "light";
    }
  }
}), { toggleTheme: sC, setTheme: XM } = bv.actions, cC = bv.reducer;
var lC = class extends Error {
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(t) {
    super(t[0].message);
    /**
     * The schema issues.
     */
    an(this, "issues");
    this.name = "SchemaError", this.issues = t;
  }
}, yv = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(yv || {});
function gf(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var hf = tr;
function Cv(e, t) {
  if (e === t || !(hf(e) && hf(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), r = Object.keys(e);
  let o = n.length === r.length;
  const a = Array.isArray(t) ? [] : {};
  for (const i of n)
    a[i] = Cv(e[i], t[i]), o && (o = e[i] === a[i]);
  return o ? e : a;
}
function No(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var bf = (e) => [].concat(...e);
function uC(e) {
  return new RegExp("(^|:)//").test(e);
}
function dC() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function es(e) {
  return e != null;
}
function fC() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var mC = (e) => e.replace(/\/$/, ""), pC = (e) => e.replace(/^\//, "");
function vC(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (uC(t))
    return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = mC(e), t = pC(t), `${e}${n}${t}`;
}
function gC(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n).get(t);
}
var yf = (...e) => fetch(...e), hC = (e) => e.status >= 200 && e.status <= 299, bC = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Cf(e) {
  if (!tr(e))
    return e;
  const t = {
    ...e
  };
  for (const [n, r] of Object.entries(t))
    r === void 0 && delete t[n];
  return t;
}
function yC({
  baseUrl: e,
  prepareHeaders: t = (m) => m,
  fetchFn: n = yf,
  paramsSerializer: r,
  isJsonContentType: o = bC,
  jsonContentType: a = "application/json",
  jsonReplacer: i,
  timeout: s,
  responseHandler: c,
  validateStatus: l,
  ...u
} = {}) {
  return typeof fetch > "u" && n === yf && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (f, v, g) => {
    const {
      getState: y,
      extra: p,
      endpoint: C,
      forced: S,
      type: E
    } = v;
    let h, {
      url: b,
      headers: w = new Headers(u.headers),
      params: x = void 0,
      responseHandler: N = c ?? "json",
      validateStatus: $ = l ?? hC,
      timeout: O = s,
      ..._
    } = typeof f == "string" ? {
      url: f
    } : f, R, P = v.signal;
    O && (R = new AbortController(), v.signal.addEventListener("abort", R.abort), P = R.signal);
    let I = {
      ...u,
      signal: P,
      ..._
    };
    w = new Headers(Cf(w)), I.headers = await t(w, {
      getState: y,
      arg: f,
      extra: p,
      endpoint: C,
      forced: S,
      type: E,
      extraOptions: g
    }) || w;
    const D = (L) => typeof L == "object" && (tr(L) || Array.isArray(L) || typeof L.toJSON == "function");
    if (!I.headers.has("content-type") && D(I.body) && I.headers.set("content-type", a), D(I.body) && o(I.headers) && (I.body = JSON.stringify(I.body, i)), x) {
      const L = ~b.indexOf("?") ? "&" : "?", A = r ? r(x) : new URLSearchParams(Cf(x));
      b += L + A;
    }
    b = vC(e, b);
    const M = new Request(b, I);
    h = {
      request: new Request(b, I)
    };
    let j, T = !1, H = R && setTimeout(() => {
      T = !0, R.abort();
    }, O);
    try {
      j = await n(M);
    } catch (L) {
      return {
        error: {
          status: T ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(L)
        },
        meta: h
      };
    } finally {
      H && clearTimeout(H), R == null || R.signal.removeEventListener("abort", R.abort);
    }
    const q = j.clone();
    h.response = q;
    let U, V = "";
    try {
      let L;
      if (await Promise.all([
        m(j, N).then((A) => U = A, (A) => L = A),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        q.text().then((A) => V = A, () => {
        })
      ]), L) throw L;
    } catch (L) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: j.status,
          data: V,
          error: String(L)
        },
        meta: h
      };
    }
    return $(j, U) ? {
      data: U,
      meta: h
    } : {
      error: {
        status: j.status,
        data: U
      },
      meta: h
    };
  };
  async function m(f, v) {
    if (typeof v == "function")
      return v(f);
    if (v === "content-type" && (v = o(f.headers) ? "json" : "text"), v === "json") {
      const g = await f.text();
      return g.length ? JSON.parse(g) : null;
    }
    return f.text();
  }
}
var Sf = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Uu = /* @__PURE__ */ Ln("__rtkq/focused"), Sv = /* @__PURE__ */ Ln("__rtkq/unfocused"), qu = /* @__PURE__ */ Ln("__rtkq/online"), Ev = /* @__PURE__ */ Ln("__rtkq/offline");
function xs(e) {
  return e.type === "query";
}
function CC(e) {
  return e.type === "mutation";
}
function ei(e) {
  return e.type === "infinitequery";
}
function ts(e) {
  return xs(e) || ei(e);
}
function Ku(e, t, n, r, o, a) {
  return SC(e) ? e(t, n, r, o).filter(es).map(ml).map(a) : Array.isArray(e) ? e.map(ml).map(a) : [];
}
function SC(e) {
  return typeof e == "function";
}
function ml(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function EC(e, t) {
  return e.catch(t);
}
var Ma = Symbol("forceQueryFn"), pl = (e) => typeof e[Ma] == "function";
function wC({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: n,
  mutationThunk: r,
  api: o,
  context: a
}) {
  const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: c,
    removeMutationResult: l,
    updateSubscriptionOptions: u
  } = o.internalActions;
  return {
    buildInitiateQuery: C,
    buildInitiateInfiniteQuery: S,
    buildInitiateMutation: E,
    getRunningQueryThunk: m,
    getRunningMutationThunk: f,
    getRunningQueriesThunk: v,
    getRunningMutationsThunk: g
  };
  function m(h, b) {
    return (w) => {
      var $;
      const x = a.endpointDefinitions[h], N = e({
        queryArgs: b,
        endpointDefinition: x,
        endpointName: h
      });
      return ($ = i.get(w)) == null ? void 0 : $[N];
    };
  }
  function f(h, b) {
    return (w) => {
      var x;
      return (x = s.get(w)) == null ? void 0 : x[b];
    };
  }
  function v() {
    return (h) => Object.values(i.get(h) || {}).filter(es);
  }
  function g() {
    return (h) => Object.values(s.get(h) || {}).filter(es);
  }
  function y(h) {
    if (process.env.NODE_ENV !== "production") {
      if (y.triggered) return;
      const b = h(o.internalActions.internal_getRTKQSubscriptions());
      if (y.triggered = !0, typeof b != "object" || typeof (b == null ? void 0 : b.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? ft(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function p(h, b) {
    const w = (x, {
      subscribe: N = !0,
      forceRefetch: $,
      subscriptionOptions: O,
      [Ma]: _,
      ...R
    } = {}) => (P, I) => {
      var Z;
      const D = e({
        queryArgs: x,
        endpointDefinition: b,
        endpointName: h
      });
      let M;
      const k = {
        ...R,
        type: "query",
        subscribe: N,
        forceRefetch: $,
        subscriptionOptions: O,
        endpointName: h,
        originalArgs: x,
        queryCacheKey: D,
        [Ma]: _
      };
      if (xs(b))
        M = t(k);
      else {
        const {
          direction: G,
          initialPageParam: re
        } = R;
        M = n({
          ...k,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: G,
          initialPageParam: re
        });
      }
      const j = o.endpoints[h].select(x), T = P(M), H = j(I());
      y(P);
      const {
        requestId: q,
        abort: U
      } = T, V = H.requestId !== q, L = (Z = i.get(P)) == null ? void 0 : Z[D], A = () => j(I()), W = Object.assign(_ ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        T.then(A)
      ) : V && !L ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(H)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([L, T]).then(A)
      ), {
        arg: x,
        requestId: q,
        subscriptionOptions: O,
        queryCacheKey: D,
        abort: U,
        async unwrap() {
          const G = await W;
          if (G.isError)
            throw G.error;
          return G.data;
        },
        refetch: () => P(w(x, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          N && P(c({
            queryCacheKey: D,
            requestId: q
          }));
        },
        updateSubscriptionOptions(G) {
          W.subscriptionOptions = G, P(u({
            endpointName: h,
            requestId: q,
            queryCacheKey: D,
            options: G
          }));
        }
      });
      if (!L && !V && !_) {
        const G = gC(i, P, {});
        G[D] = W, W.then(() => {
          delete G[D], No(G) || i.delete(P);
        });
      }
      return W;
    };
    return w;
  }
  function C(h, b) {
    return p(h, b);
  }
  function S(h, b) {
    return p(h, b);
  }
  function E(h) {
    return (b, {
      track: w = !0,
      fixedCacheKey: x
    } = {}) => (N, $) => {
      const O = r({
        type: "mutation",
        endpointName: h,
        originalArgs: b,
        track: w,
        fixedCacheKey: x
      }), _ = N(O);
      y(N);
      const {
        requestId: R,
        abort: P,
        unwrap: I
      } = _, D = EC(_.unwrap().then((T) => ({
        data: T
      })), (T) => ({
        error: T
      })), M = () => {
        N(l({
          requestId: R,
          fixedCacheKey: x
        }));
      }, k = Object.assign(D, {
        arg: _.arg,
        requestId: R,
        abort: P,
        unwrap: I,
        reset: M
      }), j = s.get(N) || {};
      return s.set(N, j), j[R] = k, k.then(() => {
        delete j[R], No(j) || s.delete(N);
      }), x && (j[x] = k, k.then(() => {
        j[x] === k && (delete j[x], No(j) || s.delete(N));
      })), k;
    };
  }
}
var wv = class extends lC {
  constructor(e, t, n, r) {
    super(e), this.value = t, this.schemaName = n, this._bqMeta = r;
  }
};
async function Vr(e, t, n, r) {
  const o = await e["~standard"].validate(t);
  if (o.issues)
    throw new wv(o.issues, t, n, r);
  return o.value;
}
function xC(e) {
  return e;
}
var ra = (e = {}) => ({
  ...e,
  [Ss]: !0
});
function $C({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: r,
  api: o,
  assertTagType: a,
  selectors: i,
  onSchemaFailure: s,
  catchSchemaFailure: c,
  skipSchemaValidation: l
}) {
  const u = (_, R, P, I) => (D, M) => {
    const k = n[_], j = r({
      queryArgs: R,
      endpointDefinition: k,
      endpointName: _
    });
    if (D(o.internalActions.queryResultPatched({
      queryCacheKey: j,
      patches: P
    })), !I)
      return;
    const T = o.endpoints[_].select(R)(
      // Work around TS 4.1 mismatch
      M()
    ), H = Ku(k.providesTags, T.data, void 0, R, {}, a);
    D(o.internalActions.updateProvidedBy([{
      queryCacheKey: j,
      providedTags: H
    }]));
  };
  function m(_, R, P = 0) {
    const I = [R, ..._];
    return P && I.length > P ? I.slice(0, -1) : I;
  }
  function f(_, R, P = 0) {
    const I = [..._, R];
    return P && I.length > P ? I.slice(1) : I;
  }
  const v = (_, R, P, I = !0) => (D, M) => {
    const j = o.endpoints[_].select(R)(
      // Work around TS 4.1 mismatch
      M()
    ), T = {
      patches: [],
      inversePatches: [],
      undo: () => D(o.util.patchQueryData(_, R, T.inversePatches, I))
    };
    if (j.status === "uninitialized")
      return T;
    let H;
    if ("data" in j)
      if (Hn(j.data)) {
        const [q, U, V] = ov(j.data, P);
        T.patches.push(...U), T.inversePatches.push(...V), H = q;
      } else
        H = P(j.data), T.patches.push({
          op: "replace",
          path: [],
          value: H
        }), T.inversePatches.push({
          op: "replace",
          path: [],
          value: j.data
        });
    return T.patches.length === 0 || D(o.util.patchQueryData(_, R, T.patches, I)), T;
  }, g = (_, R, P) => (I) => I(o.endpoints[_].initiate(R, {
    subscribe: !1,
    forceRefetch: !0,
    [Ma]: () => ({
      data: P
    })
  })), y = (_, R) => _.query && _[R] ? _[R] : xC, p = async (_, {
    signal: R,
    abort: P,
    rejectWithValue: I,
    fulfillWithValue: D,
    dispatch: M,
    getState: k,
    extra: j
  }) => {
    var U, V;
    const T = n[_.endpointName], {
      metaSchema: H,
      skipSchemaValidation: q = l
    } = T;
    try {
      let L = y(T, "transformResponse");
      const A = {
        signal: R,
        abort: P,
        dispatch: M,
        getState: k,
        extra: j,
        endpoint: _.endpointName,
        type: _.type,
        forced: _.type === "query" ? C(_, k()) : void 0,
        queryCacheKey: _.type === "query" ? _.queryCacheKey : void 0
      }, W = _.type === "query" ? _[Ma] : void 0;
      let Z;
      const G = async (J, te, ne, ue) => {
        if (te == null && J.pages.length)
          return Promise.resolve({
            data: J
          });
        const K = {
          queryArg: _.originalArgs,
          pageParam: te
        }, de = await re(K), ae = ue ? m : f;
        return {
          data: {
            pages: ae(J.pages, de.data, ne),
            pageParams: ae(J.pageParams, te, ne)
          },
          meta: de.meta
        };
      };
      async function re(J) {
        let te;
        const {
          extraOptions: ne,
          argSchema: ue,
          rawResponseSchema: K,
          responseSchema: de
        } = T;
        if (ue && !q && (J = await Vr(
          ue,
          J,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), W ? te = W() : T.query ? te = await t(T.query(J), A, ne) : te = await T.queryFn(J, A, ne, (Ce) => t(Ce, A, ne)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const Ce = T.query ? "`baseQuery`" : "`queryFn`";
          let fe;
          if (!te)
            fe = `${Ce} did not return anything.`;
          else if (typeof te != "object")
            fe = `${Ce} did not return an object.`;
          else if (te.error && te.data)
            fe = `${Ce} returned an object containing both \`error\` and \`result\`.`;
          else if (te.error === void 0 && te.data === void 0)
            fe = `${Ce} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const be of Object.keys(te))
              if (be !== "error" && be !== "data" && be !== "meta") {
                fe = `The object returned by ${Ce} has the unknown property ${be}.`;
                break;
              }
          fe && console.error(`Error encountered handling the endpoint ${_.endpointName}.
                  ${fe}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, te);
        }
        if (te.error) throw new Sf(te.error, te.meta);
        let {
          data: ae
        } = te;
        K && !q && (ae = await Vr(K, te.data, "rawResponseSchema", te.meta));
        let pe = await L(ae, te.meta, J);
        return de && !q && (pe = await Vr(de, pe, "responseSchema", te.meta)), {
          ...te,
          data: pe
        };
      }
      if (_.type === "query" && "infiniteQueryOptions" in T) {
        const {
          infiniteQueryOptions: J
        } = T, {
          maxPages: te = 1 / 0
        } = J;
        let ne;
        const ue = {
          pages: [],
          pageParams: []
        }, K = (U = i.selectQueryEntry(k(), _.queryCacheKey)) == null ? void 0 : U.data, ae = /* arg.forceRefetch */ C(_, k()) && !_.direction || !K ? ue : K;
        if ("direction" in _ && _.direction && ae.pages.length) {
          const pe = _.direction === "backward", fe = (pe ? xv : vl)(J, ae, _.originalArgs);
          ne = await G(ae, fe, te, pe);
        } else {
          const {
            initialPageParam: pe = J.initialPageParam
          } = _, Ce = (K == null ? void 0 : K.pageParams) ?? [], fe = Ce[0] ?? pe, be = Ce.length;
          ne = await G(ae, fe, te), W && (ne = {
            data: ne.data.pages[0]
          });
          for (let me = 1; me < be; me++) {
            const Pe = vl(J, ne.data, _.originalArgs);
            ne = await G(ne.data, Pe, te);
          }
        }
        Z = ne;
      } else
        Z = await re(_.originalArgs);
      return H && !q && Z.meta && (Z.meta = await Vr(H, Z.meta, "metaSchema", Z.meta)), D(Z.data, ra({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: Z.meta
      }));
    } catch (L) {
      let A = L;
      if (A instanceof Sf) {
        let W = y(T, "transformErrorResponse");
        const {
          rawErrorResponseSchema: Z,
          errorResponseSchema: G
        } = T;
        let {
          value: re,
          meta: J
        } = A;
        try {
          Z && !q && (re = await Vr(Z, re, "rawErrorResponseSchema", J)), H && !q && (J = await Vr(H, J, "metaSchema", J));
          let te = await W(re, J, _.originalArgs);
          return G && !q && (te = await Vr(G, te, "errorResponseSchema", J)), I(te, ra({
            baseQueryMeta: J
          }));
        } catch (te) {
          A = te;
        }
      }
      try {
        if (A instanceof wv) {
          const W = {
            endpoint: _.endpointName,
            arg: _.originalArgs,
            type: _.type,
            queryCacheKey: _.type === "query" ? _.queryCacheKey : void 0
          };
          (V = T.onSchemaFailure) == null || V.call(T, A, W), s == null || s(A, W);
          const {
            catchSchemaFailure: Z = c
          } = T;
          if (Z)
            return I(Z(A, W), ra({
              baseQueryMeta: A._bqMeta
            }));
        }
      } catch (W) {
        A = W;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${_.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, A) : console.error(A), A;
    }
  };
  function C(_, R) {
    const P = i.selectQueryEntry(R, _.queryCacheKey), I = i.selectConfig(R).refetchOnMountOrArgChange, D = P == null ? void 0 : P.fulfilledTimeStamp, M = _.forceRefetch ?? (_.subscribe && I);
    return M ? M === !0 || (Number(/* @__PURE__ */ new Date()) - Number(D)) / 1e3 >= M : !1;
  }
  const S = () => fl(`${e}/executeQuery`, p, {
    getPendingMeta({
      arg: R
    }) {
      const P = n[R.endpointName];
      return ra({
        startedTimeStamp: Date.now(),
        ...ei(P) ? {
          direction: R.direction
        } : {}
      });
    },
    condition(R, {
      getState: P
    }) {
      var q;
      const I = P(), D = i.selectQueryEntry(I, R.queryCacheKey), M = D == null ? void 0 : D.fulfilledTimeStamp, k = R.originalArgs, j = D == null ? void 0 : D.originalArgs, T = n[R.endpointName], H = R.direction;
      return pl(R) ? !0 : (D == null ? void 0 : D.status) === "pending" ? !1 : C(R, I) || xs(T) && ((q = T == null ? void 0 : T.forceRefetch) != null && q.call(T, {
        currentArg: k,
        previousArg: j,
        endpointState: D,
        state: I
      })) ? !0 : !(M && !H);
    },
    dispatchConditionRejection: !0
  }), E = S(), h = S(), b = fl(`${e}/executeMutation`, p, {
    getPendingMeta() {
      return ra({
        startedTimeStamp: Date.now()
      });
    }
  }), w = (_) => "force" in _, x = (_) => "ifOlderThan" in _, N = (_, R, P) => (I, D) => {
    const M = w(P) && P.force, k = x(P) && P.ifOlderThan, j = (H = !0) => {
      const q = {
        forceRefetch: H,
        isPrefetch: !0
      };
      return o.endpoints[_].initiate(R, q);
    }, T = o.endpoints[_].select(R)(D());
    if (M)
      I(j());
    else if (k) {
      const H = T == null ? void 0 : T.fulfilledTimeStamp;
      if (!H) {
        I(j());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(H))) / 1e3 >= k && I(j());
    } else
      I(j(!1));
  };
  function $(_) {
    return (R) => {
      var P, I;
      return ((I = (P = R == null ? void 0 : R.meta) == null ? void 0 : P.arg) == null ? void 0 : I.endpointName) === _;
    };
  }
  function O(_, R) {
    return {
      matchPending: Ca(Hu(_), $(R)),
      matchFulfilled: Ca(Tr(_), $(R)),
      matchRejected: Ca(To(_), $(R))
    };
  }
  return {
    queryThunk: E,
    mutationThunk: b,
    infiniteQueryThunk: h,
    prefetch: N,
    updateQueryData: v,
    upsertQueryData: g,
    patchQueryData: u,
    buildMatchThunkActions: O
  };
}
function vl(e, {
  pages: t,
  pageParams: n
}, r) {
  const o = t.length - 1;
  return e.getNextPageParam(t[o], t, n[o], n, r);
}
function xv(e, {
  pages: t,
  pageParams: n
}, r) {
  var o;
  return (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, t[0], t, n[0], n, r);
}
function $v(e, t, n, r) {
  return Ku(n[e.meta.arg.endpointName][t], Tr(e) ? e.payload : void 0, ws(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, r);
}
function yi(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Ta(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ef(e, t, n) {
  const r = e[Ta(t)];
  r && n(r);
}
var Ci = {};
function OC({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: o,
    apiUid: a,
    extractRehydrationInfo: i,
    hasRehydrationInfo: s
  },
  assertTagType: c,
  config: l
}) {
  const u = Ln(`${e}/resetApiState`);
  function m($, O, _, R) {
    var P;
    $[P = O.queryCacheKey] ?? ($[P] = {
      status: "uninitialized",
      endpointName: O.endpointName
    }), yi($, O.queryCacheKey, (I) => {
      I.status = "pending", I.requestId = _ && I.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        I.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        R.requestId
      ), O.originalArgs !== void 0 && (I.originalArgs = O.originalArgs), I.startedTimeStamp = R.startedTimeStamp;
      const D = o[R.arg.endpointName];
      ei(D) && "direction" in O && (I.direction = O.direction);
    });
  }
  function f($, O, _, R) {
    yi($, O.arg.queryCacheKey, (P) => {
      if (P.requestId !== O.requestId && !R) return;
      const {
        merge: I
      } = o[O.arg.endpointName];
      if (P.status = "fulfilled", I)
        if (P.data !== void 0) {
          const {
            fulfilledTimeStamp: D,
            arg: M,
            baseQueryMeta: k,
            requestId: j
          } = O;
          let T = Za(P.data, (H) => I(H, _, {
            arg: M.originalArgs,
            baseQueryMeta: k,
            fulfilledTimeStamp: D,
            requestId: j
          }));
          P.data = T;
        } else
          P.data = _;
      else
        P.data = o[O.arg.endpointName].structuralSharing ?? !0 ? Cv(nr(P.data) ? ry(P.data) : P.data, _) : _;
      delete P.error, P.fulfilledTimeStamp = O.fulfilledTimeStamp;
    });
  }
  const v = _r({
    name: `${e}/queries`,
    initialState: Ci,
    reducers: {
      removeQueryResult: {
        reducer($, {
          payload: {
            queryCacheKey: O
          }
        }) {
          delete $[O];
        },
        prepare: na()
      },
      cacheEntriesUpserted: {
        reducer($, O) {
          for (const _ of O.payload) {
            const {
              queryDescription: R,
              value: P
            } = _;
            m($, R, !0, {
              arg: R,
              requestId: O.meta.requestId,
              startedTimeStamp: O.meta.timestamp
            }), f(
              $,
              {
                arg: R,
                requestId: O.meta.requestId,
                fulfilledTimeStamp: O.meta.timestamp,
                baseQueryMeta: {}
              },
              P,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: ($) => ({
          payload: $.map((R) => {
            const {
              endpointName: P,
              arg: I,
              value: D
            } = R, M = o[P];
            return {
              queryDescription: {
                type: "query",
                endpointName: P,
                originalArgs: R.arg,
                queryCacheKey: r({
                  queryArgs: I,
                  endpointDefinition: M,
                  endpointName: P
                })
              },
              value: D
            };
          }),
          meta: {
            [Ss]: !0,
            requestId: Wu(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer($, {
          payload: {
            queryCacheKey: O,
            patches: _
          }
        }) {
          yi($, O, (R) => {
            R.data = cf(R.data, _.concat());
          });
        },
        prepare: na()
      }
    },
    extraReducers($) {
      $.addCase(t.pending, (O, {
        meta: _,
        meta: {
          arg: R
        }
      }) => {
        const P = pl(R);
        m(O, R, P, _);
      }).addCase(t.fulfilled, (O, {
        meta: _,
        payload: R
      }) => {
        const P = pl(_.arg);
        f(O, _, R, P);
      }).addCase(t.rejected, (O, {
        meta: {
          condition: _,
          arg: R,
          requestId: P
        },
        error: I,
        payload: D
      }) => {
        yi(O, R.queryCacheKey, (M) => {
          if (!_) {
            if (M.requestId !== P) return;
            M.status = "rejected", M.error = D ?? I;
          }
        });
      }).addMatcher(s, (O, _) => {
        const {
          queries: R
        } = i(_);
        for (const [P, I] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((I == null ? void 0 : I.status) === "fulfilled" || (I == null ? void 0 : I.status) === "rejected") && (O[P] = I);
      });
    }
  }), g = _r({
    name: `${e}/mutations`,
    initialState: Ci,
    reducers: {
      removeMutationResult: {
        reducer($, {
          payload: O
        }) {
          const _ = Ta(O);
          _ in $ && delete $[_];
        },
        prepare: na()
      }
    },
    extraReducers($) {
      $.addCase(n.pending, (O, {
        meta: _,
        meta: {
          requestId: R,
          arg: P,
          startedTimeStamp: I
        }
      }) => {
        P.track && (O[Ta(_)] = {
          requestId: R,
          status: "pending",
          endpointName: P.endpointName,
          startedTimeStamp: I
        });
      }).addCase(n.fulfilled, (O, {
        payload: _,
        meta: R
      }) => {
        R.arg.track && Ef(O, R, (P) => {
          P.requestId === R.requestId && (P.status = "fulfilled", P.data = _, P.fulfilledTimeStamp = R.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (O, {
        payload: _,
        error: R,
        meta: P
      }) => {
        P.arg.track && Ef(O, P, (I) => {
          I.requestId === P.requestId && (I.status = "rejected", I.error = _ ?? R);
        });
      }).addMatcher(s, (O, _) => {
        const {
          mutations: R
        } = i(_);
        for (const [P, I] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((I == null ? void 0 : I.status) === "fulfilled" || (I == null ? void 0 : I.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          P !== (I == null ? void 0 : I.requestId) && (O[P] = I);
      });
    }
  }), y = {
    tags: {},
    keys: {}
  }, p = _r({
    name: `${e}/invalidation`,
    initialState: y,
    reducers: {
      updateProvidedBy: {
        reducer($, O) {
          var _, R, P;
          for (const {
            queryCacheKey: I,
            providedTags: D
          } of O.payload) {
            C($, I);
            for (const {
              type: M,
              id: k
            } of D) {
              const j = (R = (_ = $.tags)[M] ?? (_[M] = {}))[P = k || "__internal_without_id"] ?? (R[P] = []);
              j.includes(I) || j.push(I);
            }
            $.keys[I] = D;
          }
        },
        prepare: na()
      }
    },
    extraReducers($) {
      $.addCase(v.actions.removeQueryResult, (O, {
        payload: {
          queryCacheKey: _
        }
      }) => {
        C(O, _);
      }).addMatcher(s, (O, _) => {
        var P, I, D;
        const {
          provided: R
        } = i(_);
        for (const [M, k] of Object.entries(R))
          for (const [j, T] of Object.entries(k)) {
            const H = (I = (P = O.tags)[M] ?? (P[M] = {}))[D = j || "__internal_without_id"] ?? (I[D] = []);
            for (const q of T)
              H.includes(q) || H.push(q);
          }
      }).addMatcher(vr(Tr(t), ws(t)), (O, _) => {
        S(O, [_]);
      }).addMatcher(v.actions.cacheEntriesUpserted.match, (O, _) => {
        const R = _.payload.map(({
          queryDescription: P,
          value: I
        }) => ({
          type: "UNKNOWN",
          payload: I,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: P
          }
        }));
        S(O, R);
      });
    }
  });
  function C($, O) {
    var R;
    const _ = $.keys[O] ?? [];
    for (const P of _) {
      const I = P.type, D = P.id ?? "__internal_without_id", M = (R = $.tags[I]) == null ? void 0 : R[D];
      M && ($.tags[I][D] = M.filter((k) => k !== O));
    }
    delete $.keys[O];
  }
  function S($, O) {
    const _ = O.map((R) => {
      const P = $v(R, "providesTags", o, c), {
        queryCacheKey: I
      } = R.meta.arg;
      return {
        queryCacheKey: I,
        providedTags: P
      };
    });
    p.caseReducers.updateProvidedBy($, p.actions.updateProvidedBy(_));
  }
  const E = _r({
    name: `${e}/subscriptions`,
    initialState: Ci,
    reducers: {
      updateSubscriptionOptions($, O) {
      },
      unsubscribeQueryResult($, O) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), h = _r({
    name: `${e}/internalSubscriptions`,
    initialState: Ci,
    reducers: {
      subscriptionsUpdated: {
        reducer($, O) {
          return cf($, O.payload);
        },
        prepare: na()
      }
    }
  }), b = _r({
    name: `${e}/config`,
    initialState: {
      online: fC(),
      focused: dC(),
      middlewareRegistered: !1,
      ...l
    },
    reducers: {
      middlewareRegistered($, {
        payload: O
      }) {
        $.middlewareRegistered = $.middlewareRegistered === "conflict" || a !== O ? "conflict" : !0;
      }
    },
    extraReducers: ($) => {
      $.addCase(qu, (O) => {
        O.online = !0;
      }).addCase(Ev, (O) => {
        O.online = !1;
      }).addCase(Uu, (O) => {
        O.focused = !0;
      }).addCase(Sv, (O) => {
        O.focused = !1;
      }).addMatcher(s, (O) => ({
        ...O
      }));
    }
  }), w = Yp({
    queries: v.reducer,
    mutations: g.reducer,
    provided: p.reducer,
    subscriptions: h.reducer,
    config: b.reducer
  }), x = ($, O) => w(u.match(O) ? void 0 : $, O), N = {
    ...b.actions,
    ...v.actions,
    ...E.actions,
    ...h.actions,
    ...g.actions,
    ...p.actions,
    resetApiState: u
  };
  return {
    reducer: x,
    actions: N
  };
}
var kn = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Ov = {
  status: "uninitialized"
  /* uninitialized */
}, wf = /* @__PURE__ */ Za(Ov, () => {
}), xf = /* @__PURE__ */ Za(Ov, () => {
});
function NC({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const r = (E) => wf, o = (E) => xf;
  return {
    buildQuerySelector: f,
    buildInfiniteQuerySelector: v,
    buildMutationSelector: g,
    selectInvalidatedBy: y,
    selectCachedArgsForQuery: p,
    selectApiState: i,
    selectQueries: s,
    selectMutations: l,
    selectQueryEntry: c,
    selectConfig: u
  };
  function a(E) {
    return {
      ...E,
      ...gf(E.status)
    };
  }
  function i(E) {
    const h = E[t];
    if (process.env.NODE_ENV !== "production" && !h) {
      if (i.triggered) return h;
      i.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return h;
  }
  function s(E) {
    var h;
    return (h = i(E)) == null ? void 0 : h.queries;
  }
  function c(E, h) {
    var b;
    return (b = s(E)) == null ? void 0 : b[h];
  }
  function l(E) {
    var h;
    return (h = i(E)) == null ? void 0 : h.mutations;
  }
  function u(E) {
    var h;
    return (h = i(E)) == null ? void 0 : h.config;
  }
  function m(E, h, b) {
    return (w) => {
      if (w === kn)
        return n(r, b);
      const x = e({
        queryArgs: w,
        endpointDefinition: h,
        endpointName: E
      });
      return n(($) => c($, x) ?? wf, b);
    };
  }
  function f(E, h) {
    return m(E, h, a);
  }
  function v(E, h) {
    const {
      infiniteQueryOptions: b
    } = h;
    function w(x) {
      const N = {
        ...x,
        ...gf(x.status)
      }, {
        isLoading: $,
        isError: O,
        direction: _
      } = N, R = _ === "forward", P = _ === "backward";
      return {
        ...N,
        hasNextPage: C(b, N.data, N.originalArgs),
        hasPreviousPage: S(b, N.data, N.originalArgs),
        isFetchingNextPage: $ && R,
        isFetchingPreviousPage: $ && P,
        isFetchNextPageError: O && R,
        isFetchPreviousPageError: O && P
      };
    }
    return m(E, h, w);
  }
  function g() {
    return (E) => {
      let h;
      return typeof E == "object" ? h = Ta(E) ?? kn : h = E, n(h === kn ? o : (x) => {
        var N, $;
        return (($ = (N = i(x)) == null ? void 0 : N.mutations) == null ? void 0 : $[h]) ?? xf;
      }, a);
    };
  }
  function y(E, h) {
    const b = E[t], w = /* @__PURE__ */ new Set();
    for (const x of h.filter(es).map(ml)) {
      const N = b.provided.tags[x.type];
      if (!N)
        continue;
      let $ = (x.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        N[x.id]
      ) : (
        // no id: invalidate all queries that provide this type
        bf(Object.values(N))
      )) ?? [];
      for (const O of $)
        w.add(O);
    }
    return bf(Array.from(w.values()).map((x) => {
      const N = b.queries[x];
      return N ? [{
        queryCacheKey: x,
        endpointName: N.endpointName,
        originalArgs: N.originalArgs
      }] : [];
    }));
  }
  function p(E, h) {
    return Object.values(s(E)).filter(
      (b) => (b == null ? void 0 : b.endpointName) === h && b.status !== "uninitialized"
      /* uninitialized */
    ).map((b) => b.originalArgs);
  }
  function C(E, h, b) {
    return h ? vl(E, h, b) != null : !1;
  }
  function S(E, h, b) {
    return !h || !E.getPreviousPageParam ? !1 : xv(E, h, b) != null;
  }
}
var uo = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, ns = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const r = uo == null ? void 0 : uo.get(t);
  if (typeof r == "string")
    n = r;
  else {
    const o = JSON.stringify(t, (a, i) => (i = typeof i == "bigint" ? {
      $bigint: i.toString()
    } : i, i = tr(i) ? Object.keys(i).sort().reduce((s, c) => (s[c] = i[c], s), {}) : i, i));
    tr(t) && (uo == null || uo.set(t, o)), n = o;
  }
  return `${e}(${n})`;
};
function _C(...e) {
  return function(n) {
    const r = Ji((l) => {
      var u;
      return (u = n.extractRehydrationInfo) == null ? void 0 : u.call(n, l, {
        reducerPath: n.reducerPath ?? "api"
      });
    }), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...n,
      extractRehydrationInfo: r,
      serializeQueryArgs(l) {
        let u = ns;
        if ("serializeQueryArgs" in l.endpointDefinition) {
          const m = l.endpointDefinition.serializeQueryArgs;
          u = (f) => {
            const v = m(f);
            return typeof v == "string" ? v : ns({
              ...f,
              queryArgs: v
            });
          };
        } else n.serializeQueryArgs && (u = n.serializeQueryArgs);
        return u(l);
      },
      tagTypes: [...n.tagTypes || []]
    }, a = {
      endpointDefinitions: {},
      batch(l) {
        l();
      },
      apiUid: Wu(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: Ji((l) => r(l) != null)
    }, i = {
      injectEndpoints: c,
      enhanceEndpoints({
        addTagTypes: l,
        endpoints: u
      }) {
        if (l)
          for (const m of l)
            o.tagTypes.includes(m) || o.tagTypes.push(m);
        if (u)
          for (const [m, f] of Object.entries(u))
            typeof f == "function" ? f(a.endpointDefinitions[m]) : Object.assign(a.endpointDefinitions[m] || {}, f);
        return i;
      }
    }, s = e.map((l) => l.init(i, o, a));
    function c(l) {
      const u = l.endpoints({
        query: (m) => ({
          ...m,
          type: "query"
          /* query */
        }),
        mutation: (m) => ({
          ...m,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (m) => ({
          ...m,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [m, f] of Object.entries(u)) {
        if (l.overrideExisting !== !0 && m in a.endpointDefinitions) {
          if (l.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? ft(39) : `called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && ei(f)) {
          const {
            infiniteQueryOptions: v
          } = f, {
            maxPages: g,
            getPreviousPageParam: y
          } = v;
          if (typeof g == "number") {
            if (g < 1)
              throw new Error(process.env.NODE_ENV === "production" ? ft(40) : `maxPages for endpoint '${m}' must be a number greater than 0`);
            if (typeof y != "function")
              throw new Error(process.env.NODE_ENV === "production" ? ft(41) : `getPreviousPageParam for endpoint '${m}' must be a function if maxPages is used`);
          }
        }
        a.endpointDefinitions[m] = f;
        for (const v of s)
          v.injectEndpoint(m, f);
      }
      return i;
    }
    return i.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function lr(e, ...t) {
  return Object.assign(e, ...t);
}
var PC = ({
  api: e,
  queryThunk: t,
  internalState: n
}) => {
  const r = `${e.reducerPath}/subscriptions`;
  let o = null, a = null;
  const {
    updateSubscriptionOptions: i,
    unsubscribeQueryResult: s
  } = e.internalActions, c = (v, g) => {
    var p, C, S;
    if (i.match(g)) {
      const {
        queryCacheKey: E,
        requestId: h,
        options: b
      } = g.payload;
      return (p = v == null ? void 0 : v[E]) != null && p[h] && (v[E][h] = b), !0;
    }
    if (s.match(g)) {
      const {
        queryCacheKey: E,
        requestId: h
      } = g.payload;
      return v[E] && delete v[E][h], !0;
    }
    if (e.internalActions.removeQueryResult.match(g))
      return delete v[g.payload.queryCacheKey], !0;
    if (t.pending.match(g)) {
      const {
        meta: {
          arg: E,
          requestId: h
        }
      } = g, b = v[C = E.queryCacheKey] ?? (v[C] = {});
      return b[`${h}_running`] = {}, E.subscribe && (b[h] = E.subscriptionOptions ?? b[h] ?? {}), !0;
    }
    let y = !1;
    if (t.fulfilled.match(g) || t.rejected.match(g)) {
      const E = v[g.meta.arg.queryCacheKey] || {}, h = `${g.meta.requestId}_running`;
      y || (y = !!E[h]), delete E[h];
    }
    if (t.rejected.match(g)) {
      const {
        meta: {
          condition: E,
          arg: h,
          requestId: b
        }
      } = g;
      if (E && h.subscribe) {
        const w = v[S = h.queryCacheKey] ?? (v[S] = {});
        w[b] = h.subscriptionOptions ?? w[b] ?? {}, y = !0;
      }
    }
    return y;
  }, l = () => n.currentSubscriptions, f = {
    getSubscriptions: l,
    getSubscriptionCount: (v) => {
      const y = l()[v] ?? {};
      return No(y);
    },
    isRequestSubscribed: (v, g) => {
      var p;
      const y = l();
      return !!((p = y == null ? void 0 : y[v]) != null && p[g]);
    }
  };
  return (v, g) => {
    if (o || (o = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(v))
      return o = n.currentSubscriptions = {}, a = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(v))
      return [!1, f];
    const y = c(n.currentSubscriptions, v);
    let p = !0;
    if (y) {
      a || (a = setTimeout(() => {
        const E = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, h] = ov(o, () => E);
        g.next(e.internalActions.subscriptionsUpdated(h)), o = E, a = null;
      }, 500));
      const C = typeof v.type == "string" && !!v.type.startsWith(r), S = t.rejected.match(v) && v.meta.condition && !!v.meta.arg.subscribe;
      p = !C && !S;
    }
    return [p, !1];
  };
};
function RC(e) {
  for (const t in e)
    return !1;
  return !0;
}
var IC = 2147483647 / 1e3 - 1, MC = ({
  reducerPath: e,
  api: t,
  queryThunk: n,
  context: r,
  internalState: o,
  selectors: {
    selectQueryEntry: a,
    selectConfig: i
  }
}) => {
  const {
    removeQueryResult: s,
    unsubscribeQueryResult: c,
    cacheEntriesUpserted: l
  } = t.internalActions, u = vr(c.match, n.fulfilled, n.rejected, l.match);
  function m(p) {
    const C = o.currentSubscriptions[p];
    return !!C && !RC(C);
  }
  const f = {}, v = (p, C, S) => {
    const E = C.getState(), h = i(E);
    if (u(p)) {
      let b;
      if (l.match(p))
        b = p.payload.map((w) => w.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: w
        } = c.match(p) ? p.payload : p.meta.arg;
        b = [w];
      }
      g(b, C, h);
    }
    if (t.util.resetApiState.match(p))
      for (const [b, w] of Object.entries(f))
        w && clearTimeout(w), delete f[b];
    if (r.hasRehydrationInfo(p)) {
      const {
        queries: b
      } = r.extractRehydrationInfo(p);
      g(Object.keys(b), C, h);
    }
  };
  function g(p, C, S) {
    const E = C.getState();
    for (const h of p) {
      const b = a(E, h);
      y(h, b == null ? void 0 : b.endpointName, C, S);
    }
  }
  function y(p, C, S, E) {
    const h = r.endpointDefinitions[C], b = (h == null ? void 0 : h.keepUnusedDataFor) ?? E.keepUnusedDataFor;
    if (b === 1 / 0)
      return;
    const w = Math.max(0, Math.min(b, IC));
    if (!m(p)) {
      const x = f[p];
      x && clearTimeout(x), f[p] = setTimeout(() => {
        m(p) || S.dispatch(s({
          queryCacheKey: p
        })), delete f[p];
      }, w * 1e3);
    }
  }
  return v;
}, $f = new Error("Promise never resolved before cacheEntryRemoved."), TC = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: r,
  mutationThunk: o,
  internalState: a,
  selectors: {
    selectQueryEntry: i,
    selectApiState: s
  }
}) => {
  const c = dl(r), l = dl(o), u = Tr(r, o), m = {};
  function f(C, S, E) {
    const h = m[C];
    h != null && h.valueResolved && (h.valueResolved({
      data: S,
      meta: E
    }), delete h.valueResolved);
  }
  function v(C) {
    const S = m[C];
    S && (delete m[C], S.cacheEntryRemoved());
  }
  const g = (C, S, E) => {
    const h = y(C);
    function b(w, x, N, $) {
      const O = i(E, x), _ = i(S.getState(), x);
      !O && _ && p(w, $, x, S, N);
    }
    if (r.pending.match(C))
      b(C.meta.arg.endpointName, h, C.meta.requestId, C.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(C))
      for (const {
        queryDescription: w,
        value: x
      } of C.payload) {
        const {
          endpointName: N,
          originalArgs: $,
          queryCacheKey: O
        } = w;
        b(N, O, C.meta.requestId, $), f(O, x, {});
      }
    else if (o.pending.match(C))
      S.getState()[t].mutations[h] && p(C.meta.arg.endpointName, C.meta.arg.originalArgs, h, S, C.meta.requestId);
    else if (u(C))
      f(h, C.payload, C.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(C) || e.internalActions.removeMutationResult.match(C))
      v(h);
    else if (e.util.resetApiState.match(C))
      for (const w of Object.keys(m))
        v(w);
  };
  function y(C) {
    return c(C) ? C.meta.arg.queryCacheKey : l(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : e.internalActions.removeQueryResult.match(C) ? C.payload.queryCacheKey : e.internalActions.removeMutationResult.match(C) ? Ta(C.payload) : "";
  }
  function p(C, S, E, h, b) {
    const w = n.endpointDefinitions[C], x = w == null ? void 0 : w.onCacheEntryAdded;
    if (!x) return;
    const N = {}, $ = new Promise((D) => {
      N.cacheEntryRemoved = D;
    }), O = Promise.race([new Promise((D) => {
      N.valueResolved = D;
    }), $.then(() => {
      throw $f;
    })]);
    O.catch(() => {
    }), m[E] = N;
    const _ = e.endpoints[C].select(ts(w) ? S : E), R = h.dispatch((D, M, k) => k), P = {
      ...h,
      getCacheEntry: () => _(h.getState()),
      requestId: b,
      extra: R,
      updateCachedData: ts(w) ? (D) => h.dispatch(e.util.updateQueryData(C, S, D)) : void 0,
      cacheDataLoaded: O,
      cacheEntryRemoved: $
    }, I = x(S, P);
    Promise.resolve(I).catch((D) => {
      if (D !== $f)
        throw D;
    });
  }
  return g;
}, DC = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: n
}) => (r, o) => {
  var a, i;
  e.util.resetApiState.match(r) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(r) && r.payload === t && ((i = (a = o.getState()[n]) == null ? void 0 : a.config) == null ? void 0 : i.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, AC = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: r,
  queryThunk: o,
  api: a,
  assertTagType: i,
  refetchQuery: s,
  internalState: c
}) => {
  const {
    removeQueryResult: l
  } = a.internalActions, u = vr(Tr(r), ws(r)), m = vr(Tr(r, o), To(r, o));
  let f = [];
  const v = (p, C) => {
    u(p) ? y($v(p, "invalidatesTags", n, i), C) : m(p) ? y([], C) : a.util.invalidateTags.match(p) && y(Ku(p.payload, void 0, void 0, void 0, void 0, i), C);
  };
  function g(p) {
    var E;
    const {
      queries: C,
      mutations: S
    } = p;
    for (const h of [C, S])
      for (const b in h)
        if (((E = h[b]) == null ? void 0 : E.status) === "pending") return !0;
    return !1;
  }
  function y(p, C) {
    const S = C.getState(), E = S[e];
    if (f.push(...p), E.config.invalidationBehavior === "delayed" && g(E))
      return;
    const h = f;
    if (f = [], h.length === 0) return;
    const b = a.util.selectInvalidatedBy(S, h);
    t.batch(() => {
      const w = Array.from(b.values());
      for (const {
        queryCacheKey: x
      } of w) {
        const N = E.queries[x], $ = c.currentSubscriptions[x] ?? {};
        N && (No($) === 0 ? C.dispatch(l({
          queryCacheKey: x
        })) : N.status !== "uninitialized" && C.dispatch(s(N)));
      }
    });
  }
  return v;
}, kC = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: r,
  internalState: o
}) => {
  const a = {}, i = (f, v) => {
    (n.internalActions.updateSubscriptionOptions.match(f) || n.internalActions.unsubscribeQueryResult.match(f)) && c(f.payload, v), (t.pending.match(f) || t.rejected.match(f) && f.meta.condition) && c(f.meta.arg, v), (t.fulfilled.match(f) || t.rejected.match(f) && !f.meta.condition) && s(f.meta.arg, v), n.util.resetApiState.match(f) && u();
  };
  function s({
    queryCacheKey: f
  }, v) {
    const g = v.getState()[e], y = g.queries[f], p = o.currentSubscriptions[f];
    if (!y || y.status === "uninitialized") return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: S
    } = m(p);
    if (!Number.isFinite(C)) return;
    const E = a[f];
    E != null && E.timeout && (clearTimeout(E.timeout), E.timeout = void 0);
    const h = Date.now() + C;
    a[f] = {
      nextPollTimestamp: h,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (g.config.focused || !S) && v.dispatch(r(y)), s({
          queryCacheKey: f
        }, v);
      }, C)
    };
  }
  function c({
    queryCacheKey: f
  }, v) {
    const y = v.getState()[e].queries[f], p = o.currentSubscriptions[f];
    if (!y || y.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: C
    } = m(p);
    if (!Number.isFinite(C)) {
      l(f);
      return;
    }
    const S = a[f], E = Date.now() + C;
    (!S || E < S.nextPollTimestamp) && s({
      queryCacheKey: f
    }, v);
  }
  function l(f) {
    const v = a[f];
    v != null && v.timeout && clearTimeout(v.timeout), delete a[f];
  }
  function u() {
    for (const f of Object.keys(a))
      l(f);
  }
  function m(f = {}) {
    let v = !1, g = Number.POSITIVE_INFINITY;
    for (let y in f)
      f[y].pollingInterval && (g = Math.min(f[y].pollingInterval, g), v = f[y].skipPollingIfUnfocused || v);
    return {
      lowestPollingInterval: g,
      skipPollingIfUnfocused: v
    };
  }
  return i;
}, jC = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: r
}) => {
  const o = Hu(n, r), a = To(n, r), i = Tr(n, r), s = {};
  return (l, u) => {
    var m, f;
    if (o(l)) {
      const {
        requestId: v,
        arg: {
          endpointName: g,
          originalArgs: y
        }
      } = l.meta, p = t.endpointDefinitions[g], C = p == null ? void 0 : p.onQueryStarted;
      if (C) {
        const S = {}, E = new Promise((x, N) => {
          S.resolve = x, S.reject = N;
        });
        E.catch(() => {
        }), s[v] = S;
        const h = e.endpoints[g].select(ts(p) ? y : v), b = u.dispatch((x, N, $) => $), w = {
          ...u,
          getCacheEntry: () => h(u.getState()),
          requestId: v,
          extra: b,
          updateCachedData: ts(p) ? (x) => u.dispatch(e.util.updateQueryData(g, y, x)) : void 0,
          queryFulfilled: E
        };
        C(y, w);
      }
    } else if (i(l)) {
      const {
        requestId: v,
        baseQueryMeta: g
      } = l.meta;
      (m = s[v]) == null || m.resolve({
        data: l.payload,
        meta: g
      }), delete s[v];
    } else if (a(l)) {
      const {
        requestId: v,
        rejectedWithValue: g,
        baseQueryMeta: y
      } = l.meta;
      (f = s[v]) == null || f.reject({
        error: l.payload ?? l.error,
        isUnhandledError: !g,
        meta: y
      }), delete s[v];
    }
  };
}, FC = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: r,
  internalState: o
}) => {
  const {
    removeQueryResult: a
  } = n.internalActions, i = (c, l) => {
    Uu.match(c) && s(l, "refetchOnFocus"), qu.match(c) && s(l, "refetchOnReconnect");
  };
  function s(c, l) {
    const u = c.getState()[e], m = u.queries, f = o.currentSubscriptions;
    t.batch(() => {
      for (const v of Object.keys(f)) {
        const g = m[v], y = f[v];
        if (!y || !g) continue;
        (Object.values(y).some((C) => C[l] === !0) || Object.values(y).every((C) => C[l] === void 0) && u.config[l]) && (No(y) === 0 ? c.dispatch(a({
          queryCacheKey: v
        })) : g.status !== "uninitialized" && c.dispatch(r(g)));
      }
    });
  }
  return i;
};
function LC(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: r,
    context: o
  } = e, {
    apiUid: a
  } = o, i = {
    invalidateTags: Ln(`${t}/invalidateTags`)
  }, s = (m) => m.type.startsWith(`${t}/`), c = [DC, MC, AC, kC, TC, jC];
  return {
    middleware: (m) => {
      let f = !1;
      const g = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: u,
        isThisApiSliceAction: s
      }, y = c.map((S) => S(g)), p = PC(g), C = FC(g);
      return (S) => (E) => {
        if (!Fu(E))
          return S(E);
        f || (f = !0, m.dispatch(r.internalActions.middlewareRegistered(a)));
        const h = {
          ...m,
          next: S
        }, b = m.getState(), [w, x] = p(E, h, b);
        let N;
        if (w ? N = S(E) : N = x, m.getState()[t] && (C(E, h, b), s(E) || o.hasRehydrationInfo(E)))
          for (const $ of y)
            $(E, h, b);
        return N;
      };
    },
    actions: i
  };
  function u(m) {
    return e.api.endpoints[m.endpointName].initiate(m.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Of = /* @__PURE__ */ Symbol(), zC = ({
  createSelector: e = Bu
} = {}) => ({
  name: Of,
  init(t, {
    baseQuery: n,
    tagTypes: r,
    reducerPath: o,
    serializeQueryArgs: a,
    keepUnusedDataFor: i,
    refetchOnMountOrArgChange: s,
    refetchOnFocus: c,
    refetchOnReconnect: l,
    invalidationBehavior: u,
    onSchemaFailure: m,
    catchSchemaFailure: f,
    skipSchemaValidation: v
  }, g) {
    my();
    const y = (A) => (typeof process < "u" && process.env.NODE_ENV === "development" && (r.includes(A.type) || console.error(`Tag type '${A.type}' was used, but not specified in \`tagTypes\`!`)), A);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: qu,
        onOffline: Ev,
        onFocus: Uu,
        onFocusLost: Sv
      },
      util: {}
    });
    const p = NC({
      serializeQueryArgs: a,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: S,
      buildQuerySelector: E,
      buildInfiniteQuerySelector: h,
      buildMutationSelector: b
    } = p;
    lr(t.util, {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: S
    });
    const {
      queryThunk: w,
      infiniteQueryThunk: x,
      mutationThunk: N,
      patchQueryData: $,
      updateQueryData: O,
      upsertQueryData: _,
      prefetch: R,
      buildMatchThunkActions: P
    } = $C({
      baseQuery: n,
      reducerPath: o,
      context: g,
      api: t,
      serializeQueryArgs: a,
      assertTagType: y,
      selectors: p,
      onSchemaFailure: m,
      catchSchemaFailure: f,
      skipSchemaValidation: v
    }), {
      reducer: I,
      actions: D
    } = OC({
      context: g,
      queryThunk: w,
      infiniteQueryThunk: x,
      mutationThunk: N,
      serializeQueryArgs: a,
      reducerPath: o,
      assertTagType: y,
      config: {
        refetchOnFocus: c,
        refetchOnReconnect: l,
        refetchOnMountOrArgChange: s,
        keepUnusedDataFor: i,
        reducerPath: o,
        invalidationBehavior: u
      }
    });
    lr(t.util, {
      patchQueryData: $,
      updateQueryData: O,
      upsertQueryData: _,
      prefetch: R,
      resetApiState: D.resetApiState,
      upsertQueryEntries: D.cacheEntriesUpserted
    }), lr(t.internalActions, D);
    const {
      middleware: M,
      actions: k
    } = LC({
      reducerPath: o,
      context: g,
      queryThunk: w,
      mutationThunk: N,
      infiniteQueryThunk: x,
      api: t,
      assertTagType: y,
      selectors: p
    });
    lr(t.util, k), lr(t, {
      reducer: I,
      middleware: M
    });
    const {
      buildInitiateQuery: j,
      buildInitiateInfiniteQuery: T,
      buildInitiateMutation: H,
      getRunningMutationThunk: q,
      getRunningMutationsThunk: U,
      getRunningQueriesThunk: V,
      getRunningQueryThunk: L
    } = wC({
      queryThunk: w,
      mutationThunk: N,
      infiniteQueryThunk: x,
      api: t,
      serializeQueryArgs: a,
      context: g
    });
    return lr(t.util, {
      getRunningMutationThunk: q,
      getRunningMutationsThunk: U,
      getRunningQueryThunk: L,
      getRunningQueriesThunk: V
    }), {
      name: Of,
      injectEndpoint(A, W) {
        var re;
        const G = (re = t.endpoints)[A] ?? (re[A] = {});
        xs(W) && lr(G, {
          name: A,
          select: E(A, W),
          initiate: j(A, W)
        }, P(w, A)), CC(W) && lr(G, {
          name: A,
          select: b(),
          initiate: H(A)
        }, P(N, A)), ei(W) && lr(G, {
          name: A,
          select: h(A, W),
          initiate: T(A, W)
        }, P(w, A));
      }
    };
  }
});
function Si(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function VC(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
function BC(e) {
  return e.type === "query";
}
function HC(e) {
  return e.type === "mutation";
}
function Nv(e) {
  return e.type === "infinitequery";
}
function oa(e, ...t) {
  return Object.assign(e, ...t);
}
var gc = Symbol();
function hc(e, t, n, r) {
  const o = Nt(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: n,
      endpointName: r
    }) : e
  }), [e, t, n, r]), a = we(o);
  return Ge(() => {
    a.current.serialized !== o.serialized && (a.current = o);
  }, [o]), a.current.serialized === o.serialized ? a.current.queryArgs : e;
}
function Ei(e) {
  const t = we(e);
  return Ge(() => {
    ba(t.current, e) || (t.current = e);
  }, [e]), ba(t.current, e) ? t.current : e;
}
var WC = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", UC = /* @__PURE__ */ WC(), qC = () => typeof navigator < "u" && navigator.product === "ReactNative", KC = /* @__PURE__ */ qC(), GC = () => UC || KC ? ku : Ge, XC = /* @__PURE__ */ GC(), Nf = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: yv.pending
} : e;
function bc(e, ...t) {
  const n = {};
  return t.forEach((r) => {
    n[r] = e[r];
  }), n;
}
var yc = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function QC({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: n,
      useSelector: r,
      useStore: o
    },
    unstable__sideEffectsInRender: a,
    createSelector: i
  },
  serializeQueryArgs: s,
  context: c
}) {
  const l = a ? (h) => h() : Ge;
  return {
    buildQueryHooks: C,
    buildInfiniteQueryHooks: S,
    buildMutationHook: E,
    usePrefetch: f
  };
  function u(h, b, w) {
    if (b != null && b.endpointName && h.isUninitialized) {
      const {
        endpointName: R
      } = b, P = c.endpointDefinitions[R];
      w !== kn && s({
        queryArgs: b.originalArgs,
        endpointDefinition: P,
        endpointName: R
      }) === s({
        queryArgs: w,
        endpointDefinition: P,
        endpointName: R
      }) && (b = void 0);
    }
    let x = h.isSuccess ? h.data : b == null ? void 0 : b.data;
    x === void 0 && (x = h.data);
    const N = x !== void 0, $ = h.isLoading, O = (!b || b.isLoading || b.isUninitialized) && !N && $, _ = h.isSuccess || N && ($ && !(b != null && b.isError) || h.isUninitialized);
    return {
      ...h,
      data: x,
      currentData: h.data,
      isFetching: $,
      isLoading: O,
      isSuccess: _
    };
  }
  function m(h, b, w) {
    if (b != null && b.endpointName && h.isUninitialized) {
      const {
        endpointName: R
      } = b, P = c.endpointDefinitions[R];
      w !== kn && s({
        queryArgs: b.originalArgs,
        endpointDefinition: P,
        endpointName: R
      }) === s({
        queryArgs: w,
        endpointDefinition: P,
        endpointName: R
      }) && (b = void 0);
    }
    let x = h.isSuccess ? h.data : b == null ? void 0 : b.data;
    x === void 0 && (x = h.data);
    const N = x !== void 0, $ = h.isLoading, O = (!b || b.isLoading || b.isUninitialized) && !N && $, _ = h.isSuccess || $ && N;
    return {
      ...h,
      data: x,
      currentData: h.data,
      isFetching: $,
      isLoading: O,
      isSuccess: _
    };
  }
  function f(h, b) {
    const w = n(), x = Ei(b);
    return dn((N, $) => w(e.util.prefetch(h, N, {
      ...x,
      ...$
    })), [h, w, x]);
  }
  function v(h, b, {
    refetchOnReconnect: w,
    refetchOnFocus: x,
    refetchOnMountOrArgChange: N,
    skip: $ = !1,
    pollingInterval: O = 0,
    skipPollingIfUnfocused: _ = !1,
    ...R
  } = {}) {
    const {
      initiate: P
    } = e.endpoints[h], I = n(), D = we(void 0);
    if (!D.current) {
      const A = I(e.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof A != "object" || typeof (A == null ? void 0 : A.type) == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? ft(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      D.current = A;
    }
    const M = hc(
      $ ? kn : b,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      ns,
      c.endpointDefinitions[h],
      h
    ), k = Ei({
      refetchOnReconnect: w,
      refetchOnFocus: x,
      pollingInterval: O,
      skipPollingIfUnfocused: _
    }), j = R.initialPageParam, T = Ei(j), H = we(void 0);
    let {
      queryCacheKey: q,
      requestId: U
    } = H.current || {}, V = !1;
    q && U && (V = D.current.isRequestSubscribed(q, U));
    const L = !V && H.current !== void 0;
    return l(() => {
      L && (H.current = void 0);
    }, [L]), l(() => {
      var Z;
      const A = H.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(L), M === kn) {
        A == null || A.unsubscribe(), H.current = void 0;
        return;
      }
      const W = (Z = H.current) == null ? void 0 : Z.subscriptionOptions;
      if (!A || A.arg !== M) {
        A == null || A.unsubscribe();
        const G = I(P(M, {
          subscriptionOptions: k,
          forceRefetch: N,
          ...Nv(c.endpointDefinitions[h]) ? {
            initialPageParam: T
          } : {}
        }));
        H.current = G;
      } else k !== W && A.updateSubscriptionOptions(k);
    }, [I, P, N, M, k, L, T, h]), [H, I, P, k];
  }
  function g(h, b) {
    return (x, {
      skip: N = !1,
      selectFromResult: $
    } = {}) => {
      const {
        select: O
      } = e.endpoints[h], _ = hc(N ? kn : x, s, c.endpointDefinitions[h], h), R = we(void 0), P = Nt(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        i([
          // @ts-ignore
          O(_),
          (j, T) => T,
          (j) => _
        ], b, {
          memoizeOptions: {
            resultEqualityCheck: ba
          }
        })
      ), [O, _]), I = Nt(() => $ ? i([P], $, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : P, [P, $]), D = r((j) => I(j, R.current), ba), M = o(), k = P(M.getState(), R.current);
      return XC(() => {
        R.current = k;
      }, [k]), D;
    };
  }
  function y(h) {
    Ge(() => () => {
      var b, w;
      (w = (b = h.current) == null ? void 0 : b.unsubscribe) == null || w.call(b), h.current = void 0;
    }, [h]);
  }
  function p(h) {
    if (!h.current) throw new Error(process.env.NODE_ENV === "production" ? ft(38) : "Cannot refetch a query that has not been started yet.");
    return h.current.refetch();
  }
  function C(h) {
    const b = (N, $ = {}) => {
      const [O] = v(h, N, $);
      return y(O), Nt(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => p(O)
      }), [O]);
    }, w = ({
      refetchOnReconnect: N,
      refetchOnFocus: $,
      pollingInterval: O = 0,
      skipPollingIfUnfocused: _ = !1
    } = {}) => {
      const {
        initiate: R
      } = e.endpoints[h], P = n(), [I, D] = ct(gc), M = we(void 0), k = Ei({
        refetchOnReconnect: N,
        refetchOnFocus: $,
        pollingInterval: O,
        skipPollingIfUnfocused: _
      });
      l(() => {
        var U, V;
        const q = (U = M.current) == null ? void 0 : U.subscriptionOptions;
        k !== q && ((V = M.current) == null || V.updateSubscriptionOptions(k));
      }, [k]);
      const j = we(k);
      l(() => {
        j.current = k;
      }, [k]);
      const T = dn(function(q, U = !1) {
        let V;
        return t(() => {
          var L;
          (L = M.current) == null || L.unsubscribe(), M.current = V = P(R(q, {
            subscriptionOptions: j.current,
            forceRefetch: !U
          })), D(q);
        }), V;
      }, [P, R]), H = dn(() => {
        var q, U;
        (q = M.current) != null && q.queryCacheKey && P(e.internalActions.removeQueryResult({
          queryCacheKey: (U = M.current) == null ? void 0 : U.queryCacheKey
        }));
      }, [P]);
      return Ge(() => () => {
        var q;
        (q = M == null ? void 0 : M.current) == null || q.unsubscribe();
      }, []), Ge(() => {
        I !== gc && !M.current && T(I, !0);
      }, [I, T]), Nt(() => [T, I, {
        reset: H
      }], [T, I, H]);
    }, x = g(h, u);
    return {
      useQueryState: x,
      useQuerySubscription: b,
      useLazyQuerySubscription: w,
      useLazyQuery(N) {
        const [$, O, {
          reset: _
        }] = w(N), R = x(O, {
          ...N,
          skip: O === gc
        }), P = Nt(() => ({
          lastArg: O
        }), [O]);
        return Nt(() => [$, {
          ...R,
          reset: _
        }, P], [$, R, _, P]);
      },
      useQuery(N, $) {
        const O = b(N, $), _ = x(N, {
          selectFromResult: N === kn || $ != null && $.skip ? void 0 : Nf,
          ...$
        }), R = bc(_, ...yc);
        return ic(R), Nt(() => ({
          ..._,
          ...O
        }), [_, O]);
      }
    };
  }
  function S(h) {
    const b = (x, N = {}) => {
      const [$, O, _, R] = v(h, x, N), P = we(R);
      l(() => {
        P.current = R;
      }, [R]);
      const I = dn(function(k, j) {
        let T;
        return t(() => {
          var H;
          (H = $.current) == null || H.unsubscribe(), $.current = T = O(_(k, {
            subscriptionOptions: P.current,
            direction: j
          }));
        }), T;
      }, [$, O, _]);
      y($);
      const D = hc(
        N.skip ? kn : x,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        ns,
        c.endpointDefinitions[h],
        h
      ), M = dn(() => p($), [$]);
      return Nt(() => ({
        trigger: I,
        /**
         * A method to manually refetch data for the query
         */
        refetch: M,
        fetchNextPage: () => I(D, "forward"),
        fetchPreviousPage: () => I(D, "backward")
      }), [M, I, D]);
    }, w = g(h, m);
    return {
      useInfiniteQueryState: w,
      useInfiniteQuerySubscription: b,
      useInfiniteQuery(x, N) {
        const {
          refetch: $,
          fetchNextPage: O,
          fetchPreviousPage: _
        } = b(x, N), R = w(x, {
          selectFromResult: x === kn || N != null && N.skip ? void 0 : Nf,
          ...N
        }), P = bc(R, ...yc, "hasNextPage", "hasPreviousPage");
        return ic(P), Nt(() => ({
          ...R,
          fetchNextPage: O,
          fetchPreviousPage: _,
          refetch: $
        }), [R, O, _, $]);
      }
    };
  }
  function E(h) {
    return ({
      selectFromResult: b,
      fixedCacheKey: w
    } = {}) => {
      const {
        select: x,
        initiate: N
      } = e.endpoints[h], $ = n(), [O, _] = ct();
      Ge(() => () => {
        O != null && O.arg.fixedCacheKey || O == null || O.reset();
      }, [O]);
      const R = dn(function(q) {
        const U = $(N(q, {
          fixedCacheKey: w
        }));
        return _(U), U;
      }, [$, N, w]), {
        requestId: P
      } = O || {}, I = Nt(() => x({
        fixedCacheKey: w,
        requestId: O == null ? void 0 : O.requestId
      }), [w, O, x]), D = Nt(() => b ? i([I], b) : I, [b, I]), M = r(D, ba), k = w == null ? O == null ? void 0 : O.arg.originalArgs : void 0, j = dn(() => {
        t(() => {
          O && _(void 0), w && $(e.internalActions.removeMutationResult({
            requestId: P,
            fixedCacheKey: w
          }));
        });
      }, [$, w, O, P]), T = bc(M, ...yc, "endpointName");
      ic(T);
      const H = Nt(() => ({
        ...M,
        originalArgs: k,
        reset: j
      }), [M, k, j]);
      return Nt(() => [R, H], [R, H]);
    };
  }
}
var YC = /* @__PURE__ */ Symbol(), ZC = ({
  batch: e = q0,
  hooks: t = {
    useDispatch: Gp,
    useSelector: Xp,
    useStore: Kp
  },
  createSelector: n = Bu,
  unstable__sideEffectsInRender: r = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const a = ["useDispatch", "useSelector", "useStore"];
    let i = !1;
    for (const s of a)
      if (VC(o) > 0 && (o[s] && (i || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), i = !0)), t[s] = o[s]), typeof t[s] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? ft(36) : `When using custom hooks for context, all ${a.length} hooks need to be provided: ${a.join(", ")}.
Hook ${s} was either not provided or not a function.`);
  }
  return {
    name: YC,
    init(a, {
      serializeQueryArgs: i
    }, s) {
      const c = a, {
        buildQueryHooks: l,
        buildInfiniteQueryHooks: u,
        buildMutationHook: m,
        usePrefetch: f
      } = QC({
        api: a,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: r,
          createSelector: n
        },
        serializeQueryArgs: i,
        context: s
      });
      return oa(c, {
        usePrefetch: f
      }), oa(s, {
        batch: e
      }), {
        injectEndpoint(v, g) {
          if (BC(g)) {
            const {
              useQuery: y,
              useLazyQuery: p,
              useLazyQuerySubscription: C,
              useQueryState: S,
              useQuerySubscription: E
            } = l(v);
            oa(c.endpoints[v], {
              useQuery: y,
              useLazyQuery: p,
              useLazyQuerySubscription: C,
              useQueryState: S,
              useQuerySubscription: E
            }), a[`use${Si(v)}Query`] = y, a[`useLazy${Si(v)}Query`] = p;
          }
          if (HC(g)) {
            const y = m(v);
            oa(c.endpoints[v], {
              useMutation: y
            }), a[`use${Si(v)}Mutation`] = y;
          } else if (Nv(g)) {
            const {
              useInfiniteQuery: y,
              useInfiniteQuerySubscription: p,
              useInfiniteQueryState: C
            } = u(v);
            oa(c.endpoints[v], {
              useInfiniteQuery: y,
              useInfiniteQuerySubscription: p,
              useInfiniteQueryState: C
            }), a[`use${Si(v)}InfiniteQuery`] = y;
          }
        }
      };
    }
  };
}, JC = /* @__PURE__ */ _C(zC(), ZC());
const Ea = JC({
  reducerPath: "GRMConfig",
  baseQuery: yC({
    baseUrl: "/",
    prepareHeaders: (e, { endpoint: t }) => {
      const n = localStorage.getItem("authToken");
      return n && n && e.set("Authorization", `Token ${n}`), t !== "fileUpload" && t !== "importAirlineConfig" && e.set("Content-Type", "application/json"), e;
    }
  }),
  endpoints: () => ({})
}), eS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChatBotSerice: Ea
}, Symbol.toStringTag, { value: "Module" })), tS = zy({
  reducer: {
    chat: aC,
    // ✅ key must match state slice
    theme: cC,
    [Ea.reducerPath]: Ea.reducer
    // ✅ key from RTK Query service
  },
  middleware: (e) => e().concat(Ea.middleware)
});
var _v = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (a = o(a, r(s)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var i = "";
      for (var s in a)
        t.call(a, s) && a[s] && (i = o(i, s));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(_v);
var nS = _v.exports;
const Q = /* @__PURE__ */ O0(nS);
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ye.apply(null, arguments);
}
function Re(e) {
  "@babel/helpers - typeof";
  return Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Re(e);
}
var rS = Symbol.for("react.element"), oS = Symbol.for("react.transitional.element"), aS = Symbol.for("react.fragment");
function Pv(e) {
  return (
    // Base object type
    e && Re(e) === "object" && // React Element type
    (e.$$typeof === rS || e.$$typeof === oS) && // React Fragment type
    e.type === aS
  );
}
function Zr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return Y.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Zr(r)) : Pv(r) && r.props ? n = n.concat(Zr(r.props.children, t)) : n.push(r));
  }), n;
}
var gl = {}, Gu = [], iS = function(t) {
  Gu.push(t);
};
function Do(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Gu.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function sS(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Gu.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Rv() {
  gl = {};
}
function Iv(e, t, n) {
  !t && !gl[n] && (e(!1, n), gl[n] = !0);
}
function pt(e, t) {
  Iv(Do, e, t);
}
function cS(e, t) {
  Iv(sS, e, t);
}
pt.preMessage = iS;
pt.resetWarned = Rv;
pt.noteOnce = cS;
function lS(e, t) {
  if (Re(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Re(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mv(e) {
  var t = lS(e, "string");
  return Re(t) == "symbol" ? t : t + "";
}
function F(e, t, n) {
  return (t = Mv(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _f(Object(n), !0).forEach(function(r) {
      F(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _f(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Da(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function uS(e) {
  return e && Re(e) === "object" && Da(e.nativeElement) ? e.nativeElement : Da(e) ? e : null;
}
function Fi(e) {
  var t = uS(e);
  if (t)
    return t;
  if (e instanceof Y.Component) {
    var n;
    return (n = Gd.findDOMNode) === null || n === void 0 ? void 0 : n.call(Gd, e);
  }
  return null;
}
var hl = { exports: {} }, bt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pf;
function dS() {
  if (Pf) return bt;
  Pf = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function y(p) {
    if (typeof p == "object" && p !== null) {
      var C = p.$$typeof;
      switch (C) {
        case e:
          switch (p = p.type, p) {
            case n:
            case o:
            case r:
            case l:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case i:
                case c:
                case f:
                case m:
                case a:
                  return p;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return bt.ContextConsumer = i, bt.ContextProvider = a, bt.Element = e, bt.ForwardRef = c, bt.Fragment = n, bt.Lazy = f, bt.Memo = m, bt.Portal = t, bt.Profiler = o, bt.StrictMode = r, bt.Suspense = l, bt.SuspenseList = u, bt.isAsyncMode = function() {
    return !1;
  }, bt.isConcurrentMode = function() {
    return !1;
  }, bt.isContextConsumer = function(p) {
    return y(p) === i;
  }, bt.isContextProvider = function(p) {
    return y(p) === a;
  }, bt.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, bt.isForwardRef = function(p) {
    return y(p) === c;
  }, bt.isFragment = function(p) {
    return y(p) === n;
  }, bt.isLazy = function(p) {
    return y(p) === f;
  }, bt.isMemo = function(p) {
    return y(p) === m;
  }, bt.isPortal = function(p) {
    return y(p) === t;
  }, bt.isProfiler = function(p) {
    return y(p) === o;
  }, bt.isStrictMode = function(p) {
    return y(p) === r;
  }, bt.isSuspense = function(p) {
    return y(p) === l;
  }, bt.isSuspenseList = function(p) {
    return y(p) === u;
  }, bt.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === l || p === u || p === v || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === m || p.$$typeof === a || p.$$typeof === i || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
  }, bt.typeOf = y, bt;
}
var yt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rf;
function fS() {
  return Rf || (Rf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, y = !1, p = !1, C = !1, S = !1, E;
    E = Symbol.for("react.module.reference");
    function h(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === n || K === o || S || K === r || K === l || K === u || C || K === v || g || y || p || typeof K == "object" && K !== null && (K.$$typeof === f || K.$$typeof === m || K.$$typeof === a || K.$$typeof === i || K.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === E || K.getModuleId !== void 0));
    }
    function b(K) {
      if (typeof K == "object" && K !== null) {
        var de = K.$$typeof;
        switch (de) {
          case e:
            var ae = K.type;
            switch (ae) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return ae;
              default:
                var pe = ae && ae.$$typeof;
                switch (pe) {
                  case s:
                  case i:
                  case c:
                  case f:
                  case m:
                  case a:
                    return pe;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var w = i, x = a, N = e, $ = c, O = n, _ = f, R = m, P = t, I = o, D = r, M = l, k = u, j = !1, T = !1;
    function H(K) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(K) {
      return T || (T = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(K) {
      return b(K) === i;
    }
    function V(K) {
      return b(K) === a;
    }
    function L(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function A(K) {
      return b(K) === c;
    }
    function W(K) {
      return b(K) === n;
    }
    function Z(K) {
      return b(K) === f;
    }
    function G(K) {
      return b(K) === m;
    }
    function re(K) {
      return b(K) === t;
    }
    function J(K) {
      return b(K) === o;
    }
    function te(K) {
      return b(K) === r;
    }
    function ne(K) {
      return b(K) === l;
    }
    function ue(K) {
      return b(K) === u;
    }
    yt.ContextConsumer = w, yt.ContextProvider = x, yt.Element = N, yt.ForwardRef = $, yt.Fragment = O, yt.Lazy = _, yt.Memo = R, yt.Portal = P, yt.Profiler = I, yt.StrictMode = D, yt.Suspense = M, yt.SuspenseList = k, yt.isAsyncMode = H, yt.isConcurrentMode = q, yt.isContextConsumer = U, yt.isContextProvider = V, yt.isElement = L, yt.isForwardRef = A, yt.isFragment = W, yt.isLazy = Z, yt.isMemo = G, yt.isPortal = re, yt.isProfiler = J, yt.isStrictMode = te, yt.isSuspense = ne, yt.isSuspenseList = ue, yt.isValidElementType = h, yt.typeOf = b;
  }()), yt;
}
process.env.NODE_ENV === "production" ? hl.exports = dS() : hl.exports = fS();
var Cc = hl.exports;
function $s(e, t, n) {
  var r = d.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var mS = Number(E0.split(".")[0]), Xu = function(t, n) {
  typeof t == "function" ? t(n) : Re(t) === "object" && t && "current" in t && (t.current = n);
}, or = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    n.forEach(function(i) {
      Xu(i, a);
    });
  };
}, Ho = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return $s(function() {
    return or.apply(void 0, n);
  }, n, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, to = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Tv(t) && mS >= 19)
    return !0;
  var o = Cc.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== Cc.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Cc.ForwardRef);
};
function Tv(e) {
  return /* @__PURE__ */ zp(e) && !Pv(e);
}
var Wo = function(t) {
  if (t && Tv(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
}, bl = /* @__PURE__ */ d.createContext(null);
function pS(e) {
  var t = e.children, n = e.onBatchResize, r = d.useRef(0), o = d.useRef([]), a = d.useContext(bl), i = d.useCallback(function(s, c, l) {
    r.current += 1;
    var u = r.current;
    o.current.push({
      size: s,
      element: c,
      data: l
    }), Promise.resolve().then(function() {
      u === r.current && (n == null || n(o.current), o.current = []);
    }), a == null || a(s, c, l);
  }, [n, a]);
  return /* @__PURE__ */ d.createElement(bl.Provider, {
    value: i
  }, t);
}
var Dv = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, a) {
      return o[0] === n ? (r = a, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var i = a[o];
          n.call(r, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), yl = typeof window < "u" && typeof document < "u" && window.document === document, rs = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), vS = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(rs) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), gS = 2;
function hS(e, t) {
  var n = !1, r = !1, o = 0;
  function a() {
    n && (n = !1, e()), r && s();
  }
  function i() {
    vS(a);
  }
  function s() {
    var c = Date.now();
    if (n) {
      if (c - o < gS)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    o = c;
  }
  return s;
}
var bS = 20, yS = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], CS = typeof MutationObserver < "u", SS = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = hS(this.refresh.bind(this), bS);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !yl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), CS ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !yl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = yS.some(function(a) {
        return !!~r.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Av = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Ao = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || rs;
}, kv = Os(0, 0, 0, 0);
function os(e) {
  return parseFloat(e) || 0;
}
function If(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var a = e["border-" + o + "-width"];
    return r + os(a);
  }, 0);
}
function ES(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var a = o[r], i = e["padding-" + a];
    n[a] = os(i);
  }
  return n;
}
function wS(e) {
  var t = e.getBBox();
  return Os(0, 0, t.width, t.height);
}
function xS(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return kv;
  var r = Ao(e).getComputedStyle(e), o = ES(r), a = o.left + o.right, i = o.top + o.bottom, s = os(r.width), c = os(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= If(r, "left", "right") + a), Math.round(c + i) !== n && (c -= If(r, "top", "bottom") + i)), !OS(e)) {
    var l = Math.round(s + a) - t, u = Math.round(c + i) - n;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return Os(o.left, o.top, s, c);
}
var $S = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Ao(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Ao(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function OS(e) {
  return e === Ao(e).document.documentElement;
}
function NS(e) {
  return yl ? $S(e) ? wS(e) : xS(e) : kv;
}
function _S(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(a.prototype);
  return Av(i, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), i;
}
function Os(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var PS = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Os(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = NS(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), RS = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = _S(n);
      Av(this, { target: t, contentRect: r });
    }
    return e;
  }()
), IS = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Dv(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ao(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new PS(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ao(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new RS(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), jv = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Dv(), Fv = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = SS.getInstance(), r = new IS(t, n, this);
      jv.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Fv.prototype[e] = function() {
    var t;
    return (t = jv.get(this))[e].apply(t, arguments);
  };
});
var MS = function() {
  return typeof rs.ResizeObserver < "u" ? rs.ResizeObserver : Fv;
}(), fr = /* @__PURE__ */ new Map();
function Lv(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = fr.get(r)) === null || n === void 0 || n.forEach(function(o) {
      return o(r);
    });
  });
}
var zv = new MS(Lv);
process.env.NODE_ENV;
process.env.NODE_ENV;
function TS(e, t) {
  fr.has(e) || (fr.set(e, /* @__PURE__ */ new Set()), zv.observe(e)), fr.get(e).add(t);
}
function DS(e, t) {
  fr.has(e) && (fr.get(e).delete(t), fr.get(e).size || (zv.unobserve(e), fr.delete(e)));
}
function Vt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Mf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Mv(r.key), r);
  }
}
function Bt(e, t, n) {
  return t && Mf(e.prototype, t), n && Mf(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Aa(e, t) {
  return Aa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Aa(e, t);
}
function Un(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Aa(e, t);
}
function ka(e) {
  return ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ka(e);
}
function Qu() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qu = function() {
    return !!e;
  })();
}
function Ae(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function AS(e, t) {
  if (t && (Re(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ae(e);
}
function qn(e) {
  var t = Qu();
  return function() {
    var n, r = ka(e);
    if (t) {
      var o = ka(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return AS(this, n);
  };
}
var kS = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n() {
    return Vt(this, n), t.apply(this, arguments);
  }
  return Bt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(d.Component);
function jS(e, t) {
  var n = e.children, r = e.disabled, o = d.useRef(null), a = d.useRef(null), i = d.useContext(bl), s = typeof n == "function", c = s ? n(o) : n, l = d.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ d.isValidElement(c) && to(c), m = u ? Wo(c) : null, f = Ho(m, o), v = function() {
    var C;
    return Fi(o.current) || // Support `nativeElement` format
    (o.current && Re(o.current) === "object" ? Fi((C = o.current) === null || C === void 0 ? void 0 : C.nativeElement) : null) || Fi(a.current);
  };
  d.useImperativeHandle(t, function() {
    return v();
  });
  var g = d.useRef(e);
  g.current = e;
  var y = d.useCallback(function(p) {
    var C = g.current, S = C.onResize, E = C.data, h = p.getBoundingClientRect(), b = h.width, w = h.height, x = p.offsetWidth, N = p.offsetHeight, $ = Math.floor(b), O = Math.floor(w);
    if (l.current.width !== $ || l.current.height !== O || l.current.offsetWidth !== x || l.current.offsetHeight !== N) {
      var _ = {
        width: $,
        height: O,
        offsetWidth: x,
        offsetHeight: N
      };
      l.current = _;
      var R = x === Math.round(b) ? b : x, P = N === Math.round(w) ? w : N, I = B(B({}, _), {}, {
        offsetWidth: R,
        offsetHeight: P
      });
      i == null || i(I, p, E), S && Promise.resolve().then(function() {
        S(I, p);
      });
    }
  }, []);
  return d.useEffect(function() {
    var p = v();
    return p && !r && TS(p, y), function() {
      return DS(p, y);
    };
  }, [o.current, r]), /* @__PURE__ */ d.createElement(kS, {
    ref: a
  }, u ? /* @__PURE__ */ d.cloneElement(c, {
    ref: f
  }) : c);
}
var Vv = /* @__PURE__ */ d.forwardRef(jS);
process.env.NODE_ENV !== "production" && (Vv.displayName = "SingleObserver");
var FS = "rc-observer-key";
function LS(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Zr(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? Do(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && Do(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(o, a) {
    var i = (o == null ? void 0 : o.key) || "".concat(FS, "-").concat(a);
    return /* @__PURE__ */ d.createElement(Vv, ye({}, e, {
      key: i,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var zn = /* @__PURE__ */ d.forwardRef(LS);
process.env.NODE_ENV !== "production" && (zn.displayName = "ResizeObserver");
zn.Collection = pS;
function Cl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zS(e) {
  if (Array.isArray(e)) return Cl(e);
}
function Bv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Yu(e, t) {
  if (e) {
    if (typeof e == "string") return Cl(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Cl(e, t) : void 0;
  }
}
function VS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function he(e) {
  return zS(e) || Bv(e) || Yu(e) || VS();
}
var Hv = function(t) {
  return +setTimeout(t, 16);
}, Wv = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Hv = function(t) {
  return window.requestAnimationFrame(t);
}, Wv = function(t) {
  return window.cancelAnimationFrame(t);
});
var Tf = 0, Ns = /* @__PURE__ */ new Map();
function Uv(e) {
  Ns.delete(e);
}
var Kt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Tf += 1;
  var r = Tf;
  function o(a) {
    if (a === 0)
      Uv(r), t();
    else {
      var i = Hv(function() {
        o(a - 1);
      });
      Ns.set(r, i);
    }
  }
  return o(n), r;
};
Kt.cancel = function(e) {
  var t = Ns.get(e);
  return Uv(e), Wv(t);
};
process.env.NODE_ENV !== "production" && (Kt.ids = function() {
  return Ns;
});
function qv(e) {
  if (Array.isArray(e)) return e;
}
function BS(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function Kv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X(e, t) {
  return qv(e) || BS(e, t) || Yu(e, t) || Kv();
}
function ja(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function mn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function HS(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var Df = "data-rc-order", Af = "data-rc-priority", WS = "rc-util-key", Sl = /* @__PURE__ */ new Map();
function Gv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : WS;
}
function _s(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function US(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Zu(e) {
  return Array.from((Sl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Xv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!mn())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = US(r), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(Df, i), s && a && c.setAttribute(Af, "".concat(a)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var l = _s(t), u = l.firstChild;
  if (r) {
    if (s) {
      var m = (t.styles || Zu(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Df)))
          return !1;
        var v = Number(f.getAttribute(Af) || 0);
        return a >= v;
      });
      if (m.length)
        return l.insertBefore(c, m[m.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Qv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = _s(t);
  return (t.styles || Zu(n)).find(function(r) {
    return r.getAttribute(Gv(t)) === e;
  });
}
function Fa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Qv(e, t);
  if (n) {
    var r = _s(t);
    r.removeChild(n);
  }
}
function qS(e, t) {
  var n = Sl.get(e);
  if (!n || !HS(document, n)) {
    var r = Xv("", t), o = r.parentNode;
    Sl.set(e, o), e.removeChild(r);
  }
}
function mr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _s(n), o = Zu(r), a = B(B({}, n), {}, {
    styles: o
  });
  qS(r, a);
  var i = Qv(t, a);
  if (i) {
    var s, c;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = a.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Xv(e, a);
  return u.setAttribute(Gv(a), t), u;
}
function KS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Qe(e, t) {
  if (e == null) return {};
  var n, r, o = KS(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function La(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(a, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(a);
    if (pt(!c, "Warning: There may be circular references"), c)
      return !1;
    if (a === i)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(a);
    var l = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++)
        if (!o(a[u], i[u], l))
          return !1;
      return !0;
    }
    if (a && i && Re(a) === "object" && Re(i) === "object") {
      var m = Object.keys(a);
      return m.length !== Object.keys(i).length ? !1 : m.every(function(f) {
        return o(a[f], i[f], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var GS = "%";
function El(e) {
  return e.join(GS);
}
var XS = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e), F(this, "instanceId", void 0), F(this, "cache", /* @__PURE__ */ new Map()), F(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Bt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(El(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(El(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), a = r(o);
      a === null ? this.cache.delete(n) : this.cache.set(n, a);
    }
  }]), e;
}(), ko = "data-token-hash", Vn = "data-css-hash", QS = "data-cache-path", Pr = "__cssinjs_instance__";
function YS() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Vn, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Pr] = o[Pr] || e, o[Pr] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(Vn, "]"))).forEach(function(o) {
      var a = o.getAttribute(Vn);
      if (r[a]) {
        if (o[Pr] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[a] = !0;
    });
  }
  return new XS(e);
}
var ti = /* @__PURE__ */ d.createContext({
  hashPriority: "low",
  cache: YS(),
  defaultCache: !0
});
function ZS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Ju = /* @__PURE__ */ function() {
  function e() {
    Vt(this, e), F(this, "cache", void 0), F(this, "keys", void 0), F(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Bt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (r = i) !== null && r !== void 0 && r.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(l, u) {
            var m = X(l, 2), f = m[1];
            return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = X(a, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(l, u) {
        if (u === n.length - 1)
          c.set(l, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var m = c.get(l);
          m ? m.map || (m.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var a;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !ZS(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
F(Ju, "MAX_CACHE_SIZE", 20);
F(Ju, "MAX_CACHE_OFFSET", 5);
var kf = 0, Yv = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e), F(this, "derivatives", void 0), F(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = kf, t.length === 0 && Do(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), kf += 1;
  }
  return Bt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), Sc = new Ju();
function as(e) {
  var t = Array.isArray(e) ? e : [e];
  return Sc.has(t) || Sc.set(t, new Yv(t)), Sc.get(t);
}
var JS = /* @__PURE__ */ new WeakMap(), Ec = {};
function e1(e, t) {
  for (var n = JS, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(Ec) || n.set(Ec, e()), n.get(Ec);
}
var jf = /* @__PURE__ */ new WeakMap();
function wa(e) {
  var t = jf.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Yv ? t += r.id : r && Re(r) === "object" ? t += wa(r) : t += r;
  }), t = ja(t), jf.set(e, t)), t;
}
function Ff(e, t) {
  return ja("".concat(t, "_").concat(wa(e)));
}
var wl = mn();
function oe(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function is(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = B(B({}, r), {}, F(F({}, ko, t), Vn, n)), i = Object.keys(a).map(function(s) {
    var c = a[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Li = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, t1 = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = X(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Zv = function(t, n, r) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = X(i, 2), u = l[0], m = l[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      a[u] = m;
    else if ((typeof m == "string" || typeof m == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, v = Li(u, r == null ? void 0 : r.prefix);
      o[v] = typeof m == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(m, "px") : String(m), a[u] = "var(".concat(v, ")");
    }
  }), [a, t1(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, Lf = process.env.NODE_ENV !== "test" && mn() ? d.useLayoutEffect : d.useEffect, Qt = function(t, n) {
  var r = d.useRef(!0);
  Lf(function() {
    return t(r.current);
  }, n), Lf(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, xl = function(t, n) {
  Qt(function(r) {
    if (!r)
      return t();
  }, n);
}, n1 = B({}, d), zf = n1.useInsertionEffect, r1 = function(t, n, r) {
  d.useMemo(t, r), Qt(function() {
    return n(!0);
  }, r);
}, o1 = zf ? function(e, t, n) {
  return zf(function() {
    return e(), t();
  }, n);
} : r1, a1 = B({}, d), i1 = a1.useInsertionEffect, s1 = function(t) {
  var n = [], r = !1;
  function o(a) {
    if (r) {
      process.env.NODE_ENV !== "production" && Do(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(a);
  }
  return d.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, c1 = function() {
  return function(t) {
    t();
  };
}, l1 = typeof i1 < "u" ? s1 : c1;
function u1() {
  return !1;
}
var $l = !1;
function d1() {
  return $l;
}
const f1 = process.env.NODE_ENV === "production" ? u1 : d1;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (wi && typeof wi.webpackHotUpdate == "function") {
    var m1 = wi.webpackHotUpdate;
    wi.webpackHotUpdate = function() {
      return $l = !0, setTimeout(function() {
        $l = !1;
      }, 0), m1.apply(void 0, arguments);
    };
  }
}
function ed(e, t, n, r, o) {
  var a = d.useContext(ti), i = a.cache, s = [e].concat(he(t)), c = El(s), l = l1([c]), u = f1(), m = function(y) {
    i.opUpdate(c, function(p) {
      var C = p || [void 0, void 0], S = X(C, 2), E = S[0], h = E === void 0 ? 0 : E, b = S[1], w = b;
      process.env.NODE_ENV !== "production" && b && u && (r == null || r(w, u), w = null);
      var x = w || n(), N = [h, x];
      return y ? y(N) : N;
    });
  };
  d.useMemo(
    function() {
      m();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var f = i.opGet(c);
  process.env.NODE_ENV !== "production" && !f && (m(), f = i.opGet(c));
  var v = f[1];
  return o1(function() {
    o == null || o(v);
  }, function(g) {
    return m(function(y) {
      var p = X(y, 2), C = p[0], S = p[1];
      return g && C === 0 && (o == null || o(v)), [C + 1, S];
    }), function() {
      i.opUpdate(c, function(y) {
        var p = y || [], C = X(p, 2), S = C[0], E = S === void 0 ? 0 : S, h = C[1], b = E - 1;
        return b === 0 ? (l(function() {
          (g || !i.opGet(c)) && (r == null || r(h, !1));
        }), null) : [E - 1, h];
      });
    };
  }, [c]), v;
}
var p1 = {}, v1 = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Wr = /* @__PURE__ */ new Map();
function g1(e) {
  Wr.set(e, (Wr.get(e) || 0) + 1);
}
function h1(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(ko, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Pr] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var b1 = 0;
function y1(e, t) {
  Wr.set(e, (Wr.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  Wr.forEach(function(r, o) {
    r <= 0 && n.add(o);
  }), Wr.size - n.size > b1 && n.forEach(function(r) {
    h1(r, t), Wr.delete(r);
  });
}
var Jv = function(t, n, r, o) {
  var a = r.getDerivativeToken(t), i = B(B({}, a), n);
  return o && (i = o(i)), i;
}, eg = "token";
function C1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = tn(ti), o = r.cache.instanceId, a = r.container, i = n.salt, s = i === void 0 ? "" : i, c = n.override, l = c === void 0 ? p1 : c, u = n.formatToken, m = n.getComputedToken, f = n.cssVar, v = e1(function() {
    return Object.assign.apply(Object, [{}].concat(he(t)));
  }, t), g = wa(v), y = wa(l), p = f ? wa(f) : "", C = ed(eg, [s, e.id, g, y, p], function() {
    var S, E = m ? m(v, l, e) : Jv(v, l, e, u), h = B({}, E), b = "";
    if (f) {
      var w = Zv(E, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), x = X(w, 2);
      E = x[0], b = x[1];
    }
    var N = Ff(E, s);
    E._tokenKey = N, h._tokenKey = Ff(h, s);
    var $ = (S = f == null ? void 0 : f.key) !== null && S !== void 0 ? S : N;
    E._themeKey = $, g1($);
    var O = "".concat(v1, "-").concat(ja(N));
    return E._hashId = O, [E, O, h, b, (f == null ? void 0 : f.key) || ""];
  }, function(S) {
    y1(S[0]._themeKey, o);
  }, function(S) {
    var E = X(S, 4), h = E[0], b = E[3];
    if (f && b) {
      var w = mr(b, ja("css-variables-".concat(h._themeKey)), {
        mark: Vn,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      w[Pr] = o, w.setAttribute(ko, h._themeKey);
    }
  });
  return C;
}
var S1 = function(t, n, r) {
  var o = X(t, 5), a = o[2], i = o[3], s = o[4], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = a._tokenKey, m = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(m)
  }, v = is(i, s, u, f, l);
  return [m, u, v];
}, E1 = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, tg = "comm", ng = "rule", rg = "decl", w1 = "@import", x1 = "@namespace", $1 = "@keyframes", O1 = "@layer", og = Math.abs, td = String.fromCharCode;
function ag(e) {
  return e.trim();
}
function zi(e, t, n) {
  return e.replace(t, n);
}
function N1(e, t, n) {
  return e.indexOf(t, n);
}
function _o(e, t) {
  return e.charCodeAt(t) | 0;
}
function jo(e, t, n) {
  return e.slice(t, n);
}
function Zn(e) {
  return e.length;
}
function _1(e) {
  return e.length;
}
function xi(e, t) {
  return t.push(e), e;
}
var Ps = 1, Fo = 1, ig = 0, Tn = 0, Wt = 0, Uo = "";
function nd(e, t, n, r, o, a, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: Ps, column: Fo, length: i, return: "", siblings: s };
}
function P1() {
  return Wt;
}
function R1() {
  return Wt = Tn > 0 ? _o(Uo, --Tn) : 0, Fo--, Wt === 10 && (Fo = 1, Ps--), Wt;
}
function Bn() {
  return Wt = Tn < ig ? _o(Uo, Tn++) : 0, Fo++, Wt === 10 && (Fo = 1, Ps++), Wt;
}
function Rr() {
  return _o(Uo, Tn);
}
function Vi() {
  return Tn;
}
function Rs(e, t) {
  return jo(Uo, e, t);
}
function za(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function I1(e) {
  return Ps = Fo = 1, ig = Zn(Uo = e), Tn = 0, [];
}
function M1(e) {
  return Uo = "", e;
}
function wc(e) {
  return ag(Rs(Tn - 1, Ol(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function T1(e) {
  for (; (Wt = Rr()) && Wt < 33; )
    Bn();
  return za(e) > 2 || za(Wt) > 3 ? "" : " ";
}
function D1(e, t) {
  for (; --t && Bn() && !(Wt < 48 || Wt > 102 || Wt > 57 && Wt < 65 || Wt > 70 && Wt < 97); )
    ;
  return Rs(e, Vi() + (t < 6 && Rr() == 32 && Bn() == 32));
}
function Ol(e) {
  for (; Bn(); )
    switch (Wt) {
      case e:
        return Tn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ol(Wt);
        break;
      case 40:
        e === 41 && Ol(e);
        break;
      case 92:
        Bn();
        break;
    }
  return Tn;
}
function A1(e, t) {
  for (; Bn() && e + Wt !== 57; )
    if (e + Wt === 84 && Rr() === 47)
      break;
  return "/*" + Rs(t, Tn - 1) + "*" + td(e === 47 ? e : Bn());
}
function k1(e) {
  for (; !za(Rr()); )
    Bn();
  return Rs(e, Tn);
}
function j1(e) {
  return M1(Bi("", null, null, null, [""], e = I1(e), 0, [0], e));
}
function Bi(e, t, n, r, o, a, i, s, c) {
  for (var l = 0, u = 0, m = i, f = 0, v = 0, g = 0, y = 1, p = 1, C = 1, S = 0, E = "", h = o, b = a, w = r, x = E; p; )
    switch (g = S, S = Bn()) {
      case 40:
        if (g != 108 && _o(x, m - 1) == 58) {
          N1(x += zi(wc(S), "&", "&\f"), "&\f", og(l ? s[l - 1] : 0)) != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += wc(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += T1(g);
        break;
      case 92:
        x += D1(Vi() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            xi(F1(A1(Bn(), Vi()), t, n, c), c), (za(g || 1) == 5 || za(Rr() || 1) == 5) && Zn(x) && jo(x, -1, void 0) !== " " && (x += " ");
            break;
          default:
            x += "/";
        }
        break;
      case 123 * y:
        s[l++] = Zn(x) * C;
      case 125 * y:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            p = 0;
          case 59 + u:
            C == -1 && (x = zi(x, /\f/g, "")), v > 0 && (Zn(x) - m || y === 0 && g === 47) && xi(v > 32 ? Bf(x + ";", r, n, m - 1, c) : Bf(zi(x, " ", "") + ";", r, n, m - 2, c), c);
            break;
          case 59:
            x += ";";
          default:
            if (xi(w = Vf(x, t, n, l, u, o, s, E, h = [], b = [], m, a), a), S === 123)
              if (u === 0)
                Bi(x, t, w, w, h, a, m, s, b);
              else {
                switch (f) {
                  case 99:
                    if (_o(x, 3) === 110) break;
                  case 108:
                    if (_o(x, 2) === 97) break;
                  default:
                    u = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Bi(e, w, w, r && xi(Vf(e, w, w, 0, 0, o, s, E, o, h = [], m, b), b), o, b, m, s, r ? h : b) : Bi(x, w, w, w, [""], b, 0, s, b);
              }
        }
        l = u = v = 0, y = C = 1, E = x = "", m = i;
        break;
      case 58:
        m = 1 + Zn(x), v = g;
      default:
        if (y < 1) {
          if (S == 123)
            --y;
          else if (S == 125 && y++ == 0 && R1() == 125)
            continue;
        }
        switch (x += td(S), S * y) {
          case 38:
            C = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[l++] = (Zn(x) - 1) * C, C = 1;
            break;
          case 64:
            Rr() === 45 && (x += wc(Bn())), f = Rr(), u = m = Zn(E = x += k1(Vi())), S++;
            break;
          case 45:
            g === 45 && Zn(x) == 2 && (y = 0);
        }
    }
  return a;
}
function Vf(e, t, n, r, o, a, i, s, c, l, u, m) {
  for (var f = o - 1, v = o === 0 ? a : [""], g = _1(v), y = 0, p = 0, C = 0; y < r; ++y)
    for (var S = 0, E = jo(e, f + 1, f = og(p = i[y])), h = e; S < g; ++S)
      (h = ag(p > 0 ? v[S] + " " + E : zi(E, /&\f/g, v[S]))) && (c[C++] = h);
  return nd(e, t, n, o === 0 ? ng : s, c, l, u, m);
}
function F1(e, t, n, r) {
  return nd(e, t, n, tg, td(P1()), jo(e, 2, -2), 0, r);
}
function Bf(e, t, n, r, o) {
  return nd(e, t, n, rg, jo(e, 0, r), jo(e, r + 1, -1), r, o);
}
function Nl(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function L1(e, t, n, r) {
  switch (e.type) {
    case O1:
      if (e.children.length) break;
    case w1:
    case x1:
    case rg:
      return e.return = e.return || e.value;
    case tg:
      return "";
    case $1:
      return e.return = e.value + "{" + Nl(e.children, r) + "}";
    case ng:
      if (!Zn(e.value = e.props.join(","))) return "";
  }
  return Zn(n = Nl(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function sg(e, t) {
  var n = t.path, r = t.parentSelectors;
  pt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var z1 = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || a.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && sg("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, V1 = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && sg("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Hf = "data-ant-cssinjs-cache-path", cg = "_FILE_STYLE__", Gr, lg = !0;
function B1() {
  if (!Gr && (Gr = {}, mn())) {
    var e = document.createElement("div");
    e.className = Hf, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = X(a, 2), s = i[0], c = i[1];
      Gr[s] = c;
    });
    var n = document.querySelector("style[".concat(Hf, "]"));
    if (n) {
      var r;
      lg = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function H1(e) {
  return B1(), !!Gr[e];
}
function W1(e) {
  var t = Gr[e], n = null;
  if (t && mn())
    if (lg)
      n = cg;
    else {
      var r = document.querySelector("style[".concat(Vn, '="').concat(Gr[e], '"]'));
      r ? n = r.innerHTML : delete Gr[e];
    }
  return [n, t];
}
var ug = "_skip_check_", dg = "_multi_value_";
function Hi(e) {
  var t = Nl(j1(e), L1);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function U1(e) {
  return Re(e) === "object" && e && (ug in e || dg in e);
}
function Wf(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, a = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(he(c.slice(1))).join(" ");
  });
  return a.join(",");
}
var q1 = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, a = r.injectHash, i = r.parentSelectors, s = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, m = n.transformers, f = m === void 0 ? [] : m, v = n.linters, g = v === void 0 ? [] : v, y = "", p = {};
  function C(h) {
    var b = h.getName(s);
    if (!p[b]) {
      var w = e(h.style, n, {
        root: !1,
        parentSelectors: i
      }), x = X(w, 1), N = x[0];
      p[b] = "@keyframes ".concat(h.getName(s)).concat(N);
    }
  }
  function S(h) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return h.forEach(function(w) {
      Array.isArray(w) ? S(w, b) : w && b.push(w);
    }), b;
  }
  var E = S(Array.isArray(t) ? t : [t]);
  return E.forEach(function(h) {
    var b = typeof h == "string" && !o ? {} : h;
    if (typeof b == "string")
      y += "".concat(b, `
`);
    else if (b._keyframe)
      C(b);
    else {
      var w = f.reduce(function(x, N) {
        var $;
        return (N == null || ($ = N.visit) === null || $ === void 0 ? void 0 : $.call(N, x)) || x;
      }, b);
      Object.keys(w).forEach(function(x) {
        var N = w[x];
        if (Re(N) === "object" && N && (x !== "animationName" || !N._keyframe) && !U1(N)) {
          var $ = !1, O = x.trim(), _ = !1;
          (o || a) && s ? O.startsWith("@") ? $ = !0 : O === "&" ? O = Wf("", s, u) : O = Wf(x, s, u) : o && !s && (O === "&" || O === "") && (O = "", _ = !0);
          var R = e(N, n, {
            root: _,
            injectHash: $,
            parentSelectors: [].concat(he(i), [O])
          }), P = X(R, 2), I = P[0], D = P[1];
          p = B(B({}, p), D), y += "".concat(O).concat(I);
        } else {
          let j = function(T, H) {
            process.env.NODE_ENV !== "production" && (Re(N) !== "object" || !(N != null && N[ug])) && [z1, V1].concat(he(g)).forEach(function(V) {
              return V(T, H, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var q = T.replace(/[A-Z]/g, function(V) {
              return "-".concat(V.toLowerCase());
            }), U = H;
            !E1[T] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), T === "animationName" && H !== null && H !== void 0 && H._keyframe && (C(H), U = H.getName(s)), y += "".concat(q, ":").concat(U, ";");
          };
          var M, k = (M = N == null ? void 0 : N.value) !== null && M !== void 0 ? M : N;
          Re(N) === "object" && N !== null && N !== void 0 && N[dg] && Array.isArray(k) ? k.forEach(function(T) {
            j(x, T);
          }) : j(x, k);
        }
      });
    }
  }), o ? c && (y && (y = "@layer ".concat(c.name, " {").concat(y, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(h) {
    return "@layer ".concat(h, ", ").concat(c.name, ";");
  }).join(`
`))) : y = "{".concat(y, "}"), [y, p];
};
function fg(e, t) {
  return ja("".concat(e.join("%")).concat(t));
}
function K1() {
  return null;
}
var mg = "style";
function _l(e, t) {
  var n = e.token, r = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = d.useContext(ti), m = u.autoClear, f = u.mock, v = u.defaultCache, g = u.hashPriority, y = u.container, p = u.ssrInline, C = u.transformers, S = u.linters, E = u.cache, h = u.layer, b = n._tokenKey, w = [b];
  h && w.push("layer"), w.push.apply(w, he(r));
  var x = wl;
  process.env.NODE_ENV !== "production" && f !== void 0 && (x = f === "client");
  var N = ed(
    mg,
    w,
    // Create cache if needed
    function() {
      var P = w.join("|");
      if (H1(P)) {
        var I = W1(P), D = X(I, 2), M = D[0], k = D[1];
        if (M)
          return [M, b, k, {}, s, l];
      }
      var j = t(), T = q1(j, {
        hashId: o,
        hashPriority: g,
        layer: h ? a : void 0,
        path: r.join("-"),
        transformers: C,
        linters: S
      }), H = X(T, 2), q = H[0], U = H[1], V = Hi(q), L = fg(w, V);
      return [V, b, L, U, s, l];
    },
    // Remove cache if no need
    function(P, I) {
      var D = X(P, 3), M = D[2];
      (I || m) && wl && Fa(M, {
        mark: Vn,
        attachTo: y
      });
    },
    // Effect: Inject style here
    function(P) {
      var I = X(P, 4), D = I[0];
      I[1];
      var M = I[2], k = I[3];
      if (x && D !== cg) {
        var j = {
          mark: Vn,
          prepend: h ? !1 : "queue",
          attachTo: y,
          priority: l
        }, T = typeof i == "function" ? i() : i;
        T && (j.csp = {
          nonce: T
        });
        var H = [], q = [];
        Object.keys(k).forEach(function(V) {
          V.startsWith("@layer") ? H.push(V) : q.push(V);
        }), H.forEach(function(V) {
          mr(Hi(k[V]), "_layer-".concat(V), B(B({}, j), {}, {
            prepend: !0
          }));
        });
        var U = mr(D, M, j);
        U[Pr] = E.instanceId, U.setAttribute(ko, b), process.env.NODE_ENV !== "production" && U.setAttribute(QS, w.join("|")), q.forEach(function(V) {
          mr(Hi(k[V]), "_effect-".concat(V), j);
        });
      }
    }
  ), $ = X(N, 3), O = $[0], _ = $[1], R = $[2];
  return function(P) {
    var I;
    return !p || x || !v ? I = /* @__PURE__ */ d.createElement(K1, null) : I = /* @__PURE__ */ d.createElement("style", ye({}, F(F({}, ko, _), Vn, R), {
      dangerouslySetInnerHTML: {
        __html: O
      }
    })), /* @__PURE__ */ d.createElement(d.Fragment, null, I, P);
  };
}
var G1 = function(t, n, r) {
  var o = X(t, 6), a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = o[5], m = r || {}, f = m.plain;
  if (l)
    return null;
  var v = a, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = is(a, i, s, g, f), c && Object.keys(c).forEach(function(y) {
    if (!n[y]) {
      n[y] = !0;
      var p = Hi(c[y]), C = is(p, i, "_effect-".concat(y), g, f);
      y.startsWith("@layer") ? v = C + v : v += C;
    }
  }), [u, s, v];
}, pg = "cssVar", X1 = function(t, n) {
  var r = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = tn(ti), m = u.cache.instanceId, f = u.container, v = s._tokenKey, g = [].concat(he(t.path), [r, l, v]), y = ed(pg, g, function() {
    var p = n(), C = Zv(p, r, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), S = X(C, 2), E = S[0], h = S[1], b = fg(g, h);
    return [E, h, b, r];
  }, function(p) {
    var C = X(p, 3), S = C[2];
    wl && Fa(S, {
      mark: Vn,
      attachTo: f
    });
  }, function(p) {
    var C = X(p, 3), S = C[1], E = C[2];
    if (S) {
      var h = mr(S, E, {
        mark: Vn,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      h[Pr] = m, h.setAttribute(ko, r);
    }
  });
  return y;
}, Q1 = function(t, n, r) {
  var o = X(t, 4), a = o[1], i = o[2], s = o[3], c = r || {}, l = c.plain;
  if (!a)
    return null;
  var u = -999, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = is(a, s, i, m, l);
  return [u, i, f];
};
F(F(F({}, mg, G1), eg, S1), pg, Q1);
var wt = /* @__PURE__ */ function() {
  function e(t, n) {
    Vt(this, e), F(this, "name", void 0), F(this, "style", void 0), F(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Bt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function fo(e) {
  return e.notSplit = !0, e;
}
fo(["borderTop", "borderBottom"]), fo(["borderTop"]), fo(["borderBottom"]), fo(["borderLeft", "borderRight"]), fo(["borderLeft"]), fo(["borderRight"]);
var rd = /* @__PURE__ */ Xa({});
function Y1(e) {
  return qv(e) || Bv(e) || Yu(e) || Kv();
}
function Jn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function vg(e, t, n, r) {
  if (!t.length)
    return n;
  var o = Y1(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = he(e) : s = B({}, e), r && n === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = vg(s[a], i, n, r), s;
}
function jn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Jn(e, t.slice(0, -1)) ? e : vg(e, t, n, r);
}
function Z1(e) {
  return Re(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Uf(e) {
  return Array.isArray(e) ? [] : {};
}
var J1 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function wo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Uf(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var c = new Set(s), l = Jn(o, i), u = Array.isArray(l);
      if (u || Z1(l)) {
        if (!c.has(l)) {
          c.add(l);
          var m = Jn(r, i);
          u ? r = jn(r, i, []) : (!m || Re(m) !== "object") && (r = jn(r, i, Uf(l))), J1(l).forEach(function(f) {
            a([].concat(he(i), [f]), c);
          });
        }
      } else
        r = jn(r, i, l);
    }
    a([]);
  }), r;
}
function gg() {
}
let ur = null;
function eE() {
  ur = null, Rv();
}
let hg = gg;
process.env.NODE_ENV !== "production" && (hg = (e, t, n) => {
  pt(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && eE();
});
const qo = hg, bg = /* @__PURE__ */ d.createContext({}), At = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = d.useContext(bg), n = (r, o, a) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const i = ur;
        ur || (ur = {}), ur[e] = ur[e] || [], ur[e].includes(a || "") || ur[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", ur);
      } else
        process.env.NODE_ENV !== "production" && qo(r, e, a);
  };
  return n.deprecated = (r, o, a, i) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = gg, e;
}, tE = /* @__PURE__ */ Xa(void 0);
var nE = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, rE = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, oE = B(B({}, rE), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const yg = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, qf = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, oE),
  timePickerLocale: Object.assign({}, yg)
}, Sn = "${label} is not a valid ${type}", Jr = {
  locale: "en",
  Pagination: nE,
  DatePicker: qf,
  TimePicker: yg,
  Calendar: qf,
  global: {
    placeholder: "Please select",
    close: "Close"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Sn,
        method: Sn,
        array: Sn,
        object: Sn,
        number: Sn,
        date: Sn,
        boolean: Sn,
        integer: Sn,
        float: Sn,
        regexp: Sn,
        email: Sn,
        url: Sn,
        hex: Sn
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, Jr.Modal);
let Wi = [];
const Kf = () => Wi.reduce((e, t) => Object.assign(Object.assign({}, e), t), Jr.Modal);
function aE(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Wi.push(t), Kf(), () => {
      Wi = Wi.filter((n) => n !== t), Kf();
    };
  }
  Object.assign({}, Jr.Modal);
}
const od = /* @__PURE__ */ Xa(void 0), iE = (e, t) => {
  const n = d.useContext(od), r = d.useMemo(() => {
    var a;
    const i = t || Jr[e], s = (a = n == null ? void 0 : n[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), o = d.useMemo(() => {
    const a = n == null ? void 0 : n.locale;
    return n != null && n.exist && !a ? Jr.locale : a;
  }, [n]);
  return [r, o];
}, Cg = "internalMark", Sg = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = At("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(r === Cg, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  d.useEffect(() => aE(t == null ? void 0 : t.Modal), [t]);
  const o = d.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ d.createElement(od.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Sg.displayName = "LocaleProvider");
const ad = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Lo = Object.assign(Object.assign({}, ad), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), Jt = Math.round;
function xc(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Gf = (e, t, n) => n === 0 ? e : e / 100;
function aa(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let Mt = class Eg {
  constructor(t) {
    F(this, "isValid", !0), F(this, "r", 0), F(this, "g", 0), F(this, "b", 0), F(this, "a", 1), F(this, "_h", void 0), F(this, "_s", void 0), F(this, "_l", void 0), F(this, "_v", void 0), F(this, "_max", void 0), F(this, "_min", void 0), F(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return r.startsWith(a);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Eg)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = aa(t.r), this.g = aa(t.g), this.b = aa(t.b), this.a = typeof t.a == "number" ? aa(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const i = a / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Jt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, a = (s) => (r[s] - this[s]) * o + this[s], i = {
      r: Jt(a("r")),
      g: Jt(a("g")),
      b: Jt(a("b")),
      a: Jt(a("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (a) => Jt((this[a] * this.a + n[a] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = Jt(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = Jt(this.getSaturation() * 100), r = Jt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = aa(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, a) {
      return parseInt(n[o] + n[a || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const f = Jt(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let a = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (a = l, i = u) : c >= 1 && c < 2 ? (a = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (a = u, s = l) : c >= 5 && c < 6 && (a = l, s = u);
    const m = r - l / 2;
    this.r = Jt((a + m) * 255), this.g = Jt((i + m) * 255), this.b = Jt((s + m) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const a = Jt(r * 255);
    if (this.r = a, this.g = a, this.b = a, n <= 0)
      return;
    const i = t / 60, s = Math.floor(i), c = i - s, l = Jt(r * (1 - n) * 255), u = Jt(r * (1 - n * c) * 255), m = Jt(r * (1 - n * (1 - c)) * 255);
    switch (s) {
      case 0:
        this.g = m, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = m;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = m, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = xc(t, Gf);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = xc(t, Gf);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = xc(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Jt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
};
var $i = 2, Xf = 0.16, sE = 0.05, cE = 0.05, lE = 0.15, wg = 5, xg = 4, uE = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function Qf(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - $i * t : Math.round(e.h) + $i * t : r = n ? Math.round(e.h) + $i * t : Math.round(e.h) - $i * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Yf(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Xf * t : t === xg ? r = e.s + Xf : r = e.s + sE * t, r > 1 && (r = 1), n && t === wg && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Zf(e, t, n) {
  var r;
  return n ? r = e.v + cE * t : r = e.v - lE * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function eo(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Mt(e), o = r.toHsv(), a = wg; a > 0; a -= 1) {
    var i = new Mt({
      h: Qf(o, a, !0),
      s: Yf(o, a, !0),
      v: Zf(o, a, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var s = 1; s <= xg; s += 1) {
    var c = new Mt({
      h: Qf(o, s),
      s: Yf(o, s),
      v: Zf(o, s)
    });
    n.push(c);
  }
  return t.theme === "dark" ? uE.map(function(l) {
    var u = l.index, m = l.amount;
    return new Mt(t.backgroundColor || "#141414").mix(n[u], m).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var Po = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Pl = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Pl.primary = Pl[5];
var Rl = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Rl.primary = Rl[5];
var Il = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Il.primary = Il[5];
var Ml = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ml.primary = Ml[5];
var Tl = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Tl.primary = Tl[5];
var Dl = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Dl.primary = Dl[5];
var Al = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Al.primary = Al[5];
var kl = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
kl.primary = kl[5];
var zo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
zo.primary = zo[5];
var jl = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
jl.primary = jl[5];
var Fl = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Fl.primary = Fl[5];
var Ll = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ll.primary = Ll[5];
var zl = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
zl.primary = zl[5];
var $c = {
  red: Pl,
  volcano: Rl,
  orange: Il,
  gold: Ml,
  yellow: Tl,
  lime: Dl,
  green: Al,
  cyan: kl,
  blue: zo,
  geekblue: jl,
  purple: Fl,
  magenta: Ll,
  grey: zl
};
function $g(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: n
}) {
  const {
    colorSuccess: r,
    colorWarning: o,
    colorError: a,
    colorInfo: i,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: l
  } = e, u = t(s), m = t(r), f = t(o), v = t(a), g = t(i), y = n(c, l), p = e.colorLink || e.colorInfo, C = t(p), S = new Mt(v[1]).mix(new Mt(v[3]), 50).toHexString();
  return Object.assign(Object.assign({}, y), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: m[1],
    colorSuccessBgHover: m[2],
    colorSuccessBorder: m[3],
    colorSuccessBorderHover: m[4],
    colorSuccessHover: m[4],
    colorSuccess: m[6],
    colorSuccessActive: m[7],
    colorSuccessTextHover: m[8],
    colorSuccessText: m[9],
    colorSuccessTextActive: m[10],
    colorErrorBg: v[1],
    colorErrorBgHover: v[2],
    colorErrorBgFilledHover: S,
    colorErrorBgActive: v[3],
    colorErrorBorder: v[3],
    colorErrorBorderHover: v[4],
    colorErrorHover: v[5],
    colorError: v[6],
    colorErrorActive: v[7],
    colorErrorTextHover: v[8],
    colorErrorText: v[9],
    colorErrorTextActive: v[10],
    colorWarningBg: f[1],
    colorWarningBgHover: f[2],
    colorWarningBorder: f[3],
    colorWarningBorderHover: f[4],
    colorWarningHover: f[4],
    colorWarning: f[6],
    colorWarningActive: f[7],
    colorWarningTextHover: f[8],
    colorWarningText: f[9],
    colorWarningTextActive: f[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new Mt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const dE = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function fE(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, dE(r));
}
const Og = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Ui(e) {
  return (e + 8) / e;
}
function mE(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, a = e * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Ui(n)
  }));
}
const Ng = (e) => {
  const t = mE(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], a = n[0], i = n[2], s = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(c * a),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function pE(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const _n = (e, t) => new Mt(e).setA(t).toRgbString(), ia = (e, t) => new Mt(e).darken(t).toHexString(), vE = (e) => {
  const t = eo(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, gE = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: _n(r, 0.88),
    colorTextSecondary: _n(r, 0.65),
    colorTextTertiary: _n(r, 0.45),
    colorTextQuaternary: _n(r, 0.25),
    colorFill: _n(r, 0.15),
    colorFillSecondary: _n(r, 0.06),
    colorFillTertiary: _n(r, 0.04),
    colorFillQuaternary: _n(r, 0.02),
    colorBgSolid: _n(r, 1),
    colorBgSolidHover: _n(r, 0.75),
    colorBgSolidActive: _n(r, 0.95),
    colorBgLayout: ia(n, 4),
    colorBgContainer: ia(n, 0),
    colorBgElevated: ia(n, 0),
    colorBgSpotlight: _n(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: ia(n, 15),
    colorBorderSecondary: ia(n, 6)
  };
};
function Is(e) {
  Po.pink = Po.magenta, $c.pink = $c.magenta;
  const t = Object.keys(ad).map((n) => {
    const r = e[n] === Po[n] ? $c[n] : eo(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o[`${n}${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), $g(e, {
    generateColorPalettes: vE,
    generateNeutralColorPalettes: gE
  })), Ng(e.fontSize)), pE(e)), Og(e)), fE(e));
}
const id = as(Is), Va = {
  token: Lo,
  override: {
    override: Lo
  },
  hashed: !0
}, sd = /* @__PURE__ */ Y.createContext(Va), Ba = "ant", Ms = "anticon", hE = ["outlined", "borderless", "filled", "underlined"], bE = (e, t) => t || (e ? `${Ba}-${e}` : Ba), st = /* @__PURE__ */ d.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: bE,
  iconPrefixCls: Ms
}), Jf = {};
function Ko(e) {
  const t = d.useContext(st), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: Jf,
    styles: Jf
  }, a), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const yE = `-ant-${Date.now()}-${Math.random()}`;
function CE(e, t) {
  const n = {}, r = (i, s) => {
    let c = i.clone();
    return c = (s == null ? void 0 : s(c)) || c, c.toRgbString();
  }, o = (i, s) => {
    const c = new Mt(i), l = eo(c.toRgbString());
    n[`${s}-color`] = r(c), n[`${s}-color-disabled`] = l[1], n[`${s}-color-hover`] = l[4], n[`${s}-color-active`] = l[6], n[`${s}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = l[0], n[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new Mt(t.primaryColor), s = eo(i.toRgbString());
    s.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(i, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (l) => l.setA(l.a * 0.12));
    const c = new Mt(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function SE(e, t) {
  const n = CE(e, t);
  mn() ? mr(n, `${yE}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Dr = /* @__PURE__ */ d.createContext(!1), EE = ({
  children: e,
  disabled: t
}) => {
  const n = d.useContext(Dr);
  return /* @__PURE__ */ d.createElement(Dr.Provider, {
    value: t ?? n
  }, e);
}, Vo = /* @__PURE__ */ d.createContext(void 0), wE = ({
  children: e,
  size: t
}) => {
  const n = d.useContext(Vo);
  return /* @__PURE__ */ d.createElement(Vo.Provider, {
    value: t || n
  }, e);
};
function xE() {
  const e = tn(Dr), t = tn(Vo);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var _g = /* @__PURE__ */ Bt(function e() {
  Vt(this, e);
}), Pg = "CALC_UNIT", $E = new RegExp(Pg, "g");
function Oc(e) {
  return typeof e == "number" ? "".concat(e).concat(Pg) : e;
}
var OE = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n(r, o) {
    var a;
    Vt(this, n), a = t.call(this), F(Ae(a), "result", ""), F(Ae(a), "unitlessCssVar", void 0), F(Ae(a), "lowPriority", void 0);
    var i = Re(r);
    return a.unitlessCssVar = o, r instanceof n ? a.result = "(".concat(r.result, ")") : i === "number" ? a.result = Oc(r) : i === "string" && (a.result = r), a;
  }
  return Bt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Oc(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Oc(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, s = i.unit, c = !0;
      return typeof s == "boolean" ? c = s : Array.from(this.unitlessCssVar).some(function(l) {
        return a.result.includes(l);
      }) && (c = !1), this.result = this.result.replace($E, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(_g), NE = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n(r) {
    var o;
    return Vt(this, n), o = t.call(this), F(Ae(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Bt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof n ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof n ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(_g), _E = function(t, n) {
  var r = t === "css" ? OE : NE;
  return function(o) {
    return new r(o, n);
  };
}, em = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ut(e) {
  var t = d.useRef();
  t.current = e;
  var n = d.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
function Ha(e) {
  var t = d.useRef(!1), n = d.useState(e), r = X(n, 2), o = r[0], a = r[1];
  d.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, c) {
    c && t.current || a(s);
  }
  return [o, i];
}
function Nc(e) {
  return e !== void 0;
}
function $n(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, s = Ha(function() {
    return Nc(o) ? o : Nc(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = X(s, 2), l = c[0], u = c[1], m = o !== void 0 ? o : l, f = i ? i(m) : m, v = Ut(a), g = Ha([m]), y = X(g, 2), p = y[0], C = y[1];
  xl(function() {
    var E = p[0];
    l !== E && v(l, E);
  }, [p]), xl(function() {
    Nc(o) || u(o);
  }, [o]);
  var S = Ut(function(E, h) {
    u(E, h), C([m], h);
  });
  return [f, S];
}
function tm(e, t, n, r) {
  var o = B({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var a = r.deprecatedTokens;
    a.forEach(function(s) {
      var c = X(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && pt(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var m;
        (m = o[u]) !== null && m !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var i = B(B({}, n), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var Rg = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Vl = !0;
function kt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Rg)
    return Object.assign.apply(Object, [{}].concat(t));
  Vl = !1;
  var r = {};
  return t.forEach(function(o) {
    if (Re(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), Vl = !0, r;
}
var nm = {};
function PE() {
}
var RE = function(t) {
  var n, r = t, o = PE;
  return Rg && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, s) {
      if (Vl) {
        var c;
        (c = n) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var c;
    nm[i] = {
      global: Array.from(n),
      component: B(B({}, (c = nm[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function rm(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(kt(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function IE(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(a) {
        return oe(a);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(a) {
        return oe(a);
      }).join(","), ")");
    }
  };
}
var ME = 1e3 * 60 * 10, TE = /* @__PURE__ */ function() {
  function e() {
    Vt(this, e), F(this, "map", /* @__PURE__ */ new Map()), F(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), F(this, "nextID", 0), F(this, "lastAccessBeat", /* @__PURE__ */ new Map()), F(this, "accessBeat", 0);
  }
  return Bt(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var o = this.getCompositeKey(n);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, o = n.map(function(a) {
        return a && Re(a) === "object" ? "obj_".concat(r.getObjectID(a)) : "".concat(Re(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          r - o > ME && (n.map.delete(a), n.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), om = new TE();
function DE(e, t) {
  return Y.useMemo(function() {
    var n = om.get(t);
    if (n)
      return n;
    var r = e();
    return om.set(t, r), r;
  }, t);
}
var AE = function() {
  return {};
};
function kE(e) {
  var t = e.useCSP, n = t === void 0 ? AE : t, r = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(f, v, g, y) {
    var p = Array.isArray(f) ? f[0] : f;
    function C(N) {
      return "".concat(String(p)).concat(N.slice(0, 1).toUpperCase()).concat(N.slice(1));
    }
    var S = (y == null ? void 0 : y.unitless) || {}, E = typeof s == "function" ? s(f) : {}, h = B(B({}, E), {}, F({}, C("zIndexPopup"), !0));
    Object.keys(S).forEach(function(N) {
      h[C(N)] = S[N];
    });
    var b = B(B({}, y), {}, {
      unitless: h,
      prefixToken: C
    }), w = u(f, v, g, b), x = l(p, g, b);
    return function(N) {
      var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, O = w(N, $), _ = X(O, 2), R = _[1], P = x($), I = X(P, 2), D = I[0], M = I[1];
      return [D, R, M];
    };
  }
  function l(f, v, g) {
    var y = g.unitless, p = g.injectStyle, C = p === void 0 ? !0 : p, S = g.prefixToken, E = g.ignore, h = function(x) {
      var N = x.rootCls, $ = x.cssVar, O = $ === void 0 ? {} : $, _ = r(), R = _.realToken;
      return X1({
        path: [f],
        prefix: O.prefix,
        key: O.key,
        unitless: y,
        ignore: E,
        token: R,
        scope: N
      }, function() {
        var P = rm(f, R, v), I = tm(f, R, P, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(P).forEach(function(D) {
          I[S(D)] = I[D], delete I[D];
        }), I;
      }), null;
    }, b = function(x) {
      var N = r(), $ = N.cssVar;
      return [function(O) {
        return C && $ ? /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(h, {
          rootCls: x,
          cssVar: $,
          component: f
        }), O) : O;
      }, $ == null ? void 0 : $.key];
    };
    return b;
  }
  function u(f, v, g) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(f) ? f : [f, f], C = X(p, 1), S = C[0], E = p.join("-"), h = e.layer || {
      name: "antd"
    };
    return function(b) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, x = r(), N = x.theme, $ = x.realToken, O = x.hashId, _ = x.token, R = x.cssVar, P = o(), I = P.rootPrefixCls, D = P.iconPrefixCls, M = n(), k = R ? "css" : "js", j = DE(function() {
        var L = /* @__PURE__ */ new Set();
        return R && Object.keys(y.unitless || {}).forEach(function(A) {
          L.add(Li(A, R.prefix)), L.add(Li(A, em(S, R.prefix)));
        }), _E(k, L);
      }, [k, S, R == null ? void 0 : R.prefix]), T = IE(k), H = T.max, q = T.min, U = {
        theme: N,
        token: _,
        hashId: O,
        nonce: function() {
          return M.nonce;
        },
        clientOnly: y.clientOnly,
        layer: h,
        // antd is always at top of styles
        order: y.order || -999
      };
      typeof a == "function" && _l(B(B({}, U), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return a(_, {
          prefix: {
            rootPrefixCls: I,
            iconPrefixCls: D
          },
          csp: M
        });
      });
      var V = _l(B(B({}, U), {}, {
        path: [E, b, D]
      }), function() {
        if (y.injectStyle === !1)
          return [];
        var L = RE(_), A = L.token, W = L.flush, Z = rm(S, $, g), G = ".".concat(b), re = tm(S, $, Z, {
          deprecatedTokens: y.deprecatedTokens
        });
        R && Z && Re(Z) === "object" && Object.keys(Z).forEach(function(ue) {
          Z[ue] = "var(".concat(Li(ue, em(S, R.prefix)), ")");
        });
        var J = kt(A, {
          componentCls: G,
          prefixCls: b,
          iconCls: ".".concat(D),
          antCls: ".".concat(I),
          calc: j,
          // @ts-ignore
          max: H,
          // @ts-ignore
          min: q
        }, R ? Z : re), te = v(J, {
          hashId: O,
          prefixCls: b,
          rootPrefixCls: I,
          iconPrefixCls: D
        });
        W(S, re);
        var ne = typeof i == "function" ? i(J, b, w, y.resetFont) : null;
        return [y.resetStyle === !1 ? null : ne, te];
      });
      return [V, O];
    };
  }
  function m(f, v, g) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(f, v, g, B({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, y)), C = function(E) {
      var h = E.prefixCls, b = E.rootCls, w = b === void 0 ? h : b;
      return p(h, w), null;
    };
    return process.env.NODE_ENV !== "production" && (C.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), C;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: m,
    genComponentStyleHook: u
  };
}
const Ar = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], jE = "5.26.6";
function _c(e) {
  return e >= 0 && e <= 255;
}
function ma(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = new Mt(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: s,
    b: c
  } = new Mt(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - i * (1 - l)) / l), m = Math.round((r - s * (1 - l)) / l), f = Math.round((o - c * (1 - l)) / l);
    if (_c(u) && _c(m) && _c(f))
      return new Mt({
        r: u,
        g: m,
        b: f,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Mt({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var FE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function cd(e) {
  const {
    override: t
  } = e, n = FE(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Lo).forEach((f) => {
    delete r[f];
  });
  const o = Object.assign(Object.assign({}, n), r), a = 480, i = 576, s = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const f = "0s";
    o.motionDurationFast = f, o.motionDurationMid = f, o.motionDurationSlow = f;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: ma(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: ma(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: ma(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 3,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: ma(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Mt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Mt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Mt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var am = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ig = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, LE = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, zE = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Mg = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, a = am(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = cd(i), a && Object.entries(a).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = am(c, ["theme"]);
    let m = u;
    l && (m = Mg(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = m;
  }), i;
};
function ar() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = Y.useContext(sd), a = `${jE}-${t || ""}`, i = n || id, [s, c, l] = C1(i, [Lo, e], {
    salt: a,
    override: r,
    getComputedToken: Mg,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: cd,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Ig,
      ignore: LE,
      preserve: zE
    }
  });
  return [i, l, t ? c : "", s, o];
}
const ni = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Kn = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), Tg = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), no = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), VE = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), BE = (e, t, n, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = n ? `.${n}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return r !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [o]: i
    })
  };
}, ld = (e, t) => ({
  outline: `${oe(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), ss = (e, t) => ({
  "&:focus-visible": Object.assign({}, ld(e, t))
}), Dg = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Tg()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: bn,
  genComponentStyleHook: HE,
  genSubStyleComponent: WE
} = kE({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = tn(st);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = ar();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = tn(st);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = VE(e);
    return [r, {
      "&": r
    }, Dg((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : Ms)];
  },
  getCommonStyle: BE,
  getCompUnitless: () => Ig
});
function UE(e, t) {
  return Ar.reduce((n, r) => {
    const o = e[`${r}1`], a = e[`${r}3`], i = e[`${r}6`], s = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: o,
      lightBorderColor: a,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const qE = (e, t) => {
  const [n, r] = ar();
  return _l({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Dg(e)]);
}, KE = Object.assign({}, d), {
  useId: im
} = KE, GE = () => "", XE = typeof im > "u" ? GE : im;
function QE(e, t, n) {
  var r, o;
  const a = At("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Va), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : Va.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = XE();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && a(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return $s(() => {
    var l, u;
    if (!e)
      return t;
    const m = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((g) => {
      m[g] = Object.assign(Object.assign({}, m[g]), e.components[g]);
    });
    const f = `css-var-${c.replace(/:/g, "")}`, v = ((l = i.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: m,
      cssVar: v
    });
  }, [i, s], (l, u) => l.some((m, f) => {
    const v = u[f];
    return !La(m, v, !0);
  }));
}
var YE = ["children"], Ag = /* @__PURE__ */ d.createContext({});
function ZE(e) {
  var t = e.children, n = Qe(e, YE);
  return /* @__PURE__ */ d.createElement(Ag.Provider, {
    value: n
  }, t);
}
var JE = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n() {
    return Vt(this, n), t.apply(this, arguments);
  }
  return Bt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(d.Component);
function ew(e) {
  var t = d.useReducer(function(s) {
    return s + 1;
  }, 0), n = X(t, 2), r = n[1], o = d.useRef(e), a = Ut(function() {
    return o.current;
  }), i = Ut(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, r();
  });
  return [a, i];
}
var Nr = "none", Oi = "appear", Ni = "enter", _i = "leave", sm = "none", Fn = "prepare", xo = "start", $o = "active", ud = "end", kg = "prepared";
function cm(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function tw(e, t) {
  var n = {
    animationend: cm("Animation", "AnimationEnd"),
    transitionend: cm("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var nw = tw(mn(), typeof window < "u" ? window : {}), jg = {};
if (mn()) {
  var rw = document.createElement("div");
  jg = rw.style;
}
var Pi = {};
function Fg(e) {
  if (Pi[e])
    return Pi[e];
  var t = nw[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var a = n[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in jg)
        return Pi[e] = t[a], Pi[e];
    }
  return "";
}
var Lg = Fg("animationend"), zg = Fg("transitionend"), Vg = !!(Lg && zg), lm = Lg || "animationend", um = zg || "transitionend";
function dm(e, t) {
  if (!e) return null;
  if (Re(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const ow = function(e) {
  var t = we();
  function n(o) {
    o && (o.removeEventListener(um, e), o.removeEventListener(lm, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(um, e), o.addEventListener(lm, e), t.current = o);
  }
  return d.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Bg = mn() ? ku : Ge;
const aw = function() {
  var e = d.useRef(null);
  function t() {
    Kt.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Kt(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = a;
  }
  return d.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var iw = [Fn, xo, $o, ud], sw = [Fn, kg], Hg = !1, cw = !0;
function Wg(e) {
  return e === $o || e === ud;
}
const lw = function(e, t, n) {
  var r = Ha(sm), o = X(r, 2), a = o[0], i = o[1], s = aw(), c = X(s, 2), l = c[0], u = c[1];
  function m() {
    i(Fn, !0);
  }
  var f = t ? sw : iw;
  return Bg(function() {
    if (a !== sm && a !== ud) {
      var v = f.indexOf(a), g = f[v + 1], y = n(a);
      y === Hg ? i(g, !0) : g && l(function(p) {
        function C() {
          p.isCanceled() || i(g, !0);
        }
        y === !0 ? C() : Promise.resolve(y).then(C);
      });
    }
  }, [e, a]), d.useEffect(function() {
    return function() {
      u();
    };
  }, []), [m, a];
};
function uw(e, t, n, r) {
  var o = r.motionEnter, a = o === void 0 ? !0 : o, i = r.motionAppear, s = i === void 0 ? !0 : i, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, m = r.motionLeaveImmediately, f = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, y = r.onAppearStart, p = r.onEnterStart, C = r.onLeaveStart, S = r.onAppearActive, E = r.onEnterActive, h = r.onLeaveActive, b = r.onAppearEnd, w = r.onEnterEnd, x = r.onLeaveEnd, N = r.onVisibleChanged, $ = Ha(), O = X($, 2), _ = O[0], R = O[1], P = ew(Nr), I = X(P, 2), D = I[0], M = I[1], k = Ha(null), j = X(k, 2), T = j[0], H = j[1], q = D(), U = we(!1), V = we(null);
  function L() {
    return n();
  }
  var A = we(!1);
  function W() {
    M(Nr), H(null, !0);
  }
  var Z = Ut(function(me) {
    var Pe = D();
    if (Pe !== Nr) {
      var $e = L();
      if (!(me && !me.deadline && me.target !== $e)) {
        var ce = A.current, xe;
        Pe === Oi && ce ? xe = b == null ? void 0 : b($e, me) : Pe === Ni && ce ? xe = w == null ? void 0 : w($e, me) : Pe === _i && ce && (xe = x == null ? void 0 : x($e, me)), ce && xe !== !1 && W();
      }
    }
  }), G = ow(Z), re = X(G, 1), J = re[0], te = function(Pe) {
    switch (Pe) {
      case Oi:
        return F(F(F({}, Fn, f), xo, y), $o, S);
      case Ni:
        return F(F(F({}, Fn, v), xo, p), $o, E);
      case _i:
        return F(F(F({}, Fn, g), xo, C), $o, h);
      default:
        return {};
    }
  }, ne = d.useMemo(function() {
    return te(q);
  }, [q]), ue = lw(q, !e, function(me) {
    if (me === Fn) {
      var Pe = ne[Fn];
      return Pe ? Pe(L()) : Hg;
    }
    if (ae in ne) {
      var $e;
      H((($e = ne[ae]) === null || $e === void 0 ? void 0 : $e.call(ne, L(), null)) || null);
    }
    return ae === $o && q !== Nr && (J(L()), u > 0 && (clearTimeout(V.current), V.current = setTimeout(function() {
      Z({
        deadline: !0
      });
    }, u))), ae === kg && W(), cw;
  }), K = X(ue, 2), de = K[0], ae = K[1], pe = Wg(ae);
  A.current = pe;
  var Ce = we(null);
  Bg(function() {
    if (!(U.current && Ce.current === t)) {
      R(t);
      var me = U.current;
      U.current = !0;
      var Pe;
      !me && t && s && (Pe = Oi), me && t && a && (Pe = Ni), (me && !t && l || !me && m && !t && l) && (Pe = _i);
      var $e = te(Pe);
      Pe && (e || $e[Fn]) ? (M(Pe), de()) : M(Nr), Ce.current = t;
    }
  }, [t]), Ge(function() {
    // Cancel appear
    (q === Oi && !s || // Cancel enter
    q === Ni && !a || // Cancel leave
    q === _i && !l) && M(Nr);
  }, [s, a, l]), Ge(function() {
    return function() {
      U.current = !1, clearTimeout(V.current);
    };
  }, []);
  var fe = d.useRef(!1);
  Ge(function() {
    _ && (fe.current = !0), _ !== void 0 && q === Nr && ((fe.current || _) && (N == null || N(_)), fe.current = !0);
  }, [_, q]);
  var be = T;
  return ne[Fn] && ae === xo && (be = B({
    transition: "none"
  }, be)), [q, ae, be, _ ?? t];
}
function dw(e) {
  var t = e;
  Re(e) === "object" && (t = e.transitionSupport);
  function n(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var r = /* @__PURE__ */ d.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, m = o.children, f = o.motionName, v = o.leavedClassName, g = o.eventProps, y = d.useContext(Ag), p = y.motion, C = n(o, p), S = we(), E = we();
    function h() {
      try {
        return S.current instanceof HTMLElement ? S.current : Fi(E.current);
      } catch {
        return null;
      }
    }
    var b = uw(C, s, h, o), w = X(b, 4), x = w[0], N = w[1], $ = w[2], O = w[3], _ = d.useRef(O);
    O && (_.current = !0);
    var R = d.useCallback(function(j) {
      S.current = j, Xu(a, j);
    }, [a]), P, I = B(B({}, g), {}, {
      visible: s
    });
    if (!m)
      P = null;
    else if (x === Nr)
      O ? P = m(B({}, I), R) : !l && _.current && v ? P = m(B(B({}, I), {}, {
        className: v
      }), R) : u || !l && !v ? P = m(B(B({}, I), {}, {
        style: {
          display: "none"
        }
      }), R) : P = null;
    else {
      var D;
      N === Fn ? D = "prepare" : Wg(N) ? D = "active" : N === xo && (D = "start");
      var M = dm(f, "".concat(x, "-").concat(D));
      P = m(B(B({}, I), {}, {
        className: Q(dm(f, x), F(F({}, M, M && D), f, typeof f == "string")),
        style: $
      }), R);
    }
    if (/* @__PURE__ */ d.isValidElement(P) && to(P)) {
      var k = Wo(P);
      k || (P = /* @__PURE__ */ d.cloneElement(P, {
        ref: R
      }));
    }
    return /* @__PURE__ */ d.createElement(JE, {
      ref: E
    }, P);
  });
  return r.displayName = "CSSMotion", r;
}
const Sr = dw(Vg);
var Bl = "add", Hl = "keep", Wl = "remove", Pc = "removed";
function fw(e) {
  var t;
  return e && Re(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, B(B({}, t), {}, {
    key: String(t.key)
  });
}
function Ul() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(fw);
}
function mw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, a = Ul(e), i = Ul(t);
  a.forEach(function(l) {
    for (var u = !1, m = r; m < o; m += 1) {
      var f = i[m];
      if (f.key === l.key) {
        r < m && (n = n.concat(i.slice(r, m).map(function(v) {
          return B(B({}, v), {}, {
            status: Bl
          });
        })), r = m), n.push(B(B({}, f), {}, {
          status: Hl
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(B(B({}, l), {}, {
      status: Wl
    }));
  }), r < o && (n = n.concat(i.slice(r).map(function(l) {
    return B(B({}, l), {}, {
      status: Bl
    });
  })));
  var s = {};
  n.forEach(function(l) {
    var u = l.key;
    s[u] = (s[u] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(u) {
      var m = u.key, f = u.status;
      return m !== l || f !== Wl;
    }), n.forEach(function(u) {
      u.key === l && (u.status = Hl);
    });
  }), n;
}
var pw = ["component", "children", "onVisibleChanged", "onAllRemoved"], vw = ["status"], gw = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function hw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Sr, n = /* @__PURE__ */ function(r) {
    Un(a, r);
    var o = qn(a);
    function a() {
      var i;
      Vt(this, a);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), F(Ae(i), "state", {
        keyEntities: []
      }), F(Ae(i), "removeKey", function(u) {
        i.setState(function(m) {
          var f = m.keyEntities.map(function(v) {
            return v.key !== u ? v : B(B({}, v), {}, {
              status: Pc
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var m = i.state.keyEntities, f = m.filter(function(v) {
            var g = v.status;
            return g !== Pc;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Bt(a, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, m = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var v = Qe(l, pw), g = u || d.Fragment, y = {};
        return gw.forEach(function(p) {
          y[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ d.createElement(g, v, c.map(function(p, C) {
          var S = p.status, E = Qe(p, vw), h = S === Bl || S === Hl;
          return /* @__PURE__ */ d.createElement(t, ye({}, y, {
            key: E.key,
            visible: h,
            eventProps: E,
            onVisibleChanged: function(w) {
              f == null || f(w, {
                key: E.key
              }), w || s.removeKey(E.key);
            }
          }), function(b, w) {
            return m(B(B({}, b), {}, {
              index: C
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, m = Ul(l), f = mw(u, m);
        return {
          keyEntities: f.filter(function(v) {
            var g = u.find(function(y) {
              var p = y.key;
              return v.key === p;
            });
            return !(g && g.status === Pc && v.status === Wl);
          })
        };
      }
    }]), a;
  }(d.Component);
  return F(n, "defaultProps", {
    component: "div"
  }), n;
}
const Ug = hw(Vg), ql = /* @__PURE__ */ d.createContext(!0);
process.env.NODE_ENV !== "production" && (ql.displayName = "MotionCacheContext");
function bw(e) {
  const t = d.useContext(ql), {
    children: n
  } = e, [, r] = ar(), {
    motion: o
  } = r, a = d.useRef(!1);
  return a.current || (a.current = t !== o), a.current ? /* @__PURE__ */ d.createElement(ql.Provider, {
    value: o
  }, /* @__PURE__ */ d.createElement(ZE, {
    motion: o
  }, n)) : n;
}
const qg = /* @__PURE__ */ d.memo(({
  dropdownMatchSelectWidth: e
}) => (At("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (qg.displayName = "PropWarning");
const yw = process.env.NODE_ENV !== "production" ? qg : () => null;
var Cw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Kl = !1;
const Sw = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && qo(!Kl, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), Ew = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let cs, Kg, Gg, Xg;
function qi() {
  return cs || Ba;
}
function ww() {
  return Kg || Ms;
}
function xw(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const $w = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (cs = t), n !== void 0 && (Kg = n), "holderRender" in e && (Xg = o), r && (xw(r) ? (process.env.NODE_ENV !== "production" && qo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), SE(qi(), r)) : Gg = r);
}, Qg = () => ({
  getPrefixCls: (e, t) => t || (e ? `${qi()}-${e}` : qi()),
  getIconPrefixCls: ww,
  getRootPrefixCls: () => cs || qi(),
  getTheme: () => Gg,
  holderRender: Xg
}), Ow = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    form: i,
    locale: s,
    componentSize: c,
    direction: l,
    space: u,
    splitter: m,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: y,
    legacyLocale: p,
    parentContext: C,
    iconPrefixCls: S,
    theme: E,
    componentDisabled: h,
    segmented: b,
    statistic: w,
    spin: x,
    calendar: N,
    carousel: $,
    cascader: O,
    collapse: _,
    typography: R,
    checkbox: P,
    descriptions: I,
    divider: D,
    drawer: M,
    skeleton: k,
    steps: j,
    image: T,
    layout: H,
    list: q,
    mentions: U,
    modal: V,
    progress: L,
    result: A,
    slider: W,
    breadcrumb: Z,
    menu: G,
    pagination: re,
    input: J,
    textArea: te,
    empty: ne,
    badge: ue,
    radio: K,
    rate: de,
    switch: ae,
    transfer: pe,
    avatar: Ce,
    message: fe,
    tag: be,
    table: me,
    card: Pe,
    tabs: $e,
    timeline: ce,
    timePicker: xe,
    upload: Ne,
    notification: rt,
    tree: Ue,
    colorPicker: Ve,
    datePicker: tt,
    rangePicker: Le,
    flex: qe,
    wave: Me,
    dropdown: ie,
    warning: Se,
    tour: ve,
    tooltip: ge,
    popover: ze,
    popconfirm: lt,
    floatButtonGroup: _t,
    variant: gt,
    inputNumber: Pt,
    treeSelect: Ht
  } = e, Rt = d.useCallback((ee, se) => {
    const {
      prefixCls: Oe
    } = e;
    if (se)
      return se;
    const je = Oe || C.getPrefixCls("");
    return ee ? `${je}-${ee}` : je;
  }, [C.getPrefixCls, e.prefixCls]), ot = S || C.iconPrefixCls || Ms, Ye = n || C.csp;
  qE(ot, Ye);
  const Te = QE(E, C.theme, {
    prefixCls: Rt("")
  });
  process.env.NODE_ENV !== "production" && (Kl = Kl || !!Te);
  const ke = {
    csp: Ye,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    locale: s || p,
    direction: l,
    space: u,
    splitter: m,
    virtual: f,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: y,
    getPrefixCls: Rt,
    iconPrefixCls: ot,
    theme: Te,
    segmented: b,
    statistic: w,
    spin: x,
    calendar: N,
    carousel: $,
    cascader: O,
    collapse: _,
    typography: R,
    checkbox: P,
    descriptions: I,
    divider: D,
    drawer: M,
    skeleton: k,
    steps: j,
    image: T,
    input: J,
    textArea: te,
    layout: H,
    list: q,
    mentions: U,
    modal: V,
    progress: L,
    result: A,
    slider: W,
    breadcrumb: Z,
    menu: G,
    pagination: re,
    empty: ne,
    badge: ue,
    radio: K,
    rate: de,
    switch: ae,
    transfer: pe,
    avatar: Ce,
    message: fe,
    tag: be,
    table: me,
    card: Pe,
    tabs: $e,
    timeline: ce,
    timePicker: xe,
    upload: Ne,
    notification: rt,
    tree: Ue,
    colorPicker: Ve,
    datePicker: tt,
    rangePicker: Le,
    flex: qe,
    wave: Me,
    dropdown: ie,
    warning: Se,
    tour: ve,
    tooltip: ge,
    popover: ze,
    popconfirm: lt,
    floatButtonGroup: _t,
    variant: gt,
    inputNumber: Pt,
    treeSelect: Ht
  };
  process.env.NODE_ENV !== "production" && At("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ie = Object.assign({}, C);
  Object.keys(ke).forEach((ee) => {
    ke[ee] !== void 0 && (Ie[ee] = ke[ee]);
  }), Ew.forEach((ee) => {
    const se = e[ee];
    se && (Ie[ee] = se);
  }), typeof r < "u" && (Ie.button = Object.assign({
    autoInsertSpace: r
  }, Ie.button));
  const Be = $s(() => Ie, Ie, (ee, se) => {
    const Oe = Object.keys(ee), je = Object.keys(se);
    return Oe.length !== je.length || Oe.some((Ke) => ee[Ke] !== se[Ke]);
  }), {
    layer: Xe
  } = d.useContext(ti), jt = d.useMemo(() => ({
    prefixCls: ot,
    csp: Ye,
    layer: Xe ? "antd" : void 0
  }), [ot, Ye, Xe]);
  let at = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(yw, {
    dropdownMatchSelectWidth: v
  }), t);
  const nn = d.useMemo(() => {
    var ee, se, Oe, je;
    return wo(((ee = Jr.Form) === null || ee === void 0 ? void 0 : ee.defaultValidateMessages) || {}, ((Oe = (se = Be.locale) === null || se === void 0 ? void 0 : se.Form) === null || Oe === void 0 ? void 0 : Oe.defaultValidateMessages) || {}, ((je = Be.form) === null || je === void 0 ? void 0 : je.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [Be, i == null ? void 0 : i.validateMessages]);
  Object.keys(nn).length > 0 && (at = /* @__PURE__ */ d.createElement(tE.Provider, {
    value: nn
  }, at)), s && (at = /* @__PURE__ */ d.createElement(Sg, {
    locale: s,
    _ANT_MARK__: Cg
  }, at)), (ot || Ye) && (at = /* @__PURE__ */ d.createElement(rd.Provider, {
    value: jt
  }, at)), c && (at = /* @__PURE__ */ d.createElement(wE, {
    size: c
  }, at)), at = /* @__PURE__ */ d.createElement(bw, null, at);
  const z = d.useMemo(() => {
    const ee = Te || {}, {
      algorithm: se,
      token: Oe,
      components: je,
      cssVar: Ke
    } = ee, He = Cw(ee, ["algorithm", "token", "components", "cssVar"]), Fe = se && (!Array.isArray(se) || se.length > 0) ? as(se) : id, ut = {};
    Object.entries(je || {}).forEach(([et, vt]) => {
      const xt = Object.assign({}, vt);
      "algorithm" in xt && (xt.algorithm === !0 ? xt.theme = Fe : (Array.isArray(xt.algorithm) || typeof xt.algorithm == "function") && (xt.theme = as(xt.algorithm)), delete xt.algorithm), ut[et] = xt;
    });
    const Ze = Object.assign(Object.assign({}, Lo), Oe);
    return Object.assign(Object.assign({}, He), {
      theme: Fe,
      token: Ze,
      components: ut,
      override: Object.assign({
        override: Ze
      }, ut),
      cssVar: Ke
    });
  }, [Te]);
  return E && (at = /* @__PURE__ */ d.createElement(sd.Provider, {
    value: z
  }, at)), Be.warning && (at = /* @__PURE__ */ d.createElement(bg.Provider, {
    value: Be.warning
  }, at)), h !== void 0 && (at = /* @__PURE__ */ d.createElement(EE, {
    disabled: h
  }, at)), /* @__PURE__ */ d.createElement(st.Provider, {
    value: Be
  }, at);
}, kr = (e) => {
  const t = d.useContext(st), n = d.useContext(od);
  return /* @__PURE__ */ d.createElement(Ow, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
kr.ConfigContext = st;
kr.SizeContext = Vo;
kr.config = $w;
kr.useConfig = xE;
Object.defineProperty(kr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Vo)
});
process.env.NODE_ENV !== "production" && (kr.displayName = "ConfigProvider");
var Nw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Yg(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function _w(e) {
  return Yg(e) instanceof ShadowRoot;
}
function ls(e) {
  return _w(e) ? Yg(e) : null;
}
function Pw(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Rw(e, t) {
  pt(e, "[@ant-design/icons] ".concat(t));
}
function fm(e) {
  return Re(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Re(e.icon) === "object" || typeof e.icon == "function");
}
function mm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Pw(n)] = r;
    }
    return t;
  }, {});
}
function Gl(e, t, n) {
  return n ? /* @__PURE__ */ Y.createElement(e.tag, B(B({
    key: t
  }, mm(e.attrs)), n), (e.children || []).map(function(r, o) {
    return Gl(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Y.createElement(e.tag, B({
    key: t
  }, mm(e.attrs)), (e.children || []).map(function(r, o) {
    return Gl(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Zg(e) {
  return eo(e)[0];
}
function Jg(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Iw = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Mw = function(t) {
  var n = tn(rd), r = n.csp, o = n.prefixCls, a = n.layer, i = Iw;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), Ge(function() {
    var s = t.current, c = ls(s);
    mr(i, "@ant-design-icons", {
      prepend: !a,
      csp: r,
      attachTo: c
    });
  }, []);
}, Tw = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], xa = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Dw(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  xa.primaryColor = t, xa.secondaryColor = n || Zg(t), xa.calculated = !!n;
}
function Aw() {
  return B({}, xa);
}
var Go = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, a = t.style, i = t.primaryColor, s = t.secondaryColor, c = Qe(t, Tw), l = d.useRef(), u = xa;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || Zg(i)
  }), Mw(l), Rw(fm(n), "icon should be icon definiton, but got ".concat(n)), !fm(n))
    return null;
  var m = n;
  return m && typeof m.icon == "function" && (m = B(B({}, m), {}, {
    icon: m.icon(u.primaryColor, u.secondaryColor)
  })), Gl(m.icon, "svg-".concat(m.name), B(B({
    className: r,
    onClick: o,
    style: a,
    "data-icon": m.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
Go.displayName = "IconReact";
Go.getTwoToneColors = Aw;
Go.setTwoToneColors = Dw;
function eh(e) {
  var t = Jg(e), n = X(t, 2), r = n[0], o = n[1];
  return Go.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function kw() {
  var e = Go.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var jw = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
eh(zo.primary);
var Gt = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = Qe(e, jw), u = d.useContext(rd), m = u.prefixCls, f = m === void 0 ? "anticon" : m, v = u.rootClassName, g = Q(v, f, F(F({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), n), y = i;
  y === void 0 && s && (y = -1);
  var p = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, C = Jg(c), S = X(C, 2), E = S[0], h = S[1];
  return /* @__PURE__ */ d.createElement("span", ye({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: y,
    onClick: s,
    className: g
  }), /* @__PURE__ */ d.createElement(Go, {
    icon: r,
    primaryColor: E,
    secondaryColor: h,
    style: p
  }));
});
Gt.displayName = "AntdIcon";
Gt.getTwoToneColor = kw;
Gt.setTwoToneColor = eh;
var Fw = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: Nw
  }));
}, dd = /* @__PURE__ */ d.forwardRef(Fw);
process.env.NODE_ENV !== "production" && (dd.displayName = "CheckCircleFilled");
var Lw = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, zw = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: Lw
  }));
}, Ts = /* @__PURE__ */ d.forwardRef(zw);
process.env.NODE_ENV !== "production" && (Ts.displayName = "CloseCircleFilled");
var th = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Vw = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: th
  }));
}, Ds = /* @__PURE__ */ d.forwardRef(Vw);
process.env.NODE_ENV !== "production" && (Ds.displayName = "CloseOutlined");
var Bw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Hw = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: Bw
  }));
}, nh = /* @__PURE__ */ d.forwardRef(Hw);
process.env.NODE_ENV !== "production" && (nh.displayName = "ExclamationCircleFilled");
var Ww = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Uw = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: Ww
  }));
}, rh = /* @__PURE__ */ d.forwardRef(Uw);
process.env.NODE_ENV !== "production" && (rh.displayName = "InfoCircleFilled");
var qw = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, Kw = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Gw = "".concat(qw, " ").concat(Kw).split(/[\s\n]+/), Xw = "aria-", Qw = "data-";
function pm(e, t) {
  return e.indexOf(t) === 0;
}
function fd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = B({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || pm(o, Xw)) || // Data
    n.data && pm(o, Qw) || // Attr
    n.attr && Gw.includes(o)) && (r[o] = e[o]);
  }), r;
}
function oh(e) {
  return e && /* @__PURE__ */ Y.isValidElement(e) && e.type === Y.Fragment;
}
const Yw = (e, t, n) => /* @__PURE__ */ Y.isValidElement(e) ? /* @__PURE__ */ Y.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function gr(e, t) {
  return Yw(e, e, t);
}
const ro = (e) => {
  const [, , , , t] = ar();
  return t ? `${e}-css-var` : "";
};
var Ee = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= Ee.F1 && n <= Ee.F12)
      return !1;
    switch (n) {
      case Ee.ALT:
      case Ee.CAPS_LOCK:
      case Ee.CONTEXT_MENU:
      case Ee.CTRL:
      case Ee.DOWN:
      case Ee.END:
      case Ee.ESC:
      case Ee.HOME:
      case Ee.INSERT:
      case Ee.LEFT:
      case Ee.MAC_FF_META:
      case Ee.META:
      case Ee.NUMLOCK:
      case Ee.NUM_CENTER:
      case Ee.PAGE_DOWN:
      case Ee.PAGE_UP:
      case Ee.PAUSE:
      case Ee.PRINT_SCREEN:
      case Ee.RIGHT:
      case Ee.SHIFT:
      case Ee.UP:
      case Ee.WIN_KEY:
      case Ee.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Ee.ZERO && t <= Ee.NINE || t >= Ee.NUM_ZERO && t <= Ee.NUM_MULTIPLY || t >= Ee.A && t <= Ee.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Ee.SPACE:
      case Ee.QUESTION_MARK:
      case Ee.NUM_PLUS:
      case Ee.NUM_MINUS:
      case Ee.NUM_PERIOD:
      case Ee.NUM_DIVISION:
      case Ee.SEMICOLON:
      case Ee.DASH:
      case Ee.EQUALS:
      case Ee.COMMA:
      case Ee.PERIOD:
      case Ee.SLASH:
      case Ee.APOSTROPHE:
      case Ee.SINGLE_QUOTE:
      case Ee.OPEN_SQUARE_BRACKET:
      case Ee.BACKSLASH:
      case Ee.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, ah = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.className, a = e.duration, i = a === void 0 ? 4.5 : a, s = e.showProgress, c = e.pauseOnHover, l = c === void 0 ? !0 : c, u = e.eventKey, m = e.content, f = e.closable, v = e.closeIcon, g = v === void 0 ? "x" : v, y = e.props, p = e.onClick, C = e.onNoticeClose, S = e.times, E = e.hovering, h = d.useState(!1), b = X(h, 2), w = b[0], x = b[1], N = d.useState(0), $ = X(N, 2), O = $[0], _ = $[1], R = d.useState(0), P = X(R, 2), I = P[0], D = P[1], M = E || w, k = i > 0 && s, j = function() {
    C(u);
  }, T = function(A) {
    (A.key === "Enter" || A.code === "Enter" || A.keyCode === Ee.ENTER) && j();
  };
  d.useEffect(function() {
    if (!M && i > 0) {
      var L = Date.now() - I, A = setTimeout(function() {
        j();
      }, i * 1e3 - I);
      return function() {
        l && clearTimeout(A), D(Date.now() - L);
      };
    }
  }, [i, M, S]), d.useEffect(function() {
    if (!M && k && (l || I === 0)) {
      var L = performance.now(), A, W = function Z() {
        cancelAnimationFrame(A), A = requestAnimationFrame(function(G) {
          var re = G + I - L, J = Math.min(re / (i * 1e3), 1);
          _(J * 100), J < 1 && Z();
        });
      };
      return W(), function() {
        l && cancelAnimationFrame(A);
      };
    }
  }, [i, I, M, k, S]);
  var H = d.useMemo(function() {
    return Re(f) === "object" && f !== null ? f : f ? {
      closeIcon: g
    } : {};
  }, [f, g]), q = fd(H, !0), U = 100 - (!O || O < 0 ? 0 : O > 100 ? 100 : O), V = "".concat(n, "-notice");
  return /* @__PURE__ */ d.createElement("div", ye({}, y, {
    ref: t,
    className: Q(V, o, F({}, "".concat(V, "-closable"), f)),
    style: r,
    onMouseEnter: function(A) {
      var W;
      x(!0), y == null || (W = y.onMouseEnter) === null || W === void 0 || W.call(y, A);
    },
    onMouseLeave: function(A) {
      var W;
      x(!1), y == null || (W = y.onMouseLeave) === null || W === void 0 || W.call(y, A);
    },
    onClick: p
  }), /* @__PURE__ */ d.createElement("div", {
    className: "".concat(V, "-content")
  }, m), f && /* @__PURE__ */ d.createElement("a", ye({
    tabIndex: 0,
    className: "".concat(V, "-close"),
    onKeyDown: T,
    "aria-label": "Close"
  }, q, {
    onClick: function(A) {
      A.preventDefault(), A.stopPropagation(), j();
    }
  }), H.closeIcon), k && /* @__PURE__ */ d.createElement("progress", {
    className: "".concat(V, "-progress"),
    max: "100",
    value: U
  }, U + "%"));
}), ih = /* @__PURE__ */ Y.createContext({}), Zw = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ Y.createElement(ih.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, vm = 8, gm = 3, hm = 16, Jw = function(t) {
  var n = {
    offset: vm,
    threshold: gm,
    gap: hm
  };
  if (t && Re(t) === "object") {
    var r, o, a;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : vm, n.threshold = (o = t.threshold) !== null && o !== void 0 ? o : gm, n.gap = (a = t.gap) !== null && a !== void 0 ? a : hm;
  }
  return [!!t, n];
}, ex = ["className", "style", "classNames", "styles"], sh = function(t) {
  var n = t.configList, r = t.placement, o = t.prefixCls, a = t.className, i = t.style, s = t.motion, c = t.onAllNoticeRemoved, l = t.onNoticeClose, u = t.stack, m = tn(ih), f = m.classNames, v = we({}), g = ct(null), y = X(g, 2), p = y[0], C = y[1], S = ct([]), E = X(S, 2), h = E[0], b = E[1], w = n.map(function(M) {
    return {
      config: M,
      key: String(M.key)
    };
  }), x = Jw(u), N = X(x, 2), $ = N[0], O = N[1], _ = O.offset, R = O.threshold, P = O.gap, I = $ && (h.length > 0 || w.length <= R), D = typeof s == "function" ? s(r) : s;
  return Ge(function() {
    $ && h.length > 1 && b(function(M) {
      return M.filter(function(k) {
        return w.some(function(j) {
          var T = j.key;
          return k === T;
        });
      });
    });
  }, [h, w, $]), Ge(function() {
    var M;
    if ($ && v.current[(M = w[w.length - 1]) === null || M === void 0 ? void 0 : M.key]) {
      var k;
      C(v.current[(k = w[w.length - 1]) === null || k === void 0 ? void 0 : k.key]);
    }
  }, [w, $]), /* @__PURE__ */ Y.createElement(Ug, ye({
    key: r,
    className: Q(o, "".concat(o, "-").concat(r), f == null ? void 0 : f.list, a, F(F({}, "".concat(o, "-stack"), !!$), "".concat(o, "-stack-expanded"), I)),
    style: i,
    keys: w,
    motionAppear: !0
  }, D, {
    onAllRemoved: function() {
      c(r);
    }
  }), function(M, k) {
    var j = M.config, T = M.className, H = M.style, q = M.index, U = j, V = U.key, L = U.times, A = String(V), W = j, Z = W.className, G = W.style, re = W.classNames, J = W.styles, te = Qe(W, ex), ne = w.findIndex(function(ce) {
      return ce.key === A;
    }), ue = {};
    if ($) {
      var K = w.length - 1 - (ne > -1 ? ne : q - 1), de = r === "top" || r === "bottom" ? "-50%" : "0";
      if (K > 0) {
        var ae, pe, Ce;
        ue.height = I ? (ae = v.current[A]) === null || ae === void 0 ? void 0 : ae.offsetHeight : p == null ? void 0 : p.offsetHeight;
        for (var fe = 0, be = 0; be < K; be++) {
          var me;
          fe += ((me = v.current[w[w.length - 1 - be].key]) === null || me === void 0 ? void 0 : me.offsetHeight) + P;
        }
        var Pe = (I ? fe : K * _) * (r.startsWith("top") ? 1 : -1), $e = !I && p !== null && p !== void 0 && p.offsetWidth && (pe = v.current[A]) !== null && pe !== void 0 && pe.offsetWidth ? ((p == null ? void 0 : p.offsetWidth) - _ * 2 * (K < 3 ? K : 3)) / ((Ce = v.current[A]) === null || Ce === void 0 ? void 0 : Ce.offsetWidth) : 1;
        ue.transform = "translate3d(".concat(de, ", ").concat(Pe, "px, 0) scaleX(").concat($e, ")");
      } else
        ue.transform = "translate3d(".concat(de, ", 0, 0)");
    }
    return /* @__PURE__ */ Y.createElement("div", {
      ref: k,
      className: Q("".concat(o, "-notice-wrapper"), T, re == null ? void 0 : re.wrapper),
      style: B(B(B({}, H), ue), J == null ? void 0 : J.wrapper),
      onMouseEnter: function() {
        return b(function(xe) {
          return xe.includes(A) ? xe : [].concat(he(xe), [A]);
        });
      },
      onMouseLeave: function() {
        return b(function(xe) {
          return xe.filter(function(Ne) {
            return Ne !== A;
          });
        });
      }
    }, /* @__PURE__ */ Y.createElement(ah, ye({}, te, {
      ref: function(xe) {
        ne > -1 ? v.current[A] = xe : delete v.current[A];
      },
      prefixCls: o,
      classNames: re,
      styles: J,
      className: Q(Z, f == null ? void 0 : f.notice),
      style: G,
      times: L,
      key: V,
      eventKey: V,
      onNoticeClose: l,
      hovering: $ && h.length > 0
    })));
  });
};
process.env.NODE_ENV !== "production" && (sh.displayName = "NoticeList");
var ch = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, o = e.container, a = e.motion, i = e.maxCount, s = e.className, c = e.style, l = e.onAllRemoved, u = e.stack, m = e.renderNotifications, f = d.useState([]), v = X(f, 2), g = v[0], y = v[1], p = function($) {
    var O, _ = g.find(function(R) {
      return R.key === $;
    });
    _ == null || (O = _.onClose) === null || O === void 0 || O.call(_), y(function(R) {
      return R.filter(function(P) {
        return P.key !== $;
      });
    });
  };
  d.useImperativeHandle(t, function() {
    return {
      open: function($) {
        y(function(O) {
          var _ = he(O), R = _.findIndex(function(D) {
            return D.key === $.key;
          }), P = B({}, $);
          if (R >= 0) {
            var I;
            P.times = (((I = O[R]) === null || I === void 0 ? void 0 : I.times) || 0) + 1, _[R] = P;
          } else
            P.times = 0, _.push(P);
          return i > 0 && _.length > i && (_ = _.slice(-i)), _;
        });
      },
      close: function($) {
        p($);
      },
      destroy: function() {
        y([]);
      }
    };
  });
  var C = d.useState({}), S = X(C, 2), E = S[0], h = S[1];
  d.useEffect(function() {
    var N = {};
    g.forEach(function($) {
      var O = $.placement, _ = O === void 0 ? "topRight" : O;
      _ && (N[_] = N[_] || [], N[_].push($));
    }), Object.keys(E).forEach(function($) {
      N[$] = N[$] || [];
    }), h(N);
  }, [g]);
  var b = function($) {
    h(function(O) {
      var _ = B({}, O), R = _[$] || [];
      return R.length || delete _[$], _;
    });
  }, w = d.useRef(!1);
  if (d.useEffect(function() {
    Object.keys(E).length > 0 ? w.current = !0 : w.current && (l == null || l(), w.current = !1);
  }, [E]), !o)
    return null;
  var x = Object.keys(E);
  return /* @__PURE__ */ Hp(/* @__PURE__ */ d.createElement(d.Fragment, null, x.map(function(N) {
    var $ = E[N], O = /* @__PURE__ */ d.createElement(sh, {
      key: N,
      configList: $,
      placement: N,
      prefixCls: r,
      className: s == null ? void 0 : s(N),
      style: c == null ? void 0 : c(N),
      motion: a,
      onNoticeClose: p,
      onAllNoticeRemoved: b,
      stack: u
    });
    return m ? m(O, {
      prefixCls: r,
      key: N
    }) : O;
  })), o);
});
process.env.NODE_ENV !== "production" && (ch.displayName = "Notifications");
var tx = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], nx = function() {
  return document.body;
}, bm = 0;
function rx() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(o) {
    o && Object.keys(o).forEach(function(a) {
      var i = o[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function ox() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? nx : t, r = e.motion, o = e.prefixCls, a = e.maxCount, i = e.className, s = e.style, c = e.onAllRemoved, l = e.stack, u = e.renderNotifications, m = Qe(e, tx), f = d.useState(), v = X(f, 2), g = v[0], y = v[1], p = d.useRef(), C = /* @__PURE__ */ d.createElement(ch, {
    container: g,
    ref: p,
    prefixCls: o,
    motion: r,
    maxCount: a,
    className: i,
    style: s,
    onAllRemoved: c,
    stack: l,
    renderNotifications: u
  }), S = d.useState([]), E = X(S, 2), h = E[0], b = E[1], w = Ut(function(N) {
    var $ = rx(m, N);
    ($.key === null || $.key === void 0) && ($.key = "rc-notification-".concat(bm), bm += 1), b(function(O) {
      return [].concat(he(O), [{
        type: "open",
        config: $
      }]);
    });
  }), x = d.useMemo(function() {
    return {
      open: w,
      close: function($) {
        b(function(O) {
          return [].concat(he(O), [{
            type: "close",
            key: $
          }]);
        });
      },
      destroy: function() {
        b(function($) {
          return [].concat(he($), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return d.useEffect(function() {
    y(n());
  }), d.useEffect(function() {
    if (p.current && h.length) {
      h.forEach(function(O) {
        switch (O.type) {
          case "open":
            p.current.open(O.config);
            break;
          case "close":
            p.current.close(O.key);
            break;
          case "destroy":
            p.current.destroy();
            break;
        }
      });
      var N, $;
      b(function(O) {
        return (N !== O || !$) && (N = O, $ = O.filter(function(_) {
          return !h.includes(_);
        })), $;
      });
    }
  }, [h]), [x, C];
}
var ax = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, ix = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: ax
  }));
}, Wa = /* @__PURE__ */ d.forwardRef(ix);
process.env.NODE_ENV !== "production" && (Wa.displayName = "LoadingOutlined");
const md = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && (md.displayName = "zIndexContext");
const dr = 100, sx = 10, lh = dr * sx, cx = lh + dr, uh = {
  Modal: dr,
  Drawer: dr,
  Popover: dr,
  Popconfirm: dr,
  Tooltip: dr,
  Tour: dr,
  FloatButton: dr
}, lx = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function ux(e) {
  return e in uh;
}
const dx = (e, t) => {
  const [, n] = ar(), r = Y.useContext(md), o = ux(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = r ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    uh[e] : i += lx[e], a = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = At(e), s = n.zIndexPopupBase + cx, c = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
}, fx = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadow: r,
    colorText: o,
    colorSuccess: a,
    colorError: i,
    colorWarning: s,
    colorInfo: c,
    fontSizeLG: l,
    motionEaseInOutCirc: u,
    motionDurationSlow: m,
    marginXS: f,
    paddingXS: v,
    borderRadiusLG: g,
    zIndexPopup: y,
    // Custom token
    contentPadding: p,
    contentBg: C
  } = e, S = `${t}-notice`, E = new wt("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: v,
      transform: "translateY(0)",
      opacity: 1
    }
  }), h = new wt("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: v,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  }), b = {
    padding: v,
    textAlign: "center",
    [`${t}-custom-content`]: {
      display: "flex",
      alignItems: "center"
    },
    [`${t}-custom-content > ${n}`]: {
      marginInlineEnd: f,
      // affected by ltr or rtl
      fontSize: l
    },
    [`${S}-content`]: {
      display: "inline-block",
      padding: p,
      background: C,
      borderRadius: g,
      boxShadow: r,
      pointerEvents: "all"
    },
    [`${t}-success > ${n}`]: {
      color: a
    },
    [`${t}-error > ${n}`]: {
      color: i
    },
    [`${t}-warning > ${n}`]: {
      color: s
    },
    [`${t}-info > ${n},
      ${t}-loading > ${n}`]: {
      color: c
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, Kn(e)), {
        color: o,
        position: "fixed",
        top: f,
        width: "100%",
        pointerEvents: "none",
        zIndex: y,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: E,
          animationDuration: m,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: h,
          animationDuration: m,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [`${S}-wrapper`]: Object.assign({}, b)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, b), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, mx = (e) => ({
  zIndexPopup: e.zIndexPopupBase + lh + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), dh = bn("Message", (e) => {
  const t = kt(e, {
    height: 150
  });
  return [fx(t)];
}, mx);
var px = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const vx = {
  info: /* @__PURE__ */ d.createElement(rh, null),
  success: /* @__PURE__ */ d.createElement(dd, null),
  error: /* @__PURE__ */ d.createElement(Ts, null),
  warning: /* @__PURE__ */ d.createElement(nh, null),
  loading: /* @__PURE__ */ d.createElement(Wa, null)
}, fh = ({
  prefixCls: e,
  type: t,
  icon: n,
  children: r
}) => /* @__PURE__ */ d.createElement("div", {
  className: Q(`${e}-custom-content`, `${e}-${t}`)
}, n || vx[t], /* @__PURE__ */ d.createElement("span", null, r)), gx = (e) => {
  const {
    prefixCls: t,
    className: n,
    type: r,
    icon: o,
    content: a
  } = e, i = px(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = d.useContext(st), c = t || s("message"), l = ro(c), [u, m, f] = dh(c, l);
  return u(/* @__PURE__ */ d.createElement(ah, Object.assign({}, i, {
    prefixCls: c,
    className: Q(n, m, `${c}-notice-pure-panel`, f, l),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ d.createElement(fh, {
      prefixCls: c,
      type: r,
      icon: o
    }, a)
  })));
};
function hx(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function pd(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t == null || t();
  };
  return r.then = (o, a) => n.then(o, a), r.promise = n, r;
}
var bx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const yx = 8, Cx = 3, Sx = ({
  children: e,
  prefixCls: t
}) => {
  const n = ro(t), [r, o, a] = dh(t, n);
  return r(/* @__PURE__ */ d.createElement(Zw, {
    classNames: {
      list: Q(o, a, n)
    }
  }, e));
}, Ex = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ d.createElement(Sx, {
  prefixCls: t,
  key: n
}, e), wx = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    top: n,
    prefixCls: r,
    getContainer: o,
    maxCount: a,
    duration: i = Cx,
    rtl: s,
    transitionName: c,
    onAllRemoved: l
  } = e, {
    getPrefixCls: u,
    getPopupContainer: m,
    message: f,
    direction: v
  } = d.useContext(st), g = r || u("message"), y = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: n ?? yx
  }), p = () => Q({
    [`${g}-rtl`]: s ?? v === "rtl"
  }), C = () => hx(g, c), S = /* @__PURE__ */ d.createElement("span", {
    className: `${g}-close-x`
  }, /* @__PURE__ */ d.createElement(Ds, {
    className: `${g}-close-icon`
  })), [E, h] = ox({
    prefixCls: g,
    style: y,
    className: p,
    motion: C,
    closable: !1,
    closeIcon: S,
    duration: i,
    getContainer: () => (o == null ? void 0 : o()) || (m == null ? void 0 : m()) || document.body,
    maxCount: a,
    onAllRemoved: l,
    renderNotifications: Ex
  });
  return d.useImperativeHandle(t, () => Object.assign(Object.assign({}, E), {
    prefixCls: g,
    message: f
  })), h;
});
let ym = 0;
function mh(e) {
  const t = d.useRef(null), n = At("Message");
  return [d.useMemo(() => {
    const o = (l) => {
      var u;
      (u = t.current) === null || u === void 0 || u.close(l);
    }, a = (l) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const x = () => {
        };
        return x.then = () => {
        }, x;
      }
      const {
        open: u,
        prefixCls: m,
        message: f
      } = t.current, v = `${m}-notice`, {
        content: g,
        icon: y,
        type: p,
        key: C,
        className: S,
        style: E,
        onClose: h
      } = l, b = bx(l, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let w = C;
      return w == null && (ym += 1, w = `antd-message-${ym}`), pd((x) => (u(Object.assign(Object.assign({}, b), {
        key: w,
        content: /* @__PURE__ */ d.createElement(fh, {
          prefixCls: m,
          type: p,
          icon: y
        }, g),
        placement: "top",
        className: Q(p && `${v}-${p}`, S, f == null ? void 0 : f.className),
        style: Object.assign(Object.assign({}, f == null ? void 0 : f.style), E),
        onClose: () => {
          h == null || h(), x();
        }
      })), () => {
        o(w);
      }));
    }, s = {
      open: a,
      destroy: (l) => {
        var u;
        l !== void 0 ? o(l) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((l) => {
      const u = (m, f, v) => {
        let g;
        m && typeof m == "object" && "content" in m ? g = m : g = {
          content: m
        };
        let y, p;
        typeof f == "function" ? p = f : (y = f, p = v);
        const C = Object.assign(Object.assign({
          onClose: p,
          duration: y
        }, g), {
          type: l
        });
        return a(C);
      };
      s[l] = u;
    }), s;
  }, []), /* @__PURE__ */ d.createElement(wx, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function xx(e) {
  return mh(e);
}
function ph(e, t) {
  this.v = e, this.k = t;
}
function sn(e, t, n, r) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  sn = function(i, s, c, l) {
    if (s) o ? o(i, s, {
      value: c,
      enumerable: !l,
      configurable: !l,
      writable: !l
    }) : i[s] = c;
    else {
      var u = function(f, v) {
        sn(i, f, function(g) {
          return this._invoke(f, v, g);
        });
      };
      u("next", 0), u("throw", 1), u("return", 2);
    }
  }, sn(e, t, n, r);
}
function vd() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", o = n.toStringTag || "@@toStringTag";
  function a(v, g, y, p) {
    var C = g && g.prototype instanceof s ? g : s, S = Object.create(C.prototype);
    return sn(S, "_invoke", function(E, h, b) {
      var w, x, N, $ = 0, O = b || [], _ = !1, R = {
        p: 0,
        n: 0,
        v: e,
        a: P,
        f: P.bind(e, 4),
        d: function(D, M) {
          return w = D, x = 0, N = e, R.n = M, i;
        }
      };
      function P(I, D) {
        for (x = I, N = D, t = 0; !_ && $ && !M && t < O.length; t++) {
          var M, k = O[t], j = R.p, T = k[2];
          I > 3 ? (M = T === D) && (N = k[(x = k[4]) ? 5 : (x = 3, 3)], k[4] = k[5] = e) : k[0] <= j && ((M = I < 2 && j < k[1]) ? (x = 0, R.v = D, R.n = k[1]) : j < T && (M = I < 3 || k[0] > D || D > T) && (k[4] = I, k[5] = D, R.n = T, x = 0));
        }
        if (M || I > 1) return i;
        throw _ = !0, D;
      }
      return function(I, D, M) {
        if ($ > 1) throw TypeError("Generator is already running");
        for (_ && D === 1 && P(D, M), x = D, N = M; (t = x < 2 ? e : N) || !_; ) {
          w || (x ? x < 3 ? (x > 1 && (R.n = -1), P(x, N)) : R.n = N : R.v = N);
          try {
            if ($ = 2, w) {
              if (x || (I = "next"), t = w[I]) {
                if (!(t = t.call(w, N))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                N = t.value, x < 2 && (x = 0);
              } else x === 1 && (t = w.return) && t.call(w), x < 2 && (N = TypeError("The iterator does not provide a '" + I + "' method"), x = 1);
              w = e;
            } else if ((t = (_ = R.n < 0) ? N : E.call(h, R)) !== i) break;
          } catch (k) {
            w = e, x = 1, N = k;
          } finally {
            $ = 1;
          }
        }
        return {
          value: t,
          done: _
        };
      };
    }(v, y, p), !0), S;
  }
  var i = {};
  function s() {
  }
  function c() {
  }
  function l() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (sn(t = {}, r, function() {
    return this;
  }), t), m = l.prototype = s.prototype = Object.create(u);
  function f(v) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(v, l) : (v.__proto__ = l, sn(v, o, "GeneratorFunction")), v.prototype = Object.create(m), v;
  }
  return c.prototype = l, sn(m, "constructor", l), sn(l, "constructor", c), c.displayName = "GeneratorFunction", sn(l, o, "GeneratorFunction"), sn(m), sn(m, o, "Generator"), sn(m, r, function() {
    return this;
  }), sn(m, "toString", function() {
    return "[object Generator]";
  }), (vd = function() {
    return {
      w: a,
      m: f
    };
  })();
}
function us(e, t) {
  function n(o, a, i, s) {
    try {
      var c = e[o](a), l = c.value;
      return l instanceof ph ? t.resolve(l.v).then(function(u) {
        n("next", u, i, s);
      }, function(u) {
        n("throw", u, i, s);
      }) : t.resolve(l).then(function(u) {
        c.value = u, i(c);
      }, function(u) {
        return n("throw", u, i, s);
      });
    } catch (u) {
      s(u);
    }
  }
  var r;
  this.next || (sn(us.prototype), sn(us.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), sn(this, "_invoke", function(o, a, i) {
    function s() {
      return new t(function(c, l) {
        n(o, i, c, l);
      });
    }
    return r = r ? r.then(s, s) : s();
  }, !0);
}
function vh(e, t, n, r, o) {
  return new us(vd().w(e, t, n, r), o || Promise);
}
function $x(e, t, n, r, o) {
  var a = vh(e, t, n, r, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function Ox(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function o() {
    for (; n.length; ) if ((r = n.pop()) in t) return o.value = r, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Cm(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(Re(e) + " is not iterable");
}
function mt() {
  var e = vd(), t = e.m(mt), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function r(i) {
    var s = typeof i == "function" && i.constructor;
    return !!s && (s === n || (s.displayName || s.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(i) {
    var s, c;
    return function(l) {
      s || (s = {
        stop: function() {
          return c(l.a, 2);
        },
        catch: function() {
          return l.v;
        },
        abrupt: function(m, f) {
          return c(l.a, o[m], f);
        },
        delegateYield: function(m, f, v) {
          return s.resultName = f, c(l.d, Cm(m), v);
        },
        finish: function(m) {
          return c(l.f, m);
        }
      }, c = function(m, f, v) {
        l.p = s.prev, l.n = s.next;
        try {
          return m(f, v);
        } finally {
          s.next = l.n;
        }
      }), s.resultName && (s[s.resultName] = l.v, s.resultName = void 0), s.sent = l.v, s.next = l.n;
      try {
        return i.call(this, s);
      } finally {
        l.p = s.prev, l.n = s.next;
      }
    };
  }
  return (mt = function() {
    return {
      wrap: function(c, l, u, m) {
        return e.w(a(c), l, u, m && m.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(c, l) {
        return new ph(c, l);
      },
      AsyncIterator: us,
      async: function(c, l, u, m, f) {
        return (r(l) ? vh : $x)(a(c), l, u, m, f);
      },
      keys: Ox,
      values: Cm
    };
  })();
}
function Sm(e, t, n, r, o, a, i) {
  try {
    var s = e[a](i), c = s.value;
  } catch (l) {
    return void n(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(r, o);
}
function fn(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var a = e.apply(t, n);
      function i(c) {
        Sm(a, r, o, i, s, "next", c);
      }
      function s(c) {
        Sm(a, r, o, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var ri = B({}, Bp), Nx = ri.version, Rc = ri.render, _x = ri.unmountComponentAtNode, As;
try {
  var Px = Number((Nx || "").split(".")[0]);
  Px >= 18 && (As = ri.createRoot);
} catch {
}
function Em(e) {
  var t = ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Re(t) === "object" && (t.usingClientEntryPoint = e);
}
var ds = "__rc_react_root__";
function Rx(e, t) {
  Em(!0);
  var n = t[ds] || As(t);
  Em(!1), n.render(e), t[ds] = n;
}
function Ix(e, t) {
  Rc == null || Rc(e, t);
}
function Mx(e, t) {
  if (As) {
    Rx(e, t);
    return;
  }
  Ix(e, t);
}
function Tx(e) {
  return Xl.apply(this, arguments);
}
function Xl() {
  return Xl = fn(/* @__PURE__ */ mt().mark(function e(t) {
    return mt().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[ds]) === null || o === void 0 || o.unmount(), delete t[ds];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Xl.apply(this, arguments);
}
function Dx(e) {
  _x(e);
}
function Ax(e) {
  return Ql.apply(this, arguments);
}
function Ql() {
  return Ql = fn(/* @__PURE__ */ mt().mark(function e(t) {
    return mt().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (As === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Tx(t));
        case 2:
          Dx(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ql.apply(this, arguments);
}
const kx = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = parseInt(d.version.split(".")[0], 10), r = Object.keys(Bp);
    process.env.NODE_ENV !== "production" && qo(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Mx(e, t), () => Ax(t);
};
let jx = kx;
function gh(e) {
  return jx;
}
const Ic = () => ({
  height: 0,
  opacity: 0
}), wm = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, Fx = (e) => ({
  height: e ? e.offsetHeight : 0
}), Mc = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", Lx = (e = Ba) => ({
  motionName: `${e}-motion-collapse`,
  onAppearStart: Ic,
  onEnterStart: Ic,
  onAppearActive: wm,
  onEnterActive: wm,
  onLeaveStart: Fx,
  onLeaveActive: Ic,
  onAppearEnd: Mc,
  onEnterEnd: Mc,
  onLeaveEnd: Mc,
  motionDeadline: 500
}), gd = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function Dn(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const hd = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
}, zx = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Vx = HE("Wave", (e) => [zx(e)]), hh = `${Ba}-wave-target`;
function Tc(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Bx(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return Tc(t) ? t : Tc(n) ? n : Tc(r) ? r : null;
}
function Dc(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Hx = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, a = d.useRef(null), i = d.useRef(null);
  d.useEffect(() => {
    i.current = o();
  }, []);
  const [s, c] = d.useState(null), [l, u] = d.useState([]), [m, f] = d.useState(0), [v, g] = d.useState(0), [y, p] = d.useState(0), [C, S] = d.useState(0), [E, h] = d.useState(!1), b = {
    left: m,
    top: v,
    width: y,
    height: C,
    borderRadius: l.map((N) => `${N}px`).join(" ")
  };
  s && (b["--wave-color"] = s);
  function w() {
    const N = getComputedStyle(n);
    c(Bx(n));
    const $ = N.position === "static", {
      borderLeftWidth: O,
      borderTopWidth: _
    } = N;
    f($ ? n.offsetLeft : Dc(-parseFloat(O))), g($ ? n.offsetTop : Dc(-parseFloat(_))), p(n.offsetWidth), S(n.offsetHeight);
    const {
      borderTopLeftRadius: R,
      borderTopRightRadius: P,
      borderBottomLeftRadius: I,
      borderBottomRightRadius: D
    } = N;
    u([R, P, D, I].map((M) => Dc(parseFloat(M))));
  }
  if (d.useEffect(() => {
    if (n) {
      const N = Kt(() => {
        w(), h(!0);
      });
      let $;
      return typeof ResizeObserver < "u" && ($ = new ResizeObserver(w), $.observe(n)), () => {
        Kt.cancel(N), $ == null || $.disconnect();
      };
    }
  }, []), !E)
    return null;
  const x = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(hh));
  return /* @__PURE__ */ d.createElement(Sr, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (N, $) => {
      var O, _;
      if ($.deadline || $.propertyName === "opacity") {
        const R = (O = a.current) === null || O === void 0 ? void 0 : O.parentElement;
        (_ = i.current) === null || _ === void 0 || _.call(i).then(() => {
          R == null || R.remove();
        });
      }
      return !1;
    }
  }, ({
    className: N
  }, $) => /* @__PURE__ */ d.createElement("div", {
    ref: or(a, $),
    className: Q(t, N, {
      "wave-quick": x
    }),
    style: b
  }));
}, Wx = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const a = gh();
  let i = null;
  function s() {
    return i;
  }
  i = a(/* @__PURE__ */ d.createElement(Hx, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, Ux = (e, t, n) => {
  const {
    wave: r
  } = d.useContext(st), [, o, a] = ar(), i = Ut((l) => {
    const u = e.current;
    if (r != null && r.disabled || !u)
      return;
    const m = u.querySelector(`.${hh}`) || u, {
      showEffect: f
    } = r || {};
    (f || Wx)(m, {
      className: t,
      token: o,
      component: n,
      event: l,
      hashId: a
    });
  }), s = d.useRef(null);
  return (l) => {
    Kt.cancel(s.current), s.current = Kt(() => {
      i(l);
    });
  };
}, bh = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = tn(st), a = we(null), i = o("wave"), [, s] = Vx(i), c = Ux(a, Q(i, s), r);
  if (Y.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== 1 || n)
      return;
    const m = (f) => {
      !hd(f.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(f);
    };
    return u.addEventListener("click", m, !0), () => {
      u.removeEventListener("click", m, !0);
    };
  }, [n]), !/* @__PURE__ */ Y.isValidElement(t))
    return t ?? null;
  const l = to(t) ? or(Wo(t), a) : a;
  return gr(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (bh.displayName = "Wave");
const jr = (e) => {
  const t = Y.useContext(Vo);
  return Y.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, yh = /* @__PURE__ */ d.createContext(null), ks = (e, t) => {
  const n = d.useContext(yh), r = d.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = n, s = o === "vertical" ? "-vertical-" : "-";
    return Q(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: a,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
}, qx = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ d.createElement(yh.Provider, {
    value: null
  }, t);
};
var Kx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ch = /* @__PURE__ */ d.createContext(void 0), Gx = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = d.useContext(st), {
    prefixCls: r,
    size: o,
    className: a
  } = e, i = Kx(e, ["prefixCls", "size", "className"]), s = t("btn-group", r), [, , c] = ar(), l = d.useMemo(() => {
    switch (o) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [o]);
  if (process.env.NODE_ENV !== "production") {
    const m = At("Button.Group");
    m.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && m(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = Q(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: n === "rtl"
  }, a, c);
  return /* @__PURE__ */ d.createElement(Ch.Provider, {
    value: o
  }, /* @__PURE__ */ d.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, xm = /^[\u4E00-\u9FA5]{2}$/, Yl = xm.test.bind(xm);
function $m(e) {
  return typeof e == "string";
}
function Ri(e) {
  return e === "text" || e === "link";
}
function Xx(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && $m(e.type) && Yl(e.props.children) ? gr(e, {
    children: e.props.children.split("").join(n)
  }) : $m(e) ? Yl(e) ? /* @__PURE__ */ Y.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ Y.createElement("span", null, e) : oh(e) ? /* @__PURE__ */ Y.createElement("span", null, e) : e;
}
function Qx(e, t) {
  let n = !1;
  const r = [];
  return Y.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (n && i) {
      const s = r.length - 1, c = r[s];
      r[s] = `${c}${o}`;
    } else
      r.push(o);
    n = i;
  }), Y.Children.map(r, (o) => Xx(o, t));
}
["default", "primary", "danger"].concat(he(Ar));
const Zl = /* @__PURE__ */ Cr((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: a
  } = e, i = Q(`${a}-icon`, n);
  return /* @__PURE__ */ Y.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, o);
}), Om = /* @__PURE__ */ Cr((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: a
  } = e, i = Q(`${n}-loading-icon`, r);
  return /* @__PURE__ */ Y.createElement(Zl, {
    prefixCls: n,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ Y.createElement(Wa, {
    className: a
  }));
}), Ac = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), kc = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Yx = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: a,
    mount: i
  } = e, s = !!n;
  return r ? /* @__PURE__ */ Y.createElement(Om, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ Y.createElement(Sr, {
    visible: s,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: Ac,
    onAppearActive: kc,
    onEnterStart: Ac,
    onEnterActive: kc,
    onLeaveStart: kc,
    onLeaveActive: Ac
  }, ({
    className: c,
    style: l
  }, u) => {
    const m = Object.assign(Object.assign({}, a), l);
    return /* @__PURE__ */ Y.createElement(Om, {
      prefixCls: t,
      className: Q(o, c),
      style: m,
      ref: u
    });
  });
}, Nm = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), Zx = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: a
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(r).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Nm(`${t}-primary`, o),
      Nm(`${t}-danger`, a)
    ]
  };
};
var Jx = ["b"], e$ = ["v"], jc = function(t) {
  return Math.round(Number(t || 0));
}, t$ = function(t) {
  if (t instanceof Mt)
    return t;
  if (t && Re(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = Qe(n, Jx);
    return B(B({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, hr = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n(r) {
    return Vt(this, n), t.call(this, t$(r));
  }
  return Bt(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = jc(o.s * 100), i = jc(o.b * 100), s = jc(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = Qe(o, e$);
      return B(B({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), n;
}(Mt), n$ = "rc-color-picker", Ro = function(t) {
  return t instanceof hr ? t : new hr(t);
}, r$ = Ro("#1677ff"), Sh = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = r.current.getBoundingClientRect(), m = u.width, f = u.height, v = m / 2, g = f / 2, y = (n.x + v) / c, p = 1 - (n.y + g) / l, C = a.toHsb(), S = y, E = (n.x + v) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return Ro(B(B({}, C), {}, {
          h: E <= 0 ? 0 : E
        }));
      case "alpha":
        return Ro(B(B({}, C), {}, {
          a: S <= 0 ? 0 : S
        }));
    }
  return Ro({
    h: C.h,
    s: y <= 0 ? 0 : y,
    b: p >= 1 ? 1 : p,
    a: C.a
  });
}, Eh = function(t, n) {
  var r = t.toHsb();
  switch (n) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, o$ = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(r, "-color-block");
  return /* @__PURE__ */ Y.createElement("div", {
    className: Q(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: n
    }
  }));
};
function a$(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function wh(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, c = e.disabledDrag, l = ct({
    x: 0,
    y: 0
  }), u = X(l, 2), m = u[0], f = u[1], v = we(null), g = we(null);
  Ge(function() {
    f(i());
  }, [s]), Ge(function() {
    return function() {
      document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null;
    };
  }, []);
  var y = function(h) {
    var b = a$(h), w = b.pageX, x = b.pageY, N = n.current.getBoundingClientRect(), $ = N.x, O = N.y, _ = N.width, R = N.height, P = t.current.getBoundingClientRect(), I = P.width, D = P.height, M = I / 2, k = D / 2, j = Math.max(0, Math.min(w - $, _)) - M, T = Math.max(0, Math.min(x - O, R)) - k, H = {
      x: j,
      y: r === "x" ? m.y : T
    };
    if (I === 0 && D === 0 || I !== D)
      return !1;
    o == null || o(H);
  }, p = function(h) {
    h.preventDefault(), y(h);
  }, C = function(h) {
    h.preventDefault(), document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null, a == null || a();
  }, S = function(h) {
    document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), !c && (y(h), document.addEventListener("mousemove", p), document.addEventListener("mouseup", C), document.addEventListener("touchmove", p), document.addEventListener("touchend", C), v.current = p, g.current = C);
  };
  return [m, S];
}
var xh = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ Y.createElement("div", {
    className: Q("".concat(a, "-handler"), F({}, "".concat(a, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, $h = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(o, "-palette"),
    style: B({
      position: "relative"
    }, r)
  }, n);
}, Oh = /* @__PURE__ */ Cr(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ Y.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), i$ = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = we(), c = we(), l = we(n), u = Ut(function(y) {
    var p = Sh({
      offset: y,
      targetRef: c,
      containerRef: s,
      color: n
    });
    l.current = p, r(p);
  }), m = wh({
    color: n,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return Eh(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a == null ? void 0 : a(l.current);
    },
    disabledDrag: i
  }), f = X(m, 2), v = f[0], g = f[1];
  return /* @__PURE__ */ Y.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ Y.createElement($h, {
    prefixCls: o
  }, /* @__PURE__ */ Y.createElement(Oh, {
    x: v.x,
    y: v.y,
    ref: c
  }, /* @__PURE__ */ Y.createElement(xh, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, s$ = function(t, n) {
  var r = $n(t, {
    value: n
  }), o = X(r, 2), a = o[0], i = o[1], s = Nt(function() {
    return Ro(a);
  }, [a]);
  return [s, i];
}, c$ = function(t) {
  var n = t.colors, r = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, c = Nt(function() {
    return n.map(function(l, u) {
      var m = Ro(l);
      return i === "alpha" && u === n.length - 1 && (m = new hr(m.setA(1))), m.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(c, ")")
    }
  }, r);
}, l$ = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, c = t.type, l = we(), u = we(), m = we(s), f = function(b) {
    return c === "hue" ? b.getHue() : b.a * 100;
  }, v = Ut(function(h) {
    var b = Sh({
      offset: h,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    m.current = b, a(f(b));
  }), g = wh({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return Eh(s, c);
    },
    onDragChange: v,
    onDragChangeComplete: function() {
      i(f(m.current));
    },
    direction: "x",
    disabledDrag: o
  }), y = X(g, 2), p = y[0], C = y[1], S = Y.useMemo(function() {
    if (c === "hue") {
      var h = s.toHsb();
      h.s = 1, h.b = 1, h.a = 1;
      var b = new hr(h);
      return b;
    }
    return s;
  }, [s, c]), E = Y.useMemo(function() {
    return r.map(function(h) {
      return "".concat(h.color, " ").concat(h.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ Y.createElement("div", {
    ref: l,
    className: Q("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: C,
    onTouchStart: C
  }, /* @__PURE__ */ Y.createElement($h, {
    prefixCls: n
  }, /* @__PURE__ */ Y.createElement(Oh, {
    x: p.x,
    y: p.y,
    ref: u
  }, /* @__PURE__ */ Y.createElement(xh, {
    size: "small",
    color: S.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ Y.createElement(c$, {
    colors: E,
    type: c,
    prefixCls: n
  })));
};
function u$(e) {
  return d.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || l$];
  }, [e]);
}
var d$ = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], f$ = /* @__PURE__ */ Cr(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, a = o === void 0 ? n$ : o, i = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, m = e.disabledAlpha, f = m === void 0 ? !1 : m, v = e.disabled, g = v === void 0 ? !1 : v, y = e.components, p = u$(y), C = X(p, 1), S = C[0], E = s$(r || r$, n), h = X(E, 2), b = h[0], w = h[1], x = Nt(function() {
    return b.setA(1).toRgbString();
  }, [b]), N = function(T, H) {
    n || w(T), i == null || i(T, H);
  }, $ = function(T) {
    return new hr(b.setHue(T));
  }, O = function(T) {
    return new hr(b.setA(T / 100));
  }, _ = function(T) {
    N($(T), {
      type: "hue",
      value: T
    });
  }, R = function(T) {
    N(O(T), {
      type: "alpha",
      value: T
    });
  }, P = function(T) {
    s && s($(T));
  }, I = function(T) {
    s && s(O(T));
  }, D = Q("".concat(a, "-panel"), c, F({}, "".concat(a, "-panel-disabled"), g)), M = {
    prefixCls: a,
    disabled: g,
    color: b
  }, k = /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(i$, ye({
    onChange: N
  }, M, {
    onChangeComplete: s
  })), /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ Y.createElement("div", {
    className: Q("".concat(a, "-slider-group"), F({}, "".concat(a, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ Y.createElement(S, ye({}, M, {
    type: "hue",
    colors: d$,
    min: 0,
    max: 359,
    value: b.getHue(),
    onChange: _,
    onChangeComplete: P
  })), !f && /* @__PURE__ */ Y.createElement(S, ye({}, M, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: x
    }],
    min: 0,
    max: 100,
    value: b.a * 100,
    onChange: R,
    onChangeComplete: I
  }))), /* @__PURE__ */ Y.createElement(o$, {
    color: b.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ Y.createElement("div", {
    className: D,
    style: l,
    ref: t
  }, typeof u == "function" ? u(k) : k);
});
process.env.NODE_ENV !== "production" && (f$.displayName = "ColorPicker");
const m$ = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", p$ = (e, t) => e ? m$(e, t) : "";
let v$ = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e);
    var n;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map(({
      color: o,
      percent: a
    }) => ({
      color: new e(o),
      percent: a
    })), this.metaColor = new hr(this.colors[0].color.metaColor)) : this.metaColor = new hr(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Bt(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return p$(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: n
      } = this;
      return n ? `linear-gradient(90deg, ${n.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(n) {
      return !n || this.isGradient() !== n.isGradient() ? !1 : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, o) => {
        const a = n.colors[o];
        return r.percent === a.percent && r.color.equals(a.color);
      }) : this.toHexString() === n.toHexString();
    }
  }]);
}();
const g$ = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), h$ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), b$ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), bd = (e, t, n, r, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, h$(r)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, b$(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${a}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, y$ = new wt("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), C$ = new wt("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), S$ = (e, t = !1) => {
  const {
    antCls: n
  } = e, r = `${n}-fade`, o = t ? "&" : "";
  return [bd(r, y$, C$, e.motionDurationMid, t), {
    [`
        ${o}${r}-enter,
        ${o}${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${o}${r}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, E$ = new wt("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), w$ = new wt("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), x$ = new wt("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), $$ = new wt("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), O$ = new wt("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), N$ = new wt("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), _$ = new wt("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), P$ = new wt("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), R$ = {
  "slide-up": {
    inKeyframes: E$,
    outKeyframes: w$
  },
  "slide-down": {
    inKeyframes: x$,
    outKeyframes: $$
  },
  "slide-left": {
    inKeyframes: O$,
    outKeyframes: N$
  },
  "slide-right": {
    inKeyframes: _$,
    outKeyframes: P$
  }
}, _m = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = R$[t];
  return [bd(r, o, a, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, I$ = new wt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), M$ = new wt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Pm = new wt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Rm = new wt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), T$ = new wt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), D$ = new wt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), A$ = new wt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), k$ = new wt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), j$ = new wt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), F$ = new wt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), L$ = new wt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), z$ = new wt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), V$ = {
  zoom: {
    inKeyframes: I$,
    outKeyframes: M$
  },
  "zoom-big": {
    inKeyframes: Pm,
    outKeyframes: Rm
  },
  "zoom-big-fast": {
    inKeyframes: Pm,
    outKeyframes: Rm
  },
  "zoom-left": {
    inKeyframes: A$,
    outKeyframes: k$
  },
  "zoom-right": {
    inKeyframes: j$,
    outKeyframes: F$
  },
  "zoom-up": {
    inKeyframes: T$,
    outKeyframes: D$
  },
  "zoom-down": {
    inKeyframes: L$,
    outKeyframes: z$
  }
}, Nh = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = V$[t];
  return [bd(r, o, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, B$ = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = e.toRgb(), i = new hr(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, _h = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return kt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, Ph = (e) => {
  var t, n, r, o, a, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Ui(s), m = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : Ui(c), f = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Ui(l), v = B$(new v$(e.colorBgSolid), "#fff") ? "#000" : "#fff", g = Ar.reduce((y, p) => Object.assign(Object.assign({}, y), {
    [`${p}ShadowColor`]: `0 ${oe(e.controlOutlineWidth)} 0 ${ma(e[`${p}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, g), {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: e.colorText,
    textTextHoverColor: e.colorText,
    textTextActiveColor: e.colorText,
    textHoverBg: e.colorFillTertiary,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    solidTextColor: v,
    contentFontSize: s,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: m,
    contentLineHeightLG: f,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * m) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * f) / 2 - e.lineWidth, 0)
  });
}, H$ = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: a,
    motionEaseInOut: i,
    marginXS: s,
    calc: c
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${oe(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: Tg(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": ss(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${n})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${t}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${t}-compact-item`]: {
          flex: "none"
        },
        [`&${t}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${t}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${t}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${a} ${i}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: c(s).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: c(s).mul(-1).equal()
          }
        }
      }
    }
  };
}, Rh = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), W$ = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), U$ = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), q$ = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), js = (e, t, n, r, o, a, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, Rh(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), K$ = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, q$(e))
}), G$ = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Fs = (e, t, n, r) => {
  const a = r && ["link", "text"].includes(r) ? G$ : K$;
  return Object.assign(Object.assign({}, a(e)), Rh(e.componentCls, t, n));
}, Ls = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: n
  }, Fs(e, r, o))
}), zs = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: n
  }, Fs(e, r, o))
}), Vs = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Bs = (e, t, n, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, Fs(e, n, r))
}), rr = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, Fs(e, r, o, n))
}), X$ = (e) => {
  const {
    componentCls: t
  } = e;
  return Ar.reduce((n, r) => {
    const o = e[`${r}6`], a = e[`${r}1`], i = e[`${r}5`], s = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), {
      [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, Ls(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: l
      })), zs(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Vs(e)), Bs(e, a, {
        background: s
      }, {
        background: c
      })), rr(e, o, "link", {
        color: i
      }, {
        color: l
      })), rr(e, o, "text", {
        color: i,
        background: a
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, Q$ = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, Ls(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Vs(e)), Bs(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), js(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), rr(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Y$ = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, zs(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Vs(e)), Bs(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), rr(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), rr(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), js(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Z$ = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, Ls(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), zs(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Vs(e)), Bs(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), rr(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), rr(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), js(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), J$ = (e) => Object.assign(Object.assign({}, rr(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), js(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), eO = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: Q$(e),
    [`${t}-color-primary`]: Y$(e),
    [`${t}-color-dangerous`]: Z$(e),
    [`${t}-color-link`]: J$(e)
  }, X$(e));
}, tO = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, zs(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), rr(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), Ls(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), rr(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), yd = (e, t = "") => {
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: o,
    borderRadius: a,
    buttonPaddingHorizontal: i,
    iconCls: s,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: r,
        padding: `${oe(c)} ${oe(i)}`,
        borderRadius: a,
        [`&${n}-icon-only`]: {
          width: r,
          [s]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: W$(e)
    },
    {
      [`${n}${n}-round${t}`]: U$(e)
    }
  ];
}, nO = (e) => {
  const t = kt(e, {
    fontSize: e.contentFontSize
  });
  return yd(t, e.componentCls);
}, rO = (e) => {
  const t = kt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return yd(t, `${e.componentCls}-sm`);
}, oO = (e) => {
  const t = kt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return yd(t, `${e.componentCls}-lg`);
}, aO = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, iO = bn("Button", (e) => {
  const t = _h(e);
  return [
    // Shared
    H$(t),
    // Size
    nO(t),
    rO(t),
    oO(t),
    // Block
    aO(t),
    // Color
    eO(t),
    // https://github.com/ant-design/ant-design/issues/50969
    tO(t),
    // Button Group
    Zx(t)
  ];
}, Ph, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function sO(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: a
  } = n, i = a ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function cO(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Ih(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, sO(e, r, t)), cO(n, r, t))
  };
}
function lO(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function uO(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function dO(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, lO(e, t)), uO(e.componentCls, t))
  };
}
const fO = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: n,
    lineWidth: r,
    calc: o
  } = e, a = o(r).mul(-1).equal(), i = (s) => {
    const c = `${t}-compact${s ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: s ? a : 0,
        insetInlineStart: s ? 0 : a,
        backgroundColor: n,
        content: '""',
        width: s ? "100%" : r,
        height: s ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, i()), i(!0));
}, mO = WE(["Button", "compact"], (e) => {
  const t = _h(e);
  return [
    // Space Compact
    Ih(t),
    dO(t),
    fO(t)
  ];
}, Ph);
var pO = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function vO(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const gO = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, hO = /* @__PURE__ */ Y.forwardRef((e, t) => {
  var n, r;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: s,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: m,
    styles: f,
    disabled: v,
    className: g,
    rootClassName: y,
    children: p,
    icon: C,
    iconPosition: S = "start",
    ghost: E = !1,
    block: h = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: b = "button",
    classNames: w,
    style: x = {},
    autoInsertSpace: N,
    autoFocus: $
  } = e, O = pO(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), _ = c || "default", {
    button: R
  } = Y.useContext(st), [P, I] = Nt(() => {
    if (i && s)
      return [i, s];
    if (c || l) {
      const ve = gO[_] || [];
      return l ? ["danger", ve[1]] : ve;
    }
    return R != null && R.color && (R != null && R.variant) ? [R.color, R.variant] : ["default", "outlined"];
  }, [c, i, s, l, R == null ? void 0 : R.variant, R == null ? void 0 : R.color]), M = P === "danger" ? "dangerous" : P, {
    getPrefixCls: k,
    direction: j,
    autoInsertSpace: T,
    className: H,
    style: q,
    classNames: U,
    styles: V
  } = Ko("button"), L = (n = N ?? T) !== null && n !== void 0 ? n : !0, A = k("btn", a), [W, Z, G] = iO(A), re = tn(Dr), J = v ?? re, te = tn(Ch), ne = Nt(() => vO(o), [o]), [ue, K] = ct(ne.loading), [de, ae] = ct(!1), pe = we(null), Ce = Ho(t, pe), fe = w0.count(p) === 1 && !C && !Ri(I), be = we(!0);
  Y.useEffect(() => (be.current = !1, () => {
    be.current = !0;
  }), []), ku(() => {
    let ve = null;
    ne.delay > 0 ? ve = setTimeout(() => {
      ve = null, K(!0);
    }, ne.delay) : K(ne.loading);
    function ge() {
      ve && (clearTimeout(ve), ve = null);
    }
    return ge;
  }, [ne.delay, ne.loading]), Ge(() => {
    if (!pe.current || !L)
      return;
    const ve = pe.current.textContent || "";
    fe && Yl(ve) ? de || ae(!0) : de && ae(!1);
  }), Ge(() => {
    $ && pe.current && pe.current.focus();
  }, []);
  const me = Y.useCallback((ve) => {
    var ge;
    if (ue || J) {
      ve.preventDefault();
      return;
    }
    (ge = e.onClick) === null || ge === void 0 || ge.call(e, ("href" in e, ve));
  }, [e.onClick, ue, J]);
  if (process.env.NODE_ENV !== "production") {
    const ve = At("Button");
    process.env.NODE_ENV !== "production" && ve(!(typeof C == "string" && C.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${C}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ve(!(E && Ri(I)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Pe,
    compactItemClassnames: $e
  } = ks(A, j), ce = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, xe = jr((ve) => {
    var ge, ze;
    return (ze = (ge = m ?? Pe) !== null && ge !== void 0 ? ge : te) !== null && ze !== void 0 ? ze : ve;
  }), Ne = xe && (r = ce[xe]) !== null && r !== void 0 ? r : "", rt = ue ? "loading" : C, Ue = Dn(O, ["navigate"]), Ve = Q(A, Z, G, {
    [`${A}-${u}`]: u !== "default" && u,
    // Compatible with versions earlier than 5.21.0
    [`${A}-${_}`]: _,
    [`${A}-dangerous`]: l,
    [`${A}-color-${M}`]: M,
    [`${A}-variant-${I}`]: I,
    [`${A}-${Ne}`]: Ne,
    [`${A}-icon-only`]: !p && p !== 0 && !!rt,
    [`${A}-background-ghost`]: E && !Ri(I),
    [`${A}-loading`]: ue,
    [`${A}-two-chinese-chars`]: de && L && !ue,
    [`${A}-block`]: h,
    [`${A}-rtl`]: j === "rtl",
    [`${A}-icon-end`]: S === "end"
  }, $e, g, y, H), tt = Object.assign(Object.assign({}, q), x), Le = Q(w == null ? void 0 : w.icon, U.icon), qe = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), V.icon || {}), Me = C && !ue ? /* @__PURE__ */ Y.createElement(Zl, {
    prefixCls: A,
    className: Le,
    style: qe
  }, C) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ Y.createElement(Zl, {
    prefixCls: A,
    className: Le,
    style: qe
  }, o.icon) : /* @__PURE__ */ Y.createElement(Yx, {
    existIcon: !!C,
    prefixCls: A,
    loading: ue,
    mount: be.current
  }), ie = p || p === 0 ? Qx(p, fe && L) : null;
  if (Ue.href !== void 0)
    return W(/* @__PURE__ */ Y.createElement("a", Object.assign({}, Ue, {
      className: Q(Ve, {
        [`${A}-disabled`]: J
      }),
      href: J ? void 0 : Ue.href,
      style: tt,
      onClick: me,
      ref: Ce,
      tabIndex: J ? -1 : 0
    }), Me, ie));
  let Se = /* @__PURE__ */ Y.createElement("button", Object.assign({}, O, {
    type: b,
    className: Ve,
    style: tt,
    onClick: me,
    disabled: J,
    ref: Ce
  }), Me, ie, $e && /* @__PURE__ */ Y.createElement(mO, {
    prefixCls: A
  }));
  return Ri(I) || (Se = /* @__PURE__ */ Y.createElement(bh, {
    component: "Button",
    disabled: ue
  }, Se)), W(Se);
}), gn = hO;
gn.Group = Gx;
gn.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (gn.displayName = "Button");
var Mh = /* @__PURE__ */ d.createContext(null), Im = [];
function bO(e, t) {
  var n = d.useState(function() {
    if (!mn())
      return null;
    var g = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && g.setAttribute("data-debug", t), g;
  }), r = X(n, 1), o = r[0], a = d.useRef(!1), i = d.useContext(Mh), s = d.useState(Im), c = X(s, 2), l = c[0], u = c[1], m = i || (a.current ? void 0 : function(g) {
    u(function(y) {
      var p = [g].concat(he(y));
      return p;
    });
  });
  function f() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function v() {
    var g;
    (g = o.parentElement) === null || g === void 0 || g.removeChild(o), a.current = !1;
  }
  return Qt(function() {
    return e ? i ? i(f) : f() : v(), v;
  }, [e]), Qt(function() {
    l.length && (l.forEach(function(g) {
      return g();
    }), u(Im));
  }, [l]), [o, m];
}
function yO(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var o, a;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), c = parseInt(s.width, 10), l = parseInt(s.height, 10);
    try {
      var u = c ? "width: ".concat(s.width, ";") : "", m = l ? "height: ".concat(s.height, ";") : "";
      mr(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(m, `
}`), t);
    } catch (g) {
      console.error(g), o = c, a = l;
    }
  }
  document.body.appendChild(n);
  var f = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth, v = e && a && !isNaN(a) ? a : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), Fa(t), {
    width: f,
    height: v
  };
}
function CO(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : yO(e);
}
function SO() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var EO = "rc-util-locker-".concat(Date.now()), Mm = 0;
function wO(e) {
  var t = !!e, n = d.useState(function() {
    return Mm += 1, "".concat(EO, "_").concat(Mm);
  }), r = X(n, 1), o = r[0];
  Qt(function() {
    if (t) {
      var a = CO(document.body).width, i = SO();
      mr(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      Fa(o);
    return function() {
      Fa(o);
    };
  }, [t, o]);
}
var xO = !1;
function $O(e) {
  return xO;
}
var Tm = function(t) {
  return t === !1 ? !1 : !mn() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Cd = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, c = e.children, l = d.useState(n), u = X(l, 2), m = u[0], f = u[1], v = m || n;
  process.env.NODE_ENV !== "production" && pt(mn() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), d.useEffect(function() {
    (s || n) && f(n);
  }, [n, s]);
  var g = d.useState(function() {
    return Tm(o);
  }), y = X(g, 2), p = y[0], C = y[1];
  d.useEffect(function() {
    var R = Tm(o);
    C(R ?? null);
  });
  var S = bO(v && !p, a), E = X(S, 2), h = E[0], b = E[1], w = p ?? h;
  wO(r && n && mn() && (w === h || w === document.body));
  var x = null;
  if (c && to(c) && t) {
    var N = c;
    x = N.ref;
  }
  var $ = Ho(x, t);
  if (!v || !mn() || p === void 0)
    return null;
  var O = w === !1 || $O(), _ = c;
  return t && (_ = /* @__PURE__ */ d.cloneElement(c, {
    ref: $
  })), /* @__PURE__ */ d.createElement(Mh.Provider, {
    value: b
  }, O ? _ : /* @__PURE__ */ Hp(_, w));
});
process.env.NODE_ENV !== "production" && (Cd.displayName = "Portal");
function OO() {
  var e = B({}, d);
  return e.useId;
}
var Dm = 0, Am = OO();
const Th = Am ? (
  // Use React `useId`
  function(t) {
    var n = Am();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = d.useState("ssr-id"), r = X(n, 2), o = r[0], a = r[1];
    return d.useEffect(function() {
      var i = Dm;
      Dm += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var Ur = "RC_FORM_INTERNAL_HOOKS", Et = function() {
  pt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Bo = /* @__PURE__ */ d.createContext({
  getFieldValue: Et,
  getFieldsValue: Et,
  getFieldError: Et,
  getFieldWarning: Et,
  getFieldsError: Et,
  isFieldsTouched: Et,
  isFieldTouched: Et,
  isFieldValidating: Et,
  isFieldsValidating: Et,
  resetFields: Et,
  setFields: Et,
  setFieldValue: Et,
  setFieldsValue: Et,
  validateFields: Et,
  submit: Et,
  getInternalHooks: function() {
    return Et(), {
      dispatch: Et,
      initEntityValue: Et,
      registerField: Et,
      useSubscribe: Et,
      setInitialValues: Et,
      destroyForm: Et,
      setCallbacks: Et,
      registerWatch: Et,
      getFields: Et,
      setValidateMessages: Et,
      setPreserve: Et,
      getInitialValue: Et
    };
  }
}), fs = /* @__PURE__ */ d.createContext(null);
function Jl(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function NO(e) {
  return e && !!e._init;
}
function eu() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var tu = eu();
function _O(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function PO(e, t, n) {
  if (Qu()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && Aa(o, n.prototype), o;
}
function nu(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return nu = function(r) {
    if (r === null || !_O(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return PO(r, arguments, ka(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Aa(o, r);
  }, nu(e);
}
var RO = /%[sdj%]/g, Dh = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Dh = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function ru(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function xn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(RO, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function IO(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Yt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || IO(t) && typeof e == "string" && !e);
}
function MO(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(s) {
    r.push.apply(r, he(s || [])), o++, o === a && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function km(e, t, n) {
  var r = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < o ? t(e[s], a) : n([]);
  }
  a([]);
}
function TO(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, he(e[n] || []));
  }), t;
}
var jm = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n(r, o) {
    var a;
    return Vt(this, n), a = t.call(this, "Async Validation Error"), F(Ae(a), "errors", void 0), F(Ae(a), "fields", void 0), a.errors = r, a.fields = o, a;
  }
  return Bt(n);
}(/* @__PURE__ */ nu(Error));
function DO(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(f, v) {
      var g = function(C) {
        return r(C), C.length ? v(new jm(C, ru(C))) : f(o);
      }, y = TO(e);
      km(y, n, g);
    });
    return a.catch(function(f) {
      return f;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], m = new Promise(function(f, v) {
    var g = function(p) {
      if (u.push.apply(u, p), l++, l === c)
        return r(u), u.length ? v(new jm(u, ru(u))) : f(o);
    };
    s.length || (r(u), f(o)), s.forEach(function(y) {
      var p = e[y];
      i.indexOf(y) !== -1 ? km(p, n, g) : MO(p, n, g);
    });
  });
  return m.catch(function(f) {
    return f;
  }), m;
}
function AO(e) {
  return !!(e && e.message !== void 0);
}
function kO(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Fm(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = kO(t, e.fullFields) : r = t[n.field || e.fullField], AO(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Lm(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        Re(r) === "object" && Re(e[n]) === "object" ? e[n] = B(B({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var mo = "enum", jO = function(t, n, r, o, a) {
  t[mo] = Array.isArray(t[mo]) ? t[mo] : [], t[mo].indexOf(n) === -1 && o.push(xn(a.messages[mo], t.fullField, t[mo].join(", ")));
}, FO = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(xn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(xn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, LO = function(t, n, r, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, m = null, f = typeof n == "number", v = typeof n == "string", g = Array.isArray(n);
  if (f ? m = "number" : v ? m = "string" : g && (m = "array"), !m)
    return !1;
  g && (u = n.length), v && (u = n.replace(l, "_").length), i ? u !== t.len && o.push(xn(a.messages[m].len, t.fullField, t.len)) : s && !c && u < t.min ? o.push(xn(a.messages[m].min, t.fullField, t.min)) : c && !s && u > t.max ? o.push(xn(a.messages[m].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && o.push(xn(a.messages[m].range, t.fullField, t.min, t.max));
}, Ah = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || Yt(n, i || t.type)) && o.push(xn(a.messages.required, t.fullField));
}, Ii;
const zO = function() {
  if (Ii)
    return Ii;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), c = new RegExp("^".concat(n, "$")), l = new RegExp("^".concat(i, "$")), u = function(w) {
    return w && w.exact ? s : new RegExp("(?:".concat(t(w)).concat(n).concat(t(w), ")|(?:").concat(t(w)).concat(i).concat(t(w), ")"), "g");
  };
  u.v4 = function(b) {
    return b && b.exact ? c : new RegExp("".concat(t(b)).concat(n).concat(t(b)), "g");
  }, u.v6 = function(b) {
    return b && b.exact ? l : new RegExp("".concat(t(b)).concat(i).concat(t(b)), "g");
  };
  var m = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", v = u.v4().source, g = u.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", C = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", S = "(?::\\d{2,5})?", E = '(?:[/?#][^\\s"]*)?', h = "(?:".concat(m, "|www\\.)").concat(f, "(?:localhost|").concat(v, "|").concat(g, "|").concat(y).concat(p).concat(C, ")").concat(S).concat(E);
  return Ii = new RegExp("(?:^".concat(h, "$)"), "i"), Ii;
};
var zm = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, pa = {
  integer: function(t) {
    return pa.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return pa.number(t) && !pa.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return Re(t) === "object" && !pa.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(zm.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(zO());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(zm.hex);
  }
}, VO = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Ah(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? pa[s](n) || o.push(xn(a.messages.types[s], t.fullField, t.type)) : s && Re(n) !== t.type && o.push(xn(a.messages.types[s], t.fullField, t.type));
}, BO = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(xn(a.messages.whitespace, t.fullField));
};
const it = {
  required: Ah,
  whitespace: BO,
  type: VO,
  range: LO,
  enum: jO,
  pattern: FO
};
var HO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a);
  }
  r(i);
}, WO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    it.required(t, n, o, i, a, "array"), n != null && (it.type(t, n, o, i, a), it.range(t, n, o, i, a));
  }
  r(i);
}, UO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), n !== void 0 && it.type(t, n, o, i, a);
  }
  r(i);
}, qO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n, "date") && !t.required)
      return r();
    if (it.required(t, n, o, i, a), !Yt(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), it.type(t, c, o, i, a), c && it.range(t, c.getTime(), o, i, a);
    }
  }
  r(i);
}, KO = "enum", GO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), n !== void 0 && it[KO](t, n, o, i, a);
  }
  r(i);
}, XO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), n !== void 0 && (it.type(t, n, o, i, a), it.range(t, n, o, i, a));
  }
  r(i);
}, QO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), n !== void 0 && (it.type(t, n, o, i, a), it.range(t, n, o, i, a));
  }
  r(i);
}, YO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), n !== void 0 && it.type(t, n, o, i, a);
  }
  r(i);
}, ZO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), n !== void 0 && (it.type(t, n, o, i, a), it.range(t, n, o, i, a));
  }
  r(i);
}, JO = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), n !== void 0 && it.type(t, n, o, i, a);
  }
  r(i);
}, eN = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n, "string") && !t.required)
      return r();
    it.required(t, n, o, i, a), Yt(n, "string") || it.pattern(t, n, o, i, a);
  }
  r(i);
}, tN = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n) && !t.required)
      return r();
    it.required(t, n, o, i, a), Yt(n) || it.type(t, n, o, i, a);
  }
  r(i);
}, nN = function(t, n, r, o, a) {
  var i = [], s = Array.isArray(n) ? "array" : Re(n);
  it.required(t, n, o, i, a, s), r(i);
}, rN = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n, "string") && !t.required)
      return r();
    it.required(t, n, o, i, a, "string"), Yt(n, "string") || (it.type(t, n, o, i, a), it.range(t, n, o, i, a), it.pattern(t, n, o, i, a), t.whitespace === !0 && it.whitespace(t, n, o, i, a));
  }
  r(i);
}, Fc = function(t, n, r, o, a) {
  var i = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (Yt(n, i) && !t.required)
      return r();
    it.required(t, n, o, s, a, i), Yt(n, i) || it.type(t, n, o, s, a);
  }
  r(s);
};
const $a = {
  string: rN,
  method: YO,
  number: ZO,
  boolean: UO,
  regexp: tN,
  integer: QO,
  float: XO,
  array: WO,
  object: JO,
  enum: GO,
  pattern: eN,
  date: qO,
  url: Fc,
  hex: Fc,
  email: Fc,
  required: nN,
  any: HO
};
var oi = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e), F(this, "rules", null), F(this, "_messages", tu), this.define(t);
  }
  return Bt(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (Re(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(o) {
        var a = n[o];
        r.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = Lm(eu(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, s = o, c = a;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function l(g) {
        var y = [], p = {};
        function C(E) {
          if (Array.isArray(E)) {
            var h;
            y = (h = y).concat.apply(h, he(E));
          } else
            y.push(E);
        }
        for (var S = 0; S < g.length; S++)
          C(g[S]);
        y.length ? (p = ru(y), c(y, p)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === tu && (u = eu()), Lm(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var m = {}, f = s.keys || Object.keys(this.rules);
      f.forEach(function(g) {
        var y = r.rules[g], p = i[g];
        y.forEach(function(C) {
          var S = C;
          typeof S.transform == "function" && (i === n && (i = B({}, i)), p = i[g] = S.transform(p), p != null && (S.type = S.type || (Array.isArray(p) ? "array" : Re(p)))), typeof S == "function" ? S = {
            validator: S
          } : S = B({}, S), S.validator = r.getValidationMethod(S), S.validator && (S.field = g, S.fullField = S.fullField || g, S.type = r.getType(S), m[g] = m[g] || [], m[g].push({
            rule: S,
            value: p,
            source: i,
            field: g
          }));
        });
      });
      var v = {};
      return DO(m, s, function(g, y) {
        var p = g.rule, C = (p.type === "object" || p.type === "array") && (Re(p.fields) === "object" || Re(p.defaultField) === "object");
        C = C && (p.required || !p.required && g.value), p.field = g.field;
        function S(x, N) {
          return B(B({}, N), {}, {
            fullField: "".concat(p.fullField, ".").concat(x),
            fullFields: p.fullFields ? [].concat(he(p.fullFields), [x]) : [x]
          });
        }
        function E() {
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], N = Array.isArray(x) ? x : [x];
          !s.suppressWarning && N.length && e.warning("async-validator:", N), N.length && p.message !== void 0 && (N = [].concat(p.message));
          var $ = N.map(Fm(p, i));
          if (s.first && $.length)
            return v[p.field] = 1, y($);
          if (!C)
            y($);
          else {
            if (p.required && !g.value)
              return p.message !== void 0 ? $ = [].concat(p.message).map(Fm(p, i)) : s.error && ($ = [s.error(p, xn(s.messages.required, p.field))]), y($);
            var O = {};
            p.defaultField && Object.keys(g.value).map(function(P) {
              O[P] = p.defaultField;
            }), O = B(B({}, O), g.rule.fields);
            var _ = {};
            Object.keys(O).forEach(function(P) {
              var I = O[P], D = Array.isArray(I) ? I : [I];
              _[P] = D.map(S.bind(null, P));
            });
            var R = new e(_);
            R.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), R.validate(g.value, g.rule.options || s, function(P) {
              var I = [];
              $ && $.length && I.push.apply(I, he($)), P && P.length && I.push.apply(I, he(P)), y(I.length ? I : null);
            });
          }
        }
        var h;
        if (p.asyncValidator)
          h = p.asyncValidator(p, g.value, E, g.source, s);
        else if (p.validator) {
          try {
            h = p.validator(p, g.value, E, g.source, s);
          } catch (x) {
            var b, w;
            (b = (w = console).error) === null || b === void 0 || b.call(w, x), s.suppressValidatorError || setTimeout(function() {
              throw x;
            }, 0), E(x.message);
          }
          h === !0 ? E() : h === !1 ? E(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || "".concat(p.fullField || p.field, " fails")) : h instanceof Array ? E(h) : h instanceof Error && E(h.message);
        }
        h && h.then && h.then(function() {
          return E();
        }, function(x) {
          return E(x);
        });
      }, function(g) {
        l(g);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !$a.hasOwnProperty(n.type))
        throw new Error(xn("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), o = r.indexOf("message");
      return o !== -1 && r.splice(o, 1), r.length === 1 && r[0] === "required" ? $a.required : $a[this.getType(n)] || void 0;
    }
  }]), e;
}();
F(oi, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  $a[t] = n;
});
F(oi, "warning", Dh);
F(oi, "messages", tu);
F(oi, "validators", $a);
var En = "'${name}' is not a valid ${type}", kh = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: En,
    method: En,
    array: En,
    object: En,
    number: En,
    date: En,
    boolean: En,
    integer: En,
    float: En,
    regexp: En,
    email: En,
    url: En,
    hex: En
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Vm = oi;
function oN(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Bm = "CODE_LOGIC_ERROR";
function ou(e, t, n, r, o) {
  return au.apply(this, arguments);
}
function au() {
  return au = fn(/* @__PURE__ */ mt().mark(function e(t, n, r, o, a) {
    var i, s, c, l, u, m, f, v, g;
    return mt().wrap(function(p) {
      for (; ; ) switch (p.prev = p.next) {
        case 0:
          return i = B({}, r), delete i.ruleIndex, Vm.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (C) {
              return console.error(C), Promise.reject(Bm);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new Vm(F({}, t, [i])), u = wo(kh, o.validateMessages), l.messages(u), m = [], p.prev = 10, p.next = 13, Promise.resolve(l.validate(F({}, t, n), B({}, o)));
        case 13:
          p.next = 18;
          break;
        case 15:
          p.prev = 15, p.t0 = p.catch(10), p.t0.errors && (m = p.t0.errors.map(function(C, S) {
            var E = C.message, h = E === Bm ? u.default : E;
            return /* @__PURE__ */ d.isValidElement(h) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ d.cloneElement(h, {
                key: "error_".concat(S)
              })
            ) : h;
          }));
        case 18:
          if (!(!m.length && c)) {
            p.next = 23;
            break;
          }
          return p.next = 21, Promise.all(n.map(function(C, S) {
            return ou("".concat(t, ".").concat(S), C, c, o, a);
          }));
        case 21:
          return f = p.sent, p.abrupt("return", f.reduce(function(C, S) {
            return [].concat(he(C), he(S));
          }, []));
        case 23:
          return v = B(B({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, a), g = m.map(function(C) {
            return typeof C == "string" ? oN(C, v) : C;
          }), p.abrupt("return", g);
        case 26:
        case "end":
          return p.stop();
      }
    }, e, null, [[10, 15]]);
  })), au.apply(this, arguments);
}
function aN(e, t, n, r, o, a) {
  var i = e.join("."), s = n.map(function(u, m) {
    var f = u.validator, v = B(B({}, u), {}, {
      ruleIndex: m
    });
    return f && (v.validator = function(g, y, p) {
      var C = !1, S = function() {
        for (var b = arguments.length, w = new Array(b), x = 0; x < b; x++)
          w[x] = arguments[x];
        Promise.resolve().then(function() {
          pt(!C, "Your validator function has already return a promise. `callback` will be ignored."), C || p.apply(void 0, w);
        });
      }, E = f(g, y, S);
      C = E && typeof E.then == "function" && typeof E.catch == "function", pt(C, "`callback` is deprecated. Please return a promise instead."), C && E.then(function() {
        p();
      }).catch(function(h) {
        p(h || " ");
      });
    }), v;
  }).sort(function(u, m) {
    var f = u.warningOnly, v = u.ruleIndex, g = m.warningOnly, y = m.ruleIndex;
    return !!f == !!g ? v - y : f ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var u = fn(/* @__PURE__ */ mt().mark(function m(f, v) {
        var g, y, p;
        return mt().wrap(function(S) {
          for (; ; ) switch (S.prev = S.next) {
            case 0:
              g = 0;
            case 1:
              if (!(g < s.length)) {
                S.next = 12;
                break;
              }
              return y = s[g], S.next = 5, ou(i, t, y, r, a);
            case 5:
              if (p = S.sent, !p.length) {
                S.next = 9;
                break;
              }
              return v([{
                errors: p,
                rule: y
              }]), S.abrupt("return");
            case 9:
              g += 1, S.next = 1;
              break;
            case 12:
              f([]);
            case 13:
            case "end":
              return S.stop();
          }
        }, m);
      }));
      return function(m, f) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(u) {
      return ou(i, t, u, r, a).then(function(m) {
        return {
          errors: m,
          rule: u
        };
      });
    });
    c = (o ? sN(l) : iN(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function iN(e) {
  return iu.apply(this, arguments);
}
function iu() {
  return iu = fn(/* @__PURE__ */ mt().mark(function e(t) {
    return mt().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, he(o));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), iu.apply(this, arguments);
}
function sN(e) {
  return su.apply(this, arguments);
}
function su() {
  return su = fn(/* @__PURE__ */ mt().mark(function e(t) {
    var n;
    return mt().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return n = 0, o.abrupt("return", new Promise(function(a) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && a([s]), n += 1, n === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), su.apply(this, arguments);
}
function zt(e) {
  return Jl(e);
}
function Hm(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = Jn(e, r);
    n = jn(n, r, o);
  }), n;
}
function Io(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return jh(t, r, n);
  });
}
function jh(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r;
  });
}
function cN(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Re(e) !== "object" || Re(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return he(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function lN(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Re(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Wm(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], a = t - n;
  return a > 0 ? [].concat(he(e.slice(0, n)), [o], he(e.slice(n, t)), he(e.slice(t + 1, r))) : a < 0 ? [].concat(he(e.slice(0, t)), he(e.slice(t + 1, n + 1)), [o], he(e.slice(n + 1, r))) : e;
}
var uN = ["name"], Pn = [];
function Lc(e, t, n, r, o, a) {
  return typeof e == "function" ? e(t, n, "source" in a ? {
    source: a.source
  } : {}) : r !== o;
}
var Sd = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n(r) {
    var o;
    if (Vt(this, n), o = t.call(this, r), F(Ae(o), "state", {
      resetCount: 0
    }), F(Ae(o), "cancelRegisterFunc", null), F(Ae(o), "mounted", !1), F(Ae(o), "touched", !1), F(Ae(o), "dirty", !1), F(Ae(o), "validatePromise", void 0), F(Ae(o), "prevValidating", void 0), F(Ae(o), "errors", Pn), F(Ae(o), "warnings", Pn), F(Ae(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, m = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, zt(m)), o.cancelRegisterFunc = null;
    }), F(Ae(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, m = u.prefixName, f = m === void 0 ? [] : m;
      return l !== void 0 ? [].concat(he(f), he(l)) : [];
    }), F(Ae(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, m = c.fieldContext;
      return u.map(function(f) {
        return typeof f == "function" ? f(m) : f;
      });
    }), F(Ae(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), F(Ae(o), "metaCache", null), F(Ae(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = B(B({}, o.getMeta()), {}, {
          destroy: c
        });
        La(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), F(Ae(o), "onStoreChange", function(c, l, u) {
      var m = o.props, f = m.shouldUpdate, v = m.dependencies, g = v === void 0 ? [] : v, y = m.onReset, p = u.store, C = o.getNamePath(), S = o.getValue(c), E = o.getValue(p), h = l && Io(l, C);
      switch (u.type === "valueUpdate" && u.source === "external" && !La(S, E) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = Pn, o.warnings = Pn, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || h) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = Pn, o.warnings = Pn, o.triggerMetaEvent(), y == null || y(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (f && Lc(f, c, p, S, E, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var b = u.data;
          if (h) {
            "touched" in b && (o.touched = b.touched), "validating" in b && !("originRCField" in b) && (o.validatePromise = b.validating ? Promise.resolve([]) : null), "errors" in b && (o.errors = b.errors || Pn), "warnings" in b && (o.warnings = b.warnings || Pn), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in b && Io(l, C, !0)) {
            o.reRender();
            return;
          }
          if (f && !C.length && Lc(f, c, p, S, E, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var w = g.map(zt);
          if (w.some(function(x) {
            return Io(u.relatedFields, x);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (h || (!g.length || C.length || f) && Lc(f, c, p, S, E, u)) {
            o.reRender();
            return;
          }
          break;
      }
      f === !0 && o.reRender();
    }), F(Ae(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), m = c || {}, f = m.triggerName, v = m.validateOnly, g = v === void 0 ? !1 : v, y = Promise.resolve().then(/* @__PURE__ */ fn(/* @__PURE__ */ mt().mark(function p() {
        var C, S, E, h, b, w, x;
        return mt().wrap(function($) {
          for (; ; ) switch ($.prev = $.next) {
            case 0:
              if (o.mounted) {
                $.next = 2;
                break;
              }
              return $.abrupt("return", []);
            case 2:
              if (C = o.props, S = C.validateFirst, E = S === void 0 ? !1 : S, h = C.messageVariables, b = C.validateDebounce, w = o.getRules(), f && (w = w.filter(function(O) {
                return O;
              }).filter(function(O) {
                var _ = O.validateTrigger;
                if (!_)
                  return !0;
                var R = Jl(_);
                return R.includes(f);
              })), !(b && f)) {
                $.next = 10;
                break;
              }
              return $.next = 8, new Promise(function(O) {
                setTimeout(O, b);
              });
            case 8:
              if (o.validatePromise === y) {
                $.next = 10;
                break;
              }
              return $.abrupt("return", []);
            case 10:
              return x = aN(l, u, w, c, E, h), x.catch(function(O) {
                return O;
              }).then(function() {
                var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pn;
                if (o.validatePromise === y) {
                  var _;
                  o.validatePromise = null;
                  var R = [], P = [];
                  (_ = O.forEach) === null || _ === void 0 || _.call(O, function(I) {
                    var D = I.rule.warningOnly, M = I.errors, k = M === void 0 ? Pn : M;
                    D ? P.push.apply(P, he(k)) : R.push.apply(R, he(k));
                  }), o.errors = R, o.warnings = P, o.triggerMetaEvent(), o.reRender();
                }
              }), $.abrupt("return", x);
            case 13:
            case "end":
              return $.stop();
          }
        }, p);
      })));
      return g || (o.validatePromise = y, o.dirty = !0, o.errors = Pn, o.warnings = Pn, o.triggerMetaEvent(), o.reRender()), y;
    }), F(Ae(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), F(Ae(o), "isFieldTouched", function() {
      return o.touched;
    }), F(Ae(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Ur), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), F(Ae(o), "getErrors", function() {
      return o.errors;
    }), F(Ae(o), "getWarnings", function() {
      return o.warnings;
    }), F(Ae(o), "isListField", function() {
      return o.props.isListField;
    }), F(Ae(o), "isList", function() {
      return o.props.isList;
    }), F(Ae(o), "isPreserve", function() {
      return o.props.preserve;
    }), F(Ae(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var c = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return c;
    }), F(Ae(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return B(B({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Zr(c);
      return u.length !== 1 || !/* @__PURE__ */ d.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), F(Ae(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return Jn(c || l(!0), u);
    }), F(Ae(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, m = l.trigger, f = l.validateTrigger, v = l.getValueFromEvent, g = l.normalize, y = l.valuePropName, p = l.getValueProps, C = l.fieldContext, S = f !== void 0 ? f : C.validateTrigger, E = o.getNamePath(), h = C.getInternalHooks, b = C.getFieldsValue, w = h(Ur), x = w.dispatch, N = o.getValue(), $ = p || function(I) {
        return F({}, y, I);
      }, O = c[m], _ = u !== void 0 ? $(N) : {};
      process.env.NODE_ENV !== "production" && _ && Object.keys(_).forEach(function(I) {
        pt(typeof _[I] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(I, ")"));
      });
      var R = B(B({}, c), _);
      R[m] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var I, D = arguments.length, M = new Array(D), k = 0; k < D; k++)
          M[k] = arguments[k];
        v ? I = v.apply(void 0, M) : I = lN.apply(void 0, [y].concat(M)), g && (I = g(I, N, b(!0))), I !== N && x({
          type: "updateValue",
          namePath: E,
          value: I
        }), O && O.apply(void 0, M);
      };
      var P = Jl(S || []);
      return P.forEach(function(I) {
        var D = R[I];
        R[I] = function() {
          D && D.apply(void 0, arguments);
          var M = o.props.rules;
          M && M.length && x({
            type: "validateField",
            namePath: E,
            triggerName: I
          });
        };
      }), R;
    }), r.fieldContext) {
      var a = r.fieldContext.getInternalHooks, i = a(Ur), s = i.initEntityValue;
      s(Ae(o));
    }
    return o;
  }
  return Bt(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, c = s(Ur), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      a === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), s = i.child, c = i.isFunction, l;
      return c ? l = s : /* @__PURE__ */ d.isValidElement(s) ? l = /* @__PURE__ */ d.cloneElement(s, this.getControlled(s.props)) : (pt(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ d.createElement(d.Fragment, {
        key: o
      }, l);
    }
  }]), n;
}(d.Component);
F(Sd, "contextType", Bo);
F(Sd, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Fh(e) {
  var t, n = e.name, r = Qe(e, uN), o = d.useContext(Bo), a = d.useContext(fs), i = n !== void 0 ? zt(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!a, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && i.length <= 1 && pt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ d.createElement(Sd, ye({
    key: c,
    name: i,
    isListField: s
  }, r, {
    fieldContext: o
  }));
}
function dN(e) {
  var t = e.name, n = e.initialValue, r = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = d.useContext(Bo), c = d.useContext(fs), l = d.useRef({
    keys: [],
    id: 0
  }), u = l.current, m = d.useMemo(function() {
    var y = zt(s.prefixName) || [];
    return [].concat(he(y), he(zt(t)));
  }, [s.prefixName, t]), f = d.useMemo(function() {
    return B(B({}, s), {}, {
      prefixName: m
    });
  }, [s, m]), v = d.useMemo(function() {
    return {
      getKey: function(p) {
        var C = m.length, S = p[C];
        return [u.keys[S], p.slice(C + 1)];
      }
    };
  }, [m]);
  if (typeof r != "function")
    return pt(!1, "Form.List only accepts function as children."), null;
  var g = function(p, C, S) {
    var E = S.source;
    return E === "internal" ? !1 : p !== C;
  };
  return /* @__PURE__ */ d.createElement(fs.Provider, {
    value: v
  }, /* @__PURE__ */ d.createElement(Bo.Provider, {
    value: f
  }, /* @__PURE__ */ d.createElement(Fh, {
    name: [],
    shouldUpdate: g,
    rules: o,
    validateTrigger: a,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(y, p) {
    var C = y.value, S = C === void 0 ? [] : C, E = y.onChange, h = s.getFieldValue, b = function() {
      var $ = h(m || []);
      return $ || [];
    }, w = {
      add: function($, O) {
        var _ = b();
        O >= 0 && O <= _.length ? (u.keys = [].concat(he(u.keys.slice(0, O)), [u.id], he(u.keys.slice(O))), E([].concat(he(_.slice(0, O)), [$], he(_.slice(O))))) : (process.env.NODE_ENV !== "production" && (O < 0 || O > _.length) && pt(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(he(u.keys), [u.id]), E([].concat(he(_), [$]))), u.id += 1;
      },
      remove: function($) {
        var O = b(), _ = new Set(Array.isArray($) ? $ : [$]);
        _.size <= 0 || (u.keys = u.keys.filter(function(R, P) {
          return !_.has(P);
        }), E(O.filter(function(R, P) {
          return !_.has(P);
        })));
      },
      move: function($, O) {
        if ($ !== O) {
          var _ = b();
          $ < 0 || $ >= _.length || O < 0 || O >= _.length || (u.keys = Wm(u.keys, $, O), E(Wm(_, $, O)));
        }
      }
    }, x = S || [];
    return Array.isArray(x) || (x = [], process.env.NODE_ENV !== "production" && pt(!1, "Current value of '".concat(m.join(" > "), "' is not an array type."))), r(x.map(function(N, $) {
      var O = u.keys[$];
      return O === void 0 && (u.keys[$] = u.id, O = u.keys[$], u.id += 1), {
        name: $,
        key: O,
        isListField: !0
      };
    }), w, p);
  })));
}
function fN(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, s) {
      i.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        n -= 1, r[s] = c, !(n > 0) && (t && a(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
var Lh = "__@field_split__";
function zc(e) {
  return e.map(function(t) {
    return "".concat(Re(t), ":").concat(t);
  }).join(Lh);
}
var po = /* @__PURE__ */ function() {
  function e() {
    Vt(this, e), F(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Bt(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(zc(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(zc(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var o = this.get(n), a = r(o);
      a ? this.set(n, a) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(zc(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return he(this.kvs.entries()).map(function(r) {
        var o = X(r, 2), a = o[0], i = o[1], s = a.split(Lh);
        return n({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = X(l, 3), m = u[1], f = u[2];
            return m === "number" ? Number(f) : f;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var o = r.key, a = r.value;
        return n[o.join(".")] = a, null;
      }), n;
    }
  }]), e;
}(), mN = ["name"], pN = /* @__PURE__ */ Bt(function e(t) {
  var n = this;
  Vt(this, e), F(this, "formHooked", !1), F(this, "forceRootUpdate", void 0), F(this, "subscribable", !0), F(this, "store", {}), F(this, "fieldEntities", []), F(this, "initialValues", {}), F(this, "callbacks", {}), F(this, "validateMessages", null), F(this, "preserve", null), F(this, "lastValidatePromise", null), F(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), F(this, "getInternalHooks", function(r) {
    return r === Ur ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (pt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), F(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), F(this, "prevWithoutPreserves", null), F(this, "setInitialValues", function(r, o) {
    if (n.initialValues = r || {}, o) {
      var a, i = wo(r, n.store);
      (a = n.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        i = jn(i, c, Jn(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), F(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var o = new po();
      n.getFieldEntities(!0).forEach(function(a) {
        n.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), n.prevWithoutPreserves = o;
    }
  }), F(this, "getInitialValue", function(r) {
    var o = Jn(n.initialValues, r);
    return r.length ? wo(o) : o;
  }), F(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), F(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), F(this, "setPreserve", function(r) {
    n.preserve = r;
  }), F(this, "watchList", []), F(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }), F(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), a = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(o, a, r);
      });
    }
  }), F(this, "timeoutId", null), F(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || pt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), F(this, "updateStore", function(r) {
    n.store = r;
  }), F(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }), F(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new po();
    return n.getFieldEntities(r).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), F(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(a) {
      var i = zt(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: zt(a)
      };
    });
  }), F(this, "getFieldsValue", function(r, o) {
    n.warningUnhooked();
    var a, i, s;
    if (r === !0 || Array.isArray(r) ? (a = r, i = o) : r && Re(r) === "object" && (s = r.strict, i = r.filter), a === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), l = [];
    return c.forEach(function(u) {
      var m, f, v = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var g, y;
        if ((g = (y = u).isList) !== null && g !== void 0 && g.call(y))
          return;
      } else if (!a && (m = (f = u).isListField) !== null && m !== void 0 && m.call(f))
        return;
      if (!i)
        l.push(v);
      else {
        var p = "getMeta" in u ? u.getMeta() : null;
        i(p) && l.push(v);
      }
    }), Hm(n.store, l.map(zt));
  }), F(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var o = zt(r);
    return Jn(n.store, o);
  }), F(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntitiesForNamePathList(r);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: zt(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), F(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var o = zt(r), a = n.getFieldsError([o])[0];
    return a.errors;
  }), F(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var o = zt(r), a = n.getFieldsError([o])[0];
    return a.warnings;
  }), F(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(i) ? (c = i.map(zt), l = !1) : (c = null, l = i) : (c = i.map(zt), l = s);
    var u = n.getFieldEntities(!0), m = function(p) {
      return p.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(y) {
        return m(y) || y.isList();
      }) : u.some(m);
    var f = new po();
    c.forEach(function(y) {
      f.set(y, []);
    }), u.forEach(function(y) {
      var p = y.getNamePath();
      c.forEach(function(C) {
        C.every(function(S, E) {
          return p[E] === S;
        }) && f.update(C, function(S) {
          return [].concat(he(S), [y]);
        });
      });
    });
    var v = function(p) {
      return p.some(m);
    }, g = f.map(function(y) {
      var p = y.value;
      return p;
    });
    return l ? g.every(v) : g.some(v);
  }), F(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), F(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntities();
    if (!r)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = r.map(zt);
    return o.some(function(i) {
      var s = i.getNamePath();
      return Io(a, s) && i.isFieldValidating();
    });
  }), F(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), F(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new po(), a = n.getFieldEntities(!0);
    a.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var m = o.get(u) || /* @__PURE__ */ new Set();
        m.add({
          entity: c,
          value: l
        }), o.set(u, m);
      }
    });
    var i = function(l) {
      l.forEach(function(u) {
        var m = u.props.initialValue;
        if (m !== void 0) {
          var f = u.getNamePath(), v = n.getInitialValue(f);
          if (v !== void 0)
            pt(!1, "Form already set 'initialValues' with path '".concat(f.join("."), "'. Field can not overwrite it."));
          else {
            var g = o.get(f);
            if (g && g.size > 1)
              pt(!1, "Multiple Field with path '".concat(f.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (g) {
              var y = n.getFieldValue(f), p = u.isListField();
              !p && (!r.skipExist || y === void 0) && n.updateStore(jn(n.store, f, he(g)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, he(he(l).map(function(m) {
          return m.entity;
        })));
      }
    })) : s = a, i(s);
  }), F(this, "resetFields", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (!r) {
      n.updateStore(wo(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var a = r.map(zt);
    a.forEach(function(i) {
      var s = n.getInitialValue(i);
      n.updateStore(jn(n.store, i, s));
    }), n.resetWithFieldInitialValue({
      namePathList: a
    }), n.notifyObservers(o, a, {
      type: "reset"
    }), n.notifyWatch(a);
  }), F(this, "setFields", function(r) {
    n.warningUnhooked();
    var o = n.store, a = [];
    r.forEach(function(i) {
      var s = i.name, c = Qe(i, mN), l = zt(s);
      a.push(l), "value" in c && n.updateStore(jn(n.store, l, c.value)), n.notifyObservers(o, [l], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(a);
  }), F(this, "getFields", function() {
    var r = n.getFieldEntities(!0), o = r.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), c = B(B({}, s), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }), F(this, "initEntityValue", function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var a = r.getNamePath(), i = Jn(n.store, a);
      i === void 0 && n.updateStore(jn(n.store, a, o));
    }
  }), F(this, "isMergedPreserve", function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }), F(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var o = r.getNamePath();
    if (n.notifyWatch([o]), r.props.initialValue !== void 0) {
      var a = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(a, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(m) {
        return m !== r;
      }), !n.isMergedPreserve(s) && (!i || c.length > 1)) {
        var l = i ? void 0 : n.getInitialValue(o);
        if (o.length && n.getFieldValue(o) !== l && n.fieldEntities.every(function(m) {
          return (
            // Only reset when no namePath exist
            !jh(m.getNamePath(), o)
          );
        })) {
          var u = n.store;
          n.updateStore(jn(u, o, l, !0)), n.notifyObservers(u, [o], {
            type: "remove"
          }), n.triggerDependenciesUpdate(u, o);
        }
      }
      n.notifyWatch([o]);
    };
  }), F(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var o = r.namePath, a = r.value;
        n.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = r.namePath, s = r.triggerName;
        n.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), F(this, "notifyObservers", function(r, o, a) {
    if (n.subscribable) {
      var i = B(B({}, a), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(r, o, i);
      });
    } else
      n.forceRootUpdate();
  }), F(this, "triggerDependenciesUpdate", function(r, o) {
    var a = n.getDependencyChildrenFields(o);
    return a.length && n.validateFields(a), n.notifyObservers(r, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(he(a))
    }), a;
  }), F(this, "updateValue", function(r, o) {
    var a = zt(r), i = n.store;
    n.updateStore(jn(n.store, a, o)), n.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([a]);
    var s = n.triggerDependenciesUpdate(i, a), c = n.callbacks.onValuesChange;
    if (c) {
      var l = Hm(n.store, [a]);
      c(l, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([a].concat(he(s)));
  }), F(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (r) {
      var a = wo(n.store, r);
      n.updateStore(a);
    }
    n.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), F(this, "setFieldValue", function(r, o) {
    n.setFields([{
      name: r,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), F(this, "getDependencyChildrenFields", function(r) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new po();
    n.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var m = zt(u);
        i.update(m, function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return f.add(c), f;
        });
      });
    });
    var s = function c(l) {
      var u = i.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(m) {
        if (!o.has(m)) {
          o.add(m);
          var f = m.getNamePath();
          m.isFieldDirty() && f.length && (a.push(f), c(f));
        }
      });
    };
    return s(r), a;
  }), F(this, "triggerOnFieldsChange", function(r, o) {
    var a = n.callbacks.onFieldsChange;
    if (a) {
      var i = n.getFields();
      if (o) {
        var s = new po();
        o.forEach(function(l) {
          var u = l.name, m = l.errors;
          s.set(u, m);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = i.filter(function(l) {
        var u = l.name;
        return Io(r, u);
      });
      c.length && a(c, i);
    }
  }), F(this, "validateFields", function(r, o) {
    n.warningUnhooked();
    var a, i;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (a = r, i = o) : i = r;
    var s = !!a, c = s ? a.map(zt) : [], l = [], u = String(Date.now()), m = /* @__PURE__ */ new Set(), f = i || {}, v = f.recursive, g = f.dirty;
    n.getFieldEntities(!0).forEach(function(S) {
      if (s || c.push(S.getNamePath()), !(!S.props.rules || !S.props.rules.length) && !(g && !S.isFieldDirty())) {
        var E = S.getNamePath();
        if (m.add(E.join(u)), !s || Io(c, E, v)) {
          var h = S.validateRules(B({
            validateMessages: B(B({}, kh), n.validateMessages)
          }, i));
          l.push(h.then(function() {
            return {
              name: E,
              errors: [],
              warnings: []
            };
          }).catch(function(b) {
            var w, x = [], N = [];
            return (w = b.forEach) === null || w === void 0 || w.call(b, function($) {
              var O = $.rule.warningOnly, _ = $.errors;
              O ? N.push.apply(N, he(_)) : x.push.apply(x, he(_));
            }), x.length ? Promise.reject({
              name: E,
              errors: x,
              warnings: N
            }) : {
              name: E,
              errors: x,
              warnings: N
            };
          }));
        }
      }
    });
    var y = fN(l);
    n.lastValidatePromise = y, y.catch(function(S) {
      return S;
    }).then(function(S) {
      var E = S.map(function(h) {
        var b = h.name;
        return b;
      });
      n.notifyObservers(n.store, E, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(E, S);
    });
    var p = y.then(function() {
      return n.lastValidatePromise === y ? Promise.resolve(n.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(S) {
      var E = S.filter(function(h) {
        return h && h.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(c),
        errorFields: E,
        outOfDate: n.lastValidatePromise !== y
      });
    });
    p.catch(function(S) {
      return S;
    });
    var C = c.filter(function(S) {
      return m.has(S.join(u));
    });
    return n.triggerOnFieldsChange(C), p;
  }), F(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var o = n.callbacks.onFinish;
      if (o)
        try {
          o(r);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(r) {
      var o = n.callbacks.onFinishFailed;
      o && o(r);
    });
  }), this.forceRootUpdate = t;
});
function zh(e) {
  var t = d.useRef(), n = d.useState({}), r = X(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new pN(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var cu = /* @__PURE__ */ d.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), vN = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, a = t.children, i = d.useContext(cu), s = d.useRef({});
  return /* @__PURE__ */ d.createElement(cu.Provider, {
    value: B(B({}, i), {}, {
      validateMessages: B(B({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, u) {
        r && r(l, {
          changedFields: u,
          forms: s.current
        }), i.triggerFormChange(l, u);
      },
      triggerFormFinish: function(l, u) {
        o && o(l, {
          values: u,
          forms: s.current
        }), i.triggerFormFinish(l, u);
      },
      registerForm: function(l, u) {
        l && (s.current = B(B({}, s.current), {}, F({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = B({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, a);
}, gN = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], hN = function(t, n) {
  var r = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, m = t.validateMessages, f = t.validateTrigger, v = f === void 0 ? "onChange" : f, g = t.onValuesChange, y = t.onFieldsChange, p = t.onFinish, C = t.onFinishFailed, S = t.clearOnDestroy, E = Qe(t, gN), h = d.useRef(null), b = d.useContext(cu), w = zh(i), x = X(w, 1), N = x[0], $ = N.getInternalHooks(Ur), O = $.useSubscribe, _ = $.setInitialValues, R = $.setCallbacks, P = $.setValidateMessages, I = $.setPreserve, D = $.destroyForm;
  d.useImperativeHandle(n, function() {
    return B(B({}, N), {}, {
      nativeElement: h.current
    });
  }), d.useEffect(function() {
    return b.registerForm(r, N), function() {
      b.unregisterForm(r);
    };
  }, [b, N, r]), P(B(B({}, b.validateMessages), m)), R({
    onValuesChange: g,
    onFieldsChange: function(L) {
      if (b.triggerFormChange(r, L), y) {
        for (var A = arguments.length, W = new Array(A > 1 ? A - 1 : 0), Z = 1; Z < A; Z++)
          W[Z - 1] = arguments[Z];
        y.apply(void 0, [L].concat(W));
      }
    },
    onFinish: function(L) {
      b.triggerFormFinish(r, L), p && p(L);
    },
    onFinishFailed: C
  }), I(s);
  var M = d.useRef(null);
  _(o, !M.current), M.current || (M.current = !0), d.useEffect(
    function() {
      return function() {
        return D(S);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var k, j = typeof c == "function";
  if (j) {
    var T = N.getFieldsValue(!0);
    k = c(T, N);
  } else
    k = c;
  O(!j);
  var H = d.useRef();
  d.useEffect(function() {
    cN(H.current || [], a || []) || N.setFields(a || []), H.current = a;
  }, [a, N]);
  var q = d.useMemo(function() {
    return B(B({}, N), {}, {
      validateTrigger: v
    });
  }, [N, v]), U = /* @__PURE__ */ d.createElement(fs.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(Bo.Provider, {
    value: q
  }, k));
  return u === !1 ? U : /* @__PURE__ */ d.createElement(u, ye({}, E, {
    ref: h,
    onSubmit: function(L) {
      L.preventDefault(), L.stopPropagation(), N.submit();
    },
    onReset: function(L) {
      var A;
      L.preventDefault(), N.resetFields(), (A = E.onReset) === null || A === void 0 || A.call(E, L);
    }
  }), U);
};
function Um(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var bN = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = we(t);
  pt(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function yN() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = o === void 0 ? {} : o, i = NO(a) ? {
    form: a
  } : a, s = i.form, c = ct(), l = X(c, 2), u = l[0], m = l[1], f = Nt(function() {
    return Um(u);
  }, [u]), v = we(f);
  v.current = f;
  var g = tn(Bo), y = s || g, p = y && y._init;
  process.env.NODE_ENV !== "production" && pt(t.length === 2 ? s ? p : !0 : p, "useWatch requires a form instance since it can not auto detect from context.");
  var C = zt(r), S = we(C);
  return S.current = C, bN(C), Ge(
    function() {
      if (p) {
        var E = y.getFieldsValue, h = y.getInternalHooks, b = h(Ur), w = b.registerWatch, x = function(_, R) {
          var P = i.preserve ? R : _;
          return typeof r == "function" ? r(P) : Jn(P, S.current);
        }, N = w(function(O, _) {
          var R = x(O, _), P = Um(R);
          v.current !== P && (v.current = P, m(R));
        }), $ = x(E(), E(!0));
        return u !== $ && m($), N;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p]
  ), u;
}
var CN = /* @__PURE__ */ d.forwardRef(hN), ai = CN;
ai.FormProvider = vN;
ai.Field = Fh;
ai.List = dN;
ai.useForm = zh;
ai.useWatch = yN;
const br = /* @__PURE__ */ d.createContext({});
process.env.NODE_ENV !== "production" && (br.displayName = "FormItemInputContext");
const SN = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = d.useContext(br), o = d.useMemo(() => {
    const a = Object.assign({}, r);
    return n && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, n, r]);
  return /* @__PURE__ */ d.createElement(br.Provider, {
    value: o
  }, e);
}, EN = /* @__PURE__ */ d.createContext(void 0), lu = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let o = r;
  return n && (o = /* @__PURE__ */ Y.createElement(SN, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ Y.createElement(qx, null, o)), o;
}, Hs = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    size: o,
    shape: a
  } = e, i = Q({
    [`${t}-lg`]: o === "large",
    [`${t}-sm`]: o === "small"
  }), s = Q({
    [`${t}-circle`]: a === "circle",
    [`${t}-square`]: a === "square",
    [`${t}-round`]: a === "round"
  }), c = d.useMemo(() => typeof o == "number" ? {
    width: o,
    height: o,
    lineHeight: `${o}px`
  } : {}, [o]);
  return /* @__PURE__ */ d.createElement("span", {
    className: Q(t, i, s, n),
    style: Object.assign(Object.assign({}, c), r)
  });
}, wN = new wt("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Ws = (e) => ({
  height: e,
  lineHeight: oe(e)
}), Mo = (e) => Object.assign({
  width: e
}, Ws(e)), xN = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: wN,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), Vc = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Ws(e)), $N = (e) => {
  const {
    skeletonAvatarCls: t,
    gradientFromColor: n,
    controlHeight: r,
    controlHeightLG: o,
    controlHeightSM: a
  } = e;
  return {
    [t]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: n
    }, Mo(r)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, Mo(o)),
    [`${t}${t}-sm`]: Object.assign({}, Mo(a))
  };
}, ON = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: n,
    skeletonInputCls: r,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: s
  } = e;
  return {
    [r]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: n
    }, Vc(t, s)),
    [`${r}-lg`]: Object.assign({}, Vc(o, s)),
    [`${r}-sm`]: Object.assign({}, Vc(a, s))
  };
}, qm = (e) => Object.assign({
  width: e
}, Ws(e)), NN = (e) => {
  const {
    skeletonImageCls: t,
    imageSizeBase: n,
    gradientFromColor: r,
    borderRadiusSM: o,
    calc: a
  } = e;
  return {
    [t]: Object.assign(Object.assign({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      background: r,
      borderRadius: o
    }, qm(a(n).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, qm(n)), {
        maxWidth: a(n).mul(4).equal(),
        maxHeight: a(n).mul(4).equal()
      }),
      [`${t}-svg${t}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    }
  };
}, Bc = (e, t, n) => {
  const {
    skeletonButtonCls: r
  } = e;
  return {
    [`${n}${r}-circle`]: {
      width: t,
      minWidth: t,
      borderRadius: "50%"
    },
    [`${n}${r}-round`]: {
      borderRadius: t
    }
  };
}, Hc = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Ws(e)), _N = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: n,
    controlHeight: r,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: s
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [n]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: t,
      width: s(r).mul(2).equal(),
      minWidth: s(r).mul(2).equal()
    }, Hc(r, s))
  }, Bc(e, r, n)), {
    [`${n}-lg`]: Object.assign({}, Hc(o, s))
  }), Bc(e, o, `${n}-lg`)), {
    [`${n}-sm`]: Object.assign({}, Hc(a, s))
  }), Bc(e, a, `${n}-sm`));
}, PN = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: n,
    skeletonTitleCls: r,
    skeletonParagraphCls: o,
    skeletonButtonCls: a,
    skeletonInputCls: i,
    skeletonImageCls: s,
    controlHeight: c,
    controlHeightLG: l,
    controlHeightSM: u,
    gradientFromColor: m,
    padding: f,
    marginSM: v,
    borderRadius: g,
    titleHeight: y,
    blockRadius: p,
    paragraphLiHeight: C,
    controlHeightXS: S,
    paragraphMarginTop: E
  } = e;
  return {
    [t]: {
      display: "table",
      width: "100%",
      [`${t}-header`]: {
        display: "table-cell",
        paddingInlineEnd: f,
        verticalAlign: "top",
        // Avatar
        [n]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: m
        }, Mo(c)),
        [`${n}-circle`]: {
          borderRadius: "50%"
        },
        [`${n}-lg`]: Object.assign({}, Mo(l)),
        [`${n}-sm`]: Object.assign({}, Mo(u))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [r]: {
          width: "100%",
          height: y,
          background: m,
          borderRadius: p,
          [`+ ${o}`]: {
            marginBlockStart: u
          }
        },
        // paragraph
        [o]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: C,
            listStyle: "none",
            background: m,
            borderRadius: p,
            "+ li": {
              marginBlockStart: S
            }
          }
        },
        [`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${t}-content`]: {
        [`${r}, ${o} > li`]: {
          borderRadius: g
        }
      }
    },
    [`${t}-with-avatar ${t}-content`]: {
      // Title
      [r]: {
        marginBlockStart: v,
        [`+ ${o}`]: {
          marginBlockStart: E
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, _N(e)), $N(e)), ON(e)), NN(e)),
    // Skeleton Block Button, Input
    [`${t}${t}-block`]: {
      width: "100%",
      [a]: {
        width: "100%"
      },
      [i]: {
        width: "100%"
      }
    },
    // With active animation
    [`${t}${t}-active`]: {
      [`
        ${r},
        ${o} > li,
        ${n},
        ${a},
        ${i},
        ${s}
      `]: Object.assign({}, xN(e))
    }
  };
}, RN = (e) => {
  const {
    colorFillContent: t,
    colorFill: n
  } = e, r = t, o = n;
  return {
    color: r,
    colorGradientEnd: o,
    gradientFromColor: r,
    gradientToColor: o,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, Xo = bn("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, r = kt(e, {
    skeletonAvatarCls: `${t}-avatar`,
    skeletonTitleCls: `${t}-title`,
    skeletonParagraphCls: `${t}-paragraph`,
    skeletonButtonCls: `${t}-button`,
    skeletonInputCls: `${t}-input`,
    skeletonImageCls: `${t}-image`,
    imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return [PN(r)];
}, RN, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), IN = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    shape: a = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = d.useContext(st), c = s("skeleton", t), [l, u, m] = Xo(c), f = Dn(e, ["prefixCls", "className"]), v = Q(c, `${c}-element`, {
    [`${c}-active`]: o
  }, n, r, u, m);
  return l(/* @__PURE__ */ d.createElement("div", {
    className: v
  }, /* @__PURE__ */ d.createElement(Hs, Object.assign({
    prefixCls: `${c}-avatar`,
    shape: a,
    size: i
  }, f))));
}, MN = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = d.useContext(st), c = s("skeleton", t), [l, u, m] = Xo(c), f = Dn(e, ["prefixCls"]), v = Q(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, m);
  return l(/* @__PURE__ */ d.createElement("div", {
    className: v
  }, /* @__PURE__ */ d.createElement(Hs, Object.assign({
    prefixCls: `${c}-button`,
    size: i
  }, f))));
}, TN = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", DN = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a
  } = e, {
    getPrefixCls: i
  } = d.useContext(st), s = i("skeleton", t), [c, l, u] = Xo(s), m = Q(s, `${s}-element`, {
    [`${s}-active`]: a
  }, n, r, l, u);
  return c(/* @__PURE__ */ d.createElement("div", {
    className: m
  }, /* @__PURE__ */ d.createElement("div", {
    className: Q(`${s}-image`, n),
    style: o
  }, /* @__PURE__ */ d.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ d.createElement("title", null, "Image placeholder"), /* @__PURE__ */ d.createElement("path", {
    d: TN,
    className: `${s}-image-path`
  })))));
}, AN = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = d.useContext(st), c = s("skeleton", t), [l, u, m] = Xo(c), f = Dn(e, ["prefixCls"]), v = Q(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, m);
  return l(/* @__PURE__ */ d.createElement("div", {
    className: v
  }, /* @__PURE__ */ d.createElement(Hs, Object.assign({
    prefixCls: `${c}-input`,
    size: i
  }, f))));
}, kN = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a,
    children: i
  } = e, {
    getPrefixCls: s
  } = d.useContext(st), c = s("skeleton", t), [l, u, m] = Xo(c), f = Q(c, `${c}-element`, {
    [`${c}-active`]: a
  }, u, n, r, m);
  return l(/* @__PURE__ */ d.createElement("div", {
    className: f
  }, /* @__PURE__ */ d.createElement("div", {
    className: Q(`${c}-image`, n),
    style: o
  }, i)));
}, jN = (e, t) => {
  const {
    width: n,
    rows: r = 2
  } = t;
  if (Array.isArray(n))
    return n[e];
  if (r - 1 === e)
    return n;
}, FN = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    rows: o = 0
  } = e, a = Array.from({
    length: o
  }).map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ d.createElement("li", {
      key: s,
      style: {
        width: jN(s, e)
      }
    })
  ));
  return /* @__PURE__ */ d.createElement("ul", {
    className: Q(t, n),
    style: r
  }, a);
}, LN = ({
  prefixCls: e,
  className: t,
  width: n,
  style: r
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  /* @__PURE__ */ d.createElement("h3", {
    className: Q(e, t),
    style: Object.assign({
      width: n
    }, r)
  })
);
function Wc(e) {
  return e && typeof e == "object" ? e : {};
}
function zN(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function VN(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function BN(e, t) {
  const n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n;
}
const oo = (e) => {
  const {
    prefixCls: t,
    loading: n,
    className: r,
    rootClassName: o,
    style: a,
    children: i,
    avatar: s = !1,
    title: c = !0,
    paragraph: l = !0,
    active: u,
    round: m
  } = e, {
    getPrefixCls: f,
    direction: v,
    className: g,
    style: y
  } = Ko("skeleton"), p = f("skeleton", t), [C, S, E] = Xo(p);
  if (n || !("loading" in e)) {
    const h = !!s, b = !!c, w = !!l;
    let x;
    if (h) {
      const O = Object.assign(Object.assign({
        prefixCls: `${p}-avatar`
      }, zN(b, w)), Wc(s));
      x = /* @__PURE__ */ d.createElement("div", {
        className: `${p}-header`
      }, /* @__PURE__ */ d.createElement(Hs, Object.assign({}, O)));
    }
    let N;
    if (b || w) {
      let O;
      if (b) {
        const R = Object.assign(Object.assign({
          prefixCls: `${p}-title`
        }, VN(h, w)), Wc(c));
        O = /* @__PURE__ */ d.createElement(LN, Object.assign({}, R));
      }
      let _;
      if (w) {
        const R = Object.assign(Object.assign({
          prefixCls: `${p}-paragraph`
        }, BN(h, b)), Wc(l));
        _ = /* @__PURE__ */ d.createElement(FN, Object.assign({}, R));
      }
      N = /* @__PURE__ */ d.createElement("div", {
        className: `${p}-content`
      }, O, _);
    }
    const $ = Q(p, {
      [`${p}-with-avatar`]: h,
      [`${p}-active`]: u,
      [`${p}-rtl`]: v === "rtl",
      [`${p}-round`]: m
    }, g, r, o, S, E);
    return C(/* @__PURE__ */ d.createElement("div", {
      className: $,
      style: Object.assign(Object.assign({}, y), a)
    }, x, N));
  }
  return i ?? null;
};
oo.Button = MN;
oo.Avatar = IN;
oo.Input = AN;
oo.Image = DN;
oo.Node = kN;
process.env.NODE_ENV !== "production" && (oo.displayName = "Skeleton");
const HN = /* @__PURE__ */ Y.createContext({}), Vh = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var WN = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], vo = void 0;
function UN(e, t) {
  var n = e.prefixCls, r = e.invalidate, o = e.item, a = e.renderItem, i = e.responsive, s = e.responsiveDisabled, c = e.registerSize, l = e.itemKey, u = e.className, m = e.style, f = e.children, v = e.display, g = e.order, y = e.component, p = y === void 0 ? "div" : y, C = Qe(e, WN), S = i && !v;
  function E(N) {
    c(l, N);
  }
  d.useEffect(function() {
    return function() {
      E(null);
    };
  }, []);
  var h = a && o !== vo ? a(o, {
    index: g
  }) : f, b;
  r || (b = {
    opacity: S ? 0 : 1,
    height: S ? 0 : vo,
    overflowY: S ? "hidden" : vo,
    order: i ? g : vo,
    pointerEvents: S ? "none" : vo,
    position: S ? "absolute" : vo
  });
  var w = {};
  S && (w["aria-hidden"] = !0);
  var x = /* @__PURE__ */ d.createElement(p, ye({
    className: Q(!r && n, u),
    style: B(B({}, b), m)
  }, w, C, {
    ref: t
  }), h);
  return i && (x = /* @__PURE__ */ d.createElement(zn, {
    onResize: function($) {
      var O = $.offsetWidth;
      E(O);
    },
    disabled: s
  }, x)), x;
}
var Oa = /* @__PURE__ */ d.forwardRef(UN);
Oa.displayName = "Item";
function qN(e) {
  if (typeof MessageChannel > "u")
    Kt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function KN() {
  var e = d.useRef(null), t = function(r) {
    e.current || (e.current = [], qN(function() {
      $0(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function sa(e, t) {
  var n = d.useState(t), r = X(n, 2), o = r[0], a = r[1], i = Ut(function(s) {
    e(function() {
      a(s);
    });
  });
  return [o, i];
}
var ms = /* @__PURE__ */ Y.createContext(null), GN = ["component"], XN = ["className"], QN = ["className"], YN = function(t, n) {
  var r = d.useContext(ms);
  if (!r) {
    var o = t.component, a = o === void 0 ? "div" : o, i = Qe(t, GN);
    return /* @__PURE__ */ d.createElement(a, ye({}, i, {
      ref: n
    }));
  }
  var s = r.className, c = Qe(r, XN), l = t.className, u = Qe(t, QN);
  return /* @__PURE__ */ d.createElement(ms.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(Oa, ye({
    ref: n,
    className: Q(s, l)
  }, c, u)));
}, Bh = /* @__PURE__ */ d.forwardRef(YN);
Bh.displayName = "RawItem";
var ZN = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Hh = "responsive", Wh = "invalidate";
function JN(e) {
  return "+ ".concat(e.length, " ...");
}
function e_(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, o = e.data, a = o === void 0 ? [] : o, i = e.renderItem, s = e.renderRawItem, c = e.itemKey, l = e.itemWidth, u = l === void 0 ? 10 : l, m = e.ssr, f = e.style, v = e.className, g = e.maxCount, y = e.renderRest, p = e.renderRawRest, C = e.suffix, S = e.component, E = S === void 0 ? "div" : S, h = e.itemComponent, b = e.onVisibleChange, w = Qe(e, ZN), x = m === "full", N = KN(), $ = sa(N, null), O = X($, 2), _ = O[0], R = O[1], P = _ || 0, I = sa(N, /* @__PURE__ */ new Map()), D = X(I, 2), M = D[0], k = D[1], j = sa(N, 0), T = X(j, 2), H = T[0], q = T[1], U = sa(N, 0), V = X(U, 2), L = V[0], A = V[1], W = sa(N, 0), Z = X(W, 2), G = Z[0], re = Z[1], J = ct(null), te = X(J, 2), ne = te[0], ue = te[1], K = ct(null), de = X(K, 2), ae = de[0], pe = de[1], Ce = d.useMemo(function() {
    return ae === null && x ? Number.MAX_SAFE_INTEGER : ae || 0;
  }, [ae, _]), fe = ct(!1), be = X(fe, 2), me = be[0], Pe = be[1], $e = "".concat(r, "-item"), ce = Math.max(H, L), xe = g === Hh, Ne = a.length && xe, rt = g === Wh, Ue = Ne || typeof g == "number" && a.length > g, Ve = Nt(function() {
    var Te = a;
    return Ne ? _ === null && x ? Te = a : Te = a.slice(0, Math.min(a.length, P / u)) : typeof g == "number" && (Te = a.slice(0, g)), Te;
  }, [a, u, _, g, Ne]), tt = Nt(function() {
    return Ne ? a.slice(Ce + 1) : a.slice(Ve.length);
  }, [a, Ve, Ne, Ce]), Le = dn(function(Te, ke) {
    var Ie;
    return typeof c == "function" ? c(Te) : (Ie = c && (Te == null ? void 0 : Te[c])) !== null && Ie !== void 0 ? Ie : ke;
  }, [c]), qe = dn(i || function(Te) {
    return Te;
  }, [i]);
  function Me(Te, ke, Ie) {
    ae === Te && (ke === void 0 || ke === ne) || (pe(Te), Ie || (Pe(Te < a.length - 1), b == null || b(Te)), ke !== void 0 && ue(ke));
  }
  function ie(Te, ke) {
    R(ke.clientWidth);
  }
  function Se(Te, ke) {
    k(function(Ie) {
      var Be = new Map(Ie);
      return ke === null ? Be.delete(Te) : Be.set(Te, ke), Be;
    });
  }
  function ve(Te, ke) {
    A(ke), q(L);
  }
  function ge(Te, ke) {
    re(ke);
  }
  function ze(Te) {
    return M.get(Le(Ve[Te], Te));
  }
  Qt(function() {
    if (P && typeof ce == "number" && Ve) {
      var Te = G, ke = Ve.length, Ie = ke - 1;
      if (!ke) {
        Me(0, null);
        return;
      }
      for (var Be = 0; Be < ke; Be += 1) {
        var Xe = ze(Be);
        if (x && (Xe = Xe || 0), Xe === void 0) {
          Me(Be - 1, void 0, !0);
          break;
        }
        if (Te += Xe, // Only one means `totalWidth` is the final width
        Ie === 0 && Te <= P || // Last two width will be the final width
        Be === Ie - 1 && Te + ze(Ie) <= P) {
          Me(Ie, null);
          break;
        } else if (Te + ce > P) {
          Me(Be - 1, Te - Xe - G + L);
          break;
        }
      }
      C && ze(0) + G > P && ue(null);
    }
  }, [P, M, L, G, Le, Ve]);
  var lt = me && !!tt.length, _t = {};
  ne !== null && Ne && (_t = {
    position: "absolute",
    left: ne,
    top: 0
  });
  var gt = {
    prefixCls: $e,
    responsive: Ne,
    component: h,
    invalidate: rt
  }, Pt = s ? function(Te, ke) {
    var Ie = Le(Te, ke);
    return /* @__PURE__ */ d.createElement(ms.Provider, {
      key: Ie,
      value: B(B({}, gt), {}, {
        order: ke,
        item: Te,
        itemKey: Ie,
        registerSize: Se,
        display: ke <= Ce
      })
    }, s(Te, ke));
  } : function(Te, ke) {
    var Ie = Le(Te, ke);
    return /* @__PURE__ */ d.createElement(Oa, ye({}, gt, {
      order: ke,
      key: Ie,
      item: Te,
      renderItem: qe,
      itemKey: Ie,
      registerSize: Se,
      display: ke <= Ce
    }));
  }, Ht = {
    order: lt ? Ce : Number.MAX_SAFE_INTEGER,
    className: "".concat($e, "-rest"),
    registerSize: ve,
    display: lt
  }, Rt = y || JN, ot = p ? /* @__PURE__ */ d.createElement(ms.Provider, {
    value: B(B({}, gt), Ht)
  }, p(tt)) : /* @__PURE__ */ d.createElement(Oa, ye({}, gt, Ht), typeof Rt == "function" ? Rt(tt) : Rt), Ye = /* @__PURE__ */ d.createElement(E, ye({
    className: Q(!rt && r, v),
    style: f,
    ref: t
  }, w), Ve.map(Pt), Ue ? ot : null, C && /* @__PURE__ */ d.createElement(Oa, ye({}, gt, {
    responsive: xe,
    responsiveDisabled: !Ne,
    order: Ce,
    className: "".concat($e, "-suffix"),
    registerSize: ge,
    display: !0,
    style: _t
  }), C));
  return xe ? /* @__PURE__ */ d.createElement(zn, {
    onResize: ie,
    disabled: !Ne
  }, Ye) : Ye;
}
var pr = /* @__PURE__ */ d.forwardRef(e_);
pr.displayName = "Overflow";
pr.Item = Bh;
pr.RESPONSIVE = Hh;
pr.INVALIDATE = Wh;
function t_(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, o = e.arrowPos, a = r || {}, i = a.className, s = a.content, c = o.x, l = c === void 0 ? 0 : c, u = o.y, m = u === void 0 ? 0 : u, f = d.useRef();
  if (!n || !n.points)
    return null;
  var v = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var g = n.points[0], y = n.points[1], p = g[0], C = g[1], S = y[0], E = y[1];
    p === S || !["t", "b"].includes(p) ? v.top = m : p === "t" ? v.top = 0 : v.bottom = 0, C === E || !["l", "r"].includes(C) ? v.left = l : C === "l" ? v.left = 0 : v.right = 0;
  }
  return /* @__PURE__ */ d.createElement("div", {
    ref: f,
    className: Q("".concat(t, "-arrow"), i),
    style: v
  }, s);
}
function n_(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, o = e.mask, a = e.motion;
  return o ? /* @__PURE__ */ d.createElement(Sr, ye({}, a, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ d.createElement("div", {
      style: {
        zIndex: r
      },
      className: Q("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Uh = /* @__PURE__ */ d.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Uh.displayName = "PopupContent");
var qh = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, o = e.prefixCls, a = e.style, i = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, u = e.fresh, m = e.onClick, f = e.mask, v = e.arrow, g = e.arrowPos, y = e.align, p = e.motion, C = e.maskMotion, S = e.forceRender, E = e.getPopupContainer, h = e.autoDestroy, b = e.portal, w = e.zIndex, x = e.onMouseEnter, N = e.onMouseLeave, $ = e.onPointerEnter, O = e.onPointerDownCapture, _ = e.ready, R = e.offsetX, P = e.offsetY, I = e.offsetR, D = e.offsetB, M = e.onAlign, k = e.onPrepare, j = e.stretch, T = e.targetWidth, H = e.targetHeight, q = typeof n == "function" ? n() : n, U = c || l, V = (E == null ? void 0 : E.length) > 0, L = d.useState(!E || !V), A = X(L, 2), W = A[0], Z = A[1];
  if (Qt(function() {
    !W && V && i && Z(!0);
  }, [W, V, i]), !W)
    return null;
  var G = "auto", re = {
    left: "-1000vw",
    top: "-1000vh",
    right: G,
    bottom: G
  };
  if (_ || !c) {
    var J, te = y.points, ne = y.dynamicInset || ((J = y._experimental) === null || J === void 0 ? void 0 : J.dynamicInset), ue = ne && te[0][1] === "r", K = ne && te[0][0] === "b";
    ue ? (re.right = I, re.left = G) : (re.left = R, re.right = G), K ? (re.bottom = D, re.top = G) : (re.top = P, re.bottom = G);
  }
  var de = {};
  return j && (j.includes("height") && H ? de.height = H : j.includes("minHeight") && H && (de.minHeight = H), j.includes("width") && T ? de.width = T : j.includes("minWidth") && T && (de.minWidth = T)), c || (de.pointerEvents = "none"), /* @__PURE__ */ d.createElement(b, {
    open: S || U,
    getContainer: E && function() {
      return E(i);
    },
    autoDestroy: h
  }, /* @__PURE__ */ d.createElement(n_, {
    prefixCls: o,
    open: c,
    zIndex: w,
    mask: f,
    motion: C
  }), /* @__PURE__ */ d.createElement(zn, {
    onResize: M,
    disabled: !c
  }, function(ae) {
    return /* @__PURE__ */ d.createElement(Sr, ye({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: S,
      leavedClassName: "".concat(o, "-hidden")
    }, p, {
      onAppearPrepare: k,
      onEnterPrepare: k,
      visible: c,
      onVisibleChanged: function(Ce) {
        var fe;
        p == null || (fe = p.onVisibleChanged) === null || fe === void 0 || fe.call(p, Ce), s(Ce);
      }
    }), function(pe, Ce) {
      var fe = pe.className, be = pe.style, me = Q(o, fe, r);
      return /* @__PURE__ */ d.createElement("div", {
        ref: or(ae, t, Ce),
        className: me,
        style: B(B(B(B({
          "--arrow-x": "".concat(g.x || 0, "px"),
          "--arrow-y": "".concat(g.y || 0, "px")
        }, re), de), be), {}, {
          boxSizing: "border-box",
          zIndex: w
        }, a),
        onMouseEnter: x,
        onMouseLeave: N,
        onPointerEnter: $,
        onClick: m,
        onPointerDownCapture: O
      }, v && /* @__PURE__ */ d.createElement(t_, {
        prefixCls: o,
        arrow: v,
        arrowPos: g,
        align: y
      }), /* @__PURE__ */ d.createElement(Uh, {
        cache: !c && !u
      }, q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (qh.displayName = "Popup");
var Kh = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, o = to(n), a = d.useCallback(function(s) {
    Xu(t, r ? r(s) : s);
  }, [r]), i = Ho(a, Wo(n));
  return o ? /* @__PURE__ */ d.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (Kh.displayName = "TriggerWrapper");
var Km = /* @__PURE__ */ d.createContext(null);
function Gm(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function r_(e, t, n, r) {
  return d.useMemo(function() {
    var o = Gm(n ?? t), a = Gm(r ?? t), i = new Set(o), s = new Set(a);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, n, r]);
}
function o_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function a_(e, t, n, r) {
  for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var s, c = a[i];
    if (o_((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, r))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function Xm(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function ii(e) {
  return e.ownerDocument.defaultView;
}
function uu(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var o = ii(n).getComputedStyle(n), a = o.overflowX, i = o.overflowY, s = o.overflow;
    [a, i, s].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function Ua(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ca(e) {
  return Ua(parseFloat(e), 0);
}
function Qm(e, t) {
  var n = B({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var o = ii(r).getComputedStyle(r), a = o.overflow, i = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, l = o.borderLeftWidth, u = o.borderRightWidth, m = r.getBoundingClientRect(), f = r.offsetHeight, v = r.clientHeight, g = r.offsetWidth, y = r.clientWidth, p = ca(s), C = ca(c), S = ca(l), E = ca(u), h = Ua(Math.round(m.width / g * 1e3) / 1e3), b = Ua(Math.round(m.height / f * 1e3) / 1e3), w = (g - y - S - E) * h, x = (f - v - p - C) * b, N = p * b, $ = C * b, O = S * h, _ = E * h, R = 0, P = 0;
      if (a === "clip") {
        var I = ca(i);
        R = I * h, P = I * b;
      }
      var D = m.x + O - R, M = m.y + N - P, k = D + m.width + 2 * R - O - _ - w, j = M + m.height + 2 * P - N - $ - x;
      n.left = Math.max(n.left, D), n.top = Math.max(n.top, M), n.right = Math.min(n.right, k), n.bottom = Math.min(n.bottom, j);
    }
  }), n;
}
function Ym(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function Zm(e, t) {
  var n = t || [], r = X(n, 2), o = r[0], a = r[1];
  return [Ym(e.width, o), Ym(e.height, a)];
}
function Jm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function go(e, t) {
  var n = t[0], r = t[1], o, a;
  return n === "t" ? a = e.y : n === "b" ? a = e.y + e.height : a = e.y + e.height / 2, r === "l" ? o = e.x : r === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: a
  };
}
function xr(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, o) {
    return o === t ? n[r] || "c" : r;
  }).join("");
}
function i_(e, t, n, r, o, a, i) {
  var s = d.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[r] || {}
  }), c = X(s, 2), l = c[0], u = c[1], m = d.useRef(0), f = d.useMemo(function() {
    return t ? uu(t) : [];
  }, [t]), v = d.useRef({}), g = function() {
    v.current = {};
  };
  e || g();
  var y = Ut(function() {
    if (t && n && e) {
      let Nn = function(ea, cr) {
        var wr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xe, ta = U.x + ea, ui = U.y + cr, nc = ta + K, rc = ui + ue, oc = Math.max(ta, wr.left), _e = Math.max(ui, wr.top), We = Math.min(nc, wr.right), It = Math.min(rc, wr.bottom);
        return Math.max(0, (We - oc) * (It - _e));
      }, lo = function() {
        ut = U.y + Be, Ze = ut + ue, et = U.x + Ie, vt = et + K;
      };
      var S, E, h, b, w = t, x = w.ownerDocument, N = ii(w), $ = N.getComputedStyle(w), O = $.position, _ = w.style.left, R = w.style.top, P = w.style.right, I = w.style.bottom, D = w.style.overflow, M = B(B({}, o[r]), a), k = x.createElement("div");
      (S = w.parentElement) === null || S === void 0 || S.appendChild(k), k.style.left = "".concat(w.offsetLeft, "px"), k.style.top = "".concat(w.offsetTop, "px"), k.style.position = O, k.style.height = "".concat(w.offsetHeight, "px"), k.style.width = "".concat(w.offsetWidth, "px"), w.style.left = "0", w.style.top = "0", w.style.right = "auto", w.style.bottom = "auto", w.style.overflow = "hidden";
      var j;
      if (Array.isArray(n))
        j = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var T, H, q = n.getBoundingClientRect();
        q.x = (T = q.x) !== null && T !== void 0 ? T : q.left, q.y = (H = q.y) !== null && H !== void 0 ? H : q.top, j = {
          x: q.x,
          y: q.y,
          width: q.width,
          height: q.height
        };
      }
      var U = w.getBoundingClientRect(), V = N.getComputedStyle(w), L = V.height, A = V.width;
      U.x = (E = U.x) !== null && E !== void 0 ? E : U.left, U.y = (h = U.y) !== null && h !== void 0 ? h : U.top;
      var W = x.documentElement, Z = W.clientWidth, G = W.clientHeight, re = W.scrollWidth, J = W.scrollHeight, te = W.scrollTop, ne = W.scrollLeft, ue = U.height, K = U.width, de = j.height, ae = j.width, pe = {
        left: 0,
        top: 0,
        right: Z,
        bottom: G
      }, Ce = {
        left: -ne,
        top: -te,
        right: re - ne,
        bottom: J - te
      }, fe = M.htmlRegion, be = "visible", me = "visibleFirst";
      fe !== "scroll" && fe !== me && (fe = be);
      var Pe = fe === me, $e = Qm(Ce, f), ce = Qm(pe, f), xe = fe === be ? ce : $e, Ne = Pe ? ce : xe;
      w.style.left = "auto", w.style.top = "auto", w.style.right = "0", w.style.bottom = "0";
      var rt = w.getBoundingClientRect();
      w.style.left = _, w.style.top = R, w.style.right = P, w.style.bottom = I, w.style.overflow = D, (b = w.parentElement) === null || b === void 0 || b.removeChild(k);
      var Ue = Ua(Math.round(K / parseFloat(A) * 1e3) / 1e3), Ve = Ua(Math.round(ue / parseFloat(L) * 1e3) / 1e3);
      if (Ue === 0 || Ve === 0 || Da(n) && !hd(n))
        return;
      var tt = M.offset, Le = M.targetOffset, qe = Zm(U, tt), Me = X(qe, 2), ie = Me[0], Se = Me[1], ve = Zm(j, Le), ge = X(ve, 2), ze = ge[0], lt = ge[1];
      j.x -= ze, j.y -= lt;
      var _t = M.points || [], gt = X(_t, 2), Pt = gt[0], Ht = gt[1], Rt = Jm(Ht), ot = Jm(Pt), Ye = go(j, Rt), Te = go(U, ot), ke = B({}, M), Ie = Ye.x - Te.x + ie, Be = Ye.y - Te.y + Se, Xe = Nn(Ie, Be), jt = Nn(Ie, Be, ce), at = go(j, ["t", "l"]), nn = go(U, ["t", "l"]), z = go(j, ["b", "r"]), ee = go(U, ["b", "r"]), se = M.overflow || {}, Oe = se.adjustX, je = se.adjustY, Ke = se.shiftX, He = se.shiftY, Fe = function(cr) {
        return typeof cr == "boolean" ? cr : cr >= 0;
      }, ut, Ze, et, vt;
      lo();
      var xt = Fe(je), Ct = ot[0] === Rt[0];
      if (xt && ot[0] === "t" && (Ze > Ne.bottom || v.current.bt)) {
        var $t = Be;
        Ct ? $t -= ue - de : $t = at.y - ee.y - Se;
        var Je = Nn(Ie, $t), De = Nn(Ie, $t, ce);
        // Of course use larger one
        Je > Xe || Je === Xe && (!Pe || // Choose recommend one
        De >= jt) ? (v.current.bt = !0, Be = $t, Se = -Se, ke.points = [xr(ot, 0), xr(Rt, 0)]) : v.current.bt = !1;
      }
      if (xt && ot[0] === "b" && (ut < Ne.top || v.current.tb)) {
        var nt = Be;
        Ct ? nt += ue - de : nt = z.y - nn.y - Se;
        var ht = Nn(Ie, nt), Ft = Nn(Ie, nt, ce);
        // Of course use larger one
        ht > Xe || ht === Xe && (!Pe || // Choose recommend one
        Ft >= jt) ? (v.current.tb = !0, Be = nt, Se = -Se, ke.points = [xr(ot, 0), xr(Rt, 0)]) : v.current.tb = !1;
      }
      var Lt = Fe(Oe), yn = ot[1] === Rt[1];
      if (Lt && ot[1] === "l" && (vt > Ne.right || v.current.rl)) {
        var Tt = Ie;
        yn ? Tt -= K - ae : Tt = at.x - ee.x - ie;
        var Cn = Nn(Tt, Be), ln = Nn(Tt, Be, ce);
        // Of course use larger one
        Cn > Xe || Cn === Xe && (!Pe || // Choose recommend one
        ln >= jt) ? (v.current.rl = !0, Ie = Tt, ie = -ie, ke.points = [xr(ot, 1), xr(Rt, 1)]) : v.current.rl = !1;
      }
      if (Lt && ot[1] === "r" && (et < Ne.left || v.current.lr)) {
        var pn = Ie;
        yn ? pn += K - ae : pn = z.x - nn.x - ie;
        var ir = Nn(pn, Be), Xn = Nn(pn, Be, ce);
        // Of course use larger one
        ir > Xe || ir === Xe && (!Pe || // Choose recommend one
        Xn >= jt) ? (v.current.lr = !0, Ie = pn, ie = -ie, ke.points = [xr(ot, 1), xr(Rt, 1)]) : v.current.lr = !1;
      }
      lo();
      var un = Ke === !0 ? 0 : Ke;
      typeof un == "number" && (et < ce.left && (Ie -= et - ce.left - ie, j.x + ae < ce.left + un && (Ie += j.x - ce.left + ae - un)), vt > ce.right && (Ie -= vt - ce.right - ie, j.x > ce.right - un && (Ie += j.x - ce.right + un)));
      var An = He === !0 ? 0 : He;
      typeof An == "number" && (ut < ce.top && (Be -= ut - ce.top - Se, j.y + de < ce.top + An && (Be += j.y - ce.top + de - An)), Ze > ce.bottom && (Be -= Ze - ce.bottom - Se, j.y > ce.bottom - An && (Be += j.y - ce.bottom + An)));
      var Qn = U.x + Ie, Yn = Qn + K, Fr = U.y + Be, Jo = Fr + ue, ao = j.x, Ot = ao + ae, dt = j.y, St = dt + de, rn = Math.max(Qn, ao), Zt = Math.min(Yn, Ot), Er = (rn + Zt) / 2, Lr = Er - Qn, io = Math.max(Fr, dt), so = Math.min(Jo, St), co = (io + so) / 2, sr = co - Fr;
      i == null || i(t, ke);
      var vn = rt.right - U.x - (Ie + U.width), zr = rt.bottom - U.y - (Be + U.height);
      Ue === 1 && (Ie = Math.round(Ie), vn = Math.round(vn)), Ve === 1 && (Be = Math.round(Be), zr = Math.round(zr));
      var tc = {
        ready: !0,
        offsetX: Ie / Ue,
        offsetY: Be / Ve,
        offsetR: vn / Ue,
        offsetB: zr / Ve,
        arrowX: Lr / Ue,
        arrowY: sr / Ve,
        scaleX: Ue,
        scaleY: Ve,
        align: ke
      };
      u(tc);
    }
  }), p = function() {
    m.current += 1;
    var E = m.current;
    Promise.resolve().then(function() {
      m.current === E && y();
    });
  }, C = function() {
    u(function(E) {
      return B(B({}, E), {}, {
        ready: !1
      });
    });
  };
  return Qt(C, [r]), Qt(function() {
    e || C();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, p];
}
function s_(e, t, n, r, o) {
  Qt(function() {
    if (e && t && n) {
      let m = function() {
        r(), o();
      };
      var a = t, i = n, s = uu(a), c = uu(i), l = ii(i), u = new Set([l].concat(he(s), he(c)));
      return u.forEach(function(f) {
        f.addEventListener("scroll", m, {
          passive: !0
        });
      }), l.addEventListener("resize", m, {
        passive: !0
      }), r(), function() {
        u.forEach(function(f) {
          f.removeEventListener("scroll", m), l.removeEventListener("resize", m);
        });
      };
    }
  }, [e, t, n]);
}
function c_(e, t, n, r, o, a, i, s) {
  var c = d.useRef(e);
  c.current = e;
  var l = d.useRef(!1);
  d.useEffect(function() {
    if (t && r && (!o || a)) {
      var m = function() {
        l.current = !1;
      }, f = function(h) {
        var b;
        c.current && !i(((b = h.composedPath) === null || b === void 0 || (b = b.call(h)) === null || b === void 0 ? void 0 : b[0]) || h.target) && !l.current && s(!1);
      }, v = ii(r);
      v.addEventListener("pointerdown", m, !0), v.addEventListener("mousedown", f, !0), v.addEventListener("contextmenu", f, !0);
      var g = ls(n);
      if (g && (g.addEventListener("mousedown", f, !0), g.addEventListener("contextmenu", f, !0)), process.env.NODE_ENV !== "production") {
        var y, p, C = n == null || (y = n.getRootNode) === null || y === void 0 ? void 0 : y.call(n), S = (p = r.getRootNode) === null || p === void 0 ? void 0 : p.call(r);
        Do(C === S, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        v.removeEventListener("pointerdown", m, !0), v.removeEventListener("mousedown", f, !0), v.removeEventListener("contextmenu", f, !0), g && (g.removeEventListener("mousedown", f, !0), g.removeEventListener("contextmenu", f, !0));
      };
    }
  }, [t, n, r, o, a]);
  function u() {
    l.current = !0;
  }
  return u;
}
var l_ = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function u_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cd, t = /* @__PURE__ */ d.forwardRef(function(n, r) {
    var o = n.prefixCls, a = o === void 0 ? "rc-trigger-popup" : o, i = n.children, s = n.action, c = s === void 0 ? "hover" : s, l = n.showAction, u = n.hideAction, m = n.popupVisible, f = n.defaultPopupVisible, v = n.onPopupVisibleChange, g = n.afterPopupVisibleChange, y = n.mouseEnterDelay, p = n.mouseLeaveDelay, C = p === void 0 ? 0.1 : p, S = n.focusDelay, E = n.blurDelay, h = n.mask, b = n.maskClosable, w = b === void 0 ? !0 : b, x = n.getPopupContainer, N = n.forceRender, $ = n.autoDestroy, O = n.destroyPopupOnHide, _ = n.popup, R = n.popupClassName, P = n.popupStyle, I = n.popupPlacement, D = n.builtinPlacements, M = D === void 0 ? {} : D, k = n.popupAlign, j = n.zIndex, T = n.stretch, H = n.getPopupClassNameFromAlign, q = n.fresh, U = n.alignPoint, V = n.onPopupClick, L = n.onPopupAlign, A = n.arrow, W = n.popupMotion, Z = n.maskMotion, G = n.popupTransitionName, re = n.popupAnimation, J = n.maskTransitionName, te = n.maskAnimation, ne = n.className, ue = n.getTriggerDOMNode, K = Qe(n, l_), de = $ || O || !1, ae = d.useState(!1), pe = X(ae, 2), Ce = pe[0], fe = pe[1];
    Qt(function() {
      fe(Vh());
    }, []);
    var be = d.useRef({}), me = d.useContext(Km), Pe = d.useMemo(function() {
      return {
        registerSubPopup: function(We, It) {
          be.current[We] = It, me == null || me.registerSubPopup(We, It);
        }
      };
    }, [me]), $e = Th(), ce = d.useState(null), xe = X(ce, 2), Ne = xe[0], rt = xe[1], Ue = d.useRef(null), Ve = Ut(function(_e) {
      Ue.current = _e, Da(_e) && Ne !== _e && rt(_e), me == null || me.registerSubPopup($e, _e);
    }), tt = d.useState(null), Le = X(tt, 2), qe = Le[0], Me = Le[1], ie = d.useRef(null), Se = Ut(function(_e) {
      Da(_e) && qe !== _e && (Me(_e), ie.current = _e);
    }), ve = d.Children.only(i), ge = (ve == null ? void 0 : ve.props) || {}, ze = {}, lt = Ut(function(_e) {
      var We, It, Xt = qe;
      return (Xt == null ? void 0 : Xt.contains(_e)) || ((We = ls(Xt)) === null || We === void 0 ? void 0 : We.host) === _e || _e === Xt || (Ne == null ? void 0 : Ne.contains(_e)) || ((It = ls(Ne)) === null || It === void 0 ? void 0 : It.host) === _e || _e === Ne || Object.values(be.current).some(function(Dt) {
        return (Dt == null ? void 0 : Dt.contains(_e)) || _e === Dt;
      });
    }), _t = Xm(a, W, re, G), gt = Xm(a, Z, te, J), Pt = d.useState(f || !1), Ht = X(Pt, 2), Rt = Ht[0], ot = Ht[1], Ye = m ?? Rt, Te = Ut(function(_e) {
      m === void 0 && ot(_e);
    });
    Qt(function() {
      ot(m || !1);
    }, [m]);
    var ke = d.useRef(Ye);
    ke.current = Ye;
    var Ie = d.useRef([]);
    Ie.current = [];
    var Be = Ut(function(_e) {
      var We;
      Te(_e), ((We = Ie.current[Ie.current.length - 1]) !== null && We !== void 0 ? We : Ye) !== _e && (Ie.current.push(_e), v == null || v(_e));
    }), Xe = d.useRef(), jt = function() {
      clearTimeout(Xe.current);
    }, at = function(We) {
      var It = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      jt(), It === 0 ? Be(We) : Xe.current = setTimeout(function() {
        Be(We);
      }, It * 1e3);
    };
    d.useEffect(function() {
      return jt;
    }, []);
    var nn = d.useState(!1), z = X(nn, 2), ee = z[0], se = z[1];
    Qt(function(_e) {
      (!_e || Ye) && se(!0);
    }, [Ye]);
    var Oe = d.useState(null), je = X(Oe, 2), Ke = je[0], He = je[1], Fe = d.useState(null), ut = X(Fe, 2), Ze = ut[0], et = ut[1], vt = function(We) {
      et([We.clientX, We.clientY]);
    }, xt = i_(Ye, Ne, U && Ze !== null ? Ze : qe, I, M, k, L), Ct = X(xt, 11), $t = Ct[0], Je = Ct[1], De = Ct[2], nt = Ct[3], ht = Ct[4], Ft = Ct[5], Lt = Ct[6], yn = Ct[7], Tt = Ct[8], Cn = Ct[9], ln = Ct[10], pn = r_(Ce, c, l, u), ir = X(pn, 2), Xn = ir[0], un = ir[1], An = Xn.has("click"), Qn = un.has("click") || un.has("contextMenu"), Yn = Ut(function() {
      ee || ln();
    }), Fr = function() {
      ke.current && U && Qn && at(!1);
    };
    s_(Ye, qe, Ne, Yn, Fr), Qt(function() {
      Yn();
    }, [Ze, I]), Qt(function() {
      Ye && !(M != null && M[I]) && Yn();
    }, [JSON.stringify(k)]);
    var Jo = d.useMemo(function() {
      var _e = a_(M, a, Cn, U);
      return Q(_e, H == null ? void 0 : H(Cn));
    }, [Cn, H, M, a, U]);
    d.useImperativeHandle(r, function() {
      return {
        nativeElement: ie.current,
        popupElement: Ue.current,
        forceAlign: Yn
      };
    });
    var ao = d.useState(0), Ot = X(ao, 2), dt = Ot[0], St = Ot[1], rn = d.useState(0), Zt = X(rn, 2), Er = Zt[0], Lr = Zt[1], io = function() {
      if (T && qe) {
        var We = qe.getBoundingClientRect();
        St(We.width), Lr(We.height);
      }
    }, so = function() {
      io(), Yn();
    }, co = function(We) {
      se(!1), ln(), g == null || g(We);
    }, sr = function() {
      return new Promise(function(We) {
        io(), He(function() {
          return We;
        });
      });
    };
    Qt(function() {
      Ke && (ln(), Ke(), He(null));
    }, [Ke]);
    function vn(_e, We, It, Xt) {
      ze[_e] = function(Dt) {
        var di;
        Xt == null || Xt(Dt), at(We, It);
        for (var ac = arguments.length, Kd = new Array(ac > 1 ? ac - 1 : 0), fi = 1; fi < ac; fi++)
          Kd[fi - 1] = arguments[fi];
        (di = ge[_e]) === null || di === void 0 || di.call.apply(di, [ge, Dt].concat(Kd));
      };
    }
    (An || Qn) && (ze.onClick = function(_e) {
      var We;
      ke.current && Qn ? at(!1) : !ke.current && An && (vt(_e), at(!0));
      for (var It = arguments.length, Xt = new Array(It > 1 ? It - 1 : 0), Dt = 1; Dt < It; Dt++)
        Xt[Dt - 1] = arguments[Dt];
      (We = ge.onClick) === null || We === void 0 || We.call.apply(We, [ge, _e].concat(Xt));
    });
    var zr = c_(Ye, Qn, qe, Ne, h, w, lt, at), tc = Xn.has("hover"), Nn = un.has("hover"), lo, ea;
    tc && (vn("onMouseEnter", !0, y, function(_e) {
      vt(_e);
    }), vn("onPointerEnter", !0, y, function(_e) {
      vt(_e);
    }), lo = function(We) {
      (Ye || ee) && Ne !== null && Ne !== void 0 && Ne.contains(We.target) && at(!0, y);
    }, U && (ze.onMouseMove = function(_e) {
      var We;
      (We = ge.onMouseMove) === null || We === void 0 || We.call(ge, _e);
    })), Nn && (vn("onMouseLeave", !1, C), vn("onPointerLeave", !1, C), ea = function() {
      at(!1, C);
    }), Xn.has("focus") && vn("onFocus", !0, S), un.has("focus") && vn("onBlur", !1, E), Xn.has("contextMenu") && (ze.onContextMenu = function(_e) {
      var We;
      ke.current && un.has("contextMenu") ? at(!1) : (vt(_e), at(!0)), _e.preventDefault();
      for (var It = arguments.length, Xt = new Array(It > 1 ? It - 1 : 0), Dt = 1; Dt < It; Dt++)
        Xt[Dt - 1] = arguments[Dt];
      (We = ge.onContextMenu) === null || We === void 0 || We.call.apply(We, [ge, _e].concat(Xt));
    }), ne && (ze.className = Q(ge.className, ne));
    var cr = d.useRef(!1);
    cr.current || (cr.current = N || Ye || ee);
    var wr = B(B({}, ge), ze), ta = {}, ui = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    ui.forEach(function(_e) {
      K[_e] && (ta[_e] = function() {
        for (var We, It = arguments.length, Xt = new Array(It), Dt = 0; Dt < It; Dt++)
          Xt[Dt] = arguments[Dt];
        (We = wr[_e]) === null || We === void 0 || We.call.apply(We, [wr].concat(Xt)), K[_e].apply(K, Xt);
      });
    });
    var nc = /* @__PURE__ */ d.cloneElement(ve, B(B({}, wr), ta)), rc = {
      x: Ft,
      y: Lt
    }, oc = A ? B({}, A !== !0 ? A : {}) : null;
    return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(zn, {
      disabled: !Ye,
      ref: Se,
      onResize: so
    }, /* @__PURE__ */ d.createElement(Kh, {
      getTriggerDOMNode: ue
    }, nc)), cr.current && /* @__PURE__ */ d.createElement(Km.Provider, {
      value: Pe
    }, /* @__PURE__ */ d.createElement(qh, {
      portal: e,
      ref: Ve,
      prefixCls: a,
      popup: _,
      className: Q(R, Jo),
      style: P,
      target: qe,
      onMouseEnter: lo,
      onMouseLeave: ea,
      onPointerEnter: lo,
      zIndex: j,
      open: Ye,
      keepDom: ee,
      fresh: q,
      onClick: V,
      onPointerDownCapture: zr,
      mask: h,
      motion: _t,
      maskMotion: gt,
      onVisibleChanged: co,
      onPrepare: sr,
      forceRender: N,
      autoDestroy: de,
      getPopupContainer: x,
      align: Cn,
      arrow: oc,
      arrowPos: rc,
      ready: $t,
      offsetX: Je,
      offsetY: De,
      offsetR: nt,
      offsetB: ht,
      onAlign: Yn,
      stretch: T,
      targetWidth: dt / yn,
      targetHeight: Er / Tt
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Ed = u_(Cd);
function du(e, t, n) {
  return Q({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const wd = (e, t) => t || e, xd = (e, t, n = void 0) => {
  var r, o;
  const {
    variant: a,
    [e]: i
  } = d.useContext(st), s = d.useContext(EN), c = i == null ? void 0 : i.variant;
  let l;
  typeof t < "u" ? l = t : n === !1 ? l = "borderless" : l = (o = (r = s ?? c) !== null && r !== void 0 ? r : a) !== null && o !== void 0 ? o : "outlined";
  const u = hE.includes(l);
  return [l, u];
};
var d_ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, f_ = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: d_
  }));
}, Gh = /* @__PURE__ */ d.forwardRef(f_);
process.env.NODE_ENV !== "production" && (Gh.displayName = "CheckOutlined");
var m_ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, p_ = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: m_
  }));
}, Xh = /* @__PURE__ */ d.forwardRef(p_);
process.env.NODE_ENV !== "production" && (Xh.displayName = "SearchOutlined");
const v_ = (e, t) => {
  typeof (e == null ? void 0 : e.addEventListener) < "u" ? e.addEventListener("change", t) : typeof (e == null ? void 0 : e.addListener) < "u" && e.addListener(t);
}, g_ = (e, t) => {
  typeof (e == null ? void 0 : e.removeEventListener) < "u" ? e.removeEventListener("change", t) : typeof (e == null ? void 0 : e.removeListener) < "u" && e.removeListener(t);
}, Qh = ["xxl", "xl", "lg", "md", "sm", "xs"], h_ = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), b_ = (e) => {
  const t = e, n = [].concat(Qh).reverse();
  return n.forEach((r, o) => {
    const a = r.toUpperCase(), i = `screen${a}Min`, s = `screen${a}`;
    if (!(t[i] <= t[s]))
      throw new Error(`${i}<=${s} fails : !(${t[i]}<=${t[s]})`);
    if (o < n.length - 1) {
      const c = `screen${a}Max`;
      if (!(t[s] <= t[c]))
        throw new Error(`${s}<=${c} fails : !(${t[s]}<=${t[c]})`);
      const u = `screen${n[o + 1].toUpperCase()}Min`;
      if (!(t[c] <= t[u]))
        throw new Error(`${c}<=${u} fails : !(${t[c]}<=${t[u]})`);
    }
  }), e;
}, y_ = () => {
  const [, e] = ar(), t = h_(b_(e));
  return Y.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    let r = -1, o = {};
    return {
      responsiveMap: t,
      matchHandlers: {},
      dispatch(a) {
        return o = a, n.forEach((i) => i(o)), n.size >= 1;
      },
      subscribe(a) {
        return n.size || this.register(), r += 1, n.set(r, a), a(o), r;
      },
      unsubscribe(a) {
        n.delete(a), n.size || this.unregister();
      },
      register() {
        Object.entries(t).forEach(([a, i]) => {
          const s = ({
            matches: l
          }) => {
            this.dispatch(Object.assign(Object.assign({}, o), {
              [a]: l
            }));
          }, c = window.matchMedia(i);
          v_(c, s), this.matchHandlers[i] = {
            mql: c,
            listener: s
          }, s(c);
        });
      },
      unregister() {
        Object.values(t).forEach((a) => {
          const i = this.matchHandlers[a];
          g_(i == null ? void 0 : i.mql, i == null ? void 0 : i.listener);
        }), n.clear();
      }
    };
  }, [e]);
};
function Yh() {
  const [, e] = d.useReducer((t) => t + 1, 0);
  return e;
}
function C_(e = !0, t = {}) {
  const n = we(t), r = Yh(), o = y_();
  return Qt(() => {
    const a = o.subscribe((i) => {
      n.current = i, e && r();
    });
    return () => o.unsubscribe(a);
  }, []), n.current;
}
const fu = /* @__PURE__ */ d.createContext({}), S_ = (e) => {
  const {
    antCls: t,
    componentCls: n,
    iconCls: r,
    avatarBg: o,
    avatarColor: a,
    containerSize: i,
    containerSizeLG: s,
    containerSizeSM: c,
    textFontSize: l,
    textFontSizeLG: u,
    textFontSizeSM: m,
    borderRadius: f,
    borderRadiusLG: v,
    borderRadiusSM: g,
    lineWidth: y,
    lineType: p
  } = e, C = (S, E, h) => ({
    width: S,
    height: S,
    borderRadius: "50%",
    [`&${n}-square`]: {
      borderRadius: h
    },
    [`&${n}-icon`]: {
      fontSize: E,
      [`> ${r}`]: {
        margin: 0
      }
    }
  });
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, Kn(e)), {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      color: a,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: o,
      border: `${oe(y)} ${p} transparent`,
      "&-image": {
        background: "transparent"
      },
      [`${t}-image-img`]: {
        display: "block"
      }
    }), C(i, l, f)), {
      "&-lg": Object.assign({}, C(s, u, v)),
      "&-sm": Object.assign({}, C(c, m, g)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
}, E_ = (e) => {
  const {
    componentCls: t,
    groupBorderColor: n,
    groupOverlapping: r,
    groupSpace: o
  } = e;
  return {
    [`${t}-group`]: {
      display: "inline-flex",
      [t]: {
        borderColor: n
      },
      "> *:not(:first-child)": {
        marginInlineStart: r
      }
    },
    [`${t}-group-popover`]: {
      [`${t} + ${t}`]: {
        marginInlineStart: o
      }
    }
  };
}, w_ = (e) => {
  const {
    controlHeight: t,
    controlHeightLG: n,
    controlHeightSM: r,
    fontSize: o,
    fontSizeLG: a,
    fontSizeXL: i,
    fontSizeHeading3: s,
    marginXS: c,
    marginXXS: l,
    colorBorderBg: u
  } = e;
  return {
    containerSize: t,
    containerSizeLG: n,
    containerSizeSM: r,
    textFontSize: Math.round((a + i) / 2),
    textFontSizeLG: s,
    textFontSizeSM: o,
    groupSpace: l,
    groupOverlapping: -c,
    groupBorderColor: u
  };
}, Zh = bn("Avatar", (e) => {
  const {
    colorTextLightSolid: t,
    colorTextPlaceholder: n
  } = e, r = kt(e, {
    avatarBg: n,
    avatarColor: t
  });
  return [S_(r), E_(r)];
}, w_);
var x_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const $d = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    shape: r,
    size: o,
    src: a,
    srcSet: i,
    icon: s,
    className: c,
    rootClassName: l,
    style: u,
    alt: m,
    draggable: f,
    children: v,
    crossOrigin: g,
    gap: y = 4,
    onError: p
  } = e, C = x_(e, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "style", "alt", "draggable", "children", "crossOrigin", "gap", "onError"]), [S, E] = d.useState(1), [h, b] = d.useState(!1), [w, x] = d.useState(!0), N = d.useRef(null), $ = d.useRef(null), O = or(t, N), {
    getPrefixCls: _,
    avatar: R
  } = d.useContext(st), P = d.useContext(fu), I = () => {
    if (!$.current || !N.current)
      return;
    const te = $.current.offsetWidth, ne = N.current.offsetWidth;
    te !== 0 && ne !== 0 && y * 2 < ne && E(ne - y * 2 < te ? (ne - y * 2) / te : 1);
  };
  d.useEffect(() => {
    b(!0);
  }, []), d.useEffect(() => {
    x(!0), E(1);
  }, [a]), d.useEffect(I, [y]);
  const D = () => {
    (p == null ? void 0 : p()) !== !1 && x(!1);
  }, M = jr((te) => {
    var ne, ue;
    return (ue = (ne = o ?? (P == null ? void 0 : P.size)) !== null && ne !== void 0 ? ne : te) !== null && ue !== void 0 ? ue : "default";
  }), k = Object.keys(typeof M == "object" ? M || {} : {}).some((te) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(te)), j = C_(k), T = d.useMemo(() => {
    if (typeof M != "object")
      return {};
    const te = Qh.find((ue) => j[ue]), ne = M[te];
    return ne ? {
      width: ne,
      height: ne,
      fontSize: ne && (s || v) ? ne / 2 : 18
    } : {};
  }, [j, M]);
  if (process.env.NODE_ENV !== "production") {
    const te = At("Avatar");
    process.env.NODE_ENV !== "production" && te(!(typeof s == "string" && s.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${s}\` at https://ant.design/components/icon`);
  }
  const H = _("avatar", n), q = ro(H), [U, V, L] = Zh(H, q), A = Q({
    [`${H}-lg`]: M === "large",
    [`${H}-sm`]: M === "small"
  }), W = /* @__PURE__ */ d.isValidElement(a), Z = r || (P == null ? void 0 : P.shape) || "circle", G = Q(H, A, R == null ? void 0 : R.className, `${H}-${Z}`, {
    [`${H}-image`]: W || a && w,
    [`${H}-icon`]: !!s
  }, L, q, c, l, V), re = typeof M == "number" ? {
    width: M,
    height: M,
    fontSize: s ? M / 2 : 18
  } : {};
  let J;
  if (typeof a == "string" && w)
    J = /* @__PURE__ */ d.createElement("img", {
      src: a,
      draggable: f,
      srcSet: i,
      onError: D,
      alt: m,
      crossOrigin: g
    });
  else if (W)
    J = a;
  else if (s)
    J = s;
  else if (h || S !== 1) {
    const te = `scale(${S})`, ne = {
      msTransform: te,
      WebkitTransform: te,
      transform: te
    };
    J = /* @__PURE__ */ d.createElement(zn, {
      onResize: I
    }, /* @__PURE__ */ d.createElement("span", {
      className: `${H}-string`,
      ref: $,
      style: Object.assign({}, ne)
    }, v));
  } else
    J = /* @__PURE__ */ d.createElement("span", {
      className: `${H}-string`,
      style: {
        opacity: 0
      },
      ref: $
    }, v);
  return U(/* @__PURE__ */ d.createElement("span", Object.assign({}, C, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, re), T), R == null ? void 0 : R.style), u),
    className: G,
    ref: O
  }), J));
});
process.env.NODE_ENV !== "production" && ($d.displayName = "Avatar");
const ps = (e) => e ? typeof e == "function" ? e() : e : null;
function Od(e) {
  var t = e.children, n = e.prefixCls, r = e.id, o = e.overlayInnerStyle, a = e.bodyClassName, i = e.className, s = e.style;
  return /* @__PURE__ */ d.createElement("div", {
    className: Q("".concat(n, "-content"), i),
    style: s
  }, /* @__PURE__ */ d.createElement("div", {
    className: Q("".concat(n, "-inner"), a),
    id: r,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
var ho = {
  shiftX: 64,
  adjustY: 1
}, bo = {
  adjustX: 1,
  shiftY: !0
}, Rn = [0, 0], $_ = {
  left: {
    points: ["cr", "cl"],
    overflow: bo,
    offset: [-4, 0],
    targetOffset: Rn
  },
  right: {
    points: ["cl", "cr"],
    overflow: bo,
    offset: [4, 0],
    targetOffset: Rn
  },
  top: {
    points: ["bc", "tc"],
    overflow: ho,
    offset: [0, -4],
    targetOffset: Rn
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: ho,
    offset: [0, 4],
    targetOffset: Rn
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: ho,
    offset: [0, -4],
    targetOffset: Rn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: bo,
    offset: [-4, 0],
    targetOffset: Rn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ho,
    offset: [0, -4],
    targetOffset: Rn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: bo,
    offset: [4, 0],
    targetOffset: Rn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ho,
    offset: [0, 4],
    targetOffset: Rn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: bo,
    offset: [4, 0],
    targetOffset: Rn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ho,
    offset: [0, 4],
    targetOffset: Rn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: bo,
    offset: [-4, 0],
    targetOffset: Rn
  }
}, O_ = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], N_ = function(t, n) {
  var r = t.overlayClassName, o = t.trigger, a = o === void 0 ? ["hover"] : o, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, c = t.mouseLeaveDelay, l = c === void 0 ? 0.1 : c, u = t.overlayStyle, m = t.prefixCls, f = m === void 0 ? "rc-tooltip" : m, v = t.children, g = t.onVisibleChange, y = t.afterVisibleChange, p = t.transitionName, C = t.animation, S = t.motion, E = t.placement, h = E === void 0 ? "right" : E, b = t.align, w = b === void 0 ? {} : b, x = t.destroyTooltipOnHide, N = x === void 0 ? !1 : x, $ = t.defaultVisible, O = t.getTooltipContainer, _ = t.overlayInnerStyle;
  t.arrowContent;
  var R = t.overlay, P = t.id, I = t.showArrow, D = I === void 0 ? !0 : I, M = t.classNames, k = t.styles, j = Qe(t, O_), T = Th(P), H = we(null);
  ys(n, function() {
    return H.current;
  });
  var q = B({}, j);
  "visible" in t && (q.popupVisible = t.visible);
  var U = function() {
    return /* @__PURE__ */ d.createElement(Od, {
      key: "content",
      prefixCls: f,
      id: T,
      bodyClassName: M == null ? void 0 : M.body,
      overlayInnerStyle: B(B({}, _), k == null ? void 0 : k.body)
    }, R);
  }, V = function() {
    var A = d.Children.only(v), W = (A == null ? void 0 : A.props) || {}, Z = B(B({}, W), {}, {
      "aria-describedby": R ? T : null
    });
    return /* @__PURE__ */ d.cloneElement(v, Z);
  };
  return /* @__PURE__ */ d.createElement(Ed, ye({
    popupClassName: Q(r, M == null ? void 0 : M.root),
    prefixCls: f,
    popup: U,
    action: a,
    builtinPlacements: $_,
    popupPlacement: h,
    ref: H,
    popupAlign: w,
    getPopupContainer: O,
    onPopupVisibleChange: g,
    afterPopupVisibleChange: y,
    popupTransitionName: p,
    popupAnimation: C,
    popupMotion: S,
    defaultPopupVisible: $,
    autoDestroy: N,
    mouseLeaveDelay: l,
    popupStyle: B(B({}, u), k == null ? void 0 : k.root),
    mouseEnterDelay: s,
    arrow: D
  }, q), V());
};
const __ = /* @__PURE__ */ Cr(N_);
function Jh(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, o = t / 2, a = 0, i = o, s = r * 1 / Math.sqrt(2), c = o - r * (1 - 1 / Math.sqrt(2)), l = o - n * (1 / Math.sqrt(2)), u = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), m = 2 * o - l, f = u, v = 2 * o - s, g = c, y = 2 * o - a, p = i, C = o * Math.sqrt(2) + r * (Math.sqrt(2) - 2), S = r * (Math.sqrt(2) - 1), E = `polygon(${S}px 100%, 50% ${S}px, ${2 * o - S}px 100%, ${S}px 100%)`, h = `path('M ${a} ${i} A ${r} ${r} 0 0 0 ${s} ${c} L ${l} ${u} A ${n} ${n} 0 0 1 ${m} ${f} L ${v} ${g} A ${r} ${r} 0 0 0 ${y} ${p} Z')`;
  return {
    arrowShadowWidth: C,
    arrowPath: h,
    arrowPolygon: E
  };
}
const P_ = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: o,
    arrowPath: a,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: c
  } = e;
  return {
    pointerEvents: "none",
    width: r,
    height: r,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: c(r).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [o, a]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${oe(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, eb = 8;
function Nd(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? eb : r
  };
}
function Mi(e, t) {
  return e ? t : {};
}
function tb(e, t, n) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: o,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, P_(e, t, o)), {
        "&:before": {
          background: t
        }
      })]
    }, Mi(!!c.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${oe(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), Mi(!!c.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${oe(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), Mi(!!c.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: a
      }
    })), Mi(!!c.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function R_(e, t, n, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = r && typeof r == "object" ? r : {}, a = {};
  switch (e) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + n, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + n, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, a), o);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const ep = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, I_ = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, M_ = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function T_(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: o,
    borderRadius: a,
    visibleFirst: i
  } = e, s = t / 2, c = {};
  return Object.keys(ep).forEach((l) => {
    const u = r && I_[l] || ep[l], m = Object.assign(Object.assign({}, u), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[l] = m, M_.has(l) && (m.autoArrow = !1), l) {
      case "top":
      case "topLeft":
      case "topRight":
        m.offset[1] = -s - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        m.offset[1] = s + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        m.offset[0] = -s - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        m.offset[0] = s + o;
        break;
    }
    const f = Nd({
      contentRadius: a,
      limitVerticalRadius: !0
    });
    if (r)
      switch (l) {
        case "topLeft":
        case "bottomLeft":
          m.offset[0] = -f.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          m.offset[0] = f.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          m.offset[1] = -f.arrowOffsetHorizontal * 2 + s;
          break;
        case "leftBottom":
        case "rightBottom":
          m.offset[1] = f.arrowOffsetHorizontal * 2 - s;
          break;
      }
    m.overflow = R_(l, f, t, n), i && (m.htmlRegion = "visibleFirst");
  }), c;
}
const D_ = (e) => {
  const {
    calc: t,
    componentCls: n,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: o,
    tooltipBg: a,
    tooltipBorderRadius: i,
    zIndexPopup: s,
    controlHeight: c,
    boxShadowSecondary: l,
    paddingSM: u,
    paddingXS: m,
    arrowOffsetHorizontal: f,
    sizePopupArrow: v
  } = e, g = t(i).add(v).add(f).equal(), y = t(i).mul(2).add(v).equal();
  return [
    {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, Kn(e)), {
        position: "absolute",
        zIndex: s,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${n}-inner`]: {
          minWidth: y,
          minHeight: c,
          padding: `${oe(e.calc(u).div(2).equal())} ${oe(m)}`,
          color: o,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: i,
          boxShadow: l,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: g
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${n}-inner`]: {
            borderRadius: e.min(i, eb)
          }
        },
        [`${n}-content`]: {
          position: "relative"
        }
      }), UE(e, (p, {
        darkColor: C
      }) => ({
        [`&${n}-${p}`]: {
          [`${n}-inner`]: {
            backgroundColor: C
          },
          [`${n}-arrow`]: {
            "--antd-arrow-background-color": C
          }
        }
      }))), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    tb(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${n}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, A_ = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Nd({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), Jh(kt(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), nb = (e, t = !0) => bn("Tooltip", (r) => {
  const {
    borderRadius: o,
    colorTextLightSolid: a,
    colorBgSpotlight: i
  } = r, s = kt(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: a,
    tooltipBorderRadius: o,
    tooltipBg: i
  });
  return [D_(s), Nh(r, "zoom-big-fast")];
}, A_, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(e), k_ = Ar.map((e) => `${e}-inverse`);
function j_(e, t = !0) {
  return t ? [].concat(he(k_), he(Ar)).includes(e) : Ar.includes(e);
}
function rb(e, t) {
  const n = j_(t), r = Q({
    [`${e}-${t}`]: t && n
  }), o = {}, a = {};
  return t && !n && (o.background = t, a["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: a
  };
}
const F_ = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: o,
    color: a,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = d.useContext(st), c = s("tooltip", t), [l, u, m] = nb(c), f = rb(c, a), v = f.arrowStyle, g = Object.assign(Object.assign({}, i), f.overlayStyle), y = Q(u, m, c, `${c}-pure`, `${c}-placement-${r}`, n, f.className);
  return l(/* @__PURE__ */ d.createElement("div", {
    className: y,
    style: v
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ d.createElement(Od, Object.assign({}, e, {
    className: u,
    prefixCls: c,
    overlayInnerStyle: g
  }), o)));
};
var L_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const z_ = /* @__PURE__ */ d.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    openClassName: a,
    getTooltipContainer: i,
    color: s,
    overlayInnerStyle: c,
    children: l,
    afterOpenChange: u,
    afterVisibleChange: m,
    destroyTooltipOnHide: f,
    destroyOnHidden: v,
    arrow: g = !0,
    title: y,
    overlay: p,
    builtinPlacements: C,
    arrowPointAtCenter: S = !1,
    autoAdjustOverflow: E = !0,
    motion: h,
    getPopupContainer: b,
    placement: w = "top",
    mouseEnterDelay: x = 0.1,
    mouseLeaveDelay: N = 0.1,
    overlayStyle: $,
    rootClassName: O,
    overlayClassName: _,
    styles: R,
    classNames: P
  } = e, I = L_(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), D = !!g, [, M] = ar(), {
    getPopupContainer: k,
    getPrefixCls: j,
    direction: T,
    className: H,
    style: q,
    classNames: U,
    styles: V
  } = Ko("tooltip"), L = At("Tooltip"), A = d.useRef(null), W = () => {
    var Le;
    (Le = A.current) === null || Le === void 0 || Le.forceAlign();
  };
  d.useImperativeHandle(t, () => {
    var Le, qe;
    return {
      forceAlign: W,
      forcePopupAlign: () => {
        L.deprecated(!1, "forcePopupAlign", "forceAlign"), W();
      },
      nativeElement: (Le = A.current) === null || Le === void 0 ? void 0 : Le.nativeElement,
      popupElement: (qe = A.current) === null || qe === void 0 ? void 0 : qe.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([Le, qe]) => {
    L.deprecated(!(Le in e), Le, qe);
  }), process.env.NODE_ENV !== "production" && L(!f || typeof f == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && L(!g || typeof g == "boolean" || !("arrowPointAtCenter" in g), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [Z, G] = $n(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), re = !y && !p && y !== 0, J = (Le) => {
    var qe, Me;
    G(re ? !1 : Le), re || ((qe = e.onOpenChange) === null || qe === void 0 || qe.call(e, Le), (Me = e.onVisibleChange) === null || Me === void 0 || Me.call(e, Le));
  }, te = d.useMemo(() => {
    var Le, qe;
    let Me = S;
    return typeof g == "object" && (Me = (qe = (Le = g.pointAtCenter) !== null && Le !== void 0 ? Le : g.arrowPointAtCenter) !== null && qe !== void 0 ? qe : S), C || T_({
      arrowPointAtCenter: Me,
      autoAdjustOverflow: E,
      arrowWidth: D ? M.sizePopupArrow : 0,
      borderRadius: M.borderRadius,
      offset: M.marginXXS,
      visibleFirst: !0
    });
  }, [S, g, C, M]), ne = d.useMemo(() => y === 0 ? y : p || y || "", [p, y]), ue = /* @__PURE__ */ d.createElement(lu, {
    space: !0
  }, typeof ne == "function" ? ne() : ne), K = j("tooltip", o), de = j(), ae = e["data-popover-inject"];
  let pe = Z;
  !("open" in e) && !("visible" in e) && re && (pe = !1);
  const Ce = /* @__PURE__ */ d.isValidElement(l) && !oh(l) ? l : /* @__PURE__ */ d.createElement("span", null, l), fe = Ce.props, be = !fe.className || typeof fe.className == "string" ? Q(fe.className, a || `${K}-open`) : fe.className, [me, Pe, $e] = nb(K, !ae), ce = rb(K, s), xe = ce.arrowStyle, Ne = Q(_, {
    [`${K}-rtl`]: T === "rtl"
  }, ce.className, O, Pe, $e, H, U.root, P == null ? void 0 : P.root), rt = Q(U.body, P == null ? void 0 : P.body), [Ue, Ve] = dx("Tooltip", I.zIndex), tt = /* @__PURE__ */ d.createElement(__, Object.assign({}, I, {
    zIndex: Ue,
    showArrow: D,
    placement: w,
    mouseEnterDelay: x,
    mouseLeaveDelay: N,
    prefixCls: K,
    classNames: {
      root: Ne,
      body: rt
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, xe), V.root), q), $), R == null ? void 0 : R.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, V.body), c), R == null ? void 0 : R.body), ce.overlayStyle)
    },
    getTooltipContainer: b || i || k,
    ref: A,
    builtinPlacements: te,
    overlay: ue,
    visible: pe,
    onVisibleChange: J,
    afterVisibleChange: u ?? m,
    arrowContent: /* @__PURE__ */ d.createElement("span", {
      className: `${K}-arrow-content`
    }),
    motion: {
      motionName: gd(de, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: v ?? !!f
  }), pe ? gr(Ce, {
    className: be
  }) : Ce);
  return me(/* @__PURE__ */ d.createElement(md.Provider, {
    value: Ve
  }, tt));
}), er = z_;
process.env.NODE_ENV !== "production" && (er.displayName = "Tooltip");
er._InternalPanelDoNotUseOrYouWillBeFired = F_;
const V_ = (e) => {
  const {
    componentCls: t,
    popoverColor: n,
    titleMinWidth: r,
    fontWeightStrong: o,
    innerPadding: a,
    boxShadowSecondary: i,
    colorTextHeading: s,
    borderRadiusLG: c,
    zIndexPopup: l,
    titleMarginBottom: u,
    colorBgElevated: m,
    popoverBg: f,
    titleBorderBottom: v,
    innerContentPadding: g,
    titlePadding: y
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, Kn(e)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: l,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "--antd-arrow-background-color": m,
        width: "max-content",
        maxWidth: "100vw",
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${t}-content`]: {
          position: "relative"
        },
        [`${t}-inner`]: {
          backgroundColor: f,
          backgroundClip: "padding-box",
          borderRadius: c,
          boxShadow: i,
          padding: a
        },
        [`${t}-title`]: {
          minWidth: r,
          marginBottom: u,
          color: s,
          fontWeight: o,
          borderBottom: v,
          padding: y
        },
        [`${t}-inner-content`]: {
          color: n,
          padding: g
        }
      })
    },
    // Arrow Style
    tb(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow,
        display: "inline-block",
        [`${t}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
}, B_ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Ar.map((n) => {
      const r = e[`${n}6`];
      return {
        [`&${t}-${n}`]: {
          "--antd-arrow-background-color": r,
          [`${t}-inner`]: {
            backgroundColor: r
          },
          [`${t}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
}, H_ = (e) => {
  const {
    lineWidth: t,
    controlHeight: n,
    fontHeight: r,
    padding: o,
    wireframe: a,
    zIndexPopupBase: i,
    borderRadiusLG: s,
    marginXS: c,
    lineType: l,
    colorSplit: u,
    paddingSM: m
  } = e, f = n - r, v = f / 2, g = f / 2 - t, y = o;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: i + 30
  }, Jh(e)), Nd({
    contentRadius: s,
    limitVerticalRadius: !0
  })), {
    // internal
    innerPadding: a ? 0 : 12,
    titleMarginBottom: a ? 0 : c,
    titlePadding: a ? `${v}px ${y}px ${g}px` : 0,
    titleBorderBottom: a ? `${t}px ${l} ${u}` : "none",
    innerContentPadding: a ? `${m}px ${y}px` : 0
  });
}, ob = bn("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: n
  } = e, r = kt(e, {
    popoverBg: t,
    popoverColor: n
  });
  return [V_(r), B_(r), Nh(r, "zoom-big")];
}, H_, {
  resetStyle: !1,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var W_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ab = ({
  title: e,
  content: t,
  prefixCls: n
}) => !e && !t ? null : /* @__PURE__ */ d.createElement(d.Fragment, null, e && /* @__PURE__ */ d.createElement("div", {
  className: `${n}-title`
}, e), t && /* @__PURE__ */ d.createElement("div", {
  className: `${n}-inner-content`
}, t)), U_ = (e) => {
  const {
    hashId: t,
    prefixCls: n,
    className: r,
    style: o,
    placement: a = "top",
    title: i,
    content: s,
    children: c
  } = e, l = ps(i), u = ps(s), m = Q(t, n, `${n}-pure`, `${n}-placement-${a}`, r);
  return /* @__PURE__ */ d.createElement("div", {
    className: m,
    style: o
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${n}-arrow`
  }), /* @__PURE__ */ d.createElement(Od, Object.assign({}, e, {
    className: t,
    prefixCls: n
  }), c || /* @__PURE__ */ d.createElement(ab, {
    prefixCls: n,
    title: l,
    content: u
  })));
}, q_ = (e) => {
  const {
    prefixCls: t,
    className: n
  } = e, r = W_(e, ["prefixCls", "className"]), {
    getPrefixCls: o
  } = d.useContext(st), a = o("popover", t), [i, s, c] = ob(a);
  return i(/* @__PURE__ */ d.createElement(U_, Object.assign({}, r, {
    prefixCls: a,
    hashId: s,
    className: Q(n, c)
  })));
};
var K_ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const G_ = /* @__PURE__ */ d.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    title: a,
    content: i,
    overlayClassName: s,
    placement: c = "top",
    trigger: l = "hover",
    children: u,
    mouseEnterDelay: m = 0.1,
    mouseLeaveDelay: f = 0.1,
    onOpenChange: v,
    overlayStyle: g = {},
    styles: y,
    classNames: p
  } = e, C = K_(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle", "styles", "classNames"]), {
    getPrefixCls: S,
    className: E,
    style: h,
    classNames: b,
    styles: w
  } = Ko("popover"), x = S("popover", o), [N, $, O] = ob(x), _ = S(), R = Q(s, $, O, E, b.root, p == null ? void 0 : p.root), P = Q(b.body, p == null ? void 0 : p.body), [I, D] = $n(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), M = (q, U) => {
    D(q, !0), v == null || v(q, U);
  }, k = (q) => {
    q.keyCode === Ee.ESC && M(!1, q);
  }, j = (q) => {
    M(q);
  }, T = ps(a), H = ps(i);
  return N(/* @__PURE__ */ d.createElement(er, Object.assign({
    placement: c,
    trigger: l,
    mouseEnterDelay: m,
    mouseLeaveDelay: f
  }, C, {
    prefixCls: x,
    classNames: {
      root: R,
      body: P
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign({}, w.root), h), g), y == null ? void 0 : y.root),
      body: Object.assign(Object.assign({}, w.body), y == null ? void 0 : y.body)
    },
    ref: t,
    open: I,
    onOpenChange: j,
    overlay: T || H ? /* @__PURE__ */ d.createElement(ab, {
      prefixCls: x,
      title: T,
      content: H
    }) : null,
    transitionName: gd(_, "zoom-big", C.transitionName),
    "data-popover-inject": !0
  }), gr(u, {
    onKeyDown: (q) => {
      var U, V;
      /* @__PURE__ */ zp(u) && ((V = u == null ? void 0 : (U = u.props).onKeyDown) === null || V === void 0 || V.call(U, q)), k(q);
    }
  })));
}), _d = G_;
_d._InternalPanelDoNotUseOrYouWillBeFired = q_;
process.env.NODE_ENV !== "production" && (_d.displayName = "Popover");
const tp = (e) => {
  const {
    size: t,
    shape: n
  } = d.useContext(fu), r = d.useMemo(() => ({
    size: e.size || t,
    shape: e.shape || n
  }), [e.size, e.shape, t, n]);
  return /* @__PURE__ */ d.createElement(fu.Provider, {
    value: r
  }, e.children);
}, X_ = (e) => {
  var t, n, r, o;
  const {
    getPrefixCls: a,
    direction: i
  } = d.useContext(st), {
    prefixCls: s,
    className: c,
    rootClassName: l,
    style: u,
    maxCount: m,
    maxStyle: f,
    size: v,
    shape: g,
    maxPopoverPlacement: y,
    maxPopoverTrigger: p,
    children: C,
    max: S
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const P = At("Avatar.Group");
    [["maxCount", "max={{ count: number }}"], ["maxStyle", "max={{ style: CSSProperties }}"], ["maxPopoverPlacement", "max={{ popover: PopoverProps }}"], ["maxPopoverTrigger", "max={{ popover: PopoverProps }}"]].forEach(([I, D]) => {
      P.deprecated(!(I in e), I, D);
    });
  }
  const E = a("avatar", s), h = `${E}-group`, b = ro(E), [w, x, N] = Zh(E, b), $ = Q(h, {
    [`${h}-rtl`]: i === "rtl"
  }, N, b, c, l, x), O = Zr(C).map((P, I) => gr(P, {
    // eslint-disable-next-line react/no-array-index-key
    key: `avatar-key-${I}`
  })), _ = (S == null ? void 0 : S.count) || m, R = O.length;
  if (_ && _ < R) {
    const P = O.slice(0, _), I = O.slice(_, R), D = (S == null ? void 0 : S.style) || f, M = ((t = S == null ? void 0 : S.popover) === null || t === void 0 ? void 0 : t.trigger) || p || "hover", k = ((n = S == null ? void 0 : S.popover) === null || n === void 0 ? void 0 : n.placement) || y || "top", j = Object.assign(Object.assign({
      content: I
    }, S == null ? void 0 : S.popover), {
      classNames: {
        root: Q(`${h}-popover`, (o = (r = S == null ? void 0 : S.popover) === null || r === void 0 ? void 0 : r.classNames) === null || o === void 0 ? void 0 : o.root)
      },
      placement: k,
      trigger: M
    });
    return P.push(/* @__PURE__ */ d.createElement(_d, Object.assign({
      key: "avatar-popover-key",
      destroyOnHidden: !0
    }, j), /* @__PURE__ */ d.createElement($d, {
      style: D
    }, `+${R - _}`))), w(/* @__PURE__ */ d.createElement(tp, {
      shape: g,
      size: v
    }, /* @__PURE__ */ d.createElement("div", {
      className: $,
      style: u
    }, P)));
  }
  return w(/* @__PURE__ */ d.createElement(tp, {
    shape: g,
    size: v
  }, /* @__PURE__ */ d.createElement("div", {
    className: $,
    style: u
  }, O)));
}, Pd = $d;
Pd.Group = X_;
var Q_ = Ee.ESC, Y_ = Ee.TAB;
function Z_(e) {
  var t = e.visible, n = e.triggerRef, r = e.onVisibleChange, o = e.autoFocus, a = e.overlayRef, i = d.useRef(!1), s = function() {
    if (t) {
      var m, f;
      (m = n.current) === null || m === void 0 || (f = m.focus) === null || f === void 0 || f.call(m), r == null || r(!1);
    }
  }, c = function() {
    var m;
    return (m = a.current) !== null && m !== void 0 && m.focus ? (a.current.focus(), i.current = !0, !0) : !1;
  }, l = function(m) {
    switch (m.keyCode) {
      case Q_:
        s();
        break;
      case Y_: {
        var f = !1;
        i.current || (f = c()), f ? m.preventDefault() : s();
        break;
      }
    }
  };
  d.useEffect(function() {
    return t ? (window.addEventListener("keydown", l), o && Kt(c, 3), function() {
      window.removeEventListener("keydown", l), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var J_ = /* @__PURE__ */ Cr(function(e, t) {
  var n = e.overlay, r = e.arrow, o = e.prefixCls, a = Nt(function() {
    var s;
    return typeof n == "function" ? s = n() : s = n, s;
  }, [n]), i = or(t, Wo(a));
  return /* @__PURE__ */ Y.createElement(Y.Fragment, null, r && /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(o, "-arrow")
  }), /* @__PURE__ */ Y.cloneElement(a, {
    ref: to(a) ? i : void 0
  }));
}), yo = {
  adjustX: 1,
  adjustY: 1
}, Co = [0, 0], eP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: yo,
    offset: [0, -4],
    targetOffset: Co
  },
  top: {
    points: ["bc", "tc"],
    overflow: yo,
    offset: [0, -4],
    targetOffset: Co
  },
  topRight: {
    points: ["br", "tr"],
    overflow: yo,
    offset: [0, -4],
    targetOffset: Co
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: yo,
    offset: [0, 4],
    targetOffset: Co
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: yo,
    offset: [0, 4],
    targetOffset: Co
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: yo,
    offset: [0, 4],
    targetOffset: Co
  }
}, tP = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function nP(e, t) {
  var n, r = e.arrow, o = r === void 0 ? !1 : r, a = e.prefixCls, i = a === void 0 ? "rc-dropdown" : a, s = e.transitionName, c = e.animation, l = e.align, u = e.placement, m = u === void 0 ? "bottomLeft" : u, f = e.placements, v = f === void 0 ? eP : f, g = e.getPopupContainer, y = e.showAction, p = e.hideAction, C = e.overlayClassName, S = e.overlayStyle, E = e.visible, h = e.trigger, b = h === void 0 ? ["hover"] : h, w = e.autoFocus, x = e.overlay, N = e.children, $ = e.onVisibleChange, O = Qe(e, tP), _ = Y.useState(), R = X(_, 2), P = R[0], I = R[1], D = "visible" in e ? E : P, M = Y.useRef(null), k = Y.useRef(null), j = Y.useRef(null);
  Y.useImperativeHandle(t, function() {
    return M.current;
  });
  var T = function(G) {
    I(G), $ == null || $(G);
  };
  Z_({
    visible: D,
    triggerRef: j,
    onVisibleChange: T,
    autoFocus: w,
    overlayRef: k
  });
  var H = function(G) {
    var re = e.onOverlayClick;
    I(!1), re && re(G);
  }, q = function() {
    return /* @__PURE__ */ Y.createElement(J_, {
      ref: k,
      overlay: x,
      prefixCls: i,
      arrow: o
    });
  }, U = function() {
    return typeof x == "function" ? q : q();
  }, V = function() {
    var G = e.minOverlayWidthMatchTrigger, re = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? G : !re;
  }, L = function() {
    var G = e.openClassName;
    return G !== void 0 ? G : "".concat(i, "-open");
  }, A = /* @__PURE__ */ Y.cloneElement(N, {
    className: Q((n = N.props) === null || n === void 0 ? void 0 : n.className, D && L()),
    ref: to(N) ? or(j, Wo(N)) : void 0
  }), W = p;
  return !W && b.indexOf("contextMenu") !== -1 && (W = ["click"]), /* @__PURE__ */ Y.createElement(Ed, ye({
    builtinPlacements: v
  }, O, {
    prefixCls: i,
    ref: M,
    popupClassName: Q(C, F({}, "".concat(i, "-show-arrow"), o)),
    popupStyle: S,
    action: b,
    showAction: y,
    hideAction: W,
    popupPlacement: m,
    popupAlign: l,
    popupTransitionName: s,
    popupAnimation: c,
    popupVisible: D,
    stretch: V() ? "minWidth" : "",
    popup: U(),
    onPopupVisibleChange: T,
    onPopupClick: H,
    getPopupContainer: g
  }), A);
}
const rP = /* @__PURE__ */ Y.forwardRef(nP);
var ib = /* @__PURE__ */ d.createContext(null);
function sb(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function cb(e) {
  var t = d.useContext(ib);
  return sb(t, e);
}
var oP = ["children", "locked"], Wn = /* @__PURE__ */ d.createContext(null);
function aP(e, t) {
  var n = B({}, e);
  return Object.keys(t).forEach(function(r) {
    var o = t[r];
    o !== void 0 && (n[r] = o);
  }), n;
}
function qa(e) {
  var t = e.children, n = e.locked, r = Qe(e, oP), o = d.useContext(Wn), a = $s(function() {
    return aP(o, r);
  }, [o, r], function(i, s) {
    return !n && (i[0] !== s[0] || !La(i[1], s[1], !0));
  });
  return /* @__PURE__ */ d.createElement(Wn.Provider, {
    value: a
  }, t);
}
var iP = [], lb = /* @__PURE__ */ d.createContext(null);
function Us() {
  return d.useContext(lb);
}
var ub = /* @__PURE__ */ d.createContext(iP);
function si(e) {
  var t = d.useContext(ub);
  return d.useMemo(function() {
    return e !== void 0 ? [].concat(he(t), [e]) : t;
  }, [t, e]);
}
var db = /* @__PURE__ */ d.createContext(null), Rd = /* @__PURE__ */ d.createContext({});
function np(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (hd(e)) {
    var n = e.nodeName.toLowerCase(), r = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(n) || // Editable element
      e.isContentEditable || // Anchor with href element
      n === "a" && !!e.getAttribute("href")
    ), o = e.getAttribute("tabindex"), a = Number(o), i = null;
    return o && !Number.isNaN(a) ? i = a : r && i === null && (i = 0), r && e.disabled && (i = null), i !== null && (i >= 0 || t && i < 0);
  }
  return !1;
}
function sP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = he(e.querySelectorAll("*")).filter(function(r) {
    return np(r, t);
  });
  return np(e, t) && n.unshift(e), n;
}
var mu = Ee.LEFT, pu = Ee.RIGHT, vu = Ee.UP, Ki = Ee.DOWN, Gi = Ee.ENTER, fb = Ee.ESC, la = Ee.HOME, ua = Ee.END, rp = [vu, Ki, mu, pu];
function cP(e, t, n, r) {
  var o, a = "prev", i = "next", s = "children", c = "parent";
  if (e === "inline" && r === Gi)
    return {
      inlineTrigger: !0
    };
  var l = F(F({}, vu, a), Ki, i), u = F(F(F(F({}, mu, n ? i : a), pu, n ? a : i), Ki, s), Gi, s), m = F(F(F(F(F(F({}, vu, a), Ki, i), Gi, s), fb, c), mu, n ? s : c), pu, n ? c : s), f = {
    inline: l,
    horizontal: u,
    vertical: m,
    inlineSub: l,
    horizontalSub: m,
    verticalSub: m
  }, v = (o = f["".concat(e).concat(t ? "" : "Sub")]) === null || o === void 0 ? void 0 : o[r];
  switch (v) {
    case a:
      return {
        offset: -1,
        sibling: !0
      };
    case i:
      return {
        offset: 1,
        sibling: !0
      };
    case c:
      return {
        offset: -1,
        sibling: !1
      };
    case s:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function lP(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function uP(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Id(e, t) {
  var n = sP(e, !0);
  return n.filter(function(r) {
    return t.has(r);
  });
}
function op(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var o = Id(e, t), a = o.length, i = o.findIndex(function(s) {
    return n === s;
  });
  return r < 0 ? i === -1 ? i = a - 1 : i -= 1 : r > 0 && (i += 1), i = (i + a) % a, o[i];
}
var gu = function(t, n) {
  var r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(sb(n, i), "']"));
    s && (r.add(s), a.set(s, i), o.set(i, s));
  }), {
    elements: r,
    key2element: o,
    element2key: a
  };
};
function dP(e, t, n, r, o, a, i, s, c, l) {
  var u = d.useRef(), m = d.useRef();
  m.current = t;
  var f = function() {
    Kt.cancel(u.current);
  };
  return d.useEffect(function() {
    return function() {
      f();
    };
  }, []), function(v) {
    var g = v.which;
    if ([].concat(rp, [Gi, fb, la, ua]).includes(g)) {
      var y = a(), p = gu(y, r), C = p, S = C.elements, E = C.key2element, h = C.element2key, b = E.get(t), w = uP(b, S), x = h.get(w), N = cP(e, i(x, !0).length === 1, n, g);
      if (!N && g !== la && g !== ua)
        return;
      (rp.includes(g) || [la, ua].includes(g)) && v.preventDefault();
      var $ = function(k) {
        if (k) {
          var j = k, T = k.querySelector("a");
          T != null && T.getAttribute("href") && (j = T);
          var H = h.get(k);
          s(H), f(), u.current = Kt(function() {
            m.current === H && j.focus();
          });
        }
      };
      if ([la, ua].includes(g) || N.sibling || !w) {
        var O;
        !w || e === "inline" ? O = o.current : O = lP(w);
        var _, R = Id(O, S);
        g === la ? _ = R[0] : g === ua ? _ = R[R.length - 1] : _ = op(O, S, w, N.offset), $(_);
      } else if (N.inlineTrigger)
        c(x);
      else if (N.offset > 0)
        c(x, !0), f(), u.current = Kt(function() {
          p = gu(y, r);
          var M = w.getAttribute("aria-controls"), k = document.getElementById(M), j = op(k, p.elements);
          $(j);
        }, 5);
      else if (N.offset < 0) {
        var P = i(x, !0), I = P[P.length - 2], D = E.get(I);
        c(I, !1), $(D);
      }
    }
    l == null || l(v);
  };
}
function fP(e) {
  Promise.resolve().then(e);
}
var Md = "__RC_UTIL_PATH_SPLIT__", ap = function(t) {
  return t.join(Md);
}, mP = function(t) {
  return t.split(Md);
}, hu = "rc-menu-more";
function pP() {
  var e = d.useState({}), t = X(e, 2), n = t[1], r = we(/* @__PURE__ */ new Map()), o = we(/* @__PURE__ */ new Map()), a = d.useState([]), i = X(a, 2), s = i[0], c = i[1], l = we(0), u = we(!1), m = function() {
    u.current || n({});
  }, f = dn(function(E, h) {
    process.env.NODE_ENV !== "production" && pt(!r.current.has(E), "Duplicated key '".concat(E, "' used in Menu by path [").concat(h.join(" > "), "]"));
    var b = ap(h);
    o.current.set(b, E), r.current.set(E, b), l.current += 1;
    var w = l.current;
    fP(function() {
      w === l.current && m();
    });
  }, []), v = dn(function(E, h) {
    var b = ap(h);
    o.current.delete(b), r.current.delete(E);
  }, []), g = dn(function(E) {
    c(E);
  }, []), y = dn(function(E, h) {
    var b = r.current.get(E) || "", w = mP(b);
    return h && s.includes(w[0]) && w.unshift(hu), w;
  }, [s]), p = dn(function(E, h) {
    return E.filter(function(b) {
      return b !== void 0;
    }).some(function(b) {
      var w = y(b, !0);
      return w.includes(h);
    });
  }, [y]), C = function() {
    var h = he(r.current.keys());
    return s.length && h.push(hu), h;
  }, S = dn(function(E) {
    var h = "".concat(r.current.get(E)).concat(Md), b = /* @__PURE__ */ new Set();
    return he(o.current.keys()).forEach(function(w) {
      w.startsWith(h) && b.add(o.current.get(w));
    }), b;
  }, []);
  return d.useEffect(function() {
    return function() {
      u.current = !0;
    };
  }, []), {
    // Register
    registerPath: f,
    unregisterPath: v,
    refreshOverflowKeys: g,
    // Util
    isSubPathKey: p,
    getKeyPath: y,
    getKeys: C,
    getSubPathKeys: S
  };
}
function va(e) {
  var t = d.useRef(e);
  t.current = e;
  var n = d.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return e ? n : void 0;
}
var vP = Math.random().toFixed(5).toString().slice(2), ip = 0;
function gP(e) {
  var t = $n(e, {
    value: e
  }), n = X(t, 2), r = n[0], o = n[1];
  return d.useEffect(function() {
    ip += 1;
    var a = process.env.NODE_ENV === "test" ? "test" : "".concat(vP, "-").concat(ip);
    o("rc-menu-uuid-".concat(a));
  }, []), r;
}
function mb(e, t, n, r) {
  var o = d.useContext(Wn), a = o.activeKey, i = o.onActive, s = o.onInactive, c = {
    active: a === e
  };
  return t || (c.onMouseEnter = function(l) {
    n == null || n({
      key: e,
      domEvent: l
    }), i(e);
  }, c.onMouseLeave = function(l) {
    r == null || r({
      key: e,
      domEvent: l
    }), s(e);
  }), c;
}
function pb(e) {
  var t = d.useContext(Wn), n = t.mode, r = t.rtl, o = t.inlineIndent;
  if (n !== "inline")
    return null;
  var a = e;
  return r ? {
    paddingRight: a * o
  } : {
    paddingLeft: a * o
  };
}
function vb(e) {
  var t = e.icon, n = e.props, r = e.children, o;
  return t === null || t === !1 ? null : (typeof t == "function" ? o = /* @__PURE__ */ d.createElement(t, B({}, n)) : typeof t != "boolean" && (o = t), o || r || null);
}
var hP = ["item"];
function vs(e) {
  var t = e.item, n = Qe(e, hP);
  return Object.defineProperty(n, "item", {
    get: function() {
      return pt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), n;
}
var bP = ["title", "attribute", "elementRef"], yP = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], CP = ["active"], SP = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n() {
    return Vt(this, n), t.apply(this, arguments);
  }
  return Bt(n, [{
    key: "render",
    value: function() {
      var o = this.props, a = o.title, i = o.attribute, s = o.elementRef, c = Qe(o, bP), l = Dn(c, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return pt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ d.createElement(pr.Item, ye({}, i, {
        title: typeof a == "string" ? a : void 0
      }, l, {
        ref: s
      }));
    }
  }]), n;
}(d.Component), EP = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.style, r = e.className, o = e.eventKey, a = e.warnKey, i = e.disabled, s = e.itemIcon, c = e.children, l = e.role, u = e.onMouseEnter, m = e.onMouseLeave, f = e.onClick, v = e.onKeyDown, g = e.onFocus, y = Qe(e, yP), p = cb(o), C = d.useContext(Wn), S = C.prefixCls, E = C.onItemClick, h = C.disabled, b = C.overflowDisabled, w = C.itemIcon, x = C.selectedKeys, N = C.onActive, $ = d.useContext(Rd), O = $._internalRenderMenuItem, _ = "".concat(S, "-item"), R = d.useRef(), P = d.useRef(), I = h || i, D = Ho(t, P), M = si(o);
  process.env.NODE_ENV !== "production" && a && pt(!1, "MenuItem should not leave undefined `key`.");
  var k = function(J) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: he(M).reverse(),
      item: R.current,
      domEvent: J
    };
  }, j = s || w, T = mb(o, I, u, m), H = T.active, q = Qe(T, CP), U = x.includes(o), V = pb(M.length), L = function(J) {
    if (!I) {
      var te = k(J);
      f == null || f(vs(te)), E(te);
    }
  }, A = function(J) {
    if (v == null || v(J), J.which === Ee.ENTER) {
      var te = k(J);
      f == null || f(vs(te)), E(te);
    }
  }, W = function(J) {
    N(o), g == null || g(J);
  }, Z = {};
  e.role === "option" && (Z["aria-selected"] = U);
  var G = /* @__PURE__ */ d.createElement(SP, ye({
    ref: R,
    elementRef: D,
    role: l === null ? "none" : l || "menuitem",
    tabIndex: i ? null : -1,
    "data-menu-id": b && p ? null : p
  }, Dn(y, ["extra"]), q, Z, {
    component: "li",
    "aria-disabled": i,
    style: B(B({}, V), n),
    className: Q(_, F(F(F({}, "".concat(_, "-active"), H), "".concat(_, "-selected"), U), "".concat(_, "-disabled"), I), r),
    onClick: L,
    onKeyDown: A,
    onFocus: W
  }), c, /* @__PURE__ */ d.createElement(vb, {
    props: B(B({}, e), {}, {
      isSelected: U
    }),
    icon: j
  }));
  return O && (G = O(G, e, {
    selected: U
  })), G;
});
function wP(e, t) {
  var n = e.eventKey, r = Us(), o = si(n);
  return d.useEffect(function() {
    if (r)
      return r.registerPath(n, o), function() {
        r.unregisterPath(n, o);
      };
  }, [o]), r ? null : /* @__PURE__ */ d.createElement(EP, ye({}, e, {
    ref: t
  }));
}
const qs = /* @__PURE__ */ d.forwardRef(wP);
var xP = ["className", "children"], $P = function(t, n) {
  var r = t.className, o = t.children, a = Qe(t, xP), i = d.useContext(Wn), s = i.prefixCls, c = i.mode, l = i.rtl;
  return /* @__PURE__ */ d.createElement("ul", ye({
    className: Q(s, l && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(c === "inline" ? "inline" : "vertical"), r),
    role: "menu"
  }, a, {
    "data-menu-list": !0,
    ref: n
  }), o);
}, Td = /* @__PURE__ */ d.forwardRef($P);
Td.displayName = "SubMenuList";
function Dd(e, t) {
  return Zr(e).map(function(n, r) {
    if (/* @__PURE__ */ d.isValidElement(n)) {
      var o, a, i = n.key, s = (o = (a = n.props) === null || a === void 0 ? void 0 : a.eventKey) !== null && o !== void 0 ? o : i, c = s == null;
      c && (s = "tmp_key-".concat([].concat(he(t), [r]).join("-")));
      var l = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && c && (l.warnKey = !0), /* @__PURE__ */ d.cloneElement(n, l);
    }
    return n;
  });
}
var cn = {
  adjustX: 1,
  adjustY: 1
}, OP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: cn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: cn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: cn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: cn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: cn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: cn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: cn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: cn
  }
}, NP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: cn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: cn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: cn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: cn
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: cn
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: cn
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: cn
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: cn
  }
};
function gb(e, t, n) {
  if (t)
    return t;
  if (n)
    return n[e] || n.other;
}
var _P = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function PP(e) {
  var t = e.prefixCls, n = e.visible, r = e.children, o = e.popup, a = e.popupStyle, i = e.popupClassName, s = e.popupOffset, c = e.disabled, l = e.mode, u = e.onVisibleChange, m = d.useContext(Wn), f = m.getPopupContainer, v = m.rtl, g = m.subMenuOpenDelay, y = m.subMenuCloseDelay, p = m.builtinPlacements, C = m.triggerSubMenuAction, S = m.forceSubMenuRender, E = m.rootClassName, h = m.motion, b = m.defaultMotions, w = d.useState(!1), x = X(w, 2), N = x[0], $ = x[1], O = B(v ? B({}, NP) : B({}, OP), p), _ = _P[l], R = gb(l, h, b), P = d.useRef(R);
  l !== "inline" && (P.current = R);
  var I = B(B({}, P.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), D = d.useRef();
  return d.useEffect(function() {
    return D.current = Kt(function() {
      $(n);
    }), function() {
      Kt.cancel(D.current);
    };
  }, [n]), /* @__PURE__ */ d.createElement(Ed, {
    prefixCls: t,
    popupClassName: Q("".concat(t, "-popup"), F({}, "".concat(t, "-rtl"), v), i, E),
    stretch: l === "horizontal" ? "minWidth" : null,
    getPopupContainer: f,
    builtinPlacements: O,
    popupPlacement: _,
    popupVisible: N,
    popup: o,
    popupStyle: a,
    popupAlign: s && {
      offset: s
    },
    action: c ? [] : [C],
    mouseEnterDelay: g,
    mouseLeaveDelay: y,
    onPopupVisibleChange: u,
    forceRender: S,
    popupMotion: I,
    fresh: !0
  }, r);
}
function RP(e) {
  var t = e.id, n = e.open, r = e.keyPath, o = e.children, a = "inline", i = d.useContext(Wn), s = i.prefixCls, c = i.forceSubMenuRender, l = i.motion, u = i.defaultMotions, m = i.mode, f = d.useRef(!1);
  f.current = m === a;
  var v = d.useState(!f.current), g = X(v, 2), y = g[0], p = g[1], C = f.current ? n : !1;
  d.useEffect(function() {
    f.current && p(!1);
  }, [m]);
  var S = B({}, gb(a, l, u));
  r.length > 1 && (S.motionAppear = !1);
  var E = S.onVisibleChanged;
  return S.onVisibleChanged = function(h) {
    return !f.current && !h && p(!0), E == null ? void 0 : E(h);
  }, y ? null : /* @__PURE__ */ d.createElement(qa, {
    mode: a,
    locked: !f.current
  }, /* @__PURE__ */ d.createElement(Sr, ye({
    visible: C
  }, S, {
    forceRender: c,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(h) {
    var b = h.className, w = h.style;
    return /* @__PURE__ */ d.createElement(Td, {
      id: t,
      className: b,
      style: w
    }, o);
  }));
}
var IP = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], MP = ["active"], TP = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.style, r = e.className, o = e.title, a = e.eventKey, i = e.warnKey, s = e.disabled, c = e.internalPopupClose, l = e.children, u = e.itemIcon, m = e.expandIcon, f = e.popupClassName, v = e.popupOffset, g = e.popupStyle, y = e.onClick, p = e.onMouseEnter, C = e.onMouseLeave, S = e.onTitleClick, E = e.onTitleMouseEnter, h = e.onTitleMouseLeave, b = Qe(e, IP), w = cb(a), x = d.useContext(Wn), N = x.prefixCls, $ = x.mode, O = x.openKeys, _ = x.disabled, R = x.overflowDisabled, P = x.activeKey, I = x.selectedKeys, D = x.itemIcon, M = x.expandIcon, k = x.onItemClick, j = x.onOpenChange, T = x.onActive, H = d.useContext(Rd), q = H._internalRenderSubMenuItem, U = d.useContext(db), V = U.isSubPathKey, L = si(), A = "".concat(N, "-submenu"), W = _ || s, Z = d.useRef(), G = d.useRef();
  process.env.NODE_ENV !== "production" && i && pt(!1, "SubMenu should not leave undefined `key`.");
  var re = u ?? D, J = m ?? M, te = O.includes(a), ne = !R && te, ue = V(I, a), K = mb(a, W, E, h), de = K.active, ae = Qe(K, MP), pe = d.useState(!1), Ce = X(pe, 2), fe = Ce[0], be = Ce[1], me = function(ge) {
    W || be(ge);
  }, Pe = function(ge) {
    me(!0), p == null || p({
      key: a,
      domEvent: ge
    });
  }, $e = function(ge) {
    me(!1), C == null || C({
      key: a,
      domEvent: ge
    });
  }, ce = d.useMemo(function() {
    return de || ($ !== "inline" ? fe || V([P], a) : !1);
  }, [$, de, P, fe, a, V]), xe = pb(L.length), Ne = function(ge) {
    W || (S == null || S({
      key: a,
      domEvent: ge
    }), $ === "inline" && j(a, !te));
  }, rt = va(function(ve) {
    y == null || y(vs(ve)), k(ve);
  }), Ue = function(ge) {
    $ !== "inline" && j(a, ge);
  }, Ve = function() {
    T(a);
  }, tt = w && "".concat(w, "-popup"), Le = d.useMemo(function() {
    return /* @__PURE__ */ d.createElement(vb, {
      icon: $ !== "horizontal" ? J : void 0,
      props: B(B({}, e), {}, {
        isOpen: ne,
        // [Legacy] Not sure why need this mark
        isSubMenu: !0
      })
    }, /* @__PURE__ */ d.createElement("i", {
      className: "".concat(A, "-arrow")
    }));
  }, [$, J, e, ne, A]), qe = /* @__PURE__ */ d.createElement("div", ye({
    role: "menuitem",
    style: xe,
    className: "".concat(A, "-title"),
    tabIndex: W ? null : -1,
    ref: Z,
    title: typeof o == "string" ? o : null,
    "data-menu-id": R && w ? null : w,
    "aria-expanded": ne,
    "aria-haspopup": !0,
    "aria-controls": tt,
    "aria-disabled": W,
    onClick: Ne,
    onFocus: Ve
  }, ae), o, Le), Me = d.useRef($);
  if ($ !== "inline" && L.length > 1 ? Me.current = "vertical" : Me.current = $, !R) {
    var ie = Me.current;
    qe = /* @__PURE__ */ d.createElement(PP, {
      mode: ie,
      prefixCls: A,
      visible: !c && ne && $ !== "inline",
      popupClassName: f,
      popupOffset: v,
      popupStyle: g,
      popup: /* @__PURE__ */ d.createElement(
        qa,
        {
          mode: ie === "horizontal" ? "vertical" : ie
        },
        /* @__PURE__ */ d.createElement(Td, {
          id: tt,
          ref: G
        }, l)
      ),
      disabled: W,
      onVisibleChange: Ue
    }, qe);
  }
  var Se = /* @__PURE__ */ d.createElement(pr.Item, ye({
    ref: t,
    role: "none"
  }, b, {
    component: "li",
    style: n,
    className: Q(A, "".concat(A, "-").concat($), r, F(F(F(F({}, "".concat(A, "-open"), ne), "".concat(A, "-active"), ce), "".concat(A, "-selected"), ue), "".concat(A, "-disabled"), W)),
    onMouseEnter: Pe,
    onMouseLeave: $e
  }), qe, !R && /* @__PURE__ */ d.createElement(RP, {
    id: tt,
    open: ne,
    keyPath: L
  }, l));
  return q && (Se = q(Se, e, {
    selected: ue,
    active: ce,
    open: ne,
    disabled: W
  })), /* @__PURE__ */ d.createElement(qa, {
    onItemClick: rt,
    mode: $ === "horizontal" ? "vertical" : $,
    itemIcon: re,
    expandIcon: J
  }, Se);
}), Ks = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, o = si(n), a = Dd(r, o), i = Us();
  d.useEffect(function() {
    if (i)
      return i.registerPath(n, o), function() {
        i.unregisterPath(n, o);
      };
  }, [o]);
  var s;
  return i ? s = a : s = /* @__PURE__ */ d.createElement(TP, ye({
    ref: t
  }, e), a), /* @__PURE__ */ d.createElement(ub.Provider, {
    value: o
  }, s);
});
process.env.NODE_ENV !== "production" && (Ks.displayName = "SubMenu");
function hb(e) {
  var t = e.className, n = e.style, r = d.useContext(Wn), o = r.prefixCls, a = Us();
  return a ? null : /* @__PURE__ */ d.createElement("li", {
    role: "separator",
    className: Q("".concat(o, "-item-divider"), t),
    style: n
  });
}
var DP = ["className", "title", "eventKey", "children"], AP = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.className, r = e.title;
  e.eventKey;
  var o = e.children, a = Qe(e, DP), i = d.useContext(Wn), s = i.prefixCls, c = "".concat(s, "-item-group");
  return /* @__PURE__ */ d.createElement("li", ye({
    ref: t,
    role: "presentation"
  }, a, {
    onClick: function(u) {
      return u.stopPropagation();
    },
    className: Q(c, n)
  }), /* @__PURE__ */ d.createElement("div", {
    role: "presentation",
    className: "".concat(c, "-title"),
    title: typeof r == "string" ? r : void 0
  }, r), /* @__PURE__ */ d.createElement("ul", {
    role: "group",
    className: "".concat(c, "-list")
  }, o));
}), Ad = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, o = si(n), a = Dd(r, o), i = Us();
  return i ? a : /* @__PURE__ */ d.createElement(AP, ye({
    ref: t
  }, Dn(e, ["warnKey"])), a);
});
process.env.NODE_ENV !== "production" && (Ad.displayName = "MenuItemGroup");
var kP = ["label", "children", "key", "type", "extra"];
function bu(e, t, n) {
  var r = t.item, o = t.group, a = t.submenu, i = t.divider;
  return (e || []).map(function(s, c) {
    if (s && Re(s) === "object") {
      var l = s, u = l.label, m = l.children, f = l.key, v = l.type, g = l.extra, y = Qe(l, kP), p = f ?? "tmp-".concat(c);
      return m || v === "group" ? v === "group" ? /* @__PURE__ */ d.createElement(o, ye({
        key: p
      }, y, {
        title: u
      }), bu(m, t, n)) : /* @__PURE__ */ d.createElement(a, ye({
        key: p
      }, y, {
        title: u
      }), bu(m, t, n)) : v === "divider" ? /* @__PURE__ */ d.createElement(i, ye({
        key: p
      }, y)) : /* @__PURE__ */ d.createElement(r, ye({
        key: p
      }, y, {
        extra: g
      }), u, (!!g || g === 0) && /* @__PURE__ */ d.createElement("span", {
        className: "".concat(n, "-item-extra")
      }, g));
    }
    return null;
  }).filter(function(s) {
    return s;
  });
}
function sp(e, t, n, r, o) {
  var a = e, i = B({
    divider: hb,
    item: qs,
    group: Ad,
    submenu: Ks
  }, r);
  return t && (a = bu(t, i, o)), Dd(a, n);
}
var jP = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], Br = [], FP = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = e, o = r.prefixCls, a = o === void 0 ? "rc-menu" : o, i = r.rootClassName, s = r.style, c = r.className, l = r.tabIndex, u = l === void 0 ? 0 : l, m = r.items, f = r.children, v = r.direction, g = r.id, y = r.mode, p = y === void 0 ? "vertical" : y, C = r.inlineCollapsed, S = r.disabled, E = r.disabledOverflow, h = r.subMenuOpenDelay, b = h === void 0 ? 0.1 : h, w = r.subMenuCloseDelay, x = w === void 0 ? 0.1 : w, N = r.forceSubMenuRender, $ = r.defaultOpenKeys, O = r.openKeys, _ = r.activeKey, R = r.defaultActiveFirst, P = r.selectable, I = P === void 0 ? !0 : P, D = r.multiple, M = D === void 0 ? !1 : D, k = r.defaultSelectedKeys, j = r.selectedKeys, T = r.onSelect, H = r.onDeselect, q = r.inlineIndent, U = q === void 0 ? 24 : q, V = r.motion, L = r.defaultMotions, A = r.triggerSubMenuAction, W = A === void 0 ? "hover" : A, Z = r.builtinPlacements, G = r.itemIcon, re = r.expandIcon, J = r.overflowedIndicator, te = J === void 0 ? "..." : J, ne = r.overflowedIndicatorPopupClassName, ue = r.getPopupContainer, K = r.onClick, de = r.onOpenChange, ae = r.onKeyDown, pe = r.openAnimation, Ce = r.openTransitionName, fe = r._internalRenderMenuItem, be = r._internalRenderSubMenuItem, me = r._internalComponents, Pe = Qe(r, jP), $e = d.useMemo(function() {
    return [sp(f, m, Br, me, a), sp(f, m, Br, {}, a)];
  }, [f, m, me]), ce = X($e, 2), xe = ce[0], Ne = ce[1], rt = d.useState(!1), Ue = X(rt, 2), Ve = Ue[0], tt = Ue[1], Le = d.useRef(), qe = gP(g), Me = v === "rtl";
  process.env.NODE_ENV !== "production" && pt(!pe && !Ce, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var ie = $n($, {
    value: O,
    postState: function(dt) {
      return dt || Br;
    }
  }), Se = X(ie, 2), ve = Se[0], ge = Se[1], ze = function(dt) {
    var St = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function rn() {
      ge(dt), de == null || de(dt);
    }
    St ? tl(rn) : rn();
  }, lt = d.useState(ve), _t = X(lt, 2), gt = _t[0], Pt = _t[1], Ht = d.useRef(!1), Rt = d.useMemo(function() {
    return (p === "inline" || p === "vertical") && C ? ["vertical", C] : [p, !1];
  }, [p, C]), ot = X(Rt, 2), Ye = ot[0], Te = ot[1], ke = Ye === "inline", Ie = d.useState(Ye), Be = X(Ie, 2), Xe = Be[0], jt = Be[1], at = d.useState(Te), nn = X(at, 2), z = nn[0], ee = nn[1];
  d.useEffect(function() {
    jt(Ye), ee(Te), Ht.current && (ke ? ge(gt) : ze(Br));
  }, [Ye, Te]);
  var se = d.useState(0), Oe = X(se, 2), je = Oe[0], Ke = Oe[1], He = je >= xe.length - 1 || Xe !== "horizontal" || E;
  d.useEffect(function() {
    ke && Pt(ve);
  }, [ve]), d.useEffect(function() {
    return Ht.current = !0, function() {
      Ht.current = !1;
    };
  }, []);
  var Fe = pP(), ut = Fe.registerPath, Ze = Fe.unregisterPath, et = Fe.refreshOverflowKeys, vt = Fe.isSubPathKey, xt = Fe.getKeyPath, Ct = Fe.getKeys, $t = Fe.getSubPathKeys, Je = d.useMemo(function() {
    return {
      registerPath: ut,
      unregisterPath: Ze
    };
  }, [ut, Ze]), De = d.useMemo(function() {
    return {
      isSubPathKey: vt
    };
  }, [vt]);
  d.useEffect(function() {
    et(He ? Br : xe.slice(je + 1).map(function(Ot) {
      return Ot.key;
    }));
  }, [je, He]);
  var nt = $n(_ || R && ((n = xe[0]) === null || n === void 0 ? void 0 : n.key), {
    value: _
  }), ht = X(nt, 2), Ft = ht[0], Lt = ht[1], yn = va(function(Ot) {
    Lt(Ot);
  }), Tt = va(function() {
    Lt(void 0);
  });
  ys(t, function() {
    return {
      list: Le.current,
      focus: function(dt) {
        var St, rn = Ct(), Zt = gu(rn, qe), Er = Zt.elements, Lr = Zt.key2element, io = Zt.element2key, so = Id(Le.current, Er), co = Ft ?? (so[0] ? io.get(so[0]) : (St = xe.find(function(zr) {
          return !zr.props.disabled;
        })) === null || St === void 0 ? void 0 : St.key), sr = Lr.get(co);
        if (co && sr) {
          var vn;
          sr == null || (vn = sr.focus) === null || vn === void 0 || vn.call(sr, dt);
        }
      }
    };
  });
  var Cn = $n(k || [], {
    value: j,
    // Legacy convert key to array
    postState: function(dt) {
      return Array.isArray(dt) ? dt : dt == null ? Br : [dt];
    }
  }), ln = X(Cn, 2), pn = ln[0], ir = ln[1], Xn = function(dt) {
    if (I) {
      var St = dt.key, rn = pn.includes(St), Zt;
      M ? rn ? Zt = pn.filter(function(Lr) {
        return Lr !== St;
      }) : Zt = [].concat(he(pn), [St]) : Zt = [St], ir(Zt);
      var Er = B(B({}, dt), {}, {
        selectedKeys: Zt
      });
      rn ? H == null || H(Er) : T == null || T(Er);
    }
    !M && ve.length && Xe !== "inline" && ze(Br);
  }, un = va(function(Ot) {
    K == null || K(vs(Ot)), Xn(Ot);
  }), An = va(function(Ot, dt) {
    var St = ve.filter(function(Zt) {
      return Zt !== Ot;
    });
    if (dt)
      St.push(Ot);
    else if (Xe !== "inline") {
      var rn = $t(Ot);
      St = St.filter(function(Zt) {
        return !rn.has(Zt);
      });
    }
    La(ve, St, !0) || ze(St, !0);
  }), Qn = function(dt, St) {
    var rn = St ?? !ve.includes(dt);
    An(dt, rn);
  }, Yn = dP(Xe, Ft, Me, qe, Le, Ct, xt, Lt, Qn, ae);
  d.useEffect(function() {
    tt(!0);
  }, []);
  var Fr = d.useMemo(function() {
    return {
      _internalRenderMenuItem: fe,
      _internalRenderSubMenuItem: be
    };
  }, [fe, be]), Jo = Xe !== "horizontal" || E ? xe : (
    // Need wrap for overflow dropdown that do not response for open
    xe.map(function(Ot, dt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ d.createElement(qa, {
          key: Ot.key,
          overflowDisabled: dt > je
        }, Ot)
      );
    })
  ), ao = /* @__PURE__ */ d.createElement(pr, ye({
    id: g,
    ref: Le,
    prefixCls: "".concat(a, "-overflow"),
    component: "ul",
    itemComponent: qs,
    className: Q(a, "".concat(a, "-root"), "".concat(a, "-").concat(Xe), c, F(F({}, "".concat(a, "-inline-collapsed"), z), "".concat(a, "-rtl"), Me), i),
    dir: v,
    style: s,
    role: "menu",
    tabIndex: u,
    data: Jo,
    renderRawItem: function(dt) {
      return dt;
    },
    renderRawRest: function(dt) {
      var St = dt.length, rn = St ? xe.slice(-St) : null;
      return /* @__PURE__ */ d.createElement(Ks, {
        eventKey: hu,
        title: te,
        disabled: He,
        internalPopupClose: St === 0,
        popupClassName: ne
      }, rn);
    },
    maxCount: Xe !== "horizontal" || E ? pr.INVALIDATE : pr.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(dt) {
      Ke(dt);
    },
    onKeyDown: Yn
  }, Pe));
  return /* @__PURE__ */ d.createElement(Rd.Provider, {
    value: Fr
  }, /* @__PURE__ */ d.createElement(ib.Provider, {
    value: qe
  }, /* @__PURE__ */ d.createElement(qa, {
    prefixCls: a,
    rootClassName: i,
    mode: Xe,
    openKeys: ve,
    rtl: Me,
    disabled: S,
    motion: Ve ? V : null,
    defaultMotions: Ve ? L : null,
    activeKey: Ft,
    onActive: yn,
    onInactive: Tt,
    selectedKeys: pn,
    inlineIndent: U,
    subMenuOpenDelay: b,
    subMenuCloseDelay: x,
    forceSubMenuRender: N,
    builtinPlacements: Z,
    triggerSubMenuAction: W,
    getPopupContainer: ue,
    itemIcon: G,
    expandIcon: re,
    onItemClick: un,
    onOpenChange: An
  }, /* @__PURE__ */ d.createElement(db.Provider, {
    value: De
  }, ao), /* @__PURE__ */ d.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ d.createElement(lb.Provider, {
    value: Je
  }, Ne)))));
}), ci = FP;
ci.Item = qs;
ci.SubMenu = Ks;
ci.ItemGroup = Ad;
ci.Divider = hb;
var LP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" }, zP = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: LP
  }));
}, bb = /* @__PURE__ */ d.forwardRef(zP);
process.env.NODE_ENV !== "production" && (bb.displayName = "EllipsisOutlined");
function Gs(e) {
  return kt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const Xs = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: o,
    controlHeightSM: a,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: c,
    paddingSM: l,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: m,
    colorFillAlter: f,
    colorPrimaryHover: v,
    colorPrimary: g,
    controlOutlineWidth: y,
    controlOutline: p,
    colorErrorOutline: C,
    colorWarningOutline: S,
    colorBgContainer: E,
    inputFontSize: h,
    inputFontSizeLG: b,
    inputFontSizeSM: w
  } = e, x = h || n, N = w || x, $ = b || s, O = Math.round((t - x * r) / 2 * 10) / 10 - o, _ = Math.round((a - N * r) / 2 * 10) / 10 - o, R = Math.ceil((i - $ * c) / 2 * 10) / 10 - o;
  return {
    paddingBlock: Math.max(O, 0),
    paddingBlockSM: Math.max(_, 0),
    paddingBlockLG: Math.max(R, 0),
    paddingInline: l - o,
    paddingInlineSM: u - o,
    paddingInlineLG: m - o,
    addonBg: f,
    activeBorderColor: g,
    hoverBorderColor: v,
    activeShadow: `0 0 0 ${y}px ${p}`,
    errorActiveShadow: `0 0 0 ${y}px ${C}`,
    warningActiveShadow: `0 0 0 ${y}px ${S}`,
    hoverBg: E,
    activeBg: E,
    inputFontSize: x,
    inputFontSizeLG: $,
    inputFontSizeSM: N
  };
}, VP = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), kd = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, VP(kt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), yb = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), cp = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, yb(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), BP = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, yb(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, kd(e))
  }), cp(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), cp(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), lp = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), HP = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, lp(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), lp(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, kd(e))
    }
  })
}), WP = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${n}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${n}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${n}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Cb = (e, t) => {
  var n;
  return {
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: (n = t == null ? void 0 : t.inputColor) !== null && n !== void 0 ? n : "unset"
    },
    "&:hover": {
      background: t.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg
    }
  };
}, up = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Cb(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), UP = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Cb(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, kd(e))
  }), up(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), up(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), dp = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), qP = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group-addon`]: {
      background: e.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    }
  }, dp(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), dp(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Sb = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: `${oe(e.lineWidth)} 0`,
  borderStyle: `${e.lineType} none`,
  borderColor: `transparent transparent ${t.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${t.borderColor} transparent`,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), fp = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Sb(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${t.borderColor} transparent`
  }
}), KP = (e, t) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Sb(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    // >>>>> Disabled
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${e.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    }
  }), fp(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), fp(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), GP = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Eb = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${oe(t)} ${oe(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, wb = (e) => ({
  padding: `${oe(e.paddingBlockSM)} ${oe(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), xb = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${oe(e.paddingBlock)} ${oe(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, GP(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, Eb(e)),
  "&-sm": Object.assign({}, wb(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), XP = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Eb(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, wb(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${oe(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${oe(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${oe(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${oe(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${oe(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, no()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, QP = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: o
  } = e, i = o(n).sub(o(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Kn(e)), xb(e)), BP(e)), UP(e)), WP(e)), KP(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    })
  };
}, YP = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: e.colorIcon
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${oe(e.inputAffixPadding)}`
      }
    }
  };
}, ZP = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: o,
    colorIcon: a,
    colorIconHover: i,
    iconCls: s
  } = e, c = `${t}-affix-wrapper`, l = `${t}-affix-wrapper-disabled`;
  return {
    [c]: Object.assign(Object.assign(Object.assign(Object.assign({}, xb(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), YP(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: a,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: i
        }
      }
    }),
    // 覆盖 affix-wrapper borderRadius！
    [`${t}-underlined`]: {
      borderRadius: 0
    },
    [l]: {
      // password disabled
      [`${s}${t}-password-icon`]: {
        color: a,
        cursor: "not-allowed",
        "&:hover": {
          color: a
        }
      }
    }
  };
}, JP = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Kn(e)), XP(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, HP(e)), qP(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      })
    })
  };
}, eR = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [t]: {
        "&:hover, &:focus": {
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-color-primary):not(${n}-btn-variant-text)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-color-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              inset: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, tR = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, $b = bn(["Input", "Shared"], (e) => {
  const t = kt(e, Gs(e));
  return [QP(t), ZP(t)];
}, Xs, {
  resetFont: !1
}), Ob = bn(["Input", "Component"], (e) => {
  const t = kt(e, Gs(e));
  return [
    JP(t),
    eR(t),
    tR(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Ih(t)
  ];
}, Xs, {
  resetFont: !1
});
var Nb = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, nR = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: Nb
  }));
}, _b = /* @__PURE__ */ d.forwardRef(nR);
process.env.NODE_ENV !== "production" && (_b.displayName = "PlusOutlined");
const Qs = /* @__PURE__ */ Xa(null);
var rR = function(t) {
  var n = t.activeTabOffset, r = t.horizontal, o = t.rtl, a = t.indicator, i = a === void 0 ? {} : a, s = i.size, c = i.align, l = c === void 0 ? "center" : c, u = ct(), m = X(u, 2), f = m[0], v = m[1], g = we(), y = Y.useCallback(function(C) {
    return typeof s == "function" ? s(C) : typeof s == "number" ? s : C;
  }, [s]);
  function p() {
    Kt.cancel(g.current);
  }
  return Ge(function() {
    var C = {};
    if (n)
      if (r) {
        C.width = y(n.width);
        var S = o ? "right" : "left";
        l === "start" && (C[S] = n[S]), l === "center" && (C[S] = n[S] + n.width / 2, C.transform = o ? "translateX(50%)" : "translateX(-50%)"), l === "end" && (C[S] = n[S] + n.width, C.transform = "translateX(-100%)");
      } else
        C.height = y(n.height), l === "start" && (C.top = n.top), l === "center" && (C.top = n.top + n.height / 2, C.transform = "translateY(-50%)"), l === "end" && (C.top = n.top + n.height, C.transform = "translateY(-100%)");
    return p(), g.current = Kt(function() {
      var E = f && C && Object.keys(C).every(function(h) {
        var b = C[h], w = f[h];
        return typeof b == "number" && typeof w == "number" ? Math.round(b) === Math.round(w) : b === w;
      });
      E || v(C);
    }), p;
  }, [JSON.stringify(n), r, o, l, y]), {
    style: f
  };
}, mp = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function oR(e, t, n) {
  return Nt(function() {
    for (var r, o = /* @__PURE__ */ new Map(), a = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || mp, i = a.left + a.width, s = 0; s < e.length; s += 1) {
      var c = e[s].key, l = t.get(c);
      if (!l) {
        var u;
        l = t.get((u = e[s - 1]) === null || u === void 0 ? void 0 : u.key) || mp;
      }
      var m = o.get(c) || B({}, l);
      m.right = i - m.left - m.width, o.set(c, m);
    }
    return o;
  }, [e.map(function(r) {
    return r.key;
  }).join("_"), t, n]);
}
function pp(e, t) {
  var n = d.useRef(e), r = d.useState({}), o = X(r, 2), a = o[1];
  function i(s) {
    var c = typeof s == "function" ? s(n.current) : s;
    c !== n.current && t(c, n.current), n.current = c, a({});
  }
  return [n.current, i];
}
var aR = 0.1, vp = 0.01, Xi = 20, gp = Math.pow(0.995, Xi);
function iR(e, t) {
  var n = ct(), r = X(n, 2), o = r[0], a = r[1], i = ct(0), s = X(i, 2), c = s[0], l = s[1], u = ct(0), m = X(u, 2), f = m[0], v = m[1], g = ct(), y = X(g, 2), p = y[0], C = y[1], S = we();
  function E($) {
    var O = $.touches[0], _ = O.screenX, R = O.screenY;
    a({
      x: _,
      y: R
    }), window.clearInterval(S.current);
  }
  function h($) {
    if (o) {
      var O = $.touches[0], _ = O.screenX, R = O.screenY;
      a({
        x: _,
        y: R
      });
      var P = _ - o.x, I = R - o.y;
      t(P, I);
      var D = Date.now();
      l(D), v(D - c), C({
        x: P,
        y: I
      });
    }
  }
  function b() {
    if (o && (a(null), C(null), p)) {
      var $ = p.x / f, O = p.y / f, _ = Math.abs($), R = Math.abs(O);
      if (Math.max(_, R) < aR) return;
      var P = $, I = O;
      S.current = window.setInterval(function() {
        if (Math.abs(P) < vp && Math.abs(I) < vp) {
          window.clearInterval(S.current);
          return;
        }
        P *= gp, I *= gp, t(P * Xi, I * Xi);
      }, Xi);
    }
  }
  var w = we();
  function x($) {
    var O = $.deltaX, _ = $.deltaY, R = 0, P = Math.abs(O), I = Math.abs(_);
    P === I ? R = w.current === "x" ? O : _ : P > I ? (R = O, w.current = "x") : (R = _, w.current = "y"), t(-R, -R) && $.preventDefault();
  }
  var N = we(null);
  N.current = {
    onTouchStart: E,
    onTouchMove: h,
    onTouchEnd: b,
    onWheel: x
  }, d.useEffect(function() {
    function $(P) {
      N.current.onTouchStart(P);
    }
    function O(P) {
      N.current.onTouchMove(P);
    }
    function _(P) {
      N.current.onTouchEnd(P);
    }
    function R(P) {
      N.current.onWheel(P);
    }
    return document.addEventListener("touchmove", O, {
      passive: !1
    }), document.addEventListener("touchend", _, {
      passive: !0
    }), e.current.addEventListener("touchstart", $, {
      passive: !0
    }), e.current.addEventListener("wheel", R, {
      passive: !1
    }), function() {
      document.removeEventListener("touchmove", O), document.removeEventListener("touchend", _);
    };
  }, []);
}
function Pb(e) {
  var t = ct(0), n = X(t, 2), r = n[0], o = n[1], a = we(0), i = we();
  return i.current = e, xl(function() {
    var s;
    (s = i.current) === null || s === void 0 || s.call(i);
  }, [r]), function() {
    a.current === r && (a.current += 1, o(a.current));
  };
}
function sR(e) {
  var t = we([]), n = ct({}), r = X(n, 2), o = r[1], a = we(typeof e == "function" ? e() : e), i = Pb(function() {
    var c = a.current;
    t.current.forEach(function(l) {
      c = l(c);
    }), t.current = [], a.current = c, o({});
  });
  function s(c) {
    t.current.push(c), i();
  }
  return [a.current, s];
}
var hp = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function cR(e, t, n, r, o, a, i) {
  var s = i.tabs, c = i.tabPosition, l = i.rtl, u, m, f;
  return ["top", "bottom"].includes(c) ? (u = "width", m = l ? "right" : "left", f = Math.abs(n)) : (u = "height", m = "top", f = -n), Nt(function() {
    if (!s.length)
      return [0, 0];
    for (var v = s.length, g = v, y = 0; y < v; y += 1) {
      var p = e.get(s[y].key) || hp;
      if (Math.floor(p[m] + p[u]) > Math.floor(f + t)) {
        g = y - 1;
        break;
      }
    }
    for (var C = 0, S = v - 1; S >= 0; S -= 1) {
      var E = e.get(s[S].key) || hp;
      if (E[m] < f) {
        C = S + 1;
        break;
      }
    }
    return C >= g ? [0, 0] : [C, g];
  }, [e, t, r, o, a, f, c, s.map(function(v) {
    return v.key;
  }).join("_"), l]);
}
function bp(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(n, r) {
    t[r] = n;
  })) : t = e, JSON.stringify(t);
}
var lR = "TABS_DQ";
function Rb(e) {
  return String(e).replace(/"/g, lR);
}
function jd(e, t, n, r) {
  return (
    // Only editable tabs can be removed
    !(!n || // Tabs cannot be removed when disabled
    r || // closable is false
    e === !1 || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    e === void 0 && (t === !1 || t === null))
  );
}
var Ib = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.editable, o = e.locale, a = e.style;
  return !r || r.showAdd === !1 ? null : /* @__PURE__ */ d.createElement("button", {
    ref: t,
    type: "button",
    className: "".concat(n, "-nav-add"),
    style: a,
    "aria-label": (o == null ? void 0 : o.addAriaLabel) || "Add tab",
    onClick: function(s) {
      r.onEdit("add", {
        event: s
      });
    }
  }, r.addIcon || "+");
}), yu = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.position, r = e.prefixCls, o = e.extra;
  if (!o)
    return null;
  var a, i = {};
  return Re(o) === "object" && !/* @__PURE__ */ d.isValidElement(o) ? i = o : i.right = o, n === "right" && (a = i.right), n === "left" && (a = i.left), a ? /* @__PURE__ */ d.createElement("div", {
    className: "".concat(r, "-extra-content"),
    ref: t
  }, a) : null;
});
process.env.NODE_ENV !== "production" && (yu.displayName = "ExtraContent");
var uR = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.id, o = e.tabs, a = e.locale, i = e.mobile, s = e.more, c = s === void 0 ? {} : s, l = e.style, u = e.className, m = e.editable, f = e.tabBarGutter, v = e.rtl, g = e.removeAriaLabel, y = e.onTabClick, p = e.getPopupContainer, C = e.popupClassName, S = ct(!1), E = X(S, 2), h = E[0], b = E[1], w = ct(null), x = X(w, 2), N = x[0], $ = x[1], O = c.icon, _ = O === void 0 ? "More" : O, R = "".concat(r, "-more-popup"), P = "".concat(n, "-dropdown"), I = N !== null ? "".concat(R, "-").concat(N) : null, D = a == null ? void 0 : a.dropdownAriaLabel;
  function M(V, L) {
    V.preventDefault(), V.stopPropagation(), m.onEdit("remove", {
      key: L,
      event: V
    });
  }
  var k = /* @__PURE__ */ d.createElement(ci, {
    onClick: function(L) {
      var A = L.key, W = L.domEvent;
      y(A, W), b(!1);
    },
    prefixCls: "".concat(P, "-menu"),
    id: R,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": I,
    selectedKeys: [N],
    "aria-label": D !== void 0 ? D : "expanded dropdown"
  }, o.map(function(V) {
    var L = V.closable, A = V.disabled, W = V.closeIcon, Z = V.key, G = V.label, re = jd(L, W, m, A);
    return /* @__PURE__ */ d.createElement(qs, {
      key: Z,
      id: "".concat(R, "-").concat(Z),
      role: "option",
      "aria-controls": r && "".concat(r, "-panel-").concat(Z),
      disabled: A
    }, /* @__PURE__ */ d.createElement("span", null, G), re && /* @__PURE__ */ d.createElement("button", {
      type: "button",
      "aria-label": g || "remove",
      tabIndex: 0,
      className: "".concat(P, "-menu-item-remove"),
      onClick: function(te) {
        te.stopPropagation(), M(te, Z);
      }
    }, W || m.removeIcon || "×"));
  }));
  function j(V) {
    for (var L = o.filter(function(re) {
      return !re.disabled;
    }), A = L.findIndex(function(re) {
      return re.key === N;
    }) || 0, W = L.length, Z = 0; Z < W; Z += 1) {
      A = (A + V + W) % W;
      var G = L[A];
      if (!G.disabled) {
        $(G.key);
        return;
      }
    }
  }
  function T(V) {
    var L = V.which;
    if (!h) {
      [Ee.DOWN, Ee.SPACE, Ee.ENTER].includes(L) && (b(!0), V.preventDefault());
      return;
    }
    switch (L) {
      case Ee.UP:
        j(-1), V.preventDefault();
        break;
      case Ee.DOWN:
        j(1), V.preventDefault();
        break;
      case Ee.ESC:
        b(!1);
        break;
      case Ee.SPACE:
      case Ee.ENTER:
        N !== null && y(N, V);
        break;
    }
  }
  Ge(function() {
    var V = document.getElementById(I);
    V && V.scrollIntoView && V.scrollIntoView(!1);
  }, [N]), Ge(function() {
    h || $(null);
  }, [h]);
  var H = F({}, v ? "marginRight" : "marginLeft", f);
  o.length || (H.visibility = "hidden", H.order = 1);
  var q = Q(F({}, "".concat(P, "-rtl"), v)), U = i ? null : /* @__PURE__ */ d.createElement(rP, ye({
    prefixCls: P,
    overlay: k,
    visible: o.length ? h : !1,
    onVisibleChange: b,
    overlayClassName: Q(q, C),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: p
  }, c), /* @__PURE__ */ d.createElement("button", {
    type: "button",
    className: "".concat(n, "-nav-more"),
    style: H,
    "aria-haspopup": "listbox",
    "aria-controls": R,
    id: "".concat(r, "-more"),
    "aria-expanded": h,
    onKeyDown: T
  }, _));
  return /* @__PURE__ */ d.createElement("div", {
    className: Q("".concat(n, "-nav-operations"), u),
    style: l,
    ref: t
  }, U, /* @__PURE__ */ d.createElement(Ib, {
    prefixCls: n,
    locale: a,
    editable: m
  }));
});
const dR = /* @__PURE__ */ d.memo(uR, function(e, t) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    t.tabMoving
  );
});
var fR = function(t) {
  var n = t.prefixCls, r = t.id, o = t.active, a = t.focus, i = t.tab, s = i.key, c = i.label, l = i.disabled, u = i.closeIcon, m = i.icon, f = t.closable, v = t.renderWrapper, g = t.removeAriaLabel, y = t.editable, p = t.onClick, C = t.onFocus, S = t.onBlur, E = t.onKeyDown, h = t.onMouseDown, b = t.onMouseUp, w = t.style, x = t.tabCount, N = t.currentPosition, $ = "".concat(n, "-tab"), O = jd(f, u, y, l);
  function _(M) {
    l || p(M);
  }
  function R(M) {
    M.preventDefault(), M.stopPropagation(), y.onEdit("remove", {
      key: s,
      event: M
    });
  }
  var P = d.useMemo(function() {
    return m && typeof c == "string" ? /* @__PURE__ */ d.createElement("span", null, c) : c;
  }, [c, m]), I = d.useRef(null);
  d.useEffect(function() {
    a && I.current && I.current.focus();
  }, [a]);
  var D = /* @__PURE__ */ d.createElement("div", {
    key: s,
    "data-node-key": Rb(s),
    className: Q($, F(F(F(F({}, "".concat($, "-with-remove"), O), "".concat($, "-active"), o), "".concat($, "-disabled"), l), "".concat($, "-focus"), a)),
    style: w,
    onClick: _
  }, /* @__PURE__ */ d.createElement("div", {
    ref: I,
    role: "tab",
    "aria-selected": o,
    id: r && "".concat(r, "-tab-").concat(s),
    className: "".concat($, "-btn"),
    "aria-controls": r && "".concat(r, "-panel-").concat(s),
    "aria-disabled": l,
    tabIndex: l ? null : o ? 0 : -1,
    onClick: function(k) {
      k.stopPropagation(), _(k);
    },
    onKeyDown: E,
    onMouseDown: h,
    onMouseUp: b,
    onFocus: C,
    onBlur: S
  }, a && /* @__PURE__ */ d.createElement("div", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "Tab ".concat(N, " of ").concat(x)), m && /* @__PURE__ */ d.createElement("span", {
    className: "".concat($, "-icon")
  }, m), c && P), O && /* @__PURE__ */ d.createElement("button", {
    type: "button",
    role: "tab",
    "aria-label": g || "remove",
    tabIndex: o ? 0 : -1,
    className: "".concat($, "-remove"),
    onClick: function(k) {
      k.stopPropagation(), R(k);
    }
  }, u || y.removeIcon || "×"));
  return v ? v(D) : D;
}, mR = function(t, n) {
  var r = t.offsetWidth, o = t.offsetHeight, a = t.offsetTop, i = t.offsetLeft, s = t.getBoundingClientRect(), c = s.width, l = s.height, u = s.left, m = s.top;
  return Math.abs(c - r) < 1 ? [c, l, u - n.left, m - n.top] : [r, o, i, a];
}, So = function(t) {
  var n = t.current || {}, r = n.offsetWidth, o = r === void 0 ? 0 : r, a = n.offsetHeight, i = a === void 0 ? 0 : a;
  if (t.current) {
    var s = t.current.getBoundingClientRect(), c = s.width, l = s.height;
    if (Math.abs(c - o) < 1)
      return [c, l];
  }
  return [o, i];
}, Ti = function(t, n) {
  return t[n ? 0 : 1];
}, yp = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.className, r = e.style, o = e.id, a = e.animated, i = e.activeKey, s = e.rtl, c = e.extra, l = e.editable, u = e.locale, m = e.tabPosition, f = e.tabBarGutter, v = e.children, g = e.onTabClick, y = e.onTabScroll, p = e.indicator, C = d.useContext(Qs), S = C.prefixCls, E = C.tabs, h = we(null), b = we(null), w = we(null), x = we(null), N = we(null), $ = we(null), O = we(null), _ = m === "top" || m === "bottom", R = pp(0, function(Je, De) {
    _ && y && y({
      direction: Je > De ? "left" : "right"
    });
  }), P = X(R, 2), I = P[0], D = P[1], M = pp(0, function(Je, De) {
    !_ && y && y({
      direction: Je > De ? "top" : "bottom"
    });
  }), k = X(M, 2), j = k[0], T = k[1], H = ct([0, 0]), q = X(H, 2), U = q[0], V = q[1], L = ct([0, 0]), A = X(L, 2), W = A[0], Z = A[1], G = ct([0, 0]), re = X(G, 2), J = re[0], te = re[1], ne = ct([0, 0]), ue = X(ne, 2), K = ue[0], de = ue[1], ae = sR(/* @__PURE__ */ new Map()), pe = X(ae, 2), Ce = pe[0], fe = pe[1], be = oR(E, Ce, W[0]), me = Ti(U, _), Pe = Ti(W, _), $e = Ti(J, _), ce = Ti(K, _), xe = Math.floor(me) < Math.floor(Pe + $e), Ne = xe ? me - ce : me - $e, rt = "".concat(S, "-nav-operations-hidden"), Ue = 0, Ve = 0;
  _ && s ? (Ue = 0, Ve = Math.max(0, Pe - Ne)) : (Ue = Math.min(0, Ne - Pe), Ve = 0);
  function tt(Je) {
    return Je < Ue ? Ue : Je > Ve ? Ve : Je;
  }
  var Le = we(null), qe = ct(), Me = X(qe, 2), ie = Me[0], Se = Me[1];
  function ve() {
    Se(Date.now());
  }
  function ge() {
    Le.current && clearTimeout(Le.current);
  }
  iR(x, function(Je, De) {
    function nt(ht, Ft) {
      ht(function(Lt) {
        var yn = tt(Lt + Ft);
        return yn;
      });
    }
    return xe ? (_ ? nt(D, Je) : nt(T, De), ge(), ve(), !0) : !1;
  }), Ge(function() {
    return ge(), ie && (Le.current = setTimeout(function() {
      Se(0);
    }, 100)), ge;
  }, [ie]);
  var ze = cR(
    be,
    // Container
    Ne,
    // Transform
    _ ? I : j,
    // Tabs
    Pe,
    // Add
    $e,
    // Operation
    ce,
    B(B({}, e), {}, {
      tabs: E
    })
  ), lt = X(ze, 2), _t = lt[0], gt = lt[1], Pt = Ut(function() {
    var Je = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i, De = be.get(Je) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (_) {
      var nt = I;
      s ? De.right < I ? nt = De.right : De.right + De.width > I + Ne && (nt = De.right + De.width - Ne) : De.left < -I ? nt = -De.left : De.left + De.width > -I + Ne && (nt = -(De.left + De.width - Ne)), T(0), D(tt(nt));
    } else {
      var ht = j;
      De.top < -j ? ht = -De.top : De.top + De.height > -j + Ne && (ht = -(De.top + De.height - Ne)), D(0), T(tt(ht));
    }
  }), Ht = ct(), Rt = X(Ht, 2), ot = Rt[0], Ye = Rt[1], Te = ct(!1), ke = X(Te, 2), Ie = ke[0], Be = ke[1], Xe = E.filter(function(Je) {
    return !Je.disabled;
  }).map(function(Je) {
    return Je.key;
  }), jt = function(De) {
    var nt = Xe.indexOf(ot || i), ht = Xe.length, Ft = (nt + De + ht) % ht, Lt = Xe[Ft];
    Ye(Lt);
  }, at = function(De) {
    var nt = De.code, ht = s && _, Ft = Xe[0], Lt = Xe[Xe.length - 1];
    switch (nt) {
      case "ArrowLeft": {
        _ && jt(ht ? 1 : -1);
        break;
      }
      case "ArrowRight": {
        _ && jt(ht ? -1 : 1);
        break;
      }
      case "ArrowUp": {
        De.preventDefault(), _ || jt(-1);
        break;
      }
      case "ArrowDown": {
        De.preventDefault(), _ || jt(1);
        break;
      }
      case "Home": {
        De.preventDefault(), Ye(Ft);
        break;
      }
      case "End": {
        De.preventDefault(), Ye(Lt);
        break;
      }
      case "Enter":
      case "Space": {
        De.preventDefault(), g(ot ?? i, De);
        break;
      }
      case "Backspace":
      case "Delete": {
        var yn = Xe.indexOf(ot), Tt = E.find(function(ln) {
          return ln.key === ot;
        }), Cn = jd(Tt == null ? void 0 : Tt.closable, Tt == null ? void 0 : Tt.closeIcon, l, Tt == null ? void 0 : Tt.disabled);
        Cn && (De.preventDefault(), De.stopPropagation(), l.onEdit("remove", {
          key: ot,
          event: De
        }), yn === Xe.length - 1 ? jt(-1) : jt(1));
        break;
      }
    }
  }, nn = {};
  _ ? nn[s ? "marginRight" : "marginLeft"] = f : nn.marginTop = f;
  var z = E.map(function(Je, De) {
    var nt = Je.key;
    return /* @__PURE__ */ d.createElement(fR, {
      id: o,
      prefixCls: S,
      key: nt,
      tab: Je,
      style: De === 0 ? void 0 : nn,
      closable: Je.closable,
      editable: l,
      active: nt === i,
      focus: nt === ot,
      renderWrapper: v,
      removeAriaLabel: u == null ? void 0 : u.removeAriaLabel,
      tabCount: Xe.length,
      currentPosition: De + 1,
      onClick: function(Ft) {
        g(nt, Ft);
      },
      onKeyDown: at,
      onFocus: function() {
        Ie || Ye(nt), Pt(nt), ve(), x.current && (s || (x.current.scrollLeft = 0), x.current.scrollTop = 0);
      },
      onBlur: function() {
        Ye(void 0);
      },
      onMouseDown: function() {
        Be(!0);
      },
      onMouseUp: function() {
        Be(!1);
      }
    });
  }), ee = function() {
    return fe(function() {
      var De, nt = /* @__PURE__ */ new Map(), ht = (De = N.current) === null || De === void 0 ? void 0 : De.getBoundingClientRect();
      return E.forEach(function(Ft) {
        var Lt, yn = Ft.key, Tt = (Lt = N.current) === null || Lt === void 0 ? void 0 : Lt.querySelector('[data-node-key="'.concat(Rb(yn), '"]'));
        if (Tt) {
          var Cn = mR(Tt, ht), ln = X(Cn, 4), pn = ln[0], ir = ln[1], Xn = ln[2], un = ln[3];
          nt.set(yn, {
            width: pn,
            height: ir,
            left: Xn,
            top: un
          });
        }
      }), nt;
    });
  };
  Ge(function() {
    ee();
  }, [E.map(function(Je) {
    return Je.key;
  }).join("_")]);
  var se = Pb(function() {
    var Je = So(h), De = So(b), nt = So(w);
    V([Je[0] - De[0] - nt[0], Je[1] - De[1] - nt[1]]);
    var ht = So(O);
    te(ht);
    var Ft = So($);
    de(Ft);
    var Lt = So(N);
    Z([Lt[0] - ht[0], Lt[1] - ht[1]]), ee();
  }), Oe = E.slice(0, _t), je = E.slice(gt + 1), Ke = [].concat(he(Oe), he(je)), He = be.get(i), Fe = rR({
    activeTabOffset: He,
    horizontal: _,
    indicator: p,
    rtl: s
  }), ut = Fe.style;
  Ge(function() {
    Pt();
  }, [i, Ue, Ve, bp(He), bp(be), _]), Ge(function() {
    se();
  }, [s]);
  var Ze = !!Ke.length, et = "".concat(S, "-nav-wrap"), vt, xt, Ct, $t;
  return _ ? s ? (xt = I > 0, vt = I !== Ve) : (vt = I < 0, xt = I !== Ue) : (Ct = j < 0, $t = j !== Ue), /* @__PURE__ */ d.createElement(zn, {
    onResize: se
  }, /* @__PURE__ */ d.createElement("div", {
    ref: Ho(t, h),
    role: "tablist",
    "aria-orientation": _ ? "horizontal" : "vertical",
    className: Q("".concat(S, "-nav"), n),
    style: r,
    onKeyDown: function() {
      ve();
    }
  }, /* @__PURE__ */ d.createElement(yu, {
    ref: b,
    position: "left",
    extra: c,
    prefixCls: S
  }), /* @__PURE__ */ d.createElement(zn, {
    onResize: se
  }, /* @__PURE__ */ d.createElement("div", {
    className: Q(et, F(F(F(F({}, "".concat(et, "-ping-left"), vt), "".concat(et, "-ping-right"), xt), "".concat(et, "-ping-top"), Ct), "".concat(et, "-ping-bottom"), $t)),
    ref: x
  }, /* @__PURE__ */ d.createElement(zn, {
    onResize: se
  }, /* @__PURE__ */ d.createElement("div", {
    ref: N,
    className: "".concat(S, "-nav-list"),
    style: {
      transform: "translate(".concat(I, "px, ").concat(j, "px)"),
      transition: ie ? "none" : void 0
    }
  }, z, /* @__PURE__ */ d.createElement(Ib, {
    ref: O,
    prefixCls: S,
    locale: u,
    editable: l,
    style: B(B({}, z.length === 0 ? void 0 : nn), {}, {
      visibility: Ze ? "hidden" : null
    })
  }), /* @__PURE__ */ d.createElement("div", {
    className: Q("".concat(S, "-ink-bar"), F({}, "".concat(S, "-ink-bar-animated"), a.inkBar)),
    style: ut
  }))))), /* @__PURE__ */ d.createElement(dR, ye({}, e, {
    removeAriaLabel: u == null ? void 0 : u.removeAriaLabel,
    ref: $,
    prefixCls: S,
    tabs: Ke,
    className: !Ze && rt,
    tabMoving: !!ie
  })), /* @__PURE__ */ d.createElement(yu, {
    ref: w,
    position: "right",
    extra: c,
    prefixCls: S
  })));
}), Fd = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, o = e.style, a = e.id, i = e.active, s = e.tabKey, c = e.children;
  return /* @__PURE__ */ d.createElement("div", {
    id: a && "".concat(a, "-panel-").concat(s),
    role: "tabpanel",
    tabIndex: i ? 0 : -1,
    "aria-labelledby": a && "".concat(a, "-tab-").concat(s),
    "aria-hidden": !i,
    style: o,
    className: Q(n, i && "".concat(n, "-active"), r),
    ref: t
  }, c);
});
process.env.NODE_ENV !== "production" && (Fd.displayName = "TabPane");
var pR = ["renderTabBar"], vR = ["label", "key"], Mb = function(t) {
  var n = t.renderTabBar, r = Qe(t, pR), o = d.useContext(Qs), a = o.tabs;
  if (n) {
    var i = B(B({}, r), {}, {
      // Legacy support. We do not use this actually
      panes: a.map(function(s) {
        var c = s.label, l = s.key, u = Qe(s, vR);
        return /* @__PURE__ */ d.createElement(Fd, ye({
          tab: c,
          key: l,
          tabKey: l
        }, u));
      })
    });
    return n(i, yp);
  }
  return /* @__PURE__ */ d.createElement(yp, r);
};
process.env.NODE_ENV !== "production" && (Mb.displayName = "TabNavListWrapper");
var gR = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"], hR = function(t) {
  var n = t.id, r = t.activeKey, o = t.animated, a = t.tabPosition, i = t.destroyInactiveTabPane, s = d.useContext(Qs), c = s.prefixCls, l = s.tabs, u = o.tabPane, m = "".concat(c, "-tabpane");
  return /* @__PURE__ */ d.createElement("div", {
    className: Q("".concat(c, "-content-holder"))
  }, /* @__PURE__ */ d.createElement("div", {
    className: Q("".concat(c, "-content"), "".concat(c, "-content-").concat(a), F({}, "".concat(c, "-content-animated"), u))
  }, l.map(function(f) {
    var v = f.key, g = f.forceRender, y = f.style, p = f.className, C = f.destroyInactiveTabPane, S = Qe(f, gR), E = v === r;
    return /* @__PURE__ */ d.createElement(Sr, ye({
      key: v,
      visible: E,
      forceRender: g,
      removeOnLeave: !!(i || C),
      leavedClassName: "".concat(m, "-hidden")
    }, o.tabPaneMotion), function(h, b) {
      var w = h.style, x = h.className;
      return /* @__PURE__ */ d.createElement(Fd, ye({}, S, {
        prefixCls: m,
        id: n,
        tabKey: v,
        animated: u,
        active: E,
        style: B(B({}, y), w),
        className: Q(p, x),
        ref: b
      }));
    });
  })));
};
function bR() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    inkBar: !0,
    tabPane: !1
  }, t;
  return e === !1 ? t = {
    inkBar: !1,
    tabPane: !1
  } : e === !0 ? t = {
    inkBar: !0,
    tabPane: !1
  } : t = B({
    inkBar: !0
  }, Re(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (process.env.NODE_ENV !== "production" && pt(!1, "`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work."), t.tabPane = !1), t;
}
var yR = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "more", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"], Cp = 0, Tb = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.id, r = e.prefixCls, o = r === void 0 ? "rc-tabs" : r, a = e.className, i = e.items, s = e.direction, c = e.activeKey, l = e.defaultActiveKey, u = e.editable, m = e.animated, f = e.tabPosition, v = f === void 0 ? "top" : f, g = e.tabBarGutter, y = e.tabBarStyle, p = e.tabBarExtraContent, C = e.locale, S = e.more, E = e.destroyInactiveTabPane, h = e.renderTabBar, b = e.onChange, w = e.onTabClick, x = e.onTabScroll, N = e.getPopupContainer, $ = e.popupClassName, O = e.indicator, _ = Qe(e, yR), R = d.useMemo(function() {
    return (i || []).filter(function(K) {
      return K && Re(K) === "object" && "key" in K;
    });
  }, [i]), P = s === "rtl", I = bR(m), D = ct(!1), M = X(D, 2), k = M[0], j = M[1];
  Ge(function() {
    j(Vh());
  }, []);
  var T = $n(function() {
    var K;
    return (K = R[0]) === null || K === void 0 ? void 0 : K.key;
  }, {
    value: c,
    defaultValue: l
  }), H = X(T, 2), q = H[0], U = H[1], V = ct(function() {
    return R.findIndex(function(K) {
      return K.key === q;
    });
  }), L = X(V, 2), A = L[0], W = L[1];
  Ge(function() {
    var K = R.findIndex(function(ae) {
      return ae.key === q;
    });
    if (K === -1) {
      var de;
      K = Math.max(0, Math.min(A, R.length - 1)), U((de = R[K]) === null || de === void 0 ? void 0 : de.key);
    }
    W(K);
  }, [R.map(function(K) {
    return K.key;
  }).join("_"), q, A]);
  var Z = $n(null, {
    value: n
  }), G = X(Z, 2), re = G[0], J = G[1];
  Ge(function() {
    n || (J("rc-tabs-".concat(process.env.NODE_ENV === "test" ? "test" : Cp)), Cp += 1);
  }, []);
  function te(K, de) {
    w == null || w(K, de);
    var ae = K !== q;
    U(K), ae && (b == null || b(K));
  }
  var ne = {
    id: re,
    activeKey: q,
    animated: I,
    tabPosition: v,
    rtl: P,
    mobile: k
  }, ue = B(B({}, ne), {}, {
    editable: u,
    locale: C,
    more: S,
    tabBarGutter: g,
    onTabClick: te,
    onTabScroll: x,
    extra: p,
    style: y,
    panes: null,
    getPopupContainer: N,
    popupClassName: $,
    indicator: O
  });
  return /* @__PURE__ */ d.createElement(Qs.Provider, {
    value: {
      tabs: R,
      prefixCls: o
    }
  }, /* @__PURE__ */ d.createElement("div", ye({
    ref: t,
    id: n,
    className: Q(o, "".concat(o, "-").concat(v), F(F(F({}, "".concat(o, "-mobile"), k), "".concat(o, "-editable"), u), "".concat(o, "-rtl"), P), a)
  }, _), /* @__PURE__ */ d.createElement(Mb, ye({}, ue, {
    renderTabBar: h
  })), /* @__PURE__ */ d.createElement(hR, ye({
    destroyInactiveTabPane: E
  }, ne, {
    animated: I
  }))));
});
process.env.NODE_ENV !== "production" && (Tb.displayName = "Tabs");
const CR = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function SR(e, t = {
  inkBar: !0,
  tabPane: !1
}) {
  let n;
  return t === !1 ? n = {
    inkBar: !1,
    tabPane: !1
  } : t === !0 ? n = {
    inkBar: !0,
    tabPane: !0
  } : n = Object.assign({
    inkBar: !0
  }, typeof t == "object" ? t : {}), n.tabPane && (n.tabPaneMotion = Object.assign(Object.assign({}, CR), {
    motionName: gd(e, "switch")
  })), n;
}
var ER = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function wR(e) {
  return e.filter((t) => t);
}
function xR(e, t) {
  if (process.env.NODE_ENV !== "production" && At("Tabs").deprecated(!t, "Tabs.TabPane", "items"), e)
    return e.map((r) => {
      var o;
      const a = (o = r.destroyOnHidden) !== null && o !== void 0 ? o : r.destroyInactiveTabPane;
      return Object.assign(Object.assign({}, r), {
        // TODO: In the future, destroyInactiveTabPane in rc-tabs needs to be upgrade to destroyOnHidden
        destroyInactiveTabPane: a
      });
    });
  const n = Zr(t).map((r) => {
    if (/* @__PURE__ */ d.isValidElement(r)) {
      const {
        key: o,
        props: a
      } = r, i = a || {}, {
        tab: s
      } = i, c = ER(i, ["tab"]);
      return Object.assign(Object.assign({
        key: String(o)
      }, c), {
        label: s
      });
    }
    return null;
  });
  return wR(n);
}
const $R = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n
  } = e;
  return [
    {
      [t]: {
        [`${t}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${n}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${n}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [_m(e, "slide-up"), _m(e, "slide-down")]
  ];
}, OR = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardBg: r,
    cardGutter: o,
    colorBorderSecondary: a,
    itemSelectedColor: i
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: n,
          background: r,
          border: `${oe(e.lineWidth)} ${e.lineType} ${a}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${t}-tab-active`]: {
          color: i,
          background: e.colorBgContainer
        },
        [`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]: ld(e, -3),
        [`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]: {
          outline: "none"
        },
        [`${t}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${t}-top, &${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: oe(o)
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)} 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)}`
          },
          [`${t}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${t}-left, &${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginTop: oe(o)
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${oe(e.borderRadiusLG)} 0 0 ${oe(e.borderRadiusLG)}`
            }
          },
          [`${t}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)} 0`
            }
          },
          [`${t}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, NR = (e) => {
  const {
    componentCls: t,
    itemHoverColor: n,
    dropdownEdgeChildVerticalPadding: r
  } = e;
  return {
    [`${t}-dropdown`]: Object.assign(Object.assign({}, Kn(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${t}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${oe(r)} 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": Object.assign(Object.assign({}, ni), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${oe(e.paddingXXS)} ${oe(e.paddingSM)}`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorIcon,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: n
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, _R = (e) => {
  const {
    componentCls: t,
    margin: n,
    colorBorderSecondary: r,
    horizontalMargin: o,
    verticalItemPadding: a,
    verticalItemMargin: i,
    calc: s
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: o,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${r}`,
          content: "''"
        },
        [`${t}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${t}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${t}-top`]: {
      [`> ${t}-nav,
        > div > ${t}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${t}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${t}-bottom`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        marginTop: n,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${t}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${t}-left, ${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        flexDirection: "column",
        minWidth: s(e.controlHeight).mul(1.25).equal(),
        // >>>>>>>>>>> Tab
        [`${t}-tab`]: {
          padding: a,
          textAlign: "center"
        },
        [`${t}-tab + ${t}-tab`]: {
          margin: i
        },
        // >>>>>>>>>>> Nav
        [`${t}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${t}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${t}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-list, ${t}-nav-operations`]: {
          flex: "1 0 auto",
          // fix safari scroll problem
          flexDirection: "column"
        }
      }
    },
    [`${t}-left`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: oe(s(e.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        [`${t}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: s(e.lineWidth).mul(-1).equal()
        },
        borderRight: {
          _skip_check_: !0,
          value: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, PR = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: n,
    cardPaddingLG: r,
    cardHeightSM: o,
    cardHeightLG: a,
    horizontalItemPaddingSM: i,
    horizontalItemPaddingLG: s
  } = e;
  return {
    // >>>>> shared
    [t]: {
      "&-small": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: i,
            fontSize: e.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: s,
            fontSize: e.titleFontSizeLG,
            lineHeight: e.lineHeightLG
          }
        }
      }
    },
    // >>>>> card
    [`${t}-card`]: {
      // Small
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: n
          },
          [`${t}-nav-add`]: {
            minWidth: o,
            minHeight: o
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${oe(e.borderRadius)} ${oe(e.borderRadius)}`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${oe(e.borderRadius)} ${oe(e.borderRadius)} 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${oe(e.borderRadius)} ${oe(e.borderRadius)} 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${oe(e.borderRadius)} 0 0 ${oe(e.borderRadius)}`
            }
          }
        }
      },
      // Large
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: r
          },
          [`${t}-nav-add`]: {
            minWidth: a,
            minHeight: a
          }
        }
      }
    }
  };
}, RR = (e) => {
  const {
    componentCls: t,
    itemActiveColor: n,
    itemHoverColor: r,
    iconCls: o,
    tabsHorizontalItemMargin: a,
    horizontalItemPadding: i,
    itemSelectedColor: s,
    itemColor: c
  } = e, l = `${t}-tab`;
  return {
    [l]: {
      position: "relative",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      padding: i,
      fontSize: e.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      color: c,
      "&-btn, &-remove": {
        "&:focus:not(:focus-visible), &:active": {
          color: n
        }
      },
      "&-btn": {
        outline: "none",
        transition: `all ${e.motionDurationSlow}`,
        [`${l}-icon:not(:last-child)`]: {
          marginInlineEnd: e.marginSM
        }
      },
      "&-remove": Object.assign({
        flex: "none",
        marginRight: {
          _skip_check_: !0,
          value: e.calc(e.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorIcon,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      }, ss(e)),
      "&:hover": {
        color: r
      },
      [`&${l}-active ${l}-btn`]: {
        color: s,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${l}-focus ${l}-btn:focus-visible`]: ld(e),
      [`&${l}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${l}-remove ${o}`]: {
        margin: 0
      },
      [`${o}:not(:last-child)`]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${l} + ${l}`]: {
      margin: {
        _skip_check_: !0,
        value: a
      }
    }
  };
}, IR = (e) => {
  const {
    componentCls: t,
    tabsHorizontalItemMarginRTL: n,
    iconCls: r,
    cardGutter: o,
    calc: a
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: n
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [r]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: oe(e.marginSM)
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: oe(e.marginXS)
            },
            marginLeft: {
              _skip_check_: !0,
              value: oe(a(e.marginXXS).mul(-1).equal())
            },
            [r]: {
              margin: 0
            }
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav`]: {
          order: 1
        },
        [`> ${t}-content-holder`]: {
          order: 0
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav`]: {
          order: 0
        },
        [`> ${t}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: o
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${t}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${t}-menu-item`]: {
      [`${t}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, MR = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardHeight: r,
    cardGutter: o,
    itemHoverColor: a,
    itemActiveColor: i,
    colorBorderSecondary: s
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Kn(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${t}-nav, > div > ${t}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${t}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // Fix chrome render bug
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${t}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${t}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${t}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${t}-nav-more`]: {
          position: "relative",
          padding: n,
          background: "transparent",
          border: 0,
          color: e.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.calc(e.controlHeightLG).div(8).equal(),
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${t}-nav-add`]: Object.assign({
          minWidth: r,
          minHeight: r,
          marginLeft: {
            _skip_check_: !0,
            value: o
          },
          background: "transparent",
          border: `${oe(e.lineWidth)} ${e.lineType} ${s}`,
          borderRadius: `${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)} 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: a
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: i
          }
        }, ss(e, -3))
      },
      [`${t}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${t}-ink-bar`]: {
        position: "absolute",
        background: e.inkBarColor,
        pointerEvents: "none"
      }
    }), RR(e)), {
      // =========================== TabPanes ===========================
      [`${t}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${t}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${t}-tabpane`]: Object.assign(Object.assign({}, ss(e)), {
        "&-hidden": {
          display: "none"
        }
      })
    }),
    [`${t}-centered`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-nav-wrap`]: {
          [`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]: {
            margin: "auto"
          }
        }
      }
    }
  };
}, TR = (e) => {
  const {
    cardHeight: t,
    cardHeightSM: n,
    cardHeightLG: r,
    controlHeight: o,
    controlHeightLG: a
  } = e, i = t || a, s = n || o, c = r || a + 8;
  return {
    zIndexPopup: e.zIndexPopupBase + 50,
    cardBg: e.colorFillAlter,
    // We can not pass this as valid value,
    // Since `cardHeight` will lock nav add button height.
    cardHeight: i,
    cardHeightSM: s,
    cardHeightLG: c,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: `${(i - e.fontHeight) / 2 - e.lineWidth}px ${e.padding}px`,
    cardPaddingSM: `${(s - e.fontHeight) / 2 - e.lineWidth}px ${e.paddingXS}px`,
    cardPaddingLG: `${(c - e.fontHeightLG) / 2 - e.lineWidth}px ${e.padding}px`,
    titleFontSize: e.fontSize,
    titleFontSizeLG: e.fontSizeLG,
    titleFontSizeSM: e.fontSize,
    inkBarColor: e.colorPrimary,
    horizontalMargin: `0 0 ${e.margin}px 0`,
    horizontalItemGutter: 32,
    // Fixed Value
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: "",
    horizontalItemMarginRTL: "",
    horizontalItemPadding: `${e.paddingSM}px 0`,
    horizontalItemPaddingSM: `${e.paddingXS}px 0`,
    horizontalItemPaddingLG: `${e.padding}px 0`,
    verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
    verticalItemMargin: `${e.margin}px 0 0 0`,
    itemColor: e.colorText,
    itemSelectedColor: e.colorPrimary,
    itemHoverColor: e.colorPrimaryHover,
    itemActiveColor: e.colorPrimaryActive,
    cardGutter: e.marginXXS / 2
  };
}, DR = bn("Tabs", (e) => {
  const t = kt(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${oe(e.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${oe(e.horizontalItemGutter)}`
  });
  return [PR(t), IR(t), _R(t), NR(t), OR(t), MR(t), $R(t)];
}, TR), Db = () => null;
process.env.NODE_ENV !== "production" && (Db.displayName = "DeprecatedTabPane");
var AR = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ld = (e) => {
  var t, n, r, o, a, i, s, c, l, u, m;
  const {
    type: f,
    className: v,
    rootClassName: g,
    size: y,
    onEdit: p,
    hideAdd: C,
    centered: S,
    addIcon: E,
    removeIcon: h,
    moreIcon: b,
    more: w,
    popupClassName: x,
    children: N,
    items: $,
    animated: O,
    style: _,
    indicatorSize: R,
    indicator: P,
    destroyInactiveTabPane: I,
    destroyOnHidden: D
  } = e, M = AR(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "more", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator", "destroyInactiveTabPane", "destroyOnHidden"]), {
    prefixCls: k
  } = M, {
    direction: j,
    tabs: T,
    getPrefixCls: H,
    getPopupContainer: q
  } = d.useContext(st), U = H("tabs", k), V = ro(U), [L, A, W] = DR(U, V);
  let Z;
  f === "editable-card" && (Z = {
    onEdit: (K, {
      key: de,
      event: ae
    }) => {
      p == null || p(K === "add" ? ae : de, K);
    },
    removeIcon: (t = h ?? (T == null ? void 0 : T.removeIcon)) !== null && t !== void 0 ? t : /* @__PURE__ */ d.createElement(Ds, null),
    addIcon: (E ?? (T == null ? void 0 : T.addIcon)) || /* @__PURE__ */ d.createElement(_b, null),
    showAdd: C !== !0
  });
  const G = H();
  if (process.env.NODE_ENV !== "production") {
    const K = At("Tabs");
    process.env.NODE_ENV !== "production" && K(!("onPrevClick" in e) && !("onNextClick" in e), "breaking", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."), process.env.NODE_ENV !== "production" && K(!(R || T != null && T.indicatorSize), "deprecated", "`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead."), K.deprecated(!("destroyInactiveTabPane" in e || $ != null && $.some((de) => "destroyInactiveTabPane" in de)), "destroyInactiveTabPane", "destroyOnHidden");
  }
  const re = jr(y), J = xR($, N), te = SR(U, O), ne = Object.assign(Object.assign({}, T == null ? void 0 : T.style), _), ue = {
    align: (n = P == null ? void 0 : P.align) !== null && n !== void 0 ? n : (r = T == null ? void 0 : T.indicator) === null || r === void 0 ? void 0 : r.align,
    size: (s = (a = (o = P == null ? void 0 : P.size) !== null && o !== void 0 ? o : R) !== null && a !== void 0 ? a : (i = T == null ? void 0 : T.indicator) === null || i === void 0 ? void 0 : i.size) !== null && s !== void 0 ? s : T == null ? void 0 : T.indicatorSize
  };
  return L(/* @__PURE__ */ d.createElement(Tb, Object.assign({
    direction: j,
    getPopupContainer: q
  }, M, {
    items: J,
    className: Q({
      [`${U}-${re}`]: re,
      [`${U}-card`]: ["card", "editable-card"].includes(f),
      [`${U}-editable-card`]: f === "editable-card",
      [`${U}-centered`]: S
    }, T == null ? void 0 : T.className, v, g, A, W, V),
    popupClassName: Q(x, A, W, V),
    style: ne,
    editable: Z,
    more: Object.assign({
      icon: (m = (u = (l = (c = T == null ? void 0 : T.more) === null || c === void 0 ? void 0 : c.icon) !== null && l !== void 0 ? l : T == null ? void 0 : T.moreIcon) !== null && u !== void 0 ? u : b) !== null && m !== void 0 ? m : /* @__PURE__ */ d.createElement(bb, null),
      transitionName: `${G}-slide-up`
    }, w),
    prefixCls: U,
    animated: te,
    indicator: ue,
    // TODO: In the future, destroyInactiveTabPane in rc-tabs needs to be upgrade to destroyOnHidden
    destroyInactiveTabPane: D ?? I
  })));
};
Ld.TabPane = Db;
process.env.NODE_ENV !== "production" && (Ld.displayName = "Tabs");
var kR = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ab = (e) => {
  var {
    prefixCls: t,
    className: n,
    hoverable: r = !0
  } = e, o = kR(e, ["prefixCls", "className", "hoverable"]);
  const {
    getPrefixCls: a
  } = d.useContext(st), i = a("card", t), s = Q(`${i}-grid`, n, {
    [`${i}-grid-hoverable`]: r
  });
  return /* @__PURE__ */ d.createElement("div", Object.assign({}, o, {
    className: s
  }));
}, jR = (e) => {
  const {
    antCls: t,
    componentCls: n,
    headerHeight: r,
    headerPadding: o,
    tabsMarginBottom: a
  } = e;
  return Object.assign(Object.assign({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: r,
    marginBottom: -1,
    padding: `0 ${oe(o)}`,
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.headerFontSize,
    background: e.headerBg,
    borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
    borderRadius: `${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)} 0 0`
  }, no()), {
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": Object.assign(Object.assign({
      display: "inline-block",
      flex: 1
    }, ni), {
      [`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]: {
        insetInlineStart: 0,
        marginTop: 0,
        marginBottom: 0
      }
    }),
    [`${t}-tabs-top`]: {
      clear: "both",
      marginBottom: a,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: e.fontSize,
      "&-bar": {
        borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
      }
    }
  });
}, FR = (e) => {
  const {
    cardPaddingBase: t,
    colorBorderSecondary: n,
    cardShadow: r,
    lineWidth: o
  } = e;
  return {
    width: "33.33%",
    padding: t,
    border: 0,
    borderRadius: 0,
    boxShadow: `
      ${oe(o)} 0 0 0 ${n},
      0 ${oe(o)} 0 0 ${n},
      ${oe(o)} ${oe(o)} 0 0 ${n},
      ${oe(o)} 0 0 0 ${n} inset,
      0 ${oe(o)} 0 0 ${n} inset;
    `,
    transition: `all ${e.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: r
    }
  };
}, LR = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    actionsLiMargin: r,
    cardActionsIconSize: o,
    colorBorderSecondary: a,
    actionsBg: i
  } = e;
  return Object.assign(Object.assign({
    margin: 0,
    padding: 0,
    listStyle: "none",
    background: i,
    borderTop: `${oe(e.lineWidth)} ${e.lineType} ${a}`,
    display: "flex",
    borderRadius: `0 0 ${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)}`
  }, no()), {
    "& > li": {
      margin: r,
      color: e.colorTextDescription,
      textAlign: "center",
      "> span": {
        position: "relative",
        display: "block",
        minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        cursor: "pointer",
        "&:hover": {
          color: e.colorPrimary,
          transition: `color ${e.motionDurationMid}`
        },
        [`a:not(${t}-btn), > ${n}`]: {
          display: "inline-block",
          width: "100%",
          color: e.colorIcon,
          lineHeight: oe(e.fontHeight),
          transition: `color ${e.motionDurationMid}`,
          "&:hover": {
            color: e.colorPrimary
          }
        },
        [`> ${n}`]: {
          fontSize: o,
          lineHeight: oe(e.calc(o).mul(e.lineHeight).equal())
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${oe(e.lineWidth)} ${e.lineType} ${a}`
      }
    }
  });
}, zR = (e) => Object.assign(Object.assign({
  margin: `${oe(e.calc(e.marginXXS).mul(-1).equal())} 0`,
  display: "flex"
}, no()), {
  "&-avatar": {
    paddingInlineEnd: e.padding
  },
  "&-detail": {
    overflow: "hidden",
    flex: 1,
    "> div:not(:last-child)": {
      marginBottom: e.marginXS
    }
  },
  "&-title": Object.assign({
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.fontSizeLG
  }, ni),
  "&-description": {
    color: e.colorTextDescription
  }
}), VR = (e) => {
  const {
    componentCls: t,
    colorFillAlter: n,
    headerPadding: r,
    bodyPadding: o
  } = e;
  return {
    [`${t}-head`]: {
      padding: `0 ${oe(r)}`,
      background: n,
      "&-title": {
        fontSize: e.fontSize
      }
    },
    [`${t}-body`]: {
      padding: `${oe(e.padding)} ${oe(o)}`
    }
  };
}, BR = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    overflow: "hidden",
    [`${t}-body`]: {
      userSelect: "none"
    }
  };
}, HR = (e) => {
  const {
    componentCls: t,
    cardShadow: n,
    cardHeadPadding: r,
    colorBorderSecondary: o,
    boxShadowTertiary: a,
    bodyPadding: i,
    extraColor: s
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Kn(e)), {
      position: "relative",
      background: e.colorBgContainer,
      borderRadius: e.borderRadiusLG,
      [`&:not(${t}-bordered)`]: {
        boxShadow: a
      },
      [`${t}-head`]: jR(e),
      [`${t}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: s,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`${t}-body`]: Object.assign({
        padding: i,
        borderRadius: `0 0 ${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)}`
      }, no()),
      [`${t}-grid`]: FR(e),
      [`${t}-cover`]: {
        "> *": {
          display: "block",
          width: "100%",
          borderRadius: `${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)} 0 0`
        }
      },
      [`${t}-actions`]: LR(e),
      [`${t}-meta`]: zR(e)
    }),
    [`${t}-bordered`]: {
      border: `${oe(e.lineWidth)} ${e.lineType} ${o}`,
      [`${t}-cover`]: {
        marginTop: -1,
        marginInlineStart: -1,
        marginInlineEnd: -1
      }
    },
    [`${t}-hoverable`]: {
      cursor: "pointer",
      transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
      "&:hover": {
        borderColor: "transparent",
        boxShadow: n
      }
    },
    [`${t}-contain-grid`]: {
      borderRadius: `${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)} 0 0 `,
      [`${t}-body`]: {
        display: "flex",
        flexWrap: "wrap"
      },
      [`&:not(${t}-loading) ${t}-body`]: {
        marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        padding: 0
      }
    },
    [`${t}-contain-tabs`]: {
      [`> div${t}-head`]: {
        minHeight: 0,
        [`${t}-head-title, ${t}-extra`]: {
          paddingTop: r
        }
      }
    },
    [`${t}-type-inner`]: VR(e),
    [`${t}-loading`]: BR(e),
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, WR = (e) => {
  const {
    componentCls: t,
    bodyPaddingSM: n,
    headerPaddingSM: r,
    headerHeightSM: o,
    headerFontSizeSM: a
  } = e;
  return {
    [`${t}-small`]: {
      [`> ${t}-head`]: {
        minHeight: o,
        padding: `0 ${oe(r)}`,
        fontSize: a,
        [`> ${t}-head-wrapper`]: {
          [`> ${t}-extra`]: {
            fontSize: e.fontSize
          }
        }
      },
      [`> ${t}-body`]: {
        padding: n
      }
    },
    [`${t}-small${t}-contain-tabs`]: {
      [`> ${t}-head`]: {
        [`${t}-head-title, ${t}-extra`]: {
          paddingTop: 0,
          display: "flex",
          alignItems: "center"
        }
      }
    }
  };
}, UR = (e) => {
  var t, n;
  return {
    headerBg: "transparent",
    headerFontSize: e.fontSizeLG,
    headerFontSizeSM: e.fontSize,
    headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
    headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
    actionsBg: e.colorBgContainer,
    actionsLiMargin: `${e.paddingSM}px 0`,
    tabsMarginBottom: -e.padding - e.lineWidth,
    extraColor: e.colorText,
    bodyPaddingSM: 12,
    // Fixed padding.
    headerPaddingSM: 12,
    bodyPadding: (t = e.bodyPadding) !== null && t !== void 0 ? t : e.paddingLG,
    headerPadding: (n = e.headerPadding) !== null && n !== void 0 ? n : e.paddingLG
  };
}, qR = bn("Card", (e) => {
  const t = kt(e, {
    cardShadow: e.boxShadowCard,
    cardHeadPadding: e.padding,
    cardPaddingBase: e.paddingLG,
    cardActionsIconSize: e.fontSize
  });
  return [
    // Style
    HR(t),
    // Size
    WR(t)
  ];
}, UR);
var Sp = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const KR = (e) => {
  const {
    actionClasses: t,
    actions: n = [],
    actionStyle: r
  } = e;
  return /* @__PURE__ */ d.createElement("ul", {
    className: t,
    style: r
  }, n.map((o, a) => {
    const i = `action-${a}`;
    return /* @__PURE__ */ d.createElement("li", {
      style: {
        width: `${100 / n.length}%`
      },
      key: i
    }, /* @__PURE__ */ d.createElement("span", null, o));
  }));
}, GR = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    rootClassName: o,
    style: a,
    extra: i,
    headStyle: s = {},
    bodyStyle: c = {},
    title: l,
    loading: u,
    bordered: m,
    variant: f,
    size: v,
    type: g,
    cover: y,
    actions: p,
    tabList: C,
    children: S,
    activeTabKey: E,
    defaultActiveTabKey: h,
    tabBarExtraContent: b,
    hoverable: w,
    tabProps: x = {},
    classNames: N,
    styles: $
  } = e, O = Sp(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "variant", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps", "classNames", "styles"]), {
    getPrefixCls: _,
    direction: R,
    card: P
  } = d.useContext(st), [I] = xd("card", f, m);
  if (process.env.NODE_ENV !== "production") {
    const be = At("Card");
    [["headStyle", "styles.header"], ["bodyStyle", "styles.body"], ["bordered", "variant"]].forEach(([me, Pe]) => {
      be.deprecated(!(me in e), me, Pe);
    });
  }
  const D = (be) => {
    var me;
    (me = e.onTabChange) === null || me === void 0 || me.call(e, be);
  }, M = (be) => {
    var me;
    return Q((me = P == null ? void 0 : P.classNames) === null || me === void 0 ? void 0 : me[be], N == null ? void 0 : N[be]);
  }, k = (be) => {
    var me;
    return Object.assign(Object.assign({}, (me = P == null ? void 0 : P.styles) === null || me === void 0 ? void 0 : me[be]), $ == null ? void 0 : $[be]);
  }, j = d.useMemo(() => {
    let be = !1;
    return d.Children.forEach(S, (me) => {
      (me == null ? void 0 : me.type) === Ab && (be = !0);
    }), be;
  }, [S]), T = _("card", n), [H, q, U] = qR(T), V = /* @__PURE__ */ d.createElement(oo, {
    loading: !0,
    active: !0,
    paragraph: {
      rows: 4
    },
    title: !1
  }, S), L = E !== void 0, A = Object.assign(Object.assign({}, x), {
    [L ? "activeKey" : "defaultActiveKey"]: L ? E : h,
    tabBarExtraContent: b
  });
  let W;
  const Z = jr(v), G = !Z || Z === "default" ? "large" : Z, re = C ? /* @__PURE__ */ d.createElement(Ld, Object.assign({
    size: G
  }, A, {
    className: `${T}-head-tabs`,
    onChange: D,
    items: C.map((be) => {
      var {
        tab: me
      } = be, Pe = Sp(be, ["tab"]);
      return Object.assign({
        label: me
      }, Pe);
    })
  })) : null;
  if (l || i || re) {
    const be = Q(`${T}-head`, M("header")), me = Q(`${T}-head-title`, M("title")), Pe = Q(`${T}-extra`, M("extra")), $e = Object.assign(Object.assign({}, s), k("header"));
    W = /* @__PURE__ */ d.createElement("div", {
      className: be,
      style: $e
    }, /* @__PURE__ */ d.createElement("div", {
      className: `${T}-head-wrapper`
    }, l && /* @__PURE__ */ d.createElement("div", {
      className: me,
      style: k("title")
    }, l), i && /* @__PURE__ */ d.createElement("div", {
      className: Pe,
      style: k("extra")
    }, i)), re);
  }
  const J = Q(`${T}-cover`, M("cover")), te = y ? /* @__PURE__ */ d.createElement("div", {
    className: J,
    style: k("cover")
  }, y) : null, ne = Q(`${T}-body`, M("body")), ue = Object.assign(Object.assign({}, c), k("body")), K = /* @__PURE__ */ d.createElement("div", {
    className: ne,
    style: ue
  }, u ? V : S), de = Q(`${T}-actions`, M("actions")), ae = p != null && p.length ? /* @__PURE__ */ d.createElement(KR, {
    actionClasses: de,
    actionStyle: k("actions"),
    actions: p
  }) : null, pe = Dn(O, ["onTabChange"]), Ce = Q(T, P == null ? void 0 : P.className, {
    [`${T}-loading`]: u,
    [`${T}-bordered`]: I !== "borderless",
    [`${T}-hoverable`]: w,
    [`${T}-contain-grid`]: j,
    [`${T}-contain-tabs`]: C == null ? void 0 : C.length,
    [`${T}-${Z}`]: Z,
    [`${T}-type-${g}`]: !!g,
    [`${T}-rtl`]: R === "rtl"
  }, r, o, q, U), fe = Object.assign(Object.assign({}, P == null ? void 0 : P.style), a);
  return H(/* @__PURE__ */ d.createElement("div", Object.assign({
    ref: t
  }, pe, {
    className: Ce,
    style: fe
  }), W, te, K, ae));
});
var XR = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const QR = (e) => {
  const {
    prefixCls: t,
    className: n,
    avatar: r,
    title: o,
    description: a
  } = e, i = XR(e, ["prefixCls", "className", "avatar", "title", "description"]), {
    getPrefixCls: s
  } = d.useContext(st), c = s("card", t), l = Q(`${c}-meta`, n), u = r ? /* @__PURE__ */ d.createElement("div", {
    className: `${c}-meta-avatar`
  }, r) : null, m = o ? /* @__PURE__ */ d.createElement("div", {
    className: `${c}-meta-title`
  }, o) : null, f = a ? /* @__PURE__ */ d.createElement("div", {
    className: `${c}-meta-description`
  }, a) : null, v = m || f ? /* @__PURE__ */ d.createElement("div", {
    className: `${c}-meta-detail`
  }, m, f) : null;
  return /* @__PURE__ */ d.createElement("div", Object.assign({}, i, {
    className: l
  }), u, v);
}, Qo = GR;
Qo.Grid = Ab;
Qo.Meta = QR;
process.env.NODE_ENV !== "production" && (Qo.displayName = "Card");
function YR(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function ZR(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Ep(e, t, n) {
  var r = t.cloneNode(!0), o = Object.create(e, {
    target: {
      value: r
    },
    currentTarget: {
      value: r
    }
  });
  return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), r.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, o;
}
function gs(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === "click") {
      o = Ep(t, e, ""), n(o);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      o = Ep(t, e, r), n(o);
      return;
    }
    n(o);
  }
}
function kb(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var o = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var jb = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var n, r, o, a = e.inputElement, i = e.children, s = e.prefixCls, c = e.prefix, l = e.suffix, u = e.addonBefore, m = e.addonAfter, f = e.className, v = e.style, g = e.disabled, y = e.readOnly, p = e.focused, C = e.triggerFocus, S = e.allowClear, E = e.value, h = e.handleReset, b = e.hidden, w = e.classes, x = e.classNames, N = e.dataAttrs, $ = e.styles, O = e.components, _ = e.onClear, R = i ?? a, P = (O == null ? void 0 : O.affixWrapper) || "span", I = (O == null ? void 0 : O.groupWrapper) || "span", D = (O == null ? void 0 : O.wrapper) || "span", M = (O == null ? void 0 : O.groupAddon) || "span", k = we(null), j = function(de) {
    var ae;
    (ae = k.current) !== null && ae !== void 0 && ae.contains(de.target) && (C == null || C());
  }, T = ZR(e), H = /* @__PURE__ */ x0(R, {
    value: E,
    className: Q((n = R.props) === null || n === void 0 ? void 0 : n.className, !T && (x == null ? void 0 : x.variant)) || null
  }), q = we(null);
  if (Y.useImperativeHandle(t, function() {
    return {
      nativeElement: q.current || k.current
    };
  }), T) {
    var U = null;
    if (S) {
      var V = !g && !y && E, L = "".concat(s, "-clear-icon"), A = Re(S) === "object" && S !== null && S !== void 0 && S.clearIcon ? S.clearIcon : "✖";
      U = /* @__PURE__ */ Y.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(de) {
          h == null || h(de), _ == null || _();
        },
        onMouseDown: function(de) {
          return de.preventDefault();
        },
        className: Q(L, F(F({}, "".concat(L, "-hidden"), !V), "".concat(L, "-has-suffix"), !!l))
      }, A);
    }
    var W = "".concat(s, "-affix-wrapper"), Z = Q(W, F(F(F(F(F({}, "".concat(s, "-disabled"), g), "".concat(W, "-disabled"), g), "".concat(W, "-focused"), p), "".concat(W, "-readonly"), y), "".concat(W, "-input-with-clear-btn"), l && S && E), w == null ? void 0 : w.affixWrapper, x == null ? void 0 : x.affixWrapper, x == null ? void 0 : x.variant), G = (l || S) && /* @__PURE__ */ Y.createElement("span", {
      className: Q("".concat(s, "-suffix"), x == null ? void 0 : x.suffix),
      style: $ == null ? void 0 : $.suffix
    }, U, l);
    H = /* @__PURE__ */ Y.createElement(P, ye({
      className: Z,
      style: $ == null ? void 0 : $.affixWrapper,
      onClick: j
    }, N == null ? void 0 : N.affixWrapper, {
      ref: k
    }), c && /* @__PURE__ */ Y.createElement("span", {
      className: Q("".concat(s, "-prefix"), x == null ? void 0 : x.prefix),
      style: $ == null ? void 0 : $.prefix
    }, c), H, G);
  }
  if (YR(e)) {
    var re = "".concat(s, "-group"), J = "".concat(re, "-addon"), te = "".concat(re, "-wrapper"), ne = Q("".concat(s, "-wrapper"), re, w == null ? void 0 : w.wrapper, x == null ? void 0 : x.wrapper), ue = Q(te, F({}, "".concat(te, "-disabled"), g), w == null ? void 0 : w.group, x == null ? void 0 : x.groupWrapper);
    H = /* @__PURE__ */ Y.createElement(I, {
      className: ue,
      ref: q
    }, /* @__PURE__ */ Y.createElement(D, {
      className: ne
    }, u && /* @__PURE__ */ Y.createElement(M, {
      className: J
    }, u), H, m && /* @__PURE__ */ Y.createElement(M, {
      className: J
    }, m)));
  }
  return /* @__PURE__ */ Y.cloneElement(H, {
    className: Q((r = H.props) === null || r === void 0 ? void 0 : r.className, f) || null,
    style: B(B({}, (o = H.props) === null || o === void 0 ? void 0 : o.style), v),
    hidden: b
  });
}), JR = ["show"];
function Fb(e, t) {
  return d.useMemo(function() {
    var n = {};
    t && (n.show = Re(t) === "object" && t.formatter ? t.formatter : !!t), n = B(B({}, n), e);
    var r = n, o = r.show, a = Qe(r, JR);
    return B(B({}, a), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: a.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var e2 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], t2 = /* @__PURE__ */ Cr(function(e, t) {
  var n = e.autoComplete, r = e.onChange, o = e.onFocus, a = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, c = e.onKeyUp, l = e.prefixCls, u = l === void 0 ? "rc-input" : l, m = e.disabled, f = e.htmlSize, v = e.className, g = e.maxLength, y = e.suffix, p = e.showCount, C = e.count, S = e.type, E = S === void 0 ? "text" : S, h = e.classes, b = e.classNames, w = e.styles, x = e.onCompositionStart, N = e.onCompositionEnd, $ = Qe(e, e2), O = ct(!1), _ = X(O, 2), R = _[0], P = _[1], I = we(!1), D = we(!1), M = we(null), k = we(null), j = function(ce) {
    M.current && kb(M.current, ce);
  }, T = $n(e.defaultValue, {
    value: e.value
  }), H = X(T, 2), q = H[0], U = H[1], V = q == null ? "" : String(q), L = ct(null), A = X(L, 2), W = A[0], Z = A[1], G = Fb(C, p), re = G.max || g, J = G.strategy(V), te = !!re && J > re;
  ys(t, function() {
    var $e;
    return {
      focus: j,
      blur: function() {
        var xe;
        (xe = M.current) === null || xe === void 0 || xe.blur();
      },
      setSelectionRange: function(xe, Ne, rt) {
        var Ue;
        (Ue = M.current) === null || Ue === void 0 || Ue.setSelectionRange(xe, Ne, rt);
      },
      select: function() {
        var xe;
        (xe = M.current) === null || xe === void 0 || xe.select();
      },
      input: M.current,
      nativeElement: (($e = k.current) === null || $e === void 0 ? void 0 : $e.nativeElement) || M.current
    };
  }), Ge(function() {
    D.current && (D.current = !1), P(function($e) {
      return $e && m ? !1 : $e;
    });
  }, [m]);
  var ne = function(ce, xe, Ne) {
    var rt = xe;
    if (!I.current && G.exceedFormatter && G.max && G.strategy(xe) > G.max) {
      if (rt = G.exceedFormatter(xe, {
        max: G.max
      }), xe !== rt) {
        var Ue, Ve;
        Z([((Ue = M.current) === null || Ue === void 0 ? void 0 : Ue.selectionStart) || 0, ((Ve = M.current) === null || Ve === void 0 ? void 0 : Ve.selectionEnd) || 0]);
      }
    } else if (Ne.source === "compositionEnd")
      return;
    U(rt), M.current && gs(M.current, ce, r, rt);
  };
  Ge(function() {
    if (W) {
      var $e;
      ($e = M.current) === null || $e === void 0 || $e.setSelectionRange.apply($e, he(W));
    }
  }, [W]);
  var ue = function(ce) {
    ne(ce, ce.target.value, {
      source: "change"
    });
  }, K = function(ce) {
    I.current = !1, ne(ce, ce.currentTarget.value, {
      source: "compositionEnd"
    }), N == null || N(ce);
  }, de = function(ce) {
    i && ce.key === "Enter" && !D.current && (D.current = !0, i(ce)), s == null || s(ce);
  }, ae = function(ce) {
    ce.key === "Enter" && (D.current = !1), c == null || c(ce);
  }, pe = function(ce) {
    P(!0), o == null || o(ce);
  }, Ce = function(ce) {
    D.current && (D.current = !1), P(!1), a == null || a(ce);
  }, fe = function(ce) {
    U(""), j(), M.current && gs(M.current, ce, r);
  }, be = te && "".concat(u, "-out-of-range"), me = function() {
    var ce = Dn(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return /* @__PURE__ */ Y.createElement("input", ye({
      autoComplete: n
    }, ce, {
      onChange: ue,
      onFocus: pe,
      onBlur: Ce,
      onKeyDown: de,
      onKeyUp: ae,
      className: Q(u, F({}, "".concat(u, "-disabled"), m), b == null ? void 0 : b.input),
      style: w == null ? void 0 : w.input,
      ref: M,
      size: f,
      type: E,
      onCompositionStart: function(Ne) {
        I.current = !0, x == null || x(Ne);
      },
      onCompositionEnd: K
    }));
  }, Pe = function() {
    var ce = Number(re) > 0;
    if (y || G.show) {
      var xe = G.showFormatter ? G.showFormatter({
        value: V,
        count: J,
        maxLength: re
      }) : "".concat(J).concat(ce ? " / ".concat(re) : "");
      return /* @__PURE__ */ Y.createElement(Y.Fragment, null, G.show && /* @__PURE__ */ Y.createElement("span", {
        className: Q("".concat(u, "-show-count-suffix"), F({}, "".concat(u, "-show-count-has-suffix"), !!y), b == null ? void 0 : b.count),
        style: B({}, w == null ? void 0 : w.count)
      }, xe), y);
    }
    return null;
  };
  return /* @__PURE__ */ Y.createElement(jb, ye({}, $, {
    prefixCls: u,
    className: Q(v, be),
    handleReset: fe,
    value: V,
    focused: R,
    triggerFocus: j,
    suffix: Pe(),
    disabled: m,
    classes: h,
    classNames: b,
    styles: w,
    ref: k
  }), me());
});
const Lb = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ Y.createElement(Ts, null)
  }), t;
};
function zb(e, t) {
  const n = we([]), r = () => {
    n.current.push(setTimeout(() => {
      var o, a, i, s;
      !((o = e.current) === null || o === void 0) && o.input && ((a = e.current) === null || a === void 0 ? void 0 : a.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return Ge(() => (t && r(), () => n.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), r;
}
function n2(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var r2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const li = /* @__PURE__ */ Cr((e, t) => {
  const {
    prefixCls: n,
    bordered: r = !0,
    status: o,
    size: a,
    disabled: i,
    onBlur: s,
    onFocus: c,
    suffix: l,
    allowClear: u,
    addonAfter: m,
    addonBefore: f,
    className: v,
    style: g,
    styles: y,
    rootClassName: p,
    onChange: C,
    classNames: S,
    variant: E
  } = e, h = r2(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: fe
    } = At("Input");
    fe(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: b,
    direction: w,
    allowClear: x,
    autoComplete: N,
    className: $,
    style: O,
    classNames: _,
    styles: R
  } = Ko("input"), P = b("input", n), I = we(null), D = ro(P), [M, k, j] = $b(P, p), [T] = Ob(P, D), {
    compactSize: H,
    compactItemClassnames: q
  } = ks(P, w), U = jr((fe) => {
    var be;
    return (be = a ?? H) !== null && be !== void 0 ? be : fe;
  }), V = Y.useContext(Dr), L = i ?? V, {
    status: A,
    hasFeedback: W,
    feedbackIcon: Z
  } = tn(br), G = wd(A, o), re = n2(e) || !!W, J = we(re);
  if (process.env.NODE_ENV !== "production") {
    const fe = At("Input");
    Ge(() => {
      var be;
      re && !J.current && process.env.NODE_ENV !== "production" && fe(document.activeElement === ((be = I.current) === null || be === void 0 ? void 0 : be.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), J.current = re;
    }, [re]);
  }
  const te = zb(I, !0), ne = (fe) => {
    te(), s == null || s(fe);
  }, ue = (fe) => {
    te(), c == null || c(fe);
  }, K = (fe) => {
    te(), C == null || C(fe);
  }, de = (W || l) && /* @__PURE__ */ Y.createElement(Y.Fragment, null, l, W && Z), ae = Lb(u ?? x), [pe, Ce] = xd("input", E, r);
  return M(T(/* @__PURE__ */ Y.createElement(t2, Object.assign({
    ref: or(t, I),
    prefixCls: P,
    autoComplete: N
  }, h, {
    disabled: L,
    onBlur: ne,
    onFocus: ue,
    style: Object.assign(Object.assign({}, O), g),
    styles: Object.assign(Object.assign({}, R), y),
    suffix: de,
    allowClear: ae,
    className: Q(v, p, j, D, q, $),
    onChange: K,
    addonBefore: f && /* @__PURE__ */ Y.createElement(lu, {
      form: !0,
      space: !0
    }, f),
    addonAfter: m && /* @__PURE__ */ Y.createElement(lu, {
      form: !0,
      space: !0
    }, m),
    classNames: Object.assign(Object.assign(Object.assign({}, S), _), {
      input: Q({
        [`${P}-sm`]: U === "small",
        [`${P}-lg`]: U === "large",
        [`${P}-rtl`]: w === "rtl"
      }, S == null ? void 0 : S.input, _.input, k),
      variant: Q({
        [`${P}-${pe}`]: Ce
      }, du(P, G)),
      affixWrapper: Q({
        [`${P}-affix-wrapper-sm`]: U === "small",
        [`${P}-affix-wrapper-lg`]: U === "large",
        [`${P}-affix-wrapper-rtl`]: w === "rtl"
      }, k),
      wrapper: Q({
        [`${P}-group-rtl`]: w === "rtl"
      }, k),
      groupWrapper: Q({
        [`${P}-group-wrapper-sm`]: U === "small",
        [`${P}-group-wrapper-lg`]: U === "large",
        [`${P}-group-wrapper-rtl`]: w === "rtl",
        [`${P}-group-wrapper-${pe}`]: Ce
      }, du(`${P}-group-wrapper`, G, W), k)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (li.displayName = "Input");
var o2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, a2 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: o2
  }));
}, zd = /* @__PURE__ */ d.forwardRef(a2);
process.env.NODE_ENV !== "production" && (zd.displayName = "EyeOutlined");
const i2 = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = tn(st), {
    prefixCls: r,
    className: o
  } = e, a = t("input-group", r), i = t("input"), [s, c, l] = Ob(i), u = Q(a, l, {
    [`${a}-lg`]: e.size === "large",
    [`${a}-sm`]: e.size === "small",
    [`${a}-compact`]: e.compact,
    [`${a}-rtl`]: n === "rtl"
  }, c, o), m = tn(br), f = Nt(() => Object.assign(Object.assign({}, m), {
    isFormItemInput: !1
  }), [m]);
  return process.env.NODE_ENV !== "production" && At("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), s(/* @__PURE__ */ d.createElement("span", {
    className: u,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ d.createElement(br.Provider, {
    value: f
  }, e.children)));
}, s2 = (e) => {
  const {
    componentCls: t,
    paddingXS: n
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      alignItems: "center",
      flexWrap: "nowrap",
      columnGap: n,
      [`${t}-input-wrapper`]: {
        position: "relative",
        [`${t}-mask-icon`]: {
          position: "absolute",
          zIndex: "1",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
          pointerEvents: "none"
        },
        [`${t}-mask-input`]: {
          color: "transparent",
          caretColor: "var(--ant-color-text)"
        },
        [`${t}-mask-input[type=number]::-webkit-inner-spin-button`]: {
          "-webkit-appearance": "none",
          margin: 0
        },
        [`${t}-mask-input[type=number]`]: {
          "-moz-appearance": "textfield"
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      [`${t}-input`]: {
        textAlign: "center",
        paddingInline: e.paddingXXS
      },
      // ================= Size =================
      [`&${t}-sm ${t}-input`]: {
        paddingInline: e.calc(e.paddingXXS).div(2).equal()
      },
      [`&${t}-lg ${t}-input`]: {
        paddingInline: e.paddingXS
      }
    }
  };
}, c2 = bn(["Input", "OTP"], (e) => {
  const t = kt(e, Gs(e));
  return [s2(t)];
}, Xs);
var l2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const u2 = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    className: n,
    value: r,
    onChange: o,
    onActiveChange: a,
    index: i,
    mask: s
  } = e, c = l2(e, ["className", "value", "onChange", "onActiveChange", "index", "mask"]), {
    getPrefixCls: l
  } = d.useContext(st), u = l("otp"), m = typeof s == "string" ? s : r, f = d.useRef(null);
  d.useImperativeHandle(t, () => f.current);
  const v = (C) => {
    o(i, C.target.value);
  }, g = () => {
    Kt(() => {
      var C;
      const S = (C = f.current) === null || C === void 0 ? void 0 : C.input;
      document.activeElement === S && S && S.select();
    });
  }, y = (C) => {
    const {
      key: S,
      ctrlKey: E,
      metaKey: h
    } = C;
    S === "ArrowLeft" ? a(i - 1) : S === "ArrowRight" ? a(i + 1) : S === "z" && (E || h) && C.preventDefault(), g();
  }, p = (C) => {
    C.key === "Backspace" && !r && a(i - 1), g();
  };
  return /* @__PURE__ */ d.createElement("span", {
    className: `${u}-input-wrapper`,
    role: "presentation"
  }, s && r !== "" && r !== void 0 && /* @__PURE__ */ d.createElement("span", {
    className: `${u}-mask-icon`,
    "aria-hidden": "true"
  }, m), /* @__PURE__ */ d.createElement(li, Object.assign({
    "aria-label": `OTP Input ${i + 1}`,
    type: s === !0 ? "password" : "text"
  }, c, {
    ref: f,
    value: r,
    onInput: v,
    onFocus: g,
    onKeyDown: y,
    onKeyUp: p,
    onMouseDown: g,
    onMouseUp: g,
    className: Q(n, {
      [`${u}-mask-input`]: s
    })
  })));
});
var d2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Di(e) {
  return (e || "").split("");
}
const f2 = (e) => {
  const {
    index: t,
    prefixCls: n,
    separator: r
  } = e, o = typeof r == "function" ? r(t) : r;
  return o ? /* @__PURE__ */ d.createElement("span", {
    className: `${n}-separator`
  }, o) : null;
}, m2 = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    length: r = 6,
    size: o,
    defaultValue: a,
    value: i,
    onChange: s,
    formatter: c,
    separator: l,
    variant: u,
    disabled: m,
    status: f,
    autoFocus: v,
    mask: g,
    type: y,
    onInput: p,
    inputMode: C
  } = e, S = d2(e, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "separator", "variant", "disabled", "status", "autoFocus", "mask", "type", "onInput", "inputMode"]);
  if (process.env.NODE_ENV !== "production") {
    const L = At("Input.OTP");
    process.env.NODE_ENV !== "production" && L(!(typeof g == "string" && g.length > 1), "usage", "`mask` prop should be a single character.");
  }
  const {
    getPrefixCls: E,
    direction: h
  } = d.useContext(st), b = E("otp", n), w = fd(S, {
    aria: !0,
    data: !0,
    attr: !0
  }), [x, N, $] = c2(b), O = jr((L) => o ?? L), _ = d.useContext(br), R = wd(_.status, f), P = d.useMemo(() => Object.assign(Object.assign({}, _), {
    status: R,
    hasFeedback: !1,
    feedbackIcon: null
  }), [_, R]), I = d.useRef(null), D = d.useRef({});
  d.useImperativeHandle(t, () => ({
    focus: () => {
      var L;
      (L = D.current[0]) === null || L === void 0 || L.focus();
    },
    blur: () => {
      var L;
      for (let A = 0; A < r; A += 1)
        (L = D.current[A]) === null || L === void 0 || L.blur();
    },
    nativeElement: I.current
  }));
  const M = (L) => c ? c(L) : L, [k, j] = d.useState(() => Di(M(a || "")));
  d.useEffect(() => {
    i !== void 0 && j(Di(i));
  }, [i]);
  const T = Ut((L) => {
    j(L), p && p(L), s && L.length === r && L.every((A) => A) && L.some((A, W) => k[W] !== A) && s(L.join(""));
  }), H = Ut((L, A) => {
    let W = he(k);
    for (let G = 0; G < L; G += 1)
      W[G] || (W[G] = "");
    A.length <= 1 ? W[L] = A : W = W.slice(0, L).concat(Di(A)), W = W.slice(0, r);
    for (let G = W.length - 1; G >= 0 && !W[G]; G -= 1)
      W.pop();
    const Z = M(W.map((G) => G || " ").join(""));
    return W = Di(Z).map((G, re) => G === " " && !W[re] ? W[re] : G), W;
  }), q = (L, A) => {
    var W;
    const Z = H(L, A), G = Math.min(L + A.length, r - 1);
    G !== L && Z[L] !== void 0 && ((W = D.current[G]) === null || W === void 0 || W.focus()), T(Z);
  }, U = (L) => {
    var A;
    (A = D.current[L]) === null || A === void 0 || A.focus();
  }, V = {
    variant: u,
    disabled: m,
    status: R,
    mask: g,
    type: y,
    inputMode: C
  };
  return x(/* @__PURE__ */ d.createElement("div", Object.assign({}, w, {
    ref: I,
    className: Q(b, {
      [`${b}-sm`]: O === "small",
      [`${b}-lg`]: O === "large",
      [`${b}-rtl`]: h === "rtl"
    }, $, N),
    role: "group"
  }), /* @__PURE__ */ d.createElement(br.Provider, {
    value: P
  }, Array.from({
    length: r
  }).map((L, A) => {
    const W = `otp-${A}`, Z = k[A] || "";
    return /* @__PURE__ */ d.createElement(d.Fragment, {
      key: W
    }, /* @__PURE__ */ d.createElement(u2, Object.assign({
      ref: (G) => {
        D.current[A] = G;
      },
      index: A,
      size: O,
      htmlSize: 1,
      className: `${b}-input`,
      onChange: q,
      value: Z,
      onActiveChange: U,
      autoFocus: A === 0 && v
    }, V)), A < r - 1 && /* @__PURE__ */ d.createElement(f2, {
      separator: l,
      index: A,
      prefixCls: b
    }));
  }))));
});
var p2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" }, v2 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: p2
  }));
}, Vb = /* @__PURE__ */ d.forwardRef(v2);
process.env.NODE_ENV !== "production" && (Vb.displayName = "EyeInvisibleOutlined");
var g2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const h2 = (e) => e ? /* @__PURE__ */ d.createElement(zd, null) : /* @__PURE__ */ d.createElement(Vb, null), b2 = {
  click: "onClick",
  hover: "onMouseOver"
}, Bb = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    disabled: n,
    action: r = "click",
    visibilityToggle: o = !0,
    iconRender: a = h2
  } = e, i = d.useContext(Dr), s = n ?? i, c = typeof o == "object" && o.visible !== void 0, [l, u] = ct(() => c ? o.visible : !1), m = we(null);
  d.useEffect(() => {
    c && u(o.visible);
  }, [c, o]);
  const f = zb(m), v = () => {
    var O;
    if (s)
      return;
    l && f();
    const _ = !l;
    u(_), typeof o == "object" && ((O = o.onVisibleChange) === null || O === void 0 || O.call(o, _));
  }, g = (O) => {
    const _ = b2[r] || "", R = a(l), P = {
      [_]: v,
      className: `${O}-icon`,
      key: "passwordIcon",
      onMouseDown: (I) => {
        I.preventDefault();
      },
      onMouseUp: (I) => {
        I.preventDefault();
      }
    };
    return /* @__PURE__ */ d.cloneElement(/* @__PURE__ */ d.isValidElement(R) ? R : /* @__PURE__ */ d.createElement("span", null, R), P);
  }, {
    className: y,
    prefixCls: p,
    inputPrefixCls: C,
    size: S
  } = e, E = g2(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: h
  } = d.useContext(st), b = h("input", C), w = h("input-password", p), x = o && g(w), N = Q(w, y, {
    [`${w}-${S}`]: !!S
  }), $ = Object.assign(Object.assign({}, Dn(E, ["suffix", "iconRender", "visibilityToggle"])), {
    type: l ? "text" : "password",
    className: N,
    prefixCls: b,
    suffix: x
  });
  return S && ($.size = S), /* @__PURE__ */ d.createElement(li, Object.assign({
    ref: or(t, m)
  }, $));
});
process.env.NODE_ENV !== "production" && (Bb.displayName = "Input.Password");
var y2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Hb = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    inputPrefixCls: r,
    className: o,
    size: a,
    suffix: i,
    enterButton: s = !1,
    addonAfter: c,
    loading: l,
    disabled: u,
    onSearch: m,
    onChange: f,
    onCompositionStart: v,
    onCompositionEnd: g,
    variant: y,
    onPressEnter: p
  } = e, C = y2(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd", "variant", "onPressEnter"]), {
    getPrefixCls: S,
    direction: E
  } = d.useContext(st), h = d.useRef(!1), b = S("input-search", n), w = S("input", r), {
    compactSize: x
  } = ks(b, E), N = jr((V) => {
    var L;
    return (L = a ?? x) !== null && L !== void 0 ? L : V;
  }), $ = d.useRef(null), O = (V) => {
    V != null && V.target && V.type === "click" && m && m(V.target.value, V, {
      source: "clear"
    }), f == null || f(V);
  }, _ = (V) => {
    var L;
    document.activeElement === ((L = $.current) === null || L === void 0 ? void 0 : L.input) && V.preventDefault();
  }, R = (V) => {
    var L, A;
    m && m((A = (L = $.current) === null || L === void 0 ? void 0 : L.input) === null || A === void 0 ? void 0 : A.value, V, {
      source: "input"
    });
  }, P = (V) => {
    h.current || l || (p == null || p(V), R(V));
  }, I = typeof s == "boolean" ? /* @__PURE__ */ d.createElement(Xh, null) : null, D = `${b}-button`;
  let M;
  const k = s || {}, j = k.type && k.type.__ANT_BUTTON === !0;
  j || k.type === "button" ? M = gr(k, Object.assign({
    onMouseDown: _,
    onClick: (V) => {
      var L, A;
      (A = (L = k == null ? void 0 : k.props) === null || L === void 0 ? void 0 : L.onClick) === null || A === void 0 || A.call(L, V), R(V);
    },
    key: "enterButton"
  }, j ? {
    className: D,
    size: N
  } : {})) : M = /* @__PURE__ */ d.createElement(gn, {
    className: D,
    color: s ? "primary" : "default",
    size: N,
    disabled: u,
    key: "enterButton",
    onMouseDown: _,
    onClick: R,
    loading: l,
    icon: I,
    variant: y === "borderless" || y === "filled" || y === "underlined" ? "text" : s ? "solid" : void 0
  }, s), c && (M = [M, gr(c, {
    key: "addonAfter"
  })]);
  const T = Q(b, {
    [`${b}-rtl`]: E === "rtl",
    [`${b}-${N}`]: !!N,
    [`${b}-with-button`]: !!s
  }, o), H = (V) => {
    h.current = !0, v == null || v(V);
  }, q = (V) => {
    h.current = !1, g == null || g(V);
  }, U = Object.assign(Object.assign({}, C), {
    className: T,
    prefixCls: w,
    type: "search",
    size: N,
    variant: y,
    onPressEnter: P,
    onCompositionStart: H,
    onCompositionEnd: q,
    addonAfter: M,
    suffix: i,
    onChange: O,
    disabled: u
  });
  return /* @__PURE__ */ d.createElement(li, Object.assign({
    ref: or($, t)
  }, U));
});
process.env.NODE_ENV !== "production" && (Hb.displayName = "Search");
var C2 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, S2 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], Uc = {}, wn;
function E2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Uc[n])
    return Uc[n];
  var r = window.getComputedStyle(e), o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), a = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = S2.map(function(l) {
    return "".concat(l, ":").concat(r.getPropertyValue(l));
  }).join(";"), c = {
    sizingStyle: s,
    paddingSize: a,
    borderSize: i,
    boxSizing: o
  };
  return t && n && (Uc[n] = c), c;
}
function w2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  wn || (wn = document.createElement("textarea"), wn.setAttribute("tab-index", "-1"), wn.setAttribute("aria-hidden", "true"), wn.setAttribute("name", "hiddenTextarea"), document.body.appendChild(wn)), e.getAttribute("wrap") ? wn.setAttribute("wrap", e.getAttribute("wrap")) : wn.removeAttribute("wrap");
  var o = E2(e, t), a = o.paddingSize, i = o.borderSize, s = o.boxSizing, c = o.sizingStyle;
  wn.setAttribute("style", "".concat(c, ";").concat(C2)), wn.value = e.value || e.placeholder || "";
  var l = void 0, u = void 0, m, f = wn.scrollHeight;
  if (s === "border-box" ? f += i : s === "content-box" && (f -= a), n !== null || r !== null) {
    wn.value = " ";
    var v = wn.scrollHeight - a;
    n !== null && (l = v * n, s === "border-box" && (l = l + a + i), f = Math.max(l, f)), r !== null && (u = v * r, s === "border-box" && (u = u + a + i), m = f > u ? "" : "hidden", f = Math.min(u, f));
  }
  var g = {
    height: f,
    overflowY: m,
    resize: "none"
  };
  return l && (g.minHeight = l), u && (g.maxHeight = u), g;
}
var x2 = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], qc = 0, Kc = 1, Gc = 2, $2 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls, o = n.defaultValue, a = n.value, i = n.autoSize, s = n.onResize, c = n.className, l = n.style, u = n.disabled, m = n.onChange, f = n.onInternalAutoSize, v = Qe(n, x2), g = $n(o, {
    value: a,
    postState: function(A) {
      return A ?? "";
    }
  }), y = X(g, 2), p = y[0], C = y[1], S = function(A) {
    C(A.target.value), m == null || m(A);
  }, E = d.useRef();
  d.useImperativeHandle(t, function() {
    return {
      textArea: E.current
    };
  });
  var h = d.useMemo(function() {
    return i && Re(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), b = X(h, 2), w = b[0], x = b[1], N = !!i, $ = function() {
    try {
      if (document.activeElement === E.current) {
        var A = E.current, W = A.selectionStart, Z = A.selectionEnd, G = A.scrollTop;
        E.current.setSelectionRange(W, Z), E.current.scrollTop = G;
      }
    } catch {
    }
  }, O = d.useState(Gc), _ = X(O, 2), R = _[0], P = _[1], I = d.useState(), D = X(I, 2), M = D[0], k = D[1], j = function() {
    P(qc), process.env.NODE_ENV === "test" && (f == null || f());
  };
  Qt(function() {
    N && j();
  }, [a, w, x, N]), Qt(function() {
    if (R === qc)
      P(Kc);
    else if (R === Kc) {
      var L = w2(E.current, !1, w, x);
      P(Gc), k(L);
    } else
      $();
  }, [R]);
  var T = d.useRef(), H = function() {
    Kt.cancel(T.current);
  }, q = function(A) {
    R === Gc && (s == null || s(A), i && (H(), T.current = Kt(function() {
      j();
    })));
  };
  d.useEffect(function() {
    return H;
  }, []);
  var U = N ? M : null, V = B(B({}, l), U);
  return (R === qc || R === Kc) && (V.overflowY = "hidden", V.overflowX = "hidden"), /* @__PURE__ */ d.createElement(zn, {
    onResize: q,
    disabled: !(i || s)
  }, /* @__PURE__ */ d.createElement("textarea", ye({}, v, {
    ref: E,
    style: V,
    className: Q(r, c, F({}, "".concat(r, "-disabled"), u)),
    disabled: u,
    value: p,
    onChange: S
  })));
}), O2 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], N2 = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var n, r = e.defaultValue, o = e.value, a = e.onFocus, i = e.onBlur, s = e.onChange, c = e.allowClear, l = e.maxLength, u = e.onCompositionStart, m = e.onCompositionEnd, f = e.suffix, v = e.prefixCls, g = v === void 0 ? "rc-textarea" : v, y = e.showCount, p = e.count, C = e.className, S = e.style, E = e.disabled, h = e.hidden, b = e.classNames, w = e.styles, x = e.onResize, N = e.onClear, $ = e.onPressEnter, O = e.readOnly, _ = e.autoSize, R = e.onKeyDown, P = Qe(e, O2), I = $n(r, {
    value: o,
    defaultValue: r
  }), D = X(I, 2), M = D[0], k = D[1], j = M == null ? "" : String(M), T = Y.useState(!1), H = X(T, 2), q = H[0], U = H[1], V = Y.useRef(!1), L = Y.useState(null), A = X(L, 2), W = A[0], Z = A[1], G = we(null), re = we(null), J = function() {
    var ie;
    return (ie = re.current) === null || ie === void 0 ? void 0 : ie.textArea;
  }, te = function() {
    J().focus();
  };
  ys(t, function() {
    var Me;
    return {
      resizableTextArea: re.current,
      focus: te,
      blur: function() {
        J().blur();
      },
      nativeElement: ((Me = G.current) === null || Me === void 0 ? void 0 : Me.nativeElement) || J()
    };
  }), Ge(function() {
    U(function(Me) {
      return !E && Me;
    });
  }, [E]);
  var ne = Y.useState(null), ue = X(ne, 2), K = ue[0], de = ue[1];
  Y.useEffect(function() {
    if (K) {
      var Me;
      (Me = J()).setSelectionRange.apply(Me, he(K));
    }
  }, [K]);
  var ae = Fb(p, y), pe = (n = ae.max) !== null && n !== void 0 ? n : l, Ce = Number(pe) > 0, fe = ae.strategy(j), be = !!pe && fe > pe, me = function(ie, Se) {
    var ve = Se;
    !V.current && ae.exceedFormatter && ae.max && ae.strategy(Se) > ae.max && (ve = ae.exceedFormatter(Se, {
      max: ae.max
    }), Se !== ve && de([J().selectionStart || 0, J().selectionEnd || 0])), k(ve), gs(ie.currentTarget, ie, s, ve);
  }, Pe = function(ie) {
    V.current = !0, u == null || u(ie);
  }, $e = function(ie) {
    V.current = !1, me(ie, ie.currentTarget.value), m == null || m(ie);
  }, ce = function(ie) {
    me(ie, ie.target.value);
  }, xe = function(ie) {
    ie.key === "Enter" && $ && $(ie), R == null || R(ie);
  }, Ne = function(ie) {
    U(!0), a == null || a(ie);
  }, rt = function(ie) {
    U(!1), i == null || i(ie);
  }, Ue = function(ie) {
    k(""), te(), gs(J(), ie, s);
  }, Ve = f, tt;
  ae.show && (ae.showFormatter ? tt = ae.showFormatter({
    value: j,
    count: fe,
    maxLength: pe
  }) : tt = "".concat(fe).concat(Ce ? " / ".concat(pe) : ""), Ve = /* @__PURE__ */ Y.createElement(Y.Fragment, null, Ve, /* @__PURE__ */ Y.createElement("span", {
    className: Q("".concat(g, "-data-count"), b == null ? void 0 : b.count),
    style: w == null ? void 0 : w.count
  }, tt)));
  var Le = function(ie) {
    var Se;
    x == null || x(ie), (Se = J()) !== null && Se !== void 0 && Se.style.height && Z(!0);
  }, qe = !_ && !y && !c;
  return /* @__PURE__ */ Y.createElement(jb, {
    ref: G,
    value: j,
    allowClear: c,
    handleReset: Ue,
    suffix: Ve,
    prefixCls: g,
    classNames: B(B({}, b), {}, {
      affixWrapper: Q(b == null ? void 0 : b.affixWrapper, F(F({}, "".concat(g, "-show-count"), y), "".concat(g, "-textarea-allow-clear"), c))
    }),
    disabled: E,
    focused: q,
    className: Q(C, be && "".concat(g, "-out-of-range")),
    style: B(B({}, S), W && !qe ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof tt == "string" ? tt : void 0
      }
    },
    hidden: h,
    readOnly: O,
    onClear: N
  }, /* @__PURE__ */ Y.createElement($2, ye({}, P, {
    autoSize: _,
    maxLength: l,
    onKeyDown: xe,
    onChange: ce,
    onFocus: Ne,
    onBlur: rt,
    onCompositionStart: Pe,
    onCompositionEnd: $e,
    className: Q(b == null ? void 0 : b.textarea),
    style: B(B({}, w == null ? void 0 : w.textarea), {}, {
      resize: S == null ? void 0 : S.resize
    }),
    disabled: E,
    prefixCls: g,
    onResize: Le,
    ref: re,
    readOnly: O
  })));
});
const _2 = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    // Raw Textarea
    [`textarea${t}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: e.controlHeight,
      lineHeight: e.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${e.motionDurationSlow}`,
      resize: "vertical",
      [`&${t}-mouse-active`]: {
        transition: `all ${e.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${t}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [r]: {
      position: "relative",
      "&-show-count": {
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: {
        paddingInlineEnd: n
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${r}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
        [`${t}-suffix`]: {
          [`${t}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, P2 = bn(["Input", "TextArea"], (e) => {
  const t = kt(e, Gs(e));
  return [_2(t)];
}, Xs, {
  resetFont: !1
});
var R2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const I2 = /* @__PURE__ */ Cr((e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: o = !0,
    size: a,
    disabled: i,
    status: s,
    allowClear: c,
    classNames: l,
    rootClassName: u,
    className: m,
    style: f,
    styles: v,
    variant: g,
    showCount: y,
    onMouseDown: p,
    onResize: C
  } = e, S = R2(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: ae
    } = At("TextArea");
    ae(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: E,
    direction: h,
    allowClear: b,
    autoComplete: w,
    className: x,
    style: N,
    classNames: $,
    styles: O
  } = Ko("textArea"), _ = d.useContext(Dr), R = i ?? _, {
    status: P,
    hasFeedback: I,
    feedbackIcon: D
  } = d.useContext(br), M = wd(P, s), k = d.useRef(null);
  d.useImperativeHandle(t, () => {
    var ae;
    return {
      resizableTextArea: (ae = k.current) === null || ae === void 0 ? void 0 : ae.resizableTextArea,
      focus: (pe) => {
        var Ce, fe;
        kb((fe = (Ce = k.current) === null || Ce === void 0 ? void 0 : Ce.resizableTextArea) === null || fe === void 0 ? void 0 : fe.textArea, pe);
      },
      blur: () => {
        var pe;
        return (pe = k.current) === null || pe === void 0 ? void 0 : pe.blur();
      }
    };
  });
  const j = E("input", r), T = ro(j), [H, q, U] = $b(j, u), [V] = P2(j, T), {
    compactSize: L,
    compactItemClassnames: A
  } = ks(j, h), W = jr((ae) => {
    var pe;
    return (pe = a ?? L) !== null && pe !== void 0 ? pe : ae;
  }), [Z, G] = xd("textArea", g, o), re = Lb(c ?? b), [J, te] = d.useState(!1), [ne, ue] = d.useState(!1), K = (ae) => {
    te(!0), p == null || p(ae);
    const pe = () => {
      te(!1), document.removeEventListener("mouseup", pe);
    };
    document.addEventListener("mouseup", pe);
  }, de = (ae) => {
    var pe, Ce;
    if (C == null || C(ae), J && typeof getComputedStyle == "function") {
      const fe = (Ce = (pe = k.current) === null || pe === void 0 ? void 0 : pe.nativeElement) === null || Ce === void 0 ? void 0 : Ce.querySelector("textarea");
      fe && getComputedStyle(fe).resize === "both" && ue(!0);
    }
  };
  return H(V(/* @__PURE__ */ d.createElement(N2, Object.assign({
    autoComplete: w
  }, S, {
    style: Object.assign(Object.assign({}, N), f),
    styles: Object.assign(Object.assign({}, O), v),
    disabled: R,
    allowClear: re,
    className: Q(
      U,
      T,
      m,
      u,
      A,
      x,
      // Only for wrapper
      ne && `${j}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, l), $), {
      textarea: Q({
        [`${j}-sm`]: W === "small",
        [`${j}-lg`]: W === "large"
      }, q, l == null ? void 0 : l.textarea, $.textarea, J && `${j}-mouse-active`),
      variant: Q({
        [`${j}-${Z}`]: G
      }, du(j, M)),
      affixWrapper: Q(`${j}-textarea-affix-wrapper`, {
        [`${j}-affix-wrapper-rtl`]: h === "rtl",
        [`${j}-affix-wrapper-sm`]: W === "small",
        [`${j}-affix-wrapper-lg`]: W === "large",
        [`${j}-textarea-show-count`]: y || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
      }, q)
    }),
    prefixCls: j,
    suffix: I && /* @__PURE__ */ d.createElement("span", {
      className: `${j}-textarea-suffix`
    }, D),
    showCount: y,
    ref: k,
    onResize: de,
    onMouseDown: K
  }))));
}), Yo = li;
Yo.Group = i2;
Yo.Search = Hb;
Yo.TextArea = I2;
Yo.Password = Bb;
Yo.OTP = m2;
let Mn = null, qr = (e) => e(), Ka = [], Ga = {};
function wp() {
  const {
    getContainer: e,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  } = Ga, a = (e == null ? void 0 : e()) || document.body;
  return {
    getContainer: () => a,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  };
}
const M2 = /* @__PURE__ */ Y.forwardRef((e, t) => {
  const {
    messageConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = tn(st), a = Ga.prefixCls || o("message"), i = tn(HN), [s, c] = mh(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.message));
  return Y.useImperativeHandle(t, () => {
    const l = Object.assign({}, s);
    return Object.keys(l).forEach((u) => {
      l[u] = (...m) => (r(), s[u].apply(s, m));
    }), {
      instance: l,
      sync: r
    };
  }), c;
}), T2 = /* @__PURE__ */ Y.forwardRef((e, t) => {
  const [n, r] = Y.useState(wp), o = () => {
    r(wp);
  };
  Y.useEffect(o, []);
  const a = Qg(), i = a.getRootPrefixCls(), s = a.getIconPrefixCls(), c = a.getTheme(), l = /* @__PURE__ */ Y.createElement(M2, {
    ref: t,
    sync: o,
    messageConfig: n
  });
  return /* @__PURE__ */ Y.createElement(kr, {
    prefixCls: i,
    iconPrefixCls: s,
    theme: c
  }, a.holderRender ? a.holderRender(l) : l);
});
function Ys() {
  if (!Mn) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    Mn = t, qr(() => {
      gh()(/* @__PURE__ */ Y.createElement(T2, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, Ys());
          });
        }
      }), e);
    });
    return;
  }
  Mn.instance && (Ka.forEach((e) => {
    const {
      type: t,
      skipped: n
    } = e;
    if (!n)
      switch (t) {
        case "open": {
          qr(() => {
            const r = Mn.instance.open(Object.assign(Object.assign({}, Ga), e.config));
            r == null || r.then(e.resolve), e.setCloseFn(r);
          });
          break;
        }
        case "destroy":
          qr(() => {
            Mn == null || Mn.instance.destroy(e.key);
          });
          break;
        default:
          qr(() => {
            var r;
            const o = (r = Mn.instance)[t].apply(r, he(e.args));
            o == null || o.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), Ka = []);
}
function D2(e) {
  Ga = Object.assign(Object.assign({}, Ga), e), qr(() => {
    var t;
    (t = Mn == null ? void 0 : Mn.sync) === null || t === void 0 || t.call(Mn);
  });
}
function A2(e) {
  const t = pd((n) => {
    let r;
    const o = {
      type: "open",
      config: e,
      resolve: n,
      setCloseFn: (a) => {
        r = a;
      }
    };
    return Ka.push(o), () => {
      r ? qr(() => {
        r();
      }) : o.skipped = !0;
    };
  });
  return Ys(), t;
}
function k2(e, t) {
  const n = Qg();
  process.env.NODE_ENV !== "production" && !n.holderRender && Sw("message");
  const r = pd((o) => {
    let a;
    const i = {
      type: e,
      args: t,
      resolve: o,
      setCloseFn: (s) => {
        a = s;
      }
    };
    return Ka.push(i), () => {
      a ? qr(() => {
        a();
      }) : i.skipped = !0;
    };
  });
  return Ys(), r;
}
const j2 = (e) => {
  Ka.push({
    type: "destroy",
    key: e
  }), Ys();
}, F2 = ["success", "info", "warning", "error", "loading"], L2 = {
  open: A2,
  destroy: j2,
  config: D2,
  useMessage: xx,
  _InternalPanelDoNotUseOrYouWillBeFired: gx
}, Cu = L2;
F2.forEach((e) => {
  Cu[e] = (...t) => k2(e, t);
});
process.env.NODE_ENV;
process.env.NODE_ENV;
var z2 = {
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1,
  gapPosition: "bottom"
}, V2 = function() {
  var t = we([]), n = we(null);
  return Ge(function() {
    var r = Date.now(), o = !1;
    t.current.forEach(function(a) {
      if (a) {
        o = !0;
        var i = a.style;
        i.transitionDuration = ".3s, .3s, .3s, .06s", n.current && r - n.current < 100 && (i.transitionDuration = "0s, 0s");
      }
    }), o && (n.current = Date.now());
  }), t.current;
};
process.env.NODE_ENV;
var xp = 0, B2 = process.env.NODE_ENV !== "test" && mn();
function H2() {
  var e;
  return B2 ? (e = xp, xp += 1) : e = "TEST_OR_SSR", e;
}
const W2 = function(e) {
  var t = d.useState(), n = X(t, 2), r = n[0], o = n[1];
  return d.useEffect(function() {
    o("rc_progress_".concat(H2()));
  }, []), e || r;
};
var $p = function(t) {
  var n = t.bg, r = t.children;
  return /* @__PURE__ */ d.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: n
    }
  }, r);
};
function Op(e, t) {
  return Object.keys(e).map(function(n) {
    var r = parseFloat(n), o = "".concat(Math.floor(r * t), "%");
    return "".concat(e[n], " ").concat(o);
  });
}
var Wb = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.color, o = e.gradientId, a = e.radius, i = e.style, s = e.ptg, c = e.strokeLinecap, l = e.strokeWidth, u = e.size, m = e.gapDegree, f = r && Re(r) === "object", v = f ? "#FFF" : void 0, g = u / 2, y = /* @__PURE__ */ d.createElement("circle", {
    className: "".concat(n, "-circle-path"),
    r: a,
    cx: g,
    cy: g,
    stroke: v,
    strokeLinecap: c,
    strokeWidth: l,
    opacity: s === 0 ? 0 : 1,
    style: i,
    ref: t
  });
  if (!f)
    return y;
  var p = "".concat(o, "-conic"), C = m ? "".concat(180 + m / 2, "deg") : "0deg", S = Op(r, (360 - m) / 360), E = Op(r, 1), h = "conic-gradient(from ".concat(C, ", ").concat(S.join(", "), ")"), b = "linear-gradient(to ".concat(m ? "bottom" : "top", ", ").concat(E.join(", "), ")");
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("mask", {
    id: p
  }, y), /* @__PURE__ */ d.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: u,
    height: u,
    mask: "url(#".concat(p, ")")
  }, /* @__PURE__ */ d.createElement($p, {
    bg: b
  }, /* @__PURE__ */ d.createElement($p, {
    bg: h
  }))));
});
process.env.NODE_ENV !== "production" && (Wb.displayName = "PtgCircle");
var ga = 100, Xc = function(t, n, r, o, a, i, s, c, l, u) {
  var m = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0, f = r / 100 * 360 * ((360 - i) / 360), v = i === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[s], g = (100 - o) / 100 * n;
  l === "round" && o !== 100 && (g += u / 2, g >= n && (g = n - 0.01));
  var y = ga / 2;
  return {
    stroke: typeof c == "string" ? c : void 0,
    strokeDasharray: "".concat(n, "px ").concat(t),
    strokeDashoffset: g + m,
    transform: "rotate(".concat(a + f + v, "deg)"),
    transformOrigin: "".concat(y, "px ").concat(y, "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
    fillOpacity: 0
  };
}, U2 = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];
function Np(e) {
  var t = e ?? [];
  return Array.isArray(t) ? t : [t];
}
var Ub = function(t) {
  var n = B(B({}, z2), t), r = n.id, o = n.prefixCls, a = n.steps, i = n.strokeWidth, s = n.trailWidth, c = n.gapDegree, l = c === void 0 ? 0 : c, u = n.gapPosition, m = n.trailColor, f = n.strokeLinecap, v = n.style, g = n.className, y = n.strokeColor, p = n.percent, C = Qe(n, U2), S = ga / 2, E = W2(r), h = "".concat(E, "-gradient"), b = S - i / 2, w = Math.PI * 2 * b, x = l > 0 ? 90 + l / 2 : -90, N = w * ((360 - l) / 360), $ = Re(a) === "object" ? a : {
    count: a,
    gap: 2
  }, O = $.count, _ = $.gap, R = Np(p), P = Np(y), I = P.find(function(q) {
    return q && Re(q) === "object";
  }), D = I && Re(I) === "object", M = D ? "butt" : f, k = Xc(w, N, 0, 100, x, l, u, m, M, i), j = V2(), T = function() {
    var U = 0;
    return R.map(function(V, L) {
      var A = P[L] || P[P.length - 1], W = Xc(w, N, U, V, x, l, u, A, M, i);
      return U += V, /* @__PURE__ */ d.createElement(Wb, {
        key: L,
        color: A,
        ptg: V,
        radius: b,
        prefixCls: o,
        gradientId: h,
        style: W,
        strokeLinecap: M,
        strokeWidth: i,
        gapDegree: l,
        ref: function(G) {
          j[L] = G;
        },
        size: ga
      });
    }).reverse();
  }, H = function() {
    var U = Math.round(O * (R[0] / 100)), V = 100 / O, L = 0;
    return new Array(O).fill(null).map(function(A, W) {
      var Z = W <= U - 1 ? P[0] : m, G = Z && Re(Z) === "object" ? "url(#".concat(h, ")") : void 0, re = Xc(w, N, L, V, x, l, u, Z, "butt", i, _);
      return L += (N - re.strokeDashoffset + _) * 100 / N, /* @__PURE__ */ d.createElement("circle", {
        key: W,
        className: "".concat(o, "-circle-path"),
        r: b,
        cx: S,
        cy: S,
        stroke: G,
        strokeWidth: i,
        opacity: 1,
        style: re,
        ref: function(te) {
          j[W] = te;
        }
      });
    });
  };
  return /* @__PURE__ */ d.createElement("svg", ye({
    className: Q("".concat(o, "-circle"), g),
    viewBox: "0 0 ".concat(ga, " ").concat(ga),
    style: v,
    id: r,
    role: "presentation"
  }, C), !O && /* @__PURE__ */ d.createElement("circle", {
    className: "".concat(o, "-circle-trail"),
    r: b,
    cx: S,
    cy: S,
    stroke: m,
    strokeLinecap: M,
    strokeWidth: s || i,
    style: k
  }), O ? H() : T());
};
process.env.NODE_ENV !== "production" && (Ub.displayName = "Circle");
function Ir(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function hs({
  success: e,
  successPercent: t
}) {
  let n = t;
  return e && "progress" in e && (n = e.progress), e && "percent" in e && (n = e.percent), n;
}
const q2 = ({
  percent: e,
  success: t,
  successPercent: n
}) => {
  const r = Ir(hs({
    success: t,
    successPercent: n
  }));
  return [r, Ir(Ir(e) - r)];
}, K2 = ({
  success: e = {},
  strokeColor: t
}) => {
  const {
    strokeColor: n
  } = e;
  return [n || Po.green, t || null];
}, Zs = (e, t, n) => {
  var r, o, a, i;
  let s = -1, c = -1;
  if (t === "step") {
    const l = n.steps, u = n.strokeWidth;
    typeof e == "string" || typeof e > "u" ? (s = e === "small" ? 2 : 14, c = u ?? 8) : typeof e == "number" ? [s, c] = [e, e] : [s = 14, c = 8] = Array.isArray(e) ? e : [e.width, e.height], s *= l;
  } else if (t === "line") {
    const l = n == null ? void 0 : n.strokeWidth;
    typeof e == "string" || typeof e > "u" ? c = l || (e === "small" ? 6 : 8) : typeof e == "number" ? [s, c] = [e, e] : [s = -1, c = 8] = Array.isArray(e) ? e : [e.width, e.height];
  } else (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [s, c] = e === "small" ? [60, 60] : [120, 120] : typeof e == "number" ? [s, c] = [e, e] : Array.isArray(e) && (s = (o = (r = e[0]) !== null && r !== void 0 ? r : e[1]) !== null && o !== void 0 ? o : 120, c = (i = (a = e[0]) !== null && a !== void 0 ? a : e[1]) !== null && i !== void 0 ? i : 120));
  return [s, c];
}, G2 = 3, X2 = (e) => G2 / e * 100, Q2 = (e) => {
  const {
    prefixCls: t,
    trailColor: n = null,
    strokeLinecap: r = "round",
    gapPosition: o,
    gapDegree: a,
    width: i = 120,
    type: s,
    children: c,
    success: l,
    size: u = i,
    steps: m
  } = e, [f, v] = Zs(u, "circle");
  let {
    strokeWidth: g
  } = e;
  g === void 0 && (g = Math.max(X2(f), 6));
  const y = {
    width: f,
    height: v,
    fontSize: f * 0.15 + 6
  }, p = d.useMemo(() => {
    if (a || a === 0)
      return a;
    if (s === "dashboard")
      return 75;
  }, [a, s]), C = q2(e), S = o || s === "dashboard" && "bottom" || void 0, E = Object.prototype.toString.call(e.strokeColor) === "[object Object]", h = K2({
    success: l,
    strokeColor: e.strokeColor
  }), b = Q(`${t}-inner`, {
    [`${t}-circle-gradient`]: E
  }), w = /* @__PURE__ */ d.createElement(Ub, {
    steps: m,
    percent: m ? C[1] : C,
    strokeWidth: g,
    trailWidth: g,
    strokeColor: m ? h[1] : h,
    strokeLinecap: r,
    trailColor: n,
    prefixCls: t,
    gapDegree: p,
    gapPosition: S
  }), x = f <= 20, N = /* @__PURE__ */ d.createElement("div", {
    className: b,
    style: y
  }, w, !x && c);
  return x ? /* @__PURE__ */ d.createElement(er, {
    title: c
  }, N) : N;
}, bs = "--progress-line-stroke-color", qb = "--progress-percent", _p = (e) => {
  const t = e ? "100%" : "-100%";
  return new wt(`antProgress${e ? "RTL" : "LTR"}Active`, {
    "0%": {
      transform: `translateX(${t}) scaleX(0)`,
      opacity: 0.1
    },
    "20%": {
      transform: `translateX(${t}) scaleX(0)`,
      opacity: 0.5
    },
    to: {
      transform: "translateX(0) scaleX(1)",
      opacity: 0
    }
  });
}, Y2 = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Kn(e)), {
      display: "inline-block",
      "&-rtl": {
        direction: "rtl"
      },
      "&-line": {
        position: "relative",
        width: "100%",
        fontSize: e.fontSize
      },
      [`${t}-outer`]: {
        display: "inline-flex",
        alignItems: "center",
        width: "100%"
      },
      [`${t}-inner`]: {
        position: "relative",
        display: "inline-block",
        width: "100%",
        flex: 1,
        overflow: "hidden",
        verticalAlign: "middle",
        backgroundColor: e.remainingColor,
        borderRadius: e.lineBorderRadius
      },
      [`${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.defaultColor
        }
      },
      [`${t}-success-bg, ${t}-bg`]: {
        position: "relative",
        background: e.defaultColor,
        borderRadius: e.lineBorderRadius,
        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
      },
      [`${t}-layout-bottom`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [`${t}-text`]: {
          width: "max-content",
          marginInlineStart: 0,
          marginTop: e.marginXXS
        }
      },
      [`${t}-bg`]: {
        overflow: "hidden",
        "&::after": {
          content: '""',
          background: {
            _multi_value_: !0,
            value: ["inherit", `var(${bs})`]
          },
          height: "100%",
          width: `calc(1 / var(${qb}) * 100%)`,
          display: "block"
        },
        [`&${t}-bg-inner`]: {
          minWidth: "max-content",
          "&::after": {
            content: "none"
          },
          [`${t}-text-inner`]: {
            color: e.colorWhite,
            [`&${t}-text-bright`]: {
              color: "rgba(0, 0, 0, 0.45)"
            }
          }
        }
      },
      [`${t}-success-bg`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: e.colorSuccess
      },
      [`${t}-text`]: {
        display: "inline-block",
        marginInlineStart: e.marginXS,
        color: e.colorText,
        lineHeight: 1,
        width: "2em",
        whiteSpace: "nowrap",
        textAlign: "start",
        verticalAlign: "middle",
        wordBreak: "normal",
        [n]: {
          fontSize: e.fontSize
        },
        [`&${t}-text-outer`]: {
          width: "max-content"
        },
        [`&${t}-text-outer${t}-text-start`]: {
          width: "max-content",
          marginInlineStart: 0,
          marginInlineEnd: e.marginXS
        }
      },
      [`${t}-text-inner`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginInlineStart: 0,
        padding: `0 ${oe(e.paddingXXS)}`,
        [`&${t}-text-start`]: {
          justifyContent: "start"
        },
        [`&${t}-text-end`]: {
          justifyContent: "end"
        }
      },
      [`&${t}-status-active`]: {
        [`${t}-bg::before`]: {
          position: "absolute",
          inset: 0,
          backgroundColor: e.colorBgContainer,
          borderRadius: e.lineBorderRadius,
          opacity: 0,
          animationName: _p(),
          animationDuration: e.progressActiveMotionDuration,
          animationTimingFunction: e.motionEaseOutQuint,
          animationIterationCount: "infinite",
          content: '""'
        }
      },
      [`&${t}-rtl${t}-status-active`]: {
        [`${t}-bg::before`]: {
          animationName: _p(!0)
        }
      },
      [`&${t}-status-exception`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorError
        },
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorError
        }
      },
      [`&${t}-status-success`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorSuccess
        },
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      },
      [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorSuccess
        }
      }
    })
  };
}, Z2 = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      [`${t}-circle-trail`]: {
        stroke: e.remainingColor
      },
      [`&${t}-circle ${t}-inner`]: {
        position: "relative",
        lineHeight: 1,
        backgroundColor: "transparent"
      },
      [`&${t}-circle ${t}-text`]: {
        position: "absolute",
        insetBlockStart: "50%",
        insetInlineStart: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        color: e.circleTextColor,
        fontSize: e.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: "normal",
        textAlign: "center",
        transform: "translateY(-50%)",
        [n]: {
          fontSize: e.circleIconFontSize
        }
      },
      [`${t}-circle&-status-exception`]: {
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`${t}-circle&-status-success`]: {
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      }
    },
    [`${t}-inline-circle`]: {
      lineHeight: 1,
      [`${t}-inner`]: {
        verticalAlign: "bottom"
      }
    }
  };
}, J2 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`${t}-steps`]: {
        display: "inline-block",
        "&-outer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        "&-item": {
          flexShrink: 0,
          minWidth: e.progressStepMinWidth,
          marginInlineEnd: e.progressStepMarginInlineEnd,
          backgroundColor: e.remainingColor,
          transition: `all ${e.motionDurationSlow}`,
          "&-active": {
            backgroundColor: e.defaultColor
          }
        }
      }
    }
  };
}, eI = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      [`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]: {
        fontSize: e.fontSizeSM
      }
    }
  };
}, tI = (e) => ({
  circleTextColor: e.colorText,
  defaultColor: e.colorInfo,
  remainingColor: e.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: "1em",
  circleIconFontSize: `${e.fontSize / e.fontSizeSM}em`
}), nI = bn("Progress", (e) => {
  const t = e.calc(e.marginXXS).div(2).equal(), n = kt(e, {
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [Y2(n), Z2(n), J2(n), eI(n)];
}, tI);
var rI = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const oI = (e) => {
  let t = [];
  return Object.keys(e).forEach((n) => {
    const r = parseFloat(n.replace(/%/g, ""));
    Number.isNaN(r) || t.push({
      key: r,
      value: e[n]
    });
  }), t = t.sort((n, r) => n.key - r.key), t.map(({
    key: n,
    value: r
  }) => `${r} ${n}%`).join(", ");
}, aI = (e, t) => {
  const {
    from: n = Po.blue,
    to: r = Po.blue,
    direction: o = t === "rtl" ? "to left" : "to right"
  } = e, a = rI(e, ["from", "to", "direction"]);
  if (Object.keys(a).length !== 0) {
    const s = oI(a), c = `linear-gradient(${o}, ${s})`;
    return {
      background: c,
      [bs]: c
    };
  }
  const i = `linear-gradient(${o}, ${n}, ${r})`;
  return {
    background: i,
    [bs]: i
  };
}, iI = (e) => {
  const {
    prefixCls: t,
    direction: n,
    percent: r,
    size: o,
    strokeWidth: a,
    strokeColor: i,
    strokeLinecap: s = "round",
    children: c,
    trailColor: l = null,
    percentPosition: u,
    success: m
  } = e, {
    align: f,
    type: v
  } = u, g = i && typeof i != "string" ? aI(i, n) : {
    [bs]: i,
    background: i
  }, y = s === "square" || s === "butt" ? 0 : void 0, p = o ?? [-1, a || (o === "small" ? 6 : 8)], [C, S] = Zs(p, "line", {
    strokeWidth: a
  });
  process.env.NODE_ENV !== "production" && At("Progress").deprecated(!("strokeWidth" in e), "strokeWidth", "size");
  const E = {
    backgroundColor: l || void 0,
    borderRadius: y
  }, h = Object.assign(Object.assign({
    width: `${Ir(r)}%`,
    height: S,
    borderRadius: y
  }, g), {
    [qb]: Ir(r) / 100
  }), b = hs(e), w = {
    width: `${Ir(b)}%`,
    height: S,
    borderRadius: y,
    backgroundColor: m == null ? void 0 : m.strokeColor
  }, x = {
    width: C < 0 ? "100%" : C
  }, N = /* @__PURE__ */ d.createElement("div", {
    className: `${t}-inner`,
    style: E
  }, /* @__PURE__ */ d.createElement("div", {
    className: Q(`${t}-bg`, `${t}-bg-${v}`),
    style: h
  }, v === "inner" && c), b !== void 0 && /* @__PURE__ */ d.createElement("div", {
    className: `${t}-success-bg`,
    style: w
  })), $ = v === "outer" && f === "start", O = v === "outer" && f === "end";
  return v === "outer" && f === "center" ? /* @__PURE__ */ d.createElement("div", {
    className: `${t}-layout-bottom`
  }, N, c) : /* @__PURE__ */ d.createElement("div", {
    className: `${t}-outer`,
    style: x
  }, $ && c, N, O && c);
}, sI = (e) => {
  const {
    size: t,
    steps: n,
    rounding: r = Math.round,
    percent: o = 0,
    strokeWidth: a = 8,
    strokeColor: i,
    trailColor: s = null,
    prefixCls: c,
    children: l
  } = e, u = r(n * (o / 100)), f = t ?? [t === "small" ? 2 : 14, a], [v, g] = Zs(f, "step", {
    steps: n,
    strokeWidth: a
  }), y = v / n, p = Array.from({
    length: n
  });
  for (let C = 0; C < n; C++) {
    const S = Array.isArray(i) ? i[C] : i;
    p[C] = /* @__PURE__ */ d.createElement("div", {
      key: C,
      className: Q(`${c}-steps-item`, {
        [`${c}-steps-item-active`]: C <= u - 1
      }),
      style: {
        backgroundColor: C <= u - 1 ? S : s,
        width: y,
        height: g
      }
    });
  }
  return /* @__PURE__ */ d.createElement("div", {
    className: `${c}-steps-outer`
  }, p, l);
};
var cI = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const lI = ["normal", "exception", "active", "success"], Kb = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    rootClassName: o,
    steps: a,
    strokeColor: i,
    percent: s = 0,
    size: c = "default",
    showInfo: l = !0,
    type: u = "line",
    status: m,
    format: f,
    style: v,
    percentPosition: g = {}
  } = e, y = cI(e, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style", "percentPosition"]), {
    align: p = "end",
    type: C = "outer"
  } = g, S = Array.isArray(i) ? i[0] : i, E = typeof i == "string" || Array.isArray(i) ? i : void 0, h = d.useMemo(() => {
    if (S) {
      const T = typeof S == "string" ? S : Object.values(S)[0];
      return new Mt(T).isLight();
    }
    return !1;
  }, [i]), b = d.useMemo(() => {
    var T, H;
    const q = hs(e);
    return parseInt(q !== void 0 ? (T = q ?? 0) === null || T === void 0 ? void 0 : T.toString() : (H = s ?? 0) === null || H === void 0 ? void 0 : H.toString(), 10);
  }, [s, e.success, e.successPercent]), w = d.useMemo(() => !lI.includes(m) && b >= 100 ? "success" : m || "normal", [m, b]), {
    getPrefixCls: x,
    direction: N,
    progress: $
  } = d.useContext(st), O = x("progress", n), [_, R, P] = nI(O), I = u === "line", D = I && !a, M = d.useMemo(() => {
    if (!l)
      return null;
    const T = hs(e);
    let H;
    const q = f || ((V) => `${V}%`), U = I && h && C === "inner";
    return C === "inner" || f || w !== "exception" && w !== "success" ? H = q(Ir(s), Ir(T)) : w === "exception" ? H = I ? /* @__PURE__ */ d.createElement(Ts, null) : /* @__PURE__ */ d.createElement(Ds, null) : w === "success" && (H = I ? /* @__PURE__ */ d.createElement(dd, null) : /* @__PURE__ */ d.createElement(Gh, null)), /* @__PURE__ */ d.createElement("span", {
      className: Q(`${O}-text`, {
        [`${O}-text-bright`]: U,
        [`${O}-text-${p}`]: D,
        [`${O}-text-${C}`]: D
      }),
      title: typeof H == "string" ? H : void 0
    }, H);
  }, [l, s, b, w, u, O, f]);
  if (process.env.NODE_ENV !== "production") {
    const T = At("Progress");
    T.deprecated(!("successPercent" in e), "successPercent", "success.percent"), T.deprecated(!("width" in e), "width", "size"), (u === "circle" || u === "dashboard") && (Array.isArray(c) ? process.env.NODE_ENV !== "production" && T(!1, "usage", 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.') : typeof c == "object" && process.env.NODE_ENV !== "production" && T(!1, "usage", 'Type "circle" and "dashboard" do not accept object as `size`, please use number or preset size instead.')), e.success && "progress" in e.success && T.deprecated(!1, "success.progress", "success.percent");
  }
  let k;
  u === "line" ? k = a ? /* @__PURE__ */ d.createElement(sI, Object.assign({}, e, {
    strokeColor: E,
    prefixCls: O,
    steps: typeof a == "object" ? a.count : a
  }), M) : /* @__PURE__ */ d.createElement(iI, Object.assign({}, e, {
    strokeColor: S,
    prefixCls: O,
    direction: N,
    percentPosition: {
      align: p,
      type: C
    }
  }), M) : (u === "circle" || u === "dashboard") && (k = /* @__PURE__ */ d.createElement(Q2, Object.assign({}, e, {
    strokeColor: S,
    prefixCls: O,
    progressStatus: w
  }), M));
  const j = Q(O, `${O}-status-${w}`, {
    [`${O}-${u === "dashboard" && "circle" || u}`]: u !== "line",
    [`${O}-inline-circle`]: u === "circle" && Zs(c, "circle")[0] <= 20,
    [`${O}-line`]: D,
    [`${O}-line-align-${p}`]: D,
    [`${O}-line-position-${C}`]: D,
    [`${O}-steps`]: a,
    [`${O}-show-info`]: l,
    [`${O}-${c}`]: typeof c == "string",
    [`${O}-rtl`]: N === "rtl"
  }, $ == null ? void 0 : $.className, r, o, R, P);
  return _(/* @__PURE__ */ d.createElement("div", Object.assign({
    ref: t,
    style: Object.assign(Object.assign({}, $ == null ? void 0 : $.style), v),
    className: j,
    role: "progressbar",
    "aria-valuenow": b,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, Dn(y, ["trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"])), k));
});
process.env.NODE_ENV !== "production" && (Kb.displayName = "Progress");
var uI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z" } }] }, name: "bulb", theme: "filled" }, dI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z" } }] }, name: "bulb", theme: "outlined" }, fI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, mI = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: fI
  }));
}, Gb = /* @__PURE__ */ d.forwardRef(mI);
process.env.NODE_ENV !== "production" && (Gb.displayName = "DeleteOutlined");
var Xb = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" }, pI = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: Xb
  }));
}, Qb = /* @__PURE__ */ d.forwardRef(pI);
process.env.NODE_ENV !== "production" && (Qb.displayName = "DownloadOutlined");
var vI = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: n } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: t } }] };
}, name: "file", theme: "twotone" }, gI = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: vI
  }));
}, Yb = /* @__PURE__ */ d.forwardRef(gI);
process.env.NODE_ENV !== "production" && (Yb.displayName = "FileTwoTone");
var Zb = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" }, hI = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: Zb
  }));
}, Jb = /* @__PURE__ */ d.forwardRef(hI);
process.env.NODE_ENV !== "production" && (Jb.displayName = "PaperClipOutlined");
var bI = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: t } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: n } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: n } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: n } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: t } }] };
}, name: "picture", theme: "twotone" }, yI = function(t, n) {
  return /* @__PURE__ */ d.createElement(Gt, ye({}, t, {
    ref: n,
    icon: bI
  }));
}, e0 = /* @__PURE__ */ d.forwardRef(yI);
process.env.NODE_ENV !== "production" && (e0.displayName = "PictureTwoTone");
var CI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M300 328a60 60 0 10120 0 60 60 0 10-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 10120 0 60 60 0 10-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "robot", theme: "outlined" }, SI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" } }] }, name: "send", theme: "outlined" };
const EI = (e) => {
  const t = e != null && e.algorithm ? as(e.algorithm) : id, n = Object.assign(Object.assign({}, Lo), e == null ? void 0 : e.token);
  return Jv(n, {
    override: e == null ? void 0 : e.token
  }, t, cd);
};
function wI(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e, r = n - 2;
  return {
    sizeXXL: t * (r + 10),
    sizeXL: t * (r + 6),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 2),
    sizeMS: t * (r + 1),
    size: t * r,
    sizeSM: t * r,
    sizeXS: t * (r - 1),
    sizeXXS: t * (r - 1)
  };
}
const xI = (e, t) => {
  const n = t ?? Is(e), r = n.fontSizeSM, o = n.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), wI(t ?? e)), Ng(r)), {
    // controlHeight
    controlHeight: o
  }), Og(Object.assign(Object.assign({}, n), {
    controlHeight: o
  })));
}, In = (e, t) => new Mt(e).setA(t).toRgbString(), Eo = (e, t) => new Mt(e).lighten(t).toHexString(), $I = (e) => {
  const t = eo(e, {
    theme: "dark"
  });
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[6],
    6: t[5],
    7: t[4],
    8: t[6],
    9: t[5],
    10: t[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
}, OI = (e, t) => {
  const n = e || "#000", r = t || "#fff";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: In(r, 0.85),
    colorTextSecondary: In(r, 0.65),
    colorTextTertiary: In(r, 0.45),
    colorTextQuaternary: In(r, 0.25),
    colorFill: In(r, 0.18),
    colorFillSecondary: In(r, 0.12),
    colorFillTertiary: In(r, 0.08),
    colorFillQuaternary: In(r, 0.04),
    colorBgSolid: In(r, 0.95),
    colorBgSolidHover: In(r, 1),
    colorBgSolidActive: In(r, 0.9),
    colorBgElevated: Eo(n, 12),
    colorBgContainer: Eo(n, 8),
    colorBgLayout: Eo(n, 0),
    colorBgSpotlight: Eo(n, 26),
    colorBgBlur: In(r, 0.04),
    colorBorder: Eo(n, 26),
    colorBorderSecondary: Eo(n, 19)
  };
}, NI = (e, t) => {
  const n = Object.keys(ad).map((a) => {
    const i = eo(e[a], {
      theme: "dark"
    });
    return Array.from({
      length: 10
    }, () => 1).reduce((s, c, l) => (s[`${a}-${l + 1}`] = i[l], s[`${a}${l + 1}`] = i[l], s), {});
  }).reduce((a, i) => (a = Object.assign(Object.assign({}, a), i), a), {}), r = t ?? Is(e), o = $g(e, {
    generateColorPalettes: $I,
    generateNeutralColorPalettes: OI
  });
  return Object.assign(Object.assign(Object.assign(Object.assign({}, r), n), o), {
    // Customize selected item background color
    // https://github.com/ant-design/ant-design/issues/30524#issuecomment-871961867
    colorPrimaryBg: o.colorPrimaryBorder,
    colorPrimaryBgHover: o.colorPrimaryBorderHover
  });
};
function _I() {
  const [e, t, n] = ar();
  return {
    theme: e,
    token: t,
    hashId: n
  };
}
const Pp = {
  /** Default seedToken */
  defaultSeed: Va.token,
  useToken: _I,
  defaultAlgorithm: Is,
  darkAlgorithm: NI,
  compactAlgorithm: xI,
  getDesignToken: EI,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  defaultConfig: Va,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  _internalContext: sd
}, Qc = function(e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(","), r = e.name || "", o = e.type || "", a = o.replace(/\/.*$/, "");
    return n.some(function(i) {
      var s = i.trim();
      if (/^\*(\/\*)?$/.test(i))
        return !0;
      if (s.charAt(0) === ".") {
        var c = r.toLowerCase(), l = s.toLowerCase(), u = [l];
        return (l === ".jpg" || l === ".jpeg") && (u = [".jpg", ".jpeg"]), u.some(function(m) {
          return c.endsWith(m);
        });
      }
      return /\/\*$/.test(s) ? a === s.replace(/\/.*$/, "") : o === s ? !0 : /^\w+$/.test(s) ? (pt(!1, "Upload takes an invalidate 'accept' type '".concat(s, "'.Skip for check.")), !0) : !1;
    });
  }
  return !0;
};
function PI(e, t) {
  var n = "cannot ".concat(e.method, " ").concat(e.action, " ").concat(t.status, "'"), r = new Error(n);
  return r.status = t.status, r.method = e.method, r.url = e.action, r;
}
function Rp(e) {
  var t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function RI(e) {
  var t = new XMLHttpRequest();
  e.onProgress && t.upload && (t.upload.onprogress = function(a) {
    a.total > 0 && (a.percent = a.loaded / a.total * 100), e.onProgress(a);
  });
  var n = new FormData();
  e.data && Object.keys(e.data).forEach(function(o) {
    var a = e.data[o];
    if (Array.isArray(a)) {
      a.forEach(function(i) {
        n.append("".concat(o, "[]"), i);
      });
      return;
    }
    n.append(o, a);
  }), e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file), t.onerror = function(a) {
    e.onError(a);
  }, t.onload = function() {
    return t.status < 200 || t.status >= 300 ? e.onError(PI(e, t), Rp(t)) : e.onSuccess(Rp(t), t);
  }, t.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  var r = e.headers || {};
  return r["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(r).forEach(function(o) {
    r[o] !== null && t.setRequestHeader(o, r[o]);
  }), t.send(n), {
    abort: function() {
      t.abort();
    }
  };
}
var II = /* @__PURE__ */ function() {
  var e = fn(/* @__PURE__ */ mt().mark(function t(n, r) {
    var o, a, i, s, c, l, u, m;
    return mt().wrap(function(v) {
      for (; ; ) switch (v.prev = v.next) {
        case 0:
          l = function() {
            return l = fn(/* @__PURE__ */ mt().mark(function y(p) {
              return mt().wrap(function(S) {
                for (; ; ) switch (S.prev = S.next) {
                  case 0:
                    return S.abrupt("return", new Promise(function(E) {
                      p.file(function(h) {
                        r(h) ? (p.fullPath && !h.webkitRelativePath && (Object.defineProperties(h, {
                          webkitRelativePath: {
                            writable: !0
                          }
                        }), h.webkitRelativePath = p.fullPath.replace(/^\//, ""), Object.defineProperties(h, {
                          webkitRelativePath: {
                            writable: !1
                          }
                        })), E(h)) : E(null);
                      });
                    }));
                  case 1:
                  case "end":
                    return S.stop();
                }
              }, y);
            })), l.apply(this, arguments);
          }, c = function(y) {
            return l.apply(this, arguments);
          }, s = function() {
            return s = fn(/* @__PURE__ */ mt().mark(function y(p) {
              var C, S, E, h, b;
              return mt().wrap(function(x) {
                for (; ; ) switch (x.prev = x.next) {
                  case 0:
                    C = p.createReader(), S = [];
                  case 2:
                    return x.next = 5, new Promise(function(N) {
                      C.readEntries(N, function() {
                        return N([]);
                      });
                    });
                  case 5:
                    if (E = x.sent, h = E.length, h) {
                      x.next = 9;
                      break;
                    }
                    return x.abrupt("break", 12);
                  case 9:
                    for (b = 0; b < h; b++)
                      S.push(E[b]);
                    x.next = 2;
                    break;
                  case 12:
                    return x.abrupt("return", S);
                  case 13:
                  case "end":
                    return x.stop();
                }
              }, y);
            })), s.apply(this, arguments);
          }, i = function(y) {
            return s.apply(this, arguments);
          }, o = [], a = [], n.forEach(function(g) {
            return a.push(g.webkitGetAsEntry());
          }), u = /* @__PURE__ */ function() {
            var g = fn(/* @__PURE__ */ mt().mark(function y(p, C) {
              var S, E;
              return mt().wrap(function(b) {
                for (; ; ) switch (b.prev = b.next) {
                  case 0:
                    if (p) {
                      b.next = 2;
                      break;
                    }
                    return b.abrupt("return");
                  case 2:
                    if (p.path = C || "", !p.isFile) {
                      b.next = 10;
                      break;
                    }
                    return b.next = 6, c(p);
                  case 6:
                    S = b.sent, S && o.push(S), b.next = 15;
                    break;
                  case 10:
                    if (!p.isDirectory) {
                      b.next = 15;
                      break;
                    }
                    return b.next = 13, i(p);
                  case 13:
                    E = b.sent, a.push.apply(a, he(E));
                  case 15:
                  case "end":
                    return b.stop();
                }
              }, y);
            }));
            return function(p, C) {
              return g.apply(this, arguments);
            };
          }(), m = 0;
        case 9:
          if (!(m < a.length)) {
            v.next = 15;
            break;
          }
          return v.next = 12, u(a[m]);
        case 12:
          m++, v.next = 9;
          break;
        case 15:
          return v.abrupt("return", o);
        case 16:
        case "end":
          return v.stop();
      }
    }, t);
  }));
  return function(n, r) {
    return e.apply(this, arguments);
  };
}(), MI = +/* @__PURE__ */ new Date(), TI = 0;
function Yc() {
  return "rc-upload-".concat(MI, "-").concat(++TI);
}
var DI = ["component", "prefixCls", "className", "classNames", "disabled", "id", "name", "style", "styles", "multiple", "accept", "capture", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave", "hasControlInside"], AI = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n() {
    var r;
    Vt(this, n);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(a)), F(Ae(r), "state", {
      uid: Yc()
    }), F(Ae(r), "reqs", {}), F(Ae(r), "fileInput", void 0), F(Ae(r), "_isMounted", void 0), F(Ae(r), "onChange", function(s) {
      var c = r.props, l = c.accept, u = c.directory, m = s.target.files, f = he(m).filter(function(v) {
        return !u || Qc(v, l);
      });
      r.uploadFiles(f), r.reset();
    }), F(Ae(r), "onClick", function(s) {
      var c = r.fileInput;
      if (c) {
        var l = s.target, u = r.props.onClick;
        if (l && l.tagName === "BUTTON") {
          var m = c.parentNode;
          m.focus(), l.blur();
        }
        c.click(), u && u(s);
      }
    }), F(Ae(r), "onKeyDown", function(s) {
      s.key === "Enter" && r.onClick(s);
    }), F(Ae(r), "onDataTransferFiles", /* @__PURE__ */ function() {
      var s = fn(/* @__PURE__ */ mt().mark(function c(l, u) {
        var m, f, v, g, y, p, C;
        return mt().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (m = r.props, f = m.multiple, v = m.accept, g = m.directory, y = he(l.items || []), p = he(l.files || []), (p.length > 0 || y.some(function(h) {
                return h.kind === "file";
              })) && (u == null || u()), !g) {
                E.next = 11;
                break;
              }
              return E.next = 7, II(Array.prototype.slice.call(y), function(h) {
                return Qc(h, r.props.accept);
              });
            case 7:
              p = E.sent, r.uploadFiles(p), E.next = 14;
              break;
            case 11:
              C = he(p).filter(function(h) {
                return Qc(h, v);
              }), f === !1 && (C = p.slice(0, 1)), r.uploadFiles(C);
            case 14:
            case "end":
              return E.stop();
          }
        }, c);
      }));
      return function(c, l) {
        return s.apply(this, arguments);
      };
    }()), F(Ae(r), "onFilePaste", /* @__PURE__ */ function() {
      var s = fn(/* @__PURE__ */ mt().mark(function c(l) {
        var u, m;
        return mt().wrap(function(v) {
          for (; ; ) switch (v.prev = v.next) {
            case 0:
              if (u = r.props.pastable, u) {
                v.next = 3;
                break;
              }
              return v.abrupt("return");
            case 3:
              if (l.type !== "paste") {
                v.next = 6;
                break;
              }
              return m = l.clipboardData, v.abrupt("return", r.onDataTransferFiles(m, function() {
                l.preventDefault();
              }));
            case 6:
            case "end":
              return v.stop();
          }
        }, c);
      }));
      return function(c) {
        return s.apply(this, arguments);
      };
    }()), F(Ae(r), "onFileDragOver", function(s) {
      s.preventDefault();
    }), F(Ae(r), "onFileDrop", /* @__PURE__ */ function() {
      var s = fn(/* @__PURE__ */ mt().mark(function c(l) {
        var u;
        return mt().wrap(function(f) {
          for (; ; ) switch (f.prev = f.next) {
            case 0:
              if (l.preventDefault(), l.type !== "drop") {
                f.next = 4;
                break;
              }
              return u = l.dataTransfer, f.abrupt("return", r.onDataTransferFiles(u));
            case 4:
            case "end":
              return f.stop();
          }
        }, c);
      }));
      return function(c) {
        return s.apply(this, arguments);
      };
    }()), F(Ae(r), "uploadFiles", function(s) {
      var c = he(s), l = c.map(function(u) {
        return u.uid = Yc(), r.processFile(u, c);
      });
      Promise.all(l).then(function(u) {
        var m = r.props.onBatchStart;
        m == null || m(u.map(function(f) {
          var v = f.origin, g = f.parsedFile;
          return {
            file: v,
            parsedFile: g
          };
        })), u.filter(function(f) {
          return f.parsedFile !== null;
        }).forEach(function(f) {
          r.post(f);
        });
      });
    }), F(Ae(r), "processFile", /* @__PURE__ */ function() {
      var s = fn(/* @__PURE__ */ mt().mark(function c(l, u) {
        var m, f, v, g, y, p, C, S, E;
        return mt().wrap(function(b) {
          for (; ; ) switch (b.prev = b.next) {
            case 0:
              if (m = r.props.beforeUpload, f = l, !m) {
                b.next = 14;
                break;
              }
              return b.prev = 3, b.next = 6, m(l, u);
            case 6:
              f = b.sent, b.next = 12;
              break;
            case 9:
              b.prev = 9, b.t0 = b.catch(3), f = !1;
            case 12:
              if (f !== !1) {
                b.next = 14;
                break;
              }
              return b.abrupt("return", {
                origin: l,
                parsedFile: null,
                action: null,
                data: null
              });
            case 14:
              if (v = r.props.action, typeof v != "function") {
                b.next = 21;
                break;
              }
              return b.next = 18, v(l);
            case 18:
              g = b.sent, b.next = 22;
              break;
            case 21:
              g = v;
            case 22:
              if (y = r.props.data, typeof y != "function") {
                b.next = 29;
                break;
              }
              return b.next = 26, y(l);
            case 26:
              p = b.sent, b.next = 30;
              break;
            case 29:
              p = y;
            case 30:
              return C = // string type is from legacy `transformFile`.
              // Not sure if this will work since no related test case works with it
              (Re(f) === "object" || typeof f == "string") && f ? f : l, C instanceof File ? S = C : S = new File([C], l.name, {
                type: l.type
              }), E = S, E.uid = l.uid, b.abrupt("return", {
                origin: l,
                data: p,
                parsedFile: E,
                action: g
              });
            case 35:
            case "end":
              return b.stop();
          }
        }, c, null, [[3, 9]]);
      }));
      return function(c, l) {
        return s.apply(this, arguments);
      };
    }()), F(Ae(r), "saveFileInput", function(s) {
      r.fileInput = s;
    }), r;
  }
  return Bt(n, [{
    key: "componentDidMount",
    value: function() {
      this._isMounted = !0;
      var o = this.props.pastable;
      o && document.addEventListener("paste", this.onFilePaste);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._isMounted = !1, this.abort(), document.removeEventListener("paste", this.onFilePaste);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var a = this.props.pastable;
      a && !o.pastable ? document.addEventListener("paste", this.onFilePaste) : !a && o.pastable && document.removeEventListener("paste", this.onFilePaste);
    }
  }, {
    key: "post",
    value: function(o) {
      var a = this, i = o.data, s = o.origin, c = o.action, l = o.parsedFile;
      if (this._isMounted) {
        var u = this.props, m = u.onStart, f = u.customRequest, v = u.name, g = u.headers, y = u.withCredentials, p = u.method, C = s.uid, S = f || RI, E = {
          action: c,
          filename: v,
          data: i,
          file: l,
          headers: g,
          withCredentials: y,
          method: p || "post",
          onProgress: function(b) {
            var w = a.props.onProgress;
            w == null || w(b, l);
          },
          onSuccess: function(b, w) {
            var x = a.props.onSuccess;
            x == null || x(b, l, w), delete a.reqs[C];
          },
          onError: function(b, w) {
            var x = a.props.onError;
            x == null || x(b, w, l), delete a.reqs[C];
          }
        };
        m(s), this.reqs[C] = S(E);
      }
    }
  }, {
    key: "reset",
    value: function() {
      this.setState({
        uid: Yc()
      });
    }
  }, {
    key: "abort",
    value: function(o) {
      var a = this.reqs;
      if (o) {
        var i = o.uid ? o.uid : o;
        a[i] && a[i].abort && a[i].abort(), delete a[i];
      } else
        Object.keys(a).forEach(function(s) {
          a[s] && a[s].abort && a[s].abort(), delete a[s];
        });
    }
  }, {
    key: "render",
    value: function() {
      var o = this.props, a = o.component, i = o.prefixCls, s = o.className, c = o.classNames, l = c === void 0 ? {} : c, u = o.disabled, m = o.id, f = o.name, v = o.style, g = o.styles, y = g === void 0 ? {} : g, p = o.multiple, C = o.accept, S = o.capture, E = o.children, h = o.directory, b = o.openFileDialogOnClick, w = o.onMouseEnter, x = o.onMouseLeave, N = o.hasControlInside, $ = Qe(o, DI), O = Q(F(F(F({}, i, !0), "".concat(i, "-disabled"), u), s, s)), _ = h ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {}, R = u ? {} : {
        onClick: b ? this.onClick : function() {
        },
        onKeyDown: b ? this.onKeyDown : function() {
        },
        onMouseEnter: w,
        onMouseLeave: x,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDragOver,
        tabIndex: N ? void 0 : "0"
      };
      return /* @__PURE__ */ Y.createElement(a, ye({}, R, {
        className: O,
        role: N ? void 0 : "button",
        style: v
      }), /* @__PURE__ */ Y.createElement("input", ye({}, fd($, {
        aria: !0,
        data: !0
      }), {
        id: m,
        name: f,
        disabled: u,
        type: "file",
        ref: this.saveFileInput,
        onClick: function(I) {
          return I.stopPropagation();
        },
        key: this.state.uid,
        style: B({
          display: "none"
        }, y.input),
        className: l.input,
        accept: C
      }, _, {
        multiple: p,
        onChange: this.onChange
      }, S != null ? {
        capture: S
      } : {})), E);
    }
  }]), n;
}(Vp);
function Zc() {
}
var Su = /* @__PURE__ */ function(e) {
  Un(n, e);
  var t = qn(n);
  function n() {
    var r;
    Vt(this, n);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(a)), F(Ae(r), "uploader", void 0), F(Ae(r), "saveUploader", function(s) {
      r.uploader = s;
    }), r;
  }
  return Bt(n, [{
    key: "abort",
    value: function(o) {
      this.uploader.abort(o);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Y.createElement(AI, ye({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]), n;
}(Vp);
F(Su, "defaultProps", {
  component: "span",
  prefixCls: "rc-upload",
  data: {},
  headers: {},
  name: "file",
  multipart: !1,
  onStart: Zc,
  onError: Zc,
  onSuccess: Zc,
  multiple: !1,
  beforeUpload: null,
  customRequest: null,
  withCredentials: !1,
  openFileDialogOnClick: !0,
  hasControlInside: !1
});
const kI = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-drag`]: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: e.colorFillAlter,
        border: `${oe(e.lineWidth)} dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [t]: {
          padding: e.padding
        },
        [`${t}-btn`]: {
          display: "table",
          width: "100%",
          height: "100%",
          outline: "none",
          borderRadius: e.borderRadiusLG,
          "&:focus-visible": {
            outline: `${oe(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`
          }
        },
        [`${t}-drag-container`]: {
          display: "table-cell",
          verticalAlign: "middle"
        },
        [`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]: {
          borderColor: e.colorPrimaryHover
        },
        [`p${t}-drag-icon`]: {
          marginBottom: e.margin,
          [n]: {
            color: e.colorPrimary,
            fontSize: e.uploadThumbnailSize
          }
        },
        [`p${t}-text`]: {
          margin: `0 0 ${oe(e.marginXXS)}`,
          color: e.colorTextHeading,
          fontSize: e.fontSizeLG
        },
        [`p${t}-hint`]: {
          color: e.colorTextDescription,
          fontSize: e.fontSize
        },
        // ===================== Disabled =====================
        [`&${t}-disabled`]: {
          [`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]: {
            color: e.colorTextDisabled
          }
        }
      }
    }
  };
}, jI = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontSize: r,
    lineHeight: o,
    calc: a
  } = e, i = `${t}-list-item`, s = `${i}-actions`, c = `${i}-action`;
  return {
    [`${t}-wrapper`]: {
      [`${t}-list`]: Object.assign(Object.assign({}, no()), {
        lineHeight: e.lineHeight,
        [i]: {
          position: "relative",
          height: a(e.lineHeight).mul(r).equal(),
          marginTop: e.marginXS,
          fontSize: r,
          display: "flex",
          alignItems: "center",
          transition: `background-color ${e.motionDurationSlow}`,
          borderRadius: e.borderRadiusSM,
          "&:hover": {
            backgroundColor: e.controlItemBgHover
          },
          [`${i}-name`]: Object.assign(Object.assign({}, ni), {
            padding: `0 ${oe(e.paddingXS)}`,
            lineHeight: o,
            flex: "auto",
            transition: `all ${e.motionDurationSlow}`
          }),
          [s]: {
            whiteSpace: "nowrap",
            [c]: {
              opacity: 0
            },
            [n]: {
              color: e.actionsColor,
              transition: `all ${e.motionDurationSlow}`
            },
            [`
              ${c}:focus-visible,
              &.picture ${c}
            `]: {
              opacity: 1
            }
          },
          [`${t}-icon ${n}`]: {
            color: e.colorIcon,
            fontSize: r
          },
          [`${i}-progress`]: {
            position: "absolute",
            bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
            width: "100%",
            paddingInlineStart: a(r).add(e.paddingXS).equal(),
            fontSize: r,
            lineHeight: 0,
            pointerEvents: "none",
            "> div": {
              margin: 0
            }
          }
        },
        [`${i}:hover ${c}`]: {
          opacity: 1
        },
        [`${i}-error`]: {
          color: e.colorError,
          [`${i}-name, ${t}-icon ${n}`]: {
            color: e.colorError
          },
          [s]: {
            [`${n}, ${n}:hover`]: {
              color: e.colorError
            },
            [c]: {
              opacity: 1
            }
          }
        },
        [`${t}-list-item-container`]: {
          transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          // For smooth removing animation
          "&::before": {
            display: "table",
            width: 0,
            height: 0,
            content: '""'
          }
        }
      })
    }
  };
}, FI = (e) => {
  const {
    componentCls: t
  } = e, n = new wt("uploadAnimateInlineIn", {
    from: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: e.calc(e.marginXS).div(-2).equal()
    }
  }), r = new wt("uploadAnimateInlineOut", {
    to: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: e.calc(e.marginXS).div(-2).equal()
    }
  }), o = `${t}-animate-inline`;
  return [{
    [`${t}-wrapper`]: {
      [`${o}-appear, ${o}-enter, ${o}-leave`]: {
        animationDuration: e.motionDurationSlow,
        animationTimingFunction: e.motionEaseInOutCirc,
        animationFillMode: "forwards"
      },
      [`${o}-appear, ${o}-enter`]: {
        animationName: n
      },
      [`${o}-leave`]: {
        animationName: r
      }
    }
  }, {
    [`${t}-wrapper`]: S$(e)
  }, n, r];
}, LI = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    uploadThumbnailSize: r,
    uploadProgressOffset: o,
    calc: a
  } = e, i = `${t}-list`, s = `${i}-item`;
  return {
    [`${t}-wrapper`]: {
      // ${listCls} 增加优先级
      [`
        ${i}${i}-picture,
        ${i}${i}-picture-card,
        ${i}${i}-picture-circle
      `]: {
        [s]: {
          position: "relative",
          height: a(r).add(a(e.lineWidth).mul(2)).add(a(e.paddingXS).mul(2)).equal(),
          padding: e.paddingXS,
          border: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          "&:hover": {
            background: "transparent"
          },
          [`${s}-thumbnail`]: Object.assign(Object.assign({}, ni), {
            width: r,
            height: r,
            lineHeight: oe(a(r).add(e.paddingSM).equal()),
            textAlign: "center",
            flex: "none",
            [n]: {
              fontSize: e.fontSizeHeading2,
              color: e.colorPrimary
            },
            img: {
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          }),
          [`${s}-progress`]: {
            bottom: o,
            width: `calc(100% - ${oe(a(e.paddingSM).mul(2).equal())})`,
            marginTop: 0,
            paddingInlineStart: a(r).add(e.paddingXS).equal()
          }
        },
        [`${s}-error`]: {
          borderColor: e.colorError,
          // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
          [`${s}-thumbnail ${n}`]: {
            [`svg path[fill='${zo[0]}']`]: {
              fill: e.colorErrorBg
            },
            [`svg path[fill='${zo.primary}']`]: {
              fill: e.colorError
            }
          }
        },
        [`${s}-uploading`]: {
          borderStyle: "dashed",
          [`${s}-name`]: {
            marginBottom: o
          }
        }
      },
      [`${i}${i}-picture-circle ${s}`]: {
        [`&, &::before, ${s}-thumbnail`]: {
          borderRadius: "50%"
        }
      }
    }
  };
}, zI = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontSizeLG: r,
    colorTextLightSolid: o,
    calc: a
  } = e, i = `${t}-list`, s = `${i}-item`, c = e.uploadPicCardSize;
  return {
    [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, no()), {
      display: "block",
      [`${t}${t}-select`]: {
        width: c,
        height: c,
        textAlign: "center",
        verticalAlign: "top",
        backgroundColor: e.colorFillAlter,
        border: `${oe(e.lineWidth)} dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [`> ${t}`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center"
        },
        [`&:not(${t}-disabled):hover`]: {
          borderColor: e.colorPrimary
        }
      },
      // list
      [`${i}${i}-picture-card, ${i}${i}-picture-circle`]: {
        display: "flex",
        flexWrap: "wrap",
        "@supports not (gap: 1px)": {
          "& > *": {
            marginBlockEnd: e.marginXS,
            marginInlineEnd: e.marginXS
          }
        },
        "@supports (gap: 1px)": {
          gap: e.marginXS
        },
        [`${i}-item-container`]: {
          display: "inline-block",
          width: c,
          height: c,
          verticalAlign: "top"
        },
        "&::after": {
          display: "none"
        },
        "&::before": {
          display: "none"
        },
        [s]: {
          height: "100%",
          margin: 0,
          "&::before": {
            position: "absolute",
            zIndex: 1,
            width: `calc(100% - ${oe(a(e.paddingXS).mul(2).equal())})`,
            height: `calc(100% - ${oe(a(e.paddingXS).mul(2).equal())})`,
            backgroundColor: e.colorBgMask,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '" "'
          }
        },
        [`${s}:hover`]: {
          [`&::before, ${s}-actions`]: {
            opacity: 1
          }
        },
        [`${s}-actions`]: {
          position: "absolute",
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          [`
            ${n}-eye,
            ${n}-download,
            ${n}-delete
          `]: {
            zIndex: 10,
            width: r,
            margin: `0 ${oe(e.marginXXS)}`,
            fontSize: r,
            cursor: "pointer",
            transition: `all ${e.motionDurationSlow}`,
            color: o,
            "&:hover": {
              color: o
            },
            svg: {
              verticalAlign: "baseline"
            }
          }
        },
        [`${s}-thumbnail, ${s}-thumbnail img`]: {
          position: "static",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        [`${s}-name`]: {
          display: "none",
          textAlign: "center"
        },
        [`${s}-file + ${s}-name`]: {
          position: "absolute",
          bottom: e.margin,
          display: "block",
          width: `calc(100% - ${oe(a(e.paddingXS).mul(2).equal())})`
        },
        [`${s}-uploading`]: {
          [`&${s}`]: {
            backgroundColor: e.colorFillAlter
          },
          [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: {
            display: "none"
          }
        },
        [`${s}-progress`]: {
          bottom: e.marginXL,
          width: `calc(100% - ${oe(a(e.paddingXS).mul(2).equal())})`,
          paddingInlineStart: 0
        }
      }
    }),
    [`${t}-wrapper${t}-picture-circle-wrapper`]: {
      [`${t}${t}-select`]: {
        borderRadius: "50%"
      }
    }
  };
}, VI = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, BI = (e) => {
  const {
    componentCls: t,
    colorTextDisabled: n
  } = e;
  return {
    [`${t}-wrapper`]: Object.assign(Object.assign({}, Kn(e)), {
      [t]: {
        outline: 0,
        "input[type='file']": {
          cursor: "pointer"
        }
      },
      [`${t}-select`]: {
        display: "inline-block"
      },
      [`${t}-hidden`]: {
        display: "none"
      },
      [`${t}-disabled`]: {
        color: n,
        cursor: "not-allowed"
      }
    })
  };
}, HI = (e) => ({
  actionsColor: e.colorIcon
}), WI = bn("Upload", (e) => {
  const {
    fontSizeHeading3: t,
    fontHeight: n,
    lineWidth: r,
    controlHeightLG: o,
    calc: a
  } = e, i = kt(e, {
    uploadThumbnailSize: a(t).mul(2).equal(),
    uploadProgressOffset: a(a(n).div(2)).add(r).equal(),
    uploadPicCardSize: a(o).mul(2.55).equal()
  });
  return [BI(i), kI(i), LI(i), zI(i), jI(i), FI(i), VI(i), g$(i)];
}, HI);
function Ai(e) {
  return Object.assign(Object.assign({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e
  });
}
function ki(e, t) {
  const n = he(t), r = n.findIndex(({
    uid: o
  }) => o === e.uid);
  return r === -1 ? n.push(e) : n[r] = e, n;
}
function Jc(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name";
  return t.filter((r) => r[n] === e[n])[0];
}
function UI(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name", r = t.filter((o) => o[n] !== e[n]);
  return r.length === t.length ? null : r;
}
const qI = (e = "") => {
  const t = e.split("/"), r = t[t.length - 1].split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(r) || [""])[0];
}, t0 = (e) => e.indexOf("image/") === 0, KI = (e) => {
  if (e.type && !e.thumbUrl)
    return t0(e.type);
  const t = e.thumbUrl || e.url || "", n = qI(t);
  return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(n) ? !0 : !(/^data:/.test(t) || n);
}, $r = 200;
function GI(e) {
  return new Promise((t) => {
    if (!e.type || !t0(e.type)) {
      t("");
      return;
    }
    const n = document.createElement("canvas");
    n.width = $r, n.height = $r, n.style.cssText = `position: fixed; left: 0; top: 0; width: ${$r}px; height: ${$r}px; z-index: 9999; display: none;`, document.body.appendChild(n);
    const r = n.getContext("2d"), o = new Image();
    if (o.onload = () => {
      const {
        width: a,
        height: i
      } = o;
      let s = $r, c = $r, l = 0, u = 0;
      a > i ? (c = i * ($r / a), u = -(c - s) / 2) : (s = a * ($r / i), l = -(s - c) / 2), r.drawImage(o, l, u, s, c);
      const m = n.toDataURL();
      document.body.removeChild(n), window.URL.revokeObjectURL(o.src), t(m);
    }, o.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const a = new FileReader();
      a.onload = () => {
        a.result && typeof a.result == "string" && (o.src = a.result);
      }, a.readAsDataURL(e);
    } else if (e.type.startsWith("image/gif")) {
      const a = new FileReader();
      a.onload = () => {
        a.result && t(a.result);
      }, a.readAsDataURL(e);
    } else
      o.src = window.URL.createObjectURL(e);
  });
}
const XI = /* @__PURE__ */ d.forwardRef(({
  prefixCls: e,
  className: t,
  style: n,
  locale: r,
  listType: o,
  file: a,
  items: i,
  progress: s,
  iconRender: c,
  actionIconRender: l,
  itemRender: u,
  isImgUrl: m,
  showPreviewIcon: f,
  showRemoveIcon: v,
  showDownloadIcon: g,
  previewIcon: y,
  removeIcon: p,
  downloadIcon: C,
  extra: S,
  onPreview: E,
  onDownload: h,
  onClose: b
}, w) => {
  var x, N;
  const {
    status: $
  } = a, [O, _] = d.useState($);
  d.useEffect(() => {
    $ !== "removed" && _($);
  }, [$]);
  const [R, P] = d.useState(!1);
  d.useEffect(() => {
    const ne = setTimeout(() => {
      P(!0);
    }, 300);
    return () => {
      clearTimeout(ne);
    };
  }, []);
  const I = c(a);
  let D = /* @__PURE__ */ d.createElement("div", {
    className: `${e}-icon`
  }, I);
  if (o === "picture" || o === "picture-card" || o === "picture-circle")
    if (O === "uploading" || !a.thumbUrl && !a.url) {
      const ne = Q(`${e}-list-item-thumbnail`, {
        [`${e}-list-item-file`]: O !== "uploading"
      });
      D = /* @__PURE__ */ d.createElement("div", {
        className: ne
      }, I);
    } else {
      const ne = m != null && m(a) ? /* @__PURE__ */ d.createElement("img", {
        src: a.thumbUrl || a.url,
        alt: a.name,
        className: `${e}-list-item-image`,
        crossOrigin: a.crossOrigin
      }) : I, ue = Q(`${e}-list-item-thumbnail`, {
        [`${e}-list-item-file`]: m && !m(a)
      });
      D = /* @__PURE__ */ d.createElement("a", {
        className: ue,
        onClick: (K) => E(a, K),
        href: a.url || a.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, ne);
    }
  const M = Q(`${e}-list-item`, `${e}-list-item-${O}`), k = typeof a.linkProps == "string" ? JSON.parse(a.linkProps) : a.linkProps, j = (typeof v == "function" ? v(a) : v) ? l(
    (typeof p == "function" ? p(a) : p) || /* @__PURE__ */ d.createElement(Gb, null),
    () => b(a),
    e,
    r.removeFile,
    // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    !0
  ) : null, T = (typeof g == "function" ? g(a) : g) && O === "done" ? l((typeof C == "function" ? C(a) : C) || /* @__PURE__ */ d.createElement(Qb, null), () => h(a), e, r.downloadFile) : null, H = o !== "picture-card" && o !== "picture-circle" && /* @__PURE__ */ d.createElement("span", {
    key: "download-delete",
    className: Q(`${e}-list-item-actions`, {
      picture: o === "picture"
    })
  }, T, j), q = typeof S == "function" ? S(a) : S, U = q && /* @__PURE__ */ d.createElement("span", {
    className: `${e}-list-item-extra`
  }, q), V = Q(`${e}-list-item-name`), L = a.url ? /* @__PURE__ */ d.createElement("a", Object.assign({
    key: "view",
    target: "_blank",
    rel: "noopener noreferrer",
    className: V,
    title: a.name
  }, k, {
    href: a.url,
    onClick: (ne) => E(a, ne)
  }), a.name, U) : /* @__PURE__ */ d.createElement("span", {
    key: "view",
    className: V,
    onClick: (ne) => E(a, ne),
    title: a.name
  }, a.name, U), A = (typeof f == "function" ? f(a) : f) && (a.url || a.thumbUrl) ? /* @__PURE__ */ d.createElement("a", {
    href: a.url || a.thumbUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (ne) => E(a, ne),
    title: r.previewFile
  }, typeof y == "function" ? y(a) : y || /* @__PURE__ */ d.createElement(zd, null)) : null, W = (o === "picture-card" || o === "picture-circle") && O !== "uploading" && /* @__PURE__ */ d.createElement("span", {
    className: `${e}-list-item-actions`
  }, A, O === "done" && T, j), {
    getPrefixCls: Z
  } = d.useContext(st), G = Z(), re = /* @__PURE__ */ d.createElement("div", {
    className: M
  }, D, L, H, W, R && /* @__PURE__ */ d.createElement(Sr, {
    motionName: `${G}-fade`,
    visible: O === "uploading",
    motionDeadline: 2e3
  }, ({
    className: ne
  }) => {
    const ue = "percent" in a ? /* @__PURE__ */ d.createElement(Kb, Object.assign({
      type: "line",
      percent: a.percent,
      "aria-label": a["aria-label"],
      "aria-labelledby": a["aria-labelledby"]
    }, s)) : null;
    return /* @__PURE__ */ d.createElement("div", {
      className: Q(`${e}-list-item-progress`, ne)
    }, ue);
  })), J = a.response && typeof a.response == "string" ? a.response : ((x = a.error) === null || x === void 0 ? void 0 : x.statusText) || ((N = a.error) === null || N === void 0 ? void 0 : N.message) || r.uploadError, te = O === "error" ? /* @__PURE__ */ d.createElement(er, {
    title: J,
    getPopupContainer: (ne) => ne.parentNode
  }, re) : re;
  return /* @__PURE__ */ d.createElement("div", {
    className: Q(`${e}-list-item-container`, t),
    style: n,
    ref: w
  }, u ? u(te, a, i, {
    download: h.bind(null, a),
    preview: E.bind(null, a),
    remove: b.bind(null, a)
  }) : te);
}), QI = (e, t) => {
  const {
    listType: n = "text",
    previewFile: r = GI,
    onPreview: o,
    onDownload: a,
    onRemove: i,
    locale: s,
    iconRender: c,
    isImageUrl: l = KI,
    prefixCls: u,
    items: m = [],
    showPreviewIcon: f = !0,
    showRemoveIcon: v = !0,
    showDownloadIcon: g = !1,
    removeIcon: y,
    previewIcon: p,
    downloadIcon: C,
    extra: S,
    progress: E = {
      size: [-1, 2],
      showInfo: !1
    },
    appendAction: h,
    appendActionVisible: b = !0,
    itemRender: w,
    disabled: x
  } = e, N = Yh(), [$, O] = d.useState(!1), _ = ["picture-card", "picture-circle"].includes(n);
  d.useEffect(() => {
    n.startsWith("picture") && (m || []).forEach((V) => {
      !(V.originFileObj instanceof File || V.originFileObj instanceof Blob) || V.thumbUrl !== void 0 || (V.thumbUrl = "", r == null || r(V.originFileObj).then((L) => {
        V.thumbUrl = L || "", N();
      }));
    });
  }, [n, m, r]), d.useEffect(() => {
    O(!0);
  }, []);
  const R = (V, L) => {
    if (o)
      return L == null || L.preventDefault(), o(V);
  }, P = (V) => {
    typeof a == "function" ? a(V) : V.url && window.open(V.url);
  }, I = (V) => {
    i == null || i(V);
  }, D = (V) => {
    if (c)
      return c(V, n);
    const L = V.status === "uploading";
    if (n.startsWith("picture")) {
      const A = n === "picture" ? /* @__PURE__ */ d.createElement(Wa, null) : s.uploading, W = l != null && l(V) ? /* @__PURE__ */ d.createElement(e0, null) : /* @__PURE__ */ d.createElement(Yb, null);
      return L ? A : W;
    }
    return L ? /* @__PURE__ */ d.createElement(Wa, null) : /* @__PURE__ */ d.createElement(Jb, null);
  }, M = (V, L, A, W, Z) => {
    const G = {
      type: "text",
      size: "small",
      title: W,
      onClick: (re) => {
        var J, te;
        L(), /* @__PURE__ */ d.isValidElement(V) && ((te = (J = V.props).onClick) === null || te === void 0 || te.call(J, re));
      },
      className: `${A}-list-item-action`,
      disabled: Z ? x : !1
    };
    return /* @__PURE__ */ d.isValidElement(V) ? /* @__PURE__ */ d.createElement(gn, Object.assign({}, G, {
      icon: gr(V, Object.assign(Object.assign({}, V.props), {
        onClick: () => {
        }
      }))
    })) : /* @__PURE__ */ d.createElement(gn, Object.assign({}, G), /* @__PURE__ */ d.createElement("span", null, V));
  };
  d.useImperativeHandle(t, () => ({
    handlePreview: R,
    handleDownload: P
  }));
  const {
    getPrefixCls: k
  } = d.useContext(st), j = k("upload", u), T = k(), H = Q(`${j}-list`, `${j}-list-${n}`), q = d.useMemo(() => Dn(Lx(T), ["onAppearEnd", "onEnterEnd", "onLeaveEnd"]), [T]), U = Object.assign(Object.assign({}, _ ? {} : q), {
    motionDeadline: 2e3,
    motionName: `${j}-${_ ? "animate-inline" : "animate"}`,
    keys: he(m.map((V) => ({
      key: V.uid,
      file: V
    }))),
    motionAppear: $
  });
  return /* @__PURE__ */ d.createElement("div", {
    className: H
  }, /* @__PURE__ */ d.createElement(Ug, Object.assign({}, U, {
    component: !1
  }), ({
    key: V,
    file: L,
    className: A,
    style: W
  }) => /* @__PURE__ */ d.createElement(XI, {
    key: V,
    locale: s,
    prefixCls: j,
    className: A,
    style: W,
    file: L,
    items: m,
    progress: E,
    listType: n,
    isImgUrl: l,
    showPreviewIcon: f,
    showRemoveIcon: v,
    showDownloadIcon: g,
    removeIcon: y,
    previewIcon: p,
    downloadIcon: C,
    extra: S,
    iconRender: D,
    actionIconRender: M,
    itemRender: w,
    onPreview: R,
    onDownload: P,
    onClose: I
  })), h && /* @__PURE__ */ d.createElement(Sr, Object.assign({}, U, {
    visible: b,
    forceRender: !0
  }), ({
    className: V,
    style: L
  }) => gr(h, (A) => ({
    className: Q(A.className, V),
    style: Object.assign(Object.assign(Object.assign({}, L), {
      // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
      pointerEvents: V ? "none" : void 0
    }), A.style)
  }))));
}, n0 = /* @__PURE__ */ d.forwardRef(QI);
process.env.NODE_ENV !== "production" && (n0.displayName = "UploadList");
var YI = function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(i) {
      i(a);
    });
  }
  return new (n || (n = Promise))(function(a, i) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (m) {
        i(m);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (m) {
        i(m);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
};
const ha = `__LIST_IGNORE_${Date.now()}__`, ZI = (e, t) => {
  const {
    fileList: n,
    defaultFileList: r,
    onRemove: o,
    showUploadList: a = !0,
    listType: i = "text",
    onPreview: s,
    onDownload: c,
    onChange: l,
    onDrop: u,
    previewFile: m,
    disabled: f,
    locale: v,
    iconRender: g,
    isImageUrl: y,
    progress: p,
    prefixCls: C,
    className: S,
    type: E = "select",
    children: h,
    style: b,
    itemRender: w,
    maxCount: x,
    data: N = {},
    multiple: $ = !1,
    hasControlInside: O = !0,
    action: _ = "",
    accept: R = "",
    supportServerRender: P = !0,
    rootClassName: I
  } = e, D = d.useContext(Dr), M = f ?? D, [k, j] = $n(r || [], {
    value: n,
    postState: (ie) => ie ?? []
  }), [T, H] = d.useState("drop"), q = d.useRef(null), U = d.useRef(null);
  if (process.env.NODE_ENV !== "production") {
    const ie = At("Upload");
    process.env.NODE_ENV !== "production" && ie("fileList" in e || !("value" in e), "usage", "`value` is not a valid prop, do you mean `fileList`?"), ie.deprecated(!("transformFile" in e), "transformFile", "beforeUpload");
  }
  d.useMemo(() => {
    const ie = Date.now();
    (n || []).forEach((Se, ve) => {
      !Se.uid && !Object.isFrozen(Se) && (Se.uid = `__AUTO__${ie}_${ve}__`);
    });
  }, [n]);
  const V = (ie, Se, ve) => {
    let ge = he(Se), ze = !1;
    x === 1 ? ge = ge.slice(-1) : x && (ze = ge.length > x, ge = ge.slice(0, x)), tl(() => {
      j(ge);
    });
    const lt = {
      file: ie,
      fileList: ge
    };
    ve && (lt.event = ve), (!ze || ie.status === "removed" || // We should ignore event if current file is exceed `maxCount`
    ge.some((_t) => _t.uid === ie.uid)) && tl(() => {
      l == null || l(lt);
    });
  }, L = (ie, Se) => YI(void 0, void 0, void 0, function* () {
    const {
      beforeUpload: ve,
      transformFile: ge
    } = e;
    let ze = ie;
    if (ve) {
      const lt = yield ve(ie, Se);
      if (lt === !1)
        return !1;
      if (delete ie[ha], lt === ha)
        return Object.defineProperty(ie, ha, {
          value: !0,
          configurable: !0
        }), !1;
      typeof lt == "object" && lt && (ze = lt);
    }
    return ge && (ze = yield ge(ze)), ze;
  }), A = (ie) => {
    const Se = ie.filter((ze) => !ze.file[ha]);
    if (!Se.length)
      return;
    const ve = Se.map((ze) => Ai(ze.file));
    let ge = he(k);
    ve.forEach((ze) => {
      ge = ki(ze, ge);
    }), ve.forEach((ze, lt) => {
      let _t = ze;
      if (Se[lt].parsedFile)
        ze.status = "uploading";
      else {
        const {
          originFileObj: gt
        } = ze;
        let Pt;
        try {
          Pt = new File([gt], gt.name, {
            type: gt.type
          });
        } catch {
          Pt = new Blob([gt], {
            type: gt.type
          }), Pt.name = gt.name, Pt.lastModifiedDate = /* @__PURE__ */ new Date(), Pt.lastModified = (/* @__PURE__ */ new Date()).getTime();
        }
        Pt.uid = ze.uid, _t = Pt;
      }
      V(_t, ge);
    });
  }, W = (ie, Se, ve) => {
    try {
      typeof ie == "string" && (ie = JSON.parse(ie));
    } catch {
    }
    if (!Jc(Se, k))
      return;
    const ge = Ai(Se);
    ge.status = "done", ge.percent = 100, ge.response = ie, ge.xhr = ve;
    const ze = ki(ge, k);
    V(ge, ze);
  }, Z = (ie, Se) => {
    if (!Jc(Se, k))
      return;
    const ve = Ai(Se);
    ve.status = "uploading", ve.percent = ie.percent;
    const ge = ki(ve, k);
    V(ve, ge, ie);
  }, G = (ie, Se, ve) => {
    if (!Jc(ve, k))
      return;
    const ge = Ai(ve);
    ge.error = ie, ge.response = Se, ge.status = "error";
    const ze = ki(ge, k);
    V(ge, ze);
  }, re = (ie) => {
    let Se;
    Promise.resolve(typeof o == "function" ? o(ie) : o).then((ve) => {
      var ge;
      if (ve === !1)
        return;
      const ze = UI(ie, k);
      ze && (Se = Object.assign(Object.assign({}, ie), {
        status: "removed"
      }), k == null || k.forEach((lt) => {
        const _t = Se.uid !== void 0 ? "uid" : "name";
        lt[_t] === Se[_t] && !Object.isFrozen(lt) && (lt.status = "removed");
      }), (ge = q.current) === null || ge === void 0 || ge.abort(Se), V(Se, ze));
    });
  }, J = (ie) => {
    H(ie.type), ie.type === "drop" && (u == null || u(ie));
  };
  d.useImperativeHandle(t, () => ({
    onBatchStart: A,
    onSuccess: W,
    onProgress: Z,
    onError: G,
    fileList: k,
    upload: q.current,
    nativeElement: U.current
  }));
  const {
    getPrefixCls: te,
    direction: ne,
    upload: ue
  } = d.useContext(st), K = te("upload", C), de = Object.assign(Object.assign({
    onBatchStart: A,
    onError: G,
    onProgress: Z,
    onSuccess: W
  }, e), {
    data: N,
    multiple: $,
    action: _,
    accept: R,
    supportServerRender: P,
    prefixCls: K,
    disabled: M,
    beforeUpload: L,
    onChange: void 0,
    hasControlInside: O
  });
  delete de.className, delete de.style, (!h || M) && delete de.id;
  const ae = `${K}-wrapper`, [pe, Ce, fe] = WI(K, ae), [be] = iE("Upload", Jr.Upload), {
    showRemoveIcon: me,
    showPreviewIcon: Pe,
    showDownloadIcon: $e,
    removeIcon: ce,
    previewIcon: xe,
    downloadIcon: Ne,
    extra: rt
  } = typeof a == "boolean" ? {} : a, Ue = typeof me > "u" ? !M : me, Ve = (ie, Se) => a ? /* @__PURE__ */ d.createElement(n0, {
    prefixCls: K,
    listType: i,
    items: k,
    previewFile: m,
    onPreview: s,
    onDownload: c,
    onRemove: re,
    showRemoveIcon: Ue,
    showPreviewIcon: Pe,
    showDownloadIcon: $e,
    removeIcon: ce,
    previewIcon: xe,
    downloadIcon: Ne,
    iconRender: g,
    extra: rt,
    locale: Object.assign(Object.assign({}, be), v),
    isImageUrl: y,
    progress: p,
    appendAction: ie,
    appendActionVisible: Se,
    itemRender: w,
    disabled: M
  }) : ie, tt = Q(ae, S, I, Ce, fe, ue == null ? void 0 : ue.className, {
    [`${K}-rtl`]: ne === "rtl",
    [`${K}-picture-card-wrapper`]: i === "picture-card",
    [`${K}-picture-circle-wrapper`]: i === "picture-circle"
  }), Le = Object.assign(Object.assign({}, ue == null ? void 0 : ue.style), b);
  if (E === "drag") {
    const ie = Q(Ce, K, `${K}-drag`, {
      [`${K}-drag-uploading`]: k.some((Se) => Se.status === "uploading"),
      [`${K}-drag-hover`]: T === "dragover",
      [`${K}-disabled`]: M,
      [`${K}-rtl`]: ne === "rtl"
    });
    return pe(/* @__PURE__ */ d.createElement("span", {
      className: tt,
      ref: U
    }, /* @__PURE__ */ d.createElement("div", {
      className: ie,
      style: Le,
      onDrop: J,
      onDragOver: J,
      onDragLeave: J
    }, /* @__PURE__ */ d.createElement(Su, Object.assign({}, de, {
      ref: q,
      className: `${K}-btn`
    }), /* @__PURE__ */ d.createElement("div", {
      className: `${K}-drag-container`
    }, h))), Ve()));
  }
  const qe = Q(K, `${K}-select`, {
    [`${K}-disabled`]: M,
    [`${K}-hidden`]: !h
  }), Me = /* @__PURE__ */ d.createElement("div", {
    className: qe,
    style: Le
  }, /* @__PURE__ */ d.createElement(Su, Object.assign({}, de, {
    ref: q
  })));
  return pe(i === "picture-card" || i === "picture-circle" ? /* @__PURE__ */ d.createElement("span", {
    className: tt,
    ref: U
  }, Ve(Me, !!h)) : /* @__PURE__ */ d.createElement("span", {
    className: tt,
    ref: U
  }, Me, Ve()));
}, Vd = /* @__PURE__ */ d.forwardRef(ZI);
process.env.NODE_ENV !== "production" && (Vd.displayName = "Upload");
var JI = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const r0 = /* @__PURE__ */ d.forwardRef((e, t) => {
  var {
    style: n,
    height: r,
    hasControlInside: o = !1
  } = e, a = JI(e, ["style", "height", "hasControlInside"]);
  return /* @__PURE__ */ d.createElement(Vd, Object.assign({
    ref: t,
    hasControlInside: o
  }, a, {
    type: "drag",
    style: Object.assign(Object.assign({}, n), {
      height: r
    })
  }));
});
process.env.NODE_ENV !== "production" && (r0.displayName = "Dragger");
const Bd = Vd;
Bd.Dragger = r0;
Bd.LIST_IGNORE = ha;
const o0 = /* @__PURE__ */ Xa({}), eM = {
  aliceblue: "9ehhb",
  antiquewhite: "9sgk7",
  aqua: "1ekf",
  aquamarine: "4zsno",
  azure: "9eiv3",
  beige: "9lhp8",
  bisque: "9zg04",
  black: "0",
  blanchedalmond: "9zhe5",
  blue: "73",
  blueviolet: "5e31e",
  brown: "6g016",
  burlywood: "8ouiv",
  cadetblue: "3qba8",
  chartreuse: "4zshs",
  chocolate: "87k0u",
  coral: "9yvyo",
  cornflowerblue: "3xael",
  cornsilk: "9zjz0",
  crimson: "8l4xo",
  cyan: "1ekf",
  darkblue: "3v",
  darkcyan: "rkb",
  darkgoldenrod: "776yz",
  darkgray: "6mbhl",
  darkgreen: "jr4",
  darkgrey: "6mbhl",
  darkkhaki: "7ehkb",
  darkmagenta: "5f91n",
  darkolivegreen: "3bzfz",
  darkorange: "9yygw",
  darkorchid: "5z6x8",
  darkred: "5f8xs",
  darksalmon: "9441m",
  darkseagreen: "5lwgf",
  darkslateblue: "2th1n",
  darkslategray: "1ugcv",
  darkslategrey: "1ugcv",
  darkturquoise: "14up",
  darkviolet: "5rw7n",
  deeppink: "9yavn",
  deepskyblue: "11xb",
  dimgray: "442g9",
  dimgrey: "442g9",
  dodgerblue: "16xof",
  firebrick: "6y7tu",
  floralwhite: "9zkds",
  forestgreen: "1cisi",
  fuchsia: "9y70f",
  gainsboro: "8m8kc",
  ghostwhite: "9pq0v",
  goldenrod: "8j4f4",
  gold: "9zda8",
  gray: "50i2o",
  green: "pa8",
  greenyellow: "6senj",
  grey: "50i2o",
  honeydew: "9eiuo",
  hotpink: "9yrp0",
  indianred: "80gnw",
  indigo: "2xcoy",
  ivory: "9zldc",
  khaki: "9edu4",
  lavenderblush: "9ziet",
  lavender: "90c8q",
  lawngreen: "4vk74",
  lemonchiffon: "9zkct",
  lightblue: "6s73a",
  lightcoral: "9dtog",
  lightcyan: "8s1rz",
  lightgoldenrodyellow: "9sjiq",
  lightgray: "89jo3",
  lightgreen: "5nkwg",
  lightgrey: "89jo3",
  lightpink: "9z6wx",
  lightsalmon: "9z2ii",
  lightseagreen: "19xgq",
  lightskyblue: "5arju",
  lightslategray: "4nwk9",
  lightslategrey: "4nwk9",
  lightsteelblue: "6wau6",
  lightyellow: "9zlcw",
  lime: "1edc",
  limegreen: "1zcxe",
  linen: "9shk6",
  magenta: "9y70f",
  maroon: "4zsow",
  mediumaquamarine: "40eju",
  mediumblue: "5p",
  mediumorchid: "79qkz",
  mediumpurple: "5r3rv",
  mediumseagreen: "2d9ip",
  mediumslateblue: "4tcku",
  mediumspringgreen: "1di2",
  mediumturquoise: "2uabw",
  mediumvioletred: "7rn9h",
  midnightblue: "z980",
  mintcream: "9ljp6",
  mistyrose: "9zg0x",
  moccasin: "9zfzp",
  navajowhite: "9zest",
  navy: "3k",
  oldlace: "9wq92",
  olive: "50hz4",
  olivedrab: "472ub",
  orange: "9z3eo",
  orangered: "9ykg0",
  orchid: "8iu3a",
  palegoldenrod: "9bl4a",
  palegreen: "5yw0o",
  paleturquoise: "6v4ku",
  palevioletred: "8k8lv",
  papayawhip: "9zi6t",
  peachpuff: "9ze0p",
  peru: "80oqn",
  pink: "9z8wb",
  plum: "8nba5",
  powderblue: "6wgdi",
  purple: "4zssg",
  rebeccapurple: "3zk49",
  red: "9y6tc",
  rosybrown: "7cv4f",
  royalblue: "2jvtt",
  saddlebrown: "5fmkz",
  salmon: "9rvci",
  sandybrown: "9jn1c",
  seagreen: "1tdnb",
  seashell: "9zje6",
  sienna: "6973h",
  silver: "7ir40",
  skyblue: "5arjf",
  slateblue: "45e4t",
  slategray: "4e100",
  slategrey: "4e100",
  snow: "9zke2",
  springgreen: "1egv",
  steelblue: "2r1kk",
  tan: "87yx8",
  teal: "pds",
  thistle: "8ggk8",
  tomato: "9yqfb",
  turquoise: "2j4r4",
  violet: "9b10u",
  wheat: "9ld4j",
  white: "9zldr",
  whitesmoke: "9lhpx",
  yellow: "9zl6o",
  yellowgreen: "61fzm"
}, en = Math.round;
function el(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ip = (e, t, n) => n === 0 ? e : e / 100;
function da(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Oo {
  constructor(t) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    an(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    an(this, "r", 0);
    /**
     * Green, G in RGB
     */
    an(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    an(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    an(this, "a", 1);
    // HSV privates
    an(this, "_h");
    an(this, "_s");
    an(this, "_l");
    an(this, "_v");
    // intermediate variables to calculate HSL/HSV
    an(this, "_max");
    an(this, "_min");
    an(this, "_brightness");
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return r.startsWith(a);
      };
      const r = t.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(r))
        this.fromHexString(r);
      else if (o("rgb"))
        this.fromRgbString(r);
      else if (o("hsl"))
        this.fromHslString(r);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(r);
      else {
        const a = eM[r.toLowerCase()];
        a && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(a, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (t instanceof Oo)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = da(t.r), this.g = da(t.g), this.b = da(t.b), this.a = typeof t.a == "number" ? da(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const i = a / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = en(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, a = (s) => (r[s] - this[s]) * o + this[s], i = {
      r: en(a("r")),
      g: en(a("g")),
      b: en(a("b")),
      a: en(a("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (a) => en((this[a] * this.a + n[a] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = en(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = en(this.getSaturation() * 100), r = en(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = da(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, a) {
      return parseInt(n[o] + n[a || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const f = en(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let a = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (a = l, i = u) : c >= 1 && c < 2 ? (a = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (a = u, s = l) : c >= 5 && c < 6 && (a = l, s = u);
    const m = r - l / 2;
    this.r = en((a + m) * 255), this.g = en((i + m) * 255), this.b = en((s + m) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const a = en(r * 255);
    if (this.r = a, this.g = a, this.b = a, n <= 0)
      return;
    const i = t / 60, s = Math.floor(i), c = i - s, l = en(r * (1 - n) * 255), u = en(r * (1 - n * c) * 255), m = en(r * (1 - n * (1 - c)) * 255);
    switch (s) {
      case 0:
        this.g = m, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = m;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = m, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = el(t, Ip);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = el(t, Ip);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = el(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? en(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const ji = 2, Mp = 0.16, tM = 0.05, nM = 0.05, rM = 0.15, a0 = 5, i0 = 4, oM = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function Tp(e, t, n) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - ji * t : Math.round(e.h) + ji * t : r = n ? Math.round(e.h) + ji * t : Math.round(e.h) - ji * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Dp(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return n ? r = e.s - Mp * t : t === i0 ? r = e.s + Mp : r = e.s + tM * t, r > 1 && (r = 1), n && t === a0 && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Ap(e, t, n) {
  let r;
  return n ? r = e.v + nM * t : r = e.v - rM * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function aM(e, t = {}) {
  const n = [], r = new Oo(e), o = r.toHsv();
  for (let a = a0; a > 0; a -= 1) {
    const i = new Oo({
      h: Tp(o, a, !0),
      s: Dp(o, a, !0),
      v: Ap(o, a, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (let a = 1; a <= i0; a += 1) {
    const i = new Oo({
      h: Tp(o, a),
      s: Dp(o, a),
      v: Ap(o, a)
    });
    n.push(i);
  }
  return t.theme === "dark" ? oM.map(({
    index: a,
    amount: i
  }) => new Oo(t.backgroundColor || "#141414").mix(n[a], i).toHexString()) : n.map((a) => a.toHexString());
}
const Eu = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Eu.primary = Eu[5];
function iM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function sM(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let n = t;
  for (; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const kp = "data-rc-order", jp = "data-rc-priority", cM = "rc-util-key", wu = /* @__PURE__ */ new Map();
function s0({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : cM;
}
function Hd(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function lM(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Wd(e) {
  return Array.from((wu.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function c0(e, t = {}) {
  if (!iM())
    return null;
  const {
    csp: n,
    prepend: r,
    priority: o = 0
  } = t, a = lM(r), i = a === "prependQueue", s = document.createElement("style");
  s.setAttribute(kp, a), i && o && s.setAttribute(jp, `${o}`), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  const c = Hd(t), {
    firstChild: l
  } = c;
  if (r) {
    if (i) {
      const u = (t.styles || Wd(c)).filter((m) => {
        if (!["prepend", "prependQueue"].includes(m.getAttribute(kp)))
          return !1;
        const f = Number(m.getAttribute(jp) || 0);
        return o >= f;
      });
      if (u.length)
        return c.insertBefore(s, u[u.length - 1].nextSibling), s;
    }
    c.insertBefore(s, l);
  } else
    c.appendChild(s);
  return s;
}
function uM(e, t = {}) {
  let {
    styles: n
  } = t;
  return n || (n = Wd(Hd(t))), n.find((r) => r.getAttribute(s0(t)) === e);
}
function dM(e, t) {
  const n = wu.get(e);
  if (!n || !sM(document, n)) {
    const r = c0("", t), {
      parentNode: o
    } = r;
    wu.set(e, o), e.removeChild(r);
  }
}
function fM(e, t, n = {}) {
  var c, l, u;
  const r = Hd(n), o = Wd(r), a = {
    ...n,
    styles: o
  };
  dM(r, a);
  const i = uM(t, a);
  if (i)
    return (c = a.csp) != null && c.nonce && i.nonce !== ((l = a.csp) == null ? void 0 : l.nonce) && (i.nonce = (u = a.csp) == null ? void 0 : u.nonce), i.innerHTML !== e && (i.innerHTML = e), i;
  const s = c0(e, a);
  return s.setAttribute(s0(a), t), s;
}
function l0(e) {
  var t;
  return (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e);
}
function mM(e) {
  return l0(e) instanceof ShadowRoot;
}
function pM(e) {
  return mM(e) ? l0(e) : null;
}
let xu = {};
const Ud = [], vM = (e) => {
  Ud.push(e);
};
function gM(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = Ud.reduce((r, o) => o(r ?? "", "warning"), t);
    n && console.error(`Warning: ${n}`);
  }
}
function hM(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = Ud.reduce((r, o) => o(r ?? "", "note"), t);
    n && console.warn(`Note: ${n}`);
  }
}
function bM() {
  xu = {};
}
function u0(e, t, n) {
  !t && !xu[n] && (e(!1, n), xu[n] = !0);
}
function Js(e, t) {
  u0(gM, e, t);
}
function yM(e, t) {
  u0(hM, e, t);
}
Js.preMessage = vM;
Js.resetWarned = bM;
Js.noteOnce = yM;
function CM(e) {
  return e.replace(/-(.)/g, (t, n) => n.toUpperCase());
}
function SM(e, t) {
  Js(e, `[@ant-design/icons] ${t}`);
}
function Fp(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Lp(e = {}) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[CM(n)] = r;
    }
    return t;
  }, {});
}
function $u(e, t, n) {
  return n ? /* @__PURE__ */ Y.createElement(e.tag, {
    key: t,
    ...Lp(e.attrs),
    ...n
  }, (e.children || []).map((r, o) => $u(r, `${t}-${e.tag}-${o}`))) : /* @__PURE__ */ Y.createElement(e.tag, {
    key: t,
    ...Lp(e.attrs)
  }, (e.children || []).map((r, o) => $u(r, `${t}-${e.tag}-${o}`)));
}
function d0(e) {
  return aM(e)[0];
}
function f0(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const EM = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, wM = (e) => {
  const {
    csp: t,
    prefixCls: n,
    layer: r
  } = tn(o0);
  let o = EM;
  n && (o = o.replace(/anticon/g, n)), r && (o = `@layer ${r} {
${o}
}`), Ge(() => {
    const a = e.current, i = pM(a);
    fM(o, "@ant-design-icons", {
      prepend: !r,
      csp: t,
      attachTo: i
    });
  }, []);
}, Na = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function xM({
  primaryColor: e,
  secondaryColor: t
}) {
  Na.primaryColor = e, Na.secondaryColor = t || d0(e), Na.calculated = !!t;
}
function $M() {
  return {
    ...Na
  };
}
const Zo = (e) => {
  const {
    icon: t,
    className: n,
    onClick: r,
    style: o,
    primaryColor: a,
    secondaryColor: i,
    ...s
  } = e, c = d.useRef();
  let l = Na;
  if (a && (l = {
    primaryColor: a,
    secondaryColor: i || d0(a)
  }), wM(c), SM(Fp(t), `icon should be icon definiton, but got ${t}`), !Fp(t))
    return null;
  let u = t;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), $u(u.icon, `svg-${u.name}`, {
    className: n,
    onClick: r,
    style: o,
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...s,
    ref: c
  });
};
Zo.displayName = "IconReact";
Zo.getTwoToneColors = $M;
Zo.setTwoToneColors = xM;
function m0(e) {
  const [t, n] = f0(e);
  return Zo.setTwoToneColors({
    primaryColor: t,
    secondaryColor: n
  });
}
function OM() {
  const e = Zo.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function Ou() {
  return Ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ou.apply(this, arguments);
}
m0(Eu.primary);
const Gn = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    // affect outter <i>...</i>
    className: n,
    // affect inner <svg>...</svg>
    icon: r,
    spin: o,
    rotate: a,
    tabIndex: i,
    onClick: s,
    // other
    twoToneColor: c,
    ...l
  } = e, {
    prefixCls: u = "anticon",
    rootClassName: m
  } = d.useContext(o0), f = Q(m, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, n);
  let v = i;
  v === void 0 && s && (v = -1);
  const g = a ? {
    msTransform: `rotate(${a}deg)`,
    transform: `rotate(${a}deg)`
  } : void 0, [y, p] = f0(c);
  return /* @__PURE__ */ d.createElement("span", Ou({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: v,
    onClick: s,
    className: f
  }), /* @__PURE__ */ d.createElement(Zo, {
    icon: r,
    primaryColor: y,
    secondaryColor: p,
    style: g
  }));
});
Gn.displayName = "AntdIcon";
Gn.getTwoToneColor = OM;
Gn.setTwoToneColor = m0;
function Nu() {
  return Nu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nu.apply(this, arguments);
}
const NM = (e, t) => /* @__PURE__ */ d.createElement(Gn, Nu({}, e, {
  ref: t,
  icon: uI
})), p0 = /* @__PURE__ */ d.forwardRef(NM);
process.env.NODE_ENV !== "production" && (p0.displayName = "BulbFilled");
function _u() {
  return _u = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _u.apply(this, arguments);
}
const _M = (e, t) => /* @__PURE__ */ d.createElement(Gn, _u({}, e, {
  ref: t,
  icon: dI
})), v0 = /* @__PURE__ */ d.forwardRef(_M);
process.env.NODE_ENV !== "production" && (v0.displayName = "BulbOutlined");
function Pu() {
  return Pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pu.apply(this, arguments);
}
const PM = (e, t) => /* @__PURE__ */ d.createElement(Gn, Pu({}, e, {
  ref: t,
  icon: th
})), Ru = /* @__PURE__ */ d.forwardRef(PM);
process.env.NODE_ENV !== "production" && (Ru.displayName = "CloseOutlined");
function Iu() {
  return Iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Iu.apply(this, arguments);
}
const RM = (e, t) => /* @__PURE__ */ d.createElement(Gn, Iu({}, e, {
  ref: t,
  icon: Xb
})), g0 = /* @__PURE__ */ d.forwardRef(RM);
process.env.NODE_ENV !== "production" && (g0.displayName = "DownloadOutlined");
function Mu() {
  return Mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mu.apply(this, arguments);
}
const IM = (e, t) => /* @__PURE__ */ d.createElement(Gn, Mu({}, e, {
  ref: t,
  icon: Zb
})), h0 = /* @__PURE__ */ d.forwardRef(IM);
process.env.NODE_ENV !== "production" && (h0.displayName = "PaperClipOutlined");
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tu.apply(this, arguments);
}
const MM = (e, t) => /* @__PURE__ */ d.createElement(Gn, Tu({}, e, {
  ref: t,
  icon: Nb
})), b0 = /* @__PURE__ */ d.forwardRef(MM);
process.env.NODE_ENV !== "production" && (b0.displayName = "PlusOutlined");
function Du() {
  return Du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Du.apply(this, arguments);
}
const TM = (e, t) => /* @__PURE__ */ d.createElement(Gn, Du({}, e, {
  ref: t,
  icon: CI
})), qd = /* @__PURE__ */ d.forwardRef(TM);
process.env.NODE_ENV !== "production" && (qd.displayName = "RobotOutlined");
function Au() {
  return Au = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Au.apply(this, arguments);
}
const DM = (e, t) => /* @__PURE__ */ d.createElement(Gn, Au({}, e, {
  ref: t,
  icon: SI
})), y0 = /* @__PURE__ */ d.forwardRef(DM);
process.env.NODE_ENV !== "production" && (y0.displayName = "SendOutlined");
const yr = Xp, ec = () => Gp(), AM = ({ message: e }) => {
  const t = yr((f) => f.theme.isDark), n = ec(), r = e.sender === "user", o = yr((f) => f.chat.currentUser), a = () => {
    var g;
    if (!(o != null && o.firstName)) return "U";
    const f = o.firstName.trim(), v = (g = o.lastName) == null ? void 0 : g.trim();
    return v ? `${f.charAt(0)}${v.charAt(0)}`.toUpperCase() : f.length >= 2 ? f.substring(0, 2).toUpperCase() : f.charAt(0).toUpperCase();
  }, i = (f) => {
    if (f.downloadUrl) {
      const v = document.createElement("a");
      v.href = f.downloadUrl, v.download = f.name, document.body.appendChild(v), v.click(), document.body.removeChild(v);
    }
  }, s = (f) => {
    (f.url || f.preview) && window.open(f.url || f.preview, "_blank");
  }, c = (f) => {
    n(gv({ content: f })), n(Sa({ message: f }));
  }, l = (f) => {
    if (f === 0) return "0 Bytes";
    const v = 1024, g = ["Bytes", "KB", "MB", "GB"], y = Math.floor(Math.log(f) / Math.log(v));
    return parseFloat((f / Math.pow(v, y)).toFixed(2)) + " " + g[y];
  }, u = (f) => new Date(f).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), m = (f) => {
    const v = /(<table[^>]*>[\s\S]*?<\/table>)/gi, g = f.replace(v, '<div class="table-scroll-container">$1</div>');
    return /* @__PURE__ */ le.jsxDEV("div", { dangerouslySetInnerHTML: { __html: g } }, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
      lineNumber: 78,
      columnNumber: 12
    }, void 0);
  };
  return /* @__PURE__ */ le.jsxDEV("div", { className: `message-item message-item--${r ? "user" : "ai"} message-item--${t ? "dark" : "light"}`, children: [
    /* @__PURE__ */ le.jsxDEV(
      Pd,
      {
        size: 40,
        icon: r ? void 0 : /* @__PURE__ */ le.jsxDEV(qd, {}, void 0, !1, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
          lineNumber: 85,
          columnNumber: 25
        }, void 0),
        className: `message-avatar ${r ? "user-avatar" : "ai-avatar"}`,
        children: r ? a() : "AI"
      },
      void 0,
      !1,
      {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ le.jsxDEV("div", { className: `message-content message-content--${r ? "user" : "ai"}`, children: /* @__PURE__ */ le.jsxDEV("div", { className: "message-bubble-container", children: [
      /* @__PURE__ */ le.jsxDEV(
        Qo,
        {
          size: "small",
          className: `message-card message-card--${r ? "user" : "ai"}-${t ? "dark" : "light"}`,
          styles: {
            body: { padding: "12px 16px" }
          },
          children: [
            /* @__PURE__ */ le.jsxDEV("div", { className: `message-text message-text--${r ? "user" : "ai"} message-text--${t ? "dark" : "light"}`, children: m(e.content) }, void 0, !1, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, void 0),
            !r && e.choices && e.choices.length > 1 && /* @__PURE__ */ le.jsxDEV("div", { className: "message-choices", children: [
              /* @__PURE__ */ le.jsxDEV("div", { className: "choices-label", children: "Choose an option:" }, void 0, !1, {
                fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                lineNumber: 107,
                columnNumber: 17
              }, void 0),
              e.choices.slice(1).map((f, v) => /* @__PURE__ */ le.jsxDEV(
                gn,
                {
                  type: "default",
                  size: "small",
                  onClick: () => c(f.message.content),
                  className: `choice-button choice-button--${t ? "dark" : "light"}`,
                  children: f.message.content
                },
                v,
                !1,
                {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                  lineNumber: 109,
                  columnNumber: 19
                },
                void 0
              ))
            ] }, void 0, !0, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
              lineNumber: 106,
              columnNumber: 15
            }, void 0),
            e.attachments && e.attachments.length > 0 && /* @__PURE__ */ le.jsxDEV("div", { className: "message-attachments", children: e.attachments.map((f) => /* @__PURE__ */ le.jsxDEV("div", { className: "attachment-item", children: [
              f.type.startsWith("image/") ? /* @__PURE__ */ le.jsxDEV(
                "div",
                {
                  className: "attachment-image",
                  onClick: () => s(f),
                  style: { cursor: "pointer" },
                  children: [
                    f.preview && /* @__PURE__ */ le.jsxDEV(
                      "img",
                      {
                        src: f.preview,
                        alt: f.name,
                        style: { maxWidth: "200px", maxHeight: "200px", borderRadius: "8px" }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                        lineNumber: 134,
                        columnNumber: 27
                      },
                      void 0
                    ),
                    /* @__PURE__ */ le.jsxDEV("div", { className: `file-name-overlay file-name-overlay--${r ? "user" : "ai"}-${t ? "dark" : "light"}`, children: "Click to view" }, void 0, !1, {
                      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                      lineNumber: 140,
                      columnNumber: 25
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                  lineNumber: 128,
                  columnNumber: 23
                },
                void 0
              ) : /* @__PURE__ */ le.jsxDEV("div", { className: `attachment-file attachment-file--${t ? "dark" : "light"}`, children: /* @__PURE__ */ le.jsxDEV("div", { className: "file-info", children: [
                /* @__PURE__ */ le.jsxDEV("div", { className: "file-name", children: f.name }, void 0, !1, {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                  lineNumber: 147,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ le.jsxDEV("div", { className: "file-size", children: l(f.size) }, void 0, !1, {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                  lineNumber: 148,
                  columnNumber: 27
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                lineNumber: 146,
                columnNumber: 25
              }, void 0) }, void 0, !1, {
                fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                lineNumber: 145,
                columnNumber: 23
              }, void 0),
              !r && (f.downloadUrl || f.url) && /* @__PURE__ */ le.jsxDEV(er, { title: "Download file", children: /* @__PURE__ */ le.jsxDEV(
                gn,
                {
                  type: "text",
                  size: "small",
                  icon: /* @__PURE__ */ le.jsxDEV(g0, {}, void 0, !1, {
                    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                    lineNumber: 158,
                    columnNumber: 33
                  }, void 0),
                  onClick: () => i(f),
                  className: "download-btn"
                },
                void 0,
                !1,
                {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                  lineNumber: 155,
                  columnNumber: 25
                },
                void 0
              ) }, void 0, !1, {
                fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
                lineNumber: 154,
                columnNumber: 23
              }, void 0)
            ] }, f.id, !0, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, void 0)) }, void 0, !1, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
              lineNumber: 124,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
          lineNumber: 93,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ le.jsxDEV("div", { className: `message-time message-time--${r ? "user" : "ai"} message-time--${t ? "dark" : "light"}`, children: u(e.timestamp) }, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, void 0) }, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageItem/MessageItem.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, void 0);
}, kM = () => {
  const e = yr((t) => t.theme.isDark);
  return /* @__PURE__ */ le.jsxDEV("div", { className: "typing-indicator", children: [
    /* @__PURE__ */ le.jsxDEV(
      Pd,
      {
        size: 40,
        className: "typing-avatar",
        icon: /* @__PURE__ */ le.jsxDEV(qd, {}, void 0, !1, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
          lineNumber: 15,
          columnNumber: 15
        }, void 0),
        children: "AI"
      },
      void 0,
      !1,
      {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
        lineNumber: 12,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ le.jsxDEV(
      Qo,
      {
        size: "small",
        className: `typing-card typing-card--${e ? "dark" : "light"}`,
        styles: {
          body: {
            padding: "12px 16px"
          }
        },
        children: /* @__PURE__ */ le.jsxDEV("div", { className: "typing-dots", children: [
          /* @__PURE__ */ le.jsxDEV("div", { className: `typing-dot typing-dot--${e ? "dark" : "light"}` }, void 0, !1, {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ le.jsxDEV("div", { className: `typing-dot typing-dot--${e ? "dark" : "light"}` }, void 0, !1, {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ le.jsxDEV("div", { className: `typing-dot typing-dot--${e ? "dark" : "light"}` }, void 0, !1, {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/TypingIndicator/TypingIndicator.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, void 0);
}, jM = () => {
  const { messages: e, isTyping: t } = yr((a) => a.chat), n = yr((a) => a.theme.isDark), r = we(null), o = () => {
    var a;
    (a = r.current) == null || a.scrollIntoView({ behavior: "smooth" });
  };
  return Ge(() => {
    o();
  }, [e, t]), /* @__PURE__ */ le.jsxDEV("div", { className: `message-list message-list--${n ? "dark" : "light"}`, children: e.length === 0 ? /* @__PURE__ */ le.jsxDEV("div", { className: "welcome-container", children: /* @__PURE__ */ le.jsxDEV("div", { className: "welcome-content", children: [
    /* @__PURE__ */ le.jsxDEV("h1", { className: `welcome-content__title--${n ? "dark" : "light"}`, children: "Welcome to Airline Report Assistant!" }, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, void 0),
    /* @__PURE__ */ le.jsxDEV("p", { className: `welcome-content__description--${n ? "dark" : "light"}`, children: "Ask me about airline reports, schedules, or analytics to get started." }, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
    lineNumber: 24,
    columnNumber: 11
  }, void 0) }, void 0, !1, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, void 0) : /* @__PURE__ */ le.jsxDEV("div", { className: "messages-container", children: [
    e.map((a, i) => /* @__PURE__ */ le.jsxDEV(
      AM,
      {
        message: a,
        isLastMessage: i === e.length - 1
      },
      a.id,
      !1,
      {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
        lineNumber: 36,
        columnNumber: 15
      },
      void 0
    )),
    t && /* @__PURE__ */ le.jsxDEV(kM, {}, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
      lineNumber: 42,
      columnNumber: 24
    }, void 0),
    /* @__PURE__ */ le.jsxDEV("div", { ref: r }, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, void 0) }, void 0, !1, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/MessageList/MessageList.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, void 0);
}, FM = Ea.enhanceEndpoints({
  addTagTypes: ["grmConfig"]
}).injectEndpoints({
  endpoints: (e) => ({
    getresponse1data: e.query({
      query: (t) => ({
        method: "GET",
        url: `staticResponse/${t}`
      })
    }),
    getChatResponse: e.mutation({
      query: (t) => ({
        method: "POST",
        url: "/chat/completions",
        body: t
      })
    })
  })
}), {
  useLazyGetresponse1dataQuery: QM,
  useGetChatResponseMutation: LM
} = FM, { TextArea: zM } = Yo, VM = () => {
  const [e, t] = ct(""), [n, r] = ct([]), o = ec(), { isTyping: a } = yr((p) => p.chat), i = yr((p) => p.theme.isDark), s = we(null), c = we(null);
  LM(), Ge(() => {
    var p;
    (p = s.current) == null || p.focus();
  }, []), Ge(() => {
    a || setTimeout(() => {
      var p;
      (p = s.current) == null || p.focus();
    }, 100);
  }, [a]), Ge(() => () => {
    n.forEach((p) => {
      p.preview && URL.revokeObjectURL(p.preview);
    });
  }, [n]);
  const l = ({ fileList: p }) => {
    if (p.length > 5) {
      Cu.warning("You can upload maximum 5 files at once");
      return;
    }
    const S = p.filter((E) => E.size && E.size > 10 * 1024 * 1024 ? (Cu.error(`${E.name} is too large. Maximum file size is 10MB.`), !1) : !0).map((E) => {
      var h;
      return E.originFileObj && ((h = E.type) != null && h.startsWith("image/")) ? {
        ...E,
        preview: URL.createObjectURL(E.originFileObj)
      } : E;
    });
    r(S);
  }, u = (p) => {
    r((C) => C.filter((S) => S.uid !== p.uid));
  }, m = (p) => p.startsWith("image/") ? "🖼️" : p.includes("pdf") ? "📄" : p.includes("word") || p.includes("document") ? "📝" : p.includes("excel") || p.includes("spreadsheet") ? "📊" : p.includes("text") ? "📋" : "📎", f = (p) => {
    if (p === 0) return "0 Bytes";
    const C = 1024, S = ["Bytes", "KB", "MB", "GB"], E = Math.floor(Math.log(p) / Math.log(C));
    return parseFloat((p / Math.pow(C, E)).toFixed(2)) + " " + S[E];
  }, v = async () => {
    const p = e.trim();
    if ((p || n.length > 0) && !a) {
      const C = n.map((E) => {
        var h, b;
        return {
          id: E.uid,
          name: E.name,
          type: E.type || "application/octet-stream",
          size: E.size || 0,
          preview: (h = E.type) != null && h.startsWith("image/") ? URL.createObjectURL(E.originFileObj) : void 0,
          file: E.originFileObj,
          // Keep reference to original file for non-image preview
          url: (b = E.type) != null && b.startsWith("image/") ? void 0 : URL.createObjectURL(E.originFileObj)
        };
      });
      o(gv({
        content: p || "Sent files",
        attachments: C.length > 0 ? C : void 0
      })), t(""), r([]);
      let S = {
        agent: "reportAgent",
        messages: [
          { role: "user", content: p }
        ]
      };
      o(Sa({
        message: p || "Please analyze these files",
        attachments: C.length > 0 ? C : void 0,
        requestData: S
      }));
    }
  }, g = (p) => {
    p.key === "Enter" && !p.shiftKey && (p.preventDefault(), (e.trim() || n.length > 0) && !a && v());
  }, y = {
    multiple: !0,
    beforeUpload: () => !1,
    onChange: l,
    fileList: n,
    showUploadList: !1,
    accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.gif,.bmp,.webp"
  };
  return /* @__PURE__ */ le.jsxDEV("div", { className: `chat-input chat-input--${i ? "dark" : "light"}`, children: [
    n.length > 0 && /* @__PURE__ */ le.jsxDEV("div", { className: `cls-cb-inline-previews cls-cb-inline-previews--${i ? "dark" : "light"}`, children: n.map((p) => {
      var S;
      const C = (S = p.type) == null ? void 0 : S.startsWith("image/");
      return /* @__PURE__ */ le.jsxDEV("div", { className: `cls-cb-preview-item cls-cb-preview-item--${i ? "dark" : "light"}`, children: C ? /* @__PURE__ */ le.jsxDEV("div", { className: "cls-cb-image-preview-container", children: [
        /* @__PURE__ */ le.jsxDEV(
          "img",
          {
            src: p.preview,
            alt: p.name,
            className: "cls-cb-image-preview"
          },
          void 0,
          !1,
          {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
            lineNumber: 159,
            columnNumber: 21
          },
          void 0
        ),
        /* @__PURE__ */ le.jsxDEV("div", { className: "cls-cb-image-overlay", children: /* @__PURE__ */ le.jsxDEV(er, { title: "Remove", children: /* @__PURE__ */ le.jsxDEV(
          gn,
          {
            type: "text",
            size: "small",
            icon: /* @__PURE__ */ le.jsxDEV(Ru, {}, void 0, !1, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
              lineNumber: 169,
              columnNumber: 33
            }, void 0),
            onClick: () => u(p),
            className: `cls-cb-remove-btn cls-cb-remove-btn--${i ? "dark" : "light"}`
          },
          void 0,
          !1,
          {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
            lineNumber: 166,
            columnNumber: 25
          },
          void 0
        ) }, void 0, !1, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
          lineNumber: 165,
          columnNumber: 23
        }, void 0) }, void 0, !1, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
          lineNumber: 164,
          columnNumber: 21
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
        lineNumber: 158,
        columnNumber: 19
      }, void 0) : /* @__PURE__ */ le.jsxDEV(
        Qo,
        {
          size: "small",
          className: `cls-cb-file-card cls-cb-file-card--${i ? "dark" : "light"}`,
          children: /* @__PURE__ */ le.jsxDEV("div", { className: "cls-cb-file-content", children: [
            /* @__PURE__ */ le.jsxDEV("div", { className: "cls-cb-file-info", children: [
              /* @__PURE__ */ le.jsxDEV("span", { className: "cls-cb-file-icon", children: m(p.type || "") }, void 0, !1, {
                fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
                lineNumber: 183,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ le.jsxDEV("div", { className: "cls-cb-file-details", children: [
                /* @__PURE__ */ le.jsxDEV("div", { className: `cls-cb-file-name cls-cb-file-name--${i ? "dark" : "light"}`, children: p.name }, void 0, !1, {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
                  lineNumber: 187,
                  columnNumber: 27
                }, void 0),
                /* @__PURE__ */ le.jsxDEV("div", { className: `cls-cb-file-size cls-cb-file-size--${i ? "dark" : "light"}`, children: f(p.size || 0) }, void 0, !1, {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
                  lineNumber: 190,
                  columnNumber: 27
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
                lineNumber: 186,
                columnNumber: 25
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
              lineNumber: 182,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ le.jsxDEV(er, { title: "Remove", children: /* @__PURE__ */ le.jsxDEV(
              gn,
              {
                type: "text",
                size: "small",
                icon: /* @__PURE__ */ le.jsxDEV(Ru, {}, void 0, !1, {
                  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
                  lineNumber: 199,
                  columnNumber: 33
                }, void 0),
                onClick: () => u(p),
                className: `cls-cb-remove-file-btn cls-cb-remove-file-btn--${i ? "dark" : "light"}`
              },
              void 0,
              !1,
              {
                fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
                lineNumber: 196,
                columnNumber: 25
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
              lineNumber: 195,
              columnNumber: 23
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
            lineNumber: 181,
            columnNumber: 21
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
          lineNumber: 177,
          columnNumber: 19
        },
        void 0
      ) }, p.uid, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
        lineNumber: 156,
        columnNumber: 15
      }, void 0);
    }) }, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
      lineNumber: 152,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ le.jsxDEV("div", { className: "input-container", children: /* @__PURE__ */ le.jsxDEV("div", { className: `input-wrapper input-wrapper--${i ? "dark" : "light"}`, children: [
      /* @__PURE__ */ le.jsxDEV(Bd, { ...y, ref: c, children: /* @__PURE__ */ le.jsxDEV(er, { title: "Attach files (PDF, Images, Documents)", children: /* @__PURE__ */ le.jsxDEV(
        gn,
        {
          type: "text",
          icon: /* @__PURE__ */ le.jsxDEV(h0, {}, void 0, !1, {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
            lineNumber: 220,
            columnNumber: 23
          }, void 0),
          disabled: a,
          className: `attach-button attach-button--${i ? "dark" : "light"}`
        },
        void 0,
        !1,
        {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
          lineNumber: 218,
          columnNumber: 15
        },
        void 0
      ) }, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, void 0) }, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ le.jsxDEV(
        zM,
        {
          ref: s,
          value: e,
          onChange: (p) => t(p.target.value),
          onKeyDown: g,
          placeholder: n.length > 0 ? "Add a message (optional)..." : "Type a message...",
          autoSize: { minRows: 1, maxRows: 4 },
          disabled: a,
          variant: "borderless",
          className: `text-area text-area--${i ? "dark" : "light"}`,
          styles: {
            textarea: {
              background: "transparent !important"
            }
          }
        },
        void 0,
        !1,
        {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
          lineNumber: 227,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ le.jsxDEV(
        gn,
        {
          type: "primary",
          icon: /* @__PURE__ */ le.jsxDEV(y0, {}, void 0, !1, {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
            lineNumber: 246,
            columnNumber: 19
          }, void 0),
          onClick: v,
          disabled: a || !e.trim() && n.length === 0,
          className: "send-button"
        },
        void 0,
        !1,
        {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
          lineNumber: 244,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, void 0) }, void 0, !1, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatInput/ChatInput.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, void 0);
}, BM = () => {
  const e = ec(), t = yr((r) => r.theme.isDark), n = () => {
    e(sC());
  };
  return /* @__PURE__ */ le.jsxDEV(er, { title: `Switch to ${t ? "light" : "dark"} mode`, children: /* @__PURE__ */ le.jsxDEV(
    gn,
    {
      type: "text",
      icon: t ? /* @__PURE__ */ le.jsxDEV(v0, {}, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ThemeToggle/ThemeToggle.tsx",
        lineNumber: 22,
        columnNumber: 24
      }, void 0) : /* @__PURE__ */ le.jsxDEV(p0, {}, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ThemeToggle/ThemeToggle.tsx",
        lineNumber: 22,
        columnNumber: 43
      }, void 0),
      onClick: n,
      className: `theme-toggle theme-toggle--${t ? "dark" : "light"}`,
      size: "large"
    },
    void 0,
    !1,
    {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ThemeToggle/ThemeToggle.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ThemeToggle/ThemeToggle.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0);
}, HM = () => {
  const e = ec(), t = () => {
    e(oC());
  }, n = yr((o) => o.theme.isDark);
  Ge(() => {
    document.body.style.margin = "0", document.body.style.padding = "0", document.body.style.height = "100vh", document.body.style.overflow = "hidden";
  }, []);
  const r = {
    algorithm: n ? Pp.darkAlgorithm : Pp.defaultAlgorithm,
    token: {
      colorPrimary: "#1890ff",
      borderRadius: 8,
      fontSize: 14,
      colorBgContainer: n ? "#1f1f1f" : "#ffffff",
      colorBgElevated: n ? "#262626" : "#ffffff",
      colorText: n ? "#ffffff" : "#000000",
      colorTextSecondary: n ? "#d9d9d9" : "#666666",
      colorBorder: n ? "#424242" : "#d9d9d9"
    }
  };
  return /* @__PURE__ */ le.jsxDEV(kr, { theme: r, children: /* @__PURE__ */ le.jsxDEV("div", { className: `chat-container chat-container--${n ? "dark" : "light"}`, children: [
    /* @__PURE__ */ le.jsxDEV("div", { className: `sidebar sidebar--${n ? "dark" : "light"}`, children: [
      /* @__PURE__ */ le.jsxDEV("div", { className: "sidebar-header", children: [
        /* @__PURE__ */ le.jsxDEV("h2", { children: "Airline Assistant" }, void 0, !1, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ le.jsxDEV(
          gn,
          {
            type: "primary",
            icon: /* @__PURE__ */ le.jsxDEV(b0, {}, void 0, !1, {
              fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
              lineNumber: 53,
              columnNumber: 21
            }, void 0),
            block: !0,
            onClick: t,
            className: "new-chat-button",
            children: "New Chat"
          },
          void 0,
          !1,
          {
            fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
            lineNumber: 51,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ le.jsxDEV("div", { className: "theme-toggle-container", children: /* @__PURE__ */ le.jsxDEV(BM, {}, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, void 0) }, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ le.jsxDEV("div", { className: `main-chat-area main-chat-area--${n ? "dark" : "light"}`, children: [
      /* @__PURE__ */ le.jsxDEV("div", { className: `chat-header chat-header--${n ? "dark" : "light"}`, children: /* @__PURE__ */ le.jsxDEV("div", { children: /* @__PURE__ */ le.jsxDEV("h3", { className: `chat-header__title--${n ? "dark" : "light"}`, children: "Airline Report Assistant" }, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, void 0) }, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, void 0) }, void 0, !1, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ le.jsxDEV("div", { className: "chat-content", children: [
        /* @__PURE__ */ le.jsxDEV(jM, {}, void 0, !1, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ le.jsxDEV(VM, {}, void 0, !1, {
          fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/components/ChatContainer/ChatContainer.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, void 0);
};
function WM() {
  return /* @__PURE__ */ le.jsxDEV(B0, { store: tS, children: /* @__PURE__ */ le.jsxDEV(HM, {}, void 0, !1, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/App.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/App.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
const YM = () => /* @__PURE__ */ le.jsxDEV(WM, {}, void 0, !1, {
  fileName: "/home/karthick.d/Documents/updated_Workspace/git update chatbot/infi-chatbot-updated/src/Exported.tsx",
  lineNumber: 5,
  columnNumber: 38
}, void 0);
export {
  YM as default
};
