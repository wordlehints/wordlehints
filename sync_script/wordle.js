!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        require("react"),
        require("react-dom"),
        require("react-redux"),
        require("foundation"),
        require("react-transition-group"),
        require("reselect"),
        require("classnames"),
        require("redux"),
        require("redux-thunk")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "react",
          "react-dom",
          "react-redux",
          "foundation",
          "react-transition-group",
          "reselect",
          "classnames",
          "redux",
          "redux-thunk",
        ],
        t
      )
    : t(
        (e = e || self).React,
        e.ReactDOM,
        e.ReactRedux,
        e.Foundation,
        e.ReactTransitionGroup,
        e.Reselect,
        e.classNames,
        e.Redux,
        e.ReduxThunk
      );
})(this, function (g, e, t, v, s, n, p, a, o) {
  "use strict";
  var _ = "default" in g ? g.default : g;
  (e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e),
    (p =
      p && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p),
    (o =
      o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o);
  function r() {
    function e(e) {
      var t = document.createElement("script");
      (t.src = e), (t.async = !0), document.body.appendChild(t);
    }
    return (
      window.isHybridWebView ||
        (e(
          "https://www.nytimes.com/games-assets/gdpr/cookie-notice-v2.1.2.min.js"
        ),
        e(window.env.gtm)),
      null
    );
  }
  var i = g.createContext({
    getVariant: function () {
      return null;
    },
    reportExposure: function (e) {
      return null;
    },
    tests: {},
    hasAbraLoaded: !1,
  });
  function l(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function c(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? l(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : l(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  function u(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? d(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function m(e) {
    var t = e.children,
      a = e.regiId,
      n = (e = u(g.useState({}), 2))[0],
      o = e[1],
      r = (e = u(g.useState(!1), 2))[0],
      s = e[1];
    return (
      g.useEffect(
        function () {
          var e,
            t,
            n =
              (null === (e = window.config) || void 0 === e
                ? void 0
                : e.AbraConfig) || {};
          v.abra.init(
            window.abra.config,
            {
              agent_id:
                (null === (e = window.config) ||
                void 0 === e ||
                null === (t = e.userInfo) ||
                void 0 === t
                  ? void 0
                  : t.agentID) || v.agentIdCookie,
              regi_id: a,
            },
            n
          ),
            o(c({}, v.abra.getTests())),
            s(!0);
        },
        [a]
      ),
      (e = g.useMemo(
        function () {
          return {
            tests: n,
            getVariant: function (e) {
              return n[e];
            },
            reportExposure: function (e) {
              return v.abra.reportExposure(e);
            },
            hasAbraLoaded: r,
          };
        },
        [n, r]
      )),
      _.createElement(i.Provider, { value: e }, t)
    );
  }
  var y,
    f = "nyt-wordle-refresh",
    h = window.localStorage,
    b = 432e5;
  function w() {
    return (y =
      y ||
      setInterval(function () {
        h.getItem(f) &&
          (h.removeItem(f),
          window.isHybridWebView ||
            (document.location.href.match(/.*\.nytimes\.com/g)
              ? document.location.reload(!0)
              : document.location.replace(
                  "https://www.nytimes.com/games/wordle"
                )));
      }, b));
  }
  function k(e, t) {
    var n,
      a = (t = void 0 === t ? {} : t).insertAt;
    e &&
      "undefined" != typeof document &&
      ((n = document.head || document.getElementsByTagName("head")[0]),
      ((t = document.createElement("style")).type = "text/css"),
      "top" === a && n.firstChild
        ? n.insertBefore(t, n.firstChild)
        : n.appendChild(t),
      t.styleSheet
        ? (t.styleSheet.cssText = e)
        : t.appendChild(document.createTextNode(e)));
  }
  var x = {
    moment: "MomentSystem-module_moment__94wOL",
    momentExit: "MomentSystem-module_momentExit__Zhime",
    momentExitActive: "MomentSystem-module_momentExitActive__MPBX9",
    momentEnter: "MomentSystem-module_momentEnter__txwEz",
    momentEnterActive: "MomentSystem-module_momentEnterActive__Tikpx",
  };
  function S(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function E(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? S(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : S(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  function j(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return z(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? z(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function z(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  k(
    ".MomentSystem-module_moment__94wOL {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.MomentSystem-module_momentExit__Zhime {\n  opacity: 1;\n}\n\n.MomentSystem-module_momentExitActive__MPBX9 {\n  opacity: 0;\n  transition: opacity 400ms;\n}\n\n.MomentSystem-module_momentEnter__txwEz {\n  opacity: 0;\n}\n\n.MomentSystem-module_momentEnterActive__Tikpx {\n  opacity: 1;\n  transition: opacity 400ms;\n}"
  );
  var N = 400;
  function C(e) {
    var t = e.hasLoaded,
      n = e.config,
      a = e.initialMoment,
      o = j(_.useState(a), 2),
      r = o[0],
      e = o[1],
      a = n[r],
      o = { exit: x.momentExit, exitActive: x.momentExitActive },
      n = { enter: x.momentEnter, enterActive: x.momentEnterActive },
      o = E(E({}, a.animateIn ? n : {}), a.animateOut ? o : {});
    return _.createElement(
      s.TransitionGroup,
      null,
      _.createElement(
        s.CSSTransition,
        {
          key: r,
          timeout: { enter: a.animateIn ? N : 0, exit: a.animateOut ? N : 0 },
          classNames: o,
        },
        _.createElement(
          "div",
          { className: x.moment },
          _.createElement(a.component, { hasLoaded: t, transition: e })
        )
      )
    );
  }
  var A = function (e) {
      return e.persist.settings;
    },
    O = n.createSelector(A, function (e) {
      return e.hardMode;
    }),
    I = n.createSelector(A, function (e) {
      return e.darkMode;
    }),
    L = n.createSelector(A, function (e) {
      return e.colorblindMode;
    }),
    T = function () {
      return t.useDispatch();
    },
    P = t.useSelector;
  function M(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function B(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? M(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : M(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  function R(e) {
    return { type: Y, payload: { error: e } };
  }
  function W(e, t, n, a) {
    return {
      type: X,
      payload: { name: e, label: t, useBeacon: n, context: a },
    };
  }
  function H(e, t) {
    return { type: J, payload: { text: e, timestamp: t } };
  }
  var D = "wordle/overlays/OPEN_MODAL",
    q = "wordle/overlays/CLOSE_MODAL",
    G = "wordle/overlays/OPEN_PAGE",
    F = "wordle/overlays/CLOSE_PAGE",
    V = "wordle/overlays/WILL_CLOSE_PAGE",
    Y = "wordle/overlays/OPEN_ERROR",
    U = "wordle/overlays/OPEN_NAV_MODAL",
    Z = "wordle/overlays/CLOSE_NAV_MODAL",
    X = "wordle/overlays/TRACK_NAV_MODAL_ITEM",
    K = "wordle/overlays/ADD_TOAST",
    J = "wordle/overlays/REMOVE_TOAST",
    Q = "wordle/overlays/TRACK_AUTH_CLICK",
    $ = "wordle/overlays/TRACK_AUTH_IMPRESSION",
    ee = function (e) {
      return {
        type: D,
        payload: {
          modal: e,
          isClicked:
            1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        },
      };
    },
    te = function (e) {
      return { type: G, payload: { page: e } };
    },
    ne = function () {
      return { type: q };
    },
    ae = function () {
      return { type: F };
    },
    oe = function () {
      return { type: U };
    },
    re = function () {
      return { type: Z };
    },
    se = function (e) {
      return { type: K, payload: B(B({}, e), {}, { timestamp: Date.now() }) };
    },
    ie = function (e, t, n) {
      return { type: Q, payload: { label: e, sendContext: t, element: n } };
    },
    le =
      (null === (pe = window.env) || void 0 === pe ? void 0 : pe.name) || "dev",
    ce = function (e) {
      return e[le] || e.dev;
    },
    ue = ce({
      prod: "https://myaccount.nytimes.com",
      stg: "https://myaccount.stg.nytimes.com",
      dev: "https://myaccount.dev.nytimes.com",
    }),
    de = ce({
      prod: "https://www.nytimes.com/subscription/games?campaignId=8RRFW",
      stg: "https://www.stg.nytimes.com/subscription/games?campaignId=8RRFW",
      dev: "https://www.stg.nytimes.com/subscription/games?campaignId=8RRFW",
    }),
    me = "".concat(ue, "/svc/auth/v1/profileinfo"),
    A = ce({
      prod: "https://www.nytimes.com/games/wordle/index.html",
      stg: "https://www.stg.nytimes.com/games/wordle/index.html",
      dev: "https://local.nytimes.com/games/wordle/index.html?abra-overrides=GAMES_wordleAuth_0427=1_EnableAuth",
    }),
    pe = ce({
      prod: "https://www.nytimes.com/games/wordle/index.html?success=true",
      stg: "https://www.stg.nytimes.com/games/wordle/index.html?success=true",
      dev: "https://local.nytimes.com/games/wordle/index.html?abra-overrides=GAMES_wordleAuth_0427=1_EnableAuth&success=true",
    }),
    A = encodeURIComponent(A),
    pe = encodeURIComponent(pe),
    ye = ""
      .concat(
        ue,
        "/auth/enter-email?response_type=cookie&client_id=games&application=nyt-lire&asset=wordle&redirect_uri="
      )
      .concat(pe),
    ge = ""
      .concat(
        ue,
        "/auth/enter-email?response_type=cookie&client_id=games&application=nyt-lires&redirect_uri="
      )
      .concat(A),
    A = ce({
      prod: "https://www.nytimes.com/games/wordle/index.html",
      stg: "https://www.stg.nytimes.com/games/wordle/index.html",
      dev: "https://local.nytimes.com/games/wordle/index.html",
    }),
    fe = "".concat(ue, "/auth/logout?redirect_uri=").concat(A),
    he = [
      "cigar",
      "rebut",
      "sissy",
      "humph",
      "awake",
      "blush",
      "focal",
      "evade",
      "naval",
      "serve",
      "heath",
      "dwarf",
      "model",
      "karma",
      "stink",
      "grade",
      "quiet",
      "bench",
      "abate",
      "feign",
      "major",
      "death",
      "fresh",
      "crust",
      "stool",
      "colon",
      "abase",
      "marry",
      "react",
      "batty",
      "pride",
      "floss",
      "helix",
      "croak",
      "staff",
      "paper",
      "unfed",
      "whelp",
      "trawl",
      "outdo",
      "adobe",
      "crazy",
      "sower",
      "repay",
      "digit",
      "crate",
      "cluck",
      "spike",
      "mimic",
      "pound",
      "maxim",
      "linen",
      "unmet",
      "flesh",
      "booby",
      "forth",
      "first",
      "stand",
      "belly",
      "ivory",
      "seedy",
      "print",
      "yearn",
      "drain",
      "bribe",
      "stout",
      "panel",
      "crass",
      "flume",
      "offal",
      "agree",
      "error",
      "swirl",
      "argue",
      "bleed",
      "delta",
      "flick",
      "totem",
      "wooer",
      "front",
      "shrub",
      "parry",
      "biome",
      "lapel",
      "start",
      "greet",
      "goner",
      "golem",
      "lusty",
      "loopy",
      "round",
      "audit",
      "lying",
      "gamma",
      "labor",
      "islet",
      "civic",
      "forge",
      "corny",
      "moult",
      "basic",
      "salad",
      "agate",
      "spicy",
      "spray",
      "essay",
      "fjord",
      "spend",
      "kebab",
      "guild",
      "aback",
      "motor",
      "alone",
      "hatch",
      "hyper",
      "thumb",
      "dowry",
      "ought",
      "belch",
      "dutch",
      "pilot",
      "tweed",
      "comet",
      "jaunt",
      "enema",
      "steed",
      "abyss",
      "growl",
      "fling",
      "dozen",
      "boozy",
      "erode",
      "world",
      "gouge",
      "click",
      "briar",
      "great",
      "altar",
      "pulpy",
      "blurt",
      "coast",
      "duchy",
      "groin",
      "fixer",
      "group",
      "rogue",
      "badly",
      "smart",
      "pithy",
      "gaudy",
      "chill",
      "heron",
      "vodka",
      "finer",
      "surer",
      "radio",
      "rouge",
      "perch",
      "retch",
      "wrote",
      "clock",
      "tilde",
      "store",
      "prove",
      "bring",
      "solve",
      "cheat",
      "grime",
      "exult",
      "usher",
      "epoch",
      "triad",
      "break",
      "rhino",
      "viral",
      "conic",
      "masse",
      "sonic",
      "vital",
      "trace",
      "using",
      "peach",
      "champ",
      "baton",
      "brake",
      "pluck",
      "craze",
      "gripe",
      "weary",
      "picky",
      "acute",
      "ferry",
      "aside",
      "tapir",
      "troll",
      "unify",
      "rebus",
      "boost",
      "truss",
      "siege",
      "tiger",
      "banal",
      "slump",
      "crank",
      "gorge",
      "query",
      "drink",
      "favor",
      "abbey",
      "tangy",
      "panic",
      "solar",
      "shire",
      "proxy",
      "point",
      "robot",
      "prick",
      "wince",
      "crimp",
      "knoll",
      "sugar",
      "whack",
      "mount",
      "perky",
      "could",
      "wrung",
      "light",
      "those",
      "moist",
      "shard",
      "pleat",
      "aloft",
      "skill",
      "elder",
      "frame",
      "humor",
      "pause",
      "ulcer",
      "ultra",
      "robin",
      "cynic",
      "aroma",
      "caulk",
      "shake",
      "dodge",
      "swill",
      "tacit",
      "other",
      "thorn",
      "trove",
      "bloke",
      "vivid",
      "spill",
      "chant",
      "choke",
      "rupee",
      "nasty",
      "mourn",
      "ahead",
      "brine",
      "cloth",
      "hoard",
      "sweet",
      "month",
      "lapse",
      "watch",
      "today",
      "focus",
      "smelt",
      "tease",
      "cater",
      "movie",
      "saute",
      "allow",
      "renew",
      "their",
      "slosh",
      "purge",
      "chest",
      "depot",
      "epoxy",
      "nymph",
      "found",
      "shall",
      "stove",
      "lowly",
      "snout",
      "trope",
      "fewer",
      "shawl",
      "natal",
      "comma",
      "foray",
      "scare",
      "stair",
      "black",
      "squad",
      "royal",
      "chunk",
      "mince",
      "shame",
      "cheek",
      "ample",
      "flair",
      "foyer",
      "cargo",
      "oxide",
      "plant",
      "olive",
      "inert",
      "askew",
      "heist",
      "shown",
      "zesty",
      "trash",
      "larva",
      "forgo",
      "story",
      "hairy",
      "train",
      "homer",
      "badge",
      "midst",
      "canny",
      "shine",
      "gecko",
      "farce",
      "slung",
      "tipsy",
      "metal",
      "yield",
      "delve",
      "being",
      "scour",
      "glass",
      "gamer",
      "scrap",
      "money",
      "hinge",
      "album",
      "vouch",
      "asset",
      "tiara",
      "crept",
      "bayou",
      "atoll",
      "manor",
      "creak",
      "showy",
      "phase",
      "froth",
      "depth",
      "gloom",
      "flood",
      "trait",
      "girth",
      "piety",
      "goose",
      "float",
      "donor",
      "atone",
      "primo",
      "apron",
      "blown",
      "cacao",
      "loser",
      "input",
      "gloat",
      "awful",
      "brink",
      "smite",
      "beady",
      "rusty",
      "retro",
      "droll",
      "gawky",
      "hutch",
      "pinto",
      "egret",
      "lilac",
      "sever",
      "field",
      "fluff",
      "agape",
      "voice",
      "stead",
      "berth",
      "madam",
      "night",
      "bland",
      "liver",
      "wedge",
      "roomy",
      "wacky",
      "flock",
      "angry",
      "trite",
      "aphid",
      "tryst",
      "midge",
      "power",
      "elope",
      "cinch",
      "motto",
      "stomp",
      "upset",
      "bluff",
      "cramp",
      "quart",
      "coyly",
      "youth",
      "rhyme",
      "buggy",
      "alien",
      "smear",
      "unfit",
      "patty",
      "cling",
      "glean",
      "label",
      "hunky",
      "khaki",
      "poker",
      "gruel",
      "twice",
      "twang",
      "shrug",
      "treat",
      "waste",
      "merit",
      "woven",
      "needy",
      "clown",
      "irony",
      "ruder",
      "gauze",
      "chief",
      "onset",
      "prize",
      "fungi",
      "charm",
      "gully",
      "inter",
      "whoop",
      "taunt",
      "leery",
      "class",
      "theme",
      "lofty",
      "tibia",
      "booze",
      "alpha",
      "thyme",
      "doubt",
      "parer",
      "chute",
      "stick",
      "trice",
      "alike",
      "recap",
      "saint",
      "glory",
      "grate",
      "admit",
      "brisk",
      "soggy",
      "usurp",
      "scald",
      "scorn",
      "leave",
      "twine",
      "sting",
      "bough",
      "marsh",
      "sloth",
      "dandy",
      "vigor",
      "howdy",
      "enjoy",
      "valid",
      "ionic",
      "equal",
      "floor",
      "catch",
      "spade",
      "stein",
      "exist",
      "quirk",
      "denim",
      "grove",
      "spiel",
      "mummy",
      "fault",
      "foggy",
      "flout",
      "carry",
      "sneak",
      "libel",
      "waltz",
      "aptly",
      "piney",
      "inept",
      "aloud",
      "photo",
      "dream",
      "stale",
      "unite",
      "snarl",
      "baker",
      "there",
      "glyph",
      "pooch",
      "hippy",
      "spell",
      "folly",
      "louse",
      "gulch",
      "vault",
      "godly",
      "threw",
      "fleet",
      "grave",
      "inane",
      "shock",
      "crave",
      "spite",
      "valve",
      "skimp",
      "claim",
      "rainy",
      "musty",
      "pique",
      "daddy",
      "quasi",
      "arise",
      "aging",
      "valet",
      "opium",
      "avert",
      "stuck",
      "recut",
      "mulch",
      "genre",
      "plume",
      "rifle",
      "count",
      "incur",
      "total",
      "wrest",
      "mocha",
      "deter",
      "study",
      "lover",
      "safer",
      "rivet",
      "funny",
      "smoke",
      "mound",
      "undue",
      "sedan",
      "pagan",
      "swine",
      "guile",
      "gusty",
      "equip",
      "tough",
      "canoe",
      "chaos",
      "covet",
      "human",
      "udder",
      "lunch",
      "blast",
      "stray",
      "manga",
      "melee",
      "lefty",
      "quick",
      "paste",
      "given",
      "octet",
      "risen",
      "groan",
      "leaky",
      "grind",
      "carve",
      "loose",
      "sadly",
      "spilt",
      "apple",
      "slack",
      "honey",
      "final",
      "sheen",
      "eerie",
      "minty",
      "slick",
      "derby",
      "wharf",
      "spelt",
      "coach",
      "erupt",
      "singe",
      "price",
      "spawn",
      "fairy",
      "jiffy",
      "filmy",
      "stack",
      "chose",
      "sleep",
      "ardor",
      "nanny",
      "niece",
      "woozy",
      "handy",
      "grace",
      "ditto",
      "stank",
      "cream",
      "usual",
      "diode",
      "valor",
      "angle",
      "ninja",
      "muddy",
      "chase",
      "reply",
      "prone",
      "spoil",
      "heart",
      "shade",
      "diner",
      "arson",
      "onion",
      "sleet",
      "dowel",
      "couch",
      "palsy",
      "bowel",
      "smile",
      "evoke",
      "creek",
      "lance",
      "eagle",
      "idiot",
      "siren",
      "built",
      "embed",
      "award",
      "dross",
      "annul",
      "goody",
      "frown",
      "patio",
      "laden",
      "humid",
      "elite",
      "lymph",
      "edify",
      "might",
      "reset",
      "visit",
      "gusto",
      "purse",
      "vapor",
      "crock",
      "write",
      "sunny",
      "loath",
      "chaff",
      "slide",
      "queer",
      "venom",
      "stamp",
      "sorry",
      "still",
      "acorn",
      "aping",
      "pushy",
      "tamer",
      "hater",
      "mania",
      "awoke",
      "brawn",
      "swift",
      "exile",
      "birch",
      "lucky",
      "freer",
      "risky",
      "ghost",
      "plier",
      "lunar",
      "winch",
      "snare",
      "nurse",
      "house",
      "borax",
      "nicer",
      "lurch",
      "exalt",
      "about",
      "savvy",
      "toxin",
      "tunic",
      "pried",
      "inlay",
      "chump",
      "lanky",
      "cress",
      "eater",
      "elude",
      "cycle",
      "kitty",
      "boule",
      "moron",
      "tenet",
      "place",
      "lobby",
      "plush",
      "vigil",
      "index",
      "blink",
      "clung",
      "qualm",
      "croup",
      "clink",
      "juicy",
      "stage",
      "decay",
      "nerve",
      "flier",
      "shaft",
      "crook",
      "clean",
      "china",
      "ridge",
      "vowel",
      "gnome",
      "snuck",
      "icing",
      "spiny",
      "rigor",
      "snail",
      "flown",
      "rabid",
      "prose",
      "thank",
      "poppy",
      "budge",
      "fiber",
      "moldy",
      "dowdy",
      "kneel",
      "track",
      "caddy",
      "quell",
      "dumpy",
      "paler",
      "swore",
      "rebar",
      "scuba",
      "splat",
      "flyer",
      "horny",
      "mason",
      "doing",
      "ozone",
      "amply",
      "molar",
      "ovary",
      "beset",
      "queue",
      "cliff",
      "magic",
      "truce",
      "sport",
      "fritz",
      "edict",
      "twirl",
      "verse",
      "llama",
      "eaten",
      "range",
      "whisk",
      "hovel",
      "rehab",
      "macaw",
      "sigma",
      "spout",
      "verve",
      "sushi",
      "dying",
      "fetid",
      "brain",
      "buddy",
      "thump",
      "scion",
      "candy",
      "chord",
      "basin",
      "march",
      "crowd",
      "arbor",
      "gayly",
      "musky",
      "stain",
      "dally",
      "bless",
      "bravo",
      "stung",
      "title",
      "ruler",
      "kiosk",
      "blond",
      "ennui",
      "layer",
      "fluid",
      "tatty",
      "score",
      "cutie",
      "zebra",
      "barge",
      "matey",
      "bluer",
      "aider",
      "shook",
      "river",
      "privy",
      "betel",
      "frisk",
      "bongo",
      "begun",
      "azure",
      "weave",
      "genie",
      "sound",
      "glove",
      "braid",
      "scope",
      "wryly",
      "rover",
      "assay",
      "ocean",
      "bloom",
      "irate",
      "later",
      "woken",
      "silky",
      "wreck",
      "dwelt",
      "slate",
      "smack",
      "solid",
      "amaze",
      "hazel",
      "wrist",
      "jolly",
      "globe",
      "flint",
      "rouse",
      "civil",
      "vista",
      "relax",
      "cover",
      "alive",
      "beech",
      "jetty",
      "bliss",
      "vocal",
      "often",
      "dolly",
      "eight",
      "joker",
      "since",
      "event",
      "ensue",
      "shunt",
      "diver",
      "poser",
      "worst",
      "sweep",
      "alley",
      "creed",
      "anime",
      "leafy",
      "bosom",
      "dunce",
      "stare",
      "pudgy",
      "waive",
      "choir",
      "stood",
      "spoke",
      "outgo",
      "delay",
      "bilge",
      "ideal",
      "clasp",
      "seize",
      "hotly",
      "laugh",
      "sieve",
      "block",
      "meant",
      "grape",
      "noose",
      "hardy",
      "shied",
      "drawl",
      "daisy",
      "putty",
      "strut",
      "burnt",
      "tulip",
      "crick",
      "idyll",
      "vixen",
      "furor",
      "geeky",
      "cough",
      "naive",
      "shoal",
      "stork",
      "bathe",
      "aunty",
      "check",
      "prime",
      "brass",
      "outer",
      "furry",
      "razor",
      "elect",
      "evict",
      "imply",
      "demur",
      "quota",
      "haven",
      "cavil",
      "swear",
      "crump",
      "dough",
      "gavel",
      "wagon",
      "salon",
      "nudge",
      "harem",
      "pitch",
      "sworn",
      "pupil",
      "excel",
      "stony",
      "cabin",
      "unzip",
      "queen",
      "trout",
      "polyp",
      "earth",
      "storm",
      "until",
      "taper",
      "enter",
      "child",
      "adopt",
      "minor",
      "fatty",
      "husky",
      "brave",
      "filet",
      "slime",
      "glint",
      "tread",
      "steal",
      "regal",
      "guest",
      "every",
      "murky",
      "share",
      "spore",
      "hoist",
      "buxom",
      "inner",
      "otter",
      "dimly",
      "level",
      "sumac",
      "donut",
      "stilt",
      "arena",
      "sheet",
      "scrub",
      "fancy",
      "slimy",
      "pearl",
      "silly",
      "porch",
      "dingo",
      "sepia",
      "amble",
      "shady",
      "bread",
      "friar",
      "reign",
      "dairy",
      "quill",
      "cross",
      "brood",
      "tuber",
      "shear",
      "posit",
      "blank",
      "villa",
      "shank",
      "piggy",
      "freak",
      "which",
      "among",
      "fecal",
      "shell",
      "would",
      "algae",
      "large",
      "rabbi",
      "agony",
      "amuse",
      "bushy",
      "copse",
      "swoon",
      "knife",
      "pouch",
      "ascot",
      "plane",
      "crown",
      "urban",
      "snide",
      "relay",
      "abide",
      "viola",
      "rajah",
      "straw",
      "dilly",
      "crash",
      "amass",
      "third",
      "trick",
      "tutor",
      "woody",
      "blurb",
      "grief",
      "disco",
      "where",
      "sassy",
      "beach",
      "sauna",
      "comic",
      "clued",
      "creep",
      "caste",
      "graze",
      "snuff",
      "frock",
      "gonad",
      "drunk",
      "prong",
      "lurid",
      "steel",
      "halve",
      "buyer",
      "vinyl",
      "utile",
      "smell",
      "adage",
      "worry",
      "tasty",
      "local",
      "trade",
      "finch",
      "ashen",
      "modal",
      "gaunt",
      "clove",
      "enact",
      "adorn",
      "roast",
      "speck",
      "sheik",
      "missy",
      "grunt",
      "snoop",
      "party",
      "touch",
      "mafia",
      "emcee",
      "array",
      "south",
      "vapid",
      "jelly",
      "skulk",
      "angst",
      "tubal",
      "lower",
      "crest",
      "sweat",
      "cyber",
      "adore",
      "tardy",
      "swami",
      "notch",
      "groom",
      "roach",
      "hitch",
      "young",
      "align",
      "ready",
      "frond",
      "strap",
      "puree",
      "realm",
      "venue",
      "swarm",
      "offer",
      "seven",
      "dryer",
      "diary",
      "dryly",
      "drank",
      "acrid",
      "heady",
      "theta",
      "junto",
      "pixie",
      "quoth",
      "bonus",
      "shalt",
      "penne",
      "amend",
      "datum",
      "build",
      "piano",
      "shelf",
      "lodge",
      "suing",
      "rearm",
      "coral",
      "ramen",
      "worth",
      "psalm",
      "infer",
      "overt",
      "mayor",
      "ovoid",
      "glide",
      "usage",
      "poise",
      "randy",
      "chuck",
      "prank",
      "fishy",
      "tooth",
      "ether",
      "drove",
      "idler",
      "swath",
      "stint",
      "while",
      "begat",
      "apply",
      "slang",
      "tarot",
      "radar",
      "credo",
      "aware",
      "canon",
      "shift",
      "timer",
      "bylaw",
      "serum",
      "three",
      "steak",
      "iliac",
      "shirk",
      "blunt",
      "puppy",
      "penal",
      "joist",
      "bunny",
      "shape",
      "beget",
      "wheel",
      "adept",
      "stunt",
      "stole",
      "topaz",
      "chore",
      "fluke",
      "afoot",
      "bloat",
      "bully",
      "dense",
      "caper",
      "sneer",
      "boxer",
      "jumbo",
      "lunge",
      "space",
      "avail",
      "short",
      "slurp",
      "loyal",
      "flirt",
      "pizza",
      "conch",
      "tempo",
      "droop",
      "plate",
      "bible",
      "plunk",
      "afoul",
      "savoy",
      "steep",
      "agile",
      "stake",
      "dwell",
      "knave",
      "beard",
      "arose",
      "motif",
      "smash",
      "broil",
      "glare",
      "shove",
      "baggy",
      "mammy",
      "swamp",
      "along",
      "rugby",
      "wager",
      "quack",
      "squat",
      "snaky",
      "debit",
      "mange",
      "skate",
      "ninth",
      "joust",
      "tramp",
      "spurn",
      "medal",
      "micro",
      "rebel",
      "flank",
      "learn",
      "nadir",
      "maple",
      "comfy",
      "remit",
      "gruff",
      "ester",
      "least",
      "mogul",
      "fetch",
      "cause",
      "oaken",
      "aglow",
      "meaty",
      "gaffe",
      "shyly",
      "racer",
      "prowl",
      "thief",
      "stern",
      "poesy",
      "rocky",
      "tweet",
      "waist",
      "spire",
      "grope",
      "havoc",
      "patsy",
      "truly",
      "forty",
      "deity",
      "uncle",
      "swish",
      "giver",
      "preen",
      "bevel",
      "lemur",
      "draft",
      "slope",
      "annoy",
      "lingo",
      "bleak",
      "ditty",
      "curly",
      "cedar",
      "dirge",
      "grown",
      "horde",
      "drool",
      "shuck",
      "crypt",
      "cumin",
      "stock",
      "gravy",
      "locus",
      "wider",
      "breed",
      "quite",
      "chafe",
      "cache",
      "blimp",
      "deign",
      "fiend",
      "logic",
      "cheap",
      "elide",
      "rigid",
      "false",
      "renal",
      "pence",
      "rowdy",
      "shoot",
      "blaze",
      "envoy",
      "posse",
      "brief",
      "never",
      "abort",
      "mouse",
      "mucky",
      "sulky",
      "fiery",
      "media",
      "trunk",
      "yeast",
      "clear",
      "skunk",
      "scalp",
      "bitty",
      "cider",
      "koala",
      "duvet",
      "segue",
      "creme",
      "super",
      "grill",
      "after",
      "owner",
      "ember",
      "reach",
      "nobly",
      "empty",
      "speed",
      "gipsy",
      "recur",
      "smock",
      "dread",
      "merge",
      "burst",
      "kappa",
      "amity",
      "shaky",
      "hover",
      "carol",
      "snort",
      "synod",
      "faint",
      "haunt",
      "flour",
      "chair",
      "detox",
      "shrew",
      "tense",
      "plied",
      "quark",
      "burly",
      "novel",
      "waxen",
      "stoic",
      "jerky",
      "blitz",
      "beefy",
      "lyric",
      "hussy",
      "towel",
      "quilt",
      "below",
      "bingo",
      "wispy",
      "brash",
      "scone",
      "toast",
      "easel",
      "saucy",
      "value",
      "spice",
      "honor",
      "route",
      "sharp",
      "bawdy",
      "radii",
      "skull",
      "phony",
      "issue",
      "lager",
      "swell",
      "urine",
      "gassy",
      "trial",
      "flora",
      "upper",
      "latch",
      "wight",
      "brick",
      "retry",
      "holly",
      "decal",
      "grass",
      "shack",
      "dogma",
      "mover",
      "defer",
      "sober",
      "optic",
      "crier",
      "vying",
      "nomad",
      "flute",
      "hippo",
      "shark",
      "drier",
      "obese",
      "bugle",
      "tawny",
      "chalk",
      "feast",
      "ruddy",
      "pedal",
      "scarf",
      "cruel",
      "bleat",
      "tidal",
      "slush",
      "semen",
      "windy",
      "dusty",
      "sally",
      "igloo",
      "nerdy",
      "jewel",
      "shone",
      "whale",
      "hymen",
      "abuse",
      "fugue",
      "elbow",
      "crumb",
      "pansy",
      "welsh",
      "syrup",
      "terse",
      "suave",
      "gamut",
      "swung",
      "drake",
      "freed",
      "afire",
      "shirt",
      "grout",
      "oddly",
      "tithe",
      "plaid",
      "dummy",
      "broom",
      "blind",
      "torch",
      "enemy",
      "again",
      "tying",
      "pesky",
      "alter",
      "gazer",
      "noble",
      "ethos",
      "bride",
      "extol",
      "decor",
      "hobby",
      "beast",
      "idiom",
      "utter",
      "these",
      "sixth",
      "alarm",
      "erase",
      "elegy",
      "spunk",
      "piper",
      "scaly",
      "scold",
      "hefty",
      "chick",
      "sooty",
      "canal",
      "whiny",
      "slash",
      "quake",
      "joint",
      "swept",
      "prude",
      "heavy",
      "wield",
      "femme",
      "lasso",
      "maize",
      "shale",
      "screw",
      "spree",
      "smoky",
      "whiff",
      "scent",
      "glade",
      "spent",
      "prism",
      "stoke",
      "riper",
      "orbit",
      "cocoa",
      "guilt",
      "humus",
      "shush",
      "table",
      "smirk",
      "wrong",
      "noisy",
      "alert",
      "shiny",
      "elate",
      "resin",
      "whole",
      "hunch",
      "pixel",
      "polar",
      "hotel",
      "sword",
      "cleat",
      "mango",
      "rumba",
      "puffy",
      "filly",
      "billy",
      "leash",
      "clout",
      "dance",
      "ovate",
      "facet",
      "chili",
      "paint",
      "liner",
      "curio",
      "salty",
      "audio",
      "snake",
      "fable",
      "cloak",
      "navel",
      "spurt",
      "pesto",
      "balmy",
      "flash",
      "unwed",
      "early",
      "churn",
      "weedy",
      "stump",
      "lease",
      "witty",
      "wimpy",
      "spoof",
      "saner",
      "blend",
      "salsa",
      "thick",
      "warty",
      "manic",
      "blare",
      "squib",
      "spoon",
      "probe",
      "crepe",
      "knack",
      "force",
      "debut",
      "order",
      "haste",
      "teeth",
      "agent",
      "widen",
      "icily",
      "slice",
      "ingot",
      "clash",
      "juror",
      "blood",
      "abode",
      "throw",
      "unity",
      "pivot",
      "slept",
      "troop",
      "spare",
      "sewer",
      "parse",
      "morph",
      "cacti",
      "tacky",
      "spool",
      "demon",
      "moody",
      "annex",
      "begin",
      "fuzzy",
      "patch",
      "water",
      "lumpy",
      "admin",
      "omega",
      "limit",
      "tabby",
      "macho",
      "aisle",
      "skiff",
      "basis",
      "plank",
      "verge",
      "botch",
      "crawl",
      "lousy",
      "slain",
      "cubic",
      "raise",
      "wrack",
      "guide",
      "foist",
      "cameo",
      "under",
      "actor",
      "revue",
      "fraud",
      "harpy",
      "scoop",
      "climb",
      "refer",
      "olden",
      "clerk",
      "debar",
      "tally",
      "ethic",
      "cairn",
      "tulle",
      "ghoul",
      "hilly",
      "crude",
      "apart",
      "scale",
      "older",
      "plain",
      "sperm",
      "briny",
      "abbot",
      "rerun",
      "quest",
      "crisp",
      "bound",
      "befit",
      "drawn",
      "suite",
      "itchy",
      "cheer",
      "bagel",
      "guess",
      "broad",
      "axiom",
      "chard",
      "caput",
      "leant",
      "harsh",
      "curse",
      "proud",
      "swing",
      "opine",
      "taste",
      "lupus",
      "gumbo",
      "miner",
      "green",
      "chasm",
      "lipid",
      "topic",
      "armor",
      "brush",
      "crane",
      "mural",
      "abled",
      "habit",
      "bossy",
      "maker",
      "dusky",
      "dizzy",
      "lithe",
      "brook",
      "jazzy",
      "fifty",
      "sense",
      "giant",
      "surly",
      "legal",
      "fatal",
      "flunk",
      "began",
      "prune",
      "small",
      "slant",
      "scoff",
      "torus",
      "ninny",
      "covey",
      "viper",
      "taken",
      "moral",
      "vogue",
      "owing",
      "token",
      "entry",
      "booth",
      "voter",
      "chide",
      "elfin",
      "ebony",
      "neigh",
      "minim",
      "melon",
      "kneed",
      "decoy",
      "voila",
      "ankle",
      "arrow",
      "mushy",
      "tribe",
      "cease",
      "eager",
      "birth",
      "graph",
      "odder",
      "terra",
      "weird",
      "tried",
      "clack",
      "color",
      "rough",
      "weigh",
      "uncut",
      "ladle",
      "strip",
      "craft",
      "minus",
      "dicey",
      "titan",
      "lucid",
      "vicar",
      "dress",
      "ditch",
      "gypsy",
      "pasta",
      "taffy",
      "flame",
      "swoop",
      "aloof",
      "sight",
      "broke",
      "teary",
      "chart",
      "sixty",
      "wordy",
      "sheer",
      "leper",
      "nosey",
      "bulge",
      "savor",
      "clamp",
      "funky",
      "foamy",
      "toxic",
      "brand",
      "plumb",
      "dingy",
      "butte",
      "drill",
      "tripe",
      "bicep",
      "tenor",
      "krill",
      "worse",
      "drama",
      "hyena",
      "think",
      "ratio",
      "cobra",
      "basil",
      "scrum",
      "bused",
      "phone",
      "court",
      "camel",
      "proof",
      "heard",
      "angel",
      "petal",
      "pouty",
      "throb",
      "maybe",
      "fetal",
      "sprig",
      "spine",
      "shout",
      "cadet",
      "macro",
      "dodgy",
      "satyr",
      "rarer",
      "binge",
      "trend",
      "nutty",
      "leapt",
      "amiss",
      "split",
      "myrrh",
      "width",
      "sonar",
      "tower",
      "baron",
      "fever",
      "waver",
      "spark",
      "belie",
      "sloop",
      "expel",
      "smote",
      "baler",
      "above",
      "north",
      "wafer",
      "scant",
      "frill",
      "awash",
      "snack",
      "scowl",
      "frail",
      "drift",
      "limbo",
      "fence",
      "motel",
      "ounce",
      "wreak",
      "revel",
      "talon",
      "prior",
      "knelt",
      "cello",
      "flake",
      "debug",
      "anode",
      "crime",
      "salve",
      "scout",
      "imbue",
      "pinky",
      "stave",
      "vague",
      "chock",
      "fight",
      "video",
      "stone",
      "teach",
      "cleft",
      "frost",
      "prawn",
      "booty",
      "twist",
      "apnea",
      "stiff",
      "plaza",
      "ledge",
      "tweak",
      "board",
      "grant",
      "medic",
      "bacon",
      "cable",
      "brawl",
      "slunk",
      "raspy",
      "forum",
      "drone",
      "women",
      "mucus",
      "boast",
      "toddy",
      "coven",
      "tumor",
      "truer",
      "wrath",
      "stall",
      "steam",
      "axial",
      "purer",
      "daily",
      "trail",
      "niche",
      "mealy",
      "juice",
      "nylon",
      "plump",
      "merry",
      "flail",
      "papal",
      "wheat",
      "berry",
      "cower",
      "erect",
      "brute",
      "leggy",
      "snipe",
      "sinew",
      "skier",
      "penny",
      "jumpy",
      "rally",
      "umbra",
      "scary",
      "modem",
      "gross",
      "avian",
      "greed",
      "satin",
      "tonic",
      "parka",
      "sniff",
      "livid",
      "stark",
      "trump",
      "giddy",
      "reuse",
      "taboo",
      "avoid",
      "quote",
      "devil",
      "liken",
      "gloss",
      "gayer",
      "beret",
      "noise",
      "gland",
      "dealt",
      "sling",
      "rumor",
      "opera",
      "thigh",
      "tonga",
      "flare",
      "wound",
      "white",
      "bulky",
      "etude",
      "horse",
      "circa",
      "paddy",
      "inbox",
      "fizzy",
      "grain",
      "exert",
      "surge",
      "gleam",
      "belle",
      "salvo",
      "crush",
      "fruit",
      "sappy",
      "taker",
      "tract",
      "ovine",
      "spiky",
      "frank",
      "reedy",
      "filth",
      "spasm",
      "heave",
      "mambo",
      "right",
      "clank",
      "trust",
      "lumen",
      "borne",
      "spook",
      "sauce",
      "amber",
      "lathe",
      "carat",
      "corer",
      "dirty",
      "slyly",
      "affix",
      "alloy",
      "taint",
      "sheep",
      "kinky",
      "wooly",
      "mauve",
      "flung",
      "yacht",
      "fried",
      "quail",
      "brunt",
      "grimy",
      "curvy",
      "cagey",
      "rinse",
      "deuce",
      "state",
      "grasp",
      "milky",
      "bison",
      "graft",
      "sandy",
      "baste",
      "flask",
      "hedge",
      "girly",
      "swash",
      "boney",
      "coupe",
      "endow",
      "abhor",
      "welch",
      "blade",
      "tight",
      "geese",
      "miser",
      "mirth",
      "cloud",
      "cabal",
      "leech",
      "close",
      "tenth",
      "pecan",
      "droit",
      "grail",
      "clone",
      "guise",
      "ralph",
      "tango",
      "biddy",
      "smith",
      "mower",
      "payee",
      "serif",
      "drape",
      "fifth",
      "spank",
      "glaze",
      "allot",
      "truck",
      "kayak",
      "virus",
      "testy",
      "tepee",
      "fully",
      "zonal",
      "metro",
      "curry",
      "grand",
      "banjo",
      "axion",
      "bezel",
      "occur",
      "chain",
      "nasal",
      "gooey",
      "filer",
      "brace",
      "allay",
      "pubic",
      "raven",
      "plead",
      "gnash",
      "flaky",
      "munch",
      "dully",
      "eking",
      "thing",
      "slink",
      "hurry",
      "theft",
      "shorn",
      "pygmy",
      "ranch",
      "wring",
      "lemon",
      "shore",
      "mamma",
      "froze",
      "newer",
      "style",
      "moose",
      "antic",
      "drown",
      "vegan",
      "chess",
      "guppy",
      "union",
      "lever",
      "lorry",
      "image",
      "cabby",
      "druid",
      "exact",
      "truth",
      "dopey",
      "spear",
      "cried",
      "chime",
      "crony",
      "stunk",
      "timid",
      "batch",
      "gauge",
      "rotor",
      "crack",
      "curve",
      "latte",
      "witch",
      "bunch",
      "repel",
      "anvil",
      "soapy",
      "meter",
      "broth",
      "madly",
      "dried",
      "scene",
      "known",
      "magma",
      "roost",
      "woman",
      "thong",
      "punch",
      "pasty",
      "downy",
      "knead",
      "whirl",
      "rapid",
      "clang",
      "anger",
      "drive",
      "goofy",
      "email",
      "music",
      "stuff",
      "bleep",
      "rider",
      "mecca",
      "folio",
      "setup",
      "verso",
      "quash",
      "fauna",
      "gummy",
      "happy",
      "newly",
      "fussy",
      "relic",
      "guava",
      "ratty",
      "fudge",
      "femur",
      "chirp",
      "forte",
      "alibi",
      "whine",
      "petty",
      "golly",
      "plait",
      "fleck",
      "felon",
      "gourd",
      "brown",
      "thrum",
      "ficus",
      "stash",
      "decry",
      "wiser",
      "junta",
      "visor",
      "daunt",
      "scree",
      "impel",
      "await",
      "press",
      "whose",
      "turbo",
      "stoop",
      "speak",
      "mangy",
      "eying",
      "inlet",
      "crone",
      "pulse",
      "mossy",
      "staid",
      "hence",
      "pinch",
      "teddy",
      "sully",
      "snore",
      "ripen",
      "snowy",
      "attic",
      "going",
      "leach",
      "mouth",
      "hound",
      "clump",
      "tonal",
      "bigot",
      "peril",
      "piece",
      "blame",
      "haute",
      "spied",
      "undid",
      "intro",
      "basal",
      "rodeo",
      "guard",
      "steer",
      "loamy",
      "scamp",
      "scram",
      "manly",
      "hello",
      "vaunt",
      "organ",
      "feral",
      "knock",
      "extra",
      "condo",
      "adapt",
      "willy",
      "polka",
      "rayon",
      "skirt",
      "faith",
      "torso",
      "match",
      "mercy",
      "tepid",
      "sleek",
      "riser",
      "twixt",
      "peace",
      "flush",
      "catty",
      "login",
      "eject",
      "roger",
      "rival",
      "untie",
      "refit",
      "aorta",
      "adult",
      "judge",
      "rower",
      "artsy",
      "rural",
      "shave",
      "bobby",
      "eclat",
      "fella",
      "gaily",
      "harry",
      "hasty",
      "hydro",
      "liege",
      "octal",
      "ombre",
      "payer",
      "sooth",
      "unset",
      "unlit",
      "vomit",
      "fanny",
      "fetus",
      "butch",
      "stalk",
      "flack",
      "widow",
      "augur",
    ],
    be = [
      "aahed",
      "aalii",
      "aargh",
      "aarti",
      "abaca",
      "abaci",
      "abacs",
      "abaft",
      "abaka",
      "abamp",
      "aband",
      "abash",
      "abask",
      "abaya",
      "abbas",
      "abbed",
      "abbes",
      "abcee",
      "abeam",
      "abear",
      "abele",
      "abers",
      "abets",
      "abies",
      "abler",
      "ables",
      "ablet",
      "ablow",
      "abmho",
      "abohm",
      "aboil",
      "aboma",
      "aboon",
      "abord",
      "abore",
      "abram",
      "abray",
      "abrim",
      "abrin",
      "abris",
      "absey",
      "absit",
      "abuna",
      "abune",
      "abuts",
      "abuzz",
      "abyes",
      "abysm",
      "acais",
      "acari",
      "accas",
      "accoy",
      "acerb",
      "acers",
      "aceta",
      "achar",
      "ached",
      "aches",
      "achoo",
      "acids",
      "acidy",
      "acing",
      "acini",
      "ackee",
      "acker",
      "acmes",
      "acmic",
      "acned",
      "acnes",
      "acock",
      "acold",
      "acred",
      "acres",
      "acros",
      "acted",
      "actin",
      "acton",
      "acyls",
      "adaws",
      "adays",
      "adbot",
      "addax",
      "added",
      "adder",
      "addio",
      "addle",
      "adeem",
      "adhan",
      "adieu",
      "adios",
      "adits",
      "adman",
      "admen",
      "admix",
      "adobo",
      "adown",
      "adoze",
      "adrad",
      "adred",
      "adsum",
      "aduki",
      "adunc",
      "adust",
      "advew",
      "adyta",
      "adzed",
      "adzes",
      "aecia",
      "aedes",
      "aegis",
      "aeons",
      "aerie",
      "aeros",
      "aesir",
      "afald",
      "afara",
      "afars",
      "afear",
      "aflaj",
      "afore",
      "afrit",
      "afros",
      "agama",
      "agami",
      "agars",
      "agast",
      "agave",
      "agaze",
      "agene",
      "agers",
      "agger",
      "aggie",
      "aggri",
      "aggro",
      "aggry",
      "aghas",
      "agila",
      "agios",
      "agism",
      "agist",
      "agita",
      "aglee",
      "aglet",
      "agley",
      "agloo",
      "aglus",
      "agmas",
      "agoge",
      "agone",
      "agons",
      "agood",
      "agora",
      "agria",
      "agrin",
      "agros",
      "agued",
      "agues",
      "aguna",
      "aguti",
      "aheap",
      "ahent",
      "ahigh",
      "ahind",
      "ahing",
      "ahint",
      "ahold",
      "ahull",
      "ahuru",
      "aidas",
      "aided",
      "aides",
      "aidoi",
      "aidos",
      "aiery",
      "aigas",
      "aight",
      "ailed",
      "aimed",
      "aimer",
      "ainee",
      "ainga",
      "aioli",
      "aired",
      "airer",
      "airns",
      "airth",
      "airts",
      "aitch",
      "aitus",
      "aiver",
      "aiyee",
      "aizle",
      "ajies",
      "ajiva",
      "ajuga",
      "ajwan",
      "akees",
      "akela",
      "akene",
      "aking",
      "akita",
      "akkas",
      "alaap",
      "alack",
      "alamo",
      "aland",
      "alane",
      "alang",
      "alans",
      "alant",
      "alapa",
      "alaps",
      "alary",
      "alate",
      "alays",
      "albas",
      "albee",
      "alcid",
      "alcos",
      "aldea",
      "alder",
      "aldol",
      "aleck",
      "alecs",
      "alefs",
      "aleft",
      "aleph",
      "alews",
      "aleye",
      "alfas",
      "algal",
      "algas",
      "algid",
      "algin",
      "algor",
      "algum",
      "alias",
      "alifs",
      "aline",
      "alist",
      "aliya",
      "alkie",
      "alkos",
      "alkyd",
      "alkyl",
      "allee",
      "allel",
      "allis",
      "allod",
      "allyl",
      "almah",
      "almas",
      "almeh",
      "almes",
      "almud",
      "almug",
      "alods",
      "aloed",
      "aloes",
      "aloha",
      "aloin",
      "aloos",
      "alowe",
      "altho",
      "altos",
      "alula",
      "alums",
      "alure",
      "alvar",
      "alway",
      "amahs",
      "amain",
      "amate",
      "amaut",
      "amban",
      "ambit",
      "ambos",
      "ambry",
      "ameba",
      "ameer",
      "amene",
      "amens",
      "ament",
      "amias",
      "amice",
      "amici",
      "amide",
      "amido",
      "amids",
      "amies",
      "amiga",
      "amigo",
      "amine",
      "amino",
      "amins",
      "amirs",
      "amlas",
      "amman",
      "ammon",
      "ammos",
      "amnia",
      "amnic",
      "amnio",
      "amoks",
      "amole",
      "amort",
      "amour",
      "amove",
      "amowt",
      "amped",
      "ampul",
      "amrit",
      "amuck",
      "amyls",
      "anana",
      "anata",
      "ancho",
      "ancle",
      "ancon",
      "andro",
      "anear",
      "anele",
      "anent",
      "angas",
      "anglo",
      "anigh",
      "anile",
      "anils",
      "anima",
      "animi",
      "anion",
      "anise",
      "anker",
      "ankhs",
      "ankus",
      "anlas",
      "annal",
      "annas",
      "annat",
      "anoas",
      "anole",
      "anomy",
      "ansae",
      "antae",
      "antar",
      "antas",
      "anted",
      "antes",
      "antis",
      "antra",
      "antre",
      "antsy",
      "anura",
      "anyon",
      "apace",
      "apage",
      "apaid",
      "apayd",
      "apays",
      "apeak",
      "apeek",
      "apers",
      "apert",
      "apery",
      "apgar",
      "aphis",
      "apian",
      "apiol",
      "apish",
      "apism",
      "apode",
      "apods",
      "apoop",
      "aport",
      "appal",
      "appay",
      "appel",
      "appro",
      "appui",
      "appuy",
      "apres",
      "apses",
      "apsis",
      "apsos",
      "apted",
      "apter",
      "aquae",
      "aquas",
      "araba",
      "araks",
      "arame",
      "arars",
      "arbas",
      "arced",
      "archi",
      "arcos",
      "arcus",
      "ardeb",
      "ardri",
      "aread",
      "areae",
      "areal",
      "arear",
      "areas",
      "areca",
      "aredd",
      "arede",
      "arefy",
      "areic",
      "arene",
      "arepa",
      "arere",
      "arete",
      "arets",
      "arett",
      "argal",
      "argan",
      "argil",
      "argle",
      "argol",
      "argon",
      "argot",
      "argus",
      "arhat",
      "arias",
      "ariel",
      "ariki",
      "arils",
      "ariot",
      "arish",
      "arked",
      "arled",
      "arles",
      "armed",
      "armer",
      "armet",
      "armil",
      "arnas",
      "arnut",
      "aroba",
      "aroha",
      "aroid",
      "arpas",
      "arpen",
      "arrah",
      "arras",
      "arret",
      "arris",
      "arroz",
      "arsed",
      "arses",
      "arsey",
      "arsis",
      "artal",
      "artel",
      "artic",
      "artis",
      "aruhe",
      "arums",
      "arval",
      "arvee",
      "arvos",
      "aryls",
      "asana",
      "ascon",
      "ascus",
      "asdic",
      "ashed",
      "ashes",
      "ashet",
      "asked",
      "asker",
      "askoi",
      "askos",
      "aspen",
      "asper",
      "aspic",
      "aspie",
      "aspis",
      "aspro",
      "assai",
      "assam",
      "asses",
      "assez",
      "assot",
      "aster",
      "astir",
      "astun",
      "asura",
      "asway",
      "aswim",
      "asyla",
      "ataps",
      "ataxy",
      "atigi",
      "atilt",
      "atimy",
      "atlas",
      "atman",
      "atmas",
      "atmos",
      "atocs",
      "atoke",
      "atoks",
      "atoms",
      "atomy",
      "atony",
      "atopy",
      "atria",
      "atrip",
      "attap",
      "attar",
      "atuas",
      "audad",
      "auger",
      "aught",
      "aulas",
      "aulic",
      "auloi",
      "aulos",
      "aumil",
      "aunes",
      "aunts",
      "aurae",
      "aural",
      "aurar",
      "auras",
      "aurei",
      "aures",
      "auric",
      "auris",
      "aurum",
      "autos",
      "auxin",
      "avale",
      "avant",
      "avast",
      "avels",
      "avens",
      "avers",
      "avgas",
      "avine",
      "avion",
      "avise",
      "aviso",
      "avize",
      "avows",
      "avyze",
      "awarn",
      "awato",
      "awave",
      "aways",
      "awdls",
      "aweel",
      "aweto",
      "awing",
      "awmry",
      "awned",
      "awner",
      "awols",
      "awork",
      "axels",
      "axile",
      "axils",
      "axing",
      "axite",
      "axled",
      "axles",
      "axman",
      "axmen",
      "axoid",
      "axone",
      "axons",
      "ayahs",
      "ayaya",
      "ayelp",
      "aygre",
      "ayins",
      "ayont",
      "ayres",
      "ayrie",
      "azans",
      "azide",
      "azido",
      "azine",
      "azlon",
      "azoic",
      "azole",
      "azons",
      "azote",
      "azoth",
      "azuki",
      "azurn",
      "azury",
      "azygy",
      "azyme",
      "azyms",
      "baaed",
      "baals",
      "babas",
      "babel",
      "babes",
      "babka",
      "baboo",
      "babul",
      "babus",
      "bacca",
      "bacco",
      "baccy",
      "bacha",
      "bachs",
      "backs",
      "baddy",
      "baels",
      "baffs",
      "baffy",
      "bafts",
      "baghs",
      "bagie",
      "bahts",
      "bahus",
      "bahut",
      "bails",
      "bairn",
      "baisa",
      "baith",
      "baits",
      "baiza",
      "baize",
      "bajan",
      "bajra",
      "bajri",
      "bajus",
      "baked",
      "baken",
      "bakes",
      "bakra",
      "balas",
      "balds",
      "baldy",
      "baled",
      "bales",
      "balks",
      "balky",
      "balls",
      "bally",
      "balms",
      "baloo",
      "balsa",
      "balti",
      "balun",
      "balus",
      "bambi",
      "banak",
      "banco",
      "bancs",
      "banda",
      "bandh",
      "bands",
      "bandy",
      "baned",
      "banes",
      "bangs",
      "bania",
      "banks",
      "banns",
      "bants",
      "bantu",
      "banty",
      "banya",
      "bapus",
      "barbe",
      "barbs",
      "barby",
      "barca",
      "barde",
      "bardo",
      "bards",
      "bardy",
      "bared",
      "barer",
      "bares",
      "barfi",
      "barfs",
      "baric",
      "barks",
      "barky",
      "barms",
      "barmy",
      "barns",
      "barny",
      "barps",
      "barra",
      "barre",
      "barro",
      "barry",
      "barye",
      "basan",
      "based",
      "basen",
      "baser",
      "bases",
      "basho",
      "basij",
      "basks",
      "bason",
      "basse",
      "bassi",
      "basso",
      "bassy",
      "basta",
      "basti",
      "basto",
      "basts",
      "bated",
      "bates",
      "baths",
      "batik",
      "batta",
      "batts",
      "battu",
      "bauds",
      "bauks",
      "baulk",
      "baurs",
      "bavin",
      "bawds",
      "bawks",
      "bawls",
      "bawns",
      "bawrs",
      "bawty",
      "bayed",
      "bayer",
      "bayes",
      "bayle",
      "bayts",
      "bazar",
      "bazoo",
      "beads",
      "beaks",
      "beaky",
      "beals",
      "beams",
      "beamy",
      "beano",
      "beans",
      "beany",
      "beare",
      "bears",
      "beath",
      "beats",
      "beaty",
      "beaus",
      "beaut",
      "beaux",
      "bebop",
      "becap",
      "becke",
      "becks",
      "bedad",
      "bedel",
      "bedes",
      "bedew",
      "bedim",
      "bedye",
      "beedi",
      "beefs",
      "beeps",
      "beers",
      "beery",
      "beets",
      "befog",
      "begad",
      "begar",
      "begem",
      "begot",
      "begum",
      "beige",
      "beigy",
      "beins",
      "bekah",
      "belah",
      "belar",
      "belay",
      "belee",
      "belga",
      "bells",
      "belon",
      "belts",
      "bemad",
      "bemas",
      "bemix",
      "bemud",
      "bends",
      "bendy",
      "benes",
      "benet",
      "benga",
      "benis",
      "benne",
      "benni",
      "benny",
      "bento",
      "bents",
      "benty",
      "bepat",
      "beray",
      "beres",
      "bergs",
      "berko",
      "berks",
      "berme",
      "berms",
      "berob",
      "beryl",
      "besat",
      "besaw",
      "besee",
      "beses",
      "besit",
      "besom",
      "besot",
      "besti",
      "bests",
      "betas",
      "beted",
      "betes",
      "beths",
      "betid",
      "beton",
      "betta",
      "betty",
      "bever",
      "bevor",
      "bevue",
      "bevvy",
      "bewet",
      "bewig",
      "bezes",
      "bezil",
      "bezzy",
      "bhais",
      "bhaji",
      "bhang",
      "bhats",
      "bhels",
      "bhoot",
      "bhuna",
      "bhuts",
      "biach",
      "biali",
      "bialy",
      "bibbs",
      "bibes",
      "biccy",
      "bices",
      "bided",
      "bider",
      "bides",
      "bidet",
      "bidis",
      "bidon",
      "bield",
      "biers",
      "biffo",
      "biffs",
      "biffy",
      "bifid",
      "bigae",
      "biggs",
      "biggy",
      "bigha",
      "bight",
      "bigly",
      "bigos",
      "bijou",
      "biked",
      "biker",
      "bikes",
      "bikie",
      "bilbo",
      "bilby",
      "biled",
      "biles",
      "bilgy",
      "bilks",
      "bills",
      "bimah",
      "bimas",
      "bimbo",
      "binal",
      "bindi",
      "binds",
      "biner",
      "bines",
      "bings",
      "bingy",
      "binit",
      "binks",
      "bints",
      "biogs",
      "biont",
      "biota",
      "biped",
      "bipod",
      "birds",
      "birks",
      "birle",
      "birls",
      "biros",
      "birrs",
      "birse",
      "birsy",
      "bises",
      "bisks",
      "bisom",
      "bitch",
      "biter",
      "bites",
      "bitos",
      "bitou",
      "bitsy",
      "bitte",
      "bitts",
      "bivia",
      "bivvy",
      "bizes",
      "bizzo",
      "bizzy",
      "blabs",
      "blads",
      "blady",
      "blaer",
      "blaes",
      "blaff",
      "blags",
      "blahs",
      "blain",
      "blams",
      "blart",
      "blase",
      "blash",
      "blate",
      "blats",
      "blatt",
      "blaud",
      "blawn",
      "blaws",
      "blays",
      "blear",
      "blebs",
      "blech",
      "blees",
      "blent",
      "blert",
      "blest",
      "blets",
      "bleys",
      "blimy",
      "bling",
      "blini",
      "blins",
      "bliny",
      "blips",
      "blist",
      "blite",
      "blits",
      "blive",
      "blobs",
      "blocs",
      "blogs",
      "blook",
      "bloop",
      "blore",
      "blots",
      "blows",
      "blowy",
      "blubs",
      "blude",
      "bluds",
      "bludy",
      "blued",
      "blues",
      "bluet",
      "bluey",
      "bluid",
      "blume",
      "blunk",
      "blurs",
      "blype",
      "boabs",
      "boaks",
      "boars",
      "boart",
      "boats",
      "bobac",
      "bobak",
      "bobas",
      "bobol",
      "bobos",
      "bocca",
      "bocce",
      "bocci",
      "boche",
      "bocks",
      "boded",
      "bodes",
      "bodge",
      "bodhi",
      "bodle",
      "boeps",
      "boets",
      "boeuf",
      "boffo",
      "boffs",
      "bogan",
      "bogey",
      "boggy",
      "bogie",
      "bogle",
      "bogue",
      "bogus",
      "bohea",
      "bohos",
      "boils",
      "boing",
      "boink",
      "boite",
      "boked",
      "bokeh",
      "bokes",
      "bokos",
      "bolar",
      "bolas",
      "bolds",
      "boles",
      "bolix",
      "bolls",
      "bolos",
      "bolts",
      "bolus",
      "bomas",
      "bombe",
      "bombo",
      "bombs",
      "bonce",
      "bonds",
      "boned",
      "boner",
      "bones",
      "bongs",
      "bonie",
      "bonks",
      "bonne",
      "bonny",
      "bonza",
      "bonze",
      "booai",
      "booay",
      "boobs",
      "boody",
      "booed",
      "boofy",
      "boogy",
      "boohs",
      "books",
      "booky",
      "bools",
      "booms",
      "boomy",
      "boong",
      "boons",
      "boord",
      "boors",
      "boose",
      "boots",
      "boppy",
      "borak",
      "boral",
      "boras",
      "borde",
      "bords",
      "bored",
      "boree",
      "borel",
      "borer",
      "bores",
      "borgo",
      "boric",
      "borks",
      "borms",
      "borna",
      "boron",
      "borts",
      "borty",
      "bortz",
      "bosie",
      "bosks",
      "bosky",
      "boson",
      "bosun",
      "botas",
      "botel",
      "botes",
      "bothy",
      "botte",
      "botts",
      "botty",
      "bouge",
      "bouks",
      "boult",
      "bouns",
      "bourd",
      "bourg",
      "bourn",
      "bouse",
      "bousy",
      "bouts",
      "bovid",
      "bowat",
      "bowed",
      "bower",
      "bowes",
      "bowet",
      "bowie",
      "bowls",
      "bowne",
      "bowrs",
      "bowse",
      "boxed",
      "boxen",
      "boxes",
      "boxla",
      "boxty",
      "boyar",
      "boyau",
      "boyed",
      "boyfs",
      "boygs",
      "boyla",
      "boyos",
      "boysy",
      "bozos",
      "braai",
      "brach",
      "brack",
      "bract",
      "brads",
      "braes",
      "brags",
      "brail",
      "braks",
      "braky",
      "brame",
      "brane",
      "brank",
      "brans",
      "brant",
      "brast",
      "brats",
      "brava",
      "bravi",
      "braws",
      "braxy",
      "brays",
      "braza",
      "braze",
      "bream",
      "brede",
      "breds",
      "breem",
      "breer",
      "brees",
      "breid",
      "breis",
      "breme",
      "brens",
      "brent",
      "brere",
      "brers",
      "breve",
      "brews",
      "breys",
      "brier",
      "bries",
      "brigs",
      "briki",
      "briks",
      "brill",
      "brims",
      "brins",
      "brios",
      "brise",
      "briss",
      "brith",
      "brits",
      "britt",
      "brize",
      "broch",
      "brock",
      "brods",
      "brogh",
      "brogs",
      "brome",
      "bromo",
      "bronc",
      "brond",
      "brool",
      "broos",
      "brose",
      "brosy",
      "brows",
      "brugh",
      "bruin",
      "bruit",
      "brule",
      "brume",
      "brung",
      "brusk",
      "brust",
      "bruts",
      "buats",
      "buaze",
      "bubal",
      "bubas",
      "bubba",
      "bubbe",
      "bubby",
      "bubus",
      "buchu",
      "bucko",
      "bucks",
      "bucku",
      "budas",
      "budis",
      "budos",
      "buffa",
      "buffe",
      "buffi",
      "buffo",
      "buffs",
      "buffy",
      "bufos",
      "bufty",
      "buhls",
      "buhrs",
      "buiks",
      "buist",
      "bukes",
      "bulbs",
      "bulgy",
      "bulks",
      "bulla",
      "bulls",
      "bulse",
      "bumbo",
      "bumfs",
      "bumph",
      "bumps",
      "bumpy",
      "bunas",
      "bunce",
      "bunco",
      "bunde",
      "bundh",
      "bunds",
      "bundt",
      "bundu",
      "bundy",
      "bungs",
      "bungy",
      "bunia",
      "bunje",
      "bunjy",
      "bunko",
      "bunks",
      "bunns",
      "bunts",
      "bunty",
      "bunya",
      "buoys",
      "buppy",
      "buran",
      "buras",
      "burbs",
      "burds",
      "buret",
      "burfi",
      "burgh",
      "burgs",
      "burin",
      "burka",
      "burke",
      "burks",
      "burls",
      "burns",
      "buroo",
      "burps",
      "burqa",
      "burro",
      "burrs",
      "burry",
      "bursa",
      "burse",
      "busby",
      "buses",
      "busks",
      "busky",
      "bussu",
      "busti",
      "busts",
      "busty",
      "buteo",
      "butes",
      "butle",
      "butoh",
      "butts",
      "butty",
      "butut",
      "butyl",
      "buzzy",
      "bwana",
      "bwazi",
      "byded",
      "bydes",
      "byked",
      "bykes",
      "byres",
      "byrls",
      "byssi",
      "bytes",
      "byway",
      "caaed",
      "cabas",
      "caber",
      "cabob",
      "caboc",
      "cabre",
      "cacas",
      "cacks",
      "cacky",
      "cadee",
      "cades",
      "cadge",
      "cadgy",
      "cadie",
      "cadis",
      "cadre",
      "caeca",
      "caese",
      "cafes",
      "caffs",
      "caged",
      "cager",
      "cages",
      "cagot",
      "cahow",
      "caids",
      "cains",
      "caird",
      "cajon",
      "cajun",
      "caked",
      "cakes",
      "cakey",
      "calfs",
      "calid",
      "calif",
      "calix",
      "calks",
      "calla",
      "calls",
      "calms",
      "calmy",
      "calos",
      "calpa",
      "calps",
      "calve",
      "calyx",
      "caman",
      "camas",
      "cames",
      "camis",
      "camos",
      "campi",
      "campo",
      "camps",
      "campy",
      "camus",
      "caned",
      "caneh",
      "caner",
      "canes",
      "cangs",
      "canid",
      "canna",
      "canns",
      "canso",
      "canst",
      "canto",
      "cants",
      "canty",
      "capas",
      "caped",
      "capes",
      "capex",
      "caphs",
      "capiz",
      "caple",
      "capon",
      "capos",
      "capot",
      "capri",
      "capul",
      "carap",
      "carbo",
      "carbs",
      "carby",
      "cardi",
      "cards",
      "cardy",
      "cared",
      "carer",
      "cares",
      "caret",
      "carex",
      "carks",
      "carle",
      "carls",
      "carns",
      "carny",
      "carob",
      "carom",
      "caron",
      "carpi",
      "carps",
      "carrs",
      "carse",
      "carta",
      "carte",
      "carts",
      "carvy",
      "casas",
      "casco",
      "cased",
      "cases",
      "casks",
      "casky",
      "casts",
      "casus",
      "cates",
      "cauda",
      "cauks",
      "cauld",
      "cauls",
      "caums",
      "caups",
      "cauri",
      "causa",
      "cavas",
      "caved",
      "cavel",
      "caver",
      "caves",
      "cavie",
      "cawed",
      "cawks",
      "caxon",
      "ceaze",
      "cebid",
      "cecal",
      "cecum",
      "ceded",
      "ceder",
      "cedes",
      "cedis",
      "ceiba",
      "ceili",
      "ceils",
      "celeb",
      "cella",
      "celli",
      "cells",
      "celom",
      "celts",
      "cense",
      "cento",
      "cents",
      "centu",
      "ceorl",
      "cepes",
      "cerci",
      "cered",
      "ceres",
      "cerge",
      "ceria",
      "ceric",
      "cerne",
      "ceroc",
      "ceros",
      "certs",
      "certy",
      "cesse",
      "cesta",
      "cesti",
      "cetes",
      "cetyl",
      "cezve",
      "chace",
      "chack",
      "chaco",
      "chado",
      "chads",
      "chaft",
      "chais",
      "chals",
      "chams",
      "chana",
      "chang",
      "chank",
      "chape",
      "chaps",
      "chapt",
      "chara",
      "chare",
      "chark",
      "charr",
      "chars",
      "chary",
      "chats",
      "chave",
      "chavs",
      "chawk",
      "chaws",
      "chaya",
      "chays",
      "cheep",
      "chefs",
      "cheka",
      "chela",
      "chelp",
      "chemo",
      "chems",
      "chere",
      "chert",
      "cheth",
      "chevy",
      "chews",
      "chewy",
      "chiao",
      "chias",
      "chibs",
      "chica",
      "chich",
      "chico",
      "chics",
      "chiel",
      "chiks",
      "chile",
      "chimb",
      "chimo",
      "chimp",
      "chine",
      "ching",
      "chink",
      "chino",
      "chins",
      "chips",
      "chirk",
      "chirl",
      "chirm",
      "chiro",
      "chirr",
      "chirt",
      "chiru",
      "chits",
      "chive",
      "chivs",
      "chivy",
      "chizz",
      "choco",
      "chocs",
      "chode",
      "chogs",
      "choil",
      "choko",
      "choky",
      "chola",
      "choli",
      "cholo",
      "chomp",
      "chons",
      "choof",
      "chook",
      "choom",
      "choon",
      "chops",
      "chota",
      "chott",
      "chout",
      "choux",
      "chowk",
      "chows",
      "chubs",
      "chufa",
      "chuff",
      "chugs",
      "chums",
      "churl",
      "churr",
      "chuse",
      "chuts",
      "chyle",
      "chyme",
      "chynd",
      "cibol",
      "cided",
      "cides",
      "ciels",
      "ciggy",
      "cilia",
      "cills",
      "cimar",
      "cimex",
      "cinct",
      "cines",
      "cinqs",
      "cions",
      "cippi",
      "circs",
      "cires",
      "cirls",
      "cirri",
      "cisco",
      "cissy",
      "cists",
      "cital",
      "cited",
      "citer",
      "cites",
      "cives",
      "civet",
      "civie",
      "civvy",
      "clach",
      "clade",
      "clads",
      "claes",
      "clags",
      "clame",
      "clams",
      "clans",
      "claps",
      "clapt",
      "claro",
      "clart",
      "clary",
      "clast",
      "clats",
      "claut",
      "clave",
      "clavi",
      "claws",
      "clays",
      "cleck",
      "cleek",
      "cleep",
      "clefs",
      "clegs",
      "cleik",
      "clems",
      "clepe",
      "clept",
      "cleve",
      "clews",
      "clied",
      "clies",
      "clift",
      "clime",
      "cline",
      "clint",
      "clipe",
      "clips",
      "clipt",
      "clits",
      "cloam",
      "clods",
      "cloff",
      "clogs",
      "cloke",
      "clomb",
      "clomp",
      "clonk",
      "clons",
      "cloop",
      "cloot",
      "clops",
      "clote",
      "clots",
      "clour",
      "clous",
      "clows",
      "cloye",
      "cloys",
      "cloze",
      "clubs",
      "clues",
      "cluey",
      "clunk",
      "clype",
      "cnida",
      "coact",
      "coady",
      "coala",
      "coals",
      "coaly",
      "coapt",
      "coarb",
      "coate",
      "coati",
      "coats",
      "cobbs",
      "cobby",
      "cobia",
      "coble",
      "cobza",
      "cocas",
      "cocci",
      "cocco",
      "cocks",
      "cocky",
      "cocos",
      "codas",
      "codec",
      "coded",
      "coden",
      "coder",
      "codes",
      "codex",
      "codon",
      "coeds",
      "coffs",
      "cogie",
      "cogon",
      "cogue",
      "cohab",
      "cohen",
      "cohoe",
      "cohog",
      "cohos",
      "coifs",
      "coign",
      "coils",
      "coins",
      "coirs",
      "coits",
      "coked",
      "cokes",
      "colas",
      "colby",
      "colds",
      "coled",
      "coles",
      "coley",
      "colic",
      "colin",
      "colls",
      "colly",
      "colog",
      "colts",
      "colza",
      "comae",
      "comal",
      "comas",
      "combe",
      "combi",
      "combo",
      "combs",
      "comby",
      "comer",
      "comes",
      "comix",
      "commo",
      "comms",
      "commy",
      "compo",
      "comps",
      "compt",
      "comte",
      "comus",
      "coned",
      "cones",
      "coney",
      "confs",
      "conga",
      "conge",
      "congo",
      "conia",
      "conin",
      "conks",
      "conky",
      "conne",
      "conns",
      "conte",
      "conto",
      "conus",
      "convo",
      "cooch",
      "cooed",
      "cooee",
      "cooer",
      "cooey",
      "coofs",
      "cooks",
      "cooky",
      "cools",
      "cooly",
      "coomb",
      "cooms",
      "coomy",
      "coons",
      "coops",
      "coopt",
      "coost",
      "coots",
      "cooze",
      "copal",
      "copay",
      "coped",
      "copen",
      "coper",
      "copes",
      "coppy",
      "copra",
      "copsy",
      "coqui",
      "coram",
      "corbe",
      "corby",
      "cords",
      "cored",
      "cores",
      "corey",
      "corgi",
      "coria",
      "corks",
      "corky",
      "corms",
      "corni",
      "corno",
      "corns",
      "cornu",
      "corps",
      "corse",
      "corso",
      "cosec",
      "cosed",
      "coses",
      "coset",
      "cosey",
      "cosie",
      "costa",
      "coste",
      "costs",
      "cotan",
      "coted",
      "cotes",
      "coths",
      "cotta",
      "cotts",
      "coude",
      "coups",
      "courb",
      "courd",
      "coure",
      "cours",
      "couta",
      "couth",
      "coved",
      "coves",
      "covin",
      "cowal",
      "cowan",
      "cowed",
      "cowks",
      "cowls",
      "cowps",
      "cowry",
      "coxae",
      "coxal",
      "coxed",
      "coxes",
      "coxib",
      "coyau",
      "coyed",
      "coyer",
      "coypu",
      "cozed",
      "cozen",
      "cozes",
      "cozey",
      "cozie",
      "craal",
      "crabs",
      "crags",
      "craic",
      "craig",
      "crake",
      "crame",
      "crams",
      "crans",
      "crape",
      "craps",
      "crapy",
      "crare",
      "craws",
      "crays",
      "creds",
      "creel",
      "crees",
      "crems",
      "crena",
      "creps",
      "crepy",
      "crewe",
      "crews",
      "crias",
      "cribs",
      "cries",
      "crims",
      "crine",
      "crios",
      "cripe",
      "crips",
      "crise",
      "crith",
      "crits",
      "croci",
      "crocs",
      "croft",
      "crogs",
      "cromb",
      "crome",
      "cronk",
      "crons",
      "crool",
      "croon",
      "crops",
      "crore",
      "crost",
      "crout",
      "crows",
      "croze",
      "cruck",
      "crudo",
      "cruds",
      "crudy",
      "crues",
      "cruet",
      "cruft",
      "crunk",
      "cruor",
      "crura",
      "cruse",
      "crusy",
      "cruve",
      "crwth",
      "cryer",
      "ctene",
      "cubby",
      "cubeb",
      "cubed",
      "cuber",
      "cubes",
      "cubit",
      "cuddy",
      "cuffo",
      "cuffs",
      "cuifs",
      "cuing",
      "cuish",
      "cuits",
      "cukes",
      "culch",
      "culet",
      "culex",
      "culls",
      "cully",
      "culms",
      "culpa",
      "culti",
      "cults",
      "culty",
      "cumec",
      "cundy",
      "cunei",
      "cunit",
      "cunts",
      "cupel",
      "cupid",
      "cuppa",
      "cuppy",
      "curat",
      "curbs",
      "curch",
      "curds",
      "curdy",
      "cured",
      "curer",
      "cures",
      "curet",
      "curfs",
      "curia",
      "curie",
      "curli",
      "curls",
      "curns",
      "curny",
      "currs",
      "cursi",
      "curst",
      "cusec",
      "cushy",
      "cusks",
      "cusps",
      "cuspy",
      "cusso",
      "cusum",
      "cutch",
      "cuter",
      "cutes",
      "cutey",
      "cutin",
      "cutis",
      "cutto",
      "cutty",
      "cutup",
      "cuvee",
      "cuzes",
      "cwtch",
      "cyano",
      "cyans",
      "cycad",
      "cycas",
      "cyclo",
      "cyder",
      "cylix",
      "cymae",
      "cymar",
      "cymas",
      "cymes",
      "cymol",
      "cysts",
      "cytes",
      "cyton",
      "czars",
      "daals",
      "dabba",
      "daces",
      "dacha",
      "dacks",
      "dadah",
      "dadas",
      "dados",
      "daffs",
      "daffy",
      "dagga",
      "daggy",
      "dagos",
      "dahls",
      "daiko",
      "daine",
      "daint",
      "daker",
      "daled",
      "dales",
      "dalis",
      "dalle",
      "dalts",
      "daman",
      "damar",
      "dames",
      "damme",
      "damns",
      "damps",
      "dampy",
      "dancy",
      "dangs",
      "danio",
      "danks",
      "danny",
      "dants",
      "daraf",
      "darbs",
      "darcy",
      "dared",
      "darer",
      "dares",
      "darga",
      "dargs",
      "daric",
      "daris",
      "darks",
      "darky",
      "darns",
      "darre",
      "darts",
      "darzi",
      "dashi",
      "dashy",
      "datal",
      "dated",
      "dater",
      "dates",
      "datos",
      "datto",
      "daube",
      "daubs",
      "dauby",
      "dauds",
      "dault",
      "daurs",
      "dauts",
      "daven",
      "davit",
      "dawah",
      "dawds",
      "dawed",
      "dawen",
      "dawks",
      "dawns",
      "dawts",
      "dayan",
      "daych",
      "daynt",
      "dazed",
      "dazer",
      "dazes",
      "deads",
      "deair",
      "deals",
      "deans",
      "deare",
      "dearn",
      "dears",
      "deary",
      "deash",
      "deave",
      "deaws",
      "deawy",
      "debag",
      "debby",
      "debel",
      "debes",
      "debts",
      "debud",
      "debur",
      "debus",
      "debye",
      "decad",
      "decaf",
      "decan",
      "decko",
      "decks",
      "decos",
      "dedal",
      "deeds",
      "deedy",
      "deely",
      "deems",
      "deens",
      "deeps",
      "deere",
      "deers",
      "deets",
      "deeve",
      "deevs",
      "defat",
      "deffo",
      "defis",
      "defog",
      "degas",
      "degum",
      "degus",
      "deice",
      "deids",
      "deify",
      "deils",
      "deism",
      "deist",
      "deked",
      "dekes",
      "dekko",
      "deled",
      "deles",
      "delfs",
      "delft",
      "delis",
      "dells",
      "delly",
      "delos",
      "delph",
      "delts",
      "deman",
      "demes",
      "demic",
      "demit",
      "demob",
      "demoi",
      "demos",
      "dempt",
      "denar",
      "denay",
      "dench",
      "denes",
      "denet",
      "denis",
      "dents",
      "deoxy",
      "derat",
      "deray",
      "dered",
      "deres",
      "derig",
      "derma",
      "derms",
      "derns",
      "derny",
      "deros",
      "derro",
      "derry",
      "derth",
      "dervs",
      "desex",
      "deshi",
      "desis",
      "desks",
      "desse",
      "devas",
      "devel",
      "devis",
      "devon",
      "devos",
      "devot",
      "dewan",
      "dewar",
      "dewax",
      "dewed",
      "dexes",
      "dexie",
      "dhaba",
      "dhaks",
      "dhals",
      "dhikr",
      "dhobi",
      "dhole",
      "dholl",
      "dhols",
      "dhoti",
      "dhows",
      "dhuti",
      "diact",
      "dials",
      "diane",
      "diazo",
      "dibbs",
      "diced",
      "dicer",
      "dices",
      "dicht",
      "dicks",
      "dicky",
      "dicot",
      "dicta",
      "dicts",
      "dicty",
      "diddy",
      "didie",
      "didos",
      "didst",
      "diebs",
      "diels",
      "diene",
      "diets",
      "diffs",
      "dight",
      "dikas",
      "diked",
      "diker",
      "dikes",
      "dikey",
      "dildo",
      "dilli",
      "dills",
      "dimbo",
      "dimer",
      "dimes",
      "dimps",
      "dinar",
      "dined",
      "dines",
      "dinge",
      "dings",
      "dinic",
      "dinks",
      "dinky",
      "dinna",
      "dinos",
      "dints",
      "diols",
      "diota",
      "dippy",
      "dipso",
      "diram",
      "direr",
      "dirke",
      "dirks",
      "dirls",
      "dirts",
      "disas",
      "disci",
      "discs",
      "dishy",
      "disks",
      "disme",
      "dital",
      "ditas",
      "dited",
      "dites",
      "ditsy",
      "ditts",
      "ditzy",
      "divan",
      "divas",
      "dived",
      "dives",
      "divis",
      "divna",
      "divos",
      "divot",
      "divvy",
      "diwan",
      "dixie",
      "dixit",
      "diyas",
      "dizen",
      "djinn",
      "djins",
      "doabs",
      "doats",
      "dobby",
      "dobes",
      "dobie",
      "dobla",
      "dobra",
      "dobro",
      "docht",
      "docks",
      "docos",
      "docus",
      "doddy",
      "dodos",
      "doeks",
      "doers",
      "doest",
      "doeth",
      "doffs",
      "dogan",
      "doges",
      "dogey",
      "doggo",
      "doggy",
      "dogie",
      "dohyo",
      "doilt",
      "doily",
      "doits",
      "dojos",
      "dolce",
      "dolci",
      "doled",
      "doles",
      "dolia",
      "dolls",
      "dolma",
      "dolor",
      "dolos",
      "dolts",
      "domal",
      "domed",
      "domes",
      "domic",
      "donah",
      "donas",
      "donee",
      "doner",
      "donga",
      "dongs",
      "donko",
      "donna",
      "donne",
      "donny",
      "donsy",
      "doobs",
      "dooce",
      "doody",
      "dooks",
      "doole",
      "dools",
      "dooly",
      "dooms",
      "doomy",
      "doona",
      "doorn",
      "doors",
      "doozy",
      "dopas",
      "doped",
      "doper",
      "dopes",
      "dorad",
      "dorba",
      "dorbs",
      "doree",
      "dores",
      "doric",
      "doris",
      "dorks",
      "dorky",
      "dorms",
      "dormy",
      "dorps",
      "dorrs",
      "dorsa",
      "dorse",
      "dorts",
      "dorty",
      "dosai",
      "dosas",
      "dosed",
      "doseh",
      "doser",
      "doses",
      "dosha",
      "dotal",
      "doted",
      "doter",
      "dotes",
      "dotty",
      "douar",
      "douce",
      "doucs",
      "douks",
      "doula",
      "douma",
      "doums",
      "doups",
      "doura",
      "douse",
      "douts",
      "doved",
      "doven",
      "dover",
      "doves",
      "dovie",
      "dowar",
      "dowds",
      "dowed",
      "dower",
      "dowie",
      "dowle",
      "dowls",
      "dowly",
      "downa",
      "downs",
      "dowps",
      "dowse",
      "dowts",
      "doxed",
      "doxes",
      "doxie",
      "doyen",
      "doyly",
      "dozed",
      "dozer",
      "dozes",
      "drabs",
      "drack",
      "draco",
      "draff",
      "drags",
      "drail",
      "drams",
      "drant",
      "draps",
      "drats",
      "drave",
      "draws",
      "drays",
      "drear",
      "dreck",
      "dreed",
      "dreer",
      "drees",
      "dregs",
      "dreks",
      "drent",
      "drere",
      "drest",
      "dreys",
      "dribs",
      "drice",
      "dries",
      "drily",
      "drips",
      "dript",
      "droid",
      "droil",
      "droke",
      "drole",
      "drome",
      "drony",
      "droob",
      "droog",
      "drook",
      "drops",
      "dropt",
      "drouk",
      "drows",
      "drubs",
      "drugs",
      "drums",
      "drupe",
      "druse",
      "drusy",
      "druxy",
      "dryad",
      "dryas",
      "dsobo",
      "dsomo",
      "duads",
      "duals",
      "duans",
      "duars",
      "dubbo",
      "ducal",
      "ducat",
      "duces",
      "ducks",
      "ducky",
      "ducts",
      "duddy",
      "duded",
      "dudes",
      "duels",
      "duets",
      "duett",
      "duffs",
      "dufus",
      "duing",
      "duits",
      "dukas",
      "duked",
      "dukes",
      "dukka",
      "dulce",
      "dules",
      "dulia",
      "dulls",
      "dulse",
      "dumas",
      "dumbo",
      "dumbs",
      "dumka",
      "dumky",
      "dumps",
      "dunam",
      "dunch",
      "dunes",
      "dungs",
      "dungy",
      "dunks",
      "dunno",
      "dunny",
      "dunsh",
      "dunts",
      "duomi",
      "duomo",
      "duped",
      "duper",
      "dupes",
      "duple",
      "duply",
      "duppy",
      "dural",
      "duras",
      "dured",
      "dures",
      "durgy",
      "durns",
      "duroc",
      "duros",
      "duroy",
      "durra",
      "durrs",
      "durry",
      "durst",
      "durum",
      "durzi",
      "dusks",
      "dusts",
      "duxes",
      "dwaal",
      "dwale",
      "dwalm",
      "dwams",
      "dwang",
      "dwaum",
      "dweeb",
      "dwile",
      "dwine",
      "dyads",
      "dyers",
      "dyked",
      "dykes",
      "dykey",
      "dykon",
      "dynel",
      "dynes",
      "dzhos",
      "eagre",
      "ealed",
      "eales",
      "eaned",
      "eards",
      "eared",
      "earls",
      "earns",
      "earnt",
      "earst",
      "eased",
      "easer",
      "eases",
      "easle",
      "easts",
      "eathe",
      "eaved",
      "eaves",
      "ebbed",
      "ebbet",
      "ebons",
      "ebook",
      "ecads",
      "eched",
      "eches",
      "echos",
      "ecrus",
      "edema",
      "edged",
      "edger",
      "edges",
      "edile",
      "edits",
      "educe",
      "educt",
      "eejit",
      "eensy",
      "eeven",
      "eevns",
      "effed",
      "egads",
      "egers",
      "egest",
      "eggar",
      "egged",
      "egger",
      "egmas",
      "ehing",
      "eider",
      "eidos",
      "eigne",
      "eiked",
      "eikon",
      "eilds",
      "eisel",
      "ejido",
      "ekkas",
      "elain",
      "eland",
      "elans",
      "elchi",
      "eldin",
      "elemi",
      "elfed",
      "eliad",
      "elint",
      "elmen",
      "eloge",
      "elogy",
      "eloin",
      "elops",
      "elpee",
      "elsin",
      "elute",
      "elvan",
      "elven",
      "elver",
      "elves",
      "emacs",
      "embar",
      "embay",
      "embog",
      "embow",
      "embox",
      "embus",
      "emeer",
      "emend",
      "emerg",
      "emery",
      "emeus",
      "emics",
      "emirs",
      "emits",
      "emmas",
      "emmer",
      "emmet",
      "emmew",
      "emmys",
      "emoji",
      "emong",
      "emote",
      "emove",
      "empts",
      "emule",
      "emure",
      "emyde",
      "emyds",
      "enarm",
      "enate",
      "ended",
      "ender",
      "endew",
      "endue",
      "enews",
      "enfix",
      "eniac",
      "enlit",
      "enmew",
      "ennog",
      "enoki",
      "enols",
      "enorm",
      "enows",
      "enrol",
      "ensew",
      "ensky",
      "entia",
      "enure",
      "enurn",
      "envoi",
      "enzym",
      "eorls",
      "eosin",
      "epact",
      "epees",
      "ephah",
      "ephas",
      "ephod",
      "ephor",
      "epics",
      "epode",
      "epopt",
      "epris",
      "eques",
      "equid",
      "erbia",
      "erevs",
      "ergon",
      "ergos",
      "ergot",
      "erhus",
      "erica",
      "erick",
      "erics",
      "ering",
      "erned",
      "ernes",
      "erose",
      "erred",
      "erses",
      "eruct",
      "erugo",
      "eruvs",
      "erven",
      "ervil",
      "escar",
      "escot",
      "esile",
      "eskar",
      "esker",
      "esnes",
      "esses",
      "estoc",
      "estop",
      "estro",
      "etage",
      "etape",
      "etats",
      "etens",
      "ethal",
      "ethne",
      "ethyl",
      "etics",
      "etnas",
      "ettin",
      "ettle",
      "etuis",
      "etwee",
      "etyma",
      "eughs",
      "euked",
      "eupad",
      "euros",
      "eusol",
      "evens",
      "evert",
      "evets",
      "evhoe",
      "evils",
      "evite",
      "evohe",
      "ewers",
      "ewest",
      "ewhow",
      "ewked",
      "exams",
      "exeat",
      "execs",
      "exeem",
      "exeme",
      "exfil",
      "exies",
      "exine",
      "exing",
      "exits",
      "exode",
      "exome",
      "exons",
      "expat",
      "expos",
      "exude",
      "exuls",
      "exurb",
      "eyass",
      "eyers",
      "eyots",
      "eyras",
      "eyres",
      "eyrie",
      "eyrir",
      "ezine",
      "fabby",
      "faced",
      "facer",
      "faces",
      "facia",
      "facta",
      "facts",
      "faddy",
      "faded",
      "fader",
      "fades",
      "fadge",
      "fados",
      "faena",
      "faery",
      "faffs",
      "faffy",
      "faggy",
      "fagin",
      "fagot",
      "faiks",
      "fails",
      "faine",
      "fains",
      "fairs",
      "faked",
      "faker",
      "fakes",
      "fakey",
      "fakie",
      "fakir",
      "falaj",
      "falls",
      "famed",
      "fames",
      "fanal",
      "fands",
      "fanes",
      "fanga",
      "fango",
      "fangs",
      "fanks",
      "fanon",
      "fanos",
      "fanum",
      "faqir",
      "farad",
      "farci",
      "farcy",
      "fards",
      "fared",
      "farer",
      "fares",
      "farle",
      "farls",
      "farms",
      "faros",
      "farro",
      "farse",
      "farts",
      "fasci",
      "fasti",
      "fasts",
      "fated",
      "fates",
      "fatly",
      "fatso",
      "fatwa",
      "faugh",
      "fauld",
      "fauns",
      "faurd",
      "fauts",
      "fauve",
      "favas",
      "favel",
      "faver",
      "faves",
      "favus",
      "fawns",
      "fawny",
      "faxed",
      "faxes",
      "fayed",
      "fayer",
      "fayne",
      "fayre",
      "fazed",
      "fazes",
      "feals",
      "feare",
      "fears",
      "feart",
      "fease",
      "feats",
      "feaze",
      "feces",
      "fecht",
      "fecit",
      "fecks",
      "fedex",
      "feebs",
      "feeds",
      "feels",
      "feens",
      "feers",
      "feese",
      "feeze",
      "fehme",
      "feint",
      "feist",
      "felch",
      "felid",
      "fells",
      "felly",
      "felts",
      "felty",
      "femal",
      "femes",
      "femmy",
      "fends",
      "fendy",
      "fenis",
      "fenks",
      "fenny",
      "fents",
      "feods",
      "feoff",
      "ferer",
      "feres",
      "feria",
      "ferly",
      "fermi",
      "ferms",
      "ferns",
      "ferny",
      "fesse",
      "festa",
      "fests",
      "festy",
      "fetas",
      "feted",
      "fetes",
      "fetor",
      "fetta",
      "fetts",
      "fetwa",
      "feuar",
      "feuds",
      "feued",
      "feyed",
      "feyer",
      "feyly",
      "fezes",
      "fezzy",
      "fiars",
      "fiats",
      "fibre",
      "fibro",
      "fices",
      "fiche",
      "fichu",
      "ficin",
      "ficos",
      "fides",
      "fidge",
      "fidos",
      "fiefs",
      "fient",
      "fiere",
      "fiers",
      "fiest",
      "fifed",
      "fifer",
      "fifes",
      "fifis",
      "figgy",
      "figos",
      "fiked",
      "fikes",
      "filar",
      "filch",
      "filed",
      "files",
      "filii",
      "filks",
      "fille",
      "fillo",
      "fills",
      "filmi",
      "films",
      "filos",
      "filum",
      "finca",
      "finds",
      "fined",
      "fines",
      "finis",
      "finks",
      "finny",
      "finos",
      "fiord",
      "fiqhs",
      "fique",
      "fired",
      "firer",
      "fires",
      "firie",
      "firks",
      "firms",
      "firns",
      "firry",
      "firth",
      "fiscs",
      "fisks",
      "fists",
      "fisty",
      "fitch",
      "fitly",
      "fitna",
      "fitte",
      "fitts",
      "fiver",
      "fives",
      "fixed",
      "fixes",
      "fixit",
      "fjeld",
      "flabs",
      "flaff",
      "flags",
      "flaks",
      "flamm",
      "flams",
      "flamy",
      "flane",
      "flans",
      "flaps",
      "flary",
      "flats",
      "flava",
      "flawn",
      "flaws",
      "flawy",
      "flaxy",
      "flays",
      "fleam",
      "fleas",
      "fleek",
      "fleer",
      "flees",
      "flegs",
      "fleme",
      "fleur",
      "flews",
      "flexi",
      "flexo",
      "fleys",
      "flics",
      "flied",
      "flies",
      "flimp",
      "flims",
      "flips",
      "flirs",
      "flisk",
      "flite",
      "flits",
      "flitt",
      "flobs",
      "flocs",
      "floes",
      "flogs",
      "flong",
      "flops",
      "flors",
      "flory",
      "flosh",
      "flota",
      "flote",
      "flows",
      "flubs",
      "flued",
      "flues",
      "fluey",
      "fluky",
      "flump",
      "fluor",
      "flurr",
      "fluty",
      "fluyt",
      "flyby",
      "flype",
      "flyte",
      "foals",
      "foams",
      "foehn",
      "fogey",
      "fogie",
      "fogle",
      "fogou",
      "fohns",
      "foids",
      "foils",
      "foins",
      "folds",
      "foley",
      "folia",
      "folic",
      "folie",
      "folks",
      "folky",
      "fomes",
      "fonda",
      "fonds",
      "fondu",
      "fones",
      "fonly",
      "fonts",
      "foods",
      "foody",
      "fools",
      "foots",
      "footy",
      "foram",
      "forbs",
      "forby",
      "fordo",
      "fords",
      "forel",
      "fores",
      "forex",
      "forks",
      "forky",
      "forme",
      "forms",
      "forts",
      "forza",
      "forze",
      "fossa",
      "fosse",
      "fouat",
      "fouds",
      "fouer",
      "fouet",
      "foule",
      "fouls",
      "fount",
      "fours",
      "fouth",
      "fovea",
      "fowls",
      "fowth",
      "foxed",
      "foxes",
      "foxie",
      "foyle",
      "foyne",
      "frabs",
      "frack",
      "fract",
      "frags",
      "fraim",
      "franc",
      "frape",
      "fraps",
      "frass",
      "frate",
      "frati",
      "frats",
      "fraus",
      "frays",
      "frees",
      "freet",
      "freit",
      "fremd",
      "frena",
      "freon",
      "frere",
      "frets",
      "fribs",
      "frier",
      "fries",
      "frigs",
      "frise",
      "frist",
      "frith",
      "frits",
      "fritt",
      "frize",
      "frizz",
      "froes",
      "frogs",
      "frons",
      "frore",
      "frorn",
      "frory",
      "frosh",
      "frows",
      "frowy",
      "frugs",
      "frump",
      "frush",
      "frust",
      "fryer",
      "fubar",
      "fubby",
      "fubsy",
      "fucks",
      "fucus",
      "fuddy",
      "fudgy",
      "fuels",
      "fuero",
      "fuffs",
      "fuffy",
      "fugal",
      "fuggy",
      "fugie",
      "fugio",
      "fugle",
      "fugly",
      "fugus",
      "fujis",
      "fulls",
      "fumed",
      "fumer",
      "fumes",
      "fumet",
      "fundi",
      "funds",
      "fundy",
      "fungo",
      "fungs",
      "funks",
      "fural",
      "furan",
      "furca",
      "furls",
      "furol",
      "furrs",
      "furth",
      "furze",
      "furzy",
      "fused",
      "fusee",
      "fusel",
      "fuses",
      "fusil",
      "fusks",
      "fusts",
      "fusty",
      "futon",
      "fuzed",
      "fuzee",
      "fuzes",
      "fuzil",
      "fyces",
      "fyked",
      "fykes",
      "fyles",
      "fyrds",
      "fytte",
      "gabba",
      "gabby",
      "gable",
      "gaddi",
      "gades",
      "gadge",
      "gadid",
      "gadis",
      "gadje",
      "gadjo",
      "gadso",
      "gaffs",
      "gaged",
      "gager",
      "gages",
      "gaids",
      "gains",
      "gairs",
      "gaita",
      "gaits",
      "gaitt",
      "gajos",
      "galah",
      "galas",
      "galax",
      "galea",
      "galed",
      "gales",
      "galls",
      "gally",
      "galop",
      "galut",
      "galvo",
      "gamas",
      "gamay",
      "gamba",
      "gambe",
      "gambo",
      "gambs",
      "gamed",
      "games",
      "gamey",
      "gamic",
      "gamin",
      "gamme",
      "gammy",
      "gamps",
      "ganch",
      "gandy",
      "ganef",
      "ganev",
      "gangs",
      "ganja",
      "ganof",
      "gants",
      "gaols",
      "gaped",
      "gaper",
      "gapes",
      "gapos",
      "gappy",
      "garbe",
      "garbo",
      "garbs",
      "garda",
      "gares",
      "garis",
      "garms",
      "garni",
      "garre",
      "garth",
      "garum",
      "gases",
      "gasps",
      "gaspy",
      "gasts",
      "gatch",
      "gated",
      "gater",
      "gates",
      "gaths",
      "gator",
      "gauch",
      "gaucy",
      "gauds",
      "gauje",
      "gault",
      "gaums",
      "gaumy",
      "gaups",
      "gaurs",
      "gauss",
      "gauzy",
      "gavot",
      "gawcy",
      "gawds",
      "gawks",
      "gawps",
      "gawsy",
      "gayal",
      "gazal",
      "gazar",
      "gazed",
      "gazes",
      "gazon",
      "gazoo",
      "geals",
      "geans",
      "geare",
      "gears",
      "geats",
      "gebur",
      "gecks",
      "geeks",
      "geeps",
      "geest",
      "geist",
      "geits",
      "gelds",
      "gelee",
      "gelid",
      "gelly",
      "gelts",
      "gemel",
      "gemma",
      "gemmy",
      "gemot",
      "genal",
      "genas",
      "genes",
      "genet",
      "genic",
      "genii",
      "genip",
      "genny",
      "genoa",
      "genom",
      "genro",
      "gents",
      "genty",
      "genua",
      "genus",
      "geode",
      "geoid",
      "gerah",
      "gerbe",
      "geres",
      "gerle",
      "germs",
      "germy",
      "gerne",
      "gesse",
      "gesso",
      "geste",
      "gests",
      "getas",
      "getup",
      "geums",
      "geyan",
      "geyer",
      "ghast",
      "ghats",
      "ghaut",
      "ghazi",
      "ghees",
      "ghest",
      "ghyll",
      "gibed",
      "gibel",
      "giber",
      "gibes",
      "gibli",
      "gibus",
      "gifts",
      "gigas",
      "gighe",
      "gigot",
      "gigue",
      "gilas",
      "gilds",
      "gilet",
      "gills",
      "gilly",
      "gilpy",
      "gilts",
      "gimel",
      "gimme",
      "gimps",
      "gimpy",
      "ginch",
      "ginge",
      "gings",
      "ginks",
      "ginny",
      "ginzo",
      "gipon",
      "gippo",
      "gippy",
      "girds",
      "girls",
      "girns",
      "giron",
      "giros",
      "girrs",
      "girsh",
      "girts",
      "gismo",
      "gisms",
      "gists",
      "gitch",
      "gites",
      "giust",
      "gived",
      "gives",
      "gizmo",
      "glace",
      "glads",
      "glady",
      "glaik",
      "glair",
      "glams",
      "glans",
      "glary",
      "glaum",
      "glaur",
      "glazy",
      "gleba",
      "glebe",
      "gleby",
      "glede",
      "gleds",
      "gleed",
      "gleek",
      "glees",
      "gleet",
      "gleis",
      "glens",
      "glent",
      "gleys",
      "glial",
      "glias",
      "glibs",
      "gliff",
      "glift",
      "glike",
      "glime",
      "glims",
      "glisk",
      "glits",
      "glitz",
      "gloam",
      "globi",
      "globs",
      "globy",
      "glode",
      "glogg",
      "gloms",
      "gloop",
      "glops",
      "glost",
      "glout",
      "glows",
      "gloze",
      "glued",
      "gluer",
      "glues",
      "gluey",
      "glugs",
      "glume",
      "glums",
      "gluon",
      "glute",
      "gluts",
      "gnarl",
      "gnarr",
      "gnars",
      "gnats",
      "gnawn",
      "gnaws",
      "gnows",
      "goads",
      "goafs",
      "goals",
      "goary",
      "goats",
      "goaty",
      "goban",
      "gobar",
      "gobbi",
      "gobbo",
      "gobby",
      "gobis",
      "gobos",
      "godet",
      "godso",
      "goels",
      "goers",
      "goest",
      "goeth",
      "goety",
      "gofer",
      "goffs",
      "gogga",
      "gogos",
      "goier",
      "gojis",
      "golds",
      "goldy",
      "goles",
      "golfs",
      "golpe",
      "golps",
      "gombo",
      "gomer",
      "gompa",
      "gonch",
      "gonef",
      "gongs",
      "gonia",
      "gonif",
      "gonks",
      "gonna",
      "gonof",
      "gonys",
      "gonzo",
      "gooby",
      "goods",
      "goofs",
      "googs",
      "gooks",
      "gooky",
      "goold",
      "gools",
      "gooly",
      "goons",
      "goony",
      "goops",
      "goopy",
      "goors",
      "goory",
      "goosy",
      "gopak",
      "gopik",
      "goral",
      "goras",
      "gored",
      "gores",
      "goris",
      "gorms",
      "gormy",
      "gorps",
      "gorse",
      "gorsy",
      "gosht",
      "gosse",
      "gotch",
      "goths",
      "gothy",
      "gotta",
      "gouch",
      "gouks",
      "goura",
      "gouts",
      "gouty",
      "gowan",
      "gowds",
      "gowfs",
      "gowks",
      "gowls",
      "gowns",
      "goxes",
      "goyim",
      "goyle",
      "graal",
      "grabs",
      "grads",
      "graff",
      "graip",
      "grama",
      "grame",
      "gramp",
      "grams",
      "grana",
      "grans",
      "grapy",
      "gravs",
      "grays",
      "grebe",
      "grebo",
      "grece",
      "greek",
      "grees",
      "grege",
      "grego",
      "grein",
      "grens",
      "grese",
      "greve",
      "grews",
      "greys",
      "grice",
      "gride",
      "grids",
      "griff",
      "grift",
      "grigs",
      "grike",
      "grins",
      "griot",
      "grips",
      "gript",
      "gripy",
      "grise",
      "grist",
      "grisy",
      "grith",
      "grits",
      "grize",
      "groat",
      "grody",
      "grogs",
      "groks",
      "groma",
      "grone",
      "groof",
      "grosz",
      "grots",
      "grouf",
      "grovy",
      "grows",
      "grrls",
      "grrrl",
      "grubs",
      "grued",
      "grues",
      "grufe",
      "grume",
      "grump",
      "grund",
      "gryce",
      "gryde",
      "gryke",
      "grype",
      "grypt",
      "guaco",
      "guana",
      "guano",
      "guans",
      "guars",
      "gucks",
      "gucky",
      "gudes",
      "guffs",
      "gugas",
      "guids",
      "guimp",
      "guiro",
      "gulag",
      "gular",
      "gulas",
      "gules",
      "gulet",
      "gulfs",
      "gulfy",
      "gulls",
      "gulph",
      "gulps",
      "gulpy",
      "gumma",
      "gummi",
      "gumps",
      "gundy",
      "gunge",
      "gungy",
      "gunks",
      "gunky",
      "gunny",
      "guqin",
      "gurdy",
      "gurge",
      "gurls",
      "gurly",
      "gurns",
      "gurry",
      "gursh",
      "gurus",
      "gushy",
      "gusla",
      "gusle",
      "gusli",
      "gussy",
      "gusts",
      "gutsy",
      "gutta",
      "gutty",
      "guyed",
      "guyle",
      "guyot",
      "guyse",
      "gwine",
      "gyals",
      "gyans",
      "gybed",
      "gybes",
      "gyeld",
      "gymps",
      "gynae",
      "gynie",
      "gynny",
      "gynos",
      "gyoza",
      "gypos",
      "gyppo",
      "gyppy",
      "gyral",
      "gyred",
      "gyres",
      "gyron",
      "gyros",
      "gyrus",
      "gytes",
      "gyved",
      "gyves",
      "haafs",
      "haars",
      "hable",
      "habus",
      "hacek",
      "hacks",
      "hadal",
      "haded",
      "hades",
      "hadji",
      "hadst",
      "haems",
      "haets",
      "haffs",
      "hafiz",
      "hafts",
      "haggs",
      "hahas",
      "haick",
      "haika",
      "haiks",
      "haiku",
      "hails",
      "haily",
      "hains",
      "haint",
      "hairs",
      "haith",
      "hajes",
      "hajis",
      "hajji",
      "hakam",
      "hakas",
      "hakea",
      "hakes",
      "hakim",
      "hakus",
      "halal",
      "haled",
      "haler",
      "hales",
      "halfa",
      "halfs",
      "halid",
      "hallo",
      "halls",
      "halma",
      "halms",
      "halon",
      "halos",
      "halse",
      "halts",
      "halva",
      "halwa",
      "hamal",
      "hamba",
      "hamed",
      "hames",
      "hammy",
      "hamza",
      "hanap",
      "hance",
      "hanch",
      "hands",
      "hangi",
      "hangs",
      "hanks",
      "hanky",
      "hansa",
      "hanse",
      "hants",
      "haole",
      "haoma",
      "hapax",
      "haply",
      "happi",
      "hapus",
      "haram",
      "hards",
      "hared",
      "hares",
      "harim",
      "harks",
      "harls",
      "harms",
      "harns",
      "haros",
      "harps",
      "harts",
      "hashy",
      "hasks",
      "hasps",
      "hasta",
      "hated",
      "hates",
      "hatha",
      "hauds",
      "haufs",
      "haugh",
      "hauld",
      "haulm",
      "hauls",
      "hault",
      "hauns",
      "hause",
      "haver",
      "haves",
      "hawed",
      "hawks",
      "hawms",
      "hawse",
      "hayed",
      "hayer",
      "hayey",
      "hayle",
      "hazan",
      "hazed",
      "hazer",
      "hazes",
      "heads",
      "heald",
      "heals",
      "heame",
      "heaps",
      "heapy",
      "heare",
      "hears",
      "heast",
      "heats",
      "heben",
      "hebes",
      "hecht",
      "hecks",
      "heder",
      "hedgy",
      "heeds",
      "heedy",
      "heels",
      "heeze",
      "hefte",
      "hefts",
      "heids",
      "heigh",
      "heils",
      "heirs",
      "hejab",
      "hejra",
      "heled",
      "heles",
      "helio",
      "hells",
      "helms",
      "helos",
      "helot",
      "helps",
      "helve",
      "hemal",
      "hemes",
      "hemic",
      "hemin",
      "hemps",
      "hempy",
      "hench",
      "hends",
      "henge",
      "henna",
      "henny",
      "henry",
      "hents",
      "hepar",
      "herbs",
      "herby",
      "herds",
      "heres",
      "herls",
      "herma",
      "herms",
      "herns",
      "heros",
      "herry",
      "herse",
      "hertz",
      "herye",
      "hesps",
      "hests",
      "hetes",
      "heths",
      "heuch",
      "heugh",
      "hevea",
      "hewed",
      "hewer",
      "hewgh",
      "hexad",
      "hexed",
      "hexer",
      "hexes",
      "hexyl",
      "heyed",
      "hiant",
      "hicks",
      "hided",
      "hider",
      "hides",
      "hiems",
      "highs",
      "hight",
      "hijab",
      "hijra",
      "hiked",
      "hiker",
      "hikes",
      "hikoi",
      "hilar",
      "hilch",
      "hillo",
      "hills",
      "hilts",
      "hilum",
      "hilus",
      "himbo",
      "hinau",
      "hinds",
      "hings",
      "hinky",
      "hinny",
      "hints",
      "hiois",
      "hiply",
      "hired",
      "hiree",
      "hirer",
      "hires",
      "hissy",
      "hists",
      "hithe",
      "hived",
      "hiver",
      "hives",
      "hizen",
      "hoaed",
      "hoagy",
      "hoars",
      "hoary",
      "hoast",
      "hobos",
      "hocks",
      "hocus",
      "hodad",
      "hodja",
      "hoers",
      "hogan",
      "hogen",
      "hoggs",
      "hoghs",
      "hohed",
      "hoick",
      "hoied",
      "hoiks",
      "hoing",
      "hoise",
      "hokas",
      "hoked",
      "hokes",
      "hokey",
      "hokis",
      "hokku",
      "hokum",
      "holds",
      "holed",
      "holes",
      "holey",
      "holks",
      "holla",
      "hollo",
      "holme",
      "holms",
      "holon",
      "holos",
      "holts",
      "homas",
      "homed",
      "homes",
      "homey",
      "homie",
      "homme",
      "homos",
      "honan",
      "honda",
      "honds",
      "honed",
      "honer",
      "hones",
      "hongi",
      "hongs",
      "honks",
      "honky",
      "hooch",
      "hoods",
      "hoody",
      "hooey",
      "hoofs",
      "hooka",
      "hooks",
      "hooky",
      "hooly",
      "hoons",
      "hoops",
      "hoord",
      "hoors",
      "hoosh",
      "hoots",
      "hooty",
      "hoove",
      "hopak",
      "hoped",
      "hoper",
      "hopes",
      "hoppy",
      "horah",
      "horal",
      "horas",
      "horis",
      "horks",
      "horme",
      "horns",
      "horst",
      "horsy",
      "hosed",
      "hosel",
      "hosen",
      "hoser",
      "hoses",
      "hosey",
      "hosta",
      "hosts",
      "hotch",
      "hoten",
      "hotty",
      "houff",
      "houfs",
      "hough",
      "houri",
      "hours",
      "houts",
      "hovea",
      "hoved",
      "hoven",
      "hoves",
      "howbe",
      "howes",
      "howff",
      "howfs",
      "howks",
      "howls",
      "howre",
      "howso",
      "hoxed",
      "hoxes",
      "hoyas",
      "hoyed",
      "hoyle",
      "hubby",
      "hucks",
      "hudna",
      "hudud",
      "huers",
      "huffs",
      "huffy",
      "huger",
      "huggy",
      "huhus",
      "huias",
      "hulas",
      "hules",
      "hulks",
      "hulky",
      "hullo",
      "hulls",
      "hully",
      "humas",
      "humfs",
      "humic",
      "humps",
      "humpy",
      "hunks",
      "hunts",
      "hurds",
      "hurls",
      "hurly",
      "hurra",
      "hurst",
      "hurts",
      "hushy",
      "husks",
      "husos",
      "hutia",
      "huzza",
      "huzzy",
      "hwyls",
      "hydra",
      "hyens",
      "hygge",
      "hying",
      "hykes",
      "hylas",
      "hyleg",
      "hyles",
      "hylic",
      "hymns",
      "hynde",
      "hyoid",
      "hyped",
      "hypes",
      "hypha",
      "hyphy",
      "hypos",
      "hyrax",
      "hyson",
      "hythe",
      "iambi",
      "iambs",
      "ibrik",
      "icers",
      "iched",
      "iches",
      "ichor",
      "icier",
      "icker",
      "ickle",
      "icons",
      "ictal",
      "ictic",
      "ictus",
      "idant",
      "ideas",
      "idees",
      "ident",
      "idled",
      "idles",
      "idola",
      "idols",
      "idyls",
      "iftar",
      "igapo",
      "igged",
      "iglus",
      "ihram",
      "ikans",
      "ikats",
      "ikons",
      "ileac",
      "ileal",
      "ileum",
      "ileus",
      "iliad",
      "ilial",
      "ilium",
      "iller",
      "illth",
      "imago",
      "imams",
      "imari",
      "imaum",
      "imbar",
      "imbed",
      "imide",
      "imido",
      "imids",
      "imine",
      "imino",
      "immew",
      "immit",
      "immix",
      "imped",
      "impis",
      "impot",
      "impro",
      "imshi",
      "imshy",
      "inapt",
      "inarm",
      "inbye",
      "incel",
      "incle",
      "incog",
      "incus",
      "incut",
      "indew",
      "india",
      "indie",
      "indol",
      "indow",
      "indri",
      "indue",
      "inerm",
      "infix",
      "infos",
      "infra",
      "ingan",
      "ingle",
      "inion",
      "inked",
      "inker",
      "inkle",
      "inned",
      "innit",
      "inorb",
      "inrun",
      "inset",
      "inspo",
      "intel",
      "intil",
      "intis",
      "intra",
      "inula",
      "inure",
      "inurn",
      "inust",
      "invar",
      "inwit",
      "iodic",
      "iodid",
      "iodin",
      "iotas",
      "ippon",
      "irade",
      "irids",
      "iring",
      "irked",
      "iroko",
      "irone",
      "irons",
      "isbas",
      "ishes",
      "isled",
      "isles",
      "isnae",
      "issei",
      "istle",
      "items",
      "ither",
      "ivied",
      "ivies",
      "ixias",
      "ixnay",
      "ixora",
      "ixtle",
      "izard",
      "izars",
      "izzat",
      "jaaps",
      "jabot",
      "jacal",
      "jacks",
      "jacky",
      "jaded",
      "jades",
      "jafas",
      "jaffa",
      "jagas",
      "jager",
      "jaggs",
      "jaggy",
      "jagir",
      "jagra",
      "jails",
      "jaker",
      "jakes",
      "jakey",
      "jalap",
      "jalop",
      "jambe",
      "jambo",
      "jambs",
      "jambu",
      "james",
      "jammy",
      "jamon",
      "janes",
      "janns",
      "janny",
      "janty",
      "japan",
      "japed",
      "japer",
      "japes",
      "jarks",
      "jarls",
      "jarps",
      "jarta",
      "jarul",
      "jasey",
      "jaspe",
      "jasps",
      "jatos",
      "jauks",
      "jaups",
      "javas",
      "javel",
      "jawan",
      "jawed",
      "jaxie",
      "jeans",
      "jeats",
      "jebel",
      "jedis",
      "jeels",
      "jeely",
      "jeeps",
      "jeers",
      "jeeze",
      "jefes",
      "jeffs",
      "jehad",
      "jehus",
      "jelab",
      "jello",
      "jells",
      "jembe",
      "jemmy",
      "jenny",
      "jeons",
      "jerid",
      "jerks",
      "jerry",
      "jesse",
      "jests",
      "jesus",
      "jetes",
      "jeton",
      "jeune",
      "jewed",
      "jewie",
      "jhala",
      "jiaos",
      "jibba",
      "jibbs",
      "jibed",
      "jiber",
      "jibes",
      "jiffs",
      "jiggy",
      "jigot",
      "jihad",
      "jills",
      "jilts",
      "jimmy",
      "jimpy",
      "jingo",
      "jinks",
      "jinne",
      "jinni",
      "jinns",
      "jirds",
      "jirga",
      "jirre",
      "jisms",
      "jived",
      "jiver",
      "jives",
      "jivey",
      "jnana",
      "jobed",
      "jobes",
      "jocko",
      "jocks",
      "jocky",
      "jocos",
      "jodel",
      "joeys",
      "johns",
      "joins",
      "joked",
      "jokes",
      "jokey",
      "jokol",
      "joled",
      "joles",
      "jolls",
      "jolts",
      "jolty",
      "jomon",
      "jomos",
      "jones",
      "jongs",
      "jonty",
      "jooks",
      "joram",
      "jorum",
      "jotas",
      "jotty",
      "jotun",
      "joual",
      "jougs",
      "jouks",
      "joule",
      "jours",
      "jowar",
      "jowed",
      "jowls",
      "jowly",
      "joyed",
      "jubas",
      "jubes",
      "jucos",
      "judas",
      "judgy",
      "judos",
      "jugal",
      "jugum",
      "jujus",
      "juked",
      "jukes",
      "jukus",
      "julep",
      "jumar",
      "jumby",
      "jumps",
      "junco",
      "junks",
      "junky",
      "jupes",
      "jupon",
      "jural",
      "jurat",
      "jurel",
      "jures",
      "justs",
      "jutes",
      "jutty",
      "juves",
      "juvie",
      "kaama",
      "kabab",
      "kabar",
      "kabob",
      "kacha",
      "kacks",
      "kadai",
      "kades",
      "kadis",
      "kafir",
      "kagos",
      "kagus",
      "kahal",
      "kaiak",
      "kaids",
      "kaies",
      "kaifs",
      "kaika",
      "kaiks",
      "kails",
      "kaims",
      "kaing",
      "kains",
      "kakas",
      "kakis",
      "kalam",
      "kales",
      "kalif",
      "kalis",
      "kalpa",
      "kamas",
      "kames",
      "kamik",
      "kamis",
      "kamme",
      "kanae",
      "kanas",
      "kandy",
      "kaneh",
      "kanes",
      "kanga",
      "kangs",
      "kanji",
      "kants",
      "kanzu",
      "kaons",
      "kapas",
      "kaphs",
      "kapok",
      "kapow",
      "kapus",
      "kaput",
      "karas",
      "karat",
      "karks",
      "karns",
      "karoo",
      "karos",
      "karri",
      "karst",
      "karsy",
      "karts",
      "karzy",
      "kasha",
      "kasme",
      "katal",
      "katas",
      "katis",
      "katti",
      "kaugh",
      "kauri",
      "kauru",
      "kaury",
      "kaval",
      "kavas",
      "kawas",
      "kawau",
      "kawed",
      "kayle",
      "kayos",
      "kazis",
      "kazoo",
      "kbars",
      "kebar",
      "kebob",
      "kecks",
      "kedge",
      "kedgy",
      "keech",
      "keefs",
      "keeks",
      "keels",
      "keema",
      "keeno",
      "keens",
      "keeps",
      "keets",
      "keeve",
      "kefir",
      "kehua",
      "keirs",
      "kelep",
      "kelim",
      "kells",
      "kelly",
      "kelps",
      "kelpy",
      "kelts",
      "kelty",
      "kembo",
      "kembs",
      "kemps",
      "kempt",
      "kempy",
      "kenaf",
      "kench",
      "kendo",
      "kenos",
      "kente",
      "kents",
      "kepis",
      "kerbs",
      "kerel",
      "kerfs",
      "kerky",
      "kerma",
      "kerne",
      "kerns",
      "keros",
      "kerry",
      "kerve",
      "kesar",
      "kests",
      "ketas",
      "ketch",
      "ketes",
      "ketol",
      "kevel",
      "kevil",
      "kexes",
      "keyed",
      "keyer",
      "khadi",
      "khafs",
      "khans",
      "khaph",
      "khats",
      "khaya",
      "khazi",
      "kheda",
      "kheth",
      "khets",
      "khoja",
      "khors",
      "khoum",
      "khuds",
      "kiaat",
      "kiack",
      "kiang",
      "kibbe",
      "kibbi",
      "kibei",
      "kibes",
      "kibla",
      "kicks",
      "kicky",
      "kiddo",
      "kiddy",
      "kidel",
      "kidge",
      "kiefs",
      "kiers",
      "kieve",
      "kievs",
      "kight",
      "kikes",
      "kikoi",
      "kiley",
      "kilim",
      "kills",
      "kilns",
      "kilos",
      "kilps",
      "kilts",
      "kilty",
      "kimbo",
      "kinas",
      "kinda",
      "kinds",
      "kindy",
      "kines",
      "kings",
      "kinin",
      "kinks",
      "kinos",
      "kiore",
      "kipes",
      "kippa",
      "kipps",
      "kirby",
      "kirks",
      "kirns",
      "kirri",
      "kisan",
      "kissy",
      "kists",
      "kited",
      "kiter",
      "kites",
      "kithe",
      "kiths",
      "kitul",
      "kivas",
      "kiwis",
      "klang",
      "klaps",
      "klett",
      "klick",
      "klieg",
      "kliks",
      "klong",
      "kloof",
      "kluge",
      "klutz",
      "knags",
      "knaps",
      "knarl",
      "knars",
      "knaur",
      "knawe",
      "knees",
      "knell",
      "knish",
      "knits",
      "knive",
      "knobs",
      "knops",
      "knosp",
      "knots",
      "knout",
      "knowe",
      "knows",
      "knubs",
      "knurl",
      "knurr",
      "knurs",
      "knuts",
      "koans",
      "koaps",
      "koban",
      "kobos",
      "koels",
      "koffs",
      "kofta",
      "kogal",
      "kohas",
      "kohen",
      "kohls",
      "koine",
      "kojis",
      "kokam",
      "kokas",
      "koker",
      "kokra",
      "kokum",
      "kolas",
      "kolos",
      "kombu",
      "konbu",
      "kondo",
      "konks",
      "kooks",
      "kooky",
      "koori",
      "kopek",
      "kophs",
      "kopje",
      "koppa",
      "korai",
      "koran",
      "koras",
      "korat",
      "kores",
      "korma",
      "koros",
      "korun",
      "korus",
      "koses",
      "kotch",
      "kotos",
      "kotow",
      "koura",
      "kraal",
      "krabs",
      "kraft",
      "krais",
      "krait",
      "krang",
      "krans",
      "kranz",
      "kraut",
      "krays",
      "kreep",
      "kreng",
      "krewe",
      "krona",
      "krone",
      "kroon",
      "krubi",
      "krunk",
      "ksars",
      "kubie",
      "kudos",
      "kudus",
      "kudzu",
      "kufis",
      "kugel",
      "kuias",
      "kukri",
      "kukus",
      "kulak",
      "kulan",
      "kulas",
      "kulfi",
      "kumis",
      "kumys",
      "kuris",
      "kurre",
      "kurta",
      "kurus",
      "kusso",
      "kutas",
      "kutch",
      "kutis",
      "kutus",
      "kuzus",
      "kvass",
      "kvell",
      "kwela",
      "kyack",
      "kyaks",
      "kyang",
      "kyars",
      "kyats",
      "kybos",
      "kydst",
      "kyles",
      "kylie",
      "kylin",
      "kylix",
      "kyloe",
      "kynde",
      "kynds",
      "kypes",
      "kyrie",
      "kytes",
      "kythe",
      "laari",
      "labda",
      "labia",
      "labis",
      "labra",
      "laced",
      "lacer",
      "laces",
      "lacet",
      "lacey",
      "lacks",
      "laddy",
      "laded",
      "lader",
      "lades",
      "laers",
      "laevo",
      "lagan",
      "lahal",
      "lahar",
      "laich",
      "laics",
      "laids",
      "laigh",
      "laika",
      "laiks",
      "laird",
      "lairs",
      "lairy",
      "laith",
      "laity",
      "laked",
      "laker",
      "lakes",
      "lakhs",
      "lakin",
      "laksa",
      "laldy",
      "lalls",
      "lamas",
      "lambs",
      "lamby",
      "lamed",
      "lamer",
      "lames",
      "lamia",
      "lammy",
      "lamps",
      "lanai",
      "lanas",
      "lanch",
      "lande",
      "lands",
      "lanes",
      "lanks",
      "lants",
      "lapin",
      "lapis",
      "lapje",
      "larch",
      "lards",
      "lardy",
      "laree",
      "lares",
      "largo",
      "laris",
      "larks",
      "larky",
      "larns",
      "larnt",
      "larum",
      "lased",
      "laser",
      "lases",
      "lassi",
      "lassu",
      "lassy",
      "lasts",
      "latah",
      "lated",
      "laten",
      "latex",
      "lathi",
      "laths",
      "lathy",
      "latke",
      "latus",
      "lauan",
      "lauch",
      "lauds",
      "laufs",
      "laund",
      "laura",
      "laval",
      "lavas",
      "laved",
      "laver",
      "laves",
      "lavra",
      "lavvy",
      "lawed",
      "lawer",
      "lawin",
      "lawks",
      "lawns",
      "lawny",
      "laxed",
      "laxer",
      "laxes",
      "laxly",
      "layed",
      "layin",
      "layup",
      "lazar",
      "lazed",
      "lazes",
      "lazos",
      "lazzi",
      "lazzo",
      "leads",
      "leady",
      "leafs",
      "leaks",
      "leams",
      "leans",
      "leany",
      "leaps",
      "leare",
      "lears",
      "leary",
      "leats",
      "leavy",
      "leaze",
      "leben",
      "leccy",
      "ledes",
      "ledgy",
      "ledum",
      "leear",
      "leeks",
      "leeps",
      "leers",
      "leese",
      "leets",
      "leeze",
      "lefte",
      "lefts",
      "leger",
      "leges",
      "legge",
      "leggo",
      "legit",
      "lehrs",
      "lehua",
      "leirs",
      "leish",
      "leman",
      "lemed",
      "lemel",
      "lemes",
      "lemma",
      "lemme",
      "lends",
      "lenes",
      "lengs",
      "lenis",
      "lenos",
      "lense",
      "lenti",
      "lento",
      "leone",
      "lepid",
      "lepra",
      "lepta",
      "lered",
      "leres",
      "lerps",
      "lesbo",
      "leses",
      "lests",
      "letch",
      "lethe",
      "letup",
      "leuch",
      "leuco",
      "leuds",
      "leugh",
      "levas",
      "levee",
      "leves",
      "levin",
      "levis",
      "lewis",
      "lexes",
      "lexis",
      "lezes",
      "lezza",
      "lezzy",
      "liana",
      "liane",
      "liang",
      "liard",
      "liars",
      "liart",
      "liber",
      "libra",
      "libri",
      "lichi",
      "licht",
      "licit",
      "licks",
      "lidar",
      "lidos",
      "liefs",
      "liens",
      "liers",
      "lieus",
      "lieve",
      "lifer",
      "lifes",
      "lifts",
      "ligan",
      "liger",
      "ligge",
      "ligne",
      "liked",
      "liker",
      "likes",
      "likin",
      "lills",
      "lilos",
      "lilts",
      "liman",
      "limas",
      "limax",
      "limba",
      "limbi",
      "limbs",
      "limby",
      "limed",
      "limen",
      "limes",
      "limey",
      "limma",
      "limns",
      "limos",
      "limpa",
      "limps",
      "linac",
      "linch",
      "linds",
      "lindy",
      "lined",
      "lines",
      "liney",
      "linga",
      "lings",
      "lingy",
      "linin",
      "links",
      "linky",
      "linns",
      "linny",
      "linos",
      "lints",
      "linty",
      "linum",
      "linux",
      "lions",
      "lipas",
      "lipes",
      "lipin",
      "lipos",
      "lippy",
      "liras",
      "lirks",
      "lirot",
      "lisks",
      "lisle",
      "lisps",
      "lists",
      "litai",
      "litas",
      "lited",
      "liter",
      "lites",
      "litho",
      "liths",
      "litre",
      "lived",
      "liven",
      "lives",
      "livor",
      "livre",
      "llano",
      "loach",
      "loads",
      "loafs",
      "loams",
      "loans",
      "loast",
      "loave",
      "lobar",
      "lobed",
      "lobes",
      "lobos",
      "lobus",
      "loche",
      "lochs",
      "locie",
      "locis",
      "locks",
      "locos",
      "locum",
      "loden",
      "lodes",
      "loess",
      "lofts",
      "logan",
      "loges",
      "loggy",
      "logia",
      "logie",
      "logoi",
      "logon",
      "logos",
      "lohan",
      "loids",
      "loins",
      "loipe",
      "loirs",
      "lokes",
      "lolls",
      "lolly",
      "lolog",
      "lomas",
      "lomed",
      "lomes",
      "loner",
      "longa",
      "longe",
      "longs",
      "looby",
      "looed",
      "looey",
      "loofa",
      "loofs",
      "looie",
      "looks",
      "looky",
      "looms",
      "loons",
      "loony",
      "loops",
      "loord",
      "loots",
      "loped",
      "loper",
      "lopes",
      "loppy",
      "loral",
      "loran",
      "lords",
      "lordy",
      "lorel",
      "lores",
      "loric",
      "loris",
      "losed",
      "losel",
      "losen",
      "loses",
      "lossy",
      "lotah",
      "lotas",
      "lotes",
      "lotic",
      "lotos",
      "lotsa",
      "lotta",
      "lotte",
      "lotto",
      "lotus",
      "loued",
      "lough",
      "louie",
      "louis",
      "louma",
      "lound",
      "louns",
      "loupe",
      "loups",
      "loure",
      "lours",
      "loury",
      "louts",
      "lovat",
      "loved",
      "loves",
      "lovey",
      "lovie",
      "lowan",
      "lowed",
      "lowes",
      "lownd",
      "lowne",
      "lowns",
      "lowps",
      "lowry",
      "lowse",
      "lowts",
      "loxed",
      "loxes",
      "lozen",
      "luach",
      "luaus",
      "lubed",
      "lubes",
      "lubra",
      "luces",
      "lucks",
      "lucre",
      "ludes",
      "ludic",
      "ludos",
      "luffa",
      "luffs",
      "luged",
      "luger",
      "luges",
      "lulls",
      "lulus",
      "lumas",
      "lumbi",
      "lumme",
      "lummy",
      "lumps",
      "lunas",
      "lunes",
      "lunet",
      "lungi",
      "lungs",
      "lunks",
      "lunts",
      "lupin",
      "lured",
      "lurer",
      "lures",
      "lurex",
      "lurgi",
      "lurgy",
      "lurks",
      "lurry",
      "lurve",
      "luser",
      "lushy",
      "lusks",
      "lusts",
      "lusus",
      "lutea",
      "luted",
      "luter",
      "lutes",
      "luvvy",
      "luxed",
      "luxer",
      "luxes",
      "lweis",
      "lyams",
      "lyard",
      "lyart",
      "lyase",
      "lycea",
      "lycee",
      "lycra",
      "lymes",
      "lynch",
      "lynes",
      "lyres",
      "lysed",
      "lyses",
      "lysin",
      "lysis",
      "lysol",
      "lyssa",
      "lyted",
      "lytes",
      "lythe",
      "lytic",
      "lytta",
      "maaed",
      "maare",
      "maars",
      "mabes",
      "macas",
      "maced",
      "macer",
      "maces",
      "mache",
      "machi",
      "machs",
      "macks",
      "macle",
      "macon",
      "madge",
      "madid",
      "madre",
      "maerl",
      "mafic",
      "mages",
      "maggs",
      "magot",
      "magus",
      "mahoe",
      "mahua",
      "mahwa",
      "maids",
      "maiko",
      "maiks",
      "maile",
      "maill",
      "mails",
      "maims",
      "mains",
      "maire",
      "mairs",
      "maise",
      "maist",
      "makar",
      "makes",
      "makis",
      "makos",
      "malam",
      "malar",
      "malas",
      "malax",
      "males",
      "malic",
      "malik",
      "malis",
      "malls",
      "malms",
      "malmy",
      "malts",
      "malty",
      "malus",
      "malva",
      "malwa",
      "mamas",
      "mamba",
      "mamee",
      "mamey",
      "mamie",
      "manas",
      "manat",
      "mandi",
      "maneb",
      "maned",
      "maneh",
      "manes",
      "manet",
      "mangs",
      "manis",
      "manky",
      "manna",
      "manos",
      "manse",
      "manta",
      "manto",
      "manty",
      "manul",
      "manus",
      "mapau",
      "maqui",
      "marae",
      "marah",
      "maras",
      "marcs",
      "mardy",
      "mares",
      "marge",
      "margs",
      "maria",
      "marid",
      "marka",
      "marks",
      "marle",
      "marls",
      "marly",
      "marms",
      "maron",
      "maror",
      "marra",
      "marri",
      "marse",
      "marts",
      "marvy",
      "masas",
      "mased",
      "maser",
      "mases",
      "mashy",
      "masks",
      "massa",
      "massy",
      "masts",
      "masty",
      "masus",
      "matai",
      "mated",
      "mater",
      "mates",
      "maths",
      "matin",
      "matlo",
      "matte",
      "matts",
      "matza",
      "matzo",
      "mauby",
      "mauds",
      "mauls",
      "maund",
      "mauri",
      "mausy",
      "mauts",
      "mauzy",
      "maven",
      "mavie",
      "mavin",
      "mavis",
      "mawed",
      "mawks",
      "mawky",
      "mawns",
      "mawrs",
      "maxed",
      "maxes",
      "maxis",
      "mayan",
      "mayas",
      "mayed",
      "mayos",
      "mayst",
      "mazed",
      "mazer",
      "mazes",
      "mazey",
      "mazut",
      "mbira",
      "meads",
      "meals",
      "meane",
      "means",
      "meany",
      "meare",
      "mease",
      "meath",
      "meats",
      "mebos",
      "mechs",
      "mecks",
      "medii",
      "medle",
      "meeds",
      "meers",
      "meets",
      "meffs",
      "meins",
      "meint",
      "meiny",
      "meith",
      "mekka",
      "melas",
      "melba",
      "melds",
      "melic",
      "melik",
      "mells",
      "melts",
      "melty",
      "memes",
      "memos",
      "menad",
      "mends",
      "mened",
      "menes",
      "menge",
      "mengs",
      "mensa",
      "mense",
      "mensh",
      "menta",
      "mento",
      "menus",
      "meous",
      "meows",
      "merch",
      "mercs",
      "merde",
      "mered",
      "merel",
      "merer",
      "meres",
      "meril",
      "meris",
      "merks",
      "merle",
      "merls",
      "merse",
      "mesal",
      "mesas",
      "mesel",
      "meses",
      "meshy",
      "mesic",
      "mesne",
      "meson",
      "messy",
      "mesto",
      "meted",
      "metes",
      "metho",
      "meths",
      "metic",
      "metif",
      "metis",
      "metol",
      "metre",
      "meuse",
      "meved",
      "meves",
      "mewed",
      "mewls",
      "meynt",
      "mezes",
      "mezze",
      "mezzo",
      "mhorr",
      "miaou",
      "miaow",
      "miasm",
      "miaul",
      "micas",
      "miche",
      "micht",
      "micks",
      "micky",
      "micos",
      "micra",
      "middy",
      "midgy",
      "midis",
      "miens",
      "mieve",
      "miffs",
      "miffy",
      "mifty",
      "miggs",
      "mihas",
      "mihis",
      "miked",
      "mikes",
      "mikra",
      "mikva",
      "milch",
      "milds",
      "miler",
      "miles",
      "milfs",
      "milia",
      "milko",
      "milks",
      "mille",
      "mills",
      "milor",
      "milos",
      "milpa",
      "milts",
      "milty",
      "miltz",
      "mimed",
      "mimeo",
      "mimer",
      "mimes",
      "mimsy",
      "minae",
      "minar",
      "minas",
      "mincy",
      "minds",
      "mined",
      "mines",
      "minge",
      "mings",
      "mingy",
      "minis",
      "minke",
      "minks",
      "minny",
      "minos",
      "mints",
      "mired",
      "mires",
      "mirex",
      "mirid",
      "mirin",
      "mirks",
      "mirky",
      "mirly",
      "miros",
      "mirvs",
      "mirza",
      "misch",
      "misdo",
      "mises",
      "misgo",
      "misos",
      "missa",
      "mists",
      "misty",
      "mitch",
      "miter",
      "mites",
      "mitis",
      "mitre",
      "mitts",
      "mixed",
      "mixen",
      "mixer",
      "mixes",
      "mixte",
      "mixup",
      "mizen",
      "mizzy",
      "mneme",
      "moans",
      "moats",
      "mobby",
      "mobes",
      "mobey",
      "mobie",
      "moble",
      "mochi",
      "mochs",
      "mochy",
      "mocks",
      "moder",
      "modes",
      "modge",
      "modii",
      "modus",
      "moers",
      "mofos",
      "moggy",
      "mohel",
      "mohos",
      "mohrs",
      "mohua",
      "mohur",
      "moile",
      "moils",
      "moira",
      "moire",
      "moits",
      "mojos",
      "mokes",
      "mokis",
      "mokos",
      "molal",
      "molas",
      "molds",
      "moled",
      "moles",
      "molla",
      "molls",
      "molly",
      "molto",
      "molts",
      "molys",
      "momes",
      "momma",
      "mommy",
      "momus",
      "monad",
      "monal",
      "monas",
      "monde",
      "mondo",
      "moner",
      "mongo",
      "mongs",
      "monic",
      "monie",
      "monks",
      "monos",
      "monte",
      "monty",
      "moobs",
      "mooch",
      "moods",
      "mooed",
      "mooks",
      "moola",
      "mooli",
      "mools",
      "mooly",
      "moong",
      "moons",
      "moony",
      "moops",
      "moors",
      "moory",
      "moots",
      "moove",
      "moped",
      "moper",
      "mopes",
      "mopey",
      "moppy",
      "mopsy",
      "mopus",
      "morae",
      "moras",
      "morat",
      "moray",
      "morel",
      "mores",
      "moria",
      "morne",
      "morns",
      "morra",
      "morro",
      "morse",
      "morts",
      "mosed",
      "moses",
      "mosey",
      "mosks",
      "mosso",
      "moste",
      "mosts",
      "moted",
      "moten",
      "motes",
      "motet",
      "motey",
      "moths",
      "mothy",
      "motis",
      "motte",
      "motts",
      "motty",
      "motus",
      "motza",
      "mouch",
      "moues",
      "mould",
      "mouls",
      "moups",
      "moust",
      "mousy",
      "moved",
      "moves",
      "mowas",
      "mowed",
      "mowra",
      "moxas",
      "moxie",
      "moyas",
      "moyle",
      "moyls",
      "mozed",
      "mozes",
      "mozos",
      "mpret",
      "mucho",
      "mucic",
      "mucid",
      "mucin",
      "mucks",
      "mucor",
      "mucro",
      "mudge",
      "mudir",
      "mudra",
      "muffs",
      "mufti",
      "mugga",
      "muggs",
      "muggy",
      "muhly",
      "muids",
      "muils",
      "muirs",
      "muist",
      "mujik",
      "mulct",
      "muled",
      "mules",
      "muley",
      "mulga",
      "mulie",
      "mulla",
      "mulls",
      "mulse",
      "mulsh",
      "mumms",
      "mumps",
      "mumsy",
      "mumus",
      "munga",
      "munge",
      "mungo",
      "mungs",
      "munis",
      "munts",
      "muntu",
      "muons",
      "muras",
      "mured",
      "mures",
      "murex",
      "murid",
      "murks",
      "murls",
      "murly",
      "murra",
      "murre",
      "murri",
      "murrs",
      "murry",
      "murti",
      "murva",
      "musar",
      "musca",
      "mused",
      "muser",
      "muses",
      "muset",
      "musha",
      "musit",
      "musks",
      "musos",
      "musse",
      "mussy",
      "musth",
      "musts",
      "mutch",
      "muted",
      "muter",
      "mutes",
      "mutha",
      "mutis",
      "muton",
      "mutts",
      "muxed",
      "muxes",
      "muzak",
      "muzzy",
      "mvule",
      "myall",
      "mylar",
      "mynah",
      "mynas",
      "myoid",
      "myoma",
      "myope",
      "myops",
      "myopy",
      "mysid",
      "mythi",
      "myths",
      "mythy",
      "myxos",
      "mzees",
      "naams",
      "naans",
      "nabes",
      "nabis",
      "nabks",
      "nabla",
      "nabob",
      "nache",
      "nacho",
      "nacre",
      "nadas",
      "naeve",
      "naevi",
      "naffs",
      "nagas",
      "naggy",
      "nagor",
      "nahal",
      "naiad",
      "naifs",
      "naiks",
      "nails",
      "naira",
      "nairu",
      "naked",
      "naker",
      "nakfa",
      "nalas",
      "naled",
      "nalla",
      "named",
      "namer",
      "names",
      "namma",
      "namus",
      "nanas",
      "nance",
      "nancy",
      "nandu",
      "nanna",
      "nanos",
      "nanua",
      "napas",
      "naped",
      "napes",
      "napoo",
      "nappa",
      "nappe",
      "nappy",
      "naras",
      "narco",
      "narcs",
      "nards",
      "nares",
      "naric",
      "naris",
      "narks",
      "narky",
      "narre",
      "nashi",
      "natch",
      "nates",
      "natis",
      "natty",
      "nauch",
      "naunt",
      "navar",
      "naves",
      "navew",
      "navvy",
      "nawab",
      "nazes",
      "nazir",
      "nazis",
      "nduja",
      "neafe",
      "neals",
      "neaps",
      "nears",
      "neath",
      "neats",
      "nebek",
      "nebel",
      "necks",
      "neddy",
      "needs",
      "neeld",
      "neele",
      "neemb",
      "neems",
      "neeps",
      "neese",
      "neeze",
      "negro",
      "negus",
      "neifs",
      "neist",
      "neive",
      "nelis",
      "nelly",
      "nemas",
      "nemns",
      "nempt",
      "nenes",
      "neons",
      "neper",
      "nepit",
      "neral",
      "nerds",
      "nerka",
      "nerks",
      "nerol",
      "nerts",
      "nertz",
      "nervy",
      "nests",
      "netes",
      "netop",
      "netts",
      "netty",
      "neuks",
      "neume",
      "neums",
      "nevel",
      "neves",
      "nevus",
      "newbs",
      "newed",
      "newel",
      "newie",
      "newsy",
      "newts",
      "nexts",
      "nexus",
      "ngaio",
      "ngana",
      "ngati",
      "ngoma",
      "ngwee",
      "nicad",
      "nicht",
      "nicks",
      "nicol",
      "nidal",
      "nided",
      "nides",
      "nidor",
      "nidus",
      "niefs",
      "nieve",
      "nifes",
      "niffs",
      "niffy",
      "nifty",
      "niger",
      "nighs",
      "nihil",
      "nikab",
      "nikah",
      "nikau",
      "nills",
      "nimbi",
      "nimbs",
      "nimps",
      "niner",
      "nines",
      "ninon",
      "nipas",
      "nippy",
      "niqab",
      "nirls",
      "nirly",
      "nisei",
      "nisse",
      "nisus",
      "niter",
      "nites",
      "nitid",
      "niton",
      "nitre",
      "nitro",
      "nitry",
      "nitty",
      "nival",
      "nixed",
      "nixer",
      "nixes",
      "nixie",
      "nizam",
      "nkosi",
      "noahs",
      "nobby",
      "nocks",
      "nodal",
      "noddy",
      "nodes",
      "nodus",
      "noels",
      "noggs",
      "nohow",
      "noils",
      "noily",
      "noint",
      "noirs",
      "noles",
      "nolls",
      "nolos",
      "nomas",
      "nomen",
      "nomes",
      "nomic",
      "nomoi",
      "nomos",
      "nonas",
      "nonce",
      "nones",
      "nonet",
      "nongs",
      "nonis",
      "nonny",
      "nonyl",
      "noobs",
      "nooit",
      "nooks",
      "nooky",
      "noons",
      "noops",
      "nopal",
      "noria",
      "noris",
      "norks",
      "norma",
      "norms",
      "nosed",
      "noser",
      "noses",
      "notal",
      "noted",
      "noter",
      "notes",
      "notum",
      "nould",
      "noule",
      "nouls",
      "nouns",
      "nouny",
      "noups",
      "novae",
      "novas",
      "novum",
      "noway",
      "nowed",
      "nowls",
      "nowts",
      "nowty",
      "noxal",
      "noxes",
      "noyau",
      "noyed",
      "noyes",
      "nubby",
      "nubia",
      "nucha",
      "nuddy",
      "nuder",
      "nudes",
      "nudie",
      "nudzh",
      "nuffs",
      "nugae",
      "nuked",
      "nukes",
      "nulla",
      "nulls",
      "numbs",
      "numen",
      "nummy",
      "nunny",
      "nurds",
      "nurdy",
      "nurls",
      "nurrs",
      "nutso",
      "nutsy",
      "nyaff",
      "nyala",
      "nying",
      "nyssa",
      "oaked",
      "oaker",
      "oakum",
      "oared",
      "oases",
      "oasis",
      "oasts",
      "oaten",
      "oater",
      "oaths",
      "oaves",
      "obang",
      "obeah",
      "obeli",
      "obeys",
      "obias",
      "obied",
      "obiit",
      "obits",
      "objet",
      "oboes",
      "obole",
      "oboli",
      "obols",
      "occam",
      "ocher",
      "oches",
      "ochre",
      "ochry",
      "ocker",
      "ocrea",
      "octad",
      "octan",
      "octas",
      "octyl",
      "oculi",
      "odahs",
      "odals",
      "odeon",
      "odeum",
      "odism",
      "odist",
      "odium",
      "odors",
      "odour",
      "odyle",
      "odyls",
      "ofays",
      "offed",
      "offie",
      "oflag",
      "ofter",
      "ogams",
      "ogeed",
      "ogees",
      "oggin",
      "ogham",
      "ogive",
      "ogled",
      "ogler",
      "ogles",
      "ogmic",
      "ogres",
      "ohias",
      "ohing",
      "ohmic",
      "ohone",
      "oidia",
      "oiled",
      "oiler",
      "oinks",
      "oints",
      "ojime",
      "okapi",
      "okays",
      "okehs",
      "okras",
      "oktas",
      "oldie",
      "oleic",
      "olein",
      "olent",
      "oleos",
      "oleum",
      "olios",
      "ollas",
      "ollav",
      "oller",
      "ollie",
      "ology",
      "olpae",
      "olpes",
      "omasa",
      "omber",
      "ombus",
      "omens",
      "omers",
      "omits",
      "omlah",
      "omovs",
      "omrah",
      "oncer",
      "onces",
      "oncet",
      "oncus",
      "onely",
      "oners",
      "onery",
      "onium",
      "onkus",
      "onlay",
      "onned",
      "ontic",
      "oobit",
      "oohed",
      "oomph",
      "oonts",
      "ooped",
      "oorie",
      "ooses",
      "ootid",
      "oozed",
      "oozes",
      "opahs",
      "opals",
      "opens",
      "opepe",
      "oping",
      "oppos",
      "opsin",
      "opted",
      "opter",
      "orach",
      "oracy",
      "orals",
      "orang",
      "orant",
      "orate",
      "orbed",
      "orcas",
      "orcin",
      "ordos",
      "oread",
      "orfes",
      "orgia",
      "orgic",
      "orgue",
      "oribi",
      "oriel",
      "orixa",
      "orles",
      "orlon",
      "orlop",
      "ormer",
      "ornis",
      "orpin",
      "orris",
      "ortho",
      "orval",
      "orzos",
      "oscar",
      "oshac",
      "osier",
      "osmic",
      "osmol",
      "ossia",
      "ostia",
      "otaku",
      "otary",
      "ottar",
      "ottos",
      "oubit",
      "oucht",
      "ouens",
      "ouija",
      "oulks",
      "oumas",
      "oundy",
      "oupas",
      "ouped",
      "ouphe",
      "ouphs",
      "ourie",
      "ousel",
      "ousts",
      "outby",
      "outed",
      "outre",
      "outro",
      "outta",
      "ouzel",
      "ouzos",
      "ovals",
      "ovels",
      "ovens",
      "overs",
      "ovist",
      "ovoli",
      "ovolo",
      "ovule",
      "owche",
      "owies",
      "owled",
      "owler",
      "owlet",
      "owned",
      "owres",
      "owrie",
      "owsen",
      "oxbow",
      "oxers",
      "oxeye",
      "oxids",
      "oxies",
      "oxime",
      "oxims",
      "oxlip",
      "oxter",
      "oyers",
      "ozeki",
      "ozzie",
      "paals",
      "paans",
      "pacas",
      "paced",
      "pacer",
      "paces",
      "pacey",
      "pacha",
      "packs",
      "pacos",
      "pacta",
      "pacts",
      "padis",
      "padle",
      "padma",
      "padre",
      "padri",
      "paean",
      "paedo",
      "paeon",
      "paged",
      "pager",
      "pages",
      "pagle",
      "pagod",
      "pagri",
      "paiks",
      "pails",
      "pains",
      "paire",
      "pairs",
      "paisa",
      "paise",
      "pakka",
      "palas",
      "palay",
      "palea",
      "paled",
      "pales",
      "palet",
      "palis",
      "palki",
      "palla",
      "palls",
      "pally",
      "palms",
      "palmy",
      "palpi",
      "palps",
      "palsa",
      "pampa",
      "panax",
      "pance",
      "panda",
      "pands",
      "pandy",
      "paned",
      "panes",
      "panga",
      "pangs",
      "panim",
      "panko",
      "panne",
      "panni",
      "panto",
      "pants",
      "panty",
      "paoli",
      "paolo",
      "papas",
      "papaw",
      "papes",
      "pappi",
      "pappy",
      "parae",
      "paras",
      "parch",
      "pardi",
      "pards",
      "pardy",
      "pared",
      "paren",
      "pareo",
      "pares",
      "pareu",
      "parev",
      "parge",
      "pargo",
      "paris",
      "parki",
      "parks",
      "parky",
      "parle",
      "parly",
      "parma",
      "parol",
      "parps",
      "parra",
      "parrs",
      "parti",
      "parts",
      "parve",
      "parvo",
      "paseo",
      "pases",
      "pasha",
      "pashm",
      "paska",
      "paspy",
      "passe",
      "pasts",
      "pated",
      "paten",
      "pater",
      "pates",
      "paths",
      "patin",
      "patka",
      "patly",
      "patte",
      "patus",
      "pauas",
      "pauls",
      "pavan",
      "paved",
      "paven",
      "paver",
      "paves",
      "pavid",
      "pavin",
      "pavis",
      "pawas",
      "pawaw",
      "pawed",
      "pawer",
      "pawks",
      "pawky",
      "pawls",
      "pawns",
      "paxes",
      "payed",
      "payor",
      "paysd",
      "peage",
      "peags",
      "peaks",
      "peaky",
      "peals",
      "peans",
      "peare",
      "pears",
      "peart",
      "pease",
      "peats",
      "peaty",
      "peavy",
      "peaze",
      "pebas",
      "pechs",
      "pecke",
      "pecks",
      "pecky",
      "pedes",
      "pedis",
      "pedro",
      "peece",
      "peeks",
      "peels",
      "peens",
      "peeoy",
      "peepe",
      "peeps",
      "peers",
      "peery",
      "peeve",
      "peggy",
      "peghs",
      "peins",
      "peise",
      "peize",
      "pekan",
      "pekes",
      "pekin",
      "pekoe",
      "pelas",
      "pelau",
      "peles",
      "pelfs",
      "pells",
      "pelma",
      "pelon",
      "pelta",
      "pelts",
      "pends",
      "pendu",
      "pened",
      "penes",
      "pengo",
      "penie",
      "penis",
      "penks",
      "penna",
      "penni",
      "pents",
      "peons",
      "peony",
      "pepla",
      "pepos",
      "peppy",
      "pepsi",
      "perai",
      "perce",
      "percs",
      "perdu",
      "perdy",
      "perea",
      "peres",
      "peris",
      "perks",
      "perms",
      "perns",
      "perog",
      "perps",
      "perry",
      "perse",
      "perst",
      "perts",
      "perve",
      "pervo",
      "pervs",
      "pervy",
      "pesos",
      "pests",
      "pesty",
      "petar",
      "peter",
      "petit",
      "petre",
      "petri",
      "petti",
      "petto",
      "pewee",
      "pewit",
      "peyse",
      "phage",
      "phang",
      "phare",
      "pharm",
      "pheer",
      "phene",
      "pheon",
      "phese",
      "phial",
      "phish",
      "phizz",
      "phlox",
      "phoca",
      "phono",
      "phons",
      "phots",
      "phpht",
      "phuts",
      "phyla",
      "phyle",
      "piani",
      "pians",
      "pibal",
      "pical",
      "picas",
      "piccy",
      "picks",
      "picot",
      "picra",
      "picul",
      "piend",
      "piers",
      "piert",
      "pieta",
      "piets",
      "piezo",
      "pight",
      "pigmy",
      "piing",
      "pikas",
      "pikau",
      "piked",
      "piker",
      "pikes",
      "pikey",
      "pikis",
      "pikul",
      "pilae",
      "pilaf",
      "pilao",
      "pilar",
      "pilau",
      "pilaw",
      "pilch",
      "pilea",
      "piled",
      "pilei",
      "piler",
      "piles",
      "pilis",
      "pills",
      "pilow",
      "pilum",
      "pilus",
      "pimas",
      "pimps",
      "pinas",
      "pined",
      "pines",
      "pingo",
      "pings",
      "pinko",
      "pinks",
      "pinna",
      "pinny",
      "pinon",
      "pinot",
      "pinta",
      "pints",
      "pinup",
      "pions",
      "piony",
      "pious",
      "pioye",
      "pioys",
      "pipal",
      "pipas",
      "piped",
      "pipes",
      "pipet",
      "pipis",
      "pipit",
      "pippy",
      "pipul",
      "pirai",
      "pirls",
      "pirns",
      "pirog",
      "pisco",
      "pises",
      "pisky",
      "pisos",
      "pissy",
      "piste",
      "pitas",
      "piths",
      "piton",
      "pitot",
      "pitta",
      "piums",
      "pixes",
      "pized",
      "pizes",
      "plaas",
      "plack",
      "plage",
      "plans",
      "plaps",
      "plash",
      "plasm",
      "plast",
      "plats",
      "platt",
      "platy",
      "playa",
      "plays",
      "pleas",
      "plebe",
      "plebs",
      "plena",
      "pleon",
      "plesh",
      "plews",
      "plica",
      "plies",
      "plims",
      "pling",
      "plink",
      "ploat",
      "plods",
      "plong",
      "plonk",
      "plook",
      "plops",
      "plots",
      "plotz",
      "plouk",
      "plows",
      "ploye",
      "ploys",
      "plues",
      "pluff",
      "plugs",
      "plums",
      "plumy",
      "pluot",
      "pluto",
      "plyer",
      "poach",
      "poaka",
      "poake",
      "poboy",
      "pocks",
      "pocky",
      "podal",
      "poddy",
      "podex",
      "podge",
      "podgy",
      "podia",
      "poems",
      "poeps",
      "poets",
      "pogey",
      "pogge",
      "pogos",
      "pohed",
      "poilu",
      "poind",
      "pokal",
      "poked",
      "pokes",
      "pokey",
      "pokie",
      "poled",
      "poler",
      "poles",
      "poley",
      "polio",
      "polis",
      "polje",
      "polks",
      "polls",
      "polly",
      "polos",
      "polts",
      "polys",
      "pombe",
      "pomes",
      "pommy",
      "pomos",
      "pomps",
      "ponce",
      "poncy",
      "ponds",
      "pones",
      "poney",
      "ponga",
      "pongo",
      "pongs",
      "pongy",
      "ponks",
      "ponts",
      "ponty",
      "ponzu",
      "poods",
      "pooed",
      "poofs",
      "poofy",
      "poohs",
      "pooja",
      "pooka",
      "pooks",
      "pools",
      "poons",
      "poops",
      "poopy",
      "poori",
      "poort",
      "poots",
      "poove",
      "poovy",
      "popes",
      "poppa",
      "popsy",
      "porae",
      "poral",
      "pored",
      "porer",
      "pores",
      "porge",
      "porgy",
      "porin",
      "porks",
      "porky",
      "porno",
      "porns",
      "porny",
      "porta",
      "ports",
      "porty",
      "posed",
      "poses",
      "posey",
      "posho",
      "posts",
      "potae",
      "potch",
      "poted",
      "potes",
      "potin",
      "potoo",
      "potsy",
      "potto",
      "potts",
      "potty",
      "pouff",
      "poufs",
      "pouke",
      "pouks",
      "poule",
      "poulp",
      "poult",
      "poupe",
      "poupt",
      "pours",
      "pouts",
      "powan",
      "powin",
      "pownd",
      "powns",
      "powny",
      "powre",
      "poxed",
      "poxes",
      "poynt",
      "poyou",
      "poyse",
      "pozzy",
      "praam",
      "prads",
      "prahu",
      "prams",
      "prana",
      "prang",
      "praos",
      "prase",
      "prate",
      "prats",
      "pratt",
      "praty",
      "praus",
      "prays",
      "predy",
      "preed",
      "prees",
      "preif",
      "prems",
      "premy",
      "prent",
      "preon",
      "preop",
      "preps",
      "presa",
      "prese",
      "prest",
      "preve",
      "prexy",
      "preys",
      "prial",
      "pricy",
      "prief",
      "prier",
      "pries",
      "prigs",
      "prill",
      "prima",
      "primi",
      "primp",
      "prims",
      "primy",
      "prink",
      "prion",
      "prise",
      "priss",
      "proas",
      "probs",
      "prods",
      "proem",
      "profs",
      "progs",
      "proin",
      "proke",
      "prole",
      "proll",
      "promo",
      "proms",
      "pronk",
      "props",
      "prore",
      "proso",
      "pross",
      "prost",
      "prosy",
      "proto",
      "proul",
      "prows",
      "proyn",
      "prunt",
      "pruta",
      "pryer",
      "pryse",
      "pseud",
      "pshaw",
      "psion",
      "psoae",
      "psoai",
      "psoas",
      "psora",
      "psych",
      "psyop",
      "pubco",
      "pubes",
      "pubis",
      "pucan",
      "pucer",
      "puces",
      "pucka",
      "pucks",
      "puddy",
      "pudge",
      "pudic",
      "pudor",
      "pudsy",
      "pudus",
      "puers",
      "puffa",
      "puffs",
      "puggy",
      "pugil",
      "puhas",
      "pujah",
      "pujas",
      "pukas",
      "puked",
      "puker",
      "pukes",
      "pukey",
      "pukka",
      "pukus",
      "pulao",
      "pulas",
      "puled",
      "puler",
      "pules",
      "pulik",
      "pulis",
      "pulka",
      "pulks",
      "pulli",
      "pulls",
      "pully",
      "pulmo",
      "pulps",
      "pulus",
      "pumas",
      "pumie",
      "pumps",
      "punas",
      "punce",
      "punga",
      "pungs",
      "punji",
      "punka",
      "punks",
      "punky",
      "punny",
      "punto",
      "punts",
      "punty",
      "pupae",
      "pupal",
      "pupas",
      "pupus",
      "purda",
      "pured",
      "pures",
      "purin",
      "puris",
      "purls",
      "purpy",
      "purrs",
      "pursy",
      "purty",
      "puses",
      "pusle",
      "pussy",
      "putid",
      "puton",
      "putti",
      "putto",
      "putts",
      "puzel",
      "pwned",
      "pyats",
      "pyets",
      "pygal",
      "pyins",
      "pylon",
      "pyned",
      "pynes",
      "pyoid",
      "pyots",
      "pyral",
      "pyran",
      "pyres",
      "pyrex",
      "pyric",
      "pyros",
      "pyxed",
      "pyxes",
      "pyxie",
      "pyxis",
      "pzazz",
      "qadis",
      "qaids",
      "qajaq",
      "qanat",
      "qapik",
      "qibla",
      "qophs",
      "qorma",
      "quads",
      "quaff",
      "quags",
      "quair",
      "quais",
      "quaky",
      "quale",
      "quant",
      "quare",
      "quass",
      "quate",
      "quats",
      "quayd",
      "quays",
      "qubit",
      "quean",
      "queme",
      "quena",
      "quern",
      "queyn",
      "queys",
      "quich",
      "quids",
      "quiff",
      "quims",
      "quina",
      "quine",
      "quino",
      "quins",
      "quint",
      "quipo",
      "quips",
      "quipu",
      "quire",
      "quirt",
      "quist",
      "quits",
      "quoad",
      "quods",
      "quoif",
      "quoin",
      "quoit",
      "quoll",
      "quonk",
      "quops",
      "quran",
      "qursh",
      "quyte",
      "rabat",
      "rabic",
      "rabis",
      "raced",
      "races",
      "rache",
      "racks",
      "racon",
      "radge",
      "radix",
      "radon",
      "raffs",
      "rafts",
      "ragas",
      "ragde",
      "raged",
      "ragee",
      "rager",
      "rages",
      "ragga",
      "raggs",
      "raggy",
      "ragis",
      "ragus",
      "rahed",
      "rahui",
      "raias",
      "raids",
      "raiks",
      "raile",
      "rails",
      "raine",
      "rains",
      "raird",
      "raita",
      "raits",
      "rajas",
      "rajes",
      "raked",
      "rakee",
      "raker",
      "rakes",
      "rakia",
      "rakis",
      "rakus",
      "rales",
      "ramal",
      "ramee",
      "ramet",
      "ramie",
      "ramin",
      "ramis",
      "rammy",
      "ramps",
      "ramus",
      "ranas",
      "rance",
      "rands",
      "ranee",
      "ranga",
      "rangi",
      "rangs",
      "rangy",
      "ranid",
      "ranis",
      "ranke",
      "ranks",
      "rants",
      "raped",
      "raper",
      "rapes",
      "raphe",
      "rappe",
      "rared",
      "raree",
      "rares",
      "rarks",
      "rased",
      "raser",
      "rases",
      "rasps",
      "rasse",
      "rasta",
      "ratal",
      "ratan",
      "ratas",
      "ratch",
      "rated",
      "ratel",
      "rater",
      "rates",
      "ratha",
      "rathe",
      "raths",
      "ratoo",
      "ratos",
      "ratus",
      "rauns",
      "raupo",
      "raved",
      "ravel",
      "raver",
      "raves",
      "ravey",
      "ravin",
      "rawer",
      "rawin",
      "rawly",
      "rawns",
      "raxed",
      "raxes",
      "rayah",
      "rayas",
      "rayed",
      "rayle",
      "rayne",
      "razed",
      "razee",
      "razer",
      "razes",
      "razoo",
      "readd",
      "reads",
      "reais",
      "reaks",
      "realo",
      "reals",
      "reame",
      "reams",
      "reamy",
      "reans",
      "reaps",
      "rears",
      "reast",
      "reata",
      "reate",
      "reave",
      "rebbe",
      "rebec",
      "rebid",
      "rebit",
      "rebop",
      "rebuy",
      "recal",
      "recce",
      "recco",
      "reccy",
      "recit",
      "recks",
      "recon",
      "recta",
      "recti",
      "recto",
      "redan",
      "redds",
      "reddy",
      "reded",
      "redes",
      "redia",
      "redid",
      "redip",
      "redly",
      "redon",
      "redos",
      "redox",
      "redry",
      "redub",
      "redux",
      "redye",
      "reech",
      "reede",
      "reeds",
      "reefs",
      "reefy",
      "reeks",
      "reeky",
      "reels",
      "reens",
      "reest",
      "reeve",
      "refed",
      "refel",
      "reffo",
      "refis",
      "refix",
      "refly",
      "refry",
      "regar",
      "reges",
      "reggo",
      "regie",
      "regma",
      "regna",
      "regos",
      "regur",
      "rehem",
      "reifs",
      "reify",
      "reiki",
      "reiks",
      "reink",
      "reins",
      "reird",
      "reist",
      "reive",
      "rejig",
      "rejon",
      "reked",
      "rekes",
      "rekey",
      "relet",
      "relie",
      "relit",
      "rello",
      "reman",
      "remap",
      "remen",
      "remet",
      "remex",
      "remix",
      "renay",
      "rends",
      "reney",
      "renga",
      "renig",
      "renin",
      "renne",
      "renos",
      "rente",
      "rents",
      "reoil",
      "reorg",
      "repeg",
      "repin",
      "repla",
      "repos",
      "repot",
      "repps",
      "repro",
      "reran",
      "rerig",
      "resat",
      "resaw",
      "resay",
      "resee",
      "reses",
      "resew",
      "resid",
      "resit",
      "resod",
      "resow",
      "resto",
      "rests",
      "resty",
      "resus",
      "retag",
      "retax",
      "retem",
      "retia",
      "retie",
      "retox",
      "revet",
      "revie",
      "rewan",
      "rewax",
      "rewed",
      "rewet",
      "rewin",
      "rewon",
      "rewth",
      "rexes",
      "rezes",
      "rheas",
      "rheme",
      "rheum",
      "rhies",
      "rhime",
      "rhine",
      "rhody",
      "rhomb",
      "rhone",
      "rhumb",
      "rhyne",
      "rhyta",
      "riads",
      "rials",
      "riant",
      "riata",
      "ribas",
      "ribby",
      "ribes",
      "riced",
      "ricer",
      "rices",
      "ricey",
      "richt",
      "ricin",
      "ricks",
      "rides",
      "ridgy",
      "ridic",
      "riels",
      "riems",
      "rieve",
      "rifer",
      "riffs",
      "rifte",
      "rifts",
      "rifty",
      "riggs",
      "rigol",
      "riled",
      "riles",
      "riley",
      "rille",
      "rills",
      "rimae",
      "rimed",
      "rimer",
      "rimes",
      "rimus",
      "rinds",
      "rindy",
      "rines",
      "rings",
      "rinks",
      "rioja",
      "riots",
      "riped",
      "ripes",
      "ripps",
      "rises",
      "rishi",
      "risks",
      "risps",
      "risus",
      "rites",
      "ritts",
      "ritzy",
      "rivas",
      "rived",
      "rivel",
      "riven",
      "rives",
      "riyal",
      "rizas",
      "roads",
      "roams",
      "roans",
      "roars",
      "roary",
      "roate",
      "robed",
      "robes",
      "roble",
      "rocks",
      "roded",
      "rodes",
      "roguy",
      "rohes",
      "roids",
      "roils",
      "roily",
      "roins",
      "roist",
      "rojak",
      "rojis",
      "roked",
      "roker",
      "rokes",
      "rolag",
      "roles",
      "rolfs",
      "rolls",
      "romal",
      "roman",
      "romeo",
      "romps",
      "ronde",
      "rondo",
      "roneo",
      "rones",
      "ronin",
      "ronne",
      "ronte",
      "ronts",
      "roods",
      "roofs",
      "roofy",
      "rooks",
      "rooky",
      "rooms",
      "roons",
      "roops",
      "roopy",
      "roosa",
      "roose",
      "roots",
      "rooty",
      "roped",
      "roper",
      "ropes",
      "ropey",
      "roque",
      "roral",
      "rores",
      "roric",
      "rorid",
      "rorie",
      "rorts",
      "rorty",
      "rosed",
      "roses",
      "roset",
      "roshi",
      "rosin",
      "rosit",
      "rosti",
      "rosts",
      "rotal",
      "rotan",
      "rotas",
      "rotch",
      "roted",
      "rotes",
      "rotis",
      "rotls",
      "roton",
      "rotos",
      "rotte",
      "rouen",
      "roues",
      "roule",
      "rouls",
      "roums",
      "roups",
      "roupy",
      "roust",
      "routh",
      "routs",
      "roved",
      "roven",
      "roves",
      "rowan",
      "rowed",
      "rowel",
      "rowen",
      "rowie",
      "rowme",
      "rownd",
      "rowth",
      "rowts",
      "royne",
      "royst",
      "rozet",
      "rozit",
      "ruana",
      "rubai",
      "rubby",
      "rubel",
      "rubes",
      "rubin",
      "ruble",
      "rubli",
      "rubus",
      "ruche",
      "rucks",
      "rudas",
      "rudds",
      "rudes",
      "rudie",
      "rudis",
      "rueda",
      "ruers",
      "ruffe",
      "ruffs",
      "rugae",
      "rugal",
      "ruggy",
      "ruing",
      "ruins",
      "rukhs",
      "ruled",
      "rules",
      "rumal",
      "rumbo",
      "rumen",
      "rumes",
      "rumly",
      "rummy",
      "rumpo",
      "rumps",
      "rumpy",
      "runch",
      "runds",
      "runed",
      "runes",
      "rungs",
      "runic",
      "runny",
      "runts",
      "runty",
      "rupia",
      "rurps",
      "rurus",
      "rusas",
      "ruses",
      "rushy",
      "rusks",
      "rusma",
      "russe",
      "rusts",
      "ruths",
      "rutin",
      "rutty",
      "ryals",
      "rybat",
      "ryked",
      "rykes",
      "rymme",
      "rynds",
      "ryots",
      "ryper",
      "saags",
      "sabal",
      "sabed",
      "saber",
      "sabes",
      "sabha",
      "sabin",
      "sabir",
      "sable",
      "sabot",
      "sabra",
      "sabre",
      "sacks",
      "sacra",
      "saddo",
      "sades",
      "sadhe",
      "sadhu",
      "sadis",
      "sados",
      "sadza",
      "safed",
      "safes",
      "sagas",
      "sager",
      "sages",
      "saggy",
      "sagos",
      "sagum",
      "saheb",
      "sahib",
      "saice",
      "saick",
      "saics",
      "saids",
      "saiga",
      "sails",
      "saims",
      "saine",
      "sains",
      "sairs",
      "saist",
      "saith",
      "sajou",
      "sakai",
      "saker",
      "sakes",
      "sakia",
      "sakis",
      "sakti",
      "salal",
      "salat",
      "salep",
      "sales",
      "salet",
      "salic",
      "salix",
      "salle",
      "salmi",
      "salol",
      "salop",
      "salpa",
      "salps",
      "salse",
      "salto",
      "salts",
      "salue",
      "salut",
      "saman",
      "samas",
      "samba",
      "sambo",
      "samek",
      "samel",
      "samen",
      "sames",
      "samey",
      "samfu",
      "sammy",
      "sampi",
      "samps",
      "sands",
      "saned",
      "sanes",
      "sanga",
      "sangh",
      "sango",
      "sangs",
      "sanko",
      "sansa",
      "santo",
      "sants",
      "saola",
      "sapan",
      "sapid",
      "sapor",
      "saran",
      "sards",
      "sared",
      "saree",
      "sarge",
      "sargo",
      "sarin",
      "saris",
      "sarks",
      "sarky",
      "sarod",
      "saros",
      "sarus",
      "saser",
      "sasin",
      "sasse",
      "satai",
      "satay",
      "sated",
      "satem",
      "sates",
      "satis",
      "sauba",
      "sauch",
      "saugh",
      "sauls",
      "sault",
      "saunt",
      "saury",
      "sauts",
      "saved",
      "saver",
      "saves",
      "savey",
      "savin",
      "sawah",
      "sawed",
      "sawer",
      "saxes",
      "sayed",
      "sayer",
      "sayid",
      "sayne",
      "sayon",
      "sayst",
      "sazes",
      "scabs",
      "scads",
      "scaff",
      "scags",
      "scail",
      "scala",
      "scall",
      "scams",
      "scand",
      "scans",
      "scapa",
      "scape",
      "scapi",
      "scarp",
      "scars",
      "scart",
      "scath",
      "scats",
      "scatt",
      "scaud",
      "scaup",
      "scaur",
      "scaws",
      "sceat",
      "scena",
      "scend",
      "schav",
      "schmo",
      "schul",
      "schwa",
      "sclim",
      "scody",
      "scogs",
      "scoog",
      "scoot",
      "scopa",
      "scops",
      "scots",
      "scoug",
      "scoup",
      "scowp",
      "scows",
      "scrab",
      "scrae",
      "scrag",
      "scran",
      "scrat",
      "scraw",
      "scray",
      "scrim",
      "scrip",
      "scrob",
      "scrod",
      "scrog",
      "scrow",
      "scudi",
      "scudo",
      "scuds",
      "scuff",
      "scuft",
      "scugs",
      "sculk",
      "scull",
      "sculp",
      "sculs",
      "scums",
      "scups",
      "scurf",
      "scurs",
      "scuse",
      "scuta",
      "scute",
      "scuts",
      "scuzz",
      "scyes",
      "sdayn",
      "sdein",
      "seals",
      "seame",
      "seams",
      "seamy",
      "seans",
      "seare",
      "sears",
      "sease",
      "seats",
      "seaze",
      "sebum",
      "secco",
      "sechs",
      "sects",
      "seder",
      "sedes",
      "sedge",
      "sedgy",
      "sedum",
      "seeds",
      "seeks",
      "seeld",
      "seels",
      "seely",
      "seems",
      "seeps",
      "seepy",
      "seers",
      "sefer",
      "segar",
      "segni",
      "segno",
      "segol",
      "segos",
      "sehri",
      "seifs",
      "seils",
      "seine",
      "seirs",
      "seise",
      "seism",
      "seity",
      "seiza",
      "sekos",
      "sekts",
      "selah",
      "seles",
      "selfs",
      "sella",
      "selle",
      "sells",
      "selva",
      "semee",
      "semes",
      "semie",
      "semis",
      "senas",
      "sends",
      "senes",
      "sengi",
      "senna",
      "senor",
      "sensa",
      "sensi",
      "sente",
      "senti",
      "sents",
      "senvy",
      "senza",
      "sepad",
      "sepal",
      "sepic",
      "sepoy",
      "septa",
      "septs",
      "serac",
      "serai",
      "seral",
      "sered",
      "serer",
      "seres",
      "serfs",
      "serge",
      "seric",
      "serin",
      "serks",
      "seron",
      "serow",
      "serra",
      "serre",
      "serrs",
      "serry",
      "servo",
      "sesey",
      "sessa",
      "setae",
      "setal",
      "seton",
      "setts",
      "sewan",
      "sewar",
      "sewed",
      "sewel",
      "sewen",
      "sewin",
      "sexed",
      "sexer",
      "sexes",
      "sexto",
      "sexts",
      "seyen",
      "shads",
      "shags",
      "shahs",
      "shako",
      "shakt",
      "shalm",
      "shaly",
      "shama",
      "shams",
      "shand",
      "shans",
      "shaps",
      "sharn",
      "shash",
      "shaul",
      "shawm",
      "shawn",
      "shaws",
      "shaya",
      "shays",
      "shchi",
      "sheaf",
      "sheal",
      "sheas",
      "sheds",
      "sheel",
      "shend",
      "shent",
      "sheol",
      "sherd",
      "shere",
      "shero",
      "shets",
      "sheva",
      "shewn",
      "shews",
      "shiai",
      "shiel",
      "shier",
      "shies",
      "shill",
      "shily",
      "shims",
      "shins",
      "ships",
      "shirr",
      "shirs",
      "shish",
      "shiso",
      "shist",
      "shite",
      "shits",
      "shiur",
      "shiva",
      "shive",
      "shivs",
      "shlep",
      "shlub",
      "shmek",
      "shmoe",
      "shoat",
      "shoed",
      "shoer",
      "shoes",
      "shogi",
      "shogs",
      "shoji",
      "shojo",
      "shola",
      "shool",
      "shoon",
      "shoos",
      "shope",
      "shops",
      "shorl",
      "shote",
      "shots",
      "shott",
      "showd",
      "shows",
      "shoyu",
      "shred",
      "shris",
      "shrow",
      "shtik",
      "shtum",
      "shtup",
      "shule",
      "shuln",
      "shuls",
      "shuns",
      "shura",
      "shute",
      "shuts",
      "shwas",
      "shyer",
      "sials",
      "sibbs",
      "sibyl",
      "sices",
      "sicht",
      "sicko",
      "sicks",
      "sicky",
      "sidas",
      "sided",
      "sider",
      "sides",
      "sidha",
      "sidhe",
      "sidle",
      "sield",
      "siens",
      "sient",
      "sieth",
      "sieur",
      "sifts",
      "sighs",
      "sigil",
      "sigla",
      "signa",
      "signs",
      "sijos",
      "sikas",
      "siker",
      "sikes",
      "silds",
      "siled",
      "silen",
      "siler",
      "siles",
      "silex",
      "silks",
      "sills",
      "silos",
      "silts",
      "silty",
      "silva",
      "simar",
      "simas",
      "simba",
      "simis",
      "simps",
      "simul",
      "sinds",
      "sined",
      "sines",
      "sings",
      "sinhs",
      "sinks",
      "sinky",
      "sinus",
      "siped",
      "sipes",
      "sippy",
      "sired",
      "siree",
      "sires",
      "sirih",
      "siris",
      "siroc",
      "sirra",
      "sirup",
      "sisal",
      "sises",
      "sista",
      "sists",
      "sitar",
      "sited",
      "sites",
      "sithe",
      "sitka",
      "situp",
      "situs",
      "siver",
      "sixer",
      "sixes",
      "sixmo",
      "sixte",
      "sizar",
      "sized",
      "sizel",
      "sizer",
      "sizes",
      "skags",
      "skail",
      "skald",
      "skank",
      "skart",
      "skats",
      "skatt",
      "skaws",
      "skean",
      "skear",
      "skeds",
      "skeed",
      "skeef",
      "skeen",
      "skeer",
      "skees",
      "skeet",
      "skegg",
      "skegs",
      "skein",
      "skelf",
      "skell",
      "skelm",
      "skelp",
      "skene",
      "skens",
      "skeos",
      "skeps",
      "skers",
      "skets",
      "skews",
      "skids",
      "skied",
      "skies",
      "skiey",
      "skimo",
      "skims",
      "skink",
      "skins",
      "skint",
      "skios",
      "skips",
      "skirl",
      "skirr",
      "skite",
      "skits",
      "skive",
      "skivy",
      "sklim",
      "skoal",
      "skody",
      "skoff",
      "skogs",
      "skols",
      "skool",
      "skort",
      "skosh",
      "skran",
      "skrik",
      "skuas",
      "skugs",
      "skyed",
      "skyer",
      "skyey",
      "skyfs",
      "skyre",
      "skyrs",
      "skyte",
      "slabs",
      "slade",
      "slaes",
      "slags",
      "slaid",
      "slake",
      "slams",
      "slane",
      "slank",
      "slaps",
      "slart",
      "slats",
      "slaty",
      "slave",
      "slaws",
      "slays",
      "slebs",
      "sleds",
      "sleer",
      "slews",
      "sleys",
      "slier",
      "slily",
      "slims",
      "slipe",
      "slips",
      "slipt",
      "slish",
      "slits",
      "slive",
      "sloan",
      "slobs",
      "sloes",
      "slogs",
      "sloid",
      "slojd",
      "slomo",
      "sloom",
      "sloot",
      "slops",
      "slopy",
      "slorm",
      "slots",
      "slove",
      "slows",
      "sloyd",
      "slubb",
      "slubs",
      "slued",
      "slues",
      "sluff",
      "slugs",
      "sluit",
      "slums",
      "slurb",
      "slurs",
      "sluse",
      "sluts",
      "slyer",
      "slype",
      "smaak",
      "smaik",
      "smalm",
      "smalt",
      "smarm",
      "smaze",
      "smeek",
      "smees",
      "smeik",
      "smeke",
      "smerk",
      "smews",
      "smirr",
      "smirs",
      "smits",
      "smogs",
      "smoko",
      "smolt",
      "smoor",
      "smoot",
      "smore",
      "smorg",
      "smout",
      "smowt",
      "smugs",
      "smurs",
      "smush",
      "smuts",
      "snabs",
      "snafu",
      "snags",
      "snaps",
      "snarf",
      "snark",
      "snars",
      "snary",
      "snash",
      "snath",
      "snaws",
      "snead",
      "sneap",
      "snebs",
      "sneck",
      "sneds",
      "sneed",
      "snees",
      "snell",
      "snibs",
      "snick",
      "snies",
      "snift",
      "snigs",
      "snips",
      "snipy",
      "snirt",
      "snits",
      "snobs",
      "snods",
      "snoek",
      "snoep",
      "snogs",
      "snoke",
      "snood",
      "snook",
      "snool",
      "snoot",
      "snots",
      "snowk",
      "snows",
      "snubs",
      "snugs",
      "snush",
      "snyes",
      "soaks",
      "soaps",
      "soare",
      "soars",
      "soave",
      "sobas",
      "socas",
      "soces",
      "socko",
      "socks",
      "socle",
      "sodas",
      "soddy",
      "sodic",
      "sodom",
      "sofar",
      "sofas",
      "softa",
      "softs",
      "softy",
      "soger",
      "sohur",
      "soils",
      "soily",
      "sojas",
      "sojus",
      "sokah",
      "soken",
      "sokes",
      "sokol",
      "solah",
      "solan",
      "solas",
      "solde",
      "soldi",
      "soldo",
      "solds",
      "soled",
      "solei",
      "soler",
      "soles",
      "solon",
      "solos",
      "solum",
      "solus",
      "soman",
      "somas",
      "sonce",
      "sonde",
      "sones",
      "songs",
      "sonly",
      "sonne",
      "sonny",
      "sonse",
      "sonsy",
      "sooey",
      "sooks",
      "sooky",
      "soole",
      "sools",
      "sooms",
      "soops",
      "soote",
      "soots",
      "sophs",
      "sophy",
      "sopor",
      "soppy",
      "sopra",
      "soral",
      "soras",
      "sorbo",
      "sorbs",
      "sorda",
      "sordo",
      "sords",
      "sored",
      "soree",
      "sorel",
      "sorer",
      "sores",
      "sorex",
      "sorgo",
      "sorns",
      "sorra",
      "sorta",
      "sorts",
      "sorus",
      "soths",
      "sotol",
      "souce",
      "souct",
      "sough",
      "souks",
      "souls",
      "soums",
      "soups",
      "soupy",
      "sours",
      "souse",
      "souts",
      "sowar",
      "sowce",
      "sowed",
      "sowff",
      "sowfs",
      "sowle",
      "sowls",
      "sowms",
      "sownd",
      "sowne",
      "sowps",
      "sowse",
      "sowth",
      "soyas",
      "soyle",
      "soyuz",
      "sozin",
      "spacy",
      "spado",
      "spaed",
      "spaer",
      "spaes",
      "spags",
      "spahi",
      "spail",
      "spain",
      "spait",
      "spake",
      "spald",
      "spale",
      "spall",
      "spalt",
      "spams",
      "spane",
      "spang",
      "spans",
      "spard",
      "spars",
      "spart",
      "spate",
      "spats",
      "spaul",
      "spawl",
      "spaws",
      "spayd",
      "spays",
      "spaza",
      "spazz",
      "speal",
      "spean",
      "speat",
      "specs",
      "spect",
      "speel",
      "speer",
      "speil",
      "speir",
      "speks",
      "speld",
      "spelk",
      "speos",
      "spets",
      "speug",
      "spews",
      "spewy",
      "spial",
      "spica",
      "spick",
      "spics",
      "spide",
      "spier",
      "spies",
      "spiff",
      "spifs",
      "spiks",
      "spile",
      "spims",
      "spina",
      "spink",
      "spins",
      "spirt",
      "spiry",
      "spits",
      "spitz",
      "spivs",
      "splay",
      "splog",
      "spode",
      "spods",
      "spoom",
      "spoor",
      "spoot",
      "spork",
      "sposh",
      "spots",
      "sprad",
      "sprag",
      "sprat",
      "spred",
      "sprew",
      "sprit",
      "sprod",
      "sprog",
      "sprue",
      "sprug",
      "spuds",
      "spued",
      "spuer",
      "spues",
      "spugs",
      "spule",
      "spume",
      "spumy",
      "spurs",
      "sputa",
      "spyal",
      "spyre",
      "squab",
      "squaw",
      "squeg",
      "squid",
      "squit",
      "squiz",
      "stabs",
      "stade",
      "stags",
      "stagy",
      "staig",
      "stane",
      "stang",
      "staph",
      "staps",
      "starn",
      "starr",
      "stars",
      "stats",
      "staun",
      "staws",
      "stays",
      "stean",
      "stear",
      "stedd",
      "stede",
      "steds",
      "steek",
      "steem",
      "steen",
      "steil",
      "stela",
      "stele",
      "stell",
      "steme",
      "stems",
      "stend",
      "steno",
      "stens",
      "stent",
      "steps",
      "stept",
      "stere",
      "stets",
      "stews",
      "stewy",
      "steys",
      "stich",
      "stied",
      "sties",
      "stilb",
      "stile",
      "stime",
      "stims",
      "stimy",
      "stipa",
      "stipe",
      "stire",
      "stirk",
      "stirp",
      "stirs",
      "stive",
      "stivy",
      "stoae",
      "stoai",
      "stoas",
      "stoat",
      "stobs",
      "stoep",
      "stogy",
      "stoit",
      "stoln",
      "stoma",
      "stond",
      "stong",
      "stonk",
      "stonn",
      "stook",
      "stoor",
      "stope",
      "stops",
      "stopt",
      "stoss",
      "stots",
      "stott",
      "stoun",
      "stoup",
      "stour",
      "stown",
      "stowp",
      "stows",
      "strad",
      "strae",
      "strag",
      "strak",
      "strep",
      "strew",
      "stria",
      "strig",
      "strim",
      "strop",
      "strow",
      "stroy",
      "strum",
      "stubs",
      "stude",
      "studs",
      "stull",
      "stulm",
      "stumm",
      "stums",
      "stuns",
      "stupa",
      "stupe",
      "sture",
      "sturt",
      "styed",
      "styes",
      "styli",
      "stylo",
      "styme",
      "stymy",
      "styre",
      "styte",
      "subah",
      "subas",
      "subby",
      "suber",
      "subha",
      "succi",
      "sucks",
      "sucky",
      "sucre",
      "sudds",
      "sudor",
      "sudsy",
      "suede",
      "suent",
      "suers",
      "suete",
      "suets",
      "suety",
      "sugan",
      "sughs",
      "sugos",
      "suhur",
      "suids",
      "suint",
      "suits",
      "sujee",
      "sukhs",
      "sukuk",
      "sulci",
      "sulfa",
      "sulfo",
      "sulks",
      "sulph",
      "sulus",
      "sumis",
      "summa",
      "sumos",
      "sumph",
      "sumps",
      "sunis",
      "sunks",
      "sunna",
      "sunns",
      "sunup",
      "supes",
      "supra",
      "surah",
      "sural",
      "suras",
      "surat",
      "surds",
      "sured",
      "sures",
      "surfs",
      "surfy",
      "surgy",
      "surra",
      "sused",
      "suses",
      "susus",
      "sutor",
      "sutra",
      "sutta",
      "swabs",
      "swack",
      "swads",
      "swage",
      "swags",
      "swail",
      "swain",
      "swale",
      "swaly",
      "swamy",
      "swang",
      "swank",
      "swans",
      "swaps",
      "swapt",
      "sward",
      "sware",
      "swarf",
      "swart",
      "swats",
      "swayl",
      "sways",
      "sweal",
      "swede",
      "sweed",
      "sweel",
      "sweer",
      "swees",
      "sweir",
      "swelt",
      "swerf",
      "sweys",
      "swies",
      "swigs",
      "swile",
      "swims",
      "swink",
      "swipe",
      "swire",
      "swiss",
      "swith",
      "swits",
      "swive",
      "swizz",
      "swobs",
      "swole",
      "swoln",
      "swops",
      "swopt",
      "swots",
      "swoun",
      "sybbe",
      "sybil",
      "syboe",
      "sybow",
      "sycee",
      "syces",
      "sycon",
      "syens",
      "syker",
      "sykes",
      "sylis",
      "sylph",
      "sylva",
      "symar",
      "synch",
      "syncs",
      "synds",
      "syned",
      "synes",
      "synth",
      "syped",
      "sypes",
      "syphs",
      "syrah",
      "syren",
      "sysop",
      "sythe",
      "syver",
      "taals",
      "taata",
      "taber",
      "tabes",
      "tabid",
      "tabis",
      "tabla",
      "tabor",
      "tabun",
      "tabus",
      "tacan",
      "taces",
      "tacet",
      "tache",
      "tacho",
      "tachs",
      "tacks",
      "tacos",
      "tacts",
      "taels",
      "tafia",
      "taggy",
      "tagma",
      "tahas",
      "tahrs",
      "taiga",
      "taigs",
      "taiko",
      "tails",
      "tains",
      "taira",
      "taish",
      "taits",
      "tajes",
      "takas",
      "takes",
      "takhi",
      "takin",
      "takis",
      "takky",
      "talak",
      "talaq",
      "talar",
      "talas",
      "talcs",
      "talcy",
      "talea",
      "taler",
      "tales",
      "talks",
      "talky",
      "talls",
      "talma",
      "talpa",
      "taluk",
      "talus",
      "tamal",
      "tamed",
      "tames",
      "tamin",
      "tamis",
      "tammy",
      "tamps",
      "tanas",
      "tanga",
      "tangi",
      "tangs",
      "tanhs",
      "tanka",
      "tanks",
      "tanky",
      "tanna",
      "tansy",
      "tanti",
      "tanto",
      "tanty",
      "tapas",
      "taped",
      "tapen",
      "tapes",
      "tapet",
      "tapis",
      "tappa",
      "tapus",
      "taras",
      "tardo",
      "tared",
      "tares",
      "targa",
      "targe",
      "tarns",
      "taroc",
      "tarok",
      "taros",
      "tarps",
      "tarre",
      "tarry",
      "tarsi",
      "tarts",
      "tarty",
      "tasar",
      "tased",
      "taser",
      "tases",
      "tasks",
      "tassa",
      "tasse",
      "tasso",
      "tatar",
      "tater",
      "tates",
      "taths",
      "tatie",
      "tatou",
      "tatts",
      "tatus",
      "taube",
      "tauld",
      "tauon",
      "taupe",
      "tauts",
      "tavah",
      "tavas",
      "taver",
      "tawai",
      "tawas",
      "tawed",
      "tawer",
      "tawie",
      "tawse",
      "tawts",
      "taxed",
      "taxer",
      "taxes",
      "taxis",
      "taxol",
      "taxon",
      "taxor",
      "taxus",
      "tayra",
      "tazza",
      "tazze",
      "teade",
      "teads",
      "teaed",
      "teaks",
      "teals",
      "teams",
      "tears",
      "teats",
      "teaze",
      "techs",
      "techy",
      "tecta",
      "teels",
      "teems",
      "teend",
      "teene",
      "teens",
      "teeny",
      "teers",
      "teffs",
      "teggs",
      "tegua",
      "tegus",
      "tehrs",
      "teiid",
      "teils",
      "teind",
      "teins",
      "telae",
      "telco",
      "teles",
      "telex",
      "telia",
      "telic",
      "tells",
      "telly",
      "teloi",
      "telos",
      "temed",
      "temes",
      "tempi",
      "temps",
      "tempt",
      "temse",
      "tench",
      "tends",
      "tendu",
      "tenes",
      "tenge",
      "tenia",
      "tenne",
      "tenno",
      "tenny",
      "tenon",
      "tents",
      "tenty",
      "tenue",
      "tepal",
      "tepas",
      "tepoy",
      "terai",
      "teras",
      "terce",
      "terek",
      "teres",
      "terfe",
      "terfs",
      "terga",
      "terms",
      "terne",
      "terns",
      "terry",
      "terts",
      "tesla",
      "testa",
      "teste",
      "tests",
      "tetes",
      "teths",
      "tetra",
      "tetri",
      "teuch",
      "teugh",
      "tewed",
      "tewel",
      "tewit",
      "texas",
      "texes",
      "texts",
      "thack",
      "thagi",
      "thaim",
      "thale",
      "thali",
      "thana",
      "thane",
      "thang",
      "thans",
      "thanx",
      "tharm",
      "thars",
      "thaws",
      "thawy",
      "thebe",
      "theca",
      "theed",
      "theek",
      "thees",
      "thegn",
      "theic",
      "thein",
      "thelf",
      "thema",
      "thens",
      "theow",
      "therm",
      "thesp",
      "thete",
      "thews",
      "thewy",
      "thigs",
      "thilk",
      "thill",
      "thine",
      "thins",
      "thiol",
      "thirl",
      "thoft",
      "thole",
      "tholi",
      "thoro",
      "thorp",
      "thous",
      "thowl",
      "thrae",
      "thraw",
      "thrid",
      "thrip",
      "throe",
      "thuds",
      "thugs",
      "thuja",
      "thunk",
      "thurl",
      "thuya",
      "thymi",
      "thymy",
      "tians",
      "tiars",
      "tical",
      "ticca",
      "ticed",
      "tices",
      "tichy",
      "ticks",
      "ticky",
      "tiddy",
      "tided",
      "tides",
      "tiers",
      "tiffs",
      "tifos",
      "tifts",
      "tiges",
      "tigon",
      "tikas",
      "tikes",
      "tikis",
      "tikka",
      "tilak",
      "tiled",
      "tiler",
      "tiles",
      "tills",
      "tilly",
      "tilth",
      "tilts",
      "timbo",
      "timed",
      "times",
      "timon",
      "timps",
      "tinas",
      "tinct",
      "tinds",
      "tinea",
      "tined",
      "tines",
      "tinge",
      "tings",
      "tinks",
      "tinny",
      "tints",
      "tinty",
      "tipis",
      "tippy",
      "tired",
      "tires",
      "tirls",
      "tiros",
      "tirrs",
      "titch",
      "titer",
      "titis",
      "titre",
      "titty",
      "titup",
      "tiyin",
      "tiyns",
      "tizes",
      "tizzy",
      "toads",
      "toady",
      "toaze",
      "tocks",
      "tocky",
      "tocos",
      "todde",
      "toeas",
      "toffs",
      "toffy",
      "tofts",
      "tofus",
      "togae",
      "togas",
      "toged",
      "toges",
      "togue",
      "tohos",
      "toile",
      "toils",
      "toing",
      "toise",
      "toits",
      "tokay",
      "toked",
      "toker",
      "tokes",
      "tokos",
      "tolan",
      "tolar",
      "tolas",
      "toled",
      "toles",
      "tolls",
      "tolly",
      "tolts",
      "tolus",
      "tolyl",
      "toman",
      "tombs",
      "tomes",
      "tomia",
      "tommy",
      "tomos",
      "tondi",
      "tondo",
      "toned",
      "toner",
      "tones",
      "toney",
      "tongs",
      "tonka",
      "tonks",
      "tonne",
      "tonus",
      "tools",
      "tooms",
      "toons",
      "toots",
      "toped",
      "topee",
      "topek",
      "toper",
      "topes",
      "tophe",
      "tophi",
      "tophs",
      "topis",
      "topoi",
      "topos",
      "toppy",
      "toque",
      "torah",
      "toran",
      "toras",
      "torcs",
      "tores",
      "toric",
      "torii",
      "toros",
      "torot",
      "torrs",
      "torse",
      "torsi",
      "torsk",
      "torta",
      "torte",
      "torts",
      "tosas",
      "tosed",
      "toses",
      "toshy",
      "tossy",
      "toted",
      "toter",
      "totes",
      "totty",
      "touks",
      "touns",
      "tours",
      "touse",
      "tousy",
      "touts",
      "touze",
      "touzy",
      "towed",
      "towie",
      "towns",
      "towny",
      "towse",
      "towsy",
      "towts",
      "towze",
      "towzy",
      "toyed",
      "toyer",
      "toyon",
      "toyos",
      "tozed",
      "tozes",
      "tozie",
      "trabs",
      "trads",
      "tragi",
      "traik",
      "trams",
      "trank",
      "tranq",
      "trans",
      "trant",
      "trape",
      "traps",
      "trapt",
      "trass",
      "trats",
      "tratt",
      "trave",
      "trayf",
      "trays",
      "treck",
      "treed",
      "treen",
      "trees",
      "trefa",
      "treif",
      "treks",
      "trema",
      "trems",
      "tress",
      "trest",
      "trets",
      "trews",
      "treyf",
      "treys",
      "triac",
      "tride",
      "trier",
      "tries",
      "triff",
      "trigo",
      "trigs",
      "trike",
      "trild",
      "trill",
      "trims",
      "trine",
      "trins",
      "triol",
      "trior",
      "trios",
      "trips",
      "tripy",
      "trist",
      "troad",
      "troak",
      "troat",
      "trock",
      "trode",
      "trods",
      "trogs",
      "trois",
      "troke",
      "tromp",
      "trona",
      "tronc",
      "trone",
      "tronk",
      "trons",
      "trooz",
      "troth",
      "trots",
      "trows",
      "troys",
      "trued",
      "trues",
      "trugo",
      "trugs",
      "trull",
      "tryer",
      "tryke",
      "tryma",
      "tryps",
      "tsade",
      "tsadi",
      "tsars",
      "tsked",
      "tsuba",
      "tsubo",
      "tuans",
      "tuart",
      "tuath",
      "tubae",
      "tubar",
      "tubas",
      "tubby",
      "tubed",
      "tubes",
      "tucks",
      "tufas",
      "tuffe",
      "tuffs",
      "tufts",
      "tufty",
      "tugra",
      "tuile",
      "tuina",
      "tuism",
      "tuktu",
      "tules",
      "tulpa",
      "tulsi",
      "tumid",
      "tummy",
      "tumps",
      "tumpy",
      "tunas",
      "tunds",
      "tuned",
      "tuner",
      "tunes",
      "tungs",
      "tunny",
      "tupek",
      "tupik",
      "tuple",
      "tuque",
      "turds",
      "turfs",
      "turfy",
      "turks",
      "turme",
      "turms",
      "turns",
      "turnt",
      "turps",
      "turrs",
      "tushy",
      "tusks",
      "tusky",
      "tutee",
      "tutti",
      "tutty",
      "tutus",
      "tuxes",
      "tuyer",
      "twaes",
      "twain",
      "twals",
      "twank",
      "twats",
      "tways",
      "tweel",
      "tween",
      "tweep",
      "tweer",
      "twerk",
      "twerp",
      "twier",
      "twigs",
      "twill",
      "twilt",
      "twink",
      "twins",
      "twiny",
      "twire",
      "twirp",
      "twite",
      "twits",
      "twoer",
      "twyer",
      "tyees",
      "tyers",
      "tyiyn",
      "tykes",
      "tyler",
      "tymps",
      "tynde",
      "tyned",
      "tynes",
      "typal",
      "typed",
      "types",
      "typey",
      "typic",
      "typos",
      "typps",
      "typto",
      "tyran",
      "tyred",
      "tyres",
      "tyros",
      "tythe",
      "tzars",
      "udals",
      "udons",
      "ugali",
      "ugged",
      "uhlan",
      "uhuru",
      "ukase",
      "ulama",
      "ulans",
      "ulema",
      "ulmin",
      "ulnad",
      "ulnae",
      "ulnar",
      "ulnas",
      "ulpan",
      "ulvas",
      "ulyie",
      "ulzie",
      "umami",
      "umbel",
      "umber",
      "umble",
      "umbos",
      "umbre",
      "umiac",
      "umiak",
      "umiaq",
      "ummah",
      "ummas",
      "ummed",
      "umped",
      "umphs",
      "umpie",
      "umpty",
      "umrah",
      "umras",
      "unais",
      "unapt",
      "unarm",
      "unary",
      "unaus",
      "unbag",
      "unban",
      "unbar",
      "unbed",
      "unbid",
      "unbox",
      "uncap",
      "unces",
      "uncia",
      "uncos",
      "uncoy",
      "uncus",
      "undam",
      "undee",
      "undos",
      "undug",
      "uneth",
      "unfix",
      "ungag",
      "unget",
      "ungod",
      "ungot",
      "ungum",
      "unhat",
      "unhip",
      "unica",
      "units",
      "unjam",
      "unked",
      "unket",
      "unkid",
      "unlaw",
      "unlay",
      "unled",
      "unlet",
      "unlid",
      "unman",
      "unmew",
      "unmix",
      "unpay",
      "unpeg",
      "unpen",
      "unpin",
      "unred",
      "unrid",
      "unrig",
      "unrip",
      "unsaw",
      "unsay",
      "unsee",
      "unsew",
      "unsex",
      "unsod",
      "untax",
      "untin",
      "unwet",
      "unwit",
      "unwon",
      "upbow",
      "upbye",
      "updos",
      "updry",
      "upend",
      "upjet",
      "uplay",
      "upled",
      "uplit",
      "upped",
      "upran",
      "uprun",
      "upsee",
      "upsey",
      "uptak",
      "upter",
      "uptie",
      "uraei",
      "urali",
      "uraos",
      "urare",
      "urari",
      "urase",
      "urate",
      "urbex",
      "urbia",
      "urdee",
      "ureal",
      "ureas",
      "uredo",
      "ureic",
      "urena",
      "urent",
      "urged",
      "urger",
      "urges",
      "urial",
      "urite",
      "urman",
      "urnal",
      "urned",
      "urped",
      "ursae",
      "ursid",
      "urson",
      "urubu",
      "urvas",
      "users",
      "usnea",
      "usque",
      "usure",
      "usury",
      "uteri",
      "uveal",
      "uveas",
      "uvula",
      "vacua",
      "vaded",
      "vades",
      "vagal",
      "vagus",
      "vails",
      "vaire",
      "vairs",
      "vairy",
      "vakas",
      "vakil",
      "vales",
      "valis",
      "valse",
      "vamps",
      "vampy",
      "vanda",
      "vaned",
      "vanes",
      "vangs",
      "vants",
      "vaped",
      "vaper",
      "vapes",
      "varan",
      "varas",
      "vardy",
      "varec",
      "vares",
      "varia",
      "varix",
      "varna",
      "varus",
      "varve",
      "vasal",
      "vases",
      "vasts",
      "vasty",
      "vatic",
      "vatus",
      "vauch",
      "vaute",
      "vauts",
      "vawte",
      "vaxes",
      "veale",
      "veals",
      "vealy",
      "veena",
      "veeps",
      "veers",
      "veery",
      "vegas",
      "veges",
      "vegie",
      "vegos",
      "vehme",
      "veils",
      "veily",
      "veins",
      "veiny",
      "velar",
      "velds",
      "veldt",
      "veles",
      "vells",
      "velum",
      "venae",
      "venal",
      "vends",
      "vendu",
      "veney",
      "venge",
      "venin",
      "vents",
      "venus",
      "verbs",
      "verra",
      "verry",
      "verst",
      "verts",
      "vertu",
      "vespa",
      "vesta",
      "vests",
      "vetch",
      "vexed",
      "vexer",
      "vexes",
      "vexil",
      "vezir",
      "vials",
      "viand",
      "vibes",
      "vibex",
      "vibey",
      "viced",
      "vices",
      "vichy",
      "viers",
      "views",
      "viewy",
      "vifda",
      "viffs",
      "vigas",
      "vigia",
      "vilde",
      "viler",
      "villi",
      "vills",
      "vimen",
      "vinal",
      "vinas",
      "vinca",
      "vined",
      "viner",
      "vines",
      "vinew",
      "vinic",
      "vinos",
      "vints",
      "viold",
      "viols",
      "vired",
      "vireo",
      "vires",
      "virga",
      "virge",
      "virid",
      "virls",
      "virtu",
      "visas",
      "vised",
      "vises",
      "visie",
      "visne",
      "vison",
      "visto",
      "vitae",
      "vitas",
      "vitex",
      "vitro",
      "vitta",
      "vivas",
      "vivat",
      "vivda",
      "viver",
      "vives",
      "vizir",
      "vizor",
      "vleis",
      "vlies",
      "vlogs",
      "voars",
      "vocab",
      "voces",
      "voddy",
      "vodou",
      "vodun",
      "voema",
      "vogie",
      "voids",
      "voile",
      "voips",
      "volae",
      "volar",
      "voled",
      "voles",
      "volet",
      "volks",
      "volta",
      "volte",
      "volti",
      "volts",
      "volva",
      "volve",
      "vomer",
      "voted",
      "votes",
      "vouge",
      "voulu",
      "vowed",
      "vower",
      "voxel",
      "vozhd",
      "vraic",
      "vrils",
      "vroom",
      "vrous",
      "vrouw",
      "vrows",
      "vuggs",
      "vuggy",
      "vughs",
      "vughy",
      "vulgo",
      "vulns",
      "vulva",
      "vutty",
      "waacs",
      "wacke",
      "wacko",
      "wacks",
      "wadds",
      "waddy",
      "waded",
      "wader",
      "wades",
      "wadge",
      "wadis",
      "wadts",
      "waffs",
      "wafts",
      "waged",
      "wages",
      "wagga",
      "wagyu",
      "wahoo",
      "waide",
      "waifs",
      "waift",
      "wails",
      "wains",
      "wairs",
      "waite",
      "waits",
      "wakas",
      "waked",
      "waken",
      "waker",
      "wakes",
      "wakfs",
      "waldo",
      "walds",
      "waled",
      "waler",
      "wales",
      "walie",
      "walis",
      "walks",
      "walla",
      "walls",
      "wally",
      "walty",
      "wamed",
      "wames",
      "wamus",
      "wands",
      "waned",
      "wanes",
      "waney",
      "wangs",
      "wanks",
      "wanky",
      "wanle",
      "wanly",
      "wanna",
      "wants",
      "wanty",
      "wanze",
      "waqfs",
      "warbs",
      "warby",
      "wards",
      "wared",
      "wares",
      "warez",
      "warks",
      "warms",
      "warns",
      "warps",
      "warre",
      "warst",
      "warts",
      "wases",
      "washy",
      "wasms",
      "wasps",
      "waspy",
      "wasts",
      "watap",
      "watts",
      "wauff",
      "waugh",
      "wauks",
      "waulk",
      "wauls",
      "waurs",
      "waved",
      "waves",
      "wavey",
      "wawas",
      "wawes",
      "wawls",
      "waxed",
      "waxer",
      "waxes",
      "wayed",
      "wazir",
      "wazoo",
      "weald",
      "weals",
      "weamb",
      "weans",
      "wears",
      "webby",
      "weber",
      "wecht",
      "wedel",
      "wedgy",
      "weeds",
      "weeke",
      "weeks",
      "weels",
      "weems",
      "weens",
      "weeny",
      "weeps",
      "weepy",
      "weest",
      "weete",
      "weets",
      "wefte",
      "wefts",
      "weids",
      "weils",
      "weirs",
      "weise",
      "weize",
      "wekas",
      "welds",
      "welke",
      "welks",
      "welkt",
      "wells",
      "welly",
      "welts",
      "wembs",
      "wench",
      "wends",
      "wenge",
      "wenny",
      "wents",
      "weros",
      "wersh",
      "wests",
      "wetas",
      "wetly",
      "wexed",
      "wexes",
      "whamo",
      "whams",
      "whang",
      "whaps",
      "whare",
      "whata",
      "whats",
      "whaup",
      "whaur",
      "wheal",
      "whear",
      "wheen",
      "wheep",
      "wheft",
      "whelk",
      "whelm",
      "whens",
      "whets",
      "whews",
      "wheys",
      "whids",
      "whift",
      "whigs",
      "whilk",
      "whims",
      "whins",
      "whios",
      "whips",
      "whipt",
      "whirr",
      "whirs",
      "whish",
      "whiss",
      "whist",
      "whits",
      "whity",
      "whizz",
      "whomp",
      "whoof",
      "whoot",
      "whops",
      "whore",
      "whorl",
      "whort",
      "whoso",
      "whows",
      "whump",
      "whups",
      "whyda",
      "wicca",
      "wicks",
      "wicky",
      "widdy",
      "wides",
      "wiels",
      "wifed",
      "wifes",
      "wifey",
      "wifie",
      "wifty",
      "wigan",
      "wigga",
      "wiggy",
      "wikis",
      "wilco",
      "wilds",
      "wiled",
      "wiles",
      "wilga",
      "wilis",
      "wilja",
      "wills",
      "wilts",
      "wimps",
      "winds",
      "wined",
      "wines",
      "winey",
      "winge",
      "wings",
      "wingy",
      "winks",
      "winna",
      "winns",
      "winos",
      "winze",
      "wiped",
      "wiper",
      "wipes",
      "wired",
      "wirer",
      "wires",
      "wirra",
      "wised",
      "wises",
      "wisha",
      "wisht",
      "wisps",
      "wists",
      "witan",
      "wited",
      "wites",
      "withe",
      "withs",
      "withy",
      "wived",
      "wiver",
      "wives",
      "wizen",
      "wizes",
      "woads",
      "woald",
      "wocks",
      "wodge",
      "woful",
      "wojus",
      "woker",
      "wokka",
      "wolds",
      "wolfs",
      "wolly",
      "wolve",
      "wombs",
      "womby",
      "womyn",
      "wonga",
      "wongi",
      "wonks",
      "wonky",
      "wonts",
      "woods",
      "wooed",
      "woofs",
      "woofy",
      "woold",
      "wools",
      "woons",
      "woops",
      "woopy",
      "woose",
      "woosh",
      "wootz",
      "words",
      "works",
      "worms",
      "wormy",
      "worts",
      "wowed",
      "wowee",
      "woxen",
      "wrang",
      "wraps",
      "wrapt",
      "wrast",
      "wrate",
      "wrawl",
      "wrens",
      "wrick",
      "wried",
      "wrier",
      "wries",
      "writs",
      "wroke",
      "wroot",
      "wroth",
      "wryer",
      "wuddy",
      "wudus",
      "wulls",
      "wurst",
      "wuses",
      "wushu",
      "wussy",
      "wuxia",
      "wyled",
      "wyles",
      "wynds",
      "wynns",
      "wyted",
      "wytes",
      "xebec",
      "xenia",
      "xenic",
      "xenon",
      "xeric",
      "xerox",
      "xerus",
      "xoana",
      "xrays",
      "xylan",
      "xylem",
      "xylic",
      "xylol",
      "xylyl",
      "xysti",
      "xysts",
      "yaars",
      "yabas",
      "yabba",
      "yabby",
      "yacca",
      "yacka",
      "yacks",
      "yaffs",
      "yager",
      "yages",
      "yagis",
      "yahoo",
      "yaird",
      "yakka",
      "yakow",
      "yales",
      "yamen",
      "yampy",
      "yamun",
      "yangs",
      "yanks",
      "yapok",
      "yapon",
      "yapps",
      "yappy",
      "yarak",
      "yarco",
      "yards",
      "yarer",
      "yarfa",
      "yarks",
      "yarns",
      "yarrs",
      "yarta",
      "yarto",
      "yates",
      "yauds",
      "yauld",
      "yaups",
      "yawed",
      "yawey",
      "yawls",
      "yawns",
      "yawny",
      "yawps",
      "ybore",
      "yclad",
      "ycled",
      "ycond",
      "ydrad",
      "ydred",
      "yeads",
      "yeahs",
      "yealm",
      "yeans",
      "yeard",
      "years",
      "yecch",
      "yechs",
      "yechy",
      "yedes",
      "yeeds",
      "yeesh",
      "yeggs",
      "yelks",
      "yells",
      "yelms",
      "yelps",
      "yelts",
      "yenta",
      "yente",
      "yerba",
      "yerds",
      "yerks",
      "yeses",
      "yesks",
      "yests",
      "yesty",
      "yetis",
      "yetts",
      "yeuks",
      "yeuky",
      "yeven",
      "yeves",
      "yewen",
      "yexed",
      "yexes",
      "yfere",
      "yiked",
      "yikes",
      "yills",
      "yince",
      "yipes",
      "yippy",
      "yirds",
      "yirks",
      "yirrs",
      "yirth",
      "yites",
      "yitie",
      "ylems",
      "ylike",
      "ylkes",
      "ymolt",
      "ympes",
      "yobbo",
      "yobby",
      "yocks",
      "yodel",
      "yodhs",
      "yodle",
      "yogas",
      "yogee",
      "yoghs",
      "yogic",
      "yogin",
      "yogis",
      "yoick",
      "yojan",
      "yoked",
      "yokel",
      "yoker",
      "yokes",
      "yokul",
      "yolks",
      "yolky",
      "yomim",
      "yomps",
      "yonic",
      "yonis",
      "yonks",
      "yoofs",
      "yoops",
      "yores",
      "yorks",
      "yorps",
      "youks",
      "yourn",
      "yours",
      "yourt",
      "youse",
      "yowed",
      "yowes",
      "yowie",
      "yowls",
      "yowza",
      "yrapt",
      "yrent",
      "yrivd",
      "yrneh",
      "ysame",
      "ytost",
      "yuans",
      "yucas",
      "yucca",
      "yucch",
      "yucko",
      "yucks",
      "yucky",
      "yufts",
      "yugas",
      "yuked",
      "yukes",
      "yukky",
      "yukos",
      "yulan",
      "yules",
      "yummo",
      "yummy",
      "yumps",
      "yupon",
      "yuppy",
      "yurta",
      "yurts",
      "yuzus",
      "zabra",
      "zacks",
      "zaida",
      "zaidy",
      "zaire",
      "zakat",
      "zaman",
      "zambo",
      "zamia",
      "zanja",
      "zante",
      "zanza",
      "zanze",
      "zappy",
      "zarfs",
      "zaris",
      "zatis",
      "zaxes",
      "zayin",
      "zazen",
      "zeals",
      "zebec",
      "zebub",
      "zebus",
      "zedas",
      "zeins",
      "zendo",
      "zerda",
      "zerks",
      "zeros",
      "zests",
      "zetas",
      "zexes",
      "zezes",
      "zhomo",
      "zibet",
      "ziffs",
      "zigan",
      "zilas",
      "zilch",
      "zilla",
      "zills",
      "zimbi",
      "zimbs",
      "zinco",
      "zincs",
      "zincy",
      "zineb",
      "zines",
      "zings",
      "zingy",
      "zinke",
      "zinky",
      "zippo",
      "zippy",
      "ziram",
      "zitis",
      "zizel",
      "zizit",
      "zlote",
      "zloty",
      "zoaea",
      "zobos",
      "zobus",
      "zocco",
      "zoeae",
      "zoeal",
      "zoeas",
      "zoism",
      "zoist",
      "zombi",
      "zonae",
      "zonda",
      "zoned",
      "zoner",
      "zones",
      "zonks",
      "zooea",
      "zooey",
      "zooid",
      "zooks",
      "zooms",
      "zoons",
      "zooty",
      "zoppa",
      "zoppo",
      "zoril",
      "zoris",
      "zorro",
      "zouks",
      "zowee",
      "zowie",
      "zulus",
      "zupan",
      "zupas",
      "zuppa",
      "zurfs",
      "zuzim",
      "zygal",
      "zygon",
      "zymes",
      "zymic",
    ];
  var we = { unknown: 0, absent: 1, present: 2, correct: 3 };
  var ke = new Date(2021, 5, 19, 0, 0, 0, 0);
  function _e(e, t) {
    (e = new Date(e)),
      (e = new Date(t).setHours(0, 0, 0, 0) - e.setHours(0, 0, 0, 0));
    return Math.round(e / 864e5);
  }
  function ve(e) {
    return _e(ke, e);
  }
  function xe(e) {
    if (null === e) return "";
    e %= he.length;
    return he[e];
  }
  var Se = "abcdefghijklmnopqrstuvwxyz",
    ce = function (e) {
      return e.api;
    },
    ue = n.createSelector(ce, function (e) {
      return e.moogleGet;
    }),
    Ee = n.createSelector(ue, function (e) {
      return e.optedIn;
    }),
    je = n.createSelector(ce, function (e) {
      return e.moogleGet.error;
    }),
    ze = n.createSelector(ce, function (e) {
      return e.appLoaded;
    }),
    A = n.createSelector(ce, function (e) {
      return e.moogleGet.isLoading;
    }),
    ue = n.createSelector(ce, function (e) {
      return e.moogleGet.data;
    }),
    Ne = n.createSelector(ue, function (e) {
      return null == e ? void 0 : e.game_data;
    }),
    Ce = n.createSelector(ue, function (e) {
      return null == e ? void 0 : e.timestamp;
    }),
    Ae = n.createSelector(ue, function (e) {
      return null == e ? void 0 : e.user_id;
    }),
    Oe = n.createSelector([Ee, Ae, Ce], function (e, t, n) {
      return e && !!t && !n;
    }),
    Ie =
      (n.createSelector(ce, function (e) {
        return e.mooglePost.isLoading;
      }),
      n.createSelector(ce, function (e) {
        return e.mooglePost.error;
      })),
    Le = n.createSelector(ce, function (e) {
      return e.mooglePost.lastFailedSaveData;
    }),
    Te = n.createSelector(ce, function (e) {
      return e.profileInfo.data;
    }),
    Pe = n.createSelector(ce, function (e) {
      return e.profileInfo.isLoading;
    }),
    ue =
      (n.createSelector(ce, function (e) {
        return e.profileInfo.error;
      }),
      n.createSelector(ce, function (e) {
        return null == e ? void 0 : e.solution;
      })),
    ce = n.createSelector(ue, function (e) {
      return null == e ? void 0 : e.isLoading;
    }),
    ue = n.createSelector(ue, function (e) {
      return null == e ? void 0 : e.data;
    }),
    Me = n.createSelector(ue, function (e) {
      return (null == e ? void 0 : e.id) || 0;
    }),
    Be = n.createSelector(ue, function (e) {
      return (null == e ? void 0 : e.solution) || "";
    }),
    Re = n.createSelector(ue, function (e) {
      return (null == e ? void 0 : e.dayOffset) || 0;
    }),
    We =
      (n.createSelector([ce, A, Pe], function (e, t, n) {
        return e || t || n;
      }),
      6),
    He = 5,
    De = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"],
    ue = function (e) {
      return e.persist.game;
    },
    qe = n.createSelector(ue, function (e) {
      return e.boardState;
    }),
    Ge = n.createSelector(ue, function (e) {
      return e.status;
    }),
    Fe = n.createSelector(ue, function (e) {
      return e.currentRowIndex;
    }),
    Ve = n.createSelector([qe, Fe], function (e, t) {
      return e[t];
    }),
    Ye = n.createSelector(ue, function (e) {
      return e.dayOffset || null;
    }),
    Ue =
      (n.createSelector(ue, function (e) {
        return e.id;
      }),
      n.createSelector(ue, function (e) {
        return e.timestamps.lastPlayed;
      })),
    Ze = n.createSelector(ue, function (e) {
      return e.timestamps.lastCompleted;
    }),
    Xe = n.createSelector([qe, Fe, Be], function (e, n, a) {
      return e.map(function (e, t) {
        return n <= t
          ? null
          : (function (e, t) {
              for (
                var n = Array(t.length).fill("absent"),
                  a = Array(t.length).fill(!0),
                  o = Array(t.length).fill(!0),
                  r = 0;
                r < e.length;
                r += 1
              )
                e[r] === t[r] &&
                  o[r] &&
                  ((n[r] = "correct"), (a[r] = !1), (o[r] = !1));
              for (var s = 0; s < e.length; s += 1) {
                var i = e[s];
                if (a[s])
                  for (var l = 0; l < t.length; l += 1) {
                    var c = t[l];
                    if (o[l] && i === c) {
                      (n[s] = "present"), (o[l] = !1);
                      break;
                    }
                  }
              }
              return n;
            })(e, a);
      });
    }),
    Ke = "nyt-wordle-statistics",
    Je = {
      currentStreak: 0,
      maxStreak: 0,
      guesses: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, fail: 0 },
      winPercentage: 0,
      gamesPlayed: 0,
      gamesWon: 0,
      averageGuesses: 0,
    };
  function Qe(e, t) {
    return e === t || (e != e && t != t);
  }
  function $e(e, t) {
    for (var n = e.length; n--; ) if (Qe(e[n][0], t)) return n;
    return -1;
  }
  var et = Array.prototype.splice;
  function tt(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  function nt(e) {
    return (nt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  (tt.prototype.clear = function () {
    (this.__data__ = []), (this.size = 0);
  }),
    (tt.prototype.delete = function (e) {
      var t = this.__data__;
      return (
        !((e = $e(t, e)) < 0) &&
        (e == t.length - 1 ? t.pop() : et.call(t, e, 1), --this.size, !0)
      );
    }),
    (tt.prototype.get = function (e) {
      var t = this.__data__;
      return (e = $e(t, e)) < 0 ? void 0 : t[e][1];
    }),
    (tt.prototype.has = function (e) {
      return -1 < $e(this.__data__, e);
    }),
    (tt.prototype.set = function (e, t) {
      var n = this.__data__,
        a = $e(n, e);
      return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
    });
  ce =
    "object" == ("undefined" == typeof global ? "undefined" : nt(global)) &&
    global &&
    global.Object === Object &&
    global;
  function at(e) {
    return (at =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var A =
      "object" == ("undefined" == typeof self ? "undefined" : at(self)) &&
      self &&
      self.Object === Object &&
      self,
    ot = ce || A || Function("return this")(),
    ue = ot.Symbol,
    A = Object.prototype,
    rt = A.hasOwnProperty,
    st = A.toString,
    it = ue ? ue.toStringTag : void 0;
  var lt = Object.prototype.toString;
  var ct = "[object Null]",
    ut = "[object Undefined]",
    dt = ue ? ue.toStringTag : void 0;
  function mt(e) {
    return null == e
      ? void 0 === e
        ? ut
        : ct
      : dt && dt in Object(e)
      ? (function (e) {
          var t = rt.call(e, it),
            n = e[it];
          try {
            var a = !(e[it] = void 0);
          } catch (e) {}
          var o = st.call(e);
          return a && (t ? (e[it] = n) : delete e[it]), o;
        })(e)
      : lt.call(e);
  }
  function pt(e) {
    return (pt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function yt(e) {
    var t = pt(e);
    return null != e && ("object" == t || "function" == t);
  }
  var gt = "[object AsyncFunction]",
    ft = "[object Function]",
    ht = "[object GeneratorFunction]",
    bt = "[object Proxy]";
  function wt(e) {
    if (yt(e)) {
      e = mt(e);
      return e == ft || e == ht || e == gt || e == bt;
    }
  }
  var A = ot["__core-js_shared__"],
    kt = (ue = /[^.]+$/.exec((A && A.keys && A.keys.IE_PROTO) || ""))
      ? "Symbol(src)_1." + ue
      : "";
  var _t = Function.prototype.toString;
  var vt = /^\[object .+?Constructor\]$/,
    A = Function.prototype,
    ue = Object.prototype,
    A = A.toString,
    ue = ue.hasOwnProperty,
    xt = RegExp(
      "^" +
        A.call(ue)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function St(e) {
    var t;
    return (
      yt(e) &&
      ((t = e), !(kt && kt in t)) &&
      (wt(e) ? xt : vt).test(
        (function (e) {
          if (null != e) {
            try {
              return _t.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        })(e)
      )
    );
  }
  function Et(e, t) {
    (t = t), (t = null == (e = e) ? void 0 : e[t]);
    return St(t) ? t : void 0;
  }
  var jt = Et(ot, "Map"),
    zt = Et(Object, "create");
  var Nt = Object.prototype.hasOwnProperty;
  var Ct = Object.prototype.hasOwnProperty;
  function At(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  function Ot(e) {
    return (Ot =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function It(e, t) {
    var n,
      a = e.__data__;
    return (
      "string" == (e = Ot((n = t))) ||
      "number" == e ||
      "symbol" == e ||
      "boolean" == e
        ? "__proto__" !== n
        : null === n
    )
      ? a["string" == typeof t ? "string" : "hash"]
      : a.map;
  }
  function Lt(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (At.prototype.clear = function () {
    (this.__data__ = zt ? zt(null) : {}), (this.size = 0);
  }),
    (At.prototype.delete = function (e) {
      return (
        (e = this.has(e) && delete this.__data__[e]),
        (this.size -= e ? 1 : 0),
        e
      );
    }),
    (At.prototype.get = function (e) {
      var t = this.__data__;
      if (zt) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n;
      }
      return Nt.call(t, e) ? t[e] : void 0;
    }),
    (At.prototype.has = function (e) {
      var t = this.__data__;
      return zt ? void 0 !== t[e] : Ct.call(t, e);
    }),
    (At.prototype.set = function (e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = zt && void 0 === t ? "__lodash_hash_undefined__" : t),
        this
      );
    }),
    (Lt.prototype.clear = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new At(),
          map: new (jt || tt)(),
          string: new At(),
        });
    }),
    (Lt.prototype.delete = function (e) {
      return (e = It(this, e).delete(e)), (this.size -= e ? 1 : 0), e;
    }),
    (Lt.prototype.get = function (e) {
      return It(this, e).get(e);
    }),
    (Lt.prototype.has = function (e) {
      return It(this, e).has(e);
    }),
    (Lt.prototype.set = function (e, t) {
      var n = It(this, e),
        a = n.size;
      return n.set(e, t), (this.size += n.size == a ? 0 : 1), this;
    });
  function Tt(e) {
    e = this.__data__ = new tt(e);
    this.size = e.size;
  }
  (Tt.prototype.clear = function () {
    (this.__data__ = new tt()), (this.size = 0);
  }),
    (Tt.prototype.delete = function (e) {
      var t = this.__data__,
        e = t.delete(e);
      return (this.size = t.size), e;
    }),
    (Tt.prototype.get = function (e) {
      return this.__data__.get(e);
    }),
    (Tt.prototype.has = function (e) {
      return this.__data__.has(e);
    }),
    (Tt.prototype.set = function (e, t) {
      var n = this.__data__;
      if (n instanceof tt) {
        var a = n.__data__;
        if (!jt || a.length < 199)
          return a.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new Lt(a);
      }
      return n.set(e, t), (this.size = n.size), this;
    });
  var Pt = (function () {
    try {
      var e = Et(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch (e) {}
  })();
  function Mt(e, t, n) {
    "__proto__" == t && Pt
      ? Pt(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  function Bt(e, t, n) {
    ((void 0 === n || Qe(e[t], n)) && (void 0 !== n || t in e)) || Mt(e, t, n);
  }
  var Rt,
    Wt = function (e, t, n) {
      for (var a = -1, o = Object(e), r = n(e), s = r.length; s--; ) {
        var i = r[Rt ? s : ++a];
        if (!1 === t(o[i], i, o)) break;
      }
      return e;
    };
  function Ht(e) {
    return (Ht =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var A =
      "object" == ("undefined" == typeof exports ? "undefined" : Ht(exports)) &&
      exports &&
      !exports.nodeType &&
      exports,
    ue =
      A &&
      "object" == ("undefined" == typeof module ? "undefined" : Ht(module)) &&
      module &&
      !module.nodeType &&
      module,
    ue = ue && ue.exports === A ? ot.Buffer : void 0,
    Dt = ue ? ue.allocUnsafe : void 0;
  var qt = ot.Uint8Array;
  function Gt(e, t) {
    var n,
      n = t
        ? ((t = e.buffer),
          (n = new t.constructor(t.byteLength)),
          new qt(n).set(new qt(t)),
          n)
        : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var Ft = Object.create,
    Vt = function (e) {
      if (!yt(e)) return {};
      if (Ft) return Ft(e);
      Yt.prototype = e;
      e = new Yt();
      return (Yt.prototype = void 0), e;
    };
  function Yt() {}
  var Ut,
    Zt,
    Xt =
      ((Ut = Object.getPrototypeOf),
      (Zt = Object),
      function (e) {
        return Ut(Zt(e));
      }),
    Kt = Object.prototype;
  function Jt(e) {
    var t = e && e.constructor;
    return e === (("function" == typeof t && t.prototype) || Kt);
  }
  function Qt(e) {
    return (Qt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function $t(e) {
    return null != e && "object" == Qt(e);
  }
  function en(e) {
    return $t(e) && "[object Arguments]" == mt(e);
  }
  var A = Object.prototype,
    tn = A.hasOwnProperty,
    nn = A.propertyIsEnumerable,
    an = en(
      (function () {
        return arguments;
      })()
    )
      ? en
      : function (e) {
          return $t(e) && tn.call(e, "callee") && !nn.call(e, "callee");
        },
    on = Array.isArray,
    rn = 9007199254740991;
  function sn(e) {
    return "number" == typeof e && -1 < e && e % 1 == 0 && e <= rn;
  }
  function ln(e) {
    return null != e && sn(e.length) && !wt(e);
  }
  function cn(e) {
    return (cn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var ue =
      "object" == ("undefined" == typeof exports ? "undefined" : cn(exports)) &&
      exports &&
      !exports.nodeType &&
      exports,
    A =
      ue &&
      "object" == ("undefined" == typeof module ? "undefined" : cn(module)) &&
      module &&
      !module.nodeType &&
      module,
    A = A && A.exports === ue ? ot.Buffer : void 0,
    un =
      (A ? A.isBuffer : void 0) ||
      function () {
        return !1;
      },
    dn = "[object Object]",
    ue = Function.prototype,
    A = Object.prototype,
    mn = ue.toString,
    pn = A.hasOwnProperty,
    yn = mn.call(Object);
  var gn = {};
  function fn(e) {
    return (fn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  (gn["[object Float32Array]"] =
    gn["[object Float64Array]"] =
    gn["[object Int8Array]"] =
    gn["[object Int16Array]"] =
    gn["[object Int32Array]"] =
    gn["[object Uint8Array]"] =
    gn["[object Uint8ClampedArray]"] =
    gn["[object Uint16Array]"] =
    gn["[object Uint32Array]"] =
      !0),
    (gn["[object Arguments]"] =
      gn["[object Array]"] =
      gn["[object ArrayBuffer]"] =
      gn["[object Boolean]"] =
      gn["[object DataView]"] =
      gn["[object Date]"] =
      gn["[object Error]"] =
      gn["[object Function]"] =
      gn["[object Map]"] =
      gn["[object Number]"] =
      gn["[object Object]"] =
      gn["[object RegExp]"] =
      gn["[object Set]"] =
      gn["[object String]"] =
      gn["[object WeakMap]"] =
        !1);
  var hn,
    ue =
      "object" == ("undefined" == typeof exports ? "undefined" : fn(exports)) &&
      exports &&
      !exports.nodeType &&
      exports,
    bn =
      ue &&
      "object" == ("undefined" == typeof module ? "undefined" : fn(module)) &&
      module &&
      !module.nodeType &&
      module,
    wn = bn && bn.exports === ue && ce.process,
    A = (function () {
      try {
        var e = bn && bn.require && bn.require("util").types;
        return e ? e : wn && wn.binding && wn.binding("util");
      } catch (e) {}
    })(),
    ue = A && A.isTypedArray,
    kn = ue
      ? ((hn = ue),
        function (e) {
          return hn(e);
        })
      : function (e) {
          return $t(e) && sn(e.length) && !!gn[mt(e)];
        };
  function _n(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
      return e[t];
  }
  var vn = Object.prototype.hasOwnProperty;
  function xn(e, t, n, a) {
    var o = !n;
    n = n || {};
    for (var r, s, i = -1, l = t.length; ++i < l; ) {
      var c = t[i],
        u = a ? a(n[c], e[c], c, n, e) : void 0;
      void 0 === u && (u = e[c]),
        o
          ? Mt(n, c, u)
          : ((r = u),
            (s = void 0),
            (s = (u = n)[(c = c)]),
            (vn.call(u, c) && Qe(s, r) && (void 0 !== r || c in u)) ||
              Mt(u, c, r));
    }
    return n;
  }
  function Sn(e) {
    return (Sn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var En = 9007199254740991,
    jn = /^(?:0|[1-9]\d*)$/;
  function zn(e, t) {
    var n = Sn(e);
    return (
      (t = null == t ? En : t) &&
      ("number" == n || ("symbol" != n && jn.test(e))) &&
      -1 < e &&
      e % 1 == 0 &&
      e < t
    );
  }
  var Nn = Object.prototype.hasOwnProperty;
  function Cn(e, t) {
    var n,
      a = on(e),
      o = !a && an(e),
      r = !a && !o && un(e),
      s = !a && !o && !r && kn(e),
      i = a || o || r || s,
      l = i
        ? (function (e, t) {
            for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
            return a;
          })(e.length, String)
        : [],
      c = l.length;
    for (n in e)
      (!t && !Nn.call(e, n)) ||
        (i &&
          ("length" == n ||
            (r && ("offset" == n || "parent" == n)) ||
            (s && ("buffer" == n || "byteLength" == n || "byteOffset" == n)) ||
            zn(n, c))) ||
        l.push(n);
    return l;
  }
  var An = Object.prototype.hasOwnProperty;
  function On(e) {
    if (!yt(e))
      return (function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      })(e);
    var t,
      n = Jt(e),
      a = [];
    for (t in e) ("constructor" != t || (!n && An.call(e, t))) && a.push(t);
    return a;
  }
  function In(e) {
    return ln(e) ? Cn(e, !0) : On(e);
  }
  function Ln(e, t, n, a, o, r, s) {
    var i,
      l,
      c,
      u = _n(e, n),
      d = _n(t, n),
      m = s.get(d);
    m
      ? Bt(e, n, m)
      : ((i = void 0 === (l = r ? r(u, d, n + "", e, t, s) : void 0)) &&
          ((m = !(c = on(d)) && un(d)),
          (t = !c && !m && kn(d)),
          (l = d),
          c || m || t
            ? (l = on(u)
                ? u
                : $t((c = u)) && ln(c)
                ? (function (e, t) {
                    var n = -1,
                      a = e.length;
                    for (t = t || Array(a); ++n < a; ) t[n] = e[n];
                    return t;
                  })(u)
                : m
                ? ((c = d),
                  (m = !(i = !1))
                    ? c.slice()
                    : ((m = c.length),
                      (m = Dt ? Dt(m) : new c.constructor(m)),
                      c.copy(m),
                      m))
                : t
                ? Gt(d, !(i = !1))
                : [])
            : (function (e) {
                if ($t(e) && mt(e) == dn) {
                  e = Xt(e);
                  if (null === e) return 1;
                  e = pn.call(e, "constructor") && e.constructor;
                  return (
                    "function" == typeof e && e instanceof e && mn.call(e) == yn
                  );
                }
              })(d) || an(d)
            ? an((l = u))
              ? (l = xn(u, In(u)))
              : (yt(u) && !wt(u)) ||
                (l =
                  "function" != typeof (u = d).constructor || Jt(u)
                    ? {}
                    : Vt(Xt(u)))
            : (i = !1)),
        i && (s.set(d, l), o(l, d, a, r, s), s.delete(d)),
        Bt(e, n, l));
  }
  function Tn(a, o, r, s, i) {
    a !== o &&
      Wt(
        o,
        function (e, t) {
          var n;
          (i = i || new Tt()),
            yt(e)
              ? Ln(a, o, t, r, Tn, s, i)
              : ((n = s ? s(_n(a, t), e, t + "", a, o, i) : void 0),
                Bt(a, t, (n = void 0 === n ? e : n)));
        },
        In
      );
  }
  function Pn(e) {
    return e;
  }
  var Mn = Math.max;
  function Bn(r, s, i) {
    return (
      (s = Mn(void 0 === s ? r.length - 1 : s, 0)),
      function () {
        for (
          var e = arguments, t = -1, n = Mn(e.length - s, 0), a = Array(n);
          ++t < n;

        )
          a[t] = e[s + t];
        for (var t = -1, o = Array(s + 1); ++t < s; ) o[t] = e[t];
        return (
          (o[s] = i(a)),
          (function (e, t, n) {
            switch (n.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, n[0]);
              case 2:
                return e.call(t, n[0], n[1]);
              case 3:
                return e.call(t, n[0], n[1], n[2]);
            }
            return e.apply(t, n);
          })(r, this, o)
        );
      }
    );
  }
  var Rn = Date.now;
  var Wn,
    Hn,
    Dn,
    qn =
      ((Wn = Pt
        ? function (e, t) {
            return Pt(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                ((n = t),
                function () {
                  return n;
                }),
              writable: !0,
            });
            var n;
          }
        : Pn),
      (Dn = Hn = 0),
      function () {
        var e = Rn(),
          t = 16 - (e - Dn);
        if (((Dn = e), 0 < t)) {
          if (800 <= ++Hn) return arguments[0];
        } else Hn = 0;
        return Wn.apply(void 0, arguments);
      });
  function Gn(e) {
    return (Gn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var Fn,
    Vn,
    Yn,
    Un =
      ((Fn = function (e, t, n) {
        Tn(e, t, n);
      }),
      qn(
        Bn(
          (Vn = function (e, t) {
            var n = -1,
              a = t.length,
              o = 1 < a ? t[a - 1] : void 0,
              r = 2 < a ? t[2] : void 0,
              o = 3 < Fn.length && "function" == typeof o ? (a--, o) : void 0;
            for (
              r &&
                (function (e, t, n) {
                  if (yt(n)) {
                    var a = Gn(t);
                    return (
                      ("number" == a
                        ? ln(n) && zn(t, n.length)
                        : "string" == a && (t in n)) && Qe(n[t], e)
                    );
                  }
                })(t[0], t[1], r) &&
                ((o = a < 3 ? void 0 : o), (a = 1)),
                e = Object(e);
              ++n < a;

            ) {
              var s = t[n];
              s && Fn(e, s, n, o);
            }
            return e;
          }),
          Yn,
          Pn
        ),
        Vn + ""
      )),
    Zn = "nyt-wordle-state",
    Xn = {
      boardState: null,
      evaluations: null,
      rowIndex: null,
      solution: null,
      gameStatus: null,
      lastPlayedTs: null,
      lastCompletedTs: null,
      restoringFromLocalStorage: null,
      hardMode: !1,
    };
  function Kn(e) {
    var t,
      t =
        ((t = window.localStorage.getItem(Zn) || JSON.stringify(Xn)),
        JSON.parse(t));
    !(function (e) {
      try {
        window.localStorage.setItem(Zn, JSON.stringify(e));
      } catch (e) {
        console.error(e);
      }
    })(Un(t, e));
  }
  function Jn(e) {
    var t =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    try {
      var n = window.localStorage.getItem(e);
      return n ? JSON.parse(n) : t;
    } catch (e) {
      return console.error(e), v.captureSentryError(e), t;
    }
  }
  function Qn(e, t) {
    try {
      var n = ra(e, t);
      return Jn(n);
    } catch (e) {
      return null;
    }
  }
  function $n() {
    var e = Jn(Zn, Xn),
      t = (function () {
        try {
          var e = window.localStorage.getItem(Ke) || JSON.stringify(Je);
          return JSON.parse(e);
        } catch (e) {
          return (
            console.error("error retrieving stats", e),
            JSON.parse(JSON.stringify(Je))
          );
        }
      })(),
      n =
        !!window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
      a = Jn(aa, n),
      o = Jn(oa, !1);
    return {
      game: {
        id: (n = null != e && e.solution ? he.indexOf(e.solution) : null),
        dayOffset: n,
        boardState: (null == e ? void 0 : e.boardState) || Array(We).fill(""),
        currentRowIndex: (null == e ? void 0 : e.rowIndex) || 0,
        status: (null == e ? void 0 : e.gameStatus) || "IN_PROGRESS",
        timestamps: {
          lastPlayed: (null == e ? void 0 : e.lastPlayedTs) || null,
          lastCompleted: (null == e ? void 0 : e.lastCompletedTs) || null,
        },
      },
      settings: {
        hardMode: (null == e ? void 0 : e.hardMode) || !1,
        darkMode: a || !1,
        colorblindMode: o || !1,
      },
      stats: t,
    };
  }
  function ea(e, t) {
    try {
      return localStorage.getItem(e) || t;
    } catch (e) {
      return t;
    }
  }
  function ta(e) {
    var t = "nyt-wordle-moogle/".concat(e),
      n = ea("nyt-wordle-moogle/ANON", "[NONE]"),
      e = ea("nyt-wordle-statistics", "[NONE]");
    return { anon: n, regi: ea(t, "[NONE]"), stats: e };
  }
  function na(e) {
    return { type: la, payload: e };
  }
  var aa = "nyt-wordle-darkmode",
    oa = "nyt-wordle-cbmode",
    ra = function (e, t) {
      t = e && t ? t : "ANON";
      return "".concat("nyt-wordle-moogle", "/").concat(t);
    },
    sa = function (e, t) {
      try {
        return window.localStorage.setItem(e, JSON.stringify(t)), !0;
      } catch (e) {
        return console.error(e), v.captureSentryError(e), !1;
      }
    },
    ia = function (e) {
      return {
        boardState: e.persist.game.boardState,
        evaluations: Xe(e),
        rowIndex: e.persist.game.currentRowIndex,
        solution: xe(e.persist.game.dayOffset),
        gameStatus: e.persist.game.status,
        lastPlayedTs: e.persist.game.timestamps.lastPlayed,
        lastCompletedTs: e.persist.game.timestamps.lastCompleted,
      };
    },
    la = "wordle/moogle/SET_INITIAL_STATE",
    ca = function () {
      return function (e, t) {
        var n = t(),
          t = Oe(n),
          n = Ae(n);
        t && ((t = Qn(!0) || $n()), (n = ra(!0, n)), sa(n, t));
      };
    },
    ua = function () {
      return function (e, t) {
        var n = t(),
          a = Ne(n),
          o = Ae(n),
          t = Ce(n) || 0,
          n = Ee(n),
          n = Qn(n, o),
          o = (null == n ? void 0 : n.timestamp) || 0;
        return e(na(t && o <= t ? a : n || $n()));
      };
    },
    ce = function (e) {
      return e.transient;
    },
    A = n.createSelector(ce, function (e) {
      return e.isAnimatingRow;
    }),
    da = n.createSelector(ce, function (e) {
      return e.isRestoringSession;
    }),
    ma = n.createSelector(ce, function (e) {
      return e.lastRowInvalid;
    }),
    pa = n.createSelector(ce, function (e) {
      return e.lastRowWin;
    }),
    ya = n.createSelector([Ge, A, Fe], function (e, t, n) {
      return "IN_PROGRESS" !== e || t || We <= n;
    }),
    ga = n.createSelector([qe, Xe, Fe, A, da], function (e, t, n, a, o) {
      if (o) return {};
      var i,
        l,
        n = t.slice(0, a ? n - 1 : n);
      return (
        (i = n),
        (l = {}),
        e.forEach(function (e, t) {
          var n = i[t];
          if (n)
            for (var a = 0; a < e.length; a += 1) {
              var o = e[a],
                r = n[a],
                s = l[o] || "unknown";
              we[s] < we[r] && (l[o] = r);
            }
        }),
        l
      );
    }),
    fa = "wordle/game/START_GAME",
    ha = "wordle/game/CONTINUE_GAME",
    ba = "wordle/game/ADD_LETTER",
    wa = "wordle/game/BACKSPACE",
    ka = "wordle/game/EVALUATE_ROW",
    _a = function (e) {
      e.today;
      return function (e, t) {
        var n,
          a = Fe(t()),
          o = Ye(t()),
          r = Re(t());
        if (
          !(
            "prod" !==
              (null === (n = window.env) || void 0 === n ? void 0 : n.name) &&
            document.location.search.includes("reset")
          ) &&
          o &&
          o === r
        )
          return e({ type: ha, payload: { currentRowIndex: a } });
        e({ type: fa, payload: { id: Me(t()), numRows: We, dayOffset: r } });
      };
    },
    va = function (a) {
      return function (e, t) {
        var n = ya(t()),
          t = Ve(t());
        n || t.length >= He || e({ type: ba, payload: { letter: a } });
      };
    },
    xa = function () {
      return function (e, t) {
        ya(t()) || e({ type: wa });
      };
    },
    Sa = function () {
      return function (e, t) {
        var n = t(),
          a = ya(n),
          o = Ve(n),
          r = Be(n),
          s = qe(n),
          i = Xe(n),
          l = Fe(n),
          t = O(n),
          n = Ze(n);
        if (!a) {
          if (o.length !== He)
            return e(se({ text: "Not enough letters", invalidate: !0 }));
          if ((a = o) !== r && !be.includes(a) && !he.includes(a))
            return e(se({ text: "Not in word list", invalidate: !0 }));
          if (t) {
            var c = (function (e, t, n) {
                if (!e || !t || !n) return { validGuess: !0 };
                for (var a, o, r, s = 0; s < n.length; s += 1)
                  if ("correct" === n[s] && e[s] !== t[s])
                    return {
                      validGuess: !1,
                      errorMessage: ""
                        .concat(
                          ((r = o = void 0),
                          (a = s + 1) +
                            ((o = ["th", "st", "nd", "rd"])[
                              ((r = a % 100) - 20) % 10
                            ] ||
                              o[r] ||
                              o[0])),
                          " letter must be "
                        )
                        .concat(t[s].toUpperCase()),
                    };
                for (var i = {}, l = 0; l < n.length; l += 1)
                  ["correct", "present"].includes(n[l]) &&
                    (i[t[l]] ? (i[t[l]] += 1) : (i[t[l]] = 1));
                for (
                  var c = e.split("").reduce(function (e, t) {
                      return e[t] ? (e[t] += 1) : (e[t] = 1), e;
                    }, {}),
                    u = Object.keys(i),
                    d = 0;
                  d < u.length;
                  d += 1
                ) {
                  var m = u[d];
                  if ((c[m] || 0) < i[m])
                    return {
                      validGuess: !1,
                      errorMessage: "Guess must contain ".concat(
                        m.toUpperCase()
                      ),
                    };
                }
                return { validGuess: !0 };
              })(o, s[l - 1], i[l - 1]),
              u = c.validGuess,
              c = c.errorMessage;
            if (!u)
              return e(
                se({ text: c || "Not valid in hard mode", invalidate: !0 })
              );
          }
          (u = l + 1),
            (c = o === r),
            (l = !c && We <= u),
            (r = c && !!n && 1 === _e(new Date(n), new Date())),
            (n = "IN_PROGRESS");
          c ? (n = "WIN") : l && (n = "FAIL"),
            "IN_PROGRESS" !== n &&
              (function () {
                try {
                  h.setItem(f, !0);
                } catch (e) {
                  console.error(e);
                }
              })(),
            e({
              type: ka,
              payload: {
                now: Date.now(),
                status: n,
                isStreak: r,
                numGuesses: u,
                guess: o,
              },
            });
        }
      };
    },
    Ea = ["timestamp"];
  function ja(e, t) {
    if (null == e) return {};
    var n,
      a = (function (e, t) {
        if (null == e) return {};
        var n,
          a,
          o = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++)
          (n = r[a]), 0 <= t.indexOf(n) || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var o = Object.getOwnPropertySymbols(e), r = 0; r < o.length; r++)
        (n = o[r]),
          0 <= t.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    return a;
  }
  function za(t) {
    return function (e) {
      e(ne()),
        e(ae()),
        e(re()),
        "malformed Moogle response data" === t.message &&
          v.captureSentryError(t, { api: "moogle", category: "game_state" }),
        t.message && "No internet" === t.message
          ? e(R("offline"))
          : t.message && "profile" === t.message
          ? e(R("profile"))
          : e(R("default"));
    };
  }
  function Na() {
    return g.useContext(i);
  }
  var Ca =
      "prod" === v.env.name
        ? "https://www.nytimes.com"
        : "https://www.stg.nytimes.com",
    Aa = "wordle/api/MOOGLE_OPT_IN",
    Oa = "wordle/api/LOAD_MOOGLE_GET",
    Ia = "wordle/api/MOOGLE_GET_SUCCESS",
    La = "wordle/api/MOOGLE_GET_ERROR",
    Ta = "wordle/api/LOAD_MOOGLE_POST",
    Pa = "wordle/api/MOOGLE_POST_SUCCESS",
    Ma = "wordle/api/MOOGLE_POST_ERROR",
    Ba = "wordle/api/MOOGLE_POST_RESET",
    Ra = "wordle/api/LOAD_SOLUTION",
    Wa = "wordle/api/SOLUTION_SUCCESS",
    Ha = "wordle/api/SOLUTION_ERROR",
    Da = "wordle/api/LOAD_PROFILE_INFO",
    qa = "wordle/api/PROFILE_INFO_SUCCESS",
    Ga = "wordle/api/PROFILE_INFO_ERROR",
    Fa = "wordle/api/START_SYNC",
    Va = "wordle/api/APP_LOADED",
    Ya = function (e) {
      var s = e.enableServerSolution,
        i = e.today;
      return function (t) {
        t({ type: Ra });
        var n = ve(i),
          a = xe(n),
          o = function () {
            return new Promise(function (e) {
              return e({ solution: a, days_since_launch: n, id: n });
            });
          };
        function r(e) {
          t({
            type: Wa,
            payload: {
              data: {
                solution: e.solution,
                dayOffset: e.days_since_launch,
                id: e.id,
              },
            },
          });
        }
        return (
          s
            ? function () {
                return v.xhr
                  .get(
                    ((e = i),
                    ""
                      .concat(v.env.edge, "/svc/wordle/v1/")
                      .concat(e.toLocaleDateString("en-CA"), ".json"))
                  )
                  .catch(function (e) {
                    return v.captureSentryError(e), o();
                  });
                var e;
              }
            : o
        )()
          .then(function (e) {
            r(e);
          })
          .catch(function (e) {
            s
              ? o().then(function (e) {
                  r(e);
                })
              : (t({ type: Ha }),
                e.message && "No internet" === e.message
                  ? t(R("offline"))
                  : t(R("default")));
          });
      };
    },
    Ua = "user not authenticated for GET /state",
    Za = function (e) {
      var n = e.fetchFromMoogle,
        e = e.optIn,
        a = void 0 !== e && e;
      return function (t) {
        return n &&
          ((e = document.cookie.toLowerCase()).includes("nyt-s") ||
            e.includes("sidny"))
          ? (t({ type: Oa }),
            v.xhr
              .get("".concat(Ca, "/svc/games/state/wordle/latest"), {
                withCookie: !1,
              })
              .then(function (e) {
                if ("forbidden" === e.error) throw new Error(Ua);
                if (!e.timestamp && !e.user_id)
                  throw new Error("malformed Moogle response data");
                t({ type: Ia, payload: { data: e, optIn: a } });
              })
              .catch(function (e) {
                e.message !== Ua &&
                  t({ type: La, payload: { message: e.message } });
              }))
          : Promise.resolve();
        var e;
      };
    },
    Xa = function (o, r) {
      return function (t, e) {
        var n = Ae(e()),
          a = o.timestamp,
          e = ja(o, Ea);
        return n
          ? (t({ type: Ta }),
            v.xhr
              .post(
                "".concat(Ca, "/svc/games/state"),
                {
                  game: "wordle",
                  game_data: e,
                  puzzle_id: "1",
                  schema_version: "0.0.0",
                  timestamp: a,
                  user_id: n,
                },
                { withCookie: !1 }
              )
              .then(function (e) {
                if (!e.version)
                  throw new Error("malformed Moogle response data");
                t({ type: Pa, payload: { data: e, enableAuth: !!r } });
              })
              .catch(function (e) {
                t({ type: Ma, payload: { saveData: o } }),
                  t(
                    se({
                      text: "There was an error while saving. Please refresh the page and try again",
                      duration: 3e3,
                      isSystem: !0,
                    })
                  ),
                  "malformed Moogle response data" === e.message &&
                    v.captureSentryError(e, {
                      api: "moogle",
                      category: "game_state",
                    });
              }))
          : Promise.resolve();
      };
    };
  function Ka(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Ja(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Ja(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Ja(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Qa(o) {
    return $a.reduce(function (e, t) {
      var n, a;
      return (
        o
          ? ((n = (a = eo[t]).testName),
            (a = a.activeVariant),
            (e[t] = o(n) === a))
          : (e[t] = !1),
        e
      );
    }, {});
  }
  var $a = ["auth", "moogleGet", "serverSolution", "welcomeMoment"],
    eo = {
      auth: {
        testName: "GAMES_wordleAuth_0427",
        activeVariant: "1_EnableAuth",
      },
      moogleGet: {
        testName: "GAMES_wordleMoogle_0422",
        activeVariant: "1_EnableMoogle",
      },
      serverSolution: {
        testName: "GAMES_wordleSolutionBE_0510",
        activeVariant: "1_EnableServerSolution",
      },
      welcomeMoment: {
        testName: "GAMES_wordleWelcomeMoment_0621",
        activeVariant: "1_EnableWordleWelcomeMoment",
      },
    },
    to = _.createContext(Qa()),
    ue = function (e) {
      var t = e.children,
        e = Na().getVariant,
        a = Qa(e),
        e = Ka(_.useState(a), 2),
        o = e[0],
        r = e[1];
      return (
        _.useEffect(
          function () {
            var t, n;
            (t = a),
              (n = o),
              $a.some(function (e) {
                return t[e] !== n[e];
              }) && r(a);
          },
          [a]
        ),
        _.createElement(to.Provider, { value: o }, t)
      );
    },
    no = function (e) {
      return _.useContext(to)[e];
    },
    ao = {
      backButton: "BackButton-module_backButton__5aq8S",
      backButtonText: "BackButton-module_backButtonText__-7yBL",
    };
  k(
    '.BackButton-module_backButton__5aq8S {\n  background: transparent;\n  border: 0;\n  padding: 0;\n}\n.BackButton-module_backButton__5aq8S:before {\n  content: "";\n  background: var(--hybrid-back) center no-repeat;\n  background-position-x: 0px;\n  display: block;\n  height: 45px;\n  padding: 0px 15px;\n  opacity: 1;\n}\n.BackButton-module_backButton__5aq8S:active:before {\n  opacity: 0.5;\n}\n\n.dark .BackButton-module_backButton__5aq8S:before {\n  background: var(--hybrid-back-dark-mode) center no-repeat;\n  background-position-x: 0px;\n}\n\n.BackButton-module_backButtonText__-7yBL {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}'
  );
  var oo = function (e) {
      var t = e.buttonStyle,
        n = e.textStyle,
        a = e.handler,
        o = e.trackData;
      return _.createElement(
        "button",
        {
          type: "button",
          className: p(ao.backButton, t),
          onClick: function () {
            var e = o.elementName,
              t = o.context,
              n = o.moduleLabel;
            v.trackModuleInteraction("click", t, e, "back", n),
              a && a(),
              null !== (n = window.NativeBridge) &&
                void 0 !== n &&
                n.gamesBackToHub();
          },
        },
        _.createElement("span", { className: p(ao.backButtonText, n) }, "Back")
      );
    },
    ro = function (e) {
      e = e.children;
      return window.isHybridWebView ? null : e;
    },
    so = function (e) {
      e = e.children;
      return window.isHybridWebView && window.NativeBridge ? e : null;
    },
    io = {
      container: "Note-module_container__pU9cP",
      note: "Note-module_note__cfaX8",
      statsIcon: "Note-module_statsIcon__06sZm",
      moreLink: "Note-module_moreLink__zEYt4",
      noteHeader: "Note-module_noteHeader__bWkgA",
      noteDescription: "Note-module_noteDescription__5kiN4",
      noteSummary: "Note-module_noteSummary__LQIGg",
    };
  function lo(e) {
    var t = e.closeMoment,
      n = e.trackLink,
      a = T();
    return _.createElement(
      "div",
      { className: io.container },
      _.createElement(
        "div",
        { className: io.note },
        _.createElement(
          "div",
          { className: io.statsIcon },
          _.createElement("img", {
            alt: "Wordle",
            style: { content: "var(--wordle-stats-mini)" },
          })
        ),
        _.createElement(
          "div",
          { className: io.noteInfo },
          _.createElement("div", { className: io.noteHeader }, "NOTE"),
          _.createElement(
            "div",
            { className: io.noteDescription },
            "See your stats wherever you play."
          ),
          _.createElement(
            "div",
            { className: io.noteSummary },
            "To see your stats in the app, go to where you normally play and link them to a free account."
          ),
          _.createElement(
            "button",
            {
              className: io.moreLink,
              type: "button",
              onClick: function () {
                t(), a(te("linkInfo")), n();
              },
            },
            "Tell me more"
          )
        )
      )
    );
  }
  k(
    ".Note-module_container__pU9cP {\n  padding: 0 20px;\n}\n\n.Note-module_note__cfaX8 {\n  display: flex;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 20px 0;\n}\n.Note-module_note__cfaX8 .Note-module_statsIcon__06sZm {\n  margin-right: 16px;\n}\n.Note-module_note__cfaX8 .Note-module_moreLink__zEYt4 {\n  all: unset;\n  text-decoration: underline;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 16px;\n  color: var(--black-3);\n  cursor: pointer;\n}\n.Note-module_note__cfaX8 .Note-module_noteHeader__bWkgA {\n  color: #2671dc;\n  font-size: 11px;\n  font-weight: 700;\n  text-align: left;\n}\n.Note-module_note__cfaX8 .Note-module_noteDescription__5kiN4 {\n  color: var(--black-2);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n}\n.Note-module_note__cfaX8 .Note-module_noteSummary__LQIGg {\n  color: var(--black-3);\n  font-size: 14px;\n  line-height: 16px;\n}"
  );
  var co = {
    contentWelcome: "Welcome-module_contentWelcome__3Czjm",
    contentWelcomeContainer: "Welcome-module_contentWelcomeContainer__4vEkN",
    spinner: "Welcome-module_spinner__lrZLT",
    smallIconAndTitle: "Welcome-module_smallIconAndTitle__bwAF2",
    title: "Welcome-module_title__BVIWQ",
    small: "Welcome-module_small__HrMeM",
    subtitle: "Welcome-module_subtitle__PHs6d",
    bold: "Welcome-module_bold__-meIg",
    icon: "Welcome-module_icon__tYMoy",
    dateContainer: "Welcome-module_dateContainer__qbYZe",
    noWrap: "Welcome-module_noWrap__yxyZf",
    date: "Welcome-module_date__u4kvh",
    wordleNumber: "Welcome-module_wordleNumber__CaBMY",
    buttonContainer: "Welcome-module_buttonContainer__2yt5t",
    button: "Welcome-module_button__tEJl9",
    secondary: "Welcome-module_secondary__Kwfcs",
    back: "Welcome-module_back__NKsNt",
  };
  function uo(e) {
    var t = e.children,
      a = e.optIn,
      n = e.styles,
      o = void 0 === n ? "" : n,
      r = e.trackEvent,
      n = e.ariaLabel,
      e = void 0 === n ? "" : n,
      s = T(),
      i = window.isHybridWebView,
      n = a ? ye : ge;
    return _.createElement(
      "a",
      {
        className: o,
        "aria-label": e,
        tabIndex: -1,
        href: i ? void 0 : n,
        onClick: function () {
          var e, t, n;
          i &&
            null !== (n = window.NativeBridge) &&
            void 0 !== n &&
            n
              .gamesAuthenticateUser("login")
              .then(function (e) {
                null !== (e = e.values) &&
                  void 0 !== e &&
                  e.gamesAuthenticateUser.regiID &&
                  a &&
                  s({ type: Aa });
              })
              .then(function () {
                s({ type: Va, payload: { appLoaded: !1 } });
              }),
            r &&
              ((e = r.eventName),
              (t = r.sendContext),
              (n = r.element),
              s(ie(e, t, n)));
        },
      },
      t
    );
  }
  k(
    '.Welcome-module_contentWelcome__3Czjm {\n  position: relative;\n  color: black;\n  max-width: 100%;\n  width: 100%;\n  overflow-y: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #e3e3e1;\n}\n\n.Welcome-module_contentWelcomeContainer__4vEkN {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 42px;\n}\n\n.Welcome-module_spinner__lrZLT {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.Welcome-module_smallIconAndTitle__bwAF2 {\n  position: absolute;\n  top: 44px;\n}\n\n.Welcome-module_title__BVIWQ {\n  font-size: 36px;\n  line-height: 38px;\n  font-family: "nyt-karnakcondensed";\n  font-weight: bold;\n  margin-bottom: 12px;\n}\n@media (min-width: 760px) {\n  .Welcome-module_title__BVIWQ {\n    font-size: 44px;\n    line-height: 1.045em;\n  }\n}\n@media (min-width: 992px) {\n  .Welcome-module_title__BVIWQ {\n    font-size: 50px;\n    line-height: 52px;\n  }\n}\n.Welcome-module_title__BVIWQ.Welcome-module_small__HrMeM {\n  font-size: 1.125em;\n  line-height: 1.111;\n}\n\n.Welcome-module_subtitle__PHs6d {\n  font-size: 28px;\n  line-height: 28px;\n  margin-bottom: 28px;\n  font-family: "nyt-karnak";\n  text-align: center;\n  font-weight: 400;\n  font-size: 24.8px;\n}\n@media (min-width: 760px) {\n  .Welcome-module_subtitle__PHs6d {\n    max-width: 300px;\n    font-size: 32px;\n    line-height: 36px;\n  }\n}\n@media (min-width: 992px) {\n  .Welcome-module_subtitle__PHs6d {\n    max-width: 375px;\n    font-size: 38px;\n    line-height: 44px;\n    margin-bottom: 36px;\n  }\n}\n.Welcome-module_subtitle__PHs6d .Welcome-module_bold__-meIg {\n  font-family: "nyt-karnakcondensed";\n}\n\n/* ICON */\n.Welcome-module_icon__tYMoy {\n  height: 64px;\n  margin-bottom: 16px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: var(--wordle-icon);\n}\n@media (min-width: 768px) {\n  .Welcome-module_icon__tYMoy {\n    height: 80px;\n    margin-bottom: 12px;\n  }\n}\n.Welcome-module_icon__tYMoy.Welcome-module_small__HrMeM {\n  height: 40px;\n  margin-bottom: 8px;\n}\n@media (min-width: 768px) {\n  .Welcome-module_icon__tYMoy.Welcome-module_small__HrMeM {\n    margin-top: 10px;\n  }\n}\n\n.Welcome-module_dateContainer__qbYZe {\n  text-align: center;\n}\n\n.Welcome-module_noWrap__yxyZf {\n  white-space: nowrap;\n}\n\n.Welcome-module_date__u4kvh {\n  display: block;\n  font-size: 1em;\n  line-height: 1.25;\n  letter-spacing: 0.005em;\n  font-family: "nyt-franklin";\n  font-weight: 600;\n}\n@media (max-width: 992px) {\n  .Welcome-module_date__u4kvh {\n    font-size: 16px;\n    line-height: 20px;\n  }\n}\n\n.Welcome-module_wordleNumber__CaBMY {\n  display: block;\n  font-size: 1em;\n  line-height: 1.25;\n  letter-spacing: 0.005em;\n}\n@media (max-width: 992px) {\n  .Welcome-module_wordleNumber__CaBMY {\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\n\n.Welcome-module_buttonContainer__2yt5t {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column-reverse;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: 24px;\n}\n@media (min-width: 760px) {\n  .Welcome-module_buttonContainer__2yt5t {\n    margin-bottom: 28px;\n    flex-direction: row;\n  }\n}\n.Welcome-module_buttonContainer__2yt5t .Welcome-module_button__tEJl9 {\n  position: relative;\n  border: none;\n  height: 3em;\n  border-radius: 1.5em;\n  align-content: center;\n  letter-spacing: 0.05em;\n  margin: 0 10px 8px;\n  background: black;\n  color: white;\n  font-size: 16px;\n  font-family: "nyt-franklin-400";\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  margin-bottom: 8px;\n  padding: 0 2em;\n  font-weight: 400;\n}\n@media (max-width: 760px) {\n  .Welcome-module_buttonContainer__2yt5t .Welcome-module_button__tEJl9 {\n    display: block;\n    width: 155px;\n  }\n}\n@media (min-width: 760px) {\n  .Welcome-module_buttonContainer__2yt5t .Welcome-module_button__tEJl9 {\n    width: 180px;\n  }\n}\n.Welcome-module_buttonContainer__2yt5t .Welcome-module_button__tEJl9.Welcome-module_secondary__Kwfcs {\n  background: none;\n  color: black;\n  border: 1px solid;\n  letter-spacing: 0.01em;\n}\n.Welcome-module_buttonContainer__2yt5t a {\n  all: unset;\n}\n\n.Welcome-module_back__NKsNt {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  height: var(--header-height);\n  top: 0;\n  left: var(--header-padding-x);\n}\n.Welcome-module_back__NKsNt button::before {\n  background: var(--hybrid-back) center no-repeat !important;\n  background-position-x: 0px !important;\n}'
  );
  function mo(e) {
    return e.persist.stats;
  }
  var po = n.createSelector(mo, function (e) {
      return e.gamesPlayed;
    }),
    yo = n.createSelector(mo, function (e) {
      return e.gamesWon;
    }),
    go = n.createSelector(mo, function (e) {
      return e.maxStreak;
    }),
    fo = n.createSelector(mo, function (e) {
      return e.currentStreak;
    }),
    ho = n.createSelector(mo, function (e) {
      return e.guesses;
    }),
    bo = n.createSelector(
      [Xe, Ye, Fe, O, Ge, I, L],
      function (e, t, n, a, o, r, s) {
        t = "Wordle ".concat(t);
        (t += " ".concat("WIN" === o ? n : "X", "/").concat(We)),
          a && (t += "*");
        var i = "";
        return (
          e.forEach(function (e) {
            e &&
              (e.forEach(function (e) {
                if (e) {
                  var t = "";
                  switch (e) {
                    case "correct":
                      t = s ? "🟧" : "🟩";
                      break;
                    case "present":
                      t = s ? "🟦" : "🟨";
                      break;
                    case "absent":
                      t = r ? "⬛" : "⬜";
                  }
                  i += t;
                }
              }),
              (i += "\n"));
          }),
          { text: "".concat(t, "\n\n").concat(i.trim()) }
        );
      }
    );
  function wo(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function ko(e) {
    return (
      (e = e.small),
      _.createElement(
        "div",
        { className: p(wo({}, co.smallIconAndTitle, e)) },
        _.createElement("div", { className: p(co.icon, wo({}, co.small, e)) }),
        _.createElement(
          "div",
          { className: p(co.title, wo({}, co.small, e)) },
          "Wordle"
        )
      )
    );
  }
  function _o(e) {
    return (
      (e = e.children), _.createElement("div", { className: co.subtitle }, e)
    );
  }
  function vo(e) {
    var t = e.dayOffset;
    if (!t) return null;
    var n,
      e =
        ((n = t),
        (e = new Date(ke.valueOf())).setDate(e.getDate() + n),
        e.toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }));
    return _.createElement(
      "div",
      { className: co.dateContainer },
      _.createElement("div", { className: co.date }, e),
      _.createElement("div", { className: co.wordleNumber }, "No. ", t)
    );
  }
  function xo(e) {
    return (
      (e = e.buttons),
      _.createElement(
        "div",
        { className: co.buttonContainer },
        e
          .filter(function (e) {
            return !e.hide;
          })
          .map(function (e) {
            var t = e.onClick,
              n = e.text,
              a = e.secondary,
              e = e.isLogin,
              a = _.createElement(
                "button",
                {
                  key: n,
                  type: "button",
                  onClick: t,
                  className: p(co.button, wo({}, co.secondary, a)),
                },
                n
              );
            return e ? _.createElement(uo, { key: n, optIn: !1 }, a) : a;
          })
      )
    );
  }
  function So(e, t) {
    var n = g.useRef(e);
    g.useLayoutEffect(
      function () {
        n.current = e;
      },
      [e]
    ),
      g.useEffect(
        function () {
          if (t || 0 === t) {
            var e = setTimeout(function () {
              return n.current();
            }, t);
            return function () {
              return clearTimeout(e);
            };
          }
        },
        [t]
      );
  }
  var Eo = {
    spinner: "Spinner-module_spinner__9s8G2",
    spin: "Spinner-module_spin__b-mBL",
  };
  function jo(e) {
    var t = e.circleColor,
      e = e.barColor;
    return _.createElement(
      "svg",
      {
        className: Eo.spinner,
        width: "82",
        height: "82",
        viewBox: "0 0 82 82",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      _.createElement("circle", {
        cx: "41",
        cy: "41",
        r: "40.0391",
        stroke: void 0 === t ? "#DFDFDF" : t,
        strokeWidth: "1.92188",
      }),
      _.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.4763 73.6983L18.4497 75.3237C24.8956 79.5452 32.6028 82 40.8834 82C62.8396 82 80.7649 64.7413 81.833 43.05H79.9087C78.8425 63.6793 61.778 80.0781 40.8834 80.0781C32.9802 80.0781 25.6251 77.732 19.4763 73.6983Z",
        fill: void 0 === e ? "#959595" : e,
      })
    );
  }
  function zo(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return No(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? No(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function No(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  k(
    ".Spinner-module_spinner__9s8G2 {\n  -webkit-animation: Spinner-module_spin__b-mBL 1s linear infinite;\n          animation: Spinner-module_spin__b-mBL 1s linear infinite;\n}\n\n@-webkit-keyframes Spinner-module_spin__b-mBL {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes Spinner-module_spin__b-mBL {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"
  );
  function Co(r) {
    return function (e, t) {
      var n = t(),
        a = Fe(n),
        o = Ge(n),
        t = Be(n),
        n = da(n);
      if (r === a - 1 && (e({ type: Ao }), ["WIN", "FAIL"].includes(o))) {
        if (n) return e(ee("stats"));
        "WIN" === o &&
          ((a = De[a - 1]), e(se({ text: a, duration: 2e3, win: !0 }))),
          "FAIL" === o && e(se({ text: t.toUpperCase(), duration: 1 / 0 })),
          setTimeout(function () {
            e(ee("stats"));
          }, 2500);
      }
    };
  }
  var Ao = "wordle/transient/LAST_TILE_REVEAL",
    Oo = "wordle/transient/REMOVE_INVALID",
    Io = function () {
      return { type: Oo };
    },
    Lo = {
      tile: "Tile-module_tile__3ayIZ",
      PopIn: "Tile-module_PopIn__bu7hb",
      FlipIn: "Tile-module_FlipIn__scjpz",
      FlipOut: "Tile-module_FlipOut__e4DRI",
    };
  function To(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Po(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Po(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Po(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Mo(e) {
    var t = e.rowIndex,
      n = e.last,
      a = e.letter,
      o = e.evaluation,
      r = T(),
      s = _.useRef(null),
      i = To(_.useState("idle"), 2),
      l = i[0],
      c = i[1],
      e = To(_.useState(!1), 2),
      i = e[0],
      u = e[1];
    _.useEffect(
      function () {
        c(a ? "pop" : "idle");
      },
      [a]
    ),
      _.useEffect(
        function () {
          o && c("flip-in");
        },
        [o]
      );
    e = "empty";
    return (
      i && o ? (e = o) : a && (e = "tbd"),
      _.createElement(
        "div",
        {
          className: Lo.tile,
          ref: s,
          onAnimationEnd: function (e) {
            e.animationName === Lo.PopIn && "pop" === l && c("idle"),
              e.animationName === Lo.FlipIn && (c("flip-out"), u(!0)),
              e.animationName === Lo.FlipOut &&
                (c("idle"), n && s.current && void 0 !== t && r(Co(t)));
          },
          "data-state": e,
          "data-animation": l || "idle",
          "data-testid": "tile",
        },
        a
      )
    );
  }
  k(
    '.Tile-module_tile__3ayIZ {\n  width: 100%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  line-height: 2rem;\n  font-weight: bold;\n  vertical-align: middle;\n  box-sizing: border-box;\n  color: var(--tile-text-color);\n  text-transform: uppercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.Tile-module_tile__3ayIZ::before {\n  content: "";\n  display: inline-block;\n  padding-bottom: 100%;\n}\n\n/* Allow tiles to be smaller on small screens */\n@media (max-height: 600px) {\n  .Tile-module_tile__3ayIZ {\n    font-size: 1em;\n    line-height: 1em;\n  }\n}\n.Tile-module_tile__3ayIZ[data-state=empty] {\n  border: 2px solid var(--color-tone-4);\n}\n\n.Tile-module_tile__3ayIZ[data-state=tbd] {\n  background-color: var(--color-tone-7);\n  border: 2px solid var(--color-tone-3);\n  color: var(--color-tone-1);\n}\n\n.Tile-module_tile__3ayIZ[data-state=correct] {\n  background-color: var(--color-correct);\n}\n\n.Tile-module_tile__3ayIZ[data-state=present] {\n  background-color: var(--color-present);\n}\n\n.Tile-module_tile__3ayIZ[data-state=absent] {\n  background-color: var(--color-absent);\n}\n\n.Tile-module_tile__3ayIZ[data-animation=pop] {\n  -webkit-animation-name: Tile-module_PopIn__bu7hb;\n          animation-name: Tile-module_PopIn__bu7hb;\n  -webkit-animation-duration: 100ms;\n          animation-duration: 100ms;\n}\n\n@-webkit-keyframes Tile-module_PopIn__bu7hb {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  40% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n}\n\n@keyframes Tile-module_PopIn__bu7hb {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  40% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n}\n.Tile-module_tile__3ayIZ[data-animation=flip-in] {\n  -webkit-animation-name: Tile-module_FlipIn__scjpz;\n          animation-name: Tile-module_FlipIn__scjpz;\n  -webkit-animation-duration: 250ms;\n          animation-duration: 250ms;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes Tile-module_FlipIn__scjpz {\n  0% {\n    transform: rotateX(0);\n  }\n  100% {\n    transform: rotateX(-90deg);\n  }\n}\n\n@keyframes Tile-module_FlipIn__scjpz {\n  0% {\n    transform: rotateX(0);\n  }\n  100% {\n    transform: rotateX(-90deg);\n  }\n}\n.Tile-module_tile__3ayIZ[data-animation=flip-out] {\n  -webkit-animation-name: Tile-module_FlipOut__e4DRI;\n          animation-name: Tile-module_FlipOut__e4DRI;\n  -webkit-animation-duration: 250ms;\n          animation-duration: 250ms;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes Tile-module_FlipOut__e4DRI {\n  0% {\n    transform: rotateX(-90deg);\n  }\n  100% {\n    transform: rotateX(0);\n  }\n}\n\n@keyframes Tile-module_FlipOut__e4DRI {\n  0% {\n    transform: rotateX(-90deg);\n  }\n  100% {\n    transform: rotateX(0);\n  }\n}'
  );
  var Bo = {
    row: "Row-module_row__dEHfN",
    invalid: "Row-module_invalid__16kR1",
    Shake: "Row-module_Shake__4i0T3",
    win: "Row-module_win__NF7uy",
    Bounce: "Row-module_Bounce__7NO2t",
  };
  function Ro(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Wo(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Wo(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Wo(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Ho(e) {
    var n = e.index,
      a = e.letters,
      t = e.evaluation,
      o = e.length,
      r = e.invalid,
      s = e.win,
      i = e.removeInvalid,
      l = Ro(_.useState(0), 2),
      c = l[0],
      u = l[1],
      e = _.useRef(null),
      d = _.useRef(!1),
      m = null == t ? void 0 : t.slice(0, c);
    return (
      _.useEffect(
        function () {
          t &&
            (function (e) {
              for (var t = 0; t < o; t += 1)
                setTimeout(function () {
                  u(function (e) {
                    return e + 1;
                  });
                }, e * t);
            })(d.current ? 300 : 100),
            (d.current = !0);
        },
        [t]
      ),
      _.createElement(
        "div",
        {
          className: p(
            Bo.row,
            ((l = {}),
            (c = Bo.invalid),
            (r = r),
            c in l
              ? Object.defineProperty(l, c, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (l[c] = r),
            l)
          ),
          ref: e,
          onAnimationEnd: function (e) {
            e.animationName === Bo.Shake && i();
          },
        },
        Array(o)
          .fill(!0)
          .map(function (e, t) {
            return _.createElement(
              "div",
              {
                key: t,
                className: s ? Bo.win : "",
                style: { animationDelay: "".concat(100 * t, "ms") },
              },
              _.createElement(Mo, {
                rowIndex: n,
                letter: a[t] || "",
                evaluation: m && m[t],
                last: t === o - 1,
              })
            );
          })
      )
    );
  }
  k(
    ".Row-module_row__dEHfN {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 5px;\n}\n.Row-module_row__dEHfN.Row-module_invalid__16kR1 {\n  -webkit-animation-name: Row-module_Shake__4i0T3;\n          animation-name: Row-module_Shake__4i0T3;\n  -webkit-animation-duration: 600ms;\n          animation-duration: 600ms;\n}\n\n.Row-module_win__NF7uy {\n  -webkit-animation-name: Row-module_Bounce__7NO2t;\n          animation-name: Row-module_Bounce__7NO2t;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n}\n\n@-webkit-keyframes Row-module_Bounce__7NO2t {\n  0%, 20% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  50% {\n    transform: translateY(5px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n  80% {\n    transform: translateY(2px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes Row-module_Bounce__7NO2t {\n  0%, 20% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  50% {\n    transform: translateY(5px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n  80% {\n    transform: translateY(2px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes Row-module_Shake__4i0T3 {\n  10%, 90% {\n    transform: translateX(-1px);\n  }\n  20%, 80% {\n    transform: translateX(2px);\n  }\n  30%, 50%, 70% {\n    transform: translateX(-4px);\n  }\n  40%, 60% {\n    transform: translateX(4px);\n  }\n}\n@keyframes Row-module_Shake__4i0T3 {\n  10%, 90% {\n    transform: translateX(-1px);\n  }\n  20%, 80% {\n    transform: translateX(2px);\n  }\n  30%, 50%, 70% {\n    transform: translateX(-4px);\n  }\n  40%, 60% {\n    transform: translateX(4px);\n  }\n}"
  );
  var Do = {
    boardContainer: "Board-module_boardContainer__cKb-C",
    board: "Board-module_board__lbzlf",
  };
  k(
    ".Board-module_boardContainer__cKb-C {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  overflow: hidden;\n}\n\n.Board-module_board__lbzlf {\n  display: grid;\n  grid-template-rows: repeat(6, 1fr);\n  grid-gap: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n}"
  );
  var qo = 350;
  function Go() {
    var n = P(qe),
      a = P(Xe),
      o = P(Fe),
      r = P(ma),
      s = P(pa),
      i = T(),
      l = _.useRef(null),
      c = _.useRef(null);
    return (
      _.useEffect(function () {
        function e() {
          var e,
            t = l.current,
            n = c.current;
          t &&
            n &&
            ((e = Math.min(Math.floor(t.clientHeight * (He / We)), qo)),
            (t = Math.floor(e / He) * We),
            (n.style.width = "".concat(e, "px")),
            (n.style.height = "".concat(t, "px")));
        }
        return (
          e(),
          window.addEventListener("resize", e),
          function () {
            return window.removeEventListener("resize", e);
          }
        );
      }, []),
      _.createElement(
        "div",
        { className: Do.boardContainer, ref: l },
        _.createElement(
          "div",
          { className: Do.board, ref: c },
          Array(We)
            .fill(!0)
            .map(function (e, t) {
              return _.createElement(Ho, {
                key: t,
                index: t,
                letters: n[t] || "",
                length: He,
                evaluation: a[t],
                invalid: t === o && r,
                win: t === o - 1 && s,
                removeInvalid: function () {
                  return i(Io());
                },
              });
            })
        )
      )
    );
  }
  function Fo(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Vo(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Vo(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Vo(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  var Yo = { width: "24", height: "24", viewBox: "0 0 24 24" },
    Uo = { width: "24", height: "24", viewBox: "4 4 24 24" },
    Zo = { width: "28", height: "28", viewBox: "4 4 24 24" },
    Xo = function (e) {
      var t = Fo(g.useState(Uo), 2),
        n = t[0],
        a = t[1],
        o = "help" === e || "statistics" === e || "settings" === e;
      return (
        g.useEffect(function () {
          function e() {
            var e = Uo;
            window.matchMedia("(min-width: 768px)").matches && (e = Zo), a(e);
          }
          return (
            o ? (e(), window.addEventListener("resize", e)) : a(Yo),
            function () {
              o && window.removeEventListener("resize", e);
            }
          );
        }, []),
        n
      );
    },
    Ko = {
      help: "M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z",
      settings:
        "M25.52 17.2534C25.5733 16.8534 25.6 16.44 25.6 16C25.6 15.5734 25.5733 15.1467 25.5067 14.7467L28.2133 12.64C28.4533 12.4534 28.52 12.0934 28.3733 11.8267L25.8133 7.40004C25.6533 7.10671 25.32 7.01338 25.0267 7.10671L21.84 8.38671C21.1733 7.88004 20.4667 7.45338 19.68 7.13338L19.2 3.74671C19.1467 3.42671 18.88 3.20004 18.56 3.20004H13.44C13.12 3.20004 12.8666 3.42671 12.8133 3.74671L12.3333 7.13338C11.5467 7.45338 10.8267 7.89338 10.1733 8.38671L6.98665 7.10671C6.69332 7.00004 6.35998 7.10671 6.19998 7.40004L3.65332 11.8267C3.49332 12.1067 3.54665 12.4534 3.81332 12.64L6.51998 14.7467C6.45332 15.1467 6.39998 15.5867 6.39998 16C6.39998 16.4134 6.42665 16.8534 6.49332 17.2534L3.78665 19.36C3.54665 19.5467 3.47998 19.9067 3.62665 20.1734L6.18665 24.6C6.34665 24.8934 6.67998 24.9867 6.97332 24.8934L10.16 23.6134C10.8267 24.12 11.5333 24.5467 12.32 24.8667L12.8 28.2534C12.8667 28.5734 13.12 28.8 13.44 28.8H18.56C18.88 28.8 19.1467 28.5734 19.1867 28.2534L19.6667 24.8667C20.4533 24.5467 21.1733 24.12 21.8267 23.6134L25.0133 24.8934C25.3067 25 25.64 24.8934 25.8 24.6L28.36 20.1734C28.52 19.88 28.4533 19.5467 28.2 19.36L25.52 17.2534ZM16 20.8C13.36 20.8 11.2 18.64 11.2 16C11.2 13.36 13.36 11.2 16 11.2C18.64 11.2 20.8 13.36 20.8 16C20.8 18.64 18.64 20.8 16 20.8Z",
      backspace:
        "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
      close:
        "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      share:
        "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
      statistics:
        "M20.6666 14.8333V5.5H11.3333V12.5H4.33325V26.5H27.6666V14.8333H20.6666ZM13.6666 7.83333H18.3333V24.1667H13.6666V7.83333ZM6.66659 14.8333H11.3333V24.1667H6.66659V14.8333ZM25.3333 24.1667H20.6666V17.1667H25.3333V24.1667Z",
    };
  function Jo(e) {
    var t = e.icon,
      n = e.onClick,
      a = e.disabled,
      o = void 0 !== a && a,
      a = e.id,
      r = e.fillColor,
      e = Xo(t);
    return _.createElement(
      "svg",
      {
        id: a,
        xmlns: "http://www.w3.org/2000/svg",
        height: e.height,
        viewBox: e.viewBox,
        width: e.width,
        className: "game-icon",
        onClick: n,
        "data-testid": "icon-".concat(t),
      },
      _.createElement("path", {
        fill:
          r ||
          (o
            ? "var(--icon-disabled)"
            : "share" === t
            ? "var(--white)"
            : "var(--color-tone-1)"),
        d: Ko[t],
      })
    );
  }
  var Qo = {
    container: "Loading-module_container__lnPKB",
    loadingContainer: "Loading-module_loadingContainer__tPgFk",
    hide: "Loading-module_hide__A9nsN",
  };
  function $o(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return er(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? er(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function er(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  k(
    ".Loading-module_container__lnPKB {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-height: calc(100% - var(--header-height) - 1px);\n  left: 0;\n  justify-content: center;\n  background-color: var(--color-background);\n  z-index: var(--error-z-index);\n}\n\n.Loading-module_loadingContainer__tPgFk {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 82px;\n  height: 100%;\n  transition: opacity 0.2s;\n  opacity: 1;\n}\n\n.Loading-module_hide__A9nsN {\n  opacity: 0;\n}"
  );
  var tr = 300;
  function nr(e) {
    var t = e.waitFor,
      n = void 0 === t ? tr : t,
      a = e.setBackground,
      t = void 0 === a ? "dark" : a,
      e = $o(_.useState(!1), 2),
      a = e[0],
      o = e[1],
      e = P(I),
      t = "light" !== t && e,
      e = t ? "#121213" : "#FFF";
    return (
      So(function () {
        return o(!0);
      }, n),
      a
        ? _.createElement(
            "div",
            { className: Qo.container, style: e ? { backgroundColor: e } : {} },
            _.createElement(
              "div",
              { className: Qo.loadingContainer },
              _.createElement(jo, {
                circleColor: t ? "#666666" : "#DFDFDF",
                barColor: t ? "#DFDFDF" : "#959595",
              })
            )
          )
        : null
    );
  }
  var ar = {
    instructions: "Help-module_instructions__54IDr",
    examples: "Help-module_examples__eeiMV",
    example: "Help-module_example__3UNrs",
    tileContainer: "Help-module_tileContainer__WmMQw",
    page: "Help-module_page__uQ7Xi",
    reminderSignUp: "Help-module_reminderSignUp__b526G",
    statsLogin: "Help-module_statsLogin__j0k72",
    loginArrow: "Help-module_loginArrow__H-3mD",
    loginText: "Help-module_loginText__Osqyn",
    statsIcon: "Help-module_statsIcon__pQSyR",
    rule: "Help-module_rule__wlOx-",
  };
  k(
    ".Help-module_instructions__54IDr {\n  font-size: 14px;\n  color: var(--color-tone-1);\n}\n\n.Help-module_examples__eeiMV {\n  border-bottom: 1px solid var(--color-tone-4);\n  border-top: 1px solid var(--color-tone-4);\n}\n\n.Help-module_example__3UNrs {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.Help-module_tileContainer__WmMQw {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-right: 4px;\n}\n\n.Help-module_page__uQ7Xi {\n  padding: 16px;\n  padding-top: 0px;\n}\n\n.Help-module_reminderSignUp__b526G a {\n  color: var(--color-tone-1);\n  font-weight: 700;\n}\n\n/*---auth---*/\n.Help-module_statsLogin__j0k72 {\n  position: relative;\n  color: var(--color-tone-1);\n  font-size: 14px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-start;\n  text-decoration: none;\n  padding-top: 24px;\n}\n.Help-module_statsLogin__j0k72 a {\n  font-weight: 700;\n  color: var(--color-tone-1);\n}\n.Help-module_statsLogin__j0k72 .Help-module_loginArrow__H-3mD {\n  text-decoration: none;\n  justify-self: flex-end;\n}\n.Help-module_statsLogin__j0k72 .Help-module_loginText__Osqyn {\n  flex-grow: 2;\n}\n.Help-module_statsLogin__j0k72 .Help-module_statsIcon__pQSyR {\n  margin-right: 16px;\n}\n.Help-module_statsLogin__j0k72 .Help-module_rule__wlOx- {\n  margin-left: -16px;\n  top: 6px;\n  height: 1px;\n  position: absolute;\n  width: calc(100% + 32px);\n  background-color: var(--color-tone-1);\n  box-shadow: 0px 0px 2px rgba(50, 50, 50, 0.75);\n}"
  );
  function or(e) {
    var a = e.helpWord,
      e = e.letters;
    return _.createElement(
      _.Fragment,
      null,
      e.map(function (e, t) {
        var n = e.letter,
          e = e.evaluation;
        return _.createElement(
          "div",
          {
            "data-testid": "".concat(a, "-letter"),
            className: ar.tileContainer,
            key: "".concat(a, "-").concat(n, "-").concat(t),
          },
          _.createElement(Mo, { letter: n, evaluation: e })
        );
      })
    );
  }
  var rr = [
    {
      helpWord: "weary",
      letters: [
        { letter: "w", evaluation: "correct" },
        { letter: "e" },
        { letter: "a" },
        { letter: "r" },
        { letter: "y" },
      ],
    },
    {
      helpWord: "pills",
      letters: [
        { letter: "p" },
        { letter: "i", evaluation: "present" },
        { letter: "l" },
        { letter: "l" },
        { letter: "s" },
      ],
    },
    {
      helpWord: "vague",
      letters: [
        { letter: "v" },
        { letter: "a" },
        { letter: "g" },
        { letter: "u", evaluation: "absent" },
        { letter: "e" },
      ],
    },
  ];
  function sr(e) {
    var t = e.isPage,
      n = e.enableAuth,
      a = e.isLoggedIn,
      e = n && !(void 0 !== a && a),
      o = "".concat(P(Ye));
    return _.createElement(
      "section",
      {
        className: p(
          ((n = {}),
          (a = ar.page),
          (t = t),
          a in n
            ? Object.defineProperty(n, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[a] = t),
          n)
        ),
      },
      _.createElement(
        "div",
        { className: ar.instructions },
        _.createElement(
          "p",
          null,
          "Guess the ",
          _.createElement("strong", null, "WORDLE"),
          " in 6 tries."
        ),
        _.createElement(
          "p",
          null,
          "Each guess must be a valid 5-letter word. Hit the enter button to submit."
        ),
        _.createElement(
          "p",
          null,
          "After each guess, the color of the tiles will change to show how close your guess was to the word."
        ),
        _.createElement(
          "div",
          { className: ar.examples },
          _.createElement(
            "p",
            null,
            _.createElement("strong", null, "Examples")
          ),
          _.createElement(
            "div",
            { "aria-label": rr[0].helpWord, className: ar.example },
            or(rr[0]),
            _.createElement(
              "p",
              null,
              "The letter ",
              _.createElement("strong", null, "W"),
              " is in the word and in the correct spot."
            )
          ),
          _.createElement(
            "div",
            { "aria-label": rr[1].helpWord, className: ar.example },
            or(rr[1]),
            _.createElement(
              "p",
              null,
              "The letter ",
              _.createElement("strong", null, "I"),
              " is in the word but in the wrong spot."
            )
          ),
          _.createElement(
            "div",
            { "aria-label": rr[2].helpWord, className: ar.example },
            or(rr[2]),
            _.createElement(
              "p",
              null,
              "The letter ",
              _.createElement("strong", null, "U"),
              " is not in the word in any spot."
            )
          )
        ),
        _.createElement(
          "p",
          null,
          _.createElement(
            "strong",
            null,
            "A new WORDLE will be available each day!"
          )
        ),
        _.createElement(
          "p",
          { className: ar.reminderSignUp },
          "Never miss a Wordle.",
          " ",
          _.createElement(
            "a",
            {
              href: "https://www.nytimes.com/newsletters/signup/NTWO",
              target: "_blank",
              rel: "noreferrer",
              onClick: function () {
                v.trackClick({
                  name: "wordle",
                  label: null,
                  element: { name: "wordle", label: "newsletter-sign-up" },
                  context: o,
                });
              },
            },
            "Sign up"
          ),
          " ",
          "for our daily reminder email."
        )
      ),
      e &&
        _.createElement(
          "div",
          { className: ar.statsLogin },
          _.createElement("div", { className: ar.rule }),
          _.createElement(
            "div",
            { className: ar.statsIcon },
            _.createElement("img", {
              alt: "Green Bar Graph",
              style: { content: "var(--wordle-stats-mini)" },
            })
          ),
          _.createElement(
            "div",
            { className: ar.loginText },
            "Looking to load your saved stats?",
            _.createElement("br", null),
            _.createElement(
              uo,
              {
                ariaLabel: "Link for logging in or creating a free account",
                trackEvent: {
                  eventName: "help",
                  sendContext: !0,
                  element: { name: "wordle", label: "log-in-welcome" },
                },
                optIn: !1,
              },
              "Log in here"
            )
          ),
          _.createElement(
            uo,
            {
              trackEvent: {
                eventName: "log-in-welcome",
                sendContext: !0,
                element: { name: "wordle", label: "log-in-welcome" },
              },
              styles: ar.loginArrow,
              optIn: !1,
            },
            _.createElement(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              _.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "var(--svg-arrow-fill)",
              }),
              _.createElement("path", {
                d: "M10.4038 6L15.8076 11.4038L10.4038 16.8076",
                stroke: "var(--svg-arrow-stroke)",
                strokeWidth: "1.5",
                strokeLinecap: "round",
              })
            )
          )
        )
    );
  }
  function ir(e) {
    return { type: cr, payload: { isGameComplete: e } };
  }
  function lr() {
    return { type: ur };
  }
  var cr = "wordle/stats/TRACK_STATS_IMPRESSION",
    ur = "wordle/stats/SHARE_STATS",
    dr = {
      gameStats: "Stats-module_gameStats__ZP1aW",
      statisticsHeading: "Stats-module_statisticsHeading__9B0IG",
      statistics: "Stats-module_statistics__Hke7Z",
      statisticContainer: "Stats-module_statisticContainer__XORTW",
      statistic: "Stats-module_statistic__fr8JZ",
      timer: "Stats-module_timer__xn2mu",
      label: "Stats-module_label__pLAui",
      guessDistribution: "Stats-module_guessDistribution__J8Int",
      graphContainer: "Stats-module_graphContainer__BlVFU",
      graph: "Stats-module_graph__l2LGn",
      graphBar: "Stats-module_graphBar__TvsIP",
      highlight: "Stats-module_highlight__fBBiL",
      alignRight: "Stats-module_alignRight__29Xhl",
      numGuesses: "Stats-module_numGuesses__aB7UF",
      footer: "Stats-module_footer__IY-Bt",
      countdown: "Stats-module_countdown__a-cWu",
      share: "Stats-module_share__kfJ-m",
      noData: "Stats-module_noData__D3wkv",
      shareButton: "Stats-module_shareButton__eNFFD",
      shareIconContainer: "Stats-module_shareIconContainer__j2o6K",
      statsBtnLeft: "Stats-module_statsBtnLeft__q1PQ8",
      statsBtnCenter: "Stats-module_statsBtnCenter__Kgi5x",
      statsInfoBtn: "Stats-module_statsInfoBtn__WUPls",
      promoButton: "Stats-module_promoButton__8dcY3",
      promoIcon: "Stats-module_promoIcon__1c9qr",
      promoButtonContainer: "Stats-module_promoButtonContainer__xUFtx",
      ctaContainer: "Stats-module_ctaContainer__WSxUG",
      guess: "Stats-module_guess__3MeYM",
    };
  k(
    ".Stats-module_gameStats__ZP1aW {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 16px;\n}\n.Stats-module_gameStats__ZP1aW h1 {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 4px;\n  line-height: 18px;\n  margin-top: 12px;\n}\n.Stats-module_gameStats__ZP1aW .Stats-module_statisticsHeading__9B0IG {\n  line-height: 20px;\n  margin-top: 0;\n  margin-bottom: 4px;\n  letter-spacing: 0.05em;\n}\n\n.Stats-module_statistics__Hke7Z {\n  display: flex;\n}\n\n.Stats-module_statisticContainer__XORTW {\n  flex: 1;\n  margin-left: 12px;\n}\n.Stats-module_statisticContainer__XORTW:last-child {\n  margin-right: 12px;\n}\n\n.Stats-module_statisticContainer__XORTW .Stats-module_statistic__fr8JZ {\n  font-size: 34px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  letter-spacing: 0.05em;\n  font-variant-numeric: proportional-nums;\n  line-height: 36px;\n}\n\n.Stats-module_statistic__fr8JZ.Stats-module_timer__xn2mu {\n  font-variant-numeric: initial;\n  font-size: 32px;\n  line-height: 34px;\n  letter-spacing: 0.025em;\n}\n\n.Stats-module_statisticContainer__XORTW .Stats-module_label__pLAui {\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 14px;\n  letter-spacing: 0.1em;\n}\n\n.Stats-module_guessDistribution__J8Int {\n  width: 80%;\n}\n\n.Stats-module_graphContainer__BlVFU {\n  width: 100%;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  padding-bottom: 4px;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.Stats-module_graphContainer__BlVFU .Stats-module_graph__l2LGn {\n  width: 100%;\n  height: 100%;\n  padding-left: 4px;\n}\n\n.Stats-module_graphContainer__BlVFU .Stats-module_graph__l2LGn .Stats-module_graphBar__TvsIP {\n  height: 100%;\n  /* Assume no wins */\n  width: 0%;\n  position: relative;\n  background-color: var(--color-absent);\n  display: flex;\n  justify-content: center;\n}\n\n.Stats-module_graphContainer__BlVFU .Stats-module_graph__l2LGn .Stats-module_graphBar__TvsIP.Stats-module_highlight__fBBiL {\n  background-color: var(--color-correct);\n}\n\n.Stats-module_graphContainer__BlVFU .Stats-module_graph__l2LGn .Stats-module_graphBar__TvsIP.Stats-module_alignRight__29Xhl {\n  justify-content: flex-end;\n  padding-right: 8px;\n}\n\n.Stats-module_graphContainer__BlVFU .Stats-module_graph__l2LGn .Stats-module_numGuesses__aB7UF {\n  font-weight: bold;\n  color: var(--tile-text-color);\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.Stats-module_footer__IY-Bt {\n  display: flex;\n  width: 100%;\n}\n\n.Stats-module_countdown__a-cWu {\n  border-right: 1px solid var(--color-tone-1);\n  padding-right: 12px;\n  width: 50%;\n}\n\n.Stats-module_share__kfJ-m {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 12px;\n  width: 50%;\n}\n\n.Stats-module_noData__D3wkv {\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.Stats-module_shareButton__eNFFD {\n  background-color: var(--key-bg-correct);\n  color: var(--key-evaluated-text-color);\n  font-family: inherit;\n  font-weight: bold;\n  border-radius: 4px;\n  cursor: pointer;\n  border: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  text-transform: uppercase;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);\n  width: 80%;\n  font-size: 20px;\n  height: 52px;\n  filter: brightness(100%);\n}\n\n@media (max-width: 444px) {\n  .Stats-module_shareButton__eNFFD {\n    font-size: 16px;\n  }\n}\n.Stats-module_shareButton__eNFFD:hover {\n  opacity: 0.9;\n}\n\n.Stats-module_shareIconContainer__j2o6K {\n  width: 24px;\n  height: 24px;\n  padding-left: 8px;\n}\n\n.Stats-module_statsBtnLeft__q1PQ8 {\n  justify-content: unset;\n  width: 80%;\n  margin: 12px 0px 20px 15px;\n}\n\n.Stats-module_statsBtnCenter__Kgi5x {\n  margin: 10px;\n}\n\n.Stats-module_statsInfoBtn__WUPls {\n  all: unset;\n  text-decoration: underline;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 16px;\n  margin-bottom: 20px;\n  color: var(--color-tone-10);\n  cursor: pointer;\n}\n\n.Stats-module_promoButton__8dcY3 {\n  border: 1px solid var(--color-tone-1);\n  padding: 10px;\n  border-radius: 105px;\n  background: var(--color-tone-7);\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  color: inherit;\n  text-decoration: none;\n  width: 150px;\n  display: flex;\n  width: 66%;\n  align-items: center;\n  vertical-align: middle;\n  justify-content: center;\n}\n\n.Stats-module_promoIcon__1c9qr {\n  width: 25px;\n  height: 25px;\n  background-image: var(--spelling-bee-promo);\n  background-size: 25px;\n  background-position: center;\n  margin-left: 5px;\n}\n\n.Stats-module_promoButtonContainer__xUFtx {\n  border-top: 1px solid var(--color-tone-9);\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  padding-top: 20px;\n}\n\n.Stats-module_ctaContainer__WSxUG {\n  width: 100%;\n}\n\n.Stats-module_guess__3MeYM {\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.1em;\n}"
  );
  var mr = {
      currentStreak: "Current Streak",
      maxStreak: "Max Streak",
      winPercentage: "Win %",
      gamesPlayed: "Played",
      gamesWon: "Won",
      averageGuesses: "Av. Guesses",
    },
    pr = ["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"];
  function yr(e) {
    var n = e.stats;
    return _.createElement(
      "div",
      { className: dr.statistics },
      pr.map(function (e) {
        var t = n[e];
        return _.createElement(
          "div",
          { className: dr.statisticContainer, key: e },
          _.createElement("div", { className: dr.statistic }, t),
          _.createElement("div", { className: dr.label }, mr[e])
        );
      })
    );
  }
  function gr(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return fr(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return fr(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? fr(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function fr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function hr(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function br(e) {
    var t = e.guesses,
      n = e.rowIndex,
      a = e.gameStatus,
      o = [],
      r = Math.max.apply(Math, gr(Object.values(t)));
    if (
      Object.values(t).every(function (e) {
        return 0 === e;
      })
    )
      return _.createElement(
        _.Fragment,
        null,
        _.createElement("h1", null, "Guess Distribution"),
        _.createElement("div", { className: dr.noData }, "No Data")
      );
    for (var s, i, l = 1; l < Object.keys(t).length; l += 1) {
      var c = l,
        u = t[l],
        d = {
          rowGuess: c,
          percentGuesses: Math.max(7, Math.round((u / r) * 100)),
          numGuesses: u,
          addHighlight: "WIN" === a && l === n,
          index: l,
        },
        m =
          ((c = m = i = s = void 0),
          (s = (u = d).rowGuess),
          (i = d.percentGuesses),
          (m = d.numGuesses),
          (c = d.addHighlight),
          (u = d.index),
          _.createElement(
            "div",
            { className: dr.graphContainer, key: u },
            _.createElement("div", { className: dr.guess }, s),
            _.createElement(
              "div",
              { className: dr.graph },
              _.createElement(
                "div",
                {
                  style: { width: "".concat(i, "%") },
                  className: p(
                    dr.graphBar,
                    (hr((i = {}), dr.alignRight, 0 < m),
                    hr(i, dr.highlight, c),
                    i)
                  ),
                },
                _.createElement("div", { className: dr.numGuesses }, m)
              )
            )
          ));
      o.push(m);
    }
    return _.createElement(
      _.Fragment,
      null,
      _.createElement("h1", null, "Guess Distribution"),
      _.createElement("div", { className: dr.guessDistribution }, o)
    );
  }
  function wr(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return kr(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? kr(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function kr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  var _r = 1e3,
    vr = 60 * _r,
    xr = 60 * vr,
    Sr = 24 * xr,
    Er = function (e) {
      return e.toString().padStart(2, "0");
    };
  function jr() {
    var e = wr(g.useState(""), 2),
      t = e[0],
      a = e[1];
    return (
      g.useEffect(function () {
        var e = new Date();
        e.setDate(e.getDate() + 1), e.setHours(0, 0, 0, 0);
        var t = e.getTime(),
          e = function () {
            return a(
              (function (e) {
                var t = new Date().getTime(),
                  n = Math.floor(e - t);
                if (n <= 0) return "00:00:00";
                (e = Math.floor((n % Sr) / xr)),
                  (t = Math.floor((n % xr) / vr)),
                  (n = Math.floor((n % vr) / _r));
                return "".concat(Er(e), ":").concat(Er(t), ":").concat(Er(n));
              })(t)
            );
          },
          n = setInterval(e, 200);
        return (
          e(),
          function () {
            return clearInterval(n);
          }
        );
      }, []),
      _.createElement(
        "div",
        { className: dr.statisticContainer },
        _.createElement(
          "div",
          { className: p(dr.statistic, dr.timer) },
          _.createElement("div", { id: "timer", "data-testid": "timer" }, t)
        )
      )
    );
  }
  var zr = {
    promo: "Promo-module_promo__OjSS6",
    promoLink: "Promo-module_promoLink__9Rsas",
    promoCta: "Promo-module_promoCta__J70IK",
    promoText: "Promo-module_promoText__wg6Vu",
    promoTitle: "Promo-module_promoTitle__TgBo2",
    promoTextPrimary: "Promo-module_promoTextPrimary__chnyc",
    promoTextSecondary: "Promo-module_promoTextSecondary__mjI5B",
    promoIcon: "Promo-module_promoIcon__GIqUm",
    promoArrow: "Promo-module_promoArrow__iqw6N",
    rule: "Promo-module_rule__Yn4Pk",
  };
  function Nr(e) {
    var t = e.trackClick;
    return _.createElement(
      "div",
      { className: zr.promo },
      _.createElement("div", { className: zr.rule }),
      _.createElement(
        "a",
        {
          href: "https://www.nytimes.com/puzzles/spelling-bee",
          className: zr.promoLink,
          onClick: function (e) {
            e.stopPropagation(), t();
          },
        },
        _.createElement(
          "div",
          { className: zr.promoIcon },
          _.createElement(
            "svg",
            {
              width: "42",
              height: "44",
              viewBox: "0 0 42 44",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            _.createElement("path", {
              d: "M24.9528 14.8924L28.952 21.8171L24.9528 28.7417H16.9628L12.9636 21.8171L16.9628 14.8924H24.9528Z",
              fill: "#F7DA21",
              stroke: "#F7DA21",
              strokeWidth: "0.495011",
            }),
            _.createElement("path", {
              d: "M12.9892 21.7667L16.9884 28.6914L12.9892 35.616H4.99921L1 28.6914L4.99921 21.7667H12.9892Z",
              fill: "white",
              stroke: "#121212",
              strokeWidth: "1.5",
            }),
            _.createElement("path", {
              d: "M17.0056 14.8493L13.0064 7.92463L17.0056 1L24.9955 1L28.9948 7.92463L24.9955 14.8493L17.0056 14.8493Z",
              fill: "white",
              stroke: "#121212",
              strokeWidth: "1.5",
            }),
            _.createElement("path", {
              d: "M37.0008 7.96736L41 14.892L37.0008 21.8166H29.0108L25.0116 14.892L29.0108 7.96736H37.0008Z",
              fill: "white",
              stroke: "#121212",
              strokeWidth: "1.5",
            }),
            _.createElement("path", {
              d: "M12.9972 7.96736L16.9964 14.892L12.9972 21.8166H5.00727L1.00806 14.892L5.00727 7.96736H12.9972Z",
              fill: "white",
              stroke: "#121212",
              strokeWidth: "1.5",
            }),
            _.createElement("path", {
              d: "M37.0008 21.8089L41 28.7335L37.0008 35.6582H29.0108L25.0116 28.7335L29.0108 21.8089H37.0008Z",
              fill: "white",
              stroke: "#121212",
              strokeWidth: "1.5",
            }),
            _.createElement("path", {
              d: "M24.9947 28.7333L28.9939 35.658L24.9947 42.5826H17.0047L13.0055 35.658L17.0047 28.7333H24.9947Z",
              fill: "white",
              stroke: "#121212",
              strokeWidth: "1.5",
            })
          )
        ),
        _.createElement(
          "div",
          { className: zr.promoText },
          _.createElement(
            "span",
            { className: zr.promoTextPrimary },
            "How many words can you find",
            " "
          ),
          _.createElement(
            "span",
            { className: zr.promoTextsecondary },
            "using 7 letters?"
          ),
          _.createElement(
            "span",
            { className: zr.promoCta },
            "Play Spelling Bee"
          )
        ),
        _.createElement(
          "div",
          { className: zr.promoArrow },
          _.createElement(
            "svg",
            {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            _.createElement("circle", {
              cx: "12",
              cy: "12",
              r: "12",
              fill: "var(--svg-arrow-fill)",
            }),
            _.createElement("path", {
              d: "M10.4038 6L15.8076 11.4038L10.4038 16.8076",
              stroke: "var(--svg-arrow-stroke)",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          )
        )
      )
    );
  }
  function Cr(e, s, i, l) {
    return new (i = i || Promise)(function (n, t) {
      function a(e) {
        try {
          r(l.next(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        try {
          r(l.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function r(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value) instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })
            ).then(a, o);
      }
      r((l = l.apply(e, s || [])).next());
    });
  }
  function Ar(n, a) {
    var o,
      r,
      s,
      i = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: [],
      },
      e = { next: t(0), throw: t(1), return: t(2) };
    return (
      "function" == typeof Symbol &&
        (e[Symbol.iterator] = function () {
          return this;
        }),
      e
    );
    function t(t) {
      return function (e) {
        return (function (t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; i; )
            try {
              if (
                ((o = 1),
                r &&
                  (s =
                    2 & t[0]
                      ? r.return
                      : t[0]
                      ? r.throw || ((s = r.return) && s.call(r), 0)
                      : r.next) &&
                  !(s = s.call(r, t[1])).done)
              )
                return s;
              switch (((r = 0), (t = s ? [2 & t[0], s.value] : t)[0])) {
                case 0:
                case 1:
                  s = t;
                  break;
                case 4:
                  return i.label++, { value: t[1], done: !1 };
                case 5:
                  i.label++, (r = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !(
                      (s = 0 < (s = i.trys).length && s[s.length - 1]) ||
                      (6 !== t[0] && 2 !== t[0])
                    )
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === t[0] && (!s || (t[1] > s[0] && t[1] < s[3]))) {
                    i.label = t[1];
                    break;
                  }
                  if (6 === t[0] && i.label < s[1]) {
                    (i.label = s[1]), (s = t);
                    break;
                  }
                  if (s && i.label < s[2]) {
                    (i.label = s[2]), i.ops.push(t);
                    break;
                  }
                  s[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              t = a.call(n, i);
            } catch (e) {
              (t = [6, e]), (r = 0);
            } finally {
              o = s = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        })([t, e]);
      };
    }
  }
  k(
    '.Promo-module_promo__OjSS6 {\n  margin-top: 12px;\n  width: 100%;\n}\n\n.Promo-module_promoLink__9Rsas {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-start;\n  text-decoration: none;\n  padding-top: 16px;\n}\n.Promo-module_promoLink__9Rsas:hover {\n  --svg-arrow-fill: var(--svg-arrow-fill-hover);\n  --svg-arrow-stroke: var(--svg-arrow-stroke-hover);\n}\n.Promo-module_promoLink__9Rsas:hover .Promo-module_promoCta__J70IK {\n  text-decoration: underline;\n}\n\n.Promo-module_promoText__wg6Vu {\n  font-family: "nyt-franklin-500";\n  font-size: 14px;\n  color: var(--color-tone-1);\n  flex-grow: 2;\n  line-height: 16px;\n}\n\n.Promo-module_promoTitle__TgBo2 {\n  font-family: "nyt-franklin";\n  font-weight: 700;\n}\n\n.Promo-module_promoCta__J70IK {\n  display: block;\n  font-family: "nyt-franklin";\n  font-weight: 700;\n  margin-top: 4px;\n}\n\n/* Text balancing */\n.Promo-module_promoTextPrimary__chnyc {\n  display: inline;\n}\n\n/* Text balancing */\n.Promo-module_promoTextSecondary__mjI5B {\n  display: inline;\n}\n\n/* Text balancing */\n@media (max-width: 500px) {\n  .Promo-module_promoTextPrimary__chnyc {\n    display: block;\n  }\n\n  .Promo-module_promoTextSecondary__mjI5B {\n    display: block;\n  }\n}\n.Promo-module_promoIcon__GIqUm {\n  width: var(--promo-icon-width);\n  height: var(--promo-icon-height);\n  margin-right: 16px;\n  padding: var(--promo-icon-padding);\n}\n\n.Promo-module_promoArrow__iqw6N {\n  justify-self: flex-end;\n}\n\n.Promo-module_rule__Yn4Pk {\n  margin-left: -16px;\n  height: 1px;\n  position: absolute;\n  width: 100%;\n  background-color: var(--color-tone-4);\n}'
  ),
    function () {
      (console.warn || console.log).apply(console, arguments);
    }.bind("[clipboard-polyfill]");
  var ce = "undefined" == typeof navigator ? void 0 : navigator,
    A = null == ce ? void 0 : ce.clipboard,
    Or =
      (null === (ce = null == A ? void 0 : A.read) ||
        void 0 === ce ||
        ce.bind(A),
      null === (ce = null == A ? void 0 : A.readText) ||
        void 0 === ce ||
        ce.bind(A),
      null === (ce = null == A ? void 0 : A.write) ||
        void 0 === ce ||
        ce.bind(A),
      null === (ce = null == A ? void 0 : A.writeText) || void 0 === ce
        ? void 0
        : ce.bind(A)),
    A = "undefined" == typeof window ? void 0 : window,
    Ir = (null == A || A.ClipboardItem, A);
  function Lr() {
    this.success = !1;
  }
  function Tr(e) {
    var t = new Lr(),
      e = function (e, t, n) {
        for (var a in ((e.success = !0), t)) {
          var o = t[a],
            r = n.clipboardData;
          r.setData(a, o),
            "text/plain" === a && r.getData(a) !== o && (e.success = !1);
        }
        n.preventDefault();
      }.bind(this, t, e);
    document.addEventListener("copy", e);
    try {
      document.execCommand("copy");
    } finally {
      document.removeEventListener("copy", e);
    }
    return t.success;
  }
  function Pr(e, t) {
    Mr(e);
    t = Tr(t);
    return Br(), t;
  }
  function Mr(e) {
    var t,
      n = document.getSelection();
    n &&
      ((t = document.createRange()).selectNodeContents(e),
      n.removeAllRanges(),
      n.addRange(t));
  }
  function Br() {
    var e = document.getSelection();
    e && e.removeAllRanges();
  }
  function Rr(a) {
    return Cr(this, void 0, void 0, function () {
      var n;
      return Ar(this, function (e) {
        if (
          ((n = "text/plain" in a),
          "undefined" != typeof ClipboardEvent ||
            void 0 === Ir.clipboardData ||
            void 0 === Ir.clipboardData.setData)
        )
          return Tr(a) ||
            -1 < navigator.userAgent.indexOf("Edge") ||
            Pr(document.body, a) ||
            (function (e) {
              var t = document.createElement("div");
              t.setAttribute("style", "-webkit-user-select: text !important"),
                (t.textContent = "temporary element"),
                document.body.appendChild(t);
              e = Pr(t, e);
              return document.body.removeChild(t), e;
            })(a) ||
            (function (e) {
              var t = document.createElement("div");
              t.setAttribute("style", "-webkit-user-select: text !important");
              var n = t;
              t.attachShadow && (n = t.attachShadow({ mode: "open" }));
              var a = document.createElement("span");
              (a.innerText = e),
                n.appendChild(a),
                document.body.appendChild(t),
                Mr(a);
              a = document.execCommand("copy");
              return Br(), document.body.removeChild(t), a;
            })(a["text/plain"])
            ? [2, !0]
            : [2, !1];
        var t;
        if (!n) throw new Error("No `text/plain` value was specified.");
        if (((t = a["text/plain"]), Ir.clipboardData.setData("Text", t)))
          return [2, !0];
        throw new Error(
          "Copying failed, possibly because the user rejected it."
        );
      });
    });
  }
  function Wr(n) {
    return Cr(this, void 0, void 0, function () {
      return Ar(this, function (e) {
        if (Or) return [2, Or(n)];
        if (!Rr((((t = {})["text/plain"] = n), t)))
          throw new Error("writeText() failed");
        var t;
        return [2];
      });
    });
  }
  function Hr() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4)
      )
    );
  }
  var Dr = function () {
      return "android" === window.newsreaderAppPlatform;
    },
    qr = function () {
      return "android" === window.gamesAppPlatform;
    };
  function Gr(e, t, n) {
    try {
      Hr() &&
      !(-1 < navigator.userAgent.toLowerCase().indexOf("firefox")) &&
      void 0 !== navigator.share &&
      navigator.canShare &&
      navigator.canShare(e)
        ? navigator.share(e).catch(function () {})
        : Wr(e.text).then(t, n);
    } catch (e) {
      n(), console.warn("Share failed", e);
    }
  }
  function Fr(e, t, n) {
    var a, o;
    (qr() || Dr()) && window.isHybridWebView
      ? ((a = null == e ? void 0 : e.text),
        null !== (o = window.NativeBridge) &&
          void 0 !== o &&
          o.share(a, "", ""))
      : Gr(e, t, n);
  }
  var Vr = "AuthCTA-module_container__mFg-m",
    Yr = "AuthCTA-module_icon__fZT88",
    Ur = "AuthCTA-module_promoIcon__2-SRz",
    Zr = "AuthCTA-module_textContainer__kIjDX",
    Xr = "AuthCTA-module_bold__ThmkP",
    Kr = "AuthCTA-module_subText__2Qsw5",
    Jr = "AuthCTA-module_title__iBYtq",
    Qr = "AuthCTA-module_line1__ehobb",
    $r = "AuthCTA-module_buttonsContainer__y0b1J",
    es = "AuthCTA-module_moreLink__pAJHo",
    ts = "AuthCTA-module_loginButton__0FcEr",
    ns = "AuthCTA-module_footer__9-hGG",
    as = "AuthCTA-module_footerContainer__j9w3x",
    os = "AuthCTA-module_promoButton__i3iNK",
    rs = "AuthCTA-module_shareButton__SsNA6",
    ss = "AuthCTA-module_shareIcon__x5WtP",
    is = "AuthCTA-module_shareText__o7WL-";
  function ls(e) {
    var t = e.loggedIn,
      n = e.moogleOptedIn,
      a = T(),
      e = t && !n,
      o = "IN_PROGRESS" !== P(Ge);
    return n
      ? null
      : _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            { className: Vr },
            _.createElement(
              "div",
              null,
              _.createElement("img", {
                className: Yr,
                alt: "Statistics Graph Bar in Green with Check Mark",
                style: { content: "var(--stats-auth)" },
              })
            ),
            _.createElement(
              "div",
              { className: Zr },
              _.createElement("p", { className: Jr }, "New"),
              _.createElement(
                "p",
                { className: p(Xr, Qr) },
                "Link your stats to ",
                t ? "this" : "a free",
                " New York Times account."
              ),
              _.createElement(
                "p",
                { className: Kr },
                "Your stats ",
                !t && "and streak",
                " will save wherever you play."
              )
            )
          ),
          _.createElement(
            "div",
            { className: $r },
            !t &&
              _.createElement(
                "div",
                { className: ts },
                _.createElement(
                  uo,
                  {
                    ariaLabel: "Link for logging in or creating a free account",
                    optIn: !0,
                    trackEvent: {
                      eventName: "log-in-congrats",
                      sendContext: !0,
                    },
                  },
                  "Log in or create a free account"
                )
              ),
            e &&
              _.createElement(
                "button",
                {
                  type: "button",
                  className: ts,
                  "aria-label": "Link stats to my account",
                  onClick: function () {
                    o && a(ie("stats-link-congrats", !0)), a(te("statsLink"));
                  },
                },
                "Link stats to my account"
              ),
            _.createElement("br", null),
            _.createElement(
              "button",
              {
                className: es,
                type: "button",
                onClick: function () {
                  a(te("linkInfo"));
                },
              },
              "Tell me more >"
            )
          )
        );
  }
  function cs(e) {
    var t = e.handleShare,
      n = e.handleTrack;
    return _.createElement(
      "div",
      { className: ns },
      _.createElement("p", null, "NEXT WORDLE"),
      _.createElement(jr, null),
      _.createElement(
        "div",
        { className: as },
        _.createElement(
          "a",
          {
            type: "button",
            id: "promo-button",
            className: os,
            onClick: function () {
              return n();
            },
            href: "https://www.nytimes.com/puzzles/spelling-bee",
          },
          _.createElement("span", null, "Play Spelling Bee"),
          _.createElement("span", { className: Ur })
        ),
        _.createElement(
          "button",
          { type: "button", id: "share-button", className: rs, onClick: t },
          _.createElement("span", { className: is }, "Share"),
          _.createElement(Jo, { id: ss, icon: "share" })
        )
      )
    );
  }
  function us() {
    var t = T(),
      n = "".concat(P(Ye)),
      e = P(mo),
      a = P(Ge),
      o = P(Fe),
      r = P(bo),
      s = "IN_PROGRESS" !== a,
      i = P(Ee),
      l = !!P(Ae),
      c = no("auth") || i;
    g.useEffect(function () {
      t(ir(s));
    }, []);
    function u() {
      v.trackClick({
        name: "wordle",
        label: "next-game",
        context: "spelling-bee",
        useBeacon: !0,
      });
    }
    function d(e) {
      e.preventDefault(),
        e.stopPropagation(),
        v.trackClick({ name: "wordle", label: "share", context: n }),
        Fr(
          r,
          function () {
            t(lr()),
              t(
                se({
                  text: "Copied results to clipboard",
                  duration: 2e3,
                  isSystem: !0,
                })
              );
          },
          function () {
            t(se({ text: "Share failed", duration: 2e3, isSystem: !0 }));
          }
        );
    }
    if (c) {
      c = 0 === e.gamesPlayed ? dr.statsBtnCenter : dr.statsBtnLeft;
      return _.createElement(
        "div",
        { "data-testid": "authContainer", className: dr.gameStats },
        _.createElement(
          "h1",
          { className: dr.statisticsHeading },
          "Statistics"
        ),
        _.createElement(yr, { stats: e }),
        _.createElement(br, { guesses: e.guesses, rowIndex: o, gameStatus: a }),
        _.createElement(
          "div",
          { className: c },
          _.createElement(
            "button",
            {
              type: "button",
              className: dr.statsInfoBtn,
              onClick: function () {
                return t(te("statsProblem"));
              },
            },
            "My stats don't look right >"
          )
        ),
        _.createElement(
          "div",
          { className: dr.ctaContainer },
          _.createElement(ls, { loggedIn: l, moogleOptedIn: i }),
          s
            ? _.createElement(cs, { handleTrack: u, handleShare: d })
            : _.createElement(
                "div",
                { className: dr.promoButtonContainer },
                _.createElement(
                  "a",
                  {
                    type: "button",
                    id: "promo-button",
                    className: dr.promoButton,
                    href: "https://www.nytimes.com/puzzles/spelling-bee",
                    onClick: function () {
                      u();
                    },
                  },
                  _.createElement("span", null, "Play Spelling Bee"),
                  _.createElement("span", { className: dr.promoIcon })
                )
              )
        )
      );
    }
    return _.createElement(
      "div",
      { className: dr.gameStats },
      _.createElement("h1", null, "Statistics"),
      _.createElement(yr, { stats: e }),
      _.createElement(br, { guesses: e.guesses, rowIndex: o, gameStatus: a }),
      s &&
        _.createElement(
          "div",
          { className: dr.footer },
          _.createElement(
            "div",
            { className: dr.countdown },
            _.createElement("h1", null, "Next WORDLE"),
            _.createElement(jr, null)
          ),
          _.createElement(
            "div",
            { className: dr.share },
            _.createElement(
              "button",
              {
                type: "button",
                id: "share-button",
                className: dr.shareButton,
                onClick: d,
              },
              "Share",
              _.createElement(
                "span",
                { className: dr.shareIconContainer },
                _.createElement(Jo, { icon: "share" })
              )
            )
          )
        ),
      _.createElement(Nr, { trackClick: u })
    );
  }
  k(
    ".AuthCTA-module_container__mFg-m {\n  border-top: 1px solid var(--color-tone-9);\n  text-align: left;\n  display: flex;\n  padding: 10px;\n  padding-bottom: 7px;\n  padding-left: 14px;\n}\n\n@media (min-width: 500px) {\n  .AuthCTA-module_container__mFg-m {\n    padding: 15px 50px 10px 50px;\n  }\n}\n.AuthCTA-module_icon__fZT88 {\n  padding-top: 10px;\n}\n\n.AuthCTA-module_promoIcon__2-SRz {\n  width: 25px;\n  height: 25px;\n  background-image: var(--spelling-bee-promo);\n  background-size: 25px;\n  background-position: center;\n  margin-left: 5px;\n}\n\n.AuthCTA-module_textContainer__kIjDX > p {\n  margin: 5px;\n}\n.AuthCTA-module_textContainer__kIjDX .AuthCTA-module_bold__ThmkP {\n  color: var(--color-tone-1);\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n}\n.AuthCTA-module_textContainer__kIjDX .AuthCTA-module_subText__2Qsw5 {\n  color: var(--color-tone-11);\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  margin-bottom: 12px;\n}\n.AuthCTA-module_textContainer__kIjDX .AuthCTA-module_title__iBYtq {\n  color: #2671dc;\n  font-weight: 700;\n  font-size: 11px;\n  line-height: 12px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n.AuthCTA-module_textContainer__kIjDX .AuthCTA-module_line1__ehobb {\n  margin-bottom: 0;\n}\n.AuthCTA-module_textContainer__kIjDX .AuthCTA-module_line2__3-cVE {\n  margin-top: 0;\n  margin-bottom: 4px;\n}\n\n.AuthCTA-module_buttonsContainer__y0b1J {\n  text-align: center;\n  margin-top: 10px;\n}\n.AuthCTA-module_buttonsContainer__y0b1J .AuthCTA-module_moreLink__pAJHo {\n  all: unset;\n  text-decoration: underline;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 16px;\n  color: var(--color-tone-11);\n  margin: 10px 20px 20px 20px;\n  cursor: pointer;\n}\n.AuthCTA-module_buttonsContainer__y0b1J .AuthCTA-module_loginButton__0FcEr {\n  background-color: var(--color-tone-7);\n  color: var(--color-tone-1);\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 14px;\n  border: 1px solid var(--color-tone-1);\n  border-radius: 55px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.04em;\n  text-decoration: none;\n  padding: 14px 5px;\n}\n.AuthCTA-module_buttonsContainer__y0b1J .AuthCTA-module_loginButton__0FcEr > a {\n  color: inherit;\n  text-decoration: none;\n}\n\n@media (min-width: 500px) {\n  .AuthCTA-module_buttonsContainer__y0b1J {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  .AuthCTA-module_loginButton__0FcEr {\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 499px) {\n  .AuthCTA-module_buttonsContainer__y0b1J {\n    width: 70%;\n    margin: 0 auto;\n  }\n\n  .AuthCTA-module_loginButton__0FcEr {\n    width: 100%;\n  }\n}\n.AuthCTA-module_footer__9-hGG {\n  text-align: center;\n  width: 100%;\n  border-top: 1px solid var(--color-tone-9);\n}\n.AuthCTA-module_footer__9-hGG p {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  align-items: center;\n  letter-spacing: 0.07em;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\n.AuthCTA-module_footerContainer__j9w3x {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n}\n.AuthCTA-module_footerContainer__j9w3x > a.AuthCTA-module_promoButton__i3iNK,\n.AuthCTA-module_footerContainer__j9w3x button.AuthCTA-module_shareButton__SsNA6 {\n  width: 50%;\n}\n\n.AuthCTA-module_promoButton__i3iNK {\n  border: 1px solid var(--color-tone-1);\n  padding: 10px;\n  border-radius: 105px;\n  background: var(--color-tone-7);\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  color: inherit;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n  vertical-align: middle;\n  justify-content: center;\n}\n\n.AuthCTA-module_shareButton__SsNA6 {\n  background-color: var(--key-bg-correct);\n  color: var(--key-evaluated-text-color);\n  border-radius: 104px;\n  border: none;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  width: 80%;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n#AuthCTA-module_shareIcon__x5WtP {\n  vertical-align: middle;\n  margin-left: 10px;\n}\n\n.AuthCTA-module_shareText__o7WL- {\n  color: var(--white);\n}"
  );
  function ds(e) {
    var t,
      n,
      a,
      o =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : "Wordle Feedback",
      r = new Date().getTimezoneOffset(),
      s = ta(e),
      s = "\r\n\r\n\n--\nDevice summary:\nPage: /games/wordle\nPlatform: "
        .concat(Hr() ? "Web (Mobile)" : "Web (Desktop)", " \nBrowser: ")
        .concat(
          (t = t =
            (t = navigator.userAgent).match(/chrome|chromium|crios/i)
              ? "chrome"
              : t.match(/firefox|fxios/i)
              ? "firefox"
              : t.match(/safari/i)
              ? "safari"
              : t.match(/opr\//i)
              ? "opera"
              : t.match(/edg/i)
              ? "edge"
              : "No browser detection")
            .charAt(0)
            .toUpperCase() + t.slice(1),
          "\nScreen Resolution: "
        )
        .concat(window.screen.width, " x ")
        .concat(window.screen.height, "\nViewport Size: ")
        .concat(document.documentElement.clientWidth, " x ")
        .concat(
          document.documentElement.clientHeight,
          "\nTimezone: ",
          "UTC".concat(0 < r ? "" : "+").concat(r / -60),
          "\nBuild: "
        )
        .concat(
          null === (r = window.sentryConfig) || void 0 === r
            ? void 0
            : r.release,
          "\n\nAnon Local Storage:\n"
        )
        .concat(s.anon, "\n\nLocal Storage Statistics:\n")
        .concat(s.stats, "\n\nLocal Storage for regi: ")
        .concat(e || "[NONE]", ":\n")
        .concat(s.regi, "\n  ");
    return (
      "mailto:nytgames@nytimes.com" +
      ((n = { subject: o, body: s }),
      (a = []),
      Object.keys(n).forEach(function (e) {
        a.push(
          "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(n[e]))
        );
      }),
      "?".concat(a.join("&")))
    );
  }
  function ms(e, t) {
    return { type: ps, payload: { name: e, value: t } };
  }
  var ps = "wordle/settings/CHANGE_SETTING",
    ys = "Switch-module_container__DiBse",
    gs = "Switch-module_switch__LLcMj",
    fs = "Switch-module_knob__oRTpP",
    hs = "Switch-module_checked__81fA3",
    bs = "Switch-module_disabled__6ofuZ";
  function ws(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  k(
    ".Switch-module_container__DiBse {\n  display: flex;\n  justify-content: space-between;\n}\n\n.Switch-module_switch__LLcMj {\n  height: 20px;\n  width: 32px;\n  background: var(--color-tone-3);\n  border: none;\n  border-radius: 999px;\n  display: block;\n  position: relative;\n}\n\n.Switch-module_knob__oRTpP {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  height: calc(100% - 4px);\n  width: 50%;\n  border-radius: 8px;\n  background: var(--white);\n  transform: translateX(0);\n  transition: transform 0.3s;\n}\n\n.Switch-module_checked__81fA3 .Switch-module_switch__LLcMj {\n  background: var(--color-correct);\n}\n.Switch-module_checked__81fA3 .Switch-module_knob__oRTpP {\n  transform: translateX(calc(100% - 4px));\n}\n\n.Switch-module_container__DiBse.Switch-module_disabled__6ofuZ .Switch-module_switch__LLcMj {\n  opacity: 0.5;\n}"
  );
  function ks(e) {
    var t = e.disabled,
      n = e.name,
      a = e.onClick,
      o = e.selected;
    return _.createElement(
      "div",
      { id: n, className: p(ys, (ws((e = {}), hs, o), ws(e, bs, t), e)) },
      _.createElement(
        "button",
        {
          "aria-checked": o,
          "aria-label": n,
          className: gs,
          onClick: a,
          role: "switch",
          type: "button",
        },
        _.createElement("span", { className: fs })
      )
    );
  }
  var _s = "Settings-module_setting__IdN-T",
    vs = "Settings-module_title__f-cFy",
    xs = "Settings-module_text__o3woy",
    Ss = "Settings-module_feedbackLink__eL28L",
    Es = "Settings-module_description__rTo9u",
    js = "Settings-module_footnote__UtMtH",
    zs = "Settings-module_enableAuth__TOxGg";
  k(
    ".Settings-module_setting__IdN-T {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--color-tone-4);\n  padding: 16px 0;\n}\n.Settings-module_setting__IdN-T a,\n.Settings-module_setting__IdN-T a:visited {\n  color: var(--color-tone-2);\n}\n\n.Settings-module_title__f-cFy {\n  font-size: 18px;\n}\n\n.Settings-module_text__o3woy {\n  padding-right: 8px;\n}\n\n.Settings-module_feedbackLink__eL28L {\n  text-decoration: underline;\n}\n\n.Settings-module_description__rTo9u {\n  font-size: 12px;\n  color: var(--color-tone-2);\n}\n\n.Settings-module_footnote__UtMtH {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 16px;\n  color: var(--color-tone-2);\n  font-size: 12px;\n  text-align: right;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n@media (min-width: 501px) {\n  .Settings-module_footnote__UtMtH.Settings-module_enableAuth__TOxGg {\n    position: initial;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .Settings-module_setting__IdN-T {\n    padding: 16px;\n  }\n}"
  );
  var Ns = function () {
      var e = T(),
        t = P(Ye),
        n = P(Ge),
        a = P(Fe),
        o = P(L),
        r = P(I),
        s = P(O),
        i = P(Ee),
        l = P(Ae),
        c = no("auth"),
        u = !s && "IN_PROGRESS" === n && 0 !== a,
        a = c || i,
        c = window.isHybridWebView ? void 0 : ds(l);
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(
          "div",
          null,
          _.createElement(
            "section",
            null,
            _.createElement(
              "div",
              { className: _s },
              _.createElement(
                "div",
                { className: xs },
                _.createElement("div", { className: vs }, "Hard Mode"),
                _.createElement(
                  "div",
                  { className: Es },
                  "Any revealed hints must be used in subsequent guesses"
                )
              ),
              _.createElement(
                "div",
                null,
                _.createElement(ks, {
                  disabled: u,
                  name: "hardMode",
                  onClick: function () {
                    e(
                      u
                        ? se({
                            text: "Hard mode can only be enabled at the start of a round",
                            duration: 1500,
                            isSystem: !0,
                          })
                        : ms("hardMode", !s)
                    );
                  },
                  selected: s,
                })
              )
            ),
            _.createElement(
              "div",
              { className: _s },
              _.createElement(
                "div",
                { className: xs },
                _.createElement("div", { className: vs }, "Dark Theme")
              ),
              _.createElement(
                "div",
                null,
                _.createElement(ks, {
                  name: "darkMode",
                  onClick: function () {
                    return e(ms("darkMode", !r));
                  },
                  selected: r,
                })
              )
            ),
            _.createElement(
              "div",
              { className: _s },
              _.createElement(
                "div",
                { className: xs },
                _.createElement("div", { className: vs }, "High Contrast Mode"),
                _.createElement(
                  "div",
                  { className: Es },
                  "For improved color vision"
                )
              ),
              _.createElement(
                "div",
                null,
                _.createElement(ks, {
                  name: "colorblindMode",
                  onClick: function () {
                    return e(ms("colorblindMode", !o));
                  },
                  selected: o,
                })
              )
            )
          ),
          _.createElement(
            "section",
            null,
            _.createElement(
              "div",
              { className: _s },
              _.createElement(
                "div",
                { className: xs },
                _.createElement("div", { className: vs }, "Feedback")
              ),
              _.createElement(
                "div",
                null,
                _.createElement(
                  "a",
                  {
                    className: Ss,
                    href: c,
                    title: "nytgames@nytimes.com",
                    onClick: function (e) {
                      var t, n, a, o;
                      window.isHybridWebView &&
                        window.NativeBridge &&
                        (e.preventDefault(),
                        (n = ta((t = l))),
                        (a = t || "[NONE]"),
                        (o = new Date().getTimezoneOffset()),
                        (e = Object.entries(window.abra.tests)
                          .map(function (e) {
                            return e.join("=");
                          })
                          .join(",")),
                        (n = [
                          "Hybrid summary:",
                          "Platform: ".concat(
                            window.newsreaderAppPlatform ? "News App" : "XW App"
                          ),
                          "Viewport Size: "
                            .concat(document.documentElement.clientWidth, " x ")
                            .concat(document.documentElement.clientHeight),
                          "Timezone: ".concat(
                            "UTC".concat(0 < o ? "" : "+").concat(o / -60)
                          ),
                          "Logged In: ".concat(t ? "yes" : "no"),
                          "Regi: ".concat(a),
                          "Web Version: ".concat(window.env.version),
                          "Flags: ".concat(e),
                          "Anon Local Storage: ".concat(n.anon),
                          "Local Storage Statistics: ".concat(n.stats),
                          "Local Storage for regi "
                            .concat(a, ": ")
                            .concat(n.regi),
                          "Build: ".concat(
                            null === (n = window.sentryConfig) || void 0 === n
                              ? void 0
                              : n.release
                          ),
                        ].join("\n")),
                        window.NativeBridge.gamesSendEmail({
                          type: "feedback",
                          debugInfo: n,
                        }));
                    },
                  },
                  "Email"
                )
              )
            ),
            _.createElement(
              "div",
              { className: _s },
              _.createElement(
                "div",
                { className: xs },
                _.createElement("div", { className: vs }, "Community")
              ),
              _.createElement(
                "div",
                null,
                _.createElement(
                  "a",
                  {
                    href: "https://twitter.com/NYTGames",
                    target: "blank",
                    title: "@NYTGames",
                  },
                  "Twitter"
                )
              )
            ),
            _.createElement(
              "div",
              { className: _s },
              _.createElement(
                "div",
                { className: xs },
                _.createElement("div", { className: vs }, "Questions?")
              ),
              _.createElement(
                "div",
                null,
                _.createElement(
                  "a",
                  {
                    href: "https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB",
                    target: "blank",
                  },
                  "FAQ"
                )
              )
            )
          )
        ),
        _.createElement(
          "div",
          {
            className: p(
              js,
              ((i = a),
              (c = zs) in (a = {})
                ? Object.defineProperty(a, c, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (a[c] = i),
              a)
            ),
          },
          _.createElement(
            "div",
            { id: "copyright" },
            "© ",
            new Date().getFullYear(),
            " The New York Times Company"
          ),
          _.createElement("div", null, _.createElement("div", null, "#", t))
        )
      );
    },
    A = function (e) {
      return e.overlays;
    },
    Cs = n.createSelector(A, function (e) {
      return e.modal;
    }),
    As = n.createSelector(A, function (e) {
      return e.error;
    }),
    Os = n.createSelector(A, function (e) {
      return e.page;
    }),
    Is = n.createSelector(A, function (e) {
      return e.isNavModalOpen;
    }),
    Ls = n.createSelector(A, function (e) {
      return e.toasts;
    }),
    Ts = n.createSelector(A, function (e) {
      return e.isPageClosing;
    }),
    Ps = {
      modalOverlay: "Modal-module_modalOverlay__81ZCi",
      content: "Modal-module_content__s8qUZ",
      SlideIn: "Modal-module_SlideIn__g77Ik",
      closing: "Modal-module_closing__pgA2s",
      SlideOut: "Modal-module_SlideOut__Ev3zj",
      closeIcon: "Modal-module_closeIcon__b4z74",
      heading: "Modal-module_heading__oD1Ps",
      enableAuth: "Modal-module_enableAuth__SR682",
      shortStatsModal: "Modal-module_shortStatsModal__QXJBs",
    };
  function Ms() {
    return (Ms =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a = arguments[t];
          for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function Bs(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Rs(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Ws(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Ws(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Ws(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Hs() {
    var t = T(),
      e = P(Cs),
      n = Rs(g.useState(!1), 2),
      a = n[0],
      o = n[1],
      r = P(Ee),
      s = no("auth") || r,
      i = !!P(Ae),
      l = s && "stats" === e && r;
    if (!e) return null;
    function c() {
      o(!0);
    }
    var n = s
        ? function (e) {
            e.currentTarget === e.target && o(!0);
          }
        : c,
      r = {
        help: _.createElement(sr, { isPage: !1, enableAuth: s, isLoggedIn: i }),
        stats: _.createElement(us, null),
        settings: _.createElement(Ns, null),
      }[e],
      i = { help: "how to play", stats: !1, settings: "settings" }[e],
      e = s && i;
    return _.createElement(
      "div",
      {
        className: p(Ps.modalOverlay, Bs({}, Ps.enableAuth, s)),
        onClick: n,
        onAnimationEnd: function (e) {
          e.animationName === Ps.SlideOut && (o(!1), t(ne()));
        },
        role: "button",
      },
      _.createElement(
        "div",
        {
          className: p(
            Ps.content,
            (Bs((n = {}), Ps.closing, a),
            Bs(n, Ps.enableAuth, s),
            Bs(n, Ps.shortStatsModal, l),
            n)
          ),
        },
        e
          ? _.createElement(
              "h1",
              { className: p(Ps.heading, Bs({}, Ps.enableAuth, s)) },
              i
            )
          : null,
        r,
        _.createElement(
          "div",
          { className: Ps.closeIcon },
          _.createElement(Jo, Ms({ icon: "close" }, s && { onClick: c }))
        )
      )
    );
  }
  function Ds() {
    var e = T();
    return _.createElement(
      "a",
      {
        href: "https://www.nytimes.com/crosswords",
        onClick: function () {
          return e(W("wordle", "games-logo-nav", !0, null));
        },
      },
      _.createElement(
        "svg",
        {
          className: "pz-nav__logo",
          width: "95",
          height: "18",
          viewBox: "0 0 138 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "New York Times Games Logo. Click for more puzzles",
        },
        _.createElement("rect", { width: "138", height: "25", fill: "none" }),
        _.createElement("path", {
          d: "M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z",
          fill: "var(--color-tone-1)",
        }),
        _.createElement("path", {
          d: "M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z",
          fill: "var(--color-tone-1)",
        }),
        _.createElement("path", {
          d: "M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z",
          fill: "var(--color-tone-1)",
        }),
        _.createElement("path", {
          d: "M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z",
          fill: "var(--color-tone-1)",
        }),
        _.createElement("path", {
          d: "M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z",
          fill: "var(--color-tone-1)",
        }),
        _.createElement("path", {
          d: "M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z",
          fill: "var(--color-tone-1)",
        }),
        _.createElement("path", {
          d: "M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z",
          fill: "var(--color-tone-1)",
        })
      )
    );
  }
  k(
    ".Modal-module_modalOverlay__81ZCi {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--opacity-50);\n  z-index: var(--modal-z-index);\n}\n\n.Modal-module_content__s8qUZ {\n  position: relative;\n  border-radius: 8px;\n  border: 1px solid var(--color-tone-6);\n  background-color: var(--modal-content-bg);\n  color: var(--color-tone-1);\n  box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n  width: 90%;\n  max-height: 100%;\n  overflow-y: auto;\n  -webkit-animation: Modal-module_SlideIn__g77Ik 200ms;\n          animation: Modal-module_SlideIn__g77Ik 200ms;\n  max-width: var(--game-max-width);\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.Modal-module_content__s8qUZ.Modal-module_closing__pgA2s {\n  -webkit-animation: Modal-module_SlideOut__Ev3zj 200ms;\n          animation: Modal-module_SlideOut__Ev3zj 200ms;\n}\n\n.Modal-module_closeIcon__b4z74 {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.Modal-module_heading__oD1Ps.Modal-module_enableAuth__SR682 {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 15px;\n  margin-top: 0px;\n  display: block;\n}\n\n@media (max-width: 500px) {\n  .Modal-module_modalOverlay__81ZCi.Modal-module_enableAuth__SR682 {\n    align-items: flex-end;\n  }\n\n  .Modal-module_content__s8qUZ.Modal-module_enableAuth__SR682 {\n    min-height: 70%;\n    width: 100%;\n  }\n\n  .Modal-module_content__s8qUZ.Modal-module_shortStatsModal__QXJBs {\n    min-height: unset;\n    width: 100%;\n    padding-bottom: 20px;\n  }\n}\n@-webkit-keyframes Modal-module_SlideIn__g77Ik {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes Modal-module_SlideIn__g77Ik {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes Modal-module_SlideOut__Ev3zj {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(60px);\n  }\n}\n@keyframes Modal-module_SlideOut__Ev3zj {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(60px);\n  }\n}"
  );
  var qs = {
    container: "Nav-module_container__pzbhW",
    navLink: "Nav-module_navLink__7jXMp",
    gameList: "Nav-module_gameList__izZcv",
    nytList: "Nav-module_nytList__Nrzcc",
    navItem: "Nav-module_navItem__Kfeh3",
    navIcon: "Nav-module_navIcon__mgXpj",
    navHeader: "Nav-module_navHeader__KJ4Rd",
    moreText: "Nav-module_moreText__-hcDZ",
    privacy: "Nav-module_privacy__H6Jto",
    privacyStatic: "Nav-module_privacyStatic__f2hFM",
    privacyItem: "Nav-module_privacyItem__F1mag",
  };
  k(
    '.Nav-module_container__pzbhW {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: center;\n}\n.Nav-module_container__pzbhW a.Nav-module_navLink__7jXMp {\n  text-decoration: none;\n  color: inherit;\n}\n\n.Nav-module_gameList__izZcv,\n.Nav-module_nytList__Nrzcc {\n  list-style: none;\n  color: var(--color-tone-1);\n  padding: unset;\n  margin: unset;\n}\n\n.Nav-module_nytList__Nrzcc {\n  margin-top: 5px;\n  padding: 12px 0px;\n  border-top: 1px solid #dcdcdc;\n}\n\n.Nav-module_navItem__Kfeh3 {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  height: 40px;\n  font-family: "nyt-franklin-500";\n  font-size: 16px;\n  line-height: 16px;\n  padding-left: 18px;\n  --hover-color: var(--color-nav-hover);\n}\n\n.Nav-module_navItem__Kfeh3:hover {\n  background-color: var(--hover-color);\n}\n\n.Nav-module_navIcon__mgXpj {\n  padding-bottom: 2px;\n  content: "";\n  height: 20px;\n  width: 28px;\n  padding-right: 8px;\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-size: "20px";\n}\n\n.Nav-module_navHeader__KJ4Rd {\n  padding-top: 18px;\n  padding-left: 18px;\n}\n\n.Nav-module_moreText__-hcDZ {\n  font-family: "nyt-franklin";\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n  line-height: 12px;\n  margin: 32px 0px 24px 0px;\n  padding-left: 18px;\n}\n\n.Nav-module_privacy__H6Jto, .Nav-module_privacyStatic__f2hFM {\n  letter-spacing: 0.5px;\n  font-family: "nyt-franklin-500";\n  margin: 0px 25px 0px 17px;\n  padding: 12px 0px;\n  border-top: 1px solid #dcdcdc;\n  color: var(--color-tone-1);\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: center;\n  font-size: 12px;\n}\n\n.Nav-module_privacyItem__F1mag {\n  height: 40px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  color: var(--color-tone-1);\n}\n\n.Nav-module_privacyStatic__f2hFM {\n  position: static;\n}'
  );
  var Gs = "NavAccount-module_navLoggedIn__QNQGf",
    Fs = "NavAccount-module_navLoggedOut__yVhCA",
    Vs = "NavAccount-module_navDrawerHeading__KRAqm",
    Ys = "NavAccount-module_navDrawerAccount__WqYWH",
    Us = "NavAccount-module_navProfileAccount__sqIxG",
    Zs = "NavAccount-module_logoutButton__rHSrz",
    Xs = "NavAccount-module_subscribeButton__9oHNa",
    Ks = "NavAccount-module_loginButton__ANAQ0",
    Js = "NavAccount-module_navDrawerLink__YqJIR";
  function Qs(e) {
    var t = e.loggedIn,
      n = _.createElement(
        "a",
        { href: de, role: "button", tabIndex: -1, className: Xs },
        "Subscribe"
      ),
      a = _.createElement(
        "a",
        { href: ge, role: "button", tabIndex: -1, className: Ks },
        "Log In"
      ),
      e = _.createElement(
        "a",
        { href: fe, role: "button", tabIndex: -1, className: Zs },
        "Log Out"
      );
    return _.createElement(
      "div",
      { className: Ys },
      t
        ? _.createElement(
            "div",
            { className: Us },
            _.createElement("h4", { className: Vs }, "Profile"),
            _.createElement(
              "a",
              { href: window.navigationLinks.account, className: Js },
              "Account details"
            ),
            _.createElement("div", { className: Gs }, e)
          )
        : _.createElement("div", { className: Fs }, n, a)
    );
  }
  function $s() {
    g.useEffect(function () {
      v.ccpa();
    }, []);
    function t() {
      return {
        backgroundImage:
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
        backgroundSize: "20px",
      };
    }
    var e = v.parsePurrCookieValue(),
      n = no("auth"),
      a = P(Ee),
      n = n || a,
      a = !!n && !!P(Ae),
      o = T();
    return _.createElement(
      "div",
      { className: qs.container },
      _.createElement(
        "span",
        { className: qs.navHeader },
        _.createElement(Ds, null)
      ),
      _.createElement(
        "span",
        { className: qs.moreText },
        "More From New York Times Games"
      ),
      _.createElement(
        "div",
        { className: qs.gameList },
        [
          {
            id: "spelling-bee",
            name: "Spelling Bee",
            url: "/puzzles/spelling-bee?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--spelling-bee)",
            dataTrackLabel: "spelling-bee-nav",
          },
          {
            id: "crossword",
            name: "The Crossword",
            url: "/crosswords/game/daily?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--daily)",
            dataTrackLabel: "daily-page-nav",
          },
          {
            id: "mini",
            name: "The Mini",
            url: "/crosswords/game/mini?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--mini)",
            dataTrackLabel: "mini-page-nav",
          },
          {
            id: "wordlebot",
            name: "WordleBot: Your Daily Wordle Companion",
            url: "/interactive/2022/upshot/wordle-bot.html?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--wordlebot)",
            dataTrackLabel: "wordle-bot-nav",
          },
          {
            id: "chess",
            name: "Chess",
            url: "/spotlight/chess-puzzles?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--chess)",
            dataTrackLabel: "chess-nav",
          },
          {
            id: "gameplay-stories",
            name: "Gameplay Stories",
            url: "/column/wordplay?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            dataTrackLabel: "gameplay-stories-nav",
          },
          {
            id: "more-games",
            name: "More Games",
            url: "/puzzles?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            dataTrackLabel: "all-games-nav",
          },
        ].map(function (e) {
          return _.createElement(
            "a",
            {
              "aria-label": e.name,
              key: e.id,
              className: qs.navLink,
              href: e.url,
              onClick: function () {
                return o(W("wordle", e.dataTrackLabel, !0, null));
              },
            },
            _.createElement(
              "div",
              { className: qs.navItem },
              _.createElement("span", {
                style: t(e.backgroundImage),
                className: qs.navIcon,
              }),
              e.name
            )
          );
        })
      ),
      _.createElement(
        "div",
        { className: qs.nytList },
        [
          {
            id: "nyt",
            name: "The New York Times",
            url: "https://www.nytimes.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--nyt)",
            dataTrackLabel: "nyt-nav",
          },
          {
            id: "cooking",
            name: "New York Times Cooking",
            url: "https://cooking.nytimes.com",
            backgroundImage: "var(--cooking)",
            dataTrackLabel: "cooking-nav",
          },
          {
            id: "wirecutter",
            name: "New York Times Wirecutter",
            url: "https://www.nytimes.com/wirecutter/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--wirecutter)",
            dataTrackLabel: "wirecutter-nav",
          },
          {
            id: "athletic",
            name: "The Athletic",
            url: "https://theathletic.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
            backgroundImage: "var(--athletic)",
            dataTrackLabel: "athletic-nav",
          },
        ].map(function (e) {
          return _.createElement(
            "a",
            {
              "aria-label": e.name,
              href: e.url,
              className: qs.navLink,
              onClick: function () {
                return o(W("wordle", e.dataTrackLabel, !0, null));
              },
              id: e.id,
              key: e.id,
              "data-track-label": e.dataTrackLabel,
            },
            _.createElement(
              "div",
              { className: qs.navItem },
              _.createElement("span", {
                style: t(e.backgroundImage),
                className: qs.navIcon,
              }),
              e.name
            )
          );
        })
      ),
      _.createElement(
        "div",
        { className: n ? qs.privacyStatic : qs.privacy },
        _.createElement(
          "a",
          {
            className: qs.privacyItem,
            href: "https://www.nytimes.com/privacy/privacy-policy",
            "data-track-label": "privacy-policy-nav",
            onClick: function () {
              return o(W("wordle", "privacy-policy-nav", !0, null));
            },
          },
          "Privacy Policy"
        ),
        _.createElement(
          _.Fragment,
          null,
          "show" === e.PURR_DataSaleOptOutUI_v2 &&
            _.createElement(
              "div",
              { className: "ccpa-opt-out" },
              _.createElement(
                "a",
                {
                  href: "#ccpa-hamburger",
                  "data-region": "menu",
                  "data-track": "linkOptOut",
                  className: p(
                    qs.privacyItem,
                    "ccpa-link ccpa-opt-out-link ccpa-impression"
                  ),
                },
                "Do Not Sell My Personal Information"
              )
            ),
          "show-opted-out" === e.PURR_DataSaleOptOutUI_v2 &&
            _.createElement(
              "div",
              null,
              _.createElement(
                "span",
                {
                  "data-region": "menu",
                  "data-track": "optedOut",
                  className: p(
                    qs.privacyItem,
                    "ccpa-user-opted-out ccpa-impression"
                  ),
                },
                "We No Longer Sell Your Personal Information"
              )
            ),
          "show" === e.PURR_CaliforniaNoticesUI &&
            _.createElement(
              "div",
              null,
              _.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://www.nytimes.com/privacy/california-notice",
                  "data-region": "menu",
                  "data-track": "linkCANotice",
                  className: p(
                    qs.privacyItem,
                    "ccpa-link ccpa-california-notice-link ccpa-impression"
                  ),
                },
                "California Notices"
              )
            )
        )
      ),
      n && _.createElement(Qs, { loggedIn: a })
    );
  }
  k(
    '.NavAccount-module_navLoggedIn__QNQGf, .NavAccount-module_navLoggedOut__yVhCA {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  padding: 8px;\n}\n\n.NavAccount-module_navLoggedOut__yVhCA {\n  padding: 16px;\n}\n\n.NavAccount-module_navDrawerHeading__KRAqm {\n  font-family: "nyt-franklin";\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n  line-height: 14px;\n  display: block;\n  padding: 0px 10px;\n}\n\n.NavAccount-module_navDrawerAccount__WqYWH {\n  border-top: 1px solid #000;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--color-tone-7);\n  margin-top: 3px;\n}\n\n.NavAccount-module_navProfileAccount__sqIxG {\n  padding: 5px;\n}\n\n.NavAccount-module_navButton__KTP0f, .NavAccount-module_logoutButton__rHSrz, .NavAccount-module_subscribeButton__9oHNa, .NavAccount-module_loginButton__ANAQ0 {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  font-family: "nyt-franklin";\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.047em;\n  text-transform: uppercase;\n  height: 36px;\n  border: 1px solid #f4f4f4;\n  border-radius: 3px;\n  color: #fff;\n  border-color: #000;\n  background-color: #000;\n  padding: 1px 33px 0;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.NavAccount-module_navDrawerLink__YqJIR {\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  border-left: 4px solid transparent;\n  padding: 0 16px 0 8px;\n  text-decoration: none;\n  color: inherit;\n}\n\n.NavAccount-module_navDrawerLink__YqJIR:hover {\n  background-color: var(--color-nav-hover);\n}\n\n.NavAccount-module_loginButton__ANAQ0 {\n  color: #000;\n  border-color: #000;\n  background-color: #fff;\n  margin-left: 8px;\n}\n\n.NavAccount-module_loginButton__ANAQ0:hover {\n  color: #fff;\n  background-color: #000;\n}\n\n.NavAccount-module_subscribeButton__9oHNa {\n  color: #fff;\n  background-color: #000;\n}\n\n.NavAccount-module_subscribeButton__9oHNa:hover {\n  background-color: #797987;\n  border: none;\n}\n\n.NavAccount-module_logoutButton__rHSrz {\n  color: var(--color-tone-1);\n  background-color: var(--color-tone-7);\n  border: 1px solid var(--color-tone-1);\n  border-radius: 3px;\n}\n\n.NavAccount-module_logoutButton__rHSrz:hover {\n  background-color: #ebebeb;\n}\n\n@media (max-height: 800px) {\n  .NavAccount-module_navDrawerAccount__WqYWH {\n    position: unset;\n  }\n}'
  );
  var ei = {
    overlayNav: "NavModal-module_overlayNav__3y8p3",
    contentNav: "NavModal-module_contentNav__wMSAL",
    SlideRight: "NavModal-module_SlideRight__DNLx-",
    closingNav: "NavModal-module_closingNav__OIIRY",
    SlideLeft: "NavModal-module_SlideLeft__7Veo2",
    closeIconNav: "NavModal-module_closeIconNav__2gqUi",
  };
  function ti(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return ni(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? ni(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function ni(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function ai() {
    var t = T(),
      e = P(Is),
      n = ti(g.useState(!1), 2),
      a = n[0],
      o = n[1];
    if (!e) return null;
    return _.createElement(
      "div",
      {
        className: ei.overlayNav,
        onClick: function () {
          o(!0);
        },
        onAnimationEnd: function (e) {
          e.animationName === ei.SlideLeft && (o(!1), t(re()));
        },
        role: "button",
      },
      _.createElement(
        "div",
        {
          className: p(
            ei.contentNav,
            ((n = {}),
            (e = ei.closingNav),
            (a = a),
            e in n
              ? Object.defineProperty(n, e, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[e] = a),
            n)
          ),
          id: "content-nav",
        },
        _.createElement($s, null),
        _.createElement(
          "div",
          { className: ei.closeIconNav },
          _.createElement(Jo, { icon: "close" })
        )
      )
    );
  }
  k(
    ".NavModal-module_overlayNav__3y8p3 {\n  display: flex;\n  justify-content: left;\n  align-items: unset;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: var(--modal-z-index);\n  background-color: transparent;\n}\n\n.NavModal-module_contentNav__wMSAL {\n  position: relative;\n  border: 1px solid var(--color-tone-6);\n  background-color: var(--modal-content-bg);\n  color: var(--color-tone-1);\n  overflow-y: auto;\n  -webkit-animation: NavModal-module_SlideRight__DNLx- 200ms;\n          animation: NavModal-module_SlideRight__DNLx- 200ms;\n  max-width: var(--game-max-width);\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 0px;\n  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.15);\n  max-height: calc(100% - var(--header-height) - 1px);\n  margin-top: calc(var(--header-height) + 1px);\n  padding: 0px;\n}\n\n@media (min-width: 415px) {\n  .NavModal-module_contentNav__wMSAL {\n    width: 375px;\n  }\n}\n.NavModal-module_contentNav__wMSAL.NavModal-module_closingNav__OIIRY {\n  -webkit-animation: NavModal-module_SlideLeft__7Veo2 200ms;\n          animation: NavModal-module_SlideLeft__7Veo2 200ms;\n}\n\n.NavModal-module_closeIconNav__2gqUi {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n@-webkit-keyframes NavModal-module_SlideRight__DNLx- {\n  0% {\n    transform: translateX(-100px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes NavModal-module_SlideRight__DNLx- {\n  0% {\n    transform: translateX(-100px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes NavModal-module_SlideLeft__7Veo2 {\n  0% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-200px);\n  }\n}\n@keyframes NavModal-module_SlideLeft__7Veo2 {\n  0% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-200px);\n  }\n}"
  );
  var oi = {
      linkInfo: {
        title:
          "You can now link your Wordle stats to a free New York Times account.",
        text: [
          "Wordle stats are currently saved locally in the browser where you play, which means different devices may save different stats.",
          "If the browser memory is cleared, your stats will be lost.",
          "Linking your stats to a free account means keeping your streak and stats anywhere you're logged in.",
        ],
        text2:
          "<b>You can continue to play Wordle without an account,</b> but your stats will not appear across devices and may reset if the browser data is cleared.",
        icon: "var(--link-info)",
        alt: "Wordle Icon with NYT Logo",
      },
      statsProblem: {
        title: "These stats don't look right.",
        text: [
          "Wordle currently saves your stats to the device or browser you play on. <b>If this is not where you regularly play, go to that device or browser and check if your stats are correct. You can save to an account from there.</b>",
          'If this is the device or browser where you regularly play and your stats are not updating, visit <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB">our FAQ</a> for more troubleshooting tips.',
          "If your stats are completely missing, your progress may have been reset if your browser data was cleared. We recommend logging in or creating a free account to save your stats from anywhere.",
        ],
        icon: "var(--stats-problem)",
        alt: "Wordle Icon with Question Mark",
      },
    },
    ri = {
      title: "Explainer-module_title__-DKFu",
      containerLink: "Explainer-module_containerLink__CFd3e",
      containerProblems: "Explainer-module_containerProblems__8fCRH",
      explainerFooterText: "Explainer-module_explainerFooterText__ZeeBX",
      text: "Explainer-module_text__keVaW",
      statsLinkContainer: "Explainer-module_statsLinkContainer__1PALX",
      loginButton: "Explainer-module_loginButton__XupvV",
      gamesIcon: "Explainer-module_gamesIcon__spKfI",
      headerNew: "Explainer-module_headerNew__SaqiR",
      close: "Explainer-module_close__F3zLu",
    };
  function si(e) {
    var t = e.type,
      n = e.loggedIn,
      a = void 0 !== n && n,
      o = e.optedIn,
      r = void 0 !== o && o,
      s = e.onClose,
      i = e.trackClick,
      l = T(),
      c = a && !r,
      u = "linkInfo" === t ? "more-info" : "broken-stats",
      d = oi[t],
      m = d.text,
      n = d.title,
      o = d.icon,
      e = d.alt,
      d = d.text2,
      d = void 0 === d ? "" : d,
      r = !!d && !r,
      t = "linkInfo" === t ? ri.containerLink : ri.containerProblems;
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(
        "div",
        { className: ri.headerNew },
        _.createElement(
          "p",
          null,
          _.createElement("img", {
            className: ri.gamesIcon,
            alt: "NYT Games Logo",
            style: { content: "var(--gameslogo)" },
          })
        ),
        _.createElement(
          "button",
          {
            type: "button",
            className: ri.close,
            "data-testid": "close",
            onClick: s,
          },
          _.createElement(Jo, { icon: "close" })
        )
      ),
      _.createElement(
        "div",
        { className: t },
        _.createElement("img", { alt: e, style: { content: o } }),
        _.createElement("h1", { className: ri.title }, n),
        _.createElement(
          "div",
          null,
          m.map(function (e) {
            return _.createElement("p", {
              key: e,
              className: ri.text,
              dangerouslySetInnerHTML: { __html: e },
            });
          })
        ),
        _.createElement(
          "div",
          { className: ri.statsLinkContainer },
          !a &&
            _.createElement(
              uo,
              {
                optIn: !0,
                ariaLabel: "Link for logging in or creating a free account",
                styles: ri.loginButton,
                trackEvent: { eventName: "log-in-".concat(u), sendContext: !1 },
              },
              "Log in or create a free account"
            ),
          c &&
            _.createElement(
              "button",
              {
                type: "button",
                tabIndex: -1,
                className: ri.loginButton,
                "aria-label": "Button to link stats to my account",
                onClick: function () {
                  l(te("statsLink")), i("link-".concat(u));
                },
              },
              "Link stats to my account"
            )
        )
      ),
      r &&
        _.createElement("p", {
          className: ri.explainerFooterText,
          dangerouslySetInnerHTML: { __html: d },
        })
    );
  }
  k(
    '.Explainer-module_title__-DKFu {\n  font-family: "nyt-franklin";\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 28px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-left: 10px;\n  color: var(--color-tone-1);\n}\n\n.Explainer-module_containerLink__CFd3e {\n  padding: 30px;\n}\n.Explainer-module_containerLink__CFd3e p:last-child {\n  font-weight: 700;\n}\n\n.Explainer-module_containerProblems__8fCRH {\n  padding: 30px;\n}\n\n.Explainer-module_containerLink__CFd3e,\n.Explainer-module_containerProblems__8fCRH {\n  padding-top: 14px;\n}\n\n.Explainer-module_explainerFooterText__ZeeBX {\n  margin: 30px;\n  padding-top: 30px;\n  border-top: 1px solid var(--gray-2);\n  font-size: 15px;\n  line-height: 130%;\n}\n\n.Explainer-module_text__keVaW {\n  font-size: 14px;\n  line-height: 130%;\n  letter-spacing: 0.01em;\n  text-align: left;\n  margin-left: 10px;\n  color: var(--color-tone-1);\n}\n.Explainer-module_text__keVaW > a {\n  color: inherit;\n}\n\n.Explainer-module_statsLinkContainer__1PALX {\n  margin-top: 40px;\n}\n\n.Explainer-module_loginButton__XupvV {\n  height: 44px;\n  background: var(--color-tone-1);\n  border-radius: 104px;\n  text-decoration: none;\n  color: var(--color-tone-7);\n  font-weight: 700;\n  line-height: 14px;\n  font-size: 14px;\n  text-align: center;\n  padding: 0 30px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 0.05em;\n}\n\n.Explainer-module_gamesIcon__spKfI {\n  width: 95px;\n  height: 18px;\n}\n\n.Explainer-module_headerNew__SaqiR {\n  padding: 15px 0px;\n}\n.Explainer-module_headerNew__SaqiR > p {\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.Explainer-module_close__F3zLu {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  position: absolute;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0;\n  margin-right: 30px;\n}'
  );
  var ii = "StatsLink-module_container__G4oYM",
    li = "StatsLink-module_header__8CPRA",
    ci = "StatsLink-module_logo__Kx2s-",
    ui = "StatsLink-module_content__7z9K3",
    di = "StatsLink-module_statsIconWrapper__lzf6R",
    mi = "StatsLink-module_statsFailureBadge__qQmvE",
    pi = "StatsLink-module_statsIcon__-nU--",
    yi = "StatsLink-module_headingWrapper__DV4V8",
    gi = "StatsLink-module_heading__8G3Jk",
    fi = "StatsLink-module_paragraphWrapper__5sxeO",
    hi = "StatsLink-module_paragraph__Q-baL",
    bi = "StatsLink-module_email__xzzCz",
    wi = "StatsLink-module_button__F7k0J",
    ki = "StatsLink-module_footer__Qxrmi",
    _i = "StatsLink-module_link__YBHY7",
    vi = "StatsLink-module_linkPrompt__VzIFH";
  function xi(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Si(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Si(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Si(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  k(
    ".StatsLink-module_container__G4oYM {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.StatsLink-module_header__8CPRA {\n  align-items: center;\n  border-bottom: 1px solid var(--gray-2);\n  display: flex;\n  height: 3em;\n  justify-content: center;\n}\n\n.StatsLink-module_logo__Kx2s- {\n  position: relative;\n  top: 5px;\n}\n\n.StatsLink-module_content__7z9K3 {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-left: 1.25em;\n  padding-right: 1.25em;\n  padding-top: 6em;\n}\n\n.StatsLink-module_statsIconWrapper__lzf6R {\n  position: relative;\n  height: 12em;\n  width: 12em;\n  margin-bottom: 2em;\n}\n\n.StatsLink-module_statsFailureBadge__qQmvE {\n  position: absolute;\n  height: 2.75em;\n  width: 2.75em;\n  top: -0.75em;\n  right: -0.75em;\n}\n\n.StatsLink-module_statsIcon__-nU-- {\n  height: 12em;\n  width: 12em;\n}\n\n.StatsLink-module_headingWrapper__DV4V8 {\n  text-align: center;\n  margin-bottom: 1em;\n}\n\n.StatsLink-module_heading__8G3Jk {\n  font-family: nyt-cheltenham;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  margin: 0;\n  line-height: 30px;\n}\n\n.StatsLink-module_paragraphWrapper__5sxeO {\n  text-align: center;\n  margin-bottom: 1.25em;\n}\n\n.StatsLink-module_paragraph__Q-baL {\n  font-family: nyt-franklin;\n  font-size: 1em;\n  margin: 0;\n}\n\n.StatsLink-module_email__xzzCz {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.StatsLink-module_button__F7k0J {\n  background: var(--black-2);\n  border: none;\n  border-radius: 3px;\n  color: var(--white);\n  font-family: nyt-franklin;\n  font-weight: 600;\n  font-size: 1em;\n  height: 3em;\n  width: 100%;\n}\n\n.StatsLink-module_footer__Qxrmi {\n  padding-top: 2.5em;\n  text-align: center;\n}\n\n.StatsLink-module_buttonAsLink__kErTh {\n  all: unset;\n  text-decoration: underline;\n  cursor: pointer;\n  color: var(--black-3);\n  font-family: nyt-franklin;\n}\n\n.StatsLink-module_link__YBHY7 {\n  font-family: nyt-franklin;\n  font-size: 1em;\n  color: var(--black-3);\n}\n\n.StatsLink-module_linkPrompt__VzIFH {\n  color: var(--black-3);\n}"
  );
  var Ei = {
      line1: "Your stats will be linked to this",
      line2: "New York Times account",
    },
    ji = {
      line1: "We're sorry, but we're having a technical issue.",
      line2: "We're unable to link your stats to this account right now.",
    },
    zi = function (e) {
      var t = e.onClose,
        n = xi(g.useState(!0), 2),
        a = n[0],
        o = n[1],
        r = T(),
        s = P(Pe),
        e = P(Te),
        i = P(Ie);
      g.useEffect(function () {
        r({ type: Ba }),
          r(function (n) {
            return (
              n({ type: Da }),
              v.xhr
                .get(me, { withCookie: !1, headers: { client_id: "games" } })
                .then(function (e) {
                  e.email
                    ? n({ type: qa, payload: { data: { email: e.email } } })
                    : (n({ type: Ga }), (e = new Error("profile")), n(za(e)));
                })
                .catch(function (e) {
                  n({ type: Ga });
                  var t = new Error("profile");
                  n(za(t));
                })
            );
          });
      }, []),
        g.useEffect(
          function () {
            o(!!s);
          },
          [s]
        );
      n = i ? ji : Ei;
      return a
        ? _.createElement(
            "div",
            { className: ii },
            _.createElement(
              "header",
              { className: li },
              _.createElement("img", {
                alt: "New York Times logo",
                className: ci,
                style: { content: "var(--nyt-logo)" },
              })
            ),
            _.createElement(
              "div",
              null,
              _.createElement(nr, { waitFor: 150, setBackground: "light" })
            )
          )
        : _.createElement(
            "div",
            { className: ii },
            _.createElement(
              "header",
              { className: li },
              _.createElement("img", {
                alt: "New York Times logo",
                className: ci,
                style: { content: "var(--nyt-logo)" },
              })
            ),
            _.createElement(
              "div",
              { className: ui },
              _.createElement(
                "div",
                { className: di },
                i &&
                  _.createElement(
                    "svg",
                    {
                      className: mi,
                      width: "44",
                      height: "44",
                      viewBox: "0 0 44 44",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    _.createElement("path", {
                      d: "M13.7145 41.3977C16.2788 42.4691 19.0443 43 22 43C24.9241 43 27.6726 42.4685 30.2355 41.3977C32.7847 40.3326 35.0117 38.8526 36.9071 36.9571C38.8013 35.0629 40.2889 32.8377 41.3704 30.2909C42.46 27.7252 43 24.9579 43 22C43 19.0738 42.4593 16.3233 41.3704 13.7591C40.2889 11.2123 38.8013 8.98713 36.9071 7.09289C35.0129 5.19865 32.7877 3.71108 30.2409 2.62956C27.6767 1.54066 24.9262 1 22 1C19.0421 1 16.2748 1.54004 13.7091 2.62956C11.1623 3.71108 8.93713 5.19865 7.04289 7.09289C5.14744 8.98834 3.66735 11.2153 2.6023 13.7645C1.53151 16.3274 1 19.0759 1 22C1 24.9557 1.53091 27.7212 2.6023 30.2855C3.66735 32.8347 5.14744 35.0617 7.04289 36.9571C8.93834 38.8526 11.1653 40.3326 13.7145 41.3977ZM22.65 12.7V23.35H21.65V12.7H22.65ZM22.4679 30.8179C22.3474 30.9384 22.2139 31 22 31C21.7861 31 21.6526 30.9384 21.5321 30.8179C21.4116 30.6974 21.35 30.5639 21.35 30.35C21.35 30.1361 21.4116 30.0026 21.5321 29.8821C21.6526 29.7616 21.7861 29.7 22 29.7C22.2139 29.7 22.3474 29.7616 22.4679 29.8821C22.5884 30.0026 22.65 30.1361 22.65 30.35C22.65 30.5639 22.5884 30.6974 22.4679 30.8179Z",
                      fill: "#E33D26",
                      stroke: "white",
                      strokeWidth: "2",
                    })
                  ),
                _.createElement("img", {
                  alt: "Large sized wordle stats icon",
                  className: pi,
                  style: { content: "var(--large-stats)" },
                })
              ),
              _.createElement(
                "div",
                { className: yi },
                _.createElement("h1", { className: gi }, n.line1),
                _.createElement("h1", { className: gi }, n.line2)
              ),
              _.createElement(
                "div",
                { className: fi },
                i &&
                  _.createElement(
                    "p",
                    { className: hi },
                    "You are logged in as"
                  ),
                _.createElement("p", { className: p(hi, bi) }, e && e.email)
              ),
              _.createElement(
                "button",
                {
                  className: wi,
                  onClick: function () {
                    i
                      ? t()
                      : (r({ type: Aa }),
                        r({ type: Fa, payload: { enableAuth: !0 } })),
                      r(
                        ie("", !1, {
                          label: i ? "stats-link-error" : "stats-link-confirm",
                          name: "wordle",
                        })
                      );
                  },
                  type: "button",
                },
                i ? "Go back to stats" : "Confirm and save"
              ),
              _.createElement(
                "footer",
                { className: ki },
                !i &&
                  _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(
                      "p",
                      { className: p(hi, vi) },
                      "Not the right account?"
                    ),
                    _.createElement(
                      uo,
                      {
                        optIn: !0,
                        styles: _i,
                        ariaLabel:
                          "Link for logging in or creating a free account",
                      },
                      "Log in to or create another free account ›"
                    )
                  )
              )
            )
          );
    },
    Ni = {
      page: "Page-module_page__YqrWy",
      SlideIn: "Page-module_SlideIn__T-Lu3",
      closing: "Page-module_closing__uVg4f",
      SlideOut: "Page-module_SlideOut__U2w2g",
      pageNew: "Page-module_pageNew__YeTYy",
      gamesIcon: "Page-module_gamesIcon__VFFP9",
      close: "Page-module_close__D3gaa",
      noDarkMode: "Page-module_noDarkMode__0G0q5",
      content: "Page-module_content__hwN4l",
      headerNew: "Page-module_headerNew__7DIpY",
      contentContainer: "Page-module_contentContainer__KZJPh",
    };
  function Ci(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Ai(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Oi(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Oi(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Oi(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Ii() {
    var t = T(),
      e = P(Os),
      n = Ai(g.useState(!1), 2),
      a = n[0],
      o = n[1],
      r = !!P(Ae),
      s = P(Ee),
      i = no("auth") || s,
      l = P(Ts);
    if (
      (g.useEffect(
        function () {
          l && o(!0);
        },
        [l]
      ),
      !e)
    )
      return null;
    (n = function (e) {
      e.animationName === Ni.SlideOut && (o(!1), t(ae()));
    }),
      (r = {
        settings: { content: _.createElement(Ns, null), title: "Settings" },
        help: {
          content: _.createElement(sr, { isPage: !0 }),
          title: "How to play",
        },
        linkInfo: {
          content: _.createElement(si, {
            onClose: function () {
              return o(!0);
            },
            type: "linkInfo",
            loggedIn: r,
            optedIn: s,
            trackClick: function (e) {
              return t(ie(e, !1));
            },
          }),
          title: "",
        },
        statsProblem: {
          content: _.createElement(si, {
            onClose: function () {
              return o(!0);
            },
            loggedIn: r,
            optedIn: s,
            type: "statsProblem",
            trackClick: function (e) {
              return t(ie(e, !1));
            },
          }),
          title: "",
        },
        statsLink: {
          content: _.createElement(zi, {
            onClose: function () {
              return o(!0);
            },
          }),
          title: "",
        },
      }[e]),
      (s = r.content),
      (r = r.title);
    if (i) {
      i = ["statsLink"].includes(e);
      return _.createElement(
        "div",
        {
          "data-testid": "pageNew",
          className: p(
            Ni.pageNew,
            (Ci((e = {}), Ni.closing, a), Ci(e, Ni.noDarkMode, i), e)
          ),
          onAnimationEnd: n,
        },
        _.createElement("div", { className: Ni.content }, s)
      );
    }
    return _.createElement(
      "div",
      {
        role: "dialog",
        className: p(Ni.page, Ci({}, Ni.closing, a)),
        onAnimationEnd: n,
      },
      _.createElement(
        "div",
        { className: Ni.content },
        _.createElement(
          "header",
          null,
          _.createElement("h1", null, r),
          _.createElement(
            "button",
            {
              type: "button",
              className: Ni.close,
              "data-testid": "close",
              onClick: function () {
                o(!0);
              },
            },
            _.createElement(Jo, { icon: "close" })
          )
        ),
        _.createElement("div", { className: Ni.contentContainer }, s)
      )
    );
  }
  k(
    ".Page-module_page__YqrWy {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  background-color: var(--color-background);\n  -webkit-animation: Page-module_SlideIn__T-Lu3 100ms linear;\n          animation: Page-module_SlideIn__T-Lu3 100ms linear;\n  z-index: var(--page-z-index);\n}\n.Page-module_page__YqrWy.Page-module_closing__uVg4f {\n  -webkit-animation: Page-module_SlideOut__U2w2g 150ms linear;\n          animation: Page-module_SlideOut__U2w2g 150ms linear;\n}\n.Page-module_page__YqrWy header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.Page-module_page__YqrWy h1 {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.Page-module_pageNew__YeTYy {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  background-color: var(--color-background);\n  -webkit-animation: Page-module_SlideIn__T-Lu3 100ms linear;\n          animation: Page-module_SlideIn__T-Lu3 100ms linear;\n  z-index: var(--page-z-index);\n  overflow-y: scroll;\n  display: flex;\n}\n.Page-module_pageNew__YeTYy .Page-module_gamesIcon__VFFP9 {\n  width: 95px;\n  height: 18px;\n}\n.Page-module_pageNew__YeTYy .Page-module_close__D3gaa {\n  margin-right: 30px;\n}\n.Page-module_pageNew__YeTYy.Page-module_closing__uVg4f {\n  -webkit-animation: Page-module_SlideOut__U2w2g 150ms linear;\n          animation: Page-module_SlideOut__U2w2g 150ms linear;\n}\n.Page-module_pageNew__YeTYy.Page-module_noDarkMode__0G0q5 {\n  background-color: var(--white);\n  color: black;\n}\n.Page-module_pageNew__YeTYy.Page-module_noDarkMode__0G0q5 > .Page-module_content__hwN4l {\n  color: black;\n}\n\n.Page-module_headerNew__7DIpY {\n  padding: 15px 0px;\n}\n.Page-module_headerNew__7DIpY > p {\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.Page-module_content__hwN4l {\n  position: relative;\n  color: var(--color-tone-1);\n  padding: 0 32px;\n  max-width: var(--game-max-width);\n  width: 100%;\n  overflow-y: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.Page-module_contentContainer__KZJPh {\n  height: 100%;\n}\n\n.Page-module_close__D3gaa {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  position: absolute;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0;\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .Page-module_content__hwN4l {\n    max-width: 100%;\n    padding: 0;\n  }\n\n  .Page-module_close__D3gaa {\n    padding: 0 16px;\n  }\n}\n@-webkit-keyframes Page-module_SlideIn__T-Lu3 {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes Page-module_SlideIn__T-Lu3 {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes Page-module_SlideOut__U2w2g {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(60px);\n  }\n}\n@keyframes Page-module_SlideOut__U2w2g {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(60px);\n  }\n}"
  );
  var Li = {
    toaster: "ToastContainer-module_toaster__QDad3",
    gameToaster: "ToastContainer-module_gameToaster__yjzPn",
    systemToaster: "ToastContainer-module_systemToaster__fIZdf",
  };
  k(
    ".ToastContainer-module_toaster__QDad3 {\n  position: absolute;\n  top: 45px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  pointer-events: none;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n#ToastContainer-module_gameToaster__yjzPn {\n  z-index: var(--toast-z-index);\n}\n\n#ToastContainer-module_systemToaster__fIZdf {\n  z-index: var(--system-toast-z-index);\n}"
  );
  var Ti = {
    toast: "Toast-module_toast__Woeb-",
    win: "Toast-module_win__7-aZX",
    fade: "Toast-module_fade__uPhAg",
  };
  function Pi(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Mi(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Mi(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Mi(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Bi(e) {
    var t = e.toast,
      n = t.text,
      a = t.duration,
      o = t.timestamp,
      r = T(),
      e = Pi(g.useState(!1), 2),
      t = e[0],
      s = e[1];
    return (
      So(
        function () {
          return s(!0);
        },
        a === 1 / 0 ? null : a
      ),
      _.createElement(
        "div",
        {
          className: p(
            Ti.toast,
            ((e = {}),
            (a = Ti.fade),
            (t = t),
            a in e
              ? Object.defineProperty(e, a, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[a] = t),
            e)
          ),
          onTransitionEnd: function () {
            r(H(n, o));
          },
        },
        n
      )
    );
  }
  function Ri() {
    var e = P(Ls),
      t = e.filter(function (e) {
        return e.isSystem;
      }),
      n = e.filter(function (e) {
        return !e.isSystem;
      }),
      e = function (e, t) {
        return _.createElement(
          "div",
          { className: Li.toaster, id: t },
          e.map(function (e) {
            return _.createElement(Bi, {
              key: "".concat(e.text, "-").concat(e.timestamp),
              toast: e,
            });
          })
        );
      };
    return _.createElement(
      _.Fragment,
      null,
      e(n, Li.gameToaster),
      e(t, Li.systemToaster)
    );
  }
  k(
    ".Toast-module_toast__Woeb- {\n  position: relative;\n  margin: 16px;\n  background-color: var(--color-tone-8);\n  color: var(--color-tone-7);\n  padding: 13px;\n  border: none;\n  border-radius: 4px;\n  opacity: 1;\n  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.Toast-module_win__7-aZX {\n  background-color: var(--color-correct);\n  color: var(--tile-text-color);\n}\n\n.Toast-module_fade__uPhAg {\n  opacity: 0;\n}"
  );
  var Wi = function () {
      var e;
      return (
        window.isHybridWebView && window.NativeBridge
          ? window.NativeBridge.gamesBackToHub()
          : window.isPlayTab
          ? (((e = document.createElement("a")).href = "nytimes://play"),
            e.click())
          : (window.location.href = "/crosswords"),
        null
      );
    },
    Hi = {
      container: "Error-module_container__BMcmT",
      SlideIn: "Error-module_SlideIn__9w2wl",
      errorContainer: "Error-module_errorContainer__5f0-O",
      errorText: "Error-module_errorText__aINs5",
      errorTilesContainer: "Error-module_errorTilesContainer__7SZD5",
      errorTiles: "Error-module_errorTiles__miCkr",
      backButton: "Error-module_backButton__qhfix",
      errorBannerContainer: "Error-module_errorBannerContainer__kpuAB",
      errorTitle: "Error-module_errorTitle__-iN5F",
      close: "Error-module_close__M-EdG",
      errorRow: "Error-module_errorRow__35lMF",
      hideBanner: "Error-module_hideBanner__dI2kJ",
      SlideOut: "Error-module_SlideOut__uVOvc",
    };
  k(
    '.Error-module_container__BMcmT {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-height: calc(100% - var(--header-height) - 1px);\n  left: 0;\n  justify-content: center;\n  background-color: var(--error-background);\n  -webkit-animation: Error-module_SlideIn__9w2wl 100ms linear;\n          animation: Error-module_SlideIn__9w2wl 100ms linear;\n  z-index: var(--error-z-index);\n}\n\n.Error-module_errorContainer__5f0-O {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  position: relative;\n  top: 166px;\n  font-family: "nyt-franklin";\n}\n\n.Error-module_errorText__aINs5 {\n  font-family: "nyt-franklin-400";\n  text-align: center;\n  margin-top: 40px;\n  font-size: 20px;\n  line-height: 24px;\n  color: var(--color-tone-1);\n}\n\n.Error-module_errorTilesContainer__7SZD5 {\n  width: 208px;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n.Error-module_errorTiles__miCkr {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--white);\n  border: 1.27px solid var(--lightGray);\n  width: 40px;\n  height: 40px;\n  box-sizing: border-box;\n}\n\n.Error-module_backButton__qhfix {\n  margin-top: 24px;\n  border-radius: 24px;\n  width: 150px;\n  height: 48px;\n  font-family: "nyt-franklin-600";\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  background-color: var(--color-tone-1);\n  box-shadow: none;\n  border: none;\n  color: var(--color-tone-7);\n}\n\n@-webkit-keyframes Error-module_SlideIn__9w2wl {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes Error-module_SlideIn__9w2wl {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes Error-module_SlideOut__uVOvc {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(60px);\n  }\n}\n@keyframes Error-module_SlideOut__uVOvc {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(60px);\n  }\n}\n.Error-module_errorBannerContainer__kpuAB {\n  background-color: #323232;\n  color: white;\n  font-size: 14px;\n  height: auto;\n  opacity: 1;\n  transition: all 0.5s ease-in-out;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  font-family: "nyt-franklin";\n}\n.Error-module_errorBannerContainer__kpuAB p {\n  font-weight: 400;\n  margin: 5px 5px 5px 10px;\n}\n.Error-module_errorBannerContainer__kpuAB p.Error-module_errorTitle__-iN5F {\n  font-weight: 700;\n}\n.Error-module_errorBannerContainer__kpuAB .Error-module_close__M-EdG {\n  color: white;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: 600;\n  cursor: pointer;\n  margin: 5px 5px 0px 0px;\n}\n.Error-module_errorBannerContainer__kpuAB .Error-module_errorRow__35lMF {\n  display: flex;\n  justify-content: space-between;\n}\n.Error-module_errorBannerContainer__kpuAB.Error-module_hideBanner__dI2kJ {\n  opacity: 0;\n  height: 0;\n}'
  );
  var Di = function (e) {
      (e = e.text), (e = void 0 === e ? "error" : e);
      return _.createElement(
        "div",
        { className: Hi.errorTilesContainer },
        e.split("").map(function (e, t) {
          return _.createElement(
            "div",
            { className: Hi.errorTiles, key: "".concat(t, "-").concat(e) },
            e
          );
        })
      );
    },
    qi = function () {
      return _.createElement(
        "div",
        { className: Hi.errorText },
        "You’re offline.",
        _.createElement("br", null),
        "Find a connection and come back."
      );
    },
    Gi = function () {
      return _.createElement(
        "div",
        { className: Hi.errorText },
        "Oops, something went wrong.",
        _.createElement("br", null),
        "Please try again later."
      );
    };
  function Fi() {
    var e = P(As),
      t = "profile" === e,
      n = document.referrer.includes("nytimes") && !t,
      a = T();
    if (!e) return null;
    var o = {
        offline: {
          tiles: _.createElement(Di, { text: "yikes" }),
          content: _.createElement(qi, null),
        },
        default: {
          tiles: _.createElement(Di, null),
          content: _.createElement(Gi, null),
        },
        profile: {
          tiles: _.createElement(Di, null),
          content: _.createElement(Gi, null),
        },
      }[e],
      r = o.tiles,
      o = o.content;
    return _.createElement(
      "div",
      { className: Hi.container, role: "dialog" },
      _.createElement(
        "div",
        { className: Hi.errorContainer },
        r,
        o,
        n &&
          _.createElement(
            "button",
            {
              className: Hi.backButton,
              type: "button",
              "data-testid": "back",
              onClick: function () {
                "offline" === e && a(ie("stats-link-offline", !1)), Wi();
              },
            },
            "Back"
          ),
        t &&
          _.createElement(
            "button",
            {
              className: Hi.backButton,
              type: "button",
              "data-testid": "reload",
              onClick: function () {
                return document.location.reload();
              },
            },
            "Reload"
          )
      )
    );
  }
  function Vi(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Yi(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Yi(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Yi(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Ui() {
    var e,
      t,
      n = Vi(g.useState(!1), 2),
      a = n[0],
      o = n[1];
    return _.createElement(
      "div",
      {
        "aria-hidden": a,
        className: p(
          Hi.errorBannerContainer,
          ((e = {}),
          (t = Hi.hideBanner),
          (n = a),
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e)
        ),
      },
      _.createElement(
        "div",
        { className: Hi.errorRow, "aria-hidden": a },
        _.createElement("p", { className: Hi.errorTitle }, "Error"),
        _.createElement(
          "span",
          {
            role: "button",
            className: Hi.close,
            onClick: function () {
              return o(!0);
            },
          },
          _.createElement(Jo, { icon: "close", fillColor: "var(--white)" })
        )
      ),
      _.createElement(
        "p",
        null,
        "Oops, something went wrong. Please try again later."
      )
    );
  }
  var Zi = {
    key: "Key-module_key__Rv-Vp",
    fade: "Key-module_fade__37Hk8",
    half: "Key-module_half__ljsj8",
    one: "Key-module_one__HBOou",
    oneAndAHalf: "Key-module_oneAndAHalf__K6JBY",
  };
  function Xi(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Ki(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Ji(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Ji(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Ji(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  k(
    ".Key-module_key__Rv-Vp {\n  font-family: inherit;\n  font-weight: bold;\n  border: 0;\n  padding: 0;\n  margin: 0 6px 0 0;\n  height: 58px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: var(--key-bg);\n  color: var(--key-text-color);\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);\n}\n.Key-module_key__Rv-Vp:focus {\n  outline: none;\n}\n.Key-module_key__Rv-Vp:last-of-type {\n  margin: 0;\n}\n.Key-module_key__Rv-Vp[data-state=correct] {\n  background-color: var(--key-bg-correct);\n  color: var(--key-evaluated-text-color);\n}\n.Key-module_key__Rv-Vp[data-state=present] {\n  background-color: var(--key-bg-present);\n  color: var(--key-evaluated-text-color);\n}\n.Key-module_key__Rv-Vp[data-state=absent] {\n  background-color: var(--key-bg-absent);\n  color: var(--key-evaluated-text-color);\n}\n.Key-module_key__Rv-Vp.Key-module_fade__37Hk8 {\n  transition: background-color 0.1s ease, color 0.1s ease;\n}\n\n.Key-module_half__ljsj8 {\n  flex: 0.5;\n}\n\n.Key-module_one__HBOou {\n  flex: 1;\n}\n\n.Key-module_oneAndAHalf__K6JBY {\n  flex: 1.5;\n  font-size: 12px;\n}"
  );
  function Qi(e) {
    return "←" === e
      ? _.createElement(Jo, { icon: "backspace" })
      : "↵" === e
      ? "enter"
      : "a" <= e && e <= "z"
      ? e
      : void 0;
  }
  function $i(e) {
    var t = e.value,
      n = e.evaluation,
      a = Ki(_.useState(!1), 2),
      o = a[0],
      r = a[1],
      e = Qi(t);
    return (
      _.useEffect(
        function () {
          n && r(!0);
        },
        [n]
      ),
      e
        ? _.createElement(
            "button",
            {
              type: "button",
              "data-key": t,
              "data-state": n,
              className: p(
                Zi.key,
                (Xi((a = {}), Zi.oneAndAHalf, "←" === t || "↵" === t),
                Xi(a, Zi.fade, o),
                a)
              ),
              onTransitionEnd: function () {
                return r(!1);
              },
            },
            e
          )
        : _.createElement("div", {
            "data-testid": "spacer",
            className: 1 === t.length ? Zi.half : Zi.one,
          })
    );
  }
  var el = {
    keyboard: "Keyboard-module_keyboard__1HSnn",
    row: "Keyboard-module_row__YWe5w",
  };
  k(
    ".Keyboard-module_keyboard__1HSnn {\n  height: var(--keyboard-height);\n  margin: 0 8px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.Keyboard-module_row__YWe5w {\n  display: flex;\n  width: 100%;\n  margin: 0 auto 8px;\n  /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n  touch-action: manipulation;\n}"
  );
  var tl = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
    ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
  ];
  function nl() {
    function a(e) {
      "←" === e || "Backspace" === e
        ? n(xa())
        : "↵" === e || "Enter" === e
        ? n(Sa())
        : Se.includes(e.toLowerCase()) && n(va(e.toLowerCase()));
    }
    var t = g.useRef(null),
      n = T(),
      o = P(ga);
    return (
      g.useEffect(function () {
        function e(e) {
          var t, n;
          !0 !== e.repeat &&
            ((t = e.key),
            (n = e.metaKey),
            (e = e.ctrlKey),
            n ||
              e ||
              (!Se.includes(t.toLowerCase()) &&
                "Backspace" !== t &&
                "Enter" !== t) ||
              a(t));
        }
        return (
          window.addEventListener("keydown", e),
          function () {
            return window.removeEventListener("keydown", e);
          }
        );
      }, []),
      _.createElement(
        "div",
        {
          className: el.keyboard,
          ref: t,
          onClick: function (e) {
            e = e.target.closest("button");
            e &&
              t.current &&
              t.current.contains(e) &&
              void 0 !== e.dataset.key &&
              a(e.dataset.key);
          },
        },
        tl.map(function (e, n) {
          return _.createElement(
            "div",
            { className: el.row, key: n },
            e.map(function (e, t) {
              return _.createElement($i, {
                key: "".concat(e, "-").concat(n, "-").concat(t),
                value: e,
                evaluation: o[e],
              });
            })
          );
        })
      )
    );
  }
  function al(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return ol(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? ol(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function ol(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function rl(e) {
    var t = e.dismissIcon,
      n = (e = al(
        _.useState(
          (null === (n = window.navigator) || void 0 === n
            ? void 0
            : n.onLine) || !1
        ),
        2
      ))[0],
      a = e[1];
    return (
      _.useEffect(function () {
        function e() {
          return a(!0);
        }
        function t() {
          return a(!1);
        }
        return (
          window.addEventListener("online", e),
          window.addEventListener("offline", t),
          function () {
            window.removeEventListener("online", e),
              window.removeEventListener("offline", t);
          }
        );
      }, []),
      (e = p("pz-offline-ticker", { "is-offline": !n })),
      _.createElement(
        "div",
        { className: e, "aria-hidden": n },
        "You're offline! Progress may not be saved.",
        t &&
          _.createElement(
            "span",
            {
              role: "button",
              className: "offline-ticker-dismiss",
              onClick: function () {
                return a(!0);
              },
            },
            t
          )
      )
    );
  }
  var sl = "App-module_game__NSc-J";
  k(
    ".App-module_game__NSc-J {\n  width: 100%;\n  max-width: var(--game-max-width);\n  margin: 0 auto;\n  height: calc(100% - var(--header-height));\n  display: flex;\n  flex-direction: column;\n}\n\n.pz-offline-ticker {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  font-weight: bold;\n}\n.pz-offline-ticker svg path {\n  fill: var(--white);\n}"
  );
  var il = { burgerSvg: "NavIcon-module_burgerSvg__WKh0A" };
  function ll() {
    return _.createElement(
      "svg",
      {
        className: il.burgerSvg,
        width: "20",
        height: "17",
        viewBox: "0 0 24 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      _.createElement("rect", {
        x: "0.172974",
        width: "20",
        height: "3",
        rx: "1.5",
        fill: "var(--color-tone-1)",
      }),
      _.createElement("rect", {
        x: "0.172974",
        y: "7",
        width: "20",
        height: "3",
        rx: "1.5",
        fill: "var(--color-tone-1)",
      }),
      _.createElement("rect", {
        x: "0.172974",
        y: "14",
        width: "20",
        height: "3",
        rx: "1.5",
        fill: "var(--color-tone-1)",
      })
    );
  }
  k(
    ".NavIcon-module_burgerSvg__WKh0A {\n  width: 20px;\n}\n\n@media (min-width: 1024px) {\n  .NavIcon-module_burgerSvg__WKh0A {\n    width: 24px;\n  }\n}"
  );
  var cl = {
    appHeader: "AppHeader-module_appHeader__1Ehyv",
    icon: "AppHeader-module_icon__x7b46",
    title: "AppHeader-module_title__6sqs-",
    menuLeft: "AppHeader-module_menuLeft__iErDO",
    menuRight: "AppHeader-module_menuRight__jUeYn",
    navButton: "AppHeader-module_navButton__fB5nf",
  };
  function ul(e) {
    var t = e.isLoading,
      n = P(Ye),
      a = T(),
      o = no("auth"),
      r = P(As),
      e = P(Ee),
      s = o || e,
      e = {
        context: n || void 0,
        elementName: "wordle",
        moduleLabel: "in-game",
      },
      t = !!r || t;
    return _.createElement(
      "header",
      { className: p(cl.appHeader, "wordle-app-header") },
      _.createElement(
        "div",
        { className: cl.menuLeft },
        _.createElement(
          ro,
          null,
          _.createElement(
            "button",
            {
              type: "button",
              id: cl.navButton,
              className: cl.icon,
              "aria-label":
                "Navigation menu. Click for links to other NYT Games and our Privacy Policy.",
              tabIndex: -1,
              onClick: function () {
                return a(oe());
              },
            },
            _.createElement(ll, null)
          )
        ),
        _.createElement(
          so,
          null,
          _.createElement(oo, {
            buttonStyle: cl.hybridBackButton,
            trackData: e,
          })
        )
      ),
      _.createElement("div", { className: cl.title }, "Wordle"),
      _.createElement(
        "div",
        { className: cl.menuRight },
        _.createElement(
          "button",
          {
            type: "button",
            id: "help-button",
            className: cl.icon,
            "aria-label": "Help",
            tabIndex: -1,
            onClick: function () {
              v.trackClick({
                name: "wordle",
                label: "help",
                context: n,
                useBeacon: !0,
              }),
                a((s ? ee : te)("help"));
            },
          },
          _.createElement(Jo, { icon: "help" })
        ),
        _.createElement(
          "button",
          {
            type: "button",
            id: "statistics-button",
            className: cl.icon,
            "aria-label": "Statistics",
            tabIndex: -1,
            onClick: function () {
              return a(ee("stats", !0));
            },
            disabled: t,
          },
          _.createElement(Jo, { icon: "statistics", disabled: t })
        ),
        _.createElement(
          "button",
          {
            type: "button",
            id: "settings-button",
            className: cl.icon,
            "aria-label": "Settings",
            tabIndex: -1,
            onClick: function () {
              v.trackClick({
                name: "wordle",
                label: "settings",
                context: n,
                useBeacon: !0,
              }),
                a((s ? ee : te)("settings"));
            },
            disabled: t,
          },
          _.createElement(Jo, { icon: "settings", disabled: t })
        )
      )
    );
  }
  k(
    '.AppHeader-module_appHeader__1Ehyv {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  padding: 0px var(--header-padding-x);\n  height: var(--header-height);\n  color: var(--color-tone-1);\n  border-bottom: 1px solid var(--color-tone-4);\n}\n.AppHeader-module_appHeader__1Ehyv button.AppHeader-module_icon__x7b46 {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 4px;\n}\n.AppHeader-module_appHeader__1Ehyv button.AppHeader-module_icon__x7b46:last-child {\n  padding-right: 0;\n}\n\n.AppHeader-module_appHeader__1Ehyv .AppHeader-module_title__6sqs- {\n  flex-grow: 2;\n  font-family: "nyt-karnakcondensed";\n  font-weight: 700;\n  font-size: 28px;\n  letter-spacing: 0.01em;\n  text-align: left;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  position: relative;\n}\n\n.AppHeader-module_menuLeft__iErDO {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.AppHeader-module_menuRight__jUeYn {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#AppHeader-module_navButton__fB5nf {\n  padding-top: 2px;\n  padding-left: 0px;\n  padding-right: 13px;\n}\n\n@media (min-width: 1024px) {\n  .AppHeader-module_appHeader__1Ehyv .AppHeader-module_title__6sqs- {\n    text-align: center;\n    font-size: 36px;\n  }\n  .AppHeader-module_appHeader__1Ehyv button.AppHeader-module_icon__x7b46 {\n    padding: 0 6px;\n  }\n}\n@media (min-width: 768px) {\n  .AppHeader-module_appHeader__1Ehyv .AppHeader-module_title__6sqs- {\n    text-align: center;\n    font-size: 32px;\n  }\n  .AppHeader-module_appHeader__1Ehyv .AppHeader-module_menuLeft__iErDO,\n.AppHeader-module_appHeader__1Ehyv .AppHeader-module_menuRight__jUeYn {\n    width: 120px;\n  }\n}\n@media (min-width: 768px) and (min-width: 1024px) {\n  .AppHeader-module_appHeader__1Ehyv .AppHeader-module_title__6sqs- {\n    font-size: 36px;\n  }\n}\n@media (min-width: 768px) {\n  #AppHeader-module_navButton__fB5nf {\n    padding-top: 2px;\n    padding-left: 0px;\n  }\n}'
  );
  function dl(e) {
    var t,
      n,
      a = e.hasLoaded,
      o = P(Ee),
      r = P(je),
      s = (no("auth") || o) && r;
    (t = a),
      (n = T()),
      (e = P(Ue)),
      (r = P(As)),
      So(
        function () {
          return n(ee("help"));
        },
        !e && t && !r ? 100 : null
      );
    s = _.createElement(
      "div",
      { className: sl, id: "wordle-app-game" },
      o &&
        _.createElement(rl, {
          dismissIcon: _.createElement(Jo, { icon: "close" }),
        }),
      s && _.createElement(Ui, null),
      _.createElement(Go, null),
      _.createElement(nl, null),
      _.createElement(ai, null),
      _.createElement(Hs, null),
      _.createElement(Ii, null),
      _.createElement(Ri, null),
      _.createElement(Fi, null)
    );
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(ul, { isLoading: !a }),
      a ? s : _.createElement(nr, null)
    );
  }
  var ml = {
    welcome: {
      component: function (e) {
        function t(e) {
          v.trackClick({ name: "wordle", context: "".concat(u), label: e });
        }
        var n,
          a,
          o,
          r,
          s = e.transition,
          i = T(),
          l = P(Fe),
          c = !!P(Ae),
          u = P(Ye),
          d = !!P(Ce),
          m = 0 < l,
          p =
            ((a = m),
            (n = c),
            (y = P(Ge)),
            (o = P(fo)),
            (g = P(Fe)),
            a && "IN_PROGRESS" === y
              ? "Youʼre on attempt ".concat(g + 1, " out of 6. Keep it up!")
              : "WIN" === y
              ? "Great job on todayʼs puzzle! Check out your progress."
              : "FAIL" === y
              ? "Tomorrow’s a new day, with a new puzzle. See you then."
              : n && !a && 0 < o
              ? _.createElement(
                  _.Fragment,
                  null,
                  "Go ahead, add another day to your",
                  " ",
                  _.createElement("span", { className: co.bold }, o, " day"),
                  " streak."
                )
              : _.createElement(
                  _.Fragment,
                  null,
                  "Get 6 chances to guess a",
                  " ",
                  _.createElement("span", { className: co.noWrap }, "5-letter"),
                  " word."
                )),
          e =
            ((k = m),
            (r = P(Ge)),
            k ? ("IN_PROGRESS" !== r ? "Hi Wordler" : "Welcome Back") : ""),
          y =
            ((l = m),
            (g = P(Ge)),
            l ? ("IN_PROGRESS" === g ? "Continue" : "See Stats") : "Play"),
          g =
            ((n = m),
            (a = c),
            (o = P(fo)),
            (k = P(Ye)),
            (r = P(Ge)),
            (k = (g = l = "").concat(k)),
            (g = a ? ((l = "".concat(o)), "welcome-modal") : "softregiwall"),
            {
              label: l,
              name: (g = n
                ? "IN_PROGRESS" !== r
                  ? "welcome-see-stats-modal"
                  : "welcome-back-modal"
                : g),
              region: "wordle-welcome",
              context: k,
            }),
          f = g.name,
          h = g.region,
          b = g.label,
          w = g.context,
          k = {
            context: u || void 0,
            elementName: "wordle",
            moduleLabel: "welcome",
          };
        _.useEffect(function () {
          v.trackImpression(f, h, b, w);
        }, []);
        var g = window.isHybridWebView && !d && !m;
        return _.createElement(
          "div",
          { className: co.contentWelcome },
          _.createElement(
            so,
            null,
            _.createElement(
              "div",
              { className: co.back },
              _.createElement(oo, { trackData: k })
            )
          ),
          _.createElement(
            "div",
            { className: co.contentWelcomeContainer },
            _.createElement(ko, { small: m }),
            e && _.createElement("div", { className: co.title }, e),
            _.createElement(_o, null, p),
            _.createElement(xo, {
              buttons: [
                {
                  hide: m || d,
                  text: "How to play",
                  secondary: !0,
                  onClick: function () {
                    s("game"), i(ee("help")), t("help-welcome");
                  },
                },
                {
                  hide: m || c,
                  text: "Log in",
                  secondary: !0,
                  isLogin: !0,
                  onClick: function () {
                    t("log-in-welcome");
                  },
                },
                {
                  text: y,
                  onClick: function () {
                    s("game"), m && t("continue");
                  },
                },
              ],
            }),
            _.createElement(vo, { dayOffset: u })
          ),
          g &&
            _.createElement(lo, {
              closeMoment: function () {
                return s("game");
              },
              trackLink: function () {
                return t("welcome-more-info");
              },
            })
        );
      },
      animateOut: !0,
    },
    loading: {
      component: function (e) {
        var t = e.hasLoaded,
          n = e.transition,
          a = zo(_.useState(!1), 2),
          e = a[0],
          o = a[1];
        return (
          So(
            function () {
              return o(!0);
            },
            t ? null : 300
          ),
          _.useEffect(
            function () {
              t && n("welcome");
            },
            [t]
          ),
          _.createElement(
            "div",
            { className: co.contentWelcome },
            _.createElement(
              so,
              null,
              _.createElement(
                "div",
                { className: co.back },
                _.createElement(oo, {
                  trackData: { elementName: "wordle", moduleLabel: "loading" },
                })
              )
            ),
            _.createElement(
              "div",
              { className: co.contentWelcomeContainer },
              e &&
                _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(ko, { small: !0 }),
                  _.createElement(
                    "div",
                    { className: co.spinner },
                    _.createElement(jo, null)
                  )
                )
            )
          )
        );
      },
    },
    game: { component: dl },
  };
  function pl() {
    var n,
      a,
      o,
      t,
      r,
      e = !!P(Ae),
      s = P(Ee),
      i = P(Oe),
      l = P(ze),
      c = T(),
      u = Na(),
      d = u.hasAbraLoaded,
      m = u.getVariant,
      p = "1_EnableAuth" === m("GAMES_wordleAuth_0427") || s,
      y = "1_EnableServerSolution" === m("GAMES_wordleSolutionBE_0510"),
      u = no("welcomeMoment") || window.isHybridWebView;
    return (
      _.useEffect(function () {
        var e = w();
        return function () {
          return clearInterval(e);
        };
      }, []),
      (n = P(Cs)),
      (a = P(Os)),
      (o = T()),
      g.useEffect(
        function () {
          if (window.isHybridWebView && window.NativeBridge) {
            var t = function (e) {
              n
                ? (o(ne()), e.respondWith({ gamesOnNavigateBack: !0 }))
                : a
                ? (o(ae()), e.respondWith({ gamesOnNavigateBack: !0 }))
                : e.respondWith({ gamesOnNavigateBack: !1 });
            };
            return (
              window.NativeBridge.addEventListener("gamesOnNavigateBack", t),
              function () {
                var e;
                null !== (e = window.NativeBridge) &&
                  void 0 !== e &&
                  e.removeEventListener("gamesOnNavigateBack", t);
              }
            );
          }
        },
        [n, a, o]
      ),
      _.useEffect(
        function () {
          var e, t, n, a;
          !l &&
            d &&
            ((e =
              "true" ===
              (t = new URLSearchParams(window.location.search)).get("moogle")),
            (t = "true" === t.get("success")),
            c(
              ((t = (e = {
                optIn: (!p && e) || t || s,
                enableServerSolution: y,
              }).optIn),
              (n = void 0 !== t && t),
              (e = e.enableServerSolution),
              (a = void 0 !== e && e),
              function (e) {
                n && e({ type: Aa });
                var t = new Date();
                return Promise.all([
                  e(Za({ fetchFromMoogle: !0, optIn: n })),
                  e(Ya({ enableServerSolution: a, today: t })),
                ])
                  .then(function () {
                    e(ca());
                  })
                  .then(function () {
                    e(ua()),
                      e(_a({ today: t })),
                      e({ type: Va, payload: { appLoaded: !0 } });
                  });
              })
            ));
        },
        [l, d]
      ),
      _.useEffect(
        function () {
          d &&
            p &&
            e &&
            !s &&
            c(
              se({
                text: "You are now logged in to your Times Account.",
                duration: 2e3,
                isSystem: !0,
              })
            );
        },
        [p, e, s, d]
      ),
      _.useEffect(
        function () {
          d &&
            p &&
            e &&
            i &&
            (c(
              se({
                text: "Your stats have been linked to your account.",
                duration: 2e3,
                isSystem: !0,
              })
            ),
            c({ type: V }),
            c({
              type: $,
              payload: {
                name: "stats-successful",
                region: "wordle-stats-link",
              },
            }));
        },
        [p, i, e, d]
      ),
      (t = P(I)),
      (r = P(L)),
      g.useEffect(
        function () {
          var e = document.querySelector("body");
          e &&
            (t && !e.classList.contains("dark")
              ? e.classList.add("dark")
              : t || e.classList.remove("dark"));
        },
        [t]
      ),
      g.useEffect(
        function () {
          var e = document.querySelector("body");
          e &&
            (r && !e.classList.contains("colorblind")
              ? e.classList.add("colorblind")
              : r || e.classList.remove("colorblind"));
        },
        [r]
      ),
      u
        ? _.createElement(C, {
            hasLoaded: l,
            config: ml,
            initialMoment:
              ((m =
                document.referrer.includes("nytimes.com") &&
                !document.referrer.includes("myaccount")),
              (u = new URLSearchParams(document.location.search)),
              window.isHybridWebView || m || u.get("forceWelcomeMoment")
                ? "loading"
                : "game"),
          })
        : _.createElement(dl, { hasLoaded: l })
    );
  }
  function yl(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function gl(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? yl(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : yl(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  var fl = {
    id: null,
    boardState: [],
    dayOffset: null,
    currentRowIndex: 0,
    timestamps: { lastPlayed: null, lastCompleted: null },
    status: "IN_PROGRESS",
  };
  function hl(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function bl(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? hl(Object(n), !0).forEach(function (e) {
            wl(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : hl(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function wl(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var kl,
    _l,
    vl = {
      hardMode: !1,
      darkMode:
        (null === (kl = document.body) ||
        void 0 === kl ||
        null === (_l = kl.className) ||
        void 0 === _l
          ? void 0
          : _l.includes("dark")) || !1,
      colorblindMode: !1,
    };
  function xl(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var a,
            o,
            r = [],
            s = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(s = (a = n.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              s = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Sl(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Sl(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Sl(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function El(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function jl(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? El(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : El(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  var zl = Je;
  function Nl(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Cl(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Cl(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Cl(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Cl(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function Al(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function Ol(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Al(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : Al(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  var Il = {
    modal: null,
    page: null,
    error: null,
    isNavModalOpen: !1,
    toasts: [],
    isPageClosing: !1,
  };
  function Ll(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function Tl(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Ll(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : Ll(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  var Pl = {
    isAnimatingRow: !1,
    lastRowInvalid: !1,
    lastRowWin: !1,
    isRestoringSession: !1,
  };
  function Ml(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function Bl(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Ml(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : Ml(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  function Rl() {
    return ot.Date.now();
  }
  var Wl = {
      moogleGet: {
        isLoading: !1,
        error: !1,
        errorMessage: null,
        data: null,
        optedIn: !1,
      },
      mooglePost: { isLoading: !1, error: !1, lastFailedSaveData: null },
      solution: { isLoading: !1, error: !1, data: null },
      profileInfo: { isLoading: !1, error: !1, data: null },
      appLoaded: !1,
    },
    Hl = a.combineReducers({
      persist: a.combineReducers({
        game: function () {
          var n =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : fl,
            a = 1 < arguments.length ? arguments[1] : void 0;
          switch (a.type) {
            case la:
              return null !== (o = a.payload) && void 0 !== o && o.game
                ? a.payload.game
                : n;
            case fa:
              var e = a.payload,
                t = e.numRows,
                o = e.id,
                e = e.dayOffset;
              return gl(
                gl({}, n),
                {},
                {
                  id: o,
                  dayOffset: e,
                  boardState: Array(t).fill(""),
                  currentRowIndex: 0,
                  status: "IN_PROGRESS",
                }
              );
            case ba:
              return gl(
                gl({}, n),
                {},
                {
                  boardState: n.boardState.map(function (e, t) {
                    return t === n.currentRowIndex
                      ? "".concat(e).concat(a.payload.letter)
                      : e;
                  }),
                }
              );
            case wa:
              return gl(
                gl({}, n),
                {},
                {
                  boardState: n.boardState.map(function (e, t) {
                    return t === n.currentRowIndex
                      ? e.slice(0, e.length - 1)
                      : e;
                  }),
                }
              );
            case ka:
              (e = a.payload), (t = e.now), (e = e.status);
              return gl(
                gl({}, n),
                {},
                {
                  currentRowIndex: n.currentRowIndex + 1,
                  timestamps: gl(
                    gl({}, n.timestamps),
                    {},
                    {
                      lastCompleted:
                        "IN_PROGRESS" === e ? n.timestamps.lastCompleted : t,
                      lastPlayed: t,
                    }
                  ),
                  status: e,
                }
              );
            default:
              return n;
          }
        },
        settings: function () {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : vl,
            t = 1 < arguments.length ? arguments[1] : void 0;
          switch (t.type) {
            case la:
              return null !== (a = t.payload) && void 0 !== a && a.settings
                ? t.payload.settings
                : e;
            case ps:
              var n = t.payload,
                a = n.name,
                n = n.value;
              return bl(bl({}, e), {}, wl({}, a, n));
            default:
              return e;
          }
        },
        stats: function () {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : zl,
            t = 1 < arguments.length ? arguments[1] : void 0;
          switch (t.type) {
            case la:
              return null !== (r = t.payload) && void 0 !== r && r.stats
                ? t.payload.stats
                : e;
            case ka:
              var n = t.payload,
                a = n.status,
                o = n.isStreak,
                r = n.numGuesses;
              return "IN_PROGRESS" === a
                ? e
                : ((n = e),
                  (o = (a = { isWin: "WIN" === a, isStreak: o, numGuesses: r })
                    .isWin),
                  (r = a.isStreak),
                  (a = a.numGuesses),
                  (n = jl(jl({}, n), {}, { guesses: jl({}, n.guesses) })),
                  o
                    ? ((n.guesses[a] += 1),
                      r ? (n.currentStreak += 1) : (n.currentStreak = 1))
                    : ((n.currentStreak = 0), (n.guesses.fail += 1)),
                  (n.maxStreak = Math.max(n.currentStreak, n.maxStreak)),
                  (n.gamesPlayed += 1),
                  (n.gamesWon += o ? 1 : 0),
                  (n.winPercentage = Math.round(
                    (n.gamesWon / n.gamesPlayed) * 100
                  )),
                  0 === n.gamesWon
                    ? (n.averageGuesses = 0)
                    : (n.averageGuesses = Math.round(
                        Object.entries(n.guesses).reduce(function (e, t) {
                          var n = xl(t, 2),
                            t = n[0],
                            n = n[1],
                            n = e + parseInt(t, 10) * n;
                          return "fail" !== t ? n : e;
                        }, 0) / n.gamesWon
                      )),
                  n);
            default:
              return e;
          }
        },
      }),
      overlays: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Il,
          t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
          case D:
            return Ol(Ol({}, e), {}, { modal: t.payload.modal });
          case q:
            return Ol(Ol({}, e), {}, { modal: null });
          case G:
            return Ol(Ol({}, e), {}, { page: t.payload.page });
          case F:
            return Ol(Ol({}, e), {}, { page: null, isPageClosing: !1 });
          case Y:
            return Ol(Ol({}, e), {}, { error: t.payload.error });
          case "wordle/overlays/CLOSE_ERROR":
            return Ol(Ol({}, e), {}, { error: null });
          case U:
            return Ol(Ol({}, e), {}, { isNavModalOpen: !0 });
          case Z:
            return Ol(Ol({}, e), {}, { isNavModalOpen: !1 });
          case K:
            var n = t.payload,
              a = {
                text: n.text,
                duration: n.duration || 1e3,
                isSystem: n.isSystem,
                timestamp: n.timestamp,
              },
              n = e.toasts;
            return Ol(Ol({}, e), {}, { toasts: [a].concat(Nl(n)) });
          case J:
            var n = t.payload,
              o = n.text,
              r = n.timestamp,
              n = e.toasts.filter(function (e) {
                return e.text !== o || e.timestamp !== r;
              });
            return Ol(Ol({}, e), {}, { toasts: n });
          case V:
            return Ol(Ol({}, e), {}, { isPageClosing: !0 });
          default:
            return e;
        }
      },
      transient: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Pl,
          t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
          case wa:
            return Tl(Tl({}, e), {}, { lastRowInvalid: !1 });
          case K:
            var n = t.payload,
              a = n.invalidate,
              n = n.win;
            return a
              ? Tl(Tl({}, e), {}, { lastRowInvalid: !0 })
              : n
              ? Tl(Tl({}, e), {}, { lastRowWin: !0 })
              : e;
          case Oo:
            return Tl(Tl({}, e), {}, { lastRowInvalid: !1 });
          case ha:
            return 0 === t.payload.currentRowIndex
              ? e
              : Tl(
                  Tl({}, e),
                  {},
                  { isAnimatingRow: !0, isRestoringSession: !0 }
                );
          case ka:
            return Tl(Tl({}, e), {}, { isAnimatingRow: !0 });
          case Ao:
            return Tl(
              Tl({}, e),
              {},
              { isAnimatingRow: !1, isRestoringSession: !1 }
            );
          default:
            return e;
        }
      },
      api: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Wl,
          t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
          case Aa:
            return Bl(
              Bl({}, e),
              {},
              { moogleGet: Bl(Bl({}, e.moogleGet), {}, { optedIn: !0 }) }
            );
          case Oa:
            return Bl(
              Bl({}, e),
              {},
              { moogleGet: Bl(Bl({}, e.moogleGet), {}, { isLoading: !0 }) }
            );
          case Ra:
            return Bl(
              Bl({}, e),
              {},
              { solution: Bl(Bl({}, e.solution), {}, { isLoading: !0 }) }
            );
          case Ia:
            var n = t.payload,
              a = n.data,
              o = n.optIn;
            return Bl(
              Bl({}, e),
              {},
              {
                moogleGet: Bl(
                  Bl({}, e.moogleGet),
                  {},
                  {
                    data: a,
                    isLoading: !1,
                    error: !1,
                    optedIn: o || !!a.version,
                  }
                ),
              }
            );
          case Wa:
            (n = t.payload.data),
              (o = n.solution),
              (a = n.id),
              (n = n.dayOffset);
            return Bl(
              Bl({}, e),
              {},
              {
                solution: Bl(
                  Bl({}, e.solution),
                  {},
                  {
                    data: { solution: o, id: a, dayOffset: n },
                    isLoading: !1,
                    error: !1,
                  }
                ),
              }
            );
          case La:
            return Bl(
              Bl({}, e),
              {},
              {
                moogleGet: Bl(
                  Bl({}, e.moogleGet),
                  {},
                  { isLoading: !1, error: !0, errorMessage: t.payload.message }
                ),
              }
            );
          case Ha:
            return Bl(
              Bl({}, e),
              {},
              {
                solution: Bl(
                  Bl({}, e.solution),
                  {},
                  { isLoading: !1, error: !0 }
                ),
              }
            );
          case Da:
            return Bl(
              Bl({}, e),
              {},
              { profileInfo: { isLoading: !0, data: null, error: !1 } }
            );
          case qa:
            return Bl(
              Bl({}, e),
              {},
              {
                profileInfo: { isLoading: !1, data: t.payload.data, error: !1 },
              }
            );
          case Ga:
            return Bl(
              Bl({}, e),
              {},
              { profileInfo: { isLoading: !1, data: null, error: !0 } }
            );
          case Ta:
            return Bl(
              Bl({}, e),
              {},
              {
                mooglePost: Bl(
                  Bl({}, e.mooglePost),
                  {},
                  { isLoading: !0, error: !1 }
                ),
              }
            );
          case Pa:
            return Bl(
              Bl({}, e),
              {},
              {
                mooglePost: {
                  isLoading: !1,
                  error: !1,
                  lastFailedSaveData: null,
                },
              }
            );
          case Ma:
            return Bl(
              Bl({}, e),
              {},
              {
                mooglePost: {
                  isLoading: !1,
                  error: !0,
                  lastFailedSaveData: t.payload.saveData,
                },
              }
            );
          case Va:
            return Bl(Bl({}, e), {}, { appLoaded: t.payload.appLoaded });
          case Ba:
            return Bl(
              Bl({}, e),
              {},
              {
                mooglePost: {
                  isLoading: !1,
                  error: !1,
                  lastFailedSaveData: null,
                },
              }
            );
          default:
            return e;
        }
      },
    }),
    Dl = /\s/;
  var ql = /^\s+/;
  function Gl(e) {
    return (
      e &&
      e
        .slice(
          0,
          (function (e) {
            for (var t = e.length; t-- && Dl.test(e.charAt(t)); );
            return t;
          })(e) + 1
        )
        .replace(ql, "")
    );
  }
  function Fl(e) {
    return (Fl =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var Vl = /^[-+]0x[0-9a-f]+$/i,
    Yl = /^0b[01]+$/i,
    Ul = /^0o[0-7]+$/i,
    Zl = parseInt;
  function Xl(e) {
    if ("number" == typeof e) return e;
    if ("symbol" == Fl((t = e)) || ($t(t) && "[object Symbol]" == mt(t)))
      return NaN;
    var t;
    if (
      "string" !=
      typeof (e = yt(e)
        ? yt((n = "function" == typeof e.valueOf ? e.valueOf() : e))
          ? n + ""
          : n
        : e)
    )
      return 0 === e ? e : +e;
    e = Gl(e);
    var n = Yl.test(e);
    return n || Ul.test(e) ? Zl(e.slice(2), n ? 2 : 8) : Vl.test(e) ? NaN : +e;
  }
  var Kl = "Expected a function",
    Jl = Math.max,
    Ql = Math.min;
  function $l(a, n, e) {
    var o,
      r,
      s,
      i,
      l,
      c,
      u = 0,
      d = !1,
      m = !1,
      t = !0;
    if ("function" != typeof a) throw new TypeError(Kl);
    function p(e) {
      var t = o,
        n = r;
      return (o = r = void 0), (u = e), (i = a.apply(n, t));
    }
    function y(e) {
      var t = e - c;
      return void 0 === c || n <= t || t < 0 || (m && s <= e - u);
    }
    function g() {
      var e,
        t = Rl();
      if (y(t)) return f(t);
      l = setTimeout(g, ((t = n - ((e = t) - c)), m ? Ql(t, s - (e - u)) : t));
    }
    function f(e) {
      return (l = void 0), t && o ? p(e) : ((o = r = void 0), i);
    }
    function h() {
      var e = Rl(),
        t = y(e);
      if (((o = arguments), (r = this), (c = e), t)) {
        if (void 0 === l)
          return (u = t = c), (l = setTimeout(g, n)), d ? p(t) : i;
        if (m) return clearTimeout(l), (l = setTimeout(g, n)), p(c);
      }
      return void 0 === l && (l = setTimeout(g, n)), i;
    }
    return (
      (n = Xl(n) || 0),
      yt(e) &&
        ((d = !!e.leading),
        (m = "maxWait" in e),
        (s = m ? Jl(Xl(e.maxWait) || 0, n) : s),
        (t = "trailing" in e ? !!e.trailing : t)),
      (h.cancel = function () {
        void 0 !== l && clearTimeout(l), (o = c = r = l = void (u = 0));
      }),
      (h.flush = function () {
        return void 0 === l ? i : f(Rl());
      }),
      h
    );
  }
  function ec(t, e) {
    var n,
      a = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        a.push.apply(a, n)),
      a
    );
  }
  function tc(a) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ec(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = a),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : ec(Object(o)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return a;
  }
  function nc(u) {
    var d = $l(function (e) {
      return u.dispatch(Xa(e));
    }, 1200);
    return (
      window.addEventListener("online", function () {
        var e = Le(u.getState());
        e && d(e);
      }),
      function (c) {
        return function (e) {
          var t,
            n = c(e),
            a = u.getState(),
            o = Ae(a),
            r = Ee(a),
            s = Oe(a),
            i = Math.floor(Date.now() / 1e3),
            l = tc(tc({}, a.persist), {}, { timestamp: i }),
            i = ra(r, o),
            o = [ps, ka, fa, Fa];
          return (
            sc(l) ||
              (o.includes(e.type) &&
                (sa(i, l),
                r &&
                  (e.type === Fa
                    ? ((t = e.payload.enableAuth), u.dispatch(Xa(l, t)))
                    : d(l))),
              s && e.type === ha && d(l),
              e.type === ps &&
                ((s = (t = a.persist.settings).hardMode),
                (l = t.darkMode),
                (t = t.colorblindMode),
                "hardMode" === e.payload.name && Kn({ hardMode: s }),
                "darkMode" === e.payload.name && sa(aa, l),
                "colorblindMode" === e.payload.name && sa(oa, t)),
              e.type === ka &&
                (Kn(ia(a)),
                (function (e) {
                  try {
                    window.localStorage.setItem(Ke, JSON.stringify(e));
                  } catch (e) {
                    console.error(e);
                  }
                })(a.persist.stats)),
              e.type === fa && Kn(ia(a))),
            n
          );
        };
      }
    );
  }
  function ac(_) {
    return function (k) {
      return function (e) {
        var t = k(e),
          n = _.getState(),
          a = L(n),
          o = I(n),
          r = "".concat(Ye(n)),
          s = O(n);
        switch (e.type) {
          case D:
            var i = e.payload,
              l = i.modal,
              i = i.isClicked;
            "stats" === l &&
              i &&
              v.trackModuleInteraction("click", r, "wordle", l);
            break;
          case G:
            var c = e.payload.page;
            c && v.trackModuleInteraction("click", r, "wordle", c);
            break;
          case U:
            v.trackClick({
              name: "wordle",
              label: "click-nav",
              useBeacon: !0,
              context: null,
            });
            break;
          case X:
            var u = e.payload,
              l = u.name,
              c = u.label,
              d = u.useBeacon,
              u = u.context;
            v.trackClick({ name: l, label: c, useBeacon: d, context: u });
            break;
          case ps:
            (d = e.payload), (u = d.name), (d = d.value);
            v.trackModuleInteraction(
              "click",
              r,
              "wordle",
              {
                darkMode: "dark-mode",
                colorblindMode: "high-contrast",
                hardMode: "hard-mode",
              }[u],
              d ? "turn-on" : "turn-off"
            );
            break;
          case ka:
            var m = o ? "1" : "0",
              p = s ? "h" : "e",
              y = e.payload,
              g = y.numGuesses,
              f = y.status,
              y = y.guess;
            1 === g &&
              v.trackModuleInteraction(
                "click",
                r,
                "wordle",
                "start-game",
                "CB=".concat(a ? "1" : "0", " DM=").concat(m)
              ),
              v.trackModuleInteraction(
                "click",
                r,
                "wordle",
                "solve-attempt",
                "".concat(g.toString(), "-").concat(y)
              ),
              "IN_PROGRESS" !== f &&
                v.trackModuleInteraction(
                  "click",
                  r,
                  "wordle",
                  "100%-complete",
                  "".concat(p, "-").concat("WIN" === f ? g : 0)
                );
            break;
          case cr:
            var m = e.payload.isGameComplete ? "congrats-modal" : "stats",
              y = po(n),
              p = go(n),
              f = fo(n),
              h = ho(n),
              g = yo(n);
            v.trackImpression(
              "wordle",
              m,
              [
                "p: ".concat(y),
                "w: ".concat(g),
                "cs: ".concat(f),
                "ms: ".concat(p),
                "1: ".concat(h[1]),
                "2: ".concat(h[2]),
                "3: ".concat(h[3]),
                "4: ".concat(h[4]),
                "5: ".concat(h[5]),
                "6: ".concat(h[6]),
              ],
              r
            );
            break;
          case ur:
            v.trackModuleInteraction("click", r, "wordle", "share");
            break;
          case Q:
            var h = e.payload,
              b = h.label,
              w = h.sendContext,
              h = h.element,
              w = w ? r : null;
            v.trackClick(
              h
                ? { name: "", label: b, element: h, useBeacon: !0, context: w }
                : { name: "wordle", label: b, useBeacon: !0, context: w }
            );
            break;
          case $:
            (b = e.payload), (w = b.name), (b = b.region);
            v.trackImpression(w, b);
        }
        return t;
      };
    };
  }
  var oc,
    rc,
    sc = function (e) {
      var t = e.game.dayOffset,
        e = e.timestamp,
        e = ve(new Date(1e3 * e));
      return t && t < e;
    },
    A = document.body;
  e.render(
    _.createElement(
      _.Fragment,
      null,
      _.createElement(r, null),
      _.createElement(
        t.Provider,
        {
          store:
            ((oc = void 0 !== window.__REDUX_DEVTOOLS_EXTENSION__),
            (rc = [a.applyMiddleware(o, nc, ac)]),
            oc && rc.push(window.__REDUX_DEVTOOLS_EXTENSION__()),
            a.createStore(Hl, a.compose.apply(void 0, rc))),
        },
        _.createElement(
          m,
          null,
          _.createElement(ue, null, _.createElement(pl, null))
        )
      )
    ),
    A
  );
});
//# sourceMappingURL=wordle.0c8b63b7de3d1efc639cd2f399740b6200a7860f.js.map
