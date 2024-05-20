"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7457,569,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/portal/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},portal:function(){return portal}});var _portal$parameters,_portal$parameters2,_portal$parameters2$d,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@alfalab/icons-glyph/StarMIcon.js"),_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/button/modern/index.js"),_alfalab_core_components_space__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/space/modern/index.js"),_alfalab_core_components_portal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/portal/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Portal",component:_alfalab_core_components_portal__WEBPACK_IMPORTED_MODULE_4__.Portal,id:"Portal"},portal={name:"Portal",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState,2),show=_React$useState2[0],setShow=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_alfalab_core_components_space__WEBPACK_IMPORTED_MODULE_3__.Space,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:function(){return setShow(!show)},children:show?"Unmount children":"Mount children"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:show&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_portal__WEBPACK_IMPORTED_MODULE_4__.Portal,{getPortalContainer:function getPortalContainer(){return document.getElementById("portal-container")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_1__.StarMIcon,{})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:"Контейнер для контента портала"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"portal-container",style:{display:"flex",alignItems:"center",justifyContent:"center",width:240,height:60,border:"1px solid var(--color-light-border-secondary)",padding:"var(--gap-m)"}})]})}};__webpack_exports__.default=meta,portal.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},portal.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_portal$parameters=portal.parameters)||void 0===_portal$parameters?void 0:_portal$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'Portal',\n  render: () => {\n    const [show, setShow] = React.useState(false);\n    const handleClick = () => setShow(!show);\n    const styles = {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      width: 240,\n      height: 60,\n      border: '1px solid var(--color-light-border-secondary)',\n      padding: 'var(--gap-m)'\n    };\n    return <Space>\n                <Button onClick={handleClick}>\n                    {show ? 'Unmount children' : 'Mount children'}\n                </Button>\n                <div>\n                    {show && <Portal getPortalContainer={() => document.getElementById('portal-container')}>\n                            <StarMIcon />\n                        </Portal>}\n                </div>\n                <div>Контейнер для контента портала</div>\n                <div id='portal-container' style={styles} />\n            </Space>;\n  }\n}"},null===(_portal$parameters2=portal.parameters)||void 0===_portal$parameters2?void 0:null===(_portal$parameters2$d=_portal$parameters2.docs)||void 0===_portal$parameters2$d?void 0:_portal$parameters2$d.source)})});let __namedExportsOrder=["portal"]},"./packages/portal/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/portal/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [show, setShow] = React.useState(false);\n    const containerRef = React.useRef();\n\n    const handleClick = () => setShow(!show);\n\n    const styles = {\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'center',\n        width: 240,\n        height: 95,\n        border: '1px solid var(--color-light-border-secondary)',\n        borderRadius: 8,\n        marginTop: 6,\n    };\n\n    const styleText = {\n        color: 'var(--color-light-text-secondary)',\n        fontSize: '14px',\n        lineHeight: '18px',\n    }\n\n    return (\n        <Container>\n            <Button onClick={handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>\n            <div>\n                {show && (\n                    <Portal getPortalContainer={() => containerRef.current}>\n                        <StarMIcon />\n                    </Portal>\n                )}\n            </div>\n            <Gap size='xl'/>\n            <div style={styleText}>Контейнер для контента портала</div>\n            <div ref={containerRef} style={styles}/>\n        </Container>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/portal/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Portal } from '@alfalab/core-components/portal';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.Portal})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Portal",children:"Используется для рендера дочерних элементов в DOM-узел, который находится вне DOM-иерархии родительского компонента."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:'# Change Log\n\n## 3.2.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.1.5\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.1.4\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.1.3\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.1.2\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n## 3.1.1\n\n### Patch Changes\n\n### [#372](https://github.com/core-ds/core-components/pull/372)\n\n-   Исправлена ошибка "document is not defined" при immediateMount=true\n\n## 3.1.0\n\n### Minor Changes\n\n### [#306](https://github.com/core-ds/core-components/pull/306)\n\n-   В portal добавлен проп immediateMount, с помощью которого можно мгновенно отрендерить дочерние элементы через портал.\n-   В base-modal исправлена проблема с доступом к ref-ам контента, который рендерился через portal.<br />\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@3.0.0...@alfalab/core-components-portal@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.1.1...@alfalab/core-components-portal@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.1.0...@alfalab/core-components-portal@2.1.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.0.6...@alfalab/core-components-portal@2.1.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.0.5...@alfalab/core-components-portal@2.0.6) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n## [2.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.0.4...@alfalab/core-components-portal@2.0.5) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.0.3...@alfalab/core-components-portal@2.0.4) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n## [2.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.0.2...@alfalab/core-components-portal@2.0.3) (2022-06-28)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@2.0.0...@alfalab/core-components-portal@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@1.4.6...@alfalab/core-components-portal@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.4.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@1.4.5...@alfalab/core-components-portal@1.4.6) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n## [1.4.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@1.4.3...@alfalab/core-components-portal@1.4.5) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.4.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@1.4.2...@alfalab/core-components-portal@1.4.3) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n## [1.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@1.4.1...@alfalab/core-components-portal@1.4.2) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n\n## [1.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-portal@1.4.0...@alfalab/core-components-portal@1.4.1) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-portal\n'}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/portal/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Portal:function(){return Portal}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),PORTAL_CONTAINER_ATTRIBUTE="alfa-portal-container";function createPortalContainer(){var portalContainer=document.createElement("div");return portalContainer.setAttribute(PORTAL_CONTAINER_ATTRIBUTE,""),document.body.appendChild(portalContainer),portalContainer}var getDefaultPortalContainer=function(){return document.querySelector("[".concat(PORTAL_CONTAINER_ATTRIBUTE,"]"))||createPortalContainer()};function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}var Portal=(0,react.forwardRef)(function(_ref,ref){var _ref$getPortalContain=_ref.getPortalContainer,getPortalContainer=void 0===_ref$getPortalContain?getDefaultPortalContainer:_ref$getPortalContain,_ref$immediateMount=_ref.immediateMount,immediateMount=void 0!==_ref$immediateMount&&_ref$immediateMount,children=_ref.children,_useState=(0,react.useState)(function(){return"undefined"!=typeof window&&immediateMount?getPortalContainer():null}),_useState2=(0,slicedToArray.Z)(_useState,2),mountNode=_useState2[0],setMountNode=_useState2[1];return(0,react.useEffect)(function(){setMountNode(getPortalContainer())},[getPortalContainer]),(0,react.useEffect)(function(){return mountNode?(setRef(ref,mountNode),function(){setRef(ref,null)}):function(){return null}},[ref,mountNode]),mountNode?(0,react_dom.createPortal)(children,mountNode):mountNode});try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"Контент",name:"children",required:!1,type:{name:"ReactNode"}},getPortalContainer:{defaultValue:{value:"(): Element =>\n    document.querySelector(`[${PORTAL_CONTAINER_ATTRIBUTE}]`) || createPortalContainer()"},description:"Функция, возвращающая контейнер, в который будут рендериться дочерние элементы",name:"getPortalContainer",required:!1,type:{name:"(() => Element)"}},immediateMount:{defaultValue:{value:"false"},description:"Немедленно отрендерить дочерние элементы (false - контент будет отрендерен на след. рендер).",name:"immediateMount",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/portal/src/Component.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"packages/portal/src/Component.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}}}]);