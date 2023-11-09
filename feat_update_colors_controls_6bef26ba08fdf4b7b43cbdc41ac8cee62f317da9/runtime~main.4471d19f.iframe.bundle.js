!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({2:"indicator-src-docs-Component-docs-mdx",46:"calendar-input-src-docs-Component-stories-mdx",55:"toast-src-docs-Component-docs-mdx",66:"installation-stories-mdx",158:"badge-src-docs-Component-stories-mdx",182:"keyboard-stories-mdx",251:"tooltip-src-docs-Component-docs-mdx",488:"forms-stories-mdx",517:"bank-card-src-docs-Component-stories",532:"scrollbar-src-docs-Component-docs-mdx",537:"video-audio-stories-mdx",566:"select-src-docs-Component-stories",569:"portal-src-docs-Component-stories",603:"textarea-src-docs-Component-stories-mdx",615:"toast-src-docs-Component-stories",775:"code-input-src-docs-Component-stories",808:"progress-bar-src-docs-Component-stories",809:"cdn-icon-src-docs-Component-stories",819:"contributing-stories-mdx",827:"bottom-sheet-src-docs-Component-docs-mdx",994:"select-src-docs-Component-docs-mdx",1081:"utils-example-share-story-index-stories-mdx",1099:"components-overview-stories-mdx",1105:"confirmation-v1-src-docs-Component-stories-mdx",1171:"toast-plate-src-docs-Component-docs-mdx",1172:"date-range-input-src-docs-Component-stories-mdx",1203:"password-input-src-docs-Component-stories",1213:"getting-started-stories-mdx",1272:"with-suffix-src-docs-Component-stories",1324:"mq-src-docs-Component-docs-mdx",1378:"skeleton-src-docs-Component-stories-mdx",1387:"list-header-src-docs-Component-stories",1398:"date-input-src-docs-Component-stories-mdx",1438:"table-src-docs-Component-docs-mdx",1461:"cdn-icon-src-docs-Component-docs-mdx",1516:"file-upload-item-src-docs-Component-docs-mdx",1530:"link-src-docs-Component-stories",1564:"number-input-src-docs-Component-docs-mdx",1593:"with-suffix-src-docs-Component-docs-mdx",1627:"side-panel-src-docs-Component-stories-mdx",1640:"custom-button-src-docs-Component-docs-mdx",1643:"button-src-docs-Component-docs-mdx",1682:"loader-src-docs-Component-stories-mdx",1684:"attach-src-docs-Component-docs-mdx",1810:"calendar-range-src-docs-Component-docs-mdx",1878:"development-faq-stories-mdx",1920:"button-src-docs-Component-stories",1925:"circular-progress-bar-src-docs-Component-docs-mdx",1929:"base-modal-src-docs-Component-stories",2140:"spinner-src-docs-Component-stories-mdx",2157:"icons-stories-mdx",2172:"toast-plate-src-docs-Component-stories",2238:"comment-src-docs-Component-docs-mdx",2243:"changelog-stories-mdx",2251:"slider-src-docs-Component-stories-mdx",2281:"international-phone-input-src-docs-Component-stories",2323:"typography-src-docs-Component-stories-mdx",2330:"confirmation-src-docs-Component-stories-mdx",2402:"screenshots-stories-mdx",2408:"mq-src-docs-Component-stories",2547:"breakpoints-stories-mdx",2690:"migrations-stories-mdx",2697:"chart-src-docs-Component-stories",2711:"icons-overview-stories-mdx",2749:"pass-code-src-docs-Component-stories",2759:"gallery-src-docs-Component-stories",2796:"stack-src-docs-Component-docs-mdx",2870:"steps-src-docs-Component-docs-mdx",2893:"accessibility-stories-mdx",2943:"collapse-src-docs-Component-stories",2956:"typography-stories-mdx",2995:"code-review-stories-mdx",3050:"custom-button-src-docs-Component-stories",3108:"keyboard-focusable-src-docs-Component-stories",3126:"validation-stories-mdx",3289:"picker-button-src-docs-Component-stories-mdx",3335:"notification-src-docs-Component-docs-mdx",3365:"icon-button-src-docs-Component-docs-mdx",3373:"icon-view-src-docs-Component-docs-mdx",3430:"bottom-sheet-src-docs-Component-stories",3494:"circular-progress-bar-src-docs-Component-stories",3531:"date-time-input-src-docs-Component-stories-mdx",3552:"images-stories-mdx",3559:"card-image-src-docs-Component-stories",3633:"radio-group-src-docs-Component-docs-mdx",3672:"input-src-docs-Component-docs-mdx",3722:"popup-sheet-src-docs-Component-docs-mdx",3822:"table-src-docs-Component-stories",3825:"gaps-stories-mdx",3828:"progress-bar-src-docs-Component-docs-mdx",3881:"amount-src-docs-Component-docs-mdx",3890:"utils-mobile-stories-mdx",3922:"tables-stories-mdx",3956:"underlay-src-docs-Component-stories-mdx",4034:"action-button-src-docs-Component-stories",4088:"pagination-src-docs-Component-stories",4151:"notification-src-docs-Component-stories",4240:"backdrop-src-docs-Component-stories",4282:"vars-src-docs-Component-docs-mdx",4298:"generic-wrapper-src-docs-Component-stories-mdx",4354:"screenshot-utils-screenshots-story-sprite-stories",4405:"link-src-docs-Component-docs-mdx",4438:"divider-src-docs-Component-stories",4622:"pattern-lock-src-docs-Component-stories",4710:"testing-stories-mdx",4725:"amount-src-docs-Component-stories",4758:"time-input-src-docs-Component-stories-mdx",4826:"keyboard-focusable-src-docs-Component-docs-mdx",4949:"notification-manager-src-docs-Component-docs-mdx",4960:"phone-input-src-docs-Component-stories",5023:"other-libs-stories-mdx",5126:"dropzone-src-docs-Component-stories",5247:"modal-src-docs-Component-stories-mdx",5259:"custom-picker-button-src-docs-Component-stories-mdx",5295:"slider-input-src-docs-Component-stories",5298:"popover-src-docs-Component-stories-mdx",5331:"calendar-src-docs-Component-stories-mdx",5334:"stack-src-docs-Component-stories",5348:"form-control-src-docs-Component-docs-mdx",5373:"markdown-src-docs-Component-stories",5428:"input-src-docs-Component-stories",5430:"number-input-src-docs-Component-stories",5458:"file-upload-item-src-docs-Component-stories",5513:"comment-src-docs-Component-stories",5570:"icon-button-src-docs-Component-stories",5587:"calendar-with-skeleton-src-docs-Component-docs-mdx",5644:"notification-manager-src-docs-Component-stories",5664:"masked-input-src-docs-Component-docs-mdx",5709:"international-phone-input-src-docs-Component-docs-mdx",5817:"calendar-with-skeleton-src-docs-Component-stories",5824:"radio-src-docs-Component-stories-mdx",5870:"amount-input-src-docs-Component-docs-mdx",5886:"tag-src-docs-Component-docs-mdx",5938:"alert-src-docs-Component-stories-mdx",5977:"attach-src-docs-Component-stories",6019:"users-faq-stories-mdx",6176:"sortable-list-src-docs-Component-stories-mdx",6223:"museum-stories-mdx",6248:"phone-input-src-docs-Component-docs-mdx",6292:"intl-phone-input-src-docs-Component-stories-mdx",6364:"confirmation-update-stories-mdx",6372:"hatching-progress-bar-src-docs-Component-docs-mdx",6453:"card-image-src-docs-Component-docs-mdx",6547:"scrollbar-src-docs-Component-stories",6576:"gallery-src-docs-Component-docs-mdx",6806:"slider-input-src-docs-Component-docs-mdx",6844:"drawer-src-docs-Component-docs-mdx",6909:"divider-src-docs-Component-docs-mdx",6941:"filter-tag-src-docs-Component-stories",6960:"base-modal-src-docs-Component-docs-mdx",6979:"backdrop-src-docs-Component-docs-mdx",7027:"code-input-src-docs-Component-docs-mdx",7057:"list-src-docs-Component-stories-mdx",7240:"input-autocomplete-src-docs-Component-docs-mdx",7250:"grid-src-docs-Component-stories",7298:"action-button-src-docs-Component-docs-mdx",7343:"menu-stories-mdx",7371:"amount-input-src-docs-Component-stories",7377:"checkbox-group-src-docs-Component-stories",7457:"portal-src-docs-Component-docs-mdx",7509:"steps-src-docs-Component-stories",7638:"pagination-src-docs-Component-docs-mdx",7645:"universal-date-input-src-docs-Component-stories",7689:"universal-date-input-src-docs-Component-docs-mdx",7747:"status-src-docs-Component-stories",7752:"libphonenumber",7807:"stepped-progress-bar-src-docs-Component-stories-mdx",7905:"password-input-src-docs-Component-docs-mdx",7909:"system-message-src-docs-Component-stories-mdx",7959:"gap-src-docs-Component-docs-mdx",8018:"plate-src-docs-Component-stories",8177:"list-header-src-docs-Component-docs-mdx",8210:"theming-stories-mdx",8263:"segmented-control-src-docs-Component-stories-mdx",8412:"checkbox-group-src-docs-Component-docs-mdx",8432:"tabs-src-docs-Component-stories-mdx",8433:"calendar-range-src-docs-Component-stories",8437:"status-src-docs-Component-docs-mdx",8487:"input-autocomplete-src-docs-Component-stories",8658:"pattern-lock-src-docs-Component-docs-mdx",8662:"plate-src-docs-Component-docs-mdx",8663:"collapse-src-docs-Component-docs-mdx",8680:"gap-src-docs-Component-stories",8757:"pass-code-src-docs-Component-docs-mdx",8877:"tag-src-docs-Component-stories",8930:"screenshot-utils-screenshots-story-index-stories",9017:"bank-card-src-docs-Component-docs-mdx",9065:"hatching-progress-bar-src-docs-Component-stories",9117:"tooltip-src-docs-Component-stories",9126:"dropzone-src-docs-Component-docs-mdx",9156:"grid-src-docs-Component-docs-mdx",9206:"radio-group-src-docs-Component-stories",9215:"space-src-docs-Component-docs-mdx",9350:"filter-tag-src-docs-Component-docs-mdx",9373:"supported-browsers-stories-mdx",9402:"masked-input-src-docs-Component-stories",9404:"chart-src-docs-Component-docs-mdx",9406:"select-with-tags-src-docs-Component-stories-mdx",9422:"icon-view-src-docs-Component-stories",9485:"indicator-src-docs-Component-stories",9534:"colors-stories-mdx",9561:"popup-sheet-src-docs-Component-stories",9617:"pure-cell-src-docs-Component-stories-mdx",9637:"form-control-src-docs-Component-stories",9670:"switch-src-docs-Component-stories-mdx",9724:"drawer-src-docs-Component-stories",9815:"space-src-docs-Component-stories",9821:"checkbox-src-docs-Component-stories-mdx",9990:"markdown-src-docs-Component-docs-mdx"}[chunkId]||chunkId)+"."+{2:"66fa8b82",46:"3d2e5976",55:"82a0702f",66:"53448e73",158:"694c4a48",182:"4beb3711",238:"801c2863",251:"a95d74ad",488:"9ae2bc6b",517:"242067ff",532:"43622408",537:"b807d0ca",566:"ed3b232a",569:"63ccf031",603:"dd12a36c",615:"d18a03b0",775:"3d2fac4c",808:"cbf11085",809:"31a43d26",819:"e795d612",827:"dff71a64",994:"be3e73ad",1081:"6cb7d9a7",1099:"883f3720",1105:"07bb410a",1171:"b66dc4e4",1172:"59ad73a9",1203:"12cfa7a6",1213:"501272d1",1272:"3630488e",1324:"29143f61",1378:"e24717ec",1387:"c46f1028",1398:"2135e52e",1438:"352670f5",1461:"a54d5275",1516:"2ced24e9",1530:"67d213bf",1564:"518c1d6d",1593:"762736d3",1627:"fe1e81c8",1640:"bae133df",1643:"4b2f696e",1682:"8389c1e0",1684:"64588768",1729:"65840836",1810:"e9d3937c",1878:"56ef5446",1920:"8a803460",1925:"d07b2206",1929:"3bbcb34f",2140:"203b78ce",2157:"3a4ae779",2172:"c86cc8c9",2238:"54287aa1",2243:"df3fcc56",2251:"a4e9471b",2281:"cee9cfe5",2323:"eb75c758",2330:"ddc9d281",2402:"ca7b7606",2408:"cfa6d16c",2547:"1513a21c",2690:"00de0e01",2697:"2519e1fa",2711:"d4d5700c",2749:"19086aa6",2759:"500df149",2796:"1f786926",2870:"f7b043e2",2893:"de7ffc44",2943:"cf905a0e",2956:"57c02358",2995:"4c1a4cbe",3050:"cd085f7c",3108:"f800779c",3126:"841bbe31",3289:"2f01e22e",3335:"ec093e4d",3365:"192b3b61",3373:"3f277998",3430:"4387e5ed",3494:"74e8c8ae",3531:"fdbb457e",3552:"1346cce3",3559:"9ba2a317",3633:"c25229e8",3672:"c96eb38a",3722:"fe4f0397",3743:"ba380d7b",3822:"fae6b643",3825:"c56bcfca",3828:"d5721503",3881:"e878062c",3890:"7a4d7289",3922:"a1b18d0b",3956:"34bb7c22",4034:"db294452",4064:"194a25af",4088:"10164790",4151:"380dd85d",4240:"6b674764",4282:"23b20062",4298:"17fea8d6",4354:"f92037e3",4379:"f0575078",4405:"6dfd4927",4438:"0071dc05",4593:"3ad9d186",4622:"32dac187",4710:"37ccf89f",4725:"e3965a54",4758:"403fa87e",4760:"86c71241",4826:"f28e0554",4949:"34d47d1a",4960:"e09ad157",5023:"a81d38a6",5065:"f0476128",5126:"0ca7f2ee",5149:"9496c98b",5247:"9e967561",5253:"84c382ae",5259:"99050f97",5295:"9b95bdef",5298:"f5f65987",5331:"315fb755",5334:"0d7f548d",5348:"8943f4fa",5373:"0a7cbdac",5428:"61593eb4",5430:"07a66332",5458:"976e7d40",5513:"766a22a3",5570:"be5c482e",5587:"8a44f48c",5644:"65085523",5664:"3ca3d057",5709:"ee12b23c",5817:"fef5f46d",5824:"29914fbd",5870:"102b6d64",5886:"b7c2bf1e",5938:"634661cb",5977:"c2db87c4",6019:"99c81962",6176:"d8a86e5a",6223:"957ed240",6248:"e9e50d00",6292:"306187e7",6364:"d3482bca",6372:"96500b10",6453:"64073f07",6499:"e4d15738",6547:"1a8e8d76",6553:"f4e799d4",6576:"3877e32f",6806:"ca2401b1",6844:"6958b014",6906:"0c091b40",6909:"15220970",6941:"c5b3c690",6960:"e180d187",6979:"0a1ccc7a",7027:"a1f0ae28",7057:"c6239c32",7240:"4b0f1b86",7250:"cd228d21",7298:"02e7dc48",7343:"ac75e08a",7371:"98793989",7377:"d43d0949",7438:"db8b0021",7457:"d98bef12",7509:"7b42b124",7549:"2c060db9",7613:"53c3572e",7638:"a2921785",7645:"49e5c9fa",7689:"f3baee77",7747:"1f438754",7752:"86bb81c3",7807:"7e64b009",7905:"caabddfd",7909:"40efe2a5",7959:"e1a27814",8018:"ea7c971d",8077:"cfecd370",8177:"c3ae7b6f",8204:"1ae0bfe1",8210:"fccba134",8263:"6edb8d73",8412:"322d9cda",8432:"84ad3cbe",8433:"6a46daec",8437:"3727a3d9",8487:"fe543e73",8597:"5b0b4fe0",8603:"370a558b",8658:"384eb64b",8662:"8ba0d2ef",8663:"3f3fba8c",8680:"e03cb15b",8757:"4f7335c2",8877:"a28a4d8e",8930:"5f104755",9017:"ffa35d06",9036:"9639ba10",9061:"373522a2",9065:"8720400e",9114:"0824a5cd",9115:"7d6d7698",9117:"111a0b2d",9126:"377b9bdc",9156:"afa33c65",9206:"4b2fa3a5",9215:"1f38fc87",9290:"efa367db",9350:"0486ca2d",9373:"e4dce9c8",9402:"4d544b26",9404:"a13696d7",9406:"1ac04f86",9422:"18648bfa",9433:"956e230f",9485:"a66c9dc6",9534:"f8bbc0e6",9561:"144323ca",9617:"ee097752",9637:"0bc6cff9",9670:"4f573fbe",9724:"3168ea8f",9744:"b8699b03",9815:"08078992",9821:"9eee60a3",9838:"7ca78731",9939:"20163329",9990:"f08368be"}[chunkId]+".iframe.bundle.js"},__webpack_require__.miniCssF=function(chunkId){},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=function(module){return(module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module},__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@alfalab/core-components:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@alfalab/core-components:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();