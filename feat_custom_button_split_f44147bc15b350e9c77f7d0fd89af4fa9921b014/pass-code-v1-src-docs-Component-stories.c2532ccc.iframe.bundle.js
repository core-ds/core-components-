"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4288],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/pass-code-v1/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},pass_code_v1:function(){return pass_code_v1}});var _pass_code_v1$paramet,_pass_code_v1$paramet2,_pass_code_v1$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/pass-code-v1/modern/index.js"),_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/pass-code-v1/node_modules/@alfalab/icons-glyph/SfFaceIdXxlIcon.js");__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Deprecated components/PassCodeV1",component:_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.PassCodeV1,id:"PassCodeV1"},pass_code_v1={name:"PassCodeV1",render:function render(){var codeLength=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("codeLength",0,{min:0,max:12,range:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.PassCodeV1,{value:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("value",""),onChange:function onChange(){},maxCodeLength:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxCodeLength",8,{min:0,max:12,range:!0}),codeLength:0===codeLength?void 0:codeLength,message:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("message",""),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("leftAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"text",children:"Забыли код?"},"left-addon"),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rightAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"text",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__.cn,{})},"right-addon")})}};__webpack_exports__.default=meta,pass_code_v1.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},pass_code_v1.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_pass_code_v1$paramet=pass_code_v1.parameters)||void 0===_pass_code_v1$paramet?void 0:_pass_code_v1$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'PassCodeV1',\n  render: () => {\n    const codeLength = number('codeLength', 0, {\n      min: 0,\n      max: 12,\n      range: true\n    });\n    return <PassCodeV1 value={text('value', '')} onChange={() => {}} maxCodeLength={number('maxCodeLength', 8, {\n      min: 0,\n      max: 12,\n      range: true\n    })} codeLength={codeLength === 0 ? undefined : codeLength} message={text('message', '')} error={text('error', '')} leftAddons={boolean('leftAddons', false) && <KeyPadButton view='text' key='left-addon'>\n                            Забыли код?\n                        </KeyPadButton>} rightAddons={boolean('rightAddons', false) && <KeyPadButton view='text' key='right-addon'>\n                            <SfFaceIdXxlIcon />\n                        </KeyPadButton>} />;\n  }\n}"},null===(_pass_code_v1$paramet2=pass_code_v1.parameters)||void 0===_pass_code_v1$paramet2?void 0:null===(_pass_code_v1$paramet3=_pass_code_v1$paramet2.docs)||void 0===_pass_code_v1$paramet3?void 0:_pass_code_v1$paramet3.source)})});let __namedExportsOrder=["pass_code_v1"]},"./packages/pass-code-v1/node_modules/@alfalab/icons-glyph/SfFaceIdXxlIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var c,e=__webpack_require__("./packages/pass-code-v1/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),t=(c=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof c&&"default"in c?c.default:c;exports.cn=function(c){return t.createElement("svg",e.__assign({role:"img",focusable:"false",fill:"currentColor",width:"48",height:"48",viewBox:"0 0 48 48"},c),t.createElement("path",{d:"M38.914 18.765c.88 0 1.345-.498 1.345-1.362v-4.067c0-3.42-1.743-5.13-5.213-5.13h-4.067c-.864 0-1.345.465-1.345 1.328 0 .864.481 1.345 1.345 1.345h4.017c1.644 0 2.59.88 2.59 2.606v3.918c0 .864.481 1.362 1.328 1.362zm-29.833 0c.88 0 1.345-.498 1.345-1.362v-3.918c0-1.726.913-2.606 2.573-2.606h4.018c.88 0 1.36-.481 1.36-1.345 0-.863-.48-1.328-1.36-1.328h-4.051c-3.47 0-5.213 1.71-5.213 5.13v4.067c0 .864.481 1.362 1.328 1.362zm13.597 8.483h.133c1.676 0 2.59-.913 2.59-2.59v-5.23c0-.647-.432-1.062-1.063-1.062-.664 0-1.096.415-1.096 1.063v5.379c0 .166-.1.249-.249.249h-.58c-.599 0-1.063.465-1.063 1.062 0 .714.481 1.129 1.328 1.129zM17.68 23.33c.78 0 1.344-.548 1.344-1.345v-2.258c0-.796-.564-1.344-1.344-1.344-.78 0-1.329.548-1.329 1.345v2.257c0 .797.548 1.345 1.329 1.345zm12.6 0c.764 0 1.312-.548 1.312-1.345v-2.258c0-.796-.548-1.344-1.312-1.344-.797 0-1.345.548-1.345 1.345v2.257c0 .797.548 1.345 1.345 1.345zm-6.375 9.496c2.009 0 4.034-.863 5.479-2.307.199-.183.299-.465.299-.797 0-.631-.465-1.08-1.08-1.08-.315 0-.547.117-.863.449-.913.946-2.357 1.594-3.835 1.594-1.394 0-2.855-.615-3.818-1.594-.266-.25-.482-.448-.88-.448-.614 0-1.08.448-1.08 1.079 0 .282.1.547.316.78 1.345 1.527 3.454 2.324 5.462 2.324zm-10.94 7.87h4.05c.88 0 1.362-.482 1.362-1.329 0-.863-.482-1.344-1.361-1.344h-4.018c-1.66 0-2.573-.88-2.573-2.607v-3.918c0-.88-.482-1.361-1.345-1.361s-1.328.481-1.328 1.361v4.05c0 3.437 1.743 5.147 5.213 5.147zm18.013 0h4.067c3.47 0 5.213-1.727 5.213-5.147v-4.051c0-.88-.482-1.361-1.345-1.361s-1.328.481-1.328 1.361v3.918c0 1.727-.946 2.607-2.59 2.607h-4.018c-.863 0-1.344.48-1.344 1.344 0 .847.481 1.328 1.345 1.328z"}))}},"./packages/pass-code-v1/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js":function(__unused_webpack_module,exports){/*! *****************************************************************************
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