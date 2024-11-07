"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[311,8181],{"./packages/loader/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},loader:function(){return loader}});var _loader$parameters,_loader$parameters2,_loader$parameters2$d,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _alfalab_core_components_loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/loader/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Deprecated components/Loader",component:_alfalab_core_components_loader__WEBPACK_IMPORTED_MODULE_1__.Loader,id:"Loader"},loader={name:"Loader",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_alfalab_core_components_loader__WEBPACK_IMPORTED_MODULE_1__.Loader,{})}};__webpack_exports__.default=meta,loader.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},loader.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_loader$parameters=loader.parameters)||void 0===_loader$parameters?void 0:_loader$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"{\n  name: 'Loader',\n  render: () => <Loader />\n}"},null===(_loader$parameters2=loader.parameters)||void 0===_loader$parameters2?void 0:null===(_loader$parameters2$d=_loader$parameters2.docs)||void 0===_loader$parameters2$d?void 0:_loader$parameters2$d.source)})});let __namedExportsOrder=["loader"]},"./packages/loader/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/loader/src/docs/Component.stories.tsx"),esm=__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/index.js"),link_esm=__webpack_require__("./node_modules/@alfalab/core-components/link/esm/index.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h,{view:"attention",titleView:"light",limitContentWidth:!1,title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Компонент больше не поддерживается, переходите на новый компонент"," ",(0,jsx_runtime.jsx)(link_esm.r,{href:"https://core-ds.github.io/core-components/master/?path=/docs/spinner--docs",children:"Spinner."})]})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"пример",children:"Пример"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Loader />\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/loader/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Loader } from '@alfalab/core-components/loader';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.Loader})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Loader",children:"Используется для индикации выполнения команды пользователя."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 3.2.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n## 3.2.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 3.1.1\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1354](https://github.com/core-ds/core-components/pull/1354)\n\n-   Обновлены наименования переменных отступов\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.7\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.6\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.5\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.4\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n## 3.0.3\n\n### Patch Changes\n\n### [#333](https://github.com/core-ds/core-components/pull/333)\n\n-   Явные значения в css классах(padding, border-radius и т.п) заменены на переменные\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@3.0.1...@alfalab/core-components-loader@3.0.2) (2022-08-31)\n\n### Bug Fixes\n\n-   **loader:** убран лишний отступ у последнего элемента, мешающий выравниванию ([#218](https://github.com/core-ds/core-components/issues/218)) ([e064754](https://github.com/core-ds/core-components/commit/e064754bfa1d4fbd85f5a9569790da4eef0d237c))\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@3.0.0...@alfalab/core-components-loader@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.2.1...@alfalab/core-components-loader@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.2.0...@alfalab/core-components-loader@2.2.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.1.3...@alfalab/core-components-loader@2.2.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.1.2...@alfalab/core-components-loader@2.1.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n\n## [2.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.1.1...@alfalab/core-components-loader@2.1.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.1.0...@alfalab/core-components-loader@2.1.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.0.4...@alfalab/core-components-loader@2.1.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.0.1...@alfalab/core-components-loader@2.0.2) (2022-02-03)\n\n### Bug Fixes\n\n-   **loader:** fix animation in IE ([#970](https://github.com/core-ds/core-components/issues/970)) ([03df943](https://github.com/core-ds/core-components/commit/03df9438f00bda639aae78aadb940161112a2672))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@2.0.0...@alfalab/core-components-loader@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@1.1.6...@alfalab/core-components-loader@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@1.1.5...@alfalab/core-components-loader@1.1.6) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n\n## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@1.1.3...@alfalab/core-components-loader@1.1.5) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@1.1.2...@alfalab/core-components-loader@1.1.3) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@1.1.1...@alfalab/core-components-loader@1.1.2) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-loader@1.1.0...@alfalab/core-components-loader@1.1.1) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-loader\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/loader/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Loader:function(){return Loader}}),__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Loader=function(_ref){var className=_ref.className,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("component_XRPUW",className),"data-test-id":dataTestId,children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{})]})};try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loader/src/Component.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"packages/loader/src/Component.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}}}]);