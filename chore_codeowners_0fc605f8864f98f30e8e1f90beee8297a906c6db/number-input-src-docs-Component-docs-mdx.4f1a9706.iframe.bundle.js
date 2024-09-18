"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[1564,5430,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/number-input/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},number_input:function(){return number_input}});var _number_input$paramet,_number_input$paramet2,_number_input$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@alfalab/icons-glyph/StarMIcon.js"),_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/number-input/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/NumberInput",component:_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__.NumberInput,id:"NumberInput"},number_input={name:"NumberInput",render:function render(){var colors=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("colors",["default","inverted"],"default"),stepper=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("stepper",!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:stepper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__.NumberInput,{size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",[48,56,64,72],48),colors:colors,disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),step:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("step",1),max:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("max",10),min:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("min",0)}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_number_input__WEBPACK_IMPORTED_MODULE_3__.NumberInput,{separator:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("separator",[",","."],","),fractionLength:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("fractionLength",2),block:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("block",!1),clear:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("clear",!1),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",[48,56,64,72],48),colors:colors,disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),placeholder:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("placeholder",""),label:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label",""),labelView:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("labelView",["inner","outer"],"inner"),hint:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),success:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("success",!1),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rightAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__.StarMIcon,{}),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("leftAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__.StarMIcon,{}),bottomAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("bottomAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"bottom text"}),readOnly:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("readOnly",!1)})})}};__webpack_exports__.default=meta,number_input.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},number_input.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_number_input$paramet=number_input.parameters)||void 0===_number_input$paramet?void 0:_number_input$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'NumberInput',\n  render: () => {\n    const colors = select('colors', ['default', 'inverted'], 'default');\n    const stepper = boolean('stepper', false);\n    return <div style={{\n      backgroundColor: colors === 'inverted' ? 'var(--color-light-base-bg-primary-inverted)' : 'transparent',\n      padding: '8px',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    }}>\n                {stepper ? <NumberInput size={select('size', [48, 56, 64, 72], 48)} colors={colors} disabled={boolean('disabled', false)} step={number('step', 1)} max={number('max', 10)} min={number('min', 0)} /> : <NumberInput separator={select('separator', [',', '.'], ',')} fractionLength={number('fractionLength', 2)} block={boolean('block', false)} clear={boolean('clear', false)} size={select('size', [48, 56, 64, 72], 48)} colors={colors} disabled={boolean('disabled', false)} placeholder={text('placeholder', '')} label={text('label', '')} labelView={select('labelView', ['inner', 'outer'], 'inner')} hint={text('hint', '')} error={text('error', '')} success={boolean('success', false)} rightAddons={boolean('rightAddons', false) && <StarMIcon />} leftAddons={boolean('leftAddons', false) && <StarMIcon />} bottomAddons={boolean('bottomAddons', false) && <span>bottom text</span>} readOnly={boolean('readOnly', false)} />}\n            </div>;\n  }\n}"},null===(_number_input$paramet2=number_input.parameters)||void 0===_number_input$paramet2?void 0:null===(_number_input$paramet3=_number_input$paramet2.docs)||void 0===_number_input$paramet3?void 0:_number_input$paramet3.source)})});let __namedExportsOrder=["number_input"]},"./packages/number-input/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/number-input/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"стандартный-вид-компонента",children:"Стандартный вид компонента"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент умеет принимать только целые и дробные числа с разным знаком.\nВид разделителя и количество знаков в дробной части можно настраивать."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:500,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [value, setValue] = React.useState(null);\n\n    const [separator, setSeparator] = React.useState(',');\n    const [fractionLengthRadioValue, setFractionLengthRadioValue] = React.useState('notLimited');\n\n    const handleChange = (_, payload) => {\n        setValue(payload.value);\n    };\n\n    const handleSeparatorChange = (_, payload) => {\n        setSeparator(payload.value);\n        setValue(null);\n    };\n\n    const handleFractionLengthRadioChange = (_, payload) => {\n        setFractionLengthRadioValue(payload.value);\n        setValue(null);\n    };\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 320 }}>\n            <NumberInput\n                value={value}\n                block={true}\n                onChange={handleChange}\n                placeholder='Введите число'\n                label='Число'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                separator={separator}\n                fractionLength={fractionLengthRadioValue === 'limited' ? 2 : undefined}\n                size={isMobile() ? 48 : 56}\n                clear={true}\n                onClear={() => setValue(null)}\n                breakpoint={BREAKPOINT}\n            />\n            <Gap size='xl' />\n            <RadioGroup\n                label='Отделять дробную часть'\n                direction='vertical'\n                name='radioGroupFirst'\n                onChange={handleSeparatorChange}\n                value={separator}\n            >\n                <Radio label='Запятой' value=',' />\n                <Radio label='Точкой' value='.' />\n            </RadioGroup>\n            <Gap size='xl' />\n            <RadioGroup\n                label='Длина дробной части'\n                direction='vertical'\n                name='radioGroupSecond'\n                onChange={handleFractionLengthRadioChange}\n                value={fractionLengthRadioValue}\n            >\n                <Radio label='Не ограничена' value='notLimited' />\n                <Radio label='2 знака' value='limited' />\n            </RadioGroup>\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Если знаечния изменяются с фиксированным шагом, можно включить степпер.\nПри наличии степпера ввод с\xa0клавиатуры можно запретить."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:500,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [value, setValue] = React.useState();\n    const [disableUserInput, setDisableUserInput] = React.useState(false);\n\n    const handleChange = (_, payload) => {\n        setValue(payload.value);\n    };\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 320 }}>\n            <NumberInput\n                value={value}\n                onChange={handleChange}\n                step={1}\n                min={0}\n                max={10}\n                block={true}\n                disableUserInput={disableUserInput}\n                placeholder='Введите число'\n                label='Число'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size={isMobile() ? 48 : 56}\n                breakpoint={BREAKPOINT}\n            />\n\n            <Gap size='xl' />\n\n            <Switch\n                block={true}\n                checked={disableUserInput}\n                label='Запретить ввод с клавиатуры'\n                onChange={() => setDisableUserInput(!disableUserInput)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"морфология",children:"Морфология"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Поле ввода является оберткой над ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/formcontrol--docs",children:"FormControl"}),", поэтому наследует все доступные для него настройки."]})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component_responsive=__webpack_require__("./packages/number-input/src/Component.responsive.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",br:"br"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// responsive версия компонента\nimport { NumberInput } from '@alfalab/core-components/number-input';\n\n// desktop версия компонента\nimport { NumberInputDesktop } from '@alfalab/core-components/number-input/desktop';\n\n// mobile версия компонента\nimport { NumberInputMobile } from '@alfalab/core-components/number-input/mobile';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-datatestid",children:"Использование dataTestId"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В компоненте используются модификаторы для ",(0,jsx_runtime.jsx)(_components.code,{children:"dataTestId"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Компонент является оберткой над FormControl, поэтому наследует все его модификаторы.",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Для удобного поиска элементов можно воспользоваться функцией ",(0,jsx_runtime.jsx)(_components.code,{children:"getNumberInputTestIds"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Импорт из ",(0,jsx_runtime.jsx)(_components.code,{children:"@alfalab/core-components/number-input/shared"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Функция возвращает объект:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"{\n    input: dataTestId,\n    inputWrapper: `${dataTestId}-form-control`,\n    inputWrapperInner: `${dataTestId}-form-control-inner`,\n    leftAddons: `${dataTestId}-form-control-left-addons`,\n    rightAddons: `${dataTestId}-form-control-right-addons`,\n    error: `${dataTestId}-form-control-error-message`,\n    hint: `${dataTestId}-form-control-hint`,\n    decrementButton: `${dataTestId}-decrement-button`,\n    incrementButton: `${dataTestId}-increment-button`,\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:Component_responsive.m})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"NumberInput",children:"Поле для ввода чисел."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:'# @alfalab/core-components-number-input\n\n## 2.4.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.9.1\n    -   input@15.1.2\n\n## 2.4.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.9.0\n    -   input@15.1.1\n    -   shared@0.12.1\n\n## 2.4.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.8.0\n    -   input@15.1.0\n\n## 2.3.17\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1355](https://github.com/core-ds/core-components/pull/1355)\n\n-   Обновлены наименования переменных отступов\n\n-   Обновлены зависимости\n    -   input@15.0.5\n    -   icon-button@6.7.5\n\n## 2.3.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.12.0\n    -   input@15.0.4\n    -   icon-button@6.7.4\n\n## 2.3.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.3\n\n## 2.3.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   mq@4.3.0\n    -   input@15.0.2\n    -   icon-button@6.7.3\n\n## 2.3.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.7.2\n    -   input@15.0.1\n\n## 2.3.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.0\n\n## 2.3.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.11.0\n    -   input@14.4.7\n    -   icon-button@6.7.1\n\n## 2.3.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.7.0\n    -   input@14.4.6\n\n## 2.3.9\n\n### Patch Changes\n\n<sup><time>14.06.2024</time></sup>\n\n### [#1235](https://github.com/core-ds/core-components/pull/1235)\n\n-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools\n\n-   Обновлены зависимости\n    -   icon-button@6.6.1\n    -   input@14.4.5\n\n## 2.3.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.6.0\n    -   input@14.4.4\n\n## 2.3.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.10.0\n    -   input@14.4.3\n    -   icon-button@6.5.7\n\n## 2.3.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.2\n\n## 2.3.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.1\n\n## 2.3.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.0\n    -   icon-button@6.5.6\n\n## 2.3.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.5.5\n    -   input@14.3.3\n\n## 2.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.5.4\n    -   input@14.3.2\n\n## 2.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.1\n\n## 2.3.0\n\n### Minor Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1021](https://github.com/core-ds/core-components/pull/1021)\n\n-   Добавлены новые способы указать размеры - 48, 56, 64, 72. Буквенные значения размеров s, m, l, xl теперь deprecated, используйте вместо них 48, 56, 64, 72 соответственно\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.0\n    -   icon-button@6.5.3\n\n## 2.2.0\n\n### Minor Changes\n\n### [#1049](https://github.com/core-ds/core-components/pull/1049)\n\n-   Добавлена функция get{ComponentName}TestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.2.0\n    -   icon-button@6.5.2\n\n## 2.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.2\n\n## 2.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n    -   input@14.1.1\n    -   icon-button@6.5.1\n\n## 2.1.0\n\n### Minor Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Обновлена зависимость @alfalab/icons-glyph\n\n### Patch Changes\n\n### [#1016](https://github.com/core-ds/core-components/pull/1016)\n\n-   Изменили CSS-токен для фона в степпере с neutral_inverted/1500 на neutral-translucent/0 в дефолтном наборе цветов и с neutral/1500 на neutral-translucent_inverted/0 в инвертированном\n\n-   Обновлены зависимости\n    -   input@14.1.0\n    -   icon-button@6.5.0\n    -   shared@0.9.0\n\n## 2.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.1\n\n## 2.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.0\n    -   icon-button@6.4.3\n\n## 2.0.2\n\n### Patch Changes\n\n### [#987](https://github.com/core-ds/core-components/pull/987)\n\n-   Немного изменена структура файлов в пакетах для корректной сборки в vite\n\n-   Обновлены зависимости\n    -   input@13.0.2\n    -   icon-button@6.4.2\n\n## 2.0.1\n\n### Patch Changes\n\n### [#961](https://github.com/core-ds/core-components/pull/961)\n\n-   Заменены токены для stepper\n\n-   Обновлены зависимости\n    -   icon-button@6.4.1\n    -   input@13.0.1\n\n## 2.0.0\n\n### Major Changes\n\n### [#901](https://github.com/core-ds/core-components/pull/901)\n\n-   Изменен тип коллбэка onChange, теперь в payload приходит только число\n-   Добавлены пропы min, max\n-   Удален prop allowSign. Теперь, чтобы появилась возможность вводить знак "-", достаточно указать min < 0\n-   Добавлен проп step.\n-   Удален StepperInput, используйте вместо него NumberInput с пропом step\n\n# Миграция с предыдущей версии\n\n-   Заменить onChange с (event, {value, valueString}) на (event, {value}).\n-   allowSign был удален, знак "+" больше указать невозможно. "-" можно указать по-умолчанию.\n    Чтобы запретить указывать знак "-", достаточно передать проп min={0}\n-   <StepperInput .../> нужно заменить на <NumberInput step={1} .../>\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.0\n    -   icon-button@6.4.0\n    -   shared@0.8.0\n\n## 1.3.0\n\n### Minor Changes\n\n### [#944](https://github.com/core-ds/core-components/pull/944)\n\n-   Добавлен package.json с module полем в mobile, desktop, shared точки входа\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.3.0\n\n## 1.2.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.1\n\n## 1.2.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.0\n\n## 1.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.4\n\n## 1.2.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.3\n\n## 1.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.2\n\n## 1.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.1\n\n## 1.2.0\n\n### Minor Changes\n\n### [#817](https://github.com/core-ds/core-components/pull/817)\n\n-   Добавлена мобильная и десктопная версия компонента\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.0\n\n## 1.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.2\n\n## 1.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.1\n\n## 1.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.0\n\n## 1.0.16\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   input@11.1.18\n\n## 1.0.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.17\n\n## 1.0.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.16\n\n## 1.0.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.15\n\n## 1.0.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.14\n\n## 1.0.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.13\n\n## 1.0.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.12\n\n## 1.0.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.11\n\n## 1.0.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.10\n\n## 1.0.7\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   input@11.1.9\n\n## 1.0.6\n\n### Patch Changes\n\n### [#565](https://github.com/core-ds/core-components/pull/565)\n\n-   Исправлена ошибка, из-за которой не вызывался onChange, если было передано недопустимое значение\n\n## 1.0.5\n\n### Patch Changes\n\n### [#564](https://github.com/core-ds/core-components/pull/564)\n\n-   Значение value при сбросе изменено на null\n\n## 1.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.8\n\n## 1.0.3\n\n### Patch Changes\n\n### [#517](https://github.com/core-ds/core-components/pull/517)\n\n-   Изменили внутренний компонент с MaskedInput на Input\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   input@11.1.7\n\n## 1.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   masked-input@6.1.6\n\n## 1.0.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   masked-input@6.1.5\n\n## 1.0.0\n\n### Major Changes\n\n### [#455](https://github.com/core-ds/core-components/pull/455)\n\n-   Добавлен новый компонент NumberInput\n'}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}}}]);