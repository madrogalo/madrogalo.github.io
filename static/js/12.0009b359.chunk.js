/*! For license information please see 12.0009b359.chunk.js.LICENSE.txt */
(this["webpackJsonpgenesis-chat"]=this["webpackJsonpgenesis-chat"]||[]).push([[12],{62:function(e,t,r){"use strict";r.r(t);var n=r(26),o=r.n(n),i=r(1),a=r(27),s=function(){function e(e,t){this.code_=O(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return O(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.serverResponse_?this.message_+"\n"+this.serverResponse_:this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),e}(),u="unknown",c="object-not-found",l="quota-exceeded",h="unauthenticated",p="unauthorized",f="retry-limit-exceeded",d="canceled",_="invalid-url",v="invalid-default-bucket",g="cannot-slice-blob",m="server-file-wrong-size",b="no-download-url",y="invalid-argument",w="invalid-argument-count",R="app-deleted",k="invalid-root-operation",T="invalid-format",x="internal-error";function O(e){return"storage/"+e}function U(){return new s(u,"An unknown error occurred, please check the error payload for server response.")}function S(){return new s(d,"User canceled the upload/download.")}function E(){return new s(g,"Cannot slice blob for upload. Please retry the upload.")}function P(){return new s(b,"The given file does not have any download URLs.")}function A(e,t,r){return new s(y,"Invalid argument in `"+t+"` at index "+e+": "+r)}function C(){return new s(R,"The Firebase app was deleted.")}function j(e,t){return new s(T,"String does not match format '"+e+"': "+t)}function L(e){throw new s(x,"Internal error: "+e)}var B={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function I(e){switch(e){case B.RAW:case B.BASE64:case B.BASE64URL:case B.DATA_URL:return;default:throw"Expected one of the event types: ["+B.RAW+", "+B.BASE64+", "+B.BASE64URL+", "+B.DATA_URL+"]."}}var q=function(e,t){this.data=e,this.contentType=t||null};function M(e,t){switch(e){case B.RAW:return new q(N(t));case B.BASE64:case B.BASE64URL:return new q(H(e,t));case B.DATA_URL:return new q(function(e){var t=new z(e);return t.base64?H(B.BASE64,t.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(r){throw j(B.DATA_URL,"Malformed data URL.")}return N(t)}(t.rest)}(t),new z(t).contentType)}throw U()}function N(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n))if(r<e.length-1&&56320===(64512&e.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else t.push(239,191,189);else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function H(e,t){switch(e){case B.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw j(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case B.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw j(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(c){throw j(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var z=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw j(B.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=(n=r,o=";base64",n.length>=o.length&&n.substring(n.length-o.length)===o),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1);var n,o};var D,F={STATE_CHANGED:"state_changed"},G="running",X="pausing",W="paused",K="success",Z="canceling",J="canceled",V="error",$={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Q(e){switch(e){case G:case X:case Z:return $.RUNNING;case W:return $.PAUSED;case K:return $.SUCCESS;case J:return $.CANCELED;case V:default:return $.ERROR}}function Y(e){return null!=e}function ee(e){return void 0!==e}function te(e){return"function"===typeof e}function re(e){return"object"===typeof e}function ne(e){return re(e)&&null!==e}function oe(e){return"string"===typeof e||e instanceof String}function ie(e){return ae(e)&&Number.isInteger(e)}function ae(e){return"number"===typeof e||e instanceof Number}function se(e){return ue()&&e instanceof Blob}function ue(){return"undefined"!==typeof Blob}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(D||(D={}));var ce=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=D.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=D.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw L("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),Y(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return Y(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw L("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw L("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw L("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){Y(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){Y(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),le=function(){function e(){}return e.prototype.createXhrIo=function(){return new ce},e}();function he(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function pe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=he();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(ue())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}var fe=function(){function e(e,t){var r=0,n="";se(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(se(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,t,r);return null===n?null:new e(n)}return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(ue()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(pe.apply(null,n))}var o=t.map((function(e){return oe(e)?M(B.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),de=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw new s(v,"Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t){var r=null;var n=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}for(var i="firebasestorage.googleapis.com".replace(/[.]/g,"\\."),a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/([A-Za-z0-9.\\-_]+)/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:o}],u=0;u<a.length;u++){var c=a[u],l=c.regex.exec(t);if(l){var h=l[c.indices.bucket],p=l[c.indices.path];p||(p=""),r=new e(h,p),c.postModify(r);break}}if(null==r)throw function(e){return new s(_,"Invalid URL '"+e+"'.")}(t);return r},e}();function _e(e){var t,r;try{t=JSON.parse(e)}catch(n){return null}return re(r=t)&&!Array.isArray(r)?t:null}function ve(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function ge(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function me(e){return"https://firebasestorage.googleapis.com/v0"+e}function be(e){var t=encodeURIComponent,r="?";for(var n in e){if(e.hasOwnProperty(n))r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}function ye(e,t){return t}var we=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ye},Re=null;function ke(){if(Re)return Re;var e=[];e.push(new we("bucket")),e.push(new we("generation")),e.push(new we("metageneration")),e.push(new we("name","fullPath",!0));var t=new we("name");t.xform=function(e,t){return function(e){return!oe(e)||e.length<2?e:ge(e)}(t)},e.push(t);var r=new we("size");return r.xform=function(e,t){return Y(t)?Number(t):t},e.push(r),e.push(new we("timeCreated")),e.push(new we("updated")),e.push(new we("md5Hash",null,!0)),e.push(new we("cacheControl",null,!0)),e.push(new we("contentDisposition",null,!0)),e.push(new we("contentEncoding",null,!0)),e.push(new we("contentLanguage",null,!0)),e.push(new we("contentType",null,!0)),e.push(new we("metadata","customMetadata",!0)),Re=e}function Te(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new de(r,n);return t.makeStorageReference(o)}})}(n,e),n}function xe(e,t,r){var n=_e(t);return null===n?null:Te(e,n,r)}function Oe(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Ue(e){if(!re(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!re(r))throw"Expected object for 'customMetadata' mapping."}else if(ne(r))throw"Mapping for '"+t+"' cannot be an object."}}function Se(e,t,r){var n=_e(r);return null===n?null:function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r.prefixes)for(var o=0,i=r.prefixes;o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new de(t,a));n.prefixes.push(s)}if(r.items)for(var u=0,c=r.items;u<c.length;u++){var l=c[u];s=e.makeStorageReference(new de(t,l.name));n.items.push(s)}return n}(e,t,n)}function Ee(e){if(!re(e)||!e)throw"Expected ListOptions object.";for(var t in e)if("maxResults"===t){if(!ie(e.maxResults)||e.maxResults<=0)throw"Expected maxResults to be a positive number.";if(e.maxResults>1e3)throw"Expected maxResults to be less than or equal to 1000."}else{if("pageToken"!==t)throw"Unknown option: "+t;if(e.pageToken&&!oe(e.pageToken))throw"Expected pageToken to be string."}}var Pe=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};function Ae(e){if(!e)throw U()}function Ce(e,t){return function(r,n){var o=xe(e,n,t);return Ae(null!==o),o}}function je(e,t){return function(r,n){var o=xe(e,n,t);return Ae(null!==o),function(e,t){var r=_e(t);if(null===r)return null;if(!oe(r.downloadTokens))return null;var n=r.downloadTokens;if(0===n.length)return null;var o=encodeURIComponent;return n.split(",").map((function(t){var r=e.bucket,n=e.fullPath;return me("/b/"+o(r)+"/o/"+o(n))+be({alt:"media",token:t})}))[0]}(o,n)}}function Le(e){return function(t,r){var n,o,i;return 401===t.getStatus()?n=new s(h,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new s(l,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new s(p,"User does not have permission to access '"+o+"'.")):n=r,n.setServerResponseProp(r.serverResponseProp()),n}}function Be(e){var t=Le(e);return function(r,n){var o,i=t(r,n);return 404===r.getStatus()&&(o=e.path,i=new s(c,"Object '"+o+"' does not exist.")),i.setServerResponseProp(n.serverResponseProp()),i}}function Ie(e,t,r){var n=me(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new Pe(n,"GET",Ce(e,r),o);return i.errorHandler=Be(t),i}function qe(e,t,r,n,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=me(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime,u=new Pe(a,"GET",function(e,t){return function(r,n){var o=Se(e,t,n);return Ae(null!==o),o}}(e,t.bucket),s);return u.urlParams=i,u.errorHandler=Le(t),u}function Me(e,t,r){var n=me(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new Pe(n,"GET",je(e,r),o);return i.errorHandler=Be(t),i}function Ne(e,t,r,n){var o=me(t.fullServerUrl()),i=Oe(r,n),a=e.maxOperationRetryTime,s=new Pe(o,"PATCH",Ce(e,n),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=Be(t),s}function He(e,t){var r=me(t.fullServerUrl()),n=e.maxOperationRetryTime;var o=new Pe(r,"DELETE",(function(e,t){}),n);return o.successCodes=[200,204],o.errorHandler=Be(t),o}function ze(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),n}var De=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function Fe(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(n){Ae(!1)}return Ae(!!r&&-1!==(t||["active"]).indexOf(r)),r}function Ge(e,t,r,n,o,i,a,u){var c=new De(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=n.size()),n.size()!==c.total)throw new s(m,"Server recorded incorrect upload file size, please retry the upload.");var l=c.total-c.current,h=l;o>0&&(h=Math.min(h,o));var p=c.current,f=p+h,d={"X-Goog-Upload-Command":h===l?"upload, finalize":"upload","X-Goog-Upload-Offset":c.current},_=n.slice(p,f);if(null===_)throw E();var v=t.maxUploadRetryTime,g=new Pe(r,"POST",(function(e,r){var o,a=Fe(e,["active","final"]),s=c.current+h,u=n.size();return o="final"===a?Ce(t,i)(e,r):null,new De(s,u,"final"===a,o)}),v);return g.headers=d,g.body=_.uploadData(),g.progressCallback=u||null,g.errorHandler=Le(e),g}var Xe=function(e,t,r){if(te(e)||Y(t)||Y(r))this.next=e,this.error=t||null,this.complete=r||null;else{var n=e;this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},We=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};function Ke(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}if(!(n<=r.length&&r.length<=o))throw function(e,t,r,n){var o,i;return e===t?(o=e,i=1===e?"argument":"arguments"):(o="between "+e+" and "+t,i="arguments"),new s(w,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}(n,o,e,r.length);for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(a){throw a instanceof Error?A(i,e,a.message):A(i,e,a)}}var Ze=function(e,t){var r=this;this.validator=function(t){r.optional&&!ee(t)||e(t)},this.optional=!!t};function Je(e,t){function r(e){if(!oe(e))throw"Expected string."}var n,o,i;return e?(o=r,i=e,n=function(e){o(e),i(e)}):n=r,new Ze(n,t)}function Ve(){return new Ze((function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||ue()&&e instanceof Blob))throw"Expected Blob or File."}))}function $e(e){return new Ze(Ue,e)}function Qe(e){return new Ze(Ee,e)}function Ye(){return new Ze((function(e){if(!(ae(e)&&e>=0))throw"Expected a number 0 or greater."}))}function et(e,t){return new Ze((function(t){if(!(null===t||Y(t)&&t instanceof Object))throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}),t)}function tt(e){return new Ze((function(e){if(!(null===e||te(e)))throw"Expected a Function."}),e)}function rt(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}var nt=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.service_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=G,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(d)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(V))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(d)?a.completeTransitions_():(a.error_=e,a.transition_(V))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===G&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.service_.getAuthToken().then((function(r){switch(t.state_){case G:e(r);break;case Z:t.transition_(J);break;case X:t.transition_(W)}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=ze(t,n,o),s={name:a.fullPath},u=me(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=Oe(a,r),h=e.maxUploadRetryTime,p=new Pe(u,"POST",(function(e){var t;Fe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){Ae(!1)}return Ae(oe(t)),t}),h);return p.urlParams=s,p.headers=c,p.body=l,p.errorHandler=Le(t),p}(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=function(e,t,r,n){var o=e.maxUploadRetryTime,i=new Pe(r,"POST",(function(e){var t=Fe(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){Ae(!1)}r||Ae(!1);var o=Number(r);return Ae(!isNaN(o)),new De(o,n.size(),"final"===t)}),o);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=Le(t),i}(e.service_,e.location_,t,e.blob_),o=e.service_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=262144*this.chunkMultiplier_,r=new De(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=Ge(e.location_,e.service_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(V)}var a=e.service_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(K)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=Ie(e.service_,e.location_,e.mappings_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(K)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=ze(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Oe(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",h=fe.getBlob(c,n,l);if(null===h)throw E();var p={name:u.fullPath},f=me(i),d=e.maxUploadRetryTime,_=new Pe(f,"POST",Ce(e,r),d);return _.urlParams=p,_.headers=a,_.body=h.uploadData(),_.errorHandler=Le(t),_}(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(K)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case Z:case X:this.state_=e,null!==this.request_&&this.request_.cancel();break;case G:var t=this.state_===W;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case W:this.state_=e,this.notifyObservers_();break;case J:this.error_=S(),this.state_=e,this.notifyObservers_();break;case V:case K:this.state_=e,this.notifyObservers_()}},e.prototype.completeTransitions_=function(){switch(this.state_){case X:this.transition_(W);break;case Z:this.transition_(J);break;case G:this.start_()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=Q(this.state_);return new We(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==F.STATE_CHANGED)throw"Expected one of the event types: ["+F.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=tt(!0).validator,s=et(null,!0).validator;function u(e){try{return void a(e)}catch(t){}try{if(s(e),!(ee(e.next)||ee(e.error)||ee(e.complete)))throw"";return}catch(t){throw i}}var c=[Je(o),et(u,!0),tt(!0),tt(!0)];Ke("on",c,arguments);var l=this;function h(e){return function(t,r,o){null!==e&&Ke("on",e,arguments);var i=new Xe(t,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}}function p(e){if(null===e)throw i;u(e)}var f=[et(p),tt(!0),tt(!0)],d=!(ee(t)||ee(r)||ee(n));return d?h(f):h(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_(),this.observers_.slice().forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(Q(this.state_)){case $.SUCCESS:rt(this.resolve_.bind(null,this.snapshot))();break;case $.CANCELED:case $.ERROR:rt(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){switch(Q(this.state_)){case $.RUNNING:case $.PAUSED:e.next&&rt(e.next.bind(e,this.snapshot))();break;case $.SUCCESS:e.complete&&rt(e.complete.bind(e))();break;case $.CANCELED:case $.ERROR:e.error&&rt(e.error.bind(e,this.error_))();break;default:e.error&&rt(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){Ke("resume",[],arguments);var e=this.state_===W||this.state_===X;return e&&this.transition_(G),e},e.prototype.pause=function(){Ke("pause",[],arguments);var e=this.state_===G;return e&&this.transition_(X),e},e.prototype.cancel=function(){Ke("cancel",[],arguments);var e=this.state_===G||this.state_===X;return e&&this.transition_(Z),e},e}(),ot=function(){function e(e,t){this.service=e,this.location=t instanceof de?t:de.makeFromUrl(t)}return e.prototype.toString=function(){return Ke("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return ke()},e.prototype.child=function(e){Ke("child",[Je()],arguments);var t=ve(this.location.path,e),r=new de(this.location.bucket,t);return this.newRef(this.service,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;var t=new de(this.location.bucket,e);return this.newRef(this.service,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new de(this.location.bucket,"");return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return ge(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.service},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),Ke("put",[Ve(),$e(!0)],arguments),this.throwIfRoot_("put"),new nt(this,this.service,this.location,this.mappings(),new fe(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=B.RAW),Ke("putString",[Je(),Je(I,!0),$e(!0)],arguments),this.throwIfRoot_("putString");var n=M(t,e),o=Object.assign({},r);return!Y(o.contentType)&&Y(n.contentType)&&(o.contentType=n.contentType),new nt(this,this.service,this.location,this.mappings(),new fe(n.data,!0),o)},e.prototype.delete=function(){var e=this;return Ke("delete",[],arguments),this.throwIfRoot_("delete"),this.service.getAuthToken().then((function(t){var r=He(e.service,e.location);return e.service.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){Ke("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return Object(i.__awaiter)(this,void 0,void 0,(function(){var r,n,o,a;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=i.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(a=e.items).push.apply(a,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){Ke("list",[Qe(!0)],arguments);var t=this;return this.service.getAuthToken().then((function(r){var n=e||{},o=qe(t.service,t.location,"/",n.pageToken,n.maxResults);return t.service.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return Ke("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.service.getAuthToken().then((function(t){var r=Ie(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return Ke("updateMetadata",[$e()],arguments),this.throwIfRoot_("updateMetadata"),this.service.getAuthToken().then((function(r){var n=Ne(t.service,t.location,e,t.mappings());return t.service.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return Ke("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.service.getAuthToken().then((function(t){var r=Me(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw P();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new s(k,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},e}(),it=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();var at=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr;if(r.wasSuccessCode)try{var u=e.callback_(a,a.getResponseText());ee(u)?o(u):o()}catch(c){i(c)}else null!==a?((n=U()).setServerResponseProp(a.getResponseText()),e.errorCallback_?i(e.errorCallback_(a,n)):i(n)):r.canceled?i(n=e.appDelete_?C():S()):i(n=new s(f,"Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new st(!1,null,!0)):this.backoffId_=function(e,t,r){var n=1,o=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function h(t){o=setTimeout((function(){o=null,e(p,u())}),t)}function p(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)l.call.apply(l,Object(i.__spreadArrays)([null,e],t));else{var o,p=u()||a;if(p)l.call.apply(l,Object(i.__spreadArrays)([null,e],t));else n<64&&(n*=2),1===s?(s=2,o=0):o=1e3*(n+Math.random()),h(o)}}var f=!1;function d(e){f||(f=!0,c||(null!==o?(e||(s=2),clearTimeout(o),h(0)):e||(s=1)))}return h(0),setTimeout((function(){a=!0,d(!0)}),r),d}((function(t,r){if(r)t(!1,new st(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null;var n=(r=r).getErrorCode()===D.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new st(a,r))}else{var s=r.getErrorCode()===D.ABORT;t(!1,new st(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}),t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},e}(),st=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};function ut(e,t,r,n){var i=be(e.urlParams),a=e.url+i,s=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(s,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(s,r),function(e){var t="undefined"!==typeof o.a?o.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}(s),new at(a,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}var ct=function(){function e(t,r,n,o){var i;this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,this.authProvider_=r,this.maxOperationRetryTime_=12e4,this.maxUploadRetryTime_=6e5,this.requests_=new Set,this.pool_=n,this.bucket_=null!=o?de.makeFromBucketSpec(o):e.extractBucket_(null===(i=this.app_)||void 0===i?void 0:i.options),this.internals_=new lt(this)}return e.extractBucket_=function(e){var t=null===e||void 0===e?void 0:e.storageBucket;return null==t?null:de.makeFromBucketSpec(t)},e.prototype.getAuthToken=function(){return Object(i.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(i.__generator)(this,(function(r){switch(r.label){case 0:return(e=this.authProvider_.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2];case 1:if(null!==(t=r.sent()))return[2,t.accessToken];r.label=2;case 2:return[2,null]}}))}))},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requests_.forEach((function(e){return e.cancel()})),this.requests_.clear()},e.prototype.makeStorageReference=function(e){return new ot(this,e)},e.prototype.makeRequest=function(e,t){var r=this;if(this.deleted_)return new it(C());var n=ut(e,this.appId_,t,this.pool_);return this.requests_.add(n),n.getPromise().then((function(){return r.requests_.delete(n)}),(function(){return r.requests_.delete(n)})),n},e.prototype.ref=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(Ke("ref",[Je(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new ot(this,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{de.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return Ke("refFromURL",[Je(t,!1)],arguments),new ot(this,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.maxUploadRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){Ke("setMaxUploadRetryTime",[Ye()],arguments),this.maxUploadRetryTime_=e},Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this.maxOperationRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxOperationRetryTime=function(e){Ke("setMaxOperationRetryTime",[Ye()],arguments),this.maxOperationRetryTime_=e},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),e}(),lt=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.deleteApp(),Promise.resolve()},e}();function ht(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new ct(r,n,new le,t)}!function(e){var t={TaskState:$,TaskEvent:F,StringFormat:B,Storage:ct,Reference:ot};e.INTERNAL.registerComponent(new a.Component("storage",ht,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage","0.3.43")}(o.a)}}]);
//# sourceMappingURL=12.0009b359.chunk.js.map