"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4298,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");const MDXContext=react.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react.useContext(MDXContext);return react.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=(mod=mdx_react_shim_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod)),((target,mod,secondTarget)=>{__copyProps(target,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")})(mdx_react_shim_exports,__webpack_require__("./node_modules/@mdx-js/react/index.js"),module.exports)},"./packages/generic-wrapper/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},genericWrapper:function(){return genericWrapper}});__webpack_require__("./node_modules/react/index.js");var mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),modern=__webpack_require__("./dist/gap/modern/index.js"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),generic_wrapper_modern=__webpack_require__("./dist/generic-wrapper/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"лейаут",children:"Лейаут"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент представляет из себя структуру с тремя вертикально или горизонтально расположенными слотами. Каждый слот может принять в себя любой компонент или кастомную верстку. Вертикальные и горизонтальные отступы можно настраивать независимо друг от друга."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [direction, setDirection] = React.useState('horizontal');\n\n    const addon = (\n        <div\n            style={{\n                background: 'rgba(55, 120, 251, 0.1)',\n                border: '1px dashed #3778FB',\n                borderRadius: '8px',\n                height: '64px',\n                width: '64px',\n                boxSizing: 'border-box',\n            }}\n        />\n    );\n\n    const gap = <Gap size='l' direction={direction} />;\n\n    return (\n        <Container>\n            <Row>\n                <div style={{ backgroundColor: 'rgba(55, 120, 251, 0.1)', padding: '16px' }}>\n                    <GenericWrapper column={direction === 'vertical'}>\n                        <GenericWrapper>{addon}</GenericWrapper>\n                        {gap}\n                        <GenericWrapper>{addon}</GenericWrapper>\n                        {gap}\n                        <GenericWrapper>{addon}</GenericWrapper>\n                    </GenericWrapper>\n                </div>\n            </Row>\n            <div style={{ marginTop: '20px' }}>\n                <RadioGroup\n                    label='Направление'\n                    direction='vertical'\n                    name='radioGroupFirst'\n                    onChange={(_, { value }) => setDirection(value)}\n                    value={direction}\n                >\n                    <Radio label='Горизонтальное' value='horizontal' />\n                    <Radio label='Вертикальное' value='vertical' />\n                </RadioGroup>\n            </div>\n        </Container>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"На базе компонента могут быть собраны готовые для использования в продукте пресеты ячеек."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Container>\n    <div style={{ width: '288px' }}>\n        <GenericWrapper column>\n            <Typography.Text>Title</Typography.Text>\n            <Gap size={'3xs'} />\n            <Typography.Text>Subtitle</Typography.Text>\n        </GenericWrapper>\n        <Gap size={'l'} />\n        <GenericWrapper alignItems={'center'}>\n            <GenericWrapper>\n                <Circle size={48}>\n                    <HeartMIcon />\n                </Circle>\n            </GenericWrapper>\n            <Gap size={'m'} direction={'horizontal'} />\n            <GenericWrapper>\n                <GenericWrapper column>\n                    <Typography.Text>Благотворительность</Typography.Text>\n                    <Gap size={'3xs'} />\n                    <Typography.Text>25 000 ₽</Typography.Text>\n                </GenericWrapper>\n            </GenericWrapper>\n        </GenericWrapper>\n        <Gap size={'l'} />\n        <GenericWrapper alignItems={'center'}>\n            <GenericWrapper>\n                <Circle size={48}>\n                    <HeartMIcon />\n                </Circle>\n            </GenericWrapper>\n            <Gap size={'m'} direction={'horizontal'} />\n            <GenericWrapper grow>\n                <GenericWrapper column grow>\n                    <GenericWrapper justifyContent={'between'} grow>\n                        <Typography.Text>Перекрёсток</Typography.Text>\n                        <Typography.Text>−6 231 ₽</Typography.Text>\n                    </GenericWrapper>\n                    <Gap size={'3xs'} />\n                    <GenericWrapper justifyContent={'between'} grow>\n                        <Typography.Text>Гипермаркет</Typography.Text>\n                        <Typography.Text>+62 ₽</Typography.Text>\n                    </GenericWrapper>\n                </GenericWrapper>\n            </GenericWrapper>\n        </GenericWrapper>\n        <Gap size={'l'} />\n        <GenericWrapper alignItems={'start'}>\n            <GenericWrapper>\n                <Circle size={48}>\n                    <HeartMIcon />\n                </Circle>\n            </GenericWrapper>\n            <Gap size={'m'} direction={'horizontal'} />\n            <GenericWrapper column grow>\n                <GenericWrapper justifyContent={'between'} grow>\n                    <Typography.Text>\n                        <div style={{ maxWidth: '133px' }}>Между своими счетами</div>\n                    </Typography.Text>\n                    <Typography.Text>+18 777 ₽</Typography.Text>\n                </GenericWrapper>\n                <Gap size={'3xs'} />\n                <Typography.Text>Пополнение</Typography.Text>\n                <Gap size={'xs'} />\n                <Comment>Коплю на мечту</Comment>\n            </GenericWrapper>\n        </GenericWrapper>\n        <Gap size={'l'} />\n        <GenericWrapper justifyContent={'between'}>\n            <GenericWrapper column>\n                <Typography.Text>Платёж 14 октября</Typography.Text>\n                <Gap size={'xs'} />\n                <Typography.Text>Сумма платежа</Typography.Text>\n                <Typography.Text>30 600,90 ₽</Typography.Text>\n            </GenericWrapper>\n            <GenericWrapper>\n                <CircularProgressBar value={25} subtitle='дней' size='l' />\n            </GenericWrapper>\n        </GenericWrapper>\n        <Gap size={'l'} />\n        <GenericWrapper>\n            <GenericWrapper>\n                <Circle size={48}>\n                    <HeartMIcon />\n                </Circle>\n            </GenericWrapper>\n            <Gap size={'m'} direction={'horizontal'} />\n            <GenericWrapper column>\n                <Typography.Text>Используется вложенность</Typography.Text>\n                <Typography.Text>Одной ячейки в другую</Typography.Text>\n            </GenericWrapper>\n        </GenericWrapper>\n        <Gap size={'m'} />\n        <Button block>Понятно</Button>\n    </div>\n</Container>\n"})})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/generic-wrapper/src/Component.tsx");function development_createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { GenericWrapper } from '@alfalab/core-components/generic-wrapper';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"genericwrapper",children:"GenericWrapper"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.v})]})}var development=function development_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},CHANGELOGraw_namespaceObject="# @alfalab/core-components-generic-wrapper\n\n## 1.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   gap@1.2.0\n\n## 1.0.3\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   gap@1.1.3\n\n## 1.0.2\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   gap@1.1.2\n\n## 1.0.1\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   gap@1.1.1\n\n## 1.0.0\n\n### Major Changes\n\n### [#419](https://github.com/core-ds/core-components/pull/419)\n\n-   Добавлен новый компонент GenericWrapper. Исправлено поведение компонента Gap для flex лейаута\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   gap@1.1.0\n",utils=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts");function Component_stories_createMdxContent(props){const _components=Object.assign({div:"div"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/GenericWrapper",component:generic_wrapper_modern.GenericWrapper,id:"GenericWrapper"}),"\n",(0,jsx_runtime.jsx)(dist.oG,{name:"GenericWrapper",children:()=>{const gapSizes=["3xs","2xs","xs","s","m","l","xl"],alignItems=(0,addon_knobs_dist.select)("alignItems",["end","start","center","baseline"],"start"),justifyContent=(0,addon_knobs_dist.select)("justifyContent",["between","around","evenly","center","start","end"],void 0),column=(0,addon_knobs_dist.boolean)("column",!1),paddingTop=(0,addon_knobs_dist.select)("padding.top",gapSizes,"l"),paddingRight=(0,addon_knobs_dist.select)("padding.right",gapSizes,"l"),paddingBottom=(0,addon_knobs_dist.select)("padding.bottom",gapSizes,"l"),paddingLeft=(0,addon_knobs_dist.select)("padding.left",gapSizes,"l"),gapDirection=(0,addon_knobs_dist.radios)("gapDirection",{vertical:"vertical",horizontal:"horizontal"},"horizontal"),growElement1=(0,addon_knobs_dist.boolean)("grow (1st element)",!1),growElement2=(0,addon_knobs_dist.boolean)("grow (2st element)",!1),growElement3=(0,addon_knobs_dist.boolean)("grow (3d element)",!1),gapSize1=(0,addon_knobs_dist.select)("1st Gap size",gapSizes,"l"),gapSize2=(0,addon_knobs_dist.select)("2nd Gap size",gapSizes,"l"),previewStyles=(0,utils.FX)((0,utils.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0,itemStyle=isPreview?{width:110,height:80,borderRadius:16}:null;return(0,jsx_runtime.jsxs)(_components.div,{style:{width:1e3,...previewStyles},children:[(0,jsx_runtime.jsx)(_components.div,{style:isPreview?{background:"#3778FB1A",display:"inline-block"}:{border:"1px dashed #EFC2D5",borderRadius:"8px"},children:(0,jsx_runtime.jsxs)(generic_wrapper_modern.GenericWrapper,{alignItems:alignItems,column:column,padding:{top:paddingTop,right:paddingRight,bottom:paddingBottom,left:paddingLeft},justifyContent:justifyContent,children:[(0,jsx_runtime.jsx)(generic_wrapper_modern.GenericWrapper,{grow:growElement1,children:(0,jsx_runtime.jsx)(_components.div,{style:{background:"rgba(55, 120, 251, 0.1)",border:"1px dashed #3778FB",borderRadius:"8px",height:128,width:128,boxSizing:"border-box",...itemStyle}})}),(0,jsx_runtime.jsx)(modern.Gap,{direction:gapDirection,size:gapSize1}),(0,jsx_runtime.jsx)(generic_wrapper_modern.GenericWrapper,{grow:growElement2,children:(0,jsx_runtime.jsx)(_components.div,{style:{background:"rgba(55, 120, 251, 0.1)",border:"1px dashed #3778FB",borderRadius:"8px",height:64,width:64,boxSizing:"border-box",...itemStyle}})}),(0,jsx_runtime.jsx)(modern.Gap,{direction:gapDirection,size:gapSize2}),(0,jsx_runtime.jsx)(generic_wrapper_modern.GenericWrapper,{grow:growElement3,children:(0,jsx_runtime.jsx)(_components.div,{style:{background:"rgba(55, 120, 251, 0.1)",border:"1px dashed #3778FB",borderRadius:"8px",height:164,width:164,boxSizing:"border-box",...itemStyle}})})]})}),(0,jsx_runtime.jsx)(modern.Gap,{size:"l",direction:"horizontal"})]})}}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"GenericWrapper",children:"Многофункциональная ячейка."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{development:(0,jsx_runtime.jsx)(development,{}),description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject})})]})}const genericWrapper=()=>{const gapSizes=["3xs","2xs","xs","s","m","l","xl"],alignItems=(0,addon_knobs_dist.select)("alignItems",["end","start","center","baseline"],"start"),justifyContent=(0,addon_knobs_dist.select)("justifyContent",["between","around","evenly","center","start","end"],void 0),column=(0,addon_knobs_dist.boolean)("column",!1),paddingTop=(0,addon_knobs_dist.select)("padding.top",gapSizes,"l"),paddingRight=(0,addon_knobs_dist.select)("padding.right",gapSizes,"l"),paddingBottom=(0,addon_knobs_dist.select)("padding.bottom",gapSizes,"l"),paddingLeft=(0,addon_knobs_dist.select)("padding.left",gapSizes,"l"),gapDirection=(0,addon_knobs_dist.radios)("gapDirection",{vertical:"vertical",horizontal:"horizontal"},"horizontal"),growElement1=(0,addon_knobs_dist.boolean)("grow (1st element)",!1),growElement2=(0,addon_knobs_dist.boolean)("grow (2st element)",!1),growElement3=(0,addon_knobs_dist.boolean)("grow (3d element)",!1),gapSize1=(0,addon_knobs_dist.select)("1st Gap size",gapSizes,"l"),gapSize2=(0,addon_knobs_dist.select)("2nd Gap size",gapSizes,"l"),previewStyles=(0,utils.FX)((0,utils.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0,itemStyle=isPreview?{width:110,height:80,borderRadius:16}:null;return(0,jsx_runtime.jsxs)("div",{style:{width:1e3,...previewStyles},children:[(0,jsx_runtime.jsx)("div",{style:isPreview?{background:"#3778FB1A",display:"inline-block"}:{border:"1px dashed #EFC2D5",borderRadius:"8px"},children:(0,jsx_runtime.jsxs)(generic_wrapper_modern.GenericWrapper,{alignItems:alignItems,column:column,padding:{top:paddingTop,right:paddingRight,bottom:paddingBottom,left:paddingLeft},justifyContent:justifyContent,children:[(0,jsx_runtime.jsx)(generic_wrapper_modern.GenericWrapper,{grow:growElement1,children:(0,jsx_runtime.jsx)("div",{style:{background:"rgba(55, 120, 251, 0.1)",border:"1px dashed #3778FB",borderRadius:"8px",height:128,width:128,boxSizing:"border-box",...itemStyle}})}),(0,jsx_runtime.jsx)(modern.Gap,{direction:gapDirection,size:gapSize1}),(0,jsx_runtime.jsx)(generic_wrapper_modern.GenericWrapper,{grow:growElement2,children:(0,jsx_runtime.jsx)("div",{style:{background:"rgba(55, 120, 251, 0.1)",border:"1px dashed #3778FB",borderRadius:"8px",height:64,width:64,boxSizing:"border-box",...itemStyle}})}),(0,jsx_runtime.jsx)(modern.Gap,{direction:gapDirection,size:gapSize2}),(0,jsx_runtime.jsx)(generic_wrapper_modern.GenericWrapper,{grow:growElement3,children:(0,jsx_runtime.jsx)("div",{style:{background:"rgba(55, 120, 251, 0.1)",border:"1px dashed #3778FB",borderRadius:"8px",height:164,width:164,boxSizing:"border-box",...itemStyle}})})]})}),(0,jsx_runtime.jsx)(modern.Gap,{size:"l",direction:"horizontal"})]})};genericWrapper.storyName="GenericWrapper",genericWrapper.parameters={storySource:{source:'() => {\n  const gapSizes = ["3xs", "2xs", "xs", "s", "m", "l", "xl"];\n  const alignItems = select("alignItems", ["end", "start", "center", "baseline"], "start");\n  const justifyContent = select("justifyContent", ["between", "around", "evenly", "center", "start", "end"], undefined);\n  const column = boolean("column", false);\n  const paddingTop = select("padding.top", gapSizes, "l");\n  const paddingRight = select("padding.right", gapSizes, "l");\n  const paddingBottom = select("padding.bottom", gapSizes, "l");\n  const paddingLeft = select("padding.left", gapSizes, "l");\n  const gapDirection = radios("gapDirection", {\n    vertical: "vertical",\n    horizontal: "horizontal"\n  }, "horizontal");\n  const growElement1 = boolean("grow (1st element)", false);\n  const growElement2 = boolean("grow (2st element)", false);\n  const growElement3 = boolean(`grow (3d element)`, false);\n  const gapSize1 = select("1st Gap size", gapSizes, "l");\n  const gapSize2 = select("2nd Gap size", gapSizes, "l");\n  const previewStyles = stylesStringToObj(getQueryParam("wrapperStyles"));\n  const isPreview = Object.keys(previewStyles).length > 0;\n  const itemStyle = isPreview ? {\n    width: 110,\n    height: 80,\n    borderRadius: 16\n  } : null;\n  return <div style={{\n    width: 1000,\n    ...previewStyles\n  }}>\n                <div style={isPreview ? {\n      background: "#3778FB1A",\n      display: "inline-block"\n    } : {\n      border: "1px dashed #EFC2D5",\n      borderRadius: "8px"\n    }}>\n                    <GenericWrapper alignItems={alignItems} column={column} padding={{\n        top: paddingTop,\n        right: paddingRight,\n        bottom: paddingBottom,\n        left: paddingLeft\n      }} justifyContent={justifyContent}>\n                        <GenericWrapper grow={growElement1}>\n                            <div style={{\n            background: "rgba(55, 120, 251, 0.1)",\n            border: "1px dashed #3778FB",\n            borderRadius: "8px",\n            height: 128,\n            width: 128,\n            boxSizing: "border-box",\n            ...itemStyle\n          }} />\n                        </GenericWrapper>\n                        <Gap direction={gapDirection} size={gapSize1} />\n                        <GenericWrapper grow={growElement2}>\n                            <div style={{\n            background: "rgba(55, 120, 251, 0.1)",\n            border: "1px dashed #3778FB",\n            borderRadius: "8px",\n            height: 64,\n            width: 64,\n            boxSizing: "border-box",\n            ...itemStyle\n          }} />\n                        </GenericWrapper>\n                        <Gap direction={gapDirection} size={gapSize2} />\n                        <GenericWrapper grow={growElement3}>\n                            <div style={{\n            background: "rgba(55, 120, 251, 0.1)",\n            border: "1px dashed #3778FB",\n            borderRadius: "8px",\n            height: 164,\n            width: 164,\n            boxSizing: "border-box",\n            ...itemStyle\n          }} />\n                        </GenericWrapper>\n                    </GenericWrapper>\n                </div>\n                <Gap size="l" direction="horizontal" />\n            </div>;\n}'}};const componentMeta={title:"Components/GenericWrapper",id:"GenericWrapper",component:generic_wrapper_modern.GenericWrapper,tags:["stories-mdx"],includeStories:["genericWrapper"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function Component_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}};var Component_stories=componentMeta;const __namedExportsOrder=["genericWrapper"]},"./packages/generic-wrapper/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return GenericWrapper}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),index_module={component:"component_IJ2MC",column:"column_YN5Ec","align-stretch":"align-stretch_VDwAD","align-start":"align-start_MsMLb","align-end":"align-end_US8BN","align-center":"align-center_iaSQx","align-baseline":"align-baseline_syFgd","justify-center":"justify-center_LFKb0","justify-between":"justify-between_V4_Kx","justify-around":"justify-around_GtrD6","justify-evenly":"justify-evenly_xmiIO","justify-start":"justify-start_wnJoR","justify-end":"justify-end_sw3KC",grow:"grow_vcTO_","padding-top-3xs":"padding-top-3xs_B30Ey","padding-top-2xs":"padding-top-2xs_Nh726","padding-top-xs":"padding-top-xs_kbaNM","padding-top-s":"padding-top-s_TawHU","padding-top-m":"padding-top-m_YhyTm","padding-top-l":"padding-top-l_yvMtE","padding-top-xl":"padding-top-xl_jwnWx","padding-right-3xs":"padding-right-3xs_fMni2","padding-right-2xs":"padding-right-2xs_G6ugp","padding-right-xs":"padding-right-xs_SPOcH","padding-right-s":"padding-right-s_aWpRd","padding-right-m":"padding-right-m_j6lMI","padding-right-l":"padding-right-l_wzVE_","padding-right-xl":"padding-right-xl_T5D5k","padding-bottom-3xs":"padding-bottom-3xs_JOWec","padding-bottom-2xs":"padding-bottom-2xs_xVsZM","padding-bottom-xs":"padding-bottom-xs_zwYk_","padding-bottom-s":"padding-bottom-s_exaVf","padding-bottom-m":"padding-bottom-m_lFSb8","padding-bottom-l":"padding-bottom-l_VUxWf","padding-bottom-xl":"padding-bottom-xl_vsMp4","padding-left-3xs":"padding-left-3xs_l46Hb","padding-left-2xs":"padding-left-2xs_F0jao","padding-left-xs":"padding-left-xs_obXQm","padding-left-s":"padding-left-s_saR4k","padding-left-m":"padding-left-m_tdjUU","padding-left-l":"padding-left-l_twxEe","padding-left-xl":"padding-left-xl_Nausb"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),GenericWrapper=function GenericWrapper(_ref){var children=_ref.children,padding=_ref.padding,alignItems=_ref.alignItems,justifyContent=_ref.justifyContent,className=_ref.className,dataTestId=_ref.dataTestId,_ref$column=_ref.column,column=void 0!==_ref$column&&_ref$column,_ref$grow=_ref.grow,grow=void 0!==_ref$grow&&_ref$grow,paddingStyles=padding&&(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},index_module["padding-top-".concat(padding.top)],padding.top),index_module["padding-right-".concat(padding.right)],padding.right),index_module["padding-bottom-".concat(padding.bottom)],padding.bottom),index_module["padding-left-".concat(padding.left)],padding.left),alignmentStyles=alignItems&&index_module["align-".concat(alignItems)],justifyContentStyles=justifyContent&&index_module["justify-".concat(justifyContent)],growStyles=grow&&index_module.grow,columnsStyles=column&&index_module.column;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.component,columnsStyles,alignmentStyles,paddingStyles,justifyContentStyles,growStyles,className),"data-test-id":dataTestId,children:children})};try{GenericWrapper.displayName="GenericWrapper",GenericWrapper.__docgenInfo={description:"",displayName:"GenericWrapper",props:{children:{defaultValue:null,description:"Дочерние элементы.",name:"children",required:!0,type:{name:"ReactNode"}},column:{defaultValue:{value:"false"},description:"Свойство управляет направлением основной оси внутри флекс-контейнера",name:"column",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"Внутренние отступы",name:"padding",required:!1,type:{name:"PaddingPropType"}},alignItems:{defaultValue:null,description:"Свойство для выравнивания элементов внутри контейнера по поперечной оси.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:null,description:"Свойство выравнивает флекс-элементы внутри флекс-контейнера по основной оси.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},grow:{defaultValue:{value:"false"},description:"Позволяет заполнить всё доступное пространство родительского элемента.",name:"grow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/generic-wrapper/src/Component.tsx#GenericWrapper"]={docgenInfo:GenericWrapper.__docgenInfo,name:"GenericWrapper",path:"packages/generic-wrapper/src/Component.tsx#GenericWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function getQueryParam(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function parseKnobs(){return Object.entries(queryParams).reduce((function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc}),{})};function parseValue(value){if(value){if(function isBoolean(){return["true","false"].includes(value)}())return"true"===value;if(function isNumeric(){return!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value))}())return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map((function(v){return v.trim()})),obj={};return properties.forEach((function(property){var _property$split$map=property.split(":").map((function(v){return v.trim()})),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val})),obj}function isJsonObj(str){try{return"object"==typeof JSON.parse(str)}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?Object.keys(obj).map((function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map((function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);