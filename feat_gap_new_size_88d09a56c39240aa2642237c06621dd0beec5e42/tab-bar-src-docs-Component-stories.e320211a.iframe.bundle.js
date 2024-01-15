"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[8013],{"./packages/tab-bar/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},tab_bar:function(){return tab_bar}});var _tab_bar$parameters,_tab_bar$parameters2,_tab_bar$parameters2$,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/tab-bar/modern/index.js"),_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@alfalab/icons-glyph/DiamondsMIcon.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/TabBar",component:_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__.TabBar,id:"TabBar"},tab_bar={name:"TabBar",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState("1"),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState,2),selectedId=_React$useState2[0],setSelectedId=_React$useState2[1],showIndicator=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("showIndicator",!1),previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles"));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:previewStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{maxWidth:360,flex:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__.TabBar,{selectedId:selectedId,onChange:setSelectedId,border:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("border",!0),children:Array(4).fill(null).map((function(_,idx){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__.TabBar.Tab,{id:String(idx+1),label:"TabName".concat(idx+1),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_3__.default,{}),showIndicator:showIndicator})}))})})})}};__webpack_exports__.default=meta,tab_bar.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},tab_bar.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_tab_bar$parameters=tab_bar.parameters)||void 0===_tab_bar$parameters?void 0:_tab_bar$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'TabBar',\n  render: () => {\n    const [selectedId, setSelectedId] = React.useState('1');\n    const showIndicator = boolean('showIndicator', false);\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    return <div style={previewStyles}>\n                <div style={{\n        maxWidth: 360,\n        flex: 1\n      }}>\n                    <TabBar selectedId={selectedId} onChange={setSelectedId} border={boolean('border', true)}>\n                        {Array(4).fill(null).map((_, idx) => <TabBar.Tab id={String(idx + 1)} label={`TabName${idx + 1}`} icon={<DiamondsMIcon />} showIndicator={showIndicator} />)}\n                    </TabBar>\n                </div>\n            </div>;\n  }\n}"},null===(_tab_bar$parameters2=tab_bar.parameters)||void 0===_tab_bar$parameters2||null===(_tab_bar$parameters2$=_tab_bar$parameters2.docs)||void 0===_tab_bar$parameters2$?void 0:_tab_bar$parameters2$.source)})});const __namedExportsOrder=["tab_bar"]},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function getQueryParam(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function parseKnobs(){return Object.entries(queryParams).reduce((function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc}),{})};function parseValue(value){if(value){if(function isBoolean(){return["true","false"].includes(value)}())return"true"===value;if(function isNumeric(){return!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value))}())return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map((function(v){return v.trim()})),obj={};return properties.forEach((function(property){var _property$split$map=property.split(":").map((function(v){return v.trim()})),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val})),obj}function isJsonObj(str){try{return"object"==typeof JSON.parse(str)}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?Object.keys(obj).map((function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map((function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);