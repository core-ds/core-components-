"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[1398],{"./packages/date-input/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},dateInput:function(){return dateInput},default:function(){return Component_stories}}),__webpack_require__("./node_modules/react/index.js");var mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/date-input/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Component=__webpack_require__("./packages/date-input/src/Component.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { DateInput } from '@alfalab/core-components/date-input';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.W})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},esm=__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/index.js"),link_esm=__webpack_require__("./node_modules/@alfalab/core-components/link/esm/index.js");function description_createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h,{view:"attention",limitContentWidth:!1,title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Компонент больше не поддерживается, переходите на новый компонент ","",(0,jsx_runtime.jsx)(link_esm.r,{href:"https://core-ds.github.io/core-components/master/?path=/docs/universaldateinput--docs",children:"UniversalDateInput."})]}),titleView:"light"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"стандартный-вид-компонента",children:"Стандартный вид компонента"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской ДД.ММ.ГГГГ."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n    <DateInput label='Дата зимнего солнцестояния' size='m' />\n</div>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"морфология",children:"Морфология"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Поле ввода является оберткой над ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/formcontrol--docs",children:"FormControl"}),",\nпоэтому наследует все доступные для него настройки. Пикер это\n",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/calendar--docs",children:"Calendar"}),"\nв ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/popover--docs",children:"Popover"}),"."]})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(description_createMdxContent,props)})):description_createMdxContent(props)};function Component_stories_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Deprecated components/DateInput",component:modern.DateInput,id:"DateInput"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"DateInput",children:(0,jsx_runtime.jsx)(modern.DateInput,{block:(0,addon_knobs_dist.boolean)("block",!1),size:(0,addon_knobs_dist.select)("size",["s","m","l","xl"],"s"),error:(0,addon_knobs_dist.text)("error",""),hint:(0,addon_knobs_dist.text)("hint",""),label:(0,addon_knobs_dist.text)("label","")})}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"DateInput",children:"Поле для указания даты."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 4.3.29\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.5\n\n## 4.3.28\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.4\n\n## 4.3.27\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.3\n\n## 4.3.26\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.2\n\n## 4.3.25\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.1\n\n## 4.3.24\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.0\n\n## 4.3.23\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.3\n\n## 4.3.22\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.2\n\n## 4.3.21\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.1\n\n## 4.3.20\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.0\n\n## 4.3.19\n\n### Patch Changes\n\n### [#1078](https://github.com/core-ds/core-components/pull/1078)\n\n-   Исправлена проблема с \"прыжками\" каретки при редактировании введенного значения (было: '1|2.12.2020' -> type 3 -> 13.12.2020|)\n\n-   Обновлены зависимости\n    -   input@14.2.0\n\n## 4.3.18\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.2\n\n## 4.3.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.1\n\n## 4.3.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.0\n\n## 4.3.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.1\n\n## 4.3.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.0\n\n## 4.3.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.2\n\n## 4.3.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.1\n\n## 4.3.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.0\n\n## 4.3.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.3.0\n\n## 4.3.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.1\n\n## 4.3.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.0\n\n## 4.3.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.4\n\n## 4.3.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.3\n\n## 4.3.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.2\n\n## 4.3.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.1\n\n## 4.3.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.0\n\n## 4.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.2\n\n## 4.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.1\n\n## 4.3.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.0\n\n## 4.2.10\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   input@11.1.18\n\n## 4.2.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.17\n\n## 4.2.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.16\n\n## 4.2.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.15\n\n## 4.2.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.14\n\n## 4.2.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.13\n\n## 4.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.12\n\n## 4.2.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.11\n\n## 4.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.10\n\n## 4.2.1\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   input@11.1.9\n\n## 4.2.0\n\n### Minor Changes\n\n### [#579](https://github.com/core-ds/core-components/pull/579)\n\n-   Добавлены новые правила форматирования для DateInput, DateRangeInput, DateTimeInput\n\n## 4.1.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.8\n\n## 4.1.7\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   input@11.1.7\n\n## 4.1.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.6\n\n## 4.1.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.5\n\n## 4.1.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.4\n\n## 4.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.3\n\n## 4.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.2\n\n## 4.1.1\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   input@11.1.1\n\n## 4.1.0\n\n### Minor Changes\n\n### [#342](https://github.com/core-ds/core-components/pull/342)\n\n-   В компонентах Gallery и Input иконки подгружаемые с 'alfabank.servicecdn.ru' были заменены на иконки из icons-glyph\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.0\n\n## 4.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.0.2\n\n## 4.0.1\n\n### Patch Changes\n\n### [#320](https://github.com/core-ds/core-components/pull/320)\n\n-   Скрыт нативный спиннер (стрелочки) у компонента Input при type='number'\n\n-   Обновлены зависимости\n    -   input@11.0.1\n\n## 4.0.0\n\n### Major Changes\n\n### [#286](https://github.com/core-ds/core-components/pull/286)\n\n-   Новые стили инпутов в теме default (все компоненты на основе FormControl, включая Select)\n-   Исправлен отступ до hint в SliderInput (уменьшился на 2px)<br />\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.0.0\n\n## 3.1.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@10.2.5\n\n## 3.1.5\n\n### Patch Changes\n\n-   [#282](https://github.com/core-ds/core-components/pull/282): Обновление vars из последней версии ui-primitives, удалены deprecated цвета и миксины типографики. Thanks [@Valeri8888](https://github.com/Valeri8888)\n    -   @alfalab/core-components-input@10.2.4\n\n## 3.1.4\n\n### Patch Changes\n\n-   Updated dependencies [[#208](https://github.com/core-ds/core-components/pull/208)]\n    -   @alfalab/core-components-input@10.2.3\n\n## 3.1.3\n\n### Patch Changes\n\n-   Updated dependencies [[#189](https://github.com/core-ds/core-components/pull/189)]\n    -   @alfalab/core-components-input@10.2.2\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@3.1.1...@alfalab/core-components-date-input@3.1.2) (2022-09-13)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [3.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@3.1.0...@alfalab/core-components-date-input@3.1.1) (2022-09-12)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n# [3.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@3.0.3...@alfalab/core-components-date-input@3.1.0) (2022-09-02)\n\n### Features\n\n-   testing-library versions update ([#216](https://github.com/core-ds/core-components/issues/216)) ([33b6225](https://github.com/core-ds/core-components/commit/33b62259a1332f535f367502590ea37e7ad051d4))\n\n## [3.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@3.0.2...@alfalab/core-components-date-input@3.0.3) (2022-08-31)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@3.0.1...@alfalab/core-components-date-input@3.0.2) (2022-08-29)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@3.0.0...@alfalab/core-components-date-input@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.4.2...@alfalab/core-components-date-input@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.4.1...@alfalab/core-components-date-input@2.4.2) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n## [2.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.4.0...@alfalab/core-components-date-input@2.4.1) (2022-08-11)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n# [2.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.3.4...@alfalab/core-components-date-input@2.4.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.3.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.3.3...@alfalab/core-components-date-input@2.3.4) (2022-07-25)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [2.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.3.2...@alfalab/core-components-date-input@2.3.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [2.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.3.1...@alfalab/core-components-date-input@2.3.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.3.0...@alfalab/core-components-date-input@2.3.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.2.2...@alfalab/core-components-date-input@2.3.0) (2022-06-28)\n\n### Bug Fixes\n\n-   **pure-cell:** fix stories ([#113](https://github.com/core-ds/core-components/issues/113)) ([01f6138](https://github.com/core-ds/core-components/commit/01f6138615b1b7268510e012c314650c084c9ef0))\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.2.1...@alfalab/core-components-date-input@2.2.2) (2022-06-23)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.2.0...@alfalab/core-components-date-input@2.2.1) (2022-06-20)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.1.5...@alfalab/core-components-date-input@2.2.0) (2022-06-03)\n\n### Features\n\n-   **date-input:** removed date validation ([#69](https://github.com/core-ds/core-components/issues/69)) ([ca56ec9](https://github.com/core-ds/core-components/commit/ca56ec97db0d966233bd4312fdddabd59ed427ae))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@2.0.0...@alfalab/core-components-date-input@2.1.0) (2022-03-04)\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.3.0...@alfalab/core-components-date-input@2.0.0) (2022-02-17)\n\n-   refactor/calendar-range (#984) ([714f615](https://github.com/core-ds/core-components/commit/714f61590586bafe1060e652943e95c133ed002a)), closes [#984](https://github.com/core-ds/core-components/issues/984)\n\n### BREAKING CHANGES\n\n-   Большое обновление CalendarRange\n\n-   feat(date-input): add some improvements\n\n-   feat(date-input): some updates\n\n-   feat(date-input): validation\n\n-   feat(calendar): change period selection logic\n\n-   fix(calendar): range styles\n\n-   fix(calendar): fix styles, add rangeComplete flag\n\n-   refactor(calendar-range): temporary\n\n-   fix(calendar-range): fix hook\n\n-   fix(calendar-range): fix period\n\n-   fix(calendar-range): fix tests, fix max date\n\n-   fix: update exports\n\n-   feat(calendar): allow empty values for PeriodSlider, update today\n\n-   fix(calendar-range): hide error icon\n\n-   chore(calendar-range): demo\n\n-   feat(calendar): use IconButton\n\n-   feat(calendar-range): add onChange, update demo\n\n-   fix(calendar-range): update width\n\n-   test(calendar-range): update snapshot\n\n-   fix: import date-fns separately\n\n-   fix(calendar-range): fix rest props\n\nCo-authored-by: dmitrsavk <dmitrsavk@yandex.ru>\n\n# [1.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.13...@alfalab/core-components-date-input@1.3.0) (2022-02-17)\n\n### Features\n\n-   **date-input:** add some improvements ([#971](https://github.com/core-ds/core-components/issues/971)) ([47756ca](https://github.com/core-ds/core-components/commit/47756ca1d4eea89f78ed7234e95c02e51dd72e49))\n\n## [1.2.13](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.12...@alfalab/core-components-date-input@1.2.13) (2022-02-15)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.12](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.11...@alfalab/core-components-date-input@1.2.12) (2022-02-09)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.11](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.10...@alfalab/core-components-date-input@1.2.11) (2022-02-03)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.10](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.9...@alfalab/core-components-date-input@1.2.10) (2022-02-02)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.8...@alfalab/core-components-date-input@1.2.9) (2021-12-29)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.7...@alfalab/core-components-date-input@1.2.8) (2021-12-14)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.6...@alfalab/core-components-date-input@1.2.7) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.5...@alfalab/core-components-date-input@1.2.6) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.4...@alfalab/core-components-date-input@1.2.5) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.3...@alfalab/core-components-date-input@1.2.4) (2021-11-26)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.2...@alfalab/core-components-date-input@1.2.3) (2021-11-16)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.1...@alfalab/core-components-date-input@1.2.2) (2021-10-15)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.2.0...@alfalab/core-components-date-input@1.2.1) (2021-10-11)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n# [1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.1.6...@alfalab/core-components-date-input@1.2.0) (2021-09-14)\n\n### Features\n\n-   change error type to ReactNode ([#825](https://github.com/core-ds/core-components/issues/825)) ([c6d95c1](https://github.com/core-ds/core-components/commit/c6d95c1c6239f2b2a3bf2c1639554d8500e794f3))\n\n## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.1.5...@alfalab/core-components-date-input@1.1.6) (2021-08-27)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.1.4...@alfalab/core-components-date-input@1.1.5) (2021-08-23)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.1.3...@alfalab/core-components-date-input@1.1.4) (2021-08-23)\n\n### Bug Fixes\n\n-   **input:** smart error icon ([#746](https://github.com/core-ds/core-components/issues/746)) ([f1950d6](https://github.com/core-ds/core-components/commit/f1950d6d516d17d993f0865c10390b6301bb2707)), closes [#782](https://github.com/core-ds/core-components/issues/782)\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.1.2...@alfalab/core-components-date-input@1.1.3) (2021-08-11)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.1.1...@alfalab/core-components-date-input@1.1.2) (2021-08-04)\n\n**Note:** Version bump only for package @alfalab/core-components-date-input\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-date-input@1.1.0...@alfalab/core-components-date-input@1.1.1) (2021-08-03)\n\n### Bug Fixes\n\n-   move icon from date input to calendar input ([#768](https://github.com/core-ds/core-components/issues/768)) ([040bd42](https://github.com/core-ds/core-components/commit/040bd423279eb535f1ea924599ee16c296453e3f))\n\n# 1.1.0 (2021-07-23)\n\n### Features\n\n-   **calendar-input:** uses date-input ([#752](https://github.com/core-ds/core-components/issues/752)) ([509dba2](https://github.com/core-ds/core-components/commit/509dba26913ccf6df859a200aa476eeef1df2ddc))\n-   **date-input:** add component ([#751](https://github.com/core-ds/core-components/issues/751)) ([4b94bee](https://github.com/core-ds/core-components/commit/4b94beec36acc73ac6c62cf37f87061c0ada4b35))\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let dateInput=()=>(0,jsx_runtime.jsx)(modern.DateInput,{block:(0,addon_knobs_dist.boolean)("block",!1),size:(0,addon_knobs_dist.select)("size",["s","m","l","xl"],"s"),error:(0,addon_knobs_dist.text)("error",""),hint:(0,addon_knobs_dist.text)("hint",""),label:(0,addon_knobs_dist.text)("label","")});dateInput.storyName="DateInput",dateInput.parameters={storySource:{source:'<DateInput block={boolean("block", false)} size={select("size", ["s", "m", "l", "xl"], "s")} error={text("error", "")} hint={text("hint", "")} label={text("label", "")} />'}};let componentMeta={title:"Deprecated components/DateInput",id:"DateInput",component:modern.DateInput,tags:["stories-mdx"],includeStories:["dateInput"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["dateInput"]},"./packages/date-input/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return DateInput}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),modern=__webpack_require__("./dist/input/modern/index.js"),format=__webpack_require__("./packages/date-input/src/utils/format.ts"),native_supports=__webpack_require__("./packages/date-input/src/utils/native-supports.ts"),index_module={nativeInput:"nativeInput_vCIEk"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["mobileMode","defaultValue","rightAddons","error","value","onBlur","onChange","onComplete"],DateInput=(0,react.forwardRef)(function(_ref,ref){var _ref$mobileMode=_ref.mobileMode,mobileMode=void 0===_ref$mobileMode?"input":_ref$mobileMode,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"":_ref$defaultValue,rightAddons=_ref.rightAddons,error=_ref.error,propValue=_ref.value,onBlur=_ref.onBlur,onChange=_ref.onChange,onComplete=_ref.onComplete,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),inputRef=(0,react.useRef)(null),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),shouldRenderNative=_useState2[0],setShouldRenderNative=_useState2[1],_useState3=(0,react.useState)(propValue||defaultValue),_useState4=(0,slicedToArray.Z)(_useState3,2),value=_useState4[0],setValue=_useState4[1],moveCaretTo=function(pos){requestAnimationFrame(function(){var _inputRef$current;null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.setSelectionRange(pos,pos)})};return(0,react.useEffect)(function(){"native"===mobileMode&&(0,native_supports.U)()&&setShouldRenderNative(!0)},[mobileMode]),(0,react.useEffect)(function(){void 0!==propValue&&setValue(propValue)},[propValue]),(0,jsx_runtime.jsx)(modern.Input,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{ref:(0,react_merge_refs_esm.Z)([ref,inputRef]),value:value,inputMode:"decimal",pattern:"[0-9\\.]*",onChange:function(event){var newValue=event.target.value,caretPos=event.target.selectionStart||0;if(/[^\d.]/.test(newValue)||getDotsCount(newValue)>2){moveCaretTo(caretPos-1);return}var formattedValue=(0,format.WU)(newValue),date=(0,format.xk)(formattedValue);if(caretPos!==newValue.length&&(formattedValue===value?moveCaretTo(caretPos):newValue.length-formattedValue.length==1?moveCaretTo(caretPos):formattedValue.length-newValue.length==1&&getDotsCount(formattedValue)>getDotsCount(newValue)&&moveCaretTo(caretPos)),setValue(formattedValue),onChange&&onChange(event,{date:date,value:formattedValue}),(0,format.$6)(formattedValue)){if(!(formattedValue.length>0&&(0,format.JY)(formattedValue)))return;onComplete&&onComplete(event,{date:date,value:formattedValue})}},onBlur:function(event){onBlur&&onBlur(event)},placeholder:"ДД.ММ.ГГГГ",error:error,rightAddons:(0,jsx_runtime.jsxs)(react.Fragment,{children:[rightAddons,shouldRenderNative&&(0,jsx_runtime.jsx)("input",{type:"date",ref:ref,defaultValue:defaultValue,onChange:function(event){var newDate=(0,format.xk)(event.target.value,format.EJ),newValue=""===event.target.value?"":(0,format.p6)(newDate);setValue(newValue),onComplete&&onComplete(event,{date:newDate,value:newValue}),onChange&&onChange(event,{date:newDate,value:newValue})},className:index_module.nativeInput})]})}))});function getDotsCount(value){return(value.match(/\./g)||[]).length}try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{size:{defaultValue:null,description:"Размер компонента\n@description s, m, l, xl deprecated, используйте вместо них 48, 56, 64, 72 соответственно",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:"48"},{value:"56"},{value:"64"},{value:"72"}]}},type:{defaultValue:null,description:"Атрибут type",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"card"'},{value:'"email"'},{value:'"money"'},{value:'"password"'},{value:'"tel"'},{value:'"text"'}]}},value:{defaultValue:null,description:"Значение поля ввода",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:""},description:"Начальное значение поля",name:"defaultValue",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Обработчик клика по полю",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"Обработчик MouseDown по полю",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},block:{defaultValue:null,description:"Растягивает компонент на ширину контейнера",name:"block",required:!1,type:{name:"boolean"}},clear:{defaultValue:null,description:"Крестик для очистки поля",name:"clear",required:!1,type:{name:"boolean"}},colors:{defaultValue:null,description:"Набор цветов для компонента",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},error:{defaultValue:null,description:"Отображение ошибки",name:"error",required:!1,type:{name:"ReactNode"}},success:{defaultValue:null,description:"Отображение иконки успеха",name:"success",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Текст подсказки",name:"hint",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Лейбл компонента",name:"label",required:!1,type:{name:"ReactNode"}},labelView:{defaultValue:null,description:"Вид лейбла внутри / снаружи",name:"labelView",required:!1,type:{name:"enum",value:[{value:'"inner"'},{value:'"outer"'}]}},wrapperRef:{defaultValue:null,description:"Ref для обертки input",name:"wrapperRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},leftAddons:{defaultValue:null,description:"Слот слева",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа",name:"rightAddons",required:!1,type:{name:"ReactNode"}},leftAddonsProps:{defaultValue:null,description:"Свойства для обертки левых аддонов",name:"leftAddonsProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},rightAddonsProps:{defaultValue:null,description:"Свойства для обертки правых аддонов",name:"rightAddonsProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},bottomAddons:{defaultValue:null,description:"Слот под инпутом",name:"bottomAddons",required:!1,type:{name:"ReactNode"}},fieldClassName:{defaultValue:null,description:"Дополнительный класс для поля",name:"fieldClassName",required:!1,type:{name:"string"}},inputClassName:{defaultValue:null,description:"Дополнительный класс инпута",name:"inputClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Дополнительный класс для лейбла",name:"labelClassName",required:!1,type:{name:"string"}},addonsClassName:{defaultValue:null,description:"Дополнительный класс для аддонов",name:"addonsClassName",required:!1,type:{name:"string"}},focusedClassName:{defaultValue:null,description:"Класс, который будет установлен при фокусе",name:"focusedClassName",required:!1,type:{name:"string"}},filledClassName:{defaultValue:null,description:"Класс, который будет установлен, если в поле есть значение",name:"filledClassName",required:!1,type:{name:"string"}},onClear:{defaultValue:null,description:"Обработчик нажатия на кнопку очистки",name:"onClear",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.\nДля FormControl используется модификатор -form-control",name:"dataTestId",required:!1,type:{name:"string"}},disableUserInput:{defaultValue:null,description:"Запрещает ввод с клавиатуры",name:"disableUserInput",required:!1,type:{name:"boolean"}},breakpoint:{defaultValue:{value:"1024"},description:"Контрольная точка, с нее начинается desktop версия",name:"breakpoint",required:!1,type:{name:"number"}},defaultMatchMediaValue:{defaultValue:null,description:"Значение по-умолчанию для хука useMatchMedia",name:"defaultMatchMediaValue",required:!1,type:{name:"boolean | (() => boolean)"}},mobileMode:{defaultValue:{value:"input"},description:"Управление нативным режимом на мобильных устройствах",name:"mobileMode",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"native"'}]}},onChange:{defaultValue:null,description:"Обработчик изменения значения",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, payload: { date: Date; value: string; }) => void)"}},onComplete:{defaultValue:null,description:"Обработчик окончания ввода",name:"onComplete",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, payload: { date: Date; value: string; }) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/date-input/src/Component.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"packages/date-input/src/Component.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/date-input/src/utils/format.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$6:function(){return isCompleteDateInput},EJ:function(){return NATIVE_DATE_FORMAT},JY:function(){return isValid},WU:function(){return format},kV:function(){return DATE_MASK},p6:function(){return formatDate},xk:function(){return parseDateString},zT:function(){return DATE_FORMAT}});var date_fns_format__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),date_fns_isValid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),date_fns_parse__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/parse/index.js"),DATE_FORMAT="dd.MM.yyyy",NATIVE_DATE_FORMAT="yyyy-MM-dd",DATE_MASK=[/\d/,/\d/,".",/\d/,/\d/,".",/\d/,/\d/,/\d/,/\d/],isCompleteDateInput=function(input){return input.length===DATE_MASK.length},formatDate=function(date){var dateFormat=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DATE_FORMAT;return(0,date_fns_format__WEBPACK_IMPORTED_MODULE_0__.Z)(date,dateFormat)},parseDateString=function(value){var dateFormat=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DATE_FORMAT;return(0,date_fns_parse__WEBPACK_IMPORTED_MODULE_1__.Z)(value,dateFormat,new Date)},isValid=function(inputValue){return!inputValue||isCompleteDateInput(inputValue)&&(0,date_fns_isValid__WEBPACK_IMPORTED_MODULE_2__.Z)(parseDateString(inputValue))},format=function(value){return value.replace(/^(\d\d)(\d)$/,"$1.$2").replace(/^(\d\d)\.(\d\d)(\d)$/,"$1.$2.$3").replace(/^(\d\d)\d\.(.*)/,"$1.$2").replace(/^(\d\d\.\d\d)\d\.(.*)/,"$1.$2").replace(/^(\d\d\.\d\d\.\d\d\d\d).*/,"$1").replace(/\.$/,"").replace(/^(\d\d\.\d\d)(\d\d\d\d)/,"$1.$2").replace(/^(\d\d)(\d\d\.\d\d\d\d)/,"$1.$2").replace(/^(\d\.\d\d\.\d\d\d\d)([0-9]*)/,"$1").replace(/^(\d\d\.\d\.\d\d\d\d)([0-9]*)/,"$1").replace(/^(\d\.\d\.\d\d\d\d)([0-9]*)/,"$1").replace(/^(\d)\.(\d\d)([0-9]*)\.(\d\d\d\d)/,"$1.$2.$4").replace(/^(\d\d)\.()\.(\d\d\d\d)([0-9]*)/,"$1.$2.$3").replace(/^(\d)\.()\.(\d\d\d\d)([0-9]*)/,"$1.$2.$3").replace(/^()\.()\.(\d\d\d\d)([0-9]*)/,"$1.$2.$3").replace(/^()\.(\d)\.(\d\d\d\d)([0-9]*)/,"$1.$2.$3")}},"./packages/date-input/src/utils/native-supports.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return isInputDateSupported}});function isInputDateSupported(){var input=document.createElement("input");return input.setAttribute("type","date"),input.setAttribute("value","a"),"a"!==input.value}}}]);