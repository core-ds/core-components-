"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4380,2374,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/segmented-control/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},segmented_control:function(){return segmented_control}});var _segmented_control$pa,_segmented_control$pa2,_segmented_control$pa3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/segmented-control/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/SegmentedControl",component:_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.SegmentedControl,id:"SegmentedControl"},segmented_control={name:"SegmentedControl",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(1),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState,2),selectedId=_React$useState2[0],setSelectedId=_React$useState2[1],colors=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("colors",["default","inverted"],"default");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.SegmentedControl,{size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",[40,32],40),shape:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("shape",["rounded","rectangular"],"rectangular"),onChange:function(id){return setSelectedId(id)},selectedId:selectedId,colors:colors,disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:1,title:"Сегмент 1",children:"Сегмент 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:2,title:"Сегмент 2",children:"Сегмент 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:3,title:"Сегмент 3",children:"Сегмент 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:4,title:"Сегмент 4",children:"Сегмент 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:5,title:"Сегмент 4",children:"Сегмент 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:6,title:"Сегмент 4",children:"Сегмент 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:7,title:"Сегмент 4",children:"Сегмент 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Segment,{id:8,title:"Сегмент 4",children:"Сегмент 4"})]})})}};__webpack_exports__.default=meta,segmented_control.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},segmented_control.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_segmented_control$pa=segmented_control.parameters)||void 0===_segmented_control$pa?void 0:_segmented_control$pa.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'SegmentedControl',\n  render: () => {\n    const [selectedId, setSelectedId] = React.useState(1);\n    const handleChange = id => setSelectedId(id);\n    const colors = select('colors', ['default', 'inverted'], 'default');\n    return <div style={{\n      backgroundColor: colors === 'inverted' ? 'var(--color-light-base-bg-primary-inverted)' : 'transparent',\n      padding: '8px',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    }}>\n                <SegmentedControl size={select('size', [40, 32], 40)} shape={select('shape', ['rounded', 'rectangular'], 'rectangular')} onChange={handleChange} selectedId={selectedId} colors={colors} disabled={boolean('disabled', false)}>\n                    <Segment id={1} title={'Сегмент 1'}>\n                        Сегмент 1\n                    </Segment>\n                    <Segment id={2} title={'Сегмент 2'}>\n                        Сегмент 2\n                    </Segment>\n                    <Segment id={3} title={'Сегмент 3'}>\n                        Сегмент 3\n                    </Segment>\n                    <Segment id={4} title={'Сегмент 4'}>\n                        Сегмент 4\n                    </Segment>\n                    <Segment id={5} title={'Сегмент 4'}>\n                        Сегмент 4\n                    </Segment>\n                    <Segment id={6} title={'Сегмент 4'}>\n                        Сегмент 4\n                    </Segment>\n                    <Segment id={7} title={'Сегмент 4'}>\n                        Сегмент 4\n                    </Segment>\n                    <Segment id={8} title={'Сегмент 4'}>\n                        Сегмент 4\n                    </Segment>\n                </SegmentedControl>\n            </div>;\n  }\n}"},null===(_segmented_control$pa2=segmented_control.parameters)||void 0===_segmented_control$pa2?void 0:null===(_segmented_control$pa3=_segmented_control$pa2.docs)||void 0===_segmented_control$pa3?void 0:_segmented_control$pa3.source)})});let __namedExportsOrder=["segmented_control"]},"./packages/segmented-control/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/segmented-control/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"размеры-и-стили",children:"Размеры и стили"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Для контрола доступно два размера и два вида скруглений."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [selectedId, setSelectedId] = React.useState({\n        '1': 1,\n        '2': 1,\n        '3': 1,\n        '4': 1,\n    });\n    const handleChange = (pos, id) => setSelectedId({ ...selectedId, [pos]: id });\n    return (\n        <div style={{ width: 360 }}>\n        <Space fullWidth size={24}>\n            <SegmentedControl size={40} onChange={(id) => handleChange('1', id)} selectedId={selectedId[\"1\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl onChange={(id) => handleChange('2', id)} selectedId={selectedId[\"2\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl size={40} shape='rounded' onChange={(id) => handleChange('3', id)} selectedId={selectedId[\"3\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl shape='rounded' onChange={(id) => handleChange('4', id)} selectedId={selectedId[\"4\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n        </Space>\n    </div>\n    )\n})\n//MOBILE\nrender(() => {\n    const [selectedId, setSelectedId] = React.useState({\n        '1': 1,\n        '2': 1,\n        '3': 1,\n        '4': 1,\n    });\n    const handleChange = (pos, id) => setSelectedId({ ...selectedId, [pos]: id });\n    return (\n        <Space fullWidth size={24}>\n            <SegmentedControl size={40} onChange={(id) => handleChange('1', id)} selectedId={selectedId[\"1\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl onChange={(id) => handleChange('2', id)} selectedId={selectedId[\"2\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl size={40} shape='rounded' onChange={(id) => handleChange('3', id)} selectedId={selectedId[\"3\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl shape='rounded' onChange={(id) => handleChange('4', id)} selectedId={selectedId[\"4\"]}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n        </Space>\n    )\n})\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"количество-сегментов",children:"Количество сегментов"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Контрол может содержать от двух до пяти сегментов."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [selectedId, setSelectedId] = React.useState({\n        '1': 1,\n        '2': 1,\n        '3': 1,\n        '4': 1,\n        '5': 1,\n    });\n    const handleChange = (pos, id) => setSelectedId({ ...selectedId, [pos]: id });\n    return (\n        <div style={{ width: 360 }}>\n        <Space fullWidth size={24}>\n            <SegmentedControl selectedId={selectedId[\"1\"]} onChange={(id) => handleChange('1', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"2\"]} onChange={(id) => handleChange('2', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n                <Segment id={3} title='Таб 3' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"3\"]} onChange={(id) => handleChange('3', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n                <Segment id={3} title='Таб 3' />\n                <Segment id={4} title='Таб 4' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"4\"]} onChange={(id) => handleChange('4', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n                <Segment id={3} title='Таб 3' />\n                <Segment id={4} title='Таб 4' />\n                <Segment id={5} title='Таб 5' />\n            </SegmentedControl>\n        </Space>\n    </div>\n    )\n})\n//MOBILE\nrender(() => {\n    const [selectedId, setSelectedId] = React.useState({\n        '1': 1,\n        '2': 1,\n        '3': 1,\n        '4': 1,\n        '5': 1,\n    });\n    const handleChange = (pos, id) => setSelectedId({ ...selectedId, [pos]: id });\n    return (\n        <Space fullWidth size={24}>\n            <SegmentedControl selectedId={selectedId[\"1\"]} onChange={(id) => handleChange('1', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"2\"]} onChange={(id) => handleChange('2', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n                <Segment id={3} title='Таб 3' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"3\"]} onChange={(id) => handleChange('3', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n                <Segment id={3} title='Таб 3' />\n                <Segment id={4} title='Таб 4' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"4\"]} onChange={(id) => handleChange('4', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n                <Segment id={3} title='Таб 3' />\n                <Segment id={4} title='Таб 4' />\n                <Segment id={5} title='Таб 5' />\n            </SegmentedControl>\n        </Space>\n    )\n})\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"заголовки-сегментов",children:"Заголовки сегментов"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Сегменты могут содержать как строковые значения, так и React компоненты"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [selectedId, setSelectedId] = React.useState({\n        '1': 1,\n        '2': 1,\n    });\n    const handleChange = (pos, id) => setSelectedId({ ...selectedId, [pos]: id });\n    return (\n        <div style={{ width: 360 }}>\n        <Space fullWidth size={24}>\n            <SegmentedControl selectedId={selectedId[\"1\"]} onChange={(id) => handleChange('1', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"2\"]} onChange={(id) => handleChange('2', id)}>\n                <Segment id={1} title={<AScoresCircleMIcon />} />\n                <Segment id={2} title={<AScoresCircleMIcon />} />\n            </SegmentedControl>\n        </Space>\n    </div>\n    )\n})\n//MOBILE\nrender(() => {\n    const [selectedId, setSelectedId] = React.useState({\n        '1': 1,\n        '2': 1,\n    });\n    const handleChange = (pos, id) => setSelectedId({ ...selectedId, [pos]: id });\n    return (\n        <Space fullWidth size={24}>\n            <SegmentedControl selectedId={selectedId[\"1\"]} onChange={(id) => handleChange('1', id)}>\n                <Segment id={1} title='Таб 1' />\n                <Segment id={2} title='Таб 2' />\n            </SegmentedControl>\n            <SegmentedControl selectedId={selectedId[\"2\"]} onChange={(id) => handleChange('2', id)}>\n                <Segment id={1} title={<AScoresCircleMIcon />} />\n                <Segment id={2} title={<AScoresCircleMIcon />} />\n            </SegmentedControl>\n        </Space>\n    )\n})\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/segmented-control/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",p:"p"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { SegmentedControl, Segmented } from '@alfalab/core-components/segmented-control';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tips--tricks",children:"Tips & Tricks"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Свойство ",(0,jsx_runtime.jsx)(_components.code,{children:"title"})," будет использовано для генерации заголовков, а ",(0,jsx_runtime.jsx)(_components.code,{children:"id"})," для переключения табов."]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["С помощью свойства ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," таб можно заблокировать для выбора."]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Контент сегмента (children) будут подставляться под компонент при выборе данного сегмента,\nтак же можно задать кастомный className для каждого контента сегмента, пробросив contentClassName\nопределенному сегменту."}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(blocks.Ft,{components:{SegmentedControl:src.SegmentedControl,Segment:src.Segment}})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"SegmentedControl",children:"Используется для переключения или фильтрации контента."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-segmented-control\n\n## 1.7.1\n\n### Patch Changes\n\n<sup><time>13.12.2024</time></sup>\n\n### [#1478](https://github.com/core-ds/core-components/pull/1478)\n\n-   Вендор classnames обновлён 2.3.1 -> 2.5.1\n\n## 1.7.0\n\n### Minor Changes\n\n<sup><time>17.09.2024</time></sup>\n\n### [#1367](https://github.com/core-ds/core-components/pull/1367)\n\n-   Добавлен пропс блокировки компонента\n\n## 1.6.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1358](https://github.com/core-ds/core-components/pull/1358)\n\n-   Обновлены наименования переменных скругления\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1369](https://github.com/core-ds/core-components/pull/1369)\n\n-   Заменили числовые значения скругления на переменные\n\n## 1.6.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 1.5.2\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1356](https://github.com/core-ds/core-components/pull/1356)\n\n-   Обновлены наименования переменных отступов\n\n## 1.5.1\n\n### Patch Changes\n\n<sup><time>27.04.2024</time></sup>\n\n### [#1182](https://github.com/core-ds/core-components/pull/1182)\n\n-   Добавлена возможность устанавливать в сегмент ReactNode\n-   Обновлена документация\n\n## 1.5.0\n\n### Minor Changes\n\n<sup><time>19.04.2024</time></sup>\n\n### [#1166](https://github.com/core-ds/core-components/pull/1166)\n\n-   Добавлено новое свойство style, отвечающее за дополнительные инлайновые стили для враппера\n\n## 1.4.0\n\n### Minor Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1028](https://github.com/core-ds/core-components/pull/1028)\n\n-   Добавлены новые способы указать размеры - 32 и 40. Буквенные значения размеров xs и xxs теперь deprecated, используйте вместо них 32 и 40 соответственно\n\n## 1.3.0\n\n### Minor Changes\n\n### [#1000](https://github.com/core-ds/core-components/pull/1000)\n\n-   Добавлено новое свойство colors, отвечающее за набор цветов в компоненте (возможность переключить на inverted цвета для тёмного фона)\n\n## 1.2.0\n\n### Minor Changes\n\n### [#963](https://github.com/core-ds/core-components/pull/963)\n\n-   В компонентах CheckboxGroup, RadioGroup, SegmentedControl, и Slider цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 1.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 1.0.5\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 1.0.4\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n## 1.0.3\n\n### Patch Changes\n\n### [#666](https://github.com/core-ds/core-components/pull/666)\n\n-   Для активного таба токены фона и текста изменены на static\n\n## 1.0.2\n\n### Patch Changes\n\n### [#625](https://github.com/core-ds/core-components/pull/625)\n\n-   Исправлен радиус скругления для прямоугольной формы компонента\n\n## 1.0.1\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 1.0.0\n\n### Major Changes\n\n### [#528](https://github.com/core-ds/core-components/pull/528)\n\n-   Добавлен новый компонент SegmentedControl.\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/segmented-control/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SIZE_TO_CLASSNAME_MAP:function(){return SIZE_TO_CLASSNAME_MAP},Segment:function(){return Segment},SegmentedControl:function(){return SegmentedControl}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),resize_observer=__webpack_require__("./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),SegmentedControlContext=(0,react.createContext)({onChange:function onChange(){return null},colors:"default"}),index_module={wrapper:"wrapper_N9EbJ",disabled:"disabled_t2p5Y",container:"container_wgn0V",inner:"inner_mLacL",segment:"segment_oMKH7",selected:"selected_FwXVX","size-40":"size-40_WmKW0",rounded:"rounded_LPl0z",rectangular:"rectangular__hTJl",selectedBox:"selectedBox_nVEcu","size-32":"size-32_i1GXD"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),colorStyles={default:{wrapper:"wrapper_bf4xO",segment:"segment_O7R9Q",selected:"selected_JC2s7",selectedBox:"selectedBox_E425h"},inverted:{wrapper:"wrapper__Qtxa",segment:"segment_dNZGu",selected:"selected_QMEuJ",selectedBox:"selectedBox_eTRCD"}},SIZE_TO_CLASSNAME_MAP={xxs:"size-32",xs:"size-40",32:"size-32",40:"size-40"},SegmentedControl=function(_ref){var className=_ref.className,selectedId=_ref.selectedId,onChange=_ref.onChange,_ref$shape=_ref.shape,shape=void 0===_ref$shape?"rectangular":_ref$shape,_ref$size=_ref.size,defaultChildren=_ref.children,_ref$colors=_ref.colors,colors=void 0===_ref$colors?"default":_ref$colors,dataTestId=_ref.dataTestId,style=_ref.style,_ref$disabled=_ref.disabled,wrapperRef=(0,react.useRef)(null),innerRef=(0,react.useRef)(null),selectedBoxRef=(0,react.useRef)(null),children=defaultChildren.slice(0,5),selectedSegmentPosition=children.findIndex(function(item){return item.props.id===selectedId}),isPositionFounded=-1!==selectedSegmentPosition,content=isPositionFounded&&children[selectedSegmentPosition].props.children,contentClassName=isPositionFounded&&children[selectedSegmentPosition].props.contentClassName,setSelectedBoxStyles=(0,react.useCallback)(function(){if(innerRef.current&&selectedBoxRef.current){var segments=Array.from(innerRef.current.children),width=innerRef.current.getBoundingClientRect().width/segments.length,offsetLeft=width*selectedSegmentPosition;selectedBoxRef.current.style.width="".concat(width,"px"),selectedBoxRef.current.style.transform="translateX(".concat(offsetLeft,"px)")}},[selectedSegmentPosition]),setSelectedBoxStylesRef=(0,react.useRef)(setSelectedBoxStyles);return(0,react.useEffect)(function(){setSelectedBoxStylesRef.current=setSelectedBoxStyles,setSelectedBoxStyles()},[setSelectedBoxStyles]),(0,react.useEffect)(function(){if(wrapperRef.current){var observer=new(window.ResizeObserver||resize_observer.do)(function(){return setSelectedBoxStylesRef.current()});return observer.observe(wrapperRef.current),function(){return observer.disconnect()}}},[]),(0,jsx_runtime.jsxs)(SegmentedControlContext.Provider,{value:{onChange:onChange,colors:colors},children:[(0,jsx_runtime.jsx)("div",{ref:wrapperRef,className:className,style:style,"data-test-id":dataTestId,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()("wrapper_N9EbJ",colorStyles[colors].wrapper,index_module[shape],index_module[SIZE_TO_CLASSNAME_MAP[void 0===_ref$size?32:_ref$size]],(0,defineProperty.Z)({},"disabled_t2p5Y",void 0!==_ref$disabled&&_ref$disabled)),children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("container_wgn0V"),children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()("selectedBox_nVEcu",colorStyles[colors].selectedBox,index_module[shape]),ref:selectedBoxRef}),(0,jsx_runtime.jsx)("div",{className:classnames_default()("inner_mLacL"),ref:innerRef,children:react.Children.map(children,function(item){return react.cloneElement(item,{className:classnames_default()("segment_oMKH7",colorStyles[colors].segment,(0,defineProperty.Z)((0,defineProperty.Z)({},"selected_FwXVX",item.props.id===selectedId),colorStyles[colors].selected,item.props.id===selectedId),item.props.className)})})})]})})}),content&&(0,jsx_runtime.jsx)("div",{className:classnames_default()(contentClassName),children:content})]})};try{SegmentedControl.displayName="SegmentedControl",SegmentedControl.__docgenInfo={description:"",displayName:"SegmentedControl",props:{className:{defaultValue:null,description:"Дополнительный className",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Обработчик смены выбранного сегмента",name:"onChange",required:!0,type:{name:"(id: IDType) => void"}},selectedId:{defaultValue:null,description:"ID выбранного сегмента",name:"selectedId",required:!0,type:{name:"IDType"}},size:{defaultValue:{value:"32"},description:"Размер компонента\n@description xs, xxs deprecated, используйте вместо них 40, 32 соответственно",name:"size",required:!1,type:{name:"enum",value:[{value:"40"},{value:"32"},{value:'"xxs"'},{value:'"xs"'}]}},shape:{defaultValue:{value:"rectangular"},description:"Форма компонента",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"rectangular"'}]}},children:{defaultValue:null,description:"Дочерние элементы",name:"children",required:!0,type:{name:"ReactElement<SegmentProps, string | JSXElementConstructor<any>>[]"}},colors:{defaultValue:{value:"default"},description:"Набор цветов для компонента",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Дополнительные инлайн стили для враппера",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:{value:"false"},description:"Отключает пользовательский ввод",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/segmented-control/src/Component.tsx#SegmentedControl"]={docgenInfo:SegmentedControl.__docgenInfo,name:"SegmentedControl",path:"packages/segmented-control/src/Component.tsx#SegmentedControl"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),Component_colorStyles={default:{segment:"segment_CG_w4"},inverted:{segment:"segment_JKVwB"}},Segment=(0,react.forwardRef)(function(_ref,ref){var id=_ref.id,className=_ref.className,title=_ref.title,dataTestId=_ref.dataTestId,_useContext=(0,react.useContext)(SegmentedControlContext),onChange=_useContext.onChange,_useContext$colors=_useContext.colors,segmentRef=(0,react.useRef)(null),_useFocus=(0,esm.KK)(segmentRef,"keyboard"),focused=(0,slicedToArray.Z)(_useFocus,1)[0];return(0,jsx_runtime.jsx)("button",{type:"button",onClick:function(){onChange(id)},ref:(0,react_merge_refs_esm.Z)([segmentRef,ref]),className:classnames_default()("segment_zeSuv",Component_colorStyles[void 0===_useContext$colors?"default":_useContext$colors].segment,className,focused),"data-test-id":dataTestId,children:title})});try{Segment.displayName="Segment",Segment.__docgenInfo={description:"",displayName:"Segment",props:{className:{defaultValue:null,description:"Дополнительный className",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Дополнительный className для контента сегмента",name:"contentClassName",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"ID сегмента",name:"id",required:!0,type:{name:"IDType"}},title:{defaultValue:null,description:"Заголовок сегмента",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Контент выбранного сегмента",name:"children",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/segmented-control/src/components/segment/Component.tsx#Segment"]={docgenInfo:Segment.__docgenInfo,name:"Segment",path:"packages/segmented-control/src/components/segment/Component.tsx#Segment"})}catch(__react_docgen_typescript_loader_error){}}}]);