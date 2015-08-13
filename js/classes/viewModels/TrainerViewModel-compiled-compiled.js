/**
 * Created by matthewo on 12/08/2015.
 */
"use strict";

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Trainer = (function () {
    function Trainer(firstName, lastName, email) {
        _classCallCheck(this, Trainer);

        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    _createClass(Trainer, [{
        key: "firstName",
        get: function get() {
            return this._firstName;
        },
        set: function set(value) {
            this._firstName = value;
        }
    }, {
        key: "lastName",
        get: function get() {
            return this._lastName;
        },
        set: function set(value) {
            this._lastName = value;
        }
    }, {
        key: "email",
        get: function get() {
            return this._email;
        },
        set: function set(value) {
            this._email = value;
        }
    }]);

    return Trainer;
})();

//# sourceMappingURL=TrainerViewModel-compiled.js.map

//# sourceMappingURL=TrainerViewModel-compiled-compiled.js.map