"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[5430],{"./packages/number-input/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},number_input:function(){return number_input}});var _number_input$paramet,_number_input$paramet2,_number_input$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/number-input/node_modules/@alfalab/icons-glyph/StarMIcon.js"),_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/number-input/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/NumberInput",component:_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__.NumberInput,id:"NumberInput"},number_input={name:"NumberInput",render:function render(){var colors=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("colors",["default","inverted"],"default"),stepper=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("stepper",!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:stepper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__.NumberInput,{size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",[40,48,56,64,72],48),colors:colors,disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),step:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("step",1),max:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("max",10),min:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("min",0)}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__.NumberInput,{separator:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("separator",[",","."],","),fractionLength:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("fractionLength",2),block:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("block",!1),clear:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("clear",!1),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",[40,48,56,64,72],48),colors:colors,disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),placeholder:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("placeholder",""),label:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label",""),labelView:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("labelView",["inner","outer"],"inner"),hint:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),success:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("success",!1),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rightAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__.rv,{}),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("leftAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__.rv,{}),bottomAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("bottomAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"bottom text"}),readOnly:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("readOnly",!1)})})}};__webpack_exports__.default=meta,number_input.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},number_input.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_number_input$paramet=number_input.parameters)||void 0===_number_input$paramet?void 0:_number_input$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'NumberInput',\n  render: () => {\n    const colors = select('colors', ['default', 'inverted'], 'default');\n    const stepper = boolean('stepper', false);\n    return <div style={{\n      backgroundColor: colors === 'inverted' ? 'var(--color-light-base-bg-primary-inverted)' : 'transparent',\n      padding: '8px',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    }}>\n                {stepper ? <NumberInput size={select('size', [40, 48, 56, 64, 72], 48)} colors={colors} disabled={boolean('disabled', false)} step={number('step', 1)} max={number('max', 10)} min={number('min', 0)} /> : <NumberInput separator={select('separator', [',', '.'], ',')} fractionLength={number('fractionLength', 2)} block={boolean('block', false)} clear={boolean('clear', false)} size={select('size', [40, 48, 56, 64, 72], 48)} colors={colors} disabled={boolean('disabled', false)} placeholder={text('placeholder', '')} label={text('label', '')} labelView={select('labelView', ['inner', 'outer'], 'inner')} hint={text('hint', '')} error={text('error', '')} success={boolean('success', false)} rightAddons={boolean('rightAddons', false) && <StarMIcon />} leftAddons={boolean('leftAddons', false) && <StarMIcon />} bottomAddons={boolean('bottomAddons', false) && <span>bottom text</span>} readOnly={boolean('readOnly', false)} />}\n            </div>;\n  }\n}"},null===(_number_input$paramet2=number_input.parameters)||void 0===_number_input$paramet2?void 0:null===(_number_input$paramet3=_number_input$paramet2.docs)||void 0===_number_input$paramet3?void 0:_number_input$paramet3.source)})});let __namedExportsOrder=["number_input"]},"./packages/number-input/node_modules/@alfalab/icons-glyph/StarMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/number-input/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),l=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.rv=function(e){return l.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M11.063 3.505c.324-.866 1.55-.866 1.873 0l1.794 4.798a1 1 0 00.893.649l5.118.223c.924.04 1.302 1.206.578 1.782l-4.008 3.189a1 1 0 00-.341 1.05l1.369 4.935c.247.892-.745 1.612-1.516 1.102l-4.271-2.827a1 1 0 00-1.104 0l-4.272 2.827c-.77.51-1.762-.21-1.515-1.102l1.368-4.936a1 1 0 00-.34-1.05l-4.01-3.188c-.723-.576-.344-1.741.58-1.782l5.117-.223a1 1 0 00.893-.65l1.794-4.797z"}))}},"./packages/number-input/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js":function(__unused_webpack_module,exports){/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */exports.__assign=function(){return exports.__assign=Object.assign||function(t){for(var r,s=1,n=arguments.length;s<n;s++)for(var e in r=arguments[s])Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t},exports.__assign.apply(this,arguments)}}}]);