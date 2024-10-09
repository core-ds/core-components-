"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[2140,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/spinner/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},spinner:function(){return spinner},spinnerPreset:function(){return spinnerPreset}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/spinner/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"У компонента есть стандартные размеры: 16, 24 и 48px."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const PRESETS = [16, 24, 48];\n\nrender(\n    <Container>\n        <Row align='middle'>\n            {PRESETS.map((preset) => (\n                <div key={preset} style={{ marginRight: 20 }}>\n                    <Spinner.Preset visible={true} preset={preset} />\n                </div>\n            ))}\n        </Row>\n    </Container>,\n);\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"кастомизация",children:"Кастомизация"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Спиннеру можно задать кастомную высоту, цвет, толщину линии и отступы внутри контейнера."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'\nrender(\n    <Container>\n        <Row align=\'middle\'>\n            <div style={{ marginRight: 20 }}>\n                <Spinner visible={true} size={28} lineWidth={4} style={{ padding: "var(--gap-2)", color: "var(--color-light-decorative-text-red)" }} />\n            </div>\n            <div style={{ marginRight: 20 }}>\n                <Spinner visible={true} size={24} lineWidth={2} style={{ padding: "var(--gap-4)", color: "var(--color-light-decorative-text-blue)" }} />\n            </div>\n        </Row>\n    </Container>,\n);\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-в-других-компонентах",children:"Использование в других компонентах"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Часто используется в ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/button--docs",children:"Button"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'    <Container>\n        <div style={{marginBottom: 20}}>\n            <Button view="primary" loading={true} size={56}>\n               Label\n            </Button>\n        </div>\n        <div>\n            <Button leftAddons={<Spinner.Preset visible={true} />} size={56}>\n                Дела делаются\n            </Button>\n        </div>\n    </Container>\n//MOBILE\n    <Container>\n        <Button view="primary" block={true} loading={true} size={56}>\n            Label\n        </Button>\n        <br/>\n        <Button block={true} leftAddons={<Spinner.Preset visible={true} />} size={56}>\n            Дела делаются\n        </Button>\n    </Container>\n'})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/spinner/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключениe",children:"Подключениe"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Spinner } from '@alfalab/core-components/spinner';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование",children:"Использование"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Spinner size={20} lineWidth={2} {...restProps} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"или"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Spinner.Preset preset={48} {...restProps} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(blocks.Ft,{components:{Spinner:Component.$,"Spinner.Preset":Component.a}}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../vars/src/index.css';\n\n:root {\n    --spinner-display-visible: inline-block;\n    --spinner-animation-duration: 0.8s;\n    --spinner-animation-timing-function: linear;\n\n    /* default */\n    --spinner-default-color: var(--color-light-neutral-translucent-1300);\n\n    /* inverted */\n    --spinner-inverted-color: var(--color-light-neutral-translucent-1300-inverted);\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_stories_createMdxContent(props){let _components=Object.assign({div:"div"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Spinner",component:modern.Spinner,id:"Spinner"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Spinner",children:react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{size:(0,addon_knobs_dist.number)("size",20),lineWidth:(0,addon_knobs_dist.number)("lineWidth",2),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors,style:(0,addon_knobs_dist.object)("style",{})})})})}),"\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Spinner.Preset",children:react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner.Preset,{preset:(0,addon_knobs_dist.select)("preset",[16,24,48],24),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors})})})}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Spinner",children:"Используется для индикации выполнения команды пользователя."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 3.5.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 3.4.0\n\n### Minor Changes\n\n<sup><time>05.07.2024</time></sup>\n\n### [#1277](https://github.com/core-ds/core-components/pull/1277)\n\n-   Исправили ширину и высоту для размера '16' с 18px на 16px\n\n## 3.3.1\n\n### Patch Changes\n\n<sup><time>13.06.2024</time></sup>\n\n### [#1229](https://github.com/core-ds/core-components/pull/1229)\n\n-   Изменили цветовые токены: color-light-neutral-1500 -> color-light-neutral-translucent-1300, color-light-neutral-1500-inverted -> color-light-neutral-translucent-1300-inverted, color-static-neutral-1500 -> color-static-neutral-translucent-1300, color-static-neutral-1500-inverted -> color-static-neutral-translucent-1300-inverted\n\n## 3.3.0\n\n### Minor Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1030](https://github.com/core-ds/core-components/pull/1030)\n\n-   Добавлены новые способы указать размеры - 16, 24, 48. Буквенные значения размеров xs, s, m теперь deprecated, используйте вместо них 16, 24, 48 соответственно\n\n## 3.2.0\n\n### Minor Changes\n\n### [#931](https://github.com/core-ds/core-components/pull/931)\n\n-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.7\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.6\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n## 3.0.5\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.4\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.3\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@3.0.1...@alfalab/core-components-spinner@3.0.2) (2022-09-12)\n\n### Bug Fixes\n\n-   renamed default classnames ([#198](https://github.com/core-ds/core-components/issues/198)) ([bf22bba](https://github.com/core-ds/core-components/commit/bf22bbafbd16c14804316cba25a4026b85dde2f7))\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@3.0.0...@alfalab/core-components-spinner@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.3.1...@alfalab/core-components-spinner@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.3.0...@alfalab/core-components-spinner@2.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.3...@alfalab/core-components-spinner@2.3.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.2...@alfalab/core-components-spinner@2.2.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.1...@alfalab/core-components-spinner@2.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.0...@alfalab/core-components-spinner@2.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.1.0...@alfalab/core-components-spinner@2.2.0) (2022-07-11)\n\n### Features\n\n-   **spinner:** new size & inverted theme ([#123](https://github.com/core-ds/core-components/issues/123)) ([5568ab5](https://github.com/core-ds/core-components/commit/5568ab5183badaded723ebc5a608b20bf471c6bc))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.0.3...@alfalab/core-components-spinner@2.1.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.0.0...@alfalab/core-components-spinner@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.9...@alfalab/core-components-spinner@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.8...@alfalab/core-components-spinner@1.0.9) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.7...@alfalab/core-components-spinner@1.0.8) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.5...@alfalab/core-components-spinner@1.0.7) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.4...@alfalab/core-components-spinner@1.0.5) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.3...@alfalab/core-components-spinner@1.0.4) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.2...@alfalab/core-components-spinner@1.0.3) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n"})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let spinner=()=>react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{size:(0,addon_knobs_dist.number)("size",20),lineWidth:(0,addon_knobs_dist.number)("lineWidth",2),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors,style:(0,addon_knobs_dist.object)("style",{})})})});spinner.storyName="Spinner",spinner.parameters={storySource:{source:'React.createElement(() => {\n  const colors = select("colors", ["default", "inverted"], "default");\n  return <div style={{\n    backgroundColor: colors === "inverted" ? "var(--color-light-base-bg-primary-inverted)" : "transparent",\n    padding: "8px",\n    position: "absolute",\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  }}>\n                <Spinner size={number("size", 20)} lineWidth={number("lineWidth", 2)} visible={boolean("visible", true)} colors={colors} style={object("style", {})} />\n            </div>;\n})'}};let spinnerPreset=()=>react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner.Preset,{preset:(0,addon_knobs_dist.select)("preset",[16,24,48],24),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors})})});spinnerPreset.storyName="Spinner.Preset",spinnerPreset.parameters={storySource:{source:'React.createElement(() => {\n  const colors = select("colors", ["default", "inverted"], "default");\n  return <div style={{\n    backgroundColor: colors === "inverted" ? "var(--color-light-base-bg-primary-inverted)" : "transparent",\n    padding: "8px",\n    position: "absolute",\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  }}>\n                <Spinner.Preset preset={select("preset", [16, 24, 48], 24)} visible={boolean("visible", true)} colors={colors} />\n            </div>;\n})'}};let componentMeta={title:"Components/Spinner",id:"Spinner",component:modern.Spinner,tags:["stories-mdx"],includeStories:["spinner","spinnerPreset"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["spinner","spinnerPreset"]},"./packages/spinner/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner},a:function(){return SpinnerPreset}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/shared/modern/index.js"),esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),preset_module={"size-16":"size-16_BLcqP","size-24":"size-24__chGi","size-48":"size-48_uzi_k"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["preset","className"],colorStyles={default:{component:"component_eRftq"},inverted:{component:"component_uu1gU"}},Spinner=function(_ref){var size=_ref.size,lineWidth=_ref.lineWidth,style=_ref.style,visible=_ref.visible,id=_ref.id,className=_ref.className,dataTestId=_ref.dataTestId,_ref$colors=_ref.colors,color=null==style?void 0:style.color;modern.fnUtils.isNil(color)||(0,modern.devWarning)("[Spinner]: Палитра, в контексте которой используется спиннер (проп 'colors') игнорируется. Используется цвет 'style.color' ".concat(color));var uniqId=(0,esm.Me)(),radius=size/2-lineWidth/2,rotationAngle=Math.ceil(180*Math.asin(lineWidth/2/radius)/Math.PI),strokeDasharray="".concat(270-rotationAngle," ").concat(90+rotationAngle),gradient="conic-gradient(from ".concat(rotationAngle,"deg, transparent ").concat(90-2*rotationAngle,"deg, currentColor)");return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(size," ").concat(size),style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{height:size,width:size}),className:classnames_default()("spinner_eJwLa",colorStyles[void 0===_ref$colors?"default":_ref$colors].component,className,(0,defineProperty.Z)({},"visible_w8m5L",visible)),"data-test-id":dataTestId,id:id,children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("mask",{id:uniqId,children:(0,jsx_runtime.jsx)("circle",{cx:"50%",cy:"50%",r:radius,strokeWidth:lineWidth,strokeLinecap:"round",stroke:"#fff",strokeDashoffset:-rotationAngle,strokeDasharray:strokeDasharray,pathLength:360})})}),(0,jsx_runtime.jsx)("foreignObject",{x:"0",y:"0",width:size,height:size,mask:"url(#".concat(uniqId,")"),children:(0,jsx_runtime.jsx)("div",{className:"gradient_biq4V",style:{backgroundImage:gradient}})})]})},PRESET_CONFIG={16:[2,14,"size-16"],24:[2,20,"size-24"],48:[4,40,"size-48"]},SpinnerPreset=function(_ref2){var _ref2$preset=_ref2.preset,className=_ref2.className,restProps=(0,objectWithoutProperties.Z)(_ref2,_excluded),_PRESET_CONFIG$preset=(0,slicedToArray.Z)(PRESET_CONFIG[void 0===_ref2$preset?24:_ref2$preset],3),lineWidth=_PRESET_CONFIG$preset[0],size=_PRESET_CONFIG$preset[1],styleKey=_PRESET_CONFIG$preset[2];return(0,jsx_runtime.jsx)(Spinner,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{lineWidth:lineWidth,size:size,className:classnames_default()(preset_module[styleKey],className)}))};Spinner.Preset=SpinnerPreset;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{colors:{defaultValue:{value:"default"},description:"Палитра, в контексте которой используется спиннер",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},visible:{defaultValue:{value:"false"},description:"Управление видимостью компонента",name:"visible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Идентификатор компонента в DOM",name:"id",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Размер спиннера (кольца)",name:"size",required:!0,type:{name:"number"}},lineWidth:{defaultValue:null,description:"Толщина линии спинера (кольца)",name:"lineWidth",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"Дополнительные инлайн стили для cпиннера",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/spinner/src/Component.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/spinner/src/Component.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{SpinnerPreset.displayName="SpinnerPreset",SpinnerPreset.__docgenInfo={description:"",displayName:"SpinnerPreset",props:{className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Идентификатор компонента в DOM",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Дополнительные инлайн стили для cпиннера",name:"style",required:!1,type:{name:"CSSProperties"}},colors:{defaultValue:{value:"default"},description:"Палитра, в контексте которой используется спиннер",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},visible:{defaultValue:{value:"false"},description:"Управление видимостью компонента",name:"visible",required:!1,type:{name:"boolean"}},preset:{defaultValue:{value:"24"},description:"Преднастроенный вариант",name:"preset",required:!1,type:{name:"enum",value:[{value:"48"},{value:"16"},{value:"24"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/spinner/src/Component.tsx#SpinnerPreset"]={docgenInfo:SpinnerPreset.__docgenInfo,name:"SpinnerPreset",path:"packages/spinner/src/Component.tsx#SpinnerPreset"})}catch(__react_docgen_typescript_loader_error){}}}]);