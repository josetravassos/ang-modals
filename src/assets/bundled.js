(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$7=Symbol(),n$7=new Map;class s$4{constructor(t,n){if(this._$cssResult$=!0,n!==e$7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$7.get(this.cssText);return t$2&&void 0===e&&(n$7.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$5=t=>new s$4("string"==typeof t?t:t+"",e$7),r$4=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$4(o,e$7)},i$4=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$5(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$3;const e$6=window.trustedTypes,r$3=e$6?e$6.emptyScript:"",h$3=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,i){switch(i){case Boolean:t=t?r$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$6=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$6};class a$2 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$4(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$4){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$4.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$4.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$6)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null==h$3||h$3({ReactiveElement:a$2}),(null!==(s$3=globalThis.reactiveElementVersions)&&void 0!==s$3?s$3:globalThis.reactiveElementVersions=[]).push("1.3.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$1;const i$3=globalThis.trustedTypes,s$2=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$5=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+e$5,n$5=`<${o$3}>`,l$3=document,h$2=(t="")=>l$3.createComment(t),r$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$2=Array.isArray,u$1=t=>{var i;return d$2(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,a$1=/>/g,f$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p$1(1),y=p$1(2),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$2(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$3.createTreeWalker(l$3,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v$1:void 0!==u[1]?d=a$1:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$1):void 0!==u[3]&&(d=f$1):d===f$1?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$1:'"'===u[3]?m:_):d===m||d===_?d=f$1:d===v$1||d===a$1?d=c:(d=f$1,h=void 0);const y=d===f$1&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$5:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$5+y):s+e$5+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$2?s$2.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$5)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$5),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$5),s=t.length-1;if(s>0){l.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$2()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$2());}}}else if(8===l.nodeType)if(l.data===o$3)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$5,t+1));)c.push({type:7,index:r}),t+=e$5.length-1;}r++;}}static createElement(t,i){const s=l$3.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$2(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$3).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r$2(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u$1(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r$2(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$3.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h$2()),this.A(h$2()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r$2(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$2(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$3?i$3.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const R={P:"$lit$",L:e$5,V:o$3,I:1,N:C,R:V,D:u$1,j:P,H:N,O:S,F:H,B:I,W:M,Z:L},z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l$2,o$2;class s$1 extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s$1.finalized=!0,s$1._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$1});const n$4=globalThis.litElementPolyfillSupport;null==n$4||n$4({LitElement:s$1});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.2.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n$3=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$4(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$2(e,n)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n$2;null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const l$1=l=>null!=l?l:w;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

    var css_248z$9 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.buttonContainer {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  height: 100%;
  vertical-align: bottom;
}
.buttonContainer[icon=right], .buttonContainer[icon=left] {
  cursor: pointer;
}
.buttonContainer[icon=right]:hover, .buttonContainer[icon=left]:hover {
  text-decoration: underline;
  text-decoration-color: #027baf;
}
.buttonContainer[mode=dark][icon=right]:hover, .buttonContainer[mode=dark][icon=left]:hover {
  text-decoration-color: #ffffff;
}
.buttonContainer[disabled] {
  color: #828282;
  text-decoration: none;
  pointer-events: none;
  cursor: default;
}
.buttonContainer[mode=dark] > .svg-icon {
  display: block;
  height: 12px;
  width: 12px;
}
.buttonContainer[mode=light] > .svg-icon {
  display: block;
  height: 12px;
  width: 12px;
}
.buttonContainer[disabled] > .svg-icon {
  display: block;
  height: 12px;
  width: 12px;
}
.buttonContainer[size=fullwidth] {
  width: 100%;
}

/* All the styles for BASIC button */
button {
  display: flex;
  font: inherit;
  border-radius: 80px 80px 80px 80px;
  color: #484848;
  background-color: #fafafa;
  border: 1px solid #cccccc;
  width: auto;
  font: normal normal 400 14px / 16px proxima-nova;
  position: relative;
  /* variation for medium size */
  /* variation for large size */
}
button[loading=true] span {
  color: purple;
}
button lottie-player {
  position: absolute;
  left: 50%;
  bottom: 15%;
  transform: translateX(-50%);
  width: auto;
  height: 24px;
}
button[disabled] {
  color: #828282;
  text-decoration: none;
  pointer-events: none;
  cursor: default;
}
button:hover {
  color: #027baf;
  border-color: #e1e1e1;
  background-color: #ffffff;
  cursor: pointer;
}
button[size=md] {
  width: auto;
  height: 48px;
  font: normal normal 400 18px / 24px proxima-nova;
}
button[size=md] lottie-player {
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translateX(-50%);
  width: auto;
  height: 24px;
}
button[size=lg] {
  width: auto;
  font: normal normal 400 24px / 32px proxima-nova;
}
button[size=lg] lottie-player {
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translateX(-50%);
  width: auto;
  height: 24px;
}
button[size=fullwidth] {
  justify-content: center;
  min-width: 100%;
  padding: 12px 16px;
}

/* end of BASIC button styles */
button[buttonType=basic] {
  display: flex;
  font: inherit;
  padding: 12px 16px;
  background-color: #fafafa;
  border: 1px solid #cccccc;
  width: auto;
  height: 40px;
  font: normal normal 400 14px / 16px proxima-nova;
  cursor: pointer;
}
button[buttonType=basic][loading]:hover {
  background-color: #fafafa;
  border: 1px solid #cccccc;
}
button[buttonType=basic][loading] {
  border: 1px solid #e1e1e1;
  background-color: #fafafa;
  cursor: default;
}
button[buttonType=basic][loading] span {
  color: purple;
  visibility: hidden;
}
button[buttonType=basic][disabled] {
  color: #828282;
  border: 1px solid #e1e1e1;
  background-color: #fafafa;
  text-decoration: none;
  pointer-events: none;
}
button[buttonType=basic]:hover {
  color: #027baf;
  border: 1px solid #cccccc;
  background-color: #ffffff;
}
button[buttonType=basic][size=md] {
  width: auto;
  height: 48px;
  font: normal normal 400 18px / 24px proxima-nova;
}
button[buttonType=basic][size=lg] {
  width: auto;
  height: 56px;
  font: normal normal 400 24px / 32px proxima-nova;
  padding: 12px 24px;
}
button[buttonType=basic][size=fullwidth] {
  justify-content: center;
  min-width: 100%;
}

button[buttonType=cta] {
  color: white;
  background-color: #027baf;
  border: none;
  width: auto;
  height: 40px;
  font: normal normal 400 14px / 16px proxima-nova;
  padding: 12px 16px;
  cursor: default;
}
button[buttonType=cta][loading]:hover {
  cursor: default;
  background-color: #fafafa;
}
button[buttonType=cta][loading] {
  border: 1px solid #e1e1e1;
  background-color: #fafafa;
}
button[buttonType=cta][loading] span {
  color: purple;
  visibility: hidden;
}
button[buttonType=cta][disabled] {
  background-color: #e1e1e1;
  color: #828282;
  text-decoration: none;
}
button[buttonType=cta]:hover {
  background-color: #26afdf;
  color: #ffffff;
  cursor: pointer;
}
button[buttonType=cta][size=md] {
  width: auto;
  height: 48px;
  font: normal normal 400 18px / 24px proxima-nova;
  padding: 12px 16px;
}
button[buttonType=cta][size=lg] {
  width: auto;
  height: 56px;
  font: normal normal 400 24px / 32px proxima-nova;
  padding: 12px 24px;
}

button[buttonType=link] {
  white-space: nowrap;
  background: none !important;
  border: none;
  color: #027baf;
  text-decoration: none;
  font: normal normal 400 14px / 16px proxima-nova;
  padding: 0px;
  height: 16px;
  align-items: center;
}
button[buttonType=link][loading] span {
  color: purple;
  visibility: hidden;
}
button[buttonType=link][bold=true] {
  font-weight: 700;
}
button[buttonType=link]:hover {
  text-decoration: underline;
}
button[buttonType=link][variant=secondary] {
  color: #484848;
}
button[buttonType=link][variant=secondary]:hover {
  color: #027baf;
}
button[buttonType=link][mode=dark] {
  color: #ffffff;
}
button[buttonType=link][disabled] {
  color: #828282;
  cursor: default;
}
button[buttonType=link][size=xsm] {
  font: normal normal 400 12px / 16px proxima-nova;
  height: 16px;
}
button[buttonType=link][size=xsm][bold=true] {
  font-weight: 700;
}
button[buttonType=link][size=md] {
  font: normal normal 400 18px / 24px proxima-nova;
  height: 24px;
}
button[buttonType=link][size=md][bold=true] {
  font-weight: 700;
}
button[buttonType=link][size=lg] {
  font: normal normal 400 24px / 32px proxima-nova;
  height: 32px;
}
button[buttonType=link][size=lg][bold=true] {
  font-weight: 700;
}

.taco-add-button {
  padding: 0px;
  border: none;
  background: none;
  align-items: center;
}
.taco-add-button:not([disabled]):hover .icon {
  fill: #027baf;
  border-color: #cccccc;
}
.taco-add-button:not([disabled]):hover span {
  font-style: normal normal 400 18px / 24px proxima-nova;
  text-decoration: underline;
}
.taco-add-button[size=sm] span {
  font: normal normal 400 14px / 16px proxima-nova;
  color: #027baf;
  padding-left: 8px;
  padding-right: 0px;
}
.taco-add-button[size=sm] span:hover {
  text-decoration: underline;
}
.taco-add-button[size=sm] .icon {
  vertical-align: middle;
  display: inline-block;
  height: 16px;
  width: 16px;
  background-color: #fafafa;
  padding: 8px;
  border-radius: 50%;
  outline: 1px solid #cccccc;
  outline-offset: -1px;
}
.taco-add-button[size=sm][disabled] .icon {
  background-color: #fafafa;
  border-color: #e1e1e1;
}
.taco-add-button[size=sm][disabled] span {
  color: #828282;
}
.taco-add-button[size=sm][variant=inline] .icon {
  fill: #027baf;
  height: 12px;
  width: 12px;
}
.taco-add-button[size=md] span {
  font: normal normal 400 18px / 24px proxima-nova;
  color: #027baf;
  padding-left: 12px;
  padding-right: 0px;
}
.taco-add-button[size=md] span:hover {
  text-decoration: underline;
}
.taco-add-button[size=md] .icon {
  display: block;
  height: 20px;
  width: 20px;
  background-color: #fafafa;
  padding: 10px;
  border-radius: 50%;
  margin: auto;
  outline: 1px solid #cccccc;
  outline-offset: -1px;
}
.taco-add-button[size=md][disabled] .icon {
  background-color: #fafafa;
  border-color: #e1e1e1;
}
.taco-add-button[size=md][disabled] span {
  color: #828282;
}
.taco-add-button[size=md][variant=inline] .icon {
  fill: #027baf;
  height: 12px;
  width: 12px;
  padding-right: 8px;
}

.taco-close-button {
  background-color: transparent;
  border: none;
  align-items: center;
  /* Close button variation does not have a span, so i'm removing it here */
}
.taco-close-button .contained-close {
  vertical-align: middle;
  display: inline-block;
  background-color: #fafafa;
  padding: 8px;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  border-color: #e1e1e1;
}
.taco-close-button .contained-close[size=xsm] {
  height: 12px;
  width: 12px;
}
.taco-close-button .contained-close[size=sm] {
  padding: 8px;
  height: 16px;
  width: 16px;
  line-height: 0px;
}
.taco-close-button .contained-close[size=md] {
  padding: 10px;
  height: 20px;
  width: 20px;
  line-height: 0px;
}
.taco-close-button span {
  display: none;
}`;

    let TacoButton = class TacoButton extends s$1 {
        constructor() {
            super();
            //declaration of properties
            //boolean values represent the state that the button should be in
            this.disabled = false;
            this.bold = false;
            this.loading = false;
            this._isHovered = false;
            //value property is the label of the button for demo purposes
            this.value = "Label";
            // declaring the type of button
            // type property can be basic, cta, or link
            this.type = "";
            //declaring the color mode if necessary
            //properties: dark / light
            this.mode = "";
            //declaring the size of the button
            //if size is not declared in the component then it will default to small (sm)
            this.size = "";
            //declaring the button variant
            //properties: primary / secondary / inline
            this.variant = "";
            //declare ariaLabel string based on best practices :)
            this.ariaLabel = "";
            //link property that will hold the redirect of the link button, added this property to both checkAria and handleClick
            this.link = "";
            // Property to input an icon side
            // properties: left / right
            this.icon = "";
            // this.addEventListener('click', (e: Event) => console.log("tacoMethod", e.type, e.target));
        }
        // Method to be run on button click
        dispatchClickEvent() {
            // creating a clickEvent variable that holds the "onClick" CustomEvent
            const clickEvent = new CustomEvent("onClick", {
                // Includes a message
                // Bubbles: indicates that the event will flow upwards throughout the dom tree to ancestors of the dispatching element
                // Composed: allows the event to be dispatched above the shadow DOM tree in which the element exists.
                detail: { message: "my-event happened." },
                bubbles: true,
                composed: true,
            });
            // console.log(clickEvent, "this is dispatched event");
            // Dispatches the event
            this.dispatchEvent(clickEvent);
        }
        //this is a lifecycle event similar to compoundDidMount, once the component loads onto the DOM, it will call the checkAria function to dynamically update aria-labels based on the class being used to define the styling of the button
        connectedCallback() {
            super.connectedCallback();
            //calling aria-label function
            this.checkAria();
        }
        //the goal of this function will be to dynamically change the aria labels based on if the button is a basic button, cta button, or link button
        checkAria() {
            //calling the type property
            this.type;
            // let x;
            // let getDomain = this.handleClick(x);
            // var getDomain = this.handleClick;
            // console.log(getDomain);
            if (this.type == "close") {
                this.ariaLabel = "this is a buton, clicking it will close the window";
            }
            else {
                this.ariaLabel = "please define an aria-label by adding a type to your button";
            }
        }
        getTacoSpinner() {
            return $ ` <taco-spinner class="spinner-${l$1(this.size)}" loading accessibilityLabel=${this.ariaLabel}></taco-spinner> `;
        }
        // loading=${this.loading ? ifDefined(this.loading) : false}
        getButtonHtml(loadingStateParam) {
            return $ `
            <button 
                class=${(this.type == "add") ? "taco-add-button" : (this.type == "close" ? "taco-close-button" : "")}
                type="button"
                tabindex="0"
                
                buttonType="${l$1(this.type)}"
                ?disabled=${this.disabled}
                size=${l$1(this.size)}
                variant=${l$1(this.variant)}
                mode=${l$1(this.mode)}
                bold=${l$1(this.bold)}
                aria-label=${l$1(this.ariaLabel)}
                ?loading=${this.loading}

                @mouseover="${this.over}"
                @mouseout="${this.out}"
            >
                ${this.type == "add" ? this.getAddButton(this.variant, this.size) : ""}
                ${this.type == "close" ? this.getCloseButton(this.variant, this.size) : ""}
                <span>${this.value}</span>
                ${this.loading ? this.getTacoSpinner() : ""}
            </button>
        `;
        }
        over() {
            this._isHovered = true;
        }
        out() {
            this._isHovered = false;
        }
        getAddButton(TypeParam, SizeParam) {
            return $ `
            <taco-icon 
            class=${TypeParam == "inline" ? "inline-icon" : "icon"}  
            size=${(SizeParam == "md" && TypeParam == "inline") ? "xsm" : (SizeParam == "sm" && TypeParam == "inline") ? "xsm" : (SizeParam == "sm") ? "sm" : "md"} 
            fill="${(this._isHovered) ? 'blue-700' : (TypeParam == "inline" ? (this.disabled ? 'grey-500' : 'blue-700') : (this.disabled ? 'grey-500' : 'grey-900'))}"  
            icon="ic-plus-isolated">
            </taco-icon>
            `;
        }
        getCloseButton(TypeParam, SizeParam) {
            return $ `
            <taco-icon 
            class=${TypeParam == "contained" ? "contained-close" : "close"}
            size=${(TypeParam == "contained" && SizeParam == "sm") ? "xsm" : (TypeParam == "contained" && SizeParam == "md") ? "sm" : (TypeParam == "contained" && SizeParam == "lg") ? "md" : SizeParam}
            fill="${(this._isHovered) ? 'blue-700' : "grey-900"}"
            icon="ic-close-isolated">
        
        </taco-icon>
        `;
        }
        getIconHtml() {
            if (this.mode == "dark") {
                return $ ` <taco-icon class="svg-icon" icon="ic-dot" fill="white-100" size="xsm"></taco-icon> `;
            }
            else if (this.disabled) {
                return $ ` <taco-icon class="svg-icon" icon="ic-dot" fill="grey-500" size="xsm"></taco-icon> `;
            }
            else {
                return $ ` <taco-icon class="svg-icon" icon="ic-dot" fill="blue-700" size="xsm"></taco-icon> `;
            }
        }
        //rendering out the button with conditional properties in place
        //ifDefined = Sets an attribute if the value is defined and removes the attribute if undefined.
        render() {
            return $ `
            <div
                class="buttonContainer"
                icon=${l$1(this.icon)}
                ?disabled=${this.disabled}
                variant=${l$1(this.variant)}
                mode=${l$1(this.mode)}
                @click=${this.loading ? null : this.dispatchClickEvent}
                @keydown=${(e) => { e.key == "Enter" ? this.loading ? null : this.dispatchClickEvent : null; }}
                size=${l$1(this.size)}
            >
                ${this.icon == "left" ? this.getIconHtml() : ""} ${this.getButtonHtml(this.loading)} ${this.icon == "right" ? this.getIconHtml() : ""}
            </div>
        `;
        }
    };
    //calling the scss file
    TacoButton.styles = css_248z$9;
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoButton.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoButton.prototype, "bold", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoButton.prototype, "loading", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoButton.prototype, "contained", void 0);
    __decorate([
        e$4({ type: Boolean, state: true })
    ], TacoButton.prototype, "_isHovered", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoButton.prototype, "value", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoButton.prototype, "type", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoButton.prototype, "mode", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoButton.prototype, "size", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoButton.prototype, "variant", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoButton.prototype, "ariaLabel", void 0);
    __decorate([
        e$4({ type: String, reflect: true })
    ], TacoButton.prototype, "link", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoButton.prototype, "icon", void 0);
    TacoButton = __decorate([
        n$3("taco-button")
    ], TacoButton);

    var css_248z$8 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.article-container {
  margin: 0px;
}
.article-container p {
  margin: 0px;
}
.article-container[center] {
  text-align: center;
}
.article-container[disabled] {
  color: #828282;
  text-decoration: none;
}

.article-headline[size=sm] {
  font: normal normal 400 14px / 16px proxima-nova;
}
.article-headline[size=md] {
  font: normal normal 400 18px / 24px proxima-nova;
}
.article-headline[size=lg] {
  font: normal normal 400 24px / 32px proxima-nova;
}
.article-headline[highlight] {
  font-weight: 700;
}

.article-desc {
  font-size: 12px;
  color: #737373;
}
.article-desc[size=sm] {
  font: normal normal 400 12px / 16px proxima-nova;
}
.article-desc[size=sm][sameSize] {
  font: normal normal 400 14px / 16px proxima-nova;
}
.article-desc[size=md] {
  font: normal normal 400 14px / 16px proxima-nova;
}
.article-desc[size=md][sameSize] {
  font: normal normal 400 18px / 24px proxima-nova;
}
.article-desc[size=lg] {
  font: normal normal 400 18px / 24px proxima-nova;
}
.article-desc[size=lg][sameSize] {
  font: normal normal 400 24px / 32px proxima-nova;
}

.article-headline-link {
  font-size: 14px;
  color: #027baf;
}
.article-headline-link[size=md] {
  font-size: 18px;
}
.article-headline-link[size=lg] {
  font-size: 24px;
}`;

    let TacoArticle = class TacoArticle extends s$1 {
        constructor() {
            super(...arguments);
            //setting property for text in article component
            // headline text of article
            this.headline = "Headline here";
            // description text of article
            this.desc = "Description here";
            // href link of the component
            this.href = "";
            //setting property for sizes - article has 3 (sm, md, lg)
            this.size = "";
            //setting property for alignment
            // if the article text is center aligned
            this.center = false;
            // if the headline & description are the same size
            this.sameSize = false;
            // if the article headline is bolded
            this.highlight = false;
            // if the component is disabled variant 
            this.disabled = false;
            // if the article should have a link as the headline
            this.isLink = false;
            // Variant of the article -- primary | disabled
            this.variant = "";
            //boolean property if the article is reversed (description then headline)
            this.reversed = false;
            // boolean property indicating whether the article is only the headline text.
            this.isolated = false;
        }
        render() {
            if (this.isLink == true && this.isolated == true) {
                return $ `
                <div class="article-container" ?center=${this.center} ?disabled=${this.disabled}>
                    <taco-button type="link" size=${this.size} value=${this.headline} mode="light" variant=${this.variant} ?disabled=${this.disabled} ?bold=${this.highlight}></taco-button>
                </div>
            `;
            }
            else if (this.reversed == true && this.isLink == true) {
                return $ `
                <div class="article-container" ?center=${this.center} ?disabled=${this.disabled}>
                    <p class="article-desc" size=${this.size} ?sameSize=${this.sameSize}>${this.desc}</p>
                    <taco-button type="link" size=${this.size} value=${this.headline} mode="light" variant=${this.variant} ?disabled=${this.disabled} ?bold=${this.highlight}></taco-button>
                </div>
            `;
            }
            else if (this.isLink == true) {
                return $ `
                <div class="article-container" ?center=${this.center} ?disabled=${this.disabled}>
                    <taco-button type="link" size=${this.size} value=${this.headline} mode="light" variant=${this.variant} ?disabled=${this.disabled} ?bold=${this.highlight}></taco-button>
                    <p class="article-desc" size=${this.size} ?sameSize=${this.sameSize}>${this.desc}</p>
                </div>
            `;
            }
            else if (this.reversed === true) {
                return $ `
                <div class="article-container" ?center=${this.center} ?disabled=${this.disabled}>
                    <p class="article-desc" size=${this.size} ?sameSize=${this.sameSize}>${this.desc}</p>
                    <p class="article-headline" size=${this.size} ?highlight=${this.highlight}>${this.headline}</p>
                </div>
            `;
            }
            else if (this.isolated == true) {
                return $ `
                <div class="article-container" ?center=${this.center} ?disabled=${this.disabled}>
                    <p class="article-headline" size=${this.size} ?highlight=${this.highlight}>${this.headline}</p>
                </div>
            `;
            }
            else {
                return $ `
                <div class="article-container" ?center=${this.center} ?disabled=${this.disabled}>
                    <p class="article-headline" size=${this.size} ?highlight=${this.highlight}>${this.headline}</p>
                    <p class="article-desc" size=${this.size} ?sameSize=${this.sameSize}>${this.desc}</p>
                </div>
            `;
            }
        }
    };
    TacoArticle.styles = css_248z$8;
    __decorate([
        e$4({ type: String })
    ], TacoArticle.prototype, "headline", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoArticle.prototype, "desc", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoArticle.prototype, "href", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoArticle.prototype, "size", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TacoArticle.prototype, "center", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TacoArticle.prototype, "sameSize", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TacoArticle.prototype, "highlight", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TacoArticle.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoArticle.prototype, "isLink", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoArticle.prototype, "variant", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoArticle.prototype, "reversed", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoArticle.prototype, "isolated", void 0);
    TacoArticle = __decorate([
        n$3("taco-article")
    ], TacoArticle);

    var css_248z$7 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.panel-container {
  border: 1px solid #aeaeae;
  border-top: 8px solid #26afdf;
  border-radius: 4px 4px 0px 0px;
}

.panel-header {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #cccccc;
}

.panel-line {
  margin: 16px;
  width: 1px;
  height: 32px;
  background-color: #737373;
}

.panel-title {
  margin-top: 16px;
  margin-left: 24px;
  font-family: proxima-nova;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
}

.panel-subtitle {
  font-family: proxima-nova;
  color: #737373;
  font-size: 18px;
  line-height: 32px;
}

.panel-button button {
  font-family: proxima-nova;
  position: static;
  background-color: #fafafa;
  border: 1px solid #cccccc;
  width: 1312px;
  height: 32px;
}

.panel-button button:active {
  transform: translateY(4px);
}`;

    let TacoPanel = class TacoPanel extends s$1 {
        constructor() {
            super(...arguments);
            this.title = "Title here";
            this.subTitle = "Subtitle here";
        }
        render() {
            return $ `
            <div class="panel-container">
                <div class="panel-header">
                    <p class="panel-title">${this.title}</p>
                    <div class="panel-line"></div>
                    <p class="panel-subtitle">${this.subTitle}</p>
                </div>
                <div class="panel-slot">
                    <slot name="testSlot"></slot>
                </div>
                <div class="panel-button">
                    <slot name="btnSlot" id="panelBtn"></slot>
                    <!-- <button id="panelBtn">View All Students</button> -->
                </div>
            </div>
        `;
        }
    };
    TacoPanel.styles = css_248z$7;
    __decorate([
        e$4({ type: String })
    ], TacoPanel.prototype, "title", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoPanel.prototype, "subTitle", void 0);
    TacoPanel = __decorate([
        n$3("taco-panel")
    ], TacoPanel);

    var css_248z$6 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.tds-assistive-text {
  visibility: hidden;
  position: absolute;
  top: 50%;
}

lottie-player {
  width: 24px;
  height: 24px;
}

div {
  /* variation for medium size */
  /* variation for large size */
}
div span {
  position: relative;
}
div[loading=true] {
  /* variation for medium size */
  /* variation for large size */
}
div[loading=true][class=spinner-sm] lottie-player {
  position: absolute;
  left: 50%;
  bottom: 15%;
  transform: translateX(-50%);
  width: auto;
  height: 24px;
}
div[loading=true][class=spinner-md] lottie-player {
  position: absolute;
  left: 50%;
  bottom: 21%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
}
div[loading=true][class=spinner-lg] lottie-player {
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
}
div[class=spinner-sm] lottie-player {
  width: auto;
  height: 24px;
}
div[class=spinner-md] lottie-player {
  width: 40px;
  height: 40px;
}
div[class=spinner-lg] lottie-player {
  width: 64px;
  height: 64px;
}`;

    let TacoSpinner = class TacoSpinner extends s$1 {
        constructor() {
            super();
            // Boolean to indicate whether the spinner is in a loading state, used when with the "taco-button" component
            this.loading = false;
            // Boolean to indicate whether the spinner is being used in a component that is focusable
            this.hasFocusableParent = false;
            // String to determin the class of the component
            //properties: spinner-sm / spinner-md / spinner-lg
            this.class = "";
            // String to set the assessibility label of the Spinner
            this.accessibilityLabel = "Loading";
        }
        //this is a lifecycle event similar to compoundDidMount, once the component loads onto the DOM, it will call the checkAria function to dynamically update aria-labels based on the class being used to define the styling of the button
        connectedCallback() {
            super.connectedCallback();
        }
        //rendering out the button with conditional properties in place
        //ifDefined = Sets an attribute if the value is defined and removes the attribute if undefined.
        render() {
            if (this.loading) {
                // If the spinner is being used in the loading state of a button render this html
                return $ `
                <div class=${l$1(this.class)} loading=${l$1(this.loading)} aria-live="polite">
                    <span>
                        <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                    </span>
                    <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/XelloLoader24.json" speed="1" loop autoplay></lottie-player>
                </div>
            `;
            }
            else if (this.class == "spinner-md") {
                // If the spinner is not being used in a button and has the class "spinner-md"
                return this.hasFocusableParent
                    ? // If the spinner is being used within a component that is focusable render below
                        $ `
                      <div class=${l$1(this.class)} aria-live="polite">
                          <span>
                              <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                          </span>
                          <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/XelloLoader40.json" speed="1" loop autoplay></lottie-player>
                      </div>
                  `
                    : // If the spinner is NOT being used within a component that is focusable render below
                        $ `
                      <div class=${l$1(this.class)} aria-live="polite">
                          <span role="status">
                              <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                          </span>
                          <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/XelloLoader40.json" speed="1" loop autoplay></lottie-player>
                      </div>
                  `;
            }
            else if (this.class == "spinner-lg") {
                // If the spinner is not being used in a button and has the class "spinner-lg"
                return this.hasFocusableParent
                    ? // If the spinner is being used within a component that is focusable render below
                        $ `
                      <div class=${l$1(this.class)} aria-live="polite">
                          <span>
                              <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                          </span>
                          <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/XelloLoader64.json" speed="1" loop autoplay></lottie-player>
                      </div>
                  `
                    : // If the spinner is NOT being used within a component that is focusable render below
                        $ `
                      <div class=${l$1(this.class)} aria-live="polite">
                          <span role="status">
                              <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                          </span>
                          <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/XelloLoader64.json" speed="1" loop autoplay></lottie-player>
                      </div>
                  `;
            }
            else if (this.class == "spinner-sm") {
                // If the spinner is not being used in a button and has the class "spinner-sm"
                return this.hasFocusableParent
                    ? // If the spinner is being used within a component that is focusable render below
                        $ `
                      <div class=${l$1(this.class)} aria-live="polite">
                          <span>
                              <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                          </span>
                          <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/XelloLoader24.json" speed="1" loop autoplay></lottie-player>
                      </div>
                  `
                    : // If the spinner is NOT being used within a component that is focusable render below
                        $ `
                      <div class=${l$1(this.class)} aria-live="polite">
                          <span role="status">
                              <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                          </span>
                          <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/XelloLoader24.json" speed="1" loop autoplay></lottie-player>
                      </div>
                  `;
            }
            else {
                return $ `
                <div class=${l$1(this.class)} aria-live="polite">
                    <span role="status">
                        <span class="tds-assistive-text">${this.accessibilityLabel}</span>
                    </span>
                    <lottie-player slot="spinner" src="https://cc3cdn.blob.core.windows.net/design-system/latest/taco-animations/spinner.json" speed="1" loop autoplay></lottie-player>
                </div>
            `;
            }
        }
    };
    //calling the scss file
    TacoSpinner.styles = css_248z$6;
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoSpinner.prototype, "loading", void 0);
    __decorate([
        e$4({ type: Boolean, reflect: true })
    ], TacoSpinner.prototype, "hasFocusableParent", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoSpinner.prototype, "class", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoSpinner.prototype, "accessibilityLabel", void 0);
    TacoSpinner = __decorate([
        n$3("taco-spinner")
    ], TacoSpinner);

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const {H:i$1}=R,v=(o,i)=>{var t,n;return void 0===i?void 0!==(null===(t=o)||void 0===t?void 0:t._$litType$):(null===(n=o)||void 0===n?void 0:n._$litType$)===i},r$1=o=>void 0===o.strings,e$3=()=>document.createComment(""),u=(o,t,n)=>{var v;const l=o._$AA.parentNode,d=void 0===t?o._$AB:t._$AA;if(void 0===n){const t=l.insertBefore(e$3(),d),v=l.insertBefore(e$3(),d);n=new i$1(t,v,o,o.options);}else {const i=n._$AB.nextSibling,t=n._$AM,r=t!==o;if(r){let i;null===(v=n._$AQ)||void 0===v||v.call(n,o),n._$AM=o,void 0!==n._$AP&&(i=o._$AU)!==t._$AU&&n._$AP(i);}if(i!==d||r){let o=n._$AA;for(;o!==i;){const i=o.nextSibling;l.insertBefore(o,d),o=i;}}}return n},f={},s=(o,i=f)=>o._$AH=i,a=o=>o._$AH,p=o=>{o._$AR();};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e$1=(i,t)=>{var s,o;const n=i._$AN;if(void 0===n)return !1;for(const i of n)null===(o=(s=i)._$AO)||void 0===o||o.call(s,t,!1),e$1(i,t);return !0},o$1=i=>{let t,s;do{if(void 0===(t=i._$AM))break;s=t._$AN,s.delete(i),i=t;}while(0===(null==s?void 0:s.size))},n$1=i=>{for(let t;t=i._$AM;i=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(i))break;s.add(i),l(t);}};function r(i){void 0!==this._$AN?(o$1(this),this._$AM=i,n$1(this)):this._$AM=i;}function h$1(i,t=!1,s=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)e$1(n[i],!1),o$1(n[i]);else null!=n&&(e$1(n,!1),o$1(n));else e$1(this,i);}const l=i=>{var t$1,e,o,n;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h$1),null!==(e=(n=i)._$AQ)&&void 0!==e||(n._$AQ=r));};class d$1 extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,s){super._$AT(i,t,s),n$1(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var s,n;i!==this.isConnected&&(this.isConnected=i,i?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(e$1(this,i),o$1(this));}setValue(t){if(r$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=()=>new o;class o{}const h=new WeakMap,n=e$2(class extends d$1{render(i){return w}update(i,[s]){var e;const o=s!==this.U;return o&&void 0!==this.U&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.U=s,this.ht=null===(e=i.options)||void 0===e?void 0:e.host,this.ot(this.lt=i.element)),w}ot(t){"function"==typeof this.U?(void 0!==h.get(this.U)&&this.U.call(this.ht,void 0),h.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)):this.U.value=t;}get rt(){var t;return "function"==typeof this.U?h.get(this.U):null===(t=this.U)||void 0===t?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const d=e$2(class extends i{constructor(t){super(t),this.tt=new WeakMap;}render(t){return [t]}update(s$1,[e]){if(v(this.it)&&(!v(e)||this.it.strings!==e.strings)){const e=a(s$1).pop();let o=this.tt.get(this.it.strings);if(void 0===o){const s=document.createDocumentFragment();o=x(w,s),o.setConnected(!1),this.tt.set(this.it.strings,o);}s(o,[e]),u(o,void 0,e);}if(v(e)){if(!v(this.it)||this.it.strings!==e.strings){const t=this.tt.get(e.strings);if(void 0!==t){const i=a(t).pop();p(s$1),u(s$1,void 0,i),s(s$1,[i]);}}this.it=e;}else this.it=void 0;return this.render(e)}});

    var css_248z$5 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
* {
  pointer-events: none;
}

button, ul {
  pointer-events: all;
}

.taco-dropdown-container {
  position: relative;
  display: inline-block;
}

.taco-dropdown-container--full {
  width: 100%;
}

.taco-button {
  cursor: pointer;
  display: inline-flex;
  flex: auto;
  width: inherit;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #fafafa;
}

.taco-button[disabled] {
  cursor: default;
  border-color: #e1e1e1;
}
.taco-button[disabled] .taco-button__label {
  color: #828282;
}
.taco-button[disabled] .taco-button__chevron {
  filter: brightness(2);
}
.taco-button[disabled]:hover .taco-button__label {
  color: #828282;
}

.item-icon--disabled {
  filter: grayscale(1) opacity(0.5);
}

.taco-button--open {
  background-color: #ffffff;
}

.taco-button:hover > .taco-button__label {
  color: #027baf;
}

.taco-button__label {
  flex-grow: inherit;
  text-align: left;
  font-family: proxima-nova;
  font-weight: 400;
  font-size: 14px;
  color: #484848;
  margin-right: 8px;
}

.taco-button__label--open {
  color: #027baf;
}

.taco-meatball__chevron {
  display: flex;
  align-items: center;
  justify-content: center;
}

.taco-meatball__chevron--hidden {
  visibility: hidden;
  position: absolute;
}

.taco-meatball {
  display: flex;
  padding: 8px;
  border-radius: 4px;
}

.taco-meatball:hover {
  cursor: pointer;
}

.taco-meatball[disabled]:hover {
  cursor: default;
}

.taco-meatball--default {
  border: none;
  outline: 1px solid #cccccc;
  outline-offset: -1px;
  background-color: #fafafa;
}

.taco-meatball--inline {
  border: none;
  outline: 1px solid transparent;
  outline-offset: -1px;
  background-color: #ffffff;
}

.taco-meatball--open {
  border: none;
  outline: 1px solid #cccccc;
  outline-offset: -1px;
  background-color: #ffffff;
}

.taco-dropdown-list--show {
  visibility: visible;
}

.taco-dropdown-list {
  display: none;
  width: inherit;
  list-style-type: none;
  margin: 0;
  flex-direction: column;
  position: absolute;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  margin-top: 2px;
  overflow-y: auto;
  z-index: 100;
}

.taco-dropdown-list--visible {
  display: flex;
}

.taco-dropdown-listItem {
  display: flex;
}
.taco-dropdown-listItem:focus-visible, .taco-dropdown-listItem :focus {
  outline: -webkit-focus-ring-color auto 1px;
  outline-color: -webkit-focus-ring-color;
  outline-style: auto;
  outline-width: 1px;
}

.button-label-container {
  display: flex;
  align-items: center;
}

.taco-dropdown-listButton {
  font-family: inherit;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 200px;
  justify-content: space-between;
  border: none;
  background: #ffffff;
  padding: 12px 16px;
  cursor: pointer;
  text-align: left;
}

.taco-dropdown-listButton:disabled {
  cursor: default;
  background-color: #ffffff;
}
.taco-dropdown-listButton:disabled:hover {
  background-color: #ffffff;
}
.taco-dropdown-listButton:disabled .taco-dropdown-listItem--label {
  color: #828282;
  text-decoration: none;
}

.taco-dropdown-listButton:hover, .taco-dropdown-listButton--hovered {
  background-color: #fafafa;
}
.taco-dropdown-listButton:hover .taco-dropdown-listItem--label, .taco-dropdown-listButton--hovered .taco-dropdown-listItem--label {
  text-decoration: underline;
  color: #027baf;
}

.taco-dropdown-listButton--selected .taco-dropdown-listItem--label {
  font-weight: 700;
  color: #484848;
}

.taco-dropdown-listItem--label {
  min-width: 120px;
  font-family: proxima-nova;
  font-weight: 400;
  font-size: 14px;
  color: #484848;
}

.svg-checked {
  width: 100%;
  display: none;
}

.svg-checked--visible {
  display: block;
}

.selected-item {
  display: inline-flex;
  margin-left: 8px;
}

.image-icon {
  width: 20px;
  margin-right: 8px;
}

.item-icon {
  margin-right: 8px;
}

.drop-left {
  right: 0;
}`;

    var TacoIconType;
    (function (TacoIconType) {
        TacoIconType["IMAGE"] = "image";
        TacoIconType["ICON"] = "icon";
    })(TacoIconType || (TacoIconType = {}));

    var TacoDropdownType;
    (function (TacoDropdownType) {
        TacoDropdownType["SELECT"] = "select";
        TacoDropdownType["INLINE_MEATBALL"] = "inline-meatball";
        TacoDropdownType["MEATBALL"] = "meatball";
    })(TacoDropdownType || (TacoDropdownType = {}));

    var TacodropdownWidth;
    (function (TacodropdownWidth) {
        TacodropdownWidth["AUTO"] = "auto";
        TacodropdownWidth["FULL"] = "full";
    })(TacodropdownWidth || (TacodropdownWidth = {}));

    let Tacodropdown = class Tacodropdown extends s$1 {
        // Contructor for the component, will do any actions while the component is being constructed
        constructor() {
            super();
            this.listRef = e();
            this.dropdownBtnRef = e();
            this.width = TacodropdownWidth.AUTO;
            this.selectedIndex = 0;
            this.uniqueId = new Date().getTime();
            /**
             * The label used for the select dropdown (when isMeatball is FALSE) .
             * This will also be updated when an item is selected, if liveLabel is TRUE
             * */
            this.label = "";
            /**
             * ID property that will be applied to the parent button level of the component (e.g meatball/select button)
             * This will automatically be attributed to the "aria-labelledby" prop in the ul element of the menu, as per W3 accessibilty recommendations
             * */
            this.ariaID = "";
            /**
             * Maps to the disabled state of the dropdown
             * */
            this.disabled = false;
            /**
             * Marks selected item with a checkmark
             * */
            this.highlightSelected = false;
            /**
             * Updates the option label with that of the selected item
             * */
            this.liveLabel = false;
            /**
             * The type of dropdown:
             * 'select': Is the option select dropdown
             * 'meatball': is the default meatball
             * 'inline-meatball': Shows the inline style for the meatball menu (no border)
             * */
            this.type = TacoDropdownType.SELECT;
            /**
             * Sets the max height for the dropdown
             * */
            this.maxHeight = '264px';
            this.list = [
                {
                    label: 'foo',
                    value: 'foojkj',
                    disabled: false,
                },
                {
                    label: 'foo 1',
                    value: 'foo jkj1',
                    disabled: false
                },
                {
                    label: 'foo 2kk',
                    value: 'foo ff2',
                    disabled: false
                },
                {
                    label: 'foo 3jkk',
                    value: 'foo 3dhjhd',
                    disabled: false
                },
                {
                    label: 'foojkj',
                    value: 'foodd',
                    disabled: false,
                },
                {
                    label: 'foo aaa1',
                    value: 'foo 1sdfg',
                    disabled: false
                },
                {
                    label: 'foo dfd2',
                    value: 'foo 2',
                    disabled: false
                },
                {
                    label: 'foo dfd3',
                    value: 'foo 3',
                    disabled: false
                },
                {
                    label: 'foodfd',
                    value: 'foodf',
                    disabled: false,
                },
                {
                    label: 'foojk 1d',
                    value: 'foo 1a',
                    disabled: false
                },
                {
                    label: 'foo adjkf2',
                    value: 'foo 2adf',
                    disabled: false
                },
                {
                    label: 'foo dff3',
                    value: 'foo 3dfdf',
                    disabled: false
                },
                {
                    label: 'foodjjf',
                    value: 'foffao',
                    disabled: false,
                },
                {
                    label: 'foo 1fdf',
                    value: 'foo 1afaaa',
                    disabled: false
                },
                {
                    label: 'foo 2adg',
                    value: 'foo 2hhhgh',
                    disabled: false
                },
                {
                    label: 'foo 3ghgd',
                    value: 'foo 3dgjdj',
                    disabled: false
                }
            ];
            // CDN used Default to PROD but leave as optional
            this.cdn = 'https://cc3cdn.blob.core.windows.net/';
            /** private property that is updated on 'mouseover' in order to apply hover styles */
            this._isHovered = false;
            /**
             * Maps to the open state of the dropdown
             * */
            this._isOpen = false;
            this.windowClickHandler = (e) => {
                const target = e.target;
                if (this._isOpen) {
                    if (target.localName !== "taco-dropdown") {
                        return this.toggle();
                    }
                    else if (target.ariaID && target.ariaID !== this.ariaID || target.uniqueId !== this.uniqueId) {
                        return this.toggle();
                    }
                }
            };
        }
        connectedCallback() {
            super.connectedCallback();
            window.addEventListener("click", this.windowClickHandler);
        }
        disconnectedCallback() {
            window.removeEventListener("click", this.windowClickHandler);
            super.disconnectedCallback();
        }
        async itemAction(e, item) {
            if (e instanceof PointerEvent || e instanceof MouseEvent || e.key === 'Enter') {
                const index = this.list.findIndex(_item => item.value === _item.value);
                this.selectedIndex = index;
                this.selectItem(item);
                await this.updateComplete;
                return;
            }
        }
        async itemHover(e) {
            e.preventDefault();
            const hovered = this.listRef.value.querySelector('.taco-dropdown-listButton--hovered');
            if (hovered) {
                hovered.classList.remove('taco-dropdown-listButton--hovered');
            }
        }
        selectItem(item) {
            this.list = this.list.map((listItem, i) => {
                delete listItem.selected;
                if ((this.highlightSelected || this.liveLabel) && listItem.label === item.label) {
                    listItem.selected = true;
                }
                return listItem;
            });
            const options = {
                detail: item.value,
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('select', options));
            this._isOpen = false;
        }
        getCheckedIcon(item) {
            return $ `${d($ `
            <div class="selected-item">
              <taco-icon 
                class="svg-checked ${this.highlightSelected && item.selected ? "svg-checked--visible" : ""}" 
                fill="black-900" 
                size="xsm" 
                icon="ic-checkmark-isolated" 
                cdn="${this.cdn}">
              </taco-icon>
            </div>
        `)}`;
        }
        async toggle(e) {
            if (e) {
                e.preventDefault();
            }
            this._isOpen = !this._isOpen;
        }
        async dropdownClickAction(e) {
            this.toggle(e);
            await this.updateComplete;
            // Without highSelected, we assume next item is 0 index, otherwise find the current selected item
            if (!this.highlightSelected && !this.liveLabel) {
                this.selectedIndex = 0;
            }
            const val = this.listRef.value;
            if (this._isOpen) {
                if (val) {
                    val.addEventListener('mouseenter', (e) => this.itemHover(e), { once: true });
                }
            }
            else {
                val.removeEventListener('mouseenter', (e) => this.itemHover(e));
            }
        }
        async dropdownBtnAction(ev) {
            // Without highSelected, we assume next item is 0 index, otherwise find the current selected item
            if (!this.highlightSelected && !this.liveLabel) {
                this.selectedIndex = 0;
            }
            if (ev instanceof KeyboardEvent) {
                switch (ev.key) {
                    case 'Enter': {
                        // Enter: If the focus is on the button, expands the listbox and places focus on the currently selected option in the list.
                        await this.updateComplete;
                        // focus on list
                        const val = this.listRef.value;
                        if (val) {
                            val.focus();
                        }
                        return;
                    }
                    case 'ArrowDown': {
                        // Down: If the listbox is collapsed, also expands the list. Moves focus to and selects the next option. 
                        if (!this._isOpen) {
                            this.toggle();
                            await this.updateComplete;
                            // focus on list
                            const val = this.listRef.value;
                            if (val) {
                                val.focus();
                            }
                            // scroll into view
                            const activeEl = this.shadowRoot.querySelector(`#list-item-${this.uniqueId}--${this.selectedIndex}`);
                            activeEl.scrollIntoView({ block: 'center' });
                        }
                        // highlight next item
                        const nextEl = this.shadowRoot.querySelector(`#list-item-${this.uniqueId}--${this.selectedIndex + 1}`);
                        if (nextEl) {
                            this.selectedIndex = this.selectedIndex + 1;
                        }
                        return;
                    }
                    case 'ArrowUp': {
                        if (!this._isOpen) {
                            this.toggle();
                        }
                        await this.updateComplete;
                        // focus on list
                        const val = this.listRef.value;
                        if (val) {
                            val.focus();
                        }
                        // scroll into view
                        const activeEl = this.shadowRoot.querySelector(`#list-item-${this.uniqueId}--${this.selectedIndex}`);
                        activeEl.scrollIntoView({ block: 'center' });
                        // highlight next item
                        const prevEl = this.shadowRoot.querySelector(`#list-item-${this.uniqueId}--${this.selectedIndex - 1}`);
                        if (prevEl) {
                            this.selectedIndex = this.selectedIndex - 1;
                        }
                        return;
                    }
                }
            }
        }
        async listAction(ev) {
            if (this._isOpen) {
                switch (ev.key) {
                    case 'ArrowDown':
                        {
                            await this.updateComplete;
                            // highlight next item
                            const nextEl = this.shadowRoot.querySelector(`#list-item-${this.uniqueId}--${this.selectedIndex + 1}`);
                            if (nextEl) {
                                this.selectedIndex = this.selectedIndex + 1;
                                nextEl.scrollIntoView({ block: 'center' });
                                await this.updateComplete;
                            }
                            return;
                        }
                    case 'ArrowUp':
                        {
                            await this.updateComplete;
                            // highlight next item
                            const prevEl = this.shadowRoot.querySelector(`#list-item-${this.uniqueId}--${this.selectedIndex - 1}`);
                            if (prevEl) {
                                this.selectedIndex = this.selectedIndex - 1;
                                prevEl.scrollIntoView({ block: 'center' });
                                await this.updateComplete;
                            }
                            return;
                        }
                    case 'Enter':
                        {
                            ev.preventDefault();
                            await this.updateComplete;
                            // get selected item
                            const item = this.list[this.selectedIndex];
                            // emit selected action
                            this.selectItem(item);
                            // refocus on dropdown btn
                            const dropdownBtn = this.dropdownBtnRef.value;
                            if (dropdownBtn) {
                                dropdownBtn.focus();
                            }
                            return;
                        }
                    case 'Tab':
                    case 'Escape':
                        {
                            ev.preventDefault();
                            await this.updateComplete;
                            // only emit an event if highselected/livelabel is true 
                            if (this.highlightSelected || this.liveLabel) {
                                // get selected item
                                const item = this.list[this.selectedIndex];
                                // emit selected action
                                this.selectItem(item);
                            }
                            else {
                                this.toggle();
                            }
                            // refocus on dropdown btn
                            if (ev.key === 'Escape') {
                                const dropdownBtn = this.dropdownBtnRef.value;
                                if (dropdownBtn) {
                                    dropdownBtn.focus();
                                }
                                return;
                            }
                        }
                }
            }
        }
        over() {
            this._isHovered = true;
        }
        out() {
            this._isHovered = false;
        }
        showMenu() {
            if (this.list) {
                return $ `
              <style>
                  .dropdown-height {
                      max-height: ${this.maxHeight}
                  }
              </style>
              <ul ${n(this.listRef)} 
                @keydown="${(e) => this.listAction(e)}" 
                role="listbox" 
                aria-activedescendant="${this.uniqueId}--${this.selectedIndex}" 
                id="taco-dropdown-list" 
                tabindex="0" 
                class="taco-dropdown-list ${this._isOpen ? "taco-dropdown-list--visible" : ""} dropdown-height ${this.direction === 'left' ? 'drop-left' : 'drop-right'}" aria-labelledby=${this.ariaID ? this.ariaID : "taco-dropdown-button"}>
                  ${this.list.map((item, index) => $ `
                          <li 
                            class="taco-dropdown-listItem" 
                            role="option" 
                            aria-selected="${this._isOpen && index === this.selectedIndex ? 'true' : 'false'}" 
                            id="list-item-${this.uniqueId}--${index}">
                              <button
                                  key="taco-dropdown-button"
                                  type="button"
                                  tabindex="-1"
                                  ?disabled="${item.disabled}"
                                  class="taco-dropdown-listButton 
                                      ${this.highlightSelected && item.selected ? "taco-dropdown-listButton--selected" : ""} 
                                      ${this._isOpen && index === this.selectedIndex ? "taco-dropdown-listButton--hovered" : ""}"
                                  @click="${(e) => this.itemAction(e, item)}"
                                  @keydown="${(e) => this.itemAction(e, item)}">
                                  <div class="button-label-container">
                                      ${this.getLabelIcon(item)}
                                      <span class="taco-dropdown-listItem--label">${item.label}</span>
                                  </div>
                                  ${this.getCheckedIcon(item)}
                              </button>
                          </li>
                      `)}
              </ul>
          `;
            }
            throw new Error('this.list is not defined');
        }
        showDropdownButton(type) {
            switch (type) {
                case TacoDropdownType.MEATBALL: {
                    return $ ` <button
            ${n(this.dropdownBtnRef)}
            type="button"
            key="taco-dropdown-button"
            id=${this.ariaID ? this.ariaID : "taco-dropdown-button"}
            aria-haspopup="listbox"
            aria-controls="taco-dropdown-list"
            aria-expanded=${this._isOpen ? true : false}
            ?disabled=${this.disabled}
            class="taco-meatball taco-meatball--default ${this._isOpen ? "taco-meatball--open" : ""}"
            @mouseover="${this.over}"
            @mouseout="${this.out}"
            @keyup="${this.dropdownBtnAction}"
            @click="${this.dropdownClickAction}">
              <taco-icon 
                class="svg-icon taco-meatball__chevron" 
                fill="${(this._isHovered || this._isOpen) ? 'blue-700' :
                    this.disabled ? 'grey-500' : 'gray-900'}" 
                size="lg" 
                icon="ic-meatballs" 
                cdn="${this.cdn}">
              </taco-icon>
        </button>
        ${this.showMenu()}`;
                }
                case TacoDropdownType.INLINE_MEATBALL: {
                    return $ ` <button
            ${n(this.dropdownBtnRef)}
            type="button"
            key="taco-dropdown-button"
            id=${this.ariaID ? this.ariaID : "taco-dropdown-button"}
            aria-haspopup="listbox"
            aria-controls="taco-dropdown-list"
            aria-expanded=${this._isOpen ? true : false}
            ?disabled=${this.disabled}
            class="taco-meatball taco-meatball--inline ${this._isOpen ? "taco-meatball--open" : ""}"
            @mouseover="${this.over}"
            @mouseout="${this.out}"
            @keyup="${this.dropdownBtnAction}"
            @click="${this.dropdownClickAction}">
              <taco-icon 
                class="svg-icon taco-meatball__chevron" 
                fill="${(this._isHovered || this._isOpen) ? 'blue-700' :
                    this.disabled ? 'grey-500' : 'gray-900'}" 
                size="lg" 
                icon="ic-meatballs" 
                cdn="${this.cdn}">
              </taco-icon>
        </button>
        ${this.showMenu()}`;
                }
                case TacoDropdownType.SELECT: {
                    // Use the selected item's label, if liveLabel is enabled.
                    let label = this.label;
                    if (this.liveLabel) {
                        const selectedItem = this.list.find(v => !!v.selected) || this.list[this.selectedIndex];
                        if (selectedItem) {
                            label = selectedItem.label;
                        }
                    }
                    // ${ref(this.inputChanged)}
                    return $ `
            <button 
            ${n(this.dropdownBtnRef)}
            type="button" 
            key="taco-dropdown-button"
            id=${this.ariaID ? this.ariaID : "taco-dropdown-button"} 
            aria-haspopup="listbox"
            aria-controls="taco-dropdown-list"
            aria-expanded=${this._isOpen ? true : false}
            ?disabled=${this.disabled} 
            class="taco-button ${this._isOpen ? "taco-button--open" : ""}" 
            @keyup="${this.dropdownBtnAction}"
            @click="${this.dropdownClickAction}">
              <div 
              class="taco-button__label ${this._isOpen ? 'taco-button__label--open' : ''}" 
              string=${label}>${label}</div>
              
              <taco-icon 
                class="svg-icon 
                taco-meatball__chevron ${!this._isOpen ? 'taco-meatball__chevron--hidden' : ''}" 
                fill="black-900" size="sm" 
                icon="ic-chevron-up" cdn="${this.cdn}"></taco-icon>
              
              <taco-icon 
                class="svg-icon 
                taco-meatball__chevron ${this._isOpen ? 'taco-meatball__chevron--hidden' : ''}" 
                fill="black-900" size="sm" 
                icon="ic-chevron-down" cdn="${this.cdn}"></taco-icon>
            </button>
            ${this.showMenu()}`;
                }
            }
        }
        getLabelIcon(item) {
            if (item.icon) {
                const iconClass = item.icon.type === TacoIconType.ICON ?
                    `item-icon` :
                    `image-icon ${item.disabled ? "item-icon--disabled" : ""}`;
                return $ `${d($ `
            <taco-icon 
              class="${iconClass}" 
              fill="${item.disabled ? 'grey-500' : 'black-900'}" 
              size="md" 
              type="${item.icon.type}"
              icon="${item.icon.name}" 
              cdn="${this.cdn}">
            </taco-icon>
          `)}`;
            }
            return $ ``;
        }
        render() {
            return $ `<div class="taco-dropdown-container ${this.width === TacodropdownWidth.FULL ? 'taco-dropdown-container--full' : ''}">${this.showDropdownButton(this.type)}</div>`;
        }
    };
    // Using the Scss file for styling
    Tacodropdown.styles = css_248z$5;
    __decorate([
        e$4()
    ], Tacodropdown.prototype, "listRef", void 0);
    __decorate([
        e$4()
    ], Tacodropdown.prototype, "dropdownBtnRef", void 0);
    __decorate([
        e$4({ type: TacodropdownWidth })
    ], Tacodropdown.prototype, "width", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "nextSelected", void 0);
    __decorate([
        e$4({ type: String, state: true })
    ], Tacodropdown.prototype, "selectedIndex", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "uniqueId", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "label", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "ariaID", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], Tacodropdown.prototype, "disabled", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], Tacodropdown.prototype, "highlightSelected", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], Tacodropdown.prototype, "liveLabel", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "type", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "maxHeight", void 0);
    __decorate([
        e$4()
    ], Tacodropdown.prototype, "id", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "direction", void 0);
    __decorate([
        e$4({ type: Array })
    ], Tacodropdown.prototype, "list", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacodropdown.prototype, "cdn", void 0);
    __decorate([
        e$4({ type: Boolean, state: true })
    ], Tacodropdown.prototype, "_isHovered", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], Tacodropdown.prototype, "_isOpen", void 0);
    Tacodropdown = __decorate([
        n$3("taco-dropdown")
    ], Tacodropdown);

    var css_248z$4 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.icon-sprite {
  display: inline-flex;
  align-items: center;
}`;

    let TacoIcon = class TacoIcon extends s$1 {
        constructor() {
            super();
            /** refers to a fill token ie. black-500 */
            this.fill = 'black-full';
            /** the base cdn url - defaults to DEV */
            this.cdn = 'https://cc3cdn.blob.core.windows.net/'; // default dev
            this._cdnVersion = 'latest'; // internal use only
            this._assetFolder = this.type === TacoIconType.IMAGE ? 'taco-illustrations' : 'taco-icons';
            this._cdnUrl = `${this.cdn}/design-system/${this._cdnVersion}/${this._assetFolder}/`;
        }
        // Custom Getter for icon property
        get icon() {
            return this._icon;
        }
        /** name of svg icon */
        /** Setter for icon property
         * Watches the icon property and runs the getSvg method when the icon is set / updated
         */
        set icon(icon) {
            const oldIconValue = this._icon;
            this._icon = icon;
            // manually requesting an update to the component
            this.requestUpdate("icon", oldIconValue);
            // Call the getSvg Method which fetched the icon SVG
            this.getSvg(this.icon);
        }
        async connectedCallback() {
            super.connectedCallback();
        }
        async getSvg(iconName) {
            const response = await fetch(`${this._cdnUrl}${iconName}.svg`);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            this.svg = doc.querySelector('svg');
        }
        render() {
            return $ `
      <style>
        svg { 
          width: var(--size-${this.size});
          height: var(--size-${this.size});
          fill: var(--color-${this.fill});
        }
      </style>
      <i class="icon-sprite" aria-label="${this._icon.substring(3)}" role="img">
        ${y `${this.svg}`}
      </i>`;
        }
    };
    TacoIcon.styles = css_248z$4;
    __decorate([
        e$4()
    ], TacoIcon.prototype, "svg", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoIcon.prototype, "icon", null);
    __decorate([
        e$4({ type: String })
    ], TacoIcon.prototype, "type", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoIcon.prototype, "size", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoIcon.prototype, "fill", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoIcon.prototype, "cdn", void 0);
    TacoIcon = __decorate([
        n$3("taco-icon".toLowerCase())
    ], TacoIcon);

    var css_248z$3 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.taco-toggle-wrapper {
  height: 48px;
  width: auto;
  display: inline-flex;
  cursor: pointer;
  font-family: proxima-nova;
}
.taco-toggle-wrapper[disabled=true] {
  cursor: default;
}
.taco-toggle-wrapper .taco-toggle-label {
  margin-right: 12px;
  display: flex;
  align-self: center;
  cursor: pointer;
  font: normal normal 400 14px / 16px proxima-nova;
  color: #484848;
}
.taco-toggle-wrapper .taco-toggle-label[onInnerLabel=""][offInnerLabel=""] {
  font: normal normal 400 12px / 16px proxima-nova;
}
.taco-toggle-wrapper .taco-toggle-label[disabled=true] {
  cursor: default;
}
.taco-toggle-wrapper .taco-toggle {
  position: relative;
  border-radius: 80px;
  display: flex;
  align-self: center;
  -webkit-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  height: 24px;
  width: 56px;
}
.taco-toggle-wrapper .taco-toggle[onInnerLabel=""][offInnerLabel=""] {
  width: 24px;
  height: 16px;
}
.taco-toggle-wrapper .taco-toggle[toggleState=true] {
  background: #44820d;
}
.taco-toggle-wrapper .taco-toggle[toggleState=false] {
  background: #484848;
}
.taco-toggle-wrapper .taco-toggle[disabled=true] {
  background-color: #e1e1e1;
}
.taco-toggle-wrapper .taco-toggle[disabled=true] .taco-toggle-button {
  cursor: default;
}
.taco-toggle-wrapper .taco-toggle-button {
  position: absolute;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 16px;
  top: 2px;
  border: 0;
  width: 20px;
  height: 20px;
}
.taco-toggle-wrapper .taco-toggle-button[onInnerLabel=""][offInnerLabel=""] {
  width: 12px;
  height: 12px;
}
.taco-toggle-wrapper .taco-toggle-button[toggleState=true] {
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-name: slide_right;
  right: 2px;
}
.taco-toggle-wrapper .taco-toggle-button[toggleState=false] {
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-name: slide_left;
  left: 2px;
}
@keyframes slide_left {
  0% {
    left: 60%;
  }
  100% {
    left: 2;
  }
}
@keyframes slide_right {
  0% {
    right: 60%;
  }
  100% {
    right: 2;
  }
}
.taco-toggle-wrapper .taco-toggle-inner-label {
  position: absolute;
  font: normal normal 400 12px / 16px proxima-nova;
  color: #ffffff;
}
.taco-toggle-wrapper .taco-toggle-inner-label[disabled=true] {
  color: #828282;
}
.taco-toggle-wrapper .taco-toggle-inner-label__on {
  left: 4px;
  top: 4px;
}
.taco-toggle-wrapper .taco-toggle-inner-label__on[toggleState=true] {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
  visibility: visible;
}
.taco-toggle-wrapper .taco-toggle-inner-label__on[toggleState=false] {
  opacity: 0;
  -webkit-transition: visibility 0s 0.3s, opacity 0.3s ease-out;
  transition: visibility 0s 0.3s, opacity 0.3s ease-out;
  visibility: hidden;
}
.taco-toggle-wrapper .taco-toggle-inner-label__off {
  left: 24px;
  top: 4px;
}
.taco-toggle-wrapper .taco-toggle-inner-label__off[toggleState=false] {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
  visibility: visible;
}
.taco-toggle-wrapper .taco-toggle-inner-label__off[toggleState=true] {
  opacity: 0;
  -webkit-transition: visibility 0s 0.3s, opacity 0.3s ease-out;
  transition: visibility 0s 0.3s, opacity 0.3s ease-out;
  visibility: hidden;
}`;

    var ToggleState;
    (function (ToggleState) {
        ToggleState["On"] = "__on";
        ToggleState["Off"] = "__off";
    })(ToggleState || (ToggleState = {}));
    // Declaring the HTML element name for this component
    let TacoToggle = 
    // Creating a class of Example Component
    class TacoToggle extends s$1 {
        constructor() {
            super();
            //declaration of properties
            this.contextualLabel = "";
            this.onInnerLabel = "";
            this.offInnerLabel = "";
            this.toggleState = false;
            this.disabled = false;
        }
        connectedCallback() {
            super.connectedCallback();
        }
        onClickEvent() {
            if (this.disabled)
                return;
            this.toggleState = !this.toggleState;
            const stateChangeEvent = new CustomEvent("stateChange", {
                detail: { toggleState: this.toggleState },
                bubbles: true,
                composed: true,
            });
            this.dispatchEvent(stateChangeEvent);
        }
        getContextualLabelHtml() {
            const htmlResult = this.contextualLabel
                ? $ `
                        <label class="taco-toggle-label"
                                contextualLabel=${l$1(this.contextualLabel)}
                                onInnerLabel=${l$1(this.onInnerLabel)}
                                offInnerLabel=${l$1(this.offInnerLabel)}
                                disabled=${l$1(this.disabled)}>
                            <span>${l$1(this.contextualLabel)}</span>
                        </label>
                      `
                : $ ``;
            return htmlResult;
        }
        getToggleButtonHtml() {
            return $ `
             <button class="taco-toggle-button"
                     toggleState=${l$1(this.toggleState)}
                     onInnerLabel=${l$1(this.onInnerLabel)}
                     offInnerLabel=${l$1(this.offInnerLabel)}
                     aria-pressed=${this.toggleState ? "true" : "false"}
                     tabindex="0"
                     aria-label="toggle">
            </button>
        `;
        }
        getInnerLabelHtml(toggleStateParam) {
            const className = 'taco-toggle-inner-label' + toggleStateParam;
            return $ `
            <span class="taco-toggle-inner-label ${className}"
                    toggleState=${l$1(this.toggleState)}
                    disabled=${l$1(this.disabled)}>
                ${toggleStateParam == ToggleState.On ? this.onInnerLabel : this.offInnerLabel}
            </span>
        `;
        }
        render() {
            return $ `
            <div class="taco-toggle-wrapper"  
                    @click=${this.onClickEvent}
                    @keydown=${(e) => { e.key == "Enter" ? this.onClickEvent : null; }}
                    disabled=${l$1(this.disabled)}> 
                
                ${this.getContextualLabelHtml()}
                
                <div class="taco-toggle"
                    toggleState=${l$1(this.toggleState)}
                    onInnerLabel=${l$1(this.onInnerLabel)}
                    offInnerLabel=${l$1(this.offInnerLabel)}
                    disabled=${l$1(this.disabled)}>
                    
                    ${this.getToggleButtonHtml()}

                    ${this.getInnerLabelHtml(ToggleState.On)}
                    ${this.getInnerLabelHtml(ToggleState.Off)}
                </div>
            </div>
        `;
        }
    };
    // Using the Scss file for styling
    TacoToggle.styles = css_248z$3;
    __decorate([
        e$4({ type: String })
    ], TacoToggle.prototype, "contextualLabel", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoToggle.prototype, "onInnerLabel", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoToggle.prototype, "offInnerLabel", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TacoToggle.prototype, "toggleState", void 0);
    __decorate([
        e$4({ type: Boolean })
    ], TacoToggle.prototype, "disabled", void 0);
    TacoToggle = __decorate([
        n$3("taco-toggle")
        // Creating a class of Example Component
    ], TacoToggle);

    var TacoNotificationSize;
    (function (TacoNotificationSize) {
        TacoNotificationSize["ExtraSmall"] = "xsm";
        TacoNotificationSize["Small"] = "sm";
    })(TacoNotificationSize || (TacoNotificationSize = {}));

    var css_248z$2 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.notification-wrapper {
  display: inline-flex;
}

