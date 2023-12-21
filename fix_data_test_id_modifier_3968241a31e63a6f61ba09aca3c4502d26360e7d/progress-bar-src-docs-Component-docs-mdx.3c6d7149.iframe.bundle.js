"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[3828,808,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");const MDXContext=react.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react.useContext(MDXContext);return react.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=(mod=mdx_react_shim_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod)),((target,mod,secondTarget)=>{__copyProps(target,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")})(mdx_react_shim_exports,__webpack_require__("./node_modules/@mdx-js/react/index.js"),module.exports)},"./packages/progress-bar/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},progress_bar:function(){return progress_bar}});var _progress_bar$paramet,_progress_bar$paramet2,_progress_bar$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js")),_alfalab_core_components_progress_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/progress-bar/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/ProgressBar",component:_alfalab_core_components_progress_bar__WEBPACK_IMPORTED_MODULE_2__.ProgressBar,id:"ProgressBar"},progress_bar={name:"ProgressBar",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_progress_bar__WEBPACK_IMPORTED_MODULE_2__.ProgressBar,{value:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("value",40),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["positive","negative","attention","link","tertiary","secondary","primary","accent"],"positive"),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",["s","m"],"m")})}};__webpack_exports__.default=meta,progress_bar.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},progress_bar.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_progress_bar$paramet=progress_bar.parameters)||void 0===_progress_bar$paramet?void 0:_progress_bar$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'ProgressBar',\n  render: () => <ProgressBar value={number('value', 40)} view={select('view', ['positive', 'negative', 'attention', 'link', 'tertiary', 'secondary', 'primary', 'accent'], 'positive')} size={select('size', ['s', 'm'], 'm')} />\n}"},null===(_progress_bar$paramet2=progress_bar.parameters)||void 0===_progress_bar$paramet2||null===(_progress_bar$paramet3=_progress_bar$paramet2.docs)||void 0===_progress_bar$paramet3?void 0:_progress_bar$paramet3.source)})});const __namedExportsOrder=["progress_bar"]},"./packages/progress-bar/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/progress-bar/src/docs/Component.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Space size={20} fullWidth>\n    <ProgressBar value={40} />\n    <ProgressBar view='link' size='s' value={20} />\n</Space>\n"})})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/progress-bar/src/index.ts"),index_module="@import './vars.css';\n\n.container {\n    background: var(--progressbar-bg-color);\n\n    display: flex;\n    overflow: hidden;\n\n    &.s {\n        border-radius: var(--border-radius-s);\n        height: 4px;\n    }\n\n    &.m {\n        border-radius: var(--border-radius-m);\n        height: 8px;\n    }\n}\n\n.filled {\n    border-radius: inherit;\n    width: 100%;\n    transition: transform 0.4s ease;\n\n    &.positive {\n        background: var(--progressbar-positive-color);\n    }\n\n    &.negative {\n        background: var(--progressbar-negative-color);\n    }\n\n    &.attention {\n        background: var(--progressbar-attention-color);\n    }\n\n    &.link {\n        background: var(--progressbar-link-color);\n    }\n\n    &.tertiary {\n        background: var(--progressbar-tertiary-color);\n    }\n\n    &.secondary {\n        background: var(--progressbar-secondary-color);\n    }\n\n    &.primary {\n        background: var(--progressbar-primary-color);\n    }\n\n    &.accent {\n        background: var(--progressbar-accent-color);\n    }\n}\n";function development_createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ProgressBar } from '@alfalab/core-components/progress-bar';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.ProgressBar}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:index_module})]})}var development=function development_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},CHANGELOGraw_namespaceObject="# Change Log\n\n## 3.2.0\n\n### Minor Changes\n\n### [#973](https://github.com/core-ds/core-components/pull/973)\n\n-   В компонентах Badge,CircularProgressBar,Dropzone,FileUploadItem,HatchingProgressBar,Indicator,IconView,Status,ProgressBar и SteppedProgressBar цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.5\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.4\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.3\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.2\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@3.0.0...@alfalab/core-components-progress-bar@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.3.1...@alfalab/core-components-progress-bar@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.3.0...@alfalab/core-components-progress-bar@2.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.3...@alfalab/core-components-progress-bar@2.3.0) (2022-08-04)\n\n### Bug Fixes\n\n-   **progress-bar:** mechanics of progress line fixed ([#169](https://github.com/core-ds/core-components/issues/169)) ([4b46836](https://github.com/core-ds/core-components/commit/4b4683628ea4fd9da178799dfca8b287c0776ff1))\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.2...@alfalab/core-components-progress-bar@2.2.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.1...@alfalab/core-components-progress-bar@2.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.0...@alfalab/core-components-progress-bar@2.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.1.2...@alfalab/core-components-progress-bar@2.2.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.0.1...@alfalab/core-components-progress-bar@2.1.0) (2022-02-21)\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n-   **progress-bar:** add size prop, additional views, new bg color ([#996](https://github.com/core-ds/core-components/issues/996)) ([63702f7](https://github.com/core-ds/core-components/commit/63702f7d9637e1fe3da502d7c91c4284453b3b48))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.0.0...@alfalab/core-components-progress-bar@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.6...@alfalab/core-components-progress-bar@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.5...@alfalab/core-components-progress-bar@1.1.6) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.4...@alfalab/core-components-progress-bar@1.1.5) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.2...@alfalab/core-components-progress-bar@1.1.4) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.0...@alfalab/core-components-progress-bar@1.1.2) (2021-03-16)\n\n### Bug Fixes\n\n-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))\n\n# [1.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.9...@alfalab/core-components-progress-bar@1.1.0) (2021-03-15)\n\n### Features\n\n-   **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))\n\n## [1.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.8...@alfalab/core-components-progress-bar@1.0.9) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.7...@alfalab/core-components-progress-bar@1.0.8) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.6...@alfalab/core-components-progress-bar@1.0.7) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n";function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"ProgressBar",children:"Используется для отображения прогресса."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function Component_docs_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent()}},"./packages/progress-bar/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressBar:function(){return ProgressBar}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={container:"container_Vw_mp",s:"s_cYLYP",m:"m_Clpeu",filled:"filled_seaxe",positive:"positive_t3AFB",negative:"negative_TGd44",attention:"attention_RUoag",link:"link_mMva0",tertiary:"tertiary_KaD3G",secondary:"secondary_m4fgZ",primary:"primary_dBH6i",accent:"accent_LLX5M"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProgressBar=react.forwardRef((function(_ref,ref){var className=_ref.className,value=_ref.value,_ref$view=_ref.view,view=void 0===_ref$view?"positive":_ref$view,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,dataTestId=_ref.dataTestId,translateX=Math.max(-100,Math.min(0,value-100));return(0,jsx_runtime.jsx)("div",{role:"progressbar","aria-valuenow":Math.round(value),"aria-valuemin":0,"aria-valuemax":100,className:classnames_default()(index_module.container,index_module[size],className),"data-test-id":dataTestId,ref:ref,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.filled,index_module[view]),style:{transform:"translateX(".concat(translateX,"%)")}})})}));try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{value:{defaultValue:null,description:"Значение заполненной части 0-100",name:"value",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"Css-класс для стилизации",name:"className",required:!1,type:{name:"string"}},view:{defaultValue:{value:"positive"},description:"Цвет заполнения",name:"view",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"negative"'},{value:'"positive"'},{value:'"attention"'},{value:'"tertiary"'},{value:'"secondary"'},{value:'"primary"'},{value:'"accent"'}]}},size:{defaultValue:{value:"m"},description:"Размер компонента",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},dataTestId:{defaultValue:null,description:"Id компонента для тестов",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-bar/src/Component.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"packages/progress-bar/src/Component.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}}}]);