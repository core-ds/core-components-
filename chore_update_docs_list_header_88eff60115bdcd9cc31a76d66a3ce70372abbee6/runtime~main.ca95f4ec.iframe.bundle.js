!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({2:"indicator-src-docs-Component-docs-mdx",46:"calendar-input-src-docs-Component-stories-mdx",55:"toast-src-docs-Component-docs-mdx",158:"badge-src-docs-Component-stories-mdx",251:"tooltip-src-docs-Component-docs-mdx",349:"19-icons-overview-stories-mdx",443:"17-validation-stories-mdx",517:"bank-card-src-docs-Component-stories",566:"select-src-docs-Component-stories",572:"13-changelog-stories-mdx",603:"textarea-src-docs-Component-stories-mdx",615:"toast-src-docs-Component-stories",671:"stepper-input-src-docs-Component-docs-mdx",775:"code-input-src-docs-Component-stories",809:"cdn-icon-src-docs-Component-stories",827:"bottom-sheet-src-docs-Component-docs-mdx",994:"select-src-docs-Component-docs-mdx",1081:"utils-example-share-story-index-stories-mdx",1105:"confirmation-v1-src-docs-Component-stories-mdx",1171:"toast-plate-src-docs-Component-docs-mdx",1172:"date-range-input-src-docs-Component-stories-mdx",1324:"mq-src-docs-Component-docs-mdx",1378:"skeleton-src-docs-Component-stories-mdx",1387:"list-header-src-docs-Component-stories",1398:"date-input-src-docs-Component-stories-mdx",1461:"cdn-icon-src-docs-Component-docs-mdx",1492:"portal-src-docs-Component-stories-mdx",1496:"3-development-faq-stories-mdx",1516:"file-upload-item-src-docs-Component-docs-mdx",1530:"link-src-docs-Component-stories",1564:"number-input-src-docs-Component-docs-mdx",1585:"10-breakpoints-stories-mdx",1627:"side-panel-src-docs-Component-stories-mdx",1640:"custom-button-src-docs-Component-docs-mdx",1643:"button-src-docs-Component-docs-mdx",1682:"loader-src-docs-Component-stories-mdx",1684:"attach-src-docs-Component-docs-mdx",1810:"calendar-range-src-docs-Component-docs-mdx",1920:"button-src-docs-Component-stories",1925:"circular-progress-bar-src-docs-Component-docs-mdx",1929:"base-modal-src-docs-Component-stories",2140:"spinner-src-docs-Component-stories-mdx",2172:"toast-plate-src-docs-Component-stories",2238:"comment-src-docs-Component-docs-mdx",2251:"slider-src-docs-Component-stories-mdx",2281:"international-phone-input-src-docs-Component-stories",2323:"typography-src-docs-Component-stories-mdx",2330:"confirmation-src-docs-Component-stories-mdx",2408:"mq-src-docs-Component-stories",2590:"pagination-src-docs-Component-stories-mdx",2697:"chart-src-docs-Component-stories",2733:"18-components-overview-stories-mdx",2749:"pass-code-src-docs-Component-stories",2759:"gallery-src-docs-Component-stories",2900:"1-getting-started-stories-mdx",2943:"collapse-src-docs-Component-stories",3050:"custom-button-src-docs-Component-stories",3108:"keyboard-focusable-src-docs-Component-stories",3289:"picker-button-src-docs-Component-stories-mdx",3317:"9-1-images-stories-mdx",3335:"notification-src-docs-Component-docs-mdx",3354:"status-src-docs-Component-stories-mdx",3365:"icon-button-src-docs-Component-docs-mdx",3373:"icon-view-src-docs-Component-docs-mdx",3430:"bottom-sheet-src-docs-Component-stories",3494:"circular-progress-bar-src-docs-Component-stories",3531:"date-time-input-src-docs-Component-stories-mdx",3559:"card-image-src-docs-Component-stories",3571:"9-3-forms-stories-mdx",3586:"9-2-video-audio-stories-mdx",3633:"radio-group-src-docs-Component-docs-mdx",3672:"input-src-docs-Component-docs-mdx",3722:"popup-sheet-src-docs-Component-docs-mdx",3881:"amount-src-docs-Component-docs-mdx",3890:"utils-mobile-stories-mdx",3956:"underlay-src-docs-Component-stories-mdx",4034:"action-button-src-docs-Component-stories",4136:"16-confirmation-update-stories-mdx",4143:"20-supported-browsers-stories-mdx",4151:"notification-src-docs-Component-stories",4240:"backdrop-src-docs-Component-stories",4282:"vars-src-docs-Component-docs-mdx",4298:"generic-wrapper-src-docs-Component-stories-mdx",4347:"table-src-docs-Component-stories-mdx",4354:"screenshot-utils-screenshots-story-sprite-stories",4383:"password-input-src-docs-component-stories-mdx",4399:"9-4-tables-stories-mdx",4405:"link-src-docs-Component-docs-mdx",4438:"divider-src-docs-Component-stories",4622:"pattern-lock-src-docs-Component-stories",4725:"amount-src-docs-Component-stories",4758:"time-input-src-docs-Component-stories-mdx",4781:"7-gaps-stories-mdx",4826:"keyboard-focusable-src-docs-Component-docs-mdx",4949:"notification-manager-src-docs-Component-docs-mdx",4985:"stack-src-docs-Component-stories-mdx",5114:"9-5-menu-stories-mdx",5126:"dropzone-src-docs-Component-stories",5247:"modal-src-docs-Component-stories-mdx",5259:"custom-picker-button-src-docs-Component-stories-mdx",5295:"slider-input-src-docs-Component-stories",5298:"popover-src-docs-Component-stories-mdx",5299:"space-src-docs-Component-stories-mdx",5331:"calendar-src-docs-Component-stories-mdx",5338:"scrollbar-src-docs-Component-stories-mdx",5348:"form-control-src-docs-Component-docs-mdx",5373:"markdown-src-docs-Component-stories",5428:"input-src-docs-Component-stories",5430:"number-input-src-docs-Component-stories",5433:"11-screenshots-stories-mdx",5458:"file-upload-item-src-docs-Component-stories",5513:"comment-src-docs-Component-stories",5570:"icon-button-src-docs-Component-stories",5587:"calendar-with-skeleton-src-docs-Component-docs-mdx",5644:"notification-manager-src-docs-Component-stories",5664:"masked-input-src-docs-Component-docs-mdx",5709:"international-phone-input-src-docs-Component-docs-mdx",5748:"15-code-review-stories-mdx",5817:"calendar-with-skeleton-src-docs-Component-stories",5870:"amount-input-src-docs-Component-docs-mdx",5886:"tag-src-docs-Component-docs-mdx",5938:"alert-src-docs-Component-stories-mdx",5977:"attach-src-docs-Component-stories",6034:"9-6-keyboard-stories-mdx",6131:"progress-bar-src-docs-Component-stories-mdx",6176:"sortable-list-src-docs-Component-stories-mdx",6251:"23-users-faq-stories-mdx",6292:"intl-phone-input-src-docs-Component-stories-mdx",6372:"hatching-progress-bar-src-docs-Component-docs-mdx",6453:"card-image-src-docs-Component-docs-mdx",6576:"gallery-src-docs-Component-docs-mdx",6711:"12-migrations-stories-mdx",6725:"9-0-accessibility-stories-mdx",6806:"slider-input-src-docs-Component-docs-mdx",6844:"drawer-src-docs-Component-docs-mdx",6909:"divider-src-docs-Component-docs-mdx",6941:"filter-tag-src-docs-Component-stories",6960:"base-modal-src-docs-Component-docs-mdx",6979:"backdrop-src-docs-Component-docs-mdx",7027:"code-input-src-docs-Component-docs-mdx",7038:"5-colors-stories-mdx",7056:"with-suffix-src-docs-Component-stories-mdx",7057:"list-src-docs-Component-stories-mdx",7240:"input-autocomplete-src-docs-Component-docs-mdx",7250:"grid-src-docs-Component-stories",7298:"action-button-src-docs-Component-docs-mdx",7371:"amount-input-src-docs-Component-stories",7377:"checkbox-group-src-docs-Component-stories",7493:"21-installation-stories-mdx",7645:"universal-date-input-src-docs-Component-stories",7684:"22-contributing-stories-mdx",7689:"universal-date-input-src-docs-Component-docs-mdx",7752:"libphonenumber",7807:"stepped-progress-bar-src-docs-Component-stories-mdx",7909:"system-message-src-docs-Component-stories-mdx",7959:"gap-src-docs-Component-docs-mdx",8018:"plate-src-docs-Component-stories",8152:"14-other-libs-stories-mdx",8177:"list-header-src-docs-Component-docs-mdx",8263:"segmented-control-src-docs-Component-stories-mdx",8412:"checkbox-group-src-docs-Component-docs-mdx",8432:"tabs-src-docs-Component-stories-mdx",8433:"calendar-range-src-docs-Component-stories",8487:"input-autocomplete-src-docs-Component-stories",8527:"9-7-testing-stories-mdx",8658:"pattern-lock-src-docs-Component-docs-mdx",8662:"plate-src-docs-Component-docs-mdx",8663:"collapse-src-docs-Component-docs-mdx",8680:"gap-src-docs-Component-stories",8757:"pass-code-src-docs-Component-docs-mdx",8875:"2-theming-stories-mdx",8877:"tag-src-docs-Component-stories",8909:"6-typography-stories-mdx",8930:"screenshot-utils-screenshots-story-index-stories",9017:"bank-card-src-docs-Component-docs-mdx",9065:"hatching-progress-bar-src-docs-Component-stories",9117:"tooltip-src-docs-Component-stories",9126:"dropzone-src-docs-Component-docs-mdx",9156:"grid-src-docs-Component-docs-mdx",9206:"radio-group-src-docs-Component-stories",9350:"filter-tag-src-docs-Component-docs-mdx",9402:"masked-input-src-docs-Component-stories",9404:"chart-src-docs-Component-docs-mdx",9406:"select-with-tags-src-docs-Component-stories-mdx",9410:"8-icons-stories-mdx",9422:"icon-view-src-docs-Component-stories",9485:"indicator-src-docs-Component-stories",9534:"radio-src-docs-Component-stories-mdx",9561:"popup-sheet-src-docs-Component-stories",9617:"pure-cell-src-docs-Component-stories-mdx",9618:"phone-input-src-docs-Component-stories-mdx",9637:"form-control-src-docs-Component-stories",9670:"switch-src-docs-Component-stories-mdx",9681:"stepper-input-src-docs-Component-stories",9724:"drawer-src-docs-Component-stories",9821:"checkbox-src-docs-Component-stories-mdx",9867:"steps-src-docs-Component-stories-mdx",9990:"markdown-src-docs-Component-docs-mdx"}[chunkId]||chunkId)+"."+{2:"480b0bee",46:"183f963d",55:"c2ba9f7e",158:"55a780d0",238:"801c2863",251:"0a062ecf",349:"8a912846",443:"7e96b30a",517:"242067ff",566:"048e581e",572:"6a70768f",603:"bb69e93d",611:"7aa40796",615:"82549b37",671:"c4903173",673:"995cd7dc",775:"a98aabf2",809:"31a43d26",827:"fe214eb0",994:"5bef61dc",1081:"6cb7d9a7",1105:"2a68efd9",1171:"a38a849e",1172:"f10a8756",1324:"29143f61",1378:"0bdccc85",1387:"c46f1028",1398:"7b3b6a86",1461:"a54d5275",1492:"abc1df20",1496:"672408fc",1516:"6f7e1e77",1530:"67d213bf",1564:"0ee3bf44",1585:"3ba84b8c",1627:"baa47af5",1640:"3341054f",1643:"eb6660ee",1682:"8389c1e0",1684:"634b110d",1729:"65840836",1810:"eaab9a8e",1920:"820750de",1925:"1800ebb7",1929:"3bbcb34f",2140:"a7cd8ce6",2172:"07804e34",2238:"ca879d65",2251:"7d54ee25",2281:"cee9cfe5",2323:"34c19a34",2330:"fcf339b8",2408:"cfa6d16c",2590:"f2f9f7b4",2697:"aadc797f",2733:"b3605732",2749:"19086aa6",2759:"500df149",2900:"5e4a9102",2943:"cf905a0e",3050:"cd085f7c",3108:"f800779c",3122:"c26adc19",3289:"70a394b1",3317:"5a91163d",3335:"9bfe8a26",3354:"819e5826",3365:"312a842c",3373:"cefce133",3430:"4387e5ed",3494:"74e8c8ae",3531:"8896585c",3559:"9ba2a317",3571:"d21ee450",3586:"f4c9438b",3633:"fdaa3142",3672:"047c9f97",3722:"f26f4d49",3743:"9fc7e1bb",3881:"e878062c",3890:"7a4d7289",3956:"c0847e78",4034:"db294452",4136:"bca95166",4143:"19cd39c1",4151:"380dd85d",4240:"6b674764",4282:"2286ed1c",4298:"52ba6925",4347:"4efedb0e",4354:"f92037e3",4379:"f0575078",4383:"82faee7f",4399:"4eb4915a",4405:"a20f95f6",4438:"0071dc05",4593:"761bd0e3",4622:"32dac187",4703:"20248fd6",4725:"e3965a54",4758:"46e79e82",4760:"86c71241",4781:"09cef2f3",4826:"f28e0554",4949:"23f5c37c",4985:"dba47867",5065:"2a66f974",5114:"cfb881e8",5126:"0ca7f2ee",5149:"0ab45613",5247:"f2ff2256",5253:"84c382ae",5259:"98e954e5",5295:"9b95bdef",5298:"f5f65987",5299:"bdd2f479",5331:"7162b4cf",5338:"0d019ff1",5348:"8cb38f16",5373:"0a7cbdac",5428:"7f55f7bf",5430:"07a66332",5433:"240d7e33",5458:"976e7d40",5513:"766a22a3",5570:"be5c482e",5587:"6192e72b",5644:"65085523",5664:"1c58fb67",5709:"a8361adc",5748:"17a707ff",5817:"fef5f46d",5870:"3c89c2ac",5886:"254384c9",5938:"02a010eb",5977:"c2db87c4",6034:"daf66bb1",6131:"1cd9578d",6176:"a488dc34",6251:"9bbfcbda",6292:"03f6b712",6372:"a0c0aab6",6453:"64073f07",6499:"03b3c6db",6553:"3a56e78d",6576:"01263a67",6711:"0d537fd7",6725:"48675bf6",6806:"092b4e04",6844:"50541f55",6909:"15220970",6941:"0146e798",6960:"6de10f5f",6979:"0a1ccc7a",7027:"c7c5f963",7038:"9eb38d4e",7056:"baff2ef7",7057:"8faf303f",7240:"fa8c377f",7250:"cd228d21",7298:"4607752e",7364:"10f17346",7371:"98793989",7377:"6bae9603",7438:"8909c832",7493:"aab9cd17",7549:"57ab383d",7613:"1ede5090",7645:"49e5c9fa",7684:"28f0ed05",7689:"94767b3a",7752:"86bb81c3",7807:"9378cec1",7909:"938a0882",7959:"e1a27814",8018:"3d472988",8077:"cfecd370",8152:"bf81fec0",8177:"909ebe56",8204:"f88895b5",8263:"88cf9312",8375:"64ae7917",8412:"095366f1",8432:"42fbaa38",8433:"6a46daec",8487:"d81aeccb",8527:"392d9cdc",8597:"5b0b4fe0",8603:"166257b7",8658:"c36992c9",8662:"52b2999d",8663:"3f3fba8c",8680:"e03cb15b",8757:"c30632b7",8875:"2b66b75f",8877:"4b3b8f93",8909:"9412b9fd",8930:"5f104755",9017:"c2cc6918",9036:"b0417588",9061:"373522a2",9065:"8720400e",9115:"7d6d7698",9117:"ecd0019e",9126:"377b9bdc",9156:"afa33c65",9206:"db32be8d",9350:"917616ab",9402:"4d544b26",9404:"d2a06014",9406:"37468a8a",9410:"5b527754",9422:"a7cb653e",9433:"956e230f",9485:"a66c9dc6",9534:"95450a4d",9561:"bbe2b6b4",9617:"5fae5f9e",9618:"016e1e23",9637:"c2e38894",9670:"72061806",9681:"24106d0d",9724:"3168ea8f",9744:"b8699b03",9821:"cf0a3aff",9867:"f2e44d22",9939:"be04b03c",9990:"698ae3e4"}[chunkId]+".iframe.bundle.js"},__webpack_require__.miniCssF=function(chunkId){},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=function(module){return(module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module},__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@alfalab/core-components:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@alfalab/core-components:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();