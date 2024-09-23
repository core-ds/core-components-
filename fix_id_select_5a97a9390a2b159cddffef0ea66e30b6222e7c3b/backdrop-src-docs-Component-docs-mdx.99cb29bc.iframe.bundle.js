"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[6979,4240,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/backdrop/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},backdrop:function(){return backdrop}});var _backdrop$parameters,_backdrop$parameters2,_backdrop$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_backdrop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/backdrop/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Backdrop",component:_alfalab_core_components_backdrop__WEBPACK_IMPORTED_MODULE_2__.Backdrop,id:"Backdrop"},backdrop={name:"Backdrop",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_backdrop__WEBPACK_IMPORTED_MODULE_2__.Backdrop,{open:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("open",!1),invisible:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("invisible",!1),unmountOnExit:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("unmountOnExit",!1),children:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("children","")})}};__webpack_exports__.default=meta,backdrop.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},backdrop.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_backdrop$parameters=backdrop.parameters)||void 0===_backdrop$parameters?void 0:_backdrop$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'Backdrop',\n  render: () => {\n    return <Backdrop open={boolean('open', false)} invisible={boolean('invisible', false)} unmountOnExit={boolean('unmountOnExit', false)}>\n                {text('children', '')}\n            </Backdrop>;\n  }\n}"},null===(_backdrop$parameters2=backdrop.parameters)||void 0===_backdrop$parameters2?void 0:null===(_backdrop$parameters3=_backdrop$parameters2.docs)||void 0===_backdrop$parameters3?void 0:_backdrop$parameters3.source)})});let __namedExportsOrder=["backdrop"]},"./packages/backdrop/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/backdrop/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компонент поддерживает все параметры из ",(0,jsx_runtime.jsx)(_components.a,{href:"http://reactcommunity.org/react-transition-group/css-transition",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSSTransition"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [open, setOpen] = React.useState(false);\n\n    return (\n        <div style={{ zIndex: 1, position: 'relative' }}>\n            <Button \n                onClick={() => setOpen(!open)} \n                size='m' \n                block={isMobile()} \n                breakpoint={BREAKPOINT}\n            >\n                {open ? 'Закрыть Backdrop' : 'Показать Backdrop'}\n            </Button>\n            <Backdrop open={open} onClick={() => setOpen(false)} />\n        </div>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/backdrop/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Backdrop } from '@alfalab/core-components/backdrop';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.Backdrop}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../vars/src/index.css';\n\n:root {\n    --backdrop-visible-background: var(--color-light-overlay-default);\n    --backdrop-hidden-background: transparent;\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Backdrop",children:"Используется для затемнения фона при вызове модального слоя."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:'# Change Log\n\n## 3.4.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n## 3.4.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 3.3.0\n\n### Minor Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1352](https://github.com/core-ds/core-components/pull/1352)\n\n-   Добавлено новое свойство transparent, отвечающее за прозрачность бэкдропа. Свойство invisible помечено как deprecated\n\n## 3.2.0\n\n### Minor Changes\n\n### [#977](https://github.com/core-ds/core-components/pull/977)\n\n-   В компонентах Backdrop, BaseModal, BottomSheet, Modal, NavigationBar, Popover, Select, SelectWithTags, SidePanel, ToastPlate и Tooltip цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n### [#991](https://github.com/core-ds/core-components/pull/991)\n\n-   Исправлена проблема, из-за которой появлялся warning: "findDOMNode is deprecated"\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.7\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.6\n\n### Patch Changes\n\n### [#615](https://github.com/core-ds/core-components/pull/615)\n\n-   Проп invisible теперь привязан к пропу open CssTransitionGroup\n\n## 3.0.5\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.4\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.3\n\n### Patch Changes\n\n### [#470](https://github.com/core-ds/core-components/pull/470)\n\n-   Обновлена версия react-transition-group\n\n## 3.0.2\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@3.0.0...@alfalab/core-components-backdrop@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-backdrop\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.2.1...@alfalab/core-components-backdrop@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.2.0...@alfalab/core-components-backdrop@2.2.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.1.3...@alfalab/core-components-backdrop@2.2.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.1.2...@alfalab/core-components-backdrop@2.1.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-backdrop\n\n## [2.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.1.1...@alfalab/core-components-backdrop@2.1.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.1.0...@alfalab/core-components-backdrop@2.1.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-backdrop\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.0.3...@alfalab/core-components-backdrop@2.1.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@2.0.0...@alfalab/core-components-backdrop@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-backdrop\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@1.1.2...@alfalab/core-components-backdrop@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@1.1.1...@alfalab/core-components-backdrop@1.1.2) (2021-04-26)\n\n### Bug Fixes\n\n-   **drawer:** lost vars ([#632](https://github.com/core-ds/core-components/issues/632)) ([82a8e46](https://github.com/core-ds/core-components/commit/82a8e461fc16d4ae8b6d3d268c92f7dc969e81f8))\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-backdrop@1.1.0...@alfalab/core-components-backdrop@1.1.1) (2021-04-09)\n\n### Bug Fixes\n\n-   **backdrop:** styles ([82bdfa7](https://github.com/core-ds/core-components/commit/82bdfa7759240755f74bf12906c395d633f464e4))\n\n# 1.1.0 (2021-04-09)\n\n### Features\n\n-   **backdrop:** add component ([2b87958](https://github.com/core-ds/core-components/commit/2b87958e51449645c58bbd02552ce7a908c6bab8))\n'}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/backdrop/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Backdrop:function(){return Backdrop}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={backdrop:"backdrop_Qhs_t",appear:"appear_SCr4Z",enter:"enter_SsHt0",appearActive:"appearActive_OtF38",enterActive:"enterActive_Ge0VI",appearDone:"appearDone_YEkLR",enterDone:"enterDone_d2Cu_",exit:"exit_Jy9n9",exitActive:"exitActive_duZZz",exitDone:"exitDone_PGkvT",transparent:"transparent_z63Ax"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","open","invisible","timeout","children","onClose","dataTestId","transitionClassNames","transparent"],Backdrop=function(_ref){var className=_ref.className,_ref$open=_ref.open,_ref$invisible=_ref.invisible,_ref$timeout=_ref.timeout,children=_ref.children,onClose=_ref.onClose,dataTestId=_ref.dataTestId,_ref$transitionClassN=_ref.transitionClassNames,_ref$transparent=_ref.transparent,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),nodeRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)(CSSTransition.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({timeout:void 0===_ref$timeout?200:_ref$timeout,unmountOnExit:!0,classNames:void 0===_ref$transitionClassN?index_module:_ref$transitionClassN,in:!(void 0!==_ref$invisible&&_ref$invisible)&&void 0!==_ref$open&&_ref$open,appear:!0},restProps),{},{nodeRef:nodeRef,children:(0,jsx_runtime.jsx)("div",{ref:nodeRef,"aria-hidden":!0,onClick:onClose,"data-test-id":dataTestId,className:classnames_default()(index_module.backdrop,className,(0,defineProperty.Z)({},index_module.transparent,void 0!==_ref$transparent&&_ref$transparent)),children:children})}))};try{Backdrop.displayName="Backdrop",Backdrop.__docgenInfo={description:"",displayName:"Backdrop",props:{invisible:{defaultValue:{value:"false"},description:"Прозрачный бэкдроп\n@deprecated данное свойство больше не используется, временно оставлено для обратной совместимости\nИспользуйте свойство transparent",name:"invisible",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Управляет видимостью компонента",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Обработчик клика по бэкдропу",name:"onClose",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},transitionClassNames:{defaultValue:null,description:"Классы анимации\n\nhttp://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames",name:"transitionClassNames",required:!1,type:{name:"string | CSSTransitionClassNames"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},transparent:{defaultValue:{value:"false"},description:"Управляет прозрачностью бэкдроп",name:"transparent",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/backdrop/src/Component.tsx#Backdrop"]={docgenInfo:Backdrop.__docgenInfo,name:"Backdrop",path:"packages/backdrop/src/Component.tsx#Backdrop"})}catch(__react_docgen_typescript_loader_error){}}}]);