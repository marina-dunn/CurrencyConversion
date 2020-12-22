"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import logo from './logo.svg';
require("./App.css");
function App() {
    var useState = react_1["default"].useState;
    var _a = useState(""), value = _a[0], setValue = _a[1];
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("span", { className: "header-left" },
            react_1["default"].createElement("header", { className: "App-header" }, "Currency Converter")),
        react_1["default"].createElement("span", { className: "header-right" },
            react_1["default"].createElement("div", { className: "input-holder horizontal-form" },
                react_1["default"].createElement("div", { className: "countries" },
                    react_1["default"].createElement("label", { htmlFor: "srcCountry" }, "Source Country"),
                    react_1["default"].createElement("select", { value: value, name: "srcCountry" },
                        react_1["default"].createElement("option", { value: "cupid" }, "Cupid")),
                    react_1["default"].createElement("label", { htmlFor: "destCountry" }, "Destination Country"),
                    react_1["default"].createElement("select", { value: value, name: "destCountry" }),
                    react_1["default"].createElement("label", { htmlFor: "amount" }, "Amount"),
                    react_1["default"].createElement("input", { type: "text", id: "amount", name: "amount" })),
                react_1["default"].createElement("div", { className: "conversion-results" },
                    react_1["default"].createElement("span", { id: "conversion-factor" }, useState),
                    react_1["default"].createElement("span", { id: "conversion-result" }, useState))))));
}
exports["default"] = App;
