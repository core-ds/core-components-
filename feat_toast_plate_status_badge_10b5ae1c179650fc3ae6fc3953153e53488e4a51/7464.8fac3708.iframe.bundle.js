"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7464,1341],{"./node_modules/@alfalab/core-components/list/esm/index.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/index.js"),isItem=function(child){var obj;return(0,react.isValidElement)(child)&&"object"==typeof(obj=child)&&"ListItem"===obj.type.displayName},styles$1={item:"list__item_6kfes",reversed:"list__reversed_6kfes",unorderedItem:"list__unorderedItem_6kfes",slot:"list__slot_6kfes",defaultColor:"list__defaultColor_6kfes",disc:"list__disc_6kfes",caption:"list__caption_6kfes"};__webpack_require__("./node_modules/@alfalab/core-components/list/esm/components/item/index.css");var Item=function(_a){var _b,_c,caption=_a.caption,children=_a.children,_d=(0,react.useContext)(ListContext),orderedList=_d.orderedList,markerType=_d.markerType,colorMarker=_d.colorMarker,reversed=_d.reversed,_e=_d.index,index=void 0===_e?0:_e,_f=_d.start,start=void 0===_f?0:_f,markerLowerAlpha="lower-alpha"===markerType,itemClassNames=classnames_default()(styles$1.item,((_b={})[styles$1.unorderedItem]=markerLowerAlpha,_b[styles$1.reversed]=reversed,_b));return react.createElement("li",{className:classnames_default()(itemClassNames)},!markerLowerAlpha&&react.createElement(esm.Z.Text,{tag:"div",color:colorMarker,monospaceNumbers:!0,view:"primary-medium",className:classnames_default()(styles$1.slot,((_c={})[styles$1.disc]="•"===markerType&&!orderedList,_c[styles$1.defaultColor]=!colorMarker,_c))},orderedList||"decimal"===markerType?"".concat(0===start?index+1:start+index,"."):markerType),react.createElement("div",null,react.createElement(esm.Z.Text,{tag:"div",view:"primary-medium"},children),caption&&react.createElement(esm.Z.Text,{tag:"div",view:"primary-small",color:"secondary",className:styles$1.caption},caption)))};Item.displayName="ListItem",__webpack_require__("./node_modules/@alfalab/core-components/list/esm/index.css");var ListContext=react.createContext({});Object.assign(function(_a){var _b,_c=_a.tag,tag=void 0===_c?"ul":_c,marker=_a.marker,className=_a.className,dataTestId=_a.dataTestId,colorMarker=_a.colorMarker,children=_a.children,reversed=_a.reversed,start=_a.start,restProps=(0,tslib_es6._T)(_a,["tag","marker","className","dataTestId","colorMarker","children","reversed","start"]),markerType=marker||("ul"===tag?"—":"decimal"),alphaMarker="lower-alpha"===markerType,Component="ul"===tag||alphaMarker?"ul":"ol",orderedList="ol"===Component,listClassNames=classnames_default()("list__list_1u34o",((_b={}).list__lowerAlpha_1u34o=alphaMarker,_b.list__decimal_1u34o="decimal"===markerType,_b.list__reversed_1u34o=reversed,_b),className);return react.createElement(Component,(0,tslib_es6.pi)({className:listClassNames,"data-test-id":dataTestId},restProps),react.Children.map(children,function(child,index){return react.createElement(ListContext.Provider,{value:{orderedList:orderedList,markerType:markerType,colorMarker:colorMarker,reversed:reversed,index:index,start:start}},isItem(child)?child:react.createElement(Item,null,child))}))},{Item:Item})},"./node_modules/@alfalab/core-components/plate/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return Plate}});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@alfalab/core-components/mq/esm/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon_button_esm=__webpack_require__("./node_modules/@alfalab/core-components/icon-button/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),ChevronDownMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ChevronDownMIcon.js"),CrossMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/CrossMIcon.js"),ButtonList=function(_a){var buttons=_a.buttons,buttonClassName=_a.buttonClassName,containerClassName=_a.containerClassName;return Array.isArray(buttons)&&buttons.length>0?react.createElement("div",{className:containerClassName},buttons.map(function(button,index){return button?react.cloneElement(button,{key:index,size:"xxs",view:0===index?"secondary":"link",className:classnames_default()(button.props.className,buttonClassName)}):null})):react.createElement("div",{className:containerClassName},buttons)},commonStyles={component:"plate__component_1ixn5",foldable:"plate__foldable_1ixn5",focused:"plate__focused_1ixn5",inner:"plate__inner_1ixn5",rounded:"plate__rounded_1ixn5",noBorder:"plate__noBorder_1ixn5",shadow:"plate__shadow_1ixn5",common:"plate__common_1ixn5",negative:"plate__negative_1ixn5",positive:"plate__positive_1ixn5",attention:"plate__attention_1ixn5",custom:"plate__custom_1ixn5",rect:"plate__rect_1ixn5",isHidden:"plate__isHidden_1ixn5",leftAddons:"plate__leftAddons_1ixn5",rightAddons:"plate__rightAddons_1ixn5",subAddons:"plate__subAddons_1ixn5",rowReverse:"plate__rowReverse_1ixn5",bold:"plate__bold_1ixn5",light:"plate__light_1ixn5",content:"plate__content_1ixn5",isFolded:"plate__isFolded_1ixn5",contentContainer:"plate__contentContainer_1ixn5",withoutTitle:"plate__withoutTitle_1ixn5",limitWidth:"plate__limitWidth_1ixn5",description:"plate__description_1ixn5",closer:"plate__closer_1ixn5",folder:"plate__folder_1ixn5",containerButton:"plate__containerButton_1ixn5",button:"plate__button_1ixn5",rowLimit1:"plate__rowLimit1_1ixn5",rowLimit2:"plate__rowLimit2_1ixn5",rowLimit3:"plate__rowLimit3_1ixn5"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/components/base-plate/index.css");var BasePlate=(0,react.forwardRef)(function(_a,ref){var _b,_c,_d,_e,_f,hasCloser=_a.hasCloser,_g=_a.foldable,foldedProp=_a.folded,_h=_a.defaultFolded,_j=_a.rounded,rounded=void 0===_j||_j,_k=_a.limitContentWidth,leftAddons=_a.leftAddons,subAddons=_a.subAddons,children=_a.children,buttons=_a.buttons,title=_a.title,_l=_a.titleView,titleView=void 0===_l?"bold":_l,_m=_a.view,view=void 0===_m?"common":_m,_o=_a.border,_p=_a.shadow,className=_a.className,buttonsClassName=_a.buttonsClassName,contentClassName=_a.contentClassName,subAddonsClassName=_a.subAddonsClassName,dataTestId=_a.dataTestId,onClick=_a.onClick,onClose=_a.onClose,onToggle=_a.onToggle,rowLimit=_a.rowLimit,_q=_a.styles,styles=void 0===_q?{}:_q,plateRef=(0,react.useRef)(null),contentRef=(0,react.useRef)(null),subAddonsRef=(0,react.useRef)(null),focused=(0,dist_esm.KK)(plateRef,"keyboard")[0],_r=(0,react.useState)(!1),isHidden=_r[0],setIsHidden=_r[1],_s=(0,react.useState)(void 0===_h||_h),foldedState=_s[0],setFoldedState=_s[1],uncontrolled=void 0===foldedProp,foldable=!!title&&!!children&&void 0!==_g&&_g,folded=uncontrolled?foldedState:foldedProp,hasButtons=!!buttons&&"boolean"!=typeof buttons,hasContent=children||hasButtons,hasAnyAddons=leftAddons||subAddons||foldable||hasCloser,rowLimitStyles=rowLimit&&commonStyles["rowLimit".concat(rowLimit)],handleClick=(0,react.useCallback)(function(event){var target=event.target,eventInsideComponent=plateRef.current&&plateRef.current.contains(target),eventInsideContent=contentRef.current&&contentRef.current.contains(target),eventInsideSubAddons=subAddonsRef.current&&subAddonsRef.current.contains(target),clickSimilarKeys=["Enter"," "].includes(event.key),shouldChangeIsFolded=eventInsideComponent&&!eventInsideContent&&!eventInsideSubAddons&&("click"===event.type||clickSimilarKeys);foldable&&shouldChangeIsFolded&&(uncontrolled&&setFoldedState(!foldedState),onToggle&&onToggle(event,{folded:!(uncontrolled?foldedState:foldedProp)})),onClick&&onClick(event)},[foldable,onClick,uncontrolled,onToggle,foldedState,foldedProp]),handleClose=(0,react.useCallback)(function(event){setIsHidden(!0),onClose&&onClose(event)},[onClose]);return react.createElement("div",{className:classnames_default()(commonStyles.component,commonStyles[view],((_b={})[commonStyles.foldable]=foldable,_b[commonStyles.focused]=focused,_b[commonStyles.isHidden]=hasCloser&&isHidden,_b[commonStyles.isFolded]=foldable&&folded,_b[commonStyles.rounded]=rounded,_b[commonStyles.rect]=!rounded,_b[commonStyles.noBorder]=!(void 0===_o?"custom"!==view:_o),_b[commonStyles.shadow]=void 0===_p?"custom"===view:_p,_b),className),onClick:handleClick,onKeyDown:handleClick,role:"alert",ref:(0,react_merge_refs_esm.Z)([plateRef,ref]),tabIndex:foldable?0:-1,"data-test-id":dataTestId},react.createElement("div",{className:commonStyles.inner},leftAddons&&react.createElement("div",{className:commonStyles.leftAddons},leftAddons),react.createElement("div",{className:classnames_default()(commonStyles.contentContainer,contentClassName,((_c={})[commonStyles.withoutTitle]=!title&&hasAnyAddons,_c[commonStyles.limitWidth]=void 0===_k||_k,_c))},title&&react.createElement("div",{className:classnames_default()(commonStyles[titleView],((_d={})[styles[titleView]]=!!styles[titleView],_d))},title),hasContent&&react.createElement("div",{ref:contentRef,className:classnames_default()(commonStyles.content,((_e={})[commonStyles.isFolded]=foldable&&folded,_e))},children&&react.createElement("div",{className:classnames_default()(commonStyles.description,styles.description,rowLimitStyles)},children),hasButtons&&react.createElement("div",{className:styles.footer},react.createElement(ButtonList,{buttons:buttons,containerClassName:classnames_default()(commonStyles.containerButton,buttonsClassName),buttonClassName:classnames_default()(commonStyles.button,buttonsClassName)})))),!!subAddons&&"boolean"!=typeof subAddons&&react.createElement("div",{ref:subAddonsRef,className:commonStyles.subAddons},react.createElement(ButtonList,{buttons:subAddons,containerClassName:classnames_default()(subAddonsClassName,commonStyles.rowReverse),buttonClassName:commonStyles.button})),foldable&&react.createElement("div",{className:commonStyles.rightAddons},react.createElement("div",{className:classnames_default()(commonStyles.folder,((_f={})[commonStyles.isFolded]=folded,_f))},react.createElement(ChevronDownMIcon.ChevronDownMIcon,null))),hasCloser&&!foldable&&react.createElement("div",{className:commonStyles.rightAddons},react.createElement(icon_button_esm.h,{className:commonStyles.closer,"aria-label":"закрыть",icon:CrossMIcon.CrossMIcon,size:"xxs",onClick:handleClose}))))}),styles={bold:"plate__bold_5fr0v",description:"plate__description_5fr0v",footer:"plate__footer_5fr0v"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/desktop/desktop.css");var PlateDesktop=(0,react.forwardRef)(function(restProps,ref){return react.createElement(BasePlate,(0,tslib_es6.pi)({},restProps,{styles:styles,ref:ref}))}),Component_mobile_styles={bold:"plate__bold_1fbp9",description:"plate__description_1fbp9",footer:"plate__footer_1fbp9"};__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/mobile/mobile.css");var PlateMobile=(0,react.forwardRef)(function(restProps,ref){return react.createElement(BasePlate,(0,tslib_es6.pi)({},restProps,{styles:Component_mobile_styles,ref:ref}))}),Plate=(0,react.forwardRef)(function(_a,ref){var children=_a.children,_b=_a.breakpoint,restProps=(0,tslib_es6._T)(_a,["children","breakpoint"]),isDesktop=(0,esm.a)("(min-width: ".concat(void 0===_b?1024:_b,"px)"))[0];return react.createElement(isDesktop?PlateDesktop:PlateMobile,(0,tslib_es6.pi)({ref:ref},restProps),children)})},"./node_modules/@alfalab/core-components/space/esm/index.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Item=function(props){var className=props.className,horizontalSize=props.horizontalSize,verticalSize=props.verticalSize,length=props.length,direction=props.direction,index=props.index,children=props.children,divider=props.divider,wrap=props.wrap,style={};return("vertical"===direction?index<length-1&&(style={marginBottom:horizontalSize/(divider?2:1)}):style=(0,tslib_es6.pi)((0,tslib_es6.pi)({},index<length-1&&{marginRight:horizontalSize/(divider?2:1)}),wrap&&{paddingBottom:verticalSize}),null==children)?null:react.createElement(react.Fragment,null,react.createElement("div",{className:className,style:style},children),index<length-1&&divider&&react.createElement("span",{style:(0,tslib_es6.pi)({width:"100%"},style)},divider))},styles={spaceContainer:"space__spaceContainer_1yreo",spaceContainerFullWidth:"space__spaceContainerFullWidth_1yreo",vertical:"space__vertical_1yreo",center:"space__center_1yreo",start:"space__start_1yreo",end:"space__end_1yreo",spaceItemFullWidth:"space__spaceItemFullWidth_1yreo",spaceItem:"space__spaceItem_1yreo"};__webpack_require__("./node_modules/@alfalab/core-components/space/esm/index.css");var SpaceSizes={s:12,m:16,l:20};(0,react.forwardRef)(function(props,ref){var _a,_b,children=props.children,className=props.className,_c=props.align,align=void 0===_c?"start":_c,_d=props.direction,direction=void 0===_d?"vertical":_d,_e=props.size,size=void 0===_e?"m":_e,_f=props.wrap,wrap=void 0!==_f&&_f,_g=props.divider,divider=void 0!==_g&&_g,_h=props.fullWidth,fullWidth=void 0!==_h&&_h,dataTestId=props.dataTestId,_j=react.useMemo(function(){return(Array.isArray(size)?size:[size,size]).map(function(item){return"string"==typeof item?SpaceSizes[item]:item||0})},[size]),horizontalSize=_j[0],verticalSize=_j[1],childNodes=react.Children.toArray(children);if(0===childNodes.length)return null;var directionClassName=styles[direction],alignClassName=styles[align],containerClassName=classnames_default()("space__spaceContainer_1yreo",directionClassName,((_a={})[alignClassName]=align,_a.space__spaceContainerFullWidth_1yreo=fullWidth,_a),className),itemClassName=classnames_default()("space__spaceItem_1yreo",((_b={}).space__spaceItemFullWidth_1yreo=fullWidth,_b)),nodes=childNodes.map(function(child,i){return react.createElement(Item,{className:itemClassName,key:"".concat(itemClassName,"-").concat(i),direction:direction,horizontalSize:horizontalSize,verticalSize:verticalSize,length:childNodes.length,index:i,wrap:wrap,divider:divider},child)});return react.createElement("div",{"data-test-id":dataTestId,className:containerClassName,style:(0,tslib_es6.pi)({},wrap&&{flexWrap:"wrap",marginBottom:-verticalSize}),ref:ref},nodes)})},"./node_modules/@alfalab/core-components/typography/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Typography}});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),styles={component:"skeleton__component_gpan5",animate:"skeleton__animate_gpan5"};__webpack_require__("./node_modules/@alfalab/core-components/skeleton/esm/index.css");var Skeleton=function(_a){var _b,visible=_a.visible,_c=_a.animate,className=_a.className,dataTestId=_a.dataTestId,children=_a.children,style=_a.style;return visible?react.createElement("div",{className:classnames_default()(styles.component,((_b={})[styles.animate]=void 0===_c||_c,_b),className),style:style,"data-test-id":dataTestId},children):react.createElement("div",{"data-test-id":dataTestId,className:className,style:style},children)},esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),useSkeleton_styles={skeletonText:"typography__skeletonText_1kydx"};function useSkeleton(showSkeleton,skeletonProps){var _a=(0,react.useState)(),skeletonParams=_a[0],setSkeletonParams=_a[1],textRef=(0,react.useRef)(null);return(0,esm.CZ)(function(){if(showSkeleton&&textRef.current){var style=getComputedStyle(textRef.current),textHeight=textRef.current.offsetHeight,fontSize=parseInt(style.fontSize,10),lineHeight=parseInt(style.lineHeight,10),padding=(lineHeight-fontSize)%2==0?(lineHeight-fontSize)/2:(lineHeight-fontSize-1)/2,rows=(null==skeletonProps?void 0:skeletonProps.rows)?null==skeletonProps?void 0:skeletonProps.rows:Math.ceil(textHeight/lineHeight);setSkeletonParams({height:lineHeight-2*padding,padding:"".concat(padding,"px 0"),rows:rows})}else setSkeletonParams(void 0)},[showSkeleton,null==skeletonProps?void 0:skeletonProps.rows]),{renderSkeleton:function(props){return showSkeleton&&skeletonParams?react.createElement("div",{className:props.wrapperClassName,"data-test-id":props.dataTestId},(0,tslib_es6.ev)([],Array(skeletonParams.rows),!0).map(function(_,idx){var width=Array.isArray(null==skeletonProps?void 0:skeletonProps.width)?null==skeletonProps?void 0:skeletonProps.width[idx]:null==skeletonProps?void 0:skeletonProps.width;return react.createElement("div",{key:idx,style:{width:width,padding:skeletonParams.padding}},react.createElement(Skeleton,{visible:!0,className:useSkeleton_styles.skeletonText},react.createElement("div",{style:{height:skeletonParams.height}})))})):null},textRef:textRef}}__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/hooks/use-skeleton.css");var colors={tertiary:"typography__tertiary_e366p",disabled:"typography__disabled_e366p",accent:"typography__accent_e366p",primary:"typography__primary_e366p",attention:"typography__attention_e366p",positive:"typography__positive_e366p",secondary:"typography__secondary_e366p","tertiary-inverted":"typography__tertiary-inverted_e366p","primary-inverted":"typography__primary-inverted_e366p","secondary-inverted":"typography__secondary-inverted_e366p",link:"typography__link_e366p",negative:"typography__negative_e366p","static-primary-light":"typography__static-primary-light_e366p","static-secondary-light":"typography__static-secondary-light_e366p","static-tertiary-light":"typography__static-tertiary-light_e366p","static-primary-dark":"typography__static-primary-dark_e366p","static-secondary-dark":"typography__static-secondary-dark_e366p","static-tertiary-dark":"typography__static-tertiary-dark_e366p","static-accent":"typography__static-accent_e366p"};__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/colors.css");var component_styles={paragraph:"typography__paragraph_1qtw7",paragraphWithMargins:"typography__paragraphWithMargins_1qtw7","primary-large":"typography__primary-large_1qtw7","primary-medium":"typography__primary-medium_1qtw7","primary-small":"typography__primary-small_1qtw7","secondary-large":"typography__secondary-large_1qtw7","secondary-medium":"typography__secondary-medium_1qtw7","secondary-small":"typography__secondary-small_1qtw7",component:"typography__component_1qtw7","component-primary":"typography__component-primary_1qtw7","component-secondary":"typography__component-secondary_1qtw7",caps:"typography__caps_1qtw7",bold:"typography__bold_1qtw7",medium:"typography__medium_1qtw7",regular:"typography__regular_1qtw7",monospace:"typography__monospace_1qtw7",rowLimit1:"typography__rowLimit1_1qtw7",rowLimit2:"typography__rowLimit2_1qtw7",rowLimit3:"typography__rowLimit3_1qtw7"};__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/text/index.css");var logWarning=function(view){},Text=(0,react.forwardRef)(function(_a,ref){var _b,_c,_d=_a.view,view=void 0===_d?"primary-medium":_d,_e=_a.tag,Component=void 0===_e?"span":_e,weight=_a.weight,_f=_a.monospaceNumbers,_g=_a.defaultMargins,defaultMargins=void 0===_g||_g,color=_a.color,className=_a.className,dataTestId=_a.dataTestId,children=_a.children,rowLimit=_a.rowLimit,showSkeleton=_a.showSkeleton,skeletonProps=_a.skeletonProps,restProps=(0,tslib_es6._T)(_a,["view","tag","weight","monospaceNumbers","defaultMargins","color","className","dataTestId","children","rowLimit","showSkeleton","skeletonProps"]);"component"===view&&logWarning(view);var _h=useSkeleton(showSkeleton,skeletonProps),renderSkeleton=_h.renderSkeleton,textRef=_h.textRef;return renderSkeleton({wrapperClassName:classnames_default()(((_b={})[component_styles.paragraphWithMargins]="p"===Component&&defaultMargins,_b)),dataTestId:dataTestId})||react.createElement(Component,(0,tslib_es6.pi)({className:classnames_default()(((_c={})[component_styles.paragraph]="p"===Component&&!defaultMargins,_c[component_styles.paragraphWithMargins]="p"===Component&&defaultMargins,_c[component_styles.monospace]=void 0!==_f&&_f,_c[component_styles["rowLimit".concat(rowLimit)]]=rowLimit,_c),className,color&&colors[color],component_styles[view],weight&&component_styles[weight]),"data-test-id":dataTestId,ref:(0,react_merge_refs_esm.Z)([ref,textRef])},restProps),children)}),Title=(0,react.forwardRef)(function(_a,ref){var _b,_c=_a.tag,_d=_a.view,view=void 0===_d?"medium":_d,_e=_a.font,font=void 0===_e?"styrene":_e,_f=_a.weight,_g=_a.defaultMargins,defaultMargins=void 0!==_g&&_g,color=_a.color,className=_a.className,dataTestId=_a.dataTestId,children=_a.children,rowLimit=_a.rowLimit,styles=_a.styles,skeletonProps=_a.skeletonProps,showSkeleton=_a.showSkeleton,restProps=(0,tslib_es6._T)(_a,["tag","view","font","weight","defaultMargins","color","className","dataTestId","children","rowLimit","styles","skeletonProps","showSkeleton"]),_h=useSkeleton(showSkeleton,skeletonProps),renderSkeleton=_h.renderSkeleton,textRef=_h.textRef;return renderSkeleton({wrapperClassName:classnames_default()(defaultMargins&&styles["margins-".concat(view)]),dataTestId:dataTestId})||react.createElement(void 0===_c?"div":_c,(0,tslib_es6.pi)({className:classnames_default()(styles.component,className,styles["".concat(font,"-").concat(view)],defaultMargins&&styles["margins-".concat(view)],styles[void 0===_f?"styrene"===font?"medium":"bold":_f],color&&colors[color],((_b={})[styles["rowLimit".concat(rowLimit)]]=rowLimit,_b)),"data-test-id":dataTestId,ref:(0,react_merge_refs_esm.Z)([ref,textRef])},restProps),children)}),commonStyles={component:"typography__component_lk61c",bold:"typography__bold_lk61c",medium:"typography__medium_lk61c",regular:"typography__regular_lk61c"};__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/title/common.css");var title_styles={"styrene-xlarge":"typography__styrene-xlarge_1h60e","styrene-large":"typography__styrene-large_1h60e","styrene-medium":"typography__styrene-medium_1h60e","styrene-small":"typography__styrene-small_1h60e","styrene-xsmall":"typography__styrene-xsmall_1h60e","system-xlarge":"typography__system-xlarge_1h60e","system-large":"typography__system-large_1h60e","system-medium":"typography__system-medium_1h60e","system-small":"typography__system-small_1h60e","system-xsmall":"typography__system-xsmall_1h60e","margins-xlarge":"typography__margins-xlarge_1h60e","margins-large":"typography__margins-large_1h60e","margins-medium":"typography__margins-medium_1h60e","margins-small":"typography__margins-small_1h60e","margins-xsmall":"typography__margins-xsmall_1h60e",rowLimit1:"typography__rowLimit1_1h60e",rowLimit2:"typography__rowLimit2_1h60e",rowLimit3:"typography__rowLimit3_1h60e"};__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/title/index.css");var title_mobile_component_styles={"styrene-xlarge":"typography__styrene-xlarge_1k2rh","styrene-large":"typography__styrene-large_1k2rh","styrene-medium":"typography__styrene-medium_1k2rh","styrene-small":"typography__styrene-small_1k2rh","styrene-xsmall":"typography__styrene-xsmall_1k2rh","system-xlarge":"typography__system-xlarge_1k2rh","system-large":"typography__system-large_1k2rh","system-medium":"typography__system-medium_1k2rh","system-small":"typography__system-small_1k2rh","system-xsmall":"typography__system-xsmall_1k2rh"};__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/title-mobile/index.css");var title_responsive_component_styles={"styrene-xlarge":"typography__styrene-xlarge_4ahul","styrene-large":"typography__styrene-large_4ahul","styrene-medium":"typography__styrene-medium_4ahul","styrene-small":"typography__styrene-small_4ahul","styrene-xsmall":"typography__styrene-xsmall_4ahul","system-xlarge":"typography__system-xlarge_4ahul","system-large":"typography__system-large_4ahul","system-medium":"typography__system-medium_4ahul","system-small":"typography__system-small_4ahul","system-xsmall":"typography__system-xsmall_4ahul","margins-xlarge":"typography__margins-xlarge_4ahul","margins-large":"typography__margins-large_4ahul","margins-medium":"typography__margins-medium_4ahul","margins-small":"typography__margins-small_4ahul","margins-xsmall":"typography__margins-xsmall_4ahul"};__webpack_require__("./node_modules/@alfalab/core-components/typography/esm/title-responsive/index.css");var Typography={Title:function(props){return react.createElement(Title,(0,tslib_es6.pi)({},props,{styles:Object.assign(commonStyles,title_styles)}))},Text:Text,TitleResponsive:function(props){return react.createElement(Title,(0,tslib_es6.pi)({},props,{styles:Object.assign(commonStyles,title_responsive_component_styles)}))},TitleMobile:function(props){return react.createElement(Title,(0,tslib_es6.pi)({},props,{styles:Object.assign(commonStyles,title_mobile_component_styles)}))}}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableSpread(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||(0,unsupportedIterableToArray.Z)(arr)||_nonIterableSpread()}},"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./node_modules/@alfalab/core-components/list/esm/components/item/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/list/esm/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/plate/esm/components/base-plate/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/plate/esm/desktop/desktop.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/plate/esm/mobile/mobile.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/skeleton/esm/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/space/esm/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/typography/esm/colors.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/typography/esm/hooks/use-skeleton.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/typography/esm/text/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/typography/esm/title-mobile/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/typography/esm/title-responsive/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/typography/esm/title/common.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./node_modules/@alfalab/core-components/typography/esm/title/index.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);