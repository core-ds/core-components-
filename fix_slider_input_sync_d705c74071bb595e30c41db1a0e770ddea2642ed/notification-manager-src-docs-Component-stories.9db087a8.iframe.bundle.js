"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[5644],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableSpread(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||(0,unsupportedIterableToArray.Z)(arr)||_nonIterableSpread()}},"./packages/notification-manager/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},notification_manager:function(){return notification_manager}});var _notification_manager,_notification_manager2,_notification_manager3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/button/modern/index.js"),_alfalab_core_components_notification__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/notification/modern/index.js"),_alfalab_core_components_notification_manager__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/notification-manager/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/NotificationManager",component:_alfalab_core_components_notification_manager__WEBPACK_IMPORTED_MODULE_3__.NotificationManager,id:"NotificationManager"},notification_manager={name:"NotificationManager",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),notifications=_React$useState2[0],setNotifications=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState4=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState3,2),count=_React$useState4[0],setCount=_React$useState4[1],removeNotification=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(id){setNotifications(function(actualNotifications){return actualNotifications.filter(function(notification){return notification.props.id!==id})})},[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_1__.Button,{onClick:function(){var newNotification=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_notification__WEBPACK_IMPORTED_MODULE_2__.Notification,{badge:"positive",title:"Нотификация #".concat(count),autoCloseDelay:3e3,id:count.toString()},count.toString());notifications.unshift(newNotification),setNotifications((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(notifications)),setCount(function(val){return val+1})},children:"Добавить нотификацию"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_notification_manager__WEBPACK_IMPORTED_MODULE_3__.NotificationManager,{notifications:notifications,onRemoveNotification:removeNotification})]})}};__webpack_exports__.default=meta,notification_manager.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},notification_manager.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_notification_manager=notification_manager.parameters)||void 0===_notification_manager?void 0:_notification_manager.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'NotificationManager',\n  render: () => {\n    const [notifications, setNotifications] = React.useState([]);\n    const [count, setCount] = React.useState(0);\n    const addNotification = () => {\n      const newNotification = <Notification badge='positive' title={`Нотификация #${count}`} autoCloseDelay={3000} id={count.toString()} key={count.toString()} />;\n      notifications.unshift(newNotification);\n      setNotifications([...notifications]);\n      setCount(val => val + 1);\n    };\n    const removeNotification = React.useCallback(id => {\n      /**\n       * Обратите внимание, что актуальный массив нотификаций\n       * нужно брать из аргументов функции обновления состояния.\n       */\n      setNotifications(actualNotifications => actualNotifications.filter(notification => notification.props.id !== id));\n    }, []);\n    return <div>\n                <Button onClick={addNotification}>Добавить нотификацию</Button>\n                <NotificationManager notifications={notifications} onRemoveNotification={removeNotification} />\n            </div>;\n  }\n}"},null===(_notification_manager2=notification_manager.parameters)||void 0===_notification_manager2?void 0:null===(_notification_manager3=_notification_manager2.docs)||void 0===_notification_manager3?void 0:_notification_manager3.source)})});let __namedExportsOrder=["notification_manager"]}}]);