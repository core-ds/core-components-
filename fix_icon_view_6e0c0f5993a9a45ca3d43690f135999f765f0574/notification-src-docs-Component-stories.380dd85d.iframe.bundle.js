"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4151],{"./packages/notification/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},notification:function(){return notification}});var _notification$paramet,_notification$paramet2,_notification$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js")),_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/button/modern/index.js"),_alfalab_core_components_notification__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/notification/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Notification",component:_alfalab_core_components_notification__WEBPACK_IMPORTED_MODULE_3__.Notification,id:"Notification"},notification={name:"Notification",render:function render(){var colors=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("colors",["default","inverted"],"default");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-bg-primary-inverted)":"transparent",padding:"10px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_notification__WEBPACK_IMPORTED_MODULE_3__.Notification,{colors:colors,visible:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("visible",!1),badge:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("badge",["negative","positive","attention",void 0],"positive"),title:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","Поздравляем, полный успех"),hasCloser:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("hasCloser",!0),actionButton:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("renderActionButton",!1)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{view:"link",size:"s",colors:"inverted",children:"Action Button"}):null,offset:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("offset",48),onClose:function onClose(){},children:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("children","Вам одобрено. Согласитесь на предложение")})})}};__webpack_exports__.default=meta,notification.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},notification.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_notification$paramet=notification.parameters)||void 0===_notification$paramet?void 0:_notification$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'Notification',\n  render: () => {\n    const colors = select('colors', ['default', 'inverted'], 'default');\n    return <div style={{\n      backgroundColor: colors === 'inverted' ? 'var(--color-light-bg-primary-inverted)' : 'transparent',\n      padding: '10px',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    }}>\n                <Notification colors={colors} visible={boolean('visible', false)} badge={select('badge', ['negative', 'positive', 'attention', undefined], 'positive')} title={text('title', 'Поздравляем, полный успех')} hasCloser={boolean('hasCloser', true)} actionButton={boolean('renderActionButton', false) ? <Button view='link' size='s' colors='inverted'>\n                                Action Button\n                            </Button> : null} offset={number('offset', 48)} onClose={() => {}}>\n                    {text('children', 'Вам одобрено. Согласитесь на предложение')}\n                </Notification>\n            </div>;\n  }\n}"},null===(_notification$paramet2=notification.parameters)||void 0===_notification$paramet2||null===(_notification$paramet3=_notification$paramet2.docs)||void 0===_notification$paramet3?void 0:_notification$paramet3.source)})});var __namedExportsOrder=["notification"]}}]);