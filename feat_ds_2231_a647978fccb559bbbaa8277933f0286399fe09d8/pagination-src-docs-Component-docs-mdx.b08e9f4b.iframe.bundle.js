"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7638,4088,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/pagination/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},pagination:function(){return pagination}});var _pagination$parameter,_pagination$parameter2,_pagination$parameter3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_pagination__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/pagination/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Pagination",component:_alfalab_core_components_pagination__WEBPACK_IMPORTED_MODULE_2__.Pagination,id:"Pagination"},pagination={name:"Pagination",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState,2),page=_React$useState2[0],setPage=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_pagination__WEBPACK_IMPORTED_MODULE_2__.Pagination,{view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["default","per-page"],"default"),pagesCount:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("pagesCount",10),hideArrows:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("hideArrows",!0),activePadding:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("activePadding",2),sidePadding:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("sidePadding",1),currentPageIndex:page,onPageChange:function(pageIndex){return setPage(pageIndex)}})}};__webpack_exports__.default=meta,pagination.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},pagination.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_pagination$parameter=pagination.parameters)||void 0===_pagination$parameter?void 0:_pagination$parameter.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'Pagination',\n  render: () => {\n    const [page, setPage] = React.useState(0);\n    const handlePageChange = pageIndex => setPage(pageIndex);\n    return <Pagination view={select('view', ['default', 'per-page'], 'default')} pagesCount={number('pagesCount', 10)} hideArrows={boolean('hideArrows', true)} activePadding={number('activePadding', 2)} sidePadding={number('sidePadding', 1)} currentPageIndex={page} onPageChange={handlePageChange} />;\n  }\n}"},null===(_pagination$parameter2=pagination.parameters)||void 0===_pagination$parameter2?void 0:null===(_pagination$parameter3=_pagination$parameter2.docs)||void 0===_pagination$parameter3?void 0:_pagination$parameter3.source)})});let __namedExportsOrder=["pagination"]},"./packages/pagination/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/pagination/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Пагинация с возможностью быстрого доступа к крайним страницам."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const DATA_SIZE = isMobile() ? 5 : 20;\n    const PER_PAGE = 1;\n\n    const [page, setPage] = React.useState(0);\n\n    const handlePageChange = pageIndex => setPage(pageIndex);\n\n    const pagesCount = Math.ceil(DATA_SIZE / PER_PAGE);\n\n    return (\n        <Container align='center'>\n            <Pagination\n                currentPageIndex={page}\n                pagesCount={pagesCount}\n                onPageChange={handlePageChange}\n            />\n        </Container>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Пагинация с постраничным переключением."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const DATA_SIZE = 20;\n    const PER_PAGE = 1;\n\n    const [page, setPage] = React.useState(0);\n\n    const handlePageChange = pageIndex => setPage(pageIndex);\n\n    const pagesCount = Math.ceil(DATA_SIZE / PER_PAGE);\n\n    return (\n        <Container align='center'>\n            <Pagination\n                currentPageIndex={page}\n                pagesCount={pagesCount}\n                onPageChange={handlePageChange}\n                view='per-page'\n            />\n        </Container>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/pagination/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Pagination } from '@alfalab/core-components/pagination';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.Pagination})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Pagination",children:"Используется для переключения между страницами."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 2.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@8.1.0\n\n## 2.3.0\n\n### Minor Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Обновлена зависимость @alfalab/icons-glyph\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@8.0.1\n\n## 2.2.0\n\n### Minor Changes\n\n### [#992](https://github.com/core-ds/core-components/pull/992)\n\n-   В компонентах BankCard, CodeInput, Comment, Divider, ListHeader, Pagination, Scrollbar, Skeleton, SortableList, Steps, Tabs, Underlay и UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@8.0.0\n\n## 2.1.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@7.0.2\n\n## 2.1.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@7.0.1\n\n## 2.1.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@7.0.0\n\n## 2.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@6.1.0\n\n## 2.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@6.0.1\n\n## 2.1.1\n\n### Patch Changes\n\n### [#810](https://github.com/core-ds/core-components/pull/810)\n\n-   Повышена специфичность стилей\n\n## 2.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@6.0.0\n\n## 2.0.21\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@5.4.1\n\n## 2.0.20\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@5.4.0\n\n## 2.0.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@5.3.2\n\n## 2.0.18\n\n### Patch Changes\n\n### [#654](https://github.com/core-ds/core-components/pull/654)\n\n-   Удалены лишние dependencies, добавлены отсутствующие\n\n## 2.0.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.1.0\n\n## 2.0.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@5.3.1\n\n## 2.0.15\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   button@8.0.0\n    -   tag@5.3.0\n\n## 2.0.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   tag@5.2.0\n\n## 2.0.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.1.1\n\n## 2.0.12\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   tag@5.1.0\n    -   button@7.1.0\n\n## 2.0.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.5\n\n## 2.0.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.4\n    -   tag@5.0.4\n\n## 2.0.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.3\n\n## 2.0.8\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   button@7.0.2\n    -   tag@5.0.3\n\n## 2.0.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.1\n\n## 2.0.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.0\n    -   tag@5.0.2\n\n## 2.0.5\n\n### Patch Changes\n\n-   Updated dependencies [[#282](https://github.com/core-ds/core-components/pull/282)]\n    -   @alfalab/core-components-button@6.1.2\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [2.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@2.0.3...@alfalab/core-components-pagination@2.0.4) (2022-09-12)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [2.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@2.0.2...@alfalab/core-components-pagination@2.0.3) (2022-09-02)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@2.0.1...@alfalab/core-components-pagination@2.0.2) (2022-08-31)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@2.0.0...@alfalab/core-components-pagination@2.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.4.2...@alfalab/core-components-pagination@2.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [1.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.4.1...@alfalab/core-components-pagination@1.4.2) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n## [1.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.4.0...@alfalab/core-components-pagination@1.4.1) (2022-08-11)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n# [1.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.3.3...@alfalab/core-components-pagination@1.4.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [1.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.3.2...@alfalab/core-components-pagination@1.3.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [1.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.3.1...@alfalab/core-components-pagination@1.3.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [1.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.3.0...@alfalab/core-components-pagination@1.3.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n# [1.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.2.8...@alfalab/core-components-pagination@1.3.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [1.2.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.2.7...@alfalab/core-components-pagination@1.2.8) (2022-06-23)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [1.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.2.6...@alfalab/core-components-pagination@1.2.7) (2022-06-03)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [1.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.2.0...@alfalab/core-components-pagination@1.2.1) (2022-03-28)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n# [1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.1.4...@alfalab/core-components-pagination@1.2.0) (2022-03-24)\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n## [1.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.1.3...@alfalab/core-components-pagination@1.1.4) (2022-02-15)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.1.2...@alfalab/core-components-pagination@1.1.3) (2022-02-09)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.1.1...@alfalab/core-components-pagination@1.1.2) (2022-02-03)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-pagination@1.1.0...@alfalab/core-components-pagination@1.1.1) (2022-02-02)\n\n**Note:** Version bump only for package @alfalab/core-components-pagination\n\n# 1.1.0 (2021-12-29)\n\n### Features\n\n-   **table:** компоненты для построения таблиц ([#911](https://github.com/core-ds/core-components/issues/911)) ([4ac648a](https://github.com/core-ds/core-components/commit/4ac648abd4de08bf68babc2f122f432d5b14080e))\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/pagination/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Pagination:function(){return Pagination}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ChevronBackMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ChevronBackMIcon.js"),ChevronForwardMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ChevronForwardMIcon.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),desktop=__webpack_require__("./dist/tag/modern/desktop/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","checked"],Tag=function(_ref){var className=_ref.className,checked=_ref.checked,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(desktop.TagDesktop,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{checked:checked,size:"xxs",className:classnames_default()(className,"tag_QmFNw",(0,defineProperty.Z)({},"checked_w5tl3",checked))}))};try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{size:{defaultValue:null,description:"Размер компонента\n@description xxs, xs, s, m, l, xl deprecated, используйте вместо них 32, 40, 48, 56, 64, 72 соответственно",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:"48"},{value:"56"},{value:"64"},{value:"72"},{value:'"xxs"'},{value:'"xs"'},{value:"32"},{value:"40"}]}},onClick:{defaultValue:null,description:"Обработчик нажатия",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>, payload: { checked: boolean; name?: string; }) => void)"}},checked:{defaultValue:null,description:"Отображение кнопки в отмеченном (зажатом) состоянии",name:"checked",required:!1,type:{name:"boolean"}},colors:{defaultValue:null,description:"Набор цветов для компонента",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},leftAddons:{defaultValue:null,description:"Слот слева",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа",name:"rightAddons",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},view:{defaultValue:null,description:"Стиль тега",name:"view",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},shape:{defaultValue:null,description:"Форма тега",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"rectangular"'}]}},childrenClassName:{defaultValue:null,description:"Дополнительный класс для обёртки children",name:"childrenClassName",required:!1,type:{name:"string"}},childrenRef:{defaultValue:null,description:"ref на children",name:"childrenRef",required:!1,type:{name:"RefObject<HTMLSpanElement>"}},variant:{defaultValue:null,description:"@deprecated данный проп больше не используется, временно оставлен для обратной совместимости\nИспользуйте props shape и view\nВариант тега",name:"variant",required:!1,type:{name:"enum",value:[{value:'"alt"'},{value:'"default"'}]}},allowBackdropBlur:{defaultValue:null,description:"Включает размытие фона для некоторых вариантов тега\n@description Может привести к просадке fps и другим багам. Старайтесь не размещать слишком много заблюреных элементов на одной странице.",name:"allowBackdropBlur",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pagination/src/components/tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/pagination/src/components/tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}var default_view_index_module={dots:"dots_E1ovr"},DefaultView=function(_ref){var _ref$sidePadding=_ref.sidePadding,sidePadding=void 0===_ref$sidePadding?2:_ref$sidePadding,_ref$activePadding=_ref.activePadding,pagesCount=_ref.pagesCount,currentPageIndex=_ref.currentPageIndex,_ref$onPageChange=_ref.onPageChange,onPageChange=void 0===_ref$onPageChange?function(){return null}:_ref$onPageChange,maxHalfCount=sidePadding+(void 0===_ref$activePadding?1:_ref$activePadding)+1,maxElementsCount=2*maxHalfCount+1,itemsFit=pagesCount<=maxElementsCount,elementsCount=itemsFit?pagesCount:maxElementsCount,getPageIndex=(0,react.useCallback)(function(elementIndex){var lastIndex=pagesCount-1,reverseIndex=lastIndex-currentPageIndex,reverseElementIndex=elementsCount-1-elementIndex,hasCollapsedItems=function(index){return!itemsFit&&index>=maxHalfCount};if(elementIndex<sidePadding)return elementIndex;if(elementIndex===sidePadding&&hasCollapsedItems(currentPageIndex)||reverseElementIndex===sidePadding&&hasCollapsedItems(reverseIndex))return null;if(reverseElementIndex<sidePadding)return lastIndex-reverseElementIndex;var computedIndex=currentPageIndex-maxHalfCount+elementIndex;return Math.min(lastIndex-reverseElementIndex,Math.max(elementIndex,computedIndex))},[currentPageIndex,elementsCount,itemsFit,maxHalfCount,pagesCount,sidePadding]);return(0,jsx_runtime.jsx)(react.Fragment,{children:Array(elementsCount).fill("").map(function(_,i){var pageIndex=getPageIndex(i);if(null===pageIndex)return(0,jsx_runtime.jsx)("div",{className:default_view_index_module.dots,children:"..."},i.toString());var active=currentPageIndex===pageIndex;return(0,jsx_runtime.jsx)(Tag,{checked:active,disabled:active,onClick:function onClick(){return onPageChange(pageIndex)},children:pageIndex+1},i.toString())})})};try{DefaultView.displayName="DefaultView",DefaultView.__docgenInfo={description:"",displayName:"DefaultView",props:{currentPageIndex:{defaultValue:null,description:"Текущая страница (с нуля)",name:"currentPageIndex",required:!0,type:{name:"number"}},pagesCount:{defaultValue:null,description:"Количество страниц",name:"pagesCount",required:!0,type:{name:"number"}},sidePadding:{defaultValue:{value:"2"},description:"Количество видимых страниц по бокам",name:"sidePadding",required:!1,type:{name:"number"}},activePadding:{defaultValue:{value:"1"},description:"Количество видимых страниц вокруг выбранной",name:"activePadding",required:!1,type:{name:"number"}},onPageChange:{defaultValue:{value:"() => null"},description:"Обработчик переключения страницы",name:"onPageChange",required:!1,type:{name:"((pageIndex: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pagination/src/components/default-view/index.tsx#DefaultView"]={docgenInfo:DefaultView.__docgenInfo,name:"DefaultView",path:"packages/pagination/src/components/default-view/index.tsx#DefaultView"})}catch(__react_docgen_typescript_loader_error){}var PerPageView=function(_ref){var pagesCount=_ref.pagesCount,currentPageIndex=_ref.currentPageIndex;return(0,jsx_runtime.jsxs)("span",{className:"component_cFkqV",children:[currentPageIndex+1," из ",pagesCount," страниц"]})};try{PerPageView.displayName="PerPageView",PerPageView.__docgenInfo={description:"",displayName:"PerPageView",props:{currentPageIndex:{defaultValue:null,description:"Текущая страница (с нуля)",name:"currentPageIndex",required:!0,type:{name:"number"}},pagesCount:{defaultValue:null,description:"Количество страниц",name:"pagesCount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pagination/src/components/per-page-view/index.tsx#PerPageView"]={docgenInfo:PerPageView.__docgenInfo,name:"PerPageView",path:"packages/pagination/src/components/per-page-view/index.tsx#PerPageView"})}catch(__react_docgen_typescript_loader_error){}var src_index_module={component:"component_Im5zt",defaultView:"defaultView_Cxc7V"},Pagination=function(_ref){var _ref$currentPageIndex=_ref.currentPageIndex,currentPageIndex=void 0===_ref$currentPageIndex?0:_ref$currentPageIndex,pagesCount=_ref.pagesCount,className=_ref.className,_ref$sidePadding=_ref.sidePadding,_ref$activePadding=_ref.activePadding,_ref$hideArrows=_ref.hideArrows,hideArrows=void 0===_ref$hideArrows||_ref$hideArrows,_ref$view=_ref.view,view=void 0===_ref$view?"default":_ref$view,_ref$onPageChange=_ref.onPageChange,onPageChange=void 0===_ref$onPageChange?function(){return null}:_ref$onPageChange,dataTestId=_ref.dataTestId,handlePageClick=function(pageIndex){onPageChange(pageIndex)},shouldRenderPrevArrow="per-page"===view||!hideArrows||currentPageIndex>0,shouldRenderNextArrow="per-page"===view||!hideArrows||currentPageIndex<pagesCount-1;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(src_index_module.component,className,src_index_module["default"===view?"defaultView":view]),"data-test-id":dataTestId,children:[shouldRenderPrevArrow&&(0,jsx_runtime.jsx)(Tag,{className:src_index_module.arrow,disabled:currentPageIndex<=0,onClick:function(){handlePageClick(Math.max(0,currentPageIndex-1))},rightAddons:(0,jsx_runtime.jsx)(ChevronBackMIcon.ChevronBackMIcon,{width:16,height:16})}),"default"===view&&(0,jsx_runtime.jsx)(DefaultView,{activePadding:void 0===_ref$activePadding?2:_ref$activePadding,sidePadding:void 0===_ref$sidePadding?1:_ref$sidePadding,currentPageIndex:currentPageIndex,pagesCount:pagesCount,onPageChange:handlePageClick}),"per-page"===view&&(0,jsx_runtime.jsx)(PerPageView,{currentPageIndex:currentPageIndex,pagesCount:pagesCount}),shouldRenderNextArrow&&(0,jsx_runtime.jsx)(Tag,{className:src_index_module.arrow,disabled:currentPageIndex>=pagesCount-1,onClick:function(){handlePageClick(Math.min(pagesCount-1,currentPageIndex+1))},rightAddons:(0,jsx_runtime.jsx)(ChevronForwardMIcon.ChevronForwardMIcon,{width:16,height:16})})]})};try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{currentPageIndex:{defaultValue:{value:"0"},description:"Текущая страница (с нуля)",name:"currentPageIndex",required:!1,type:{name:"number"}},pagesCount:{defaultValue:null,description:"Количество страниц",name:"pagesCount",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},hideArrows:{defaultValue:{value:"true"},description:"Скрывает стрелки, если выбрана первая или последняя страница",name:"hideArrows",required:!1,type:{name:"boolean"}},sidePadding:{defaultValue:{value:"1"},description:"Количество видимых страниц по бокам",name:"sidePadding",required:!1,type:{name:"number"}},activePadding:{defaultValue:{value:"2"},description:"Количество видимых страниц вокруг выбранной",name:"activePadding",required:!1,type:{name:"number"}},view:{defaultValue:{value:"default"},description:"Режим пагинации",name:"view",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"per-page"'}]}},onPageChange:{defaultValue:{value:"() => null"},description:"Обработчик переключения страницы",name:"onPageChange",required:!1,type:{name:"((pageIndex: number) => void)"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pagination/src/Component.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"packages/pagination/src/Component.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}}}]);