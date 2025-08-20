(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = r(s);
    fetch(s.href, o);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Hs(e) {
  const t = Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const $e = {},
  Qt = [],
  lt = () => {},
  cc = () => !1,
  Ln = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  zs = (e) => e.startsWith("onUpdate:"),
  je = Object.assign,
  Gs = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  },
  uc = Object.prototype.hasOwnProperty,
  ye = (e, t) => uc.call(e, t),
  se = Array.isArray,
  Zt = (e) => Vn(e) === "[object Map]",
  Na = (e) => Vn(e) === "[object Set]",
  oe = (e) => typeof e == "function",
  Pe = (e) => typeof e == "string",
  At = (e) => typeof e == "symbol",
  Ee = (e) => e !== null && typeof e == "object",
  Ia = (e) => (Ee(e) || oe(e)) && oe(e.then) && oe(e.catch),
  ka = Object.prototype.toString,
  Vn = (e) => ka.call(e),
  fc = (e) => Vn(e).slice(8, -1),
  Aa = (e) => Vn(e) === "[object Object]",
  Bs = (e) =>
    Pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  pr = Hs(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Fn = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  dc = /-(\w)/g,
  We = Fn((e) => e.replace(dc, (t, r) => (r ? r.toUpperCase() : ""))),
  hc = /\B([A-Z])/g,
  zt = Fn((e) => e.replace(hc, "-$1").toLowerCase()),
  Kn = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ss = Fn((e) => (e ? `on${Kn(e)}` : "")),
  Nt = (e, t) => !Object.is(e, t),
  Rn = (e, ...t) => {
    for (let r = 0; r < e.length; r++) e[r](...t);
  },
  ja = (e, t, r, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: r,
    });
  },
  Cs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let go;
const Hn = () =>
  go ||
  (go =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Ws(e) {
  if (se(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r],
        s = Pe(n) ? yc(n) : Ws(n);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (Pe(e) || Ee(e)) return e;
}
const pc = /;(?![^(]*\))/g,
  mc = /:([^]+)/,
  gc = /\/\*[^]*?\*\//g;
function yc(e) {
  const t = {};
  return (
    e
      .replace(gc, "")
      .split(pc)
      .forEach((r) => {
        if (r) {
          const n = r.split(mc);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function rr(e) {
  let t = "";
  if (Pe(e)) t = e;
  else if (se(e))
    for (let r = 0; r < e.length; r++) {
      const n = rr(e[r]);
      n && (t += n + " ");
    }
  else if (Ee(e)) for (const r in e) e[r] && (t += r + " ");
  return t.trim();
}
const _c =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  vc = Hs(_c);
function Ma(e) {
  return !!e || e === "";
}
const xa = (e) => !!(e && e.__v_isRef === !0),
  ut = (e) =>
    Pe(e)
      ? e
      : e == null
      ? ""
      : se(e) || (Ee(e) && (e.toString === ka || !oe(e.toString)))
      ? xa(e)
        ? ut(e.value)
        : JSON.stringify(e, qa, 2)
      : String(e),
  qa = (e, t) =>
    xa(t)
      ? qa(e, t.value)
      : Zt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (r, [n, s], o) => ((r[os(n, o) + " =>"] = s), r),
            {}
          ),
        }
      : Na(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((r) => os(r)) }
      : At(t)
      ? os(t)
      : Ee(t) && !se(t) && !Aa(t)
      ? String(t)
      : t,
  os = (e, t = "") => {
    var r;
    return At(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let He;
class $c {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = He),
      !t && He && (this.index = (He.scopes || (He.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = He;
      try {
        return (He = this), t();
      } finally {
        He = r;
      }
    }
  }
  on() {
    He = this;
  }
  off() {
    He = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function wc() {
  return He;
}
let we;
const is = new WeakSet();
class Da {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      He && He.active && He.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), is.has(this) && (is.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || La(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), yo(this), Va(this);
    const t = we,
      r = Qe;
    (we = this), (Qe = !0);
    try {
      return this.fn();
    } finally {
      Fa(this), (we = t), (Qe = r), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ys(t);
      (this.deps = this.depsTail = void 0),
        yo(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? is.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Ns(this) && this.run();
  }
  get dirty() {
    return Ns(this);
  }
}
let Ua = 0,
  mr,
  gr;
function La(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = gr), (gr = e);
    return;
  }
  (e.next = mr), (mr = e);
}
function Js() {
  Ua++;
}
function Xs() {
  if (--Ua > 0) return;
  if (gr) {
    let t = gr;
    for (gr = void 0; t; ) {
      const r = t.next;
      (t.next = void 0), (t.flags &= -9), (t = r);
    }
  }
  let e;
  for (; mr; ) {
    let t = mr;
    for (mr = void 0; t; ) {
      const r = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function Va(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Fa(e) {
  let t,
    r = e.depsTail,
    n = r;
  for (; n; ) {
    const s = n.prevDep;
    n.version === -1 ? (n === r && (r = s), Ys(n), bc(n)) : (t = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = s);
  }
  (e.deps = t), (e.depsTail = r);
}
function Ns(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Ka(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Ka(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Sr)
  )
    return;
  e.globalVersion = Sr;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ns(e))) {
    e.flags &= -3;
    return;
  }
  const r = we,
    n = Qe;
  (we = e), (Qe = !0);
  try {
    Va(e);
    const s = e.fn(e._value);
    (t.version === 0 || Nt(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (we = r), (Qe = n), Fa(e), (e.flags &= -3);
  }
}
function Ys(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: s } = e;
  if (
    (n && ((n.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = n), (e.nextSub = void 0)),
    r.subs === e && ((r.subs = n), !n && r.computed))
  ) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep) Ys(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function bc(e) {
  const { prevDep: t, nextDep: r } = e;
  t && ((t.nextDep = r), (e.prevDep = void 0)),
    r && ((r.prevDep = t), (e.nextDep = void 0));
}
let Qe = !0;
const Ha = [];
function jt() {
  Ha.push(Qe), (Qe = !1);
}
function Mt() {
  const e = Ha.pop();
  Qe = e === void 0 ? !0 : e;
}
function yo(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const r = we;
    we = void 0;
    try {
      t();
    } finally {
      we = r;
    }
  }
}
let Sr = 0;
class Ec {
  constructor(t, r) {
    (this.sub = t),
      (this.dep = r),
      (this.version = r.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Qs {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!we || !Qe || we === this.computed) return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== we)
      (r = this.activeLink = new Ec(we, this)),
        we.deps
          ? ((r.prevDep = we.depsTail),
            (we.depsTail.nextDep = r),
            (we.depsTail = r))
          : (we.deps = we.depsTail = r),
        za(r);
    else if (r.version === -1 && ((r.version = this.version), r.nextDep)) {
      const n = r.nextDep;
      (n.prevDep = r.prevDep),
        r.prevDep && (r.prevDep.nextDep = n),
        (r.prevDep = we.depsTail),
        (r.nextDep = void 0),
        (we.depsTail.nextDep = r),
        (we.depsTail = r),
        we.deps === r && (we.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Sr++, this.notify(t);
  }
  notify(t) {
    Js();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Xs();
    }
  }
}
function za(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep) za(n);
    }
    const r = e.dep.subs;
    r !== e && ((e.prevSub = r), r && (r.nextSub = e)), (e.dep.subs = e);
  }
}
const Is = new WeakMap(),
  Ft = Symbol(""),
  ks = Symbol(""),
  Pr = Symbol("");
function Ie(e, t, r) {
  if (Qe && we) {
    let n = Is.get(e);
    n || Is.set(e, (n = new Map()));
    let s = n.get(r);
    s || (n.set(r, (s = new Qs())), (s.map = n), (s.key = r)), s.track();
  }
}
function $t(e, t, r, n, s, o) {
  const i = Is.get(e);
  if (!i) {
    Sr++;
    return;
  }
  const a = (c) => {
    c && c.trigger();
  };
  if ((Js(), t === "clear")) i.forEach(a);
  else {
    const c = se(e),
      f = c && Bs(r);
    if (c && r === "length") {
      const u = Number(n);
      i.forEach((h, v) => {
        (v === "length" || v === Pr || (!At(v) && v >= u)) && a(h);
      });
    } else
      switch (
        ((r !== void 0 || i.has(void 0)) && a(i.get(r)), f && a(i.get(Pr)), t)
      ) {
        case "add":
          c ? f && a(i.get("length")) : (a(i.get(Ft)), Zt(e) && a(i.get(ks)));
          break;
        case "delete":
          c || (a(i.get(Ft)), Zt(e) && a(i.get(ks)));
          break;
        case "set":
          Zt(e) && a(i.get(Ft));
          break;
      }
  }
  Xs();
}
function Gt(e) {
  const t = ge(e);
  return t === e ? t : (Ie(t, "iterate", Pr), Ze(e) ? t : t.map(qe));
}
function Zs(e) {
  return Ie((e = ge(e)), "iterate", Pr), e;
}
const Sc = {
  __proto__: null,
  [Symbol.iterator]() {
    return as(this, Symbol.iterator, qe);
  },
  concat(...e) {
    return Gt(this).concat(...e.map((t) => (se(t) ? Gt(t) : t)));
  },
  entries() {
    return as(this, "entries", (e) => ((e[1] = qe(e[1])), e));
  },
  every(e, t) {
    return dt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return dt(this, "filter", e, t, (r) => r.map(qe), arguments);
  },
  find(e, t) {
    return dt(this, "find", e, t, qe, arguments);
  },
  findIndex(e, t) {
    return dt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return dt(this, "findLast", e, t, qe, arguments);
  },
  findLastIndex(e, t) {
    return dt(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return dt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ls(this, "includes", e);
  },
  indexOf(...e) {
    return ls(this, "indexOf", e);
  },
  join(e) {
    return Gt(this).join(e);
  },
  lastIndexOf(...e) {
    return ls(this, "lastIndexOf", e);
  },
  map(e, t) {
    return dt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ar(this, "pop");
  },
  push(...e) {
    return ar(this, "push", e);
  },
  reduce(e, ...t) {
    return _o(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _o(this, "reduceRight", e, t);
  },
  shift() {
    return ar(this, "shift");
  },
  some(e, t) {
    return dt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ar(this, "splice", e);
  },
  toReversed() {
    return Gt(this).toReversed();
  },
  toSorted(e) {
    return Gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return ar(this, "unshift", e);
  },
  values() {
    return as(this, "values", qe);
  },
};
function as(e, t, r) {
  const n = Zs(e),
    s = n[t]();
  return (
    n !== e &&
      !Ze(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = r(o.value)), o;
      })),
    s
  );
}
const Pc = Array.prototype;
function dt(e, t, r, n, s, o) {
  const i = Zs(e),
    a = i !== e && !Ze(e),
    c = i[t];
  if (c !== Pc[t]) {
    const h = c.apply(e, o);
    return a ? qe(h) : h;
  }
  let f = r;
  i !== e &&
    (a
      ? (f = function (h, v) {
          return r.call(this, qe(h), v, e);
        })
      : r.length > 2 &&
        (f = function (h, v) {
          return r.call(this, h, v, e);
        }));
  const u = c.call(i, f, n);
  return a && s ? s(u) : u;
}
function _o(e, t, r, n) {
  const s = Zs(e);
  let o = r;
  return (
    s !== e &&
      (Ze(e)
        ? r.length > 3 &&
          (o = function (i, a, c) {
            return r.call(this, i, a, c, e);
          })
        : (o = function (i, a, c) {
            return r.call(this, i, qe(a), c, e);
          })),
    s[t](o, ...n)
  );
}
function ls(e, t, r) {
  const n = ge(e);
  Ie(n, "iterate", Pr);
  const s = n[t](...r);
  return (s === -1 || s === !1) && ro(r[0])
    ? ((r[0] = ge(r[0])), n[t](...r))
    : s;
}
function ar(e, t, r = []) {
  jt(), Js();
  const n = ge(e)[t].apply(e, r);
  return Xs(), Mt(), n;
}
const Rc = Hs("__proto__,__v_isRef,__isVue"),
  Ga = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(At)
  );
function Oc(e) {
  At(e) || (e = String(e));
  const t = ge(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class Ba {
  constructor(t = !1, r = !1) {
    (this._isReadonly = t), (this._isShallow = r);
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (r === "__v_isReactive") return !s;
    if (r === "__v_isReadonly") return s;
    if (r === "__v_isShallow") return o;
    if (r === "__v_raw")
      return n === (s ? (o ? qc : Ya) : o ? Xa : Ja).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const i = se(t);
    if (!s) {
      let c;
      if (i && (c = Sc[r])) return c;
      if (r === "hasOwnProperty") return Oc;
    }
    const a = Reflect.get(t, r, ke(t) ? t : n);
    return (At(r) ? Ga.has(r) : Rc(r)) || (s || Ie(t, "get", r), o)
      ? a
      : ke(a)
      ? i && Bs(r)
        ? a
        : a.value
      : Ee(a)
      ? s
        ? Za(a)
        : It(a)
      : a;
  }
}
class Wa extends Ba {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, s) {
    let o = t[r];
    if (!this._isShallow) {
      const c = Kt(o);
      if (
        (!Ze(n) && !Kt(n) && ((o = ge(o)), (n = ge(n))),
        !se(t) && ke(o) && !ke(n))
      )
        return c ? !1 : ((o.value = n), !0);
    }
    const i = se(t) && Bs(r) ? Number(r) < t.length : ye(t, r),
      a = Reflect.set(t, r, n, ke(t) ? t : s);
    return (
      t === ge(s) && (i ? Nt(n, o) && $t(t, "set", r, n) : $t(t, "add", r, n)),
      a
    );
  }
  deleteProperty(t, r) {
    const n = ye(t, r);
    t[r];
    const s = Reflect.deleteProperty(t, r);
    return s && n && $t(t, "delete", r, void 0), s;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!At(r) || !Ga.has(r)) && Ie(t, "has", r), n;
  }
  ownKeys(t) {
    return Ie(t, "iterate", se(t) ? "length" : Ft), Reflect.ownKeys(t);
  }
}
class Tc extends Ba {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Cc = new Wa(),
  Nc = new Tc(),
  Ic = new Wa(!0);
const As = (e) => e,
  xr = (e) => Reflect.getPrototypeOf(e);
function kc(e, t, r) {
  return function (...n) {
    const s = this.__v_raw,
      o = ge(s),
      i = Zt(o),
      a = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      f = s[e](...n),
      u = r ? As : t ? js : qe;
    return (
      !t && Ie(o, "iterate", c ? ks : Ft),
      {
        next() {
          const { value: h, done: v } = f.next();
          return v
            ? { value: h, done: v }
            : { value: a ? [u(h[0]), u(h[1])] : u(h), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function qr(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ac(e, t) {
  const r = {
    get(s) {
      const o = this.__v_raw,
        i = ge(o),
        a = ge(s);
      e || (Nt(s, a) && Ie(i, "get", s), Ie(i, "get", a));
      const { has: c } = xr(i),
        f = t ? As : e ? js : qe;
      if (c.call(i, s)) return f(o.get(s));
      if (c.call(i, a)) return f(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ie(ge(s), "iterate", Ft), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw,
        i = ge(o),
        a = ge(s);
      return (
        e || (Nt(s, a) && Ie(i, "has", s), Ie(i, "has", a)),
        s === a ? o.has(s) : o.has(s) || o.has(a)
      );
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        c = ge(a),
        f = t ? As : e ? js : qe;
      return (
        !e && Ie(c, "iterate", Ft),
        a.forEach((u, h) => s.call(o, f(u), f(h), i))
      );
    },
  };
  return (
    je(
      r,
      e
        ? {
            add: qr("add"),
            set: qr("set"),
            delete: qr("delete"),
            clear: qr("clear"),
          }
        : {
            add(s) {
              !t && !Ze(s) && !Kt(s) && (s = ge(s));
              const o = ge(this);
              return (
                xr(o).has.call(o, s) || (o.add(s), $t(o, "add", s, s)), this
              );
            },
            set(s, o) {
              !t && !Ze(o) && !Kt(o) && (o = ge(o));
              const i = ge(this),
                { has: a, get: c } = xr(i);
              let f = a.call(i, s);
              f || ((s = ge(s)), (f = a.call(i, s)));
              const u = c.call(i, s);
              return (
                i.set(s, o),
                f ? Nt(o, u) && $t(i, "set", s, o) : $t(i, "add", s, o),
                this
              );
            },
            delete(s) {
              const o = ge(this),
                { has: i, get: a } = xr(o);
              let c = i.call(o, s);
              c || ((s = ge(s)), (c = i.call(o, s))), a && a.call(o, s);
              const f = o.delete(s);
              return c && $t(o, "delete", s, void 0), f;
            },
            clear() {
              const s = ge(this),
                o = s.size !== 0,
                i = s.clear();
              return o && $t(s, "clear", void 0, void 0), i;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      r[s] = kc(s, e, t);
    }),
    r
  );
}
function eo(e, t) {
  const r = Ac(e, t);
  return (n, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? n
      : Reflect.get(ye(r, s) && s in n ? r : n, s, o);
}
const jc = { get: eo(!1, !1) },
  Mc = { get: eo(!1, !0) },
  xc = { get: eo(!0, !1) };
const Ja = new WeakMap(),
  Xa = new WeakMap(),
  Ya = new WeakMap(),
  qc = new WeakMap();
function Dc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Uc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dc(fc(e));
}
function It(e) {
  return Kt(e) ? e : to(e, !1, Cc, jc, Ja);
}
function Qa(e) {
  return to(e, !1, Ic, Mc, Xa);
}
function Za(e) {
  return to(e, !0, Nc, xc, Ya);
}
function to(e, t, r, n, s) {
  if (!Ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Uc(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? n : r);
  return s.set(e, a), a;
}
function yr(e) {
  return Kt(e) ? yr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ze(e) {
  return !!(e && e.__v_isShallow);
}
function ro(e) {
  return e ? !!e.__v_raw : !1;
}
function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e;
}
function Lc(e) {
  return (
    !ye(e, "__v_skip") && Object.isExtensible(e) && ja(e, "__v_skip", !0), e
  );
}
const qe = (e) => (Ee(e) ? It(e) : e),
  js = (e) => (Ee(e) ? Za(e) : e);
function ke(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ge(e) {
  return el(e, !1);
}
function Vc(e) {
  return el(e, !0);
}
function el(e, t) {
  return ke(e) ? e : new Fc(e, t);
}
class Fc {
  constructor(t, r) {
    (this.dep = new Qs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = r ? t : ge(t)),
      (this._value = r ? t : qe(t)),
      (this.__v_isShallow = r);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue,
      n = this.__v_isShallow || Ze(t) || Kt(t);
    (t = n ? t : ge(t)),
      Nt(t, r) &&
        ((this._rawValue = t),
        (this._value = n ? t : qe(t)),
        this.dep.trigger());
  }
}
function ct(e) {
  return ke(e) ? e.value : e;
}
const Kc = {
  get: (e, t, r) => (t === "__v_raw" ? e : ct(Reflect.get(e, t, r))),
  set: (e, t, r, n) => {
    const s = e[t];
    return ke(s) && !ke(r) ? ((s.value = r), !0) : Reflect.set(e, t, r, n);
  },
};
function tl(e) {
  return yr(e) ? e : new Proxy(e, Kc);
}
class Hc {
  constructor(t, r, n) {
    (this.fn = t),
      (this.setter = r),
      (this._value = void 0),
      (this.dep = new Qs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Sr - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !r),
      (this.isSSR = n);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && we !== this))
      return La(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ka(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function zc(e, t, r = !1) {
  let n, s;
  return oe(e) ? (n = e) : ((n = e.get), (s = e.set)), new Hc(n, s, r);
}
const Dr = {},
  Nn = new WeakMap();
let Vt;
function Gc(e, t = !1, r = Vt) {
  if (r) {
    let n = Nn.get(r);
    n || Nn.set(r, (n = [])), n.push(e);
  }
}
function Bc(e, t, r = $e) {
  const {
      immediate: n,
      deep: s,
      once: o,
      scheduler: i,
      augmentJob: a,
      call: c,
    } = r,
    f = ($) => (s ? $ : Ze($) || s === !1 || s === 0 ? wt($, 1) : wt($));
  let u,
    h,
    v,
    w,
    P = !1,
    b = !1;
  if (
    (ke(e)
      ? ((h = () => e.value), (P = Ze(e)))
      : yr(e)
      ? ((h = () => f(e)), (P = !0))
      : se(e)
      ? ((b = !0),
        (P = e.some(($) => yr($) || Ze($))),
        (h = () =>
          e.map(($) => {
            if (ke($)) return $.value;
            if (yr($)) return f($);
            if (oe($)) return c ? c($, 2) : $();
          })))
      : oe(e)
      ? t
        ? (h = c ? () => c(e, 2) : e)
        : (h = () => {
            if (v) {
              jt();
              try {
                v();
              } finally {
                Mt();
              }
            }
            const $ = Vt;
            Vt = u;
            try {
              return c ? c(e, 3, [w]) : e(w);
            } finally {
              Vt = $;
            }
          })
      : (h = lt),
    t && s)
  ) {
    const $ = h,
      S = s === !0 ? 1 / 0 : s;
    h = () => wt($(), S);
  }
  const g = wc(),
    p = () => {
      u.stop(), g && g.active && Gs(g.effects, u);
    };
  if (o && t) {
    const $ = t;
    t = (...S) => {
      $(...S), p();
    };
  }
  let l = b ? new Array(e.length).fill(Dr) : Dr;
  const m = ($) => {
    if (!(!(u.flags & 1) || (!u.dirty && !$)))
      if (t) {
        const S = u.run();
        if (s || P || (b ? S.some((E, O) => Nt(E, l[O])) : Nt(S, l))) {
          v && v();
          const E = Vt;
          Vt = u;
          try {
            const O = [S, l === Dr ? void 0 : b && l[0] === Dr ? [] : l, w];
            c ? c(t, 3, O) : t(...O), (l = S);
          } finally {
            Vt = E;
          }
        }
      } else u.run();
  };
  return (
    a && a(m),
    (u = new Da(h)),
    (u.scheduler = i ? () => i(m, !1) : m),
    (w = ($) => Gc($, !1, u)),
    (v = u.onStop =
      () => {
        const $ = Nn.get(u);
        if ($) {
          if (c) c($, 4);
          else for (const S of $) S();
          Nn.delete(u);
        }
      }),
    t ? (n ? m(!0) : (l = u.run())) : i ? i(m.bind(null, !0), !0) : u.run(),
    (p.pause = u.pause.bind(u)),
    (p.resume = u.resume.bind(u)),
    (p.stop = p),
    p
  );
}
function wt(e, t = 1 / 0, r) {
  if (t <= 0 || !Ee(e) || e.__v_skip || ((r = r || new Set()), r.has(e)))
    return e;
  if ((r.add(e), t--, ke(e))) wt(e.value, t, r);
  else if (se(e)) for (let n = 0; n < e.length; n++) wt(e[n], t, r);
  else if (Na(e) || Zt(e))
    e.forEach((n) => {
      wt(n, t, r);
    });
  else if (Aa(e)) {
    for (const n in e) wt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && wt(e[n], t, r);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function kr(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (s) {
    zn(s, t, r);
  }
}
function ft(e, t, r, n) {
  if (oe(e)) {
    const s = kr(e, t, r, n);
    return (
      s &&
        Ia(s) &&
        s.catch((o) => {
          zn(o, t, r);
        }),
      s
    );
  }
  if (se(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(ft(e[o], t, r, n));
    return s;
  }
}
function zn(e, t, r, n = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || $e;
  if (t) {
    let a = t.parent;
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let h = 0; h < u.length; h++) if (u[h](e, c, f) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      jt(), kr(o, null, 10, [e, c, f]), Mt();
      return;
    }
  }
  Wc(e, r, s, n, i);
}
function Wc(e, t, r, n = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const De = [];
let it = -1;
const er = [];
let Ot = null,
  Jt = 0;
const rl = Promise.resolve();
let In = null;
function nl(e) {
  const t = In || rl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jc(e) {
  let t = it + 1,
    r = De.length;
  for (; t < r; ) {
    const n = (t + r) >>> 1,
      s = De[n],
      o = Rr(s);
    o < e || (o === e && s.flags & 2) ? (t = n + 1) : (r = n);
  }
  return t;
}
function no(e) {
  if (!(e.flags & 1)) {
    const t = Rr(e),
      r = De[De.length - 1];
    !r || (!(e.flags & 2) && t >= Rr(r)) ? De.push(e) : De.splice(Jc(t), 0, e),
      (e.flags |= 1),
      sl();
  }
}
function sl() {
  In || (In = rl.then(il));
}
function Xc(e) {
  se(e)
    ? er.push(...e)
    : Ot && e.id === -1
    ? Ot.splice(Jt + 1, 0, e)
    : e.flags & 1 || (er.push(e), (e.flags |= 1)),
    sl();
}
function vo(e, t, r = it + 1) {
  for (; r < De.length; r++) {
    const n = De[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid) continue;
      De.splice(r, 1),
        r--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ol(e) {
  if (er.length) {
    const t = [...new Set(er)].sort((r, n) => Rr(r) - Rr(n));
    if (((er.length = 0), Ot)) {
      Ot.push(...t);
      return;
    }
    for (Ot = t, Jt = 0; Jt < Ot.length; Jt++) {
      const r = Ot[Jt];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), (r.flags &= -2);
    }
    (Ot = null), (Jt = 0);
  }
}
const Rr = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function il(e) {
  try {
    for (it = 0; it < De.length; it++) {
      const t = De[it];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        kr(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; it < De.length; it++) {
      const t = De[it];
      t && (t.flags &= -2);
    }
    (it = -1),
      (De.length = 0),
      ol(),
      (In = null),
      (De.length || er.length) && il();
  }
}
let Ue = null,
  al = null;
function kn(e) {
  const t = Ue;
  return (Ue = e), (al = (e && e.type.__scopeId) || null), t;
}
function _t(e, t = Ue, r) {
  if (!t || e._n) return e;
  const n = (...s) => {
    n._d && Co(-1);
    const o = kn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      kn(o), n._d && Co(1);
    }
    return i;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function An(e, t) {
  if (Ue === null) return e;
  const r = Qn(Ue),
    n = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, c = $e] = t[s];
    o &&
      (oe(o) && (o = { mounted: o, updated: o }),
      o.deep && wt(i),
      n.push({
        dir: o,
        instance: r,
        value: i,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      }));
  }
  return e;
}
function xt(e, t, r, n) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[n];
    c && (jt(), ft(c, r, 8, [e.el, a, e, t]), Mt());
  }
}
const Yc = Symbol("_vte"),
  Qc = (e) => e.__isTeleport;
function so(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), so(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function ll(e, t) {
  return oe(e) ? je({ name: e.name }, t, { setup: e }) : e;
}
function cl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function jn(e, t, r, n, s = !1) {
  if (se(e)) {
    e.forEach((P, b) => jn(P, t && (se(t) ? t[b] : t), r, n, s));
    return;
  }
  if (_r(n) && !s) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      jn(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Qn(n.component) : n.el,
    i = s ? null : o,
    { i: a, r: c } = e,
    f = t && t.r,
    u = a.refs === $e ? (a.refs = {}) : a.refs,
    h = a.setupState,
    v = ge(h),
    w = h === $e ? () => !1 : (P) => ye(v, P);
  if (
    (f != null &&
      f !== c &&
      (Pe(f)
        ? ((u[f] = null), w(f) && (h[f] = null))
        : ke(f) && (f.value = null)),
    oe(c))
  )
    kr(c, a, 12, [i, u]);
  else {
    const P = Pe(c),
      b = ke(c);
    if (P || b) {
      const g = () => {
        if (e.f) {
          const p = P ? (w(c) ? h[c] : u[c]) : c.value;
          s
            ? se(p) && Gs(p, o)
            : se(p)
            ? p.includes(o) || p.push(o)
            : P
            ? ((u[c] = [o]), w(c) && (h[c] = u[c]))
            : ((c.value = [o]), e.k && (u[e.k] = c.value));
        } else
          P
            ? ((u[c] = i), w(c) && (h[c] = i))
            : b && ((c.value = i), e.k && (u[e.k] = i));
      };
      i ? ((g.id = -1), Ke(g, r)) : g();
    }
  }
}
Hn().requestIdleCallback;
Hn().cancelIdleCallback;
const _r = (e) => !!e.type.__asyncLoader,
  ul = (e) => e.type.__isKeepAlive;
function Zc(e, t) {
  fl(e, "a", t);
}
function eu(e, t) {
  fl(e, "da", t);
}
function fl(e, t, r = Te) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let s = r;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Gn(t, n, r), r)) {
    let s = r.parent;
    for (; s && s.parent; )
      ul(s.parent.vnode) && tu(n, t, r, s), (s = s.parent);
  }
}
function tu(e, t, r, n) {
  const s = Gn(t, e, n, !0);
  hl(() => {
    Gs(n[t], s);
  }, r);
}
function Gn(e, t, r = Te, n = !1) {
  if (r) {
    const s = r[e] || (r[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          jt();
          const a = Ar(r),
            c = ft(t, r, e, i);
          return a(), Mt(), c;
        });
    return n ? s.unshift(o) : s.push(o), o;
  }
}
const Et =
    (e) =>
    (t, r = Te) => {
      (!Tr || e === "sp") && Gn(e, (...n) => t(...n), r);
    },
  ru = Et("bm"),
  Bn = Et("m"),
  nu = Et("bu"),
  su = Et("u"),
  dl = Et("bum"),
  hl = Et("um"),
  ou = Et("sp"),
  iu = Et("rtg"),
  au = Et("rtc");
function lu(e, t = Te) {
  Gn("ec", e, t);
}
const cu = "components";
function Wn(e, t) {
  return fu(cu, e, !0, t) || e;
}
const uu = Symbol.for("v-ndc");
function fu(e, t, r = !0, n = !1) {
  const s = Ue || Te;
  if (s) {
    const o = s.type;
    {
      const a = Yu(o, !1);
      if (a && (a === t || a === We(t) || a === Kn(We(t)))) return o;
    }
    const i = $o(s[e] || o[e], t) || $o(s.appContext[e], t);
    return !i && n ? o : i;
  }
}
function $o(e, t) {
  return e && (e[t] || e[We(t)] || e[Kn(We(t))]);
}
const Ms = (e) => (e ? (Ml(e) ? Qn(e) : Ms(e.parent)) : null),
  vr = je(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ms(e.parent),
    $root: (e) => Ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ml(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        no(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = nl.bind(e.proxy)),
    $watch: (e) => ku.bind(e),
  }),
  cs = (e, t) => e !== $e && !e.__isScriptSetup && ye(e, t),
  du = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: r,
        setupState: n,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: c,
      } = e;
      let f;
      if (t[0] !== "$") {
        const w = i[t];
        if (w !== void 0)
          switch (w) {
            case 1:
              return n[t];
            case 2:
              return s[t];
            case 4:
              return r[t];
            case 3:
              return o[t];
          }
        else {
          if (cs(n, t)) return (i[t] = 1), n[t];
          if (s !== $e && ye(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && ye(f, t)) return (i[t] = 3), o[t];
          if (r !== $e && ye(r, t)) return (i[t] = 4), r[t];
          xs && (i[t] = 0);
        }
      }
      const u = vr[t];
      let h, v;
      if (u) return t === "$attrs" && Ie(e.attrs, "get", ""), u(e);
      if ((h = a.__cssModules) && (h = h[t])) return h;
      if (r !== $e && ye(r, t)) return (i[t] = 4), r[t];
      if (((v = c.config.globalProperties), ye(v, t))) return v[t];
    },
    set({ _: e }, t, r) {
      const { data: n, setupState: s, ctx: o } = e;
      return cs(s, t)
        ? ((s[t] = r), !0)
        : n !== $e && ye(n, t)
        ? ((n[t] = r), !0)
        : ye(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = r), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: r,
          ctx: n,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let a;
      return (
        !!r[i] ||
        (e !== $e && ye(e, i)) ||
        cs(t, i) ||
        ((a = o[0]) && ye(a, i)) ||
        ye(n, i) ||
        ye(vr, i) ||
        ye(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, r) {
      return (
        r.get != null
          ? (e._.accessCache[t] = 0)
          : ye(r, "value") && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r)
      );
    },
  };
function wo(e) {
  return se(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e;
}
let xs = !0;
function hu(e) {
  const t = ml(e),
    r = e.proxy,
    n = e.ctx;
  (xs = !1), t.beforeCreate && bo(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: c,
    inject: f,
    created: u,
    beforeMount: h,
    mounted: v,
    beforeUpdate: w,
    updated: P,
    activated: b,
    deactivated: g,
    beforeDestroy: p,
    beforeUnmount: l,
    destroyed: m,
    unmounted: $,
    render: S,
    renderTracked: E,
    renderTriggered: O,
    errorCaptured: x,
    serverPrefetch: F,
    expose: X,
    inheritAttrs: Y,
    components: re,
    directives: Q,
    filters: ie,
  } = t;
  if ((f && pu(f, n, null), i))
    for (const ae in i) {
      const Z = i[ae];
      oe(Z) && (n[ae] = Z.bind(r));
    }
  if (s) {
    const ae = s.call(r, r);
    Ee(ae) && (e.data = It(ae));
  }
  if (((xs = !0), o))
    for (const ae in o) {
      const Z = o[ae],
        Se = oe(Z) ? Z.bind(r, r) : oe(Z.get) ? Z.get.bind(r, r) : lt,
        H = !oe(Z) && oe(Z.set) ? Z.set.bind(r) : lt,
        A = Ye({ get: Se, set: H });
      Object.defineProperty(n, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => A.value,
        set: (j) => (A.value = j),
      });
    }
  if (a) for (const ae in a) pl(a[ae], n, r, ae);
  if (c) {
    const ae = oe(c) ? c.call(r) : c;
    Reflect.ownKeys(ae).forEach((Z) => {
      $r(Z, ae[Z]);
    });
  }
  u && bo(u, e, "c");
  function fe(ae, Z) {
    se(Z) ? Z.forEach((Se) => ae(Se.bind(r))) : Z && ae(Z.bind(r));
  }
  if (
    (fe(ru, h),
    fe(Bn, v),
    fe(nu, w),
    fe(su, P),
    fe(Zc, b),
    fe(eu, g),
    fe(lu, x),
    fe(au, E),
    fe(iu, O),
    fe(dl, l),
    fe(hl, $),
    fe(ou, F),
    se(X))
  )
    if (X.length) {
      const ae = e.exposed || (e.exposed = {});
      X.forEach((Z) => {
        Object.defineProperty(ae, Z, {
          get: () => r[Z],
          set: (Se) => (r[Z] = Se),
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === lt && (e.render = S),
    Y != null && (e.inheritAttrs = Y),
    re && (e.components = re),
    Q && (e.directives = Q),
    F && cl(e);
}
function pu(e, t, r = lt) {
  se(e) && (e = qs(e));
  for (const n in e) {
    const s = e[n];
    let o;
    Ee(s)
      ? "default" in s
        ? (o = Be(s.from || n, s.default, !0))
        : (o = Be(s.from || n))
      : (o = Be(s)),
      ke(o)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[n] = o);
  }
}
function bo(e, t, r) {
  ft(se(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function pl(e, t, r, n) {
  let s = n.includes(".") ? Cl(r, n) : () => r[n];
  if (Pe(e)) {
    const o = t[e];
    oe(o) && On(s, o);
  } else if (oe(e)) On(s, e.bind(r));
  else if (Ee(e))
    if (se(e)) e.forEach((o) => pl(o, t, r, n));
    else {
      const o = oe(e.handler) ? e.handler.bind(r) : t[e.handler];
      oe(o) && On(s, o, e);
    }
}
function ml(e) {
  const t = e.type,
    { mixins: r, extends: n } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t);
  let c;
  return (
    a
      ? (c = a)
      : !s.length && !r && !n
      ? (c = t)
      : ((c = {}), s.length && s.forEach((f) => Mn(c, f, i, !0)), Mn(c, t, i)),
    Ee(t) && o.set(t, c),
    c
  );
}
function Mn(e, t, r, n = !1) {
  const { mixins: s, extends: o } = t;
  o && Mn(e, o, r, !0), s && s.forEach((i) => Mn(e, i, r, !0));
  for (const i in t)
    if (!(n && i === "expose")) {
      const a = mu[i] || (r && r[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const mu = {
  data: Eo,
  props: So,
  emits: So,
  methods: hr,
  computed: hr,
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  components: hr,
  directives: hr,
  watch: yu,
  provide: Eo,
  inject: gu,
};
function Eo(e, t) {
  return t
    ? e
      ? function () {
          return je(
            oe(e) ? e.call(this, this) : e,
            oe(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function gu(e, t) {
  return hr(qs(e), qs(t));
}
function qs(e) {
  if (se(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function hr(e, t) {
  return e ? je(Object.create(null), e, t) : t;
}
function So(e, t) {
  return e
    ? se(e) && se(t)
      ? [...new Set([...e, ...t])]
      : je(Object.create(null), wo(e), wo(t ?? {}))
    : t;
}
function yu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = je(Object.create(null), e);
  for (const n in t) r[n] = xe(e[n], t[n]);
  return r;
}
function gl() {
  return {
    app: null,
    config: {
      isNativeTag: cc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let _u = 0;
function vu(e, t) {
  return function (n, s = null) {
    oe(n) || (n = je({}, n)), s != null && !Ee(s) && (s = null);
    const o = gl(),
      i = new WeakSet(),
      a = [];
    let c = !1;
    const f = (o.app = {
      _uid: _u++,
      _component: n,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Zu,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...h) {
        return (
          i.has(u) ||
            (u && oe(u.install)
              ? (i.add(u), u.install(f, ...h))
              : oe(u) && (i.add(u), u(f, ...h))),
          f
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), f;
      },
      component(u, h) {
        return h ? ((o.components[u] = h), f) : o.components[u];
      },
      directive(u, h) {
        return h ? ((o.directives[u] = h), f) : o.directives[u];
      },
      mount(u, h, v) {
        if (!c) {
          const w = f._ceVNode || be(n, s);
          return (
            (w.appContext = o),
            v === !0 ? (v = "svg") : v === !1 && (v = void 0),
            e(w, u, v),
            (c = !0),
            (f._container = u),
            (u.__vue_app__ = f),
            Qn(w.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        c &&
          (ft(a, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__);
      },
      provide(u, h) {
        return (o.provides[u] = h), f;
      },
      runWithContext(u) {
        const h = tr;
        tr = f;
        try {
          return u();
        } finally {
          tr = h;
        }
      },
    });
    return f;
  };
}
let tr = null;
function $r(e, t) {
  if (Te) {
    let r = Te.provides;
    const n = Te.parent && Te.parent.provides;
    n === r && (r = Te.provides = Object.create(n)), (r[e] = t);
  }
}
function Be(e, t, r = !1) {
  const n = Te || Ue;
  if (n || tr) {
    const s = tr
      ? tr._context.provides
      : n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return r && oe(t) ? t.call(n && n.proxy) : t;
  }
}
const yl = {},
  _l = () => Object.create(yl),
  vl = (e) => Object.getPrototypeOf(e) === yl;
function $u(e, t, r, n = !1) {
  const s = {},
    o = _l();
  (e.propsDefaults = Object.create(null)), $l(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  r ? (e.props = n ? s : Qa(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function wu(e, t, r, n) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = ge(s),
    [c] = e.propsOptions;
  let f = !1;
  if ((n || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let v = u[h];
        if (Jn(e.emitsOptions, v)) continue;
        const w = t[v];
        if (c)
          if (ye(o, v)) w !== o[v] && ((o[v] = w), (f = !0));
          else {
            const P = We(v);
            s[P] = Ds(c, a, P, w, e, !1);
          }
        else w !== o[v] && ((o[v] = w), (f = !0));
      }
    }
  } else {
    $l(e, t, s, o) && (f = !0);
    let u;
    for (const h in a)
      (!t || (!ye(t, h) && ((u = zt(h)) === h || !ye(t, u)))) &&
        (c
          ? r &&
            (r[h] !== void 0 || r[u] !== void 0) &&
            (s[h] = Ds(c, a, h, void 0, e, !0))
          : delete s[h]);
    if (o !== a)
      for (const h in o) (!t || !ye(t, h)) && (delete o[h], (f = !0));
  }
  f && $t(e.attrs, "set", "");
}
function $l(e, t, r, n) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let c in t) {
      if (pr(c)) continue;
      const f = t[c];
      let u;
      s && ye(s, (u = We(c)))
        ? !o || !o.includes(u)
          ? (r[u] = f)
          : ((a || (a = {}))[u] = f)
        : Jn(e.emitsOptions, c) ||
          ((!(c in n) || f !== n[c]) && ((n[c] = f), (i = !0)));
    }
  if (o) {
    const c = ge(r),
      f = a || $e;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      r[h] = Ds(s, c, h, f[h], e, !ye(f, h));
    }
  }
  return i;
}
function Ds(e, t, r, n, s, o) {
  const i = e[r];
  if (i != null) {
    const a = ye(i, "default");
    if (a && n === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && oe(c)) {
        const { propsDefaults: f } = s;
        if (r in f) n = f[r];
        else {
          const u = Ar(s);
          (n = f[r] = c.call(null, t)), u();
        }
      } else n = c;
      s.ce && s.ce._setProp(r, n);
    }
    i[0] &&
      (o && !a ? (n = !1) : i[1] && (n === "" || n === zt(r)) && (n = !0));
  }
  return n;
}
const bu = new WeakMap();
function wl(e, t, r = !1) {
  const n = r ? bu : t.propsCache,
    s = n.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let c = !1;
  if (!oe(e)) {
    const u = (h) => {
      c = !0;
      const [v, w] = wl(h, t, !0);
      je(i, v), w && a.push(...w);
    };
    !r && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!o && !c) return Ee(e) && n.set(e, Qt), Qt;
  if (se(o))
    for (let u = 0; u < o.length; u++) {
      const h = We(o[u]);
      Po(h) && (i[h] = $e);
    }
  else if (o)
    for (const u in o) {
      const h = We(u);
      if (Po(h)) {
        const v = o[u],
          w = (i[h] = se(v) || oe(v) ? { type: v } : je({}, v)),
          P = w.type;
        let b = !1,
          g = !0;
        if (se(P))
          for (let p = 0; p < P.length; ++p) {
            const l = P[p],
              m = oe(l) && l.name;
            if (m === "Boolean") {
              b = !0;
              break;
            } else m === "String" && (g = !1);
          }
        else b = oe(P) && P.name === "Boolean";
        (w[0] = b), (w[1] = g), (b || ye(w, "default")) && a.push(h);
      }
    }
  const f = [i, a];
  return Ee(e) && n.set(e, f), f;
}
function Po(e) {
  return e[0] !== "$" && !pr(e);
}
const bl = (e) => e[0] === "_" || e === "$stable",
  oo = (e) => (se(e) ? e.map(at) : [at(e)]),
  Eu = (e, t, r) => {
    if (t._n) return t;
    const n = _t((...s) => oo(t(...s)), r);
    return (n._c = !1), n;
  },
  El = (e, t, r) => {
    const n = e._ctx;
    for (const s in e) {
      if (bl(s)) continue;
      const o = e[s];
      if (oe(o)) t[s] = Eu(s, o, n);
      else if (o != null) {
        const i = oo(o);
        t[s] = () => i;
      }
    }
  },
  Sl = (e, t) => {
    const r = oo(t);
    e.slots.default = () => r;
  },
  Pl = (e, t, r) => {
    for (const n in t) (r || n !== "_") && (e[n] = t[n]);
  },
  Su = (e, t, r) => {
    const n = (e.slots = _l());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Pl(n, t, r), r && ja(n, "_", s, !0)) : El(t, n);
    } else t && Sl(e, t);
  },
  Pu = (e, t, r) => {
    const { vnode: n, slots: s } = e;
    let o = !0,
      i = $e;
    if (n.shapeFlag & 32) {
      const a = t._;
      a
        ? r && a === 1
          ? (o = !1)
          : Pl(s, t, r)
        : ((o = !t.$stable), El(t, s)),
        (i = t);
    } else t && (Sl(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !bl(a) && i[a] == null && delete s[a];
  },
  Ke = Uu;
function Ru(e) {
  return Ou(e);
}
function Ou(e, t) {
  const r = Hn();
  r.__VUE__ = !0;
  const {
      insert: n,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: c,
      setText: f,
      setElementText: u,
      parentNode: h,
      nextSibling: v,
      setScopeId: w = lt,
      insertStaticContent: P,
    } = e,
    b = (
      d,
      y,
      R,
      k = null,
      D = null,
      L = null,
      B = void 0,
      G = null,
      z = !!y.dynamicChildren
    ) => {
      if (d === y) return;
      d && !lr(d, y) && ((k = I(d)), j(d, D, L, !0), (d = null)),
        y.patchFlag === -2 && ((z = !1), (y.dynamicChildren = null));
      const { type: V, ref: ee, shapeFlag: W } = y;
      switch (V) {
        case Xn:
          g(d, y, R, k);
          break;
        case Ht:
          p(d, y, R, k);
          break;
        case fs:
          d == null && l(y, R, k, B);
          break;
        case vt:
          re(d, y, R, k, D, L, B, G, z);
          break;
        default:
          W & 1
            ? S(d, y, R, k, D, L, B, G, z)
            : W & 6
            ? Q(d, y, R, k, D, L, B, G, z)
            : (W & 64 || W & 128) && V.process(d, y, R, k, D, L, B, G, z, K);
      }
      ee != null && D && jn(ee, d && d.ref, L, y || d, !y);
    },
    g = (d, y, R, k) => {
      if (d == null) n((y.el = a(y.children)), R, k);
      else {
        const D = (y.el = d.el);
        y.children !== d.children && f(D, y.children);
      }
    },
    p = (d, y, R, k) => {
      d == null ? n((y.el = c(y.children || "")), R, k) : (y.el = d.el);
    },
    l = (d, y, R, k) => {
      [d.el, d.anchor] = P(d.children, y, R, k, d.el, d.anchor);
    },
    m = ({ el: d, anchor: y }, R, k) => {
      let D;
      for (; d && d !== y; ) (D = v(d)), n(d, R, k), (d = D);
      n(y, R, k);
    },
    $ = ({ el: d, anchor: y }) => {
      let R;
      for (; d && d !== y; ) (R = v(d)), s(d), (d = R);
      s(y);
    },
    S = (d, y, R, k, D, L, B, G, z) => {
      y.type === "svg" ? (B = "svg") : y.type === "math" && (B = "mathml"),
        d == null ? E(y, R, k, D, L, B, G, z) : F(d, y, D, L, B, G, z);
    },
    E = (d, y, R, k, D, L, B, G) => {
      let z, V;
      const { props: ee, shapeFlag: W, transition: te, dirs: ne } = d;
      if (
        ((z = d.el = i(d.type, L, ee && ee.is, ee)),
        W & 8
          ? u(z, d.children)
          : W & 16 && x(d.children, z, null, k, D, us(d, L), B, G),
        ne && xt(d, null, k, "created"),
        O(z, d, d.scopeId, B, k),
        ee)
      ) {
        for (const pe in ee)
          pe !== "value" && !pr(pe) && o(z, pe, null, ee[pe], L, k);
        "value" in ee && o(z, "value", null, ee.value, L),
          (V = ee.onVnodeBeforeMount) && ot(V, k, d);
      }
      ne && xt(d, null, k, "beforeMount");
      const le = Tu(D, te);
      le && te.beforeEnter(z),
        n(z, y, R),
        ((V = ee && ee.onVnodeMounted) || le || ne) &&
          Ke(() => {
            V && ot(V, k, d),
              le && te.enter(z),
              ne && xt(d, null, k, "mounted");
          }, D);
    },
    O = (d, y, R, k, D) => {
      if ((R && w(d, R), k)) for (let L = 0; L < k.length; L++) w(d, k[L]);
      if (D) {
        let L = D.subTree;
        if (
          y === L ||
          (Il(L.type) && (L.ssContent === y || L.ssFallback === y))
        ) {
          const B = D.vnode;
          O(d, B, B.scopeId, B.slotScopeIds, D.parent);
        }
      }
    },
    x = (d, y, R, k, D, L, B, G, z = 0) => {
      for (let V = z; V < d.length; V++) {
        const ee = (d[V] = G ? Tt(d[V]) : at(d[V]));
        b(null, ee, y, R, k, D, L, B, G);
      }
    },
    F = (d, y, R, k, D, L, B) => {
      const G = (y.el = d.el);
      let { patchFlag: z, dynamicChildren: V, dirs: ee } = y;
      z |= d.patchFlag & 16;
      const W = d.props || $e,
        te = y.props || $e;
      let ne;
      if (
        (R && qt(R, !1),
        (ne = te.onVnodeBeforeUpdate) && ot(ne, R, y, d),
        ee && xt(y, d, R, "beforeUpdate"),
        R && qt(R, !0),
        ((W.innerHTML && te.innerHTML == null) ||
          (W.textContent && te.textContent == null)) &&
          u(G, ""),
        V
          ? X(d.dynamicChildren, V, G, R, k, us(y, D), L)
          : B || Z(d, y, G, null, R, k, us(y, D), L, !1),
        z > 0)
      ) {
        if (z & 16) Y(G, W, te, R, D);
        else if (
          (z & 2 && W.class !== te.class && o(G, "class", null, te.class, D),
          z & 4 && o(G, "style", W.style, te.style, D),
          z & 8)
        ) {
          const le = y.dynamicProps;
          for (let pe = 0; pe < le.length; pe++) {
            const de = le[pe],
              Ce = W[de],
              Ne = te[de];
            (Ne !== Ce || de === "value") && o(G, de, Ce, Ne, D, R);
          }
        }
        z & 1 && d.children !== y.children && u(G, y.children);
      } else !B && V == null && Y(G, W, te, R, D);
      ((ne = te.onVnodeUpdated) || ee) &&
        Ke(() => {
          ne && ot(ne, R, y, d), ee && xt(y, d, R, "updated");
        }, k);
    },
    X = (d, y, R, k, D, L, B) => {
      for (let G = 0; G < y.length; G++) {
        const z = d[G],
          V = y[G],
          ee =
            z.el && (z.type === vt || !lr(z, V) || z.shapeFlag & 70)
              ? h(z.el)
              : R;
        b(z, V, ee, null, k, D, L, B, !0);
      }
    },
    Y = (d, y, R, k, D) => {
      if (y !== R) {
        if (y !== $e)
          for (const L in y) !pr(L) && !(L in R) && o(d, L, y[L], null, D, k);
        for (const L in R) {
          if (pr(L)) continue;
          const B = R[L],
            G = y[L];
          B !== G && L !== "value" && o(d, L, G, B, D, k);
        }
        "value" in R && o(d, "value", y.value, R.value, D);
      }
    },
    re = (d, y, R, k, D, L, B, G, z) => {
      const V = (y.el = d ? d.el : a("")),
        ee = (y.anchor = d ? d.anchor : a(""));
      let { patchFlag: W, dynamicChildren: te, slotScopeIds: ne } = y;
      ne && (G = G ? G.concat(ne) : ne),
        d == null
          ? (n(V, R, k), n(ee, R, k), x(y.children || [], R, ee, D, L, B, G, z))
          : W > 0 && W & 64 && te && d.dynamicChildren
          ? (X(d.dynamicChildren, te, R, D, L, B, G),
            (y.key != null || (D && y === D.subTree)) && Rl(d, y, !0))
          : Z(d, y, R, ee, D, L, B, G, z);
    },
    Q = (d, y, R, k, D, L, B, G, z) => {
      (y.slotScopeIds = G),
        d == null
          ? y.shapeFlag & 512
            ? D.ctx.activate(y, R, k, B, z)
            : ie(y, R, k, D, L, B, z)
          : ve(d, y, z);
    },
    ie = (d, y, R, k, D, L, B) => {
      const G = (d.component = Gu(d, k, D));
      if ((ul(d) && (G.ctx.renderer = K), Bu(G, !1, B), G.asyncDep)) {
        if ((D && D.registerDep(G, fe, B), !d.el)) {
          const z = (G.subTree = be(Ht));
          p(null, z, y, R);
        }
      } else fe(G, d, y, R, D, L, B);
    },
    ve = (d, y, R) => {
      const k = (y.component = d.component);
      if (qu(d, y, R))
        if (k.asyncDep && !k.asyncResolved) {
          ae(k, y, R);
          return;
        } else (k.next = y), k.update();
      else (y.el = d.el), (k.vnode = y);
    },
    fe = (d, y, R, k, D, L, B) => {
      const G = () => {
        if (d.isMounted) {
          let { next: W, bu: te, u: ne, parent: le, vnode: pe } = d;
          {
            const nt = Ol(d);
            if (nt) {
              W && ((W.el = pe.el), ae(d, W, B)),
                nt.asyncDep.then(() => {
                  d.isUnmounted || G();
                });
              return;
            }
          }
          let de = W,
            Ce;
          qt(d, !1),
            W ? ((W.el = pe.el), ae(d, W, B)) : (W = pe),
            te && Rn(te),
            (Ce = W.props && W.props.onVnodeBeforeUpdate) && ot(Ce, le, W, pe),
            qt(d, !0);
          const Ne = Oo(d),
            rt = d.subTree;
          (d.subTree = Ne),
            b(rt, Ne, h(rt.el), I(rt), d, D, L),
            (W.el = Ne.el),
            de === null && Du(d, Ne.el),
            ne && Ke(ne, D),
            (Ce = W.props && W.props.onVnodeUpdated) &&
              Ke(() => ot(Ce, le, W, pe), D);
        } else {
          let W;
          const { el: te, props: ne } = y,
            { bm: le, m: pe, parent: de, root: Ce, type: Ne } = d,
            rt = _r(y);
          qt(d, !1),
            le && Rn(le),
            !rt && (W = ne && ne.onVnodeBeforeMount) && ot(W, de, y),
            qt(d, !0);
          {
            Ce.ce && Ce.ce._injectChildStyle(Ne);
            const nt = (d.subTree = Oo(d));
            b(null, nt, R, k, d, D, L), (y.el = nt.el);
          }
          if ((pe && Ke(pe, D), !rt && (W = ne && ne.onVnodeMounted))) {
            const nt = y;
            Ke(() => ot(W, de, nt), D);
          }
          (y.shapeFlag & 256 ||
            (de && _r(de.vnode) && de.vnode.shapeFlag & 256)) &&
            d.a &&
            Ke(d.a, D),
            (d.isMounted = !0),
            (y = R = k = null);
        }
      };
      d.scope.on();
      const z = (d.effect = new Da(G));
      d.scope.off();
      const V = (d.update = z.run.bind(z)),
        ee = (d.job = z.runIfDirty.bind(z));
      (ee.i = d), (ee.id = d.uid), (z.scheduler = () => no(ee)), qt(d, !0), V();
    },
    ae = (d, y, R) => {
      y.component = d;
      const k = d.vnode.props;
      (d.vnode = y),
        (d.next = null),
        wu(d, y.props, k, R),
        Pu(d, y.children, R),
        jt(),
        vo(d),
        Mt();
    },
    Z = (d, y, R, k, D, L, B, G, z = !1) => {
      const V = d && d.children,
        ee = d ? d.shapeFlag : 0,
        W = y.children,
        { patchFlag: te, shapeFlag: ne } = y;
      if (te > 0) {
        if (te & 128) {
          H(V, W, R, k, D, L, B, G, z);
          return;
        } else if (te & 256) {
          Se(V, W, R, k, D, L, B, G, z);
          return;
        }
      }
      ne & 8
        ? (ee & 16 && q(V, D, L), W !== V && u(R, W))
        : ee & 16
        ? ne & 16
          ? H(V, W, R, k, D, L, B, G, z)
          : q(V, D, L, !0)
        : (ee & 8 && u(R, ""), ne & 16 && x(W, R, k, D, L, B, G, z));
    },
    Se = (d, y, R, k, D, L, B, G, z) => {
      (d = d || Qt), (y = y || Qt);
      const V = d.length,
        ee = y.length,
        W = Math.min(V, ee);
      let te;
      for (te = 0; te < W; te++) {
        const ne = (y[te] = z ? Tt(y[te]) : at(y[te]));
        b(d[te], ne, R, null, D, L, B, G, z);
      }
      V > ee ? q(d, D, L, !0, !1, W) : x(y, R, k, D, L, B, G, z, W);
    },
    H = (d, y, R, k, D, L, B, G, z) => {
      let V = 0;
      const ee = y.length;
      let W = d.length - 1,
        te = ee - 1;
      for (; V <= W && V <= te; ) {
        const ne = d[V],
          le = (y[V] = z ? Tt(y[V]) : at(y[V]));
        if (lr(ne, le)) b(ne, le, R, null, D, L, B, G, z);
        else break;
        V++;
      }
      for (; V <= W && V <= te; ) {
        const ne = d[W],
          le = (y[te] = z ? Tt(y[te]) : at(y[te]));
        if (lr(ne, le)) b(ne, le, R, null, D, L, B, G, z);
        else break;
        W--, te--;
      }
      if (V > W) {
        if (V <= te) {
          const ne = te + 1,
            le = ne < ee ? y[ne].el : k;
          for (; V <= te; )
            b(null, (y[V] = z ? Tt(y[V]) : at(y[V])), R, le, D, L, B, G, z),
              V++;
        }
      } else if (V > te) for (; V <= W; ) j(d[V], D, L, !0), V++;
      else {
        const ne = V,
          le = V,
          pe = new Map();
        for (V = le; V <= te; V++) {
          const Ve = (y[V] = z ? Tt(y[V]) : at(y[V]));
          Ve.key != null && pe.set(Ve.key, V);
        }
        let de,
          Ce = 0;
        const Ne = te - le + 1;
        let rt = !1,
          nt = 0;
        const ir = new Array(Ne);
        for (V = 0; V < Ne; V++) ir[V] = 0;
        for (V = ne; V <= W; V++) {
          const Ve = d[V];
          if (Ce >= Ne) {
            j(Ve, D, L, !0);
            continue;
          }
          let st;
          if (Ve.key != null) st = pe.get(Ve.key);
          else
            for (de = le; de <= te; de++)
              if (ir[de - le] === 0 && lr(Ve, y[de])) {
                st = de;
                break;
              }
          st === void 0
            ? j(Ve, D, L, !0)
            : ((ir[st - le] = V + 1),
              st >= nt ? (nt = st) : (rt = !0),
              b(Ve, y[st], R, null, D, L, B, G, z),
              Ce++);
        }
        const po = rt ? Cu(ir) : Qt;
        for (de = po.length - 1, V = Ne - 1; V >= 0; V--) {
          const Ve = le + V,
            st = y[Ve],
            mo = Ve + 1 < ee ? y[Ve + 1].el : k;
          ir[V] === 0
            ? b(null, st, R, mo, D, L, B, G, z)
            : rt && (de < 0 || V !== po[de] ? A(st, R, mo, 2) : de--);
        }
      }
    },
    A = (d, y, R, k, D = null) => {
      const { el: L, type: B, transition: G, children: z, shapeFlag: V } = d;
      if (V & 6) {
        A(d.component.subTree, y, R, k);
        return;
      }
      if (V & 128) {
        d.suspense.move(y, R, k);
        return;
      }
      if (V & 64) {
        B.move(d, y, R, K);
        return;
      }
      if (B === vt) {
        n(L, y, R);
        for (let W = 0; W < z.length; W++) A(z[W], y, R, k);
        n(d.anchor, y, R);
        return;
      }
      if (B === fs) {
        m(d, y, R);
        return;
      }
      if (k !== 2 && V & 1 && G)
        if (k === 0) G.beforeEnter(L), n(L, y, R), Ke(() => G.enter(L), D);
        else {
          const { leave: W, delayLeave: te, afterLeave: ne } = G,
            le = () => n(L, y, R),
            pe = () => {
              W(L, () => {
                le(), ne && ne();
              });
            };
          te ? te(L, le, pe) : pe();
        }
      else n(L, y, R);
    },
    j = (d, y, R, k = !1, D = !1) => {
      const {
        type: L,
        props: B,
        ref: G,
        children: z,
        dynamicChildren: V,
        shapeFlag: ee,
        patchFlag: W,
        dirs: te,
        cacheIndex: ne,
      } = d;
      if (
        (W === -2 && (D = !1),
        G != null && jn(G, null, R, d, !0),
        ne != null && (y.renderCache[ne] = void 0),
        ee & 256)
      ) {
        y.ctx.deactivate(d);
        return;
      }
      const le = ee & 1 && te,
        pe = !_r(d);
      let de;
      if ((pe && (de = B && B.onVnodeBeforeUnmount) && ot(de, y, d), ee & 6))
        T(d.component, R, k);
      else {
        if (ee & 128) {
          d.suspense.unmount(R, k);
          return;
        }
        le && xt(d, null, y, "beforeUnmount"),
          ee & 64
            ? d.type.remove(d, y, R, K, k)
            : V && !V.hasOnce && (L !== vt || (W > 0 && W & 64))
            ? q(V, y, R, !1, !0)
            : ((L === vt && W & 384) || (!D && ee & 16)) && q(z, y, R),
          k && N(d);
      }
      ((pe && (de = B && B.onVnodeUnmounted)) || le) &&
        Ke(() => {
          de && ot(de, y, d), le && xt(d, null, y, "unmounted");
        }, R);
    },
    N = (d) => {
      const { type: y, el: R, anchor: k, transition: D } = d;
      if (y === vt) {
        _(R, k);
        return;
      }
      if (y === fs) {
        $(d);
        return;
      }
      const L = () => {
        s(R), D && !D.persisted && D.afterLeave && D.afterLeave();
      };
      if (d.shapeFlag & 1 && D && !D.persisted) {
        const { leave: B, delayLeave: G } = D,
          z = () => B(R, L);
        G ? G(d.el, L, z) : z();
      } else L();
    },
    _ = (d, y) => {
      let R;
      for (; d !== y; ) (R = v(d)), s(d), (d = R);
      s(y);
    },
    T = (d, y, R) => {
      const { bum: k, scope: D, job: L, subTree: B, um: G, m: z, a: V } = d;
      Ro(z),
        Ro(V),
        k && Rn(k),
        D.stop(),
        L && ((L.flags |= 8), j(B, d, y, R)),
        G && Ke(G, y),
        Ke(() => {
          d.isUnmounted = !0;
        }, y),
        y &&
          y.pendingBranch &&
          !y.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === y.pendingId &&
          (y.deps--, y.deps === 0 && y.resolve());
    },
    q = (d, y, R, k = !1, D = !1, L = 0) => {
      for (let B = L; B < d.length; B++) j(d[B], y, R, k, D);
    },
    I = (d) => {
      if (d.shapeFlag & 6) return I(d.component.subTree);
      if (d.shapeFlag & 128) return d.suspense.next();
      const y = v(d.anchor || d.el),
        R = y && y[Yc];
      return R ? v(R) : y;
    };
  let M = !1;
  const U = (d, y, R) => {
      d == null
        ? y._vnode && j(y._vnode, null, null, !0)
        : b(y._vnode || null, d, y, null, null, null, R),
        (y._vnode = d),
        M || ((M = !0), vo(), ol(), (M = !1));
    },
    K = { p: b, um: j, m: A, r: N, mt: ie, mc: x, pc: Z, pbc: X, n: I, o: e };
  return { render: U, hydrate: void 0, createApp: vu(U) };
}
function us({ type: e, props: t }, r) {
  return (r === "svg" && e === "foreignObject") ||
    (r === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : r;
}
function qt({ effect: e, job: t }, r) {
  r ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Tu(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Rl(e, t, r = !1) {
  const n = e.children,
    s = t.children;
  if (se(n) && se(s))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[o] = Tt(s[o])), (a.el = i.el)),
        !r && a.patchFlag !== -2 && Rl(i, a)),
        a.type === Xn && (a.el = i.el);
    }
}
function Cu(e) {
  const t = e.slice(),
    r = [0];
  let n, s, o, i, a;
  const c = e.length;
  for (n = 0; n < c; n++) {
    const f = e[n];
    if (f !== 0) {
      if (((s = r[r.length - 1]), e[s] < f)) {
        (t[n] = s), r.push(n);
        continue;
      }
      for (o = 0, i = r.length - 1; o < i; )
        (a = (o + i) >> 1), e[r[a]] < f ? (o = a + 1) : (i = a);
      f < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), (r[o] = n));
    }
  }
  for (o = r.length, i = r[o - 1]; o-- > 0; ) (r[o] = i), (i = t[i]);
  return r;
}
function Ol(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ol(t);
}
function Ro(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Nu = Symbol.for("v-scx"),
  Iu = () => Be(Nu);
function On(e, t, r) {
  return Tl(e, t, r);
}
function Tl(e, t, r = $e) {
  const { immediate: n, deep: s, flush: o, once: i } = r,
    a = je({}, r),
    c = (t && n) || (!t && o !== "post");
  let f;
  if (Tr) {
    if (o === "sync") {
      const w = Iu();
      f = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!c) {
      const w = () => {};
      return (w.stop = lt), (w.resume = lt), (w.pause = lt), w;
    }
  }
  const u = Te;
  a.call = (w, P, b) => ft(w, u, P, b);
  let h = !1;
  o === "post"
    ? (a.scheduler = (w) => {
        Ke(w, u && u.suspense);
      })
    : o !== "sync" &&
      ((h = !0),
      (a.scheduler = (w, P) => {
        P ? w() : no(w);
      })),
    (a.augmentJob = (w) => {
      t && (w.flags |= 4),
        h && ((w.flags |= 2), u && ((w.id = u.uid), (w.i = u)));
    });
  const v = Bc(e, t, a);
  return Tr && (f ? f.push(v) : c && v()), v;
}
function ku(e, t, r) {
  const n = this.proxy,
    s = Pe(e) ? (e.includes(".") ? Cl(n, e) : () => n[e]) : e.bind(n, n);
  let o;
  oe(t) ? (o = t) : ((o = t.handler), (r = t));
  const i = Ar(this),
    a = Tl(s, o.bind(n), r);
  return i(), a;
}
function Cl(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let s = 0; s < r.length && n; s++) n = n[r[s]];
    return n;
  };
}
const Au = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${We(t)}Modifiers`] || e[`${zt(t)}Modifiers`];
function ju(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || $e;
  let s = r;
  const o = t.startsWith("update:"),
    i = o && Au(n, t.slice(7));
  i &&
    (i.trim && (s = r.map((u) => (Pe(u) ? u.trim() : u))),
    i.number && (s = r.map(Cs)));
  let a,
    c = n[(a = ss(t))] || n[(a = ss(We(t)))];
  !c && o && (c = n[(a = ss(zt(t)))]), c && ft(c, e, 6, s);
  const f = n[a + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), ft(f, e, 6, s);
  }
}
function Nl(e, t, r = !1) {
  const n = t.emitsCache,
    s = n.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!oe(e)) {
    const c = (f) => {
      const u = Nl(f, t, !0);
      u && ((a = !0), je(i, u));
    };
    !r && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !a
    ? (Ee(e) && n.set(e, null), null)
    : (se(o) ? o.forEach((c) => (i[c] = null)) : je(i, o),
      Ee(e) && n.set(e, i),
      i);
}
function Jn(e, t) {
  return !e || !Ln(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, zt(t)) || ye(e, t));
}
function Oo(e) {
  const {
      type: t,
      vnode: r,
      proxy: n,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: a,
      emit: c,
      render: f,
      renderCache: u,
      props: h,
      data: v,
      setupState: w,
      ctx: P,
      inheritAttrs: b,
    } = e,
    g = kn(e);
  let p, l;
  try {
    if (r.shapeFlag & 4) {
      const $ = s || n,
        S = $;
      (p = at(f.call(S, $, u, h, w, v, P))), (l = a);
    } else {
      const $ = t;
      (p = at(
        $.length > 1 ? $(h, { attrs: a, slots: i, emit: c }) : $(h, null)
      )),
        (l = t.props ? a : Mu(a));
    }
  } catch ($) {
    (wr.length = 0), zn($, e, 1), (p = be(Ht));
  }
  let m = p;
  if (l && b !== !1) {
    const $ = Object.keys(l),
      { shapeFlag: S } = m;
    $.length &&
      S & 7 &&
      (o && $.some(zs) && (l = xu(l, o)), (m = nr(m, l, !1, !0)));
  }
  return (
    r.dirs &&
      ((m = nr(m, null, !1, !0)),
      (m.dirs = m.dirs ? m.dirs.concat(r.dirs) : r.dirs)),
    r.transition && so(m, r.transition),
    (p = m),
    kn(g),
    p
  );
}
const Mu = (e) => {
    let t;
    for (const r in e)
      (r === "class" || r === "style" || Ln(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
  },
  xu = (e, t) => {
    const r = {};
    for (const n in e) (!zs(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
    return r;
  };
function qu(e, t, r) {
  const { props: n, children: s, component: o } = e,
    { props: i, children: a, patchFlag: c } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (r && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return n ? To(n, i, f) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const v = u[h];
        if (i[v] !== n[v] && !Jn(f, v)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : n === i
      ? !1
      : n
      ? i
        ? To(n, i, f)
        : !0
      : !!i;
  return !1;
}
function To(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (t[o] !== e[o] && !Jn(r, o)) return !0;
  }
  return !1;
}
function Du({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = r), (t = t.parent);
    else break;
  }
}
const Il = (e) => e.__isSuspense;
function Uu(e, t) {
  t && t.pendingBranch
    ? se(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Xc(e);
}
const vt = Symbol.for("v-fgt"),
  Xn = Symbol.for("v-txt"),
  Ht = Symbol.for("v-cmt"),
  fs = Symbol.for("v-stc"),
  wr = [];
let ze = null;
function Re(e = !1) {
  wr.push((ze = e ? null : []));
}
function Lu() {
  wr.pop(), (ze = wr[wr.length - 1] || null);
}
let Or = 1;
function Co(e, t = !1) {
  (Or += e), e < 0 && ze && t && (ze.hasOnce = !0);
}
function kl(e) {
  return (
    (e.dynamicChildren = Or > 0 ? ze || Qt : null),
    Lu(),
    Or > 0 && ze && ze.push(e),
    e
  );
}
function Ae(e, t, r, n, s, o) {
  return kl(J(e, t, r, n, s, o, !0));
}
function Al(e, t, r, n, s) {
  return kl(be(e, t, r, n, s, !0));
}
function xn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const jl = ({ key: e }) => e ?? null,
  Tn = ({ ref: e, ref_key: t, ref_for: r }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Pe(e) || ke(e) || oe(e)
        ? { i: Ue, r: e, k: t, f: !!r }
        : e
      : null
  );
function J(
  e,
  t = null,
  r = null,
  n = 0,
  s = null,
  o = e === vt ? 0 : 1,
  i = !1,
  a = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jl(t),
    ref: t && Tn(t),
    scopeId: al,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ue,
  };
  return (
    a
      ? (io(c, r), o & 128 && e.normalize(c))
      : r && (c.shapeFlag |= Pe(r) ? 8 : 16),
    Or > 0 &&
      !i &&
      ze &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      ze.push(c),
    c
  );
}
const be = Vu;
function Vu(e, t = null, r = null, n = 0, s = null, o = !1) {
  if (((!e || e === uu) && (e = Ht), xn(e))) {
    const a = nr(e, t, !0);
    return (
      r && io(a, r),
      Or > 0 &&
        !o &&
        ze &&
        (a.shapeFlag & 6 ? (ze[ze.indexOf(e)] = a) : ze.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((Qu(e) && (e = e.__vccOpts), t)) {
    t = Fu(t);
    let { class: a, style: c } = t;
    a && !Pe(a) && (t.class = rr(a)),
      Ee(c) && (ro(c) && !se(c) && (c = je({}, c)), (t.style = Ws(c)));
  }
  const i = Pe(e) ? 1 : Il(e) ? 128 : Qc(e) ? 64 : Ee(e) ? 4 : oe(e) ? 2 : 0;
  return J(e, t, r, n, s, i, o, !0);
}
function Fu(e) {
  return e ? (ro(e) || vl(e) ? je({}, e) : e) : null;
}
function nr(e, t, r = !1, n = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: c } = e,
    f = t ? Ku(s || {}, t) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && jl(f),
      ref:
        t && t.ref
          ? r && o
            ? se(o)
              ? o.concat(Tn(t))
              : [o, Tn(t)]
            : Tn(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== vt ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && nr(e.ssContent),
      ssFallback: e.ssFallback && nr(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && n && so(u, c.clone(u)), u;
}
function Xe(e = " ", t = 0) {
  return be(Xn, null, e, t);
}
function bt(e = "", t = !1) {
  return t ? (Re(), Al(Ht, null, e)) : be(Ht, null, e);
}
function at(e) {
  return e == null || typeof e == "boolean"
    ? be(Ht)
    : se(e)
    ? be(vt, null, e.slice())
    : xn(e)
    ? Tt(e)
    : be(Xn, null, String(e));
}
function Tt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nr(e);
}
function io(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (se(t)) r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), io(e, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = t._;
      !s && !vl(t)
        ? (t._ctx = Ue)
        : s === 3 &&
          Ue &&
          (Ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    oe(t)
      ? ((t = { default: t, _ctx: Ue }), (r = 32))
      : ((t = String(t)), n & 64 ? ((r = 16), (t = [Xe(t)])) : (r = 8));
  (e.children = t), (e.shapeFlag |= r);
}
function Ku(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const s in n)
      if (s === "class")
        t.class !== n.class && (t.class = rr([t.class, n.class]));
      else if (s === "style") t.style = Ws([t.style, n.style]);
      else if (Ln(s)) {
        const o = t[s],
          i = n[s];
        i &&
          o !== i &&
          !(se(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = n[s]);
  }
  return t;
}
function ot(e, t, r, n = null) {
  ft(e, t, 7, [r, n]);
}
const Hu = gl();
let zu = 0;
function Gu(e, t, r) {
  const n = e.type,
    s = (t ? t.appContext : e.appContext) || Hu,
    o = {
      uid: zu++,
      vnode: e,
      type: n,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new $c(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: wl(n, s),
      emitsOptions: Nl(n, s),
      emit: null,
      emitted: null,
      propsDefaults: $e,
      inheritAttrs: n.inheritAttrs,
      ctx: $e,
      data: $e,
      props: $e,
      attrs: $e,
      slots: $e,
      refs: $e,
      setupState: $e,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = ju.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Te = null;
const Yn = () => Te || Ue;
let qn, Us;
{
  const e = Hn(),
    t = (r, n) => {
      let s;
      return (
        (s = e[r]) || (s = e[r] = []),
        s.push(n),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (qn = t("__VUE_INSTANCE_SETTERS__", (r) => (Te = r))),
    (Us = t("__VUE_SSR_SETTERS__", (r) => (Tr = r)));
}
const Ar = (e) => {
    const t = Te;
    return (
      qn(e),
      e.scope.on(),
      () => {
        e.scope.off(), qn(t);
      }
    );
  },
  No = () => {
    Te && Te.scope.off(), qn(null);
  };
function Ml(e) {
  return e.vnode.shapeFlag & 4;
}
let Tr = !1;
function Bu(e, t = !1, r = !1) {
  t && Us(t);
  const { props: n, children: s } = e.vnode,
    o = Ml(e);
  $u(e, n, o, t), Su(e, s, r);
  const i = o ? Wu(e, t) : void 0;
  return t && Us(!1), i;
}
function Wu(e, t) {
  const r = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, du));
  const { setup: n } = r;
  if (n) {
    jt();
    const s = (e.setupContext = n.length > 1 ? Xu(e) : null),
      o = Ar(e),
      i = kr(n, e, 0, [e.props, s]),
      a = Ia(i);
    if ((Mt(), o(), (a || e.sp) && !_r(e) && cl(e), a)) {
      if ((i.then(No, No), t))
        return i
          .then((c) => {
            Io(e, c);
          })
          .catch((c) => {
            zn(c, e, 0);
          });
      e.asyncDep = i;
    } else Io(e, i);
  } else xl(e);
}
function Io(e, t, r) {
  oe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ee(t) && (e.setupState = tl(t)),
    xl(e);
}
function xl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || lt);
  {
    const s = Ar(e);
    jt();
    try {
      hu(e);
    } finally {
      Mt(), s();
    }
  }
}
const Ju = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  },
};
function Xu(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ju),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Qn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(tl(Lc(e.exposed)), {
          get(t, r) {
            if (r in t) return t[r];
            if (r in vr) return vr[r](e);
          },
          has(t, r) {
            return r in t || r in vr;
          },
        }))
    : e.proxy;
}
function Yu(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Qu(e) {
  return oe(e) && "__vccOpts" in e;
}
const Ye = (e, t) => zc(e, t, Tr);
function ql(e, t, r) {
  const n = arguments.length;
  return n === 2
    ? Ee(t) && !se(t)
      ? xn(t)
        ? be(e, null, [t])
        : be(e, t)
      : be(e, null, t)
    : (n > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : n === 3 && xn(r) && (r = [r]),
      be(e, t, r));
}
const Zu = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ls;
const ko = typeof window < "u" && window.trustedTypes;
if (ko)
  try {
    Ls = ko.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Dl = Ls ? (e) => Ls.createHTML(e) : (e) => e,
  ef = "http://www.w3.org/2000/svg",
  tf = "http://www.w3.org/1998/Math/MathML",
  yt = typeof document < "u" ? document : null,
  Ao = yt && yt.createElement("template"),
  rf = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, r, n) => {
      const s =
        t === "svg"
          ? yt.createElementNS(ef, e)
          : t === "mathml"
          ? yt.createElementNS(tf, e)
          : r
          ? yt.createElement(e, { is: r })
          : yt.createElement(e);
      return (
        e === "select" &&
          n &&
          n.multiple != null &&
          s.setAttribute("multiple", n.multiple),
        s
      );
    },
    createText: (e) => yt.createTextNode(e),
    createComment: (e) => yt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => yt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, r, n, s, o) {
      const i = r ? r.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), r),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Ao.innerHTML = Dl(
          n === "svg"
            ? `<svg>${e}</svg>`
            : n === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = Ao.content;
        if (n === "svg" || n === "mathml") {
          const c = a.firstChild;
          for (; c.firstChild; ) a.appendChild(c.firstChild);
          a.removeChild(c);
        }
        t.insertBefore(a, r);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        r ? r.previousSibling : t.lastChild,
      ];
    },
  },
  nf = Symbol("_vtc");
function sf(e, t, r) {
  const n = e[nf];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : r
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const jo = Symbol("_vod"),
  of = Symbol("_vsh"),
  af = Symbol(""),
  lf = /(^|;)\s*display\s*:/;
function cf(e, t, r) {
  const n = e.style,
    s = Pe(r);
  let o = !1;
  if (r && !s) {
    if (t)
      if (Pe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          r[a] == null && Cn(n, a, "");
        }
      else for (const i in t) r[i] == null && Cn(n, i, "");
    for (const i in r) i === "display" && (o = !0), Cn(n, i, r[i]);
  } else if (s) {
    if (t !== r) {
      const i = n[af];
      i && (r += ";" + i), (n.cssText = r), (o = lf.test(r));
    }
  } else t && e.removeAttribute("style");
  jo in e && ((e[jo] = o ? n.display : ""), e[of] && (n.display = "none"));
}
const Mo = /\s*!important$/;
function Cn(e, t, r) {
  if (se(r)) r.forEach((n) => Cn(e, t, n));
  else if ((r == null && (r = ""), t.startsWith("--"))) e.setProperty(t, r);
  else {
    const n = uf(e, t);
    Mo.test(r)
      ? e.setProperty(zt(n), r.replace(Mo, ""), "important")
      : (e[n] = r);
  }
}
const xo = ["Webkit", "Moz", "ms"],
  ds = {};
function uf(e, t) {
  const r = ds[t];
  if (r) return r;
  let n = We(t);
  if (n !== "filter" && n in e) return (ds[t] = n);
  n = Kn(n);
  for (let s = 0; s < xo.length; s++) {
    const o = xo[s] + n;
    if (o in e) return (ds[t] = o);
  }
  return t;
}
const qo = "http://www.w3.org/1999/xlink";
function Do(e, t, r, n, s, o = vc(t)) {
  n && t.startsWith("xlink:")
    ? r == null
      ? e.removeAttributeNS(qo, t.slice(6, t.length))
      : e.setAttributeNS(qo, t, r)
    : r == null || (o && !Ma(r))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : At(r) ? String(r) : r);
}
function Uo(e, t, r, n, s) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Dl(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = r == null ? (e.type === "checkbox" ? "on" : "") : String(r);
    (a !== c || !("_value" in e)) && (e.value = c),
      r == null && e.removeAttribute(t),
      (e._value = r);
    return;
  }
  let i = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (r = Ma(r))
      : r == null && a === "string"
      ? ((r = ""), (i = !0))
      : a === "number" && ((r = 0), (i = !0));
  }
  try {
    e[t] = r;
  } catch {}
  i && e.removeAttribute(s || t);
}
function Xt(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function ff(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Lo = Symbol("_vei");
function df(e, t, r, n, s = null) {
  const o = e[Lo] || (e[Lo] = {}),
    i = o[t];
  if (n && i) i.value = n;
  else {
    const [a, c] = hf(t);
    if (n) {
      const f = (o[t] = gf(n, s));
      Xt(e, a, f, c);
    } else i && (ff(e, a, i, c), (o[t] = void 0));
  }
}
const Vo = /(?:Once|Passive|Capture)$/;
function hf(e) {
  let t;
  if (Vo.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(Vo)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : zt(e.slice(2)), t];
}
let hs = 0;
const pf = Promise.resolve(),
  mf = () => hs || (pf.then(() => (hs = 0)), (hs = Date.now()));
function gf(e, t) {
  const r = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= r.attached) return;
    ft(yf(n, r.value), t, 5, [n]);
  };
  return (r.value = e), (r.attached = mf()), r;
}
function yf(e, t) {
  if (se(t)) {
    const r = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        r.call(e), (e._stopped = !0);
      }),
      t.map((n) => (s) => !s._stopped && n && n(s))
    );
  } else return t;
}
const Fo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  _f = (e, t, r, n, s, o) => {
    const i = s === "svg";
    t === "class"
      ? sf(e, n, i)
      : t === "style"
      ? cf(e, r, n)
      : Ln(t)
      ? zs(t) || df(e, t, r, n, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : vf(e, t, n, i)
        )
      ? (Uo(e, t, n),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Do(e, t, n, i, o, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !Pe(n))
      ? Uo(e, We(t), n, o, t)
      : (t === "true-value"
          ? (e._trueValue = n)
          : t === "false-value" && (e._falseValue = n),
        Do(e, t, n, i));
  };
function vf(e, t, r, n) {
  if (n)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Fo(t) && oe(r))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Fo(t) && Pe(r) ? !1 : t in e;
}
const Ko = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return se(t) ? (r) => Rn(t, r) : t;
};
function $f(e) {
  e.target.composing = !0;
}
function Ho(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const ps = Symbol("_assign"),
  Dn = {
    created(e, { modifiers: { lazy: t, trim: r, number: n } }, s) {
      e[ps] = Ko(s);
      const o = n || (s.props && s.props.type === "number");
      Xt(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        r && (a = a.trim()), o && (a = Cs(a)), e[ps](a);
      }),
        r &&
          Xt(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Xt(e, "compositionstart", $f),
          Xt(e, "compositionend", Ho),
          Xt(e, "change", Ho));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: r, modifiers: { lazy: n, trim: s, number: o } },
      i
    ) {
      if (((e[ps] = Ko(i)), e.composing)) return;
      const a =
          (o || e.type === "number") && !/^0\d/.test(e.value)
            ? Cs(e.value)
            : e.value,
        c = t ?? "";
      a !== c &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((n && t === r) || (s && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  wf = je({ patchProp: _f }, rf);
let zo;
function bf() {
  return zo || (zo = Ru(wf));
}
const Ef = (...e) => {
  const t = bf().createApp(...e),
    { mount: r } = t;
  return (
    (t.mount = (n) => {
      const s = Pf(n);
      if (!s) return;
      const o = t._component;
      !oe(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
      const i = r(s, !1, Sf(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Sf(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pf(e) {
  return Pe(e) ? document.querySelector(e) : e;
}
let Ur = null;
async function Rf() {
  return (
    Ur ||
      ((Ur = await (await fetch("static/config.json")).json()),
      console.log(Ur)),
    Ur
  );
}
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Yt = typeof document < "u";
function Ul(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Of(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Ul(e.default))
  );
}
const me = Object.assign;
function ms(e, t) {
  const r = {};
  for (const n in t) {
    const s = t[n];
    r[n] = et(s) ? s.map(e) : e(s);
  }
  return r;
}
const br = () => {},
  et = Array.isArray,
  Ll = /#/g,
  Tf = /&/g,
  Cf = /\//g,
  Nf = /=/g,
  If = /\?/g,
  Vl = /\+/g,
  kf = /%5B/g,
  Af = /%5D/g,
  Fl = /%5E/g,
  jf = /%60/g,
  Kl = /%7B/g,
  Mf = /%7C/g,
  Hl = /%7D/g,
  xf = /%20/g;
function ao(e) {
  return encodeURI("" + e)
    .replace(Mf, "|")
    .replace(kf, "[")
    .replace(Af, "]");
}
function qf(e) {
  return ao(e).replace(Kl, "{").replace(Hl, "}").replace(Fl, "^");
}
function Vs(e) {
  return ao(e)
    .replace(Vl, "%2B")
    .replace(xf, "+")
    .replace(Ll, "%23")
    .replace(Tf, "%26")
    .replace(jf, "`")
    .replace(Kl, "{")
    .replace(Hl, "}")
    .replace(Fl, "^");
}
function Df(e) {
  return Vs(e).replace(Nf, "%3D");
}
function Uf(e) {
  return ao(e).replace(Ll, "%23").replace(If, "%3F");
}
function Lf(e) {
  return e == null ? "" : Uf(e).replace(Cf, "%2F");
}
function Cr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Vf = /\/$/,
  Ff = (e) => e.replace(Vf, "");
function gs(e, t, r = "/") {
  let n,
    s = {},
    o = "",
    i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    a < c && a >= 0 && (c = -1),
    c > -1 &&
      ((n = t.slice(0, c)),
      (o = t.slice(c + 1, a > -1 ? a : t.length)),
      (s = e(o))),
    a > -1 && ((n = n || t.slice(0, a)), (i = t.slice(a, t.length))),
    (n = Gf(n ?? t, r)),
    { fullPath: n + (o && "?") + o + i, path: n, query: s, hash: Cr(i) }
  );
}
function Kf(e, t) {
  const r = t.query ? e(t.query) : "";
  return t.path + (r && "?") + r + (t.hash || "");
}
function Go(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Hf(e, t, r) {
  const n = t.matched.length - 1,
    s = r.matched.length - 1;
  return (
    n > -1 &&
    n === s &&
    sr(t.matched[n], r.matched[s]) &&
    zl(t.params, r.params) &&
    e(t.query) === e(r.query) &&
    t.hash === r.hash
  );
}
function sr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function zl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (!zf(e[r], t[r])) return !1;
  return !0;
}
function zf(e, t) {
  return et(e) ? Bo(e, t) : et(t) ? Bo(t, e) : e === t;
}
function Bo(e, t) {
  return et(t)
    ? e.length === t.length && e.every((r, n) => r === t[n])
    : e.length === 1 && e[0] === t;
}
function Gf(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const r = t.split("/"),
    n = e.split("/"),
    s = n[n.length - 1];
  (s === ".." || s === ".") && n.push("");
  let o = r.length - 1,
    i,
    a;
  for (i = 0; i < n.length; i++)
    if (((a = n[i]), a !== "."))
      if (a === "..") o > 1 && o--;
      else break;
  return r.slice(0, o).join("/") + "/" + n.slice(i).join("/");
}
const Pt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Nr;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Nr || (Nr = {}));
var Er;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Er || (Er = {}));
function Bf(e) {
  if (!e)
    if (Yt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ff(e);
}
const Wf = /^[^#]+#/;
function Jf(e, t) {
  return e.replace(Wf, "#") + t;
}
function Xf(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - r.left - (t.left || 0),
    top: n.top - r.top - (t.top || 0),
  };
}
const Zn = () => ({ left: window.scrollX, top: window.scrollY });
function Yf(e) {
  let t;
  if ("el" in e) {
    const r = e.el,
      n = typeof r == "string" && r.startsWith("#"),
      s =
        typeof r == "string"
          ? n
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r;
    if (!s) return;
    t = Xf(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Wo(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Fs = new Map();
function Qf(e, t) {
  Fs.set(e, t);
}
function Zf(e) {
  const t = Fs.get(e);
  return Fs.delete(e), t;
}
let ed = () => location.protocol + "//" + location.host;
function Gl(e, t) {
  const { pathname: r, search: n, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = s.slice(a);
    return c[0] !== "/" && (c = "/" + c), Go(c, "");
  }
  return Go(r, e) + n + s;
}
function td(e, t, r, n) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: v }) => {
    const w = Gl(e, location),
      P = r.value,
      b = t.value;
    let g = 0;
    if (v) {
      if (((r.value = w), (t.value = v), i && i === P)) {
        i = null;
        return;
      }
      g = b ? v.position - b.position : 0;
    } else n(w);
    s.forEach((p) => {
      p(r.value, P, {
        delta: g,
        type: Nr.pop,
        direction: g ? (g > 0 ? Er.forward : Er.back) : Er.unknown,
      });
    });
  };
  function c() {
    i = r.value;
  }
  function f(v) {
    s.push(v);
    const w = () => {
      const P = s.indexOf(v);
      P > -1 && s.splice(P, 1);
    };
    return o.push(w), w;
  }
  function u() {
    const { history: v } = window;
    v.state && v.replaceState(me({}, v.state, { scroll: Zn() }), "");
  }
  function h() {
    for (const v of o) v();
    (o = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: c, listen: f, destroy: h }
  );
}
function Jo(e, t, r, n = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: n,
    position: window.history.length,
    scroll: s ? Zn() : null,
  };
}
function rd(e) {
  const { history: t, location: r } = window,
    n = { value: Gl(e, r) },
    s = { value: t.state };
  s.value ||
    o(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(c, f, u) {
    const h = e.indexOf("#"),
      v =
        h > -1
          ? (r.host && document.querySelector("base") ? e : e.slice(h)) + c
          : ed() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", v), (s.value = f);
    } catch (w) {
      console.error(w), r[u ? "replace" : "assign"](v);
    }
  }
  function i(c, f) {
    const u = me({}, t.state, Jo(s.value.back, c, s.value.forward, !0), f, {
      position: s.value.position,
    });
    o(c, u, !0), (n.value = c);
  }
  function a(c, f) {
    const u = me({}, s.value, t.state, { forward: c, scroll: Zn() });
    o(u.current, u, !0);
    const h = me({}, Jo(n.value, c, null), { position: u.position + 1 }, f);
    o(c, h, !1), (n.value = c);
  }
  return { location: n, state: s, push: a, replace: i };
}
function nd(e) {
  e = Bf(e);
  const t = rd(e),
    r = td(e, t.state, t.location, t.replace);
  function n(o, i = !0) {
    i || r.pauseListeners(), history.go(o);
  }
  const s = me(
    { location: "", base: e, go: n, createHref: Jf.bind(null, e) },
    t,
    r
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function sd(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Bl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Wl = Symbol("");
var Xo;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Xo || (Xo = {}));
function or(e, t) {
  return me(new Error(), { type: e, [Wl]: !0 }, t);
}
function ht(e, t) {
  return e instanceof Error && Wl in e && (t == null || !!(e.type & t));
}
const Yo = "[^/]+?",
  od = { sensitive: !1, strict: !1, start: !0, end: !0 },
  id = /[.+*?^${}()[\]/\\]/g;
function ad(e, t) {
  const r = me({}, od, t),
    n = [];
  let s = r.start ? "^" : "";
  const o = [];
  for (const f of e) {
    const u = f.length ? [] : [90];
    r.strict && !f.length && (s += "/");
    for (let h = 0; h < f.length; h++) {
      const v = f[h];
      let w = 40 + (r.sensitive ? 0.25 : 0);
      if (v.type === 0)
        h || (s += "/"), (s += v.value.replace(id, "\\$&")), (w += 40);
      else if (v.type === 1) {
        const { value: P, repeatable: b, optional: g, regexp: p } = v;
        o.push({ name: P, repeatable: b, optional: g });
        const l = p || Yo;
        if (l !== Yo) {
          w += 10;
          try {
            new RegExp(`(${l})`);
          } catch ($) {
            throw new Error(
              `Invalid custom RegExp for param "${P}" (${l}): ` + $.message
            );
          }
        }
        let m = b ? `((?:${l})(?:/(?:${l}))*)` : `(${l})`;
        h || (m = g && f.length < 2 ? `(?:/${m})` : "/" + m),
          g && (m += "?"),
          (s += m),
          (w += 20),
          g && (w += -8),
          b && (w += -20),
          l === ".*" && (w += -50);
      }
      u.push(w);
    }
    n.push(u);
  }
  if (r.strict && r.end) {
    const f = n.length - 1;
    n[f][n[f].length - 1] += 0.7000000000000001;
  }
  r.strict || (s += "/?"),
    r.end ? (s += "$") : r.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const i = new RegExp(s, r.sensitive ? "" : "i");
  function a(f) {
    const u = f.match(i),
      h = {};
    if (!u) return null;
    for (let v = 1; v < u.length; v++) {
      const w = u[v] || "",
        P = o[v - 1];
      h[P.name] = w && P.repeatable ? w.split("/") : w;
    }
    return h;
  }
  function c(f) {
    let u = "",
      h = !1;
    for (const v of e) {
      (!h || !u.endsWith("/")) && (u += "/"), (h = !1);
      for (const w of v)
        if (w.type === 0) u += w.value;
        else if (w.type === 1) {
          const { value: P, repeatable: b, optional: g } = w,
            p = P in f ? f[P] : "";
          if (et(p) && !b)
            throw new Error(
              `Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`
            );
          const l = et(p) ? p.join("/") : p;
          if (!l)
            if (g)
              v.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${P}"`);
          u += l;
        }
    }
    return u || "/";
  }
  return { re: i, score: n, keys: o, parse: a, stringify: c };
}
function ld(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length; ) {
    const n = t[r] - e[r];
    if (n) return n;
    r++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Jl(e, t) {
  let r = 0;
  const n = e.score,
    s = t.score;
  for (; r < n.length && r < s.length; ) {
    const o = ld(n[r], s[r]);
    if (o) return o;
    r++;
  }
  if (Math.abs(s.length - n.length) === 1) {
    if (Qo(n)) return 1;
    if (Qo(s)) return -1;
  }
  return s.length - n.length;
}
function Qo(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const cd = { type: 0, value: "" },
  ud = /[a-zA-Z0-9_]/;
function fd(e) {
  if (!e) return [[]];
  if (e === "/") return [[cd]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(w) {
    throw new Error(`ERR (${r})/"${f}": ${w}`);
  }
  let r = 0,
    n = r;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    c,
    f = "",
    u = "";
  function h() {
    f &&
      (r === 0
        ? o.push({ type: 0, value: f })
        : r === 1 || r === 2 || r === 3
        ? (o.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: f,
            regexp: u,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (f = ""));
  }
  function v() {
    f += c;
  }
  for (; a < e.length; ) {
    if (((c = e[a++]), c === "\\" && r !== 2)) {
      (n = r), (r = 4);
      continue;
    }
    switch (r) {
      case 0:
        c === "/" ? (f && h(), i()) : c === ":" ? (h(), (r = 1)) : v();
        break;
      case 4:
        v(), (r = n);
        break;
      case 1:
        c === "("
          ? (r = 2)
          : ud.test(c)
          ? v()
          : (h(), (r = 0), c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case 2:
        c === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + c)
            : (r = 3)
          : (u += c);
        break;
      case 3:
        h(), (r = 0), c !== "*" && c !== "?" && c !== "+" && a--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return r === 2 && t(`Unfinished custom RegExp for param "${f}"`), h(), i(), s;
}
function dd(e, t, r) {
  const n = ad(fd(e.path), r),
    s = me(n, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function hd(e, t) {
  const r = [],
    n = new Map();
  t = ri({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(h) {
    return n.get(h);
  }
  function o(h, v, w) {
    const P = !w,
      b = ei(h);
    b.aliasOf = w && w.record;
    const g = ri(t, h),
      p = [b];
    if ("alias" in h) {
      const $ = typeof h.alias == "string" ? [h.alias] : h.alias;
      for (const S of $)
        p.push(
          ei(
            me({}, b, {
              components: w ? w.record.components : b.components,
              path: S,
              aliasOf: w ? w.record : b,
            })
          )
        );
    }
    let l, m;
    for (const $ of p) {
      const { path: S } = $;
      if (v && S[0] !== "/") {
        const E = v.record.path,
          O = E[E.length - 1] === "/" ? "" : "/";
        $.path = v.record.path + (S && O + S);
      }
      if (
        ((l = dd($, v, g)),
        w
          ? w.alias.push(l)
          : ((m = m || l),
            m !== l && m.alias.push(l),
            P && h.name && !ti(l) && i(h.name)),
        Xl(l) && c(l),
        b.children)
      ) {
        const E = b.children;
        for (let O = 0; O < E.length; O++) o(E[O], l, w && w.children[O]);
      }
      w = w || l;
    }
    return m
      ? () => {
          i(m);
        }
      : br;
  }
  function i(h) {
    if (Bl(h)) {
      const v = n.get(h);
      v &&
        (n.delete(h),
        r.splice(r.indexOf(v), 1),
        v.children.forEach(i),
        v.alias.forEach(i));
    } else {
      const v = r.indexOf(h);
      v > -1 &&
        (r.splice(v, 1),
        h.record.name && n.delete(h.record.name),
        h.children.forEach(i),
        h.alias.forEach(i));
    }
  }
  function a() {
    return r;
  }
  function c(h) {
    const v = gd(h, r);
    r.splice(v, 0, h), h.record.name && !ti(h) && n.set(h.record.name, h);
  }
  function f(h, v) {
    let w,
      P = {},
      b,
      g;
    if ("name" in h && h.name) {
      if (((w = n.get(h.name)), !w)) throw or(1, { location: h });
      (g = w.record.name),
        (P = me(
          Zo(
            v.params,
            w.keys
              .filter((m) => !m.optional)
              .concat(w.parent ? w.parent.keys.filter((m) => m.optional) : [])
              .map((m) => m.name)
          ),
          h.params &&
            Zo(
              h.params,
              w.keys.map((m) => m.name)
            )
        )),
        (b = w.stringify(P));
    } else if (h.path != null)
      (b = h.path),
        (w = r.find((m) => m.re.test(b))),
        w && ((P = w.parse(b)), (g = w.record.name));
    else {
      if (((w = v.name ? n.get(v.name) : r.find((m) => m.re.test(v.path))), !w))
        throw or(1, { location: h, currentLocation: v });
      (g = w.record.name),
        (P = me({}, v.params, h.params)),
        (b = w.stringify(P));
    }
    const p = [];
    let l = w;
    for (; l; ) p.unshift(l.record), (l = l.parent);
    return { name: g, path: b, params: P, matched: p, meta: md(p) };
  }
  e.forEach((h) => o(h));
  function u() {
    (r.length = 0), n.clear();
  }
  return {
    addRoute: o,
    resolve: f,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function Zo(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
function ei(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: pd(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function pd(e) {
  const t = {},
    r = e.props || !1;
  if ("component" in e) t.default = r;
  else for (const n in e.components) t[n] = typeof r == "object" ? r[n] : r;
  return t;
}
function ti(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function md(e) {
  return e.reduce((t, r) => me(t, r.meta), {});
}
function ri(e, t) {
  const r = {};
  for (const n in e) r[n] = n in t ? t[n] : e[n];
  return r;
}
function gd(e, t) {
  let r = 0,
    n = t.length;
  for (; r !== n; ) {
    const o = (r + n) >> 1;
    Jl(e, t[o]) < 0 ? (n = o) : (r = o + 1);
  }
  const s = yd(e);
  return s && (n = t.lastIndexOf(s, n - 1)), n;
}
function yd(e) {
  let t = e;
  for (; (t = t.parent); ) if (Xl(t) && Jl(e, t) === 0) return t;
}
function Xl({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function _d(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < n.length; ++s) {
    const o = n[s].replace(Vl, " "),
      i = o.indexOf("="),
      a = Cr(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : Cr(o.slice(i + 1));
    if (a in t) {
      let f = t[a];
      et(f) || (f = t[a] = [f]), f.push(c);
    } else t[a] = c;
  }
  return t;
}
function ni(e) {
  let t = "";
  for (let r in e) {
    const n = e[r];
    if (((r = Df(r)), n == null)) {
      n !== void 0 && (t += (t.length ? "&" : "") + r);
      continue;
    }
    (et(n) ? n.map((o) => o && Vs(o)) : [n && Vs(n)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + r), o != null && (t += "=" + o));
    });
  }
  return t;
}
function vd(e) {
  const t = {};
  for (const r in e) {
    const n = e[r];
    n !== void 0 &&
      (t[r] = et(n)
        ? n.map((s) => (s == null ? null : "" + s))
        : n == null
        ? n
        : "" + n);
  }
  return t;
}
const $d = Symbol(""),
  si = Symbol(""),
  es = Symbol(""),
  lo = Symbol(""),
  Ks = Symbol("");
function cr() {
  let e = [];
  function t(n) {
    return (
      e.push(n),
      () => {
        const s = e.indexOf(n);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function r() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: r };
}
function Ct(e, t, r, n, s, o = (i) => i()) {
  const i = n && (n.enterCallbacks[s] = n.enterCallbacks[s] || []);
  return () =>
    new Promise((a, c) => {
      const f = (v) => {
          v === !1
            ? c(or(4, { from: r, to: t }))
            : v instanceof Error
            ? c(v)
            : sd(v)
            ? c(or(2, { from: t, to: v }))
            : (i &&
                n.enterCallbacks[s] === i &&
                typeof v == "function" &&
                i.push(v),
              a());
        },
        u = o(() => e.call(n && n.instances[s], t, r, f));
      let h = Promise.resolve(u);
      e.length < 3 && (h = h.then(f)), h.catch((v) => c(v));
    });
}
function ys(e, t, r, n, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let c = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (Ul(c)) {
          const u = (c.__vccOpts || c)[t];
          u && o.push(Ct(u, r, n, i, a, s));
        } else {
          let f = c();
          o.push(() =>
            f.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${i.path}"`
                );
              const h = Of(u) ? u.default : u;
              (i.mods[a] = u), (i.components[a] = h);
              const w = (h.__vccOpts || h)[t];
              return w && Ct(w, r, n, i, a, s)();
            })
          );
        }
    }
  return o;
}
function oi(e) {
  const t = Be(es),
    r = Be(lo),
    n = Ye(() => {
      const c = ct(e.to);
      return t.resolve(c);
    }),
    s = Ye(() => {
      const { matched: c } = n.value,
        { length: f } = c,
        u = c[f - 1],
        h = r.matched;
      if (!u || !h.length) return -1;
      const v = h.findIndex(sr.bind(null, u));
      if (v > -1) return v;
      const w = ii(c[f - 2]);
      return f > 1 && ii(u) === w && h[h.length - 1].path !== w
        ? h.findIndex(sr.bind(null, c[f - 2]))
        : v;
    }),
    o = Ye(() => s.value > -1 && Pd(r.params, n.value.params)),
    i = Ye(
      () =>
        s.value > -1 &&
        s.value === r.matched.length - 1 &&
        zl(r.params, n.value.params)
    );
  function a(c = {}) {
    if (Sd(c)) {
      const f = t[ct(e.replace) ? "replace" : "push"](ct(e.to)).catch(br);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => f),
        f
      );
    }
    return Promise.resolve();
  }
  return {
    route: n,
    href: Ye(() => n.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a,
  };
}
function wd(e) {
  return e.length === 1 ? e[0] : e;
}
const bd = ll({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: oi,
    setup(e, { slots: t }) {
      const r = It(oi(e)),
        { options: n } = Be(es),
        s = Ye(() => ({
          [ai(e.activeClass, n.linkActiveClass, "router-link-active")]:
            r.isActive,
          [ai(
            e.exactActiveClass,
            n.linkExactActiveClass,
            "router-link-exact-active"
          )]: r.isExactActive,
        }));
      return () => {
        const o = t.default && wd(t.default(r));
        return e.custom
          ? o
          : ql(
              "a",
              {
                "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  Ed = bd;
function Sd(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Pd(e, t) {
  for (const r in t) {
    const n = t[r],
      s = e[r];
    if (typeof n == "string") {
      if (n !== s) return !1;
    } else if (!et(s) || s.length !== n.length || n.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function ii(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ai = (e, t, r) => e ?? t ?? r,
  Rd = ll({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: r }) {
      const n = Be(Ks),
        s = Ye(() => e.route || n.value),
        o = Be(si, 0),
        i = Ye(() => {
          let f = ct(o);
          const { matched: u } = s.value;
          let h;
          for (; (h = u[f]) && !h.components; ) f++;
          return f;
        }),
        a = Ye(() => s.value.matched[i.value]);
      $r(
        si,
        Ye(() => i.value + 1)
      ),
        $r($d, a),
        $r(Ks, s);
      const c = Ge();
      return (
        On(
          () => [c.value, a.value, e.name],
          ([f, u, h], [v, w, P]) => {
            u &&
              ((u.instances[h] = f),
              w &&
                w !== u &&
                f &&
                f === v &&
                (u.leaveGuards.size || (u.leaveGuards = w.leaveGuards),
                u.updateGuards.size || (u.updateGuards = w.updateGuards))),
              f &&
                u &&
                (!w || !sr(u, w) || !v) &&
                (u.enterCallbacks[h] || []).forEach((b) => b(f));
          },
          { flush: "post" }
        ),
        () => {
          const f = s.value,
            u = e.name,
            h = a.value,
            v = h && h.components[u];
          if (!v) return li(r.default, { Component: v, route: f });
          const w = h.props[u],
            P = w
              ? w === !0
                ? f.params
                : typeof w == "function"
                ? w(f)
                : w
              : null,
            g = ql(
              v,
              me({}, P, t, {
                onVnodeUnmounted: (p) => {
                  p.component.isUnmounted && (h.instances[u] = null);
                },
                ref: c,
              })
            );
          return li(r.default, { Component: g, route: f }) || g;
        }
      );
    },
  });
function li(e, t) {
  if (!e) return null;
  const r = e(t);
  return r.length === 1 ? r[0] : r;
}
const Od = Rd;
function Td(e) {
  const t = hd(e.routes, e),
    r = e.parseQuery || _d,
    n = e.stringifyQuery || ni,
    s = e.history,
    o = cr(),
    i = cr(),
    a = cr(),
    c = Vc(Pt);
  let f = Pt;
  Yt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = ms.bind(null, (I) => "" + I),
    h = ms.bind(null, Lf),
    v = ms.bind(null, Cr);
  function w(I, M) {
    let U, K;
    return (
      Bl(I) ? ((U = t.getRecordMatcher(I)), (K = M)) : (K = I), t.addRoute(K, U)
    );
  }
  function P(I) {
    const M = t.getRecordMatcher(I);
    M && t.removeRoute(M);
  }
  function b() {
    return t.getRoutes().map((I) => I.record);
  }
  function g(I) {
    return !!t.getRecordMatcher(I);
  }
  function p(I, M) {
    if (((M = me({}, M || c.value)), typeof I == "string")) {
      const R = gs(r, I, M.path),
        k = t.resolve({ path: R.path }, M),
        D = s.createHref(R.fullPath);
      return me(R, k, {
        params: v(k.params),
        hash: Cr(R.hash),
        redirectedFrom: void 0,
        href: D,
      });
    }
    let U;
    if (I.path != null) U = me({}, I, { path: gs(r, I.path, M.path).path });
    else {
      const R = me({}, I.params);
      for (const k in R) R[k] == null && delete R[k];
      (U = me({}, I, { params: h(R) })), (M.params = h(M.params));
    }
    const K = t.resolve(U, M),
      C = I.hash || "";
    K.params = u(v(K.params));
    const d = Kf(n, me({}, I, { hash: qf(C), path: K.path })),
      y = s.createHref(d);
    return me(
      { fullPath: d, hash: C, query: n === ni ? vd(I.query) : I.query || {} },
      K,
      { redirectedFrom: void 0, href: y }
    );
  }
  function l(I) {
    return typeof I == "string" ? gs(r, I, c.value.path) : me({}, I);
  }
  function m(I, M) {
    if (f !== I) return or(8, { from: M, to: I });
  }
  function $(I) {
    return O(I);
  }
  function S(I) {
    return $(me(l(I), { replace: !0 }));
  }
  function E(I) {
    const M = I.matched[I.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: U } = M;
      let K = typeof U == "function" ? U(I) : U;
      return (
        typeof K == "string" &&
          ((K = K.includes("?") || K.includes("#") ? (K = l(K)) : { path: K }),
          (K.params = {})),
        me(
          {
            query: I.query,
            hash: I.hash,
            params: K.path != null ? {} : I.params,
          },
          K
        )
      );
    }
  }
  function O(I, M) {
    const U = (f = p(I)),
      K = c.value,
      C = I.state,
      d = I.force,
      y = I.replace === !0,
      R = E(U);
    if (R)
      return O(
        me(l(R), {
          state: typeof R == "object" ? me({}, C, R.state) : C,
          force: d,
          replace: y,
        }),
        M || U
      );
    const k = U;
    k.redirectedFrom = M;
    let D;
    return (
      !d && Hf(n, K, U) && ((D = or(16, { to: k, from: K })), A(K, K, !0, !1)),
      (D ? Promise.resolve(D) : X(k, K))
        .catch((L) => (ht(L) ? (ht(L, 2) ? L : H(L)) : Z(L, k, K)))
        .then((L) => {
          if (L) {
            if (ht(L, 2))
              return O(
                me({ replace: y }, l(L.to), {
                  state: typeof L.to == "object" ? me({}, C, L.to.state) : C,
                  force: d,
                }),
                M || k
              );
          } else L = re(k, K, !0, y, C);
          return Y(k, K, L), L;
        })
    );
  }
  function x(I, M) {
    const U = m(I, M);
    return U ? Promise.reject(U) : Promise.resolve();
  }
  function F(I) {
    const M = _.values().next().value;
    return M && typeof M.runWithContext == "function"
      ? M.runWithContext(I)
      : I();
  }
  function X(I, M) {
    let U;
    const [K, C, d] = Cd(I, M);
    U = ys(K.reverse(), "beforeRouteLeave", I, M);
    for (const R of K)
      R.leaveGuards.forEach((k) => {
        U.push(Ct(k, I, M));
      });
    const y = x.bind(null, I, M);
    return (
      U.push(y),
      q(U)
        .then(() => {
          U = [];
          for (const R of o.list()) U.push(Ct(R, I, M));
          return U.push(y), q(U);
        })
        .then(() => {
          U = ys(C, "beforeRouteUpdate", I, M);
          for (const R of C)
            R.updateGuards.forEach((k) => {
              U.push(Ct(k, I, M));
            });
          return U.push(y), q(U);
        })
        .then(() => {
          U = [];
          for (const R of d)
            if (R.beforeEnter)
              if (et(R.beforeEnter))
                for (const k of R.beforeEnter) U.push(Ct(k, I, M));
              else U.push(Ct(R.beforeEnter, I, M));
          return U.push(y), q(U);
        })
        .then(
          () => (
            I.matched.forEach((R) => (R.enterCallbacks = {})),
            (U = ys(d, "beforeRouteEnter", I, M, F)),
            U.push(y),
            q(U)
          )
        )
        .then(() => {
          U = [];
          for (const R of i.list()) U.push(Ct(R, I, M));
          return U.push(y), q(U);
        })
        .catch((R) => (ht(R, 8) ? R : Promise.reject(R)))
    );
  }
  function Y(I, M, U) {
    a.list().forEach((K) => F(() => K(I, M, U)));
  }
  function re(I, M, U, K, C) {
    const d = m(I, M);
    if (d) return d;
    const y = M === Pt,
      R = Yt ? history.state : {};
    U &&
      (K || y
        ? s.replace(I.fullPath, me({ scroll: y && R && R.scroll }, C))
        : s.push(I.fullPath, C)),
      (c.value = I),
      A(I, M, U, y),
      H();
  }
  let Q;
  function ie() {
    Q ||
      (Q = s.listen((I, M, U) => {
        if (!T.listening) return;
        const K = p(I),
          C = E(K);
        if (C) {
          O(me(C, { replace: !0, force: !0 }), K).catch(br);
          return;
        }
        f = K;
        const d = c.value;
        Yt && Qf(Wo(d.fullPath, U.delta), Zn()),
          X(K, d)
            .catch((y) =>
              ht(y, 12)
                ? y
                : ht(y, 2)
                ? (O(me(l(y.to), { force: !0 }), K)
                    .then((R) => {
                      ht(R, 20) &&
                        !U.delta &&
                        U.type === Nr.pop &&
                        s.go(-1, !1);
                    })
                    .catch(br),
                  Promise.reject())
                : (U.delta && s.go(-U.delta, !1), Z(y, K, d))
            )
            .then((y) => {
              (y = y || re(K, d, !1)),
                y &&
                  (U.delta && !ht(y, 8)
                    ? s.go(-U.delta, !1)
                    : U.type === Nr.pop && ht(y, 20) && s.go(-1, !1)),
                Y(K, d, y);
            })
            .catch(br);
      }));
  }
  let ve = cr(),
    fe = cr(),
    ae;
  function Z(I, M, U) {
    H(I);
    const K = fe.list();
    return (
      K.length ? K.forEach((C) => C(I, M, U)) : console.error(I),
      Promise.reject(I)
    );
  }
  function Se() {
    return ae && c.value !== Pt
      ? Promise.resolve()
      : new Promise((I, M) => {
          ve.add([I, M]);
        });
  }
  function H(I) {
    return (
      ae ||
        ((ae = !I),
        ie(),
        ve.list().forEach(([M, U]) => (I ? U(I) : M())),
        ve.reset()),
      I
    );
  }
  function A(I, M, U, K) {
    const { scrollBehavior: C } = e;
    if (!Yt || !C) return Promise.resolve();
    const d =
      (!U && Zf(Wo(I.fullPath, 0))) ||
      ((K || !U) && history.state && history.state.scroll) ||
      null;
    return nl()
      .then(() => C(I, M, d))
      .then((y) => y && Yf(y))
      .catch((y) => Z(y, I, M));
  }
  const j = (I) => s.go(I);
  let N;
  const _ = new Set(),
    T = {
      currentRoute: c,
      listening: !0,
      addRoute: w,
      removeRoute: P,
      clearRoutes: t.clearRoutes,
      hasRoute: g,
      getRoutes: b,
      resolve: p,
      options: e,
      push: $,
      replace: S,
      go: j,
      back: () => j(-1),
      forward: () => j(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: fe.add,
      isReady: Se,
      install(I) {
        const M = this;
        I.component("RouterLink", Ed),
          I.component("RouterView", Od),
          (I.config.globalProperties.$router = M),
          Object.defineProperty(I.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ct(c),
          }),
          Yt &&
            !N &&
            c.value === Pt &&
            ((N = !0), $(s.location).catch((C) => {}));
        const U = {};
        for (const C in Pt)
          Object.defineProperty(U, C, {
            get: () => c.value[C],
            enumerable: !0,
          });
        I.provide(es, M), I.provide(lo, Qa(U)), I.provide(Ks, c);
        const K = I.unmount;
        _.add(I),
          (I.unmount = function () {
            _.delete(I),
              _.size < 1 &&
                ((f = Pt),
                Q && Q(),
                (Q = null),
                (c.value = Pt),
                (N = !1),
                (ae = !1)),
              K();
          });
      },
    };
  function q(I) {
    return I.reduce((M, U) => M.then(() => F(U)), Promise.resolve());
  }
  return T;
}
function Cd(e, t) {
  const r = [],
    n = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => sr(f, a)) ? n.push(a) : r.push(a));
    const c = e.matched[i];
    c && (t.matched.find((f) => sr(f, c)) || s.push(c));
  }
  return [r, n, s];
}
function ts() {
  return Be(es);
}
function Nd(e) {
  return Be(lo);
}
const kt = { STATUS_OK: 200, STATUS_UNAUTHORIZED: 401, STATUS_CONFLICT: 409 },
  Yl = { LOGOUT: 0, LOGIN: 1 },
  Ql = /[^a-zA-Z0-9@_!#$%^&*()\-=+\[\]{};:,.<>?/\\|~`]/g,
  Zl = /[^a-zA-Z0-9]/g,
  Le = {
    UNEXPECTED_ERROR: "Unexpected error occurred.",
    USERNAME_PASSWORD_NOT_CORRECT: "Incorrect username or password.",
    USERNAME_ALREADY_EXIST: "This username is already used.",
    REGISTER_USER_SUCCESS: "User was successfully registered.",
    LOGIN_SUCCESS: "Log in successful.",
    LOGOUT_SUCCESS: "Log out successful.",
    CONFIRM_LOGOUT: "Would you like to log out?",
  },
  Id = { key: 0, class: "flex flex-col h-[95%]" },
  kd = { class: "py-2 px-8 active:bg-gray-600" },
  Ad = { class: "py-2 px-8 active:bg-gray-600" },
  jd = { class: "py-2 px-8 active:bg-gray-600" },
  Md = { class: "flex flex-col mt-auto" },
  xd = { class: "px-8 mb-6" },
  qd = { class: "bg-gray-800 text-white py-4 hidden lg:flex" },
  Dd = { class: "flex justify-center items-center space-x-8 w-1/3 text-lg" },
  Ud = { class: "user-menu relative w-1/3 flex justify-end pr-8" },
  Ld = {
    key: 0,
    class:
      "absolute top-full right-1 mt-2 text-left bg-white rounded shadow-sm px-8 py-1",
  },
  Vd = {
    __name: "Menu",
    setup(e) {
      const { appContext: t } = Yn(),
        r = t.config.globalProperties.$config.URL,
        n = ts(),
        s = Be("username"),
        o = Ge(!1),
        i = Ge(!1),
        a = Ge(null),
        c = localStorage.getItem("token");
      function f() {
        (i.value = !i.value),
          i.value
            ? a.value.classList.add("w-48")
            : a.value.classList.remove("w-48");
      }
      function u() {
        o.value = !o.value;
      }
      function h(w) {
        w.target.closest(".user-menu") || (o.value = !1);
      }
      async function v() {
        try {
          window.$showDialog("Log out", Le.CONFIRM_LOGOUT, async () => {
            const w = new URLSearchParams({ isLogin: Yl.LOGOUT }).toString(),
              P = await fetch(`${r}/auth?${w}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${c}`,
                },
              });
            P.status === kt.STATUS_OK || P.status === kt.STATUS_UNAUTHORIZED
              ? (window.$showSnackbar(Le.LOGOUT_SUCCESS), n.push("/login"))
              : window.$showSnackbar(Le.UNEXPECTED_ERROR, !0);
          });
        } catch (w) {
          window.$showSnackbar(`${Le.UNEXPECTED_ERROR} ${w}`, !0);
        }
      }
      return (
        Bn(() => {
          document.addEventListener("click", h);
        }),
        dl(() => {
          document.addEventListener("click", h);
        }),
        (w, P) => {
          const b = Wn("router-link");
          return (
            Re(),
            Ae("div", null, [
              J(
                "div",
                {
                  ref_key: "sidebar",
                  ref: a,
                  class: rr([
                    i.value ? "top-0 left-0 h-screen h-full" : "",
                    "bg-gray-800 text-white p-4 absolute lg:hidden",
                  ]),
                },
                [
                  J(
                    "button",
                    { class: rr(i.value ? "pb-4" : ""), onClick: f },
                    "☰",
                    2
                  ),
                  i.value
                    ? (Re(),
                      Ae("div", Id, [
                        J("ul", null, [
                          J("li", kd, [
                            be(
                              b,
                              { to: "/todo" },
                              {
                                default: _t(
                                  () => P[0] || (P[0] = [Xe("ToDo")])
                                ),
                                _: 1,
                              }
                            ),
                          ]),
                          J("li", Ad, [
                            be(
                              b,
                              { to: "/schedule" },
                              {
                                default: _t(
                                  () => P[1] || (P[1] = [Xe("Schedule")])
                                ),
                                _: 1,
                              }
                            ),
                          ]),
                          J("li", jd, [
                            be(
                              b,
                              { to: "/diary" },
                              {
                                default: _t(
                                  () => P[2] || (P[2] = [Xe("Diary")])
                                ),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                        J("div", Md, [
                          J("p", xd, [
                            P[3] ||
                              (P[3] = J(
                                "i",
                                { class: "fa-solid fa-user" },
                                null,
                                -1
                              )),
                            Xe(" User (" + ut(ct(s)) + ") ", 1),
                          ]),
                          J(
                            "button",
                            {
                              onClick: v,
                              class:
                                "block text-left py-2 px-8 active:bg-gray-600",
                            },
                            " Log out "
                          ),
                        ]),
                      ]))
                    : bt("", !0),
                ],
                2
              ),
              J("div", qd, [
                P[8] || (P[8] = J("div", { class: "w-1/3" }, null, -1)),
                J("ul", Dd, [
                  J("li", null, [
                    be(
                      b,
                      {
                        to: "/todo",
                        class:
                          "text-white cursor-pointer px-3 py-1 hover:bg-gray-600",
                      },
                      { default: _t(() => P[4] || (P[4] = [Xe("ToDo")])), _: 1 }
                    ),
                  ]),
                  J("li", null, [
                    be(
                      b,
                      {
                        to: "/schedule",
                        class:
                          "text-white cursor-pointer px-3 py-1 hover:bg-gray-600",
                      },
                      {
                        default: _t(() => P[5] || (P[5] = [Xe("Schedule")])),
                        _: 1,
                      }
                    ),
                  ]),
                  J("li", null, [
                    be(
                      b,
                      {
                        to: "/diary",
                        class:
                          "text-white cursor-pointer px-3 py-1 hover:bg-gray-600",
                      },
                      {
                        default: _t(() => P[6] || (P[6] = [Xe("Diary")])),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
                J("div", Ud, [
                  J(
                    "button",
                    {
                      onClick: u,
                      class:
                        "text-white cursor-pointer px-3 py-1 hover:bg-gray-600",
                    },
                    [
                      P[7] ||
                        (P[7] = J(
                          "i",
                          { class: "fa-solid fa-user mr-1" },
                          null,
                          -1
                        )),
                      Xe(" User (" + ut(ct(s)) + ") ", 1),
                    ]
                  ),
                  o.value
                    ? (Re(),
                      Ae("div", Ld, [
                        J(
                          "button",
                          {
                            onClick: v,
                            class:
                              "block w-full text-left p-2 text-gray-700 hover:bg-gray-100",
                          },
                          " Log out "
                        ),
                      ]))
                    : bt("", !0),
                ]),
              ]),
            ])
          );
        }
      );
    },
  },
  Fd = {
    __name: "Snackbar",
    setup(e, { expose: t }) {
      const r = Ge(""),
        n = Ge(!1),
        s = Ge(!1);
      function o(i, a = !1) {
        (r.value = i),
          (n.value = a),
          (s.value = !0),
          setTimeout(() => (s.value = !1), 3e3);
      }
      return (
        t({ show: o }),
        (i, a) =>
          s.value
            ? (Re(),
              Ae(
                "div",
                {
                  key: 0,
                  class: rr([
                    "fixed top-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300",
                    { "bg-green-600": !n.value, "bg-red-600": n.value },
                  ]),
                },
                ut(r.value),
                3
              ))
            : bt("", !0)
      );
    },
  },
  Kd = { key: 0, class: "fixed top-0 left-0 w-full h-full" },
  Hd = {
    class:
      "fixed z-[1] rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3",
  },
  zd = { class: "text-xl font-bold text-center mb-4" },
  Gd = {
    __name: "Dialog",
    setup(e, { expose: t }) {
      const r = Ge(""),
        n = Ge(""),
        s = Ge(!1);
      let o = null;
      function i() {
        s.value = !1;
      }
      function a() {
        (s.value = !1), o();
      }
      function c(f, u, h) {
        (r.value = f), (n.value = u), (s.value = !0), (o = h);
      }
      return (
        t({ show: c }),
        (f, u) =>
          s.value
            ? (Re(),
              Ae("div", Kd, [
                u[0] ||
                  (u[0] = J(
                    "div",
                    {
                      class:
                        "fixed top-0 left-0 w-full h-full bg-gray-200 opacity-50",
                    },
                    null,
                    -1
                  )),
                J("div", Hd, [
                  J("p", zd, ut(r.value), 1),
                  J("p", null, ut(n.value), 1),
                  J("div", { class: "flex space-x-4" }, [
                    J(
                      "button",
                      {
                        onClick: a,
                        class:
                          "bg-blue-500 text-white rounded-md w-40 py-2 mx-auto my-6 block hover:bg-blue-300",
                      },
                      " OK "
                    ),
                    J(
                      "button",
                      {
                        onClick: i,
                        class:
                          "bg-gray-500 text-white rounded-md w-40 py-2 mx-auto my-6 block hover:bg-gray-300",
                      },
                      " Cancel "
                    ),
                  ]),
                ]),
              ]))
            : bt("", !0)
      );
    },
  },
  Bd = {
    id: "main",
    class:
      "min-h-screen w-full bg-cover bg-center font-mono text-gray-700 text-base",
  },
  Wd = { class: "relative lg:block" },
  Jd = {
    __name: "App",
    setup(e) {
      const t = Ge(null),
        r = Ge(null),
        n = Nd(),
        s = Ge(null);
      return (
        $r("username", s),
        Bn(() => {
          (window.$showSnackbar = (o, i) => {
            var a;
            (a = t.value) == null || a.show(o, i);
          }),
            (window.$showDialog = (o, i, a) => {
              var c;
              (c = r.value) == null || c.show(o, i, a);
            });
        }),
        (o, i) => {
          const a = Wn("router-view");
          return (
            Re(),
            Ae("div", Bd, [
              J("div", Wd, [
                ct(n).path !== "/login" && ct(n).path !== "/signup"
                  ? (Re(), Al(Vd, { key: 0 }))
                  : bt("", !0),
                J("div", null, [be(a)]),
              ]),
              be(Fd, { ref_key: "snackbarRef", ref: t }, null, 512),
              be(Gd, { ref_key: "dialogRef", ref: r }, null, 512),
            ])
          );
        }
      );
    },
  },
  ci = {
    __name: "Home",
    setup(e) {
      const { appContext: t } = Yn(),
        r = t.config.globalProperties.$config.URL,
        n = ts(),
        s = Be("username"),
        o = localStorage.getItem("token");
      return (
        Bn(async () => {
          try {
            const i = new URLSearchParams({ isLogin: Yl.LOGIN }).toString(),
              a = await fetch(`${r}/auth?${i}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${o}`,
                },
              }),
              c = await a.json();
            if (a.status === kt.STATUS_OK) {
              s.value = c.username;
              return;
            }
            if (a.status === kt.STATUS_UNAUTHORIZED) {
              n.push("/login");
              return;
            }
            window.$showSnackbar(Le.UNEXPECTED_ERROR, !0);
          } catch (i) {
            window.$showSnackbar(`${Le.UNEXPECTED_ERROR} ${i}`, !0);
          }
        }),
        (i, a) => (Re(), Ae("div", null, "Home Page"))
      );
    },
  },
  Xd = {
    type: "object",
    properties: { username: { type: "string" }, password: { type: "string" } },
    required: ["username", "password"],
    errorMessage: {
      required: {
        username: "Username is required.",
        password: "Password is required.",
      },
    },
  };
function ec(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lr = { exports: {} },
  _s = {},
  pt = {},
  Dt = {},
  vs = {},
  $s = {},
  ws = {},
  ui;
function Ir() {
  return (
    ui ||
      ((ui = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.regexpCode =
            e.getEsmExportName =
            e.getProperty =
            e.safeStringify =
            e.stringify =
            e.strConcat =
            e.addCodeArg =
            e.str =
            e._ =
            e.nil =
            e._Code =
            e.Name =
            e.IDENTIFIER =
            e._CodeOrName =
              void 0);
        class t {}
        (e._CodeOrName = t), (e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i);
        class r extends t {
          constructor(l) {
            if ((super(), !e.IDENTIFIER.test(l)))
              throw new Error("CodeGen: name must be a valid identifier");
            this.str = l;
          }
          toString() {
            return this.str;
          }
          emptyStr() {
            return !1;
          }
          get names() {
            return { [this.str]: 1 };
          }
        }
        e.Name = r;
        class n extends t {
          constructor(l) {
            super(), (this._items = typeof l == "string" ? [l] : l);
          }
          toString() {
            return this.str;
          }
          emptyStr() {
            if (this._items.length > 1) return !1;
            const l = this._items[0];
            return l === "" || l === '""';
          }
          get str() {
            var l;
            return (l = this._str) !== null && l !== void 0
              ? l
              : (this._str = this._items.reduce((m, $) => `${m}${$}`, ""));
          }
          get names() {
            var l;
            return (l = this._names) !== null && l !== void 0
              ? l
              : (this._names = this._items.reduce(
                  (m, $) => (
                    $ instanceof r && (m[$.str] = (m[$.str] || 0) + 1), m
                  ),
                  {}
                ));
          }
        }
        (e._Code = n), (e.nil = new n(""));
        function s(p, ...l) {
          const m = [p[0]];
          let $ = 0;
          for (; $ < l.length; ) a(m, l[$]), m.push(p[++$]);
          return new n(m);
        }
        e._ = s;
        const o = new n("+");
        function i(p, ...l) {
          const m = [w(p[0])];
          let $ = 0;
          for (; $ < l.length; ) m.push(o), a(m, l[$]), m.push(o, w(p[++$]));
          return c(m), new n(m);
        }
        e.str = i;
        function a(p, l) {
          l instanceof n
            ? p.push(...l._items)
            : l instanceof r
            ? p.push(l)
            : p.push(h(l));
        }
        e.addCodeArg = a;
        function c(p) {
          let l = 1;
          for (; l < p.length - 1; ) {
            if (p[l] === o) {
              const m = f(p[l - 1], p[l + 1]);
              if (m !== void 0) {
                p.splice(l - 1, 3, m);
                continue;
              }
              p[l++] = "+";
            }
            l++;
          }
        }
        function f(p, l) {
          if (l === '""') return p;
          if (p === '""') return l;
          if (typeof p == "string")
            return l instanceof r || p[p.length - 1] !== '"'
              ? void 0
              : typeof l != "string"
              ? `${p.slice(0, -1)}${l}"`
              : l[0] === '"'
              ? p.slice(0, -1) + l.slice(1)
              : void 0;
          if (typeof l == "string" && l[0] === '"' && !(p instanceof r))
            return `"${p}${l.slice(1)}`;
        }
        function u(p, l) {
          return l.emptyStr() ? p : p.emptyStr() ? l : i`${p}${l}`;
        }
        e.strConcat = u;
        function h(p) {
          return typeof p == "number" || typeof p == "boolean" || p === null
            ? p
            : w(Array.isArray(p) ? p.join(",") : p);
        }
        function v(p) {
          return new n(w(p));
        }
        e.stringify = v;
        function w(p) {
          return JSON.stringify(p)
            .replace(/\u2028/g, "\\u2028")
            .replace(/\u2029/g, "\\u2029");
        }
        e.safeStringify = w;
        function P(p) {
          return typeof p == "string" && e.IDENTIFIER.test(p)
            ? new n(`.${p}`)
            : s`[${p}]`;
        }
        e.getProperty = P;
        function b(p) {
          if (typeof p == "string" && e.IDENTIFIER.test(p))
            return new n(`${p}`);
          throw new Error(
            `CodeGen: invalid export name: ${p}, use explicit $id name mapping`
          );
        }
        e.getEsmExportName = b;
        function g(p) {
          return new n(p.toString());
        }
        e.regexpCode = g;
      })(ws)),
    ws
  );
}
var bs = {},
  fi;
function di() {
  return (
    fi ||
      ((fi = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ValueScope =
            e.ValueScopeName =
            e.Scope =
            e.varKinds =
            e.UsedValueState =
              void 0);
        const t = Ir();
        class r extends Error {
          constructor(f) {
            super(`CodeGen: "code" for ${f} not defined`),
              (this.value = f.value);
          }
        }
        var n;
        (function (c) {
          (c[(c.Started = 0)] = "Started"),
            (c[(c.Completed = 1)] = "Completed");
        })(n || (e.UsedValueState = n = {})),
          (e.varKinds = {
            const: new t.Name("const"),
            let: new t.Name("let"),
            var: new t.Name("var"),
          });
        class s {
          constructor({ prefixes: f, parent: u } = {}) {
            (this._names = {}), (this._prefixes = f), (this._parent = u);
          }
          toName(f) {
            return f instanceof t.Name ? f : this.name(f);
          }
          name(f) {
            return new t.Name(this._newName(f));
          }
          _newName(f) {
            const u = this._names[f] || this._nameGroup(f);
            return `${f}${u.index++}`;
          }
          _nameGroup(f) {
            var u, h;
            if (
              (!(
                (h =
                  (u = this._parent) === null || u === void 0
                    ? void 0
                    : u._prefixes) === null || h === void 0
              ) &&
                h.has(f)) ||
              (this._prefixes && !this._prefixes.has(f))
            )
              throw new Error(
                `CodeGen: prefix "${f}" is not allowed in this scope`
              );
            return (this._names[f] = { prefix: f, index: 0 });
          }
        }
        e.Scope = s;
        class o extends t.Name {
          constructor(f, u) {
            super(u), (this.prefix = f);
          }
          setValue(f, { property: u, itemIndex: h }) {
            (this.value = f),
              (this.scopePath = (0, t._)`.${new t.Name(u)}[${h}]`);
          }
        }
        e.ValueScopeName = o;
        const i = (0, t._)`\n`;
        class a extends s {
          constructor(f) {
            super(f),
              (this._values = {}),
              (this._scope = f.scope),
              (this.opts = { ...f, _n: f.lines ? i : t.nil });
          }
          get() {
            return this._scope;
          }
          name(f) {
            return new o(f, this._newName(f));
          }
          value(f, u) {
            var h;
            if (u.ref === void 0)
              throw new Error("CodeGen: ref must be passed in value");
            const v = this.toName(f),
              { prefix: w } = v,
              P = (h = u.key) !== null && h !== void 0 ? h : u.ref;
            let b = this._values[w];
            if (b) {
              const l = b.get(P);
              if (l) return l;
            } else b = this._values[w] = new Map();
            b.set(P, v);
            const g = this._scope[w] || (this._scope[w] = []),
              p = g.length;
            return (
              (g[p] = u.ref), v.setValue(u, { property: w, itemIndex: p }), v
            );
          }
          getValue(f, u) {
            const h = this._values[f];
            if (h) return h.get(u);
          }
          scopeRefs(f, u = this._values) {
            return this._reduceValues(u, (h) => {
              if (h.scopePath === void 0)
                throw new Error(`CodeGen: name "${h}" has no value`);
              return (0, t._)`${f}${h.scopePath}`;
            });
          }
          scopeCode(f = this._values, u, h) {
            return this._reduceValues(
              f,
              (v) => {
                if (v.value === void 0)
                  throw new Error(`CodeGen: name "${v}" has no value`);
                return v.value.code;
              },
              u,
              h
            );
          }
          _reduceValues(f, u, h = {}, v) {
            let w = t.nil;
            for (const P in f) {
              const b = f[P];
              if (!b) continue;
              const g = (h[P] = h[P] || new Map());
              b.forEach((p) => {
                if (g.has(p)) return;
                g.set(p, n.Started);
                let l = u(p);
                if (l) {
                  const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
                  w = (0, t._)`${w}${m} ${p} = ${l};${this.opts._n}`;
                } else if ((l = v == null ? void 0 : v(p)))
                  w = (0, t._)`${w}${l}${this.opts._n}`;
                else throw new r(p);
                g.set(p, n.Completed);
              });
            }
            return w;
          }
        }
        e.ValueScope = a;
      })(bs)),
    bs
  );
}
var hi;
function ue() {
  return (
    hi ||
      ((hi = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.or =
            e.and =
            e.not =
            e.CodeGen =
            e.operators =
            e.varKinds =
            e.ValueScopeName =
            e.ValueScope =
            e.Scope =
            e.Name =
            e.regexpCode =
            e.stringify =
            e.getProperty =
            e.nil =
            e.strConcat =
            e.str =
            e._ =
              void 0);
        const t = Ir(),
          r = di();
        var n = Ir();
        Object.defineProperty(e, "_", {
          enumerable: !0,
          get: function () {
            return n._;
          },
        }),
          Object.defineProperty(e, "str", {
            enumerable: !0,
            get: function () {
              return n.str;
            },
          }),
          Object.defineProperty(e, "strConcat", {
            enumerable: !0,
            get: function () {
              return n.strConcat;
            },
          }),
          Object.defineProperty(e, "nil", {
            enumerable: !0,
            get: function () {
              return n.nil;
            },
          }),
          Object.defineProperty(e, "getProperty", {
            enumerable: !0,
            get: function () {
              return n.getProperty;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return n.stringify;
            },
          }),
          Object.defineProperty(e, "regexpCode", {
            enumerable: !0,
            get: function () {
              return n.regexpCode;
            },
          }),
          Object.defineProperty(e, "Name", {
            enumerable: !0,
            get: function () {
              return n.Name;
            },
          });
        var s = di();
        Object.defineProperty(e, "Scope", {
          enumerable: !0,
          get: function () {
            return s.Scope;
          },
        }),
          Object.defineProperty(e, "ValueScope", {
            enumerable: !0,
            get: function () {
              return s.ValueScope;
            },
          }),
          Object.defineProperty(e, "ValueScopeName", {
            enumerable: !0,
            get: function () {
              return s.ValueScopeName;
            },
          }),
          Object.defineProperty(e, "varKinds", {
            enumerable: !0,
            get: function () {
              return s.varKinds;
            },
          }),
          (e.operators = {
            GT: new t._Code(">"),
            GTE: new t._Code(">="),
            LT: new t._Code("<"),
            LTE: new t._Code("<="),
            EQ: new t._Code("==="),
            NEQ: new t._Code("!=="),
            NOT: new t._Code("!"),
            OR: new t._Code("||"),
            AND: new t._Code("&&"),
            ADD: new t._Code("+"),
          });
        class o {
          optimizeNodes() {
            return this;
          }
          optimizeNames(_, T) {
            return this;
          }
        }
        class i extends o {
          constructor(_, T, q) {
            super(), (this.varKind = _), (this.name = T), (this.rhs = q);
          }
          render({ es5: _, _n: T }) {
            const q = _ ? r.varKinds.var : this.varKind,
              I = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
            return `${q} ${this.name}${I};` + T;
          }
          optimizeNames(_, T) {
            if (_[this.name.str])
              return this.rhs && (this.rhs = ie(this.rhs, _, T)), this;
          }
          get names() {
            return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
          }
        }
        class a extends o {
          constructor(_, T, q) {
            super(), (this.lhs = _), (this.rhs = T), (this.sideEffects = q);
          }
          render({ _n: _ }) {
            return `${this.lhs} = ${this.rhs};` + _;
          }
          optimizeNames(_, T) {
            if (
              !(
                this.lhs instanceof t.Name &&
                !_[this.lhs.str] &&
                !this.sideEffects
              )
            )
              return (this.rhs = ie(this.rhs, _, T)), this;
          }
          get names() {
            const _ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
            return Q(_, this.rhs);
          }
        }
        class c extends a {
          constructor(_, T, q, I) {
            super(_, q, I), (this.op = T);
          }
          render({ _n: _ }) {
            return `${this.lhs} ${this.op}= ${this.rhs};` + _;
          }
        }
        class f extends o {
          constructor(_) {
            super(), (this.label = _), (this.names = {});
          }
          render({ _n: _ }) {
            return `${this.label}:` + _;
          }
        }
        class u extends o {
          constructor(_) {
            super(), (this.label = _), (this.names = {});
          }
          render({ _n: _ }) {
            return `break${this.label ? ` ${this.label}` : ""};` + _;
          }
        }
        class h extends o {
          constructor(_) {
            super(), (this.error = _);
          }
          render({ _n: _ }) {
            return `throw ${this.error};` + _;
          }
          get names() {
            return this.error.names;
          }
        }
        class v extends o {
          constructor(_) {
            super(), (this.code = _);
          }
          render({ _n: _ }) {
            return `${this.code};` + _;
          }
          optimizeNodes() {
            return `${this.code}` ? this : void 0;
          }
          optimizeNames(_, T) {
            return (this.code = ie(this.code, _, T)), this;
          }
          get names() {
            return this.code instanceof t._CodeOrName ? this.code.names : {};
          }
        }
        class w extends o {
          constructor(_ = []) {
            super(), (this.nodes = _);
          }
          render(_) {
            return this.nodes.reduce((T, q) => T + q.render(_), "");
          }
          optimizeNodes() {
            const { nodes: _ } = this;
            let T = _.length;
            for (; T--; ) {
              const q = _[T].optimizeNodes();
              Array.isArray(q)
                ? _.splice(T, 1, ...q)
                : q
                ? (_[T] = q)
                : _.splice(T, 1);
            }
            return _.length > 0 ? this : void 0;
          }
          optimizeNames(_, T) {
            const { nodes: q } = this;
            let I = q.length;
            for (; I--; ) {
              const M = q[I];
              M.optimizeNames(_, T) || (ve(_, M.names), q.splice(I, 1));
            }
            return q.length > 0 ? this : void 0;
          }
          get names() {
            return this.nodes.reduce((_, T) => re(_, T.names), {});
          }
        }
        class P extends w {
          render(_) {
            return "{" + _._n + super.render(_) + "}" + _._n;
          }
        }
        class b extends w {}
        class g extends P {}
        g.kind = "else";
        class p extends P {
          constructor(_, T) {
            super(T), (this.condition = _);
          }
          render(_) {
            let T = `if(${this.condition})` + super.render(_);
            return this.else && (T += "else " + this.else.render(_)), T;
          }
          optimizeNodes() {
            super.optimizeNodes();
            const _ = this.condition;
            if (_ === !0) return this.nodes;
            let T = this.else;
            if (T) {
              const q = T.optimizeNodes();
              T = this.else = Array.isArray(q) ? new g(q) : q;
            }
            if (T)
              return _ === !1
                ? T instanceof p
                  ? T
                  : T.nodes
                : this.nodes.length
                ? this
                : new p(fe(_), T instanceof p ? [T] : T.nodes);
            if (!(_ === !1 || !this.nodes.length)) return this;
          }
          optimizeNames(_, T) {
            var q;
            if (
              ((this.else =
                (q = this.else) === null || q === void 0
                  ? void 0
                  : q.optimizeNames(_, T)),
              !!(super.optimizeNames(_, T) || this.else))
            )
              return (this.condition = ie(this.condition, _, T)), this;
          }
          get names() {
            const _ = super.names;
            return Q(_, this.condition), this.else && re(_, this.else.names), _;
          }
        }
        p.kind = "if";
        class l extends P {}
        l.kind = "for";
        class m extends l {
          constructor(_) {
            super(), (this.iteration = _);
          }
          render(_) {
            return `for(${this.iteration})` + super.render(_);
          }
          optimizeNames(_, T) {
            if (super.optimizeNames(_, T))
              return (this.iteration = ie(this.iteration, _, T)), this;
          }
          get names() {
            return re(super.names, this.iteration.names);
          }
        }
        class $ extends l {
          constructor(_, T, q, I) {
            super(),
              (this.varKind = _),
              (this.name = T),
              (this.from = q),
              (this.to = I);
          }
          render(_) {
            const T = _.es5 ? r.varKinds.var : this.varKind,
              { name: q, from: I, to: M } = this;
            return `for(${T} ${q}=${I}; ${q}<${M}; ${q}++)` + super.render(_);
          }
          get names() {
            const _ = Q(super.names, this.from);
            return Q(_, this.to);
          }
        }
        class S extends l {
          constructor(_, T, q, I) {
            super(),
              (this.loop = _),
              (this.varKind = T),
              (this.name = q),
              (this.iterable = I);
          }
          render(_) {
            return (
              `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
              super.render(_)
            );
          }
          optimizeNames(_, T) {
            if (super.optimizeNames(_, T))
              return (this.iterable = ie(this.iterable, _, T)), this;
          }
          get names() {
            return re(super.names, this.iterable.names);
          }
        }
        class E extends P {
          constructor(_, T, q) {
            super(), (this.name = _), (this.args = T), (this.async = q);
          }
          render(_) {
            return (
              `${this.async ? "async " : ""}function ${this.name}(${
                this.args
              })` + super.render(_)
            );
          }
        }
        E.kind = "func";
        class O extends w {
          render(_) {
            return "return " + super.render(_);
          }
        }
        O.kind = "return";
        class x extends P {
          render(_) {
            let T = "try" + super.render(_);
            return (
              this.catch && (T += this.catch.render(_)),
              this.finally && (T += this.finally.render(_)),
              T
            );
          }
          optimizeNodes() {
            var _, T;
            return (
              super.optimizeNodes(),
              (_ = this.catch) === null || _ === void 0 || _.optimizeNodes(),
              (T = this.finally) === null || T === void 0 || T.optimizeNodes(),
              this
            );
          }
          optimizeNames(_, T) {
            var q, I;
            return (
              super.optimizeNames(_, T),
              (q = this.catch) === null ||
                q === void 0 ||
                q.optimizeNames(_, T),
              (I = this.finally) === null ||
                I === void 0 ||
                I.optimizeNames(_, T),
              this
            );
          }
          get names() {
            const _ = super.names;
            return (
              this.catch && re(_, this.catch.names),
              this.finally && re(_, this.finally.names),
              _
            );
          }
        }
        class F extends P {
          constructor(_) {
            super(), (this.error = _);
          }
          render(_) {
            return `catch(${this.error})` + super.render(_);
          }
        }
        F.kind = "catch";
        class X extends P {
          render(_) {
            return "finally" + super.render(_);
          }
        }
        X.kind = "finally";
        class Y {
          constructor(_, T = {}) {
            (this._values = {}),
              (this._blockStarts = []),
              (this._constants = {}),
              (this.opts = {
                ...T,
                _n: T.lines
                  ? `
`
                  : "",
              }),
              (this._extScope = _),
              (this._scope = new r.Scope({ parent: _ })),
              (this._nodes = [new b()]);
          }
          toString() {
            return this._root.render(this.opts);
          }
          name(_) {
            return this._scope.name(_);
          }
          scopeName(_) {
            return this._extScope.name(_);
          }
          scopeValue(_, T) {
            const q = this._extScope.value(_, T);
            return (
              (
                this._values[q.prefix] || (this._values[q.prefix] = new Set())
              ).add(q),
              q
            );
          }
          getScopeValue(_, T) {
            return this._extScope.getValue(_, T);
          }
          scopeRefs(_) {
            return this._extScope.scopeRefs(_, this._values);
          }
          scopeCode() {
            return this._extScope.scopeCode(this._values);
          }
          _def(_, T, q, I) {
            const M = this._scope.toName(T);
            return (
              q !== void 0 && I && (this._constants[M.str] = q),
              this._leafNode(new i(_, M, q)),
              M
            );
          }
          const(_, T, q) {
            return this._def(r.varKinds.const, _, T, q);
          }
          let(_, T, q) {
            return this._def(r.varKinds.let, _, T, q);
          }
          var(_, T, q) {
            return this._def(r.varKinds.var, _, T, q);
          }
          assign(_, T, q) {
            return this._leafNode(new a(_, T, q));
          }
          add(_, T) {
            return this._leafNode(new c(_, e.operators.ADD, T));
          }
          code(_) {
            return (
              typeof _ == "function"
                ? _()
                : _ !== t.nil && this._leafNode(new v(_)),
              this
            );
          }
          object(..._) {
            const T = ["{"];
            for (const [q, I] of _)
              T.length > 1 && T.push(","),
                T.push(q),
                (q !== I || this.opts.es5) &&
                  (T.push(":"), (0, t.addCodeArg)(T, I));
            return T.push("}"), new t._Code(T);
          }
          if(_, T, q) {
            if ((this._blockNode(new p(_)), T && q))
              this.code(T).else().code(q).endIf();
            else if (T) this.code(T).endIf();
            else if (q)
              throw new Error('CodeGen: "else" body without "then" body');
            return this;
          }
          elseIf(_) {
            return this._elseNode(new p(_));
          }
          else() {
            return this._elseNode(new g());
          }
          endIf() {
            return this._endBlockNode(p, g);
          }
          _for(_, T) {
            return this._blockNode(_), T && this.code(T).endFor(), this;
          }
          for(_, T) {
            return this._for(new m(_), T);
          }
          forRange(
            _,
            T,
            q,
            I,
            M = this.opts.es5 ? r.varKinds.var : r.varKinds.let
          ) {
            const U = this._scope.toName(_);
            return this._for(new $(M, U, T, q), () => I(U));
          }
          forOf(_, T, q, I = r.varKinds.const) {
            const M = this._scope.toName(_);
            if (this.opts.es5) {
              const U = T instanceof t.Name ? T : this.var("_arr", T);
              return this.forRange("_i", 0, (0, t._)`${U}.length`, (K) => {
                this.var(M, (0, t._)`${U}[${K}]`), q(M);
              });
            }
            return this._for(new S("of", I, M, T), () => q(M));
          }
          forIn(
            _,
            T,
            q,
            I = this.opts.es5 ? r.varKinds.var : r.varKinds.const
          ) {
            if (this.opts.ownProperties)
              return this.forOf(_, (0, t._)`Object.keys(${T})`, q);
            const M = this._scope.toName(_);
            return this._for(new S("in", I, M, T), () => q(M));
          }
          endFor() {
            return this._endBlockNode(l);
          }
          label(_) {
            return this._leafNode(new f(_));
          }
          break(_) {
            return this._leafNode(new u(_));
          }
          return(_) {
            const T = new O();
            if ((this._blockNode(T), this.code(_), T.nodes.length !== 1))
              throw new Error('CodeGen: "return" should have one node');
            return this._endBlockNode(O);
          }
          try(_, T, q) {
            if (!T && !q)
              throw new Error('CodeGen: "try" without "catch" and "finally"');
            const I = new x();
            if ((this._blockNode(I), this.code(_), T)) {
              const M = this.name("e");
              (this._currNode = I.catch = new F(M)), T(M);
            }
            return (
              q && ((this._currNode = I.finally = new X()), this.code(q)),
              this._endBlockNode(F, X)
            );
          }
          throw(_) {
            return this._leafNode(new h(_));
          }
          block(_, T) {
            return (
              this._blockStarts.push(this._nodes.length),
              _ && this.code(_).endBlock(T),
              this
            );
          }
          endBlock(_) {
            const T = this._blockStarts.pop();
            if (T === void 0)
              throw new Error("CodeGen: not in self-balancing block");
            const q = this._nodes.length - T;
            if (q < 0 || (_ !== void 0 && q !== _))
              throw new Error(
                `CodeGen: wrong number of nodes: ${q} vs ${_} expected`
              );
            return (this._nodes.length = T), this;
          }
          func(_, T = t.nil, q, I) {
            return (
              this._blockNode(new E(_, T, q)), I && this.code(I).endFunc(), this
            );
          }
          endFunc() {
            return this._endBlockNode(E);
          }
          optimize(_ = 1) {
            for (; _-- > 0; )
              this._root.optimizeNodes(),
                this._root.optimizeNames(this._root.names, this._constants);
          }
          _leafNode(_) {
            return this._currNode.nodes.push(_), this;
          }
          _blockNode(_) {
            this._currNode.nodes.push(_), this._nodes.push(_);
          }
          _endBlockNode(_, T) {
            const q = this._currNode;
            if (q instanceof _ || (T && q instanceof T))
              return this._nodes.pop(), this;
            throw new Error(
              `CodeGen: not in block "${T ? `${_.kind}/${T.kind}` : _.kind}"`
            );
          }
          _elseNode(_) {
            const T = this._currNode;
            if (!(T instanceof p))
              throw new Error('CodeGen: "else" without "if"');
            return (this._currNode = T.else = _), this;
          }
          get _root() {
            return this._nodes[0];
          }
          get _currNode() {
            const _ = this._nodes;
            return _[_.length - 1];
          }
          set _currNode(_) {
            const T = this._nodes;
            T[T.length - 1] = _;
          }
        }
        e.CodeGen = Y;
        function re(N, _) {
          for (const T in _) N[T] = (N[T] || 0) + (_[T] || 0);
          return N;
        }
        function Q(N, _) {
          return _ instanceof t._CodeOrName ? re(N, _.names) : N;
        }
        function ie(N, _, T) {
          if (N instanceof t.Name) return q(N);
          if (!I(N)) return N;
          return new t._Code(
            N._items.reduce(
              (M, U) => (
                U instanceof t.Name && (U = q(U)),
                U instanceof t._Code ? M.push(...U._items) : M.push(U),
                M
              ),
              []
            )
          );
          function q(M) {
            const U = T[M.str];
            return U === void 0 || _[M.str] !== 1 ? M : (delete _[M.str], U);
          }
          function I(M) {
            return (
              M instanceof t._Code &&
              M._items.some(
                (U) =>
                  U instanceof t.Name && _[U.str] === 1 && T[U.str] !== void 0
              )
            );
          }
        }
        function ve(N, _) {
          for (const T in _) N[T] = (N[T] || 0) - (_[T] || 0);
        }
        function fe(N) {
          return typeof N == "boolean" || typeof N == "number" || N === null
            ? !N
            : (0, t._)`!${j(N)}`;
        }
        e.not = fe;
        const ae = A(e.operators.AND);
        function Z(...N) {
          return N.reduce(ae);
        }
        e.and = Z;
        const Se = A(e.operators.OR);
        function H(...N) {
          return N.reduce(Se);
        }
        e.or = H;
        function A(N) {
          return (_, T) =>
            _ === t.nil ? T : T === t.nil ? _ : (0, t._)`${j(_)} ${N} ${j(T)}`;
        }
        function j(N) {
          return N instanceof t.Name ? N : (0, t._)`(${N})`;
        }
      })($s)),
    $s
  );
}
var ce = {},
  pi;
function he() {
  if (pi) return ce;
  (pi = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.checkStrictMode =
      ce.getErrorPath =
      ce.Type =
      ce.useFunc =
      ce.setEvaluated =
      ce.evaluatedPropsToName =
      ce.mergeEvaluated =
      ce.eachItem =
      ce.unescapeJsonPointer =
      ce.escapeJsonPointer =
      ce.escapeFragment =
      ce.unescapeFragment =
      ce.schemaRefOrVal =
      ce.schemaHasRulesButRef =
      ce.schemaHasRules =
      ce.checkUnknownRules =
      ce.alwaysValidSchema =
      ce.toHash =
        void 0);
  const e = ue(),
    t = Ir();
  function r(S) {
    const E = {};
    for (const O of S) E[O] = !0;
    return E;
  }
  ce.toHash = r;
  function n(S, E) {
    return typeof E == "boolean"
      ? E
      : Object.keys(E).length === 0
      ? !0
      : (s(S, E), !o(E, S.self.RULES.all));
  }
  ce.alwaysValidSchema = n;
  function s(S, E = S.schema) {
    const { opts: O, self: x } = S;
    if (!O.strictSchema || typeof E == "boolean") return;
    const F = x.RULES.keywords;
    for (const X in E) F[X] || $(S, `unknown keyword: "${X}"`);
  }
  ce.checkUnknownRules = s;
  function o(S, E) {
    if (typeof S == "boolean") return !S;
    for (const O in S) if (E[O]) return !0;
    return !1;
  }
  ce.schemaHasRules = o;
  function i(S, E) {
    if (typeof S == "boolean") return !S;
    for (const O in S) if (O !== "$ref" && E.all[O]) return !0;
    return !1;
  }
  ce.schemaHasRulesButRef = i;
  function a({ topSchemaRef: S, schemaPath: E }, O, x, F) {
    if (!F) {
      if (typeof O == "number" || typeof O == "boolean") return O;
      if (typeof O == "string") return (0, e._)`${O}`;
    }
    return (0, e._)`${S}${E}${(0, e.getProperty)(x)}`;
  }
  ce.schemaRefOrVal = a;
  function c(S) {
    return h(decodeURIComponent(S));
  }
  ce.unescapeFragment = c;
  function f(S) {
    return encodeURIComponent(u(S));
  }
  ce.escapeFragment = f;
  function u(S) {
    return typeof S == "number"
      ? `${S}`
      : S.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ce.escapeJsonPointer = u;
  function h(S) {
    return S.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ce.unescapeJsonPointer = h;
  function v(S, E) {
    if (Array.isArray(S)) for (const O of S) E(O);
    else E(S);
  }
  ce.eachItem = v;
  function w({
    mergeNames: S,
    mergeToName: E,
    mergeValues: O,
    resultToName: x,
  }) {
    return (F, X, Y, re) => {
      const Q =
        Y === void 0
          ? X
          : Y instanceof e.Name
          ? (X instanceof e.Name ? S(F, X, Y) : E(F, X, Y), Y)
          : X instanceof e.Name
          ? (E(F, Y, X), X)
          : O(X, Y);
      return re === e.Name && !(Q instanceof e.Name) ? x(F, Q) : Q;
    };
  }
  ce.mergeEvaluated = {
    props: w({
      mergeNames: (S, E, O) =>
        S.if((0, e._)`${O} !== true && ${E} !== undefined`, () => {
          S.if(
            (0, e._)`${E} === true`,
            () => S.assign(O, !0),
            () =>
              S.assign(O, (0, e._)`${O} || {}`).code(
                (0, e._)`Object.assign(${O}, ${E})`
              )
          );
        }),
      mergeToName: (S, E, O) =>
        S.if((0, e._)`${O} !== true`, () => {
          E === !0
            ? S.assign(O, !0)
            : (S.assign(O, (0, e._)`${O} || {}`), b(S, O, E));
        }),
      mergeValues: (S, E) => (S === !0 ? !0 : { ...S, ...E }),
      resultToName: P,
    }),
    items: w({
      mergeNames: (S, E, O) =>
        S.if((0, e._)`${O} !== true && ${E} !== undefined`, () =>
          S.assign(
            O,
            (0, e._)`${E} === true ? true : ${O} > ${E} ? ${O} : ${E}`
          )
        ),
      mergeToName: (S, E, O) =>
        S.if((0, e._)`${O} !== true`, () =>
          S.assign(O, E === !0 ? !0 : (0, e._)`${O} > ${E} ? ${O} : ${E}`)
        ),
      mergeValues: (S, E) => (S === !0 ? !0 : Math.max(S, E)),
      resultToName: (S, E) => S.var("items", E),
    }),
  };
  function P(S, E) {
    if (E === !0) return S.var("props", !0);
    const O = S.var("props", (0, e._)`{}`);
    return E !== void 0 && b(S, O, E), O;
  }
  ce.evaluatedPropsToName = P;
  function b(S, E, O) {
    Object.keys(O).forEach((x) =>
      S.assign((0, e._)`${E}${(0, e.getProperty)(x)}`, !0)
    );
  }
  ce.setEvaluated = b;
  const g = {};
  function p(S, E) {
    return S.scopeValue("func", {
      ref: E,
      code: g[E.code] || (g[E.code] = new t._Code(E.code)),
    });
  }
  ce.useFunc = p;
  var l;
  (function (S) {
    (S[(S.Num = 0)] = "Num"), (S[(S.Str = 1)] = "Str");
  })(l || (ce.Type = l = {}));
  function m(S, E, O) {
    if (S instanceof e.Name) {
      const x = E === l.Num;
      return O
        ? x
          ? (0, e._)`"[" + ${S} + "]"`
          : (0, e._)`"['" + ${S} + "']"`
        : x
        ? (0, e._)`"/" + ${S}`
        : (0, e._)`"/" + ${S}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return O ? (0, e.getProperty)(S).toString() : "/" + u(S);
  }
  ce.getErrorPath = m;
  function $(S, E, O = S.opts.strictSchema) {
    if (O) {
      if (((E = `strict mode: ${E}`), O === !0)) throw new Error(E);
      S.self.logger.warn(E);
    }
  }
  return (ce.checkStrictMode = $), ce;
}
var Vr = {},
  mi;
function St() {
  if (mi) return Vr;
  (mi = 1), Object.defineProperty(Vr, "__esModule", { value: !0 });
  const e = ue(),
    t = {
      data: new e.Name("data"),
      valCxt: new e.Name("valCxt"),
      instancePath: new e.Name("instancePath"),
      parentData: new e.Name("parentData"),
      parentDataProperty: new e.Name("parentDataProperty"),
      rootData: new e.Name("rootData"),
      dynamicAnchors: new e.Name("dynamicAnchors"),
      vErrors: new e.Name("vErrors"),
      errors: new e.Name("errors"),
      this: new e.Name("this"),
      self: new e.Name("self"),
      scope: new e.Name("scope"),
      json: new e.Name("json"),
      jsonPos: new e.Name("jsonPos"),
      jsonLen: new e.Name("jsonLen"),
      jsonPart: new e.Name("jsonPart"),
    };
  return (Vr.default = t), Vr;
}
var gi;
function jr() {
  return (
    gi ||
      ((gi = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extendErrors =
            e.resetErrorsCount =
            e.reportExtraError =
            e.reportError =
            e.keyword$DataError =
            e.keywordError =
              void 0);
        const t = ue(),
          r = he(),
          n = St();
        (e.keywordError = {
          message: ({ keyword: g }) =>
            (0, t.str)`must pass "${g}" keyword validation`,
        }),
          (e.keyword$DataError = {
            message: ({ keyword: g, schemaType: p }) =>
              p
                ? (0, t.str)`"${g}" keyword must be ${p} ($data)`
                : (0, t.str)`"${g}" keyword is invalid ($data)`,
          });
        function s(g, p = e.keywordError, l, m) {
          const { it: $ } = g,
            { gen: S, compositeRule: E, allErrors: O } = $,
            x = h(g, p, l);
          m ?? (E || O) ? c(S, x) : f($, (0, t._)`[${x}]`);
        }
        e.reportError = s;
        function o(g, p = e.keywordError, l) {
          const { it: m } = g,
            { gen: $, compositeRule: S, allErrors: E } = m,
            O = h(g, p, l);
          c($, O), S || E || f(m, n.default.vErrors);
        }
        e.reportExtraError = o;
        function i(g, p) {
          g.assign(n.default.errors, p),
            g.if((0, t._)`${n.default.vErrors} !== null`, () =>
              g.if(
                p,
                () => g.assign((0, t._)`${n.default.vErrors}.length`, p),
                () => g.assign(n.default.vErrors, null)
              )
            );
        }
        e.resetErrorsCount = i;
        function a({
          gen: g,
          keyword: p,
          schemaValue: l,
          data: m,
          errsCount: $,
          it: S,
        }) {
          if ($ === void 0) throw new Error("ajv implementation error");
          const E = g.name("err");
          g.forRange("i", $, n.default.errors, (O) => {
            g.const(E, (0, t._)`${n.default.vErrors}[${O}]`),
              g.if((0, t._)`${E}.instancePath === undefined`, () =>
                g.assign(
                  (0, t._)`${E}.instancePath`,
                  (0, t.strConcat)(n.default.instancePath, S.errorPath)
                )
              ),
              g.assign(
                (0, t._)`${E}.schemaPath`,
                (0, t.str)`${S.errSchemaPath}/${p}`
              ),
              S.opts.verbose &&
                (g.assign((0, t._)`${E}.schema`, l),
                g.assign((0, t._)`${E}.data`, m));
          });
        }
        e.extendErrors = a;
        function c(g, p) {
          const l = g.const("err", p);
          g.if(
            (0, t._)`${n.default.vErrors} === null`,
            () => g.assign(n.default.vErrors, (0, t._)`[${l}]`),
            (0, t._)`${n.default.vErrors}.push(${l})`
          ),
            g.code((0, t._)`${n.default.errors}++`);
        }
        function f(g, p) {
          const { gen: l, validateName: m, schemaEnv: $ } = g;
          $.$async
            ? l.throw((0, t._)`new ${g.ValidationError}(${p})`)
            : (l.assign((0, t._)`${m}.errors`, p), l.return(!1));
        }
        const u = {
          keyword: new t.Name("keyword"),
          schemaPath: new t.Name("schemaPath"),
          params: new t.Name("params"),
          propertyName: new t.Name("propertyName"),
          message: new t.Name("message"),
          schema: new t.Name("schema"),
          parentSchema: new t.Name("parentSchema"),
        };
        function h(g, p, l) {
          const { createErrors: m } = g.it;
          return m === !1 ? (0, t._)`{}` : v(g, p, l);
        }
        function v(g, p, l = {}) {
          const { gen: m, it: $ } = g,
            S = [w($, l), P(g, l)];
          return b(g, p, S), m.object(...S);
        }
        function w({ errorPath: g }, { instancePath: p }) {
          const l = p
            ? (0, t.str)`${g}${(0, r.getErrorPath)(p, r.Type.Str)}`
            : g;
          return [
            n.default.instancePath,
            (0, t.strConcat)(n.default.instancePath, l),
          ];
        }
        function P(
          { keyword: g, it: { errSchemaPath: p } },
          { schemaPath: l, parentSchema: m }
        ) {
          let $ = m ? p : (0, t.str)`${p}/${g}`;
          return (
            l && ($ = (0, t.str)`${$}${(0, r.getErrorPath)(l, r.Type.Str)}`),
            [u.schemaPath, $]
          );
        }
        function b(g, { params: p, message: l }, m) {
          const { keyword: $, data: S, schemaValue: E, it: O } = g,
            { opts: x, propertyName: F, topSchemaRef: X, schemaPath: Y } = O;
          m.push(
            [u.keyword, $],
            [u.params, typeof p == "function" ? p(g) : p || (0, t._)`{}`]
          ),
            x.messages &&
              m.push([u.message, typeof l == "function" ? l(g) : l]),
            x.verbose &&
              m.push(
                [u.schema, E],
                [u.parentSchema, (0, t._)`${X}${Y}`],
                [n.default.data, S]
              ),
            F && m.push([u.propertyName, F]);
        }
      })(vs)),
    vs
  );
}
var yi;
function Yd() {
  if (yi) return Dt;
  (yi = 1),
    Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.boolOrEmptySchema = Dt.topBoolOrEmptySchema = void 0);
  const e = jr(),
    t = ue(),
    r = St(),
    n = { message: "boolean schema is false" };
  function s(a) {
    const { gen: c, schema: f, validateName: u } = a;
    f === !1
      ? i(a, !1)
      : typeof f == "object" && f.$async === !0
      ? c.return(r.default.data)
      : (c.assign((0, t._)`${u}.errors`, null), c.return(!0));
  }
  Dt.topBoolOrEmptySchema = s;
  function o(a, c) {
    const { gen: f, schema: u } = a;
    u === !1 ? (f.var(c, !1), i(a)) : f.var(c, !0);
  }
  Dt.boolOrEmptySchema = o;
  function i(a, c) {
    const { gen: f, data: u } = a,
      h = {
        gen: f,
        keyword: "false schema",
        data: u,
        schema: !1,
        schemaCode: !1,
        schemaValue: !1,
        params: {},
        it: a,
      };
    (0, e.reportError)(h, n, void 0, c);
  }
  return Dt;
}
var Oe = {},
  Ut = {},
  _i;
function tc() {
  if (_i) return Ut;
  (_i = 1),
    Object.defineProperty(Ut, "__esModule", { value: !0 }),
    (Ut.getRules = Ut.isJSONType = void 0);
  const e = [
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "object",
      "array",
    ],
    t = new Set(e);
  function r(s) {
    return typeof s == "string" && t.has(s);
  }
  Ut.isJSONType = r;
  function n() {
    const s = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] },
    };
    return {
      types: { ...s, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, s.number, s.string, s.array, s.object],
      post: { rules: [] },
      all: {},
      keywords: {},
    };
  }
  return (Ut.getRules = n), Ut;
}
var mt = {},
  vi;
function rc() {
  if (vi) return mt;
  (vi = 1),
    Object.defineProperty(mt, "__esModule", { value: !0 }),
    (mt.shouldUseRule = mt.shouldUseGroup = mt.schemaHasRulesForType = void 0);
  function e({ schema: n, self: s }, o) {
    const i = s.RULES.types[o];
    return i && i !== !0 && t(n, i);
  }
  mt.schemaHasRulesForType = e;
  function t(n, s) {
    return s.rules.some((o) => r(n, o));
  }
  mt.shouldUseGroup = t;
  function r(n, s) {
    var o;
    return (
      n[s.keyword] !== void 0 ||
      ((o = s.definition.implements) === null || o === void 0
        ? void 0
        : o.some((i) => n[i] !== void 0))
    );
  }
  return (mt.shouldUseRule = r), mt;
}
var $i;
function Un() {
  if ($i) return Oe;
  ($i = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe.reportTypeError =
      Oe.checkDataTypes =
      Oe.checkDataType =
      Oe.coerceAndCheckDataType =
      Oe.getJSONTypes =
      Oe.getSchemaTypes =
      Oe.DataType =
        void 0);
  const e = tc(),
    t = rc(),
    r = jr(),
    n = ue(),
    s = he();
  var o;
  (function (l) {
    (l[(l.Correct = 0)] = "Correct"), (l[(l.Wrong = 1)] = "Wrong");
  })(o || (Oe.DataType = o = {}));
  function i(l) {
    const m = a(l.type);
    if (m.includes("null")) {
      if (l.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && l.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      l.nullable === !0 && m.push("null");
    }
    return m;
  }
  Oe.getSchemaTypes = i;
  function a(l) {
    const m = Array.isArray(l) ? l : l ? [l] : [];
    if (m.every(e.isJSONType)) return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  Oe.getJSONTypes = a;
  function c(l, m) {
    const { gen: $, data: S, opts: E } = l,
      O = u(m, E.coerceTypes),
      x =
        m.length > 0 &&
        !(
          O.length === 0 &&
          m.length === 1 &&
          (0, t.schemaHasRulesForType)(l, m[0])
        );
    if (x) {
      const F = P(m, S, E.strictNumbers, o.Wrong);
      $.if(F, () => {
        O.length ? h(l, m, O) : g(l);
      });
    }
    return x;
  }
  Oe.coerceAndCheckDataType = c;
  const f = new Set(["string", "number", "integer", "boolean", "null"]);
  function u(l, m) {
    return m
      ? l.filter(($) => f.has($) || (m === "array" && $ === "array"))
      : [];
  }
  function h(l, m, $) {
    const { gen: S, data: E, opts: O } = l,
      x = S.let("dataType", (0, n._)`typeof ${E}`),
      F = S.let("coerced", (0, n._)`undefined`);
    O.coerceTypes === "array" &&
      S.if(
        (0, n._)`${x} == 'object' && Array.isArray(${E}) && ${E}.length == 1`,
        () =>
          S.assign(E, (0, n._)`${E}[0]`)
            .assign(x, (0, n._)`typeof ${E}`)
            .if(P(m, E, O.strictNumbers), () => S.assign(F, E))
      ),
      S.if((0, n._)`${F} !== undefined`);
    for (const Y of $)
      (f.has(Y) || (Y === "array" && O.coerceTypes === "array")) && X(Y);
    S.else(),
      g(l),
      S.endIf(),
      S.if((0, n._)`${F} !== undefined`, () => {
        S.assign(E, F), v(l, F);
      });
    function X(Y) {
      switch (Y) {
        case "string":
          S.elseIf((0, n._)`${x} == "number" || ${x} == "boolean"`)
            .assign(F, (0, n._)`"" + ${E}`)
            .elseIf((0, n._)`${E} === null`)
            .assign(F, (0, n._)`""`);
          return;
        case "number":
          S.elseIf(
            (0, n._)`${x} == "boolean" || ${E} === null
              || (${x} == "string" && ${E} && ${E} == +${E})`
          ).assign(F, (0, n._)`+${E}`);
          return;
        case "integer":
          S.elseIf(
            (0, n._)`${x} === "boolean" || ${E} === null
              || (${x} === "string" && ${E} && ${E} == +${E} && !(${E} % 1))`
          ).assign(F, (0, n._)`+${E}`);
          return;
        case "boolean":
          S.elseIf((0, n._)`${E} === "false" || ${E} === 0 || ${E} === null`)
            .assign(F, !1)
            .elseIf((0, n._)`${E} === "true" || ${E} === 1`)
            .assign(F, !0);
          return;
        case "null":
          S.elseIf((0, n._)`${E} === "" || ${E} === 0 || ${E} === false`),
            S.assign(F, null);
          return;
        case "array":
          S.elseIf(
            (0, n._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${E} === null`
          ).assign(F, (0, n._)`[${E}]`);
      }
    }
  }
  function v({ gen: l, parentData: m, parentDataProperty: $ }, S) {
    l.if((0, n._)`${m} !== undefined`, () => l.assign((0, n._)`${m}[${$}]`, S));
  }
  function w(l, m, $, S = o.Correct) {
    const E = S === o.Correct ? n.operators.EQ : n.operators.NEQ;
    let O;
    switch (l) {
      case "null":
        return (0, n._)`${m} ${E} null`;
      case "array":
        O = (0, n._)`Array.isArray(${m})`;
        break;
      case "object":
        O = (0, n._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        O = x((0, n._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        O = x();
        break;
      default:
        return (0, n._)`typeof ${m} ${E} ${l}`;
    }
    return S === o.Correct ? O : (0, n.not)(O);
    function x(F = n.nil) {
      return (0, n.and)(
        (0, n._)`typeof ${m} == "number"`,
        F,
        $ ? (0, n._)`isFinite(${m})` : n.nil
      );
    }
  }
  Oe.checkDataType = w;
  function P(l, m, $, S) {
    if (l.length === 1) return w(l[0], m, $, S);
    let E;
    const O = (0, s.toHash)(l);
    if (O.array && O.object) {
      const x = (0, n._)`typeof ${m} != "object"`;
      (E = O.null ? x : (0, n._)`!${m} || ${x}`),
        delete O.null,
        delete O.array,
        delete O.object;
    } else E = n.nil;
    O.number && delete O.integer;
    for (const x in O) E = (0, n.and)(E, w(x, m, $, S));
    return E;
  }
  Oe.checkDataTypes = P;
  const b = {
    message: ({ schema: l }) => `must be ${l}`,
    params: ({ schema: l, schemaValue: m }) =>
      typeof l == "string" ? (0, n._)`{type: ${l}}` : (0, n._)`{type: ${m}}`,
  };
  function g(l) {
    const m = p(l);
    (0, r.reportError)(m, b);
  }
  Oe.reportTypeError = g;
  function p(l) {
    const { gen: m, data: $, schema: S } = l,
      E = (0, s.schemaRefOrVal)(l, S, "type");
    return {
      gen: m,
      keyword: "type",
      data: $,
      schema: S.type,
      schemaCode: E,
      schemaValue: E,
      parentSchema: S,
      params: {},
      it: l,
    };
  }
  return Oe;
}
var ur = {},
  wi;
function Qd() {
  if (wi) return ur;
  (wi = 1),
    Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.assignDefaults = void 0);
  const e = ue(),
    t = he();
  function r(s, o) {
    const { properties: i, items: a } = s.schema;
    if (o === "object" && i) for (const c in i) n(s, c, i[c].default);
    else
      o === "array" &&
        Array.isArray(a) &&
        a.forEach((c, f) => n(s, f, c.default));
  }
  ur.assignDefaults = r;
  function n(s, o, i) {
    const { gen: a, compositeRule: c, data: f, opts: u } = s;
    if (i === void 0) return;
    const h = (0, e._)`${f}${(0, e.getProperty)(o)}`;
    if (c) {
      (0, t.checkStrictMode)(s, `default is ignored for: ${h}`);
      return;
    }
    let v = (0, e._)`${h} === undefined`;
    u.useDefaults === "empty" &&
      (v = (0, e._)`${v} || ${h} === null || ${h} === ""`),
      a.if(v, (0, e._)`${h} = ${(0, e.stringify)(i)}`);
  }
  return ur;
}
var Je = {},
  _e = {},
  bi;
function tt() {
  if (bi) return _e;
  (bi = 1),
    Object.defineProperty(_e, "__esModule", { value: !0 }),
    (_e.validateUnion =
      _e.validateArray =
      _e.usePattern =
      _e.callValidateCode =
      _e.schemaProperties =
      _e.allSchemaProperties =
      _e.noPropertyInData =
      _e.propertyInData =
      _e.isOwnProperty =
      _e.hasPropFunc =
      _e.reportMissingProp =
      _e.checkMissingProp =
      _e.checkReportMissingProp =
        void 0);
  const e = ue(),
    t = he(),
    r = St(),
    n = he();
  function s(l, m) {
    const { gen: $, data: S, it: E } = l;
    $.if(u($, S, m, E.opts.ownProperties), () => {
      l.setParams({ missingProperty: (0, e._)`${m}` }, !0), l.error();
    });
  }
  _e.checkReportMissingProp = s;
  function o({ gen: l, data: m, it: { opts: $ } }, S, E) {
    return (0, e.or)(
      ...S.map((O) =>
        (0, e.and)(u(l, m, O, $.ownProperties), (0, e._)`${E} = ${O}`)
      )
    );
  }
  _e.checkMissingProp = o;
  function i(l, m) {
    l.setParams({ missingProperty: m }, !0), l.error();
  }
  _e.reportMissingProp = i;
  function a(l) {
    return l.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`,
    });
  }
  _e.hasPropFunc = a;
  function c(l, m, $) {
    return (0, e._)`${a(l)}.call(${m}, ${$})`;
  }
  _e.isOwnProperty = c;
  function f(l, m, $, S) {
    const E = (0, e._)`${m}${(0, e.getProperty)($)} !== undefined`;
    return S ? (0, e._)`${E} && ${c(l, m, $)}` : E;
  }
  _e.propertyInData = f;
  function u(l, m, $, S) {
    const E = (0, e._)`${m}${(0, e.getProperty)($)} === undefined`;
    return S ? (0, e.or)(E, (0, e.not)(c(l, m, $))) : E;
  }
  _e.noPropertyInData = u;
  function h(l) {
    return l ? Object.keys(l).filter((m) => m !== "__proto__") : [];
  }
  _e.allSchemaProperties = h;
  function v(l, m) {
    return h(m).filter(($) => !(0, t.alwaysValidSchema)(l, m[$]));
  }
  _e.schemaProperties = v;
  function w(
    {
      schemaCode: l,
      data: m,
      it: { gen: $, topSchemaRef: S, schemaPath: E, errorPath: O },
      it: x,
    },
    F,
    X,
    Y
  ) {
    const re = Y ? (0, e._)`${l}, ${m}, ${S}${E}` : m,
      Q = [
        [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, O)],
        [r.default.parentData, x.parentData],
        [r.default.parentDataProperty, x.parentDataProperty],
        [r.default.rootData, r.default.rootData],
      ];
    x.opts.dynamicRef &&
      Q.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const ie = (0, e._)`${re}, ${$.object(...Q)}`;
    return X !== e.nil
      ? (0, e._)`${F}.call(${X}, ${ie})`
      : (0, e._)`${F}(${ie})`;
  }
  _e.callValidateCode = w;
  const P = (0, e._)`new RegExp`;
  function b({ gen: l, it: { opts: m } }, $) {
    const S = m.unicodeRegExp ? "u" : "",
      { regExp: E } = m.code,
      O = E($, S);
    return l.scopeValue("pattern", {
      key: O.toString(),
      ref: O,
      code: (0, e._)`${
        E.code === "new RegExp" ? P : (0, n.useFunc)(l, E)
      }(${$}, ${S})`,
    });
  }
  _e.usePattern = b;
  function g(l) {
    const { gen: m, data: $, keyword: S, it: E } = l,
      O = m.name("valid");
    if (E.allErrors) {
      const F = m.let("valid", !0);
      return x(() => m.assign(F, !1)), F;
    }
    return m.var(O, !0), x(() => m.break()), O;
    function x(F) {
      const X = m.const("len", (0, e._)`${$}.length`);
      m.forRange("i", 0, X, (Y) => {
        l.subschema({ keyword: S, dataProp: Y, dataPropType: t.Type.Num }, O),
          m.if((0, e.not)(O), F);
      });
    }
  }
  _e.validateArray = g;
  function p(l) {
    const { gen: m, schema: $, keyword: S, it: E } = l;
    if (!Array.isArray($)) throw new Error("ajv implementation error");
    if ($.some((X) => (0, t.alwaysValidSchema)(E, X)) && !E.opts.unevaluated)
      return;
    const x = m.let("valid", !1),
      F = m.name("_valid");
    m.block(() =>
      $.forEach((X, Y) => {
        const re = l.subschema(
          { keyword: S, schemaProp: Y, compositeRule: !0 },
          F
        );
        m.assign(x, (0, e._)`${x} || ${F}`),
          l.mergeValidEvaluated(re, F) || m.if((0, e.not)(x));
      })
    ),
      l.result(
        x,
        () => l.reset(),
        () => l.error(!0)
      );
  }
  return (_e.validateUnion = p), _e;
}
var Ei;
function Zd() {
  if (Ei) return Je;
  (Ei = 1),
    Object.defineProperty(Je, "__esModule", { value: !0 }),
    (Je.validateKeywordUsage =
      Je.validSchemaType =
      Je.funcKeywordCode =
      Je.macroKeywordCode =
        void 0);
  const e = ue(),
    t = St(),
    r = tt(),
    n = jr();
  function s(v, w) {
    const { gen: P, keyword: b, schema: g, parentSchema: p, it: l } = v,
      m = w.macro.call(l.self, g, p, l),
      $ = f(P, b, m);
    l.opts.validateSchema !== !1 && l.self.validateSchema(m, !0);
    const S = P.name("valid");
    v.subschema(
      {
        schema: m,
        schemaPath: e.nil,
        errSchemaPath: `${l.errSchemaPath}/${b}`,
        topSchemaRef: $,
        compositeRule: !0,
      },
      S
    ),
      v.pass(S, () => v.error(!0));
  }
  Je.macroKeywordCode = s;
  function o(v, w) {
    var P;
    const {
      gen: b,
      keyword: g,
      schema: p,
      parentSchema: l,
      $data: m,
      it: $,
    } = v;
    c($, w);
    const S = !m && w.compile ? w.compile.call($.self, p, l, $) : w.validate,
      E = f(b, g, S),
      O = b.let("valid");
    v.block$data(O, x), v.ok((P = w.valid) !== null && P !== void 0 ? P : O);
    function x() {
      if (w.errors === !1) Y(), w.modifying && i(v), re(() => v.error());
      else {
        const Q = w.async ? F() : X();
        w.modifying && i(v), re(() => a(v, Q));
      }
    }
    function F() {
      const Q = b.let("ruleErrs", null);
      return (
        b.try(
          () => Y((0, e._)`await `),
          (ie) =>
            b.assign(O, !1).if(
              (0, e._)`${ie} instanceof ${$.ValidationError}`,
              () => b.assign(Q, (0, e._)`${ie}.errors`),
              () => b.throw(ie)
            )
        ),
        Q
      );
    }
    function X() {
      const Q = (0, e._)`${E}.errors`;
      return b.assign(Q, null), Y(e.nil), Q;
    }
    function Y(Q = w.async ? (0, e._)`await ` : e.nil) {
      const ie = $.opts.passContext ? t.default.this : t.default.self,
        ve = !(("compile" in w && !m) || w.schema === !1);
      b.assign(
        O,
        (0, e._)`${Q}${(0, r.callValidateCode)(v, E, ie, ve)}`,
        w.modifying
      );
    }
    function re(Q) {
      var ie;
      b.if((0, e.not)((ie = w.valid) !== null && ie !== void 0 ? ie : O), Q);
    }
  }
  Je.funcKeywordCode = o;
  function i(v) {
    const { gen: w, data: P, it: b } = v;
    w.if(b.parentData, () =>
      w.assign(P, (0, e._)`${b.parentData}[${b.parentDataProperty}]`)
    );
  }
  function a(v, w) {
    const { gen: P } = v;
    P.if(
      (0, e._)`Array.isArray(${w})`,
      () => {
        P.assign(
          t.default.vErrors,
          (0,
          e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`
        ).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`),
          (0, n.extendErrors)(v);
      },
      () => v.error()
    );
  }
  function c({ schemaEnv: v }, w) {
    if (w.async && !v.$async) throw new Error("async keyword in sync schema");
  }
  function f(v, w, P) {
    if (P === void 0) throw new Error(`keyword "${w}" failed to compile`);
    return v.scopeValue(
      "keyword",
      typeof P == "function"
        ? { ref: P }
        : { ref: P, code: (0, e.stringify)(P) }
    );
  }
  function u(v, w, P = !1) {
    return (
      !w.length ||
      w.some((b) =>
        b === "array"
          ? Array.isArray(v)
          : b === "object"
          ? v && typeof v == "object" && !Array.isArray(v)
          : typeof v == b || (P && typeof v > "u")
      )
    );
  }
  Je.validSchemaType = u;
  function h({ schema: v, opts: w, self: P, errSchemaPath: b }, g, p) {
    if (Array.isArray(g.keyword) ? !g.keyword.includes(p) : g.keyword !== p)
      throw new Error("ajv implementation error");
    const l = g.dependencies;
    if (l != null && l.some((m) => !Object.prototype.hasOwnProperty.call(v, m)))
      throw new Error(
        `parent schema must have dependencies of ${p}: ${l.join(",")}`
      );
    if (g.validateSchema && !g.validateSchema(v[p])) {
      const $ =
        `keyword "${p}" value is invalid at path "${b}": ` +
        P.errorsText(g.validateSchema.errors);
      if (w.validateSchema === "log") P.logger.error($);
      else throw new Error($);
    }
  }
  return (Je.validateKeywordUsage = h), Je;
}
var gt = {},
  Si;
function eh() {
  if (Si) return gt;
  (Si = 1),
    Object.defineProperty(gt, "__esModule", { value: !0 }),
    (gt.extendSubschemaMode =
      gt.extendSubschemaData =
      gt.getSubschema =
        void 0);
  const e = ue(),
    t = he();
  function r(
    o,
    {
      keyword: i,
      schemaProp: a,
      schema: c,
      schemaPath: f,
      errSchemaPath: u,
      topSchemaRef: h,
    }
  ) {
    if (i !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const v = o.schema[i];
      return a === void 0
        ? {
            schema: v,
            schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(i)}`,
            errSchemaPath: `${o.errSchemaPath}/${i}`,
          }
        : {
            schema: v[a],
            schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(i)}${(0,
            e.getProperty)(a)}`,
            errSchemaPath: `${o.errSchemaPath}/${i}/${(0, t.escapeFragment)(
              a
            )}`,
          };
    }
    if (c !== void 0) {
      if (f === void 0 || u === void 0 || h === void 0)
        throw new Error(
          '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"'
        );
      return { schema: c, schemaPath: f, topSchemaRef: h, errSchemaPath: u };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  gt.getSubschema = r;
  function n(
    o,
    i,
    { dataProp: a, dataPropType: c, data: f, dataTypes: u, propertyName: h }
  ) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: v } = i;
    if (a !== void 0) {
      const { errorPath: P, dataPathArr: b, opts: g } = i,
        p = v.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      w(p),
        (o.errorPath = (0, e.str)`${P}${(0, t.getErrorPath)(
          a,
          c,
          g.jsPropertySyntax
        )}`),
        (o.parentDataProperty = (0, e._)`${a}`),
        (o.dataPathArr = [...b, o.parentDataProperty]);
    }
    if (f !== void 0) {
      const P = f instanceof e.Name ? f : v.let("data", f, !0);
      w(P), h !== void 0 && (o.propertyName = h);
    }
    u && (o.dataTypes = u);
    function w(P) {
      (o.data = P),
        (o.dataLevel = i.dataLevel + 1),
        (o.dataTypes = []),
        (i.definedProperties = new Set()),
        (o.parentData = i.data),
        (o.dataNames = [...i.dataNames, P]);
    }
  }
  gt.extendSubschemaData = n;
  function s(
    o,
    {
      jtdDiscriminator: i,
      jtdMetadata: a,
      compositeRule: c,
      createErrors: f,
      allErrors: u,
    }
  ) {
    c !== void 0 && (o.compositeRule = c),
      f !== void 0 && (o.createErrors = f),
      u !== void 0 && (o.allErrors = u),
      (o.jtdDiscriminator = i),
      (o.jtdMetadata = a);
  }
  return (gt.extendSubschemaMode = s), gt;
}
var Me = {},
  Es,
  Pi;
function nc() {
  return (
    Pi ||
      ((Pi = 1),
      (Es = function e(t, r) {
        if (t === r) return !0;
        if (t && r && typeof t == "object" && typeof r == "object") {
          if (t.constructor !== r.constructor) return !1;
          var n, s, o;
          if (Array.isArray(t)) {
            if (((n = t.length), n != r.length)) return !1;
            for (s = n; s-- !== 0; ) if (!e(t[s], r[s])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if (
            ((o = Object.keys(t)), (n = o.length), n !== Object.keys(r).length)
          )
            return !1;
          for (s = n; s-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(r, o[s])) return !1;
          for (s = n; s-- !== 0; ) {
            var i = o[s];
            if (!e(t[i], r[i])) return !1;
          }
          return !0;
        }
        return t !== t && r !== r;
      })),
    Es
  );
}
var Ss = { exports: {} },
  Ri;
function th() {
  if (Ri) return Ss.exports;
  Ri = 1;
  var e = (Ss.exports = function (n, s, o) {
    typeof s == "function" && ((o = s), (s = {})), (o = s.cb || o);
    var i = typeof o == "function" ? o : o.pre || function () {},
      a = o.post || function () {};
    t(s, i, a, n, "", n);
  });
  (e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0,
  }),
    (e.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }),
    (e.propsKeywords = {
      $defs: !0,
      definitions: !0,
      properties: !0,
      patternProperties: !0,
      dependencies: !0,
    }),
    (e.skipKeywords = {
      default: !0,
      enum: !0,
      const: !0,
      required: !0,
      maximum: !0,
      minimum: !0,
      exclusiveMaximum: !0,
      exclusiveMinimum: !0,
      multipleOf: !0,
      maxLength: !0,
      minLength: !0,
      pattern: !0,
      format: !0,
      maxItems: !0,
      minItems: !0,
      uniqueItems: !0,
      maxProperties: !0,
      minProperties: !0,
    });
  function t(n, s, o, i, a, c, f, u, h, v) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      s(i, a, c, f, u, h, v);
      for (var w in i) {
        var P = i[w];
        if (Array.isArray(P)) {
          if (w in e.arrayKeywords)
            for (var b = 0; b < P.length; b++)
              t(n, s, o, P[b], a + "/" + w + "/" + b, c, a, w, i, b);
        } else if (w in e.propsKeywords) {
          if (P && typeof P == "object")
            for (var g in P)
              t(n, s, o, P[g], a + "/" + w + "/" + r(g), c, a, w, i, g);
        } else
          (w in e.keywords || (n.allKeys && !(w in e.skipKeywords))) &&
            t(n, s, o, P, a + "/" + w, c, a, w, i);
      }
      o(i, a, c, f, u, h, v);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Ss.exports;
}
var Oi;
function rs() {
  if (Oi) return Me;
  (Oi = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.getSchemaRefs =
      Me.resolveUrl =
      Me.normalizeId =
      Me._getFullPath =
      Me.getFullPath =
      Me.inlineRef =
        void 0);
  const e = he(),
    t = nc(),
    r = th(),
    n = new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const",
    ]);
  function s(b, g = !0) {
    return typeof b == "boolean" ? !0 : g === !0 ? !i(b) : g ? a(b) <= g : !1;
  }
  Me.inlineRef = s;
  const o = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor",
  ]);
  function i(b) {
    for (const g in b) {
      if (o.has(g)) return !0;
      const p = b[g];
      if ((Array.isArray(p) && p.some(i)) || (typeof p == "object" && i(p)))
        return !0;
    }
    return !1;
  }
  function a(b) {
    let g = 0;
    for (const p in b) {
      if (p === "$ref") return 1 / 0;
      if (
        (g++,
        !n.has(p) &&
          (typeof b[p] == "object" && (0, e.eachItem)(b[p], (l) => (g += a(l))),
          g === 1 / 0))
      )
        return 1 / 0;
    }
    return g;
  }
  function c(b, g = "", p) {
    p !== !1 && (g = h(g));
    const l = b.parse(g);
    return f(b, l);
  }
  Me.getFullPath = c;
  function f(b, g) {
    return b.serialize(g).split("#")[0] + "#";
  }
  Me._getFullPath = f;
  const u = /#\/?$/;
  function h(b) {
    return b ? b.replace(u, "") : "";
  }
  Me.normalizeId = h;
  function v(b, g, p) {
    return (p = h(p)), b.resolve(g, p);
  }
  Me.resolveUrl = v;
  const w = /^[a-z_][-a-z0-9._]*$/i;
  function P(b, g) {
    if (typeof b == "boolean") return {};
    const { schemaId: p, uriResolver: l } = this.opts,
      m = h(b[p] || g),
      $ = { "": m },
      S = c(l, m, !1),
      E = {},
      O = new Set();
    return (
      r(b, { allKeys: !0 }, (X, Y, re, Q) => {
        if (Q === void 0) return;
        const ie = S + Y;
        let ve = $[Q];
        typeof X[p] == "string" && (ve = fe.call(this, X[p])),
          ae.call(this, X.$anchor),
          ae.call(this, X.$dynamicAnchor),
          ($[Y] = ve);
        function fe(Z) {
          const Se = this.opts.uriResolver.resolve;
          if (((Z = h(ve ? Se(ve, Z) : Z)), O.has(Z))) throw F(Z);
          O.add(Z);
          let H = this.refs[Z];
          return (
            typeof H == "string" && (H = this.refs[H]),
            typeof H == "object"
              ? x(X, H.schema, Z)
              : Z !== h(ie) &&
                (Z[0] === "#"
                  ? (x(X, E[Z], Z), (E[Z] = X))
                  : (this.refs[Z] = ie)),
            Z
          );
        }
        function ae(Z) {
          if (typeof Z == "string") {
            if (!w.test(Z)) throw new Error(`invalid anchor "${Z}"`);
            fe.call(this, `#${Z}`);
          }
        }
      }),
      E
    );
    function x(X, Y, re) {
      if (Y !== void 0 && !t(X, Y)) throw F(re);
    }
    function F(X) {
      return new Error(`reference "${X}" resolves to more than one schema`);
    }
  }
  return (Me.getSchemaRefs = P), Me;
}
var Ti;
function Mr() {
  if (Ti) return pt;
  (Ti = 1),
    Object.defineProperty(pt, "__esModule", { value: !0 }),
    (pt.getData = pt.KeywordCxt = pt.validateFunctionCode = void 0);
  const e = Yd(),
    t = Un(),
    r = rc(),
    n = Un(),
    s = Qd(),
    o = Zd(),
    i = eh(),
    a = ue(),
    c = St(),
    f = rs(),
    u = he(),
    h = jr();
  function v(C) {
    if (S(C) && (O(C), $(C))) {
      g(C);
      return;
    }
    w(C, () => (0, e.topBoolOrEmptySchema)(C));
  }
  pt.validateFunctionCode = v;
  function w({ gen: C, validateName: d, schema: y, schemaEnv: R, opts: k }, D) {
    k.code.es5
      ? C.func(
          d,
          (0, a._)`${c.default.data}, ${c.default.valCxt}`,
          R.$async,
          () => {
            C.code((0, a._)`"use strict"; ${l(y, k)}`), b(C, k), C.code(D);
          }
        )
      : C.func(d, (0, a._)`${c.default.data}, ${P(k)}`, R.$async, () =>
          C.code(l(y, k)).code(D)
        );
  }
  function P(C) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${
      c.default.parentDataProperty
    }, ${c.default.rootData}=${c.default.data}${
      C.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil
    }}={}`;
  }
  function b(C, d) {
    C.if(
      c.default.valCxt,
      () => {
        C.var(
          c.default.instancePath,
          (0, a._)`${c.default.valCxt}.${c.default.instancePath}`
        ),
          C.var(
            c.default.parentData,
            (0, a._)`${c.default.valCxt}.${c.default.parentData}`
          ),
          C.var(
            c.default.parentDataProperty,
            (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`
          ),
          C.var(
            c.default.rootData,
            (0, a._)`${c.default.valCxt}.${c.default.rootData}`
          ),
          d.dynamicRef &&
            C.var(
              c.default.dynamicAnchors,
              (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`
            );
      },
      () => {
        C.var(c.default.instancePath, (0, a._)`""`),
          C.var(c.default.parentData, (0, a._)`undefined`),
          C.var(c.default.parentDataProperty, (0, a._)`undefined`),
          C.var(c.default.rootData, c.default.data),
          d.dynamicRef && C.var(c.default.dynamicAnchors, (0, a._)`{}`);
      }
    );
  }
  function g(C) {
    const { schema: d, opts: y, gen: R } = C;
    w(C, () => {
      y.$comment && d.$comment && Q(C),
        X(C),
        R.let(c.default.vErrors, null),
        R.let(c.default.errors, 0),
        y.unevaluated && p(C),
        x(C),
        ie(C);
    });
  }
  function p(C) {
    const { gen: d, validateName: y } = C;
    (C.evaluated = d.const("evaluated", (0, a._)`${y}.evaluated`)),
      d.if((0, a._)`${C.evaluated}.dynamicProps`, () =>
        d.assign((0, a._)`${C.evaluated}.props`, (0, a._)`undefined`)
      ),
      d.if((0, a._)`${C.evaluated}.dynamicItems`, () =>
        d.assign((0, a._)`${C.evaluated}.items`, (0, a._)`undefined`)
      );
  }
  function l(C, d) {
    const y = typeof C == "object" && C[d.schemaId];
    return y && (d.code.source || d.code.process)
      ? (0, a._)`/*# sourceURL=${y} */`
      : a.nil;
  }
  function m(C, d) {
    if (S(C) && (O(C), $(C))) {
      E(C, d);
      return;
    }
    (0, e.boolOrEmptySchema)(C, d);
  }
  function $({ schema: C, self: d }) {
    if (typeof C == "boolean") return !C;
    for (const y in C) if (d.RULES.all[y]) return !0;
    return !1;
  }
  function S(C) {
    return typeof C.schema != "boolean";
  }
  function E(C, d) {
    const { schema: y, gen: R, opts: k } = C;
    k.$comment && y.$comment && Q(C), Y(C), re(C);
    const D = R.const("_errs", c.default.errors);
    x(C, D), R.var(d, (0, a._)`${D} === ${c.default.errors}`);
  }
  function O(C) {
    (0, u.checkUnknownRules)(C), F(C);
  }
  function x(C, d) {
    if (C.opts.jtd) return fe(C, [], !1, d);
    const y = (0, t.getSchemaTypes)(C.schema),
      R = (0, t.coerceAndCheckDataType)(C, y);
    fe(C, y, !R, d);
  }
  function F(C) {
    const { schema: d, errSchemaPath: y, opts: R, self: k } = C;
    d.$ref &&
      R.ignoreKeywordsWithRef &&
      (0, u.schemaHasRulesButRef)(d, k.RULES) &&
      k.logger.warn(`$ref: keywords ignored in schema at path "${y}"`);
  }
  function X(C) {
    const { schema: d, opts: y } = C;
    d.default !== void 0 &&
      y.useDefaults &&
      y.strictSchema &&
      (0, u.checkStrictMode)(C, "default is ignored in the schema root");
  }
  function Y(C) {
    const d = C.schema[C.opts.schemaId];
    d && (C.baseId = (0, f.resolveUrl)(C.opts.uriResolver, C.baseId, d));
  }
  function re(C) {
    if (C.schema.$async && !C.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function Q({ gen: C, schemaEnv: d, schema: y, errSchemaPath: R, opts: k }) {
    const D = y.$comment;
    if (k.$comment === !0) C.code((0, a._)`${c.default.self}.logger.log(${D})`);
    else if (typeof k.$comment == "function") {
      const L = (0, a.str)`${R}/$comment`,
        B = C.scopeValue("root", { ref: d.root });
      C.code(
        (0, a._)`${c.default.self}.opts.$comment(${D}, ${L}, ${B}.schema)`
      );
    }
  }
  function ie(C) {
    const {
      gen: d,
      schemaEnv: y,
      validateName: R,
      ValidationError: k,
      opts: D,
    } = C;
    y.$async
      ? d.if(
          (0, a._)`${c.default.errors} === 0`,
          () => d.return(c.default.data),
          () => d.throw((0, a._)`new ${k}(${c.default.vErrors})`)
        )
      : (d.assign((0, a._)`${R}.errors`, c.default.vErrors),
        D.unevaluated && ve(C),
        d.return((0, a._)`${c.default.errors} === 0`));
  }
  function ve({ gen: C, evaluated: d, props: y, items: R }) {
    y instanceof a.Name && C.assign((0, a._)`${d}.props`, y),
      R instanceof a.Name && C.assign((0, a._)`${d}.items`, R);
  }
  function fe(C, d, y, R) {
    const { gen: k, schema: D, data: L, allErrors: B, opts: G, self: z } = C,
      { RULES: V } = z;
    if (
      D.$ref &&
      (G.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(D, V))
    ) {
      k.block(() => I(C, "$ref", V.all.$ref.definition));
      return;
    }
    G.jtd || Z(C, d),
      k.block(() => {
        for (const W of V.rules) ee(W);
        ee(V.post);
      });
    function ee(W) {
      (0, r.shouldUseGroup)(D, W) &&
        (W.type
          ? (k.if((0, n.checkDataType)(W.type, L, G.strictNumbers)),
            ae(C, W),
            d.length === 1 &&
              d[0] === W.type &&
              y &&
              (k.else(), (0, n.reportTypeError)(C)),
            k.endIf())
          : ae(C, W),
        B || k.if((0, a._)`${c.default.errors} === ${R || 0}`));
    }
  }
  function ae(C, d) {
    const {
      gen: y,
      schema: R,
      opts: { useDefaults: k },
    } = C;
    k && (0, s.assignDefaults)(C, d.type),
      y.block(() => {
        for (const D of d.rules)
          (0, r.shouldUseRule)(R, D) && I(C, D.keyword, D.definition, d.type);
      });
  }
  function Z(C, d) {
    C.schemaEnv.meta ||
      !C.opts.strictTypes ||
      (Se(C, d), C.opts.allowUnionTypes || H(C, d), A(C, C.dataTypes));
  }
  function Se(C, d) {
    if (d.length) {
      if (!C.dataTypes.length) {
        C.dataTypes = d;
        return;
      }
      d.forEach((y) => {
        N(C.dataTypes, y) ||
          T(C, `type "${y}" not allowed by context "${C.dataTypes.join(",")}"`);
      }),
        _(C, d);
    }
  }
  function H(C, d) {
    d.length > 1 &&
      !(d.length === 2 && d.includes("null")) &&
      T(C, "use allowUnionTypes to allow union type keyword");
  }
  function A(C, d) {
    const y = C.self.RULES.all;
    for (const R in y) {
      const k = y[R];
      if (typeof k == "object" && (0, r.shouldUseRule)(C.schema, k)) {
        const { type: D } = k.definition;
        D.length &&
          !D.some((L) => j(d, L)) &&
          T(C, `missing type "${D.join(",")}" for keyword "${R}"`);
      }
    }
  }
  function j(C, d) {
    return C.includes(d) || (d === "number" && C.includes("integer"));
  }
  function N(C, d) {
    return C.includes(d) || (d === "integer" && C.includes("number"));
  }
  function _(C, d) {
    const y = [];
    for (const R of C.dataTypes)
      N(d, R)
        ? y.push(R)
        : d.includes("integer") && R === "number" && y.push("integer");
    C.dataTypes = y;
  }
  function T(C, d) {
    const y = C.schemaEnv.baseId + C.errSchemaPath;
    (d += ` at "${y}" (strictTypes)`),
      (0, u.checkStrictMode)(C, d, C.opts.strictTypes);
  }
  class q {
    constructor(d, y, R) {
      if (
        ((0, o.validateKeywordUsage)(d, y, R),
        (this.gen = d.gen),
        (this.allErrors = d.allErrors),
        (this.keyword = R),
        (this.data = d.data),
        (this.schema = d.schema[R]),
        (this.$data =
          y.$data && d.opts.$data && this.schema && this.schema.$data),
        (this.schemaValue = (0, u.schemaRefOrVal)(
          d,
          this.schema,
          R,
          this.$data
        )),
        (this.schemaType = y.schemaType),
        (this.parentSchema = d.schema),
        (this.params = {}),
        (this.it = d),
        (this.def = y),
        this.$data)
      )
        this.schemaCode = d.gen.const("vSchema", K(this.$data, d));
      else if (
        ((this.schemaCode = this.schemaValue),
        !(0, o.validSchemaType)(this.schema, y.schemaType, y.allowUndefined))
      )
        throw new Error(`${R} value must be ${JSON.stringify(y.schemaType)}`);
      ("code" in y ? y.trackErrors : y.errors !== !1) &&
        (this.errsCount = d.gen.const("_errs", c.default.errors));
    }
    result(d, y, R) {
      this.failResult((0, a.not)(d), y, R);
    }
    failResult(d, y, R) {
      this.gen.if(d),
        R ? R() : this.error(),
        y
          ? (this.gen.else(), y(), this.allErrors && this.gen.endIf())
          : this.allErrors
          ? this.gen.endIf()
          : this.gen.else();
    }
    pass(d, y) {
      this.failResult((0, a.not)(d), void 0, y);
    }
    fail(d) {
      if (d === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(d),
        this.error(),
        this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(d) {
      if (!this.$data) return this.fail(d);
      const { schemaCode: y } = this;
      this.fail(
        (0, a._)`${y} !== undefined && (${(0, a.or)(this.invalid$data(), d)})`
      );
    }
    error(d, y, R) {
      if (y) {
        this.setParams(y), this._error(d, R), this.setParams({});
        return;
      }
      this._error(d, R);
    }
    _error(d, y) {
      (d ? h.reportExtraError : h.reportError)(this, this.def.error, y);
    }
    $dataError() {
      (0, h.reportError)(this, this.def.$dataError || h.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, h.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(d) {
      this.allErrors || this.gen.if(d);
    }
    setParams(d, y) {
      y ? Object.assign(this.params, d) : (this.params = d);
    }
    block$data(d, y, R = a.nil) {
      this.gen.block(() => {
        this.check$data(d, R), y();
      });
    }
    check$data(d = a.nil, y = a.nil) {
      if (!this.$data) return;
      const { gen: R, schemaCode: k, schemaType: D, def: L } = this;
      R.if((0, a.or)((0, a._)`${k} === undefined`, y)),
        d !== a.nil && R.assign(d, !0),
        (D.length || L.validateSchema) &&
          (R.elseIf(this.invalid$data()),
          this.$dataError(),
          d !== a.nil && R.assign(d, !1)),
        R.else();
    }
    invalid$data() {
      const { gen: d, schemaCode: y, schemaType: R, def: k, it: D } = this;
      return (0, a.or)(L(), B());
      function L() {
        if (R.length) {
          if (!(y instanceof a.Name))
            throw new Error("ajv implementation error");
          const G = Array.isArray(R) ? R : [R];
          return (0, a._)`${(0, n.checkDataTypes)(
            G,
            y,
            D.opts.strictNumbers,
            n.DataType.Wrong
          )}`;
        }
        return a.nil;
      }
      function B() {
        if (k.validateSchema) {
          const G = d.scopeValue("validate$data", { ref: k.validateSchema });
          return (0, a._)`!${G}(${y})`;
        }
        return a.nil;
      }
    }
    subschema(d, y) {
      const R = (0, i.getSubschema)(this.it, d);
      (0, i.extendSubschemaData)(R, this.it, d),
        (0, i.extendSubschemaMode)(R, d);
      const k = { ...this.it, ...R, items: void 0, props: void 0 };
      return m(k, y), k;
    }
    mergeEvaluated(d, y) {
      const { it: R, gen: k } = this;
      R.opts.unevaluated &&
        (R.props !== !0 &&
          d.props !== void 0 &&
          (R.props = u.mergeEvaluated.props(k, d.props, R.props, y)),
        R.items !== !0 &&
          d.items !== void 0 &&
          (R.items = u.mergeEvaluated.items(k, d.items, R.items, y)));
    }
    mergeValidEvaluated(d, y) {
      const { it: R, gen: k } = this;
      if (R.opts.unevaluated && (R.props !== !0 || R.items !== !0))
        return k.if(y, () => this.mergeEvaluated(d, a.Name)), !0;
    }
  }
  pt.KeywordCxt = q;
  function I(C, d, y, R) {
    const k = new q(C, y, d);
    "code" in y
      ? y.code(k, R)
      : k.$data && y.validate
      ? (0, o.funcKeywordCode)(k, y)
      : "macro" in y
      ? (0, o.macroKeywordCode)(k, y)
      : (y.compile || y.validate) && (0, o.funcKeywordCode)(k, y);
  }
  const M = /^\/(?:[^~]|~0|~1)*$/,
    U = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function K(C, { dataLevel: d, dataNames: y, dataPathArr: R }) {
    let k, D;
    if (C === "") return c.default.rootData;
    if (C[0] === "/") {
      if (!M.test(C)) throw new Error(`Invalid JSON-pointer: ${C}`);
      (k = C), (D = c.default.rootData);
    } else {
      const z = U.exec(C);
      if (!z) throw new Error(`Invalid JSON-pointer: ${C}`);
      const V = +z[1];
      if (((k = z[2]), k === "#")) {
        if (V >= d) throw new Error(G("property/index", V));
        return R[d - V];
      }
      if (V > d) throw new Error(G("data", V));
      if (((D = y[d - V]), !k)) return D;
    }
    let L = D;
    const B = k.split("/");
    for (const z of B)
      z &&
        ((D = (0, a._)`${D}${(0, a.getProperty)(
          (0, u.unescapeJsonPointer)(z)
        )}`),
        (L = (0, a._)`${L} && ${D}`));
    return L;
    function G(z, V) {
      return `Cannot access ${z} ${V} levels up, current level is ${d}`;
    }
  }
  return (pt.getData = K), pt;
}
var Fr = {},
  Ci;
function co() {
  if (Ci) return Fr;
  (Ci = 1), Object.defineProperty(Fr, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"),
        (this.errors = r),
        (this.ajv = this.validation = !0);
    }
  }
  return (Fr.default = e), Fr;
}
var Kr = {},
  Ni;
function ns() {
  if (Ni) return Kr;
  (Ni = 1), Object.defineProperty(Kr, "__esModule", { value: !0 });
  const e = rs();
  class t extends Error {
    constructor(n, s, o, i) {
      super(i || `can't resolve reference ${o} from id ${s}`),
        (this.missingRef = (0, e.resolveUrl)(n, s, o)),
        (this.missingSchema = (0, e.normalizeId)(
          (0, e.getFullPath)(n, this.missingRef)
        ));
    }
  }
  return (Kr.default = t), Kr;
}
var Fe = {},
  Ii;
function uo() {
  if (Ii) return Fe;
  (Ii = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.resolveSchema =
      Fe.getCompilingSchema =
      Fe.resolveRef =
      Fe.compileSchema =
      Fe.SchemaEnv =
        void 0);
  const e = ue(),
    t = co(),
    r = St(),
    n = rs(),
    s = he(),
    o = Mr();
  class i {
    constructor(p) {
      var l;
      (this.refs = {}), (this.dynamicAnchors = {});
      let m;
      typeof p.schema == "object" && (m = p.schema),
        (this.schema = p.schema),
        (this.schemaId = p.schemaId),
        (this.root = p.root || this),
        (this.baseId =
          (l = p.baseId) !== null && l !== void 0
            ? l
            : (0, n.normalizeId)(m == null ? void 0 : m[p.schemaId || "$id"])),
        (this.schemaPath = p.schemaPath),
        (this.localRefs = p.localRefs),
        (this.meta = p.meta),
        (this.$async = m == null ? void 0 : m.$async),
        (this.refs = {});
    }
  }
  Fe.SchemaEnv = i;
  function a(g) {
    const p = u.call(this, g);
    if (p) return p;
    const l = (0, n.getFullPath)(this.opts.uriResolver, g.root.baseId),
      { es5: m, lines: $ } = this.opts.code,
      { ownProperties: S } = this.opts,
      E = new e.CodeGen(this.scope, { es5: m, lines: $, ownProperties: S });
    let O;
    g.$async &&
      (O = E.scopeValue("Error", {
        ref: t.default,
        code: (0, e._)`require("ajv/dist/runtime/validation_error").default`,
      }));
    const x = E.scopeName("validate");
    g.validateName = x;
    const F = {
      gen: E,
      allErrors: this.opts.allErrors,
      data: r.default.data,
      parentData: r.default.parentData,
      parentDataProperty: r.default.parentDataProperty,
      dataNames: [r.default.data],
      dataPathArr: [e.nil],
      dataLevel: 0,
      dataTypes: [],
      definedProperties: new Set(),
      topSchemaRef: E.scopeValue(
        "schema",
        this.opts.code.source === !0
          ? { ref: g.schema, code: (0, e.stringify)(g.schema) }
          : { ref: g.schema }
      ),
      validateName: x,
      ValidationError: O,
      schema: g.schema,
      schemaEnv: g,
      rootId: l,
      baseId: g.baseId || l,
      schemaPath: e.nil,
      errSchemaPath: g.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this,
    };
    let X;
    try {
      this._compilations.add(g),
        (0, o.validateFunctionCode)(F),
        E.optimize(this.opts.code.optimize);
      const Y = E.toString();
      (X = `${E.scopeRefs(r.default.scope)}return ${Y}`),
        this.opts.code.process && (X = this.opts.code.process(X, g));
      const Q = new Function(`${r.default.self}`, `${r.default.scope}`, X)(
        this,
        this.scope.get()
      );
      if (
        (this.scope.value(x, { ref: Q }),
        (Q.errors = null),
        (Q.schema = g.schema),
        (Q.schemaEnv = g),
        g.$async && (Q.$async = !0),
        this.opts.code.source === !0 &&
          (Q.source = {
            validateName: x,
            validateCode: Y,
            scopeValues: E._values,
          }),
        this.opts.unevaluated)
      ) {
        const { props: ie, items: ve } = F;
        (Q.evaluated = {
          props: ie instanceof e.Name ? void 0 : ie,
          items: ve instanceof e.Name ? void 0 : ve,
          dynamicProps: ie instanceof e.Name,
          dynamicItems: ve instanceof e.Name,
        }),
          Q.source && (Q.source.evaluated = (0, e.stringify)(Q.evaluated));
      }
      return (g.validate = Q), g;
    } catch (Y) {
      throw (
        (delete g.validate,
        delete g.validateName,
        X && this.logger.error("Error compiling schema, function code:", X),
        Y)
      );
    } finally {
      this._compilations.delete(g);
    }
  }
  Fe.compileSchema = a;
  function c(g, p, l) {
    var m;
    l = (0, n.resolveUrl)(this.opts.uriResolver, p, l);
    const $ = g.refs[l];
    if ($) return $;
    let S = v.call(this, g, l);
    if (S === void 0) {
      const E = (m = g.localRefs) === null || m === void 0 ? void 0 : m[l],
        { schemaId: O } = this.opts;
      E && (S = new i({ schema: E, schemaId: O, root: g, baseId: p }));
    }
    if (S !== void 0) return (g.refs[l] = f.call(this, S));
  }
  Fe.resolveRef = c;
  function f(g) {
    return (0, n.inlineRef)(g.schema, this.opts.inlineRefs)
      ? g.schema
      : g.validate
      ? g
      : a.call(this, g);
  }
  function u(g) {
    for (const p of this._compilations) if (h(p, g)) return p;
  }
  Fe.getCompilingSchema = u;
  function h(g, p) {
    return g.schema === p.schema && g.root === p.root && g.baseId === p.baseId;
  }
  function v(g, p) {
    let l;
    for (; typeof (l = this.refs[p]) == "string"; ) p = l;
    return l || this.schemas[p] || w.call(this, g, p);
  }
  function w(g, p) {
    const l = this.opts.uriResolver.parse(p),
      m = (0, n._getFullPath)(this.opts.uriResolver, l);
    let $ = (0, n.getFullPath)(this.opts.uriResolver, g.baseId, void 0);
    if (Object.keys(g.schema).length > 0 && m === $) return b.call(this, l, g);
    const S = (0, n.normalizeId)(m),
      E = this.refs[S] || this.schemas[S];
    if (typeof E == "string") {
      const O = w.call(this, g, E);
      return typeof (O == null ? void 0 : O.schema) != "object"
        ? void 0
        : b.call(this, l, O);
    }
    if (typeof (E == null ? void 0 : E.schema) == "object") {
      if ((E.validate || a.call(this, E), S === (0, n.normalizeId)(p))) {
        const { schema: O } = E,
          { schemaId: x } = this.opts,
          F = O[x];
        return (
          F && ($ = (0, n.resolveUrl)(this.opts.uriResolver, $, F)),
          new i({ schema: O, schemaId: x, root: g, baseId: $ })
        );
      }
      return b.call(this, l, E);
    }
  }
  Fe.resolveSchema = w;
  const P = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions",
  ]);
  function b(g, { baseId: p, schema: l, root: m }) {
    var $;
    if ((($ = g.fragment) === null || $ === void 0 ? void 0 : $[0]) !== "/")
      return;
    for (const O of g.fragment.slice(1).split("/")) {
      if (typeof l == "boolean") return;
      const x = l[(0, s.unescapeFragment)(O)];
      if (x === void 0) return;
      l = x;
      const F = typeof l == "object" && l[this.opts.schemaId];
      !P.has(O) && F && (p = (0, n.resolveUrl)(this.opts.uriResolver, p, F));
    }
    let S;
    if (
      typeof l != "boolean" &&
      l.$ref &&
      !(0, s.schemaHasRulesButRef)(l, this.RULES)
    ) {
      const O = (0, n.resolveUrl)(this.opts.uriResolver, p, l.$ref);
      S = w.call(this, m, O);
    }
    const { schemaId: E } = this.opts;
    if (
      ((S = S || new i({ schema: l, schemaId: E, root: m, baseId: p })),
      S.schema !== S.root.schema)
    )
      return S;
  }
  return Fe;
}
const rh =
    "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
  nh = "Meta-schema for $data reference (JSON AnySchema extension proposal)",
  sh = "object",
  oh = ["$data"],
  ih = {
    $data: {
      type: "string",
      anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }],
    },
  },
  ah = !1,
  lh = {
    $id: rh,
    description: nh,
    type: sh,
    required: oh,
    properties: ih,
    additionalProperties: ah,
  };
var Hr = {},
  fr = { exports: {} },
  Ps,
  ki;
function ch() {
  return (
    ki ||
      ((ki = 1),
      (Ps = {
        HEX: {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15,
        },
      })),
    Ps
  );
}
var Rs, Ai;
function uh() {
  if (Ai) return Rs;
  Ai = 1;
  const { HEX: e } = ch(),
    t =
      /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function r(b) {
    if (a(b, ".") < 3) return { host: b, isIPV4: !1 };
    const g = b.match(t) || [],
      [p] = g;
    return p ? { host: i(p, "."), isIPV4: !0 } : { host: b, isIPV4: !1 };
  }
  function n(b, g = !1) {
    let p = "",
      l = !0;
    for (const m of b) {
      if (e[m] === void 0) return;
      m !== "0" && l === !0 && (l = !1), l || (p += m);
    }
    return g && p.length === 0 && (p = "0"), p;
  }
  function s(b) {
    let g = 0;
    const p = { error: !1, address: "", zone: "" },
      l = [],
      m = [];
    let $ = !1,
      S = !1,
      E = !1;
    function O() {
      if (m.length) {
        if ($ === !1) {
          const x = n(m);
          if (x !== void 0) l.push(x);
          else return (p.error = !0), !1;
        }
        m.length = 0;
      }
      return !0;
    }
    for (let x = 0; x < b.length; x++) {
      const F = b[x];
      if (!(F === "[" || F === "]"))
        if (F === ":") {
          if ((S === !0 && (E = !0), !O())) break;
          if ((g++, l.push(":"), g > 7)) {
            p.error = !0;
            break;
          }
          x - 1 >= 0 && b[x - 1] === ":" && (S = !0);
          continue;
        } else if (F === "%") {
          if (!O()) break;
          $ = !0;
        } else {
          m.push(F);
          continue;
        }
    }
    return (
      m.length &&
        ($ ? (p.zone = m.join("")) : E ? l.push(m.join("")) : l.push(n(m))),
      (p.address = l.join("")),
      p
    );
  }
  function o(b) {
    if (a(b, ":") < 2) return { host: b, isIPV6: !1 };
    const g = s(b);
    if (g.error) return { host: b, isIPV6: !1 };
    {
      let p = g.address,
        l = g.address;
      return (
        g.zone && ((p += "%" + g.zone), (l += "%25" + g.zone)),
        { host: p, escapedHost: l, isIPV6: !0 }
      );
    }
  }
  function i(b, g) {
    let p = "",
      l = !0;
    const m = b.length;
    for (let $ = 0; $ < m; $++) {
      const S = b[$];
      S === "0" && l
        ? (($ + 1 <= m && b[$ + 1] === g) || $ + 1 === m) &&
          ((p += S), (l = !1))
        : (S === g ? (l = !0) : (l = !1), (p += S));
    }
    return p;
  }
  function a(b, g) {
    let p = 0;
    for (let l = 0; l < b.length; l++) b[l] === g && p++;
    return p;
  }
  const c = /^\.\.?\//u,
    f = /^\/\.(?:\/|$)/u,
    u = /^\/\.\.(?:\/|$)/u,
    h = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function v(b) {
    const g = [];
    for (; b.length; )
      if (b.match(c)) b = b.replace(c, "");
      else if (b.match(f)) b = b.replace(f, "/");
      else if (b.match(u)) (b = b.replace(u, "/")), g.pop();
      else if (b === "." || b === "..") b = "";
      else {
        const p = b.match(h);
        if (p) {
          const l = p[0];
          (b = b.slice(l.length)), g.push(l);
        } else throw new Error("Unexpected dot segment condition");
      }
    return g.join("");
  }
  function w(b, g) {
    const p = g !== !0 ? escape : unescape;
    return (
      b.scheme !== void 0 && (b.scheme = p(b.scheme)),
      b.userinfo !== void 0 && (b.userinfo = p(b.userinfo)),
      b.host !== void 0 && (b.host = p(b.host)),
      b.path !== void 0 && (b.path = p(b.path)),
      b.query !== void 0 && (b.query = p(b.query)),
      b.fragment !== void 0 && (b.fragment = p(b.fragment)),
      b
    );
  }
  function P(b) {
    const g = [];
    if (
      (b.userinfo !== void 0 && (g.push(b.userinfo), g.push("@")),
      b.host !== void 0)
    ) {
      let p = unescape(b.host);
      const l = r(p);
      if (l.isIPV4) p = l.host;
      else {
        const m = o(l.host);
        m.isIPV6 === !0 ? (p = `[${m.escapedHost}]`) : (p = b.host);
      }
      g.push(p);
    }
    return (
      (typeof b.port == "number" || typeof b.port == "string") &&
        (g.push(":"), g.push(String(b.port))),
      g.length ? g.join("") : void 0
    );
  }
  return (
    (Rs = {
      recomposeAuthority: P,
      normalizeComponentEncoding: w,
      removeDotSegments: v,
      normalizeIPv4: r,
      normalizeIPv6: o,
      stringArrayToHexStripped: n,
    }),
    Rs
  );
}
var Os, ji;
function fh() {
  if (ji) return Os;
  ji = 1;
  const e = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu,
    t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function r(l) {
    return typeof l.secure == "boolean"
      ? l.secure
      : String(l.scheme).toLowerCase() === "wss";
  }
  function n(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function s(l) {
    const m = String(l.scheme).toLowerCase() === "https";
    return (
      (l.port === (m ? 443 : 80) || l.port === "") && (l.port = void 0),
      l.path || (l.path = "/"),
      l
    );
  }
  function o(l) {
    return (
      (l.secure = r(l)),
      (l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : "")),
      (l.path = void 0),
      (l.query = void 0),
      l
    );
  }
  function i(l) {
    if (
      ((l.port === (r(l) ? 443 : 80) || l.port === "") && (l.port = void 0),
      typeof l.secure == "boolean" &&
        ((l.scheme = l.secure ? "wss" : "ws"), (l.secure = void 0)),
      l.resourceName)
    ) {
      const [m, $] = l.resourceName.split("?");
      (l.path = m && m !== "/" ? m : void 0),
        (l.query = $),
        (l.resourceName = void 0);
    }
    return (l.fragment = void 0), l;
  }
  function a(l, m) {
    if (!l.path) return (l.error = "URN can not be parsed"), l;
    const $ = l.path.match(t);
    if ($) {
      const S = m.scheme || l.scheme || "urn";
      (l.nid = $[1].toLowerCase()), (l.nss = $[2]);
      const E = `${S}:${m.nid || l.nid}`,
        O = p[E];
      (l.path = void 0), O && (l = O.parse(l, m));
    } else l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function c(l, m) {
    const $ = m.scheme || l.scheme || "urn",
      S = l.nid.toLowerCase(),
      E = `${$}:${m.nid || S}`,
      O = p[E];
    O && (l = O.serialize(l, m));
    const x = l,
      F = l.nss;
    return (x.path = `${S || m.nid}:${F}`), (m.skipEscape = !0), x;
  }
  function f(l, m) {
    const $ = l;
    return (
      ($.uuid = $.nss),
      ($.nss = void 0),
      !m.tolerant &&
        (!$.uuid || !e.test($.uuid)) &&
        ($.error = $.error || "UUID is not valid."),
      $
    );
  }
  function u(l) {
    const m = l;
    return (m.nss = (l.uuid || "").toLowerCase()), m;
  }
  const h = { scheme: "http", domainHost: !0, parse: n, serialize: s },
    v = { scheme: "https", domainHost: h.domainHost, parse: n, serialize: s },
    w = { scheme: "ws", domainHost: !0, parse: o, serialize: i },
    P = {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize,
    },
    p = {
      http: h,
      https: v,
      ws: w,
      wss: P,
      urn: { scheme: "urn", parse: a, serialize: c, skipNormalize: !0 },
      "urn:uuid": {
        scheme: "urn:uuid",
        parse: f,
        serialize: u,
        skipNormalize: !0,
      },
    };
  return (Os = p), Os;
}
var Mi;
function dh() {
  if (Mi) return fr.exports;
  Mi = 1;
  const {
      normalizeIPv6: e,
      normalizeIPv4: t,
      removeDotSegments: r,
      recomposeAuthority: n,
      normalizeComponentEncoding: s,
    } = uh(),
    o = fh();
  function i(g, p) {
    return (
      typeof g == "string"
        ? (g = u(P(g, p), p))
        : typeof g == "object" && (g = P(u(g, p), p)),
      g
    );
  }
  function a(g, p, l) {
    const m = Object.assign({ scheme: "null" }, l),
      $ = c(P(g, m), P(p, m), m, !0);
    return u($, { ...m, skipEscape: !0 });
  }
  function c(g, p, l, m) {
    const $ = {};
    return (
      m || ((g = P(u(g, l), l)), (p = P(u(p, l), l))),
      (l = l || {}),
      !l.tolerant && p.scheme
        ? (($.scheme = p.scheme),
          ($.userinfo = p.userinfo),
          ($.host = p.host),
          ($.port = p.port),
          ($.path = r(p.path || "")),
          ($.query = p.query))
        : (p.userinfo !== void 0 || p.host !== void 0 || p.port !== void 0
            ? (($.userinfo = p.userinfo),
              ($.host = p.host),
              ($.port = p.port),
              ($.path = r(p.path || "")),
              ($.query = p.query))
            : (p.path
                ? (p.path.charAt(0) === "/"
                    ? ($.path = r(p.path))
                    : ((g.userinfo !== void 0 ||
                        g.host !== void 0 ||
                        g.port !== void 0) &&
                      !g.path
                        ? ($.path = "/" + p.path)
                        : g.path
                        ? ($.path =
                            g.path.slice(0, g.path.lastIndexOf("/") + 1) +
                            p.path)
                        : ($.path = p.path),
                      ($.path = r($.path))),
                  ($.query = p.query))
                : (($.path = g.path),
                  p.query !== void 0
                    ? ($.query = p.query)
                    : ($.query = g.query)),
              ($.userinfo = g.userinfo),
              ($.host = g.host),
              ($.port = g.port)),
          ($.scheme = g.scheme)),
      ($.fragment = p.fragment),
      $
    );
  }
  function f(g, p, l) {
    return (
      typeof g == "string"
        ? ((g = unescape(g)), (g = u(s(P(g, l), !0), { ...l, skipEscape: !0 })))
        : typeof g == "object" && (g = u(s(g, !0), { ...l, skipEscape: !0 })),
      typeof p == "string"
        ? ((p = unescape(p)), (p = u(s(P(p, l), !0), { ...l, skipEscape: !0 })))
        : typeof p == "object" && (p = u(s(p, !0), { ...l, skipEscape: !0 })),
      g.toLowerCase() === p.toLowerCase()
    );
  }
  function u(g, p) {
    const l = {
        host: g.host,
        scheme: g.scheme,
        userinfo: g.userinfo,
        port: g.port,
        path: g.path,
        query: g.query,
        nid: g.nid,
        nss: g.nss,
        uuid: g.uuid,
        fragment: g.fragment,
        reference: g.reference,
        resourceName: g.resourceName,
        secure: g.secure,
        error: "",
      },
      m = Object.assign({}, p),
      $ = [],
      S = o[(m.scheme || l.scheme || "").toLowerCase()];
    S && S.serialize && S.serialize(l, m),
      l.path !== void 0 &&
        (m.skipEscape
          ? (l.path = unescape(l.path))
          : ((l.path = escape(l.path)),
            l.scheme !== void 0 && (l.path = l.path.split("%3A").join(":")))),
      m.reference !== "suffix" && l.scheme && $.push(l.scheme, ":");
    const E = n(l);
    if (
      (E !== void 0 &&
        (m.reference !== "suffix" && $.push("//"),
        $.push(E),
        l.path && l.path.charAt(0) !== "/" && $.push("/")),
      l.path !== void 0)
    ) {
      let O = l.path;
      !m.absolutePath && (!S || !S.absolutePath) && (O = r(O)),
        E === void 0 && (O = O.replace(/^\/\//u, "/%2F")),
        $.push(O);
    }
    return (
      l.query !== void 0 && $.push("?", l.query),
      l.fragment !== void 0 && $.push("#", l.fragment),
      $.join("")
    );
  }
  const h = Array.from({ length: 127 }, (g, p) =>
    /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(p))
  );
  function v(g) {
    let p = 0;
    for (let l = 0, m = g.length; l < m; ++l)
      if (((p = g.charCodeAt(l)), p > 126 || h[p])) return !0;
    return !1;
  }
  const w =
    /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function P(g, p) {
    const l = Object.assign({}, p),
      m = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0,
      },
      $ = g.indexOf("%") !== -1;
    let S = !1;
    l.reference === "suffix" &&
      (g = (l.scheme ? l.scheme + ":" : "") + "//" + g);
    const E = g.match(w);
    if (E) {
      if (
        ((m.scheme = E[1]),
        (m.userinfo = E[3]),
        (m.host = E[4]),
        (m.port = parseInt(E[5], 10)),
        (m.path = E[6] || ""),
        (m.query = E[7]),
        (m.fragment = E[8]),
        isNaN(m.port) && (m.port = E[5]),
        m.host)
      ) {
        const x = t(m.host);
        if (x.isIPV4 === !1) {
          const F = e(x.host);
          (m.host = F.host.toLowerCase()), (S = F.isIPV6);
        } else (m.host = x.host), (S = !0);
      }
      m.scheme === void 0 &&
      m.userinfo === void 0 &&
      m.host === void 0 &&
      m.port === void 0 &&
      m.query === void 0 &&
      !m.path
        ? (m.reference = "same-document")
        : m.scheme === void 0
        ? (m.reference = "relative")
        : m.fragment === void 0
        ? (m.reference = "absolute")
        : (m.reference = "uri"),
        l.reference &&
          l.reference !== "suffix" &&
          l.reference !== m.reference &&
          (m.error = m.error || "URI is not a " + l.reference + " reference.");
      const O = o[(l.scheme || m.scheme || "").toLowerCase()];
      if (
        !l.unicodeSupport &&
        (!O || !O.unicodeSupport) &&
        m.host &&
        (l.domainHost || (O && O.domainHost)) &&
        S === !1 &&
        v(m.host)
      )
        try {
          m.host = URL.domainToASCII(m.host.toLowerCase());
        } catch (x) {
          m.error =
            m.error || "Host's domain name can not be converted to ASCII: " + x;
        }
      (!O || (O && !O.skipNormalize)) &&
        ($ && m.scheme !== void 0 && (m.scheme = unescape(m.scheme)),
        $ && m.host !== void 0 && (m.host = unescape(m.host)),
        m.path && (m.path = escape(unescape(m.path))),
        m.fragment && (m.fragment = encodeURI(decodeURIComponent(m.fragment)))),
        O && O.parse && O.parse(m, l);
    } else m.error = m.error || "URI can not be parsed.";
    return m;
  }
  const b = {
    SCHEMES: o,
    normalize: i,
    resolve: a,
    resolveComponents: c,
    equal: f,
    serialize: u,
    parse: P,
  };
  return (
    (fr.exports = b),
    (fr.exports.default = b),
    (fr.exports.fastUri = b),
    fr.exports
  );
}
var xi;
function hh() {
  if (xi) return Hr;
  (xi = 1), Object.defineProperty(Hr, "__esModule", { value: !0 });
  const e = dh();
  return (
    (e.code = 'require("ajv/dist/runtime/uri").default'), (Hr.default = e), Hr
  );
}
var qi;
function ph() {
  return (
    qi ||
      ((qi = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CodeGen =
            e.Name =
            e.nil =
            e.stringify =
            e.str =
            e._ =
            e.KeywordCxt =
              void 0);
        var t = Mr();
        Object.defineProperty(e, "KeywordCxt", {
          enumerable: !0,
          get: function () {
            return t.KeywordCxt;
          },
        });
        var r = ue();
        Object.defineProperty(e, "_", {
          enumerable: !0,
          get: function () {
            return r._;
          },
        }),
          Object.defineProperty(e, "str", {
            enumerable: !0,
            get: function () {
              return r.str;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return r.stringify;
            },
          }),
          Object.defineProperty(e, "nil", {
            enumerable: !0,
            get: function () {
              return r.nil;
            },
          }),
          Object.defineProperty(e, "Name", {
            enumerable: !0,
            get: function () {
              return r.Name;
            },
          }),
          Object.defineProperty(e, "CodeGen", {
            enumerable: !0,
            get: function () {
              return r.CodeGen;
            },
          });
        const n = co(),
          s = ns(),
          o = tc(),
          i = uo(),
          a = ue(),
          c = rs(),
          f = Un(),
          u = he(),
          h = lh,
          v = hh(),
          w = (H, A) => new RegExp(H, A);
        w.code = "new RegExp";
        const P = ["removeAdditional", "useDefaults", "coerceTypes"],
          b = new Set([
            "validate",
            "serialize",
            "parse",
            "wrapper",
            "root",
            "schema",
            "keyword",
            "pattern",
            "formats",
            "validate$data",
            "func",
            "obj",
            "Error",
          ]),
          g = {
            errorDataPath: "",
            format: "`validateFormats: false` can be used instead.",
            nullable: '"nullable" keyword is supported by default.',
            jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
            extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
            missingRefs:
              "Pass empty schema with $id that should be ignored to ajv.addSchema.",
            processCode:
              "Use option `code: {process: (code, schemaEnv: object) => string}`",
            sourceCode: "Use option `code: {source: true}`",
            strictDefaults: "It is default now, see option `strict`.",
            strictKeywords: "It is default now, see option `strict`.",
            uniqueItems: '"uniqueItems" keyword is always validated.',
            unknownFormats:
              "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
            cache: "Map is used as cache, schema object as key.",
            serialize: "Map is used as cache, schema object as key.",
            ajvErrors: "It is default now.",
          },
          p = {
            ignoreKeywordsWithRef: "",
            jsPropertySyntax: "",
            unicode:
              '"minLength"/"maxLength" account for unicode characters by default.',
          },
          l = 200;
        function m(H) {
          var A,
            j,
            N,
            _,
            T,
            q,
            I,
            M,
            U,
            K,
            C,
            d,
            y,
            R,
            k,
            D,
            L,
            B,
            G,
            z,
            V,
            ee,
            W,
            te,
            ne;
          const le = H.strict,
            pe = (A = H.code) === null || A === void 0 ? void 0 : A.optimize,
            de = pe === !0 || pe === void 0 ? 1 : pe || 0,
            Ce =
              (N =
                (j = H.code) === null || j === void 0 ? void 0 : j.regExp) !==
                null && N !== void 0
                ? N
                : w,
            Ne = (_ = H.uriResolver) !== null && _ !== void 0 ? _ : v.default;
          return {
            strictSchema:
              (q = (T = H.strictSchema) !== null && T !== void 0 ? T : le) !==
                null && q !== void 0
                ? q
                : !0,
            strictNumbers:
              (M = (I = H.strictNumbers) !== null && I !== void 0 ? I : le) !==
                null && M !== void 0
                ? M
                : !0,
            strictTypes:
              (K = (U = H.strictTypes) !== null && U !== void 0 ? U : le) !==
                null && K !== void 0
                ? K
                : "log",
            strictTuples:
              (d = (C = H.strictTuples) !== null && C !== void 0 ? C : le) !==
                null && d !== void 0
                ? d
                : "log",
            strictRequired:
              (R = (y = H.strictRequired) !== null && y !== void 0 ? y : le) !==
                null && R !== void 0
                ? R
                : !1,
            code: H.code
              ? { ...H.code, optimize: de, regExp: Ce }
              : { optimize: de, regExp: Ce },
            loopRequired: (k = H.loopRequired) !== null && k !== void 0 ? k : l,
            loopEnum: (D = H.loopEnum) !== null && D !== void 0 ? D : l,
            meta: (L = H.meta) !== null && L !== void 0 ? L : !0,
            messages: (B = H.messages) !== null && B !== void 0 ? B : !0,
            inlineRefs: (G = H.inlineRefs) !== null && G !== void 0 ? G : !0,
            schemaId: (z = H.schemaId) !== null && z !== void 0 ? z : "$id",
            addUsedSchema:
              (V = H.addUsedSchema) !== null && V !== void 0 ? V : !0,
            validateSchema:
              (ee = H.validateSchema) !== null && ee !== void 0 ? ee : !0,
            validateFormats:
              (W = H.validateFormats) !== null && W !== void 0 ? W : !0,
            unicodeRegExp:
              (te = H.unicodeRegExp) !== null && te !== void 0 ? te : !0,
            int32range: (ne = H.int32range) !== null && ne !== void 0 ? ne : !0,
            uriResolver: Ne,
          };
        }
        class $ {
          constructor(A = {}) {
            (this.schemas = {}),
              (this.refs = {}),
              (this.formats = {}),
              (this._compilations = new Set()),
              (this._loading = {}),
              (this._cache = new Map()),
              (A = this.opts = { ...A, ...m(A) });
            const { es5: j, lines: N } = this.opts.code;
            (this.scope = new a.ValueScope({
              scope: {},
              prefixes: b,
              es5: j,
              lines: N,
            })),
              (this.logger = re(A.logger));
            const _ = A.validateFormats;
            (A.validateFormats = !1),
              (this.RULES = (0, o.getRules)()),
              S.call(this, g, A, "NOT SUPPORTED"),
              S.call(this, p, A, "DEPRECATED", "warn"),
              (this._metaOpts = X.call(this)),
              A.formats && x.call(this),
              this._addVocabularies(),
              this._addDefaultMetaSchema(),
              A.keywords && F.call(this, A.keywords),
              typeof A.meta == "object" && this.addMetaSchema(A.meta),
              O.call(this),
              (A.validateFormats = _);
          }
          _addVocabularies() {
            this.addKeyword("$async");
          }
          _addDefaultMetaSchema() {
            const { $data: A, meta: j, schemaId: N } = this.opts;
            let _ = h;
            N === "id" && ((_ = { ...h }), (_.id = _.$id), delete _.$id),
              j && A && this.addMetaSchema(_, _[N], !1);
          }
          defaultMeta() {
            const { meta: A, schemaId: j } = this.opts;
            return (this.opts.defaultMeta =
              typeof A == "object" ? A[j] || A : void 0);
          }
          validate(A, j) {
            let N;
            if (typeof A == "string") {
              if (((N = this.getSchema(A)), !N))
                throw new Error(`no schema with key or ref "${A}"`);
            } else N = this.compile(A);
            const _ = N(j);
            return "$async" in N || (this.errors = N.errors), _;
          }
          compile(A, j) {
            const N = this._addSchema(A, j);
            return N.validate || this._compileSchemaEnv(N);
          }
          compileAsync(A, j) {
            if (typeof this.opts.loadSchema != "function")
              throw new Error("options.loadSchema should be a function");
            const { loadSchema: N } = this.opts;
            return _.call(this, A, j);
            async function _(K, C) {
              await T.call(this, K.$schema);
              const d = this._addSchema(K, C);
              return d.validate || q.call(this, d);
            }
            async function T(K) {
              K && !this.getSchema(K) && (await _.call(this, { $ref: K }, !0));
            }
            async function q(K) {
              try {
                return this._compileSchemaEnv(K);
              } catch (C) {
                if (!(C instanceof s.default)) throw C;
                return (
                  I.call(this, C),
                  await M.call(this, C.missingSchema),
                  q.call(this, K)
                );
              }
            }
            function I({ missingSchema: K, missingRef: C }) {
              if (this.refs[K])
                throw new Error(
                  `AnySchema ${K} is loaded but ${C} cannot be resolved`
                );
            }
            async function M(K) {
              const C = await U.call(this, K);
              this.refs[K] || (await T.call(this, C.$schema)),
                this.refs[K] || this.addSchema(C, K, j);
            }
            async function U(K) {
              const C = this._loading[K];
              if (C) return C;
              try {
                return await (this._loading[K] = N(K));
              } finally {
                delete this._loading[K];
              }
            }
          }
          addSchema(A, j, N, _ = this.opts.validateSchema) {
            if (Array.isArray(A)) {
              for (const q of A) this.addSchema(q, void 0, N, _);
              return this;
            }
            let T;
            if (typeof A == "object") {
              const { schemaId: q } = this.opts;
              if (((T = A[q]), T !== void 0 && typeof T != "string"))
                throw new Error(`schema ${q} must be string`);
            }
            return (
              (j = (0, c.normalizeId)(j || T)),
              this._checkUnique(j),
              (this.schemas[j] = this._addSchema(A, N, j, _, !0)),
              this
            );
          }
          addMetaSchema(A, j, N = this.opts.validateSchema) {
            return this.addSchema(A, j, !0, N), this;
          }
          validateSchema(A, j) {
            if (typeof A == "boolean") return !0;
            let N;
            if (((N = A.$schema), N !== void 0 && typeof N != "string"))
              throw new Error("$schema must be a string");
            if (((N = N || this.opts.defaultMeta || this.defaultMeta()), !N))
              return (
                this.logger.warn("meta-schema not available"),
                (this.errors = null),
                !0
              );
            const _ = this.validate(N, A);
            if (!_ && j) {
              const T = "schema is invalid: " + this.errorsText();
              if (this.opts.validateSchema === "log") this.logger.error(T);
              else throw new Error(T);
            }
            return _;
          }
          getSchema(A) {
            let j;
            for (; typeof (j = E.call(this, A)) == "string"; ) A = j;
            if (j === void 0) {
              const { schemaId: N } = this.opts,
                _ = new i.SchemaEnv({ schema: {}, schemaId: N });
              if (((j = i.resolveSchema.call(this, _, A)), !j)) return;
              this.refs[A] = j;
            }
            return j.validate || this._compileSchemaEnv(j);
          }
          removeSchema(A) {
            if (A instanceof RegExp)
              return (
                this._removeAllSchemas(this.schemas, A),
                this._removeAllSchemas(this.refs, A),
                this
              );
            switch (typeof A) {
              case "undefined":
                return (
                  this._removeAllSchemas(this.schemas),
                  this._removeAllSchemas(this.refs),
                  this._cache.clear(),
                  this
                );
              case "string": {
                const j = E.call(this, A);
                return (
                  typeof j == "object" && this._cache.delete(j.schema),
                  delete this.schemas[A],
                  delete this.refs[A],
                  this
                );
              }
              case "object": {
                const j = A;
                this._cache.delete(j);
                let N = A[this.opts.schemaId];
                return (
                  N &&
                    ((N = (0, c.normalizeId)(N)),
                    delete this.schemas[N],
                    delete this.refs[N]),
                  this
                );
              }
              default:
                throw new Error("ajv.removeSchema: invalid parameter");
            }
          }
          addVocabulary(A) {
            for (const j of A) this.addKeyword(j);
            return this;
          }
          addKeyword(A, j) {
            let N;
            if (typeof A == "string")
              (N = A),
                typeof j == "object" &&
                  (this.logger.warn(
                    "these parameters are deprecated, see docs for addKeyword"
                  ),
                  (j.keyword = N));
            else if (typeof A == "object" && j === void 0) {
              if (((j = A), (N = j.keyword), Array.isArray(N) && !N.length))
                throw new Error(
                  "addKeywords: keyword must be string or non-empty array"
                );
            } else throw new Error("invalid addKeywords parameters");
            if ((ie.call(this, N, j), !j))
              return (0, u.eachItem)(N, (T) => ve.call(this, T)), this;
            ae.call(this, j);
            const _ = {
              ...j,
              type: (0, f.getJSONTypes)(j.type),
              schemaType: (0, f.getJSONTypes)(j.schemaType),
            };
            return (
              (0, u.eachItem)(
                N,
                _.type.length === 0
                  ? (T) => ve.call(this, T, _)
                  : (T) => _.type.forEach((q) => ve.call(this, T, _, q))
              ),
              this
            );
          }
          getKeyword(A) {
            const j = this.RULES.all[A];
            return typeof j == "object" ? j.definition : !!j;
          }
          removeKeyword(A) {
            const { RULES: j } = this;
            delete j.keywords[A], delete j.all[A];
            for (const N of j.rules) {
              const _ = N.rules.findIndex((T) => T.keyword === A);
              _ >= 0 && N.rules.splice(_, 1);
            }
            return this;
          }
          addFormat(A, j) {
            return (
              typeof j == "string" && (j = new RegExp(j)),
              (this.formats[A] = j),
              this
            );
          }
          errorsText(
            A = this.errors,
            { separator: j = ", ", dataVar: N = "data" } = {}
          ) {
            return !A || A.length === 0
              ? "No errors"
              : A.map((_) => `${N}${_.instancePath} ${_.message}`).reduce(
                  (_, T) => _ + j + T
                );
          }
          $dataMetaSchema(A, j) {
            const N = this.RULES.all;
            A = JSON.parse(JSON.stringify(A));
            for (const _ of j) {
              const T = _.split("/").slice(1);
              let q = A;
              for (const I of T) q = q[I];
              for (const I in N) {
                const M = N[I];
                if (typeof M != "object") continue;
                const { $data: U } = M.definition,
                  K = q[I];
                U && K && (q[I] = Se(K));
              }
            }
            return A;
          }
          _removeAllSchemas(A, j) {
            for (const N in A) {
              const _ = A[N];
              (!j || j.test(N)) &&
                (typeof _ == "string"
                  ? delete A[N]
                  : _ &&
                    !_.meta &&
                    (this._cache.delete(_.schema), delete A[N]));
            }
          }
          _addSchema(
            A,
            j,
            N,
            _ = this.opts.validateSchema,
            T = this.opts.addUsedSchema
          ) {
            let q;
            const { schemaId: I } = this.opts;
            if (typeof A == "object") q = A[I];
            else {
              if (this.opts.jtd) throw new Error("schema must be object");
              if (typeof A != "boolean")
                throw new Error("schema must be object or boolean");
            }
            let M = this._cache.get(A);
            if (M !== void 0) return M;
            N = (0, c.normalizeId)(q || N);
            const U = c.getSchemaRefs.call(this, A, N);
            return (
              (M = new i.SchemaEnv({
                schema: A,
                schemaId: I,
                meta: j,
                baseId: N,
                localRefs: U,
              })),
              this._cache.set(M.schema, M),
              T &&
                !N.startsWith("#") &&
                (N && this._checkUnique(N), (this.refs[N] = M)),
              _ && this.validateSchema(A, !0),
              M
            );
          }
          _checkUnique(A) {
            if (this.schemas[A] || this.refs[A])
              throw new Error(`schema with key or id "${A}" already exists`);
          }
          _compileSchemaEnv(A) {
            if (
              (A.meta
                ? this._compileMetaSchema(A)
                : i.compileSchema.call(this, A),
              !A.validate)
            )
              throw new Error("ajv implementation error");
            return A.validate;
          }
          _compileMetaSchema(A) {
            const j = this.opts;
            this.opts = this._metaOpts;
            try {
              i.compileSchema.call(this, A);
            } finally {
              this.opts = j;
            }
          }
        }
        ($.ValidationError = n.default),
          ($.MissingRefError = s.default),
          (e.default = $);
        function S(H, A, j, N = "error") {
          for (const _ in H) {
            const T = _;
            T in A && this.logger[N](`${j}: option ${_}. ${H[T]}`);
          }
        }
        function E(H) {
          return (H = (0, c.normalizeId)(H)), this.schemas[H] || this.refs[H];
        }
        function O() {
          const H = this.opts.schemas;
          if (H)
            if (Array.isArray(H)) this.addSchema(H);
            else for (const A in H) this.addSchema(H[A], A);
        }
        function x() {
          for (const H in this.opts.formats) {
            const A = this.opts.formats[H];
            A && this.addFormat(H, A);
          }
        }
        function F(H) {
          if (Array.isArray(H)) {
            this.addVocabulary(H);
            return;
          }
          this.logger.warn("keywords option as map is deprecated, pass array");
          for (const A in H) {
            const j = H[A];
            j.keyword || (j.keyword = A), this.addKeyword(j);
          }
        }
        function X() {
          const H = { ...this.opts };
          for (const A of P) delete H[A];
          return H;
        }
        const Y = { log() {}, warn() {}, error() {} };
        function re(H) {
          if (H === !1) return Y;
          if (H === void 0) return console;
          if (H.log && H.warn && H.error) return H;
          throw new Error("logger must implement log, warn and error methods");
        }
        const Q = /^[a-z_$][a-z0-9_$:-]*$/i;
        function ie(H, A) {
          const { RULES: j } = this;
          if (
            ((0, u.eachItem)(H, (N) => {
              if (j.keywords[N])
                throw new Error(`Keyword ${N} is already defined`);
              if (!Q.test(N)) throw new Error(`Keyword ${N} has invalid name`);
            }),
            !!A && A.$data && !("code" in A || "validate" in A))
          )
            throw new Error(
              '$data keyword must have "code" or "validate" function'
            );
        }
        function ve(H, A, j) {
          var N;
          const _ = A == null ? void 0 : A.post;
          if (j && _)
            throw new Error('keyword with "post" flag cannot have "type"');
          const { RULES: T } = this;
          let q = _ ? T.post : T.rules.find(({ type: M }) => M === j);
          if (
            (q || ((q = { type: j, rules: [] }), T.rules.push(q)),
            (T.keywords[H] = !0),
            !A)
          )
            return;
          const I = {
            keyword: H,
            definition: {
              ...A,
              type: (0, f.getJSONTypes)(A.type),
              schemaType: (0, f.getJSONTypes)(A.schemaType),
            },
          };
          A.before ? fe.call(this, q, I, A.before) : q.rules.push(I),
            (T.all[H] = I),
            (N = A.implements) === null ||
              N === void 0 ||
              N.forEach((M) => this.addKeyword(M));
        }
        function fe(H, A, j) {
          const N = H.rules.findIndex((_) => _.keyword === j);
          N >= 0
            ? H.rules.splice(N, 0, A)
            : (H.rules.push(A), this.logger.warn(`rule ${j} is not defined`));
        }
        function ae(H) {
          let { metaSchema: A } = H;
          A !== void 0 &&
            (H.$data && this.opts.$data && (A = Se(A)),
            (H.validateSchema = this.compile(A, !0)));
        }
        const Z = {
          $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
        };
        function Se(H) {
          return { anyOf: [H, Z] };
        }
      })(_s)),
    _s
  );
}
var zr = {},
  Gr = {},
  Br = {},
  Di;
function mh() {
  if (Di) return Br;
  (Di = 1), Object.defineProperty(Br, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    },
  };
  return (Br.default = e), Br;
}
var Rt = {},
  Ui;
function gh() {
  if (Ui) return Rt;
  (Ui = 1),
    Object.defineProperty(Rt, "__esModule", { value: !0 }),
    (Rt.callRef = Rt.getValidate = void 0);
  const e = ns(),
    t = tt(),
    r = ue(),
    n = St(),
    s = uo(),
    o = he(),
    i = {
      keyword: "$ref",
      schemaType: "string",
      code(f) {
        const { gen: u, schema: h, it: v } = f,
          { baseId: w, schemaEnv: P, validateName: b, opts: g, self: p } = v,
          { root: l } = P;
        if ((h === "#" || h === "#/") && w === l.baseId) return $();
        const m = s.resolveRef.call(p, l, w, h);
        if (m === void 0) throw new e.default(v.opts.uriResolver, w, h);
        if (m instanceof s.SchemaEnv) return S(m);
        return E(m);
        function $() {
          if (P === l) return c(f, b, P, P.$async);
          const O = u.scopeValue("root", { ref: l });
          return c(f, (0, r._)`${O}.validate`, l, l.$async);
        }
        function S(O) {
          const x = a(f, O);
          c(f, x, O, O.$async);
        }
        function E(O) {
          const x = u.scopeValue(
              "schema",
              g.code.source === !0
                ? { ref: O, code: (0, r.stringify)(O) }
                : { ref: O }
            ),
            F = u.name("valid"),
            X = f.subschema(
              {
                schema: O,
                dataTypes: [],
                schemaPath: r.nil,
                topSchemaRef: x,
                errSchemaPath: h,
              },
              F
            );
          f.mergeEvaluated(X), f.ok(F);
        }
      },
    };
  function a(f, u) {
    const { gen: h } = f;
    return u.validate
      ? h.scopeValue("validate", { ref: u.validate })
      : (0, r._)`${h.scopeValue("wrapper", { ref: u })}.validate`;
  }
  Rt.getValidate = a;
  function c(f, u, h, v) {
    const { gen: w, it: P } = f,
      { allErrors: b, schemaEnv: g, opts: p } = P,
      l = p.passContext ? n.default.this : r.nil;
    v ? m() : $();
    function m() {
      if (!g.$async) throw new Error("async schema referenced by sync schema");
      const O = w.let("valid");
      w.try(
        () => {
          w.code((0, r._)`await ${(0, t.callValidateCode)(f, u, l)}`),
            E(u),
            b || w.assign(O, !0);
        },
        (x) => {
          w.if((0, r._)`!(${x} instanceof ${P.ValidationError})`, () =>
            w.throw(x)
          ),
            S(x),
            b || w.assign(O, !1);
        }
      ),
        f.ok(O);
    }
    function $() {
      f.result(
        (0, t.callValidateCode)(f, u, l),
        () => E(u),
        () => S(u)
      );
    }
    function S(O) {
      const x = (0, r._)`${O}.errors`;
      w.assign(
        n.default.vErrors,
        (0,
        r._)`${n.default.vErrors} === null ? ${x} : ${n.default.vErrors}.concat(${x})`
      ),
        w.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function E(O) {
      var x;
      if (!P.opts.unevaluated) return;
      const F =
        (x = h == null ? void 0 : h.validate) === null || x === void 0
          ? void 0
          : x.evaluated;
      if (P.props !== !0)
        if (F && !F.dynamicProps)
          F.props !== void 0 &&
            (P.props = o.mergeEvaluated.props(w, F.props, P.props));
        else {
          const X = w.var("props", (0, r._)`${O}.evaluated.props`);
          P.props = o.mergeEvaluated.props(w, X, P.props, r.Name);
        }
      if (P.items !== !0)
        if (F && !F.dynamicItems)
          F.items !== void 0 &&
            (P.items = o.mergeEvaluated.items(w, F.items, P.items));
        else {
          const X = w.var("items", (0, r._)`${O}.evaluated.items`);
          P.items = o.mergeEvaluated.items(w, X, P.items, r.Name);
        }
    }
  }
  return (Rt.callRef = c), (Rt.default = i), Rt;
}
var Li;
function yh() {
  if (Li) return Gr;
  (Li = 1), Object.defineProperty(Gr, "__esModule", { value: !0 });
  const e = mh(),
    t = gh(),
    r = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      e.default,
      t.default,
    ];
  return (Gr.default = r), Gr;
}
var Wr = {},
  Jr = {},
  Vi;
function _h() {
  if (Vi) return Jr;
  (Vi = 1), Object.defineProperty(Jr, "__esModule", { value: !0 });
  const e = ue(),
    t = e.operators,
    r = {
      maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
      minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
      exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
      exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE },
    },
    n = {
      message: ({ keyword: o, schemaCode: i }) =>
        (0, e.str)`must be ${r[o].okStr} ${i}`,
      params: ({ keyword: o, schemaCode: i }) =>
        (0, e._)`{comparison: ${r[o].okStr}, limit: ${i}}`,
    },
    s = {
      keyword: Object.keys(r),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: n,
      code(o) {
        const { keyword: i, data: a, schemaCode: c } = o;
        o.fail$data((0, e._)`${a} ${r[i].fail} ${c} || isNaN(${a})`);
      },
    };
  return (Jr.default = s), Jr;
}
var Xr = {},
  Fi;
function vh() {
  if (Fi) return Xr;
  (Fi = 1), Object.defineProperty(Xr, "__esModule", { value: !0 });
  const e = ue(),
    r = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: {
        message: ({ schemaCode: n }) => (0, e.str)`must be multiple of ${n}`,
        params: ({ schemaCode: n }) => (0, e._)`{multipleOf: ${n}}`,
      },
      code(n) {
        const { gen: s, data: o, schemaCode: i, it: a } = n,
          c = a.opts.multipleOfPrecision,
          f = s.let("res"),
          u = c
            ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${c}`
            : (0, e._)`${f} !== parseInt(${f})`;
        n.fail$data((0, e._)`(${i} === 0 || (${f} = ${o}/${i}, ${u}))`);
      },
    };
  return (Xr.default = r), Xr;
}
var Yr = {},
  Qr = {},
  Ki;
function $h() {
  if (Ki) return Qr;
  (Ki = 1), Object.defineProperty(Qr, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let n = 0,
      s = 0,
      o;
    for (; s < r; )
      n++,
        (o = t.charCodeAt(s++)),
        o >= 55296 &&
          o <= 56319 &&
          s < r &&
          ((o = t.charCodeAt(s)), (o & 64512) === 56320 && s++);
    return n;
  }
  return (
    (Qr.default = e),
    (e.code = 'require("ajv/dist/runtime/ucs2length").default'),
    Qr
  );
}
var Hi;
function wh() {
  if (Hi) return Yr;
  (Hi = 1), Object.defineProperty(Yr, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    r = $h(),
    s = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: {
        message({ keyword: o, schemaCode: i }) {
          const a = o === "maxLength" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${a} than ${i} characters`;
        },
        params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`,
      },
      code(o) {
        const { keyword: i, data: a, schemaCode: c, it: f } = o,
          u = i === "maxLength" ? e.operators.GT : e.operators.LT,
          h =
            f.opts.unicode === !1
              ? (0, e._)`${a}.length`
              : (0, e._)`${(0, t.useFunc)(o.gen, r.default)}(${a})`;
        o.fail$data((0, e._)`${h} ${u} ${c}`);
      },
    };
  return (Yr.default = s), Yr;
}
var Zr = {},
  zi;
function bh() {
  if (zi) return Zr;
  (zi = 1), Object.defineProperty(Zr, "__esModule", { value: !0 });
  const e = tt(),
    t = ue(),
    n = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: {
        message: ({ schemaCode: s }) => (0, t.str)`must match pattern "${s}"`,
        params: ({ schemaCode: s }) => (0, t._)`{pattern: ${s}}`,
      },
      code(s) {
        const { data: o, $data: i, schema: a, schemaCode: c, it: f } = s,
          u = f.opts.unicodeRegExp ? "u" : "",
          h = i ? (0, t._)`(new RegExp(${c}, ${u}))` : (0, e.usePattern)(s, a);
        s.fail$data((0, t._)`!${h}.test(${o})`);
      },
    };
  return (Zr.default = n), Zr;
}
var en = {},
  Gi;
function Eh() {
  if (Gi) return en;
  (Gi = 1), Object.defineProperty(en, "__esModule", { value: !0 });
  const e = ue(),
    r = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: {
        message({ keyword: n, schemaCode: s }) {
          const o = n === "maxProperties" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${o} than ${s} properties`;
        },
        params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`,
      },
      code(n) {
        const { keyword: s, data: o, schemaCode: i } = n,
          a = s === "maxProperties" ? e.operators.GT : e.operators.LT;
        n.fail$data((0, e._)`Object.keys(${o}).length ${a} ${i}`);
      },
    };
  return (en.default = r), en;
}
var tn = {},
  Bi;
function Sh() {
  if (Bi) return tn;
  (Bi = 1), Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = tt(),
    t = ue(),
    r = he(),
    s = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: {
        message: ({ params: { missingProperty: o } }) =>
          (0, t.str)`must have required property '${o}'`,
        params: ({ params: { missingProperty: o } }) =>
          (0, t._)`{missingProperty: ${o}}`,
      },
      code(o) {
        const {
            gen: i,
            schema: a,
            schemaCode: c,
            data: f,
            $data: u,
            it: h,
          } = o,
          { opts: v } = h;
        if (!u && a.length === 0) return;
        const w = a.length >= v.loopRequired;
        if ((h.allErrors ? P() : b(), v.strictRequired)) {
          const l = o.parentSchema.properties,
            { definedProperties: m } = o.it;
          for (const $ of a)
            if ((l == null ? void 0 : l[$]) === void 0 && !m.has($)) {
              const S = h.schemaEnv.baseId + h.errSchemaPath,
                E = `required property "${$}" is not defined at "${S}" (strictRequired)`;
              (0, r.checkStrictMode)(h, E, h.opts.strictRequired);
            }
        }
        function P() {
          if (w || u) o.block$data(t.nil, g);
          else for (const l of a) (0, e.checkReportMissingProp)(o, l);
        }
        function b() {
          const l = i.let("missing");
          if (w || u) {
            const m = i.let("valid", !0);
            o.block$data(m, () => p(l, m)), o.ok(m);
          } else
            i.if((0, e.checkMissingProp)(o, a, l)),
              (0, e.reportMissingProp)(o, l),
              i.else();
        }
        function g() {
          i.forOf("prop", c, (l) => {
            o.setParams({ missingProperty: l }),
              i.if((0, e.noPropertyInData)(i, f, l, v.ownProperties), () =>
                o.error()
              );
          });
        }
        function p(l, m) {
          o.setParams({ missingProperty: l }),
            i.forOf(
              l,
              c,
              () => {
                i.assign(m, (0, e.propertyInData)(i, f, l, v.ownProperties)),
                  i.if((0, t.not)(m), () => {
                    o.error(), i.break();
                  });
              },
              t.nil
            );
        }
      },
    };
  return (tn.default = s), tn;
}
var rn = {},
  Wi;
function Ph() {
  if (Wi) return rn;
  (Wi = 1), Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = ue(),
    r = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: {
        message({ keyword: n, schemaCode: s }) {
          const o = n === "maxItems" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${o} than ${s} items`;
        },
        params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`,
      },
      code(n) {
        const { keyword: s, data: o, schemaCode: i } = n,
          a = s === "maxItems" ? e.operators.GT : e.operators.LT;
        n.fail$data((0, e._)`${o}.length ${a} ${i}`);
      },
    };
  return (rn.default = r), rn;
}
var nn = {},
  sn = {},
  Ji;
function fo() {
  if (Ji) return sn;
  (Ji = 1), Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = nc();
  return (
    (e.code = 'require("ajv/dist/runtime/equal").default'), (sn.default = e), sn
  );
}
var Xi;
function Rh() {
  if (Xi) return nn;
  (Xi = 1), Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = Un(),
    t = ue(),
    r = he(),
    n = fo(),
    o = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: {
        message: ({ params: { i, j: a } }) =>
          (0,
          t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
        params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`,
      },
      code(i) {
        const {
          gen: a,
          data: c,
          $data: f,
          schema: u,
          parentSchema: h,
          schemaCode: v,
          it: w,
        } = i;
        if (!f && !u) return;
        const P = a.let("valid"),
          b = h.items ? (0, e.getSchemaTypes)(h.items) : [];
        i.block$data(P, g, (0, t._)`${v} === false`), i.ok(P);
        function g() {
          const $ = a.let("i", (0, t._)`${c}.length`),
            S = a.let("j");
          i.setParams({ i: $, j: S }),
            a.assign(P, !0),
            a.if((0, t._)`${$} > 1`, () => (p() ? l : m)($, S));
        }
        function p() {
          return (
            b.length > 0 && !b.some(($) => $ === "object" || $ === "array")
          );
        }
        function l($, S) {
          const E = a.name("item"),
            O = (0, e.checkDataTypes)(
              b,
              E,
              w.opts.strictNumbers,
              e.DataType.Wrong
            ),
            x = a.const("indices", (0, t._)`{}`);
          a.for((0, t._)`;${$}--;`, () => {
            a.let(E, (0, t._)`${c}[${$}]`),
              a.if(O, (0, t._)`continue`),
              b.length > 1 &&
                a.if((0, t._)`typeof ${E} == "string"`, (0, t._)`${E} += "_"`),
              a
                .if((0, t._)`typeof ${x}[${E}] == "number"`, () => {
                  a.assign(S, (0, t._)`${x}[${E}]`),
                    i.error(),
                    a.assign(P, !1).break();
                })
                .code((0, t._)`${x}[${E}] = ${$}`);
          });
        }
        function m($, S) {
          const E = (0, r.useFunc)(a, n.default),
            O = a.name("outer");
          a.label(O).for((0, t._)`;${$}--;`, () =>
            a.for((0, t._)`${S} = ${$}; ${S}--;`, () =>
              a.if((0, t._)`${E}(${c}[${$}], ${c}[${S}])`, () => {
                i.error(), a.assign(P, !1).break(O);
              })
            )
          );
        }
      },
    };
  return (nn.default = o), nn;
}
var on = {},
  Yi;
function Oh() {
  if (Yi) return on;
  (Yi = 1), Object.defineProperty(on, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    r = fo(),
    s = {
      keyword: "const",
      $data: !0,
      error: {
        message: "must be equal to constant",
        params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`,
      },
      code(o) {
        const { gen: i, data: a, $data: c, schemaCode: f, schema: u } = o;
        c || (u && typeof u == "object")
          ? o.fail$data((0, e._)`!${(0, t.useFunc)(i, r.default)}(${a}, ${f})`)
          : o.fail((0, e._)`${u} !== ${a}`);
      },
    };
  return (on.default = s), on;
}
var an = {},
  Qi;
function Th() {
  if (Qi) return an;
  (Qi = 1), Object.defineProperty(an, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    r = fo(),
    s = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`,
      },
      code(o) {
        const {
          gen: i,
          data: a,
          $data: c,
          schema: f,
          schemaCode: u,
          it: h,
        } = o;
        if (!c && f.length === 0)
          throw new Error("enum must have non-empty array");
        const v = f.length >= h.opts.loopEnum;
        let w;
        const P = () => w ?? (w = (0, t.useFunc)(i, r.default));
        let b;
        if (v || c) (b = i.let("valid")), o.block$data(b, g);
        else {
          if (!Array.isArray(f)) throw new Error("ajv implementation error");
          const l = i.const("vSchema", u);
          b = (0, e.or)(...f.map((m, $) => p(l, $)));
        }
        o.pass(b);
        function g() {
          i.assign(b, !1),
            i.forOf("v", u, (l) =>
              i.if((0, e._)`${P()}(${a}, ${l})`, () => i.assign(b, !0).break())
            );
        }
        function p(l, m) {
          const $ = f[m];
          return typeof $ == "object" && $ !== null
            ? (0, e._)`${P()}(${a}, ${l}[${m}])`
            : (0, e._)`${a} === ${$}`;
        }
      },
    };
  return (an.default = s), an;
}
var Zi;
function Ch() {
  if (Zi) return Wr;
  (Zi = 1), Object.defineProperty(Wr, "__esModule", { value: !0 });
  const e = _h(),
    t = vh(),
    r = wh(),
    n = bh(),
    s = Eh(),
    o = Sh(),
    i = Ph(),
    a = Rh(),
    c = Oh(),
    f = Th(),
    u = [
      e.default,
      t.default,
      r.default,
      n.default,
      s.default,
      o.default,
      i.default,
      a.default,
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      c.default,
      f.default,
    ];
  return (Wr.default = u), Wr;
}
var ln = {},
  Bt = {},
  ea;
function sc() {
  if (ea) return Bt;
  (ea = 1),
    Object.defineProperty(Bt, "__esModule", { value: !0 }),
    (Bt.validateAdditionalItems = void 0);
  const e = ue(),
    t = he(),
    n = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: o } }) =>
          (0, e.str)`must NOT have more than ${o} items`,
        params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`,
      },
      code(o) {
        const { parentSchema: i, it: a } = o,
          { items: c } = i;
        if (!Array.isArray(c)) {
          (0, t.checkStrictMode)(
            a,
            '"additionalItems" is ignored when "items" is not an array of schemas'
          );
          return;
        }
        s(o, c);
      },
    };
  function s(o, i) {
    const { gen: a, schema: c, data: f, keyword: u, it: h } = o;
    h.items = !0;
    const v = a.const("len", (0, e._)`${f}.length`);
    if (c === !1)
      o.setParams({ len: i.length }), o.pass((0, e._)`${v} <= ${i.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(h, c)) {
      const P = a.var("valid", (0, e._)`${v} <= ${i.length}`);
      a.if((0, e.not)(P), () => w(P)), o.ok(P);
    }
    function w(P) {
      a.forRange("i", i.length, v, (b) => {
        o.subschema({ keyword: u, dataProp: b, dataPropType: t.Type.Num }, P),
          h.allErrors || a.if((0, e.not)(P), () => a.break());
      });
    }
  }
  return (Bt.validateAdditionalItems = s), (Bt.default = n), Bt;
}
var cn = {},
  Wt = {},
  ta;
function oc() {
  if (ta) return Wt;
  (ta = 1),
    Object.defineProperty(Wt, "__esModule", { value: !0 }),
    (Wt.validateTuple = void 0);
  const e = ue(),
    t = he(),
    r = tt(),
    n = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(o) {
        const { schema: i, it: a } = o;
        if (Array.isArray(i)) return s(o, "additionalItems", i);
        (a.items = !0),
          !(0, t.alwaysValidSchema)(a, i) && o.ok((0, r.validateArray)(o));
      },
    };
  function s(o, i, a = o.schema) {
    const { gen: c, parentSchema: f, data: u, keyword: h, it: v } = o;
    b(f),
      v.opts.unevaluated &&
        a.length &&
        v.items !== !0 &&
        (v.items = t.mergeEvaluated.items(c, a.length, v.items));
    const w = c.name("valid"),
      P = c.const("len", (0, e._)`${u}.length`);
    a.forEach((g, p) => {
      (0, t.alwaysValidSchema)(v, g) ||
        (c.if((0, e._)`${P} > ${p}`, () =>
          o.subschema({ keyword: h, schemaProp: p, dataProp: p }, w)
        ),
        o.ok(w));
    });
    function b(g) {
      const { opts: p, errSchemaPath: l } = v,
        m = a.length,
        $ = m === g.minItems && (m === g.maxItems || g[i] === !1);
      if (p.strictTuples && !$) {
        const S = `"${h}" is ${m}-tuple, but minItems or maxItems/${i} are not specified or different at path "${l}"`;
        (0, t.checkStrictMode)(v, S, p.strictTuples);
      }
    }
  }
  return (Wt.validateTuple = s), (Wt.default = n), Wt;
}
var ra;
function Nh() {
  if (ra) return cn;
  (ra = 1), Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = oc(),
    t = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: (r) => (0, e.validateTuple)(r, "items"),
    };
  return (cn.default = t), cn;
}
var un = {},
  na;
function Ih() {
  if (na) return un;
  (na = 1), Object.defineProperty(un, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    r = tt(),
    n = sc(),
    o = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: i } }) =>
          (0, e.str)`must NOT have more than ${i} items`,
        params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`,
      },
      code(i) {
        const { schema: a, parentSchema: c, it: f } = i,
          { prefixItems: u } = c;
        (f.items = !0),
          !(0, t.alwaysValidSchema)(f, a) &&
            (u
              ? (0, n.validateAdditionalItems)(i, u)
              : i.ok((0, r.validateArray)(i)));
      },
    };
  return (un.default = o), un;
}
var fn = {},
  sa;
function kh() {
  if (sa) return fn;
  (sa = 1), Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    n = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: {
        message: ({ params: { min: s, max: o } }) =>
          o === void 0
            ? (0, e.str)`must contain at least ${s} valid item(s)`
            : (0,
              e.str)`must contain at least ${s} and no more than ${o} valid item(s)`,
        params: ({ params: { min: s, max: o } }) =>
          o === void 0
            ? (0, e._)`{minContains: ${s}}`
            : (0, e._)`{minContains: ${s}, maxContains: ${o}}`,
      },
      code(s) {
        const { gen: o, schema: i, parentSchema: a, data: c, it: f } = s;
        let u, h;
        const { minContains: v, maxContains: w } = a;
        f.opts.next ? ((u = v === void 0 ? 1 : v), (h = w)) : (u = 1);
        const P = o.const("len", (0, e._)`${c}.length`);
        if ((s.setParams({ min: u, max: h }), h === void 0 && u === 0)) {
          (0, t.checkStrictMode)(
            f,
            '"minContains" == 0 without "maxContains": "contains" keyword ignored'
          );
          return;
        }
        if (h !== void 0 && u > h) {
          (0, t.checkStrictMode)(
            f,
            '"minContains" > "maxContains" is always invalid'
          ),
            s.fail();
          return;
        }
        if ((0, t.alwaysValidSchema)(f, i)) {
          let m = (0, e._)`${P} >= ${u}`;
          h !== void 0 && (m = (0, e._)`${m} && ${P} <= ${h}`), s.pass(m);
          return;
        }
        f.items = !0;
        const b = o.name("valid");
        h === void 0 && u === 1
          ? p(b, () => o.if(b, () => o.break()))
          : u === 0
          ? (o.let(b, !0), h !== void 0 && o.if((0, e._)`${c}.length > 0`, g))
          : (o.let(b, !1), g()),
          s.result(b, () => s.reset());
        function g() {
          const m = o.name("_valid"),
            $ = o.let("count", 0);
          p(m, () => o.if(m, () => l($)));
        }
        function p(m, $) {
          o.forRange("i", 0, P, (S) => {
            s.subschema(
              {
                keyword: "contains",
                dataProp: S,
                dataPropType: t.Type.Num,
                compositeRule: !0,
              },
              m
            ),
              $();
          });
        }
        function l(m) {
          o.code((0, e._)`${m}++`),
            h === void 0
              ? o.if((0, e._)`${m} >= ${u}`, () => o.assign(b, !0).break())
              : (o.if((0, e._)`${m} > ${h}`, () => o.assign(b, !1).break()),
                u === 1
                  ? o.assign(b, !0)
                  : o.if((0, e._)`${m} >= ${u}`, () => o.assign(b, !0)));
        }
      },
    };
  return (fn.default = n), fn;
}
var Ts = {},
  oa;
function Ah() {
  return (
    oa ||
      ((oa = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0);
        const t = ue(),
          r = he(),
          n = tt();
        e.error = {
          message: ({ params: { property: c, depsCount: f, deps: u } }) => {
            const h = f === 1 ? "property" : "properties";
            return (0,
            t.str)`must have ${h} ${u} when property ${c} is present`;
          },
          params: ({
            params: { property: c, depsCount: f, deps: u, missingProperty: h },
          }) => (0, t._)`{property: ${c},
    missingProperty: ${h},
    depsCount: ${f},
    deps: ${u}}`,
        };
        const s = {
          keyword: "dependencies",
          type: "object",
          schemaType: "object",
          error: e.error,
          code(c) {
            const [f, u] = o(c);
            i(c, f), a(c, u);
          },
        };
        function o({ schema: c }) {
          const f = {},
            u = {};
          for (const h in c) {
            if (h === "__proto__") continue;
            const v = Array.isArray(c[h]) ? f : u;
            v[h] = c[h];
          }
          return [f, u];
        }
        function i(c, f = c.schema) {
          const { gen: u, data: h, it: v } = c;
          if (Object.keys(f).length === 0) return;
          const w = u.let("missing");
          for (const P in f) {
            const b = f[P];
            if (b.length === 0) continue;
            const g = (0, n.propertyInData)(u, h, P, v.opts.ownProperties);
            c.setParams({
              property: P,
              depsCount: b.length,
              deps: b.join(", "),
            }),
              v.allErrors
                ? u.if(g, () => {
                    for (const p of b) (0, n.checkReportMissingProp)(c, p);
                  })
                : (u.if(
                    (0, t._)`${g} && (${(0, n.checkMissingProp)(c, b, w)})`
                  ),
                  (0, n.reportMissingProp)(c, w),
                  u.else());
          }
        }
        e.validatePropertyDeps = i;
        function a(c, f = c.schema) {
          const { gen: u, data: h, keyword: v, it: w } = c,
            P = u.name("valid");
          for (const b in f)
            (0, r.alwaysValidSchema)(w, f[b]) ||
              (u.if(
                (0, n.propertyInData)(u, h, b, w.opts.ownProperties),
                () => {
                  const g = c.subschema({ keyword: v, schemaProp: b }, P);
                  c.mergeValidEvaluated(g, P);
                },
                () => u.var(P, !0)
              ),
              c.ok(P));
        }
        (e.validateSchemaDeps = a), (e.default = s);
      })(Ts)),
    Ts
  );
}
var dn = {},
  ia;
function jh() {
  if (ia) return dn;
  (ia = 1), Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    n = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: {
        message: "property name must be valid",
        params: ({ params: s }) => (0, e._)`{propertyName: ${s.propertyName}}`,
      },
      code(s) {
        const { gen: o, schema: i, data: a, it: c } = s;
        if ((0, t.alwaysValidSchema)(c, i)) return;
        const f = o.name("valid");
        o.forIn("key", a, (u) => {
          s.setParams({ propertyName: u }),
            s.subschema(
              {
                keyword: "propertyNames",
                data: u,
                dataTypes: ["string"],
                propertyName: u,
                compositeRule: !0,
              },
              f
            ),
            o.if((0, e.not)(f), () => {
              s.error(!0), c.allErrors || o.break();
            });
        }),
          s.ok(f);
      },
    };
  return (dn.default = n), dn;
}
var hn = {},
  aa;
function ic() {
  if (aa) return hn;
  (aa = 1), Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = tt(),
    t = ue(),
    r = St(),
    n = he(),
    o = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: {
        message: "must NOT have additional properties",
        params: ({ params: i }) =>
          (0, t._)`{additionalProperty: ${i.additionalProperty}}`,
      },
      code(i) {
        const {
          gen: a,
          schema: c,
          parentSchema: f,
          data: u,
          errsCount: h,
          it: v,
        } = i;
        if (!h) throw new Error("ajv implementation error");
        const { allErrors: w, opts: P } = v;
        if (
          ((v.props = !0),
          P.removeAdditional !== "all" && (0, n.alwaysValidSchema)(v, c))
        )
          return;
        const b = (0, e.allSchemaProperties)(f.properties),
          g = (0, e.allSchemaProperties)(f.patternProperties);
        p(), i.ok((0, t._)`${h} === ${r.default.errors}`);
        function p() {
          a.forIn("key", u, (E) => {
            !b.length && !g.length ? $(E) : a.if(l(E), () => $(E));
          });
        }
        function l(E) {
          let O;
          if (b.length > 8) {
            const x = (0, n.schemaRefOrVal)(v, f.properties, "properties");
            O = (0, e.isOwnProperty)(a, x, E);
          } else
            b.length
              ? (O = (0, t.or)(...b.map((x) => (0, t._)`${E} === ${x}`)))
              : (O = t.nil);
          return (
            g.length &&
              (O = (0, t.or)(
                O,
                ...g.map((x) => (0, t._)`${(0, e.usePattern)(i, x)}.test(${E})`)
              )),
            (0, t.not)(O)
          );
        }
        function m(E) {
          a.code((0, t._)`delete ${u}[${E}]`);
        }
        function $(E) {
          if (
            P.removeAdditional === "all" ||
            (P.removeAdditional && c === !1)
          ) {
            m(E);
            return;
          }
          if (c === !1) {
            i.setParams({ additionalProperty: E }), i.error(), w || a.break();
            return;
          }
          if (typeof c == "object" && !(0, n.alwaysValidSchema)(v, c)) {
            const O = a.name("valid");
            P.removeAdditional === "failing"
              ? (S(E, O, !1),
                a.if((0, t.not)(O), () => {
                  i.reset(), m(E);
                }))
              : (S(E, O), w || a.if((0, t.not)(O), () => a.break()));
          }
        }
        function S(E, O, x) {
          const F = {
            keyword: "additionalProperties",
            dataProp: E,
            dataPropType: n.Type.Str,
          };
          x === !1 &&
            Object.assign(F, {
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1,
            }),
            i.subschema(F, O);
        }
      },
    };
  return (hn.default = o), hn;
}
var pn = {},
  la;
function Mh() {
  if (la) return pn;
  (la = 1), Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = Mr(),
    t = tt(),
    r = he(),
    n = ic(),
    s = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(o) {
        const { gen: i, schema: a, parentSchema: c, data: f, it: u } = o;
        u.opts.removeAdditional === "all" &&
          c.additionalProperties === void 0 &&
          n.default.code(
            new e.KeywordCxt(u, n.default, "additionalProperties")
          );
        const h = (0, t.allSchemaProperties)(a);
        for (const g of h) u.definedProperties.add(g);
        u.opts.unevaluated &&
          h.length &&
          u.props !== !0 &&
          (u.props = r.mergeEvaluated.props(i, (0, r.toHash)(h), u.props));
        const v = h.filter((g) => !(0, r.alwaysValidSchema)(u, a[g]));
        if (v.length === 0) return;
        const w = i.name("valid");
        for (const g of v)
          P(g)
            ? b(g)
            : (i.if((0, t.propertyInData)(i, f, g, u.opts.ownProperties)),
              b(g),
              u.allErrors || i.else().var(w, !0),
              i.endIf()),
            o.it.definedProperties.add(g),
            o.ok(w);
        function P(g) {
          return (
            u.opts.useDefaults && !u.compositeRule && a[g].default !== void 0
          );
        }
        function b(g) {
          o.subschema({ keyword: "properties", schemaProp: g, dataProp: g }, w);
        }
      },
    };
  return (pn.default = s), pn;
}
var mn = {},
  ca;
function xh() {
  if (ca) return mn;
  (ca = 1), Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = tt(),
    t = ue(),
    r = he(),
    n = he(),
    s = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(o) {
        const { gen: i, schema: a, data: c, parentSchema: f, it: u } = o,
          { opts: h } = u,
          v = (0, e.allSchemaProperties)(a),
          w = v.filter(($) => (0, r.alwaysValidSchema)(u, a[$]));
        if (
          v.length === 0 ||
          (w.length === v.length && (!u.opts.unevaluated || u.props === !0))
        )
          return;
        const P = h.strictSchema && !h.allowMatchingProperties && f.properties,
          b = i.name("valid");
        u.props !== !0 &&
          !(u.props instanceof t.Name) &&
          (u.props = (0, n.evaluatedPropsToName)(i, u.props));
        const { props: g } = u;
        p();
        function p() {
          for (const $ of v)
            P && l($), u.allErrors ? m($) : (i.var(b, !0), m($), i.if(b));
        }
        function l($) {
          for (const S in P)
            new RegExp($).test(S) &&
              (0, r.checkStrictMode)(
                u,
                `property ${S} matches pattern ${$} (use allowMatchingProperties)`
              );
        }
        function m($) {
          i.forIn("key", c, (S) => {
            i.if((0, t._)`${(0, e.usePattern)(o, $)}.test(${S})`, () => {
              const E = w.includes($);
              E ||
                o.subschema(
                  {
                    keyword: "patternProperties",
                    schemaProp: $,
                    dataProp: S,
                    dataPropType: n.Type.Str,
                  },
                  b
                ),
                u.opts.unevaluated && g !== !0
                  ? i.assign((0, t._)`${g}[${S}]`, !0)
                  : !E && !u.allErrors && i.if((0, t.not)(b), () => i.break());
            });
          });
        }
      },
    };
  return (mn.default = s), mn;
}
var gn = {},
  ua;
function qh() {
  if (ua) return gn;
  (ua = 1), Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = he(),
    t = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(r) {
        const { gen: n, schema: s, it: o } = r;
        if ((0, e.alwaysValidSchema)(o, s)) {
          r.fail();
          return;
        }
        const i = n.name("valid");
        r.subschema(
          {
            keyword: "not",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1,
          },
          i
        ),
          r.failResult(
            i,
            () => r.reset(),
            () => r.error()
          );
      },
      error: { message: "must NOT be valid" },
    };
  return (gn.default = t), gn;
}
var yn = {},
  fa;
function Dh() {
  if (fa) return yn;
  (fa = 1), Object.defineProperty(yn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: tt().validateUnion,
    error: { message: "must match a schema in anyOf" },
  };
  return (yn.default = t), yn;
}
var _n = {},
  da;
function Uh() {
  if (da) return _n;
  (da = 1), Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    n = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: {
        message: "must match exactly one schema in oneOf",
        params: ({ params: s }) => (0, e._)`{passingSchemas: ${s.passing}}`,
      },
      code(s) {
        const { gen: o, schema: i, parentSchema: a, it: c } = s;
        if (!Array.isArray(i)) throw new Error("ajv implementation error");
        if (c.opts.discriminator && a.discriminator) return;
        const f = i,
          u = o.let("valid", !1),
          h = o.let("passing", null),
          v = o.name("_valid");
        s.setParams({ passing: h }),
          o.block(w),
          s.result(
            u,
            () => s.reset(),
            () => s.error(!0)
          );
        function w() {
          f.forEach((P, b) => {
            let g;
            (0, t.alwaysValidSchema)(c, P)
              ? o.var(v, !0)
              : (g = s.subschema(
                  { keyword: "oneOf", schemaProp: b, compositeRule: !0 },
                  v
                )),
              b > 0 &&
                o
                  .if((0, e._)`${v} && ${u}`)
                  .assign(u, !1)
                  .assign(h, (0, e._)`[${h}, ${b}]`)
                  .else(),
              o.if(v, () => {
                o.assign(u, !0),
                  o.assign(h, b),
                  g && s.mergeEvaluated(g, e.Name);
              });
          });
        }
      },
    };
  return (_n.default = n), _n;
}
var vn = {},
  ha;
function Lh() {
  if (ha) return vn;
  (ha = 1), Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = he(),
    t = {
      keyword: "allOf",
      schemaType: "array",
      code(r) {
        const { gen: n, schema: s, it: o } = r;
        if (!Array.isArray(s)) throw new Error("ajv implementation error");
        const i = n.name("valid");
        s.forEach((a, c) => {
          if ((0, e.alwaysValidSchema)(o, a)) return;
          const f = r.subschema({ keyword: "allOf", schemaProp: c }, i);
          r.ok(i), r.mergeEvaluated(f);
        });
      },
    };
  return (vn.default = t), vn;
}
var $n = {},
  pa;
function Vh() {
  if (pa) return $n;
  (pa = 1), Object.defineProperty($n, "__esModule", { value: !0 });
  const e = ue(),
    t = he(),
    n = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: {
        message: ({ params: o }) =>
          (0, e.str)`must match "${o.ifClause}" schema`,
        params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`,
      },
      code(o) {
        const { gen: i, parentSchema: a, it: c } = o;
        a.then === void 0 &&
          a.else === void 0 &&
          (0, t.checkStrictMode)(
            c,
            '"if" without "then" and "else" is ignored'
          );
        const f = s(c, "then"),
          u = s(c, "else");
        if (!f && !u) return;
        const h = i.let("valid", !0),
          v = i.name("_valid");
        if ((w(), o.reset(), f && u)) {
          const b = i.let("ifClause");
          o.setParams({ ifClause: b }), i.if(v, P("then", b), P("else", b));
        } else f ? i.if(v, P("then")) : i.if((0, e.not)(v), P("else"));
        o.pass(h, () => o.error(!0));
        function w() {
          const b = o.subschema(
            {
              keyword: "if",
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1,
            },
            v
          );
          o.mergeEvaluated(b);
        }
        function P(b, g) {
          return () => {
            const p = o.subschema({ keyword: b }, v);
            i.assign(h, v),
              o.mergeValidEvaluated(p, h),
              g ? i.assign(g, (0, e._)`${b}`) : o.setParams({ ifClause: b });
          };
        }
      },
    };
  function s(o, i) {
    const a = o.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return ($n.default = n), $n;
}
var wn = {},
  ma;
function Fh() {
  if (ma) return wn;
  (ma = 1), Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = he(),
    t = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: r, parentSchema: n, it: s }) {
        n.if === void 0 &&
          (0, e.checkStrictMode)(s, `"${r}" without "if" is ignored`);
      },
    };
  return (wn.default = t), wn;
}
var ga;
function Kh() {
  if (ga) return ln;
  (ga = 1), Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = sc(),
    t = Nh(),
    r = oc(),
    n = Ih(),
    s = kh(),
    o = Ah(),
    i = jh(),
    a = ic(),
    c = Mh(),
    f = xh(),
    u = qh(),
    h = Dh(),
    v = Uh(),
    w = Lh(),
    P = Vh(),
    b = Fh();
  function g(p = !1) {
    const l = [
      u.default,
      h.default,
      v.default,
      w.default,
      P.default,
      b.default,
      i.default,
      a.default,
      o.default,
      c.default,
      f.default,
    ];
    return (
      p ? l.push(t.default, n.default) : l.push(e.default, r.default),
      l.push(s.default),
      l
    );
  }
  return (ln.default = g), ln;
}
var bn = {},
  En = {},
  ya;
function Hh() {
  if (ya) return En;
  (ya = 1), Object.defineProperty(En, "__esModule", { value: !0 });
  const e = ue(),
    r = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: {
        message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
        params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`,
      },
      code(n, s) {
        const {
            gen: o,
            data: i,
            $data: a,
            schema: c,
            schemaCode: f,
            it: u,
          } = n,
          { opts: h, errSchemaPath: v, schemaEnv: w, self: P } = u;
        if (!h.validateFormats) return;
        a ? b() : g();
        function b() {
          const p = o.scopeValue("formats", {
              ref: P.formats,
              code: h.code.formats,
            }),
            l = o.const("fDef", (0, e._)`${p}[${f}]`),
            m = o.let("fType"),
            $ = o.let("format");
          o.if(
            (0, e._)`typeof ${l} == "object" && !(${l} instanceof RegExp)`,
            () =>
              o
                .assign(m, (0, e._)`${l}.type || "string"`)
                .assign($, (0, e._)`${l}.validate`),
            () => o.assign(m, (0, e._)`"string"`).assign($, l)
          ),
            n.fail$data((0, e.or)(S(), E()));
          function S() {
            return h.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${$}`;
          }
          function E() {
            const O = w.$async
                ? (0, e._)`(${l}.async ? await ${$}(${i}) : ${$}(${i}))`
                : (0, e._)`${$}(${i})`,
              x = (0,
              e._)`(typeof ${$} == "function" ? ${O} : ${$}.test(${i}))`;
            return (0, e._)`${$} && ${$} !== true && ${m} === ${s} && !${x}`;
          }
        }
        function g() {
          const p = P.formats[c];
          if (!p) {
            S();
            return;
          }
          if (p === !0) return;
          const [l, m, $] = E(p);
          l === s && n.pass(O());
          function S() {
            if (h.strictSchema === !1) {
              P.logger.warn(x());
              return;
            }
            throw new Error(x());
            function x() {
              return `unknown format "${c}" ignored in schema at path "${v}"`;
            }
          }
          function E(x) {
            const F =
                x instanceof RegExp
                  ? (0, e.regexpCode)(x)
                  : h.code.formats
                  ? (0, e._)`${h.code.formats}${(0, e.getProperty)(c)}`
                  : void 0,
              X = o.scopeValue("formats", { key: c, ref: x, code: F });
            return typeof x == "object" && !(x instanceof RegExp)
              ? [x.type || "string", x.validate, (0, e._)`${X}.validate`]
              : ["string", x, X];
          }
          function O() {
            if (typeof p == "object" && !(p instanceof RegExp) && p.async) {
              if (!w.$async) throw new Error("async format in sync schema");
              return (0, e._)`await ${$}(${i})`;
            }
            return typeof m == "function"
              ? (0, e._)`${$}(${i})`
              : (0, e._)`${$}.test(${i})`;
          }
        }
      },
    };
  return (En.default = r), En;
}
var _a;
function zh() {
  if (_a) return bn;
  (_a = 1), Object.defineProperty(bn, "__esModule", { value: !0 });
  const t = [Hh().default];
  return (bn.default = t), bn;
}
var Lt = {},
  va;
function Gh() {
  return (
    va ||
      ((va = 1),
      Object.defineProperty(Lt, "__esModule", { value: !0 }),
      (Lt.contentVocabulary = Lt.metadataVocabulary = void 0),
      (Lt.metadataVocabulary = [
        "title",
        "description",
        "default",
        "deprecated",
        "readOnly",
        "writeOnly",
        "examples",
      ]),
      (Lt.contentVocabulary = [
        "contentMediaType",
        "contentEncoding",
        "contentSchema",
      ])),
    Lt
  );
}
var $a;
function Bh() {
  if ($a) return zr;
  ($a = 1), Object.defineProperty(zr, "__esModule", { value: !0 });
  const e = yh(),
    t = Ch(),
    r = Kh(),
    n = zh(),
    s = Gh(),
    o = [
      e.default,
      t.default,
      (0, r.default)(),
      n.default,
      s.metadataVocabulary,
      s.contentVocabulary,
    ];
  return (zr.default = o), zr;
}
var Sn = {},
  dr = {},
  wa;
function Wh() {
  if (wa) return dr;
  (wa = 1),
    Object.defineProperty(dr, "__esModule", { value: !0 }),
    (dr.DiscrError = void 0);
  var e;
  return (
    (function (t) {
      (t.Tag = "tag"), (t.Mapping = "mapping");
    })(e || (dr.DiscrError = e = {})),
    dr
  );
}
var ba;
function Jh() {
  if (ba) return Sn;
  (ba = 1), Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = ue(),
    t = Wh(),
    r = uo(),
    n = ns(),
    s = he(),
    i = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: {
        message: ({ params: { discrError: a, tagName: c } }) =>
          a === t.DiscrError.Tag
            ? `tag "${c}" must be string`
            : `value of tag "${c}" must be in oneOf`,
        params: ({ params: { discrError: a, tag: c, tagName: f } }) =>
          (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${c}}`,
      },
      code(a) {
        const { gen: c, data: f, schema: u, parentSchema: h, it: v } = a,
          { oneOf: w } = h;
        if (!v.opts.discriminator)
          throw new Error("discriminator: requires discriminator option");
        const P = u.propertyName;
        if (typeof P != "string")
          throw new Error("discriminator: requires propertyName");
        if (u.mapping)
          throw new Error("discriminator: mapping is not supported");
        if (!w) throw new Error("discriminator: requires oneOf keyword");
        const b = c.let("valid", !1),
          g = c.const("tag", (0, e._)`${f}${(0, e.getProperty)(P)}`);
        c.if(
          (0, e._)`typeof ${g} == "string"`,
          () => p(),
          () =>
            a.error(!1, { discrError: t.DiscrError.Tag, tag: g, tagName: P })
        ),
          a.ok(b);
        function p() {
          const $ = m();
          c.if(!1);
          for (const S in $)
            c.elseIf((0, e._)`${g} === ${S}`), c.assign(b, l($[S]));
          c.else(),
            a.error(!1, {
              discrError: t.DiscrError.Mapping,
              tag: g,
              tagName: P,
            }),
            c.endIf();
        }
        function l($) {
          const S = c.name("valid"),
            E = a.subschema({ keyword: "oneOf", schemaProp: $ }, S);
          return a.mergeEvaluated(E, e.Name), S;
        }
        function m() {
          var $;
          const S = {},
            E = x(h);
          let O = !0;
          for (let Y = 0; Y < w.length; Y++) {
            let re = w[Y];
            if (
              re != null &&
              re.$ref &&
              !(0, s.schemaHasRulesButRef)(re, v.self.RULES)
            ) {
              const ie = re.$ref;
              if (
                ((re = r.resolveRef.call(
                  v.self,
                  v.schemaEnv.root,
                  v.baseId,
                  ie
                )),
                re instanceof r.SchemaEnv && (re = re.schema),
                re === void 0)
              )
                throw new n.default(v.opts.uriResolver, v.baseId, ie);
            }
            const Q =
              ($ = re == null ? void 0 : re.properties) === null || $ === void 0
                ? void 0
                : $[P];
            if (typeof Q != "object")
              throw new Error(
                `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${P}"`
              );
            (O = O && (E || x(re))), F(Q, Y);
          }
          if (!O) throw new Error(`discriminator: "${P}" must be required`);
          return S;
          function x({ required: Y }) {
            return Array.isArray(Y) && Y.includes(P);
          }
          function F(Y, re) {
            if (Y.const) X(Y.const, re);
            else if (Y.enum) for (const Q of Y.enum) X(Q, re);
            else
              throw new Error(
                `discriminator: "properties/${P}" must have "const" or "enum"`
              );
          }
          function X(Y, re) {
            if (typeof Y != "string" || Y in S)
              throw new Error(
                `discriminator: "${P}" values must be unique strings`
              );
            S[Y] = re;
          }
        }
      },
    };
  return (Sn.default = i), Sn;
}
const Xh = "http://json-schema.org/draft-07/schema#",
  Yh = "http://json-schema.org/draft-07/schema#",
  Qh = "Core schema meta-schema",
  Zh = {
    schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
    nonNegativeInteger: { type: "integer", minimum: 0 },
    nonNegativeIntegerDefault0: {
      allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }],
    },
    simpleTypes: {
      enum: [
        "array",
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string",
      ],
    },
    stringArray: {
      type: "array",
      items: { type: "string" },
      uniqueItems: !0,
      default: [],
    },
  },
  ep = ["object", "boolean"],
  tp = {
    $id: { type: "string", format: "uri-reference" },
    $schema: { type: "string", format: "uri" },
    $ref: { type: "string", format: "uri-reference" },
    $comment: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    default: !0,
    readOnly: { type: "boolean", default: !1 },
    examples: { type: "array", items: !0 },
    multipleOf: { type: "number", exclusiveMinimum: 0 },
    maximum: { type: "number" },
    exclusiveMaximum: { type: "number" },
    minimum: { type: "number" },
    exclusiveMinimum: { type: "number" },
    maxLength: { $ref: "#/definitions/nonNegativeInteger" },
    minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
    pattern: { type: "string", format: "regex" },
    additionalItems: { $ref: "#" },
    items: {
      anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
      default: !0,
    },
    maxItems: { $ref: "#/definitions/nonNegativeInteger" },
    minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
    uniqueItems: { type: "boolean", default: !1 },
    contains: { $ref: "#" },
    maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
    minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
    required: { $ref: "#/definitions/stringArray" },
    additionalProperties: { $ref: "#" },
    definitions: {
      type: "object",
      additionalProperties: { $ref: "#" },
      default: {},
    },
    properties: {
      type: "object",
      additionalProperties: { $ref: "#" },
      default: {},
    },
    patternProperties: {
      type: "object",
      additionalProperties: { $ref: "#" },
      propertyNames: { format: "regex" },
      default: {},
    },
    dependencies: {
      type: "object",
      additionalProperties: {
        anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
      },
    },
    propertyNames: { $ref: "#" },
    const: !0,
    enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
    type: {
      anyOf: [
        { $ref: "#/definitions/simpleTypes" },
        {
          type: "array",
          items: { $ref: "#/definitions/simpleTypes" },
          minItems: 1,
          uniqueItems: !0,
        },
      ],
    },
    format: { type: "string" },
    contentMediaType: { type: "string" },
    contentEncoding: { type: "string" },
    if: { $ref: "#" },
    then: { $ref: "#" },
    else: { $ref: "#" },
    allOf: { $ref: "#/definitions/schemaArray" },
    anyOf: { $ref: "#/definitions/schemaArray" },
    oneOf: { $ref: "#/definitions/schemaArray" },
    not: { $ref: "#" },
  },
  rp = {
    $schema: Xh,
    $id: Yh,
    title: Qh,
    definitions: Zh,
    type: ep,
    properties: tp,
    default: !0,
  };
var Ea;
function ac() {
  return (
    Ea ||
      ((Ea = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MissingRefError =
            t.ValidationError =
            t.CodeGen =
            t.Name =
            t.nil =
            t.stringify =
            t.str =
            t._ =
            t.KeywordCxt =
            t.Ajv =
              void 0);
        const r = ph(),
          n = Bh(),
          s = Jh(),
          o = rp,
          i = ["/properties"],
          a = "http://json-schema.org/draft-07/schema";
        class c extends r.default {
          _addVocabularies() {
            super._addVocabularies(),
              n.default.forEach((P) => this.addVocabulary(P)),
              this.opts.discriminator && this.addKeyword(s.default);
          }
          _addDefaultMetaSchema() {
            if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
            const P = this.opts.$data ? this.$dataMetaSchema(o, i) : o;
            this.addMetaSchema(P, a, !1),
              (this.refs["http://json-schema.org/schema"] = a);
          }
          defaultMeta() {
            return (this.opts.defaultMeta =
              super.defaultMeta() || (this.getSchema(a) ? a : void 0));
          }
        }
        (t.Ajv = c),
          (e.exports = t = c),
          (e.exports.Ajv = c),
          Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = c);
        var f = Mr();
        Object.defineProperty(t, "KeywordCxt", {
          enumerable: !0,
          get: function () {
            return f.KeywordCxt;
          },
        });
        var u = ue();
        Object.defineProperty(t, "_", {
          enumerable: !0,
          get: function () {
            return u._;
          },
        }),
          Object.defineProperty(t, "str", {
            enumerable: !0,
            get: function () {
              return u.str;
            },
          }),
          Object.defineProperty(t, "stringify", {
            enumerable: !0,
            get: function () {
              return u.stringify;
            },
          }),
          Object.defineProperty(t, "nil", {
            enumerable: !0,
            get: function () {
              return u.nil;
            },
          }),
          Object.defineProperty(t, "Name", {
            enumerable: !0,
            get: function () {
              return u.Name;
            },
          }),
          Object.defineProperty(t, "CodeGen", {
            enumerable: !0,
            get: function () {
              return u.CodeGen;
            },
          });
        var h = co();
        Object.defineProperty(t, "ValidationError", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        });
        var v = ns();
        Object.defineProperty(t, "MissingRefError", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        });
      })(Lr, Lr.exports)),
    Lr.exports
  );
}
var np = ac();
const sp = ec(np);
var Pn = { exports: {} },
  Sa;
function op() {
  return (
    Sa ||
      ((Sa = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = ac(),
          n = ue(),
          s = Ir(),
          o = Mr(),
          i = jr(),
          a = St(),
          c = "errorMessage",
          f = new r.Name("emUsed"),
          u = {
            required: "missingProperty",
            dependencies: "property",
            dependentRequired: "property",
          },
          h = /\$\{[^}]+\}/,
          v = /\$\{([^}]+)\}/g,
          w = /^""\s*\+\s*|\s*\+\s*""$/g;
        function P(g) {
          return {
            keyword: c,
            schemaType: ["string", "object"],
            post: !0,
            code(p) {
              const { gen: l, data: m, schema: $, schemaValue: S, it: E } = p;
              if (E.createErrors === !1) return;
              const O = $,
                x = n.strConcat(a.default.instancePath, E.errorPath);
              l.if(r._`${a.default.errors} > 0`, () => {
                if (typeof O == "object") {
                  const [N, _] = X(O);
                  _ && Y(_), N && re(N), Q(F(O));
                }
                const j = typeof O == "string" ? O : O._;
                j && ie(j), g.keepErrors || ve();
              });
              function F({ properties: j, items: N }) {
                const _ = {};
                if (j) {
                  _.props = {};
                  for (const T in j) _.props[T] = [];
                }
                if (N) {
                  _.items = {};
                  for (let T = 0; T < N.length; T++) _.items[T] = [];
                }
                return _;
              }
              function X(j) {
                let N, _;
                for (const T in j) {
                  if (T === "properties" || T === "items") continue;
                  const q = j[T];
                  if (typeof q == "object") {
                    N || (N = {});
                    const I = (N[T] = {});
                    for (const M in q) I[M] = [];
                  } else _ || (_ = {}), (_[T] = []);
                }
                return [N, _];
              }
              function Y(j) {
                const N = l.const("emErrors", r.stringify(j)),
                  _ = l.const("templates", Se(j, $));
                l.forOf("err", a.default.vErrors, (M) =>
                  l.if(fe(M, N), () =>
                    l
                      .code(r._`${N}[${M}.keyword].push(${M})`)
                      .assign(r._`${M}.${f}`, !0)
                  )
                );
                const { singleError: T } = g;
                if (T) {
                  const M = l.let("message", r._`""`),
                    U = l.let("paramsErrors", r._`[]`);
                  q((K) => {
                    l.if(M, () =>
                      l.code(r._`${M} += ${typeof T == "string" ? T : ";"}`)
                    ),
                      l.code(r._`${M} += ${I(K)}`),
                      l.assign(U, r._`${U}.concat(${N}[${K}])`);
                  }),
                    i.reportError(p, {
                      message: M,
                      params: r._`{errors: ${U}}`,
                    });
                } else
                  q((M) =>
                    i.reportError(p, {
                      message: I(M),
                      params: r._`{errors: ${N}[${M}]}`,
                    })
                  );
                function q(M) {
                  l.forIn("key", N, (U) =>
                    l.if(r._`${N}[${U}].length`, () => M(U))
                  );
                }
                function I(M) {
                  return r._`${M} in ${_} ? ${_}[${M}]() : ${S}[${M}]`;
                }
              }
              function re(j) {
                const N = l.const("emErrors", r.stringify(j)),
                  _ = [];
                for (const U in j) _.push([U, Se(j[U], $[U])]);
                const T = l.const("templates", l.object(..._)),
                  q = l.scopeValue("obj", { ref: u, code: r.stringify(u) }),
                  I = l.let("emPropParams"),
                  M = l.let("emParamsErrors");
                l.forOf("err", a.default.vErrors, (U) =>
                  l.if(fe(U, N), () => {
                    l.assign(I, r._`${q}[${U}.keyword]`),
                      l.assign(M, r._`${N}[${U}.keyword][${U}.params[${I}]]`),
                      l.if(M, () =>
                        l.code(r._`${M}.push(${U})`).assign(r._`${U}.${f}`, !0)
                      );
                  })
                ),
                  l.forIn("key", N, (U) =>
                    l.forIn("keyProp", r._`${N}[${U}]`, (K) => {
                      l.assign(M, r._`${N}[${U}][${K}]`),
                        l.if(r._`${M}.length`, () => {
                          const C = l.const(
                            "tmpl",
                            r._`${T}[${U}] && ${T}[${U}][${K}]`
                          );
                          i.reportError(p, {
                            message: r._`${C} ? ${C}() : ${S}[${U}][${K}]`,
                            params: r._`{errors: ${M}}`,
                          });
                        });
                    })
                  );
              }
              function Q(j) {
                const { props: N, items: _ } = j;
                if (!N && !_) return;
                const T = r._`typeof ${m} == "object"`,
                  q = r._`Array.isArray(${m})`,
                  I = l.let("emErrors");
                let M, U;
                const K = l.let("templates");
                N && _
                  ? ((M = l.let("emChildKwd")),
                    l.if(T),
                    l.if(
                      q,
                      () => {
                        C(_, $.items), l.assign(M, r.str`items`);
                      },
                      () => {
                        C(N, $.properties), l.assign(M, r.str`properties`);
                      }
                    ),
                    (U = r._`[${M}]`))
                  : _
                  ? (l.if(q), C(_, $.items), (U = r._`.items`))
                  : N &&
                    (l.if(n.and(T, n.not(q))),
                    C(N, $.properties),
                    (U = r._`.properties`)),
                  l.forOf("err", a.default.vErrors, (d) =>
                    ae(d, I, (y) =>
                      l
                        .code(r._`${I}[${y}].push(${d})`)
                        .assign(r._`${d}.${f}`, !0)
                    )
                  ),
                  l.forIn("key", I, (d) =>
                    l.if(r._`${I}[${d}].length`, () => {
                      i.reportError(p, {
                        message: r._`${d} in ${K} ? ${K}[${d}]() : ${S}${U}[${d}]`,
                        params: r._`{errors: ${I}[${d}]}`,
                      }),
                        l.assign(
                          r._`${a.default.vErrors}[${a.default.errors}-1].instancePath`,
                          r._`${x} + "/" + ${d}.replace(/~/g, "~0").replace(/\\//g, "~1")`
                        );
                    })
                  ),
                  l.endIf();
                function C(d, y) {
                  l.assign(I, r.stringify(d)), l.assign(K, Se(d, y));
                }
              }
              function ie(j) {
                const N = l.const("emErrs", r._`[]`);
                l.forOf("err", a.default.vErrors, (_) =>
                  l.if(Z(_), () =>
                    l.code(r._`${N}.push(${_})`).assign(r._`${_}.${f}`, !0)
                  )
                ),
                  l.if(r._`${N}.length`, () =>
                    i.reportError(p, {
                      message: H(j),
                      params: r._`{errors: ${N}}`,
                    })
                  );
              }
              function ve() {
                const j = l.const("emErrs", r._`[]`);
                l.forOf("err", a.default.vErrors, (N) =>
                  l.if(r._`!${N}.${f}`, () => l.code(r._`${j}.push(${N})`))
                ),
                  l
                    .assign(a.default.vErrors, j)
                    .assign(a.default.errors, r._`${j}.length`);
              }
              function fe(j, N) {
                return n.and(
                  r._`${j}.keyword !== ${c}`,
                  r._`!${j}.${f}`,
                  r._`${j}.instancePath === ${x}`,
                  r._`${j}.keyword in ${N}`,
                  r._`${j}.schemaPath.indexOf(${E.errSchemaPath}) === 0`,
                  r._`/^\\/[^\\/]*$/.test(${j}.schemaPath.slice(${E.errSchemaPath.length}))`
                );
              }
              function ae(j, N, _) {
                l.if(
                  n.and(
                    r._`${j}.keyword !== ${c}`,
                    r._`!${j}.${f}`,
                    r._`${j}.instancePath.indexOf(${x}) === 0`
                  ),
                  () => {
                    const T = l.scopeValue("pattern", {
                        ref: /^\/([^/]*)(?:\/|$)/,
                        code: r._`new RegExp("^\\\/([^/]*)(?:\\\/|$)")`,
                      }),
                      q = l.const(
                        "emMatches",
                        r._`${T}.exec(${j}.instancePath.slice(${x}.length))`
                      ),
                      I = l.const(
                        "emChild",
                        r._`${q} && ${q}[1].replace(/~1/g, "/").replace(/~0/g, "~")`
                      );
                    l.if(r._`${I} !== undefined && ${I} in ${N}`, () => _(I));
                  }
                );
              }
              function Z(j) {
                return n.and(
                  r._`${j}.keyword !== ${c}`,
                  r._`!${j}.${f}`,
                  n.or(
                    r._`${j}.instancePath === ${x}`,
                    n.and(
                      r._`${j}.instancePath.indexOf(${x}) === 0`,
                      r._`${j}.instancePath[${x}.length] === "/"`
                    )
                  ),
                  r._`${j}.schemaPath.indexOf(${E.errSchemaPath}) === 0`,
                  r._`${j}.schemaPath[${E.errSchemaPath}.length] === "/"`
                );
              }
              function Se(j, N) {
                const _ = [];
                for (const T in j) {
                  const q = N[T];
                  h.test(q) && _.push([T, A(q)]);
                }
                return l.object(..._);
              }
              function H(j) {
                return h.test(j)
                  ? new s._Code(
                      s
                        .safeStringify(j)
                        .replace(
                          v,
                          (N, _) => `" + JSON.stringify(${o.getData(_, E)}) + "`
                        )
                        .replace(w, "")
                    )
                  : r.stringify(j);
              }
              function A(j) {
                return r._`function(){return ${H(j)}}`;
              }
            },
            metaSchema: {
              anyOf: [
                { type: "string" },
                {
                  type: "object",
                  properties: {
                    properties: { $ref: "#/$defs/stringMap" },
                    items: { $ref: "#/$defs/stringList" },
                    required: { $ref: "#/$defs/stringOrMap" },
                    dependencies: { $ref: "#/$defs/stringOrMap" },
                  },
                  additionalProperties: { type: "string" },
                },
              ],
              $defs: {
                stringMap: {
                  type: "object",
                  additionalProperties: { type: "string" },
                },
                stringOrMap: {
                  anyOf: [{ type: "string" }, { $ref: "#/$defs/stringMap" }],
                },
                stringList: { type: "array", items: { type: "string" } },
              },
            },
          };
        }
        const b = (g, p = {}) => {
          if (!g.opts.allErrors)
            throw new Error("ajv-errors: Ajv option allErrors must be true");
          if (g.opts.jsPropertySyntax)
            throw new Error(
              "ajv-errors: ajv option jsPropertySyntax is not supported"
            );
          return g.addKeyword(P(p));
        };
        (t.default = b), (e.exports = b), (e.exports.default = b);
      })(Pn, Pn.exports)),
    Pn.exports
  );
}
var ip = op();
const ap = ec(ip);
function lc(e, t, r) {
  Object.keys(r).forEach((a) => {
    r[a] = "";
  });
  const n = new sp({ allErrors: !0 });
  ap(n);
  const s = n.compile(e),
    o = s(t);
  return (
    o ||
      s.errors.forEach((a) => {
        const c = a.instancePath.replace("/", "") || a.params.missingProperty,
          f = a.message;
        c in r && (r[c] = f);
      }),
    { valid: o, validationErrors: r }
  );
}
const lp = {
    class:
      "flex flex-col items-center justify-center min-h-screen mx-2 sm:mx-0",
  },
  cp = { class: "bg-white rounded-lg w-full sm:w-2/3 xl:w-1/3 p-2 sm:p-8" },
  up = { class: "w-full sm:w-2/3 mx-auto table-fixed" },
  fp = { class: "py-2" },
  dp = { key: 0 },
  hp = { class: "w-full text-red-500 text-sm" },
  pp = { class: "py-2 mr-2" },
  mp = { key: 1 },
  gp = { class: "w-full text-red-500 text-sm" },
  Pa = {
    __name: "Login",
    setup(e) {
      const { appContext: t } = Yn(),
        r = t.config.globalProperties.$config.URL,
        n = ts(),
        s = It({ username: "", password: "" }),
        o = It({ username: "", password: "" }),
        i = { username: Zl, password: Ql };
      async function a() {
        const c = { username: s.username, password: s.password },
          { valid: f, validationErrors: u } = lc(Xd, c, { ...o });
        if (
          (Object.keys(o).forEach((h) => {
            o[h] = u[h];
          }),
          !!f)
        )
          try {
            const h = await fetch(`${r}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: s.username,
                  password: s.password,
                }),
              }),
              v = await h.json();
            h.status === kt.STATUS_OK
              ? (localStorage.setItem("token", v.token),
                window.$showSnackbar(Le.LOGIN_SUCCESS),
                n.push("/"))
              : window.$showSnackbar(
                  h.status === kt.STATUS_UNAUTHORIZED
                    ? Le.USERNAME_PASSWORD_NOT_CORRECT
                    : Le.UNEXPECTED_ERROR,
                  !0
                );
          } catch (h) {
            window.$showSnackbar(`${Le.UNEXPECTED_ERROR} ${h}`, !0);
          }
      }
      return (c, f) => {
        const u = Wn("router-link");
        return (
          Re(),
          Ae("div", lp, [
            J("div", cp, [
              f[11] ||
                (f[11] = J(
                  "h2",
                  { class: "text-2xl font-bold text-center py-8" },
                  "Log in",
                  -1
                )),
              J("table", up, [
                f[9] ||
                  (f[9] = J(
                    "colgroup",
                    null,
                    [
                      J("col", { class: "w-1/3" }),
                      J("col", { class: "w-2/3" }),
                    ],
                    -1
                  )),
                J("tbody", null, [
                  J("tr", null, [
                    f[5] ||
                      (f[5] = J(
                        "td",
                        { class: "px-2 text-right" },
                        [
                          J(
                            "label",
                            { for: "username", class: "text-right" },
                            "Username"
                          ),
                        ],
                        -1
                      )),
                    J("td", fp, [
                      An(
                        J(
                          "input",
                          {
                            "onUpdate:modelValue":
                              f[0] || (f[0] = (h) => (s.username = h)),
                            placeholder: "Username",
                            maxlength: "6",
                            onInput:
                              f[1] ||
                              (f[1] = (h) =>
                                (s.username = s.username.replace(
                                  i.username,
                                  ""
                                ))),
                            class:
                              "w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-md block w-full p-2.5",
                          },
                          null,
                          544
                        ),
                        [[Dn, s.username]]
                      ),
                    ]),
                  ]),
                  o.username
                    ? (Re(),
                      Ae("tr", dp, [
                        f[6] || (f[6] = J("td", null, null, -1)),
                        J("td", null, [J("p", hp, ut(o.username), 1)]),
                      ]))
                    : bt("", !0),
                  J("tr", null, [
                    f[7] ||
                      (f[7] = J(
                        "td",
                        { class: "px-2 text-right" },
                        [J("label", { for: "password" }, "Password")],
                        -1
                      )),
                    J("td", pp, [
                      An(
                        J(
                          "input",
                          {
                            "onUpdate:modelValue":
                              f[2] || (f[2] = (h) => (s.password = h)),
                            type: "password",
                            placeholder: "password",
                            maxlength: "256",
                            onInput:
                              f[3] ||
                              (f[3] = (h) =>
                                (s.password = s.password.replace(
                                  i.password,
                                  ""
                                ))),
                            class:
                              "w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-md block w-full p-2.5",
                          },
                          null,
                          544
                        ),
                        [[Dn, s.password]]
                      ),
                    ]),
                  ]),
                  o.password
                    ? (Re(),
                      Ae("tr", mp, [
                        f[8] || (f[8] = J("td", null, null, -1)),
                        J("td", null, [J("p", gp, ut(o.password), 1)]),
                      ]))
                    : bt("", !0),
                ]),
              ]),
              J(
                "button",
                {
                  onClick: a,
                  class:
                    "bg-blue-500 text-white rounded-md w-40 py-2 mx-auto my-6 block fover:bg-blue-300",
                },
                " Log in "
              ),
              J(
                "button",
                {
                  onClick:
                    f[4] ||
                    (f[4] = (...h) => c.moveSignUp && c.moveSignUp(...h)),
                  class: "text-blue-500 mx-auto block",
                },
                [
                  be(
                    u,
                    { to: "/signup" },
                    {
                      default: _t(
                        () => f[10] || (f[10] = [Xe("Create an account")])
                      ),
                      _: 1,
                    }
                  ),
                ]
              ),
            ]),
          ])
        );
      };
    },
  },
  yp = {
    type: "object",
    properties: {
      username: {
        type: "string",
        minLength: 6,
        maxLength: 6,
        pattern: "^[a-zA-Z0-9]+$",
        errorMessage: {
          minLength: "Username must be 6 characters.",
          maxLength: "Username must be 6 characters.",
          pattern: "Username must only contain alphabets and numbers.",
        },
      },
      password: {
        type: "string",
        minLength: 8,
        maxLength: 256,
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$",
        errorMessage: {
          minLength: "Password must be at least 8 characters",
          maxLength: "Password must be at least 8 characters",
          pattern:
            "Password must contain 1 uppercase, 1 lowercase, and 1 number",
        },
      },
    },
    required: ["username", "password"],
    errorMessage: {
      required: {
        username: "Username is required.",
        password: "Password is required.",
      },
    },
  },
  _p = {
    class:
      "flex flex-col items-center justify-center min-h-screen mx-2 sm:mx-0",
  },
  vp = { class: "bg-white rounded-lg w-full sm:w-2/3 xl:w-1/3 p-2 sm:p-8" },
  $p = { class: "w-full sm:w-2/3 mx-auto table-fixed" },
  wp = { class: "py-2" },
  bp = { key: 0 },
  Ep = { class: "w-full text-red-500 text-sm" },
  Sp = { class: "py-2 mr-2" },
  Pp = { key: 1 },
  Rp = { class: "w-full text-red-500 text-sm" },
  Ra = {
    __name: "SignUp",
    setup(e) {
      const { appContext: t } = Yn(),
        r = t.config.globalProperties.$config.URL,
        n = ts(),
        s = It({ username: "", password: "" }),
        o = It({ username: "", password: "" }),
        i = { username: Zl, password: Ql };
      async function a() {
        const f = { username: s.username, password: s.password },
          { valid: u, validationErrors: h } = lc(yp, f, { ...o });
        if (
          (Object.keys(o).forEach((v) => {
            o[v] = h[v];
          }),
          !!u)
        )
          try {
            const v = await fetch(`${r}/signup`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: s.username,
                password: s.password,
              }),
            });
            v.status === kt.STATUS_OK
              ? (window.$showSnackbar(Le.REGISTER_USER_SUCCESS),
                n.push("/login"))
              : window.$showSnackbar(
                  v.status === kt.STATUS_CONFLICT
                    ? Le.USERNAME_ALREADY_EXIST
                    : Le.UNEXPECTED_ERROR,
                  !0
                );
          } catch (v) {
            window.$showSnackbar(`${Le.UNEXPECTED_ERROR} ${v}`, !0);
          }
      }
      function c() {}
      return (f, u) => {
        const h = Wn("router-link");
        return (
          Re(),
          Ae("div", _p, [
            J("div", vp, [
              u[10] ||
                (u[10] = J(
                  "h2",
                  { class: "text-2xl font-bold text-center py-8" },
                  "Create an account",
                  -1
                )),
              J("table", $p, [
                u[8] ||
                  (u[8] = J(
                    "colgroup",
                    null,
                    [
                      J("col", { class: "w-1/3" }),
                      J("col", { class: "w-2/3" }),
                    ],
                    -1
                  )),
                J("tbody", null, [
                  J("tr", null, [
                    u[4] ||
                      (u[4] = J(
                        "td",
                        { class: "px-2 text-right" },
                        [
                          J(
                            "label",
                            { for: "username", class: "text-right" },
                            "Username"
                          ),
                        ],
                        -1
                      )),
                    J("td", wp, [
                      An(
                        J(
                          "input",
                          {
                            "onUpdate:modelValue":
                              u[0] || (u[0] = (v) => (s.username = v)),
                            placeholder: "Username",
                            maxlength: "6",
                            onInput:
                              u[1] ||
                              (u[1] = (v) =>
                                (s.username = s.username.replace(
                                  i.username,
                                  ""
                                ))),
                            class:
                              "w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-md block w-full p-2.5",
                          },
                          null,
                          544
                        ),
                        [[Dn, s.username]]
                      ),
                    ]),
                  ]),
                  o.username
                    ? (Re(),
                      Ae("tr", bp, [
                        u[5] || (u[5] = J("td", null, null, -1)),
                        J("td", null, [J("p", Ep, ut(o.username), 1)]),
                      ]))
                    : bt("", !0),
                  J("tr", null, [
                    u[6] ||
                      (u[6] = J(
                        "td",
                        { class: "px-2 text-right" },
                        [J("label", { for: "password" }, "Password")],
                        -1
                      )),
                    J("td", Sp, [
                      An(
                        J(
                          "input",
                          {
                            "onUpdate:modelValue":
                              u[2] || (u[2] = (v) => (s.password = v)),
                            type: "password",
                            placeholder: "password",
                            maxlength: "256",
                            onInput:
                              u[3] ||
                              (u[3] = (v) =>
                                (s.password = s.password.replace(
                                  i.password,
                                  ""
                                ))),
                            class:
                              "w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-md block w-full p-2.5",
                          },
                          null,
                          544
                        ),
                        [[Dn, s.password]]
                      ),
                    ]),
                  ]),
                  o.password
                    ? (Re(),
                      Ae("tr", Pp, [
                        u[7] || (u[7] = J("td", null, null, -1)),
                        J("td", null, [J("p", Rp, ut(o.password), 1)]),
                      ]))
                    : bt("", !0),
                ]),
              ]),
              J(
                "button",
                {
                  onClick: a,
                  class:
                    "bg-blue-500 text-white rounded-md w-40 py-2 mx-auto my-6 block hover:bg-blue-300",
                },
                " Create account "
              ),
              J(
                "button",
                { onClick: c, class: "text-blue-500 mx-auto block" },
                [
                  be(
                    h,
                    { to: "/login" },
                    {
                      default: _t(() => u[9] || (u[9] = [Xe("Back to login")])),
                      _: 1,
                    }
                  ),
                ]
              ),
            ]),
          ])
        );
      };
    },
  },
  ho = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n, s] of t) r[n] = s;
    return r;
  },
  Op = {};
function Tp(e, t) {
  return Re(), Ae("div", null, "Todo Page");
}
const Oa = ho(Op, [["render", Tp]]),
  Cp = {};
function Np(e, t) {
  return Re(), Ae("div", null, "Diary Page");
}
const Ta = ho(Cp, [["render", Np]]),
  Ip = {};
function kp(e, t) {
  return Re(), Ae("div", null, "Schedule Page");
}
const Ca = ho(Ip, [["render", kp]]),
  Ap = [
    { path: "/", name: ci, component: ci },
    { path: "/login", name: Pa, component: Pa },
    { path: "/signup", name: Ra, component: Ra },
    { path: "/todo", name: Oa, component: Oa },
    { path: "/schedule", name: Ca, component: Ca },
    { path: "/diary", name: Ta, component: Ta },
  ],
  jp = Td({ history: nd(), routes: Ap });
Rf().then((e) => {
  const t = Ef(Jd);
  t.use(jp), (t.config.globalProperties.$config = e), t.mount("#app");
});
