"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[566],{"./packages/select/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},select:function(){return Component_stories_select},select_mobile:function(){return select_mobile},select_modal_mobile:function(){return select_modal_mobile},select_responsive:function(){return select_responsive}});var _select$parameters,_select$parameters2,_select$parameters2$d,_select_mobile$parame,_select_mobile$parame2,_select_mobile$parame3,_select_responsive$pa,_select_responsive$pa2,_select_responsive$pa3,_select_modal_mobile$,_select_modal_mobile$2,_select_modal_mobile$3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),desktop=__webpack_require__("./dist/select/modern/desktop/index.js"),modern=__webpack_require__("./dist/select/modern/index.js"),mobile=__webpack_require__("./dist/select/modern/mobile/index.js"),Component=__webpack_require__("./dist/select/modern/components/arrow/Component.js");__webpack_require__("./dist/select/modern/components/base-select/Component.js"),__webpack_require__("./dist/select/modern/components/field/Component.js"),__webpack_require__("./dist/select/modern/components/optgroup/Component.js"),__webpack_require__("./dist/select/modern/components/option/Component.js"),__webpack_require__("./dist/select/modern/components/options-list/Component.js"),__webpack_require__("./dist/select/modern/components/virtual-options-list/Component.js"),__webpack_require__("./dist/select/modern/components/base-option/Component.js"),__webpack_require__("./dist/select/modern/components/search/Component.js"),__webpack_require__("./node_modules/classnames/index.js"),__webpack_require__("./node_modules/@alfalab/icons-glyph/ChevronDownMIcon.js"),__webpack_require__("./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js"),__webpack_require__("./dist/shared/modern/index.js"),__webpack_require__("./dist/select/modern/utils.js"),__webpack_require__("./dist/select/modern/components/native-select/Component.js"),__webpack_require__("./dist/select/modern/list-popover-desktop-32d6cd34.js"),__webpack_require__("./dist/select/modern/components/base-select/components/list-mobile/list-mobile.js"),__webpack_require__("./dist/select/modern/components/base-select/components/list-mobile/list-bottom-sheet-mobile.js"),__webpack_require__("./dist/select/modern/mobile.module-bc2e8a02.js"),__webpack_require__("./dist/select/modern/components/base-select/components/list-mobile/list-modal-mobile.js"),__webpack_require__("./dist/select/modern/components/clear-button/Component.js"),__webpack_require__("./dist/button/modern/index.js"),__webpack_require__("./node_modules/@alfalab/icons-glyph/CrossCircleMIcon.js"),__webpack_require__("./dist/select/modern/consts.js"),__webpack_require__("./dist/select/modern/components/checkmark/Component.js"),__webpack_require__("./dist/badge/modern/index.js"),__webpack_require__("./dist/checkbox/modern/index.js"),__webpack_require__("./node_modules/@alfalab/icons-glyph/CheckmarkCircleMIcon.js"),__webpack_require__("./node_modules/@alfalab/icons-glyph/CheckmarkMIcon.js"),__webpack_require__("./dist/select/modern/components/checkmark-mobile/Component.js"),__webpack_require__("./dist/mq/modern/index.js"),__webpack_require__("./dist/scrollbar/modern/index.js"),__webpack_require__("./dist/select/modern/components/base-checkmark/Component.js"),__webpack_require__("./dist/input/modern/index.js"),__webpack_require__("./node_modules/@alfalab/icons-glyph/MagnifierMIcon.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),options=[{key:"1",content:"Neptunium"},{key:"2",content:"Plutonium"},{key:"3",content:"Americium"},{key:"4",content:"Curium"},{key:"5",content:"Berkelium"},{key:"6",content:"Californium"},{key:"7",content:"Einsteinium"},{key:"8",content:"Fermium"},{key:"9",content:"Vanadium"},{key:"10",content:"Manganese"},{key:"11",content:"Silicon"},{key:"12",content:"Titanium"},{key:"13",content:"Neptunium"},{key:"14",content:"Plutonium"},{key:"15",content:"Americium"},{key:"16",content:"Curium"},{key:"17",content:"Berkelium"}],POSITION_OPTIONS=["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],meta={title:"Components/Select",component:desktop.SelectDesktop,id:"Select"},Component_stories_select={name:"Select",render:function render(){var _React$useState=react.useState([]),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),selected=_React$useState2[0],setSelected=_React$useState2[1],block=(0,dist.boolean)("block",!1),size=(0,dist.select)("size",[48,56,64,72],48),disabled=(0,dist.boolean)("disabled",!1),error=(0,dist.text)("error",""),hint=(0,dist.text)("hint",""),multiple=(0,dist.boolean)("multiple",!1),allowUnselect=(0,dist.boolean)("allowUnselect",!0),closeOnSelect=(0,dist.boolean)("closeOnSelect",!0),Arrow=(0,dist.boolean)("Arrow",!0)?Component.E:function(){return null},circularNavigation=(0,dist.boolean)("circularNavigation",!1),nativeSelect=(0,dist.boolean)("nativeSelect",!1),placeholder=(0,dist.text)("placeholder","Выберите элемент"),label=(0,dist.text)("label","Элемент"),labelView=(0,dist.select)("labelView",["inner","outer"],"inner"),visibleOptions=(0,dist.number)("visibleOptions",5),defaultOpen=(0,dist.boolean)("defaultOpen",!1),popoverPosition=(0,dist.select)("popoverPosition",POSITION_OPTIONS,"bottom-start"),optionsListWidth=(0,dist.select)("optionsListWidth",["field","content"],"field"),clear=(0,dist.boolean)("clear",!0);return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,jsx_runtime.jsx)(desktop.SelectDesktop,{block:block,size:size,disabled:disabled,error:error,hint:hint,options:options,multiple:multiple,onChange:function(_ref){setSelected(_ref.selectedMultiple.map(function(option){return option.key}))},selected:selected,allowUnselect:allowUnselect,closeOnSelect:closeOnSelect,Arrow:Arrow,circularNavigation:circularNavigation,nativeSelect:nativeSelect,placeholder:placeholder,label:label,labelView:labelView,visibleOptions:visibleOptions,defaultOpen:defaultOpen,popoverPosition:popoverPosition,optionsListWidth:optionsListWidth,clear:clear})})}},select_mobile={name:"SelectMobile",render:function render(){var _React$useState3=react.useState([]),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),selected=_React$useState4[0],setSelected=_React$useState4[1],block=(0,dist.boolean)("block",!1),size=(0,dist.select)("size",[48,56,64,72],48),disabled=(0,dist.boolean)("disabled",!1),error=(0,dist.text)("error",""),hint=(0,dist.text)("hint",""),multiple=(0,dist.boolean)("multiple",!1),allowUnselect=(0,dist.boolean)("allowUnselect",!0),closeOnSelect=(0,dist.boolean)("closeOnSelect",!0),Arrow=(0,dist.boolean)("Arrow",!0)?Component.E:function(){return null},circularNavigation=(0,dist.boolean)("circularNavigation",!1),placeholder=(0,dist.text)("placeholder","Выберите элемент"),label=(0,dist.text)("label","Элемент"),labelView=(0,dist.select)("labelView",["inner","outer"],"inner"),defaultOpen=(0,dist.boolean)("defaultOpen",!1),swipeable=(0,dist.boolean)("swipeable",!0),clear=(0,dist.boolean)("clear",!0);return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,jsx_runtime.jsx)(mobile.SelectMobile,{block:block,size:size,disabled:disabled,error:error,hint:hint,options:options,multiple:multiple,onChange:function(_ref2){setSelected(_ref2.selectedMultiple.map(function(option){return option.key}))},selected:selected,allowUnselect:allowUnselect,closeOnSelect:closeOnSelect,Arrow:Arrow,circularNavigation:circularNavigation,placeholder:placeholder,label:label,labelView:labelView,defaultOpen:defaultOpen,swipeable:swipeable,clear:clear})})}},select_responsive={name:"SelectResponsive",render:function render(){var _React$useState5=react.useState([]),_React$useState6=(0,slicedToArray.Z)(_React$useState5,2),selected=_React$useState6[0],setSelected=_React$useState6[1],block=(0,dist.boolean)("block",!1),size=(0,dist.select)("size",[48,56,64,72],48),disabled=(0,dist.boolean)("disabled",!1),error=(0,dist.text)("error",""),hint=(0,dist.text)("hint",""),multiple=(0,dist.boolean)("multiple",!1),allowUnselect=(0,dist.boolean)("allowUnselect",!0),closeOnSelect=(0,dist.boolean)("closeOnSelect",!0),Arrow=(0,dist.boolean)("Arrow",!0)?Component.E:function(){return null},circularNavigation=(0,dist.boolean)("circularNavigation",!1),nativeSelect=(0,dist.boolean)("nativeSelect",!1),placeholder=(0,dist.text)("placeholder","Выберите элемент"),label=(0,dist.text)("label","Элемент"),labelView=(0,dist.select)("labelView",["inner","outer"],"inner"),visibleOptions=(0,dist.number)("visibleOptions",5),defaultOpen=(0,dist.boolean)("defaultOpen",!1),popoverPosition=(0,dist.select)("popoverPosition",POSITION_OPTIONS,"bottom-start"),optionsListWidth=(0,dist.select)("optionsListWidth",["field","content"],"field"),clear=(0,dist.boolean)("clear",!0);return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,jsx_runtime.jsx)(modern.Select,{block:block,size:size,disabled:disabled,error:error,hint:hint,options:options,multiple:multiple,onChange:function(_ref3){setSelected(_ref3.selectedMultiple.map(function(option){return option.key}))},selected:selected,allowUnselect:allowUnselect,closeOnSelect:closeOnSelect,Arrow:Arrow,circularNavigation:circularNavigation,nativeSelect:nativeSelect,placeholder:placeholder,label:label,labelView:labelView,visibleOptions:visibleOptions,defaultOpen:defaultOpen,popoverPosition:popoverPosition,optionsListWidth:optionsListWidth,clear:clear})})}},select_modal_mobile={name:"SelectModalMobile",render:function render(){var _React$useState7=react.useState([]),_React$useState8=(0,slicedToArray.Z)(_React$useState7,2),selected=_React$useState8[0],setSelected=_React$useState8[1],block=(0,dist.boolean)("block",!1),size=(0,dist.select)("size",[48,56,64,72],48),disabled=(0,dist.boolean)("disabled",!1),error=(0,dist.text)("error",""),hint=(0,dist.text)("hint",""),multiple=(0,dist.boolean)("multiple",!1),allowUnselect=(0,dist.boolean)("allowUnselect",!0),closeOnSelect=(0,dist.boolean)("closeOnSelect",!0),Arrow=(0,dist.boolean)("Arrow",!0)?Component.E:function(){return null},circularNavigation=(0,dist.boolean)("circularNavigation",!1),placeholder=(0,dist.text)("placeholder","Выберите элемент"),label=(0,dist.text)("label","Элемент"),labelView=(0,dist.select)("labelView",["inner","outer"],"inner"),defaultOpen=(0,dist.boolean)("defaultOpen",!1),clear=(0,dist.boolean)("clear",!0);return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,jsx_runtime.jsx)(mobile.SelectModalMobile,{block:block,size:size,disabled:disabled,error:error,hint:hint,options:options,multiple:multiple,onChange:function(_ref4){setSelected(_ref4.selectedMultiple.map(function(option){return option.key}))},selected:selected,allowUnselect:allowUnselect,closeOnSelect:closeOnSelect,Arrow:Arrow,circularNavigation:circularNavigation,placeholder:placeholder,label:label,labelView:labelView,defaultOpen:defaultOpen,clear:clear})})}},Component_stories=meta;Component_stories_select.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Component_stories_select.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_select$parameters=Component_stories_select.parameters)||void 0===_select$parameters?void 0:_select$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'Select',\n  render: () => {\n    const [selected, setSelected] = React.useState([]);\n    const handleChange = ({\n      selectedMultiple\n    }) => {\n      setSelected(selectedMultiple.map(option => option.key));\n    };\n    const block = boolean('block', false);\n    const size = selectKnob('size', [48, 56, 64, 72], 48);\n    const disabled = boolean('disabled', false);\n    const error = text('error', '');\n    const hint = text('hint', '');\n    const multiple = boolean('multiple', false);\n    const allowUnselect = boolean('allowUnselect', true);\n    const closeOnSelect = boolean('closeOnSelect', true);\n    const Arrow = boolean('Arrow', true) ? ArrowComponent : () => null;\n    const circularNavigation = boolean('circularNavigation', false);\n    const nativeSelect = boolean('nativeSelect', false);\n    const placeholder = text('placeholder', 'Выберите элемент');\n    const label = text('label', 'Элемент');\n    const labelView = selectKnob('labelView', ['inner', 'outer'], 'inner');\n    const visibleOptions = number('visibleOptions', 5);\n    const defaultOpen = boolean('defaultOpen', false);\n    const popoverPosition = selectKnob('popoverPosition', POSITION_OPTIONS, 'bottom-start');\n    const optionsListWidth = selectKnob('optionsListWidth', ['field', 'content'], 'field');\n    const clear = boolean('clear', true);\n    return <div style={{\n      backgroundColor: 'transparent'\n    }}>\n                <SelectDesktop block={block} size={size} disabled={disabled} error={error} hint={hint} options={options} multiple={multiple} onChange={handleChange} selected={selected} allowUnselect={allowUnselect} closeOnSelect={closeOnSelect} Arrow={Arrow} circularNavigation={circularNavigation} nativeSelect={nativeSelect} placeholder={placeholder} label={label} labelView={labelView} visibleOptions={visibleOptions} defaultOpen={defaultOpen} popoverPosition={popoverPosition} optionsListWidth={optionsListWidth} clear={clear} />\n            </div>;\n  }\n}"},null===(_select$parameters2=Component_stories_select.parameters)||void 0===_select$parameters2?void 0:null===(_select$parameters2$d=_select$parameters2.docs)||void 0===_select$parameters2$d?void 0:_select$parameters2$d.source)})}),select_mobile.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},select_mobile.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_select_mobile$parame=select_mobile.parameters)||void 0===_select_mobile$parame?void 0:_select_mobile$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'SelectMobile',\n  render: () => {\n    const [selected, setSelected] = React.useState([]);\n    const handleChange = ({\n      selectedMultiple\n    }) => {\n      setSelected(selectedMultiple.map(option => option.key));\n    };\n    const block = boolean('block', false);\n    const size = selectKnob('size', [48, 56, 64, 72], 48);\n    const disabled = boolean('disabled', false);\n    const error = text('error', '');\n    const hint = text('hint', '');\n    const multiple = boolean('multiple', false);\n    const allowUnselect = boolean('allowUnselect', true);\n    const closeOnSelect = boolean('closeOnSelect', true);\n    const Arrow = boolean('Arrow', true) ? ArrowComponent : () => null;\n    const circularNavigation = boolean('circularNavigation', false);\n    const placeholder = text('placeholder', 'Выберите элемент');\n    const label = text('label', 'Элемент');\n    const labelView = selectKnob('labelView', ['inner', 'outer'], 'inner');\n    const defaultOpen = boolean('defaultOpen', false);\n    const swipeable = boolean('swipeable', true);\n    const clear = boolean('clear', true);\n    return <div style={{\n      backgroundColor: 'transparent'\n    }}>\n                <SelectMobile block={block} size={size} disabled={disabled} error={error} hint={hint} options={options} multiple={multiple} onChange={handleChange} selected={selected} allowUnselect={allowUnselect} closeOnSelect={closeOnSelect} Arrow={Arrow} circularNavigation={circularNavigation} placeholder={placeholder} label={label} labelView={labelView} defaultOpen={defaultOpen} swipeable={swipeable} clear={clear} />\n            </div>;\n  }\n}"},null===(_select_mobile$parame2=select_mobile.parameters)||void 0===_select_mobile$parame2?void 0:null===(_select_mobile$parame3=_select_mobile$parame2.docs)||void 0===_select_mobile$parame3?void 0:_select_mobile$parame3.source)})}),select_responsive.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},select_responsive.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_select_responsive$pa=select_responsive.parameters)||void 0===_select_responsive$pa?void 0:_select_responsive$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'SelectResponsive',\n  render: () => {\n    const [selected, setSelected] = React.useState([]);\n    const handleChange = ({\n      selectedMultiple\n    }) => {\n      setSelected(selectedMultiple.map(option => option.key));\n    };\n    const block = boolean('block', false);\n    const size = selectKnob('size', [48, 56, 64, 72], 48);\n    const disabled = boolean('disabled', false);\n    const error = text('error', '');\n    const hint = text('hint', '');\n    const multiple = boolean('multiple', false);\n    const allowUnselect = boolean('allowUnselect', true);\n    const closeOnSelect = boolean('closeOnSelect', true);\n    const Arrow = boolean('Arrow', true) ? ArrowComponent : () => null;\n    const circularNavigation = boolean('circularNavigation', false);\n    const nativeSelect = boolean('nativeSelect', false);\n    const placeholder = text('placeholder', 'Выберите элемент');\n    const label = text('label', 'Элемент');\n    const labelView = selectKnob('labelView', ['inner', 'outer'], 'inner');\n    const visibleOptions = number('visibleOptions', 5);\n    const defaultOpen = boolean('defaultOpen', false);\n    const popoverPosition = selectKnob('popoverPosition', POSITION_OPTIONS, 'bottom-start');\n    const optionsListWidth = selectKnob('optionsListWidth', ['field', 'content'], 'field');\n    const clear = boolean('clear', true);\n    return <div style={{\n      backgroundColor: 'transparent'\n    }}>\n                <SelectResponsive block={block} size={size} disabled={disabled} error={error} hint={hint} options={options} multiple={multiple} onChange={handleChange} selected={selected} allowUnselect={allowUnselect} closeOnSelect={closeOnSelect} Arrow={Arrow} circularNavigation={circularNavigation} nativeSelect={nativeSelect} placeholder={placeholder} label={label} labelView={labelView} visibleOptions={visibleOptions} defaultOpen={defaultOpen} popoverPosition={popoverPosition} optionsListWidth={optionsListWidth} clear={clear} />\n            </div>;\n  }\n}"},null===(_select_responsive$pa2=select_responsive.parameters)||void 0===_select_responsive$pa2?void 0:null===(_select_responsive$pa3=_select_responsive$pa2.docs)||void 0===_select_responsive$pa3?void 0:_select_responsive$pa3.source)})}),select_modal_mobile.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},select_modal_mobile.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_select_modal_mobile$=select_modal_mobile.parameters)||void 0===_select_modal_mobile$?void 0:_select_modal_mobile$.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'SelectModalMobile',\n  render: () => {\n    const [selected, setSelected] = React.useState([]);\n    const handleChange = ({\n      selectedMultiple\n    }) => {\n      setSelected(selectedMultiple.map(option => option.key));\n    };\n    const block = boolean('block', false);\n    const size = selectKnob('size', [48, 56, 64, 72], 48);\n    const disabled = boolean('disabled', false);\n    const error = text('error', '');\n    const hint = text('hint', '');\n    const multiple = boolean('multiple', false);\n    const allowUnselect = boolean('allowUnselect', true);\n    const closeOnSelect = boolean('closeOnSelect', true);\n    const Arrow = boolean('Arrow', true) ? ArrowComponent : () => null;\n    const circularNavigation = boolean('circularNavigation', false);\n    const placeholder = text('placeholder', 'Выберите элемент');\n    const label = text('label', 'Элемент');\n    const labelView = selectKnob('labelView', ['inner', 'outer'], 'inner');\n    const defaultOpen = boolean('defaultOpen', false);\n    const clear = boolean('clear', true);\n    return <div style={{\n      backgroundColor: 'transparent'\n    }}>\n                <SelectModalMobile block={block} size={size} disabled={disabled} error={error} hint={hint} options={options} multiple={multiple} onChange={handleChange} selected={selected} allowUnselect={allowUnselect} closeOnSelect={closeOnSelect} Arrow={Arrow} circularNavigation={circularNavigation} placeholder={placeholder} label={label} labelView={labelView} defaultOpen={defaultOpen} clear={clear} />\n            </div>;\n  }\n}"},null===(_select_modal_mobile$2=select_modal_mobile.parameters)||void 0===_select_modal_mobile$2?void 0:null===(_select_modal_mobile$3=_select_modal_mobile$2.docs)||void 0===_select_modal_mobile$3?void 0:_select_modal_mobile$3.source)})});let __namedExportsOrder=["select","select_mobile","select_responsive","select_modal_mobile"]}}]);