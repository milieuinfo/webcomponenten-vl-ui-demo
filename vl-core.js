import"/node_modules/document-register-element/build/document-register-element.js";(()=>{const t="vl-core-style";!function(){if(!document.head.querySelector("#"+t)){var e=((s=document.createElement("link")).setAttribute("id",t),s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href","/node_modules/vl-ui-core/core-style.css"),s);document.head.appendChild(e)}var s}()})();export const VlElement=t=>{return class extends t{constructor(t){super(),t&&this.shadow(t)}static get observedAttributes(){return this._observedAttributes.concat(this._observedClassAttributes).concat(this._observedChildClassAttributes)}static get _observedAttributes(){return[]}static get _observedClassAttributes(){return[]}static get _observedChildClassAttributes(){return[]}attributeChangedCallback(t,e,s){this.constructor._observedClassAttributes&&this.constructor._observedClassAttributes.filter(e=>e==t).forEach(t=>{this.__changeAttribute(this,e,s,t)}),this.constructor._observedChildClassAttributes&&this.constructor._observedChildClassAttributes.filter(e=>e==t).forEach(t=>{this.__changeAttribute(this._element,e,s,t)});const r=this["_"+t.split("-").join("_")+"ChangedCallback"];r?r.call(this,e,s):this.constructor._observedClassAttributes&&-1!=this.constructor._observedClassAttributes.indexOf(t)||this.constructor._observedChildClassAttributes&&-1!=this.constructor._observedChildClassAttributes.indexOf(t)||console.info("_"+t+"ChangedCallback is not defined")}get _classPrefix(){console.error("class prefix is undefined")}get _element(){return this._shadow?this._shadow.lastElementChild:this}_template(t){const e=document.createElement("template");return e.innerHTML=t,e.content}_changeClass(t,e,s,r){t.classList.contains((r||this._classPrefix)+e)&&t.classList.remove((r||this._classPrefix)+e),null!=s&&t.classList.add((r||this._classPrefix)+s)}_toggleClass(t,e,s){null!=e||e?t.classList.add(s):t.classList.remove(s)}_addStyleLink(){const t=this.constructor.name+"-style";document.head.querySelector("#"+t)||document.head.appendChild(this.__generateStyleLink(t))}shadow(t){this._shadow=this.attachShadow({mode:"open"}),this._shadow.innerHTML=t}__changeAttribute(t,e,s,r,i){e!=s&&(null!=this.getAttribute(r)?t.classList.add((i||this._classPrefix)+r):t.classList.remove((i||this._classPrefix)+r))}__generateStyleLink(t){this._stylePath||console.error("style path is not defined");var e=document.createElement("link");return e.setAttribute("id",t),e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href",this._stylePath),e}}};export const NativeVlElement=t=>{return class extends(VlElement(t)){constructor(){super(),this._addStyleLink()}get _element(){return this}}};export const define=(t,e,s)=>{customElements.get(t)?console.warn(`${t} werd reeds gedefinieerd als custom element`):customElements.define(t,e,s)};export const awaitScript=(t,e)=>{if(document.head.querySelector("script#"+t))return console.log(`script with id '${t}' is already loaded`),Promise.resolve();let s=document.createElement("script");s.id=t,s.src=e,s.async=!1;const r=new Promise((t,e)=>{s.onload=(()=>{t()}),s.onerror=(()=>{e()})});return document.head.appendChild(s),r};export const awaitUntil=t=>new Promise(async(e,s)=>{for(;!t();)await new Promise(t=>setTimeout(t,50));e()});