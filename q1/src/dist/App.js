"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
require("./App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.convertHandler = function () {
            if (_this.state.fromCountry !== _this.state.toCountry) {
                axios_1["default"]
                    .get("http://data.fixer.io/api/latest?access_key=108c9ed2d8cd9394698facdf22ac0ede&cbase=" + _this.state.fromCountry + "&symbols=" + _this.state.toCountry)
                    .then(function (response) {
                    var result = _this.state.amount * response.data.rates[_this.state.toCountry];
                    _this.setState({ result: result.toFixed(5), rate: response.data.rates[_this.state.toCountry].toFixed(5) });
                })["catch"](function (error) {
                    console.log("Unable to fetch the exchange rate", error.message);
                });
            }
            else {
                _this.setState({ result: "The countries selected must be different" });
            }
        };
        _this.selectHandler = function (event) {
            if (event.target.name === "srcCountry") {
                _this.setState({ fromCountry: event.target.value });
            }
            else if (event.target.name === "destCountry") {
                _this.setState({ toCountry: event.target.value });
            }
        };
        _this.state = {
            result: "0",
            fromCountry: "EUR",
            toCountry: "CAD",
            amount: 1,
            currencies: [],
            countries: {},
            rate: "0"
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        axios_1["default"]
            .get("http://data.fixer.io/api/symbols?access_key=108c9ed2d8cd9394698facdf22ac0ede")
            .then(function (response) {
            _this.setState({ countries: response.data.symbols });
        })["catch"](function (err) { console.log("Countries could not be fetched", err); });
    };
    App.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement("div", { className: "header-left box" },
                react_1["default"].createElement("header", { className: "App-header" }, "Currency Converter")),
            react_1["default"].createElement("div", { className: "header-right box" },
                react_1["default"].createElement("div", { className: "input-holder horizontal-form" },
                    react_1["default"].createElement("div", { className: "countries" },
                        react_1["default"].createElement("label", { htmlFor: "srcCountry" }, "Source Country: "),
                        react_1["default"].createElement("select", { onChange: function (event) { return _this.selectHandler(event); }, name: "srcCountry" }, Object.keys(this.state.countries).map(function (label) { return (react_1["default"].createElement("option", { key: label, value: label }, Object.entries(_this.state.countries).map(function (_a) {
                            var key = _a[0], value = _a[1];
                            if (key === label)
                                return value;
                            return null;
                        }))); })),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("label", { htmlFor: "destCountry" }, "Destination Country: "),
                        react_1["default"].createElement("select", { onChange: function (event) { return _this.selectHandler(event); }, name: "destCountry" }, Object.keys(this.state.countries).map(function (label) { return (react_1["default"].createElement("option", { key: label, value: label }, Object.entries(_this.state.countries).map(function (_a) {
                            var key = _a[0], value = _a[1];
                            if (key === label)
                                return value;
                            return null;
                        }))); })),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("label", { htmlFor: "amount" }, "Amount: "),
                        react_1["default"].createElement("input", { type: "text", id: "amount", name: "amount", value: this.state.amount, onChange: function (e) { return _this.setState({ amount: +e.currentTarget.value }); } }),
                        react_1["default"].createElement("button", { onClick: this.convertHandler }, "Convert")),
                    react_1["default"].createElement("div", { className: "conversion-results" },
                        react_1["default"].createElement("span", { id: "conversion-factor" }, this.state.rate),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("span", { id: "conversion-result" }, this.state.result))))));
    };
    return App;
}(react_1["default"].Component));
exports["default"] = App;
