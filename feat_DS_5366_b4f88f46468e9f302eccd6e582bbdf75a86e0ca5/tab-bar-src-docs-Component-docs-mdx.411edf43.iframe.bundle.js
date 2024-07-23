"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4482,8013,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/tab-bar/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},tab_bar:function(){return tab_bar}});var _tab_bar$parameters,_tab_bar$parameters2,_tab_bar$parameters2$,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/tab-bar/modern/index.js"),_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@alfalab/icons-glyph/DiamondsMIcon.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/TabBar",component:_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__.TabBar,id:"TabBar"},tab_bar={name:"TabBar",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState("1"),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState,2),selectedId=_React$useState2[0],setSelectedId=_React$useState2[1],showIndicator=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("showIndicator",!1),previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles"));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:previewStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{maxWidth:360,flex:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__.TabBar,{selectedId:selectedId,onChange:setSelectedId,border:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("border",!0),accentColor:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("accentColor",["primary","secondary"],"primary"),bgColor:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("bgColor",["modal-bg-primary","modal-bg-alt-primary"],"modal-bg-primary"),children:[,,,,].fill(null).map(function(_,idx){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_tab_bar__WEBPACK_IMPORTED_MODULE_2__.TabBar.Tab,{id:String(idx+1),label:"TabName".concat(idx+1),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_3__.default,{}),showIndicator:showIndicator})})})})})}};__webpack_exports__.default=meta,tab_bar.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},tab_bar.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_tab_bar$parameters=tab_bar.parameters)||void 0===_tab_bar$parameters?void 0:_tab_bar$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'TabBar',\n  render: () => {\n    const [selectedId, setSelectedId] = React.useState('1');\n    const showIndicator = boolean('showIndicator', false);\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    return <div style={previewStyles}>\n                <div style={{\n        maxWidth: 360,\n        flex: 1\n      }}>\n                    <TabBar selectedId={selectedId} onChange={setSelectedId} border={boolean('border', true)} accentColor={select('accentColor', ['primary', 'secondary'], 'primary')} bgColor={select('bgColor', ['modal-bg-primary', 'modal-bg-alt-primary'], 'modal-bg-primary')}>\n                        {Array(4).fill(null).map((_, idx) => <TabBar.Tab id={String(idx + 1)} label={`TabName${idx + 1}`} icon={<DiamondsMIcon />} showIndicator={showIndicator} />)}\n                    </TabBar>\n                </div>\n            </div>;\n  }\n}"},null===(_tab_bar$parameters2=tab_bar.parameters)||void 0===_tab_bar$parameters2?void 0:null===(_tab_bar$parameters2$=_tab_bar$parameters2.docs)||void 0===_tab_bar$parameters2$?void 0:_tab_bar$parameters2$.source)})});let __namedExportsOrder=["tab_bar"]},"./packages/tab-bar/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/tab-bar/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент может отобразить от двух до пяти табов."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileOnly:!0,mobileHeight:145,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [border, setBorder] = React.useState(false);\n    const [selectedId, setSelectedId] = React.useState('1');\n\n    return (\n        <div\n            style={{\n                minHeight: 105,\n                display: 'flex',\n                flexDirection: 'column',\n                justifyContent: 'space-between',\n            }}\n        >\n            <Switch label='Бордер' checked={border} onChange={() => setBorder((p) => !p)} />\n\n            <div style={{ margin: '0 -20px -20px' }}>\n                <TabBar selectedId={selectedId} onChange={setSelectedId} border={border}>\n                    <TabBar.Tab id='1' label='TabName1' icon={<DiamondsMIcon />} />\n                    <TabBar.Tab id='2' label='TabName2' icon={<DiamondsMIcon />} />\n                </TabBar>\n            </div>\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Каждый таб может иметь индикатор."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileOnly:!0,mobileHeight:612,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const INDICATOR_OPTIONS = [\n    { showIndicator: false, label: 'Без индикатора' },\n    { showIndicator: true, label: 'Индикатор без значения' },\n    {\n        showIndicator: true,\n        indicatorProps: { value: 7 },\n        label: '7 уведомлений',\n    },\n    {\n        showIndicator: true,\n        indicatorProps: { value: 100 },\n        label: '99+ уведомлений',\n    },\n];\n\nrender(() => {\n    const [selectedId, setSelectedId] = React.useState('Tab1');\n    const [accentColor, setAccentColor] = React.useState('primary');\n    const [bgColor, setBgColor] = React.useState('modal-bg-primary');\n    const [optionId, setOptionId] = React.useState('0');\n    const [textOverflow, setTextOverflow] = React.useState(false);\n\n    return (\n        <div\n            style={{\n                minHeight: 355,\n                display: 'flex',\n                flexDirection: 'column',\n                justifyContent: 'space-between',\n            }}\n        >\n            <div>\n                <Typography.Text tag='p' style={{ textAlign: 'center' }}>\n                    {selectedId}\n                </Typography.Text>\n\n                <Gap size='s' />\n\n                <Switch\n                    label='Длинное название таба'\n                    checked={textOverflow}\n                    onChange={() => setTextOverflow((p) => !p)}\n                />\n\n                <Gap size='xl' />\n\n                <RadioGroup\n                    onChange={(_, { value }) => setOptionId(value)}\n                    value={optionId}\n                    label='Индикатор'\n                >\n                    {INDICATOR_OPTIONS.map((option, idx) => (\n                        <Radio size='m' value={String(idx)} label={option.label} key={idx} />\n                    ))}\n                </RadioGroup>\n\n                <Gap size='xl' />\n\n                <RadioGroup\n                    onChange={(_, { value }) => setAccentColor(value)}\n                    value={accentColor}\n                    label='Цвет активного таба'\n                >\n                    <Radio label='Accent-primary' value='primary' size='m' />\n                    <Radio label='Accent-secondary' value='secondary' size='m' />\n                </RadioGroup>\n\n                <Gap size='xl' />\n\n                <RadioGroup\n                    onChange={(_, { value }) => setBgColor(value)}\n                    value={bgColor}\n                    label='Цвет подложки'\n                >\n                    <Radio label='Modal-bg-primary' value='modal-bg-primary' size='m' />\n                    <Radio label='Modal-bg-alt-primary' value='modal-bg-alt-primary' size='m' />\n                </RadioGroup>\n                <Gap size='l' />\n            </div>\n\n            <div style={{ margin: '0 -20px -20px' }}>\n                <TabBar\n                    bgColor={bgColor}\n                    accentColor={accentColor}\n                    selectedId={selectedId}\n                    onChange={setSelectedId}\n                    border={true}\n                >\n                    {Array(5)\n                        .fill(null)\n                        .map((_, idx) => {\n                            return (\n                                <TabBar.Tab\n                                    {...(idx === 0 ? INDICATOR_OPTIONS[Number(optionId)] : null)}\n                                    key={idx}\n                                    id={`Tab${idx + 1}`}\n                                    icon={<DiamondsMIcon />}\n                                    label={`TabName${idx + 1}`}\n                                    {...(idx === 0 && textOverflow\n                                        ? { label: 'LongTabName1' }\n                                        : null)}\n                                />\n                            );\n                        })}\n                </TabBar>\n            </div>\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Пример, демонстрирующий возможность использования кастомной анимации при\xa0переключении табов."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileOnly:!0,mobileHeight:64,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const ANIMATION_EXAMPLES = {\n    SCALE: 'scale',\n    ROTATE: 'rotate',\n};\n\nconst AnimatedIcon = ({ Icon, animationClassName, selected }) => {\n    const [className, setClassName] = React.useState();\n    const didMountRef = React.useRef(false);\n\n    React.useEffect(() => {\n        if (didMountRef.current) {\n            if (selected) {\n                setClassName(animationClassName);\n            } else {\n                setClassName(undefined);\n            }\n        } else {\n            didMountRef.current = true;\n        }\n    }, [selected]);\n\n    return <Icon className={className} />;\n};\n\nrender(() => {\n    const [selectedId, setSelectedId] = React.useState('1');\n\n    return (\n        <div style={{ margin: '-20px' }}>\n            <style>\n                {`\n                .tab {\n                    transition: color 100ms ease-in-out;\n                }\n\n                .icon {\n                    transition: transform 100ms ease-in-out;\n                }\n\n                .tab:not(.selected):active .icon {\n                    transform: scale(0.8);\n                }\n\n                .scale {\n                    animation: scale_animation 300ms ease-in-out;\n                }\n\n                .rotate {\n                    animation: rotate_animation 600ms ease-in-out;\n                }\n\n                @keyframes scale_animation {\n                    0% {\n                        transform: scale(1);\n                    }\n                    50% {\n                        transform: scale(1.2);\n                    }\n                    100% {\n                        transform: scale(1);\n                    }\n\n                }\n\n                @keyframes rotate_animation {\n                    0% {\n                        transform: rotate(0deg);\n                    }\n                    100% {\n                        transform: rotate(360deg);\n                    }\n\n                }\n            `}\n            </style>\n\n            <TabBar\n                selectedId={selectedId}\n                onChange={setSelectedId}\n                tabClassNames={{\n                    className: 'tab',\n                    iconClassName: 'icon',\n                    selectedClassName: 'selected',\n                }}\n            >\n                <TabBar.Tab\n                    id='1'\n                    label='TabName1'\n                    icon={\n                        <AnimatedIcon\n                            Icon={DiamondsMIcon}\n                            animationClassName={ANIMATION_EXAMPLES.SCALE}\n                        />\n                    }\n                />\n                <TabBar.Tab\n                    id='2'\n                    label='TabName2'\n                    icon={\n                        <AnimatedIcon\n                            Icon={DiamondsMIcon}\n                            animationClassName={ANIMATION_EXAMPLES.ROTATE}\n                        />\n                    }\n                />\n            </TabBar>\n        </div>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/tab-bar/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",br:"br"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { TabBar } from '@alfalab/core-components/tab-bar';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-datatestid",children:"Использование dataTestId"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В компоненте используется модификатор для ",(0,jsx_runtime.jsx)(_components.code,{children:"dataTestId"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Для удобного поиска элементов можно воспользоваться функцией ",(0,jsx_runtime.jsx)(_components.code,{children:"getTabBarTestIds"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Импорт из ",(0,jsx_runtime.jsx)(_components.code,{children:"@alfalab/core-components/tab-bar/shared"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Функция возвращает объект:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"{\n    tabBar: dataTestId, \n    tab: `${dataTestId}-tab`,\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:Component.n}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../themes/src/default.css';\n\n.component {\n    display: flex;\n    justify-content: center;\n    height: 64px;\n    max-height: 64px;\n    box-sizing: border-box;\n    overflow: hidden;\n    transition: box-shadow 0.2s ease;\n\n    &.modal-bg-primary {\n        background-color: var(--color-light-base-bg-primary);\n    }\n\n    &.modal-bg-alt-primary {\n        background-color: var(--color-light-base-bg-alt-primary);\n    }\n}\n\n.border {\n    box-shadow: 0 -1px 0 0 var(--color-light-neutral-translucent-300);\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"TabBar",children:"Используется для навигации между разделами."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 2.0.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.8.0\n\n## 2.0.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.7.0\n\n## 2.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.11.0\n\n## 2.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   indicator@2.1.0\n    -   typography@4.6.0\n\n## 2.0.2\n\n### Patch Changes\n\n<sup><time>14.06.2024</time></sup>\n\n### [#1235](https://github.com/core-ds/core-components/pull/1235)\n\n-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools\n\n-   Обновлены зависимости\n    -   indicator@2.0.2\n\n## 2.0.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   indicator@2.0.1\n\n## 2.0.0\n\n### Major Changes\n\n<sup><time>28.05.2024</time></sup>\n\n### [#1114](https://github.com/core-ds/core-components/pull/1114)\n\n-   Изменили компонент, отвечающий за индикатор таба с Badge на Indicator. Следовательно, изменился тип свойства indicatorProps с BadgeProps на IndicatorProps\n\n## Миграция с предыдущей версии\n\n-   Для того чтобы передать значение в индикатор необходимо заменить content на value. Например: indicatorProps: { content: 100 } -> indicatorProps: { value: 100 }\n\n### Minor Changes\n\n<sup><time>28.05.2024</time></sup>\n\n### [#1114](https://github.com/core-ds/core-components/pull/1114)\n\n-   Добавили новые props accentColor и bgColor, отвечающие за цвет активного таба и фон соответственно\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.10.0\n    -   typography@4.5.1\n\n## 1.1.0\n\n### Minor Changes\n\n### [#1049](https://github.com/core-ds/core-components/pull/1049)\n\n-   Добавлена функция get{ComponentName}TestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.5.0\n\n## 1.0.3\n\n### Patch Changes\n\n### [#1044](https://github.com/core-ds/core-components/pull/1044)\n\n-   Добавлена css-переменная для токена фона\n\n-   Обновлены зависимости\n    -   badge@5.5.1\n\n## 1.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.4.0\n    -   shared@0.9.1\n\n## 1.0.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.3.0\n    -   badge@5.5.0\n    -   shared@0.9.0\n\n## 1.0.0\n\n### Major Changes\n\n### [#969](https://github.com/core-ds/core-components/pull/969)\n\n-   Добавлен новый компонент TabBar\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   badge@5.4.0\n    -   typography@4.2.1\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}},"./packages/tab-bar/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return TabBar}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/shared/modern/index.js"),indicator_modern=__webpack_require__("./dist/indicator/modern/index.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),INDICATOR_BORDER_COLOR={"modal-bg-primary":"var(--color-light-base-bg-primary)","modal-bg-alt-primary":"var(--color-light-base-bg-alt-primary)"},INDICATOR_BG_COLOR={primary:"var(--color-light-accent-primary)",secondary:"var(--color-light-accent-secondary)"},index_module={component:"component_h9nki",primary:"primary_DcMko",secondary:"secondary_DjIXK",icon:"icon_UJVX0",label:"label_Vt5Qn",labelSelected:"labelSelected_QM3cJ",indicator:"indicator_fW73T"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["showIndicator","indicatorProps","label","icon","id","selected","onChange","onClick","tabClassNames","dataTestId","className","labelClassName","selectedClassName","iconClassName","href","Component","accentColor","bgColor"],TabComponent=(0,react.forwardRef)(function(_ref,ref){var showIndicator=_ref.showIndicator,indicatorProps=_ref.indicatorProps,label=_ref.label,icon=_ref.icon,id=_ref.id,selected=_ref.selected,onChange=_ref.onChange,onClick=_ref.onClick,_ref$tabClassNames=_ref.tabClassNames,tabClassNames=void 0===_ref$tabClassNames?{}:_ref$tabClassNames,dataTestId=_ref.dataTestId,className=_ref.className,labelClassName=_ref.labelClassName,selectedClassName=_ref.selectedClassName,iconClassName=_ref.iconClassName,href=_ref.href,_ref$Component=_ref.Component,Component=void 0===_ref$Component?href?"a":"button":_ref$Component,_ref$accentColor=_ref.accentColor,accentColor=void 0===_ref$accentColor?"primary":_ref$accentColor,_ref$bgColor=_ref.bgColor,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),commonClassName=tabClassNames.className,commonLabelClassName=tabClassNames.labelClassName,commonSelectedClassName=tabClassNames.selectedClassName,commonIconClassName=tabClassNames.iconClassName;return(0,jsx_runtime.jsxs)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({"data-test-id":dataTestId,tabIndex:0},"button"===Component?{type:"button"}:null),restProps),{},{href:href,id:id,ref:ref,className:classnames_default()(index_module.component,commonClassName,className,selected&&commonSelectedClassName,selected&&selectedClassName,(0,defineProperty.Z)({},index_module[accentColor],selected)),onClick:function(event){null==onChange||onChange(id),null==onClick||onClick(event)},children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.icon,commonIconClassName,iconClassName),children:(0,react.isValidElement)(icon)?(0,react.cloneElement)(icon,{selected:selected}):icon}),(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{weight:"medium",view:"secondary-small",className:classnames_default()(index_module.label,commonLabelClassName,labelClassName,(0,defineProperty.Z)({},index_module.labelSelected,selected)),children:(0,react.isValidElement)(label)?(0,react.cloneElement)(label,{selected:selected}):label}),showIndicator&&(0,jsx_runtime.jsx)("div",{className:index_module.indicator,children:(0,jsx_runtime.jsx)(indicator_modern.Indicator,(0,objectSpread2.Z)((0,objectSpread2.Z)({},indicatorProps),{},{height:null!=indicatorProps&&indicatorProps.value?16:void 0,border:{width:2,color:INDICATOR_BORDER_COLOR[void 0===_ref$bgColor?"modal-bg-primary":_ref$bgColor]},backgroundColor:INDICATOR_BG_COLOR[accentColor]}))})]}))});try{TabComponent.displayName="Tab",TabComponent.__docgenInfo={description:"",displayName:"Tab",props:{Component:{defaultValue:{value:"href ? 'a' : 'button'"},description:"Кастомный компонент таба.",name:"Component",required:!1,type:{name:"ElementType<any>"}},id:{defaultValue:null,description:"Идентификатор таба",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Лейбл",name:"label",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Иконка",name:"icon",required:!0,type:{name:"ReactNode"}},showIndicator:{defaultValue:null,description:"Показать индикатор",name:"showIndicator",required:!1,type:{name:"boolean"}},indicatorProps:{defaultValue:null,description:"Свойства индикатора",name:"indicatorProps",required:!1,type:{name:'Omit<IndicatorProps, "size" | "height" | "color" | "view" | "border" | "backgroundColor">'}},className:{defaultValue:null,description:"Дополнительный класс таба",name:"className",required:!1,type:{name:"string"}},selectedClassName:{defaultValue:null,description:"Дополнительный класс таба в выбранном состоянии",name:"selectedClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Дополнительный класс подписи",name:"labelClassName",required:!1,type:{name:"string"}},iconClassName:{defaultValue:null,description:"Дополнительный класс враппера иконки",name:"iconClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tab-bar/src/components/tab/Component.tsx#Tab"]={docgenInfo:TabComponent.__docgenInfo,name:"Tab",path:"packages/tab-bar/src/components/tab/Component.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}var src_index_module={component:"component_uJNRD","modal-bg-primary":"modal-bg-primary_ob5oF","modal-bg-alt-primary":"modal-bg-alt-primary_EueiF",border:"border_ntJxW"},Component_excluded=["children","className","selectedId","border","dataTestId","tabClassNames","onChange","accentColor","bgColor"],TabBarComponent=(0,react.forwardRef)(function(_ref,ref){var children=_ref.children,className=_ref.className,selectedId=_ref.selectedId,border=_ref.border,dataTestId=_ref.dataTestId,tabClassNames=_ref.tabClassNames,onChange=_ref.onChange,_ref$accentColor=_ref.accentColor,accentColor=void 0===_ref$accentColor?"primary":_ref$accentColor,_ref$bgColor=_ref.bgColor,bgColor=void 0===_ref$bgColor?"modal-bg-primary":_ref$bgColor,restProps=(0,objectWithoutProperties.Z)(_ref,Component_excluded);return react.Children.count(children)>5&&console.error("Компонент TabBar не может содержать больше 5 табов"),(0,jsx_runtime.jsx)("nav",(0,objectSpread2.Z)((0,objectSpread2.Z)({"data-test-id":dataTestId},restProps),{},{ref:ref,className:classnames_default()("component_uJNRD",src_index_module[bgColor],className,(0,defineProperty.Z)({},"border_ntJxW",border)),children:react.Children.map(children,function(tab){return(0,react.cloneElement)(tab,{bgColor:bgColor,accentColor:accentColor,selected:tab.props.id===selectedId,onChange:onChange,tabClassNames:tabClassNames,dataTestId:(0,modern.getDataTestId)(dataTestId,"tab")})})}))});TabBarComponent.displayName="TabBarComponent";var TabBar=Object.assign(TabBarComponent,{Tab:TabComponent});try{TabBar.displayName="TabBarComponent",TabBar.__docgenInfo={description:"",displayName:"TabBarComponent",props:{className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.\nДля таба используется модификатор -tab",name:"dataTestId",required:!1,type:{name:"string"}},tabClassNames:{defaultValue:null,description:"Дополнительные классы для таба.",name:"tabClassNames",required:!1,type:{name:"{ className?: string; selectedClassName?: string; labelClassName?: string | undefined; iconClassName?: string | undefined; } | undefined"}},children:{defaultValue:null,description:"Список табов",name:"children",required:!0,type:{name:"TabElementType[]"}},selectedId:{defaultValue:null,description:"Идентификатор выбранного таба",name:"selectedId",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"Включает верхний бордер",name:"border",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Обработчик изменения выбранного таба",name:"onChange",required:!1,type:{name:"((id: string) => void)"}},accentColor:{defaultValue:{value:"primary"},description:"Цвет активного таба",name:"accentColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},bgColor:{defaultValue:{value:"modal-bg-primary"},description:"Цвет фона",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"modal-bg-primary"'},{value:'"modal-bg-alt-primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tab-bar/src/Component.tsx#TabBarComponent"]={docgenInfo:TabBarComponent.__docgenInfo,name:"TabBarComponent",path:"packages/tab-bar/src/Component.tsx#TabBarComponent"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);