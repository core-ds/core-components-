"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[1461,809,1341],{"./node_modules/@alfalab/core-components/plate/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return Plate}});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@alfalab/core-components/mq/esm/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon_button_esm=__webpack_require__("./node_modules/@alfalab/core-components/icon-button/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),ChevronDownMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ChevronDownMIcon.js"),CrossMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/CrossMIcon.js"),ButtonList=function(_a){var buttons=_a.buttons,buttonClassName=_a.buttonClassName,containerClassName=_a.containerClassName;return Array.isArray(buttons)&&buttons.length>0?react.createElement("div",{className:containerClassName},buttons.map(function(button,index){return button?react.cloneElement(button,{key:index,size:"xxs",view:0===index?"secondary":"link",className:classnames_default()(button.props.className,buttonClassName)}):null})):react.createElement("div",{className:containerClassName},buttons)},commonStyles={component:"plate__component_1ixn5",foldable:"plate__foldable_1ixn5",focused:"plate__focused_1ixn5",inner:"plate__inner_1ixn5",rounded:"plate__rounded_1ixn5",noBorder:"plate__noBorder_1ixn5",shadow:"plate__shadow_1ixn5",common:"plate__common_1ixn5",negative:"plate__negative_1ixn5",positive:"plate__positive_1ixn5",attention:"plate__attention_1ixn5",custom:"plate__custom_1ixn5",rect:"plate__rect_1ixn5",isHidden:"plate__isHidden_1ixn5",leftAddons:"plate__leftAddons_1ixn5",rightAddons:"plate__rightAddons_1ixn5",subAddons:"plate__subAddons_1ixn5",rowReverse:"plate__rowReverse_1ixn5",bold:"plate__bold_1ixn5",light:"plate__light_1ixn5",content:"plate__content_1ixn5",isFolded:"plate__isFolded_1ixn5",contentContainer:"plate__contentContainer_1ixn5",withoutTitle:"plate__withoutTitle_1ixn5",limitWidth:"plate__limitWidth_1ixn5",description:"plate__description_1ixn5",closer:"plate__closer_1ixn5",folder:"plate__folder_1ixn5",containerButton:"plate__containerButton_1ixn5",button:"plate__button_1ixn5",rowLimit1:"plate__rowLimit1_1ixn5",rowLimit2:"plate__rowLimit2_1ixn5",rowLimit3:"plate__rowLimit3_1ixn5"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/components/base-plate/index.css");var BasePlate=(0,react.forwardRef)(function(_a,ref){var _b,_c,_d,_e,_f,hasCloser=_a.hasCloser,_g=_a.foldable,foldedProp=_a.folded,_h=_a.defaultFolded,_j=_a.rounded,rounded=void 0===_j||_j,_k=_a.limitContentWidth,leftAddons=_a.leftAddons,subAddons=_a.subAddons,children=_a.children,buttons=_a.buttons,title=_a.title,_l=_a.titleView,titleView=void 0===_l?"bold":_l,_m=_a.view,view=void 0===_m?"common":_m,_o=_a.border,_p=_a.shadow,className=_a.className,buttonsClassName=_a.buttonsClassName,contentClassName=_a.contentClassName,subAddonsClassName=_a.subAddonsClassName,dataTestId=_a.dataTestId,onClick=_a.onClick,onClose=_a.onClose,onToggle=_a.onToggle,rowLimit=_a.rowLimit,_q=_a.styles,styles=void 0===_q?{}:_q,plateRef=(0,react.useRef)(null),contentRef=(0,react.useRef)(null),subAddonsRef=(0,react.useRef)(null),focused=(0,dist_esm.KK)(plateRef,"keyboard")[0],_r=(0,react.useState)(!1),isHidden=_r[0],setIsHidden=_r[1],_s=(0,react.useState)(void 0===_h||_h),foldedState=_s[0],setFoldedState=_s[1],uncontrolled=void 0===foldedProp,foldable=!!title&&!!children&&void 0!==_g&&_g,folded=uncontrolled?foldedState:foldedProp,hasButtons=!!buttons&&"boolean"!=typeof buttons,hasContent=children||hasButtons,hasAnyAddons=leftAddons||subAddons||foldable||hasCloser,rowLimitStyles=rowLimit&&commonStyles["rowLimit".concat(rowLimit)],handleClick=(0,react.useCallback)(function(event){var target=event.target,eventInsideComponent=plateRef.current&&plateRef.current.contains(target),eventInsideContent=contentRef.current&&contentRef.current.contains(target),eventInsideSubAddons=subAddonsRef.current&&subAddonsRef.current.contains(target),clickSimilarKeys=["Enter"," "].includes(event.key),shouldChangeIsFolded=eventInsideComponent&&!eventInsideContent&&!eventInsideSubAddons&&("click"===event.type||clickSimilarKeys);foldable&&shouldChangeIsFolded&&(uncontrolled&&setFoldedState(!foldedState),onToggle&&onToggle(event,{folded:!(uncontrolled?foldedState:foldedProp)})),onClick&&onClick(event)},[foldable,onClick,uncontrolled,onToggle,foldedState,foldedProp]),handleClose=(0,react.useCallback)(function(event){setIsHidden(!0),onClose&&onClose(event)},[onClose]);return react.createElement("div",{className:classnames_default()(commonStyles.component,commonStyles[view],((_b={})[commonStyles.foldable]=foldable,_b[commonStyles.focused]=focused,_b[commonStyles.isHidden]=hasCloser&&isHidden,_b[commonStyles.isFolded]=foldable&&folded,_b[commonStyles.rounded]=rounded,_b[commonStyles.rect]=!rounded,_b[commonStyles.noBorder]=!(void 0===_o?"custom"!==view:_o),_b[commonStyles.shadow]=void 0===_p?"custom"===view:_p,_b),className),onClick:handleClick,onKeyDown:handleClick,role:"alert",ref:(0,react_merge_refs_esm.Z)([plateRef,ref]),tabIndex:foldable?0:-1,"data-test-id":dataTestId},react.createElement("div",{className:commonStyles.inner},leftAddons&&react.createElement("div",{className:commonStyles.leftAddons},leftAddons),react.createElement("div",{className:classnames_default()(commonStyles.contentContainer,contentClassName,((_c={})[commonStyles.withoutTitle]=!title&&hasAnyAddons,_c[commonStyles.limitWidth]=void 0===_k||_k,_c))},title&&react.createElement("div",{className:classnames_default()(commonStyles[titleView],((_d={})[styles[titleView]]=!!styles[titleView],_d))},title),hasContent&&react.createElement("div",{ref:contentRef,className:classnames_default()(commonStyles.content,((_e={})[commonStyles.isFolded]=foldable&&folded,_e))},children&&react.createElement("div",{className:classnames_default()(commonStyles.description,styles.description,rowLimitStyles)},children),hasButtons&&react.createElement("div",{className:styles.footer},react.createElement(ButtonList,{buttons:buttons,containerClassName:classnames_default()(commonStyles.containerButton,buttonsClassName),buttonClassName:classnames_default()(commonStyles.button,buttonsClassName)})))),!!subAddons&&"boolean"!=typeof subAddons&&react.createElement("div",{ref:subAddonsRef,className:commonStyles.subAddons},react.createElement(ButtonList,{buttons:subAddons,containerClassName:classnames_default()(subAddonsClassName,commonStyles.rowReverse),buttonClassName:commonStyles.button})),foldable&&react.createElement("div",{className:commonStyles.rightAddons},react.createElement("div",{className:classnames_default()(commonStyles.folder,((_f={})[commonStyles.isFolded]=folded,_f))},react.createElement(ChevronDownMIcon.ChevronDownMIcon,null))),hasCloser&&!foldable&&react.createElement("div",{className:commonStyles.rightAddons},react.createElement(icon_button_esm.h,{className:commonStyles.closer,"aria-label":"закрыть",icon:CrossMIcon.CrossMIcon,size:"xxs",onClick:handleClose}))))}),styles={bold:"plate__bold_5fr0v",description:"plate__description_5fr0v",footer:"plate__footer_5fr0v"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/desktop/desktop.css");var PlateDesktop=(0,react.forwardRef)(function(restProps,ref){return react.createElement(BasePlate,(0,tslib_es6.pi)({},restProps,{styles:styles,ref:ref}))}),Component_mobile_styles={bold:"plate__bold_1fbp9",description:"plate__description_1fbp9",footer:"plate__footer_1fbp9"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/mobile/mobile.css");var PlateMobile=(0,react.forwardRef)(function(restProps,ref){return react.createElement(BasePlate,(0,tslib_es6.pi)({},restProps,{styles:Component_mobile_styles,ref:ref}))}),Plate=(0,react.forwardRef)(function(_a,ref){var children=_a.children,_b=_a.breakpoint,restProps=(0,tslib_es6._T)(_a,["children","breakpoint"]),isDesktop=(0,esm.a)("(min-width: ".concat(void 0===_b?1024:_b,"px)"))[0];return react.createElement(isDesktop?PlateDesktop:PlateMobile,(0,tslib_es6.pi)({ref:ref},restProps),children)})},"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/cdn-icon/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},cdn_icon:function(){return cdn_icon}});var _cdn_icon$parameters,_cdn_icon$parameters2,_cdn_icon$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _alfalab_core_components_cdn_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/cdn-icon/modern/index.js"),_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@alfalab/icons-glyph/DiamondsMIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/CDNIcon",component:_alfalab_core_components_cdn_icon__WEBPACK_IMPORTED_MODULE_1__.CDNIcon,id:"CDNIcon"},cdn_icon={name:"CDNIcon",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_cdn_icon__WEBPACK_IMPORTED_MODULE_1__.CDNIcon,{name:"glyph_diamonds_m",fallback:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_2__.DiamondsMIcon,{}),color:"var(--color-light-neutral-700)"})}};__webpack_exports__.default=meta,cdn_icon.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},cdn_icon.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_cdn_icon$parameters=cdn_icon.parameters)||void 0===_cdn_icon$parameters?void 0:_cdn_icon$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'CDNIcon',\n  render: () => {\n    return <CDNIcon name='glyph_diamonds_m' fallback={<DiamondsMIcon />} color='var(--color-light-neutral-700)' />;\n  }\n}"},null===(_cdn_icon$parameters2=cdn_icon.parameters)||void 0===_cdn_icon$parameters2?void 0:null===(_cdn_icon$parameters3=_cdn_icon$parameters2.docs)||void 0===_cdn_icon$parameters3?void 0:_cdn_icon$parameters3.source)})});let __namedExportsOrder=["cdn_icon"]},"./packages/cdn-icon/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/cdn-icon/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Space direction='horizontal' align='center' size={24}>\n    <CDNIcon \n        color='var(--color-light-neutral-translucent-1300)' \n        name='glyph_diamonds_xxl' \n    />\n    <CDNIcon \n        color='var(--color-light-neutral-700)' \n        name='glyph_diamonds_m' \n    />\n    <CDNIcon \n        color='var(--color-light-neutral-500)' \n        name='glyph_diamonds_s' \n    />\n</Space>\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},esm=__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/index.js"),src=__webpack_require__("./packages/cdn-icon/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { CDNIcon } from '@alfalab/core-components/cdn-icon';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование",children:"Использование"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Хранилище alfabank.servicecdn.ru — временное и в какой-то момент домен изменится."}),"\n",(0,jsx_runtime.jsx)(esm.h,{view:"attention",limitContentWidth:!1,title:"Рекомендуется использовать своё хранилище (baseUrl).",titleView:"light"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.CDNIcon})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"CDNIcon",children:"Используется для отображения иконок."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 5.2.1\n\n### Patch Changes\n\n### [#890](https://github.com/core-ds/core-components/pull/890)\n\n-   CDNIcon теперь занимает всю ширину и высоту IconView\n\n## 5.2.0\n\n### Minor Changes\n\n### [#811](https://github.com/core-ds/core-components/pull/811)\n\n-   Добавлен проп fallback\n\n## 5.1.1\n\n### Patch Changes\n\n### [#793](https://github.com/core-ds/core-components/pull/793)\n\n-   Добавлены недостающие зависимости в package.json\n\n## 5.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 5.0.7\n\n### Patch Changes\n\n### [#778](https://github.com/core-ds/core-components/pull/778)\n\n-   Исправлено отображение цветных иконок\n\n## 5.0.6\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 5.0.5\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 5.0.4\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 5.0.3\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [5.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@5.0.1...@alfalab/core-components-cdn-icon@5.0.2) (2022-09-01)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [5.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@5.0.0...@alfalab/core-components-cdn-icon@5.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n# [5.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@4.1.1...@alfalab/core-components-cdn-icon@5.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [4.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@4.1.0...@alfalab/core-components-cdn-icon@4.1.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [4.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@4.0.0...@alfalab/core-components-cdn-icon@4.1.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@3.0.7...@alfalab/core-components-cdn-icon@4.0.0) (2022-07-25)\n\n### Features\n\n-   Новый cdn alfabank.servicecdn.ru ([#166](https://github.com/core-ds/core-components/issues/166)) ([e29c89e](https://github.com/core-ds/core-components/commit/e29c89edc8cf60ac23df9570eece9e7811eb11f0))\n\n### BREAKING CHANGES\n\n-   Добавьте новый домен в список разрешенных 'img-src': `'self' alfabank.servicecdn.ru data: 'self'`\n\n-   chore(screenshot-utils): change cdn\n\n-   feat(cdn-icon): add prop baseUrl\n\n## [3.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@3.0.6...@alfalab/core-components-cdn-icon@3.0.7) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [3.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@3.0.5...@alfalab/core-components-cdn-icon@3.0.6) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [3.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@3.0.4...@alfalab/core-components-cdn-icon@3.0.5) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [3.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@3.0.3...@alfalab/core-components-cdn-icon@3.0.4) (2022-07-12)\n\n### Bug Fixes\n\n-   **cdn-icon:** edited icon size fit svg ([#141](https://github.com/core-ds/core-components/issues/141)) ([54098bf](https://github.com/core-ds/core-components/commit/54098bff366b8a3715b986d7c3e37556b60bb2bf))\n\n## [3.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@3.0.2...@alfalab/core-components-cdn-icon@3.0.3) (2022-06-28)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@3.0.0...@alfalab/core-components-cdn-icon@3.0.1) (2022-01-27)\n\n### Bug Fixes\n\n-   **cdn-icon:** add className prop ([#957](https://github.com/core-ds/core-components/issues/957)) ([86f2139](https://github.com/core-ds/core-components/commit/86f2139fc56fe1cd2669d05d7953075aa8982e22))\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@2.0.3...@alfalab/core-components-cdn-icon@3.0.0) (2021-12-08)\n\n-   fix!: новый cdn иконок (#913) (#917) ([224831f](https://github.com/core-ds/core-components/commit/224831f41ed2de49dc1a228dc081b0629cf274b1)), closes [#913](https://github.com/core-ds/core-components/issues/913) [#917](https://github.com/core-ds/core-components/issues/917)\n\n### BREAKING CHANGES\n\n-   Добавьте новый домен в список разрешенных 'img-src': `'self' alfabank.gcdn.co data: 'self'`\n\nThis reverts commit 953fbcfec46a40089a5cfde670597315269b05f5.\n\n## [2.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@2.0.2...@alfalab/core-components-cdn-icon@2.0.3) (2021-12-08)\n\n### Bug Fixes\n\n-   revert 0e8124552206f96149d104f65cff1667e857bf01 ([#916](https://github.com/core-ds/core-components/issues/916)) ([953fbcf](https://github.com/core-ds/core-components/commit/953fbcfec46a40089a5cfde670597315269b05f5))\n\n## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@2.0.1...@alfalab/core-components-cdn-icon@2.0.2) (2021-12-08)\n\n### Bug Fixes\n\n-   новый cdn иконок ([#913](https://github.com/core-ds/core-components/issues/913)) ([0e81245](https://github.com/core-ds/core-components/commit/0e8124552206f96149d104f65cff1667e857bf01))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@2.0.0...@alfalab/core-components-cdn-icon@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.8...@alfalab/core-components-cdn-icon@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.7...@alfalab/core-components-cdn-icon@1.0.8) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [1.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.6...@alfalab/core-components-cdn-icon@1.0.7) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [1.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.4...@alfalab/core-components-cdn-icon@1.0.6) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.3...@alfalab/core-components-cdn-icon@1.0.4) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [1.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.2...@alfalab/core-components-cdn-icon@1.0.3) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n\n## [1.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.1...@alfalab/core-components-cdn-icon@1.0.2) (2021-02-20)\n\n### Bug Fixes\n\n-   **toast-plate:** polish toast-plate themes ([#527](https://github.com/core-ds/core-components/issues/527)) ([57d73d4](https://github.com/core-ds/core-components/commit/57d73d47b089997b2cc0d85e37b70f068c945e50))\n\n## [1.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-cdn-icon@1.0.0...@alfalab/core-components-cdn-icon@1.0.1) (2021-02-18)\n\n**Note:** Version bump only for package @alfalab/core-components-cdn-icon\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/cdn-icon/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CDNIcon:function(){return CDNIcon}});var LoadingStatus,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoadingStatus1=((LoadingStatus=LoadingStatus1||{})[LoadingStatus.INITIAL=0]="INITIAL",LoadingStatus[LoadingStatus.SUCCESS=1]="SUCCESS",LoadingStatus[LoadingStatus.FAILURE=2]="FAILURE",LoadingStatus),CDNIcon=function(_ref){var name=_ref.name,color=_ref.color,dataTestId=_ref.dataTestId,className=_ref.className,_ref$baseUrl=_ref.baseUrl,baseUrl=void 0===_ref$baseUrl?"https://alfabank.servicecdn.ru/icons":_ref$baseUrl,fallback=_ref.fallback,_useState=(0,react.useState)(LoadingStatus1.INITIAL),_useState2=(0,slicedToArray.Z)(_useState,2),loadingStatus=_useState2[0],setLoadingStatus=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),icon=_useState4[0],setIcon=_useState4[1],monoIcon=!name.includes("_color");return(0,react.useEffect)(function(){var xhr=new XMLHttpRequest;return xhr.open("GET","".concat(baseUrl,"/").concat(name,".svg")),xhr.send(),xhr.onload=function onload(){setLoadingStatus(LoadingStatus1.SUCCESS);var svg=xhr.response;svg.startsWith("<svg")&&setIcon(svg)},xhr.onerror=function onError(){setLoadingStatus(LoadingStatus1.FAILURE)},function(){return xhr.abort()}},[name,baseUrl]),(0,jsx_runtime.jsx)("span",(0,objectSpread2.Z)({style:{color:color},className:classnames_default()("cc-cdn-icon","component_DyV9I",className,(0,defineProperty.Z)({},"parentColor_seggl",monoIcon)),"data-test-id":dataTestId},loadingStatus===LoadingStatus1.FAILURE?{children:fallback}:{dangerouslySetInnerHTML:{__html:icon}}))};try{CDNIcon.displayName="CDNIcon",CDNIcon.__docgenInfo={description:"",displayName:"CDNIcon",props:{name:{defaultValue:null,description:"Имя иконки",name:"name",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"Цвет иконки",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},baseUrl:{defaultValue:{value:"https://alfabank.servicecdn.ru/icons"},description:"Базовый адрес cdn хранилища c иконками",name:"baseUrl",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},fallback:{defaultValue:null,description:"Fallback на случай, если не удастся загрузить иконку",name:"fallback",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/cdn-icon/src/Component.tsx#CDNIcon"]={docgenInfo:CDNIcon.__docgenInfo,name:"CDNIcon",path:"packages/cdn-icon/src/Component.tsx#CDNIcon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@alfalab/core-components/plate/esm/components/base-plate/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/plate/esm/desktop/desktop.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/plate/esm/mobile/mobile.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);