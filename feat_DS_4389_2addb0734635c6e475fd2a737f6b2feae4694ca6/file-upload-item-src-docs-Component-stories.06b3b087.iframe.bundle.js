"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[5458],{"./packages/file-upload-item/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},file_upload_item:function(){return file_upload_item}});var _file_upload_item$par,_file_upload_item$par2,_file_upload_item$par3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_file_upload_item__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/file-upload-item/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),WRAPPER_STYLES={background:"var(--color-light-modal-bg-primary)"},meta={title:"Components/FileUploadItem",component:_alfalab_core_components_file_upload_item__WEBPACK_IMPORTED_MODULE_2__.FileUploadItem,id:"FileUploadItem"},file_upload_item={name:"FileUploadItem",render:function render(){var previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0;return isPreview?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({width:432},previewStyles),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:isPreview?WRAPPER_STYLES:void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_file_upload_item__WEBPACK_IMPORTED_MODULE_2__.FileUploadItem,{name:"Название файла.pdf",uploadDate:"22.01.2023",size:4096,downloadLink:"link",showDelete:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_file_upload_item__WEBPACK_IMPORTED_MODULE_2__.FileUploadItem,{name:"Название файла.docx",uploadDate:"22.01.2023",size:8192,downloadLink:"link",showDelete:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_file_upload_item__WEBPACK_IMPORTED_MODULE_2__.FileUploadItem,{name:"Название файла.docx",uploadDate:"22.01.2023",size:9216,downloadLink:"link",showDelete:!0})]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_file_upload_item__WEBPACK_IMPORTED_MODULE_2__.FileUploadItem,{name:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("name","Довольно длинное название файла.pdf"),uploadDate:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("uploadDate","22.01.2018"),downloadLink:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("downloadLink",""),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("size",5e8),uploadStatus:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("uploadStatus",["ERROR","SUCCESS","LOADING","UPLOADING"],void 0),uploadPercent:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("uploadPercent",void 0),showDelete:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("showDelete",!1),showRestore:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("showRestore",!1)})})}};__webpack_exports__.default=meta,file_upload_item.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},file_upload_item.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_file_upload_item$par=file_upload_item.parameters)||void 0===_file_upload_item$par?void 0:_file_upload_item$par.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'FileUploadItem',\n  render: () => {\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    return isPreview ? <div style={{\n      width: 432,\n      ...previewStyles\n    }}>\n                <div style={isPreview ? WRAPPER_STYLES : undefined}>\n                    <FileUploadItem name={'Название файла.pdf'} uploadDate='22.01.2023' size={4096} downloadLink='link' showDelete={true} />\n                    <FileUploadItem name={'Название файла.docx'} uploadDate='22.01.2023' size={8192} downloadLink='link' showDelete={true} />\n                    <FileUploadItem name={'Название файла.docx'} uploadDate='22.01.2023' size={9216} downloadLink='link' showDelete={true} />\n                </div>\n            </div> : <div style={{\n      width: 500\n    }}>\n                <FileUploadItem name={text('name', 'Довольно длинное название файла.pdf')} uploadDate={text('uploadDate', '22.01.2018')} downloadLink={text('downloadLink', '')} error={text('error', '')} size={number('size', 500000000)} uploadStatus={select('uploadStatus', ['ERROR', 'SUCCESS', 'LOADING', 'UPLOADING'], undefined)} uploadPercent={number('uploadPercent', undefined)} showDelete={boolean('showDelete', false)} showRestore={boolean('showRestore', false)} />\n            </div>;\n  }\n}"},null===(_file_upload_item$par2=file_upload_item.parameters)||void 0===_file_upload_item$par2?void 0:null===(_file_upload_item$par3=_file_upload_item$par2.docs)||void 0===_file_upload_item$par3?void 0:_file_upload_item$par3.source)})});let __namedExportsOrder=["file_upload_item"]},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);