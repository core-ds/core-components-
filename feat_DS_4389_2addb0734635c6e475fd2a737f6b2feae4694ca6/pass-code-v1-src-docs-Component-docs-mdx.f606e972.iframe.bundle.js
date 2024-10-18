"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[9410,4288,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/pass-code-v1/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},pass_code_v1:function(){return pass_code_v1}});var _pass_code_v1$paramet,_pass_code_v1$paramet2,_pass_code_v1$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/pass-code-v1/modern/index.js"),_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@alfalab/icons-glyph/SfFaceIdXxlIcon.js");__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Deprecated components/PassCodeV1",component:_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.PassCodeV1,id:"PassCodeV1"},pass_code_v1={name:"PassCodeV1",render:function render(){var codeLength=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("codeLength",0,{min:0,max:12,range:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.PassCodeV1,{value:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("value",""),onChange:function onChange(){},maxCodeLength:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxCodeLength",8,{min:0,max:12,range:!0}),codeLength:0===codeLength?void 0:codeLength,message:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("message",""),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("leftAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"text",children:"Забыли код?"},"left-addon"),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rightAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code_v1__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"text",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__.SfFaceIdXxlIcon,{})},"right-addon")})}};__webpack_exports__.default=meta,pass_code_v1.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},pass_code_v1.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_pass_code_v1$paramet=pass_code_v1.parameters)||void 0===_pass_code_v1$paramet?void 0:_pass_code_v1$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'PassCodeV1',\n  render: () => {\n    const codeLength = number('codeLength', 0, {\n      min: 0,\n      max: 12,\n      range: true\n    });\n    return <PassCodeV1 value={text('value', '')} onChange={() => {}} maxCodeLength={number('maxCodeLength', 8, {\n      min: 0,\n      max: 12,\n      range: true\n    })} codeLength={codeLength === 0 ? undefined : codeLength} message={text('message', '')} error={text('error', '')} leftAddons={boolean('leftAddons', false) && <KeyPadButton view='text' key='left-addon'>\n                            Забыли код?\n                        </KeyPadButton>} rightAddons={boolean('rightAddons', false) && <KeyPadButton view='text' key='right-addon'>\n                            <SfFaceIdXxlIcon />\n                        </KeyPadButton>} />;\n  }\n}"},null===(_pass_code_v1$paramet2=pass_code_v1.parameters)||void 0===_pass_code_v1$paramet2?void 0:null===(_pass_code_v1$paramet3=_pass_code_v1$paramet2.docs)||void 0===_pass_code_v1$paramet3?void 0:_pass_code_v1$paramet3.source)})});let __namedExportsOrder=["pass_code_v1"]},"./packages/pass-code-v1/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),ComponentHeader=__webpack_require__("./.storybook/blocks/component-header/ComponentHeader.tsx"),component=__webpack_require__("./.storybook/blocks/tabs/component.tsx"),Component_stories=__webpack_require__("./packages/pass-code-v1/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"пример",children:"Пример"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компоненту можно передать длину кода, в этом случае он сразу отобразит нужное количество точек над пин-падом.\nЕсли длина неизвестна, после каждого нажатия на пин-пад будет добавляться новая точка.\nКнопка удаления появляется после ввода первого символа.\nПосле валидации компонент может отобразить состоянии ошибки и вывести сообщение.\nСостояния успеха для цифрового кода не предусмотренно, пользователь просто пойдёт дальше по сценарию.\nКорректная комбинация для примера ",(0,jsx_runtime.jsx)(_components.code,{children:"0451"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:640,mobileOnly:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const VALID_CODE = '0451';\nconst MAX_LENGTH = VALID_CODE.length;\nconst SCREENS = {\n    INITIAL: 'initial',\n    ENTER_CODE: 'ENTER_CODE',\n    SUCCESS: 'success',\n};\n\nrender(() => {\n    const [screen, setScreen] = React.useState(SCREENS.INITIAL);\n    const [error, setError] = React.useState(false);\n    const [code, setCode] = React.useState('');\n    const [passCodeParams, setPassCodeParams] = React.useState();\n\n    const validate = (codeToValidate) => {\n        if (codeToValidate !== VALID_CODE) {\n            setTimeout(() => setError('Error message'), 300);\n            setTimeout(() => {\n                setError((prev) => {\n                    if (prev) {\n                        setCode('');\n                        return false;\n                    }\n\n                    return prev;\n                });\n            }, 1300);\n\n            return;\n        }\n\n        setTimeout(() => setScreen(SCREENS.SUCCESS), 500);\n    };\n\n    const handleChange = (value) => {\n        setCode(value);\n        setError(false);\n\n        if (passCodeParams.codeLength > 0 && value.length === MAX_LENGTH) {\n            validate(value);\n        }\n    };\n\n    if (screen === SCREENS.INITIAL) {\n        return (\n            <>\n                <Button\n                    block\n                    onClick={() => {\n                        setPassCodeParams({\n                            codeLength: MAX_LENGTH,\n                            message: 'Введите код из четырёх цифр',\n                        });\n                        setScreen(SCREENS.ENTER_CODE);\n                    }}\n                >\n                    Код из четырех цифр\n                </Button>\n                <Gap size='m' />\n                <Button\n                    block\n                    onClick={() => {\n                        setPassCodeParams({ maxCodeLength: 12 });\n                        setScreen(SCREENS.ENTER_CODE);\n                    }}\n                >\n                    Длина кода неизвестна заранее\n                </Button>\n            </>\n        );\n    }\n\n    if (screen === SCREENS.SUCCESS) {\n        return (\n            <div style={{ display: 'flex', flexFlow: 'column nowrap', height: 600 }}>\n                <Gap size='xl' />\n                <Gap size='8xl' />\n                <div\n                    style={{\n                        display: 'flex',\n                        flexFlow: 'column nowrap',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flex: 1,\n                    }}\n                >\n                    <div style={{ textAlign: 'center' }}>\n                        <SuperEllipse\n                            size={80}\n                            backgroundColor='var(--color-light-status-positive)'\n                        >\n                            <CheckmarkMIcon style={{ fill: '#fff' }} />\n                        </SuperEllipse>\n\n                        <Gap size='m' />\n\n                        <Typography.Text view='primary-medium' weight='bold'>\n                            Введён корректный код\n                        </Typography.Text>\n                    </div>\n\n                    <Button\n                        block\n                        onClick={() => {\n                            setScreen(SCREENS.INITIAL);\n                            setError(false);\n                            setCode('');\n                        }}\n                    >\n                        Попробовать ещё раз\n                    </Button>\n                </div>\n            </div>\n        );\n    }\n\n    return (\n        <div\n            style={{\n                display: 'flex',\n                flexFlow: 'column nowrap',\n                justifyContent: 'space-between',\n                height: 600,\n            }}\n        >\n            <PassCodeV1 {...passCodeParams} value={code} onChange={handleChange} error={error} />\n\n            {passCodeParams.maxCodeLength > 0 && (\n                <Button block view='primary' onClick={() => validate(code)}>\n                    Продолжить\n                </Button>\n            )}\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"адаптивность",children:"Адаптивность"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Размер контролов компонента подстраивается под ширину мобильного экрана.\nКомпонент не предназначен для использования на десктопных устройствах и не имеет соответствующих состояний."})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},css_vars=__webpack_require__("./.storybook/blocks/css-vars/css-vars.tsx"),Component=__webpack_require__("./packages/pass-code-v1/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { PassCodeV1 } from '@alfalab/core-components/pass-code-v1';\n\n// Если добавляете аддон, то можно обернуть его в KeyPadButton. Так не понадобится подгонять стили под другие кнопки.\nimport { KeyPadButton } from '@alfalab/core-components/pass-code-v1';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-datatestid",children:"Использование dataTestId"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В компоненте используются модификаторы для ",(0,jsx_runtime.jsx)(_components.code,{children:"dataTestId"}),".\nДля удобного поиска элементов можно воспользоваться функцией ",(0,jsx_runtime.jsx)(_components.code,{children:"getPassCodeTestIds"}),".\nИмпорт из ",(0,jsx_runtime.jsx)(_components.code,{children:"@alfalab/core-components/pass-code/shared"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Функция возвращает объект:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"{\n    passCode: `${dataTestId}-wrapper`,\n    inputProgress: `${dataTestId}-input-progress`,\n    keypad: `${dataTestId}-keypad`,\n    keypadButton: `${dataTestId}-keypad-button`,\n    backspaceButton: `${dataTestId}-backspace-button`,\n    error: `${dataTestId}-error`,\n    message: `${dataTestId}-message`,\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.K}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(css_vars.Z,{css:":root {\n    --pass-code-max-width: 500px;\n    --button-bg-color: var(--color-light-neutral-translucent-200);\n    --button-bg-color-active: var(--color-light-neutral-translucent-200-press);\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/PassCodeV1",of:Component_stories}),"\n",(0,jsx_runtime.jsx)(ComponentHeader.y,{name:"PassCodeV1",children:"Компонент для авторизации пользователя с помощью цифрового ключа."}),"\n",(0,jsx_runtime.jsx)(component.m,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-pass-code-v1\n\n## 1.1.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.9.0\n    -   shared@0.13.0\n\n## 1.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.8.0\n\n## 1.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.7.1\n\n## 1.1.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n-   Обновлены зависимости\n    -   button@11.7.0\n    -   shared@0.12.1\n\n## 1.1.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.6.0\n    -   gap@1.4.0\n\n## 1.0.4\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1355](https://github.com/core-ds/core-components/pull/1355)\n\n-   Обновлены наименования переменных отступов\n\n-   Обновлены зависимости\n    -   button@11.5.5\n\n## 1.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.12.0\n    -   button@11.5.4\n\n## 1.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.5.3\n\n## 1.0.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.5.2\n\n## 1.0.0\n\n### Major Changes\n\n<sup><time>28.06.2024</time></sup>\n\n### [#1233](https://github.com/core-ds/core-components/pull/1233)\n\nРедизайн компонентов PassCode и PatternLock\n\n-   Внесены изменения в адаптивность\n-   Удалены пропсы для вывода кастомных сообщений и ошибок\n    Эти исправления уменьшили габариты компонентов, что позволит упростить работу с их размещением на странице\n\n## Обновление\n\nДля упрощенного перехода между версиями библиотеки, после обновления вам необходимо исправить импорты.\n\nДо\n\n```js\nimport { PassCode } from '@alfalab/core-components/pass-code';\nimport { PatternLock } from '@alfalab/core-components/pattern-lock';\n```\n\nПосле\n\n```js\nimport { PassCodeV1 } from '@alfalab/core-components/pass-code-v1';\nimport { PatternLockV1 } from '@alfalab/core-components/pattern-lock-v1';\n```\n\nТаким образом, в вашем приложении продолжат работу старые версии компонентов.\nВ дальнейшем поддержка `v1` версий будет прекращена.\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   gap@1.3.1\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./.storybook/blocks/css-vars/css-vars.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CssVars}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/link/modern/index.js"),esm=__webpack_require__("./node_modules/storybook-addon-live-examples/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),rootBlockRegexp=/:root {([^}]*)}/g,mixinRegexp=/(?:@define-mixin)(.*{[^}]*})/g,CssVars=function(_ref){var css=_ref.css,title=_ref.title,expandable=_ref.expandable,_ref$type=_ref.type,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),vars=_useState2[0],setVars=_useState2[1],_useState3=(0,react.useState)(!expandable),_useState4=(0,slicedToArray.Z)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],isVars="vars"===(void 0===_ref$type?"vars":_ref$type),regexp=isVars?rootBlockRegexp:mixinRegexp;return(0,react.useEffect)(function(){for(var rootBlockMatch=regexp.exec(css),rootBlocks=[];rootBlockMatch;)rootBlocks.push(rootBlockMatch[1]),rootBlockMatch=regexp.exec(css);var result=rootBlocks.reduce(function(acc,item,index){var isLast=index===rootBlocks.length-1;return"".concat(acc).concat(item).concat(isLast?"":"\n")},isVars?":root {":"");isVars&&(result+="}"),setVars(result)},[]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled","cssVars_OsBA8"),children:[title&&(0,jsx_runtime.jsx)("h2",{className:classnames_default()("sbdocs","sbdocs-h2"),children:title}),vars&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[expandable&&(0,jsx_runtime.jsx)(modern.Link,{view:"default",onClick:function onClick(){return setOpen(!open)},pseudo:!0,children:open?"Скрыть":"Показать"}),open&&(0,jsx_runtime.jsx)(esm.en,{language:"css",code:vars,live:!1})]})]})};try{CssVars.displayName="CssVars",CssVars.__docgenInfo={description:"",displayName:"CssVars",props:{css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"vars"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vars"'},{value:'"mixins"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/css-vars/css-vars.tsx#CssVars"]={docgenInfo:CssVars.__docgenInfo,name:"CssVars",path:".storybook/blocks/css-vars/css-vars.tsx#CssVars"})}catch(__react_docgen_typescript_loader_error){}},"./packages/pass-code-v1/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K:function(){return PassCodeV1}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/gap/modern/index.js"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),index_module={component:"component_bVdPM",dot:"dot_Ly7S0",error:"error_lBwNR",filled:"filled_FSFjj"},transitions_module={enter:"enter_ZL9sZ",enterActive:"enterActive_W_ctw",exit:"exit_sDt3v",exitActive:"exitActive_zfFs8",shake:"shake_YMJGA"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputProgress=function(_ref){var _ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,maxCodeLength=_ref.maxCodeLength,codeLength=_ref.codeLength,error=_ref.error,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.component,(0,defineProperty.Z)({},transitions_module.shake,error)),"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"input-progress"),children:codeLength?Array(codeLength).fill(null).map(function(_,i){var filled=!!value[i];return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.dot,(0,defineProperty.Z)((0,defineProperty.Z)({},index_module.error,filled&&error),index_module.filled,filled))},i)}):Array(maxCodeLength).fill(null).map(function(_,i){return(0,jsx_runtime.jsx)(CSSTransition.Z,{in:!!value[i],timeout:150,classNames:transitions_module,unmountOnExit:!0,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.dot,index_module.filled,(0,defineProperty.Z)({},index_module.error,error))})},i)})})};try{InputProgress.displayName="InputProgress",InputProgress.__docgenInfo={description:"",displayName:"InputProgress",props:{maxCodeLength:{defaultValue:null,description:"",name:"maxCodeLength",required:!0,type:{name:"number"}},codeLength:{defaultValue:null,description:"",name:"codeLength",required:!1,type:{name:"number"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code-v1/src/components/InputProgress/Component.tsx#InputProgress"]={docgenInfo:InputProgress.__docgenInfo,name:"InputProgress",path:"packages/pass-code-v1/src/components/InputProgress/Component.tsx#InputProgress"})}catch(__react_docgen_typescript_loader_error){}var BackspaceXxlIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/BackspaceXxlIcon.js"),Component=__webpack_require__("./packages/pass-code-v1/src/components/KeyPadButton/Component.tsx"),CELLS=Array(12).fill(null).map(function(_,i){return 10===i?0:i+1}),KeyPad=function(_ref){var leftAddons=_ref.leftAddons,rightAddons=_ref.rightAddons,onClick=_ref.onClick,onClear=_ref.onClear,showClear=_ref.showClear,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsx)("div",{className:"component_GEi4c","data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"keypad"),children:CELLS.map(function(digit,i){return 9===i?leftAddons||(0,jsx_runtime.jsx)("div",{},"left-addons-empty"):11===i?showClear?(0,jsx_runtime.jsx)(Component.d,{onClick:onClear,view:"text",dataTestId:(0,shared_modern.getDataTestId)(dataTestId,"backspace-button"),children:(0,jsx_runtime.jsx)(BackspaceXxlIcon.BackspaceXxlIcon,{})},"clear-btn"):rightAddons||(0,jsx_runtime.jsx)("div",{},"right-addon-empty"):(0,jsx_runtime.jsx)(Component.d,{onClick:onClick,view:"secondary",buttonClassName:"digit_VttxK",dataTestId:(0,shared_modern.getDataTestId)(dataTestId,"keypad-button"),children:digit},digit)})})};try{KeyPad.displayName="KeyPad",KeyPad.__docgenInfo={description:"",displayName:"KeyPad",props:{showClear:{defaultValue:null,description:'Показать кнопку "очистить".',name:"showClear",required:!0,type:{name:"boolean"}},leftAddons:{defaultValue:null,description:"Слот слева.",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа.",name:"rightAddons",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для автоматизированного тестирования.",name:"dataTestId",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Коллбэк нажатия на кнопку.",name:"onClick",required:!0,type:{name:"(digit: number) => void"}},onClear:{defaultValue:null,description:"Коллбэк очистки кода.",name:"onClear",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code-v1/src/components/KeyPad/Component.tsx#KeyPad"]={docgenInfo:KeyPad.__docgenInfo,name:"KeyPad",path:"packages/pass-code-v1/src/components/KeyPad/Component.tsx#KeyPad"})}catch(__react_docgen_typescript_loader_error){}var src_index_module={component:"component_sdMQ4",message:"message_UVwft",error:"error_zBquc"},PassCodeV1=(0,react.forwardRef)(function(_ref,ref){var _ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,dataTestId=_ref.dataTestId,className=_ref.className,leftAddons=_ref.leftAddons,rightAddons=_ref.rightAddons,error=_ref.error,message=_ref.message,onChange=_ref.onChange,_ref$maxCodeLength=_ref.maxCodeLength,maxCodeLength=void 0===_ref$maxCodeLength?10:_ref$maxCodeLength,codeLength=_ref.codeLength,passwordLen=codeLength||maxCodeLength;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(src_index_module.component,className),ref:ref,"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"wrapper"),children:[error?(0,jsx_runtime.jsx)("div",{className:classnames_default()(src_index_module.message,src_index_module.error),"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"error"),children:error}):(0,jsx_runtime.jsx)("div",{className:src_index_module.message,"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"message"),children:message}),(0,jsx_runtime.jsx)(modern.Gap,{size:"m"}),(0,jsx_runtime.jsx)(InputProgress,{dataTestId:dataTestId,value:value,maxCodeLength:maxCodeLength,codeLength:codeLength,error:!!error}),(0,jsx_runtime.jsx)(modern.Gap,{size:"4xl"}),(0,jsx_runtime.jsx)(KeyPad,{dataTestId:dataTestId,leftAddons:leftAddons,rightAddons:rightAddons,onClick:function(digit){var newValue=value.concat(digit.toString());newValue.length<=passwordLen&&(null==onChange||onChange(newValue))},onClear:function(){value.length>0&&(null==onChange||onChange(null==value?void 0:value.slice(0,-1)))},showClear:!!value})]})});try{PassCodeV1.displayName="PassCodeV1",PassCodeV1.__docgenInfo={description:"",displayName:"PassCodeV1",props:{value:{defaultValue:{value:""},description:"Код",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Обработчик изменения кода",name:"onChange",required:!0,type:{name:"(code: string) => void"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Отображение ошибки",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"Сообщение над клавиатурой",name:"message",required:!1,type:{name:"ReactNode"}},leftAddons:{defaultValue:null,description:"Слот слева.",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа",name:"rightAddons",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.\nДля враппера используется модификатор -wrapper, ошибки -error,\nсообщения над клавиатурой -message, блока с кодом -input-progress,\nблока с цифрами -keypad",name:"dataTestId",required:!1,type:{name:"string"}},maxCodeLength:{defaultValue:{value:"10"},description:"Максимально возможная длина кода",name:"maxCodeLength",required:!1,type:{name:"number"}},codeLength:{defaultValue:null,description:"Длина кода",name:"codeLength",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code-v1/src/Component.tsx#PassCodeV1"]={docgenInfo:PassCodeV1.__docgenInfo,name:"PassCodeV1",path:"packages/pass-code-v1/src/Component.tsx#PassCodeV1"})}catch(__react_docgen_typescript_loader_error){}},"./packages/pass-code-v1/src/components/KeyPadButton/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return KeyPadButton}}),__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mobile=__webpack_require__("./dist/button/modern/mobile/index.js"),index_module={component:"component_jw6VI",button:"button_XlWDC",secondary:"secondary_SZP5q",ghost:"ghost_T1ZVu"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function KeyPadButton(_ref){var children=_ref.children,_onClick=_ref.onClick,className=_ref.className,_ref$view=_ref.view,view=void 0===_ref$view?"secondary":_ref$view,buttonClassName=_ref.buttonClassName,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsx)("div",{className:classnames_default()("component_jw6VI",className),children:(0,jsx_runtime.jsx)(mobile.ButtonMobile,{className:classnames_default()("button_XlWDC",index_module[view],buttonClassName),view:view,onClick:function onClick(){return null==_onClick?void 0:_onClick(children)},dataTestId:dataTestId,children:children})})}try{KeyPadButton.displayName="KeyPadButton",KeyPadButton.__docgenInfo={description:"",displayName:"KeyPadButton",props:{view:{defaultValue:{value:"secondary"},description:"Вид кнопки.",name:"view",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"link"'},{value:'"outlined"'},{value:'"filled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"accent"'},{value:'"transparent"'},{value:'"ghost"'}]}},children:{defaultValue:null,description:"Значение.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Дополнительный класс.",name:"className",required:!1,type:{name:"string"}},buttonClassName:{defaultValue:null,description:"Дополнительный класс кнопки.",name:"buttonClassName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Коллбэк нажатия на кнопку.",name:"onClick",required:!1,type:{name:"((payload: T) => void)"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code-v1/src/components/KeyPadButton/Component.tsx#KeyPadButton"]={docgenInfo:KeyPadButton.__docgenInfo,name:"KeyPadButton",path:"packages/pass-code-v1/src/components/KeyPadButton/Component.tsx#KeyPadButton"})}catch(__react_docgen_typescript_loader_error){}}}]);