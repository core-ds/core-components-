!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({2:"indicator-src-docs-Component-docs-mdx",46:"calendar-input-src-docs-Component-stories-mdx",55:"toast-src-docs-Component-docs-mdx",158:"badge-src-docs-Component-stories-mdx",251:"tooltip-src-docs-Component-docs-mdx",295:"slider-input-src-docs-Component-stories-mdx",349:"19-icons-overview-stories-mdx",443:"17-validation-stories-mdx",572:"13-changelog-stories-mdx",603:"textarea-src-docs-Component-stories-mdx",615:"toast-src-docs-Component-stories",671:"stepper-input-src-docs-Component-docs-mdx",775:"code-input-src-docs-Component-stories",779:"amount-src-docs-Component-stories-mdx",818:"dropzone-src-docs-Component-stories-mdx",849:"comment-src-docs-component-stories-mdx",1081:"utils-example-share-story-index-stories-mdx",1105:"confirmation-v1-src-docs-Component-stories-mdx",1171:"toast-plate-src-docs-Component-docs-mdx",1172:"date-range-input-src-docs-Component-stories-mdx",1378:"skeleton-src-docs-Component-stories-mdx",1398:"date-input-src-docs-Component-stories-mdx",1492:"portal-src-docs-Component-stories-mdx",1496:"3-development-faq-stories-mdx",1560:"pure-input-src-docs-Component-stories-mdx",1585:"10-breakpoints-stories-mdx",1627:"side-panel-src-docs-Component-stories-mdx",1640:"custom-button-src-docs-Component-docs-mdx",1643:"button-src-docs-Component-docs-mdx",1682:"loader-src-docs-Component-stories-mdx",1823:"number-input-src-docs-Component-stories-mdx",1920:"button-src-docs-Component-stories",2048:"file-upload-item-src-docs-Component-stories-mdx",2140:"spinner-src-docs-Component-stories-mdx",2148:"keyboard-focusable-src-docs-Component-stories-mdx",2172:"toast-plate-src-docs-Component-stories",2251:"slider-src-docs-Component-stories-mdx",2323:"typography-src-docs-Component-stories-mdx",2330:"confirmation-src-docs-Component-stories-mdx",2590:"pagination-src-docs-Component-stories-mdx",2733:"18-components-overview-stories-mdx",2749:"pass-code-src-docs-Component-stories",2894:"divider-src-docs-Component-stories-mdx",2900:"1-getting-started-stories-mdx",3050:"custom-button-src-docs-Component-stories",3128:"list-header-src-docs-Component-stories-mdx",3269:"notification-src-docs-Component-stories-mdx",3289:"picker-button-src-docs-Component-stories-mdx",3317:"9-1-images-stories-mdx",3354:"status-src-docs-Component-stories-mdx",3373:"icon-view-src-docs-Component-docs-mdx",3478:"hatching-progress-bar-src-docs-Component-stories-mdx",3531:"date-time-input-src-docs-Component-stories-mdx",3571:"9-3-forms-stories-mdx",3586:"9-2-video-audio-stories-mdx",3633:"radio-group-src-docs-Component-docs-mdx",3672:"input-src-docs-Component-docs-mdx",3722:"popup-sheet-src-docs-Component-docs-mdx",3890:"utils-mobile-stories-mdx",3956:"underlay-src-docs-Component-stories-mdx",4003:"input-autocomplete-src-docs-Component-stories-mdx",4038:"grid-src-docs-Component-stories-mdx",4136:"16-confirmation-update-stories-mdx",4143:"20-supported-browsers-stories-mdx",4282:"vars-src-docs-Component-docs-mdx",4298:"generic-wrapper-src-docs-Component-stories-mdx",4347:"table-src-docs-Component-stories-mdx",4354:"screenshot-utils-screenshots-story-sprite-stories",4383:"password-input-src-docs-component-stories-mdx",4399:"9-4-tables-stories-mdx",4443:"backdrop-src-docs-Component-stories-mdx",4480:"gap-src-docs-Component-stories-mdx",4500:"masked-input-src-docs-Component-stories-mdx",4527:"calendar-range-src-docs-Component-stories-mdx",4622:"pattern-lock-src-docs-Component-stories",4758:"time-input-src-docs-Component-stories-mdx",4781:"7-gaps-stories-mdx",4890:"drawer-src-docs-Component-stories-mdx",4985:"stack-src-docs-Component-stories-mdx",5114:"9-5-menu-stories-mdx",5247:"modal-src-docs-Component-stories-mdx",5259:"custom-picker-button-src-docs-Component-stories-mdx",5298:"popover-src-docs-Component-stories-mdx",5299:"space-src-docs-Component-stories-mdx",5331:"calendar-src-docs-Component-stories-mdx",5338:"scrollbar-src-docs-Component-stories-mdx",5348:"form-control-src-docs-Component-docs-mdx",5373:"markdown-src-docs-Component-stories",5428:"input-src-docs-Component-stories",5433:"11-screenshots-stories-mdx",5748:"15-code-review-stories-mdx",5789:"select-src-docs-Component-stories-mdx",5886:"tag-src-docs-Component-docs-mdx",5938:"alert-src-docs-Component-stories-mdx",6034:"9-6-keyboard-stories-mdx",6085:"collapse-src-docs-Component-stories-mdx",6131:"progress-bar-src-docs-Component-stories-mdx",6176:"sortable-list-src-docs-Component-stories-mdx",6251:"23-users-faq-stories-mdx",6292:"intl-phone-input-src-docs-Component-stories-mdx",6319:"attach-src-docs-Component-stories-mdx",6403:"bottom-sheet-src-docs-Component-stories-mdx",6446:"base-modal-src-docs-Component-stories-mdx",6556:"bank-card-src-docs-Component-stories-mdx",6711:"12-migrations-stories-mdx",6725:"9-0-accessibility-stories-mdx",6870:"mq-src-docs-Component-stories-mdx",6941:"filter-tag-src-docs-Component-stories",6970:"chart-src-docs-Component-stories-mdx",7027:"code-input-src-docs-Component-docs-mdx",7038:"5-colors-stories-mdx",7056:"with-suffix-src-docs-Component-stories-mdx",7057:"list-src-docs-Component-stories-mdx",7370:"card-image-src-docs-Component-stories-mdx",7377:"checkbox-group-src-docs-Component-stories",7493:"21-installation-stories-mdx",7612:"cdn-icon-src-docs-Component-stories-mdx",7684:"22-contributing-stories-mdx",7752:"libphonenumber",7807:"stepped-progress-bar-src-docs-Component-stories-mdx",7909:"system-message-src-docs-Component-stories-mdx",8018:"plate-src-docs-Component-stories",8043:"notification-manager-src-docs-Component-stories-mdx",8101:"icon-button-src-docs-Component-stories-mdx",8152:"14-other-libs-stories-mdx",8263:"segmented-control-src-docs-Component-stories-mdx",8305:"action-button-src-docs-Component-stories-mdx",8378:"gallery-src-docs-Component-stories-mdx",8412:"checkbox-group-src-docs-Component-docs-mdx",8432:"tabs-src-docs-Component-stories-mdx",8527:"9-7-testing-stories-mdx",8658:"pattern-lock-src-docs-Component-docs-mdx",8662:"plate-src-docs-Component-docs-mdx",8757:"pass-code-src-docs-Component-docs-mdx",8875:"2-theming-stories-mdx",8877:"tag-src-docs-Component-stories",8909:"6-typography-stories-mdx",8930:"screenshot-utils-screenshots-story-index-stories",8991:"amount-input-src-docs-Component-stories-mdx",9011:"calendar-with-skeleton-src-docs-Component-stories-mdx",9117:"tooltip-src-docs-Component-stories",9126:"stepper-input-src-docs-Component-stories",9206:"radio-group-src-docs-Component-stories",9350:"filter-tag-src-docs-Component-docs-mdx",9406:"select-with-tags-src-docs-Component-stories-mdx",9410:"8-icons-stories-mdx",9422:"icon-view-src-docs-Component-stories",9485:"indicator-src-docs-Component-stories",9534:"radio-src-docs-Component-stories-mdx",9561:"popup-sheet-src-docs-Component-stories",9617:"pure-cell-src-docs-Component-stories-mdx",9618:"phone-input-src-docs-Component-stories-mdx",9637:"form-control-src-docs-Component-stories",9670:"switch-src-docs-Component-stories-mdx",9721:"circular-progress-bar-src-docs-Component-stories-mdx",9725:"link-src-docs-Component-stories-mdx",9821:"checkbox-src-docs-Component-stories-mdx",9867:"steps-src-docs-Component-stories-mdx",9990:"markdown-src-docs-Component-docs-mdx"}[chunkId]||chunkId)+"."+{2:"207e4588",46:"03848b9b",55:"660fe4fc",158:"de019b24",238:"801c2863",251:"d0d84215",295:"e3086738",349:"5b6b00b8",443:"f098ce0c",572:"70601bef",603:"a4fc77b5",611:"f3c7e6e2",615:"e3bfd890",671:"c7552955",673:"20cfddcd",775:"a98aabf2",779:"8085d1a8",818:"a411dea9",849:"8324f67f",1081:"183d67f2",1105:"72b93330",1171:"50c022e6",1172:"1a6a1b45",1378:"c7e3c121",1398:"b15fbde2",1492:"b5fc32c9",1496:"00bbe3d4",1560:"1fbe170c",1585:"6002a05f",1627:"77cb4e85",1640:"aae5e54b",1643:"2d301ea9",1682:"fef66711",1729:"65840836",1823:"7ff2425f",1895:"9c20726b",1920:"820750de",2048:"b4a37b3a",2140:"88e8f96f",2148:"54fb92e8",2172:"07804e34",2251:"3cfbffd4",2323:"f1bc2a36",2330:"2ff7ea76",2590:"7b86d7a2",2733:"bd2a71ca",2749:"437f8e2a",2894:"08541ba0",2900:"79ff2f6d",3032:"faba4c51",3050:"cd085f7c",3128:"3279b6f8",3269:"73e8715b",3289:"89780ba1",3317:"db24bdcc",3354:"b8989bd7",3373:"7d47bcca",3478:"45bb9043",3531:"6f0f4261",3571:"83c8523b",3586:"366b405c",3633:"214d2ad3",3672:"e9fdb334",3722:"15f3ea41",3890:"a9af09ad",3956:"3675dc70",4003:"9272bdc3",4038:"7e26259f",4136:"d7452203",4143:"cdeff193",4282:"52407a46",4298:"f534de11",4347:"de9311f1",4354:"f92037e3",4379:"f0575078",4383:"b463e375",4399:"15d0c873",4443:"a99703a3",4480:"310c8b7f",4500:"c4a1eb9f",4527:"4459a2e4",4593:"e94b0369",4622:"b02ad176",4703:"38712a72",4758:"d47179b6",4760:"86c71241",4781:"fffc330c",4890:"47ea88f1",4985:"074062ac",5114:"4aa53561",5149:"7610c1a3",5247:"f020a259",5253:"84c382ae",5259:"20987c2e",5298:"a80fbb6f",5299:"aee9111c",5331:"3bb88c46",5338:"5a75c401",5348:"043fb4ea",5373:"990fcaad",5428:"7f55f7bf",5433:"e3198a73",5748:"17a707ff",5789:"fff349ef",5886:"f2695b6e",5938:"f4e1bc54",5945:"5e7ce347",6034:"a1a5ba7d",6085:"da3bedee",6131:"0cdf4072",6176:"f2111b36",6251:"0dd4451c",6292:"56529e32",6319:"e62c529a",6403:"2c6eb2af",6446:"4f5e7ba8",6556:"ddd213c1",6711:"52d2f231",6725:"5ac29012",6870:"89051622",6941:"0146e798",6970:"8bf3e8c7",7027:"229d09a0",7038:"88353c9c",7056:"133b31bb",7057:"cc6b318c",7364:"eece43b4",7370:"485a6221",7377:"6bae9603",7493:"e1cee7ae",7549:"dfa68f08",7612:"1467b57b",7613:"4d52428b",7684:"b728e825",7685:"5139baee",7752:"86bb81c3",7807:"9322ba1e",7886:"95df7558",7909:"94edb934",8018:"3d472988",8043:"21924216",8077:"cfecd370",8101:"c62ef9f0",8152:"14e1c38e",8204:"8545e935",8263:"e984ef9a",8305:"70825296",8378:"461d3264",8412:"4e4f658e",8432:"90db301a",8527:"df9bb84e",8658:"a881cd19",8662:"07fdb8f7",8757:"167c8a1e",8875:"1651cb5e",8877:"4b3b8f93",8909:"0461fe9b",8930:"5f104755",8991:"9aff7329",9011:"a87e3e7a",9036:"1e5855ea",9061:"373522a2",9115:"7d6d7698",9117:"ecd0019e",9126:"32ce7e7b",9206:"db32be8d",9350:"e81bc3ff",9406:"3449d940",9410:"dfc87867",9422:"a7cb653e",9433:"956e230f",9485:"a66c9dc6",9534:"c110e15c",9561:"ed695525",9617:"b421f747",9618:"5b72447e",9637:"c2e38894",9670:"8bc315c7",9721:"62c5d1d3",9725:"9cf0d90d",9744:"b8699b03",9821:"afd3bd6f",9867:"5120325d",9939:"61c16032",9990:"2166648c"}[chunkId]+".iframe.bundle.js"},__webpack_require__.miniCssF=function(chunkId){},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=function(module){return(module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module},__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@alfalab/core-components:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@alfalab/core-components:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();