"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[6131],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/progress-bar/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_stories},progressBar:function(){return progressBar}});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/progress-bar/modern/index.js"),Component=__webpack_require__("./packages/progress-bar/src/Component.tsx"),package_namespaceObject={i8:"3.0.4"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({p:"p",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Отображает линейный индикатор прогресса (0-100%)."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<ProgressBar value={40} />\n"})})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},CHANGELOGraw_namespaceObject="# Change Log\n\n## 3.0.4\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.3\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.2\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@3.0.0...@alfalab/core-components-progress-bar@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.3.1...@alfalab/core-components-progress-bar@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.3.0...@alfalab/core-components-progress-bar@2.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.3...@alfalab/core-components-progress-bar@2.3.0) (2022-08-04)\n\n### Bug Fixes\n\n-   **progress-bar:** mechanics of progress line fixed ([#169](https://github.com/core-ds/core-components/issues/169)) ([4b46836](https://github.com/core-ds/core-components/commit/4b4683628ea4fd9da178799dfca8b287c0776ff1))\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.2...@alfalab/core-components-progress-bar@2.2.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.1...@alfalab/core-components-progress-bar@2.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.2.0...@alfalab/core-components-progress-bar@2.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.1.2...@alfalab/core-components-progress-bar@2.2.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.0.1...@alfalab/core-components-progress-bar@2.1.0) (2022-02-21)\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n-   **progress-bar:** add size prop, additional views, new bg color ([#996](https://github.com/core-ds/core-components/issues/996)) ([63702f7](https://github.com/core-ds/core-components/commit/63702f7d9637e1fe3da502d7c91c4284453b3b48))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@2.0.0...@alfalab/core-components-progress-bar@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.6...@alfalab/core-components-progress-bar@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.5...@alfalab/core-components-progress-bar@1.1.6) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.4...@alfalab/core-components-progress-bar@1.1.5) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.2...@alfalab/core-components-progress-bar@1.1.4) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.1.0...@alfalab/core-components-progress-bar@1.1.2) (2021-03-16)\n\n### Bug Fixes\n\n-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))\n\n# [1.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.9...@alfalab/core-components-progress-bar@1.1.0) (2021-03-15)\n\n### Features\n\n-   **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))\n\n## [1.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.8...@alfalab/core-components-progress-bar@1.0.9) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.7...@alfalab/core-components-progress-bar@1.0.8) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n\n## [1.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-progress-bar@1.0.6...@alfalab/core-components-progress-bar@1.0.7) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-progress-bar\n",index_module="@import '../../vars/src/colors-indigo.css';\n@import '../../themes/src/default.css';\n\n:root {\n    /* bg */\n    --progressbar-bg-color: var(--color-light-bg-primary-inverted-alpha-10);\n\n    /* positive */\n    --progressbar-positive-color: var(--color-light-graphic-positive);\n\n    /* negative */\n    --progressbar-negative-color: var(--color-light-graphic-negative);\n\n    /* attention */\n    --progressbar-attention-color: var(--color-light-graphic-attention);\n\n    /* link */\n    --progressbar-link-color: var(--color-light-graphic-link);\n\n    /* tertiary */\n    --progressbar-tertiary-color: var(--color-light-graphic-tertiary);\n\n    /* secondary */\n    --progressbar-secondary-color: var(--color-light-graphic-secondary);\n\n    /* primary */\n    --progressbar-primary-color: var(--color-light-graphic-primary);\n\n    /* accent */\n    --progressbar-accent-color: var(--color-light-graphic-accent);\n}\n\n.container {\n    background: var(--progressbar-bg-color);\n\n    display: flex;\n    overflow: hidden;\n\n    &.s {\n        border-radius: var(--border-radius-s);\n        height: 4px;\n    }\n\n    &.m {\n        border-radius: var(--border-radius-m);\n        height: 8px;\n    }\n}\n\n.filled {\n    border-radius: inherit;\n    width: 100%;\n    transition: transform 0.4s ease;\n\n    &.positive {\n        background: var(--progressbar-positive-color);\n    }\n\n    &.negative {\n        background: var(--progressbar-negative-color);\n    }\n\n    &.attention {\n        background: var(--progressbar-attention-color);\n    }\n\n    &.link {\n        background: var(--progressbar-link-color);\n    }\n\n    &.tertiary {\n        background: var(--progressbar-tertiary-color);\n    }\n\n    &.secondary {\n        background: var(--progressbar-secondary-color);\n    }\n\n    &.primary {\n        background: var(--progressbar-primary-color);\n    }\n\n    &.accent {\n        background: var(--progressbar-accent-color);\n    }\n}\n";function Component_stories_createMdxContent(props){const _components=Object.assign({pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/ProgressBar",component:modern.ProgressBar,id:"ProgressBar"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"ProgressBar",children:(0,jsx_runtime.jsx)(modern.ProgressBar,{value:(0,addon_knobs_dist.number)("value",40),view:(0,addon_knobs_dist.select)("view",["positive","negative","attention","link","tertiary","secondary","primary","accent"]),size:(0,addon_knobs_dist.select)("size",["s","m"],"m")})}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"ProgressBar",version:package_namespaceObject.i8,package:"@alfalab/core-components/progress-bar",design:"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?node-id=781%3A30260"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ProgressBar } from '@alfalab/core-components/progress-bar';\n"})}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),props:(0,jsx_runtime.jsx)(dist.$4,{of:Component.k}),cssVars:(0,jsx_runtime.jsx)(blocks.ZV,{css:index_module}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject})})]})}const progressBar=()=>(0,jsx_runtime.jsx)(modern.ProgressBar,{value:(0,addon_knobs_dist.number)("value",40),view:(0,addon_knobs_dist.select)("view",["positive","negative","attention","link","tertiary","secondary","primary","accent"]),size:(0,addon_knobs_dist.select)("size",["s","m"],"m")});progressBar.storyName="ProgressBar",progressBar.parameters={storySource:{source:'<ProgressBar value={number("value", 40)} view={select("view", ["positive", "negative", "attention", "link", "tertiary", "secondary", "primary", "accent"])} size={select("size", ["s", "m"], "m")} />'}};const componentMeta={title:"Components/ProgressBar",id:"ProgressBar",component:modern.ProgressBar,tags:["stories-mdx"],includeStories:["progressBar"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function Component_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}};var Component_stories=componentMeta},"./.storybook/blocks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Eg:function(){return Changelog},yt:function(){return ComponentHeader},ZV:function(){return CssVars},mQ:function(){return Tabs}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module_changelog="changelog_UmYwo",index_module_root="root_GgHKe",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Changelog=function Changelog(_ref){var content=_ref.content,_ref$root=_ref.root,root=void 0!==_ref$root&&_ref$root;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module_changelog,root&&index_module_root,"sb-unstyled"),children:content})};try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},root:{defaultValue:{value:"false"},description:"",name:"root",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/changelog/changelog.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:".storybook/blocks/changelog/changelog.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),modern=__webpack_require__("./dist/link/modern/index.js"),esm=__webpack_require__("./node_modules/storybook-addon-live-examples/dist/esm/index.js"),css_vars_module_cssVars="cssVars_OsBA8",rootBlockRegexp=/:root {([^}]*)}/g,mixinRegexp=/(?:@define-mixin)(.*{[^}]*})/g,CssVars=function CssVars(_ref){var css=_ref.css,title=_ref.title,expandable=_ref.expandable,_ref$type=_ref.type,type=void 0===_ref$type?"vars":_ref$type,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),vars=_useState2[0],setVars=_useState2[1],_useState3=(0,react.useState)(!expandable),_useState4=(0,slicedToArray.Z)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],isVars="vars"===type,regexp=isVars?rootBlockRegexp:mixinRegexp;return(0,react.useEffect)((function(){for(var rootBlockMatch=regexp.exec(css),rootBlocks=[];rootBlockMatch;)rootBlocks.push(rootBlockMatch[1]),rootBlockMatch=regexp.exec(css);var result=rootBlocks.reduce((function(acc,item,index){var divider=index===rootBlocks.length-1?"":"\n";return"".concat(acc).concat(item).concat(divider)}),isVars?":root {":"");isVars&&(result+="}"),setVars(result)}),[]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",css_vars_module_cssVars),children:[title&&(0,jsx_runtime.jsx)("h2",{className:classnames_default()("sbdocs","sbdocs-h2"),children:title}),vars&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[expandable&&(0,jsx_runtime.jsx)(modern.Link,{view:"default",onClick:function onClick(){return setOpen(!open)},pseudo:!0,children:open?"Скрыть":"Показать"}),open&&(0,jsx_runtime.jsx)(esm.en,{language:"css",code:vars,live:!1})]})]})};try{CssVars.displayName="CssVars",CssVars.__docgenInfo={description:"",displayName:"CssVars",props:{css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"vars"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vars"'},{value:'"mixins"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/css-vars/css-vars.tsx#CssVars"]={docgenInfo:CssVars.__docgenInfo,name:"CssVars",path:".storybook/blocks/css-vars/css-vars.tsx#CssVars"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),space_modern=__webpack_require__("./dist/space/modern/index.js"),dist_esm=__webpack_require__("./node_modules/@alfalab/utils/dist/esm/index.js"),GithubIcon=__webpack_require__("./.storybook/components/icons/GithubIcon.jsx"),usages_namespaceObject=JSON.parse('{"updatedAt":1671683530526,"withSuffix":{"projects":0,"imports":0,"search":"withSuffix"},"Typography":{"projects":149,"imports":3111,"search":"Typography"},"Tooltip":{"projects":106,"imports":288,"search":"Tooltip*"},"ToastPlate":{"projects":1,"imports":1,"search":"ToastPlate"},"Toast":{"projects":14,"imports":27,"search":"Toast"},"TimeInput":{"projects":0,"imports":0,"search":"TimeInput"},"Textarea":{"projects":45,"imports":74,"search":"Textarea"},"Tag":{"projects":77,"imports":211,"search":"Tag"},"Tabs":{"projects":60,"imports":89,"search":"Tabs*"},"Table":{"projects":34,"imports":134,"search":"Table"},"Switch":{"projects":40,"imports":87,"search":"Switch"},"Steps":{"projects":1,"imports":2,"search":"Steps"},"SteppedProgressBar":{"projects":2,"imports":2,"search":"SteppedProgressBar"},"Status":{"projects":39,"imports":84,"search":"Status"},"Stack":{"projects":1,"imports":1,"search":"Stack"},"Spinner":{"projects":87,"imports":227,"search":"Spinner"},"Space":{"projects":69,"imports":315,"search":"Space"},"SliderInput":{"projects":15,"imports":19,"search":"SliderInput"},"Slider":{"projects":1,"imports":1,"search":"Slider"},"Skeleton":{"projects":68,"imports":354,"search":"Skeleton"},"SidePanel":{"projects":7,"imports":17,"search":"SidePanel*"},"SelectWithTags":{"projects":10,"imports":12,"search":"SelectWithTags"},"Select":{"projects":97,"imports":263,"search":"Select*"},"Scrollbar":{"projects":2,"imports":5,"search":"Scrollbar"},"Radio":{"projects":47,"imports":105,"search":"Radio"},"RadioGroup":{"projects":64,"imports":191,"search":"RadioGroup"},"PureInput":{"projects":0,"imports":0,"search":"PureInput"},"PureCell":{"projects":12,"imports":65,"search":"PureCell"},"ProgressBar":{"projects":11,"imports":12,"search":"ProgressBar"},"Portal":{"projects":4,"imports":5,"search":"Portal"},"Popover":{"projects":20,"imports":45,"search":"Popover"},"Plate":{"projects":63,"imports":214,"search":"Plate"},"PickerButton":{"projects":20,"imports":24,"search":"PickerButton*"},"PhoneInput":{"projects":30,"imports":50,"search":"PhoneInput"},"PasswordInput":{"projects":5,"imports":9,"search":"PasswordInput"},"PatternLock":{"projects":0,"imports":0,"search":"PatternLock"},"PassCode":{"projects":0,"imports":0,"search":"PassCode"},"Pagination":{"projects":7,"imports":8,"search":"Pagination"},"NotificationManager":{"projects":22,"imports":22,"search":"NotificationManager"},"Notification":{"projects":36,"imports":48,"search":"Notification"},"Mq":{"projects":9,"imports":21,"search":"Mq"},"Modal":{"projects":123,"imports":346,"search":"Modal*"},"MaskedInput":{"projects":39,"imports":106,"search":"MaskedInput"},"Loader":{"projects":34,"imports":63,"search":"Loader"},"ListHeader":{"projects":7,"imports":8,"search":"ListHeader"},"List":{"projects":51,"imports":140,"search":"List"},"Link":{"projects":113,"imports":535,"search":"Link"},"KeyboardFocusable":{"projects":3,"imports":3,"search":"KeyboardFocusable"},"IntlPhoneInput":{"projects":1,"imports":1,"search":"IntlPhoneInput"},"InputAutocomplete":{"projects":62,"imports":126,"search":"InputAutocomplete*"},"Input":{"projects":89,"imports":361,"search":"Input"},"IconView":{"projects":0,"imports":0,"search":"IconView"},"IconButton":{"projects":76,"imports":227,"search":"IconButton"},"HatchingProgressBar":{"projects":1,"imports":1,"search":"HatchingProgressBar"},"Grid":{"projects":61,"imports":445,"search":"Grid"},"Gap":{"projects":0,"imports":0,"search":"Gap"},"Gallery":{"projects":2,"imports":4,"search":"Gallery"},"FormControl":{"projects":3,"imports":3,"search":"FormControl"},"FilterTag":{"projects":4,"imports":16,"search":"FilterTag"},"FileUploadItem":{"projects":17,"imports":20,"search":"FileUploadItem"},"Dropzone":{"projects":9,"imports":11,"search":"Dropzone"},"Drawer":{"projects":18,"imports":25,"search":"Drawer"},"Divider":{"projects":48,"imports":131,"search":"Divider"},"DateTimeInput":{"projects":0,"imports":0,"search":"DateTimeInput"},"DateRangeInput":{"projects":0,"imports":0,"search":"DateRangeInput"},"DateInput":{"projects":5,"imports":5,"search":"DateInput"},"CustomButton":{"projects":1,"imports":2,"search":"CustomButton"},"ConfirmationV1":{"projects":1,"imports":1,"search":"ConfirmationV1"},"Confirmation":{"projects":17,"imports":29,"search":"Confirmation*"},"Comment":{"projects":1,"imports":3,"search":"Comment"},"Collapse":{"projects":44,"imports":66,"search":"Collapse"},"CodeInput":{"projects":1,"imports":1,"search":"CodeInput"},"CircularProgressBar":{"projects":11,"imports":16,"search":"CircularProgressBar"},"CheckboxGroup":{"projects":21,"imports":37,"search":"CheckboxGroup"},"Checkbox":{"projects":74,"imports":197,"search":"Checkbox"},"Chart":{"projects":1,"imports":1,"search":"Chart"},"CDNIcon":{"projects":13,"imports":55,"search":"CDNIcon"},"CardImage":{"projects":4,"imports":4,"search":"CardImage"},"CalendarWithSkeleton":{"projects":1,"imports":1,"search":"CalendarWithSkeleton"},"CalendarRange":{"projects":10,"imports":17,"search":"CalendarRange"},"CalendarInput":{"projects":40,"imports":92,"search":"CalendarInput*"},"Calendar":{"projects":9,"imports":19,"search":"Calendar*"},"Button":{"projects":155,"imports":1690,"search":"Button"},"BottomSheet":{"projects":22,"imports":43,"search":"BottomSheet"},"BaseModal":{"projects":2,"imports":2,"search":"BaseModal"},"BankCard":{"projects":1,"imports":1,"search":"BankCard"},"Badge":{"projects":66,"imports":168,"search":"Badge"},"AmountInput":{"projects":36,"imports":63,"search":"AmountInput"},"Backdrop":{"projects":4,"imports":4,"search":"Backdrop"},"Amount":{"projects":40,"imports":143,"search":"Amount"},"Alert":{"projects":60,"imports":182,"search":"Alert"},"Attach":{"projects":12,"imports":13,"search":"Attach"},"ActionButton":{"projects":1,"imports":1,"search":"ActionButton"}}'),ComponentHeader_module_component="component_qx5zQ",ComponentHeader_module_text="text_TIocB",ComponentHeader_module_textMobile="textMobile_d_rnY",ComponentHeader_module_info="info_iGRHP",ComponentHeader_module_commonLink="commonLink_WJRCZ",ComponentHeader_module_links="links_kuMT8",ComponentHeader_module_usageLink="usageLink_ilI5I",ComponentHeader_module_github="github_ks4z8",ComponentHeader_module_design="design_NpKuj",mq_modern=__webpack_require__("./dist/mq/modern/index.js"),ComponentHeader=function ComponentHeader(_ref){var _usages$name,_usages$name2,_usages$name3,_usages$name4,_usages$name5,_usages$name6,name=_ref.name,design=_ref.design,children=_ref.children,_useMatchMedia=(0,mq_modern.useMatchMedia)("--tablet-m"),isDesktop=(0,slicedToArray.Z)(_useMatchMedia,1)[0],packageName=name.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase(),githubLink="https://github.com/core-ds/core-components/tree/master/packages/".concat(packageName),Title=isDesktop?typography_modern.Typography.Title:typography_modern.Typography.TitleMobile;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",ComponentHeader_module_component),children:[(0,jsx_runtime.jsx)(Title,{tag:"h1",view:"xlarge",children:name}),children&&(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{tag:"p",view:"primary-medium",className:classnames_default()(ComponentHeader_module_text,(0,defineProperty.Z)({},ComponentHeader_module_textMobile,!isDesktop)),children:children}),(0,jsx_runtime.jsxs)("div",{className:ComponentHeader_module_links,children:[(0,jsx_runtime.jsx)("a",{className:classnames_default()(ComponentHeader_module_design,(0,defineProperty.Z)({},ComponentHeader_module_commonLink,!design)),href:design||"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components",target:"_blank",children:"Figma"}),(0,jsx_runtime.jsxs)("a",{className:ComponentHeader_module_github,href:githubLink,target:"_blank",children:[(0,jsx_runtime.jsx)(GithubIcon.E,{fill:"var(--color-light-graphic-primary)"}),"Github"]})]}),(0,jsx_runtime.jsx)(space_modern.Space,{direction:"horizontal",align:"center",className:ComponentHeader_module_info,children:(null===(_usages$name=usages_namespaceObject[name])||void 0===_usages$name?void 0:_usages$name.projects)>0&&(0,jsx_runtime.jsxs)(typography_modern.Typography.Text,{view:"primary-small",color:"secondary",children:["Используется в"," ",(0,jsx_runtime.jsxs)(modern.Link,{href:"http://design/design-system-usage/usage-chart?component=".concat(null===(_usages$name2=usages_namespaceObject[name])||void 0===_usages$name2?void 0:_usages$name2.search),target:"_blank",view:"secondary",underline:!1,title:"Необходимо подключение к VPN",className:ComponentHeader_module_usageLink,children:[null===(_usages$name3=usages_namespaceObject[name])||void 0===_usages$name3?void 0:_usages$name3.projects," ",(0,dist_esm._6)(null===(_usages$name4=usages_namespaceObject[name])||void 0===_usages$name4?void 0:_usages$name4.projects,"проекте","проектах","проектах")]})," и ","~",null===(_usages$name5=usages_namespaceObject[name])||void 0===_usages$name5?void 0:_usages$name5.imports," ",(0,dist_esm._6)(null===(_usages$name6=usages_namespaceObject[name])||void 0===_usages$name6?void 0:_usages$name6.imports,"файле","файлах","файлах")]})})]})};try{ComponentHeader.displayName="ComponentHeader",ComponentHeader.__docgenInfo={description:"",displayName:"ComponentHeader",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"",name:"design",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"]={docgenInfo:ComponentHeader.__docgenInfo,name:"ComponentHeader",path:".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./.storybook/blocks/grid/index.ts");var _TabTitle,tabs_modern=__webpack_require__("./dist/tabs/modern/index.js"),tabs_index_module_tabs="tabs_BRA6G",TabName=function(TabName){return TabName.DESCRIPTION="DESCRIPTION",TabName.PROPS="PROPS",TabName.CSS_VARS="CSS_VARS",TabName.CHANGELOG="CHANGELOG",TabName.DEVELOPMENT="DEVELOPMENT",TabName}(TabName||{}),TabTitle=(_TabTitle={},(0,defineProperty.Z)(_TabTitle,TabName.DESCRIPTION,"Описание"),(0,defineProperty.Z)(_TabTitle,TabName.PROPS,"Свойства"),(0,defineProperty.Z)(_TabTitle,TabName.CSS_VARS,"CSS-переменные"),(0,defineProperty.Z)(_TabTitle,TabName.CHANGELOG,"Обновления"),(0,defineProperty.Z)(_TabTitle,TabName.DEVELOPMENT,"Разработчику"),_TabTitle),Tabs=function Tabs(_ref){var description=_ref.description,props=_ref.props,cssVars=_ref.cssVars,changelog=_ref.changelog,_ref$defaultSelected=_ref.defaultSelected,defaultSelected=void 0===_ref$defaultSelected?TabName.DESCRIPTION:_ref$defaultSelected,development=_ref.development,_useState=(0,react.useState)(defaultSelected),_useState2=(0,slicedToArray.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],handleChange=(0,react.useCallback)((function(_,_ref2){var selectedId=_ref2.selectedId;setSelected(selectedId)}),[]),tabs=(0,react.useMemo)((function(){return function renderTabs(){return[(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DESCRIPTION],id:TabName.DESCRIPTION,children:description},"description"),props?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.PROPS],id:TabName.PROPS,children:props},"props"):null,cssVars?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CSS_VARS],id:TabName.CSS_VARS,children:cssVars},"css-vars"):null,development?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DEVELOPMENT],id:TabName.DEVELOPMENT,children:development},"development"):null,changelog?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CHANGELOG],id:TabName.CHANGELOG,children:(0,jsx_runtime.jsx)("div",{style:{marginTop:"32px"},children:(0,jsx_runtime.jsx)(Changelog,{content:changelog})})},"changelog"):null].filter(react.isValidElement)}()}),[description,props,cssVars]);return(0,jsx_runtime.jsx)(tabs_modern.TabsResponsive,{className:"sb-unstyled",selectedId:selected,onChange:handleChange,containerClassName:tabs_index_module_tabs,children:tabs})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}},props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"ReactNode"}},cssVars:{defaultValue:null,description:"",name:"cssVars",required:!1,type:{name:"ReactNode"}},changelog:{defaultValue:null,description:"",name:"changelog",required:!1,type:{name:"string"}},defaultSelected:{defaultValue:{value:"TabName.DESCRIPTION"},description:"",name:"defaultSelected",required:!1,type:{name:"enum",value:[{value:'"DESCRIPTION"'},{value:'"PROPS"'},{value:'"CSS_VARS"'},{value:'"CHANGELOG"'},{value:'"DEVELOPMENT"'}]}},development:{defaultValue:null,description:"",name:"development",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/tabs/component.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:".storybook/blocks/tabs/component.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/icons/GithubIcon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return GithubIcon}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GithubIcon=function GithubIcon(_ref){var _ref$fill=_ref.fill,fill=void 0===_ref$fill?"#24292E":_ref$fill,_ref$width=_ref.width,width=void 0===_ref$width?32:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?32:_ref$height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 32 32",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:fill})})};GithubIcon.__docgenInfo={description:"",methods:[],displayName:"GithubIcon",props:{fill:{defaultValue:{value:"'#24292E'",computed:!1},required:!1},width:{defaultValue:{value:"32",computed:!1},required:!1},height:{defaultValue:{value:"32",computed:!1},required:!1}}}},"./packages/progress-bar/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{k:function(){return ProgressBar}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={container:"container_Vw_mp",s:"s_cYLYP",m:"m_Clpeu",filled:"filled_seaxe",positive:"positive_t3AFB",negative:"negative_TGd44",attention:"attention_RUoag",link:"link_mMva0",tertiary:"tertiary_KaD3G",secondary:"secondary_m4fgZ",primary:"primary_dBH6i",accent:"accent_LLX5M"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProgressBar=react.forwardRef((function(_ref,ref){var className=_ref.className,value=_ref.value,_ref$view=_ref.view,view=void 0===_ref$view?"positive":_ref$view,_ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,dataTestId=_ref.dataTestId,translateX=Math.max(-100,Math.min(0,value-100));return(0,jsx_runtime.jsx)("div",{role:"progressbar","aria-valuenow":Math.round(value),"aria-valuemin":0,"aria-valuemax":100,className:classnames_default()(index_module.container,index_module[size],className),"data-test-id":dataTestId,ref:ref,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.filled,index_module[view]),style:{transform:"translateX(".concat(translateX,"%)")}})})}));try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{value:{defaultValue:null,description:"Значение заполненной части 0-100",name:"value",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"Css-класс для стилизации",name:"className",required:!1,type:{name:"string"}},view:{defaultValue:{value:"positive"},description:"Цвет заполнения",name:"view",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"attention"'},{value:'"link"'},{value:'"accent"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"m"},description:"Размер компонента",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},dataTestId:{defaultValue:null,description:"Id компонента для тестов",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-bar/src/Component.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"packages/progress-bar/src/Component.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=progress-bar-src-docs-Component-stories-mdx.8b6f43ae.iframe.bundle.js.map