.notification {
  width: max-content;
  border-radius: 100px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
}
.notification:not([digits="1"]):not([digits="2"]) {
  padding: 0px 3px;
}
.notification[size=xsm] {
  height: 16px;
  min-width: 16px;
  font: normal normal 400 12px / 16px proxima-nova;
}
.notification[size=sm] {
  height: 24px;
  min-width: 24px;
  font: normal normal 400 14px / 16px proxima-nova;
}

.notification-label {
  color: #484848;
  padding-left: 8px;
  display: flex;
  align-self: center;
}
.notification-label[size=xsm] {
  font: normal normal 400 14px / 16px proxima-nova;
}
.notification-label[size=sm] {
  font: normal normal 400 18px / 24px proxima-nova;
}`;

    // Declaring the HTML element name for this component
    let TacoNotification = 
    // Creating a class of Example Component
    class TacoNotification extends s$1 {
        // Contructor for the component, will do any actions while the component is being constructed
        constructor() {
            super();
            // declaration of properties
            // Number that appear in the notification | any number
            this.number = 0;
            // Number of digits | any number greater than 0
            this.digits = 2;
            // Label that appears righ of the notification | any text
            this.label = '';
            // backgroud color | any color format
            this.backgroundColor = '#D23859';
            // Size of the notification | TacoNotificationSize.ExtraSmall , TacoNotificationSize.Small
            this.size = TacoNotificationSize.ExtraSmall;
        }
        // connectedCallback is a lifecycle event similar to compoundDidMount
        // It will do something once the component loads onto the DOM
        connectedCallback() {
            super.connectedCallback();
            this.getNotificationValue();
        }
        getLabelHtml() {
            const htmlResult = this.label
                ? $ `
                        <label class="notification-label"
                               size=${l$1(this.size)}>
                            <span id="test">${l$1(this.label)}</span>
                        </label>
                      `
                : $ ``;
            return htmlResult;
        }
        getNotificationValue() {
            return this.number.toString().padStart(this.digits, '0');
        }
        // rendering out the example component with conditional properties in place
        render() {
            // Using an HTML template
            return $ `
            <div class="notification-wrapper">
                <div class="notification" 
                     style="background-color: ${this.backgroundColor};"
                     size=${l$1(this.size)}
                     digits=${l$1(this.digits)}
                     aria-live="polite"
                     > 
                    <span>${this.getNotificationValue()}</span>
                </div>
                ${this.getLabelHtml()}
            </div>
        `;
        }
    };
    // Using the Scss file for styling
    TacoNotification.styles = css_248z$2;
    __decorate([
        e$4({ type: Number })
    ], TacoNotification.prototype, "number", void 0);
    __decorate([
        e$4({ type: Number })
    ], TacoNotification.prototype, "digits", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoNotification.prototype, "label", void 0);
    __decorate([
        e$4({ type: String })
    ], TacoNotification.prototype, "backgroundColor", void 0);
    __decorate([
        e$4({ attribute: false })
    ], TacoNotification.prototype, "size", void 0);
    TacoNotification = __decorate([
        n$3("taco-notification")
        // Creating a class of Example Component
    ], TacoNotification);

    var css_248z$1 = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.example-class {
  color: red;
}`;

    // Declaring the HTML element name for this component
    let Tacoillustration = 
    // Creating a class of Example Component
    class Tacoillustration extends s$1 {
        // Contructor for the component, will do any actions while the component is being constructed
        constructor() {
            super();
            /** the base cdn url - defaults to Prod */
            this.cdn = 'https://cc3cdn.blob.core.windows.net/'; // default Prod
            this._cdnVersion = 'latest'; // internal use only
            this._cdnUrl = `${this.cdn}/design-system/${this._cdnVersion}/taco-illustrations/`;
        }
        // Custom Getter for illustration property
        get illustration() {
            return this._illustration;
        }
        /** name of svg illustration */
        /** Setter for illustration property
         * Watches the illustration property and runs the getSvg method when the illustration is set / updated
         */
        set illustration(illustration) {
            const oldIllustrationValue = this._illustration;
            this._illustration = illustration;
            // manually requesting an update to the component
            this.requestUpdate("illustration", oldIllustrationValue);
            // Call the getSvg Method which fetched the illustration SVG
            this.getSvg(this.illustration);
        }
        // connectedCallback is a lifecycle event similar to compoundDidMount
        // It will do something once the component loads onto the DOM
        async connectedCallback() {
            super.connectedCallback();
        }
        async getSvg(illustrationName) {
            const response = await fetch(`${this._cdnUrl}${illustrationName}.svg`);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            this.svg = doc.querySelector('svg');
        }
        // rendering out the example component with conditional properties in place
        render() {
            // Using an HTML template
            return $ `
        <style>
            svg { 
                width: var(--size-${this.size});
                height: var(--size-${this.size});
            }
        </style>
        <i class="illustration-sprite" aria-label="${this._illustration.substring(3)}" role="img">
            ${y `${this.svg}`}
        </i>
        `;
        }
    };
    // Using the Scss file for styling
    Tacoillustration.styles = css_248z$1;
    __decorate([
        e$4()
    ], Tacoillustration.prototype, "svg", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacoillustration.prototype, "illustration", null);
    __decorate([
        e$4({ type: String })
    ], Tacoillustration.prototype, "size", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacoillustration.prototype, "cdn", void 0);
    Tacoillustration = __decorate([
        n$3("taco-illustration".toLowerCase())
        // Creating a class of Example Component
    ], Tacoillustration);

    var TacoModalType;
    (function (TacoModalType) {
        TacoModalType["MODAL_DEFAULT"] = "modal-default";
        TacoModalType["MODAL_WARNING"] = "modal-warning";
        TacoModalType["MODAL_COMPONENT_PROJECTION"] = "component-projection";
    })(TacoModalType || (TacoModalType = {}));

    var css_248z = r$4`@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.example-class {
  color: red;
}

@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Reg.otf");
}
@font-face {
  font-family: "proxima-nova";
  src: url("../../../taco-assets/taco-font/proxima-nova/ProximaNova-Bold.otf");
  font-weight: bold;
}
.modal-content {
  max-width: 630px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  background-color: var(--color-white-100);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-all);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  outline: 0;
  z-index: 1041;
  min-width: 310px;
  animation-name: fade-in-content;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  will-change: transform;
}
.modal-content::before {
  content: "";
  position: absolute;
  top: -4px;
  height: 4px;
  width: 100%;
  background-color: var(--color-blue-500);
  border-top-left-radius: var(--size-xxxsm);
  border-top-right-radius: var(--size-xxxsm);
}

.modal-content.modal-warning:before {
  background-color: var(--color-yellow-500);
}

.modal-header,
.modal-body,
.modal-footer {
  display: flex;
  align-items: center;
  padding: var(--space-md);
}

.modal-header {
  justify-content: space-between;
  background-color: var(--color-white-300);
  border-bottom: 1px solid var(--color-white-700);
}
.modal-header .modal-title {
  margin: 0;
  font-size: var(--font-size-lg);
}

.modal-body {
  display: block;
  font-weight: 400;
}

.modal-footer {
  position: relative;
}
.modal-footer::before {
  content: "";
  position: absolute;
  top: 0;
  height: 1px;
  left: var(--space-md);
  right: var(--space-md);
  background-color: var(--color-white-700);
}

.modal-footer__btn-cta {
  margin-right: var(--space-md);
}

.modal-warning-container {
  background-color: var(--color-yellow-50);
  padding: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.modal-warning-text {
  margin-left: var(--space-xxsm);
  font-weight: 300;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.6);
  animation-name: fade-in-backdrop;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

@keyframes fade-in-backdrop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in-content {
  0% {
    transform: translate(-50%, -60%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}
.modal-header__x-btn {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  text-align: inherit;
  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;
  /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
  line-height: 0;
  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  /* Corrects inability to style clickable \`input\` types in iOS */
  -webkit-appearance: none;
}
.modal-header__x-btn:focus {
  outline: 1px solid var(--color-blue-500);
}`;

    // Declaring the HTML element name for this component
    let Tacomodal = 
    // Creating a class of Example Component
    class Tacomodal extends s$1 {
        constructor() {
            super();
            //declaration of properties
            // @property({ type: Boolean, reflect: true }) public _isOpen = false;
            this.title = "Title";
            this.body = "Type the message here...";
            this.actionLabel = "Label";
            this.secondaryActionLabel = "Secondary action";
            this.warningMessage = "Wait! Are you sure you want to continue?";
            //declaring the modal type
            //properties: default / modal-warning / content-projection
            this.type = TacoModalType.MODAL_DEFAULT;
            this.handleFocus = (inputElement) => {
                setTimeout(() => {
                    if (!inputElement) {
                        return;
                    }
                    inputElement.focus();
                }, 100);
            };
            this.handleClose = () => {
                const closeEvent = new CustomEvent("close", {
                    detail: { message: "closed." },
                    bubbles: true,
                    composed: true,
                });
                this.dispatchEvent(closeEvent);
            };
            this.handleSave = () => {
                const saveEvent = new CustomEvent("save", {
                    detail: { message: "saved." },
                    bubbles: true,
                    composed: true,
                });
                this.dispatchEvent(saveEvent);
                this.handleClose();
            };
        }
        // connectedCallback is a lifecycle event similar to compoundDidMount
        // It will do something once the component loads onto the DOM
        connectedCallback() {
            super.connectedCallback();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
        }
        getModalWarningHtml() {
            return $ `
      <div class="modal-warning-container">
        <taco-icon
          class="liked-icon"
          fill="yellow-900"
          icon="ic-warning"
          size="sm"
        ></taco-icon>
        <span class="modal-warning-text">${this.warningMessage}</span>
      </div>
      ${this.body}
    `;
        }
        getComponentProjection() {
            return $ `
       <slot name="component-projection"></slot>
       `;
        }
        handleBodyContent() {
            if (this.type === TacoModalType.MODAL_WARNING) {
                return this.getModalWarningHtml();
            }
            else if (this.type === TacoModalType.MODAL_COMPONENT_PROJECTION) {
                return this.getComponentProjection();
            }
            else {
                return $ `${this.body}`;
            }
        }
        // rendering out the example component with conditional properties in place
        render() {
            return $ `
    <div
      role="dialog"
      id="modal"
      aria-labelledby="modal-title"
      aria-modal="true"
      class="modal-content ${this.type}"
    >
      <div class="modal-header">
        <h4 id="modal-title" class="modal-title">${this.title}</h4>
        <button
                    ${n(this.handleFocus)}
                    id="close-button"
                    class="modal-header__x-btn"
                    @click=${this.handleClose}
                  >
                    <taco-icon
                      size="md"
                      icon="ic-close"
                      fill="grey-900"
                    ></taco-icon>
                  </button>
      </div>
      <div class="modal-body">
        ${this.handleBodyContent()}
      </div>
      <div class="modal-footer">
      <taco-button
      value="${this.actionLabel}"
      type="cta"
      @click=${this.handleSave}
      class="modal-footer__btn-cta"
    ></taco-button>
    <taco-button
      value="${this.secondaryActionLabel}"
      type="link"
      @click=${this.handleClose}
    ></taco-button>
      </div>
    </div>
    <div class="modal-backdrop"></div>
  `;
        }
    };
    // Using the Scss file for styling
    Tacomodal.styles = css_248z;
    __decorate([
        e$4({ type: String, reflect: true })
    ], Tacomodal.prototype, "title", void 0);
    __decorate([
        e$4({ type: String, reflect: true })
    ], Tacomodal.prototype, "body", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacomodal.prototype, "actionLabel", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacomodal.prototype, "secondaryActionLabel", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacomodal.prototype, "warningMessage", void 0);
    __decorate([
        e$4({ type: String })
    ], Tacomodal.prototype, "type", void 0);
    Tacomodal = __decorate([
        n$3("taco-modal".toLowerCase())
        // Creating a class of Example Component
    ], Tacomodal);

})();
