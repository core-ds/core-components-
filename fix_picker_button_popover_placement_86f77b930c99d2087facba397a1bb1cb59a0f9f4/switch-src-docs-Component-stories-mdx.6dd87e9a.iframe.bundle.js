"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[9670,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/switch/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},switchStory:function(){return switchStory}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/switch/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"как-использовать",children:"Как использовать"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Свитч это аналог ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/checkbox--docs",children:"Checkbox"}),". Для применения выбранного состояния не нужно совершать дополнительных действий,\nтаких как отправка формы или нажатие кнопки \xabприменить\xbb. Свитч может располагаться слева или справа от контента."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Если свитч нельзя использовать, его следует заблокировать. Валидация для свитчей не требуется."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [checked1, setChecked1] = React.useState(false);\n    const [checked2, setChecked2] = React.useState(false);\n\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <Switch\n                block={true}\n                checked={checked1}\n                label='Сделать всё хорошо'\n                hint='Бесплатно без СМС'\n                onChange={() => setChecked1((prevState) => !prevState)}\n            />\n            <Gap size='xl' />\n            <Switch\n                block={true}\n                reversed={true}\n                checked={checked2}\n                label='Сделать всё хорошо'\n                hint='Бесплатно без СМС'\n                onChange={() => setChecked2((prevState) => !prevState)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"состояния",children:"Состояния"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Свитч может находиться в выбранном и невыбранном состоянии. В редких кейсах его значение может быть недоступным для редактирования."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    return (\n        <>\n            <Switch checked={true} label='Выбран' />\n            <Gap size='m' />\n            <Switch checked={true} label='Выбран и недоступен' disabled={true} />\n            <Gap size='xl' />\n            <Switch checked={false} label='По умолчанию' />\n            <Gap size='m' />\n            <Switch checked={false} label='По умолчанию и недоступен' disabled={true} />\n        </>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/switch/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Switch } from '@alfalab/core-components/switch';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.r}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../vars/src/index.css';\n\n:root {\n    --switch-label-color: var(--color-light-text-primary);\n    --switch-hint-color: var(--color-light-text-secondary);\n    --switch-bg-color: var(--color-light-neutral-translucent-700);\n    --switch-border-color: transparent;\n    --switch-error-color: var(--color-light-text-negative);\n\n    /* hover */\n    --switch-hover-bg-color: var(--color-light-neutral-translucent-700-hover);\n\n    /* checked */\n    --switch-checked-bg-color: var(--color-light-status-positive);\n    --switch-checked-hover-bg-color: var(--color-light-status-positive-hover);\n\n    /* disabled */\n    --switch-disabled-color: var(--color-light-text-secondary);\n    --switch-disabled-bg-color: var(--color-light-neutral-translucent-200);\n\n    /* disabled checked */\n    --switch-disabled-checked-bg-color: var(--switch-disabled-bg-color);\n\n    /* icon */\n    --switch-icon-color: var(--color-static-neutral-0);\n    --switch-icon-disabled-color: var(--color-light-neutral-translucent-500);\n}\n\n.component {\n    display: inline-flex;\n    align-items: flex-start;\n    margin: var(--gap-0);\n    padding: var(--gap-0);\n    border: 0;\n    cursor: pointer;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.component input {\n    opacity: 0;\n    position: absolute;\n}\n\n.start {\n    align-items: flex-start;\n}\n\n.center {\n    align-items: center;\n}\n\n.addons {\n    margin-left: auto;\n    padding-left: var(--gap-16);\n    line-height: 24px;\n}\n\n.block {\n    width: 100%;\n}\n\n.switch {\n    position: relative;\n    border-radius: var(--border-radius-16);\n    width: 36px;\n    height: 20px;\n    margin: var(--gap-2);\n    flex-shrink: 0;\n    background-color: var(--switch-bg-color);\n    border: 2px solid var(--switch-border-color);\n    transition: background-color 0.2s ease, border-color 0.2s ease;\n    box-sizing: border-box;\n\n    &:hover {\n        background-color: var(--switch-hover-bg-color);\n    }\n}\n\n.switch:before {\n    content: '';\n    position: absolute;\n    top: var(--gap-0);\n    left: var(--gap-0);\n    bottom: var(--gap-0);\n    right: var(--gap-16);\n    display: block;\n    border-radius: var(--border-radius-circle);\n    background-color: var(--switch-icon-color);\n    box-sizing: border-box;\n    transition: transform 0.2s ease;\n}\n\n.content {\n    margin-left: var(--gap-12);\n    flex-grow: 1;\n}\n\n.label {\n    @mixin paragraph_primary_medium;\n    display: block;\n    color: var(--switch-label-color);\n}\n\n.label:not(:only-child) {\n    margin-bottom: var(--gap-4);\n}\n\n.errorMessage {\n    @mixin paragraph_component_secondary;\n    color: var(--switch-error-color);\n}\n\n.hint {\n    @mixin paragraph_component_secondary;\n    display: block;\n    color: var(--switch-hint-color);\n}\n\n/* Reversed state */\n\n.component.reversed {\n    flex-direction: row-reverse;\n}\n\n.reversed .content {\n    margin-right: var(--gap-16);\n    margin-left: var(--gap-0);\n}\n\n.reversed .addons {\n    margin-left: var(--gap-0);\n    padding-left: var(--gap-0);\n    margin-right: auto;\n    padding-right: var(--gap-16);\n}\n\n/* Checked state */\n\n.checked .switch {\n    background-color: var(--switch-checked-bg-color);\n\n    &:hover {\n        background-color: var(--switch-checked-hover-bg-color);\n    }\n}\n\n.checked .switch:before {\n    /* ширина компонента(36px + 2*2px) - отступы(2 * 2px) - размер кружка(20px) */\n    transform: translateX(16px);\n}\n\n/* Disabled state */\n\n.disabled {\n    cursor: var(--disabled-cursor);\n}\n\n.disabled .switch {\n    background-color: var(--switch-disabled-bg-color);\n\n    &:before {\n        background-color: var(--switch-icon-disabled-color);\n    }\n}\n\n.disabled.checked .switch {\n    background-color: var(--switch-disabled-checked-bg-color);\n}\n\n.disabled .label {\n    color: var(--switch-disabled-color);\n}\n\n.disabled .hint {\n    color: var(--switch-disabled-color);\n}\n\n/* Focused state */\n\n.focused .switch {\n    @mixin focus-outline;\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_stories_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Switch",component:modern.Switch,id:"Switch"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Switch",children:react.createElement(()=>{let[checked,setChecked]=react.useState(!1),disabled=(0,addon_knobs_dist.boolean)("disabled",!1),inactive=(0,addon_knobs_dist.boolean)("inactive",!1),checkedKnob=(0,addon_knobs_dist.boolean)("checked",!1),reversed=(0,addon_knobs_dist.boolean)("reversed",!1),block=(0,addon_knobs_dist.boolean)("block",!1),addons=(0,addon_knobs_dist.text)("addons"),align=(0,addon_knobs_dist.select)("align",["start","center"]),className=(0,addon_knobs_dist.text)("className",""),dataTestId=(0,addon_knobs_dist.text)("dataTestId",""),label=(0,addon_knobs_dist.text)("label","Условие тоггла"),hint=(0,addon_knobs_dist.text)("hint","Описание пункта"),error=(0,addon_knobs_dist.text)("error","");return(0,jsx_runtime.jsx)(modern.Switch,{disabled:disabled,inactive:inactive,checked:checked||checkedKnob,reversed:reversed,block:block,addons:addons,align:align,className:className,dataTestId:dataTestId,label:label,hint:hint,error:error,onChange:()=>setChecked(!checked)})})}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Switch",children:"Используется для управления параметром с бинарным состоянием."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 4.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.13.0\n\n## 4.3.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1358](https://github.com/core-ds/core-components/pull/1358)\n\n-   Обновлены наименования переменных скругления\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n-   Обновлены зависимости\n    -   shared@0.12.1\n\n## 4.3.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 4.2.6\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1356](https://github.com/core-ds/core-components/pull/1356)\n\n-   Обновлены наименования переменных отступов\n\n## 4.2.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.12.0\n\n## 4.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.11.0\n\n## 4.2.3\n\n### Patch Changes\n\n<sup><time>14.06.2024</time></sup>\n\n### [#1235](https://github.com/core-ds/core-components/pull/1235)\n\n-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools\n\n## 4.2.2\n\n### Patch Changes\n\n<sup><time>13.06.2024</time></sup>\n\n### [#1229](https://github.com/core-ds/core-components/pull/1229)\n\n-   Изменили цветовой токен: color-static-neutral-1500-inverted -> color-static-neutral-0\n\n## 4.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.10.0\n\n## 4.2.0\n\n### Minor Changes\n\n<sup><time>29.03.2024</time></sup>\n\n### [#1154](https://github.com/core-ds/core-components/pull/1154)\n\n-   Добавлено новое свойство error, отвечающее за отображение ошибки\n\n## 4.1.2\n\n### Patch Changes\n\n### [#1051](https://github.com/core-ds/core-components/pull/1051)\n\n-   Исправлена проблема, из-за которой компоненты некорректно отображались при уменьшении масштаба страницы\n\n## 4.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n\n## 4.1.0\n\n### Minor Changes\n\n### [#1018](https://github.com/core-ds/core-components/pull/1018)\n\n-   Изменены стили для состояния disabled в соответствии с макетом. Css-переменная --switch-icon-disabled-checked-color переименована в --switch-icon-disabled-color\n\n### Patch Changes\n\n### [#1011](https://github.com/core-ds/core-components/pull/1011)\n\n-   Исправлена ошибка, из-за которой обработчик onChange вызывался при клике на addon\n\n-   Обновлены зависимости\n    -   shared@0.9.0\n\n## 4.0.0\n\n### Major Changes\n\n### [#963](https://github.com/core-ds/core-components/pull/963)\n\n-   В компонентах Checkbox, Radio и Switch цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру).\n-   Удалены css переменные для inactive состояния. Пропс inactive - deprecated\n\n## 3.2.0\n\n### Minor Changes\n\n### [#785](https://github.com/core-ds/core-components/pull/785)\n\n-   Цвет компонента в выбранном состоянии заменен с красного на зеленый\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.7\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.6\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n## 3.0.5\n\n### Patch Changes\n\n### [#668](https://github.com/core-ds/core-components/pull/668)\n\n-   Токен белого цвета изменен на static\n\n## 3.0.4\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.3\n\n### Patch Changes\n\n### [#513](https://github.com/core-ds/core-components/pull/513)\n\n-   Изменены типы onChange коллбэка.\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.2\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@3.0.0...@alfalab/core-components-switch@3.0.1) (2022-08-19)\n\n### Bug Fixes\n\n-   omit enterKeyHint prop ([#197](https://github.com/core-ds/core-components/issues/197)) ([72f4946](https://github.com/core-ds/core-components/commit/72f494623c282f61b45539fa1c13d5c45bc5180c))\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.4.1...@alfalab/core-components-switch@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.4.0...@alfalab/core-components-switch@2.4.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.3.3...@alfalab/core-components-switch@2.4.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.3.2...@alfalab/core-components-switch@2.3.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [2.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.3.1...@alfalab/core-components-switch@2.3.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.3.0...@alfalab/core-components-switch@2.3.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.2.4...@alfalab/core-components-switch@2.3.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.2.0...@alfalab/core-components-switch@2.2.1) (2021-12-08)\n\n### Bug Fixes\n\n-   актуализируем @alfalab/utils ([#897](https://github.com/core-ds/core-components/issues/897)) ([30fb88e](https://github.com/core-ds/core-components/commit/30fb88eee36f68cabf80069e5125d911fabde4a5))\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.1.0...@alfalab/core-components-switch@2.2.0) (2021-08-03)\n\n### Features\n\n-   add inactive controls (PDS-266) ([#765](https://github.com/core-ds/core-components/issues/765)) ([ec02c89](https://github.com/core-ds/core-components/commit/ec02c89ab6bf038c026ca0a72b3185525334840a))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.0.1...@alfalab/core-components-switch@2.1.0) (2021-07-23)\n\n### Features\n\n-   checkbox/radio/switch design updates (PDS-252) ([#735](https://github.com/core-ds/core-components/issues/735)) ([62f3c63](https://github.com/core-ds/core-components/commit/62f3c63279872a80ffb1c018b08addf897597b26))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@2.0.0...@alfalab/core-components-switch@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.7.7...@alfalab/core-components-switch@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.7.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.7.6...@alfalab/core-components-switch@1.7.7) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [1.7.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.7.5...@alfalab/core-components-switch@1.7.6) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [1.7.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.7.4...@alfalab/core-components-switch@1.7.5) (2021-03-24)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [1.7.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.7.2...@alfalab/core-components-switch@1.7.4) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.7.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.7.0...@alfalab/core-components-switch@1.7.2) (2021-03-16)\n\n### Bug Fixes\n\n-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))\n\n# [1.7.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.6.6...@alfalab/core-components-switch@1.7.0) (2021-03-15)\n\n### Features\n\n-   **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))\n\n## [1.6.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.6.5...@alfalab/core-components-switch@1.6.6) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [1.6.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.6.4...@alfalab/core-components-switch@1.6.5) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [1.6.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.6.3...@alfalab/core-components-switch@1.6.4) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [1.6.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.6.2...@alfalab/core-components-switch@1.6.3) (2021-02-20)\n\n**Note:** Version bump only for package @alfalab/core-components-switch\n\n## [1.6.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.6.1...@alfalab/core-components-switch@1.6.2) (2021-02-18)\n\n### Bug Fixes\n\n-   update versions ([#525](https://github.com/core-ds/core-components/issues/525)) ([31b2e4c](https://github.com/core-ds/core-components/commit/31b2e4c92fde6e2b63a3391a4e053cd328e93e70))\n\n# [@alfalab/core-components-switch-v1.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-switch@1.3.4...@alfalab/core-components-switch@1.4.0) (2020-11-25)\n\n### Features\n\n-   **switch:** improved theming ([b4ecc39](https://github.com/core-ds/core-components/commit/b4ecc399c706e1de7086e255e57219e3907414e0))\n"})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let switchStory=()=>react.createElement(()=>{let[checked,setChecked]=react.useState(!1),disabled=(0,addon_knobs_dist.boolean)("disabled",!1),inactive=(0,addon_knobs_dist.boolean)("inactive",!1),checkedKnob=(0,addon_knobs_dist.boolean)("checked",!1),reversed=(0,addon_knobs_dist.boolean)("reversed",!1),block=(0,addon_knobs_dist.boolean)("block",!1),addons=(0,addon_knobs_dist.text)("addons"),align=(0,addon_knobs_dist.select)("align",["start","center"]),className=(0,addon_knobs_dist.text)("className",""),dataTestId=(0,addon_knobs_dist.text)("dataTestId",""),label=(0,addon_knobs_dist.text)("label","Условие тоггла"),hint=(0,addon_knobs_dist.text)("hint","Описание пункта"),error=(0,addon_knobs_dist.text)("error","");return(0,jsx_runtime.jsx)(modern.Switch,{disabled:disabled,inactive:inactive,checked:checked||checkedKnob,reversed:reversed,block:block,addons:addons,align:align,className:className,dataTestId:dataTestId,label:label,hint:hint,error:error,onChange:()=>setChecked(!checked)})});switchStory.storyName="Switch",switchStory.parameters={storySource:{source:'React.createElement(() => {\n  const [checked, setChecked] = React.useState(false);\n  const handleChange = () => setChecked(!checked);\n  const disabled = boolean("disabled", false);\n  const inactive = boolean("inactive", false);\n  const checkedKnob = boolean("checked", false);\n  const reversed = boolean("reversed", false);\n  const block = boolean("block", false);\n  const addons = text("addons");\n  const align = select("align", ["start", "center"]);\n  const className = text("className", "");\n  const dataTestId = text("dataTestId", "");\n  const label = text("label", "\\u0423\\u0441\\u043B\\u043E\\u0432\\u0438\\u0435 \\u0442\\u043E\\u0433\\u0433\\u043B\\u0430");\n  const hint = text("hint", "\\u041E\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0443\\u043D\\u043A\\u0442\\u0430");\n  const error = text("error", "");\n  return <Switch disabled={disabled} inactive={inactive} checked={checked || checkedKnob} reversed={reversed} block={block} addons={addons} align={align} className={className} dataTestId={dataTestId} label={label} hint={hint} error={error} onChange={handleChange} />;\n})'}};let componentMeta={title:"Components/Switch",id:"Switch",component:modern.Switch,tags:["stories-mdx"],includeStories:["switchStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["switchStory"]},"./packages/switch/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return Switch}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/shared/modern/index.js"),esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),index_module={component:"component_pfD4m",start:"start_PRUrm",center:"center_eGtVf",addons:"addons_vsnX9",block:"block_uHzwy",switch:"switch_x7ZJ_",content:"content_Zh5S1",label:"label_QNf6x",errorMessage:"errorMessage_Y46Cb",hint:"hint_MTh34",reversed:"reversed_W0QdI",checked:"checked_WSmiQ",disabled:"disabled_Hu2Ox",focused:"focused_G6PxT"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["reversed","checked","align","addons","block","disabled","inactive","error","label","hint","name","value","className","onChange","dataTestId"],Switch=(0,react.forwardRef)(function(_ref,ref){var _ref$reversed=_ref.reversed,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,_ref$align=_ref.align,addons=_ref.addons,block=_ref.block,disabled=_ref.disabled,inactive=_ref.inactive,error=_ref.error,label=_ref.label,hint=_ref.hint,name=_ref.name,value=_ref.value,className=_ref.className,onChange=_ref.onChange,dataTestId=_ref.dataTestId,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),labelRef=(0,react.useRef)(null),_useFocus=(0,esm.KK)(labelRef,"keyboard"),focused=(0,slicedToArray.Z)(_useFocus,1)[0],errorMessage="boolean"==typeof error?"":error;return(0,jsx_runtime.jsxs)("label",{className:classnames_default()(index_module.component,index_module[void 0===_ref$align?"start":_ref$align],className,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.disabled,disabled||inactive),index_module.checked,checked),index_module.reversed,void 0!==_ref$reversed&&_ref$reversed),index_module.focused,focused),index_module.block,block)),ref:(0,react_merge_refs_esm.Z)([labelRef,ref]),children:[(0,jsx_runtime.jsx)("input",(0,objectSpread2.Z)({type:"checkbox",onChange:function(e){onChange&&onChange(e,{checked:e.target.checked,name:name})},disabled:disabled||inactive,checked:checked,name:name,value:value,"data-test-id":dataTestId},restProps)),(0,jsx_runtime.jsx)("span",{className:index_module.switch}),(label||hint||errorMessage)&&(0,jsx_runtime.jsxs)("span",{className:index_module.content,children:[label&&(0,jsx_runtime.jsx)("span",{className:index_module.label,children:label}),hint&&!errorMessage&&(0,jsx_runtime.jsx)("span",{className:index_module.hint,children:hint}),errorMessage&&(0,jsx_runtime.jsx)("span",{className:index_module.errorMessage,role:"alert",children:errorMessage})]}),addons&&(0,jsx_runtime.jsx)("span",{className:index_module.addons,onClick:modern.dom.preventDefault,children:addons})]})});Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{label:{defaultValue:null,description:"Текст подписи к переключателю",name:"label",required:!1,type:{name:"ReactNode"}},hint:{defaultValue:null,description:"Текст подсказки снизу",name:"hint",required:!1,type:{name:"ReactNode"}},reversed:{defaultValue:{value:"false"},description:"Переключатель будет отрисован справа от контента",name:"reversed",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"start"},description:"Выравнивание",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'}]}},addons:{defaultValue:null,description:"Дополнительный слот",name:"addons",required:!1,type:{name:"ReactNode"}},block:{defaultValue:null,description:"Растягивать ли компонент на всю ширину",name:"block",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Управление состоянием включен / выключен",name:"disabled",required:!1,type:{name:"boolean"}},inactive:{defaultValue:null,description:"@deprecated данный проп больше не используется, временно оставлен для обратной совместимости\nИспользуйте props disabled\nУправление состоянием активен / неактивен",name:"inactive",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Отображение ошибки",name:"error",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Обработчик переключения компонента",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, payload: { checked: boolean; name: string; }) => void)"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/switch/src/Component.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"packages/switch/src/Component.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);