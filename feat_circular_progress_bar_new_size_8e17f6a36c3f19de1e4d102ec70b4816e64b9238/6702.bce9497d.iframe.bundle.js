"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[6702],{"./packages/bottom-sheet/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomSheet:function(){return BottomSheet},CLOSE_OFFSET:function(){return CLOSE_OFFSET},HEADER_OFFSET:function(){return HEADER_OFFSET}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/react-div-100vh/dist/esm/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),es=__webpack_require__("./node_modules/react-swipeable/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/base-modal/modern/index.js"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),index_module_footer="footer_EYWwT",index_module_sticky="sticky_ljels",index_module_highlighted="highlighted_h4PaX",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Footer=function Footer(_ref){var children=_ref.children,className=_ref.className,sticky=_ref.sticky,_useContext=(0,react.useContext)(modern.BaseModalContext),footerHighlighted=_useContext.footerHighlighted,setHasFooter=_useContext.setHasFooter;return(0,react.useEffect)((function(){setHasFooter(!0)}),[setHasFooter]),(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module_footer,className,(0,defineProperty.Z)((0,defineProperty.Z)({},index_module_sticky,sticky),index_module_highlighted,footerHighlighted&&sticky)),children:children})};try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{children:{defaultValue:null,description:"Контент футера",name:"children",required:!1,type:{name:"ReactNode"}},sticky:{defaultValue:null,description:"Фиксирует футер",name:"sticky",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bottom-sheet/src/components/footer/Component.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"packages/bottom-sheet/src/components/footer/Component.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),navigation_bar_modern=__webpack_require__("./dist/navigation-bar/modern/index.js"),header_index_module_headerWrapper="headerWrapper_u42o_",header_index_module_hasContent="hasContent_xycGi",header_index_module_sticky="sticky_ywtDm",header_index_module_highlighted="highlighted_CeuPq",header_index_module_title="title_hgXk2",_excluded=["className","sticky","headerRef","headerOffset","title","children"],Header=function Header(_ref){var className=_ref.className,sticky=_ref.sticky,headerRef=_ref.headerRef,headerOffset=_ref.headerOffset,title=_ref.title,children=_ref.children,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),_useContext=(0,react.useContext)(modern.BaseModalContext),setHeaderOffset=_useContext.setHeaderOffset,setHasHeader=_useContext.setHasHeader,headerHighlighted=_useContext.headerHighlighted,onClose=_useContext.onClose;(0,react.useEffect)((function(){setHeaderOffset(headerOffset)}),[headerOffset,setHeaderOffset]),(0,react.useEffect)((function(){setHasHeader(!0)}),[setHasHeader]);var hasContent=Boolean(title||children);return(0,jsx_runtime.jsx)(navigation_bar_modern.NavigationBar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{ref:headerRef,title:title,onClose:onClose,sticky:sticky,view:"mobile",className:classnames_default()(header_index_module_headerWrapper,className,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},header_index_module_highlighted,hasContent&&headerHighlighted&&sticky),header_index_module_sticky,sticky),header_index_module_hasContent,hasContent)),contentClassName:classnames_default()(header_index_module_title),children:children}))};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Заголовок шапки",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Контент шапки",name:"children",required:!1,type:{name:"ReactNode"}},leftAddons:{defaultValue:null,description:"Слот слева",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа",name:"rightAddons",required:!1,type:{name:"ReactNode"}},bottomAddons:{defaultValue:null,description:"Слот снизу",name:"bottomAddons",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Дополнительный класс для контента",name:"contentClassName",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Обработчик закрытия",name:"onClose",required:!1,type:{name:'((event: MouseEvent<HTMLElement, MouseEvent> | KeyboardEvent<HTMLElement>, reason?: "backdropClick" | "escapeKeyDown" | "closerClick") => void)'}},hasCloser:{defaultValue:null,description:"Наличие компонента крестика",name:"hasCloser",required:!1,type:{name:"boolean"}},closerClassName:{defaultValue:null,description:"Дополнительный класс для closer",name:"closerClassName",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"Выравнивание заголовка",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'}]}},sticky:{defaultValue:null,description:"Фиксирует шапку",name:"sticky",required:!1,type:{name:"boolean"}},titleSize:{defaultValue:null,description:"Размер заголовка (compact доступен только в мобильной версии)",name:"titleSize",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'}]}},subtitle:{defaultValue:null,description:"Подзаголовок (доступен только в мобильной версии)",name:"subtitle",required:!1,type:{name:"ReactNode"}},addonClassName:{defaultValue:null,description:"Доп. класс для аддонов",name:"addonClassName",required:!1,type:{name:"string"}},backButtonProps:{defaultValue:null,description:'Дополнительные пропсы для кнопки "Назад"',name:"backButtonProps",required:!1,type:{name:'Omit<BackArrowAddonProps, "onClick" | "view" | "textOpacity">'}},onBack:{defaultValue:null,description:'обработчик клика по кнопке "назад"',name:"onBack",required:!1,type:{name:"(() => void)"}},imageUrl:{defaultValue:null,description:"Фоновое изображение",name:"imageUrl",required:!1,type:{name:"string"}},hasBackButton:{defaultValue:null,description:'Наличие кнопки "Назад"',name:"hasBackButton",required:!1,type:{name:"boolean"}},backButtonClassName:{defaultValue:null,description:"Дополнительный класс для правого аддона",name:"backButtonClassName",required:!1,type:{name:"string"}},bottomAddonsClassName:{defaultValue:null,description:"Дополнительный класс для нижнего аддона",name:"bottomAddonsClassName",required:!1,type:{name:"string"}},trim:{defaultValue:null,description:"Обрезать ли заголовок",name:"trim",required:!1,type:{name:"boolean"}},closerIcon:{defaultValue:null,description:"Иконка closer.",name:"closerIcon",required:!1,type:{name:"ElementType<any>"}},scrollableParentRef:{defaultValue:null,description:"Ссылка на родительскую ноду overflow: auto",name:"scrollableParentRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},headerRef:{defaultValue:null,description:"",name:"headerRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},headerOffset:{defaultValue:null,description:"",name:"headerOffset",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bottom-sheet/src/components/header/Component.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"packages/bottom-sheet/src/components/header/Component.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}var backdrop_modern=__webpack_require__("./dist/backdrop/modern/index.js"),Component_excluded=["opacity","handlers","opacityTimeout","style"],SwipeableBackdrop=function SwipeableBackdrop(_ref){var opacity=_ref.opacity,handlers=_ref.handlers,opacityTimeout=_ref.opacityTimeout,style=_ref.style,backdropProps=(0,objectWithoutProperties.Z)(_ref,Component_excluded);return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},handlers),{},{style:(0,objectSpread2.Z)({opacity:opacity,transition:1===opacity?"opacity ".concat(opacityTimeout,"ms ease-in-out"):"",position:"relative"},style),children:(0,jsx_runtime.jsx)(backdrop_modern.Backdrop,(0,objectSpread2.Z)({},backdropProps))}))};try{SwipeableBackdrop.displayName="SwipeableBackdrop",SwipeableBackdrop.__docgenInfo={description:"",displayName:"SwipeableBackdrop",props:{invisible:{defaultValue:null,description:"Прозрачный бэкдроп",name:"invisible",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"Управляет видимостью компонента",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Обработчик клика по бэкдропу",name:"onClose",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},transitionClassNames:{defaultValue:null,description:"Классы анимации\n\nhttp://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames",name:"transitionClassNames",required:!1,type:{name:"string | CSSTransitionClassNames"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"Прозрачность бэкдропа",name:"opacity",required:!1,type:{name:"number"}},handlers:{defaultValue:null,description:"Обработчики свайпа",name:"handlers",required:!1,type:{name:"SwipeableHandlers"}},opacityTimeout:{defaultValue:null,description:"Время анимации opacity",name:"opacityTimeout",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bottom-sheet/src/components/swipeable-backdrop/Component.tsx#SwipeableBackdrop"]={docgenInfo:SwipeableBackdrop.__docgenInfo,name:"SwipeableBackdrop",path:"packages/bottom-sheet/src/components/swipeable-backdrop/Component.tsx#SwipeableBackdrop"})}catch(__react_docgen_typescript_loader_error){}var CLOSE_OFFSET=.2,HEADER_OFFSET=24,src_index_module={modal:"modal_ZUiBO",wrapper:"wrapper_Eqjbb",fullscreen:"fullscreen_M51tl",component:"component_bYH0O",withTransition:"withTransition_c4LfA",scrollableContainer:"scrollableContainer_zfKkM",marker:"marker_ueJ6U",defaultMarker:"defaultMarker_msCYt",content:"content_A6u27",noHeader:"noHeader_Phsn6",noFooter:"noFooter_MtU_G",scrollLocked:"scrollLocked_xxPNU",hiddenScrollbar:"hiddenScrollbar_S9SP1",disabledPointerEvents:"disabledPointerEvents_VC_SX",appear:"appear_fqYtu",enter:"enter_FFXII",appearActive:"appearActive_qb0mZ",enterActive:"enterActive_qcUe7",enterDone:"enterDone_bLL9y",appearDone:"appearDone_MBp7e",exit:"exit_rIG2D",exitActive:"exitActive_HL3dq","background-accent":"background-accent_DVspm","background-info":"background-info_zZbom","background-attention-muted":"background-attention-muted_RHxJo","background-positive-muted":"background-positive-muted_uRFPQ","background-negative-muted":"background-negative-muted_SEt9F","background-primary":"background-primary_h41QW","background-primary-inverted":"background-primary-inverted_VEiht","background-secondary":"background-secondary_HhgeY","background-secondary-inverted":"background-secondary-inverted_YIUaW","background-tertiary":"background-tertiary_X2B0w","background-tertiary-inverted":"background-tertiary-inverted_XR_wf","background-quaternary":"background-quaternary_bik4l","background-quaternary-inverted":"background-quaternary-inverted_Y9WXN","background-specialbg-component":"background-specialbg-component_fXDuh","background-specialbg-component-inverted":"background-specialbg-component-inverted_vP5kG","background-specialbg-primary-grouped":"background-specialbg-primary-grouped_indWF","background-specialbg-secondary-grouped":"background-specialbg-secondary-grouped_U583x","background-specialbg-tertiary-grouped":"background-specialbg-tertiary-grouped_iC_Xi","background-specialbg-secondary-transparent":"background-specialbg-secondary-transparent_OGstJ","background-specialbg-secondary-transparent-inverted":"background-specialbg-secondary-transparent-inverted_tlwR2","background-specialbg-tertiary-transparent":"background-specialbg-tertiary-transparent_iacHv","background-specialbg-tertiary-transparent-inverted":"background-specialbg-tertiary-transparent-inverted_aqK_q"},isNil=shared_modern.fnUtils.isNil,BottomSheet=(0,react.forwardRef)((function(_ref,ref){var open=_ref.open,title=_ref.title,container=_ref.container,usePortal=_ref.usePortal,backgroundColor=_ref.backgroundColor,_ref$titleSize=_ref.titleSize,titleSize=void 0===_ref$titleSize?"default":_ref$titleSize,subtitle=_ref.subtitle,actionButton=_ref.actionButton,contentClassName=_ref.contentClassName,containerClassName=_ref.containerClassName,containerProps=_ref.containerProps,headerClassName=_ref.headerClassName,footerClassName=_ref.footerClassName,addonClassName=_ref.addonClassName,closerClassName=_ref.closerClassName,backerClassName=_ref.backerClassName,modalClassName=_ref.modalClassName,modalWrapperClassName=_ref.modalWrapperClassName,className=_ref.className,leftAddons=_ref.leftAddons,rightAddons=_ref.rightAddons,bottomAddons=_ref.bottomAddons,hasCloser=_ref.hasCloser,hasBacker=_ref.hasBacker,_ref$titleAlign=_ref.titleAlign,titleAlign=void 0===_ref$titleAlign?"left":_ref$titleAlign,trimTitle=_ref.trimTitle,stickyHeader=_ref.stickyHeader,_ref$stickyFooter=_ref.stickyFooter,stickyFooter=void 0===_ref$stickyFooter||_ref$stickyFooter,_ref$initialHeight=_ref.initialHeight,initialHeight=void 0===_ref$initialHeight?"default":_ref$initialHeight,hideOverlay=_ref.hideOverlay,hideScrollbar=_ref.hideScrollbar,hideHeader=_ref.hideHeader,disableOverlayClick=_ref.disableOverlayClick,disableBlockingScroll=_ref.disableBlockingScroll,disableFocusLock=_ref.disableFocusLock,children=_ref.children,zIndex=_ref.zIndex,_ref$transitionProps=_ref.transitionProps,transitionProps=void 0===_ref$transitionProps?{}:_ref$transitionProps,magneticAreasProp=_ref.magneticAreas,initialActiveAreaIndex=_ref.initialActiveAreaIndex,dataTestId=_ref.dataTestId,_ref$swipeable=_ref.swipeable,swipeable=void 0===_ref$swipeable||_ref$swipeable,_ref$swipeableContent=_ref.swipeableContent,swipeableContent=void 0===_ref$swipeableContent||_ref$swipeableContent,_ref$swipeThreshold=_ref.swipeThreshold,swipeThreshold=void 0===_ref$swipeThreshold?5:_ref$swipeThreshold,scrollLockedProp=_ref.scrollLocked,backdropProps=_ref.backdropProps,_ref$scrollableContai=_ref.scrollableContainerRef,scrollableContainerRef=void 0===_ref$scrollableContai?function(){return null}:_ref$scrollableContai,bottomSheetInstanceRef=_ref.bottomSheetInstanceRef,_ref$sheetContainerRe=_ref.sheetContainerRef,sheetContainerRef=void 0===_ref$sheetContainerRe?function(){return null}:_ref$sheetContainerRe,_ref$headerOffset=_ref.headerOffset,headerOffset=void 0===_ref$headerOffset?24:_ref$headerOffset,onClose=_ref.onClose,onBack=_ref.onBack,onMagnetize=_ref.onMagnetize,onSwipeStart=_ref.onSwipeStart,onSwipeEnd=_ref.onSwipeEnd,disableRestoreFocus=_ref.disableRestoreFocus,disableAutoFocus=_ref.disableAutoFocus,disableEscapeKeyDown=_ref.disableEscapeKeyDown,keepMounted=_ref.keepMounted,onMagnetizeEnd=_ref.onMagnetizeEnd,onOffsetChange=_ref.onOffsetChange,swipeableMarker=_ref.swipeableMarker,swipeableMarkerClassName=_ref.swipeableMarkerClassName,backButtonProps=_ref.backButtonProps,fullHeight=(0,esm.g)()||0,isFirstRender=0===fullHeight,magneticAreas=(0,react.useMemo)((function(){return magneticAreasProp?magneticAreasProp.map((function(area){return function convertPercentToNumber(value,fullHeight){var maxHeight=fullHeight-(arguments.length>2&&void 0!==arguments[2]?arguments[2]:HEADER_OFFSET);if("string"==typeof value){var percent=parseFloat(value)/100;return percent<0?Math.min(maxHeight,fullHeight+fullHeight*percent):Math.min(maxHeight,fullHeight*percent)}return value<0?Math.max(0,fullHeight+value):Math.min(maxHeight,value)}(area,fullHeight,headerOffset)})):[0,fullHeight-headerOffset]}),[fullHeight,headerOffset,magneticAreasProp]),lastMagneticArea=magneticAreas[magneticAreas.length-1],_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),sheetOffset=_useState2[0],setSheetOffset=_useState2[1],_useState3=(0,react.useState)(1),_useState4=(0,slicedToArray.Z)(_useState3,2),backdropOpacity=_useState4[0],setBackdropOpacity=_useState4[1],_useState5=(0,react.useState)(-1),_useState6=(0,slicedToArray.Z)(_useState5,2),activeAreaIdx=_useState6[0],setActiveAreaIdx=_useState6[1],_useState7=(0,react.useState)(null),_useState8=(0,slicedToArray.Z)(_useState7,2),swipingInProgress=_useState8[0],setSwipingInProgress=_useState8[1],scrollOccurred=(0,react.useRef)(!1),headerRef=(0,react.useRef)(null),contentRef=(0,react.useRef)(null),sheetHeight=(0,react.useRef)(0),sheetRef=(0,react.useRef)(null),scrollableContainer=(0,react.useRef)(null),activeArea=magneticAreas[activeAreaIdx],emptyHeader=!(hasCloser||leftAddons||title||hasBacker||rightAddons),titleIsReactElement=react.isValidElement(title),headerProps=(0,objectSpread2.Z)((0,objectSpread2.Z)({},titleIsReactElement?{children:title}:{title:title?null==title?void 0:title.toString():void 0}),{},{scrollableParentRef:scrollableContainer,headerRef:headerRef,headerOffset:headerOffset,className:headerClassName,addonClassName:addonClassName,closerClassName:closerClassName,backButtonClassName:backerClassName,leftAddons:leftAddons,rightAddons:rightAddons,bottomAddons:bottomAddons,hasCloser:hasCloser,hasBackButton:hasBacker,align:titleAlign,trim:trimTitle,sticky:stickyHeader,dataTestId:(0,shared_modern.getDataTestId)(dataTestId,"header"),onBack:onBack,titleSize:titleSize,subtitle:subtitle,onClose:onClose,backButtonProps:backButtonProps}),startSwiping=function startSwiping(event){setSwipingInProgress((function(p){return p||null==onSwipeStart||onSwipeStart(event),!0}))},stopSwiping=function stopSwiping(event){setSwipingInProgress((function(p){return p&&(null==onSwipeEnd||onSwipeEnd(event)),!1})),scrollOccurred.current=!1},getSheetOffset=function getSheetOffset(deltaY){var offset=lastMagneticArea-activeArea+deltaY,maxOffset=0===magneticAreas[0]?0:lastMagneticArea-magneticAreas[0];return maxOffset&&(offset=Math.min(maxOffset,offset)),Math.max(0,Math.round(offset))},getActiveAreaIndex=function getActiveAreaIndex(area){return magneticAreas.findIndex((function(a){return a===area}))},setSheetHeight=function setSheetHeight(){sheetRef.current&&(sheetHeight.current=sheetRef.current.getBoundingClientRect().height-sheetOffset)},scrollToArea=function scrollToArea(idx){stopSwiping(null);var nextArea=magneticAreas[idx],nextAreaIdx=getActiveAreaIndex(nextArea);0!==nextArea?-1!==nextAreaIdx&&(setActiveAreaIdx(nextAreaIdx),setSheetOffset(lastMagneticArea-nextArea),null==onMagnetize||onMagnetize(nextAreaIdx)):onClose()},shouldSkipSwiping=function shouldSkipSwiping(deltaY,startY,event){var _contentRef$current;if(scrollLockedProp||swipingInProgress)return!1;if(!swipeableContent&&null!==(_contentRef$current=contentRef.current)&&void 0!==_contentRef$current&&_contentRef$current.contains(event.target))return!0;var scrollableNode=scrollableContainer.current,bottomSheetTopY=fullHeight-sheetHeight.current;if(!scrollableNode||!stickyHeader&&Math.abs(bottomSheetTopY-startY)<=24||stickyHeader&&headerRef.current&&Math.abs(bottomSheetTopY-startY)<=headerRef.current.clientHeight)return!1;var shouldScroll=deltaY>=0?scrollableNode.scrollTop>0:scrollableNode.scrollHeight-scrollableNode.scrollTop-scrollableNode.clientHeight>1;return!scrollOccurred.current&&shouldScroll&&(scrollOccurred.current=!0),shouldScroll},sheetSwipeableHandlers=(0,es.QS)({onSwipeStart:function handleSheetSwipeStart(_ref3){var deltaY=_ref3.deltaY,initial=_ref3.initial,event=_ref3.event;shouldSkipSwiping(deltaY,initial[1],event)||startSwiping(event)},onSwiping:function handleSheetSwiping(_ref5){var initial=_ref5.initial,deltaY=_ref5.deltaY,event=_ref5.event;if(!scrollOccurred.current&&!shouldSkipSwiping(deltaY,initial[1],event)){swipingInProgress||startSwiping(event);var offset=getSheetOffset(deltaY),opacity=function getBackdropOpacity(offset){var canClose=0===magneticAreas[0],secondArea=magneticAreas[1];if(canClose&&secondArea===activeArea&&sheetOffset>lastMagneticArea-secondArea){var opacity=1-(offset-(lastMagneticArea-secondArea))/secondArea;return Math.max(0,Number(opacity.toFixed(2)))}return 1}(offset);setSheetOffset(offset),setBackdropOpacity(opacity)}},onSwiped:function handleSheetSwipe(_ref2){var initial=_ref2.initial,velocity=_ref2.velocity,deltaY=_ref2.deltaY,event=_ref2.event;scrollOccurred.current||shouldSkipSwiping(deltaY,initial[1],event)||function magnetize(velocity,deltaY){var shouldMagnetizeUpByVelocity=deltaY<0&&velocity>=.4,updatePosition=function updatePosition(nextOffset,nextAreaIdx){setSheetOffset(nextOffset),setActiveAreaIdx((function(prevState){return-1===nextAreaIdx?prevState:nextAreaIdx})),-1!==nextAreaIdx&&(null==onMagnetize||onMagnetize(nextAreaIdx),sheetOffset===nextOffset&&(null==onMagnetizeEnd||onMagnetizeEnd(nextAreaIdx),setSheetHeight()))};if(deltaY>=0&&velocity>=.4){var nextArea=magneticAreas.slice().reverse().find((function(area){return area<activeArea}));return 0===nextArea?void onClose():void updatePosition(nextArea?lastMagneticArea-nextArea:lastMagneticArea-activeArea,getActiveAreaIndex(nextArea))}if(shouldMagnetizeUpByVelocity){var _nextArea=magneticAreas.find((function(area){return area>activeArea})),_nextAreaIdx=getActiveAreaIndex(_nextArea);updatePosition(_nextArea?lastMagneticArea-_nextArea:0,_nextAreaIdx)}else{var offset=getSheetOffset(deltaY),currentSheetHeight=lastMagneticArea-offset,secondArea=magneticAreas[1],isSecondArea=activeArea===secondArea,canClose=0===magneticAreas[0]&&deltaY>=0;if(isSecondArea&&canClose&&1-currentSheetHeight/activeArea>CLOSE_OFFSET)onClose();else{var nearestArea=magneticAreas.reduceRight((function(res,area){return Math.abs(area-currentSheetHeight)<res.minOffset&&(res.minOffset=area-currentSheetHeight,res.nearestArea=area),res}),{nearestArea:lastMagneticArea,minOffset:lastMagneticArea}).nearestArea;if(0===nearestArea)onClose();else{var _nextOffset2=lastMagneticArea-nearestArea,_nextAreaIdx2=getActiveAreaIndex(nearestArea);setBackdropOpacity(1),updatePosition(_nextOffset2,_nextAreaIdx2)}}}}(velocity,deltaY)},onTouchEndOrOnMouseUp:function handleTouchEnd(_ref4){var event=_ref4.event;return stopSwiping(event)},trackMouse:swipeable,trackTouch:swipeable,delta:swipeThreshold});(0,react.useEffect)((function(){if(!isFirstRender)if(-1===activeAreaIdx){var idx=initialActiveAreaIndex;setSheetOffset(isNil(idx)?0:lastMagneticArea-magneticAreas[idx]),setActiveAreaIdx(isNil(idx)?magneticAreas.length-1:idx)}else setSheetOffset(activeArea?lastMagneticArea-activeArea:0)}),[isFirstRender,magneticAreas,lastMagneticArea]),(0,react.useEffect)((function(){if(sheetRef.current){var maxOffset=fullHeight-headerOffset,offset=open?sheetOffset:maxOffset;null==onOffsetChange||onOffsetChange(offset,offset/maxOffset*100)}}),[fullHeight,headerOffset,onOffsetChange,open,sheetOffset]),(0,react.useImperativeHandle)(bottomSheetInstanceRef,(function(){return{scrollToArea:scrollToArea}}));var getHeightStyles=function getHeightStyles(){return{height:isFirstRender||"full"!==initialHeight&&!magneticAreasProp?"unset":"".concat(lastMagneticArea,"px"),maxHeight:isFirstRender?0:"".concat(lastMagneticArea,"px")}},bgClassName=backgroundColor&&src_index_module["background-".concat(backgroundColor)];return(0,jsx_runtime.jsx)(modern.BaseModal,{open:open,ref:ref,container:container,dataTestId:dataTestId,zIndex:zIndex,onClose:onClose,usePortal:usePortal,scrollHandler:scrollableContainer,Backdrop:SwipeableBackdrop,backdropProps:(0,objectSpread2.Z)((0,objectSpread2.Z)({},backdropProps),{},{className:src_index_module.disabledPointerEvents,opacity:backdropOpacity,opacityTimeout:500,invisible:hideOverlay}),disableBackdropClick:!!hideOverlay||disableOverlayClick,className:classnames_default()(src_index_module.modal,modalClassName),wrapperClassName:classnames_default()(modalWrapperClassName,(0,defineProperty.Z)({},src_index_module.disabledPointerEvents,hideOverlay)),disableBlockingScroll:disableBlockingScroll,disableFocusLock:disableFocusLock,transitionProps:(0,objectSpread2.Z)((0,objectSpread2.Z)({appear:!0,timeout:500,classNames:src_index_module},transitionProps),{},{onExited:function handleExited(node){var idx=initialActiveAreaIndex;setBackdropOpacity(1),setSheetOffset(isNil(idx)?magneticAreas[0]:lastMagneticArea-magneticAreas[idx]),setActiveAreaIdx(isNil(idx)?magneticAreas.length-1:idx),null==onMagnetizeEnd||onMagnetizeEnd(0),transitionProps.onExited&&transitionProps.onExited(node)},onEntered:function handleEntered(node,isAppearing){setBackdropOpacity(1),setSheetHeight(),setSwipingInProgress(!1),null==onMagnetizeEnd||onMagnetizeEnd(getActiveAreaIndex(activeArea)),transitionProps.onEntered&&transitionProps.onEntered(node,isAppearing)},onEnter:function handleEnter(node,isAppearing){null==onMagnetize||onMagnetize(null!=initialActiveAreaIndex?initialActiveAreaIndex:magneticAreas.length-1),transitionProps.onEnter&&transitionProps.onEnter(node,isAppearing)},onExit:function handleExit(node){null==onMagnetize||onMagnetize(0),transitionProps.onExit&&transitionProps.onExit(node)}}),disableAutoFocus:disableAutoFocus,disableEscapeKeyDown:disableEscapeKeyDown,disableRestoreFocus:disableRestoreFocus,keepMounted:keepMounted,children:(0,jsx_runtime.jsx)("div",{style:(0,objectSpread2.Z)({},getHeightStyles()),className:classnames_default()(src_index_module.wrapper,(0,defineProperty.Z)({},src_index_module.fullscreen,0===headerOffset&&0===sheetOffset)),onTransitionEnd:setSheetHeight,children:(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(src_index_module.component,bgClassName,className,(0,defineProperty.Z)({},src_index_module.withTransition,!1===swipingInProgress)),style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},function getSwipeStyles(){return sheetOffset?{transform:"translateY(".concat(sheetOffset,"px)")}:{}}()),getHeightStyles())},sheetSwipeableHandlers),{},{ref:(0,react_merge_refs_esm.Z)([sheetRef,sheetContainerRef,sheetSwipeableHandlers.ref]),onTransitionEnd:function handleTransitionEnd(event){setSheetHeight(),"transform"===event.propertyName&&event.target===event.currentTarget&&(null==onMagnetizeEnd||onMagnetizeEnd(getActiveAreaIndex(activeArea)))},children:[function renderMarker(){return swipeable?swipeableMarker?(0,jsx_runtime.jsx)("div",{className:classnames_default()(src_index_module.marker,swipeableMarkerClassName),children:swipeableMarker}):(0,jsx_runtime.jsx)("div",{className:classnames_default()(src_index_module.marker,src_index_module.defaultMarker,swipeableMarkerClassName)}):null}(),(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},containerProps),{},{className:classnames_default()(src_index_module.scrollableContainer,null==containerProps?void 0:containerProps.className,containerClassName,(0,defineProperty.Z)((0,defineProperty.Z)({},src_index_module.scrollLocked,scrollLockedProp||swipingInProgress),src_index_module.hiddenScrollbar,hideScrollbar)),ref:(0,react_merge_refs_esm.Z)([scrollableContainer,scrollableContainerRef]),children:[!hideHeader&&!emptyHeader&&(0,jsx_runtime.jsx)(Header,(0,objectSpread2.Z)({},headerProps)),(0,jsx_runtime.jsx)("div",{ref:contentRef,className:classnames_default()(src_index_module.content,contentClassName,(0,defineProperty.Z)((0,defineProperty.Z)({},src_index_module.noHeader,hideHeader||emptyHeader),src_index_module.noFooter,!actionButton)),children:children}),actionButton&&(0,jsx_runtime.jsx)(Footer,{sticky:stickyFooter,className:classnames_default()(bgClassName,footerClassName),children:actionButton})]}))]}))})})}));try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{children:{defaultValue:null,description:"Контент",name:"children",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"Управление видимостью",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Заголовок",name:"title",required:!1,type:{name:"ReactNode"}},titleSize:{defaultValue:{value:"default"},description:"Размер заголовка",name:"titleSize",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'}]}},subtitle:{defaultValue:null,description:"Подзаголовок.",name:"subtitle",required:!1,type:{name:"ReactNode"}},actionButton:{defaultValue:null,description:"Кнопка действия (обычно, это кнопка закрытия)",name:"actionButton",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"Нода, компонент или функция возвращающая их\n\nКонтейнер к которому будут добавляться порталы",name:"container",required:!1,type:{name:"(() => Element)"}},usePortal:{defaultValue:null,description:"Рендерить ли в контейнер через портал.",name:"usePortal",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Дополнительный класс",name:"contentClassName",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"Дополнительные пропсы на контейнер.",name:"containerProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},containerClassName:{defaultValue:null,description:"Дополнительный класс",name:"containerClassName",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Цвет фона",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},headerClassName:{defaultValue:null,description:"Дополнительный класс шапки",name:"headerClassName",required:!1,type:{name:"string"}},footerClassName:{defaultValue:null,description:"Дополнительный класс футера",name:"footerClassName",required:!1,type:{name:"string"}},addonClassName:{defaultValue:null,description:"Дополнительный класс для аддонов",name:"addonClassName",required:!1,type:{name:"string"}},closerClassName:{defaultValue:null,description:"Дополнительный класс для компонента крестика",name:"closerClassName",required:!1,type:{name:"string"}},backerClassName:{defaultValue:null,description:"Дополнительный класс для компонента стрелки назад",name:"backerClassName",required:!1,type:{name:"string"}},modalClassName:{defaultValue:null,description:"Дополнительный класс для компонента модального окна",name:"modalClassName",required:!1,type:{name:"string"}},modalWrapperClassName:{defaultValue:null,description:"Дополнительный класс для обертки модального окна",name:"modalWrapperClassName",required:!1,type:{name:"string"}},swipeableMarkerClassName:{defaultValue:null,description:"Дополнительный класс для маркера",name:"swipeableMarkerClassName",required:!1,type:{name:"string"}},swipeableMarker:{defaultValue:null,description:"Кастомный маркер",name:"swipeableMarker",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},transitionProps:{defaultValue:{value:"{}"},description:"TransitionProps, прокидываются в компонент CSSTransitionProps.",name:"transitionProps",required:!1,type:{name:"Partial<TransitionProps<undefined>>"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.\nДля заголовка используется модификатор -header",name:"dataTestId",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"z-index компонента",name:"zIndex",required:!1,type:{name:"number"}},swipeable:{defaultValue:{value:"true"},description:"Будет ли свайпаться шторка",name:"swipeable",required:!1,type:{name:"boolean"}},swipeableContent:{defaultValue:{value:"true"},description:"Будет ли свайпаться контент",name:"swipeableContent",required:!1,type:{name:"boolean"}},swipeThreshold:{defaultValue:{value:"5"},description:"Порог свайпа",name:"swipeThreshold",required:!1,type:{name:"number"}},leftAddons:{defaultValue:null,description:"Слот слева",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа",name:"rightAddons",required:!1,type:{name:"ReactNode"}},bottomAddons:{defaultValue:null,description:"Слот снизу",name:"bottomAddons",required:!1,type:{name:"ReactNode"}},hasCloser:{defaultValue:null,description:"Наличие компонента крестика",name:"hasCloser",required:!1,type:{name:"boolean"}},hasBacker:{defaultValue:null,description:"Наличие компонента стрелки назад",name:"hasBacker",required:!1,type:{name:"boolean"}},backButtonProps:{defaultValue:null,description:'Дополнительные пропсы для кнопки "Назад"',name:"backButtonProps",required:!1,type:{name:'Omit<BackArrowAddonProps, "onClick" | "view" | "textOpacity">'}},titleAlign:{defaultValue:{value:"left"},description:"Выравнивание заголовка",name:"titleAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'}]}},stickyHeader:{defaultValue:null,description:"Фиксирует шапку",name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"true"},description:"Фиксирует футер",name:"stickyFooter",required:!1,type:{name:"boolean"}},initialHeight:{defaultValue:{value:"default"},description:"Высота шторки",name:"initialHeight",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'}]}},hideOverlay:{defaultValue:null,description:"Будет ли виден оверлэй",name:"hideOverlay",required:!1,type:{name:"boolean"}},hideHeader:{defaultValue:null,description:"Будет ли видна шапка",name:"hideHeader",required:!1,type:{name:"boolean"}},trimTitle:{defaultValue:null,description:"Будет ли обрезан заголовок",name:"trimTitle",required:!1,type:{name:"boolean"}},disableOverlayClick:{defaultValue:null,description:"Запретить закрытие шторки кликом на оверлэй",name:"disableOverlayClick",required:!1,type:{name:"boolean"}},disableBlockingScroll:{defaultValue:null,description:"Отключает блокировку скролла при открытии модального окна",name:"disableBlockingScroll",required:!1,type:{name:"boolean"}},disableFocusLock:{defaultValue:null,description:"Отключает ловушку фокуса",name:"disableFocusLock",required:!1,type:{name:"boolean"}},ignoreScreenChange:{defaultValue:null,description:"@deprecated данный проп больше не используется, временно оставлен для обратной совместимости\nНе анимировать шторку при изменении размера вьюпорта",name:"ignoreScreenChange",required:!1,type:{name:"boolean"}},backdropProps:{defaultValue:null,description:"Свойства для Бэкдропа",name:"backdropProps",required:!1,type:{name:"(Partial<BackdropProps> & Record<string, unknown>)"}},scrollableContainerRef:{defaultValue:{value:"() => null"},description:"Реф на контейнер, в котором происходит скролл",name:"scrollableContainerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},bottomSheetInstanceRef:{defaultValue:null,description:"Реф для управления компонентом.",name:"bottomSheetInstanceRef",required:!1,type:{name:"RefObject<{ scrollToArea: (idx: number) => void; }>"}},sheetContainerRef:{defaultValue:{value:"() => null"},description:"Реф на контейнер, в котором находится шторка",name:"sheetContainerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},magneticAreas:{defaultValue:null,description:"Магнитные области видимой высоты шторки.\nМожно использовать значения в пикселях - 10(число), либо в процентах - 10%(строка).\nПо-умолчанию -[0, window.innerHeight - '24px']\nмассив должен состоять минимум из 2 элементов",name:"magneticAreas",required:!1,type:{name:"(string | number)[]"}},initialActiveAreaIndex:{defaultValue:null,description:"Индекс точки из magneticAreas, к которому нужно примагнититься при первом открытии шторки.",name:"initialActiveAreaIndex",required:!1,type:{name:"number"}},scrollLocked:{defaultValue:null,description:"Отключает скролл контентной области.",name:"scrollLocked",required:!1,type:{name:"boolean"}},hideScrollbar:{defaultValue:null,description:"Скрыть скроллбар внутри шторки",name:"hideScrollbar",required:!1,type:{name:"boolean"}},headerOffset:{defaultValue:{value:"24"},description:"Верхний отступ шторки, если она открыта на максимальную высоту",name:"headerOffset",required:!1,type:{name:"number"}},keepMounted:{defaultValue:null,description:"Содержимое bottom-sheet всегда в DOM",name:"keepMounted",required:!1,type:{name:"boolean"}},disableAutoFocus:{defaultValue:null,description:"Отключает автоматический перевод фокуса на bottom-sheet при открытии",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:null,description:"Отключает восстановление фокуса на предыдущем элементе после закрытия bottom-sheet",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:null,description:"Отключает вызов `onClose` при нажатии Escape",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Обработчик закрытия",name:"onClose",required:!0,type:{name:"() => void"}},onBack:{defaultValue:null,description:"Обработчик нажатия на стрелку назад",name:"onBack",required:!1,type:{name:"(() => void)"}},onMagnetize:{defaultValue:null,description:"Вызывается в начале анимации притягивания к одной из `magneticAreas`",name:"onMagnetize",required:!1,type:{name:"((index: number) => void)"}},onMagnetizeEnd:{defaultValue:null,description:"Вызывается после окончания анимации притягивания",name:"onMagnetizeEnd",required:!1,type:{name:"((index: number) => void)"}},onOffsetChange:{defaultValue:null,description:"Вызывается при изменении положения шторки",name:"onOffsetChange",required:!1,type:{name:"((offset: number, percent: number) => void)"}},onSwipeStart:{defaultValue:null,description:"Вызывается в начале свайпа",name:"onSwipeStart",required:!1,type:{name:"((event: HandledEvents) => void)"}},onSwipeEnd:{defaultValue:null,description:"Вызывается после окончания свайпа",name:"onSwipeEnd",required:!1,type:{name:"((event: HandledEvents | null) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bottom-sheet/src/component.tsx#BottomSheet"]={docgenInfo:BottomSheet.__docgenInfo,name:"BottomSheet",path:"packages/bottom-sheet/src/component.tsx#BottomSheet"})}catch(__react_docgen_typescript_loader_error){}}}]);