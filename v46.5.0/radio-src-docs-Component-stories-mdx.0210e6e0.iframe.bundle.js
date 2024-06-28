"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[5824,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/radio/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},radio:function(){return Component_stories_radio}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),createComponentUrl=__webpack_require__("./.storybook/utils/createComponentUrl.js"),modern=__webpack_require__("./dist/radio/modern/index.js"),link_modern=__webpack_require__("./dist/link/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"размеры",children:"Размеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Стандартный размер компонента — m. Размер s устарел и не рекомендован к использованию."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [checked, setChecked] = React.useState(false);\n\n    const handleChange = () => {\n        setChecked(!checked);\n    };\n\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <Radio\n                size={24}\n                onChange={handleChange}\n                checked={checked}\n                label='Вариант выбора'\n                block={true}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"состояния",children:"Состояния"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Радиокнопка может находиться в выбранном и невыбранном состоянии.\nЕсли радиокнопка заблокирована, но пользователь может совершить какие-то действия чтобы её разблокировать,\nиспользуется состояние \xabнеактивна\xbb. Если кнопка заблокирована и её нельзя разблокировать, то используется состояние \xabнедоступна\xbb."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <Radio size={24} label='Выбрана' checked={true} block={true} />\n            <Gap size='m' />\n            <Radio\n                size={24}\n                label='Выбрана и недоступна'\n                disabled={true}\n                checked={true}\n                block={true}\n            />\n            <Gap size='xl' />\n            <Radio size={24} label='По умолчанию' block={true} />\n            <Gap size='m' />\n            <Radio size={24} label='По умолчанию и недоступна' disabled={true} block={true} />\n        </div>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/radio/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Radio } from '@alfalab/core-components/radio';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.Y}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../themes/src/default.css';\n\n:root {\n    --radio-hint-color: var(--color-light-text-secondary);\n    --radio-label-color: var(--color-light-text-primary);\n\n    /* unchecked */\n    --radio-bg-color: var(--color-light-neutral-0);\n    --radio-border-color: var(--color-light-neutral-translucent-700);\n    --radio-hover-bg-color: var(--color-light-neutral-0-hover);\n    --radio-hover-border-color: var(--color-light-neutral-translucent-700);\n    --radio-active-bg-color: var(--color-light-neutral-0-press);\n    --radio-active-border-color: var(--color-light-neutral-translucent-700);\n\n    /* checked */\n    --radio-checked-bg-color: var(--color-light-accent-secondary);\n    --radio-checked-border-color: transparent;\n    --radio-checked-hover-bg-color: var(--color-light-accent-secondary-hover);\n    --radio-checked-hover-border-color: transparent;\n    --radio-checked-active-bg-color: var(--color-light-accent-secondary-press);\n    --radio-checked-active-border-color: transparent;\n\n    /* disabled */\n    --radio-disabled-color: var(--color-light-text-secondary);\n    --radio-disabled-bg-color: var(--color-light-neutral-0);\n    --radio-disabled-border-color: var(--color-light-neutral-translucent-300);\n\n    /* disabled and checked */\n    --radio-checked-disabled-bg-color: var(--color-light-neutral-translucent-200);\n    --radio-checked-disabled-border-color: transparent;\n\n    /* icon */\n    --radio-icon-color: var(--color-light-neutral-translucent-1300-inverted);\n    --radio-icon-disabled-color: var(--color-light-neutral-translucent-500);\n}\n\n.container {\n    display: inline-flex;\n    align-items: flex-start;\n    cursor: pointer;\n\n    &:not(.checked):not(.disabled) {\n        & .circle {\n            background-color: var(--radio-bg-color);\n            border: 1.5px solid var(--radio-border-color);\n        }\n\n        &:hover:not(:active) .circle {\n            background-color: var(--radio-hover-bg-color);\n            border-color: var(--radio-hover-border-color);\n        }\n\n        &:active .circle {\n            background-color: var(--radio-active-bg-color);\n            border-color: var(--radio-active-border-color);\n        }\n    }\n\n    &.disabled {\n        cursor: var(--disabled-cursor);\n\n        & .circle {\n            background-color: var(--radio-disabled-bg-color);\n            border: 1.5px solid var(--radio-disabled-border-color);\n        }\n\n        & .label {\n            color: var(--radio-disabled-color);\n        }\n\n        & .hint {\n            color: var(--radio-disabled-color);\n        }\n\n        &.checked .circle:before {\n            background-color: var(--radio-icon-disabled-color);\n        }\n    }\n\n    &.checked:not(:active) .circle:before,\n    &.checked.disabled:active .circle:before {\n        opacity: 1;\n    }\n\n    &.checked {\n        & .circle {\n            background-color: var(--radio-checked-bg-color);\n            border: 1.5px solid var(--radio-checked-border-color);\n        }\n\n        &:hover .circle {\n            background-color: var(--radio-checked-hover-bg-color);\n            border-color: var(--radio-checked-hover-border-color);\n        }\n\n        &:active .circle {\n            background-color: var(--radio-checked-active-bg-color);\n            border-color: var(--radio-checked-active-border-color);\n        }\n    }\n\n    &.focused .circle {\n        @mixin focus-outline;\n    }\n\n    &.disabled.checked .circle {\n        background-color: var(--radio-checked-disabled-bg-color);\n        border-color: var(--radio-checked-disabled-border-color);\n    }\n\n    & input {\n        position: absolute;\n        z-index: -1;\n        opacity: 0;\n    }\n}\n\n.circle {\n    flex-shrink: 0;\n    width: 20px;\n    height: 20px;\n    box-sizing: border-box;\n    border-radius: var(--border-radius-circle);\n    position: relative;\n    margin: var(--gap-3xs);\n    transition: background-color 0.2s ease, border 0.2s ease;\n\n    &:before {\n        content: '';\n        position: absolute;\n        background-color: var(--radio-icon-color);\n        background-clip: padding-box;\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-radius: var(--border-radius-circle);\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        transition: opacity 0.2s ease;\n        opacity: 0;\n    }\n}\n\n.size-20 .circle {\n    width: 16px;\n    height: 16px;\n    margin: var(--gap-2xs) var(--gap-3xs);\n\n    &:before {\n        border-width: 4px;\n    }\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    margin-left: var(--gap-s);\n}\n\n.size-20 .content {\n    margin-left: var(--gap-xs);\n}\n\n.start {\n    align-items: flex-start;\n}\n\n.center {\n    align-items: center;\n}\n\n.addons {\n    margin-left: auto;\n    padding-left: var(--gap-m);\n    line-height: 24px;\n}\n\n.block {\n    width: 100%;\n}\n\n.label {\n    @mixin paragraph_primary_medium;\n    color: var(--radio-label-color);\n}\n\n.hint {\n    @mixin paragraph_component_secondary;\n    margin-top: var(--gap-2xs);\n    color: var(--radio-hint-color);\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_stories_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Radio",component:modern.Radio,id:"Radio"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Radio",children:react.createElement(()=>{let[checked,setChecked]=react.useState(!1),size=(0,addon_knobs_dist.select)("size",[20,24],20),disabled=(0,addon_knobs_dist.boolean)("disabled",!1),inactive=(0,addon_knobs_dist.boolean)("inactive",!1),checkedKnob=(0,addon_knobs_dist.boolean)("checked",!1),block=(0,addon_knobs_dist.boolean)("block",!1),label=(0,addon_knobs_dist.text)("label","Text label"),hint=(0,addon_knobs_dist.text)("hint","Hint"),align=(0,addon_knobs_dist.select)("align",["start","center"],"start"),addons=(0,addon_knobs_dist.text)("addons");return(0,jsx_runtime.jsx)(modern.Radio,{disabled:disabled,inactive:inactive,addons:addons,block:block,size:size,align:align,onChange:()=>setChecked(!checked),checked:checked||checkedKnob,hint:hint,label:label})})}),"\n","\n",(0,jsx_runtime.jsxs)(blocks.yt,{name:"Radio",children:["Используется только в составе\xa0",(0,jsx_runtime.jsx)(link_modern.Link,{view:"default",underline:!1,href:(0,createComponentUrl.J)("RadioGroup"),children:"RadioGroup."})]}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 4.1.3\n\n### Patch Changes\n\n<sup><time>14.06.2024</time></sup>\n\n### [#1235](https://github.com/core-ds/core-components/pull/1235)\n\n-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools\n\n## 4.1.2\n\n### Patch Changes\n\n<sup><time>13.06.2024</time></sup>\n\n### [#1229](https://github.com/core-ds/core-components/pull/1229)\n\n-   Изменили цветовые токены: color-light-neutral-1500 -> color-light-neutral-translucent-1300, color-light-neutral-1500-inverted -> color-light-neutral-translucent-1300-inverted, color-static-neutral-1500 -> color-static-neutral-translucent-1300, color-static-neutral-1500-inverted -> color-static-neutral-translucent-1300-inverted\n\n## 4.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.10.0\n\n## 4.1.0\n\n### Minor Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1024](https://github.com/core-ds/core-components/pull/1024)\n\n-   Добавлены новые способы указать размеры - 20 и 24. Буквенные значения размеров s и m теперь deprecated, используйте вместо них 20 и 24 соответственно\n\n## 4.0.3\n\n### Patch Changes\n\n### [#1051](https://github.com/core-ds/core-components/pull/1051)\n\n-   Исправлена проблема, из-за которой компоненты некорректно отображались при уменьшении масштаба страницы\n\n## 4.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n\n## 4.0.1\n\n### Patch Changes\n\n### [#1011](https://github.com/core-ds/core-components/pull/1011)\n\n-   Исправлена ошибка, из-за которой обработчик onChange вызывался при клике на addon\n\n-   Обновлены зависимости\n    -   shared@0.9.0\n\n## 4.0.0\n\n### Major Changes\n\n### [#963](https://github.com/core-ds/core-components/pull/963)\n\n-   В компонентах Checkbox, Radio и Switch цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру).\n-   Удалены css переменные для inactive состояния. Пропс inactive - deprecated\n\n## 3.2.0\n\n### Minor Changes\n\n### [#958](https://github.com/core-ds/core-components/pull/958)\n\n-   Добавлен проп labelProps\n\n## 3.1.0\n\n### Minor Changes\n\n### [#734](https://github.com/core-ds/core-components/pull/734)\n\n-   В компонентах Radio и Checkbox для выбранных контролов токен фона был изменен на --color-light-graphic-primary в темах default и site\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.7\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.6\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n## 3.0.5\n\n### Patch Changes\n\n### [#667](https://github.com/core-ds/core-components/pull/667)\n\n-   Изменены токены цвета иконок на static\n\n## 3.0.4\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.3\n\n### Patch Changes\n\n### [#513](https://github.com/core-ds/core-components/pull/513)\n\n-   Изменены типы onChange коллбэка.\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.2\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@3.0.0...@alfalab/core-components-radio@3.0.1) (2022-08-19)\n\n### Bug Fixes\n\n-   omit enterKeyHint prop ([#197](https://github.com/core-ds/core-components/issues/197)) ([72f4946](https://github.com/core-ds/core-components/commit/72f494623c282f61b45539fa1c13d5c45bc5180c))\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.7.1...@alfalab/core-components-radio@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.7.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.7.0...@alfalab/core-components-radio@2.7.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.7.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.6.3...@alfalab/core-components-radio@2.7.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.6.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.6.2...@alfalab/core-components-radio@2.6.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n## [2.6.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.6.1...@alfalab/core-components-radio@2.6.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.6.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.6.0...@alfalab/core-components-radio@2.6.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n# [2.6.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.5.3...@alfalab/core-components-radio@2.6.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n# [2.5.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.4.0...@alfalab/core-components-radio@2.5.0) (2022-03-29)\n\n### Features\n\n-   add extra content class name prop for radio and checkbox components ([#1048](https://github.com/core-ds/core-components/issues/1048)) ([3c076b9](https://github.com/core-ds/core-components/commit/3c076b939a64dff8f9c66bd65f474ccea76c8cad))\n\n# [2.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.3.1...@alfalab/core-components-radio@2.4.0) (2022-03-24)\n\n### Features\n\n-   add extra classes for radio and checkbox components ([#1039](https://github.com/core-ds/core-components/issues/1039)) ([c3ed089](https://github.com/core-ds/core-components/commit/c3ed089360b25d0f7712f2e7608c5a23f11a95df))\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.3.0...@alfalab/core-components-radio@2.3.1) (2021-12-08)\n\n### Bug Fixes\n\n-   актуализируем @alfalab/utils ([#897](https://github.com/core-ds/core-components/issues/897)) ([30fb88e](https://github.com/core-ds/core-components/commit/30fb88eee36f68cabf80069e5125d911fabde4a5))\n-   **radio:** условный рендер подсказки и лейбла ([#892](https://github.com/core-ds/core-components/issues/892)) ([b744c15](https://github.com/core-ds/core-components/commit/b744c159f3779c5bf555041e7762f9653efb7b0e)), closes [#869](https://github.com/core-ds/core-components/issues/869)\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.2.0...@alfalab/core-components-radio@2.3.0) (2021-08-04)\n\n### Features\n\n-   add mods colors ([#770](https://github.com/core-ds/core-components/issues/770)) ([fe985f4](https://github.com/core-ds/core-components/commit/fe985f467b4d47a5152e168d2ab3846872d1a574))\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.1.0...@alfalab/core-components-radio@2.2.0) (2021-08-03)\n\n### Features\n\n-   add inactive controls (PDS-266) ([#765](https://github.com/core-ds/core-components/issues/765)) ([ec02c89](https://github.com/core-ds/core-components/commit/ec02c89ab6bf038c026ca0a72b3185525334840a))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.0.1...@alfalab/core-components-radio@2.1.0) (2021-07-23)\n\n### Features\n\n-   **calendar-input:** uses date-input ([#752](https://github.com/core-ds/core-components/issues/752)) ([509dba2](https://github.com/core-ds/core-components/commit/509dba26913ccf6df859a200aa476eeef1df2ddc))\n-   add mobile theme for tag, radio, checkbox (PDS-244/247/248) ([#717](https://github.com/core-ds/core-components/issues/717)) ([36e2d99](https://github.com/core-ds/core-components/commit/36e2d99c716a03e7f319439df9ca47ec43ad4b71))\n-   checkbox/radio/switch design updates (PDS-252) ([#735](https://github.com/core-ds/core-components/issues/735)) ([62f3c63](https://github.com/core-ds/core-components/commit/62f3c63279872a80ffb1c018b08addf897597b26))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@2.0.0...@alfalab/core-components-radio@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.7.7...@alfalab/core-components-radio@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.7.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.7.6...@alfalab/core-components-radio@1.7.7) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n## [1.7.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.7.5...@alfalab/core-components-radio@1.7.6) (2021-04-01)\n\n### Bug Fixes\n\n-   radio/checkbox ([#594](https://github.com/core-ds/core-components/issues/594)) ([4c9c13f](https://github.com/core-ds/core-components/commit/4c9c13fdf4ab3db9a6b176aeaba529c9b23f971b))\n\n## [1.7.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.7.4...@alfalab/core-components-radio@1.7.5) (2021-03-24)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n## [1.7.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.7.2...@alfalab/core-components-radio@1.7.4) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.7.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.7.0...@alfalab/core-components-radio@1.7.2) (2021-03-16)\n\n### Bug Fixes\n\n-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))\n\n# [1.7.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.6.4...@alfalab/core-components-radio@1.7.0) (2021-03-15)\n\n### Features\n\n-   **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))\n\n## [1.6.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.6.3...@alfalab/core-components-radio@1.6.4) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n## [1.6.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.6.2...@alfalab/core-components-radio@1.6.3) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n## [1.6.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.6.1...@alfalab/core-components-radio@1.6.2) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n## [1.6.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.6.0...@alfalab/core-components-radio@1.6.1) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-radio\n\n# [1.6.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.5.0...@alfalab/core-components-radio@1.6.0) (2021-03-03)\n\n### Features\n\n-   **vars:** 2px gap ([#544](https://github.com/core-ds/core-components/issues/544)) ([e401782](https://github.com/core-ds/core-components/commit/e40178290a02c45bd9ea23ab0deffabd74a69276))\n\n# [@alfalab/core-components-radio-v1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-radio@1.1.5...@alfalab/core-components-radio@1.2.0) (2020-11-25)\n\n### Features\n\n-   **radio:** improved theming ([3dcb532](https://github.com/core-ds/core-components/commit/3dcb532b8b6d9a4e610a56b557a54f6c68e6ce46))\n"})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let Component_stories_radio=()=>react.createElement(()=>{let[checked,setChecked]=react.useState(!1),size=(0,addon_knobs_dist.select)("size",[20,24],20),disabled=(0,addon_knobs_dist.boolean)("disabled",!1),inactive=(0,addon_knobs_dist.boolean)("inactive",!1),checkedKnob=(0,addon_knobs_dist.boolean)("checked",!1),block=(0,addon_knobs_dist.boolean)("block",!1),label=(0,addon_knobs_dist.text)("label","Text label"),hint=(0,addon_knobs_dist.text)("hint","Hint"),align=(0,addon_knobs_dist.select)("align",["start","center"],"start"),addons=(0,addon_knobs_dist.text)("addons");return(0,jsx_runtime.jsx)(modern.Radio,{disabled:disabled,inactive:inactive,addons:addons,block:block,size:size,align:align,onChange:()=>setChecked(!checked),checked:checked||checkedKnob,hint:hint,label:label})});Component_stories_radio.storyName="Radio",Component_stories_radio.parameters={storySource:{source:'React.createElement(() => {\n  const [checked, setChecked] = React.useState(false);\n  const handleChange = () => setChecked(!checked);\n  const size = select("size", [20, 24], 20);\n  const disabled = boolean("disabled", false);\n  const inactive = boolean("inactive", false);\n  const checkedKnob = boolean("checked", false);\n  const block = boolean("block", false);\n  const label = text("label", "Text label");\n  const hint = text("hint", "Hint");\n  const align = select("align", ["start", "center"], "start");\n  const addons = text("addons");\n  return <Radio disabled={disabled} inactive={inactive} addons={addons} block={block} size={size} align={align} onChange={handleChange} checked={checked || checkedKnob} hint={hint} label={label} />;\n})'}};let componentMeta={title:"Components/Radio",id:"Radio",component:modern.Radio,tags:["stories-mdx"],includeStories:["radio"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["radio"]},"./.storybook/utils/createComponentUrl.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return createComponentUrl}});function createComponentUrl(componentName){var baseUrl="".concat(window.location.href.split("iframe")[0]);return"".concat(baseUrl,"?path=/docs/").concat(componentName.toLowerCase(),"--docs")}},"./packages/radio/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return Radio}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/shared/modern/index.js"),esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),index_module={container:"container_YVxLX",checked:"checked_pqVQp",disabled:"disabled_dkrkW",circle:"circle_ShLCn",label:"label_zLN3J",hint:"hint_u2pkj",focused:"focused_ZqiQy","size-20":"size-20_Y6hZM",content:"content_FTi_c",start:"start_I3XxQ",center:"center_Pkjfe",addons:"addons_n79mM",block:"block_gFlJ3"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onChange","className","circleClassName","contentClassName","name","disabled","inactive","dataTestId","label","checked","hint","size","align","addons","block","labelProps"],SIZE_TO_CLASSNAME_MAP={s:"size-20",m:"size-24",20:"size-20",24:"size-24"},Radio=(0,react.forwardRef)(function(_ref,ref){var onChange=_ref.onChange,className=_ref.className,circleClassName=_ref.circleClassName,contentClassName=_ref.contentClassName,name=_ref.name,disabled=_ref.disabled,inactive=_ref.inactive,dataTestId=_ref.dataTestId,label=_ref.label,checked=_ref.checked,hint=_ref.hint,_ref$size=_ref.size,_ref$align=_ref.align,addons=_ref.addons,block=_ref.block,labelProps=_ref.labelProps,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),labelRef=(0,react.useRef)(null),_useFocus=(0,esm.KK)(labelRef,"keyboard"),focused=(0,slicedToArray.Z)(_useFocus,1)[0];return(0,jsx_runtime.jsxs)("label",(0,objectSpread2.Z)((0,objectSpread2.Z)({},labelProps),{},{className:classnames_default()(index_module.container,index_module[SIZE_TO_CLASSNAME_MAP[void 0===_ref$size?20:_ref$size]],index_module[void 0===_ref$align?"start":_ref$align],className,null==labelProps?void 0:labelProps.className,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.disabled,disabled||inactive),index_module.checked,checked),index_module.focused,focused),index_module.block,block)),ref:(0,react_merge_refs_esm.Z)([labelRef,ref,null==labelProps?void 0:labelProps.ref]),children:[(0,jsx_runtime.jsx)("input",(0,objectSpread2.Z)({type:"radio",onChange:function(event){onChange&&onChange(event,{checked:event.target.checked,name:name})},"data-test-id":dataTestId,disabled:disabled||inactive,checked:checked,name:name},restProps)),(0,jsx_runtime.jsx)("span",{className:classnames_default()(index_module.circle,circleClassName)}),(label||hint)&&(0,jsx_runtime.jsxs)("span",{className:classnames_default()(index_module.content,contentClassName),children:[label&&(0,jsx_runtime.jsx)("span",{className:index_module.label,children:label}),hint&&(0,jsx_runtime.jsx)("span",{className:index_module.hint,children:hint})]}),addons&&(0,jsx_runtime.jsx)("span",{className:index_module.addons,onClick:modern.dom.preventDefault,children:addons})]}))});Radio.displayName="Radio";try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Текст подсказки снизу",name:"hint",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Текст подписи",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"20"},description:"Размер компонента\n@description s и m deprecated, используйте вместо них 20 и 24 соответственно",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:"20"},{value:"24"}]}},checked:{defaultValue:null,description:"Управление состоянием отмечен/не отмечен",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Управление состоянием включен / выключен",name:"disabled",required:!1,type:{name:"boolean"}},inactive:{defaultValue:null,description:"@deprecated данный проп больше не используется, временно оставлен для обратной совместимости\nИспользуйте props disabled\nУправление состоянием активен / неактивен",name:"inactive",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Html аттрибут name инпута",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Класс компонента",name:"className",required:!1,type:{name:"string"}},circleClassName:{defaultValue:null,description:"Доп. класс радио кнопки",name:"circleClassName",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Доп. класс контента",name:"contentClassName",required:!1,type:{name:"string"}},align:{defaultValue:{value:"start"},description:"Выравнивание",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'}]}},addons:{defaultValue:null,description:"Дополнительный слот",name:"addons",required:!1,type:{name:"ReactNode"}},block:{defaultValue:null,description:"Растягивать ли компонент на всю ширину",name:"block",required:!1,type:{name:"boolean"}},labelProps:{defaultValue:null,description:"Пропсы для label",name:"labelProps",required:!1,type:{name:"DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>"}},onChange:{defaultValue:null,description:"Обработчик на выбор элемента",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, payload: { checked: boolean; name?: string; }) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/radio/src/Component.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"packages/radio/src/Component.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}}}]);