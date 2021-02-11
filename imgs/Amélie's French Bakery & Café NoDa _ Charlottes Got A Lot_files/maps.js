/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 200);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = init;
/* harmony export (immutable) */ __webpack_exports__["d"] = load;
/* harmony export (immutable) */ __webpack_exports__["e"] = unload;
/* harmony export (immutable) */ __webpack_exports__["b"] = destroy;
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
var initEvent = function initEvent(key) {
    return 'union__custom_init_event_for_' + key;
};
var loadEvent = function loadEvent(key) {
    return 'union__custom_load_event_for_' + key;
};
var unloadEvent = function unloadEvent(key) {
    return 'union__custom_unload_event_for_' + key;
};
var destroyEvent = function destroyEvent(key) {
    return 'union__custom_destroy_event_for_' + key;
};

function init(key) {
    document.dispatchEvent(new CustomEvent(initEvent(key)));
}

function load(key, context) {
    document.dispatchEvent(new CustomEvent(loadEvent(key), { detail: { context: context } }));
}

function unload(key, context) {
    document.dispatchEvent(new CustomEvent(unloadEvent(key), { detail: { context: context } }));
}

function destroy(key) {
    document.dispatchEvent(new CustomEvent(destroyEvent(key)));
}

function register(key, _ref) {
    var _ref$onInit = _ref.onInit,
        onInit = _ref$onInit === undefined ? function () {} : _ref$onInit,
        _ref$onLoad = _ref.onLoad,
        onLoad = _ref$onLoad === undefined ? function () {} : _ref$onLoad,
        _ref$onUnload = _ref.onUnload,
        onUnload = _ref$onUnload === undefined ? function () {} : _ref$onUnload,
        _ref$onDestroy = _ref.onDestroy,
        onDestroy = _ref$onDestroy === undefined ? function () {} : _ref$onDestroy;

    function initWrapper() {
        onInit();
        onLoad(document);
    }

    function loadWrapper(e) {
        onLoad(e.detail.context || document);
    }

    function unloadWrapper(e) {
        onUnload(e.detail.context || document);
    }

    function destroyWrapper() {
        onUnload(document);
        onDestroy();
    }

    document.addEventListener(initEvent(key), initWrapper);
    document.addEventListener(loadEvent(key), loadWrapper);
    document.addEventListener(loadEvent('ajaxPartial'), loadWrapper);
    document.addEventListener(unloadEvent(key), unloadWrapper);
    document.addEventListener(destroyEvent(key), destroyWrapper);

    initWrapper();
}

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ajax_module_loader_src_registerScript__ = __webpack_require__(1);


Object(__WEBPACK_IMPORTED_MODULE_0_ajax_module_loader_src_registerScript__["a" /* default */])('modules/maps', {
    onLoad: function onLoad(context) {
        context.querySelectorAll('[data-map-options]').forEach(function (node) {
            // Don't do anything if the Google Maps include doesn't exist.
            if (!window.google || !window.google.maps) {
                return;
            }

            var setMarker = function setMarker(location, map) {
                // Create Marker
                var marker = new google.maps.Marker({
                    position: location,
                    icon: {
                        anchor: new google.maps.Point(20, 37),
                        origin: new google.maps.Point(0, 0),
                        scaledSize: new google.maps.Size(40, 40),
                        size: new google.maps.Size(40, 40),
                        url: '/img/map-marker.png'
                    },
                    map: map
                });
                map.setCenter(location);
                return marker;
            };

            // Get map's options,
            // deprecate - latitude, longitude, and zoom.

            var _JSON$parse = JSON.parse(node.getAttribute('data-map-options') || '{}'),
                placeId = _JSON$parse.placeId,
                _JSON$parse$lat = _JSON$parse.lat,
                lat = _JSON$parse$lat === undefined ? 35.2030728 : _JSON$parse$lat,
                _JSON$parse$lng = _JSON$parse.lng,
                lng = _JSON$parse$lng === undefined ? -80.9799136 : _JSON$parse$lng,
                _JSON$parse$zoom = _JSON$parse.zoom,
                zoom = _JSON$parse$zoom === undefined ? 10 : _JSON$parse$zoom;

            // Create Map


            var map = new google.maps.Map(node, {
                center: { lat: lat, lng: lng },
                disableDefaultUI: true,
                draggable: false,
                fullscreenControl: false,
                mapTypeControl: false,
                rotateControl: false,
                scaleControl: false,
                scrollwheel: false,
                streetViewControl: false,
                zoom: zoom,
                zoomControl: false
            });

            if (placeId) {
                var places = new google.maps.places.PlacesService(map);
                places.getDetails({ placeId: placeId }, function (place, status) {
                    if (status === 'OK') {
                        setMarker({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        }, map);
                    }
                });
            } else {
                setMarker({ lat: +lat, lng: +lng }, map);
            }
        });
    }
});

/***/ })

/******/ });