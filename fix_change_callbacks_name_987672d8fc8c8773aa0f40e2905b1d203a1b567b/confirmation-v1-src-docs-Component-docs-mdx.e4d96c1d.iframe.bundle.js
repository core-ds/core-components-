"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4038,2742],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./packages/confirmation-v1/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},confirmation_v1:function(){return confirmation_v1}});var _confirmation_v1$para,_confirmation_v1$para2,_confirmation_v1$para3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_confirmation_v1__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/confirmation-v1/modern/index.js"),_alfalab_core_components_select_desktop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/select/modern/desktop/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Deprecated components/ConfirmationV1",component:_alfalab_core_components_confirmation_v1__WEBPACK_IMPORTED_MODULE_2__.ConfirmationV1,id:"ConfirmationV1"},confirmation_v1={name:"ConfirmationV1",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState({key:"success",content:"Успешный сценарий"}),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),variant=_React$useState2[0],setVariant=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),_React$useState4=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState3,2),value=_React$useState4[0],setValue=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState6=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState5,2),codeChecking=_React$useState6[0],setCodeChecking=_React$useState6[1],_React$useState7=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState8=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState7,2),codeSending=_React$useState8[0],setCodeSending=_React$useState8[1],_React$useState9=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),_React$useState10=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState9,2),error=_React$useState10[0],setError=_React$useState10[1],_React$useState11=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState12=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState11,2),errorIsFatal=_React$useState12[0],setErrorIsFatal=_React$useState12[1],_React$useState13=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),_React$useState14=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState13,2),noAttemptsLeftMessage=_React$useState14[0],setNoAttemptsLeftMessage=_React$useState14[1],_React$useState15=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState16=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState15,2),errorOverlimit=_React$useState16[0],setErrorOverlimit=_React$useState16[1],_React$useState17=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState18=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState17,2),errorOverlimitIsFatal=_React$useState18[0],setErrorOverlimitIsFatal=_React$useState18[1],_React$useState19=react__WEBPACK_IMPORTED_MODULE_0__.useState("Превышено количество\n попыток ввода кода"),_React$useState20=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState19,2),overlimitTitle=_React$useState20[0],setOverlimitTitle=_React$useState20[1],_React$useState21=react__WEBPACK_IMPORTED_MODULE_0__.useState("Повторное подтверждение кодом из SMS\n будет возможно через"),_React$useState22=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState21,2),overlimitText=_React$useState22[0],setOverlimitText=_React$useState22[1],_React$useState23=react__WEBPACK_IMPORTED_MODULE_0__.useState(1e4),_React$useState24=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState23,2),overlimitCountdownDuration=_React$useState24[0],setOverlimitCountdownDuration=_React$useState24[1],setCode=function setCode(code){setValue(code),setError("")},alignContent=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("alignContent",["center","left"],"center"),requiredCharAmount=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("requiredCharAmount",5);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_select_desktop__WEBPACK_IMPORTED_MODULE_3__.SelectDesktop,{options:[{key:"success",content:"Успешный сценарий"},{key:"error",content:"Сценарий с ошибкой"},{key:"fatal",content:"Сценарий с критичной ошибкой"},{key:"attempts-left",content:"Сценарий, когда кончились попытки запроса смс"},{key:"overlimit-input",content:"Сценарий, когда кончились попытки ввода и форма заблокирована"},{key:"overlimit-attempts",content:"Сценарий, когда кончились попытки запроса смс и форма заблокирована"}],onChange:function onChange(_ref){var selected=_ref.selected;setError(""),setCode(""),setVariant(selected)},selected:variant.key}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{display:"flex"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{display:"flex",width:"100%",maxWidth:"375px",margin:"16px 0 0",padding:"16px",boxShadow:"0 0 0 1px #eeeff1",boxSizing:"border-box"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_confirmation_v1__WEBPACK_IMPORTED_MODULE_2__.ConfirmationV1,{phone:"+7 000 000 00 42",onInputFinished:function handleSubmit(){setCodeChecking(!0),setError(""),setTimeout((function(){switch(setCodeChecking(!1),variant.key){case"success":break;case"error":setError("Неправильный код");break;case"fatal":setError("Выполните операцию с самого начала"),setErrorIsFatal(!0);break;case"attempts-left":setNoAttemptsLeftMessage("Не осталось попыток запроса кода");break;case"overlimit-input":setOverlimitTitle("Превышено количество\n попыток ввода кода"),setOverlimitText("Повторное подтверждение кодом из SMS\n будет возможно через 1 минуту"),setOverlimitCountdownDuration(6e4),setErrorOverlimit(!0),setErrorOverlimitIsFatal(!1);break;case"overlimit-attempts":setOverlimitTitle("Превышено количество\n попыток запроса кода"),setOverlimitText("Повторное подтверждение кода из SMS\n будет возможно через 24 часа "),setOverlimitCountdownDuration(864e5),setErrorOverlimit(!0),setErrorOverlimitIsFatal(!0)}}),300)},onSmsRetryClick:function handleSmsRetryClick(){setCodeSending(!0),setError(""),setCode(""),setTimeout((function(){setCodeSending(!1)}),300)},codeSending:codeSending,codeChecking:codeChecking,countdownDuration:1e4,code:value,onInputChange:function onInputChange(_ref2){var code=_ref2.code;return setCode(code)},alignContent:alignContent,requiredCharAmount:requiredCharAmount,error:Boolean(error),errorText:error,errorIsFatal:errorIsFatal,noAttemptsLeftMessage:noAttemptsLeftMessage,errorOverlimit:errorOverlimit,errorOverlimitIsFatal:errorOverlimitIsFatal,overlimitTitle:overlimitTitle,overlimitText:overlimitText,overlimitCountdownDuration:overlimitCountdownDuration,onOverlimitSmsRetryClick:function handleOverlimitRetryClick(){setCodeSending(!0),setError(""),setCode(""),setErrorOverlimit(!1),setTimeout((function(){setCodeSending(!1)}),300)},onOverlimitCountdownFinished:function handleOverlimitCountdownFinished(){setOverlimitTitle("Введите код из SMS"),setOverlimitText("Чтобы продолжить нажмите кнопку\n «Запросить новый код»"),setErrorOverlimitIsFatal(!1)}})})})]})}};__webpack_exports__.default=meta,confirmation_v1.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},confirmation_v1.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_confirmation_v1$para=confirmation_v1.parameters)||void 0===_confirmation_v1$para?void 0:_confirmation_v1$para.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'ConfirmationV1',\n  render: () => {\n    const [variant, setVariant] = React.useState({\n      key: 'success',\n      content: 'Успешный сценарий'\n    });\n    const [value, setValue] = React.useState('');\n    const [codeChecking, setCodeChecking] = React.useState(false);\n    const [codeSending, setCodeSending] = React.useState(false);\n    const [error, setError] = React.useState('');\n    const [errorIsFatal, setErrorIsFatal] = React.useState(false);\n    const [noAttemptsLeftMessage, setNoAttemptsLeftMessage] = React.useState('');\n    const [errorOverlimit, setErrorOverlimit] = React.useState(false);\n    const [errorOverlimitIsFatal, setErrorOverlimitIsFatal] = React.useState(false);\n    const [overlimitTitle, setOverlimitTitle] = React.useState('Превышено количество\\n попыток ввода кода');\n    const [overlimitText, setOverlimitText] = React.useState('Повторное подтверждение кодом из SMS\\n будет возможно через');\n    const [overlimitCountdownDuration, setOverlimitCountdownDuration] = React.useState(10000);\n    const setCode = code => {\n      setValue(code);\n      setError('');\n    };\n    const handleSubmit = () => {\n      setCodeChecking(true);\n      setError('');\n      setTimeout(() => {\n        setCodeChecking(false);\n        switch (variant.key) {\n          case 'success':\n            break;\n          case 'error':\n            setError('Неправильный код');\n            break;\n          case 'fatal':\n            setError('Выполните операцию с самого начала');\n            setErrorIsFatal(true);\n            break;\n          case 'attempts-left':\n            setNoAttemptsLeftMessage('Не осталось попыток запроса кода');\n            break;\n          case 'overlimit-input':\n            setOverlimitTitle('Превышено количество\\n попыток ввода кода');\n            setOverlimitText('Повторное подтверждение кодом из SMS\\n будет возможно через 1 минуту');\n            setOverlimitCountdownDuration(60000);\n            setErrorOverlimit(true);\n            setErrorOverlimitIsFatal(false);\n            break;\n          case 'overlimit-attempts':\n            setOverlimitTitle('Превышено количество\\n попыток запроса кода');\n            setOverlimitText('Повторное подтверждение кода из SMS\\n будет возможно через 24 часа ');\n            setOverlimitCountdownDuration(86400000);\n            setErrorOverlimit(true);\n            setErrorOverlimitIsFatal(true);\n            break;\n        }\n      }, 300);\n    };\n    const handleOverlimitCountdownFinished = () => {\n      setOverlimitTitle('Введите код из SMS');\n      setOverlimitText('Чтобы продолжить нажмите кнопку\\n «Запросить новый код»');\n      setErrorOverlimitIsFatal(false);\n    };\n    const handleSmsRetryClick = () => {\n      setCodeSending(true);\n      setError('');\n      setCode('');\n      setTimeout(() => {\n        setCodeSending(false);\n      }, 300);\n    };\n    const handleOverlimitRetryClick = () => {\n      setCodeSending(true);\n      setError('');\n      setCode('');\n      setErrorOverlimit(false);\n      setTimeout(() => {\n        setCodeSending(false);\n      }, 300);\n    };\n    const alignContent = select('alignContent', ['center', 'left'], 'center');\n    const phone = '+7 000 000 00 42';\n    const countdownDuration = 10000;\n    const requiredCharAmount = number('requiredCharAmount', 5);\n    return <div>\n                <SelectDesktop options={[{\n        key: 'success',\n        content: 'Успешный сценарий'\n      }, {\n        key: 'error',\n        content: 'Сценарий с ошибкой'\n      }, {\n        key: 'fatal',\n        content: 'Сценарий с критичной ошибкой'\n      }, {\n        key: 'attempts-left',\n        content: 'Сценарий, когда кончились попытки запроса смс'\n      }, {\n        key: 'overlimit-input',\n        content: 'Сценарий, когда кончились попытки ввода и форма заблокирована'\n      }, {\n        key: 'overlimit-attempts',\n        content: 'Сценарий, когда кончились попытки запроса смс и форма заблокирована'\n      }]} onChange={({\n        selected\n      }) => {\n        setError('');\n        setCode('');\n        setVariant(selected);\n      }} selected={variant.key} />\n                <div style={{\n        display: 'flex'\n      }}>\n                    <div style={{\n          display: 'flex',\n          width: '100%',\n          maxWidth: '375px',\n          margin: '16px 0 0',\n          padding: '16px',\n          boxShadow: '0 0 0 1px #eeeff1',\n          boxSizing: 'border-box'\n        }}>\n                        <ConfirmationV1 phone={phone} onInputFinished={handleSubmit} onSmsRetryClick={handleSmsRetryClick} codeSending={codeSending} codeChecking={codeChecking} countdownDuration={countdownDuration} code={value} onInputChange={({\n            code\n          }) => setCode(code)} alignContent={alignContent} requiredCharAmount={requiredCharAmount} error={Boolean(error)} errorText={error} errorIsFatal={errorIsFatal} noAttemptsLeftMessage={noAttemptsLeftMessage} errorOverlimit={errorOverlimit} errorOverlimitIsFatal={errorOverlimitIsFatal} overlimitTitle={overlimitTitle} overlimitText={overlimitText} overlimitCountdownDuration={overlimitCountdownDuration} onOverlimitSmsRetryClick={handleOverlimitRetryClick} onOverlimitCountdownFinished={handleOverlimitCountdownFinished} />\n                    </div>\n                </div>\n            </div>;\n  }\n}"},null===(_confirmation_v1$para2=confirmation_v1.parameters)||void 0===_confirmation_v1$para2||null===(_confirmation_v1$para3=_confirmation_v1$para2.docs)||void 0===_confirmation_v1$para3?void 0:_confirmation_v1$para3.source)})});const __namedExportsOrder=["confirmation_v1"]},"./packages/confirmation-v1/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/confirmation-v1/src/docs/Component.stories.tsx"),esm=__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/index.js"),link_esm=__webpack_require__("./node_modules/@alfalab/core-components/link/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h,{view:"attention",titleView:"light",limitContentWidth:!1,title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Компонент больше не поддерживается, переходите на новый компонент"," ",(0,jsx_runtime.jsx)(link_esm.r,{href:"https://core-ds.github.io/core-components/master/?path=/docs/confirmation--docs",children:"Confirmation."})]})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"пример",children:"Пример"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [open, setOpen] = React.useState(false);\n\n    const [variant, setVariant] = React.useState({ key: 'success', content: 'Успешный сценарий' });\n    const [value, setValue] = React.useState('');\n    const [codeChecking, setCodeChecking] = React.useState(false);\n    const [codeSending, setCodeSending] = React.useState(false);\n    const [error, setError] = React.useState('');\n    const [errorIsFatal, setErrorIsFatal] = React.useState(false);\n    const [noAttemptsLeftMessage, setNoAttemptsLeftMessage] = React.useState('');\n    const [errorOverlimit, setErrorOverlimit] = React.useState(false);\n    const [errorOverlimitIsFatal, setErrorOverlimitIsFatal] = React.useState(false);\n    const [overlimitTitle, setOverlimitTitle] = React.useState(\n        'Превышено количество\\n попыток ввода кода',\n    );\n    const [overlimitText, setOverlimitText] = React.useState(\n        'Повторное подтверждение кодом из SMS\\n будет возможно через',\n    );\n    const [overlimitCountdownDuration, setOverlimitCountdownDuration] = React.useState(10000);\n\n    const setCode = (code) => {\n        setValue(code);\n        setError('');\n    };\n\n    const handleSubmit = () => {\n        setCodeChecking(true);\n        setError('');\n        setTimeout(() => {\n            setCodeChecking(false);\n            switch (variant.key) {\n                case 'success':\n                    break;\n                case 'error':\n                    setError('Неправильный код');\n                    break;\n                case 'fatal':\n                    setError('Выполните операцию с самого начала');\n                    setErrorIsFatal(true);\n                    break;\n                case 'attempts-left':\n                    setNoAttemptsLeftMessage('Не осталось попыток запроса кода');\n                    break;\n                case 'overlimit-input':\n                    setOverlimitTitle('Превышено количество\\n попыток ввода кода');\n                    setOverlimitText(\n                        'Повторное подтверждение кодом из SMS\\n будет возможно через 1 минуту',\n                    );\n                    setOverlimitCountdownDuration(60000);\n                    setErrorOverlimit(true);\n                    setErrorOverlimitIsFatal(false);\n                    break;\n                case 'overlimit-attempts':\n                    setOverlimitTitle('Превышено количество\\n попыток запроса кода');\n                    setOverlimitText(\n                        'Повторное подтверждение кода из SMS\\n будет возможно через 24 часа ',\n                    );\n                    setOverlimitCountdownDuration(86400000);\n                    setErrorOverlimit(true);\n                    setErrorOverlimitIsFatal(true);\n                    break;\n            }\n        }, 300);\n    };\n    const handleOverlimitCountdownFinished = () => {\n        setOverlimitTitle('Введите код из SMS');\n        setOverlimitText('Чтобы продолжить нажмите кнопку\\n «Запросить новый код»');\n        setErrorOverlimitIsFatal(false);\n    };\n    const handleSmsRetryClick = () => {\n        setCodeSending(true);\n        setError('');\n        setCode('');\n        setTimeout(() => {\n            setCodeSending(false);\n        }, 300);\n    };\n    const handleOverlimitRetryClick = () => {\n        setCodeSending(true);\n        setError('');\n        setCode('');\n        setErrorOverlimit(false);\n        setTimeout(() => {\n            setCodeSending(false);\n        }, 300);\n    };\n\n    return (\n        <Space>\n            <SelectDesktop\n                options={[\n                    { key: 'success', content: 'Успешный сценарий' },\n                    { key: 'error', content: 'Сценарий с ошибкой' },\n                    { key: 'fatal', content: 'Сценарий с критичной ошибкой' },\n                    {\n                        key: 'attempts-left',\n                        content: 'Сценарий, когда кончились попытки запроса смс',\n                    },\n                    {\n                        key: 'overlimit-input',\n                        content: 'Сценарий, когда кончились попытки ввода и форма заблокирована',\n                    },\n                    {\n                        key: 'overlimit-attempts',\n                        content:\n                            'Сценарий, когда кончились попытки запроса смс и форма заблокирована',\n                    },\n                ]}\n                onChange={({ selected }) => {\n                    setVariant(selected);\n                }}\n                selected={variant.key}\n            />\n\n            <div\n                style={{\n                    display: 'inline-flex',\n                    padding: '16px',\n                    border: '1px solid #eeeff1',\n                }}\n            >\n                <ConfirmationV1\n                    phone='+7 000 000 00 42'\n                    onInputFinished={handleSubmit}\n                    onSmsRetryClick={handleSmsRetryClick}\n                    codeSending={codeSending}\n                    codeChecking={codeChecking}\n                    countdownDuration={10000}\n                    code={value}\n                    onInputChange={({ code }) => setCode(code)}\n                    alignContent='center'\n                    requiredCharAmount={5}\n                    error={Boolean(error)}\n                    errorText={error}\n                    errorIsFatal={errorIsFatal}\n                    noAttemptsLeftMessage={noAttemptsLeftMessage}\n                    errorOverlimit={errorOverlimit}\n                    errorOverlimitIsFatal={errorOverlimitIsFatal}\n                    overlimitTitle={overlimitTitle}\n                    overlimitText={overlimitText}\n                    overlimitCountdownDuration={overlimitCountdownDuration}\n                    onOverlimitSmsRetryClick={handleOverlimitRetryClick}\n                    onOverlimitCountdownFinished={handleOverlimitCountdownFinished}\n                />\n            </div>\n        </Space>\n    );\n});\n"})})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/confirmation-v1/src/index.ts"),vars="@import '../../themes/src/default.css';\n\n:root {\n    /* title */\n    --confirmation-title-font-size: 22px;\n    --confirmation-title-line-height: 26px;\n    --confirmation-title-font-weight: 700;\n    --confirmation-title-font-family: var(--font-family-system);\n    --confirmation-title-color: var(--color-light-text-primary);\n    --confirmation-title-font-feature-settings: normal;\n\n    /* text */\n    --confirmation-text-font-size: 16px;\n    --confirmation-text-line-height: 24px;\n    --confirmation-text-font-weight: 400;\n    --confirmation-text-font-family: var(--font-family-system);\n    --confirmation-text-color: var(--color-light-text-secondary);\n\n    /* error */\n    --confirmation-error-color: var(--color-light-text-negative);\n\n    /* input */\n    --confirmation-input-font-size: 30px;\n    --confirmation-input-font-weight: 700;\n    --confirmation-input-font-family: var(--font-family-system);\n    --confirmation-input-text-color: var(--color-light-text-primary);\n    --confirmation-input-bg-color: var(--color-light-bg-secondary);\n    --confirmation-input-error-bg-color: var(--color-light-bg-negative-muted);\n}\n\n@define-mixin _confirmation-title {\n    font-size: var(--confirmation-title-font-size);\n    line-height: var(--confirmation-title-line-height);\n    font-weight: var(--confirmation-title-font-weight);\n    font-family: var(--confirmation-title-font-family);\n    color: var(--confirmation-title-color);\n    font-feature-settings: var(--confirmation-title-font-feature-settings);\n}\n\n@define-mixin _confirmation-text {\n    font-size: var(--confirmation-text-font-size);\n    line-height: var(--confirmation-text-line-height);\n    font-weight: var(--confirmation-text-font-weight);\n    font-family: var(--confirmation-text-font-family);\n    color: var(--confirmation-text-color);\n}\n";function development_createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ConfirmationV1 } from '@alfalab/core-components/confirmation-v1';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.ConfirmationV1}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:vars})]})}var development=function development_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},CHANGELOGraw_namespaceObject='# Change Log\n\n## 1.5.0\n\n### Minor Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Обновлена зависимость @alfalab/icons-glyph\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.1.0\n\n## 1.4.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   link@5.2.0\n    -   button@11.0.0\n\n## 1.4.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.2\n\n## 1.4.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.1\n\n## 1.4.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.0\n\n## 1.4.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.1.0\n\n## 1.4.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   link@5.1.1\n\n## 1.4.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.6\n\n## 1.4.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.5\n\n## 1.4.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.4\n\n## 1.4.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.3\n\n## 1.4.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.2\n\n## 1.4.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.1\n\n## 1.4.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.0\n    -   link@5.1.0\n    -   loader@3.1.0\n\n## 1.3.2\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   button@8.5.1\n    -   link@5.0.6\n    -   loader@3.0.7\n\n## 1.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.5.0\n\n## 1.3.0\n\n### Minor Changes\n\n### [#712](https://github.com/core-ds/core-components/pull/712)\n\n-   обновлены минорные версии @alfalab/utils и @alfalab/data\n\n## 1.2.21\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n-   Обновлены зависимости\n    -   button@8.4.0\n    -   link@5.0.5\n\n## 1.2.20\n\n### Patch Changes\n\n### [#635](https://github.com/core-ds/core-components/pull/635)\n\n-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях\n\n## 1.2.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.3.0\n\n## 1.2.18\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.2.0\n\n## 1.2.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.1.0\n\n## 1.2.16\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   button@8.0.0\n    -   link@5.0.4\n    -   loader@3.0.6\n\n## 1.2.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.1.1\n\n## 1.2.14\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   button@7.1.0\n    -   link@5.0.3\n    -   loader@3.0.5\n\n## 1.2.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.5\n\n## 1.2.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.4\n\n## 1.2.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.3\n\n## 1.2.10\n\n### Patch Changes\n\n### [#396](https://github.com/core-ds/core-components/pull/396)\n\n-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях\n\n## 1.2.9\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   button@7.0.2\n    -   link@5.0.2\n    -   loader@3.0.4\n\n## 1.2.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.1\n\n## 1.2.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   loader@3.0.3\n\n## 1.2.6\n\n### Patch Changes\n\n### [#324](https://github.com/core-ds/core-components/pull/324)\n\n-   "export" типов заменен на "export type"\n\n## 1.2.5\n\n### Patch Changes\n\n### [#292](https://github.com/core-ds/core-components/pull/292)\n\n-   Новые стили кнопок в теме default\n-   Новый вид состояния loading во всех темах (Loader заменён на Spinner)<br />\n-   Исправлена высота кнопки ghost в размерах s/m/l/xl (увеличилась на 4px)<br />\n-   Исправлена ширина кнопок secondary/tertiary (уменьшилась на 2px)<br />\n\n-   Обновлены зависимости\n    -   button@7.0.0\n\n## 1.2.4\n\n### Patch Changes\n\n-   Updated dependencies [[#282](https://github.com/core-ds/core-components/pull/282)]\n    -   @alfalab/core-components-button@6.1.2\n\n## 1.2.3\n\n### Patch Changes\n\n-   [#208](https://github.com/core-ds/core-components/pull/208): Обновлён лого в BankCard. Thanks [@reabiliti](https://github.com/reabiliti)\n    Обновлены версии зависимостей с иконками (icons-logotype/icons-classic/icons-glyph/icons-flag)\n\n## 1.2.2\n\n### Patch Changes\n\n-   Updated dependencies [[#283](https://github.com/core-ds/core-components/pull/283)]\n    -   @alfalab/core-components-link@5.0.1\n\n## 1.2.1\n\n### Patch Changes\n\n-   [#279](https://github.com/core-ds/core-components/pull/279): chore: обновились @alfalab-data и @alfalab/utils версии в зависимостях. Thanks [@EGNKupava](https://github.com/EGNKupava)\n\n## 1.2.0\n\n### Minor Changes\n\n-   [#260](https://github.com/core-ds/core-components/pull/260): Добавил реэкспорт для компонента ConfirmationV1 как Confirmation и типа пропсов ConfirmationV1Props как ConfirmationProps. Thanks [@EGNKupava](https://github.com/EGNKupava)\n\n### Patch Changes\n\n-   [#189](https://github.com/core-ds/core-components/pull/189): Обновлена зависимость @alfalab/icons-glyph. Thanks [@blackraydev](https://github.com/blackraydev)\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n# 1.1.0 (2022-09-13)\n\n### Features\n\n-   **confirmation-v1:** rename package confirmation-v-1 ([#258](https://github.com/core-ds/core-components/issues/258)) ([195f7a0](https://github.com/core-ds/core-components/commit/195f7a08eeb24bbb9eecf8e62155ec18dbe731d5))\n';function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"ConfirmationV1",children:"Используется для ввода кода подтверждения."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function Component_docs_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent()}}}]);