"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[2140,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");const MDXContext=react.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react.useContext(MDXContext);return react.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=(mod=mdx_react_shim_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod)),((target,mod,secondTarget)=>{__copyProps(target,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")})(mdx_react_shim_exports,__webpack_require__("./node_modules/@mdx-js/react/index.js"),module.exports)},"./packages/spinner/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},spinner:function(){return spinner}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/spinner/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"У компонента есть стандартные размеры: 16, 24 и 48px."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const SIZES = ['m', 's', 'xs'];\n\nrender(\n    <Container>\n        <Row align='middle'>\n            {SIZES.map((size) => (\n                <div key={size} style={{ marginRight: 20 }}>\n                    <Spinner visible={true} size={size} />\n                </div>\n            ))}\n        </Row>\n    </Container>,\n);\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-в-других-компонентах",children:"Использование в других компонентах"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Часто используется в ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/button--docs",children:"Button"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"    <Container>\n        <div style={{marginBottom: 20}}>\n            <Button view=\"primary\" loading={true} size='m'>\n               Label\n            </Button>\n        </div>\n        <div>\n            <Button leftAddons={<Spinner visible={true} />} size='m'>\n                Дела делаются\n            </Button>\n        </div>\n    </Container>\n//MOBILE\n    <Container>\n        <Button view=\"primary\" block={true} loading={true} size='m'>\n            Label\n        </Button>\n        <br/>\n        <Button block={true} leftAddons={<Spinner visible={true} />} size='m'>\n            Дела делаются\n        </Button>\n    </Container>\n"})})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/spinner/src/Component.tsx"),index_module="@import '../../themes/src/default.css';\n\n:root {\n    --spinner-display-visible: inline-block;\n    --spinner-animation-duration: 0.8s;\n    --spinner-animation-timing-function: linear;\n}\n\n.spinner {\n    display: none;\n    animation: spin_animation var(--spinner-animation-duration) infinite\n        var(--spinner-animation-timing-function);\n}\n\n.visible {\n    display: var(--spinner-display-visible);\n    vertical-align: middle;\n}\n\n.xs {\n    width: 18px;\n    height: 18px;\n}\n\n.s {\n    width: 24px;\n    height: 24px;\n}\n\n.m {\n    width: 48px;\n    height: 48px;\n}\n\n@keyframes spin_animation {\n    from {\n        transform: rotate(0);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n}\n";function development_createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Spinner } from '@alfalab/core-components/spinner';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.$}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:index_module})]})}var development=function development_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},CHANGELOGraw_namespaceObject="# Change Log\n\n## 3.2.0\n\n### Minor Changes\n\n### [#931](https://github.com/core-ds/core-components/pull/931)\n\n-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.7\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.6\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n## 3.0.5\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.4\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.3\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@3.0.1...@alfalab/core-components-spinner@3.0.2) (2022-09-12)\n\n### Bug Fixes\n\n-   renamed default classnames ([#198](https://github.com/core-ds/core-components/issues/198)) ([bf22bba](https://github.com/core-ds/core-components/commit/bf22bbafbd16c14804316cba25a4026b85dde2f7))\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@3.0.0...@alfalab/core-components-spinner@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.3.1...@alfalab/core-components-spinner@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.3.0...@alfalab/core-components-spinner@2.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.3...@alfalab/core-components-spinner@2.3.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.2...@alfalab/core-components-spinner@2.2.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.1...@alfalab/core-components-spinner@2.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.0...@alfalab/core-components-spinner@2.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.1.0...@alfalab/core-components-spinner@2.2.0) (2022-07-11)\n\n### Features\n\n-   **spinner:** new size & inverted theme ([#123](https://github.com/core-ds/core-components/issues/123)) ([5568ab5](https://github.com/core-ds/core-components/commit/5568ab5183badaded723ebc5a608b20bf471c6bc))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.0.3...@alfalab/core-components-spinner@2.1.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.0.0...@alfalab/core-components-spinner@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.9...@alfalab/core-components-spinner@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.8...@alfalab/core-components-spinner@1.0.9) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.7...@alfalab/core-components-spinner@1.0.8) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.5...@alfalab/core-components-spinner@1.0.7) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.4...@alfalab/core-components-spinner@1.0.5) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.3...@alfalab/core-components-spinner@1.0.4) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.2...@alfalab/core-components-spinner@1.0.3) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n";function Component_stories_createMdxContent(props){const _components=Object.assign({div:"div"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Spinner",component:modern.Spinner,id:"Spinner"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Spinner",children:react.createElement((()=>{const colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"inverted"===colors?"var(--color-light-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{size:(0,addon_knobs_dist.select)("size",["xs","s","m"],"s"),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors})})}))}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Spinner",children:"Используется для индикации выполнения команды пользователя."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject})})]})}const spinner=()=>react.createElement((()=>{const colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{size:(0,addon_knobs_dist.select)("size",["xs","s","m"],"s"),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors})})}));spinner.storyName="Spinner",spinner.parameters={storySource:{source:'React.createElement(() => {\n  const colors = select("colors", ["default", "inverted"], "default");\n  return <div style={{\n    backgroundColor: colors === "inverted" ? "var(--color-light-bg-primary-inverted)" : "transparent",\n    padding: "8px",\n    position: "absolute",\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  }}>\n                <Spinner size={select("size", ["xs", "s", "m"], "s")} visible={boolean("visible", true)} colors={colors} />\n            </div>;\n})'}};const componentMeta={title:"Components/Spinner",id:"Spinner",component:modern.Spinner,tags:["stories-mdx"],includeStories:["spinner"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function Component_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}};var Component_stories=componentMeta;const __namedExportsOrder=["spinner"]},"./packages/spinner/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),index_module={spinner:"spinner_eJwLa",spin_animation:"spin_animation_XgBrZ",visible:"visible_w8m5L",xs:"xs_IJaS2",s:"s_SWmly",m:"m_zcaY6"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),colorStyles={default:{component:"component_eRftq"},inverted:{component:"component_uu1gU"}},CONFIG={xs:{padding:1,lineWidth:2,size:18},s:{padding:2,lineWidth:2,size:24},m:{padding:4,lineWidth:4,size:48}},Spinner=function Spinner(_ref){var _ref$size=_ref.size,sizeProp=void 0===_ref$size?"s":_ref$size,_ref$colors=_ref.colors,colors=void 0===_ref$colors?"default":_ref$colors,visible=_ref.visible,id=_ref.id,className=_ref.className,dataTestId=_ref.dataTestId,uniqId=(0,esm.Me)(),_CONFIG$sizeProp=CONFIG[sizeProp],size=_CONFIG$sizeProp.size,padding=_CONFIG$sizeProp.padding,lineWidth=_CONFIG$sizeProp.lineWidth,xStart=padding+lineWidth/2,xEnd=size-xStart,y=size/2,r=y-xStart,topGradientId="".concat(uniqId,"_top"),bottomGradientId="".concat(uniqId,"_bottom");return(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 ".concat(size," ").concat(size),fill:"none",xmlns:"http://www.w3.org/2000/svg",className:classnames_default()(index_module.spinner,colorStyles[colors].component,index_module[sizeProp],className,(0,defineProperty.Z)({},index_module.visible,visible)),"data-test-id":dataTestId,id:id,children:[(0,jsx_runtime.jsxs)("defs",{children:[(0,jsx_runtime.jsxs)("linearGradient",{id:topGradientId,x1:"0.05",children:[(0,jsx_runtime.jsx)("stop",{offset:"0.1",stopOpacity:"0",stopColor:"currentColor"}),(0,jsx_runtime.jsx)("stop",{offset:"1",stopOpacity:"0.3",stopColor:"currentColor"})]}),(0,jsx_runtime.jsxs)("linearGradient",{id:bottomGradientId,x1:"0.05",children:[(0,jsx_runtime.jsx)("stop",{offset:"0",stopOpacity:"1",stopColor:"currentColor"}),(0,jsx_runtime.jsx)("stop",{offset:"1",stopOpacity:"0.3",stopColor:"currentColor"})]})]}),(0,jsx_runtime.jsxs)("g",{strokeWidth:lineWidth,children:[(0,jsx_runtime.jsx)("path",{stroke:"url(#".concat(topGradientId,")"),d:"M".concat(xStart,",").concat(y," A").concat(r,",").concat(r," 0 0 1 ").concat(xEnd,",").concat(y)}),(0,jsx_runtime.jsx)("path",{stroke:"url(#".concat(bottomGradientId,")"),d:"M".concat(xEnd,",").concat(y," A").concat(r,",").concat(r," 0 0 1 ").concat(xStart,",").concat(y)}),(0,jsx_runtime.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",d:"M".concat(xStart,",").concat(y," A").concat(r,",").concat(r," 0 0 1 ").concat(xStart," ").concat(y)})]})]})};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{visible:{defaultValue:null,description:"Управление видимостью компонента",name:"visible",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Размер компонента",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Идентификатор компонента в DOM",name:"id",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},colors:{defaultValue:{value:"default"},description:"Палитра, в контексте которой используется спиннер",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/spinner/src/Component.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/spinner/src/Component.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}}}]);