"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[8713,1341],{"./node_modules/@alfalab/core-components/node_modules/@alfalab/icons-glyph/ChevronDownMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./node_modules/@alfalab/core-components/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.b0=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M12 14L6.5 8.5 5 10l7 7 7-7-1.5-1.5L12 14z"}))}},"./node_modules/@alfalab/core-components/plate/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return Plate}});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@alfalab/core-components/mq/esm/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon_button_esm=__webpack_require__("./node_modules/@alfalab/core-components/icon-button/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),ChevronDownMIcon=__webpack_require__("./node_modules/@alfalab/core-components/node_modules/@alfalab/icons-glyph/ChevronDownMIcon.js"),CrossMIcon=__webpack_require__("./node_modules/@alfalab/core-components/node_modules/@alfalab/icons-glyph/CrossMIcon.js"),ButtonList=function(_a){var buttons=_a.buttons,buttonClassName=_a.buttonClassName,containerClassName=_a.containerClassName;return Array.isArray(buttons)&&buttons.length>0?react.createElement("div",{className:containerClassName},buttons.map(function(button,index){return button?react.cloneElement(button,{key:index,size:"xxs",view:0===index?"secondary":"link",className:classnames_default()(button.props.className,buttonClassName)}):null})):react.createElement("div",{className:containerClassName},buttons)},commonStyles={component:"plate__component_1ixn5",foldable:"plate__foldable_1ixn5",focused:"plate__focused_1ixn5",inner:"plate__inner_1ixn5",rounded:"plate__rounded_1ixn5",noBorder:"plate__noBorder_1ixn5",shadow:"plate__shadow_1ixn5",common:"plate__common_1ixn5",negative:"plate__negative_1ixn5",positive:"plate__positive_1ixn5",attention:"plate__attention_1ixn5",custom:"plate__custom_1ixn5",rect:"plate__rect_1ixn5",isHidden:"plate__isHidden_1ixn5",leftAddons:"plate__leftAddons_1ixn5",rightAddons:"plate__rightAddons_1ixn5",subAddons:"plate__subAddons_1ixn5",rowReverse:"plate__rowReverse_1ixn5",bold:"plate__bold_1ixn5",light:"plate__light_1ixn5",content:"plate__content_1ixn5",isFolded:"plate__isFolded_1ixn5",contentContainer:"plate__contentContainer_1ixn5",withoutTitle:"plate__withoutTitle_1ixn5",limitWidth:"plate__limitWidth_1ixn5",description:"plate__description_1ixn5",closer:"plate__closer_1ixn5",folder:"plate__folder_1ixn5",containerButton:"plate__containerButton_1ixn5",button:"plate__button_1ixn5",rowLimit1:"plate__rowLimit1_1ixn5",rowLimit2:"plate__rowLimit2_1ixn5",rowLimit3:"plate__rowLimit3_1ixn5"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/components/base-plate/index.css");var BasePlate=(0,react.forwardRef)(function(_a,ref){var _b,_c,_d,_e,_f,hasCloser=_a.hasCloser,_g=_a.foldable,foldedProp=_a.folded,_h=_a.defaultFolded,_j=_a.rounded,rounded=void 0===_j||_j,_k=_a.limitContentWidth,leftAddons=_a.leftAddons,subAddons=_a.subAddons,children=_a.children,buttons=_a.buttons,title=_a.title,_l=_a.titleView,titleView=void 0===_l?"bold":_l,_m=_a.view,view=void 0===_m?"common":_m,_o=_a.border,_p=_a.shadow,className=_a.className,buttonsClassName=_a.buttonsClassName,contentClassName=_a.contentClassName,subAddonsClassName=_a.subAddonsClassName,dataTestId=_a.dataTestId,onClick=_a.onClick,onClose=_a.onClose,onToggle=_a.onToggle,rowLimit=_a.rowLimit,_q=_a.styles,styles=void 0===_q?{}:_q,plateRef=(0,react.useRef)(null),contentRef=(0,react.useRef)(null),subAddonsRef=(0,react.useRef)(null),focused=(0,dist_esm.KK)(plateRef,"keyboard")[0],_r=(0,react.useState)(!1),isHidden=_r[0],setIsHidden=_r[1],_s=(0,react.useState)(void 0===_h||_h),foldedState=_s[0],setFoldedState=_s[1],uncontrolled=void 0===foldedProp,foldable=!!title&&!!children&&void 0!==_g&&_g,folded=uncontrolled?foldedState:foldedProp,hasButtons=!!buttons&&"boolean"!=typeof buttons,hasContent=children||hasButtons,hasAnyAddons=leftAddons||subAddons||foldable||hasCloser,rowLimitStyles=rowLimit&&commonStyles["rowLimit".concat(rowLimit)],handleClick=(0,react.useCallback)(function(event){var target=event.target,eventInsideComponent=plateRef.current&&plateRef.current.contains(target),eventInsideContent=contentRef.current&&contentRef.current.contains(target),eventInsideSubAddons=subAddonsRef.current&&subAddonsRef.current.contains(target),clickSimilarKeys=["Enter"," "].includes(event.key),shouldChangeIsFolded=eventInsideComponent&&!eventInsideContent&&!eventInsideSubAddons&&("click"===event.type||clickSimilarKeys);foldable&&shouldChangeIsFolded&&(uncontrolled&&setFoldedState(!foldedState),onToggle&&onToggle(event,{folded:!(uncontrolled?foldedState:foldedProp)})),onClick&&onClick(event)},[foldable,onClick,uncontrolled,onToggle,foldedState,foldedProp]),handleClose=(0,react.useCallback)(function(event){setIsHidden(!0),onClose&&onClose(event)},[onClose]);return react.createElement("div",{className:classnames_default()(commonStyles.component,commonStyles[view],((_b={})[commonStyles.foldable]=foldable,_b[commonStyles.focused]=focused,_b[commonStyles.isHidden]=hasCloser&&isHidden,_b[commonStyles.isFolded]=foldable&&folded,_b[commonStyles.rounded]=rounded,_b[commonStyles.rect]=!rounded,_b[commonStyles.noBorder]=!(void 0===_o?"custom"!==view:_o),_b[commonStyles.shadow]=void 0===_p?"custom"===view:_p,_b),className),onClick:handleClick,onKeyDown:handleClick,role:"alert",ref:(0,react_merge_refs_esm.Z)([plateRef,ref]),tabIndex:foldable?0:-1,"data-test-id":dataTestId},react.createElement("div",{className:commonStyles.inner},leftAddons&&react.createElement("div",{className:commonStyles.leftAddons},leftAddons),react.createElement("div",{className:classnames_default()(commonStyles.contentContainer,contentClassName,((_c={})[commonStyles.withoutTitle]=!title&&hasAnyAddons,_c[commonStyles.limitWidth]=void 0===_k||_k,_c))},title&&react.createElement("div",{className:classnames_default()(commonStyles[titleView],((_d={})[styles[titleView]]=!!styles[titleView],_d))},title),hasContent&&react.createElement("div",{ref:contentRef,className:classnames_default()(commonStyles.content,((_e={})[commonStyles.isFolded]=foldable&&folded,_e))},children&&react.createElement("div",{className:classnames_default()(commonStyles.description,styles.description,rowLimitStyles)},children),hasButtons&&react.createElement("div",{className:styles.footer},react.createElement(ButtonList,{buttons:buttons,containerClassName:classnames_default()(commonStyles.containerButton,buttonsClassName),buttonClassName:classnames_default()(commonStyles.button,buttonsClassName)})))),!!subAddons&&"boolean"!=typeof subAddons&&react.createElement("div",{ref:subAddonsRef,className:commonStyles.subAddons},react.createElement(ButtonList,{buttons:subAddons,containerClassName:classnames_default()(subAddonsClassName,commonStyles.rowReverse),buttonClassName:commonStyles.button})),foldable&&react.createElement("div",{className:commonStyles.rightAddons},react.createElement("div",{className:classnames_default()(commonStyles.folder,((_f={})[commonStyles.isFolded]=folded,_f))},react.createElement(ChevronDownMIcon.b0,null))),hasCloser&&!foldable&&react.createElement("div",{className:commonStyles.rightAddons},react.createElement(icon_button_esm.h,{className:commonStyles.closer,"aria-label":"закрыть",icon:CrossMIcon.y,size:"xxs",onClick:handleClose}))))}),styles={bold:"plate__bold_5fr0v",description:"plate__description_5fr0v",footer:"plate__footer_5fr0v"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/desktop/desktop.css");var PlateDesktop=(0,react.forwardRef)(function(restProps,ref){return react.createElement(BasePlate,(0,tslib_es6.pi)({},restProps,{styles:styles,ref:ref}))}),Component_mobile_styles={bold:"plate__bold_1fbp9",description:"plate__description_1fbp9",footer:"plate__footer_1fbp9"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/mobile/mobile.css");var PlateMobile=(0,react.forwardRef)(function(restProps,ref){return react.createElement(BasePlate,(0,tslib_es6.pi)({},restProps,{styles:Component_mobile_styles,ref:ref}))}),Plate=(0,react.forwardRef)(function(_a,ref){var children=_a.children,_b=_a.breakpoint,restProps=(0,tslib_es6._T)(_a,["children","breakpoint"]),isDesktop=(0,esm.a)("(min-width: ".concat(void 0===_b?1024:_b,"px)"))[0];return react.createElement(isDesktop?PlateDesktop:PlateMobile,(0,tslib_es6.pi)({ref:ref},restProps),children)})},"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/gallery/node_modules/@alfalab/icons-glyph/ArrowLeftMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.PC=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M7.5 13H19v-2H7.5L11 7.5 9.5 6 4 12l5.5 6 1.5-1.5L7.5 13z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/ArrowsInwardMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.pS=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M16.414 9H20v2h-7V4h2v3.586l4.293-4.293 1.414 1.414L16.414 9zm-8.828 6l-4.293 4.293 1.414 1.414L9 16.414V20h2v-7H4v2h3.586z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/ArrowsOutwardMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.Vf=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M11 18H7.414l3.793-3.793-1.414-1.414L6 16.586V13H4v7h7v-2zm1.793-8.207L16.586 6H13V4h7v7h-2V7.414l-3.793 3.793-1.414-1.414z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/ChevronBackHeavyMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),l=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.ye=function(e){return l.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M15 22L5 12 15 2l2.5 2.5L10 12l7.5 7.5L15 22z",fillRule:"evenodd",clipRule:"evenodd"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/ChevronForwardHeavyMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.jG=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M9 2l10 10L9 22l-2.5-2.5L14 12 6.5 4.5 9 2z",fillRule:"evenodd",clipRule:"evenodd"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/CrossMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.y=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10.586 12L6 16.5 7.5 18l4.5-4.586L16.5 18l1.5-1.5-4.586-4.5L18 7.5 16.5 6 12 10.586 7.5 6 6 7.5l4.586 4.5z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/PauseCompactMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.wB=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M7 6h3v12H7V6zm7 0h3v12h-3V6z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/PlayCompactMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,l=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M8.265 4.211C7.265 3.62 6 4.341 6 5.501V18.5c0 1.16 1.265 1.881 2.265 1.29l10.998-6.499c.983-.58.983-2 0-2.58L8.265 4.21z"}))};exports.UL=l,exports.ZP=l},"./packages/gallery/node_modules/@alfalab/icons-glyph/PointerDownMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.Xm=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M16.444 9.935L13 13.305V3h-2v10.304L7.556 9.935l-1.399 1.43L12 17.08l5.843-5.715-1.399-1.43zM20 21v-2H4v2h16z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/SoundCrossMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.N$=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M3 8h3.008l4.332-2.803A1.05 1.05 0 0112 6.05v11.9a1.05 1.05 0 01-1.66.853L6.008 16H3a1 1 0 01-1-1V9a1 1 0 011-1zm17.583 8L18 13.416 15.417 16 14 14.583 16.583 12 14 9.417 15.417 8 18 10.583l2.583-2.582L22 9.417 19.417 12 22 14.582 20.583 16z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/SoundMIcon.js":function(__unused_webpack_module,exports,__webpack_require__){var e,t=__webpack_require__("./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js"),r=(e=__webpack_require__("./node_modules/react/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.I=function(e){return r.createElement("svg",t.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M3 8h3.008l4.332-2.803A1.05 1.05 0 0112 6.05v11.9a1.05 1.05 0 01-1.66.853L6.008 16H3a1 1 0 01-1-1V9a1 1 0 011-1zm14.489 8.68l1.699 1.063A9.954 9.954 0 0021 12c0-2.137-.67-4.117-1.812-5.742l-1.7 1.062A7.964 7.964 0 0119 12a7.96 7.96 0 01-1.511 4.68zm-3.408-7.23c.574.692.919 1.58.919 2.55 0 .97-.345 1.858-.919 2.55l1.706 1.067A5.974 5.974 0 0017 12a5.974 5.974 0 00-1.213-3.617l-1.706 1.066z"}))}},"./packages/gallery/node_modules/@alfalab/icons-glyph/tslib.es6-37b184f2.js":function(__unused_webpack_module,exports){/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */exports.__assign=function(){return exports.__assign=Object.assign||function(t){for(var r,s=1,n=arguments.length;s<n;s++)for(var e in r=arguments[s])Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t},exports.__assign.apply(this,arguments)}},"./node_modules/@alfalab/core-components/plate/esm/components/base-plate/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/plate/esm/desktop/desktop.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/plate/esm/mobile/mobile.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);