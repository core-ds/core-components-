"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[160,7881,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/status-badge/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},status_badge:function(){return status_badge}});var _status_badge$paramet,_status_badge$paramet2,_status_badge$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_gap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/gap/modern/index.js"),_alfalab_core_components_status_badge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/status-badge/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/StatusBadge",component:_alfalab_core_components_status_badge__WEBPACK_IMPORTED_MODULE_4__.StatusBadge,id:"StatusBadge"},viewOptions=["positive-checkmark","negative-cross","negative-alert","negative-block","attention-alert","neutral-information","neutral-operation","neutral-cross"],status_badge={name:"StatusBadge",render:function render(){var previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_5__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_5__.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0,colors=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("colors",["default","inverted"],"default");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},"inverted"===colors?{backgroundColor:"var(--color-light-base-bg-primary-inverted)"}:previewStyles),children:isPreview?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_alfalab_core_components_status_badge__WEBPACK_IMPORTED_MODULE_4__.StatusBadge,{view:"positive-checkmark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_alfalab_core_components_gap__WEBPACK_IMPORTED_MODULE_3__.Gap,{size:"xs",direction:"horizontal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_alfalab_core_components_status_badge__WEBPACK_IMPORTED_MODULE_4__.StatusBadge,{view:"attention-alert"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_alfalab_core_components_gap__WEBPACK_IMPORTED_MODULE_3__.Gap,{size:"xs",direction:"horizontal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_alfalab_core_components_status_badge__WEBPACK_IMPORTED_MODULE_4__.StatusBadge,{view:"negative-cross"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_alfalab_core_components_status_badge__WEBPACK_IMPORTED_MODULE_4__.StatusBadge,{view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("view",viewOptions,"positive-checkmark"),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("size",[16,20,24,32,40],24),colors:colors})})}};__webpack_exports__.default=meta,status_badge.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},status_badge.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_status_badge$paramet=status_badge.parameters)||void 0===_status_badge$paramet?void 0:_status_badge$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'StatusBadge',\n  render: () => {\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    const colors = select('colors', ['default', 'inverted'], 'default');\n    return <div style={{\n      ...(colors === 'inverted' ? {\n        backgroundColor: 'var(--color-light-base-bg-primary-inverted)'\n      } : previewStyles)\n    }}>\n                {isPreview ? <>\n                        <StatusBadge view='positive-checkmark' />\n                        <Gap size='xs' direction='horizontal' />\n                        <StatusBadge view='attention-alert' />\n                        <Gap size='xs' direction='horizontal' />\n                        <StatusBadge view='negative-cross' />\n                    </> : <StatusBadge view={select('view', viewOptions, 'positive-checkmark')} size={select('size', [16, 20, 24, 32, 40], 24)} colors={colors} />}\n            </div>;\n  }\n}"},null===(_status_badge$paramet2=status_badge.parameters)||void 0===_status_badge$paramet2?void 0:null===(_status_badge$paramet3=_status_badge$paramet2.docs)||void 0===_status_badge$paramet3?void 0:_status_badge$paramet3.source)})});let __namedExportsOrder=["status_badge"]},"./packages/status-badge/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/status-badge/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"виды-статусов",children:"Виды статусов"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компонент доступен в пяти размерах. Представленный ниже набор комбинаций иконки и цвета является единым для всех продуктов.\nЕсли нужной конфигурации нет, её придётся собрать на основе компонента ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/iconview--docs",children:"IconView"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:520,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<div>\n    {[\n        'negative-cross',\n        'negative-block',\n        'negative-alert',\n        'attention-alert',\n        'positive-checkmark',\n        'neutral-information',\n        'neutral-cross',\n        'neutral-operation',\n    ].map((view) => (\n        <React.Fragment key={view}>\n            <Space size={20} align='center' direction={isMobile() ? 'horizontal' : 'vertical'}>\n                {[40, 32, 24, 20, 16].map((size) => (\n                    <StatusBadge key={size} view={view} size={size} />\n                ))}\n            </Space>\n            <Gap size='l' direction={isMobile() ? 'vertical' : 'horizontal'} />\n        </React.Fragment>\n    ))}\n</div>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"кастомные-иконки",children:"Кастомные иконки"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Статусы могут содержать кастомные иконки"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:520,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const sizes = [16, 20, 24, 32, 40];\n    const customIcons = {\n        'positive-checkmark': {\n            16: AScoresCircleMIcon,\n            20: AScoresCircleMIcon,\n            24: AScoresCircleMIcon,\n            32: AScoresCircleMIcon,\n            40: AScoresCircleMIcon,\n        },\n    };\n    return (\n        <React.Fragment>\n            <Space size={20} align='center' direction={isMobile() ? 'horizontal' : 'vertical'}>\n                {sizes.reverse().map((size) => {\n                    return (\n                        <StatusBadge\n                            key={size}\n                            view={'positive-checkmark'}\n                            size={size}\n                            customIcons={customIcons}\n                        />\n                    );\n                })}\n            </Space>\n        </React.Fragment>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/status-badge/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { StatusBadge } from '@alfalab/core-components/status-badge';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:Component.O})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"StatusBadge",children:"Используется как индикатор состояния."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 1.2.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 1.1.1\n\n### Patch Changes\n\n<sup><time>13.06.2024</time></sup>\n\n### [#1229](https://github.com/core-ds/core-components/pull/1229)\n\n-   Изменили цветовые токены: color-light-neutral-1500 -> color-light-neutral-translucent-1300, color-light-neutral-1500-inverted -> color-light-neutral-translucent-1300-inverted, color-static-neutral-1500 -> color-static-neutral-translucent-1300, color-static-neutral-1500-inverted -> color-static-neutral-translucent-1300-inverted\n\n## 1.1.0\n\n### Minor Changes\n\n<sup><time>28.05.2024</time></sup>\n\n### [#1158](https://github.com/core-ds/core-components/pull/1158)\n\n-   В toast-plate компоненте badge заменен на status-badge\n-   Добавлена возможность принимать кастомные иконки для status-badge\n\n## Миграция для toast-plate компонента\n\n-   Добавлены изменения в пропс getBadgeIcons. Теперь он будет принимать объект в виде:\n\n```\n{\n  'positive-checkmark': {\n      24: AScoresCircleMIcon,\n  },\n  'negative-cross': {\n    ...\n  },\n}\n```\n\n-   `'negative' | 'positive' | 'attention'` - `@deprеcated`\n    Их по-прежнему можно передавать в пропс `badge` (компоненты toast, toast-plate, notification), под капотом они автоматически преобразуютеся в `'negative-cross' | 'positive-checkmark' | 'attention-alert'` соответственно\n\n## 1.0.0\n\n### Major Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Добавлен новый компонент StatusBadge\n"})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}},"./packages/status-badge/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return StatusBadge}}),__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),CheckmarkCompactMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/CheckmarkCompactMIcon.js"),CheckmarkCompactSIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/CheckmarkCompactSIcon.js"),ClockHandsCompactMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ClockHandsCompactMIcon.js"),ClockHandsCompactSIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ClockHandsCompactSIcon.js"),CrossCompactMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/CrossCompactMIcon.js"),CrossCompactSIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/CrossCompactSIcon.js"),ExclamationCompactMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ExclamationCompactMIcon.js"),ExclamationCompactSIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ExclamationCompactSIcon.js"),InformationCompactMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/InformationCompactMIcon.js"),InformationCompactSIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/InformationCompactSIcon.js"),StopBrickCompactMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/StopBrickCompactMIcon.js"),StopBrickMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/StopBrickMIcon.js"),StopBrickSIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/StopBrickSIcon.js"),ICON_MAP={"positive-checkmark":{16:CheckmarkCompactSIcon.CheckmarkCompactSIcon,20:CheckmarkCompactSIcon.CheckmarkCompactSIcon,24:CheckmarkCompactMIcon.CheckmarkCompactMIcon,32:CheckmarkCompactMIcon.CheckmarkCompactMIcon,40:CheckmarkCompactMIcon.CheckmarkCompactMIcon},"negative-cross":{16:CrossCompactSIcon.CrossCompactSIcon,20:CrossCompactSIcon.CrossCompactSIcon,24:CrossCompactMIcon.CrossCompactMIcon,32:CrossCompactMIcon.CrossCompactMIcon,40:CrossCompactMIcon.CrossCompactMIcon},"negative-alert":{16:ExclamationCompactSIcon.ExclamationCompactSIcon,20:ExclamationCompactSIcon.ExclamationCompactSIcon,24:ExclamationCompactMIcon.ExclamationCompactMIcon,32:ExclamationCompactMIcon.ExclamationCompactMIcon,40:ExclamationCompactMIcon.ExclamationCompactMIcon},"negative-block":{16:StopBrickSIcon.StopBrickSIcon,20:StopBrickSIcon.StopBrickSIcon,24:StopBrickCompactMIcon.StopBrickCompactMIcon,32:StopBrickMIcon.StopBrickMIcon,40:StopBrickMIcon.StopBrickMIcon},"attention-alert":{16:ExclamationCompactSIcon.ExclamationCompactSIcon,20:ExclamationCompactSIcon.ExclamationCompactSIcon,24:ExclamationCompactMIcon.ExclamationCompactMIcon,32:ExclamationCompactMIcon.ExclamationCompactMIcon,40:ExclamationCompactMIcon.ExclamationCompactMIcon},"neutral-information":{16:InformationCompactSIcon.InformationCompactSIcon,20:InformationCompactSIcon.InformationCompactSIcon,24:InformationCompactMIcon.InformationCompactMIcon,32:InformationCompactMIcon.InformationCompactMIcon,40:InformationCompactMIcon.InformationCompactMIcon},"neutral-operation":{16:ClockHandsCompactSIcon.ClockHandsCompactSIcon,20:ClockHandsCompactSIcon.ClockHandsCompactSIcon,24:ClockHandsCompactMIcon.ClockHandsCompactMIcon,32:ClockHandsCompactMIcon.ClockHandsCompactMIcon,40:ClockHandsCompactMIcon.ClockHandsCompactMIcon},"neutral-cross":{16:CrossCompactSIcon.CrossCompactSIcon,20:CrossCompactSIcon.CrossCompactSIcon,24:CrossCompactMIcon.CrossCompactMIcon,32:CrossCompactMIcon.CrossCompactMIcon,40:CrossCompactMIcon.CrossCompactMIcon}},useStatusBadgeIcon=function(view,size,customIcons){var iconsMap=ICON_MAP;return customIcons&&(iconsMap=Object.keys(ICON_MAP).reduce(function(acc,current){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},acc),(0,defineProperty.Z)({},current,(0,objectSpread2.Z)((0,objectSpread2.Z)({},ICON_MAP[current]),customIcons[current])))},{})),{Icon:iconsMap[view][size]}},index_module={component:"component_dxoyG","size-16":"size-16_Sd_sg","size-20":"size-20_EUjSh","size-24":"size-24_mzxIV","size-32":"size-32_uWgnN","size-40":"size-40_EfJcf"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),colorStyles={default:{"positive-checkmark":"positive-checkmark_urXYY","negative-cross":"negative-cross_chyPM","negative-alert":"negative-alert_B2z8Y","negative-block":"negative-block_diHgw","attention-alert":"attention-alert_L4uFf","neutral-information":"neutral-information_IUdzf","neutral-operation":"neutral-operation_u91tq","neutral-cross":"neutral-cross_yg5nw"},inverted:{"positive-checkmark":"positive-checkmark_bqmkY","negative-cross":"negative-cross_iBpBY","negative-alert":"negative-alert_utPmX","negative-block":"negative-block_rIUDw","attention-alert":"attention-alert_FgLbK","neutral-information":"neutral-information_IAReC","neutral-operation":"neutral-operation_RuHUL","neutral-cross":"neutral-cross_miMQO"}},StatusBadge=function(_ref){var className=_ref.className,dataTestId=_ref.dataTestId,_ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,view=_ref.view,_ref$colors=_ref.colors,colors=void 0===_ref$colors?"default":_ref$colors,Icon=useStatusBadgeIcon(view,size,_ref.customIcons).Icon;return(0,jsx_runtime.jsx)("div",{className:classnames_default()("component_dxoyG",className,index_module["size-".concat(size)],colorStyles[colors].component,colorStyles[colors][view]),"data-test-id":dataTestId,children:(0,jsx_runtime.jsx)(Icon,{})})};try{StatusBadge.displayName="StatusBadge",StatusBadge.__docgenInfo={description:"",displayName:"StatusBadge",props:{className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"Размер компонента",name:"size",required:!1,type:{name:"enum",value:[{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"}]}},colors:{defaultValue:{value:"default"},description:"Набор цветов для компонента",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},view:{defaultValue:null,description:"Вид бейджа.",name:"view",required:!0,type:{name:"enum",value:[{value:'"positive-checkmark"'},{value:'"negative-cross"'},{value:'"negative-alert"'},{value:'"negative-block"'},{value:'"attention-alert"'},{value:'"neutral-information"'},{value:'"neutral-operation"'},{value:'"neutral-cross"'}]}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},customIcons:{defaultValue:null,description:"Кастомные иконки",name:"customIcons",required:!1,type:{name:"Partial<Record<StatusBadgeViews, Partial<Record<StatusBadgeSizes, StatusBadgeIcon>>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/status-badge/src/Component.tsx#StatusBadge"]={docgenInfo:StatusBadge.__docgenInfo,name:"StatusBadge",path:"packages/status-badge/src/Component.tsx#StatusBadge"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);