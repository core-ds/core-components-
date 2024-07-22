"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[2842,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/stepped-progress-bar/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},steppedProgressBar:function(){return steppedProgressBar}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/stepped-progress-bar/modern/index.js"),Component=__webpack_require__("./packages/stepped-progress-bar/src/Component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"пошаговый-прогрессбар-с-описанием-под-шкалой",children:"Пошаговый прогрессбар с описанием под шкалой"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<SteppedProgressBar\n    step={5}\n    maxStep={10}\n    description={"Название шага"}\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"пошаговый-прогрессбар-с-выбором-цветов-отдельных-сегментов",children:"Пошаговый прогрессбар с выбором цветов отдельных сегментов"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<SteppedProgressBar\n    step={8}\n    maxStep={10}\n    view={['positive', 'negative', 'attention', 'link', 'tertiary', 'secondary', 'primary', 'accent']}\n/>\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function Component_stories_createMdxContent(props){let _components=Object.assign({div:"div",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/SteppedProgressBar",component:modern.SteppedProgressBar,id:"SteppedProgressBar"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"SteppedProgressBar",children:react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"20px",position:"absolute",inset:"0px"},children:(0,jsx_runtime.jsx)(modern.SteppedProgressBar,{colors:colors,step:(0,addon_knobs_dist.number)("step",1),maxStep:(0,addon_knobs_dist.number)("maxStep",3),description:(0,addon_knobs_dist.text)("description","Выбор карты"),view:(0,addon_knobs_dist.select)("view",["positive","negative","attention","link","tertiary","secondary","primary","accent"])})})})}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"SteppedProgressBar"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { SteppedProgressBar } from '@alfalab/core-components/stepped-progress-bar';\n"})}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{props:(0,jsx_runtime.jsx)(dist.$4,{of:Component.I}),description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 2.3.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.8.0\n\n## 2.3.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.7.0\n\n## 2.3.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.6.0\n\n## 2.3.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.5.1\n\n## 2.3.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.5.0\n\n## 2.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.4.0\n\n## 2.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.3.0\n\n## 2.3.0\n\n### Minor Changes\n\n### [#973](https://github.com/core-ds/core-components/pull/973)\n\n-   В компонентах Badge,CircularProgressBar,Dropzone,FileUploadItem,HatchingProgressBar,Indicator,IconView,Status,ProgressBar и SteppedProgressBar цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.2.1\n\n## 2.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.2.0\n\n## 2.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.1.0\n\n## 2.2.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.0.0\n\n## 2.1.1\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   typography@3.2.2\n\n## 2.1.0\n\n### Minor Changes\n\n### [#619](https://github.com/core-ds/core-components/pull/619)\n\n-   Добавлена пропса colors отвечающая за смену default и inverted режимов\n\n## 2.0.12\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   typography@3.2.1\n\n## 2.0.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@3.2.0\n\n## 2.0.10\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   typography@3.1.1\n\n## 2.0.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@3.1.0\n\n## 2.0.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@3.0.8\n\n## 2.0.7\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   typography@3.0.7\n\n## 2.0.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@3.0.6\n\n## 2.0.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@3.0.5\n\n## 2.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@3.0.4\n\n## 2.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@3.0.3\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@2.0.1...@alfalab/core-components-stepped-progress-bar@2.0.2) (2022-09-01)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@2.0.0...@alfalab/core-components-stepped-progress-bar@2.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.4.1...@alfalab/core-components-stepped-progress-bar@2.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [1.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.4.0...@alfalab/core-components-stepped-progress-bar@1.4.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [1.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.3.3...@alfalab/core-components-stepped-progress-bar@1.4.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [1.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.3.2...@alfalab/core-components-stepped-progress-bar@1.3.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n## [1.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.3.1...@alfalab/core-components-stepped-progress-bar@1.3.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [1.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.3.0...@alfalab/core-components-stepped-progress-bar@1.3.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n# [1.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.2.6...@alfalab/core-components-stepped-progress-bar@1.3.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [1.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.2.2...@alfalab/core-components-stepped-progress-bar@1.2.3) (2022-03-30)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n## [1.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.2.1...@alfalab/core-components-stepped-progress-bar@1.2.2) (2022-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n## [1.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.2.0...@alfalab/core-components-stepped-progress-bar@1.2.1) (2022-03-01)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n# [1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.1.3...@alfalab/core-components-stepped-progress-bar@1.2.0) (2022-02-21)\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n-   **stepped-progress-bar:** add view prop, change bg color ([#1000](https://github.com/core-ds/core-components/issues/1000)) ([3e16926](https://github.com/core-ds/core-components/commit/3e1692673e694e3fef2913201e18e8a2e21fc980))\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.1.2...@alfalab/core-components-stepped-progress-bar@1.1.3) (2022-01-17)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.1.1...@alfalab/core-components-stepped-progress-bar@1.1.2) (2021-12-22)\n\n### Bug Fixes\n\n-   add missing vars imports ([#931](https://github.com/core-ds/core-components/issues/931)) ([35ba847](https://github.com/core-ds/core-components/commit/35ba847d39924e713166d79ae6d64444131794a1))\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-stepped-progress-bar@1.1.0...@alfalab/core-components-stepped-progress-bar@1.1.1) (2021-09-14)\n\n**Note:** Version bump only for package @alfalab/core-components-stepped-progress-bar\n\n# 1.1.0 (2021-07-23)\n\n### Features\n\n-   **calendar-input:** uses date-input ([#752](https://github.com/core-ds/core-components/issues/752)) ([509dba2](https://github.com/core-ds/core-components/commit/509dba26913ccf6df859a200aa476eeef1df2ddc))\n-   **stepped-progress-bar:** add component ([#747](https://github.com/core-ds/core-components/issues/747)) ([f82e9af](https://github.com/core-ds/core-components/commit/f82e9af075e12e5a34751efc5c7f427283e75c1b))\n"})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let steppedProgressBar=()=>react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"20px",position:"absolute",inset:"0px"},children:(0,jsx_runtime.jsx)(modern.SteppedProgressBar,{colors:colors,step:(0,addon_knobs_dist.number)("step",1),maxStep:(0,addon_knobs_dist.number)("maxStep",3),description:(0,addon_knobs_dist.text)("description","Выбор карты"),view:(0,addon_knobs_dist.select)("view",["positive","negative","attention","link","tertiary","secondary","primary","accent"])})})});steppedProgressBar.storyName="SteppedProgressBar",steppedProgressBar.parameters={storySource:{source:'React.createElement(() => {\n  const colors = select("colors", ["default", "inverted"], "default");\n  return <div style={{\n    backgroundColor: colors === "inverted" ? "var(--color-light-base-bg-primary-inverted)" : "transparent",\n    padding: "20px",\n    position: "absolute",\n    inset: "0px"\n  }}>\n                <SteppedProgressBar colors={colors} step={number("step", 1)} maxStep={number("maxStep", 3)} description={text("description", "\\u0412\\u044B\\u0431\\u043E\\u0440 \\u043A\\u0430\\u0440\\u0442\\u044B")} view={select("view", ["positive", "negative", "attention", "link", "tertiary", "secondary", "primary", "accent"])} />\n            </div>;\n})'}};let componentMeta={title:"Components/SteppedProgressBar",id:"SteppedProgressBar",component:modern.SteppedProgressBar,tags:["stories-mdx"],includeStories:["steppedProgressBar"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["steppedProgressBar"]},"./packages/stepped-progress-bar/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return SteppedProgressBar}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/typography/modern/index.js"),index_module={bar:"bar_wJodV",positive:"positive_UyTUX",attention:"attention_JSayg",negative:"negative_B2Edz",link:"link_hMYg8",tertiary:"tertiary_WECSl",secondary:"secondary_Q3A3q",primary:"primary_mMkwJ",accent:"accent_F2O2V"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StepBar=(0,react.memo)(function(_ref){var isDone=_ref.isDone,_ref$view=_ref.view,classNameStep=_ref.classNameStep;return(0,jsx_runtime.jsx)("span",{"data-test-id":isDone?"on":"off",className:classnames_default()(index_module.bar,isDone&&index_module[void 0===_ref$view?"positive":_ref$view],classNameStep)})});try{StepBar.displayName="StepBar",StepBar.__docgenInfo={description:"",displayName:"StepBar",props:{isDone:{defaultValue:null,description:"",name:"isDone",required:!0,type:{name:"boolean"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"negative"'},{value:'"positive"'},{value:'"attention"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"accent"'}]}},classNameStep:{defaultValue:null,description:"",name:"classNameStep",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/stepped-progress-bar/src/components/step-bar/Component.tsx#StepBar"]={docgenInfo:StepBar.__docgenInfo,name:"StepBar",path:"packages/stepped-progress-bar/src/components/step-bar/Component.tsx#StepBar"})}catch(__react_docgen_typescript_loader_error){}var src_index_module={component:"component_QqPy5",stepsContainer:"stepsContainer_2Yj9R",description:"description_UVIRd"},colorStyles={default:{bar:"bar_j7bXS",description:"description_V66fU"},inverted:{bar:"bar_mtaa8",description:"description_uAEDU"}},SteppedProgressBar=function(_ref){var maxStep=_ref.maxStep,description=_ref.description,_ref$step=_ref.step,step=void 0===_ref$step?0:_ref$step,view=_ref.view,dataTestId=_ref.dataTestId,_ref$colors=_ref.colors,colors=void 0===_ref$colors?"default":_ref$colors,className=_ref.className,validMaxSteps=maxStep<=0?1:maxStep,isViewString="string"==typeof view;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(src_index_module.component,className),"data-test-id":dataTestId,children:[(0,jsx_runtime.jsx)("div",{className:src_index_module.stepsContainer,children:Array.from(Array(validMaxSteps),function(_,index){return(0,jsx_runtime.jsx)(StepBar,{isDone:index<step,view:isViewString?view:null==view?void 0:view[index],classNameStep:colorStyles[colors].bar},index)})}),description&&(0,jsx_runtime.jsxs)(modern.Typography.Text,{tag:"div",className:classnames_default()(src_index_module.description,colorStyles[colors].description),view:"primary-small",children:["Шаг ",step," из ",maxStep,": ",description]})]})};try{SteppedProgressBar.displayName="SteppedProgressBar",SteppedProgressBar.__docgenInfo={description:"",displayName:"SteppedProgressBar",props:{maxStep:{defaultValue:null,description:"Общее количество шагов",name:"maxStep",required:!0,type:{name:"number"}},description:{defaultValue:null,description:"Постфикс описание под прогрессбаром",name:"description",required:!1,type:{name:"string"}},step:{defaultValue:{value:"0"},description:"Количество пройденных шагов",name:"step",required:!1,type:{name:"number"}},view:{defaultValue:null,description:"Цвет заполнения",name:"view",required:!1,type:{name:"SteppedProgressBarView | SteppedProgressBarView[]"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},colors:{defaultValue:{value:"default"},description:"Набор цветов для компонента",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/stepped-progress-bar/src/Component.tsx#SteppedProgressBar"]={docgenInfo:SteppedProgressBar.__docgenInfo,name:"SteppedProgressBar",path:"packages/stepped-progress-bar/src/Component.tsx#SteppedProgressBar"})}catch(__react_docgen_typescript_loader_error){}}}]);