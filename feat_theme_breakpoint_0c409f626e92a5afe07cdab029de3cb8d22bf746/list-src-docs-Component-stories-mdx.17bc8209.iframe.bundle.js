"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7057,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/list/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{COLOR:function(){return COLOR},TAG:function(){return TAG},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},list:function(){return list}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),modern=__webpack_require__("./dist/typography/modern/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),list_modern=__webpack_require__("./dist/list/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"анатомия",children:"Анатомия"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент состоит из кастомизируемого слота под маркер и текстовой части."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const styleContent = {\n        width: '24px',\n        height: '24px',\n        borderRadius: '8px',\n        backgroundColor: 'rgba(55, 120, 251, 0.1)',\n        border: '1px dashed rgb(55, 120, 251)',\n        boxSizing: 'border-box',\n    }\n\n    return (\n      <Container>\n        <Row align='middle'>\n          <div style={styleContent}></div> \n          <Typography.Text view='primary-medium'>Пример текстовой части</Typography.Text>\n        </Row>\n      </Container>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Доступны нумерованные и маркированные виды списков.\nПри необходимости, цвет маркера можно изменить. Каждому пункту можно добавить подпись."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Space>\n  <Typography.Text view='primary-medium'>Пример маркированного списка:</Typography.Text>    \n     <List tag='ul' marker='•'>\n        <List.Item>Пример элемента списка</List.Item>\n        <List.Item>Пример элемента списка</List.Item>\n        <List.Item>Пример элемента списка</List.Item>\n         <List.Item>Пример элемента списка</List.Item>\n        <List.Item>Пример элемента списка</List.Item>\n    </List>\n  <Typography.Text view='primary-medium'>Пример нумерованного списка:</Typography.Text>    \n\n     <List tag='ol' colorMarker='tertiary'>\n        <List.Item caption='Пример подписи'>Пример элемента списка</List.Item>\n        <List.Item caption='Пример подписи'>Пример элемента списка</List.Item>\n        <List.Item caption='Пример подписи'>Пример элемента списка</List.Item>\n            <List.Item caption='Пример подписи'>Пример элемента списка</List.Item>\n        <List.Item caption='Пример подписи'>Пример элемента списка</List.Item>\n    </List>\n</Space>\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/list/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { List } from '@alfalab/core-components/list';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.a}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"кастомизация",children:"Кастомизация"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Для более гибкой кастомизации, вместо дочернего элмента ",(0,jsx_runtime.jsx)(_components.code,{children:"listItem"})," можно передавать ",(0,jsx_runtime.jsx)(_components.code,{children:"typography"}),".\nЭто позволит задать элементу списка нужный цвет. Для ",(0,jsx_runtime.jsx)(_components.code,{children:"typography"})," используте view ",(0,jsx_runtime.jsx)(_components.code,{children:"primary-medium"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../../../themes/src/default.css';\n\n:root {\n    --list-marker-color: var(--color-light-text-primary);\n    --list-item-margin: var(--gap-s);\n}\n\n.item {\n    margin-top: var(--list-item-margin);\n    display: flex;\n\n    &:first-child {\n        margin-top: 0;\n    }\n\n    &.reversed:first-child {\n        margin-top: var(--list-item-margin);\n    }\n\n    &.reversed:last-child {\n        margin-top: 0;\n    }\n\n    &.unorderedItem {\n        display: list-item;\n    }\n}\n\n.slot {\n    min-width: 20px;\n    display: flex;\n    box-sizing: border-box;\n    justify-content: start;\n    padding-right: var(--gap-2xs);\n    flex-shrink: 0;\n\n    &.defaultColor {\n        color: var(--list-marker-color);\n    }\n\n    &.disc {\n        justify-content: center;\n        padding: 0 var(--gap-2xs);\n    }\n}\n\n.caption {\n    margin-top: var(--gap-3xs);\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},utils=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts");let TAG=["ul","ol"],COLOR=["tertiary","disabled","accent","primary","attention","positive","secondary","tertiary-inverted","primary-inverted","secondary-inverted","link","negative","static-primary-light","static-secondary-light","static-tertiary-light","static-primary-dark","static-secondary-dark","static-tertiary-dark","static-accent"];function Component_stories_createMdxContent(props){let _components=Object.assign({div:"div"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/List",component:list_modern.List,id:"List"}),"\n",(0,jsx_runtime.jsx)(dist.oG,{name:"List",children:react.createElement(()=>{let previewStyles=(0,utils.FX)((0,utils.Ph)("wrapperStyles"));return Object.keys(previewStyles).length>0?(0,jsx_runtime.jsx)(_components.div,{style:previewStyles,children:(0,jsx_runtime.jsxs)(list_modern.List,{tag:"ol",children:[(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Пример элемента списка"})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Пример элемента списка"})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Пример элемента списка"})})]})}):(0,jsx_runtime.jsxs)(list_modern.List,{tag:(0,addon_knobs_dist.select)("tag",TAG,"ul"),marker:(0,addon_knobs_dist.text)("marker",""),className:(0,addon_knobs_dist.text)("className",""),dataTestId:(0,addon_knobs_dist.text)("dataTestId",""),colorMarker:(0,addon_knobs_dist.select)("colorMarker",COLOR,"primary"),children:[(0,jsx_runtime.jsx)(list_modern.List.Item,{caption:(0,addon_knobs_dist.text)("caption",""),children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — перечень чего-либо."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в информатике и программировании — последовательность элементов данных."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в типографике способ оформления перечней в тексте."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в текстологии документ, созданный в результате воспроизведения рукописи (например, список в летописании) или машинописного текста первоначального документа (протографа данного списка); в отличие от копии, точное воспроизведение оригинала не является целью."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в иконописи икона, представляющая собой воспроизведение почитаемой иконы (протографа данного списка); в отличие от копии, не воспроизводит оригинал в точности."})})]})})}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"List",children:"Компонент для создания списков."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 3.3.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.7.0\n\n## 3.3.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.6.0\n\n## 3.3.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.5.1\n\n## 3.3.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.5.0\n\n## 3.3.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.4.0\n\n## 3.3.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.3.0\n\n## 3.3.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.2.1\n\n## 3.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.2.0\n\n## 3.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.1.0\n\n## 3.3.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.0.0\n\n## 3.2.2\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   typography@3.2.2\n\n## 3.2.1\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   typography@3.2.1\n\n## 3.2.0\n\n### Minor Changes\n\n### [#542](https://github.com/core-ds/core-components/pull/542)\n\n-   Добавили props colorMarker и caption, отвечающие за цвет маркера и дополнительный текст. Изменили размер контейнера для маркера\n\n## 3.1.2\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.1.1\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n## 3.1.0\n\n### Minor Changes\n\n### [#335](https://github.com/core-ds/core-components/pull/335)\n\n-   Добавили restProps в компонент\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@3.0.1...@alfalab/core-components-list@3.0.2) (2022-09-01)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@3.0.0...@alfalab/core-components-list@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.3.1...@alfalab/core-components-list@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.3.0...@alfalab/core-components-list@2.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.2.3...@alfalab/core-components-list@2.3.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.2.2...@alfalab/core-components-list@2.2.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.2.1...@alfalab/core-components-list@2.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.2.0...@alfalab/core-components-list@2.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.1.2...@alfalab/core-components-list@2.2.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.0.2...@alfalab/core-components-list@2.1.0) (2022-03-30)\n\n### Features\n\n-   **list:** added list & typography presets ([#1047](https://github.com/core-ds/core-components/issues/1047)) ([67b6a77](https://github.com/core-ds/core-components/commit/67b6a77d1327b090b010eb061f83a2e6a0cb67b9))\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.0.1...@alfalab/core-components-list@2.0.2) (2021-07-23)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@2.0.0...@alfalab/core-components-list@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@1.1.7...@alfalab/core-components-list@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.1.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@1.1.6...@alfalab/core-components-list@1.1.7) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@1.1.5...@alfalab/core-components-list@1.1.6) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@1.1.3...@alfalab/core-components-list@1.1.5) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@1.1.2...@alfalab/core-components-list@1.1.3) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@1.1.1...@alfalab/core-components-list@1.1.2) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-list@1.1.0...@alfalab/core-components-list@1.1.1) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-list\n"})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let list=()=>react.createElement(()=>{let previewStyles=(0,utils.FX)((0,utils.Ph)("wrapperStyles"));return Object.keys(previewStyles).length>0?(0,jsx_runtime.jsx)("div",{style:previewStyles,children:(0,jsx_runtime.jsxs)(list_modern.List,{tag:"ol",children:[(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Пример элемента списка"})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Пример элемента списка"})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Пример элемента списка"})})]})}):(0,jsx_runtime.jsxs)(list_modern.List,{tag:(0,addon_knobs_dist.select)("tag",TAG,"ul"),marker:(0,addon_knobs_dist.text)("marker",""),className:(0,addon_knobs_dist.text)("className",""),dataTestId:(0,addon_knobs_dist.text)("dataTestId",""),colorMarker:(0,addon_knobs_dist.select)("colorMarker",COLOR,"primary"),children:[(0,jsx_runtime.jsx)(list_modern.List.Item,{caption:(0,addon_knobs_dist.text)("caption",""),children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — перечень чего-либо."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в информатике и программировании — последовательность элементов данных."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в типографике способ оформления перечней в тексте."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в текстологии документ, созданный в результате воспроизведения рукописи (например, список в летописании) или машинописного текста первоначального документа (протографа данного списка); в отличие от копии, точное воспроизведение оригинала не является целью."})}),(0,jsx_runtime.jsx)(list_modern.List.Item,{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"span",view:"primary-medium",color:"primary",children:"Список — в иконописи икона, представляющая собой воспроизведение почитаемой иконы (протографа данного списка); в отличие от копии, не воспроизводит оригинал в точности."})})]})});list.storyName="List",list.parameters={storySource:{source:'React.createElement(() => {\n  const previewStyles = stylesStringToObj(getQueryParam("wrapperStyles"));\n  const isPreview = Object.keys(previewStyles).length > 0;\n  if (isPreview) {\n    return <div style={previewStyles}>\n                    <List tag="ol">\n                        <List.Item>\n                            <Typography.Text tag="span" view="primary-medium" color="primary">\n                                Пример элемента списка\n                            </Typography.Text>\n                        </List.Item>\n                        <List.Item>\n                            <Typography.Text tag="span" view="primary-medium" color="primary">\n                                Пример элемента списка\n                            </Typography.Text>\n                        </List.Item>\n                        <List.Item>\n                            <Typography.Text tag="span" view="primary-medium" color="primary">\n                                Пример элемента списка\n                            </Typography.Text>\n                        </List.Item>\n                    </List>\n                </div>;\n  }\n  return <List tag={select("tag", TAG, "ul")} marker={text("marker", "")} className={text("className", "")} dataTestId={text("dataTestId", "")} colorMarker={select("colorMarker", COLOR, "primary")}>\n                <List.Item caption={text("caption", "")}>\n                    <Typography.Text tag="span" view="primary-medium" color="primary">\n                        Список — перечень чего-либо.\n                    </Typography.Text>\n                </List.Item>\n                <List.Item>\n                    <Typography.Text tag="span" view="primary-medium" color="primary">\n                        Список — в информатике и программировании — последовательность элементов\n                        данных.\n                    </Typography.Text>\n                </List.Item>\n                <List.Item>\n                    <Typography.Text tag="span" view="primary-medium" color="primary">\n                        Список — в типографике способ оформления перечней в тексте.\n                    </Typography.Text>\n                </List.Item>\n                <List.Item>\n                    <Typography.Text tag="span" view="primary-medium" color="primary">\n                        Список — в текстологии документ, созданный в результате воспроизведения\n                        рукописи (например, список в летописании) или машинописного текста\n                        первоначального документа (протографа данного списка); в отличие от копии,\n                        точное воспроизведение оригинала не является целью.\n                    </Typography.Text>\n                </List.Item>\n                <List.Item>\n                    <Typography.Text tag="span" view="primary-medium" color="primary">\n                        Список — в иконописи икона, представляющая собой воспроизведение почитаемой\n                        иконы (протографа данного списка); в отличие от копии, не воспроизводит\n                        оригинал в точности.\n                    </Typography.Text>\n                </List.Item>\n            </List>;\n})'}};let componentMeta={title:"Components/List",id:"List",component:list_modern.List,tags:["stories-mdx"],includeStories:["list"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["TAG","COLOR","list"]},"./packages/list/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return List},Z:function(){return ListContext}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/typography/modern/index.js"),index_module={item:"item_wo5BR",reversed:"reversed_WoAsG",unorderedItem:"unorderedItem_xBIso",slot:"slot_FB574",defaultColor:"defaultColor_MZoxA",disc:"disc_CkVQ4",caption:"caption_DQlVD"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Item=function(_ref){var caption=_ref.caption,children=_ref.children,_useContext=(0,react.useContext)(ListContext),orderedList=_useContext.orderedList,markerType=_useContext.markerType,colorMarker=_useContext.colorMarker,reversed=_useContext.reversed,_useContext$index=_useContext.index,index=void 0===_useContext$index?0:_useContext$index,_useContext$start=_useContext.start,start=void 0===_useContext$start?0:_useContext$start,markerLowerAlpha="lower-alpha"===markerType,itemClassNames=classnames_default()(index_module.item,(0,defineProperty.Z)((0,defineProperty.Z)({},index_module.unorderedItem,markerLowerAlpha),index_module.reversed,reversed));return(0,jsx_runtime.jsxs)("li",{className:classnames_default()(itemClassNames),children:[!markerLowerAlpha&&(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"div",color:colorMarker,monospaceNumbers:!0,view:"primary-medium",className:classnames_default()(index_module.slot,(0,defineProperty.Z)((0,defineProperty.Z)({},index_module.disc,"•"===markerType&&!orderedList),index_module.defaultColor,!colorMarker)),children:orderedList||"decimal"===markerType?"".concat(0===start?index+1:start+index,"."):markerType}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"div",view:"primary-medium",children:children}),caption&&(0,jsx_runtime.jsx)(modern.Typography.Text,{tag:"div",view:"primary-small",color:"secondary",className:index_module.caption,children:caption})]})]})};Item.displayName="ListItem";try{Item.displayName="ListItem",Item.__docgenInfo={description:"",displayName:"ListItem",props:{caption:{defaultValue:null,description:"Дополнительный текст",name:"caption",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Дочерние элементы.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/list/src/components/item/Component.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"packages/list/src/components/item/Component.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}var isItem=function(child){var obj;return(0,react.isValidElement)(child)&&"object"==typeof(obj=child)&&"ListItem"===obj.type.displayName},_excluded=["tag","marker","className","dataTestId","colorMarker","children","reversed","start"],ListContext=react.createContext({}),List=Object.assign(function(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"ul":_ref$tag,marker=_ref.marker,className=_ref.className,dataTestId=_ref.dataTestId,colorMarker=_ref.colorMarker,children=_ref.children,reversed=_ref.reversed,start=_ref.start,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),markerType=marker||("ul"===tag?"—":"decimal"),alphaMarker="lower-alpha"===markerType,Component="ul"===tag||alphaMarker?"ul":"ol",orderedList="ol"===Component,listClassNames=classnames_default()("list_qvd0s",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},"lowerAlpha_ZrKFj",alphaMarker),"decimal_Hatns","decimal"===markerType),"reversed_DWhfe",reversed),className);return(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:listClassNames,"data-test-id":dataTestId},restProps),{},{children:react.Children.map(children,function(child,index){return(0,jsx_runtime.jsx)(ListContext.Provider,{value:{orderedList:orderedList,markerType:markerType,colorMarker:colorMarker,reversed:reversed,index:index,start:start},children:isItem(child)?child:(0,jsx_runtime.jsx)(Item,{children:child})})})}))},{Item:Item});try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{tag:{defaultValue:{value:"ul"},description:"HTML тег",name:"tag",required:!1,type:{name:"enum",value:[{value:'"ol"'},{value:'"ul"'}]}},marker:{defaultValue:{value:"'—' for ul and 'decimal' for ol"},description:"Маркер",name:"marker",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Css-класс для стилизации",name:"className",required:!1,type:{name:"string"}},colorMarker:{defaultValue:null,description:"Цвет маркера",name:"colorMarker",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"negative"'},{value:'"positive"'},{value:'"attention"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"accent"'},{value:'"primary-inverted"'},{value:'"secondary-inverted"'},{value:'"tertiary-inverted"'}]}},reversed:{defaultValue:null,description:"Список обратного счета",name:"reversed",required:!1,type:{name:"boolean"}},start:{defaultValue:null,description:"Начало отсчета элементов списка",name:"start",required:!1,type:{name:"number"}},dataTestId:{defaultValue:null,description:"Id компонента для тестов",name:"dataTestId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Дочерние элементы",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/list/src/Component.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"packages/list/src/Component.tsx#List"})}catch(__react_docgen_typescript_loader_error){}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);