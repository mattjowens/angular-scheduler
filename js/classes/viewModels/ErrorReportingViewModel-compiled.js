/**
 * Created by Matt on 12/08/2015.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorReportingViewModel = (function () {
    function ErrorReportingViewModel() {
        _classCallCheck(this, ErrorReportingViewModel);
    }

    _createClass(ErrorReportingViewModel, [{
        key: "constuctor",
        value: function constuctor() {
            this._hasErrors = false;
            this._errors = [];
        }
    }, {
        key: "errors",
        get: function get() {
            return this._errors;
        }
    }, {
        key: "hasErrors",
        get: function get() {
            return this._hasErrors;
        }
    }]);

    return ErrorReportingViewModel;
})();

//# sourceMappingURL=ErrorReportingViewModel-compiled.js.map