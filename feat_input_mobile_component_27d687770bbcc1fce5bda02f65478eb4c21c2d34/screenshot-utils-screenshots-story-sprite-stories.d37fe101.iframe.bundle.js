"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4354],{"./packages/screenshot-utils/screenshots-story/sprite.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ScreenshotsSprite:function(){return ScreenshotsSprite},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return sprite_stories}});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js")),toConsumableArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateCombos(list){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,result=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],current=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return n===list.length?result.push(current):list[n].forEach((function(item,i){return generateCombos(list,n+1,result,[].concat((0,toConsumableArray.Z)(current),[[item,i]]))})),result}var _ScreenshotsSprite$pa,_ScreenshotsSprite$pa2,_ScreenshotsSprite$pa3,components=__webpack_require__("./packages/screenshot-utils/screenshots-story/components.ts"),utils=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),sprite_stories_module_container="container_ygMaL",sprite_stories_module_item="item_yKr_P",sprite_stories_module_title="title_AlhdU",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"],propsToTitle=function propsToTitle(props){props.children;var restProps=(0,objectWithoutProperties.Z)(props,_excluded);return JSON.stringify(restProps).replace(/[{}"]/g,"").replace(/,/g,", ")},ScreenshotsSprite=function ScreenshotsSprite(){var knobs=(0,utils.Ph)("knobs")?JSON.parse((0,utils.Ph)("knobs")):{},combos=generateCombos(Object.values(knobs).map((function(v){return Array.isArray(v)?v:[v]}))),ids=combos.map((function(combo){return combo.map((function(_ref){var _ref2=(0,slicedToArray.Z)(_ref,2);_ref2[0];return _ref2[1]})).join("-")})),propsList=function combosToProps(combos,names){return combos.map((function(combo){return combo.reduce((function(props,_ref,nameIndex){var value=(0,slicedToArray.Z)(_ref,1)[0];return(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},(0,defineProperty.Z)({},names[nameIndex],value))}),{})}),[])}(combos,Object.keys(knobs)),Component=(0,components.X)((0,utils.Ph)("package"),(0,utils.Ph)("component"),(0,utils.Ph)("subComponent")),componentStyles={};componentStyles.width=+(0,utils.Ph)("width")||void 0,componentStyles.height=+(0,utils.Ph)("height")||void 0;var mockDate=+(0,utils.Ph)("mockDate");return mockDate&&(Date.now=function(){return mockDate}),Component?(0,jsx_runtime.jsx)("div",{className:sprite_stories_module_container,children:propsList.map((function(props,index){"Select"===(0,utils.Ph)("component")&&props.options&&"string"==typeof props.options&&(props.options=JSON.parse(props.options));var invertedBg=(0,utils.Ph)("inverted",!0)||"inverted"===props.colors;return(0,jsx_runtime.jsxs)("div",{className:sprite_stories_module_item,children:[(0,jsx_runtime.jsx)("span",{className:sprite_stories_module_title,children:propsToTitle(props)}),(0,jsx_runtime.jsx)("div",{id:ids[index],style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},componentStyles),{},{backgroundColor:invertedBg?"var(--color-light-bg-primary-inverted)":"transparent"}),children:(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)({},props))})]},index)}))}):null},sprite_stories={title:"Components"};ScreenshotsSprite.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ScreenshotsSprite.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ScreenshotsSprite$pa=ScreenshotsSprite.parameters)||void 0===_ScreenshotsSprite$pa?void 0:_ScreenshotsSprite$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => {\n  const knobs = getQueryParam('knobs') ? JSON.parse(getQueryParam('knobs')) : {};\n  const combos = generateCombos(Object.values(knobs).map(v => Array.isArray(v) ? v : [v]));\n\n  // eslint-disable-next-line @typescript-eslint/no-unused-vars\n  const ids = combos.map(combo => combo.map(([_, valueIndex]) => valueIndex).join('-'));\n  const propsList = combosToProps(combos, Object.keys(knobs));\n  const Component = getComponent(getQueryParam('package'), getQueryParam('component'), getQueryParam('subComponent'));\n  const componentStyles: CSSProperties = {};\n  componentStyles.width = +getQueryParam('width') || undefined;\n  componentStyles.height = +getQueryParam('height') || undefined;\n  const mockDate = +getQueryParam('mockDate');\n  if (mockDate) {\n    Date.now = () => mockDate;\n  }\n  if (!Component) return null;\n  return <div className={styles.container}>\n            {propsList.map((props, index) => {\n      // TODO:\n      if (getQueryParam('component') === 'Select' && props.options && typeof props.options === 'string') {\n        // eslint-disable-next-line no-param-reassign\n        props.options = JSON.parse((props.options as string));\n      }\n      const invertedBg = getQueryParam('inverted', true) || (props as any).colors === 'inverted';\n      return <div\n      // eslint-disable-next-line react/no-array-index-key\n      key={index} className={styles.item}>\n                        <span className={styles.title}>{propsToTitle(props)}</span>\n                        <div id={ids[index]} style={{\n          ...componentStyles,\n          backgroundColor: invertedBg ? 'var(--color-light-bg-primary-inverted)' : 'transparent'\n        }}>\n                            <Component {...props} />\n                        </div>\n                    </div>;\n    })}\n        </div>;\n}"},null===(_ScreenshotsSprite$pa2=ScreenshotsSprite.parameters)||void 0===_ScreenshotsSprite$pa2||null===(_ScreenshotsSprite$pa3=_ScreenshotsSprite$pa2.docs)||void 0===_ScreenshotsSprite$pa3?void 0:_ScreenshotsSprite$pa3.source)})});var __namedExportsOrder=["ScreenshotsSprite"]}}]);