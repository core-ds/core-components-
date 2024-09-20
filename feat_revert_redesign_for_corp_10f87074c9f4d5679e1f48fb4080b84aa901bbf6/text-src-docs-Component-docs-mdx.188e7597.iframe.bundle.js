"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7760,7342,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/text/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},text:function(){return text}});var _text$parameters,_text$parameters2,_text$parameters2$doc,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/text/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Text",component:_alfalab_core_components_text__WEBPACK_IMPORTED_MODULE_2__.Text,id:"Text"},TAGS=["span","p","div","h1","h2","h3","h4","h5","h6"],text={name:"Text",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_text__WEBPACK_IMPORTED_MODULE_2__.Text,{tag:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("tag",TAGS,"span"),align:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("align",["left","right","center"],"left"),rowLimit:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("rowLimit",void 0),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("view","paragraph-primary-large"),color:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("color","rgba(4, 4, 19, 0.55)"),textBackgroundColor:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("textBackgroundColor","rgba(15, 25, 55, 0.1)"),children:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("children","В 2001 году в России начал действовать Федеральный закон №115 \xabО противодействии легализации доходов, полученных преступным путём, и финансированию терроризма\xbb. В рамках закона банки могут блокировать карты, отказывать в проведении сомнительных операций, ограничить доступ в интернет-банк или запрашивать документы, если по операции клиента возникли подозрения.")})}};__webpack_exports__.default=meta,text.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},text.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_text$parameters=text.parameters)||void 0===_text$parameters?void 0:_text$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'Text',\n  render: () => <Text tag={select('tag', TAGS, 'span')} align={select('align', ['left', 'right', 'center'], 'left')} rowLimit={number('rowLimit', undefined)} view={textAddons('view', 'paragraph-primary-large')} color={textAddons('color', 'rgba(4, 4, 19, 0.55)')} textBackgroundColor={textAddons('textBackgroundColor', 'rgba(15, 25, 55, 0.1)')}>\n            {textAddons('children', 'В 2001 году в России начал действовать Федеральный закон №115 \xabО противодействии легализации доходов, полученных преступным путём, и финансированию терроризма\xbb. В рамках закона банки могут блокировать карты, отказывать в проведении сомнительных операций, ограничить доступ в интернет-банк или запрашивать документы, если по операции клиента возникли подозрения.')}\n        </Text>\n}"},null===(_text$parameters2=text.parameters)||void 0===_text$parameters2?void 0:null===(_text$parameters2$doc=_text$parameters2.docs)||void 0===_text$parameters2$doc?void 0:_text$parameters2$doc.source)})});let __namedExportsOrder=["text"]},"./packages/text/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/text/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"стили-текста",children:"Стили текста"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компоненту можно задать необходимый стиль текста."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<div>\n    <Text view='headline-system-small'>Headline-system-small</Text>\n    <Gap size='m' />\n    <Text view='paragraph-primary-medium'>Paragraph-primary-medium</Text>\n</div>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"цвет-текста-и-фона",children:"Цвет текста и фона"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Тексту и фону под ним можно здать необходимый цвет."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Text\n    color='var(--color-light-text-positive)'\n    textBackgroundColor='var(--color-light-status-muted-attention)'\n>\n    Пример с покраской фона\n</Text>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"отсечение-текста",children:"Отсечение текста"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Можно настроить отсечение текста при переполнении одной, двух или трёх строк."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<div style={{ width: isMobile() ? 320 : 430 }}>\n    <Text rowLimit={1}>\n        Я взял со стола, как теперь помню, червонного туза и бросил кверху: дыхание у всех\n        остановилось;\n    </Text>\n</div>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"выравнивание",children:"Выравнивание"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<div style={{ width: isMobile() ? 320 : 200 }}>\n    <Text tag='div' align='center'>\n        По центру\n    </Text>\n    <Gap size='s' />\n    <Text tag='div' align='left'>\n        По левому краю\n    </Text>\n    <Gap size='s' />\n    <Text tag='div' align='right'>\n        По правому краю\n    </Text>\n</div>\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/text/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Text } from '@alfalab/core-components/text';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.Text})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Text",children:"Используется для отображения и форматирования текстового контента. Компонент поддерживает все доступные дизайнерам стили текста, но не поддерживает адаптивность."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 1.2.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n## 1.2.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 1.1.0\n\n### Minor Changes\n\n<sup><time>19.07.2024</time></sup>\n\n### [#1299](https://github.com/core-ds/core-components/pull/1299)\n\n-   Добавлено новое свойство monospaceNumbers, которое делает цифры моноширинными\n\n## 1.0.0\n\n### Major Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1067](https://github.com/core-ds/core-components/pull/1067)\n\n-   Добавлен новый компонент Text\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/text/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Text:function(){return Text}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={component:"component_WdxB2",monospace:"monospace_Ad7Vn",left:"left_LQ7OW",right:"right_Bg7pD",center:"center_R8mvl","row-limit-1":"row-limit-1_s9vgo","row-limit-2":"row-limit-2_TiGFo","row-limit-3":"row-limit-3_MrxMt"},mixin_module={"accent-caps":"accent-caps_Ih4Cf","accent-component-primary":"accent-component-primary_gU2th","accent-component-secondary":"accent-component-secondary_wMJ_O","accent-primary-large":"accent-primary-large_ikusO","accent-primary-medium":"accent-primary-medium_Tn_eK","accent-primary-small":"accent-primary-small_KPJ6y","accent-secondary-large":"accent-secondary-large__tzZZ","accent-secondary-medium":"accent-secondary-medium_VxAk1","accent-secondary-small":"accent-secondary-small_DuU_M","action-caps":"action-caps_A9Y6b","action-component-primary":"action-component-primary_QNXlW","action-component-secondary":"action-component-secondary_euZyl","action-primary-large":"action-primary-large_vu6di","action-primary-medium":"action-primary-medium_aHN9s","action-primary-small":"action-primary-small_oKC01","action-secondary-large":"action-secondary-large_dkSPK","action-secondary-medium":"action-secondary-medium_FpOzi","action-secondary-small":"action-secondary-small_BsVsy","headline-mobile-large":"headline-mobile-large_q5C7U","headline-mobile-medium":"headline-mobile-medium_gqXW9","headline-mobile-small":"headline-mobile-small_SqMs0","headline-mobile-xlarge":"headline-mobile-xlarge_HU6c0","headline-mobile-xsmall":"headline-mobile-xsmall_HSQEq","headline-system-mobile-large":"headline-system-mobile-large_ijGqS","headline-system-mobile-medium":"headline-system-mobile-medium_DUkE4","headline-system-mobile-small":"headline-system-mobile-small_QxPKp","headline-system-mobile-xlarge":"headline-system-mobile-xlarge_CeGxw","headline-system-mobile-xsmall":"headline-system-mobile-xsmall_x6KWV","headline-system-large":"headline-system-large_lV9r3","headline-system-medium":"headline-system-medium_iX5o2","headline-system-small":"headline-system-small_msNoJ","headline-system-xlarge":"headline-system-xlarge_GuCIF","headline-system-xsmall":"headline-system-xsmall_nQAPp","headline-large":"headline-large_MxrsQ","headline-medium":"headline-medium_MD8v8","headline-small":"headline-small_HVNBK","headline-xlarge":"headline-xlarge_DqjPD","headline-xsmall":"headline-xsmall_ZVG_b","key-large":"key-large_tUsR3","key-medium":"key-medium_p95V2","key-small":"key-small_TsFwn","key-xlarge":"key-xlarge_NHbSN","key-xsmall":"key-xsmall_SIhIK","paragraph-caps":"paragraph-caps_kqrvE","paragraph-component-primary":"paragraph-component-primary_zwo4d","paragraph-component-secondary":"paragraph-component-secondary_U_qHC","paragraph-primary-large":"paragraph-primary-large_KdGEJ","paragraph-primary-medium":"paragraph-primary-medium_YtiPA","paragraph-primary-small":"paragraph-primary-small_LQkeE","paragraph-secondary-large":"paragraph-secondary-large_V_1ax","paragraph-secondary-medium":"paragraph-secondary-medium_noSNt","paragraph-secondary-small":"paragraph-secondary-small_lW0Hm","promo-mobile-large":"promo-mobile-large_YXIFJ","promo-mobile-medium":"promo-mobile-medium_CEkqL","promo-mobile-small":"promo-mobile-small_xFbuO","promo-mobile-xlarge":"promo-mobile-xlarge_mduKn","promo-mobile-xsmall":"promo-mobile-xsmall_zbq6n","promo-system-mobile-large":"promo-system-mobile-large_Xtrtr","promo-system-mobile-medium":"promo-system-mobile-medium_Z_ycy","promo-system-mobile-small":"promo-system-mobile-small_BAmyF","promo-system-mobile-xlarge":"promo-system-mobile-xlarge_wjEyF","promo-system-mobile-xsmall":"promo-system-mobile-xsmall_uHdAd","promo-system-large":"promo-system-large_uLf5E","promo-system-medium":"promo-system-medium_vXX8P","promo-system-small":"promo-system-small_oXLhw","promo-system-xlarge":"promo-system-xlarge_t2D12","promo-system-xsmall":"promo-system-xsmall_v3PNN","promo-large":"promo-large_bOgAu","promo-medium":"promo-medium_tztXl","promo-small":"promo-small_pDwvJ","promo-xlarge":"promo-xlarge_gfbQW","promo-xsmall":"promo-xsmall_U09H4","accent-component":"accent-component_p3eQE","action-component":"action-component_AMB9X","paragraph-component":"paragraph-component_jkfHS"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Text=function(_ref){var _ref$tag=_ref.tag,_ref$align=_ref.align,rowLimit=_ref.rowLimit,_ref$view=_ref.view,_ref$monospaceNumbers=_ref.monospaceNumbers,color=_ref.color,textBackgroundColor=_ref.textBackgroundColor,className=_ref.className,children=_ref.children,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsx)(void 0===_ref$tag?"span":_ref$tag,{className:classnames_default()("component_WdxB2",index_module[void 0===_ref$align?"left":_ref$align],mixin_module[void 0===_ref$view?"paragraph-primary-medium":_ref$view],(0,defineProperty.Z)((0,defineProperty.Z)({},index_module["row-limit-".concat(rowLimit)],rowLimit),"monospace_Ad7Vn",void 0!==_ref$monospaceNumbers&&_ref$monospaceNumbers),className),style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},color&&{color:color}),textBackgroundColor&&{backgroundColor:textBackgroundColor}),"data-test-id":dataTestId,children:children})};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{tag:{defaultValue:null,description:"HTML тег",name:"tag",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"span"'},{value:'"p"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},view:{defaultValue:{value:"paragraph-primary-medium"},description:"Cтиль типографики",name:"view",required:!1,type:{name:"enum",value:[{value:'"accent-caps"'},{value:'"accent-component-primary"'},{value:'"accent-component-secondary"'},{value:'"accent-primary-large"'},{value:'"accent-primary-medium"'},{value:'"accent-primary-small"'},{value:'"accent-secondary-large"'},{value:'"accent-secondary-medium"'},{value:'"accent-secondary-small"'},{value:'"action-caps"'},{value:'"action-component-primary"'},{value:'"action-component-secondary"'},{value:'"action-primary-large"'},{value:'"action-primary-medium"'},{value:'"action-primary-small"'},{value:'"action-secondary-large"'},{value:'"action-secondary-medium"'},{value:'"action-secondary-small"'},{value:'"headline-mobile-large"'},{value:'"headline-mobile-medium"'},{value:'"headline-mobile-small"'},{value:'"headline-mobile-xlarge"'},{value:'"headline-mobile-xsmall"'},{value:'"headline-system-mobile-large"'},{value:'"headline-system-mobile-medium"'},{value:'"headline-system-mobile-small"'},{value:'"headline-system-mobile-xlarge"'},{value:'"headline-system-mobile-xsmall"'},{value:'"headline-system-large"'},{value:'"headline-system-medium"'},{value:'"headline-system-small"'},{value:'"headline-system-xlarge"'},{value:'"headline-system-xsmall"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-xlarge"'},{value:'"headline-xsmall"'},{value:'"key-large"'},{value:'"key-medium"'},{value:'"key-small"'},{value:'"key-xlarge"'},{value:'"key-xsmall"'},{value:'"paragraph-caps"'},{value:'"paragraph-component-primary"'},{value:'"paragraph-component-secondary"'},{value:'"paragraph-primary-large"'},{value:'"paragraph-primary-medium"'},{value:'"paragraph-primary-small"'},{value:'"paragraph-secondary-large"'},{value:'"paragraph-secondary-medium"'},{value:'"paragraph-secondary-small"'},{value:'"promo-mobile-large"'},{value:'"promo-mobile-medium"'},{value:'"promo-mobile-small"'},{value:'"promo-mobile-xlarge"'},{value:'"promo-mobile-xsmall"'},{value:'"promo-system-mobile-large"'},{value:'"promo-system-mobile-medium"'},{value:'"promo-system-mobile-small"'},{value:'"promo-system-mobile-xlarge"'},{value:'"promo-system-mobile-xsmall"'},{value:'"promo-system-large"'},{value:'"promo-system-medium"'},{value:'"promo-system-small"'},{value:'"promo-system-xlarge"'},{value:'"promo-system-xsmall"'},{value:'"promo-large"'},{value:'"promo-medium"'},{value:'"promo-small"'},{value:'"promo-xlarge"'},{value:'"promo-xsmall"'},{value:'"accent-component"'},{value:'"action-component"'},{value:'"paragraph-component"'}]}},align:{defaultValue:{value:"left"},description:"Выравнивание текста",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'}]}},color:{defaultValue:null,description:"Цвет текста",name:"color",required:!1,type:{name:"string"}},textBackgroundColor:{defaultValue:null,description:"Цвет фона",name:"textBackgroundColor",required:!1,type:{name:"string"}},rowLimit:{defaultValue:null,description:"Количество строк",name:"rowLimit",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},monospaceNumbers:{defaultValue:{value:"false"},description:"Делает цифры моноширинными",name:"monospaceNumbers",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Дочерние элементы",name:"children",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text/src/Component.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/text/src/Component.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);