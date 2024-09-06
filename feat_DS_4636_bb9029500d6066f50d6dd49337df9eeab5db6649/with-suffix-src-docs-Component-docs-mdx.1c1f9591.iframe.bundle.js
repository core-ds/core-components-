"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[1593,1272,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/with-suffix/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},with_suffix:function(){return with_suffix}});var _with_suffix$paramete,_with_suffix$paramete2,_with_suffix$paramete3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@alfalab/icons-glyph/StarMIcon.js"),_alfalab_core_components_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/input/modern/index.js"),_alfalab_core_components_with_suffix__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/with-suffix/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SuffixInput=(0,_alfalab_core_components_with_suffix__WEBPACK_IMPORTED_MODULE_4__.withSuffix)(_alfalab_core_components_input__WEBPACK_IMPORTED_MODULE_3__.Input),meta={title:"Components/withSuffix",component:_alfalab_core_components_with_suffix__WEBPACK_IMPORTED_MODULE_4__.withSuffix,id:"withSuffix"},with_suffix={name:"WithSuffix",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SuffixInput,{suffix:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("suffix"," ₽"),block:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("block",!1),clear:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("clear",!1),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",["s","m","l","xl"],"s"),disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),label:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label",""),placeholder:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("placeholder",""),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rightAddons",!1)&&!(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error","")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__.StarMIcon,{}),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("leftAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_2__.StarMIcon,{}),bottomAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("bottomAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"bottom text"}),readOnly:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("readOnly",!1)})}};__webpack_exports__.default=meta,with_suffix.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},with_suffix.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_with_suffix$paramete=with_suffix.parameters)||void 0===_with_suffix$paramete?void 0:_with_suffix$paramete.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'WithSuffix',\n  render: () => <SuffixInput suffix={text('suffix', ' ₽')} block={boolean('block', false)} clear={boolean('clear', false)} size={select('size', ['s', 'm', 'l', 'xl'], 's')} disabled={boolean('disabled', false)} label={text('label', '')} placeholder={text('placeholder', '')} rightAddons={boolean('rightAddons', false) && !text('error', '') && <StarMIcon />} leftAddons={boolean('leftAddons', false) && <StarMIcon />} bottomAddons={boolean('bottomAddons', false) && <span>bottom text</span>} readOnly={boolean('readOnly', false)} />\n}"},null===(_with_suffix$paramete2=with_suffix.parameters)||void 0===_with_suffix$paramete2?void 0:null===(_with_suffix$paramete3=_with_suffix$paramete2.docs)||void 0===_with_suffix$paramete3?void 0:_with_suffix$paramete3.source)})});let __namedExportsOrder=["with_suffix"]},"./packages/with-suffix/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/with-suffix/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"пример",children:"Пример"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["HOC добавляет в переданный инпут доп. пропсу ",(0,jsx_runtime.jsx)(_components.code,{children:"suffix?: ReactNode"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const SuffixInput = withSuffix(Input);\n\nrender(\n    <div style={{ width: 320 }}>\n        <SuffixInput \n            block={true}\n            placeholder='Введите число'\n            label='Количество месяцев'\n            labelView={isMobile() ? 'outer' : 'inner'}\n            suffix={<Typography.Text view='component-primary' color='secondary'> мес</Typography.Text> }\n            size={isMobile() ? 's' : 'm'}\n            breakpoint={BREAKPOINT}/>\n    </div>\n);\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { withSuffix } from '@alfalab/core-components/with-suffix';\n"})})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"withSuffix",children:"Используется чтобы расположить текст после значения инпута."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 4.1.37\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1349](https://github.com/core-ds/core-components/pull/1349)\n\n-   При событии `blur` для `view=default` будет очищаться запятая, если она является последним символом\n-   Для состояний `disabled` и `readOnly` исправлены цвета. Дробная часть числа будет окрашена в соответствие с целой частью числа\n-   Исправлены `inverted` цвета\n\n-   Обновлены зависимости\n    -   input@15.0.5\n\n## 4.1.36\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.4\n    -   portal@3.3.1\n\n## 4.1.35\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.3\n\n## 4.1.34\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.2\n\n## 4.1.33\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.1\n\n## 4.1.32\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.0\n\n## 4.1.31\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   portal@3.3.0\n    -   input@14.4.7\n\n## 4.1.30\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.6\n\n## 4.1.29\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.5\n    -   portal@3.2.1\n\n## 4.1.28\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.4\n\n## 4.1.27\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.3\n\n## 4.1.26\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.2\n\n## 4.1.25\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.1\n\n## 4.1.24\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.0\n\n## 4.1.23\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.3\n\n## 4.1.22\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.2\n\n## 4.1.21\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.1\n\n## 4.1.20\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.0\n\n## 4.1.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.2.0\n\n## 4.1.18\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.2\n\n## 4.1.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.1\n\n## 4.1.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.0\n\n## 4.1.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.1\n\n## 4.1.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.0\n\n## 4.1.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.2\n\n## 4.1.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.1\n\n## 4.1.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.0\n\n## 4.1.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.3.0\n\n## 4.1.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.1\n\n## 4.1.8\n\n### Patch Changes\n\n### [#865](https://github.com/core-ds/core-components/pull/865)\n\n-   Добавлен атрибут translate=\"no\". Без этого атрибута компонент ломается при включении перевода страницы\n\n-   Обновлены зависимости\n    -   input@12.2.0\n\n## 4.1.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.4\n\n## 4.1.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.3\n\n## 4.1.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.2\n\n## 4.1.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.1\n\n## 4.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.0\n\n## 4.1.2\n\n### Patch Changes\n\n### [#806](https://github.com/core-ds/core-components/pull/806)\n\n-   Исправлен коллбек getPortalContainer\n\n-   Обновлены зависимости\n    -   input@12.0.2\n\n## 4.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.1\n\n## 4.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.0\n    -   portal@3.2.0\n\n## 4.0.33\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   input@11.1.18\n    -   portal@3.1.5\n\n## 4.0.32\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.17\n\n## 4.0.31\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.16\n\n## 4.0.30\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.15\n\n## 4.0.29\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.14\n\n## 4.0.28\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.13\n\n## 4.0.27\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.12\n\n## 4.0.26\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.11\n\n## 4.0.25\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.10\n\n## 4.0.24\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   input@11.1.9\n    -   portal@3.1.4\n\n## 4.0.23\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.8\n\n## 4.0.22\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   input@11.1.7\n    -   portal@3.1.3\n\n## 4.0.21\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.6\n\n## 4.0.20\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.5\n\n## 4.0.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.4\n\n## 4.0.18\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.3\n\n## 4.0.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.2\n\n## 4.0.16\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   input@11.1.1\n    -   portal@3.1.2\n\n## 4.0.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   portal@3.1.1\n\n## 4.0.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.0\n\n## 4.0.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.0.2\n\n## 4.0.12\n\n### Patch Changes\n\n### [#320](https://github.com/core-ds/core-components/pull/320)\n\n-   Скрыт нативный спиннер (стрелочки) у компонента Input при type='number'\n\n-   Обновлены зависимости\n    -   input@11.0.1\n\n## 4.0.11\n\n### Patch Changes\n\n### [#286](https://github.com/core-ds/core-components/pull/286)\n\n-   Новые стили инпутов в теме default (все компоненты на основе FormControl, включая Select)\n-   Исправлен отступ до hint в SliderInput (уменьшился на 2px)<br />\n\n-   Обновлены зависимости\n    -   input@11.0.0\n\n## 4.0.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   portal@3.1.0\n    -   input@10.2.5\n\n## 4.0.9\n\n### Patch Changes\n\n-   @alfalab/core-components-input@10.2.4\n\n## 4.0.8\n\n### Patch Changes\n\n-   Updated dependencies [[#208](https://github.com/core-ds/core-components/pull/208)]\n    -   @alfalab/core-components-input@10.2.3\n\n## 4.0.7\n\n### Patch Changes\n\n-   Updated dependencies [[#189](https://github.com/core-ds/core-components/pull/189)]\n    -   @alfalab/core-components-input@10.2.2\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [4.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@4.0.5...@alfalab/core-components-with-suffix@4.0.6) (2022-09-13)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [4.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@4.0.4...@alfalab/core-components-with-suffix@4.0.5) (2022-09-12)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [4.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@4.0.3...@alfalab/core-components-with-suffix@4.0.4) (2022-09-02)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [4.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@4.0.2...@alfalab/core-components-with-suffix@4.0.3) (2022-08-31)\n\n### Bug Fixes\n\n-   fixed missing css vars ([#227](https://github.com/core-ds/core-components/issues/227)) ([42912d3](https://github.com/core-ds/core-components/commit/42912d306657490e8c7f577cb53120767d503fcb))\n\n## [4.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@4.0.1...@alfalab/core-components-with-suffix@4.0.2) (2022-08-29)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [4.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@4.0.0...@alfalab/core-components-with-suffix@4.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.4.2...@alfalab/core-components-with-suffix@4.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [3.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.4.1...@alfalab/core-components-with-suffix@3.4.2) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n## [3.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.4.0...@alfalab/core-components-with-suffix@3.4.1) (2022-08-11)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n# [3.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.3.4...@alfalab/core-components-with-suffix@3.4.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [3.3.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.3.3...@alfalab/core-components-with-suffix@3.3.4) (2022-07-25)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.3.2...@alfalab/core-components-with-suffix@3.3.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.3.1...@alfalab/core-components-with-suffix@3.3.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [3.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.3.0...@alfalab/core-components-with-suffix@3.3.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n# [3.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.2.7...@alfalab/core-components-with-suffix@3.3.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [3.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.2.6...@alfalab/core-components-with-suffix@3.2.7) (2022-06-23)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.2.5...@alfalab/core-components-with-suffix@3.2.6) (2022-06-03)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n# [3.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.14...@alfalab/core-components-with-suffix@3.2.0) (2022-03-04)\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n## [3.1.14](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.13...@alfalab/core-components-with-suffix@3.1.14) (2022-02-17)\n\n### Bug Fixes\n\n-   imports for glyph icons ([#994](https://github.com/core-ds/core-components/issues/994)) ([8e807f2](https://github.com/core-ds/core-components/commit/8e807f26abf0f942fe8eadbd201caecb297b35dc))\n\n## [3.1.13](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.12...@alfalab/core-components-with-suffix@3.1.13) (2022-02-15)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.12](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.11...@alfalab/core-components-with-suffix@3.1.12) (2022-02-09)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.11](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.10...@alfalab/core-components-with-suffix@3.1.11) (2022-02-03)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.10](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.9...@alfalab/core-components-with-suffix@3.1.10) (2022-02-02)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.8...@alfalab/core-components-with-suffix@3.1.9) (2021-12-29)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.7...@alfalab/core-components-with-suffix@3.1.8) (2021-12-14)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.6...@alfalab/core-components-with-suffix@3.1.7) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.5...@alfalab/core-components-with-suffix@3.1.6) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.4...@alfalab/core-components-with-suffix@3.1.5) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.3...@alfalab/core-components-with-suffix@3.1.4) (2021-11-26)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.2...@alfalab/core-components-with-suffix@3.1.3) (2021-11-16)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.1...@alfalab/core-components-with-suffix@3.1.2) (2021-10-15)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.1.0...@alfalab/core-components-with-suffix@3.1.1) (2021-10-11)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n# [3.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.8...@alfalab/core-components-with-suffix@3.1.0) (2021-09-14)\n\n### Features\n\n-   change error type to ReactNode ([#825](https://github.com/core-ds/core-components/issues/825)) ([c6d95c1](https://github.com/core-ds/core-components/commit/c6d95c1c6239f2b2a3bf2c1639554d8500e794f3))\n\n## [3.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.7...@alfalab/core-components-with-suffix@3.0.8) (2021-08-27)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.6...@alfalab/core-components-with-suffix@3.0.7) (2021-08-23)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.5...@alfalab/core-components-with-suffix@3.0.6) (2021-08-23)\n\n### Bug Fixes\n\n-   **input:** smart error icon ([#746](https://github.com/core-ds/core-components/issues/746)) ([f1950d6](https://github.com/core-ds/core-components/commit/f1950d6d516d17d993f0865c10390b6301bb2707)), closes [#782](https://github.com/core-ds/core-components/issues/782)\n\n## [3.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.4...@alfalab/core-components-with-suffix@3.0.5) (2021-08-11)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.3...@alfalab/core-components-with-suffix@3.0.4) (2021-08-04)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.2...@alfalab/core-components-with-suffix@3.0.3) (2021-07-23)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.1...@alfalab/core-components-with-suffix@3.0.2) (2021-07-19)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@3.0.0...@alfalab/core-components-with-suffix@3.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.19...@alfalab/core-components-with-suffix@3.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [2.4.19](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.18...@alfalab/core-components-with-suffix@2.4.19) (2021-06-22)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.18](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.17...@alfalab/core-components-with-suffix@2.4.18) (2021-05-31)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.17](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.16...@alfalab/core-components-with-suffix@2.4.17) (2021-05-25)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.16](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.15...@alfalab/core-components-with-suffix@2.4.16) (2021-05-25)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.15](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.14...@alfalab/core-components-with-suffix@2.4.15) (2021-05-18)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.14](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.13...@alfalab/core-components-with-suffix@2.4.14) (2021-05-07)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.13](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.12...@alfalab/core-components-with-suffix@2.4.13) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.12](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.11...@alfalab/core-components-with-suffix@2.4.12) (2021-04-09)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.11](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.10...@alfalab/core-components-with-suffix@2.4.11) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.10](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.9...@alfalab/core-components-with-suffix@2.4.10) (2021-03-30)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.8...@alfalab/core-components-with-suffix@2.4.9) (2021-03-24)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.7...@alfalab/core-components-with-suffix@2.4.8) (2021-03-19)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.5...@alfalab/core-components-with-suffix@2.4.7) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [2.4.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.3...@alfalab/core-components-with-suffix@2.4.5) (2021-03-16)\n\n### Bug Fixes\n\n-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))\n\n## [2.4.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.2...@alfalab/core-components-with-suffix@2.4.3) (2021-03-15)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.1...@alfalab/core-components-with-suffix@2.4.2) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.4.0...@alfalab/core-components-with-suffix@2.4.1) (2021-03-10)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n# [2.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.3.6...@alfalab/core-components-with-suffix@2.4.0) (2021-03-04)\n\n### Features\n\n-   **with-suffix:** xl size ([d2bb796](https://github.com/core-ds/core-components/commit/d2bb7967b6756f8b06b3484c7900ef7637b1c777))\n\n## [2.3.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.3.5...@alfalab/core-components-with-suffix@2.3.6) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.3.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.3.4...@alfalab/core-components-with-suffix@2.3.5) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.3.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.3.3...@alfalab/core-components-with-suffix@2.3.4) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.3.2...@alfalab/core-components-with-suffix@2.3.3) (2021-02-20)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.3.1...@alfalab/core-components-with-suffix@2.3.2) (2021-02-19)\n\n**Note:** Version bump only for package @alfalab/core-components-with-suffix\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-with-suffix@2.3.0...@alfalab/core-components-with-suffix@2.3.1) (2021-02-18)\n\n### Bug Fixes\n\n-   update versions ([#525](https://github.com/core-ds/core-components/issues/525)) ([31b2e4c](https://github.com/core-ds/core-components/commit/31b2e4c92fde6e2b63a3391a4e053cd328e93e70))\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}}}]);