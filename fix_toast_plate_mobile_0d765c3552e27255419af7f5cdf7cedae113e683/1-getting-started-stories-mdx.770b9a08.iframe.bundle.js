"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[2900],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./docs/1.getting-started.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return _1_getting_started_stories}});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/button/modern/index.js"),ArrowRightMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ArrowRightMIcon.js"),index_module_plate="plate_AAkfC",index_module_titleWrapper="titleWrapper_Q1nIa",index_module_title="title_vy75y",index_module_description="description_vWbR3",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Plate=function Plate(_ref){var title=_ref.title,description=_ref.description,link=_ref.link;return(0,jsx_runtime.jsxs)("a",{className:index_module_plate,href:link,children:[(0,jsx_runtime.jsxs)("div",{className:index_module_titleWrapper,children:[(0,jsx_runtime.jsx)("span",{className:index_module_title,children:title}),(0,jsx_runtime.jsx)(ArrowRightMIcon.ArrowRightMIcon,{})]}),(0,jsx_runtime.jsx)("div",{className:index_module_description,children:description})]})};try{Plate.displayName="Plate",Plate.__docgenInfo={description:"",displayName:"Plate",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/pages/intro/components/plate/index.tsx#Plate"]={docgenInfo:Plate.__docgenInfo,name:"Plate",path:".storybook/pages/intro/components/plate/index.tsx#Plate"})}catch(__react_docgen_typescript_loader_error){}var Logo=function Logo(_ref){var className=_ref.className;return(0,jsx_runtime.jsxs)("svg",{width:"262",height:"56",viewBox:"0 0 262 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:className,children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_2814_234170",children:(0,jsx_runtime.jsx)("rect",{width:"262",height:"56",fill:"white"})})}),(0,jsx_runtime.jsxs)("g",{clipPath:"url(#clip0_2814_234170)",children:[(0,jsx_runtime.jsx)("path",{d:"M81.8256 21.4642C88.4149 21.4642 90.5724 16.6684 90.6891 14.1828H84.9745C84.6829 14.9431 83.8665 16.1128 81.8256 16.1128C79.4931 16.1128 78.1228 13.8903 78.1228 10.7321C78.1228 7.57389 79.4931 5.35144 81.8256 5.35144C83.8082 5.35144 84.6829 6.52115 84.9745 7.31071H90.6891C90.5141 4.38642 88.0358 0 81.8256 0C76.0235 0 72 4.094 72 10.7321C72 17.4287 76.0527 21.4642 81.8256 21.4642Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M100.457 5.23438C95.7627 5.23438 92.3223 8.30486 92.3223 13.3639C92.3223 18.3936 95.7627 21.5226 100.457 21.5226C105.151 21.5226 108.592 18.3936 108.592 13.3639C108.592 8.30486 105.151 5.23438 100.457 5.23438ZM100.457 16.7268C98.8533 16.7268 98.0369 15.3231 98.0369 13.3639C98.0369 11.4338 98.8533 10.0302 100.457 10.0302C102.061 10.0302 102.877 11.4338 102.877 13.3639C102.877 15.3231 102.061 16.7268 100.457 16.7268Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M117.017 13.9495C117.017 12.1365 117.863 11.3177 119.933 11.3177H123.636V5.64453H121.099C118.417 5.64453 117.367 7.01895 117.017 7.66229V5.64453H111.303V21.114H117.017V13.9495Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M133.338 5.23438C128.615 5.23438 125.437 8.42183 125.437 13.3639C125.437 18.3059 128.527 21.5226 133.659 21.5226C138.877 21.5226 140.948 18.4814 141.093 16.2882H135.408C135.204 16.5513 134.737 17.0777 133.659 17.0777C132.142 17.0777 131.151 16.0542 131.064 14.3874H141.181V13.3639C141.181 8.42183 138.207 5.23438 133.338 5.23438ZM133.338 9.24064C134.562 9.24064 135.379 10.0009 135.554 11.2584H131.093C131.239 10.0009 132.055 9.24064 133.338 9.24064Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M81.8256 50.7064C88.4149 50.7064 90.5724 45.9106 90.6891 43.4249H84.9745C84.6829 44.1853 83.8665 45.355 81.8256 45.355C79.4931 45.355 78.1228 43.1325 78.1228 39.9743C78.1228 36.8161 79.4931 34.5936 81.8256 34.5936C83.8082 34.5936 84.6829 35.7633 84.9745 36.5529H90.6891C90.5141 33.6286 88.0359 29.2422 81.8256 29.2422C76.0235 29.2422 72 33.3362 72 39.9743C72 46.6709 76.0527 50.7064 81.8256 50.7064Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M100.457 34.4766C95.7627 34.4766 92.3223 37.5471 92.3223 42.6061C92.3223 47.6359 95.7627 50.7649 100.457 50.7649C105.151 50.7649 108.592 47.6359 108.592 42.6061C108.592 37.5471 105.151 34.4766 100.457 34.4766ZM100.457 45.9691C98.8533 45.9691 98.0369 44.5654 98.0369 42.6061C98.0369 40.6761 98.8533 39.2725 100.457 39.2725C102.061 39.2725 102.877 40.6761 102.877 42.6061C102.877 44.5654 102.061 45.9691 100.457 45.9691Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M111.303 50.3556H117.017V41.729C117.017 40.413 117.746 39.5357 119.058 39.5357C120.341 39.5357 121.099 40.413 121.099 41.729V50.3556H126.814V41.729C126.814 40.413 127.543 39.5357 128.855 39.5357C130.137 39.5357 130.896 40.413 130.896 41.729V50.3556H136.61V40.6762C136.61 37.0501 134.423 34.5352 130.925 34.5352C127.951 34.5352 126.435 36.1436 125.852 37.0209C124.919 35.471 123.315 34.5352 121.274 34.5352C118.971 34.5352 117.542 35.7634 117.017 36.5237V34.8861H111.303V50.3556Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M145.689 48.3964C145.893 48.7766 147.118 50.648 150.004 50.648C153.62 50.648 156.244 47.8116 156.244 42.6063C156.244 37.4304 153.62 34.5938 150.004 34.5938C147.147 34.5938 145.835 36.6407 145.689 36.9916V34.8862H139.975V55.9995H145.689V48.3964ZM145.631 42.6063C145.631 40.5886 146.564 39.3895 148.051 39.3895C149.567 39.3895 150.471 40.5886 150.471 42.6063C150.471 44.6533 149.567 45.8522 148.051 45.8522C146.564 45.8522 145.631 44.6533 145.631 42.6063Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M166.429 34.4766C161.734 34.4766 158.294 37.5471 158.294 42.6061C158.294 47.6359 161.734 50.7649 166.429 50.7649C171.123 50.7649 174.563 47.6359 174.563 42.6061C174.563 37.5471 171.123 34.4766 166.429 34.4766ZM166.429 45.9691C164.825 45.9691 164.009 44.5654 164.009 42.6061C164.009 40.6761 164.825 39.2725 166.429 39.2725C168.032 39.2725 168.849 40.6761 168.849 42.6061C168.849 44.5654 168.032 45.9691 166.429 45.9691Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M177.274 50.3556H182.989V41.7874C182.989 40.4423 183.747 39.5357 185.088 39.5357C186.4 39.5357 187.187 40.4423 187.187 41.7874V50.3556H192.902V40.7347C192.902 37.0794 190.744 34.5352 187.304 34.5352C184.971 34.5352 183.543 35.7927 182.989 36.5822V34.8861H177.274V50.3556Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M203.438 34.4766C198.714 34.4766 195.536 37.6641 195.536 42.6061C195.536 47.5482 198.627 50.7649 203.758 50.7649C208.977 50.7649 211.047 47.7236 211.193 45.5304H205.508C205.304 45.7936 204.837 46.32 203.758 46.32C202.242 46.32 201.251 45.2965 201.164 43.6296H211.281V42.6061C211.281 37.6641 208.307 34.4766 203.438 34.4766ZM203.438 38.4829C204.662 38.4829 205.479 39.2432 205.654 40.5007H201.193C201.338 39.2432 202.155 38.4829 203.438 38.4829Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M213.918 50.3556H219.633V41.7874C219.633 40.4423 220.391 39.5357 221.732 39.5357C223.044 39.5357 223.831 40.4423 223.831 41.7874V50.3556H229.546V40.7347C229.546 37.0794 227.389 34.5352 223.948 34.5352C221.616 34.5352 220.187 35.7927 219.633 36.5822V34.8861H213.918V50.3556Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M234.873 45.531C234.873 48.6015 236.477 50.3561 240.092 50.3561H244.874V45.3263H242.571C241.025 45.3263 240.588 44.7123 240.588 43.3672V39.5655H244.874V34.8867H240.588V29.5938H234.873V34.8867H231.433V39.5655H234.873V45.531Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M255.09 44.9163C256.052 45.0041 256.285 45.355 256.285 45.9106C256.285 46.5247 255.615 46.8464 254.507 46.8464C253.224 46.8464 252.67 46.2323 252.553 45.9983H246.722C246.955 47.7236 248.647 50.7649 254.507 50.7649C259.493 50.7649 262 48.8349 262 45.5012C262 42.0798 259.93 40.5007 255.207 40.2375C254.653 40.2082 254.332 40.179 253.865 40.1497C253.078 40.0913 252.67 39.7988 252.67 39.2725C252.67 38.6584 253.224 38.3367 254.186 38.3367C255.294 38.3367 255.761 38.8338 255.906 39.0093H261.563C261.329 37.284 259.842 34.4766 254.099 34.4766C249.784 34.4766 246.985 36.2897 246.985 39.5941C246.985 43.074 249.784 44.4192 253.457 44.7701C254.011 44.8286 254.419 44.8578 255.09 44.9163Z",fill:"var(--color-light-bg-secondary-inverted)"}),(0,jsx_runtime.jsx)("path",{d:"M27.6436 0L32.1851 2.79209L38.1573 8.70644L33.6159 5.91435L27.6436 0Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M27.6436 0L32.1851 2.79209L38.1573 8.70644L33.6159 5.91435L27.6436 0Z",fill:"#020001",fillOpacity:"0.2"}),(0,jsx_runtime.jsx)("path",{d:"M33.6171 5.91406L38.1586 8.70615L10.5112 39.7278L5.96973 36.9393L33.6171 5.91406Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M33.6171 5.91406L38.1586 8.70615L10.5112 39.7278L5.96973 36.9393L33.6171 5.91406Z",fill:"#020001",fillOpacity:"0.4"}),(0,jsx_runtime.jsx)("path",{d:"M27.6439 0L33.6161 5.91435L5.96869 36.9396L0 31.0217L27.6439 0Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M6.11774 36.9023L43.0226 44.2342L40.6486 53.2134L3.74023 45.8815L6.11774 36.9023Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M43.0223 44.2305L47.5638 47.019L45.1899 55.9982L40.6484 53.2097L43.0223 44.2305Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M43.0223 44.2305L47.5638 47.019L45.1899 55.9982L40.6484 53.2097L43.0223 44.2305Z",fill:"#020001",fillOpacity:"0.2"}),(0,jsx_runtime.jsx)("path",{d:"M40.6486 53.2109L45.1901 55.9994L8.2817 48.671L3.74023 45.8789L40.6486 53.2109Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M40.6486 53.2109L45.1901 55.9994L8.2817 48.671L3.74023 45.8789L40.6486 53.2109Z",fill:"#020001",fillOpacity:"0.4"}),(0,jsx_runtime.jsx)("path",{d:"M51.4585 41.2461L56 44.0382L47.6538 47.1067L43.1123 44.3182L51.4585 41.2461Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M51.4585 41.2461L56 44.0382L47.6538 47.1067L43.1123 44.3182L51.4585 41.2461Z",fill:"#020001",fillOpacity:"0.4"}),(0,jsx_runtime.jsx)("path",{d:"M42.1689 2.88281L46.7103 5.6749L55.9997 44.0393L51.4582 41.2472L42.1689 2.88281Z",fill:"var(--color-light-bg-accent)"}),(0,jsx_runtime.jsx)("path",{d:"M42.1689 2.88281L46.7103 5.6749L55.9997 44.0393L51.4582 41.2472L42.1689 2.88281Z",fill:"#020001",fillOpacity:"0.2"}),(0,jsx_runtime.jsx)("path",{d:"M42.1681 2.88281L51.4575 41.2472L43.1113 44.3192L33.8184 5.95482L42.1681 2.88281Z",fill:"var(--color-light-bg-accent)"})]})]})};Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"};var GithubIcon=__webpack_require__("./.storybook/components/icons/GithubIcon.jsx"),utils=__webpack_require__("./.storybook/addons/utils.js"),package_0=__webpack_require__("./package.json"),intro_index_module_page="page_YYrU9",intro_index_module_intro="intro_f25wR",intro_index_module_version="version_yh7Hm",intro_index_module_logo="logo_S_PSZ",intro_index_module_desc="desc_txzZq",intro_index_module_ghButton="ghButton_EiPH3",intro_index_module_introFooter="introFooter_Z4lH2",intro_index_module_supportDesc="supportDesc_Di99d",intro_index_module_maintainers="maintainers_Lt_2L",intro_index_module_maintainer="maintainer_qlTdu",intro_index_module_maintainterPhoto="maintainterPhoto_aHMcI",intro_index_module_whereToStart="whereToStart_r9ZWN",intro_index_module_plates="plates_YEGuO",MAINTAINERS=["Lacronts","reme3d2y","Valeri8888","AleksMaifet","Oladii","SiebenSieben"],MAINTAINERS_COUNT=MAINTAINERS.length,MAINTAINERS_CONTAINER_WIDTH=40*MAINTAINERS_COUNT+9*(MAINTAINERS_COUNT-1),BASE_URL="".concat(window.location.href.split("iframe")[0]),PLATE_DATA=[{title:"Компоненты",description:"Всё самое актуальное",link:BASE_URL+"?path=/docs/components-overview--docs"},{title:"Ассеты",description:"Иконки, логотипы и флаги",link:BASE_URL+"?path=/docs/icons-overview--docs"},{title:"Подключение",description:"Импорты и конфигурация",link:BASE_URL+"?path=/docs/for-users-подключение--docs"},{title:"Контрибьютинг",description:"Приносите свои реквесты",link:BASE_URL+"?path=/docs/for-contributors-создание-компонентов--docs"}],Intro=function Intro(){var _useState=(0,react.useState)((function(){var _document$getElementB;return null!==(_document$getElementB=document.getElementById(utils.wy))&&void 0!==_document$getElementB&&_document$getElementB.textContent?"dark":"light"})),_useState2=(0,slicedToArray.Z)(_useState,2),mode=_useState2[0],setMode=_useState2[1];return(0,react.useEffect)((function(){var handleChangeMode=function handleChangeMode(e){var mode=e.detail.mode;setMode(mode)};return document.addEventListener("mode-change",handleChangeMode),function(){document.removeEventListener("mode-change",handleChangeMode)}}),[]),(0,jsx_runtime.jsxs)("div",{"data-mode":mode,className:classnames_default()("sb-unstyled",intro_index_module_page),children:[(0,jsx_runtime.jsxs)("div",{className:intro_index_module_intro,children:[(0,jsx_runtime.jsx)("div",{className:intro_index_module_version,children:package_0.i8}),(0,jsx_runtime.jsx)(Logo,{className:intro_index_module_logo}),(0,jsx_runtime.jsx)("div",{className:intro_index_module_desc,children:"Актуальные и протестированные компоненты, отвечающие требованиям доступности"}),(0,jsx_runtime.jsx)(modern.Button,{className:intro_index_module_ghButton,view:"primary",size:"s",href:"https://github.com/core-ds/core-components",target:"_blank",rel:"noopener noreferrer",leftAddons:(0,jsx_runtime.jsx)(GithubIcon.E,{fill:"var(--color-light-bg-primary)",width:20,height:20}),children:"View on GitHub"}),(0,jsx_runtime.jsxs)("div",{className:intro_index_module_introFooter,children:[(0,jsx_runtime.jsx)("span",{className:intro_index_module_supportDesc,children:"Выделенная команда и оперативная поддержка"}),(0,jsx_runtime.jsx)("div",{className:intro_index_module_maintainers,style:{width:MAINTAINERS_CONTAINER_WIDTH},children:MAINTAINERS.map((function(login,idx){var isLast=idx===MAINTAINERS_COUNT-1;return(0,jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(login),className:intro_index_module_maintainer,style:{zIndex:MAINTAINERS.length-idx,right:isLast?0:-9*(MAINTAINERS_COUNT-idx-1)},children:(0,jsx_runtime.jsx)("img",{width:40,height:40,src:"./images/maintainers/".concat(login,".png"),alt:login,className:intro_index_module_maintainterPhoto})},login)}))})]})]}),(0,jsx_runtime.jsx)("div",{className:intro_index_module_whereToStart,children:"С чего начать?"}),(0,jsx_runtime.jsx)("div",{className:intro_index_module_plates,children:PLATE_DATA.map((function(_ref){var title=_ref.title,description=_ref.description,link=_ref.link;return(0,jsx_runtime.jsx)(Plate,{title:title,description:description,link:link},title)}))})]})};function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Quick start",parameters:{previewTabs:{canvas:{hidden:!0}}},id:"intro"}),"\n",(0,jsx_runtime.jsx)(Intro,{})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Quick start",id:"intro",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};var _1_getting_started_stories=componentMeta},"./.storybook/components/icons/GithubIcon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return GithubIcon}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GithubIcon=function GithubIcon(_ref){var _ref$fill=_ref.fill,fill=void 0===_ref$fill?"#24292E":_ref$fill,_ref$width=_ref.width,width=void 0===_ref$width?32:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?32:_ref$height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 32 32",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:fill})})};GithubIcon.__docgenInfo={description:"",methods:[],displayName:"GithubIcon",props:{fill:{defaultValue:{value:"'#24292E'",computed:!1},required:!1},width:{defaultValue:{value:"32",computed:!1},required:!1},height:{defaultValue:{value:"32",computed:!1},required:!1}}}}}]);
//# sourceMappingURL=1-getting-started-stories-mdx.770b9a08.iframe.bundle.js.map