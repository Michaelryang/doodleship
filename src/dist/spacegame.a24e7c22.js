// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"settings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settings = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// let worldWidth = 720;
// let worldHeight = 1080;
// let gameScale = 0.25;
// let turnLeftKey = 'a';
// let turnRightKey = 'd';
// singleton
var Settings = /*#__PURE__*/function () {
  function Settings() {
    var _this = this;
    _classCallCheck(this, Settings);
    this.worldWidth = 1080;
    this.worldHeight = 720;
    this.gameScale = 0.5;
    this.turnLeftKey = 'a';
    this.turnRightKey = 'd';
    this.accelerationKey = ' ';
    this.fireKey = 'Enter';
    this.playerMaxSpeed = 5; // max units per frame
    this.playerAcceleration = 0.04; // percentage per frame of max speed
    this.playerRotationSpeed = 4; // degrees per frame
    this.bulletFireInterval = 0.25; // in seconds
    this.bulletLifetime = 2; // in seconds
    this.bulletMaxSpeed = 15; // max units per frame
    this.NUM_BEGINNING_ASTEROIDS = 6;
    this.maxAsteroidSpeed = 1.5;
    this.minAsteroidSpeed = 0.5;
    this.maxAsteroidSize = 3;
    this.maxAsteroidRotationSpeed = 1;
    this.getWorldWidth = function () {
      return _this.worldWidth;
    };
    this.getWorldHeight = function () {
      return _this.worldHeight;
    };
    this.getGameScale = function () {
      return _this.gameScale;
    };
    this.getTurnLeftKey = function () {
      return _this.turnLeftKey;
    };
    this.getTurnRightKey = function () {
      return _this.turnRightKey;
    };
    this.getAccelerationKey = function () {
      return _this.accelerationKey;
    };
    this.getFireKey = function () {
      return _this.fireKey;
    };
    this.getPlayerMaxSpeed = function () {
      return _this.playerMaxSpeed;
    };
    this.getPlayerAcceleration = function () {
      return _this.playerAcceleration;
    };
    this.getPlayerRotationSpeed = function () {
      return _this.playerRotationSpeed;
    };
    this.getBulletFireInterval = function () {
      return _this.bulletFireInterval;
    };
    this.getBulletMaxSpeed = function () {
      return _this.bulletMaxSpeed;
    };
    this.getBulletLifeTime = function () {
      return _this.bulletLifetime;
    };
    this.getNumBeginningAsteroids = function () {
      return _this.NUM_BEGINNING_ASTEROIDS;
    };
    this.getMaxAsteroidSpeed = function () {
      return _this.maxAsteroidSpeed;
    };
    this.getMinAsteroidSpeed = function () {
      return _this.minAsteroidSpeed;
    };
    this.getMaxAsteroidSize = function () {
      return _this.maxAsteroidSize;
    };
    this.getMaxAsteroidRotationSpeed = function () {
      return _this.maxAsteroidRotationSpeed;
    };
  }
  _createClass(Settings, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!Settings.instance) {
        Settings.instance = new Settings();
      }
      return Settings.instance;
    }
  }]);
  return Settings;
}();
exports.Settings = Settings;
},{}],"types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = exports.vectorDistanceSquared = exports.toRadians = exports.toDegrees = exports.isPointColliding = exports.isOutOfBounds = exports.getUnitDirectionVectorFromRadians = exports.getRandomVector = exports.clamp = exports.WorldObjectShape = exports.WorldObject = exports.Vector2 = void 0;
var _settings = require("./settings");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var WorldObjectShape;
exports.WorldObjectShape = WorldObjectShape;
(function (WorldObjectShape) {
  WorldObjectShape[WorldObjectShape["Circle"] = 0] = "Circle";
  WorldObjectShape[WorldObjectShape["Rectangle"] = 1] = "Rectangle";
})(WorldObjectShape || (exports.WorldObjectShape = WorldObjectShape = {}));
var toRadians = function toRadians(degrees) {
  return degrees * Math.PI / 180;
};
exports.toRadians = toRadians;
var toDegrees = function toDegrees(radians) {
  return radians / Math.PI * 180;
};
exports.toDegrees = toDegrees;
var clamp = function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
exports.clamp = clamp;
var wrap = function wrap(num, min, max) {
  var range = max - min;
  if (num < min) {
    num += range;
  }
  if (num > max) {
    num -= range;
  }
  return num;
};
// takes two vectors to define a rectangle and chooses a random vector within the rectangle
exports.wrap = wrap;
var getRandomVector = function getRandomVector(min, max) {
  var minX = Math.min(min.x, max.x);
  var minY = Math.min(min.y, max.y);
  var maxX = Math.max(min.x, max.x);
  var maxY = Math.max(min.y, max.y);
  return new Vector2(Math.random() * (maxX - minX) + minX, Math.random() * (maxY - minY) + minY);
};
exports.getRandomVector = getRandomVector;
var getUnitDirectionVectorFromRadians = function getUnitDirectionVectorFromRadians(radians) {
  return new Vector2(Math.cos(radians), Math.sin(radians));
};
exports.getUnitDirectionVectorFromRadians = getUnitDirectionVectorFromRadians;
var vectorDistanceSquared = function vectorDistanceSquared(v1, v2) {
  return (v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y);
};
exports.vectorDistanceSquared = vectorDistanceSquared;
var isPointColliding = function isPointColliding(point, worldObject) {
  if (worldObject.getShape() == WorldObjectShape.Circle) {
    var radius = worldObject.getRadius();
    var objectPosition = worldObject.getPosition();
    return vectorDistanceSquared(point, objectPosition) < radius * radius;
  } else if (worldObject.getShape() == WorldObjectShape.Rectangle) {
    var width = worldObject.getWidth();
    var height = worldObject.getHeight();
    var _objectPosition = worldObject.getPosition();
    var minX = _objectPosition.x - width / 2;
    var maxX = _objectPosition.x + width / 2;
    var minY = _objectPosition.y - width / 2;
    var maxY = _objectPosition.y + width / 2;
    return point.x <= maxX && point.x >= minX && point.y <= maxY && point.y >= minY;
  }
  return false;
};
// export const isObjectColliding = (object1: WorldObject, object2: WorldObject) : boolean =>
// {
//     if ( object1.getShape() == WorldObjectShape.Circle)
//     {
//     }
// }
exports.isPointColliding = isPointColliding;
var isOutOfBounds = function isOutOfBounds(worldPos) {
  return worldPos.x < 0 || worldPos.x > _settings.Settings.getInstance().getWorldWidth() || worldPos.y < 0 || worldPos.y > _settings.Settings.getInstance().getWorldHeight();
};
exports.isOutOfBounds = isOutOfBounds;
var worldWidth = _settings.Settings.getInstance().getWorldWidth();
var worldHeight = _settings.Settings.getInstance().getWorldHeight();
var Vector2 = /*#__PURE__*/_createClass(function Vector2() {
  var _this = this;
  _classCallCheck(this, Vector2);
  this.add = function (vector) {
    _this.x += vector.x;
    _this.y += vector.y;
  };
  this.subtract = function (vector) {
    _this.x -= vector.x;
    _this.y -= vector.y;
  };
  this.multiplyScalar = function (scalar) {
    _this.x *= scalar;
    _this.y *= scalar;
  };
  this.getSquaredMagnitude = function () {
    return _this.x * _this.x + _this.y * _this.y;
  };
  // deep copy
  this.getVector = function () {
    return new Vector2(_this.x, _this.y);
  };
  this.x = 0;
  this.y = 0;
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }
  if (arr.length == 1) {
    this.x = arr[0].x;
    this.y = arr[0].y;
  }
  if (arr.length == 2) {
    this.x = arr[0];
    this.y = arr[1];
  }
});
exports.Vector2 = Vector2;
var WorldObject = /*#__PURE__*/_createClass(function WorldObject(spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape) {
  var _this2 = this;
  _classCallCheck(this, WorldObject);
  this.sprite = new Image();
  this.worldPositionCenter = new Vector2(); // 
  this.worldPositionTopLeftCorner = new Vector2(); // 
  this.velocity = new Vector2(); // world units per second;
  this.width = 0;
  this.height = 0;
  this.lifeCycleActive = true;
  this.isLifeCycleActive = function () {
    return _this2.lifeCycleActive;
  };
  this.getShape = function () {
    return _this2.shape;
  };
  this.getRadius = function () {
    return _this2.width / 2;
  };
  this.getWidth = function () {
    return _this2.width;
  };
  this.getHeight = function () {
    return _this2.width;
  };
  this.getPosition = function () {
    return _this2.worldPositionCenter;
  };
  this.endLifeCycle = function () {
    _this2.lifeCycleActive = false;
  };
  this.translate = function (translationVector) {
    _this2.worldPositionCenter.add(translationVector);
    _this2.worldPositionTopLeftCorner.add(translationVector);
  };
  this.render = function (canvas) {
    // console.log("rendering worldobject:\n" + 
    // this.worldPositionTopLeftCorner.x + " " + this.worldPositionTopLeftCorner.y + "\n" +
    // this.width + " " + this.height + "\n" + 
    // this.worldPositionCenter.x + " " + this.worldPositionCenter.y);
    var ctx = canvas.getContext("2d");
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    //ctx?.translate(this.worldPositionCenter.x, this.worldPositionCenter.y);
    ctx === null || ctx === void 0 ? void 0 : ctx.translate(_this2.worldPositionCenter.x, _this2.worldPositionCenter.y);
    ctx === null || ctx === void 0 ? void 0 : ctx.rotate(_this2.rotation * Math.PI / 180);
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(_this2.sprite, -_this2.width / 2, -_this2.height / 2, _this2.width, _this2.height);
    //ctx?.translate(-this.worldPositionCenter.x, -this.worldPositionCenter.y);
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
  };
  typeof worldPos !== 'undefined' ? this.worldPositionCenter = worldPos : this.worldPositionCenter = new Vector2(worldWidth / 2.0, worldHeight / 2.0);
  typeof worldVelocity !== 'undefined' ? this.velocity = worldVelocity : this.velocity = new Vector2(0, 0);
  typeof worldRotation !== 'undefined' ? this.rotation = worldRotation : this.rotation = 0;
  typeof spriteScale !== 'undefined' ? this.scale = spriteScale : this.scale = 1.0;
  typeof rotationOffset !== 'undefined' ? this.initialRotationOffset = rotationOffset : this.initialRotationOffset = 0.0;
  this.sprite.src = spriteImageURL;
  this.sprite.addEventListener('load', function () {
    // Access the width and height after the image has loaded
    _this2.width = _this2.sprite.naturalWidth * _this2.scale;
    _this2.height = _this2.sprite.naturalHeight * _this2.scale;
    // Use the width and height
    console.log('Width:', _this2.width);
    console.log('Height:', _this2.height);
    _this2.worldPositionTopLeftCorner = new Vector2(_this2.worldPositionCenter.x - _this2.width / 2, _this2.worldPositionCenter.y - _this2.height / 2);
  });
  typeof objectShape !== 'undefined' ? this.shape = objectShape : this.shape = WorldObjectShape.Rectangle;
  this.lifeCycleActive = true;
});
exports.WorldObject = WorldObject;
},{"./settings":"settings.js"}],"assets/bullet.png":[function(require,module,exports) {
module.exports = "/bullet.6a8026eb.png";
},{}],"bullet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bullet = void 0;
var _types = require("./types.js");
var _settings = require("./settings.js");
var _bullet = _interopRequireDefault(require("./assets/bullet.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } //import playerImage from './assets/asteroid1.png'
var Bullet = /*#__PURE__*/function (_WorldObject) {
  _inherits(Bullet, _WorldObject);
  var _super = _createSuper(Bullet);
  function Bullet(worldPos, worldVelocity, worldRotation, spriteScale) {
    var _this;
    _classCallCheck(this, Bullet);
    _this = _super.call(this, _bullet.default, worldPos, worldVelocity, worldRotation, spriteScale, 270);
    _this.lifeTime = _settings.Settings.getInstance().getBulletLifeTime();
    _this.maxSpeed = _settings.Settings.getInstance().getBulletMaxSpeed();
    _this.update = function () {
      //console.log("lifetime " + this.lifeTime + "active: " + this.lifeCycleActive);
      _this.lifeTime -= 1 / 60;
      if (_this.lifeTime < 0) {
        _this.lifeCycleActive = false;
      }
      var translateVector = _this.velocity.getVector();
      translateVector.multiplyScalar(_this.maxSpeed);
      _this.translate(translateVector);
      if ((0, _types.isOutOfBounds)(_this.worldPositionCenter)) {
        _this.worldPositionCenter.x = (0, _types.wrap)(_this.worldPositionCenter.x, 0, _settings.Settings.getInstance().getWorldWidth());
        _this.worldPositionCenter.y = (0, _types.wrap)(_this.worldPositionCenter.y, 0, _settings.Settings.getInstance().getWorldHeight());
      }
    };
    return _this;
  }
  return _createClass(Bullet);
}(_types.WorldObject);
exports.Bullet = Bullet;
},{"./types.js":"types.js","./settings.js":"settings.js","./assets/bullet.png":"assets/bullet.png"}],"assets/player.png":[function(require,module,exports) {
module.exports = "/player.1beceb5b.png";
},{}],"player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;
var _types = require("./types.js");
var _settings = require("./settings.js");
var _bullet = require("./bullet.js");
var _player = _interopRequireDefault(require("./assets/player.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } //import playerImage from './assets/asteroid1.png'
// const width = Settings.getInstance().getWorldWidth();
// const height = Settings.getInstance().getWorldHeight();
var turnLeftKey = _settings.Settings.getInstance().getTurnLeftKey();
var turnRightKey = _settings.Settings.getInstance().getTurnRightKey();
var accelerationKey = _settings.Settings.getInstance().getAccelerationKey();
var fireKey = _settings.Settings.getInstance().getFireKey();
var Player = /*#__PURE__*/function (_WorldObject) {
  _inherits(Player, _WorldObject);
  var _super = _createSuper(Player);
  function Player(worldPos, worldVelocity, worldRotation, spriteScale) {
    var _this;
    _classCallCheck(this, Player);
    console.log("listeners");
    addEventListener('keydown', function (e) {
      _this.keyPressed(e);
    });
    addEventListener('keyup', function (e) {
      _this.keyReleased(e);
    });
    _this = _super.call(this, _player.default, worldPos, worldVelocity, worldRotation, spriteScale, 270);
    _this.isTurningLeft = false;
    _this.isTurningRight = false;
    _this.isAccelerating = false;
    _this.speedMultiplier = 0.0; // this is a multiplier of the velocity vector
    _this.maxSpeed = _settings.Settings.getInstance().getPlayerMaxSpeed();
    _this.acceleration = _settings.Settings.getInstance().getPlayerAcceleration();
    _this.isFiring = false;
    _this.canFireBullet = false;
    _this.bulletFireInterval = _settings.Settings.getInstance().getBulletFireInterval();
    _this.bulletFireTimer = 0.0; // in seconds
    _this.tryFireBullet = function () {
      if (_this.canFireBullet) {
        console.log("bullet fired");
        _this.canFireBullet = false;
        _this.bulletFireTimer = 0.0;
        return new _bullet.Bullet(_this.worldPositionCenter.getVector(), _this.velocity.getVector(), _this.rotation, _this.scale);
      }
      return null;
    };
    _this.update = function () {
      if (_this.isTurningLeft) {
        _this.rotation -= _settings.Settings.getInstance().getPlayerRotationSpeed();
      }
      if (_this.isTurningRight) {
        _this.rotation += _settings.Settings.getInstance().getPlayerRotationSpeed();
      }
      _this.rotation = (0, _types.wrap)(_this.rotation, 0, 360);
      if (_this.isAccelerating) {
        _this.speedMultiplier += _this.acceleration;
      } else {
        _this.speedMultiplier -= _this.acceleration;
      }
      if (_this.isFiring) {
        _this.bulletFireTimer += 1.0 / 60.0;
        //console.log("bullet timer" + this.bulletFireTimer);
        if (_this.bulletFireTimer > _this.bulletFireInterval) {
          _this.canFireBullet = true;
        }
      }
      _this.speedMultiplier = (0, _types.clamp)(_this.speedMultiplier, 0, 1.0);
      _this.velocity = (0, _types.getUnitDirectionVectorFromRadians)((0, _types.toRadians)((0, _types.wrap)(_this.rotation + _this.initialRotationOffset, 0, 360)));
      //console.log("velocity: " + this.velocity.x + " " + this.velocity.y);
      var translateVector = new _types.Vector2(_this.velocity.getVector());
      translateVector.multiplyScalar(_this.speedMultiplier * _this.maxSpeed);
      //console.log("translateVector: " + translateVector.x + " " + translateVector.y);
      // vector is a unit vector in the direction of rotation.
      _this.translate(translateVector);
      if ((0, _types.isOutOfBounds)(_this.worldPositionCenter)) {
        _this.worldPositionCenter.x = (0, _types.wrap)(_this.worldPositionCenter.x, 0, _settings.Settings.getInstance().getWorldWidth());
        _this.worldPositionCenter.y = (0, _types.wrap)(_this.worldPositionCenter.y, 0, _settings.Settings.getInstance().getWorldHeight());
      }
    };
    return _this;
  }
  _createClass(Player, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      //console.log("(e as KeyboardEvent).key: " + (e as KeyboardEvent).key);
      //console.log("fireKey: " + fireKey); 
      if (e.key === turnLeftKey || e.key === turnLeftKey.toUpperCase()) {
        if (!this.isTurningLeft) {
          this.isTurningLeft = true;
          //console.log("left key pressed");
        }
      }

      if (e.key === turnRightKey || e.key === turnRightKey.toUpperCase()) {
        if (!this.isTurningRight) {
          this.isTurningRight = true;
          //console.log("right key pressed");
        }
      }

      if (e.key === accelerationKey || e.key === accelerationKey.toUpperCase()) {
        if (!this.isAccelerating) {
          this.isAccelerating = true;
          //console.log("right key pressed");
        }
      }

      if (e.key === fireKey || e.key === fireKey.toUpperCase()) {
        if (!this.isFiring) {
          this.isFiring = true;
          //console.log("fire key pressed");
        }
      }
    }
  }, {
    key: "keyReleased",
    value: function keyReleased(e) {
      if (e.key === turnLeftKey || e.key === turnLeftKey.toUpperCase()) {
        this.isTurningLeft = false;
        //console.log("left key released");
      }

      if (e.key === turnRightKey || e.key === turnRightKey.toUpperCase()) {
        this.isTurningRight = false;
        //console.log("right key released");
      }

      if (e.key === accelerationKey || e.key === accelerationKey.toUpperCase()) {
        this.isAccelerating = false;
        //console.log("right key released");
      }

      if (e.key === fireKey || e.key === fireKey.toUpperCase()) {
        this.isFiring = false;
        //console.log("right key released");
      }
    }
  }]);
  return Player;
}(_types.WorldObject);
exports.Player = Player;
},{"./types.js":"types.js","./settings.js":"settings.js","./bullet.js":"bullet.js","./assets/player.png":"assets/player.png"}],"assets/asteroid1.png":[function(require,module,exports) {
module.exports = "/asteroid1.56ded766.png";
},{}],"assets/asteroid2.png":[function(require,module,exports) {
module.exports = "/asteroid2.a289efa8.png";
},{}],"assets/asteroid3.png":[function(require,module,exports) {
module.exports = "/asteroid3.a8cc23d5.png";
},{}],"asteroid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsteroidFactory = exports.Asteroid = void 0;
var _types = require("./types");
var _asteroid = _interopRequireDefault(require("./assets/asteroid1.png"));
var _asteroid2 = _interopRequireDefault(require("./assets/asteroid2.png"));
var _asteroid3 = _interopRequireDefault(require("./assets/asteroid3.png"));
var _settings = require("./settings");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var asteroidImages = [_asteroid.default, _asteroid2.default, _asteroid3.default];
var AsteroidFactory = /*#__PURE__*/_createClass(function AsteroidFactory() {
  var _this = this;
  _classCallCheck(this, AsteroidFactory);
  this.worldPosTopLeft = new _types.Vector2(0, 0);
  this.worldPosBottomRight = new _types.Vector2(_settings.Settings.getInstance().getWorldWidth(), _settings.Settings.getInstance().getWorldHeight());
  this.createAsteroid = function (size, worldPos) {
    var asteroidImageIndex = Math.floor(Math.random() * asteroidImages.length);
    var newWorldPos;
    typeof worldPos !== 'undefined' ? newWorldPos = worldPos : newWorldPos = (0, _types.getRandomVector)(_this.worldPosTopLeft, _this.worldPosBottomRight);
    var newSize;
    typeof size !== 'undefined' ? newSize = size : newSize = _settings.Settings.getInstance().getMaxAsteroidSize();
    console.log("newWorldPos: ", newWorldPos);
    var worldRotation = Math.floor(Math.random() * 360);
    var rotationOffset = 0;
    var worldVelocity = (0, _types.getUnitDirectionVectorFromRadians)((0, _types.toRadians)((0, _types.wrap)(worldRotation + rotationOffset, 0, 360)));
    return new Asteroid(asteroidImages[asteroidImageIndex], newWorldPos, worldVelocity, worldRotation, _settings.Settings.getInstance().getGameScale() * (newSize / _settings.Settings.getInstance().getMaxAsteroidSize()), rotationOffset, _types.WorldObjectShape.Circle, newSize);
  };
});
exports.AsteroidFactory = AsteroidFactory;
var Asteroid = /*#__PURE__*/function (_WorldObject) {
  _inherits(Asteroid, _WorldObject);
  var _super = _createSuper(Asteroid);
  function Asteroid(spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape, size) {
    var _this2;
    _classCallCheck(this, Asteroid);
    _this2 = _super.call(this, spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape);
    _this2.splitAsteroid = function () {
      var asteroids = [];
      _this2.endLifeCycle();
      if (_this2.size > 1) {
        console.log("random 1: " + Math.random());
        console.log("random 2: " + Math.random());
        var asteroidFactory = new AsteroidFactory();
        var newPosMin = new _types.Vector2(_this2.getPosition());
        newPosMin.subtract(new _types.Vector2(_this2.getWidth() / 2, _this2.getHeight() / 2));
        var newPosMax = new _types.Vector2(_this2.getPosition());
        newPosMax.add(new _types.Vector2(_this2.getWidth() / 2, _this2.getHeight() / 2));
        asteroids.push(asteroidFactory.createAsteroid(_this2.size - 1, (0, _types.getRandomVector)(newPosMin, newPosMax)));
        asteroids.push(asteroidFactory.createAsteroid(_this2.size - 1, (0, _types.getRandomVector)(newPosMin, newPosMax)));
      }
      return asteroids;
    };
    _this2.update = function () {
      _this2.rotation += _this2.rotationSpeed;
      var translateVector = _this2.velocity.getVector();
      translateVector.multiplyScalar(_this2.speed);
      _this2.translate(translateVector);
      if ((0, _types.isOutOfBounds)(_this2.worldPositionCenter)) {
        _this2.worldPositionCenter.x = (0, _types.wrap)(_this2.worldPositionCenter.x, 0, _settings.Settings.getInstance().getWorldWidth());
        _this2.worldPositionCenter.y = (0, _types.wrap)(_this2.worldPositionCenter.y, 0, _settings.Settings.getInstance().getWorldHeight());
      }
    };
    var maxSpeed = _settings.Settings.getInstance().getMaxAsteroidSpeed();
    var minSpeed = _settings.Settings.getInstance().getMinAsteroidSpeed();
    _this2.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    console.log("constructing asteroid with speed: " + _this2.speed);
    typeof size !== 'undefined' ? _this2.size = size : _this2.size = _settings.Settings.getInstance().getMaxAsteroidSize();
    _this2.rotationSpeed = Math.random() * _settings.Settings.getInstance().getMaxAsteroidRotationSpeed() - 2.0 * _settings.Settings.getInstance().getMaxAsteroidRotationSpeed();
    return _this2;
  }
  return _createClass(Asteroid);
}(_types.WorldObject);
exports.Asteroid = Asteroid;
},{"./types":"types.js","./assets/asteroid1.png":"assets/asteroid1.png","./assets/asteroid2.png":"assets/asteroid2.png","./assets/asteroid3.png":"assets/asteroid3.png","./settings":"settings.js"}],"assets/explosion1.png":[function(require,module,exports) {
module.exports = "/explosion1.7afb9735.png";
},{}],"assets/explosion2.png":[function(require,module,exports) {
module.exports = "/explosion2.69ffad09.png";
},{}],"explosion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExplosionFactory = exports.Explosion = void 0;
var _types = require("./types");
var _explosion = _interopRequireDefault(require("./assets/explosion1.png"));
var _explosion2 = _interopRequireDefault(require("./assets/explosion2.png"));
var _settings = require("./settings");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var explosionImages = [_explosion.default, _explosion2.default];
var ExplosionFactory = /*#__PURE__*/function () {
  function ExplosionFactory() {
    _classCallCheck(this, ExplosionFactory);
  }
  _createClass(ExplosionFactory, [{
    key: "createExplosion",
    value: function createExplosion(worldPos, size) {
      var explosionImageIndex = Math.floor(Math.random() * explosionImages.length);
      return new Explosion(explosionImages[explosionImageIndex], worldPos, new _types.Vector2(0, 0), Math.floor(Math.random() * 360), 1.5 * _settings.Settings.getInstance().getGameScale() * (size / _settings.Settings.getInstance().getMaxAsteroidSize()), 0, _types.WorldObjectShape.Circle);
    }
  }]);
  return ExplosionFactory;
}();
exports.ExplosionFactory = ExplosionFactory;
var Explosion = /*#__PURE__*/function (_WorldObject) {
  _inherits(Explosion, _WorldObject);
  var _super = _createSuper(Explosion);
  function Explosion(spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape) {
    var _this;
    _classCallCheck(this, Explosion);
    _this = _super.call(this, spriteImageURL, worldPos, worldVelocity, worldRotation, spriteScale, rotationOffset, objectShape);
    _this.update = function () {
      _this.lifeTime -= 1.0 / 60.0;
      if (_this.lifeTime < 0) {
        _this.endLifeCycle();
      }
    };
    _this.lifeTime = 0.6;
    return _this;
  }
  return _createClass(Explosion);
}(_types.WorldObject);
exports.Explosion = Explosion;
},{"./types":"types.js","./assets/explosion1.png":"assets/explosion1.png","./assets/explosion2.png":"assets/explosion2.png","./settings":"settings.js"}],"spacegame.js":[function(require,module,exports) {
"use strict";

var _types = require("./types.js");
var _player = require("./player.js");
var _settings = require("./settings.js");
var _bullet = require("./bullet.js");
var _asteroid = require("./asteroid.js");
var _explosion = require("./explosion.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var width = _settings.Settings.getInstance().getWorldWidth();
var height = _settings.Settings.getInstance().getWorldHeight();
var scale = _settings.Settings.getInstance().getGameScale();
var SpaceGame = /*#__PURE__*/function () {
  function SpaceGame() {
    var _this = this;
    _classCallCheck(this, SpaceGame);
    this.deltaTime = 0;
    this.currentTimeStamp = 0;
    this.previousTimeStamp = 0;
    //bullets : Bullet[] = [];
    this.asteroidFactory = new _asteroid.AsteroidFactory();
    this.explosionFactory = new _explosion.ExplosionFactory();
    this.worldObjects = [];
    this.begin = function () {
      _this.previousTimeStamp = Date.now();
      _this.currentTimeStamp = Date.now();
      window.requestAnimationFrame(_this.tick);
      for (var x = 0; x < _settings.Settings.getInstance().getNumBeginningAsteroids(); ++x) {
        _this.worldObjects.push(_this.asteroidFactory.createAsteroid());
      }
      addEventListener('mousedown', function (e) {
        _this.getCursorPosition(e);
      });
    };
    this.update = function () {
      //console.log("update called\ntimestamp: " + this.currentTimeStamp + "\nframe time: " + this.deltaTime );
      _this.ctx.fillStyle = "black";
      _this.ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
      // this.ctx.strokeStyle = "lime";
      // this.ctx.beginPath();
      // this.ctx.moveTo(0, height/2);
      // this.ctx.lineTo(width, height/2);
      // this.ctx.stroke();
      // this.ctx.beginPath();
      // this.ctx.moveTo(width/2, 0);
      // this.ctx.lineTo(width/2, height);
      // this.ctx.stroke(); 
      //console.log("draw line");
      // create
      var bullet = _this.player.tryFireBullet();
      if (bullet != null) {
        console.log("bullet added");
        _this.worldObjects.push(bullet);
      }
      // update
      for (var x = 0; x < _this.worldObjects.length; ++x) {
        _this.worldObjects[x].update();
      }
      // check collisions
      for (var _x = _this.worldObjects.length - 1; _x >= 0; --_x) {
        if (_this.worldObjects[_x] instanceof _bullet.Bullet) {
          for (var y = _this.worldObjects.length - 1; y >= 0; --y) {
            if (_this.worldObjects[y] instanceof _asteroid.Asteroid) {
              if ((0, _types.isPointColliding)(_this.worldObjects[_x].getPosition(), _this.worldObjects[y])) {
                _this.worldObjects[_x].endLifeCycle();
                var newExplosion = _this.explosionFactory.createExplosion(_this.worldObjects[y].getPosition(), _this.worldObjects[y].size);
                var newAsteroids = _this.worldObjects[y].splitAsteroid();
                for (var z = 0; z < newAsteroids.length; ++z) {
                  _this.worldObjects.push(newAsteroids[z]);
                }
                _this.worldObjects.push(newExplosion);
              }
            }
          }
        }
      }
      console.log(_this.worldObjects.length);
      // delete
      for (var _x2 = _this.worldObjects.length - 1; _x2 >= 0; --_x2) {
        if (!_this.worldObjects[_x2].isLifeCycleActive()) {
          console.log("delete");
          _this.worldObjects.splice(_x2, 1);
        }
      }
      // render
      for (var _x3 = 0; _x3 < _this.worldObjects.length; ++_x3) {
        _this.worldObjects[_x3].render(_this.canvas);
      }
    };
    this.tick = function () {
      _this.currentTimeStamp = Date.now();
      _this.deltaTime = (_this.currentTimeStamp - _this.previousTimeStamp) / 1000.0;
      _this.previousTimeStamp = _this.currentTimeStamp;
      _this.update();
      window.requestAnimationFrame(_this.tick);
    };
    this.player = new _player.Player(new _types.Vector2(width / 2, height / 2), new _types.Vector2(), 0.0, scale);
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.worldObjects.push(this.player);
  }
  _createClass(SpaceGame, [{
    key: "getCursorPosition",
    value: function getCursorPosition(event) {
      var rect = this.canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      console.log("x: " + x + " y: " + y);
    }
  }]);
  return SpaceGame;
}();
var game = new SpaceGame();
game.begin();
},{"./types.js":"types.js","./player.js":"player.js","./settings.js":"settings.js","./bullet.js":"bullet.js","./asteroid.js":"asteroid.js","./explosion.js":"explosion.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50929" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","spacegame.js"], null)
//# sourceMappingURL=/spacegame.a24e7c22.js.map