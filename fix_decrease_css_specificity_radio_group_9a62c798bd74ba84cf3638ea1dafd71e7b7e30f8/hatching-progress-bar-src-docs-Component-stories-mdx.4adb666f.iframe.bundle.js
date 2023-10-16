"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[3478],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/hatching-progress-bar/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_stories},hatchingProgressBar:function(){return hatchingProgressBar}});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/hatching-progress-bar/modern/index.js"),Component=__webpack_require__("./packages/hatching-progress-bar/src/Component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({p:"p",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Отображает линейный индикатор прогресса (0-100%)."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Отображает линейный индикатор будущего прогресса (0-100%)."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<HatchingProgressBar value={40} hatchValue={60} />\n"})})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},index_module="@import '../../vars/src/colors-indigo.css';\n@import '../../themes/src/default.css';\n\n.container {\n    background: var(--color-light-bg-primary-inverted-alpha-10);\n    display: flex;\n    overflow: hidden;\n    border-radius: var(--border-radius-m);\n    height: 8px;\n    position: relative;\n}\n\n.hatch {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: inherit;\n    width: 100%;\n    transition: transform 0.4s ease;\n    background: repeating-linear-gradient(\n        -45deg,\n        var(--color-light-graphic-tertiary) 6px 10px,\n        var(--color-light-specialbg-nulled) 10px 18px\n    );\n}\n\n.filled {\n    position: relative;\n    border-radius: inherit;\n    width: 100%;\n    transition: transform 0.4s ease;\n    z-index: 1;\n}\n\n.positive {\n    background: var(--color-light-graphic-positive);\n}\n\n.attention {\n    background: var(--color-light-graphic-attention);\n}\n\n.negative {\n    background: var(--color-light-graphic-negative);\n}\n\n.link {\n    background: var(--color-light-graphic-link);\n}\n\n.tertiary {\n    background: var(--color-light-graphic-tertiary);\n}\n\n.secondary {\n    background: var(--color-light-graphic-secondary);\n}\n\n.primary {\n    background: var(--color-light-graphic-primary);\n}\n\n.accent {\n    background: var(--color-light-graphic-accent);\n}\n";function Component_stories_createMdxContent(props){const _components=Object.assign({pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/HatchingProgressBar",component:modern.HatchingProgressBar,id:"HatchingProgressBar"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"HatchingProgressBar",children:(0,jsx_runtime.jsx)(modern.HatchingProgressBar,{value:(0,addon_knobs_dist.number)("value",40),hatchValue:(0,addon_knobs_dist.number)("hatchValue",60),view:(0,addon_knobs_dist.select)("view",["positive","negative","attention","link","tertiary","secondary","primary","accent"])})}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"HatchingProgressBar",design:"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=96157%3A121692&mode=design&t=Itgzojk9BOtPqYkS-1"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ProgressBar } from '@alfalab/core-components/hatching-progress-bar';\n"})}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),props:(0,jsx_runtime.jsx)(dist.$4,{of:Component.M}),cssVars:(0,jsx_runtime.jsx)(blocks.ZV,{css:index_module})})]})}const hatchingProgressBar=()=>(0,jsx_runtime.jsx)(modern.HatchingProgressBar,{value:(0,addon_knobs_dist.number)("value",40),hatchValue:(0,addon_knobs_dist.number)("hatchValue",60),view:(0,addon_knobs_dist.select)("view",["positive","negative","attention","link","tertiary","secondary","primary","accent"])});hatchingProgressBar.storyName="HatchingProgressBar",hatchingProgressBar.parameters={storySource:{source:'<HatchingProgressBar value={number("value", 40)} hatchValue={number("hatchValue", 60)} view={select("view", ["positive", "negative", "attention", "link", "tertiary", "secondary", "primary", "accent"])} />'}};const componentMeta={title:"Components/HatchingProgressBar",id:"HatchingProgressBar",component:modern.HatchingProgressBar,tags:["stories-mdx"],includeStories:["hatchingProgressBar"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function Component_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}};var Component_stories=componentMeta},"./.storybook/blocks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ft:function(){return ArgsTabs},Eg:function(){return Changelog},yt:function(){return ComponentHeader},ZV:function(){return CssVars},mQ:function(){return Tabs}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={changelog:"changelog_UmYwo"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Changelog=function Changelog(_ref){var content=_ref.content,_ref$root=_ref.root,root=void 0!==_ref$root&&_ref$root;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.changelog,root&&index_module.root,"sb-unstyled"),children:content})};try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},root:{defaultValue:{value:"false"},description:"",name:"root",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/changelog/changelog.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:".storybook/blocks/changelog/changelog.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),modern=__webpack_require__("./dist/link/modern/index.js"),esm=__webpack_require__("./node_modules/storybook-addon-live-examples/dist/esm/index.js"),css_vars_module_cssVars="cssVars_OsBA8",rootBlockRegexp=/:root {([^}]*)}/g,mixinRegexp=/(?:@define-mixin)(.*{[^}]*})/g,CssVars=function CssVars(_ref){var css=_ref.css,title=_ref.title,expandable=_ref.expandable,_ref$type=_ref.type,type=void 0===_ref$type?"vars":_ref$type,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),vars=_useState2[0],setVars=_useState2[1],_useState3=(0,react.useState)(!expandable),_useState4=(0,slicedToArray.Z)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],isVars="vars"===type,regexp=isVars?rootBlockRegexp:mixinRegexp;return(0,react.useEffect)((function(){for(var rootBlockMatch=regexp.exec(css),rootBlocks=[];rootBlockMatch;)rootBlocks.push(rootBlockMatch[1]),rootBlockMatch=regexp.exec(css);var result=rootBlocks.reduce((function(acc,item,index){var divider=index===rootBlocks.length-1?"":"\n";return"".concat(acc).concat(item).concat(divider)}),isVars?":root {":"");isVars&&(result+="}"),setVars(result)}),[]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",css_vars_module_cssVars),children:[title&&(0,jsx_runtime.jsx)("h2",{className:classnames_default()("sbdocs","sbdocs-h2"),children:title}),vars&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[expandable&&(0,jsx_runtime.jsx)(modern.Link,{view:"default",onClick:function onClick(){return setOpen(!open)},pseudo:!0,children:open?"Скрыть":"Показать"}),open&&(0,jsx_runtime.jsx)(esm.en,{language:"css",code:vars,live:!1})]})]})};try{CssVars.displayName="CssVars",CssVars.__docgenInfo={description:"",displayName:"CssVars",props:{css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"vars"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vars"'},{value:'"mixins"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/css-vars/css-vars.tsx#CssVars"]={docgenInfo:CssVars.__docgenInfo,name:"CssVars",path:".storybook/blocks/css-vars/css-vars.tsx#CssVars"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),space_modern=__webpack_require__("./dist/space/modern/index.js"),dist_esm=__webpack_require__("./node_modules/@alfalab/utils/dist/esm/index.js"),GithubIcon=__webpack_require__("./.storybook/components/icons/GithubIcon.jsx"),usages_namespaceObject=JSON.parse('{"updatedAt":1696397264102,"withSuffix":{"projects":0,"imports":0,"search":"withSuffix"},"vars":{"projects":0,"imports":0,"search":"vars"},"UniversalDateInput":{"projects":0,"imports":0,"search":"UniversalDateInput*"},"Underlay":{"projects":16,"imports":38,"search":"Underlay"},"Typography":{"projects":343,"imports":8102,"search":"Typography"},"Tooltip":{"projects":231,"imports":687,"search":"Tooltip*"},"ToastPlate":{"projects":4,"imports":4,"search":"ToastPlate*"},"Toast":{"projects":25,"imports":43,"search":"Toast*"},"TimeInput":{"projects":2,"imports":2,"search":"TimeInput"},"Textarea":{"projects":101,"imports":228,"search":"Textarea"},"Tag":{"projects":161,"imports":454,"search":"Tag*"},"Tabs":{"projects":135,"imports":262,"search":"Tabs*"},"Table":{"projects":98,"imports":443,"search":"Table"},"SystemMessage":{"projects":6,"imports":20,"search":"SystemMessage*"},"Switch":{"projects":92,"imports":230,"search":"Switch"},"Steps":{"projects":18,"imports":24,"search":"Steps"},"StepperInput":{"projects":0,"imports":0,"search":"StepperInput*"},"SteppedProgressBar":{"projects":9,"imports":10,"search":"SteppedProgressBar"},"Status":{"projects":104,"imports":257,"search":"Status"},"Stack":{"projects":3,"imports":3,"search":"Stack"},"Spinner":{"projects":197,"imports":703,"search":"Spinner"},"Space":{"projects":192,"imports":1893,"search":"Space"},"SortableList":{"projects":0,"imports":0,"search":"SortableList"},"SliderInput":{"projects":16,"imports":20,"search":"SliderInput"},"Slider":{"projects":2,"imports":2,"search":"Slider"},"Skeleton":{"projects":159,"imports":820,"search":"Skeleton"},"SidePanel":{"projects":27,"imports":59,"search":"SidePanel*"},"SelectWithTags":{"projects":17,"imports":26,"search":"SelectWithTags"},"Select":{"projects":206,"imports":631,"search":"Select*"},"SegmentedControl":{"projects":6,"imports":6,"search":"SegmentedControl"},"Scrollbar":{"projects":18,"imports":31,"search":"Scrollbar"},"RadioGroup":{"projects":149,"imports":396,"search":"RadioGroup*"},"Radio":{"projects":102,"imports":220,"search":"Radio"},"PureCell":{"projects":55,"imports":362,"search":"PureCell"},"ProgressBar":{"projects":26,"imports":35,"search":"ProgressBar"},"Portal":{"projects":13,"imports":30,"search":"Portal"},"PopupSheet":{"projects":0,"imports":0,"search":"PopupSheet"},"Popover":{"projects":70,"imports":149,"search":"Popover"},"Plate":{"projects":166,"imports":533,"search":"Plate*"},"PickerButton":{"projects":69,"imports":100,"search":"PickerButton*"},"PhoneInput":{"projects":77,"imports":104,"search":"PhoneInput"},"PatternLock":{"projects":1,"imports":1,"search":"PatternLock"},"PasswordInput":{"projects":17,"imports":28,"search":"PasswordInput"},"PassCode":{"projects":1,"imports":1,"search":"PassCode"},"Pagination":{"projects":25,"imports":54,"search":"Pagination"},"NumberInput":{"projects":8,"imports":17,"search":"NumberInput*"},"NotificationManager":{"projects":62,"imports":64,"search":"NotificationManager"},"Notification":{"projects":114,"imports":160,"search":"Notification"},"Mq":{"projects":24,"imports":47,"search":"Mq"},"Modal":{"projects":292,"imports":1058,"search":"Modal*"},"Markdown":{"projects":0,"imports":0,"search":"Markdown*"},"MaskedInput":{"projects":94,"imports":272,"search":"MaskedInput"},"Loader":{"projects":67,"imports":155,"search":"Loader"},"ListHeader":{"projects":9,"imports":10,"search":"ListHeader"},"List":{"projects":116,"imports":332,"search":"List"},"Link":{"projects":266,"imports":1340,"search":"Link"},"KeyboardFocusable":{"projects":3,"imports":3,"search":"KeyboardFocusable"},"IntlPhoneInput":{"projects":1,"imports":1,"search":"IntlPhoneInput"},"InternationalPhoneInput":{"projects":0,"imports":0,"search":"InternationalPhoneInput*"},"InputAutocomplete":{"projects":128,"imports":274,"search":"InputAutocomplete*"},"Input":{"projects":217,"imports":978,"search":"Input*"},"Indicator":{"projects":3,"imports":3,"search":"Indicator"},"IconView":{"projects":0,"imports":0,"search":"IconView"},"IconButton":{"projects":180,"imports":655,"search":"IconButton"},"HatchingProgressBar":{"projects":0,"imports":0,"search":"HatchingProgressBar"},"Grid":{"projects":141,"imports":1021,"search":"Grid"},"GenericWrapper":{"projects":19,"imports":74,"search":"GenericWrapper"},"Gap":{"projects":90,"imports":600,"search":"Gap"},"Gallery":{"projects":3,"imports":4,"search":"Gallery"},"FormControl":{"projects":5,"imports":8,"search":"FormControl*"},"FilterTag":{"projects":30,"imports":64,"search":"FilterTag*"},"FileUploadItem":{"projects":40,"imports":56,"search":"FileUploadItem"},"Dropzone":{"projects":20,"imports":26,"search":"Dropzone"},"Drawer":{"projects":36,"imports":47,"search":"Drawer"},"Divider":{"projects":93,"imports":316,"search":"Divider"},"DateTimeInput":{"projects":2,"imports":2,"search":"DateTimeInput*"},"DateRangeInput":{"projects":5,"imports":5,"search":"DateRangeInput*"},"DateInput":{"projects":24,"imports":30,"search":"DateInput"},"CustomPickerButton":{"projects":0,"imports":0,"search":"CustomPickerButton*"},"CustomButton":{"projects":8,"imports":13,"search":"CustomButton"},"Confirmation":{"projects":40,"imports":61,"search":"Confirmation*"},"ConfirmationV1":{"projects":4,"imports":4,"search":"ConfirmationV1"},"Comment":{"projects":1,"imports":1,"search":"Comment"},"Collapse":{"projects":117,"imports":246,"search":"Collapse"},"CodeInput":{"projects":5,"imports":5,"search":"CodeInput*"},"CircularProgressBar":{"projects":19,"imports":25,"search":"CircularProgressBar"},"CheckboxGroup":{"projects":49,"imports":85,"search":"CheckboxGroup*"},"Checkbox":{"projects":169,"imports":551,"search":"Checkbox"},"Chart":{"projects":1,"imports":1,"search":"Chart"},"CDNIcon":{"projects":19,"imports":97,"search":"CDNIcon"},"CardImage":{"projects":19,"imports":37,"search":"CardImage"},"CalendarWithSkeleton":{"projects":1,"imports":1,"search":"CalendarWithSkeleton"},"CalendarRange":{"projects":30,"imports":52,"search":"CalendarRange"},"CalendarInput":{"projects":96,"imports":177,"search":"CalendarInput*"},"Calendar":{"projects":16,"imports":31,"search":"Calendar*"},"Button":{"projects":348,"imports":4520,"search":"Button*"},"BottomSheet":{"projects":59,"imports":139,"search":"BottomSheet"},"BankCard":{"projects":2,"imports":2,"search":"BankCard"},"BaseModal":{"projects":9,"imports":13,"search":"BaseModal"},"Badge":{"projects":136,"imports":383,"search":"Badge"},"Backdrop":{"projects":8,"imports":8,"search":"Backdrop"},"AmountInput":{"projects":81,"imports":164,"search":"AmountInput"},"Attach":{"projects":42,"imports":52,"search":"Attach"},"Amount":{"projects":109,"imports":447,"search":"Amount"},"Alert":{"projects":99,"imports":345,"search":"Alert"},"ActionButton":{"projects":10,"imports":19,"search":"ActionButton"}}'),ComponentHeader_module_component="component_qx5zQ",ComponentHeader_module_title="title_vmrmp",ComponentHeader_module_titleMobile="titleMobile_RhdZ4",ComponentHeader_module_text="text_TIocB",ComponentHeader_module_info="info_iGRHP",ComponentHeader_module_commonLink="commonLink_WJRCZ",ComponentHeader_module_links="links_kuMT8",ComponentHeader_module_usageLink="usageLink_ilI5I",ComponentHeader_module_github="github_ks4z8",ComponentHeader_module_design="design_NpKuj",mq_modern=__webpack_require__("./dist/mq/modern/index.js"),ComponentHeader=function ComponentHeader(_ref){var _usages$name,_usages$name2,_usages$name3,_usages$name4,_usages$name5,_usages$name6,name=_ref.name,design=_ref.design,children=_ref.children,_useMatchMedia=(0,mq_modern.useMatchMedia)("--tablet-m"),isDesktop=(0,slicedToArray.Z)(_useMatchMedia,1)[0],packageName=name.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase(),githubLink="https://github.com/core-ds/core-components/tree/master/packages/".concat(packageName),Title=isDesktop?typography_modern.Typography.Title:typography_modern.Typography.TitleMobile;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",ComponentHeader_module_component),children:[(0,jsx_runtime.jsx)(Title,{tag:"h1",view:"xlarge",className:classnames_default()(ComponentHeader_module_title,(0,defineProperty.Z)({},ComponentHeader_module_titleMobile,!isDesktop)),children:name}),children&&(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{tag:"p",view:"primary-medium",className:ComponentHeader_module_text,children:children}),(0,jsx_runtime.jsxs)("div",{className:ComponentHeader_module_links,children:[design&&(0,jsx_runtime.jsx)("a",{className:classnames_default()(ComponentHeader_module_design,(0,defineProperty.Z)({},ComponentHeader_module_commonLink,!design)),href:design,target:"_blank",children:"Figma"}),(0,jsx_runtime.jsxs)("a",{className:ComponentHeader_module_github,href:githubLink,target:"_blank",children:[(0,jsx_runtime.jsx)(GithubIcon.E,{fill:"var(--color-light-graphic-primary)"}),"Github"]})]}),(0,jsx_runtime.jsx)(space_modern.Space,{direction:"horizontal",align:"center",className:ComponentHeader_module_info,children:(null===(_usages$name=usages_namespaceObject[name])||void 0===_usages$name?void 0:_usages$name.projects)>0&&(0,jsx_runtime.jsxs)(typography_modern.Typography.Text,{view:"primary-small",color:"secondary",children:["Используется в"," ",(0,jsx_runtime.jsxs)(modern.Link,{href:"http://design/design-system-usage/usage-chart?component=".concat(null===(_usages$name2=usages_namespaceObject[name])||void 0===_usages$name2?void 0:_usages$name2.search),target:"_blank",view:"secondary",underline:!1,title:"Необходимо подключение к VPN",className:ComponentHeader_module_usageLink,children:[null===(_usages$name3=usages_namespaceObject[name])||void 0===_usages$name3?void 0:_usages$name3.projects," ",(0,dist_esm._6)(null===(_usages$name4=usages_namespaceObject[name])||void 0===_usages$name4?void 0:_usages$name4.projects,"проекте","проектах","проектах")]})," и ","~",null===(_usages$name5=usages_namespaceObject[name])||void 0===_usages$name5?void 0:_usages$name5.imports," ",(0,dist_esm._6)(null===(_usages$name6=usages_namespaceObject[name])||void 0===_usages$name6?void 0:_usages$name6.imports,"файле","файлах","файлах")]})})]})};try{ComponentHeader.displayName="ComponentHeader",ComponentHeader.__docgenInfo={description:"",displayName:"ComponentHeader",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},design:{defaultValue:null,description:"",name:"design",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"]={docgenInfo:ComponentHeader.__docgenInfo,name:"ComponentHeader",path:".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./.storybook/blocks/grid/index.ts");var _TabTitle,tabs_modern=__webpack_require__("./dist/tabs/modern/index.js"),tabs_index_module_tabs="tabs_BRA6G",TabName=function(TabName){return TabName.DESCRIPTION="DESCRIPTION",TabName.PROPS="PROPS",TabName.CSS_VARS="CSS_VARS",TabName.CHANGELOG="CHANGELOG",TabName.DEVELOPMENT="DEVELOPMENT",TabName}(TabName||{}),TabTitle=(_TabTitle={},(0,defineProperty.Z)(_TabTitle,TabName.DESCRIPTION,"Описание"),(0,defineProperty.Z)(_TabTitle,TabName.PROPS,"Свойства"),(0,defineProperty.Z)(_TabTitle,TabName.CSS_VARS,"CSS-переменные"),(0,defineProperty.Z)(_TabTitle,TabName.CHANGELOG,"Обновления"),(0,defineProperty.Z)(_TabTitle,TabName.DEVELOPMENT,"Разработчику"),_TabTitle),Tabs=function Tabs(_ref){var description=_ref.description,props=_ref.props,cssVars=_ref.cssVars,changelog=_ref.changelog,_ref$defaultSelected=_ref.defaultSelected,defaultSelected=void 0===_ref$defaultSelected?TabName.DESCRIPTION:_ref$defaultSelected,development=_ref.development,_useState=(0,react.useState)(defaultSelected),_useState2=(0,slicedToArray.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],handleChange=(0,react.useCallback)((function(_,_ref2){var selectedId=_ref2.selectedId;setSelected(selectedId)}),[]),tabs=(0,react.useMemo)((function(){return function renderTabs(){return[(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DESCRIPTION],id:TabName.DESCRIPTION,children:description},"description"),props?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.PROPS],id:TabName.PROPS,children:props},"props"):null,cssVars?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CSS_VARS],id:TabName.CSS_VARS,children:cssVars},"css-vars"):null,development?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DEVELOPMENT],id:TabName.DEVELOPMENT,children:development},"development"):null,changelog?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CHANGELOG],id:TabName.CHANGELOG,children:(0,jsx_runtime.jsx)("div",{style:{marginTop:"32px"},children:(0,jsx_runtime.jsx)(Changelog,{content:changelog})})},"changelog"):null].filter(react.isValidElement)}()}),[description,props,cssVars]);return(0,jsx_runtime.jsx)(tabs_modern.Tabs,{className:"sb-unstyled",selectedId:selected,onChange:handleChange,containerClassName:tabs_index_module_tabs,children:tabs})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}},props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"ReactNode"}},cssVars:{defaultValue:null,description:"",name:"cssVars",required:!1,type:{name:"ReactNode"}},changelog:{defaultValue:null,description:"",name:"changelog",required:!1,type:{name:"string"}},defaultSelected:{defaultValue:{value:"TabName.DESCRIPTION"},description:"",name:"defaultSelected",required:!1,type:{name:"enum",value:[{value:'"DESCRIPTION"'},{value:'"PROPS"'},{value:'"CSS_VARS"'},{value:'"CHANGELOG"'},{value:'"DEVELOPMENT"'}]}},development:{defaultValue:null,description:"",name:"development",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/tabs/component.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:".storybook/blocks/tabs/component.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),args_tabs_index_module_tabsTypes="tabsTypes_QEaxU",args_tabs_index_module_error="error_EECcc",ArgsTabs=function ArgsTabs(_ref){var components=_ref.components,_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],keys=Object.keys(components);return(0,jsx_runtime.jsx)(tabs_modern.Tabs,{className:"sb-unstyled",selectedId:selected,onChange:function handleChange(_,_ref2){var selectedId=_ref2.selectedId;setSelected(selectedId)},containerClassName:args_tabs_index_module_tabsTypes,view:"secondary",size:"xxs",scrollable:!0,children:keys.map((function(key,index){return(0,jsx_runtime.jsx)(tabs_modern.Tab,{id:index,title:key,children:components[key]?(0,jsx_runtime.jsx)(dist.Ed,{of:components[key]}):(0,jsx_runtime.jsx)("div",{className:args_tabs_index_module_error,children:"Что-то пошло не так "})},key)}))})};try{ArgsTabs.displayName="ArgsTabs",ArgsTabs.__docgenInfo={description:"",displayName:"ArgsTabs",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Record<string, ReactNode>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/args-tabs/component.tsx#ArgsTabs"]={docgenInfo:ArgsTabs.__docgenInfo,name:"ArgsTabs",path:".storybook/blocks/args-tabs/component.tsx#ArgsTabs"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/icons/GithubIcon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return GithubIcon}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GithubIcon=function GithubIcon(_ref){var _ref$fill=_ref.fill,fill=void 0===_ref$fill?"#24292E":_ref$fill,_ref$width=_ref.width,width=void 0===_ref$width?32:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?32:_ref$height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 32 32",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:fill})})};GithubIcon.__docgenInfo={description:"",methods:[],displayName:"GithubIcon",props:{fill:{defaultValue:{value:"'#24292E'",computed:!1},required:!1},width:{defaultValue:{value:"32",computed:!1},required:!1},height:{defaultValue:{value:"32",computed:!1},required:!1}}}},"./packages/hatching-progress-bar/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return HatchingProgressBar}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={container:"container_Ko3hQ",hatch:"hatch_BSCyW",filled:"filled_W7uye",positive:"positive_zjmGh",attention:"attention_tCtBQ",negative:"negative_M8h9I",link:"link_a5i6v",tertiary:"tertiary_I6Spr",secondary:"secondary_cUgeC",primary:"primary_gRkuF",accent:"accent_Q8lOm"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HatchingProgressBar=react.forwardRef((function(_ref,ref){var className=_ref.className,value=_ref.value,hatchValue=_ref.hatchValue,_ref$view=_ref.view,view=void 0===_ref$view?"positive":_ref$view,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsxs)("div",{role:"progressbar","aria-valuenow":Math.round(value),"aria-valuemin":0,"aria-valuemax":100,className:classnames_default()(index_module.container,className),"data-test-id":dataTestId,ref:ref,children:[(0,jsx_runtime.jsx)("div",{className:index_module.hatch,style:{transform:"translateX(".concat(hatchValue-100,"%)")}}),(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.filled,index_module[view]),style:{transform:"translateX(".concat(value-100,"%)")}})]})}));try{HatchingProgressBar.displayName="HatchingProgressBar",HatchingProgressBar.__docgenInfo={description:"",displayName:"HatchingProgressBar",props:{value:{defaultValue:null,description:"Значение заполненной части 0-100",name:"value",required:!0,type:{name:"number"}},hatchValue:{defaultValue:null,description:"Значение будущей заполненной части 0-100",name:"hatchValue",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"Css-класс для стилизации",name:"className",required:!1,type:{name:"string"}},view:{defaultValue:{value:"positive"},description:"Цвет заполнения",name:"view",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"attention"'},{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"accent"'}]}},dataTestId:{defaultValue:null,description:"Id компонента для тестов",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/hatching-progress-bar/src/Component.tsx#HatchingProgressBar"]={docgenInfo:HatchingProgressBar.__docgenInfo,name:"HatchingProgressBar",path:"packages/hatching-progress-bar/src/Component.tsx#HatchingProgressBar"})}catch(__react_docgen_typescript_loader_error){}}}]);