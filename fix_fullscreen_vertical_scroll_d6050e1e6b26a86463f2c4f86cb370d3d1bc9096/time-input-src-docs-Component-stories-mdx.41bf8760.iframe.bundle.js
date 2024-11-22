"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4758],{"./packages/time-input/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},timeInput:function(){return timeInput}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/time-input/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),esm=__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/index.js"),link_esm=__webpack_require__("./node_modules/@alfalab/core-components/link/esm/index.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h,{view:"attention",limitContentWidth:!1,title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Компонент больше не поддерживается, переходите на новый компонент ","",(0,jsx_runtime.jsx)(link_esm.r,{href:"https://core-ds.github.io/core-components/master/?path=/docs/universaldateinput--docs",children:"UniversalDateInput."})]}),titleView:"light"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"стандартный-вид-компонента",children:"Стандартный вид компонента"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Стандартный вид компонента — поле ввода с маской ЧЧ.ММ."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(\n    <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n        <TimeInput label='Время визита' placeholder='ЧЧ:ММ' size='m' block={true} />\n    </div>,\n);\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"морфология",children:"Морфология"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Поле ввода является оберткой над ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/formcontrol--docs",children:"FormControl"}),",\nпоэтому наследует все доступные для него настройки."]})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/time-input/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { TimeInput } from '@alfalab/core-components/time-input';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.M})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_stories_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Deprecated components/TimeInput",component:modern.TimeInput,id:"TimeInput"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"TimeInput",children:react.createElement(()=>(0,jsx_runtime.jsx)(modern.TimeInput,{block:(0,addon_knobs_dist.boolean)("block",!1),size:(0,addon_knobs_dist.select)("size",["s","m","l"],"s"),error:(0,addon_knobs_dist.text)("error",""),hint:(0,addon_knobs_dist.text)("hint",""),label:(0,addon_knobs_dist.text)("label",""),placeholder:(0,addon_knobs_dist.text)("placeholder",""),clear:(0,addon_knobs_dist.boolean)("clear",!1)}))}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"TimeInput",children:"Поле для указания времени."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-time-input\n\n## 2.2.45\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.3.1\n\n## 2.2.44\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.3.0\n\n## 2.2.43\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.2.1\n\n## 2.2.42\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.2.0\n\n## 2.2.41\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.1.3\n\n## 2.2.40\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.1.2\n\n## 2.2.39\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.1.1\n\n## 2.2.38\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.1.0\n\n## 2.2.37\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.5\n\n## 2.2.36\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.4\n\n## 2.2.35\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.3\n\n## 2.2.34\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.2\n\n## 2.2.33\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.1\n\n## 2.2.32\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@15.0.0\n\n## 2.2.31\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.7\n\n## 2.2.30\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.6\n\n## 2.2.29\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.5\n\n## 2.2.28\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.4\n\n## 2.2.27\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.3\n\n## 2.2.26\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.2\n\n## 2.2.25\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.1\n\n## 2.2.24\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.0\n\n## 2.2.23\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.3\n\n## 2.2.22\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.2\n\n## 2.2.21\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.1\n\n## 2.2.20\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.3.0\n\n## 2.2.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.2.0\n\n## 2.2.18\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.2\n\n## 2.2.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.1\n\n## 2.2.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.0\n\n## 2.2.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.1\n\n## 2.2.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.0\n\n## 2.2.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.2\n\n## 2.2.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.1\n\n## 2.2.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.0\n\n## 2.2.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.3.0\n\n## 2.2.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.1\n\n## 2.2.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.0\n\n## 2.2.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.4\n\n## 2.2.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.3\n\n## 2.2.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.2\n\n## 2.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.1\n\n## 2.2.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.1.0\n\n## 2.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.2\n\n## 2.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.1\n\n## 2.2.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.0.0\n\n## 2.1.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.18\n\n## 2.1.18\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.17\n\n## 2.1.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.16\n\n## 2.1.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.15\n\n## 2.1.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.14\n\n## 2.1.14\n\n### Patch Changes\n\n### [#654](https://github.com/core-ds/core-components/pull/654)\n\n-   Удалены лишние dependencies, добавлены отсутствующие\n\n-   Обновлены зависимости\n    -   input@11.1.13\n\n## 2.1.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.0.10\n    -   input@11.1.12\n\n## 2.1.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.11\n\n## 2.1.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.10\n\n## 2.1.10\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   icon-button@6.0.9\n    -   input@11.1.9\n\n## 2.1.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.0.8\n    -   input@11.1.8\n\n## 2.1.8\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   icon-button@6.0.7\n    -   input@11.1.7\n\n## 2.1.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.0.6\n    -   input@11.1.6\n\n## 2.1.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.0.5\n    -   input@11.1.5\n\n## 2.1.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.0.4\n    -   input@11.1.4\n\n## 2.1.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.0.3\n\n## 2.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.3\n\n## 2.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.2\n\n## 2.1.1\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   icon-button@6.0.2\n    -   input@11.1.1\n\n## 2.1.0\n\n### Minor Changes\n\n### [#342](https://github.com/core-ds/core-components/pull/342)\n\n-   В компонентах Gallery и Input иконки подгружаемые с 'alfabank.servicecdn.ru' были заменены на иконки из icons-glyph\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.1.0\n\n## 2.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@11.0.2\n    -   icon-button@6.0.1\n\n## 2.0.1\n\n### Patch Changes\n\n### [#320](https://github.com/core-ds/core-components/pull/320)\n\n-   Скрыт нативный спиннер (стрелочки) у компонента Input при type='number'\n\n-   Обновлены зависимости\n    -   input@11.0.1\n\n## 2.0.0\n\n### Major Changes\n\n### [#286](https://github.com/core-ds/core-components/pull/286)\n\n-   Новые стили инпутов в теме default (все компоненты на основе FormControl, включая Select)\n-   Исправлен отступ до hint в SliderInput (уменьшился на 2px)<br />\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   icon-button@6.0.0\n    -   input@11.0.0\n\n## 1.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@10.2.5\n\n## 1.1.2\n\n### Patch Changes\n\n-   @alfalab/core-components-icon-button@5.0.5\n-   @alfalab/core-components-input@10.2.4\n\n## 1.1.1\n\n### Patch Changes\n\n-   Updated dependencies [[#208](https://github.com/core-ds/core-components/pull/208)]\n    -   @alfalab/core-components-input@10.2.3\n\n## 1.1.0\n\n### Minor Changes\n\n-   [#175](https://github.com/core-ds/core-components/pull/175): Новые компоненты: TimeInput, DateTimeInput, DateRangeInput. Thanks [@blackraydev](https://github.com/blackraydev)\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let timeInput=()=>react.createElement(()=>(0,jsx_runtime.jsx)(modern.TimeInput,{block:(0,addon_knobs_dist.boolean)("block",!1),size:(0,addon_knobs_dist.select)("size",["s","m","l"],"s"),error:(0,addon_knobs_dist.text)("error",""),hint:(0,addon_knobs_dist.text)("hint",""),label:(0,addon_knobs_dist.text)("label",""),placeholder:(0,addon_knobs_dist.text)("placeholder",""),clear:(0,addon_knobs_dist.boolean)("clear",!1)}));timeInput.storyName="TimeInput",timeInput.parameters={storySource:{source:'React.createElement(() => {\n  return <TimeInput block={boolean("block", false)} size={select("size", ["s", "m", "l"], "s")} error={text("error", "")} hint={text("hint", "")} label={text("label", "")} placeholder={text("placeholder", "")} clear={boolean("clear", false)} />;\n})'}};let componentMeta={title:"Deprecated components/TimeInput",id:"TimeInput",component:modern.TimeInput,tags:["stories-mdx"],includeStories:["timeInput"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["timeInput"]},"./packages/time-input/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return TimeInput}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_alfalab_core_components_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/input/modern/index.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/time-input/src/utils/format.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["defaultValue","value","onChange","onComplete","className"],TimeInput=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_ref,ref){var _ref$defaultValue=_ref.defaultValue,propValue=_ref.value,onChange=_ref.onChange,onComplete=_ref.onComplete,className=_ref.className,restProps=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propValue||(void 0===_ref$defaultValue?"":_ref$defaultValue)),_useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_alfalab_core_components_input__WEBPACK_IMPORTED_MODULE_1__.Input,(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},restProps),{},{ref:ref,value:value,className:className,onChange:function(event){var newValue=event.target.value;if(!(newValue.length>5)){if(/[^\d:]/.test(newValue))return;var colon=newValue.match(/\:/g);if(colon&&colon.length>1)return;var formattedValue=(0,_utils__WEBPACK_IMPORTED_MODULE_5__.WU)(newValue),formattedValueArr=formattedValue.split(":"),hours=Number(formattedValueArr[0]),mins=Number(formattedValueArr[1]);if(setValue(formattedValue),onChange&&onChange(event,{hours:hours,mins:mins,value:formattedValue}),(0,_utils__WEBPACK_IMPORTED_MODULE_5__.Ic)(formattedValue)){if(!(formattedValue.length>0&&(0,_utils__WEBPACK_IMPORTED_MODULE_5__.Y5)(formattedValue)))return;onComplete&&onComplete(event,{hours:hours,mins:mins,value:formattedValue})}}},onClear:function(){setValue("")}}))});try{TimeInput.displayName="TimeInput",TimeInput.__docgenInfo={description:"",displayName:"TimeInput",props:{size:{defaultValue:null,description:"Размер компонента\n@description s, m, l, xl deprecated, используйте вместо них 48, 56, 64, 72 соответственно",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:"48"},{value:"56"},{value:"64"},{value:"72"}]}},type:{defaultValue:null,description:"Атрибут type",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"email"'},{value:'"money"'},{value:'"password"'},{value:'"tel"'},{value:'"text"'}]}},value:{defaultValue:null,description:"Значение поля ввода",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:""},description:"Начальное значение поля",name:"defaultValue",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Обработчик клика по полю",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"Обработчик MouseDown по полю",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},block:{defaultValue:null,description:"Растягивает компонент на ширину контейнера",name:"block",required:!1,type:{name:"boolean"}},clear:{defaultValue:null,description:"Крестик для очистки поля",name:"clear",required:!1,type:{name:"boolean"}},colors:{defaultValue:null,description:"Набор цветов для компонента",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},error:{defaultValue:null,description:"Отображение ошибки",name:"error",required:!1,type:{name:"ReactNode"}},success:{defaultValue:null,description:"Отображение иконки успеха",name:"success",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Текст подсказки",name:"hint",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Лейбл компонента",name:"label",required:!1,type:{name:"ReactNode"}},labelView:{defaultValue:null,description:"Вид лейбла внутри / снаружи",name:"labelView",required:!1,type:{name:"enum",value:[{value:'"inner"'},{value:'"outer"'}]}},wrapperRef:{defaultValue:null,description:"Ref для обертки input",name:"wrapperRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},leftAddons:{defaultValue:null,description:"Слот слева",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа",name:"rightAddons",required:!1,type:{name:"ReactNode"}},leftAddonsProps:{defaultValue:null,description:"Свойства для обертки левых аддонов",name:"leftAddonsProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},rightAddonsProps:{defaultValue:null,description:"Свойства для обертки правых аддонов",name:"rightAddonsProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},bottomAddons:{defaultValue:null,description:"Слот под инпутом",name:"bottomAddons",required:!1,type:{name:"ReactNode"}},fieldClassName:{defaultValue:null,description:"Дополнительный класс для поля",name:"fieldClassName",required:!1,type:{name:"string"}},inputClassName:{defaultValue:null,description:"Дополнительный класс инпута",name:"inputClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Дополнительный класс для лейбла",name:"labelClassName",required:!1,type:{name:"string"}},addonsClassName:{defaultValue:null,description:"Дополнительный класс для аддонов",name:"addonsClassName",required:!1,type:{name:"string"}},focusedClassName:{defaultValue:null,description:"Класс, который будет установлен при фокусе",name:"focusedClassName",required:!1,type:{name:"string"}},filledClassName:{defaultValue:null,description:"Класс, который будет установлен, если в поле есть значение",name:"filledClassName",required:!1,type:{name:"string"}},onClear:{defaultValue:null,description:"Обработчик нажатия на кнопку очистки",name:"onClear",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.\nДля FormControl используется модификатор -form-control",name:"dataTestId",required:!1,type:{name:"string"}},disableUserInput:{defaultValue:null,description:"Запрещает ввод с клавиатуры",name:"disableUserInput",required:!1,type:{name:"boolean"}},breakpoint:{defaultValue:{value:"1024"},description:"Контрольная точка, с нее начинается desktop версия",name:"breakpoint",required:!1,type:{name:"number"}},client:{defaultValue:null,description:"Версия, которая будет использоваться при серверном рендеринге",name:"client",required:!1,type:{name:"enum",value:[{value:'"desktop"'},{value:'"mobile"'}]}},defaultMatchMediaValue:{defaultValue:null,description:"Значение по-умолчанию для хука useMatchMedia\n@deprecated Используйте client",name:"defaultMatchMediaValue",required:!1,type:{name:"boolean | (() => boolean)"}},onChange:{defaultValue:null,description:"Обработчик изменения значения",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, payload: { hours: number; mins: number; value: string; }) => void)"}},onComplete:{defaultValue:null,description:"Обработчик окончания ввода",name:"onComplete",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, payload: { hours: number; mins: number; value: string; }) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/time-input/src/Component.tsx#TimeInput"]={docgenInfo:TimeInput.__docgenInfo,name:"TimeInput",path:"packages/time-input/src/Component.tsx#TimeInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/time-input/src/utils/format.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ic:function(){return isCompleteTimeInput},WU:function(){return format},Y5:function(){return isValidInputValue}});var DATE_MASK=[/\d/,/\d/,":",/\d/,/\d/],isCompleteTimeInput=function(input){return input.length===DATE_MASK.length},isValidTimeFormat=function(value){var timeArr=value.split(":"),hours=timeArr[0],mins=timeArr[1];return!(2!==hours.length||Number(hours)>23||2!==mins.length||Number(mins)>59)},isValidInputValue=function(inputValue){return!inputValue||isCompleteTimeInput(inputValue)&&isValidTimeFormat(inputValue)},format=function(value){return value.replace(/^(\d\d)(\d)$/,"$1:$2").replace(/^(\d\d)(\d\d)/,"$1:$2").replace(/^(\d):(\d\d)(\d)/,"$1:$2").replace(/\:$/,"")}}}]);