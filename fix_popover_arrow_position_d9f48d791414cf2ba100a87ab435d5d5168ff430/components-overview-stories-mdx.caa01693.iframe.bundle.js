(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[1099],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./docs/components.overview.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return components_overview_stories}});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),lodash_throttle=__webpack_require__("./node_modules/lodash.throttle/index.js"),lodash_throttle_default=__webpack_require__.n(lodash_throttle),modern=__webpack_require__("./dist/gap/modern/index.js"),input_modern=__webpack_require__("./dist/input/modern/index.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),mq_modern=__webpack_require__("./dist/mq/modern/index.js"),MagnifierMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/MagnifierMIcon.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),lodash_kebabcase=__webpack_require__("./node_modules/lodash.kebabcase/index.js"),lodash_kebabcase_default=__webpack_require__.n(lodash_kebabcase),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),createComponentUrl=__webpack_require__("./.storybook/utils/createComponentUrl.js"),index_module_card="card_uR3ip",index_module_caption="caption_QXMPq",index_module_imageWrapper="imageWrapper_eeXaf",index_module_image="image_XwbYb",index_module_withSafeZone="withSafeZone_ToFqc",index_module_fallbackText="fallbackText_rk6W_",index_module_imageHidden="imageHidden_r7UjQ",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ImageState=function(ImageState){return ImageState[ImageState.INITIAL=0]="INITIAL",ImageState[ImageState.LOADED=1]="LOADED",ImageState[ImageState.ERROR=2]="ERROR",ImageState}(ImageState||{}),COMPONENTS_WITH_SAFE_ZONE=["SidePanel"],Card=function Card(_ref){var _cn,componentName=_ref.componentName,mode=_ref.mode,_React$useState=react.useState(ImageState.INITIAL),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),imageState=_React$useState2[0],setImageState=_React$useState2[1],imageRef=react.useRef(null);react.useEffect((function(){imageRef.current&&imageRef.current.complete&&setImageState(ImageState.LOADED)}),[]);return(0,jsx_runtime.jsx)("a",{href:(0,createComponentUrl.h)(componentName),className:index_module_card,children:(0,jsx_runtime.jsxs)("figure",{children:[(0,jsx_runtime.jsxs)("div",{className:index_module_imageWrapper,children:[imageState===ImageState.ERROR&&(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{view:"primary-small",color:"tertiary",className:index_module_fallbackText,children:"Компонент\n на фотосессии"}),imageState!==ImageState.ERROR&&(0,jsx_runtime.jsx)("img",{ref:imageRef,src:createImageUrl(componentName,mode),alt:componentName,className:classnames_default()(index_module_image,(_cn={},(0,defineProperty.Z)(_cn,index_module_imageHidden,imageState===ImageState.INITIAL),(0,defineProperty.Z)(_cn,index_module_withSafeZone,COMPONENTS_WITH_SAFE_ZONE.includes(componentName)),_cn)),loading:"lazy",decoding:"async",onError:function handleError(){return setImageState(ImageState.ERROR)},onLoad:function handleLoad(){return setImageState(ImageState.LOADED)}})]}),(0,jsx_runtime.jsx)("figcaption",{className:index_module_caption,children:(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{view:"primary-small",children:componentName})})]})})};function createImageUrl(componentName,mode){return"./images/".concat(lodash_kebabcase_default()(componentName),"-").concat("dark"===mode?"dark-":"","preview-snap.png")}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/pages/components-overview/components/card/index.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:".storybook/pages/components-overview/components/card/index.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var CONFIG={"Кнопки":["Button","CustomButton","PickerButton","CustomPickerButton","IconButton","ActionButton","Link"],"Ввод данных":["Input","AmountInput","NumberInput","StepperInput","PhoneInput","InternationalPhoneInput","MaskedInput","Select","InputAutocomplete","SliderInput","PasswordInput","Textarea","CodeInput","Switch","Checkbox","CheckboxGroup","Radio","RadioGroup","Tag","FilterTag","Slider"],"Ввод даты и времени":["UniversalDateInput","Calendar","CalendarRange"],"Загрузка файлов":["Dropzone","FileUploadItem","Attach"],"Модальные сущности":["Modal","SidePanel","BottomSheet","PopupSheet","Popover","Tooltip"],"Индикаторы прогресса":["ProgressBar","SteppedProgressBar","HatchingProgressBar","CircularProgressBar","Spinner","Skeleton"],"Уведомления":["Notification","Toast","Plate","SystemMessage"],"Аутентификация":["PassCode","PatternLock","Confirmation"],"Ячейки":["GenericWrapper","PureCell","Underlay","SortableList"],"Навигация":["Tabs","Pagination","TabBar"],"Индикаторы":["Badge","Indicator","Status"],"Текст":["Typography","List","Markdown"],"Отображение данных":["Amount","IconView","Table","SystemMessage","Comment","Chart","Gallery","Collapse"],"Лейаут":["Gap","Space","Grid"]},utils=__webpack_require__("./.storybook/addons/utils.js"),icon_button_modern=__webpack_require__("./dist/icon-button/modern/index.js"),ArrowUpMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ArrowUpMIcon.js"),back_to_top_button_index_module_component="component_oMEfE",back_to_top_button_index_module_appear="appear_QRmnP",BackToTopButton=function BackToTopButton(_ref){var onClick=_ref.onClick,visible=_ref.visible,_useState=(0,react.useState)(visible),_useState2=(0,slicedToArray.Z)(_useState,2),show=_useState2[0],setShow=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),transitionClass=_useState4[0],setTransitionClass=_useState4[1],timeoutRef=(0,react.useRef)();return(0,react.useEffect)((function(){return visible?(setShow(!0),timeoutRef.current=window.setTimeout((function(){return setTransitionClass(back_to_top_button_index_module_appear)}),50)):(timeoutRef.current=window.setTimeout((function(){return setShow(!1)}),300),setTransitionClass("")),function(){return window.clearTimeout(timeoutRef.current)}}),[visible]),show?(0,jsx_runtime.jsx)(icon_button_modern.IconButton,{icon:ArrowUpMIcon.ArrowUpMIcon,className:classnames_default()(back_to_top_button_index_module_component,transitionClass),colors:"inverted",onClick:onClick}):null};try{BackToTopButton.displayName="BackToTopButton",BackToTopButton.__docgenInfo={description:"",displayName:"BackToTopButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/back-to-top-button/index.tsx#BackToTopButton"]={docgenInfo:BackToTopButton.__docgenInfo,name:"BackToTopButton",path:".storybook/components/back-to-top-button/index.tsx#BackToTopButton"})}catch(__react_docgen_typescript_loader_error){}var components_overview_index_module_input="input_H1odr",components_overview_index_module_cardContainer="cardContainer_jNlsK",components_overview_index_module_group="group_MmjNF",components_overview_index_module_groupTitle="groupTitle_RWUjH",components_overview_index_module_emptySearchResult="emptySearchResult_Gw2tj",ComponentsOverview=function ComponentsOverview(){var _useState=(0,react.useState)((function(){var _document$getElementB;return null!==(_document$getElementB=document.getElementById(utils.wy))&&void 0!==_document$getElementB&&_document$getElementB.textContent?"dark":"light"})),_useState2=(0,slicedToArray.Z)(_useState,2),mode=_useState2[0],setMode=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),query=_useState4[0],setQuery=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),showToTop=_useState6[0],setShowToTop=_useState6[1],_useMatchMedia=(0,mq_modern.useMatchMedia)("--mobile"),isMobile=(0,slicedToArray.Z)(_useMatchMedia,1)[0];(0,react.useEffect)((function(){var handleChangeMode=function handleChangeMode(e){var mode=e.detail.mode;setMode(mode)},handleScroll=lodash_throttle_default()((function(e){var scrollTop=window.pageYOffset||document.documentElement.scrollTop||0;setShowToTop(scrollTop>800)}),200);return document.addEventListener("mode-change",handleChangeMode),document.addEventListener("scroll",handleScroll),function(){document.removeEventListener("mode-change",handleChangeMode),document.removeEventListener("scroll",handleScroll)}}),[]);var data=query?Object.keys(CONFIG).reduce((function(res,groupName){var _res$EMPTY_GROUP,group=CONFIG[groupName].filter((function(componentName){return componentName.toLowerCase().includes(query.toLowerCase())}));group.length>0&&(res.EMPTY||(res.EMPTY=[]),(_res$EMPTY_GROUP=res.EMPTY).push.apply(_res$EMPTY_GROUP,(0,toConsumableArray.Z)(group)));return res}),{}):CONFIG,groups=Object.keys(data),hasData=groups.length>0,Title=isMobile?typography_modern.Typography.TitleMobile:typography_modern.Typography.Title;return(0,jsx_runtime.jsxs)("div",{id:"components-overview",className:"sb-unstyled",children:[(0,jsx_runtime.jsx)(Title,{tag:"h1",view:"xlarge",font:"styrene",children:"Витрина компонентов"}),(0,jsx_runtime.jsx)(modern.Gap,{size:"m"}),(0,jsx_runtime.jsx)(input_modern.Input,{block:!0,clear:!0,className:components_overview_index_module_input,onClear:function handleClear(e){return setQuery("")},value:query,placeholder:"Поиск по компонентам",leftAddons:(0,jsx_runtime.jsx)(MagnifierMIcon.MagnifierMIcon,{color:"var(--color-light-graphic-secondary)"}),onChange:function handleSearch(_,_ref){var value=_ref.value;return setQuery(value)}}),hasData?groups.map((function(groupTitle){var componentsList=data[groupTitle];return(0,jsx_runtime.jsxs)("div",{className:components_overview_index_module_group,children:["EMPTY"!==groupTitle&&(0,jsx_runtime.jsx)(Title,{tag:"h3",view:"small",className:components_overview_index_module_groupTitle,children:groupTitle}),(0,jsx_runtime.jsx)("div",{className:components_overview_index_module_cardContainer,children:componentsList.map((function(componentName){return(0,jsx_runtime.jsx)(Card,{componentName:componentName,mode:mode},componentName)}))})]},groupTitle)})):(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{view:"primary-small",color:"secondary",className:components_overview_index_module_emptySearchResult,children:"Ничего не нашлось, попробуйте изменить запрос"}),(0,jsx_runtime.jsx)(BackToTopButton,{visible:showToTop,onClick:function onClick(){return window.scrollTo({behavior:"smooth",top:0})}})]})};function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components overview",parameters:{previewTabs:{canvas:{hidden:!0}}},id:"components-overview"}),"\n",(0,jsx_runtime.jsx)(ComponentsOverview,{})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components overview",id:"components-overview",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};var components_overview_stories=componentMeta},"./.storybook/utils/createComponentUrl.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function createComponentUrl(componentName){var baseUrl="".concat(window.location.href.split("iframe")[0]);return"".concat(baseUrl,"?path=/docs/").concat(componentName.toLowerCase(),"--docs")}__webpack_require__.d(__webpack_exports__,{h:function(){return createComponentUrl}})},"./node_modules/lodash.kebabcase/index.js":function(module,__unused_webpack_exports,__webpack_require__){var INFINITY=1/0,symbolTag="[object Symbol]",reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rsBreakRange="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsBreak="["+rsBreakRange+"]",rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",rsDigits="\\d+",rsDingbat="[\\u2700-\\u27bf]",rsLower="[a-z\\xdf-\\xf6\\xf8-\\xff]",rsMisc="[^\\ud800-\\udfff"+rsBreakRange+rsDigits+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="[A-Z\\xc0-\\xd6\\xd8-\\xde]",rsLowerMisc="(?:"+rsLower+"|"+rsMisc+")",rsUpperMisc="(?:"+rsUpper+"|"+rsMisc+")",reOptMod="(?:"+rsCombo+"|\\ud83c[\\udffb-\\udfff])"+"?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reApos=RegExp("['’]","g"),reComboMark=RegExp(rsCombo,"g"),reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsUpperMisc+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rsBreak,rsUpper+rsLowerMisc,"$"].join("|")+")",rsUpper+"?"+rsLowerMisc+"+(?:['’](?:d|ll|m|re|s|t|ve))?",rsUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",rsDigits,rsEmoji].join("|"),"g"),reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();var deburrLetter=function basePropertyOf(object){return function(key){return null==object?void 0:object[key]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"});var objectToString=Object.prototype.toString,Symbol=root.Symbol,symbolProto=Symbol?Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;function baseToString(value){if("string"==typeof value)return value;if(function isSymbol(value){return"symbol"==typeof value||function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&objectToString.call(value)==symbolTag}(value))return symbolToString?symbolToString.call(value):"";var result=value+"";return"0"==result&&1/value==-INFINITY?"-0":result}function toString(value){return null==value?"":baseToString(value)}var kebabCase=function createCompounder(callback){return function(string){return function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;for(initAccum&&length&&(accumulator=array[++index]);++index<length;)accumulator=iteratee(accumulator,array[index],index,array);return accumulator}(function words(string,pattern,guard){if(string=toString(string),void 0===(pattern=guard?void 0:pattern))return function hasUnicodeWord(string){return reHasUnicodeWord.test(string)}(string)?function unicodeWords(string){return string.match(reUnicodeWord)||[]}(string):function asciiWords(string){return string.match(reAsciiWord)||[]}(string);return string.match(pattern)||[]}(function deburr(string){return string=toString(string),string&&string.replace(reLatin,deburrLetter).replace(reComboMark,"")}(string).replace(reApos,"")),callback,"")}}((function(result,word,index){return result+(index?"-":"")+word.toLowerCase()}));module.exports=kebabCase}}]);