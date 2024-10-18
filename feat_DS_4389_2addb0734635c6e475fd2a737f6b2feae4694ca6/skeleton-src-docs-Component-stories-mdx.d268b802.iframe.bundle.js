"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[1378,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/skeleton/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},skeleton:function(){return skeleton}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),ComponentHeader=__webpack_require__("./.storybook/blocks/component-header/ComponentHeader.tsx"),component=__webpack_require__("./.storybook/blocks/tabs/component.tsx"),modern=__webpack_require__("./dist/skeleton/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Скелетон должен максимально точно повторять форму ожидаемого контента.\nДля скелетонизации текстового контента используйте компонент ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/typography--docs",children:"Typography"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const SHAPRE_STYLE = {\n    width: 40,\n    height: 40,\n    borderRadius: 8,\n    backgroundImage: 'url(./images/imgBg.png)',\n    backgroundSize: 'cover',\n};\n\nrender(() => {\n    const [visible, setVisible] = React.useState(false);\n\n    return (\n        <>\n            <Switch\n                checked={visible}\n                label='Скелетонизация контента'\n                onChange={() => setVisible((p) => !p)}\n            />\n\n            <Gap size='l' />\n\n            <div style={{ display: 'flex', alignItems: 'center' }}>\n                <Skeleton visible={visible}>\n                    <div style={SHAPRE_STYLE} />\n                </Skeleton>\n\n                <Gap size='s' direction='horizontal' />\n\n                <Skeleton visible={visible} style={{ borderRadius: 'var(--border-radius-4)' }}>\n                    <Status view='contrast'>This is fine</Status>\n                </Skeleton>\n            </div>\n        </>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},css_vars=__webpack_require__("./.storybook/blocks/css-vars/css-vars.tsx"),Component=__webpack_require__("./packages/skeleton/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Skeleton } from '@alfalab/core-components/skeleton';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.O}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(css_vars.Z,{css:"@import '../../vars/src/index.css';\n\n:root {\n    --skeleton-display: block;\n    --skeleton-border-radius: var(--border-radius-8);\n    --skeleton-backdrop-filter: blur(20px);\n    --skeleton-bg-animation-display: block;\n    --skeleton-bg-animation-color: transparent;\n    --skeleton-default-color: var(--color-light-neutral-translucent-100);\n    --skeleton-inverted-default-color: var(--color-light-neutral-translucent-100-inverted);\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_stories_createMdxContent(props){let _components=Object.assign({div:"div",img:"img"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Skeleton",component:modern.Skeleton,id:"Skeleton"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Skeleton",children:react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)(_components.div,{style:{width:150,height:150,backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"var(--gap-40)",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Skeleton,{visible:(0,addon_knobs_dist.boolean)("visible",!0),className:(0,addon_knobs_dist.text)("className",""),dataTestId:(0,addon_knobs_dist.text)("dataTestId",""),animate:(0,addon_knobs_dist.boolean)("animate",!0),colors:colors,children:(0,jsx_runtime.jsx)(_components.img,{width:150,height:150,alt:"Фижер",src:"https://rawgit.com/alfa-laboratory/arui-feather/master/logo.svg"})})})})}),"\n","\n",(0,jsx_runtime.jsx)(ComponentHeader.y,{name:"Skeleton",children:"Используется как индикатор загрузки контента."}),"\n",(0,jsx_runtime.jsx)(component.m,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 5.2.0\n\n### Minor Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1372](https://github.com/core-ds/core-components/pull/1372)\n\n-   Добавлено новое свойство colors, отвечающее за набор цветов в компоненте (возможность переключить на inverted цвета для тёмного фона)\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1358](https://github.com/core-ds/core-components/pull/1358)\n\n-   Обновлены наименования переменных скругления\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n## 5.1.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 5.0.0\n\n### Major Changes\n\n<sup><time>28.05.2024</time></sup>\n\n### [#1159](https://github.com/core-ds/core-components/pull/1159)\n\n-   Добавлено новое свойство allowBackdropBlur, отвечающее за размытие фона\n-   Добавлен трансформер skeleton-blur, который устанавливает свойство allowBackdropBlur в значение true для компонента Skeleton\n-   Удалена css переменная --skeleton-gradient-animation-display\n\n## 4.2.0\n\n### Minor Changes\n\n### [#992](https://github.com/core-ds/core-components/pull/992)\n\n-   В компонентах BankCard, CodeInput, Comment, Divider, ListHeader, Pagination, Scrollbar, Skeleton, SortableList, Steps, Tabs, Underlay и UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 4.1.0\n\n### Minor Changes\n\n### [#711](https://github.com/core-ds/core-components/pull/711)\n\n-   Добавлен проп style\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 4.0.6\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 4.0.5\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 4.0.4\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 4.0.3\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [4.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@4.0.1...@alfalab/core-components-skeleton@4.0.2) (2022-09-05)\n\n### Bug Fixes\n\n-   **skeleton:** added className for visible === false ([29a1280](https://github.com/core-ds/core-components/commit/29a12809730bd49e5d2c47c66840642fff359f4c))\n\n## [4.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@4.0.0...@alfalab/core-components-skeleton@4.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n\n# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.3.1...@alfalab/core-components-skeleton@4.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [3.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.3.0...@alfalab/core-components-skeleton@3.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [3.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.2.4...@alfalab/core-components-skeleton@3.3.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [3.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.2.3...@alfalab/core-components-skeleton@3.2.4) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n\n## [3.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.2.2...@alfalab/core-components-skeleton@3.2.3) (2022-07-18)\n\n### Bug Fixes\n\n-   **skeleton:** fixed skeleton animation flickering(safari) ([#142](https://github.com/core-ds/core-components/issues/142)) ([40fb389](https://github.com/core-ds/core-components/commit/40fb389316d2a12492ea6a1827947ac71bf7d081))\n\n## [3.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.2.1...@alfalab/core-components-skeleton@3.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [3.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.2.0...@alfalab/core-components-skeleton@3.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n\n# [3.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.1.2...@alfalab/core-components-skeleton@3.2.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n# [3.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.0.2...@alfalab/core-components-skeleton@3.1.0) (2022-03-04)\n\n### Bug Fixes\n\n-   **skeleton:** added dataTestId ([18e4af8](https://github.com/core-ds/core-components/commit/18e4af805bd4e49a1a3c303cb3b4d9a3a9dd5751))\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.0.1...@alfalab/core-components-skeleton@3.0.2) (2021-11-16)\n\n### Bug Fixes\n\n-   **skeleton:** prevent component unmount ([#887](https://github.com/core-ds/core-components/issues/887)) ([1bd4dc3](https://github.com/core-ds/core-components/commit/1bd4dc3147622f75802dd8e574175dbbf02cca54))\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@3.0.0...@alfalab/core-components-skeleton@3.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@2.0.0...@alfalab/core-components-skeleton@3.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.4.1...@alfalab/core-components-skeleton@2.0.0) (2021-06-28)\n\n### Features\n\n-   **skeleton:** add display var, change default to block ([#718](https://github.com/core-ds/core-components/issues/718)) ([27aaa60](https://github.com/core-ds/core-components/commit/27aaa605a958d932a52904556ac2fe1dd59356af))\n\n### BREAKING CHANGES\n\n-   **skeleton:** inline-block changes to block\n\n## [1.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.4.0...@alfalab/core-components-skeleton@1.4.1) (2021-06-09)\n\n### Bug Fixes\n\n-   **skeleton:** remove vars that purge kills ([886d1b2](https://github.com/core-ds/core-components/commit/886d1b24b144d9d277821d3264f71a93c7a1b146))\n\n# [1.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.3.6...@alfalab/core-components-skeleton@1.4.0) (2021-06-08)\n\n### Features\n\n-   **skeleton:** bg animation ([3dac97d](https://github.com/core-ds/core-components/commit/3dac97d18b9c7b2f63f55e2139a1adfb84710b88))\n-   **skeleton:** bg animation ([37a52ad](https://github.com/core-ds/core-components/commit/37a52ad3e49f2873aaff86a768599d947a17c754))\n\n## [1.3.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.3.5...@alfalab/core-components-skeleton@1.3.6) (2021-04-26)\n\n### Bug Fixes\n\n-   **skeleton:** remove extra bottom margin ([#619](https://github.com/core-ds/core-components/issues/619)) ([8f83022](https://github.com/core-ds/core-components/commit/8f83022c5a89e2f0b63449970437d0ca00129e5d))\n\n## [1.3.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.3.4...@alfalab/core-components-skeleton@1.3.5) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n\n## [1.3.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.3.2...@alfalab/core-components-skeleton@1.3.4) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.3.0...@alfalab/core-components-skeleton@1.3.2) (2021-03-16)\n\n### Bug Fixes\n\n-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))\n\n# [1.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.2.1...@alfalab/core-components-skeleton@1.3.0) (2021-03-15)\n\n### Features\n\n-   **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))\n\n## [1.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.2.0...@alfalab/core-components-skeleton@1.2.1) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n\n# [1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.1.2...@alfalab/core-components-skeleton@1.2.0) (2021-03-10)\n\n### Features\n\n-   **skeleton:** updated default theme, click theme ([#549](https://github.com/core-ds/core-components/issues/549)) ([9bf9259](https://github.com/core-ds/core-components/commit/9bf9259d4d1efd73067ea548cdfaf3007b0f8839))\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.1.1...@alfalab/core-components-skeleton@1.1.2) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-skeleton@1.1.0...@alfalab/core-components-skeleton@1.1.1) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-skeleton\n"})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let skeleton=()=>react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)("div",{style:{width:150,height:150,backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"var(--gap-40)",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Skeleton,{visible:(0,addon_knobs_dist.boolean)("visible",!0),className:(0,addon_knobs_dist.text)("className",""),dataTestId:(0,addon_knobs_dist.text)("dataTestId",""),animate:(0,addon_knobs_dist.boolean)("animate",!0),colors:colors,children:(0,jsx_runtime.jsx)("img",{width:150,height:150,alt:"\\u0424\\u0438\\u0436\\u0435\\u0440",src:"https://rawgit.com/alfa-laboratory/arui-feather/master/logo.svg"})})})});skeleton.storyName="Skeleton",skeleton.parameters={storySource:{source:'React.createElement(() => {\n  const colors = select("colors", ["default", "inverted"], "default");\n  return <div style={{\n    width: 150,\n    height: 150,\n    backgroundColor: colors === "inverted" ? "var(--color-light-base-bg-primary-inverted)" : "transparent",\n    padding: "var(--gap-40)",\n    position: "absolute",\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  }}>\n                <Skeleton visible={boolean("visible", true)} className={text("className", "")} dataTestId={text("dataTestId", "")} animate={boolean("animate", true)} colors={colors}>\n                    <img width={150} height={150} alt="\\u0424\\u0438\\u0436\\u0435\\u0440" src="https://rawgit.com/alfa-laboratory/arui-feather/master/logo.svg" />\n                </Skeleton>\n            </div>;\n})'}};let componentMeta={title:"Components/Skeleton",id:"Skeleton",component:modern.Skeleton,tags:["stories-mdx"],includeStories:["skeleton"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["skeleton"]},"./.storybook/blocks/css-vars/css-vars.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CssVars}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/link/modern/index.js"),esm=__webpack_require__("./node_modules/storybook-addon-live-examples/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),rootBlockRegexp=/:root {([^}]*)}/g,mixinRegexp=/(?:@define-mixin)(.*{[^}]*})/g,CssVars=function(_ref){var css=_ref.css,title=_ref.title,expandable=_ref.expandable,_ref$type=_ref.type,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),vars=_useState2[0],setVars=_useState2[1],_useState3=(0,react.useState)(!expandable),_useState4=(0,slicedToArray.Z)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],isVars="vars"===(void 0===_ref$type?"vars":_ref$type),regexp=isVars?rootBlockRegexp:mixinRegexp;return(0,react.useEffect)(function(){for(var rootBlockMatch=regexp.exec(css),rootBlocks=[];rootBlockMatch;)rootBlocks.push(rootBlockMatch[1]),rootBlockMatch=regexp.exec(css);var result=rootBlocks.reduce(function(acc,item,index){var isLast=index===rootBlocks.length-1;return"".concat(acc).concat(item).concat(isLast?"":"\n")},isVars?":root {":"");isVars&&(result+="}"),setVars(result)},[]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled","cssVars_OsBA8"),children:[title&&(0,jsx_runtime.jsx)("h2",{className:classnames_default()("sbdocs","sbdocs-h2"),children:title}),vars&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[expandable&&(0,jsx_runtime.jsx)(modern.Link,{view:"default",onClick:function onClick(){return setOpen(!open)},pseudo:!0,children:open?"Скрыть":"Показать"}),open&&(0,jsx_runtime.jsx)(esm.en,{language:"css",code:vars,live:!1})]})]})};try{CssVars.displayName="CssVars",CssVars.__docgenInfo={description:"",displayName:"CssVars",props:{css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"vars"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vars"'},{value:'"mixins"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/css-vars/css-vars.tsx#CssVars"]={docgenInfo:CssVars.__docgenInfo,name:"CssVars",path:".storybook/blocks/css-vars/css-vars.tsx#CssVars"})}catch(__react_docgen_typescript_loader_error){}},"./packages/skeleton/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return Skeleton}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={component:"component_XvB5T",allowBackdropBlur:"allowBackdropBlur_Dwi7A",animate:"animate_YKq6N"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),colorStyles={default:{component:"component_ViWKb",animate:"animate_asFps",background:"background_bS7yQ"},inverted:{component:"component_I_CCK",animate:"animate_zH_Cj","background-inverted":"background-inverted_UUyZW"}},Skeleton=function(_ref){var visible=_ref.visible,_ref$animate=_ref.animate,animate=void 0===_ref$animate||_ref$animate,className=_ref.className,dataTestId=_ref.dataTestId,children=_ref.children,style=_ref.style,allowBackdropBlur=_ref.allowBackdropBlur,_ref$colors=_ref.colors,colors=void 0===_ref$colors?"default":_ref$colors;return visible?(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.component,colorStyles[colors].component,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.animate,animate),colorStyles[colors].animate,animate),index_module.allowBackdropBlur,allowBackdropBlur),className),style:style,"data-test-id":dataTestId,children:children}):(0,jsx_runtime.jsx)("div",{"data-test-id":dataTestId,className:className,style:style,children:children})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{visible:{defaultValue:null,description:"Флаг, явно задающий состояние, при котором контент закрывается прелоадером",name:"visible",required:!1,type:{name:"boolean"}},animate:{defaultValue:{value:"true"},description:"Флаг явного включения анимации скелета",name:"animate",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Дополнительные инлайн стили",name:"style",required:!1,type:{name:"CSSProperties"}},allowBackdropBlur:{defaultValue:null,description:"Включает размытие фона",name:"allowBackdropBlur",required:!1,type:{name:"boolean"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Дочерние элементы.",name:"children",required:!1,type:{name:"ReactNode"}},colors:{defaultValue:{value:"default"},description:"Набор цветов для компонента",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/skeleton/src/Component.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"packages/skeleton/src/Component.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}}}]);