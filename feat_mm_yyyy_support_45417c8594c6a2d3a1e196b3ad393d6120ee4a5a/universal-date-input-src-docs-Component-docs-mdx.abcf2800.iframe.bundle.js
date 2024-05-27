"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7689,7645,1341],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableSpread(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||(0,unsupportedIterableToArray.Z)(arr)||_nonIterableSpread()}},"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/universal-date-input/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},universal_date_input:function(){return universal_date_input}});var _universal_date_input,_universal_date_input2,_universal_date_input3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _alfalab_core_components_universal_date_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/universal-date-input/modern/index.js"),_alfalab_core_components_calendar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/calendar/modern/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/UniversalDateInput",component:_alfalab_core_components_universal_date_input__WEBPACK_IMPORTED_MODULE_1__.UniversalDateInput,id:"UniversalDateInput"},universal_date_input={name:"UniversalDateInput",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_universal_date_input__WEBPACK_IMPORTED_MODULE_1__.UniversalDateInput,{autoCorrection:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("autoCorrection",!0),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("view",["date","date-time","date-range","time"],"date"),picker:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("picker",!1),Calendar:_alfalab_core_components_calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar})}};__webpack_exports__.default=meta,universal_date_input.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},universal_date_input.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_universal_date_input=universal_date_input.parameters)||void 0===_universal_date_input?void 0:_universal_date_input.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'UniversalDateInput',\n  render: () => {\n    return <UniversalDateInput autoCorrection={boolean('autoCorrection', true)} view={select('view', (['date', 'date-time', 'date-range', 'time'] as any), 'date')} picker={(boolean('picker', false) as true)} Calendar={Calendar} />;\n  }\n}"},null===(_universal_date_input2=universal_date_input.parameters)||void 0===_universal_date_input2?void 0:null===(_universal_date_input3=_universal_date_input2.docs)||void 0===_universal_date_input3?void 0:_universal_date_input3.source)})});let __namedExportsOrder=["universal_date_input"]},"./packages/universal-date-input/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/universal-date-input/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"дата",children:"Дата"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской. Для ввода значений без клавиатуры можно использовать календарь.\nПри необходимости ввод с клавиатуры можно запретить.\nЕсли предполагаемая дата находится недалеко от текущей, рекомендуется использовать календарь со слайдером месяцев,\nв других случаях, лучше подойдёт календарь с выбором года и месяца."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:720,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [radioSelected, setRadioSelected] = React.useState('none');\n    const [disableUserInput, setDisableUserInput] = React.useState(false);\n    const [date, setDate] = React.useState(null);\n\n    const handleChange = (date) => setDate(date);\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 'var(--calendar-width)' }}>\n            <UniversalDateInput\n                breakpoint={BREAKPOINT}\n                block={true}\n                view='date'\n                label='Дата'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size={isMobile() ? 48 : 56}\n                value={date}\n                onChange={handleChange}\n                disableUserInput={disableUserInput}\n                picker={radioSelected !== 'none'}\n                Calendar={Calendar}\n                calendarProps={{\n                    selectorView: radioSelected,\n                }}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setDate(null);\n                }}\n            />\n\n            <Gap size='xl' />\n\n            <RadioGroup\n                label='Календарь'\n                direction='vertical'\n                onChange={(_, { value }) => setRadioSelected(value)}\n                value={radioSelected}\n            >\n                <Radio label='Без календаря' value='none' />\n                <Radio label='Со слайдером месяцев' value='month-only' />\n                <Radio label='С выбором года и месяца' value='full' />\n            </RadioGroup>\n\n            <Gap size='xl' />\n\n            <Switch\n                block={true}\n                checked={disableUserInput}\n                label='Запретить ввод с клавиатуры'\n                onChange={() => setDisableUserInput(!disableUserInput)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"диапазон-дат",children:"Диапазон дат"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской. Для ввода без клавиатуры можно использовать календарь. При необходимости ввод с клавиатуры можно запретить."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:720,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const initialState = {\n    dateFrom: null,\n    dateTo: null,\n};\n\nrender(() => {\n    const [radioSelected, setRadioSelected] = React.useState('none');\n    const [disableUserInput, setDisableUserInput] = React.useState(false);\n    const [range, setRange] = React.useState(initialState);\n\n    const handleChange = (newRange) => setRange(newRange);\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 'var(--calendar-width)' }}>\n            <UniversalDateInput\n                breakpoint={BREAKPOINT}\n                block={true}\n                view='date-range'\n                label='Диапазон дат'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                value={range}\n                size={isMobile() ? 48 : 56}\n                disableUserInput={disableUserInput}\n                picker={radioSelected !== 'none'}\n                rangeBehavior={radioSelected}\n                onChange={handleChange}\n                Calendar={Calendar}\n                calendarProps={{\n                    selectorView: 'month-only',\n                }}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setRange(initialState);\n                }}\n            />\n\n            <Gap size='xl' />\n\n            <RadioGroup\n                label='Календарь'\n                direction='vertical'\n                onChange={(_, { value }) => setRadioSelected(value)}\n                value={radioSelected}\n            >\n                <Radio label='Без календаря' value='none' />\n                <Radio label='С механикой уточнения границ' value='clarification' />\n                <Radio label='С механикой сброса границ' value='reset' />\n            </RadioGroup>\n\n            <Gap size='xl' />\n\n            <Switch\n                block={true}\n                checked={disableUserInput}\n                label='Запретить ввод с клавиатуры'\n                onChange={() => setDisableUserInput(!disableUserInput)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"дата-и-время",children:"Дата и время"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:720,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [picker, setPicker] = React.useState(false);\n    const [date, setDate] = React.useState();\n\n    const handleChange = (date) => setDate(date);\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 'var(--calendar-width)' }}>\n            <UniversalDateInput\n                breakpoint={BREAKPOINT}\n                block={true}\n                view='date-time'\n                label='Дата и время'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size={isMobile() ? 48 : 56}\n                value={date}\n                onChange={handleChange}\n                picker={picker}\n                Calendar={Calendar}\n                calendarProps={{\n                    selectorView: 'month-only',\n                }}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setDate(null);\n                }}\n            />\n\n            <Gap size='xl' />\n\n            <Switch\n                block={true}\n                checked={picker}\n                label='Календарь для ввода даты'\n                onChange={() => setPicker(!picker)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"время",children:"Время"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [value, setValue] = React.useState('');\n\n    const handleChange = (time) => setValue(time);\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 320 }}>\n            <UniversalDateInput\n                value={value}\n                onChange={handleChange}\n                view='time'\n                label='Время'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size={isMobile() ? 48 : 56}\n                breakpoint={BREAKPOINT}\n                block={true}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setValue('');\n                }}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"месяц",children:"Месяц"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [value, setValue] = React.useState('');\n\n    const handleChange = (month) => setValue(month);\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 320 }}>\n            <UniversalDateInput\n                value={value}\n                onChange={handleChange}\n                view='month'\n                label='Месяц'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size={isMobile() ? 48 : 56}\n                breakpoint={BREAKPOINT}\n                block={true}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setValue('');\n                }}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"морфология",children:"Морфология"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Поле ввода является оберткой над ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/formcontrol--docs",children:"FormControl"}),",\nпоэтому наследует все доступные для него настройки. Пикер это\n",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/calendar--docs",children:"Calendar"}),"\nв ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/popover--docs",children:"Popover"}),"."]})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component_responsive=__webpack_require__("./packages/universal-date-input/src/Component.responsive.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",br:"br"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// responsive версия\nimport { UniversalDateInput } from '@alfalab/core-components/universal-date-input';\n\n// desktop версия\nimport { UniversalDateInputDesktop } from '@alfalab/core-components/universal-date-input/desktop';\n\n// mobile версия\nimport { UniversalDateInputMobile } from '@alfalab/core-components/universal-date-input/mobile';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-datatestid",children:"Использование dataTestId"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В компоненте используются модификаторы для ",(0,jsx_runtime.jsx)(_components.code,{children:"dataTestId"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Компонент является оберткой над FormControl, поэтому наследует все его модификаторы.",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Для удобного поиска элементов можно воспользоваться функцией ",(0,jsx_runtime.jsx)(_components.code,{children:"getUniversalDateInputTestIds"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Импорт из ",(0,jsx_runtime.jsx)(_components.code,{children:"@alfalab/core-components/universal-date-input/shared"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Функция возвращает объект:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"{\n    input: dataTestId,\n    componentWrapper: `${dataTestId}-wrapper`,\n    popover: `${dataTestId}-popover`,\n    calendar: `${dataTestId}-calendar`,    \n    inputWrapper: `${dataTestId}-form-control`,\n    inputWrapperInner: `${dataTestId}-form-control-inner`,\n    leftAddons: `${dataTestId}-form-control-left-addons`,\n    rightAddons: `${dataTestId}-form-control-right-addons`,\n    error: `${dataTestId}-form-control-error-message`,\n    hint: `${dataTestId}-form-control-hint`,\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:Component_responsive.W})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"UniversalDateInput",children:"Используется для указания даты и времени."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-universal-date-input\n\n## 2.0.8\n\n### Patch Changes\n\n<sup><time>24.05.2024</time></sup>\n\n### [#1214](https://github.com/core-ds/core-components/pull/1214)\n\n-   Добавлена возможность обработки строковых значений для отображения даты\n\n<sup><time>24.05.2024</time></sup>\n\n### [#1218](https://github.com/core-ds/core-components/pull/1218)\n\n-   Исправлен выбор даты на мобильных устройствах\n\n-   Обновлены зависимости\n    -   input@14.4.2\n\n## 2.0.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.1\n\n## 2.0.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.0\n\n## 2.0.5\n\n### Patch Changes\n\n<sup><time>19.04.2024</time></sup>\n\n### [#1170](https://github.com/core-ds/core-components/pull/1170)\n\n-   Устранена проблема, из-за которой невозможно было установить год раньше 1971\n\n-   Обновлены зависимости\n    -   input@14.3.3\n\n## 2.0.4\n\n### Patch Changes\n\n<sup><time>08.04.2024</time></sup>\n\n### [#1162](https://github.com/core-ds/core-components/pull/1162)\n\n-   Исправлена логика обработки значения minDate. Ранее при установке minDate=new Date().getTime() возникала ошибка при выборе текущей даты. Теперь данное поведение исправлено\n\n## 2.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.2\n\n## 2.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.1\n\n## 2.0.1\n\n### Patch Changes\n\n<sup><time>04.03.2024</time></sup>\n\n### [#1110](https://github.com/core-ds/core-components/pull/1110)\n\n-   Исправлена логика обработки значения minDate. Ранее при установке minDate=new Date().getTime() возникала ошибка при выборе текущей даты. Теперь данное поведение исправлено\n\n## 2.0.0\n\n### Major Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1041](https://github.com/core-ds/core-components/pull/1041)\n\n-   Переименованы свойства. onChange стал называться onInputChange, onComplete стал называться onChange\n-   Изменены типы свойств value и onChange.\n-   Исправлена ошибка из-за которой onChange не вызывался в момент очистки инпута\n\n## Миграция с предыдущей версии\n\n-   Меняем onChange на onInputChange. (но от использования onInputChange лучше отказаться, если не нужно посимвольно контролировать пользовательский ввод).\n-   Меняем onComplete на onChange. (Это основной обработчик. Вызывается в момент, когда дата введена полностью, либо полностью стерта. Первый аргумент - дата(или диапазон дат), второй - значение инпута).\n-   value теперь принимает дату(диапазон дат в случае view=data-range), а не строку как раньше.\n\nПримеры всегда можно посмотреть в [сторибуке](https://core-ds.github.io/core-components/master/?path=/docs/universaldateinput--docs)\n\n### Minor Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1021](https://github.com/core-ds/core-components/pull/1021)\n\n-   Добавлены новые способы указать размеры - 48, 56, 64, 72. Буквенные значения размеров s, m, l, xl теперь deprecated, используйте вместо них 48, 56, 64, 72 соответственно\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.0\n\n## 1.5.0\n\n### Minor Changes\n\n### [#1049](https://github.com/core-ds/core-components/pull/1049)\n\n-   Добавлена функция get{ComponentName}TestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId\n\n### Patch Changes\n\n### [#1074](https://github.com/core-ds/core-components/pull/1074)\n\n-   Исправлена ошибка с выбором диапазона дат. (Если dateFrom была равна dateTo и после этого выбиралась меньшая дата, то получался некорректный диапазон, в котором dateTo < dateFrom)\n\n-   Обновлены зависимости\n    -   input@14.2.0\n\n## 1.4.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.2\n\n## 1.4.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n    -   input@14.1.1\n\n## 1.4.0\n\n### Minor Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Обновлена зависимость @alfalab/icons-glyph\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   popover@6.2.1\n    -   input@14.1.0\n    -   shared@0.9.0\n\n## 1.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.1\n\n## 1.3.0\n\n### Minor Changes\n\n### [#992](https://github.com/core-ds/core-components/pull/992)\n\n-   В компонентах BankCard, CodeInput, Comment, Divider, ListHeader, Pagination, Scrollbar, Skeleton, SortableList, Steps, Tabs, Underlay и UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   popover@6.2.0\n    -   input@14.0.0\n\n## 1.2.3\n\n### Patch Changes\n\n### [#987](https://github.com/core-ds/core-components/pull/987)\n\n-   Немного изменена структура файлов в пакетах для корректной сборки в vite\n\n-   Обновлены зависимости\n    -   input@13.0.2\n\n## 1.2.2\n\n### Patch Changes\n\n### [#970](https://github.com/core-ds/core-components/pull/970)\n\n-   Исправлен размер иконки календаря\n\n## 1.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.1\n\n## 1.2.0\n\n### Minor Changes\n\n### [#931](https://github.com/core-ds/core-components/pull/931)\n\n-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.0\n    -   shared@0.8.0\n\n## 1.1.0\n\n### Minor Changes\n\n### [#944](https://github.com/core-ds/core-components/pull/944)\n\n-   Добавлен package.json с module полем в mobile, desktop, shared точки входа\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.3.0\n    -   shared@0.7.0\n\n## 1.0.1\n\n### Patch Changes\n\n### [#884](https://github.com/core-ds/core-components/pull/884)\n\n-   Добавлен атрибут autocomplete='off'\n\n-   Обновлены зависимости\n    -   input@12.2.1\n    -   shared@0.6.0\n\n## 1.0.0\n\n### Major Changes\n\n### [#858](https://github.com/core-ds/core-components/pull/858)\n\n-   Добавлен новый компонент UniversalDateInput\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.0\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}}}]);