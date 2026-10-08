const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Landing-FDNQaI8w.js","assets/vendor-query-BZEXoOgd.js","assets/vendor-react-B7X1oEVa.js","assets/PageMeta-De456g46.js","assets/Navbar-9p8_OCUI.js","assets/vendor-web3-DZ6p-Ecm.js","assets/PublicVerify-BE-EIwBU.js","assets/client-B7p35Ni0.js","assets/vc-5gaiYFlR.js","assets/circle-check-BS8qXB3L.js","assets/circle-x-nyKPfsO2.js","assets/printer-Byzbu9t4.js","assets/Login-0j3XCa7o.js","assets/zod-CHgz-d0w.js","assets/circle-alert-BdbuQp7N.js","assets/SignUp-DvFPaN7K.js","assets/mail-CfDR1Cc7.js","assets/ForgotPassword-BJNWR_0b.js","assets/VerifyEmail-B7vpk22z.js","assets/ConnectWallet-C1qhZWEO.js","assets/AppRedirect-CXC4S1xq.js","assets/Onboarding-CrvXqsgv.js","assets/did-HXNA5ow4.js","assets/Dashboard-bjuKebgx.js","assets/circle-plus-DldkbB-O.js","assets/qr-code-CNVBbtuV.js","assets/file-check-2-CMp2ClK-.js","assets/external-link-CbozQw_l.js","assets/Identity-DbkoG3We.js","assets/Credentials-Di3Itj3h.js","assets/eye-VFGU4_5I.js","assets/download-9k-CO6jW.js","assets/Assets-s1l9K3jN.js","assets/upload-C_7RPRBF.js","assets/Access-BmgdxWuy.js","assets/clock-KNIfnOk9.js","assets/ZK-Beryo0TE.js","assets/Recovery-DQxuz5jR.js","assets/AuditLog-CpyZma1L.js","assets/SecurityCenter-CUsTIPkT.js","assets/users-Cy5aqeVt.js","assets/Issuer-BpzWELP8.js","assets/Verifier-BwCA3SzG.js","assets/Admin-BBuiLeg0.js","assets/NotFound-Sm1evOF7.js"])))=>i.map(i=>d[i]);
import{Q as Xa,j as a,c as Qa,a as eo}from"./vendor-query-BZEXoOgd.js";import{a as to,r as u,c as oi,d as Mt,O as Ce,L as Ee,N as Ks,h as an,i as no,j as so,k as ro,g as io,R as ao}from"./vendor-react-B7X1oEVa.js";import{aP as ci,aQ as oo,_ as B,aR as co,aS as Gt,E as We,aT as Kt,aU as Zt,aV as lo,aW as uo,aX as ho,aY as fo,aZ as po,a_ as mo,y as go,e as Zs,a$ as yo,b0 as Ys,b1 as _o,aw as vo,aL as bo,b2 as li,b3 as wo,a as di,b4 as xo,u as ui,b as Io,b5 as Eo,b6 as Co}from"./vendor-web3-DZ6p-Ecm.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var Jn={},Js=to;Jn.createRoot=Js.createRoot,Jn.hydrateRoot=Js.hydrateRoot;function ko(n){const e=typeof window<"u"?window:void 0;if(typeof e>"u"||typeof e.ethereum>"u")return;const t=e.ethereum.providers;return t?t.find(s=>s[n]):e.ethereum[n]?e.ethereum:void 0}function To(n){const e=(t,s)=>{const[r,...i]=s.split("."),o=t[r];if(o)return i.length===0?o:e(o,i.join("."))};if(typeof window<"u")return e(window,n)}function Ao({flag:n,namespace:e}){const t=typeof window<"u"?window:void 0;if(typeof t>"u")return;if(e){const r=To(e);if(r)return r}const s=t.ethereum?.providers;if(n){const r=ko(n);if(r)return r}if(!(e||n))return typeof s<"u"&&s.length>0?s[0]:t.ethereum}function So(n){return e=>{const t=n?{target:()=>({id:e.rkDetails.id,name:e.rkDetails.name,provider:n})}:{};return ci(s=>({...oo(t)(s),...e}))}}function No({flag:n,namespace:e,target:t}){const s=t||Ao({flag:n,namespace:e});return So(s)}var Ro=()=>({id:"injected",name:"Browser Wallet",iconUrl:async()=>(await B(async()=>{const{default:n}=await import("./injectedWallet-AWJSZPMG-Df9x-YJA.js");return{default:n}},[])).default,iconBackground:"#fff",createConnector:No({})}),A;(function(n){n.assertEqual=r=>{};function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},n.getValidEnumValues=r=>{const i=n.objectKeys(r).filter(c=>typeof r[r[c]]!="number"),o={};for(const c of i)o[c]=r[c];return n.objectValues(o)},n.objectValues=r=>n.objectKeys(r).map(function(i){return r[i]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},n.find=(r,i)=>{for(const o of r)if(i(o))return o},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&Number.isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}n.joinValues=s,n.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(A||(A={}));var Xs;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Xs||(Xs={}));const g=A.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Pe=n=>{switch(typeof n){case"undefined":return g.undefined;case"string":return g.string;case"number":return Number.isNaN(n)?g.nan:g.number;case"boolean":return g.boolean;case"function":return g.function;case"bigint":return g.bigint;case"symbol":return g.symbol;case"object":return Array.isArray(n)?g.array:n===null?g.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?g.promise:typeof Map<"u"&&n instanceof Map?g.map:typeof Set<"u"&&n instanceof Set?g.set:typeof Date<"u"&&n instanceof Date?g.date:g.object;default:return g.unknown}},f=A.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ke extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(t(o));else{let c=s,l=0;for(;l<o.path.length;){const d=o.path[l];l===o.path.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(t(o))):c[d]=c[d]||{_errors:[]},c=c[d],l++}}};return r(this),s}static assert(e){if(!(e instanceof ke))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,A.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},s=[];for(const r of this.issues)if(r.path.length>0){const i=r.path[0];t[i]=t[i]||[],t[i].push(e(r))}else s.push(e(r));return{formErrors:s,fieldErrors:t}}get formErrors(){return this.flatten()}}ke.create=n=>new ke(n);const Xn=(n,e)=>{let t;switch(n.code){case f.invalid_type:n.received===g.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case f.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,A.jsonStringifyReplacer)}`;break;case f.unrecognized_keys:t=`Unrecognized key(s) in object: ${A.joinValues(n.keys,", ")}`;break;case f.invalid_union:t="Invalid input";break;case f.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${A.joinValues(n.options)}`;break;case f.invalid_enum_value:t=`Invalid enum value. Expected ${A.joinValues(n.options)}, received '${n.received}'`;break;case f.invalid_arguments:t="Invalid function arguments";break;case f.invalid_return_type:t="Invalid function return type";break;case f.invalid_date:t="Invalid date";break;case f.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:A.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case f.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="bigint"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case f.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case f.custom:t="Invalid input";break;case f.invalid_intersection_types:t="Intersection results could not be merged";break;case f.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case f.not_finite:t="Number must be finite";break;default:t=e.defaultError,A.assertNever(n)}return{message:t}};let Po=Xn;function Oo(){return Po}const jo=n=>{const{data:e,path:t,errorMaps:s,issueData:r}=n,i=[...t,...r.path||[]],o={...r,path:i};if(r.message!==void 0)return{...r,path:i,message:r.message};let c="";const l=s.filter(d=>!!d).slice().reverse();for(const d of l)c=d(o,{data:e,defaultError:c}).message;return{...r,path:i,message:c}};function p(n,e){const t=Oo(),s=jo({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===Xn?void 0:Xn].filter(r=>!!r)});n.common.issues.push(s)}class ee{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const s=[];for(const r of t){if(r.status==="aborted")return w;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,t){const s=[];for(const r of t){const i=await r.key,o=await r.value;s.push({key:i,value:o})}return ee.mergeObjectSync(e,s)}static mergeObjectSync(e,t){const s={};for(const r of t){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return w;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const w=Object.freeze({status:"aborted"}),Tt=n=>({status:"dirty",value:n}),re=n=>({status:"valid",value:n}),Qs=n=>n.status==="aborted",er=n=>n.status==="dirty",ht=n=>n.status==="valid",on=n=>typeof Promise<"u"&&n instanceof Promise;var _;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(_||(_={}));class Be{constructor(e,t,s,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=s,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const tr=(n,e)=>{if(ht(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new ke(n.common.issues);return this._error=t,this._error}}};function C(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:s,description:r}=n;if(e&&(t||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,c)=>{const{message:l}=n;return o.code==="invalid_enum_value"?{message:l??c.defaultError}:typeof c.data>"u"?{message:l??s??c.defaultError}:o.code!=="invalid_type"?{message:c.defaultError}:{message:l??t??c.defaultError}},description:r}}class T{get description(){return this._def.description}_getType(e){return Pe(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Pe(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ee,ctx:{common:e.parent.common,data:e.data,parsedType:Pe(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(on(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const s=this.safeParse(e,t);if(s.success)return s.data;throw s.error}safeParse(e,t){const s={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Pe(e)},r=this._parseSync({data:e,path:s.path,parent:s});return tr(s,r)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Pe(e)};if(!this["~standard"].async)try{const s=this._parseSync({data:e,path:[],parent:t});return ht(s)?{value:s.value}:{issues:t.common.issues}}catch(s){s?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(s=>ht(s)?{value:s.value}:{issues:t.common.issues})}async parseAsync(e,t){const s=await this.safeParseAsync(e,t);if(s.success)return s.data;throw s.error}async safeParseAsync(e,t){const s={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Pe(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(on(r)?r:Promise.resolve(r));return tr(s,i)}refine(e,t){const s=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,i)=>{const o=e(r),c=()=>i.addIssue({code:f.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(c(),!1)):o?!0:(c(),!1)})}refinement(e,t){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof t=="function"?t(s,r):t),!1))}_refinement(e){return new pt({schema:this,typeName:x.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return Fe.create(this,this._def)}nullable(){return mt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return de.create(this)}promise(){return un.create(this,this._def)}or(e){return ln.create([this,e],this._def)}and(e){return dn.create(this,e,this._def)}transform(e){return new pt({...C(this._def),schema:this,typeName:x.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new es({...C(this._def),innerType:this,defaultValue:t,typeName:x.ZodDefault})}brand(){return new sc({typeName:x.ZodBranded,type:this,...C(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new ts({...C(this._def),innerType:this,catchValue:t,typeName:x.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return gs.create(this,e)}readonly(){return ns.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Do=/^c[^\s-]{8,}$/i,Lo=/^[0-9a-z]+$/,Mo=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Fo=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Uo=/^[a-z0-9_-]{21}$/i,Bo=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Vo=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,$o=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,zo="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ln;const Wo=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ho=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,qo=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Go=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ko=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Zo=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,hi="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Yo=new RegExp(`^${hi}$`);function fi(n){let e="[0-5]\\d";n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`);const t=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Jo(n){return new RegExp(`^${fi(n)}$`)}function Xo(n){let e=`${hi}T${fi(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Qo(n,e){return!!((e==="v4"||!e)&&Wo.test(n)||(e==="v6"||!e)&&qo.test(n))}function ec(n,e){if(!Bo.test(n))return!1;try{const[t]=n.split(".");if(!t)return!1;const s=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),r=JSON.parse(atob(s));return!(typeof r!="object"||r===null||"typ"in r&&r?.typ!=="JWT"||!r.alg||e&&r.alg!==e)}catch{return!1}}function tc(n,e){return!!((e==="v4"||!e)&&Ho.test(n)||(e==="v6"||!e)&&Go.test(n))}class Me extends T{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==g.string){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_type,expected:g.string,received:i.parsedType}),w}const s=new ee;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,c=e.data.length<i.value;(o||c)&&(r=this._getOrReturnCtx(e,r),o?p(r,{code:f.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&p(r,{code:f.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")$o.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"email",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="emoji")Ln||(Ln=new RegExp(zo,"u")),Ln.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"emoji",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")Fo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"uuid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="nanoid")Uo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"nanoid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")Do.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")Lo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid2",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="ulid")Mo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ulid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),p(r,{validation:"url",code:f.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"regex",code:f.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),s.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?Xo(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:"datetime",message:i.message}),s.dirty()):i.kind==="date"?Yo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:"date",message:i.message}),s.dirty()):i.kind==="time"?Jo(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:"time",message:i.message}),s.dirty()):i.kind==="duration"?Vo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"duration",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="ip"?Qo(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ip",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="jwt"?ec(e.data,i.alg)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"jwt",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="cidr"?tc(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cidr",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="base64"?Ko.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="base64url"?Zo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64url",code:f.invalid_string,message:i.message}),s.dirty()):A.assertNever(i);return{status:s.value,value:e.data}}_regex(e,t,s){return this.refinement(r=>e.test(r),{validation:t,code:f.invalid_string,..._.errToObj(s)})}_addCheck(e){return new Me({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",..._.errToObj(e)})}url(e){return this._addCheck({kind:"url",..._.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",..._.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",..._.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",..._.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",..._.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",..._.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",..._.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",..._.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",..._.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",..._.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",..._.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",..._.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,..._.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,..._.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",..._.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,..._.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,..._.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,..._.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,..._.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,..._.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,..._.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,..._.errToObj(t)})}nonempty(e){return this.min(1,_.errToObj(e))}trim(){return new Me({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Me({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Me({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Me.create=n=>new Me({checks:[],typeName:x.ZodString,coerce:n?.coerce??!1,...C(n)});function nc(n,e){const t=(n.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=t>s?t:s,i=Number.parseInt(n.toFixed(r).replace(".","")),o=Number.parseInt(e.toFixed(r).replace(".",""));return i%o/10**r}class Rt extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==g.number){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_type,expected:g.number,received:i.parsedType}),w}let s;const r=new ee;for(const i of this._def.checks)i.kind==="int"?A.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),p(s,{code:f.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?nc(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),p(s,{code:f.not_finite,message:i.message}),r.dirty()):A.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,_.toString(t))}gt(e,t){return this.setLimit("min",e,!1,_.toString(t))}lte(e,t){return this.setLimit("max",e,!0,_.toString(t))}lt(e,t){return this.setLimit("max",e,!1,_.toString(t))}setLimit(e,t,s,r){return new Rt({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:_.toString(r)}]})}_addCheck(e){return new Rt({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:_.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:_.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:_.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:_.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:_.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:_.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:_.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:_.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:_.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&A.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(t===null||s.value>t)&&(t=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Rt.create=n=>new Rt({checks:[],typeName:x.ZodNumber,coerce:n?.coerce||!1,...C(n)});class Pt extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==g.bigint)return this._getInvalidInput(e);let s;const r=new ee;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):A.assertNever(i);return{status:r.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return p(t,{code:f.invalid_type,expected:g.bigint,received:t.parsedType}),w}gte(e,t){return this.setLimit("min",e,!0,_.toString(t))}gt(e,t){return this.setLimit("min",e,!1,_.toString(t))}lte(e,t){return this.setLimit("max",e,!0,_.toString(t))}lt(e,t){return this.setLimit("max",e,!1,_.toString(t))}setLimit(e,t,s,r){return new Pt({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:_.toString(r)}]})}_addCheck(e){return new Pt({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:_.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:_.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:_.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:_.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:_.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Pt.create=n=>new Pt({checks:[],typeName:x.ZodBigInt,coerce:n?.coerce??!1,...C(n)});class nr extends T{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==g.boolean){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:g.boolean,received:s.parsedType}),w}return re(e.data)}}nr.create=n=>new nr({typeName:x.ZodBoolean,coerce:n?.coerce||!1,...C(n)});class cn extends T{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==g.date){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_type,expected:g.date,received:i.parsedType}),w}if(Number.isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_date}),w}const s=new ee;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):A.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new cn({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:_.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:_.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}cn.create=n=>new cn({checks:[],coerce:n?.coerce||!1,typeName:x.ZodDate,...C(n)});class sr extends T{_parse(e){if(this._getType(e)!==g.symbol){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:g.symbol,received:s.parsedType}),w}return re(e.data)}}sr.create=n=>new sr({typeName:x.ZodSymbol,...C(n)});class rr extends T{_parse(e){if(this._getType(e)!==g.undefined){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:g.undefined,received:s.parsedType}),w}return re(e.data)}}rr.create=n=>new rr({typeName:x.ZodUndefined,...C(n)});class ir extends T{_parse(e){if(this._getType(e)!==g.null){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:g.null,received:s.parsedType}),w}return re(e.data)}}ir.create=n=>new ir({typeName:x.ZodNull,...C(n)});class ar extends T{constructor(){super(...arguments),this._any=!0}_parse(e){return re(e.data)}}ar.create=n=>new ar({typeName:x.ZodAny,...C(n)});class or extends T{constructor(){super(...arguments),this._unknown=!0}_parse(e){return re(e.data)}}or.create=n=>new or({typeName:x.ZodUnknown,...C(n)});class Ve extends T{_parse(e){const t=this._getOrReturnCtx(e);return p(t,{code:f.invalid_type,expected:g.never,received:t.parsedType}),w}}Ve.create=n=>new Ve({typeName:x.ZodNever,...C(n)});class cr extends T{_parse(e){if(this._getType(e)!==g.undefined){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:g.void,received:s.parsedType}),w}return re(e.data)}}cr.create=n=>new cr({typeName:x.ZodVoid,...C(n)});class de extends T{_parse(e){const{ctx:t,status:s}=this._processInputParams(e),r=this._def;if(t.parsedType!==g.array)return p(t,{code:f.invalid_type,expected:g.array,received:t.parsedType}),w;if(r.exactLength!==null){const o=t.data.length>r.exactLength.value,c=t.data.length<r.exactLength.value;(o||c)&&(p(t,{code:o?f.too_big:f.too_small,minimum:c?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(p(t,{code:f.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(p(t,{code:f.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),t.common.async)return Promise.all([...t.data].map((o,c)=>r.type._parseAsync(new Be(t,o,t.path,c)))).then(o=>ee.mergeArray(s,o));const i=[...t.data].map((o,c)=>r.type._parseSync(new Be(t,o,t.path,c)));return ee.mergeArray(s,i)}get element(){return this._def.type}min(e,t){return new de({...this._def,minLength:{value:e,message:_.toString(t)}})}max(e,t){return new de({...this._def,maxLength:{value:e,message:_.toString(t)}})}length(e,t){return new de({...this._def,exactLength:{value:e,message:_.toString(t)}})}nonempty(e){return this.min(1,e)}}de.create=(n,e)=>new de({type:n,minLength:null,maxLength:null,exactLength:null,typeName:x.ZodArray,...C(e)});function ot(n){if(n instanceof z){const e={};for(const t in n.shape){const s=n.shape[t];e[t]=Fe.create(ot(s))}return new z({...n._def,shape:()=>e})}else return n instanceof de?new de({...n._def,type:ot(n.element)}):n instanceof Fe?Fe.create(ot(n.unwrap())):n instanceof mt?mt.create(ot(n.unwrap())):n instanceof Ze?Ze.create(n.items.map(e=>ot(e))):n}class z extends T{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=A.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==g.object){const d=this._getOrReturnCtx(e);return p(d,{code:f.invalid_type,expected:g.object,received:d.parsedType}),w}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),c=[];if(!(this._def.catchall instanceof Ve&&this._def.unknownKeys==="strip"))for(const d in r.data)o.includes(d)||c.push(d);const l=[];for(const d of o){const h=i[d],y=r.data[d];l.push({key:{status:"valid",value:d},value:h._parse(new Be(r,y,r.path,d)),alwaysSet:d in r.data})}if(this._def.catchall instanceof Ve){const d=this._def.unknownKeys;if(d==="passthrough")for(const h of c)l.push({key:{status:"valid",value:h},value:{status:"valid",value:r.data[h]}});else if(d==="strict")c.length>0&&(p(r,{code:f.unrecognized_keys,keys:c}),s.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const h of c){const y=r.data[h];l.push({key:{status:"valid",value:h},value:d._parse(new Be(r,y,r.path,h)),alwaysSet:h in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const d=[];for(const h of l){const y=await h.key,v=await h.value;d.push({key:y,value:v,alwaysSet:h.alwaysSet})}return d}).then(d=>ee.mergeObjectSync(s,d)):ee.mergeObjectSync(s,l)}get shape(){return this._def.shape()}strict(e){return _.errToObj,new z({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,s)=>{const r=this._def.errorMap?.(t,s).message??s.defaultError;return t.code==="unrecognized_keys"?{message:_.errToObj(e).message??r}:{message:r}}}:{}})}strip(){return new z({...this._def,unknownKeys:"strip"})}passthrough(){return new z({...this._def,unknownKeys:"passthrough"})}extend(e){return new z({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new z({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:x.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new z({...this._def,catchall:e})}pick(e){const t={};for(const s of A.objectKeys(e))e[s]&&this.shape[s]&&(t[s]=this.shape[s]);return new z({...this._def,shape:()=>t})}omit(e){const t={};for(const s of A.objectKeys(this.shape))e[s]||(t[s]=this.shape[s]);return new z({...this._def,shape:()=>t})}deepPartial(){return ot(this)}partial(e){const t={};for(const s of A.objectKeys(this.shape)){const r=this.shape[s];e&&!e[s]?t[s]=r:t[s]=r.optional()}return new z({...this._def,shape:()=>t})}required(e){const t={};for(const s of A.objectKeys(this.shape))if(e&&!e[s])t[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof Fe;)i=i._def.innerType;t[s]=i}return new z({...this._def,shape:()=>t})}keyof(){return pi(A.objectKeys(this.shape))}}z.create=(n,e)=>new z({shape:()=>n,unknownKeys:"strip",catchall:Ve.create(),typeName:x.ZodObject,...C(e)});z.strictCreate=(n,e)=>new z({shape:()=>n,unknownKeys:"strict",catchall:Ve.create(),typeName:x.ZodObject,...C(e)});z.lazycreate=(n,e)=>new z({shape:n,unknownKeys:"strip",catchall:Ve.create(),typeName:x.ZodObject,...C(e)});class ln extends T{_parse(e){const{ctx:t}=this._processInputParams(e),s=this._def.options;function r(i){for(const c of i)if(c.result.status==="valid")return c.result;for(const c of i)if(c.result.status==="dirty")return t.common.issues.push(...c.ctx.common.issues),c.result;const o=i.map(c=>new ke(c.ctx.common.issues));return p(t,{code:f.invalid_union,unionErrors:o}),w}if(t.common.async)return Promise.all(s.map(async i=>{const o={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const l of s){const d={...t,common:{...t.common,issues:[]},parent:null},h=l._parseSync({data:t.data,path:t.path,parent:d});if(h.status==="valid")return h;h.status==="dirty"&&!i&&(i={result:h,ctx:d}),d.common.issues.length&&o.push(d.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const c=o.map(l=>new ke(l));return p(t,{code:f.invalid_union,unionErrors:c}),w}}get options(){return this._def.options}}ln.create=(n,e)=>new ln({options:n,typeName:x.ZodUnion,...C(e)});function Qn(n,e){const t=Pe(n),s=Pe(e);if(n===e)return{valid:!0,data:n};if(t===g.object&&s===g.object){const r=A.objectKeys(e),i=A.objectKeys(n).filter(c=>r.indexOf(c)!==-1),o={...n,...e};for(const c of i){const l=Qn(n[c],e[c]);if(!l.valid)return{valid:!1};o[c]=l.data}return{valid:!0,data:o}}else if(t===g.array&&s===g.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<n.length;i++){const o=n[i],c=e[i],l=Qn(o,c);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return t===g.date&&s===g.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class dn extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e),r=(i,o)=>{if(Qs(i)||Qs(o))return w;const c=Qn(i.value,o.value);return c.valid?((er(i)||er(o))&&t.dirty(),{status:t.value,value:c.data}):(p(s,{code:f.invalid_intersection_types}),w)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}dn.create=(n,e,t)=>new dn({left:n,right:e,typeName:x.ZodIntersection,...C(t)});class Ze extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==g.array)return p(s,{code:f.invalid_type,expected:g.array,received:s.parsedType}),w;if(s.data.length<this._def.items.length)return p(s,{code:f.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),w;!this._def.rest&&s.data.length>this._def.items.length&&(p(s,{code:f.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...s.data].map((o,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new Be(s,o,s.path,c)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>ee.mergeArray(t,o)):ee.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Ze({...this._def,rest:e})}}Ze.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ze({items:n,typeName:x.ZodTuple,rest:null,...C(e)})};class lr extends T{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==g.map)return p(s,{code:f.invalid_type,expected:g.map,received:s.parsedType}),w;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([c,l],d)=>({key:r._parse(new Be(s,c,s.path,[d,"key"])),value:i._parse(new Be(s,l,s.path,[d,"value"]))}));if(s.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const l of o){const d=await l.key,h=await l.value;if(d.status==="aborted"||h.status==="aborted")return w;(d.status==="dirty"||h.status==="dirty")&&t.dirty(),c.set(d.value,h.value)}return{status:t.value,value:c}})}else{const c=new Map;for(const l of o){const d=l.key,h=l.value;if(d.status==="aborted"||h.status==="aborted")return w;(d.status==="dirty"||h.status==="dirty")&&t.dirty(),c.set(d.value,h.value)}return{status:t.value,value:c}}}}lr.create=(n,e,t)=>new lr({valueType:e,keyType:n,typeName:x.ZodMap,...C(t)});class Ot extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==g.set)return p(s,{code:f.invalid_type,expected:g.set,received:s.parsedType}),w;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(p(s,{code:f.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(p(s,{code:f.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const i=this._def.valueType;function o(l){const d=new Set;for(const h of l){if(h.status==="aborted")return w;h.status==="dirty"&&t.dirty(),d.add(h.value)}return{status:t.value,value:d}}const c=[...s.data.values()].map((l,d)=>i._parse(new Be(s,l,s.path,d)));return s.common.async?Promise.all(c).then(l=>o(l)):o(c)}min(e,t){return new Ot({...this._def,minSize:{value:e,message:_.toString(t)}})}max(e,t){return new Ot({...this._def,maxSize:{value:e,message:_.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Ot.create=(n,e)=>new Ot({valueType:n,minSize:null,maxSize:null,typeName:x.ZodSet,...C(e)});class dr extends T{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}dr.create=(n,e)=>new dr({getter:n,typeName:x.ZodLazy,...C(e)});class ur extends T{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return p(t,{received:t.data,code:f.invalid_literal,expected:this._def.value}),w}return{status:"valid",value:e.data}}get value(){return this._def.value}}ur.create=(n,e)=>new ur({value:n,typeName:x.ZodLiteral,...C(e)});function pi(n,e){return new ft({values:n,typeName:x.ZodEnum,...C(e)})}class ft extends T{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),s=this._def.values;return p(t,{expected:A.joinValues(s),received:t.parsedType,code:f.invalid_type}),w}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),s=this._def.values;return p(t,{received:t.data,code:f.invalid_enum_value,options:s}),w}return re(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return ft.create(e,{...this._def,...t})}exclude(e,t=this._def){return ft.create(this.options.filter(s=>!e.includes(s)),{...this._def,...t})}}ft.create=pi;class hr extends T{_parse(e){const t=A.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==g.string&&s.parsedType!==g.number){const r=A.objectValues(t);return p(s,{expected:A.joinValues(r),received:s.parsedType,code:f.invalid_type}),w}if(this._cache||(this._cache=new Set(A.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const r=A.objectValues(t);return p(s,{received:s.data,code:f.invalid_enum_value,options:r}),w}return re(e.data)}get enum(){return this._def.values}}hr.create=(n,e)=>new hr({values:n,typeName:x.ZodNativeEnum,...C(e)});class un extends T{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==g.promise&&t.common.async===!1)return p(t,{code:f.invalid_type,expected:g.promise,received:t.parsedType}),w;const s=t.parsedType===g.promise?t.data:Promise.resolve(t.data);return re(s.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}un.create=(n,e)=>new un({type:n,typeName:x.ZodPromise,...C(e)});class pt extends T{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===x.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:s}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:o=>{p(s,o),o.fatal?t.abort():t.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const o=r.transform(s.data,i);if(s.common.async)return Promise.resolve(o).then(async c=>{if(t.value==="aborted")return w;const l=await this._def.schema._parseAsync({data:c,path:s.path,parent:s});return l.status==="aborted"?w:l.status==="dirty"||t.value==="dirty"?Tt(l.value):l});{if(t.value==="aborted")return w;const c=this._def.schema._parseSync({data:o,path:s.path,parent:s});return c.status==="aborted"?w:c.status==="dirty"||t.value==="dirty"?Tt(c.value):c}}if(r.type==="refinement"){const o=c=>{const l=r.refinement(c,i);if(s.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(s.common.async===!1){const c=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return c.status==="aborted"?w:(c.status==="dirty"&&t.dirty(),o(c.value),{status:t.value,value:c.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(c=>c.status==="aborted"?w:(c.status==="dirty"&&t.dirty(),o(c.value).then(()=>({status:t.value,value:c.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!ht(o))return w;const c=r.transform(o.value,i);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:c}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>ht(o)?Promise.resolve(r.transform(o.value,i)).then(c=>({status:t.value,value:c})):w);A.assertNever(r)}}pt.create=(n,e,t)=>new pt({schema:n,typeName:x.ZodEffects,effect:e,...C(t)});pt.createWithPreprocess=(n,e,t)=>new pt({schema:e,effect:{type:"preprocess",transform:n},typeName:x.ZodEffects,...C(t)});class Fe extends T{_parse(e){return this._getType(e)===g.undefined?re(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Fe.create=(n,e)=>new Fe({innerType:n,typeName:x.ZodOptional,...C(e)});class mt extends T{_parse(e){return this._getType(e)===g.null?re(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}mt.create=(n,e)=>new mt({innerType:n,typeName:x.ZodNullable,...C(e)});class es extends T{_parse(e){const{ctx:t}=this._processInputParams(e);let s=t.data;return t.parsedType===g.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}es.create=(n,e)=>new es({innerType:n,typeName:x.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...C(e)});class ts extends T{_parse(e){const{ctx:t}=this._processInputParams(e),s={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return on(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new ke(s.common.issues)},input:s.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new ke(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}ts.create=(n,e)=>new ts({innerType:n,typeName:x.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...C(e)});class fr extends T{_parse(e){if(this._getType(e)!==g.nan){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:g.nan,received:s.parsedType}),w}return{status:"valid",value:e.data}}}fr.create=n=>new fr({typeName:x.ZodNaN,...C(n)});class sc extends T{_parse(e){const{ctx:t}=this._processInputParams(e),s=t.data;return this._def.type._parse({data:s,path:t.path,parent:t})}unwrap(){return this._def.type}}class gs extends T{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?w:i.status==="dirty"?(t.dirty(),Tt(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?w:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,t){return new gs({in:e,out:t,typeName:x.ZodPipeline})}}class ns extends T{_parse(e){const t=this._def.innerType._parse(e),s=r=>(ht(r)&&(r.value=Object.freeze(r.value)),r);return on(t)?t.then(r=>s(r)):s(t)}unwrap(){return this._def.innerType}}ns.create=(n,e)=>new ns({innerType:n,typeName:x.ZodReadonly,...C(e)});var x;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(x||(x={}));const Z=Me.create;Ve.create;de.create;const rc=z.create;ln.create;dn.create;Ze.create;ft.create;un.create;Fe.create;mt.create;const ic={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_AMOY_RPC_URL:"https://rpc-amoy.polygon.technology",VITE_API_URL:"/v1",VITE_APP_NAME:"Bharosa",VITE_ARBITRUM_SEPOLIA_RPC_URL:"https://sepolia-rollup.arbitrum.io/rpc",VITE_CHAIN_ID:"31337",VITE_DEMO_MODE:"true",VITE_FIREBASE_API_KEY:"AIzaSyD77fQHtztMAx_FfLMvv2ujQC9tYFh7Npg",VITE_FIREBASE_APP_ID:"1:227881717805:web:f8e9515a73fcb583b368a4",VITE_FIREBASE_AUTH_DOMAIN:"bharosa-cd1e6.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-XJLDW87PTM",VITE_FIREBASE_MESSAGING_SENDER_ID:"227881717805",VITE_FIREBASE_PROJECT_ID:"bharosa-cd1e6",VITE_FIREBASE_STORAGE_BUCKET:"bharosa-cd1e6.firebasestorage.app",VITE_IPFS_GATEWAY:"https://ipfs.io/ipfs/",VITE_RPC_URL:"http://127.0.0.1:8545",VITE_WALLETCONNECT_PROJECT_ID:"3fcc6bba0f1de962dcbdae11bd9cee4d"},ac=rc({VITE_APP_NAME:Z().default("Bharosa"),VITE_DEMO_MODE:Z().optional().default("true").transform(n=>n==="true"),VITE_API_URL:Z().default("/v1"),VITE_CHAIN_ID:Z().optional().default("31337").transform(n=>Number(n)||31337),VITE_RPC_URL:Z().default("http://127.0.0.1:8545"),VITE_AMOY_RPC_URL:Z().default("https://rpc-amoy.polygon.technology"),VITE_ARBITRUM_SEPOLIA_RPC_URL:Z().default("https://sepolia-rollup.arbitrum.io/rpc"),VITE_IPFS_GATEWAY:Z().default("https://ipfs.io/ipfs/"),VITE_WALLETCONNECT_PROJECT_ID:Z().optional(),VITE_CONTRACT_IDENTITY_REGISTRY:Z().optional().default(""),VITE_CONTRACT_ACCESS_CONTROL:Z().optional().default(""),VITE_CONTRACT_OWNERSHIP_REGISTRY:Z().optional().default(""),VITE_CONTRACT_SOCIAL_RECOVERY:Z().optional().default(""),VITE_CONTRACT_ZK_VERIFIER:Z().optional().default("")}),q=ac.safeParse(ic);if(!q.success)throw console.error("[Bharosa] Critical configuration error: Invalid environment variables:",q.error.format()),new Error("Critical configuration error: Invalid environment variables");const ne={APP_NAME:q.data.VITE_APP_NAME,DEMO_MODE:q.data.VITE_DEMO_MODE,API_URL:q.data.VITE_API_URL,CHAIN_ID:q.data.VITE_CHAIN_ID,RPC_URL:q.data.VITE_RPC_URL,AMOY_RPC_URL:q.data.VITE_AMOY_RPC_URL,ARBITRUM_SEPOLIA_RPC_URL:q.data.VITE_ARBITRUM_SEPOLIA_RPC_URL,IPFS_GATEWAY:q.data.VITE_IPFS_GATEWAY,WALLETCONNECT_PROJECT_ID:q.data.VITE_WALLETCONNECT_PROJECT_ID||"",CONTRACT_IDENTITY_REGISTRY:q.data.VITE_CONTRACT_IDENTITY_REGISTRY,CONTRACT_ACCESS_CONTROL:q.data.VITE_CONTRACT_ACCESS_CONTROL,CONTRACT_OWNERSHIP_REGISTRY:q.data.VITE_CONTRACT_OWNERSHIP_REGISTRY,CONTRACT_SOCIAL_RECOVERY:q.data.VITE_CONTRACT_SOCIAL_RECOVERY,CONTRACT_ZK_VERIFIER:q.data.VITE_CONTRACT_ZK_VERIFIER,MODE:"production",DEV:!1,PROD:!0},oc=ne.WALLETCONNECT_PROJECT_ID==="3fcc6bba0f1de962dcbdae11bd9cee4d",cc=!!(ne.WALLETCONNECT_PROJECT_ID&&ne.WALLETCONNECT_PROJECT_ID.trim().length>0&&!oc),lc=cc?co({appName:ne.APP_NAME,projectId:ne.WALLETCONNECT_PROJECT_ID,chains:[Zt,Kt,Gt],transports:{[Zt.id]:We(ne.RPC_URL),[Kt.id]:We(ne.AMOY_RPC_URL),[Gt.id]:We(ne.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1}):lo({chains:[Zt,Kt,Gt],connectors:uo([{groupName:"Browser / Injected",wallets:[Ro]}],{appName:ne.APP_NAME,projectId:"00000000000000000000000000000000"}),transports:{[Zt.id]:We(ne.RPC_URL),[Kt.id]:We(ne.AMOY_RPC_URL),[Gt.id]:We(ne.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1});function dc(){const{reconnect:n}=mo();return u.useEffect(()=>{n()},[n]),null}function uc({children:n}){const[e]=u.useState(()=>new Xa({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:5e3}}}));return a.jsx(ho,{config:lc,reconnectOnMount:!1,children:a.jsxs(Qa,{client:e,children:[a.jsx(dc,{}),a.jsx(fo,{theme:po({accentColor:"#84CC16",accentColorForeground:"#1A2E05",borderRadius:"medium",fontStack:"system",overlayBlur:"small"}),children:n})]})})}const hc=()=>{};var pr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},fc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],c=n[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,c=o?n[r+1]:0,l=r+2<n.length,d=l?n[r+2]:0,h=i>>2,y=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,S=d&63;l||(S=64,o||(v=64)),s.push(t[h],t[y],t[v],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const y=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||y==null)throw new pc;const v=i<<2|c>>4;if(s.push(v),d!==64){const S=c<<4&240|d>>2;if(s.push(S),y!==64){const V=d<<6&192|y;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mc=function(n){const e=mi(n);return gi.encodeByteArray(e,!0)},yi=function(n){return mc(n).replace(/\./g,"")},_i=function(n){try{return gi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Zs<"u")return Zs;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=()=>gc().__FIREBASE_DEFAULTS__,_c=()=>{if(typeof go>"u"||typeof pr>"u")return;const n=pr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_i(n[1]);return e&&JSON.parse(e)},ys=()=>{try{return hc()||yc()||_c()||vc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bc=n=>ys()?.emulatorHosts?.[n],vi=()=>ys()?.config,bi=n=>ys()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function xc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _s(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ic(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ec(){const n=K();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vs(){try{return typeof indexedDB=="object"}catch{return!1}}function bs(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}function xi(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="FirebaseError";class me extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Cc,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,et.prototype.create)}}class et{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?kc(i,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new me(r,c,s)}}function kc(n,e){try{let t=0,s="";for(;t<n.length;){const r=n.indexOf("{$",t);if(r===-1){s+=n.substring(t);break}const i=n.indexOf("}",r+2);if(i===-1){s+=n.substring(t);break}const o=n.substring(r+2,i),c=e[o];s+=n.substring(t,r)+(c!=null?String(c):`<${o}?>`),t=i+1}return s}catch{return n}}function Tc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ye(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(mr(i)&&mr(o)){if(!Ye(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function mr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function At(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function St(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ac(n,e){const t=new Sc(n,e);return t.subscribe.bind(t)}class Sc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Nc(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Mn),r.error===void 0&&(r.error=Mn),r.complete===void 0&&(r.complete=Mn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=1e3,Pc=2,Oc=4*60*60*1e3,jc=.5;function gr(n,e=Rc,t=Pc){const s=e*Math.pow(t,n),r=Math.round(jc*s*(Math.random()-.5)*2);return Math.min(Oc,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dc(n){return(await fetch(n,{credentials:"include"})).ok}class pe{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new wi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fc(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mc(n){return n===He?void 0:n}function Fc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Bc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Vc=D.INFO,$c={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},zc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=$c[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xs{constructor(e){this.name=e,this._logLevel=Vc,this._logHandler=zc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Wc=(n,e)=>e.some(t=>n instanceof t);let yr,_r;function Hc(){return yr||(yr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qc(){return _r||(_r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ii=new WeakMap,ss=new WeakMap,Ei=new WeakMap,Fn=new WeakMap,Is=new WeakMap;function Gc(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ue(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ii.set(t,n)}).catch(()=>{}),Is.set(e,n),e}function Kc(n){if(ss.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ss.set(n,e)}let rs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ss.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ei.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zc(n){rs=n(rs)}function Yc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Un(this),e,...t);return Ei.set(s,e.sort?e.sort():[e]),Ue(s)}:qc().includes(n)?function(...e){return n.apply(Un(this),e),Ue(Ii.get(this))}:function(...e){return Ue(n.apply(Un(this),e))}}function Jc(n){return typeof n=="function"?Yc(n):(n instanceof IDBTransaction&&Kc(n),Wc(n,Hc())?new Proxy(n,rs):n)}function Ue(n){if(n instanceof IDBRequest)return Gc(n);if(Fn.has(n))return Fn.get(n);const e=Jc(n);return e!==n&&(Fn.set(n,e),Is.set(e,n)),e}const Un=n=>Is.get(n);function Ci(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),c=Ue(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ue(o.result),l.oldVersion,l.newVersion,Ue(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Xc=["get","getKey","getAll","getAllKeys","count"],Qc=["put","add","delete","clear"],Bn=new Map;function vr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bn.get(e))return Bn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Qc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xc.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&l.done]))[0]};return Bn.set(e,i),i}Zc(n=>({...n,get:(e,t,s)=>vr(e,t)||n.get(e,t,s),has:(e,t)=>!!vr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function tl(n){return n.getComponent()?.type==="VERSION"}const is="@firebase/app",br="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new xs("@firebase/app"),nl="@firebase/app-compat",sl="@firebase/analytics-compat",rl="@firebase/analytics",il="@firebase/app-check-compat",al="@firebase/app-check",ol="@firebase/auth",cl="@firebase/auth-compat",ll="@firebase/database",dl="@firebase/data-connect",ul="@firebase/database-compat",hl="@firebase/functions",fl="@firebase/functions-compat",pl="@firebase/installations",ml="@firebase/installations-compat",gl="@firebase/messaging",yl="@firebase/messaging-compat",_l="@firebase/performance",vl="@firebase/performance-compat",bl="@firebase/remote-config",wl="@firebase/remote-config-compat",xl="@firebase/storage",Il="@firebase/storage-compat",El="@firebase/firestore",Cl="@firebase/ai",kl="@firebase/firestore-compat",Tl="firebase",Al="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]",Sl={[is]:"fire-core",[nl]:"fire-core-compat",[rl]:"fire-analytics",[sl]:"fire-analytics-compat",[al]:"fire-app-check",[il]:"fire-app-check-compat",[ol]:"fire-auth",[cl]:"fire-auth-compat",[ll]:"fire-rtdb",[dl]:"fire-data-connect",[ul]:"fire-rtdb-compat",[hl]:"fire-fn",[fl]:"fire-fn-compat",[pl]:"fire-iid",[ml]:"fire-iid-compat",[gl]:"fire-fcm",[yl]:"fire-fcm-compat",[_l]:"fire-perf",[vl]:"fire-perf-compat",[bl]:"fire-rc",[wl]:"fire-rc-compat",[xl]:"fire-gcs",[Il]:"fire-gcs-compat",[El]:"fire-fst",[kl]:"fire-fst-compat",[Cl]:"fire-vertex","fire-js":"fire-js",[Tl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Map,Nl=new Map,os=new Map;function wr(n,e){try{n.container.addComponent(e)}catch(t){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ae(n){const e=n.name;if(os.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;os.set(e,n);for(const t of jt.values())wr(t,n);for(const t of Nl.values())wr(t,n);return!0}function yt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function X(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new et("app","Firebase",Rl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=Al;function ki(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:as,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw we.create("bad-app-name",{appName:String(r)});if(t||(t=vi()),!t)throw we.create("no-options");const i=jt.get(r);if(i)if(Ye(t,i.options)){if(Ye(s,i.config))return i;throw we.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw we.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Uc(r);for(const l of os.values())o.addComponent(l);const c=new Pl(t,s,o);return jt.set(r,c),c}function Es(n=as){const e=jt.get(n);if(!e&&n===as&&vi())return ki();if(!e)throw we.create("no-app",{appName:n});return e}function Ol(){return Array.from(jt.values())}function ue(n,e,t){let s=Sl[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(o.join(" "));return}Ae(new pe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="firebase-heartbeat-database",Dl=1,Dt="firebase-heartbeat-store";let Vn=null;function Ti(){return Vn||(Vn=Ci(jl,Dl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Dt)}catch(t){console.warn(t)}}}}).catch(n=>{throw we.create("idb-open",{originalErrorMessage:n.message})})),Vn}async function Ll(n){try{const t=(await Ti()).transaction(Dt),s=await t.objectStore(Dt).get(Ai(n));return await t.done,s}catch(e){if(e instanceof me)Te.warn(e.message);else{const t=we.create("idb-get",{originalErrorMessage:e?.message});Te.warn(t.message)}}}async function xr(n,e){try{const s=(await Ti()).transaction(Dt,"readwrite");await s.objectStore(Dt).put(e,Ai(n)),await s.done}catch(t){if(t instanceof me)Te.warn(t.message);else{const s=we.create("idb-set",{originalErrorMessage:t?.message});Te.warn(s.message)}}}function Ai(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=1024,Fl=30;class Ul{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ir();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Fl){const r=$l(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Te.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ir(),{heartbeatsToSend:t,unsentEntries:s}=Bl(this._heartbeatsCache.heartbeats),r=yi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Te.warn(e),""}}}function Ir(){return new Date().toISOString().substring(0,10)}function Bl(n,e=Ml){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Er(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Er(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Vl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vs()?bs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ll(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Er(n){return yi(JSON.stringify({version:2,heartbeats:n})).length}function $l(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n){Ae(new pe("platform-logger",e=>new el(e),"PRIVATE")),Ae(new pe("heartbeat",e=>new Ul(e),"PRIVATE")),ue(is,br,n),ue(is,br,"esm2020"),ue("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zl("");function Si(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wl=Si,Ni=new et("auth","Firebase",Si());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new xs("@firebase/auth");function Jt(n,...e){hn.logLevel<=D.WARN&&hn.warn(`Auth (${Ut}): ${n}`,...e)}function Xt(n,...e){hn.logLevel<=D.ERROR&&hn.error(`Auth (${Ut}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,...e){throw Cs(n,...e)}function le(n,...e){return Cs(n,...e)}function xn(n,e,t){const s={...Wl(),[e]:t};return new et("auth","Firebase",s).create(e,{appName:n.name})}function he(n){return xn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hl(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&se(n,"argument-error"),xn(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cs(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ni.create(n,...e)}function b(n,e,...t){if(!n)throw Cs(e,...t)}function xe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xt(e),new Error(e)}function Se(n,e){n||xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){return typeof self<"u"&&self.location?.href||""}function ql(){return Cr()==="http:"||Cr()==="https:"}function Cr(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ql()||_s()||"connection"in navigator)?navigator.onLine:!0}function Kl(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Se(t>e,"Short delay should be less than long delay!"),this.isMobile=wc()||Ic()}get(){return Gl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e){Se(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jl=new Bt(3e4,6e4);function ge(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ye(n,e,t,s,r={}){return Pi(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=Ft({...o,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...i};return xc()||(d.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ws(n.emulatorConfig.host)&&(d.credentials="include"),Ri.fetch()(await Oi(n,n.config.apiHost,t,c),d)})}async function Pi(n,e,t){n._canInitEmulator=!1;const s={...Zl,...e};try{const r=new Ql(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yt(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yt(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yt(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yt(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xn(n,h,d);se(n,h)}}catch(r){if(r instanceof me)throw r;se(n,"network-request-failed",{message:String(r)})}}async function _t(n,e,t,s,r={}){const i=await ye(n,e,t,s,r);return"mfaPendingCredential"in i&&se(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Oi(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?ks(n.config,r):`${n.config.apiScheme}://${r}`;return Yl.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Xl(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ql{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(le(this.auth,"network-request-failed")),Jl.get())})}}function Yt(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=le(n,e,s);return r.customData._tokenResponse=t,r}function kr(n){return n!==void 0&&n.enterprise!==void 0}class ed{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xl(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function td(n,e){return ye(n,"GET","/v2/recaptchaConfig",ge(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(n,e){return ye(n,"POST","/v1/accounts:delete",e)}async function fn(n,e){return ye(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sd(n,e=!1){const t=Y(n),s=await t.getIdToken(e),r=Ts(s);b(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Nt($n(r.auth_time)),issuedAtTime:Nt($n(r.iat)),expirationTime:Nt($n(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function $n(n){return Number(n)*1e3}function Ts(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Xt("JWT malformed, contained fewer than 3 sections"),null;try{const r=_i(t);return r?JSON.parse(r):(Xt("Failed to decode base64 JWT payload"),null)}catch(r){return Xt("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Tr(n){const e=Ts(n);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof me&&rd(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function rd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nt(this.lastLoginAt),this.creationTime=Nt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n){const e=n.auth,t=await n.getIdToken(),s=await gt(n,fn(e,{idToken:t}));b(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=r.providerUserInfo?.length?ji(r.providerUserInfo):[],o=od(n.providerData,i),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!o?.length,d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ls(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function ad(n){const e=Y(n);await pn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function od(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ji(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(n,e){const t=await Pi(n,{},async()=>{const s=Ft({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await Oi(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&ws(n.emulatorConfig.host)&&(l.credentials="include"),Ri.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ld(n,e){return ye(n,"POST","/v2/accounts:revokeToken",ge(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(e.length!==0,"internal-error");const t=Tr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await cd(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new ct;return s&&(b(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(b(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(b(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n,e){b(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ce{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new id(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ls(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await gt(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sd(this,e)}reload(){return ad(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await pn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(X(this.auth.app))return Promise.reject(he(this.auth));const e=await this.getIdToken();return await gt(this,nd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:y,emailVerified:v,isAnonymous:S,providerData:V,stsTokenManager:W}=t;b(y&&W,e,"internal-error");const L=ct.fromJSON(this.name,W);b(typeof y=="string",e,"internal-error"),Re(s,e.name),Re(r,e.name),b(typeof v=="boolean",e,"internal-error"),b(typeof S=="boolean",e,"internal-error"),Re(i,e.name),Re(o,e.name),Re(c,e.name),Re(l,e.name),Re(d,e.name),Re(h,e.name);const k=new ce({uid:y,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:L,createdAt:d,lastLoginAt:h});return V&&Array.isArray(V)&&(k.providerData=V.map(ie=>({...ie}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,t,s=!1){const r=new ct;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await pn(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];b(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?ji(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,c=new ct;c.updateFromIdToken(s);const l=new ce({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ls(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map;function Ie(n){Se(n instanceof Function,"Expected a class definition");let e=Ar.get(n);return e?(Se(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ar.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Di.type="NONE";const Sr=Di;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n,e,t){return`firebase:${n}:${e}:${t}`}class Ke{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Qt(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fn(this.auth,{idToken:e}).catch(()=>{});return t?ce._fromGetAccountInfoResponse(this.auth,t,e):null}return ce._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new Ke(Ie(Sr),e,s);const r=(await Promise.all(t.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let i=r[0]||Ie(Sr);const o=Qt(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const h=await d._get(o);if(h){let y;if(typeof h=="string"){const v=await fn(e,{idToken:h}).catch(()=>{});if(!v)break;y=await ce._fromGetAccountInfoResponse(e,v,h)}else y=ce._fromJSON(e,h);d!==i&&(c=y),i=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ke(i,e,s):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Ke(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ui(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Li(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vi(e))return"Blackberry";if($i(e))return"Webos";if(Mi(e))return"Safari";if((e.includes("chrome/")||Fi(e))&&!e.includes("edge/"))return"Chrome";if(Bi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Li(n=K()){return/firefox\//i.test(n)}function Mi(n=K()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fi(n=K()){return/crios\//i.test(n)}function Ui(n=K()){return/iemobile/i.test(n)}function Bi(n=K()){return/android/i.test(n)}function Vi(n=K()){return/blackberry/i.test(n)}function $i(n=K()){return/webos/i.test(n)}function As(n=K()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dd(n=K()){return As(n)&&!!window.navigator?.standalone}function ud(){return Ec()&&document.documentMode===10}function zi(n=K()){return As(n)||Bi(n)||$i(n)||Vi(n)||/windows phone/i.test(n)||Ui(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,e=[]){let t;switch(n){case"Browser":t=Nr(K());break;case"Worker":t=`${Nr(K())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ut}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(n,e={}){return ye(n,"GET","/v2/passwordPolicy",ge(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=6;class md{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??pd,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new hd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ni,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ie(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await Ke.create(this,e)}catch(s){Jt(`Failed to initialize persistence: ${s}`),this.persistenceManager=await Ke.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(s){Jt(`Failed to initialize current user: ${s}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fn(this,{idToken:e}),s=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(X(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(X(this.app))return Promise.reject(he(this));const t=e?Y(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return X(this.app)?Promise.reject(he(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return X(this.app)?Promise.reject(he(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fd(this),t=new md(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new et("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ld(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ie(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await Ke.create(this,[Ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}).catch(l=>{if(!o)if(typeof t!="function"&&t.error)t.error(l);else if(s)s(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=t?.message||String(t),r=xn(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(X(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Jt(`Error while retrieving App Check token: ${e.error}`),e?.token}}function _e(n){return Y(n)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ac(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yd(n){In=n}function Hi(n){return In.loadJS(n)}function _d(){return In.recaptchaEnterpriseScript}function vd(){return In.gapiScript}function bd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wd{constructor(){this.enterprise=new xd}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xd{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="recaptcha-enterprise",qi="NO_RECAPTCHA",Pr="onFirebaseAuthREInstanceReady";class Oe{constructor(e){this.type=Id,this.auth=_e(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{td(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new ed(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function r(i,o,c){const l=window.grecaptcha;kr(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(qi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wd().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(async c=>{if(!t&&kr(window.grecaptcha)&&Oe.scriptInjectionDeferred)await Oe.scriptInjectionDeferred.promise,r(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_d();l.length!==0&&(l+=c+`&onload=${Pr}`),Oe.scriptInjectionDeferred=new wi,window[Pr]=()=>{Oe.scriptInjectionDeferred?.resolve()},Hi(l).then(()=>Oe.scriptInjectionDeferred?.promise).then(()=>{r(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}Oe.scriptInjectionDeferred=null;async function Or(n,e,t,s=!1,r=!1){const i=new Oe(n);let o;if(r)o=qi;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function mn(n,e,t,s,r){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Or(n,e,t,t==="getOobCode");return s(n,i)}else return s(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Or(n,e,t,t==="getOobCode");return s(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,e){const t=yt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ye(i,e??{}))return r;se(r,"already-initialized")}return t.initialize({options:e})}function Cd(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ie);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function kd(n,e,t){const s=_e(n);b(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Gi(e),{host:o,port:c}=Td(e),l=c===null?"":`:${c}`,d={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){b(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),b(Ye(d,s.config.emulator)&&Ye(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,ws(o)?Dc(`${i}//${o}${l}`):Ad()}function Gi(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Td(n){const e=Gi(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:jr(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:jr(o)}}}function jr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ad(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,t){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}async function Sd(n,e){return ye(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(n,e){return _t(n,"POST","/v1/accounts:signInWithPassword",ge(n,e))}async function Ki(n,e){return ye(n,"POST","/v1/accounts:sendOobCode",ge(n,e))}async function Rd(n,e){return Ki(n,e)}async function Pd(n,e){return Ki(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(n,e){return _t(n,"POST","/v1/accounts:signInWithEmailLink",ge(n,e))}async function jd(n,e){return _t(n,"POST","/v1/accounts:signInWithEmailLink",ge(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Ss{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Lt(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Lt(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mn(e,t,"signInWithPassword",Nd);case"emailLink":return Od(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mn(e,s,"signUpPassword",Sd);case"emailLink":return jd(e,{idToken:t,email:this._email,oobCode:this._password});default:se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(n,e){return _t(n,"POST","/v1/accounts:signInWithIdp",ge(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="http://localhost";class Je extends Ss{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new Je(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,lt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}buildRequest(){const e={requestUri:Dd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ft(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Md(n){const e=At(St(n)).link,t=e?At(St(e)).deep_link_id:null,s=At(St(n)).deep_link_id;return(s?At(St(s)).link:null)||s||t||e||n}class Ns{constructor(e){const t=At(St(e)),s=t.apiKey??null,r=t.oobCode??null,i=Ld(t.mode??null);b(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Md(e);try{return new Ns(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.providerId=vt.PROVIDER_ID}static credential(e,t){return Lt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ns.parseLink(t);return b(s,"argument-error"),Lt._fromEmailAndCode(e,s.code,s.tenantId)}}vt.PROVIDER_ID="password";vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Rs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Vt{constructor(){super("facebook.com")}static credential(e){return Je._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Vt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Je._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return be.credential(t,s)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Vt{constructor(){super("github.com")}static credential(e){return Je._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Vt{constructor(){super("twitter.com")}static credential(e,t){return Je._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Le.credential(t,s)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(n,e){return _t(n,"POST","/v1/accounts:signUp",ge(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await ce._fromIdTokenResponse(e,s,r),o=Dr(s);return new $e({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Dr(s);return new $e({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Dr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends me{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,gn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new gn(e,t,s,r)}}function Zi(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gn._fromErrorAndOperation(n,i,e,s):i})}async function Ud(n,e,t=!1){const s=await gt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $e._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(n,e,t=!1){const{auth:s}=n;if(X(s.app))return Promise.reject(he(s));const r="reauthenticate";try{const i=await gt(n,Zi(s,r,e,n),t);b(i.idToken,s,"internal-error");const o=Ts(i.idToken);b(o,s,"internal-error");const{sub:c}=o;return b(n.uid===c,s,"user-mismatch"),$e._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&se(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n,e,t=!1){if(X(n.app))return Promise.reject(he(n));const s="signIn",r=await Zi(n,s,e),i=await $e._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function Vd(n,e){return Yi(_e(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(n,e){return _t(n,"POST","/v1/accounts:signInWithCustomToken",ge(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(n,e){if(X(n.app))return Promise.reject(he(n));const t=_e(n),s=await $d(t,{token:e,returnSecureToken:!0}),r=await $e._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(n){const e=_e(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Wd(n,e,t){const s=_e(n);await mn(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Pd)}async function Hd(n,e,t){if(X(n.app))return Promise.reject(he(n));const s=_e(n),o=await mn(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fd).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ji(n),l}),c=await $e._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function qd(n,e,t){return X(n.app)?Promise.reject(he(n)):Vd(Y(n),vt.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ji(n),s})}async function Lr(n,e){const t=Y(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await Rd(t.auth,r);i!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(n,e){return ye(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(n,e){const{displayName:t,photoURL:s}=e;if(t===void 0&&s===void 0)return;const r=Y(n),o={idToken:await r.getIdToken(),displayName:t,photoUrl:s,returnSecureToken:!0},c=await gt(r,Gd(r.auth,o));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const l=r.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function Zd(n,e,t,s){return Y(n).onIdTokenChanged(e,t,s)}function Yd(n,e,t){return Y(n).beforeAuthStateChanged(e,t)}function Jd(n,e,t,s){return Y(n).onAuthStateChanged(e,t,s)}function Xd(n){return Y(n).signOut()}const yn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yn,"1"),this.storage.removeItem(yn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=1e3,eu=10;class Qi extends Xi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ud()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,eu):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Qd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qi.type="LOCAL";const tu=Qi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Xi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ea.type="SESSION";const ta=ea;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new En(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async d=>d(t.origin,i)),l=await nu(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}En.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const d=Ps("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(y){const v=y;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return window}function ru(n){fe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function iu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function au(){return navigator?.serviceWorker?.controller||null}function ou(){return na()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="firebaseLocalStorageDb",cu=1,_n="firebaseLocalStorage",ra="fbase_key";class $t{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cn(n,e){return n.transaction([_n],e?"readwrite":"readonly").objectStore(_n)}function lu(){const n=indexedDB.deleteDatabase(sa);return new $t(n).toPromise()}function ia(){const n=indexedDB.open(sa,cu);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(_n,{keyPath:ra})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(_n)?e(s):(s.close(),await lu(),e(await ia()))})})}async function Mr(n,e,t){const s=Cn(n,!0).put({[ra]:e,value:t});return new $t(s).toPromise()}async function du(n,e){const t=Cn(n,!1).get(e),s=await new $t(t).toPromise();return s===void 0?null:s.value}function Fr(n,e){const t=Cn(n,!0).delete(e);return new $t(t).toPromise()}const uu=800,hu=3;class aa{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ia(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>hu)throw s;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=En._getInstance(ou()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await iu(),!this.activeServiceWorker)return;this.sender=new su(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||au()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Mr(e,yn,"1"),await Fr(e,yn)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mr(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>du(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Cn(r,!1).getAll();return new $t(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||Jt(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}aa.type="LOCAL";const fu=aa;new Bt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e){return e?Ie(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Ss{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pu(n){return Yi(n.auth,new Os(n),n.bypassAuthState)}function mu(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Bd(t,new Os(n),n.bypassAuthState)}async function gu(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Ud(t,new Os(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pu;case"linkViaPopup":case"linkViaRedirect":return gu;case"reauthViaPopup":case"reauthViaRedirect":return mu;default:se(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Bt(2e3,1e4);async function _u(n,e,t){if(X(n.app))return Promise.reject(le(n,"operation-not-supported-in-this-environment"));const s=_e(n);Hl(n,e,Rs);const r=oa(s,t);return new qe(s,"signInViaPopup",e,r).executeNotNull()}class qe extends ca{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,qe.currentPopupAction&&qe.currentPopupAction.cancel(),qe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=Ps();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qe.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yu.get())};e()}}qe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="pendingRedirect",en=new Map;class bu extends ca{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=en.get(this.auth._key());if(!e){try{const s=await wu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}en.set(this.auth._key(),e)}return this.bypassAuthState||en.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wu(n,e){const t=Eu(e),s=Iu(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function xu(n,e){en.set(n._key(),e)}function Iu(n){return Ie(n._redirectPersistence)}function Eu(n){return Qt(vu,n.config.apiKey,n.name)}async function Cu(n,e,t=!1){if(X(n.app))return Promise.reject(he(n));const s=_e(n),r=oa(s,e),o=await new bu(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=10*60*1e3;class Tu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Au(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!la(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(le(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ku&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ur(e))}saveEventToCache(e){this.cachedEventUids.add(Ur(e)),this.lastProcessedEventTime=Date.now()}}function Ur(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function la({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Au(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return la(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(n,e={}){return ye(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ru=/^https?/;async function Pu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Su(n);for(const t of e)try{if(Ou(t))return}catch{}se(n,"unauthorized-domain")}function Ou(n){const e=cs(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Ru.test(t))return!1;if(Nu.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Bt(3e4,6e4);function Br(){const n=fe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Du(n){return new Promise((e,t)=>{function s(){Br(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Br(),t(le(n,"network-request-failed"))},timeout:ju.get()})}if(fe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(fe().gapi?.load)s();else{const r=bd("iframefcb");return fe()[r]=()=>{gapi.load?s():t(le(n,"network-request-failed"))},Hi(`${vd()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw tn=null,e})}let tn=null;function Lu(n){return tn=tn||Du(n),tn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Bt(5e3,15e3),Fu="__/auth/iframe",Uu="emulator/auth/iframe",Bu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $u(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ks(e,Uu):`https://${n.config.authDomain}/${Fu}`,s={apiKey:e.apiKey,appName:n.name,v:Ut},r=Vu.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ft(s).slice(1)}`}async function zu(n){const e=await Lu(n),t=fe().gapi;return b(t,n,"internal-error"),e.open({where:document.body,url:$u(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bu,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=le(n,"network-request-failed"),c=fe().setTimeout(()=>{i(o)},Mu.get());function l(){fe().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hu=500,qu=600,Gu="_blank",Ku="http://localhost";class Vr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zu(n,e,t,s=Hu,r=qu){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...Wu,width:s.toString(),height:r.toString(),top:i,left:o},d=K().toLowerCase();t&&(c=Fi(d)?Gu:t),Li(d)&&(e=e||Ku,l.scrollbars="yes");const h=Object.entries(l).reduce((v,[S,V])=>`${v}${S}=${V},`,"");if(dd(d)&&c!=="_self")return Yu(e||"",c),new Vr(null);const y=window.open(e||"",c,h);b(y,n,"popup-blocked");try{y.focus()}catch{}return new Vr(y)}function Yu(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="__/auth/handler",Xu="emulator/auth/handler",Qu=encodeURIComponent("fac");async function $r(n,e,t,s,r,i){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ut,eventId:r};if(e instanceof Rs){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Tc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,y]of Object.entries({}))o[h]=y}if(e instanceof Vt){const h=e.getScopes().filter(y=>y!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),d=l?`#${Qu}=${encodeURIComponent(l)}`:"";return`${eh(n)}?${Ft(c).slice(1)}${d}`}function eh({config:n}){return n.emulator?ks(n,Xu):`https://${n.authDomain}/${Ju}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="webStorageSupport";class th{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ta,this._completeRedirectFn=Cu,this._overrideRedirectResult=xu}async _openPopup(e,t,s,r){Se(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await $r(e,t,s,cs(),r);return Zu(e,i,Ps())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await $r(e,t,s,cs(),r);return ru(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Se(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await zu(e),s=new Tu(e);return t.register("authEvent",r=>(b(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zn,{type:zn},r=>{const i=r?.[0]?.[zn];i!==void 0&&t(!!i),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zi()||Mi()||As()}}const nh=th;var zr="@firebase/auth",Wr="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ih(n){Ae(new pe("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wi(n)},d=new gd(s,r,i,l);return Cd(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ae(new pe("auth-internal",e=>{const t=_e(e.getProvider("auth").getImmediate());return(s=>new sh(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ue(zr,Wr,rh(n)),ue(zr,Wr,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=5*60,oh=bi("authIdTokenMaxAge")||ah;let Hr=null;const ch=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>oh)return;const r=t?.token;Hr!==r&&(Hr=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function lh(n=Es()){const e=yt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ed(n,{popupRedirectResolver:nh,persistence:[fu,tu,ta]}),s=bi("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=ch(i.toString());Yd(t,o,()=>o(t.currentUser)),Zd(t,c=>o(c))}}const r=bc("auth");return r&&kd(t,`http://${r}`),t}function dh(){return document.getElementsByTagName("head")?.[0]??document}yd({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=le("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",dh().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ih("Browser");var uh="firebase",hh="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue(uh,hh,"app");const da="@firebase/installations",js="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=1e4,ha=`w:${js}`,fa="FIS_v2",fh="https://firebaseinstallations.googleapis.com/v1",ph=60*60*1e3,mh="installations",gh="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xe=new et(mh,gh,yh);function pa(n){return n instanceof me&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma({projectId:n}){return`${fh}/projects/${n}/installations`}function ga(n){return{token:n.token,requestStatus:2,expiresIn:vh(n.expiresIn),creationTime:Date.now()}}async function ya(n,e){const s=(await e.json()).error;return Xe.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function _a({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function _h(n,{refreshToken:e}){const t=_a(n);return t.append("Authorization",bh(e)),t}async function va(n){const e=await n();return e.status>=500&&e.status<600?n():e}function vh(n){return Number(n.replace("s","000"))}function bh(n){return`${fa} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=ma(n),r=_a(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={fid:t,authVersion:fa,appId:n.appId,sdkVersion:ha},c={method:"POST",headers:r,body:JSON.stringify(o)},l=await va(()=>fetch(s,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:ga(d.authToken)}}else throw await ya("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=/^[cdef][\w-]{21}$/,ds="";function Eh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Ch(n);return Ih.test(t)?t:ds}catch{return ds}}function Ch(n){return xh(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map;function xa(n,e){const t=kn(n);Ia(t,e),kh(t,e)}function Ia(n,e){const t=wa.get(n);if(t)for(const s of t)s(e)}function kh(n,e){const t=Th();t&&t.postMessage({key:n,fid:e}),Ah()}let Ge=null;function Th(){return!Ge&&"BroadcastChannel"in self&&(Ge=new BroadcastChannel("[Firebase] FID Change"),Ge.onmessage=n=>{Ia(n.data.key,n.data.fid)}),Ge}function Ah(){wa.size===0&&Ge&&(Ge.close(),Ge=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="firebase-installations-database",Nh=1,Qe="firebase-installations-store";let Wn=null;function Ds(){return Wn||(Wn=Ci(Sh,Nh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Qe)}}})),Wn}async function vn(n,e){const t=kn(n),r=(await Ds()).transaction(Qe,"readwrite"),i=r.objectStore(Qe),o=await i.get(t);return await i.put(e,t),await r.done,(!o||o.fid!==e.fid)&&xa(n,e.fid),e}async function Ea(n){const e=kn(n),s=(await Ds()).transaction(Qe,"readwrite");await s.objectStore(Qe).delete(e),await s.done}async function Tn(n,e){const t=kn(n),r=(await Ds()).transaction(Qe,"readwrite"),i=r.objectStore(Qe),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!o||o.fid!==c.fid)&&xa(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(n){let e;const t=await Tn(n.appConfig,s=>{const r=Rh(s),i=Ph(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===ds?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Rh(n){const e=n||{fid:Eh(),registrationStatus:0};return Ca(e)}function Ph(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Xe.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Oh(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jh(n)}:{installationEntry:e}}async function Oh(n,e){try{const t=await wh(n,e);return vn(n.appConfig,t)}catch(t){throw pa(t)&&t.customData.serverCode===409?await Ea(n.appConfig):await vn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function jh(n){let e=await qr(n.appConfig);for(;e.registrationStatus===1;)await ba(100),e=await qr(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Ls(n);return s||t}return e}function qr(n){return Tn(n,e=>{if(!e)throw Xe.create("installation-not-found");return Ca(e)})}function Ca(n){return Dh(n)?{fid:n.fid,registrationStatus:0}:n}function Dh(n){return n.registrationStatus===1&&n.registrationTime+ua<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh({appConfig:n,heartbeatServiceProvider:e},t){const s=Mh(n,t),r=_h(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={installation:{sdkVersion:ha,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(o)},l=await va(()=>fetch(s,c));if(l.ok){const d=await l.json();return ga(d)}else throw await ya("Generate Auth Token",l)}function Mh(n,{fid:e}){return`${ma(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(n,e=!1){let t;const s=await Tn(n.appConfig,i=>{if(!ka(i))throw Xe.create("not-registered");const o=i.authToken;if(!e&&Bh(o))return i;if(o.requestStatus===1)return t=Fh(n,e),i;{if(!navigator.onLine)throw Xe.create("app-offline");const c=$h(i);return t=Uh(n,c),c}});return t?await t:s.authToken}async function Fh(n,e){let t=await Gr(n.appConfig);for(;t.authToken.requestStatus===1;)await ba(100),t=await Gr(n.appConfig);const s=t.authToken;return s.requestStatus===0?Ms(n,e):s}function Gr(n){return Tn(n,e=>{if(!ka(e))throw Xe.create("not-registered");const t=e.authToken;return zh(t)?{...e,authToken:{requestStatus:0}}:e})}async function Uh(n,e){try{const t=await Lh(n,e),s={...e,authToken:t};return await vn(n.appConfig,s),t}catch(t){if(pa(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ea(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await vn(n.appConfig,s)}throw t}}function ka(n){return n!==void 0&&n.registrationStatus===2}function Bh(n){return n.requestStatus===2&&!Vh(n)}function Vh(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ph}function $h(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function zh(n){return n.requestStatus===1&&n.requestTime+ua<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n){const e=n,{installationEntry:t,registrationPromise:s}=await Ls(e);return s?s.catch(console.error):Ms(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n,e=!1){const t=n;return await qh(t),(await Ms(t,e)).token}async function qh(n){const{registrationPromise:e}=await Ls(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){if(!n||!n.options)throw Hn("App Configuration");if(!n.name)throw Hn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Hn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Hn(n){return Xe.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="installations",Kh="installations-internal",Zh=n=>{const e=n.getProvider("app").getImmediate(),t=Gh(e),s=yt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Yh=n=>{const e=n.getProvider("app").getImmediate(),t=yt(e,Ta).getImmediate();return{getId:()=>Wh(t),getToken:r=>Hh(t,r)}};function Jh(){Ae(new pe(Ta,Zh,"PUBLIC")),Ae(new pe(Kh,Yh,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jh();ue(da,js);ue(da,js,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="analytics",Xh="firebase_id",Qh="origin",ef=60*1e3,tf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fs="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new xs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Q=new et("analytics","Analytics",nf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n){if(!n.startsWith(Fs)){const e=Q.create("invalid-gtag-resource",{gtagURL:n});return G.warn(e.message),""}return n}function Aa(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function rf(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function af(n,e){const t=rf("firebase-js-sdk-policy",{createScriptURL:sf}),s=document.createElement("script"),r=`${Fs}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function of(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function cf(n,e,t,s,r,i){const o=s[r];try{if(o)await e[o];else{const l=(await Aa(t)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){G.error(c)}n("config",r,i)}async function lf(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const c=await Aa(t);for(const l of o){const d=c.find(y=>y.measurementId===l),h=d&&e[d.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){G.error(i)}}function df(n,e,t,s){async function r(i,...o){try{if(i==="event"){const[c,l]=o;await lf(n,e,t,c,l)}else if(i==="config"){const[c,l]=o;await cf(n,e,t,s,c,l)}else if(i==="consent"){const[c,l]=o;n("consent",c,l)}else if(i==="get"){const[c,l,d]=o;n("get",c,l,d)}else if(i==="set"){const[c]=o;n("set",c)}else n(i,...o)}catch(c){G.error(c)}}return r}function uf(n,e,t,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=df(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function hf(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Fs)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=30,pf=1e3;class mf{constructor(e={},t=pf){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Sa=new mf;function gf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function yf(n){const{appId:e,apiKey:t}=n,s={method:"GET",headers:gf(t)},r=tf.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();c.error?.message&&(o=c.error.message)}catch{}throw Q.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function _f(n,e=Sa,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Q.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Q.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new wf;return setTimeout(async()=>{c.abort()},ef),Na({appId:s,apiKey:r,measurementId:i},o,c,e)}async function Na(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=Sa){const{appId:i,measurementId:o}=n;try{await vf(s,e)}catch(c){if(o)return G.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw c}try{const c=await yf(n);return r.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!bf(l)){if(r.deleteThrottleMetadata(i),o)return G.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw c}const d=Number(l?.customData?.httpStatus)===503?gr(t,r.intervalMillis,ff):gr(t,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return r.setThrottleMetadata(i,h),G.debug(`Calling attemptFetch again in ${d} millis`),Na(n,h,s,r)}}function vf(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Q.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bf(n){if(!(n instanceof me)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class wf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xf(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,o={...s,send_to:i};n("event",t,o)}}async function If(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(){if(vs())try{await bs()}catch(n){return G.warn(Q.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return G.warn(Q.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cf(n,e,t,s,r,i,o){const c=_f(n);c.then(v=>{t[v.measurementId]=v.appId,n.options.measurementId&&v.measurementId!==n.options.measurementId&&G.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>G.error(v)),e.push(c);const l=Ef().then(v=>{if(v)return s.getId()}),[d,h]=await Promise.all([c,l]);hf(i)||af(i,d.measurementId),r("js",new Date);const y=o?.config??{};return y[Qh]="firebase",y.update=!0,h!=null&&(y[Xh]=h),r("config",d.measurementId,y),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.app=e}_delete(){return delete dt[this.app.options.appId],Promise.resolve()}}let dt={},Kr=[];const Zr={};let qn="dataLayer",Tf="gtag",Yr,Us,Jr=!1;function Af(){const n=[];if(_s()&&n.push("This is a browser extension environment."),xi()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Q.create("invalid-analytics-context",{errorInfo:e});G.warn(t.message)}}function Sf(n,e,t){Af();const s=n.options.appId;if(!s)throw Q.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)G.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Q.create("no-api-key");if(dt[s]!=null)throw Q.create("already-exists",{id:s});if(!Jr){of(qn);const{wrappedGtag:i,gtagCore:o}=uf(dt,Kr,Zr,qn,Tf);Us=i,Yr=o,Jr=!0}return dt[s]=Cf(n,Kr,Zr,e,Yr,qn,t),new kf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n=Es()){n=Y(n);const e=yt(n,bn);return e.isInitialized()?e.getImmediate():Rf(n)}function Rf(n,e={}){const t=yt(n,bn);if(t.isInitialized()){const r=t.getImmediate();if(Ye(e,t.getOptions()))return r;throw Q.create("already-initialized")}return t.initialize({options:e})}async function Pf(){if(_s()||!xi()||!vs())return!1;try{return await bs()}catch{return!1}}function Of(n,e,t){n=Y(n),If(Us,dt[n.app.options.appId],e,t).catch(s=>G.error(s))}function jf(n,e,t,s){n=Y(n),xf(Us,dt[n.app.options.appId],e,t,s).catch(r=>G.error(r))}const Xr="@firebase/analytics",Qr="0.10.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){Ae(new pe(bn,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Sf(s,r,t)},"PUBLIC")),Ae(new pe("analytics-internal",n,"PRIVATE")),ue(Xr,Qr),ue(Xr,Qr,"esm2020");function n(e){try{const t=e.getProvider(bn).getImmediate();return{logEvent:(s,r,i)=>jf(t,s,r,i),setUserProperties:(s,r)=>Of(t,s,r)}}catch(t){throw Q.create("interop-component-reg-failed",{reason:t})}}}Df();const Lf={apiKey:"AIzaSyD77fQHtztMAx_FfLMvv2ujQC9tYFh7Npg",authDomain:"bharosa-cd1e6.firebaseapp.com",projectId:"bharosa-cd1e6",storageBucket:"bharosa-cd1e6.firebasestorage.app",messagingSenderId:"227881717805",appId:"1:227881717805:web:f8e9515a73fcb583b368a4",measurementId:"G-XJLDW87PTM"},Ra=Ol().length?Es():ki(Lf),ze=lh(Ra),Mf=new be;typeof window<"u"&&Pf().then(n=>{n&&Nf(Ra)}).catch(()=>{});function An(n,e){const s=(e??"/v1"??"/v1").trim().replace(/\/+$/,""),r=n.startsWith("/")?n:`/${n}`;return s.endsWith("/v1")&&r.startsWith("/v1/")?`${s}${r.slice(3)}`:!s.endsWith("/v1")&&!r.startsWith("/v1/")&&!r.startsWith("/healthz")&&!r.startsWith("/readyz")&&!r.startsWith("/docs")?`${s}/v1${r}`:`${s}${r}`}class Ff{baseUrl;accessToken;getToken;constructor(e){this.baseUrl=e.baseUrl.replace(/\/$/,""),this.accessToken=e.accessToken,this.getToken=e.getToken}setAccessToken(e){this.accessToken=e}setTokenProvider(e){this.getToken=e}resolveUrl(e){return An(e,this.baseUrl)}async request(e,t={},s=!1){const r=this.resolveUrl(e),i={"Content-Type":"application/json",...t.headers};let o=this.accessToken;if(!o&&this.getToken)try{const l=await this.getToken();l&&(o=l)}catch{}o&&(i.Authorization=`Bearer ${o}`);const c=await fetch(r,{...t,headers:i});if(c.status===401&&!s&&this.getToken)try{const l=await this.getToken();if(l){i.Authorization=`Bearer ${l}`;const d=await fetch(r,{...t,headers:i});if(d.ok)return d.json()}}catch{}if(!c.ok){const l=await c.json().catch(()=>({})),d=new Error(l.message||`API request failed with status ${c.status}`);throw d.code=l.code,d.status=c.status,d}return c.json()}async getNonce(){return this.request("/v1/auth/nonce")}async verifySIWE(e,t){const s=await this.request("/v1/auth/verify",{method:"POST",body:JSON.stringify({message:e,signature:t})});return s.accessToken&&(this.accessToken=s.accessToken),s}async linkWallet(e,t,s="HOLDER"){return this.request("/v1/auth/link-wallet",{method:"POST",body:JSON.stringify({message:e,signature:t,persona:s})})}async unlinkWallet(){return this.request("/v1/auth/unlink-wallet",{method:"POST"})}async refresh(e){const t=await this.request("/v1/auth/refresh",{method:"POST",body:JSON.stringify({refreshToken:e})});return t.accessToken&&(this.accessToken=t.accessToken),t}async logout(){const e=await this.request("/v1/auth/logout",{method:"POST"});return this.accessToken=void 0,e}async getMe(){return this.request("/v1/auth/me")}}const ei=new Ff({baseUrl:"/v1"}),us=[{id:"priya",uid:"demo-priya-sharma",email:"priya.sharma@bharosa.demo",name:"Priya Sharma",role:"Student (Holder)",badge:"Student",subtitle:"Has a credential and an encrypted certificate",persona:"HOLDER",description:"DID registered, 1 credential from the university, 1 encrypted certificate asset, one pending access request from TechCorp",walletAddress:"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",privateKey:"0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",initials:"PS"},{id:"chennai",uid:"demo-chennai-univ",email:"dean.chennai@bharosa.demo",name:"Chennai University",role:"Issuer",badge:"Issuer",subtitle:"Approved issuer of credentials",persona:"ISSUER",description:"Approved as trusted issuer, 3 credentials issued, 1 revoked",walletAddress:"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",privateKey:"0x5de4111afa1a4b94908f83103eb2173f1a4a48e4b2f761bd5709b10f842196fa",initials:"CU"},{id:"techcorp",uid:"demo-techcorp-hr",email:"hr.techcorp@bharosa.demo",name:"TechCorp HR",role:"Verifier / Employer",badge:"Verifier",subtitle:"Verifies candidate credentials",persona:"VERIFIER",description:"DID registered, one active grant from Priya (expiring soon), one rejected request",walletAddress:"0x90F79bf6EB2c4f870365E785982E1f101E93b906",privateKey:"0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",initials:"TH"},{id:"arjun",uid:"demo-arjun-mehta",email:"arjun.mehta@bharosa.demo",name:"Arjun Mehta",role:"Student (Holder)",badge:"Student",subtitle:"Fresh account to start from scratch",persona:"HOLDER",description:'DID registered, empty wallet, for "start from scratch" demos',walletAddress:"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",privateKey:"0x47e179ec34004871170e4b1ec414db315a4b760e886cd3d675ab96ff4e069d49",initials:"AM"},{id:"admin",uid:"demo-bharosa-admin",email:"admin@bharosa.demo",name:"Bharosa Admin",role:"Admin",badge:"Admin",subtitle:"Manages issuers and security alerts",persona:"ADMIN",description:"ADMIN_ROLE on-chain, sees the security alerts and issuer management",walletAddress:"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",privateKey:"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",initials:"BA"}];function Uf(n){const e=yo(n);return ci(t=>{let s=!1;const i={request:async({method:o,params:c=[]})=>{const l=t.chains[0],d=l?.rpcUrls?.default?.http?.[0]||"http://127.0.0.1:8545";switch(o){case"eth_requestAccounts":case"eth_accounts":return s=!0,[e.address];case"eth_chainId":return`0x${(l?.id||31337).toString(16)}`;case"personal_sign":{const[h,y]=c;let v=h;if(vo(h))try{v=bo(h)}catch{v=h}return await e.signMessage({message:v})}case"eth_signTypedData_v4":{const[h,y]=c,v=typeof y=="string"?JSON.parse(y):y;return await e.signTypedData(v)}case"eth_sendTransaction":{const[h]=c;return await Ys({account:e,chain:l,transport:We(d)}).sendTransaction(h)}default:{const y=await(await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:Date.now(),method:o,params:c})})).json();if(y.error)throw new Error(y.error.message||`RPC error for ${o}`);return y.result}}},on:()=>i,removeListener:()=>i};return{id:"demo-wallet",name:"Bharosa Demo Signer",type:"demoWallet",async connect({chainId:o}={}){s=!0;const c=o||t.chains[0]?.id||31337;return{accounts:[e.address],chainId:c}},async disconnect(){s=!1},async getAccounts(){return s?[e.address]:[e.address]},async getChainId(){return t.chains[0]?.id||31337},async isAuthorized(){return!0},async getProvider(){return i},async getClient({chainId:o}={}){const c=t.chains.find(l=>l.id===o)||t.chains[0];return Ys({account:e,chain:c,transport:_o(i)})},onAccountsChanged(){},onChainChanged(){},onDisconnect(){}}})}const Pa=u.createContext(void 0);function Bf({children:n}){const[e,t]=u.useState(null),[s,r]=u.useState(null),[i,o]=u.useState(null),[c,l]=u.useState(!0),{disconnect:d}=li(),{connectAsync:h}=wo(),y=eo(),v=u.useCallback(async()=>{if(!e)return null;if("isDemo"in e&&e.isDemo)return`demo-jwt-:${e.uid}:${e.email}:${e.displayName}`;try{return await e.getIdToken()}catch{return null}},[e]);u.useEffect(()=>{ei.setTokenProvider(v)},[v]);const S=u.useCallback(async()=>{try{if(!await v())return r(null),null;const F=await ei.getMe(),j={uid:F.uid,email:F.email,displayName:F.displayName,persona:F.persona||"HOLDER",walletAddress:F.walletAddress||null,onChainRoles:F.onChainRoles||["HOLDER"],didRegistered:!!F.didRegistered,isDemo:!!F.isDemo};return r(j),j}catch(I){return console.warn("[AuthProvider] Failed to refresh account profile:",I),null}},[v]),V=u.useCallback(async I=>{o(I),sessionStorage.setItem("bharosa_active_demo",I.id);try{d(),await h({connector:Uf(I.privateKey)})}catch(j){console.warn("[AuthProvider] Demo connector connection notice:",j)}const F={uid:I.uid,email:I.email,displayName:I.name,persona:I.persona,role:I.role,walletAddress:I.walletAddress,isDemo:!0};t(F),r({uid:I.uid,email:I.email,displayName:I.name,persona:I.persona,walletAddress:I.walletAddress,onChainRoles:I.persona==="ADMIN"?["ADMIN"]:I.persona==="ISSUER"?["ISSUER"]:["HOLDER"],didRegistered:!0,isDemo:!0})},[h,d]);u.useEffect(()=>{const I=sessionStorage.getItem("bharosa_active_demo");if(I){const j=us.find(ae=>ae.id===I);if(j){V(j).finally(()=>l(!1));return}}const F=Jd(ze,async j=>{if(!sessionStorage.getItem("bharosa_active_demo")){if(t(j),j)try{await S()||r({uid:j.uid,email:j.email||"",displayName:j.displayName,persona:"HOLDER",walletAddress:null,onChainRoles:["HOLDER"],didRegistered:!1})}catch{}else r(null);l(!1)}});return()=>F()},[V,S]);const W=async(I,F)=>{sessionStorage.removeItem("bharosa_active_demo"),o(null);const j=await qd(ze,I,F);t(j.user),await S()},L=async(I,F,j)=>{sessionStorage.removeItem("bharosa_active_demo"),o(null);const ae=await Hd(ze,I,F);j&&await Kd(ae.user,{displayName:j}),await Lr(ae.user),t(ae.user),await S()},k=async()=>{sessionStorage.removeItem("bharosa_active_demo"),o(null);const I=await _u(ze,Mf);t(I.user),await S()},ie=async I=>{const F=us.find(j=>j.id.toLowerCase()===I.toLowerCase()||j.uid.toLowerCase()===I.toLowerCase());if(!F)throw new Error(`Demo user not found: ${I}`);try{const j=new AbortController,ae=setTimeout(()=>j.abort(),2e3),st=await fetch(An("/demo/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({demoUserId:F.id}),signal:j.signal}).finally(()=>clearTimeout(ae));if(st.ok){const te=await st.json();if(te.customToken&&!te.customToken.startsWith("demo-custom-jwt"))try{await zd(ze,te.customToken)}catch{}}}catch{}y.clear(),await V(F)},H=async I=>{await Wd(ze,I)},bt=async()=>{e&&"sendEmailVerification"in e&&await Lr(e)},nt=async()=>{sessionStorage.removeItem("bharosa_active_demo"),o(null);try{await Xd(ze)}catch{}try{d()}catch{}y.clear(),t(null),r(null)},$=!!i||!!e&&"isDemo"in e&&e.isDemo===!0;return a.jsx(Pa.Provider,{value:{user:e,account:s,loading:c,isDemoUser:$,activeDemoAccount:i,signIn:W,signUp:L,signInWithGoogle:k,signInWithDemo:ie,resetPassword:H,resendVerificationEmail:bt,signOut:nt,getIdToken:v,refreshAccount:S},children:n})}function tt(){const n=u.useContext(Pa);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n}/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Oa=(...n)=>n.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=u.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:o,...c},l)=>u.createElement("svg",{ref:l,...$f,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:Oa("lucide",r),...c},[...o.map(([d,h])=>u.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(n,e)=>{const t=u.forwardRef(({className:s,...r},i)=>u.createElement(zf,{ref:i,iconNode:e,className:Oa(`lucide-${Vf(n)}`,s),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=R("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=R("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=R("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=R("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=R("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=R("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=R("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=R("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=R("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=R("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=R("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=R("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=R("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=R("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=R("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=R("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=R("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=R("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=R("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=R("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=R("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=R("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=R("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=R("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=R("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=R("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Fa(){const[n,e]=u.useState({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:14}),[t,s]=u.useState("Just now"),r=async()=>{const i=performance.now();try{const o=await fetch(An("/relayer/treasury"),{cache:"no-store"}),c=Math.round(performance.now()-i);o.ok?e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:c}):e(l=>({...l,api:"ONLINE",latencyMs:c}))}catch{e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:24})}s(new Date().toLocaleTimeString())};return u.useEffect(()=>{r();const i=setInterval(r,3e4);return()=>clearInterval(i)},[]),a.jsx("footer",{className:"w-full bg-[#F7FBEF] border-t border-lime-200 py-2 px-3 sm:px-6 text-xs text-[#1A2E05]",children:a.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2",children:[a.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto no-scrollbar",children:[a.jsxs("div",{className:"flex items-center gap-1 font-bold text-[#4D6B2A] whitespace-nowrap shrink-0",children:[a.jsx(Wf,{className:"w-3.5 h-3.5 text-lime-600 animate-pulse"}),a.jsx("span",{className:"hidden sm:inline",children:"HEALTH:"})]}),a.jsxs("div",{className:"flex items-center gap-2 whitespace-nowrap",children:[a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),"Polygon Amoy: ",a.jsx("span",{className:"font-semibold text-green-700",children:n.chain})]}),a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"API Gateway: ",a.jsx("span",{className:"font-semibold text-green-700",children:n.api})]}),a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"IPFS: ",a.jsx("span",{className:"font-semibold text-green-700",children:n.ipfs})]}),a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"Neon DB: ",a.jsx("span",{className:"font-semibold text-green-700",children:n.db})]})]})]}),a.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-3 text-[#4D6B2A] text-[11px] whitespace-nowrap shrink-0 border-t md:border-t-0 pt-1 md:pt-0 border-lime-200/60",children:[a.jsxs("span",{children:["Latency: ",a.jsxs("b",{className:"text-[#1A2E05]",children:[n.latencyMs,"ms"]})]}),a.jsx("span",{className:"hidden lg:inline text-lime-300",children:"|"}),a.jsxs("span",{className:"hidden lg:inline",children:["Verified: ",t]}),a.jsx("span",{className:"font-semibold text-lime-800",children:"Bharosa Protocol"})]})]})})}function wn(){return null}const Gn=["br","bl","tl","tr"],lp=[[/revoke|remove access|stop sharing|take back/i,"Open Access Control, find the grant under Active grants, and choose Revoke. Future access is blocked straight away. A copy someone already downloaded cannot be taken back, so re-encrypt sensitive files with a new key.",{label:"Open Access Control",route:"/access"}],[/verif|check.*credential|validate/i,"Open the Verifier Console and paste the credential link or scan its QR code. Bharosa checks four things: the issuer's signature, that the issuer is trusted on-chain, that the hash matches the on-chain record, and that it has not been revoked or expired.",{label:"Open Verifier Console",route:"/verifier"}],[/grant|access|share|employer|permission/i,"Go to Access Control, pick the asset, enter the person's address, choose a role and purpose, and set a start and end time. You review it and sign in your wallet. You can revoke it at any time.",{label:"Open Access Control",route:"/access"}],[/zk|zero|proof|prove|privacy|without showing/i,'A zero-knowledge proof lets you prove a fact, such as "my CGPA is above 8", without showing the document. Choose a credential and a claim, and your browser generates the proof. The verifier only learns that the statement is true.',{label:"Open ZK Proofs",route:"/zk"}],[/lost|recover|guardian|seed|private key|wallet/i,"Social recovery lets trusted guardians help you regain access. Set your guardians and threshold in Recovery. If you lose your wallet, guardians approve a new address, and a waiting period lets you cancel any attack. Never share your seed phrase with anyone, including me.",{label:"Open Recovery",route:"/recovery"}],[/encrypt|ipfs|upload|file|asset|document/i,"Files are encrypted in your browser with AES-256 before upload. The encrypted file goes to IPFS, and only its hash and address are recorded on the blockchain. Nobody can read the file without the key you share.",{label:"Open Assets",route:"/assets"}],[/security|alert|suspicious|attack/i,"The Security Center flags unusual activity, such as many access requests in a short time or very long grants, and suggests what to do next.",{label:"Open Security Center",route:"/security"}],[/what is|about|who are|bharosa|how does it work/i,"Bharosa lets you own your identity, prove it instantly, and share documents with full control, with no central database to breach and no certificate to forge.",null],[/^(hi|hello|hey|namaste|vanakkam)\b/i,"Hello! Ask me how to verify a credential, grant access, create a proof, or recover a wallet.",null]],ps=({isOpen:n,onClick:e})=>{const t=oi(),[s,r]=u.useState(!1),i=n!==void 0?n:s,[o,c]=u.useState(()=>{try{const m=localStorage.getItem("bharosa-ai-corner");if(m&&Gn.includes(m))return m}catch{}return"br"}),[l,d]=u.useState("idle"),[h,y]=u.useState(null),[v,S]=u.useState(!1),[V,W]=u.useState(null),[L,k]=u.useState(null),[ie,H]=u.useState(!1),[bt,nt]=u.useState(!0),[$,I]=u.useState([]),[F,j]=u.useState(""),[ae,st]=u.useState(!1),te=u.useRef(null),rt=u.useRef(null),oe=u.useRef(null),Ka=u.useRef(null),zt=u.useRef(null),$s=u.useRef(null),Ne=u.useRef(null),wt=u.useRef(!1),Pn=u.useRef(!1),xt=u.useRef(null),On=u.useRef(null),It=u.useRef(null),zs=u.useRef(null),Ws=u.useCallback(m=>{const E=document.documentElement.clientWidth,N=document.documentElement.clientHeight,P=window.innerWidth<=520?12:20;return{x:m.charAt(1)==="l"?P:E-96-P,y:m.charAt(0)==="t"?P:N-96-P}},[]),it=u.useCallback(m=>{c(m);const E=Ws(m);y(E);try{localStorage.setItem("bharosa-ai-corner",m)}catch{}},[Ws]);u.useEffect(()=>{it(o);const m=()=>it(o);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[o,it]);const Wt=u.useCallback((m,E=5500)=>{i||v||(W(m),On.current&&clearTimeout(On.current),On.current=setTimeout(()=>{W(null)},E))},[i,v]),Ht=u.useCallback(()=>{W(null)},[]),at=u.useCallback(()=>{xt.current&&clearTimeout(xt.current),xt.current=setTimeout(()=>{i||(H(!0),setTimeout(()=>H(!1),950))},25e3)},[i]);u.useEffect(()=>{at();const m=()=>at();return window.addEventListener("pointerdown",m),window.addEventListener("keydown",m),()=>{window.removeEventListener("pointerdown",m),window.removeEventListener("keydown",m),xt.current&&clearTimeout(xt.current)}},[at]),u.useEffect(()=>{const m=setTimeout(()=>{Wt("Need a hand?")},1800);return()=>clearTimeout(m)},[Wt]),u.useEffect(()=>{if(!("IntersectionObserver"in window))return;const m=new WeakSet,E=new IntersectionObserver(N=>{N.forEach(P=>{if(P.isIntersecting&&!m.has(P.target)){m.add(P.target);const U=P.target.getAttribute("data-copilot-tip");U&&Wt(U)}})},{threshold:.6});return document.querySelectorAll("[data-copilot-tip]").forEach(N=>E.observe(N)),()=>E.disconnect()},[Wt]);const Hs=u.useCallback(()=>{It.current=null;const m=zs.current;if(!m||v||!rt.current||!oe.current||!te.current)return;const E=rt.current.getBoundingClientRect(),N=m.clientX-(E.left+48),P=m.clientY-(E.top+48),U=Math.hypot(N,P),ve=U<240?(240-U)/240:0,J=(kt,Dn,Ja)=>Math.max(Dn,Math.min(Ja,kt));nt(!1),oe.current.style.setProperty("--mx",`${J(N*.12,-10,10)*ve}px`),oe.current.style.setProperty("--my",`${J(P*.12,-10,10)*ve}px`),oe.current.style.setProperty("--ry",`${U<420?J(N/18,-16,16):0}deg`),oe.current.style.setProperty("--rx",`${U<420?J(-P/18,-16,16):0}deg`),te.current.style.setProperty("--ex",`${J(N/28,-4,4)}px`),te.current.style.setProperty("--ey",`${J(P/28,-4,4)}px`)},[v]),qs=u.useCallback(()=>{nt(!0),oe.current&&(oe.current.style.setProperty("--mx","0px"),oe.current.style.setProperty("--my","0px"),oe.current.style.setProperty("--rx","0deg"),oe.current.style.setProperty("--ry","0deg")),te.current&&(te.current.style.setProperty("--ex","0px"),te.current.style.setProperty("--ey","0px"))},[]);u.useEffect(()=>{const m=N=>{zs.current=N,It.current||(It.current=requestAnimationFrame(Hs))},E=N=>{N.relatedTarget||qs()};return window.addEventListener("pointermove",m),document.addEventListener("mouseout",E),()=>{window.removeEventListener("pointermove",m),document.removeEventListener("mouseout",E),It.current&&cancelAnimationFrame(It.current)}},[Hs,qs]);const Gs=u.useCallback(()=>{if(!rt.current)return;const m=rt.current.getBoundingClientRect(),E=m.left+48,N=m.top+48;for(let P=0;P<9;P++){const U=document.createElement("i");U.className="ab-p",U.style.left=`${E}px`,U.style.top=`${N}px`,document.body.appendChild(U);const ve=P/9*Math.PI*2+Math.random()*.4,J=50+Math.random()*40,kt=U.animate([{transform:"translate(-50%,-50%) scale(1)",opacity:1},{transform:`translate(calc(-50% + ${Math.cos(ve)*J}px), calc(-50% + ${Math.sin(ve)*J}px)) scale(.2) rotate(120deg)`,opacity:0}],{duration:650+Math.random()*250,easing:"cubic-bezier(.2,.8,.3,1)"});kt.onfinish=()=>U.remove()}},[]),Za=m=>{if(m.button!==0)return;const E=te.current?.getBoundingClientRect();E&&(Ne.current={sx:m.clientX,sy:m.clientY,ox:E.left,oy:E.top,id:m.pointerId},wt.current=!1,at())};u.useEffect(()=>{const m=N=>{if(!Ne.current)return;const P=N.clientX-Ne.current.sx,U=N.clientY-Ne.current.sy;if(!wt.current&&Math.hypot(P,U)>6&&(wt.current=!0,S(!0),Ht()),wt.current){const ve=document.documentElement.clientWidth,J=document.documentElement.clientHeight,kt=Math.max(4,Math.min(ve-100,Ne.current.ox+P)),Dn=Math.max(4,Math.min(J-100,Ne.current.oy+U));y({x:kt,y:Dn})}},E=()=>{if(Ne.current&&wt.current&&h){const N=document.documentElement.clientWidth,P=document.documentElement.clientHeight,U=`${h.y+48<P/2?"t":"b"}${h.x+48<N/2?"l":"r"}`;it(U),Pn.current=!0,setTimeout(()=>{Pn.current=!1},50)}S(!1),Ne.current=null};return window.addEventListener("pointermove",m),window.addEventListener("pointerup",E),()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",E)}},[h,it,Ht]);const qt=u.useCallback(()=>{Pn.current||(Gs(),Ht(),e?e():r(m=>!m))},[Gs,Ht,e]),jn=u.useCallback(()=>{e&&i?e():r(!1)},[e,i]);u.useEffect(()=>{const m=E=>{at();const N=E.target?.tagName?.toLowerCase()||"",P=N==="input"||N==="textarea"||E.target?.isContentEditable;(E.ctrlKey||E.metaKey)&&E.key.toLowerCase()==="k"?(E.preventDefault(),qt()):E.key==="/"&&!P?(E.preventDefault(),i||qt()):E.key==="Escape"&&i&&(E.preventDefault(),jn(),rt.current?.focus())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[i,qt,jn,at]),u.useEffect(()=>{i&&setTimeout(()=>$s.current?.focus(),150)},[i]);const Et=m=>{k(m),setTimeout(()=>k(null),1800)},Ct=async m=>{const E=m.trim();!E||ae||(I(N=>[...N,{role:"user",text:E}]),j(""),st(!0),d("thinking"),setTimeout(()=>{let N="I only know a few demo topics. Try asking about verifying a credential, granting access, zero-knowledge proofs, or social recovery.",P=null;for(const[U,ve,J]of lp)if(U.test(E)){N=ve,P=J;break}st(!1),I(U=>[...U,{role:"bot",text:N,action:P}]),d("idle"),setTimeout(()=>{zt.current&&(zt.current.scrollTop=zt.current.scrollHeight)},50)},750))},Ya=()=>{const m=(Gn.indexOf(o)+1)%4;it(Gn[m])};return a.jsxs("div",{ref:te,id:"ab",className:`ab ${i?"open":""} ${v?"dragging":""} ${bt?"calm":""} ${ie?"wiggle":""}`,"data-state":l,"data-corner":o,style:{left:h?`${h.x}px`:void 0,top:h?`${h.y}px`:void 0,right:h?"auto":void 0,bottom:h?"auto":void 0},children:[a.jsx("div",{className:`ab-intro ${V?"show":""}`,"aria-hidden":"true",children:V}),a.jsxs("section",{ref:Ka,id:"abPanel",className:"ab-panel",role:"dialog","aria-label":"Bharosa Copilot","aria-hidden":!i,children:[a.jsxs("header",{className:"ab-ph",children:[a.jsxs("svg",{className:"ab-mini",viewBox:"0 0 40 40","aria-hidden":"true",children:[a.jsx("polygon",{points:"20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5",fill:"#1A2E05",stroke:"#84CC16",strokeWidth:"1.5",strokeLinejoin:"round"}),a.jsx("path",{d:"M20 11 22.2 17.8 29 20 22.2 22.2 20 29 17.8 22.2 11 20 17.8 17.8Z",fill:"#BEF264"})]}),a.jsxs("div",{className:"ab-hd",children:[a.jsx("div",{className:"ab-title",children:"Bharosa Copilot"}),a.jsx("div",{className:"ab-sub",children:"Sovereign Assistant · never sees your keys or files"})]}),a.jsx("button",{className:"ab-ic",type:"button",onClick:Ya,"aria-label":"Move to next corner",title:"Move to next corner",children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4"})})}),a.jsx("button",{className:"ab-ic",type:"button",onClick:()=>I([]),"aria-label":"New chat",title:"New chat",children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4"})})}),a.jsx("button",{className:"ab-ic",type:"button",onClick:jn,"aria-label":"Close",title:"Close",children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M6 6l12 12M18 6L6 18"})})})]}),a.jsxs("div",{ref:zt,className:"ab-msgs","aria-live":"polite",children:[$.length===0?a.jsxs("div",{children:[a.jsx("div",{className:"ab-hi",children:"Hi! I can explain Bharosa and walk you through sovereign credentials, zero-knowledge proofs, and access grants. Pick one or type below."}),a.jsx("button",{className:"ab-chip",type:"button",onClick:()=>Ct("How do I verify a credential?"),children:"Verify a credential"}),a.jsx("button",{className:"ab-chip",type:"button",onClick:()=>Ct("How do I grant access to an employer?"),children:"Grant access to someone"}),a.jsx("button",{className:"ab-chip",type:"button",onClick:()=>Ct("How do zero-knowledge proofs work?"),children:"Prove something without showing it"}),a.jsx("button",{className:"ab-chip",type:"button",onClick:()=>Ct("I lost my wallet. What now?"),children:"I lost my wallet"})]}):$.map((m,E)=>a.jsxs("div",{className:`ab-msg ${m.role}`,children:[a.jsx("div",{className:"ab-bub",children:m.text}),m.action&&a.jsx("button",{type:"button",className:"ab-act",onClick:()=>{t(m.action.route),Et(`Navigated to ${m.action.route}`)},children:m.action.label}),m.role==="bot"&&a.jsxs("div",{className:"ab-tools",children:[a.jsx("button",{type:"button","aria-label":"Helpful",title:"Helpful",onClick:()=>Et("Feedback recorded"),children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M7 11v9H4v-9h3zm0 0 4-7a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2l-1 6a2 2 0 0 1-2 2H7"})})}),a.jsx("button",{type:"button","aria-label":"Not helpful",title:"Not helpful",onClick:()=>Et("Feedback recorded"),children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M17 13V4h3v9h-3zm0 0-4 7a2 2 0 0 1-2-2v-3H6a2 2 0 0 1-2-2l1-6a2 2 0 0 1 2-2h12"})})}),a.jsx("button",{type:"button","aria-label":"Copy answer",title:"Copy answer",onClick:()=>{try{navigator.clipboard.writeText(m.text),Et("Copied to clipboard")}catch{Et("Copy unavailable")}},children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M9 9h10v10H9zM5 15V5h10"})})})]})]},E)),ae&&a.jsx("div",{className:"ab-msg bot",children:a.jsxs("div",{className:"ab-bub ab-typing",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]})})]}),a.jsx("div",{className:`ab-toast ${L?"show":""}`,role:"status",children:L}),a.jsxs("form",{className:"ab-form",autoComplete:"off",onSubmit:m=>{m.preventDefault(),Ct(F)},children:[a.jsx("input",{ref:$s,className:"ab-in",type:"text",maxLength:300,value:F,onChange:m=>j(m.target.value),placeholder:"Ask about credentials, access, proofs…","aria-label":"Ask Bharosa"}),a.jsx("button",{className:"ab-send",type:"submit","aria-label":"Send question",children:a.jsx("svg",{viewBox:"0 0 24 24",children:a.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})})]}),a.jsx("div",{className:"ab-foot",children:"Ctrl + K to open · Esc to close · Never share keys or seed phrases"})]}),a.jsx("button",{ref:rt,className:"ab-btn",type:"button","aria-label":"Ask Bharosa, AI assistant","aria-expanded":i,"aria-controls":"abPanel",title:"Ask Bharosa (Ctrl+K). Drag to move.",onClick:qt,onPointerDown:Za,children:a.jsxs("div",{ref:oe,className:"ab-tilt",children:[a.jsxs("svg",{className:"ab-svg",viewBox:"0 0 96 96",width:"96",height:"96","aria-hidden":"true",children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:"abBody",x1:"0",y1:"0",x2:"1",y2:"1",children:[a.jsx("stop",{offset:"0",className:"s1"}),a.jsx("stop",{offset:"1",className:"s2"})]}),a.jsxs("linearGradient",{id:"abScan",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",style:{stopColor:"var(--scan)",stopOpacity:0}}),a.jsx("stop",{offset:"0.5",style:{stopColor:"var(--scan)",stopOpacity:.8}}),a.jsx("stop",{offset:"1",style:{stopColor:"var(--scan)",stopOpacity:0}})]}),a.jsx("clipPath",{id:"abHex",children:a.jsx("polygon",{points:"48,18 74,33 74,63 48,78 22,63 22,33"})})]}),a.jsxs("g",{className:"ring",children:[a.jsx("circle",{cx:"48",cy:"48",r:"44",fill:"none",stroke:"#84CC16",strokeWidth:"1.5",strokeDasharray:"2 7",strokeLinecap:"round",opacity:"0.8"}),a.jsx("circle",{cx:"48",cy:"4",r:"3.2",fill:"#84CC16"})]}),a.jsx("polygon",{className:"stamp",points:"48,18 74,33 74,63 48,78 22,63 22,33"}),a.jsx("polygon",{className:"body",points:"48,18 74,33 74,63 48,78 22,63 22,33",fill:"url(#abBody)",strokeWidth:"1.6",strokeLinejoin:"round"}),a.jsx("polygon",{className:"inner",points:"48,24 69,36 69,60 48,72 27,60 27,36"}),a.jsx("g",{clipPath:"url(#abHex)",children:a.jsx("rect",{className:"scan",x:"22",y:"12",width:"52",height:"24"})}),a.jsxs("g",{className:"icon",children:[a.jsx("path",{className:"chk",d:"M37 49.5 45 57.5 60 40"}),a.jsx("path",{className:"spk",d:"M48 33 51.4 44.6 63 48 51.4 51.4 48 63 44.6 51.4 33 48 44.6 44.6Z"}),a.jsxs("g",{className:"dots",children:[a.jsx("circle",{cx:"38",cy:"49",r:"3.2"}),a.jsx("circle",{cx:"48",cy:"49",r:"3.2"}),a.jsx("circle",{cx:"58",cy:"49",r:"3.2"})]})]})]}),a.jsx("span",{className:"ab-badge","aria-hidden":"true",children:"AI"})]})}),a.jsx("span",{role:"status","aria-live":"polite",style:{position:"absolute",left:"-9999px"},children:l==="thinking"?"Bharosa is thinking":""})]})},ms=()=>null;function dp(){const{pathname:n}=Mt(),e=n==="/",[t,s]=u.useState(!1);return e?a.jsxs(a.Fragment,{children:[a.jsx(wn,{}),a.jsx(Ce,{}),a.jsx(ps,{isOpen:t,onClick:()=>s(r=>!r)}),a.jsx(ms,{isOpen:t,onClose:()=>s(!1)})]}):a.jsxs("div",{className:"min-h-screen flex flex-col bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(wn,{}),a.jsxs("header",{className:"h-16 bg-[#FFFFFF] border-b border-[#ECFCCB] px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs(Ee,{to:"/",className:"flex items-center space-x-2.5 group",children:[a.jsx("img",{src:"/logos/bharosa-mark.png",alt:"Bharosa Logo",className:"w-8 h-8 object-contain group-hover:scale-105 transition-transform"}),a.jsx("span",{className:"font-anton text-xl tracking-wide text-[#1A2E05] uppercase",children:"Bharosa"})]}),a.jsx("span",{className:"text-stone-300",children:"/"}),a.jsx("span",{className:"text-xs font-semibold text-[#4D6B2A]",children:"Public Verification"})]}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs(Ee,{to:"/",className:"hidden sm:inline-flex items-center text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] px-3 py-1.5 rounded-lg hover:bg-[#F7FBEF] transition-colors",children:[a.jsx(ja,{className:"w-3.5 h-3.5 mr-1"})," Home"]}),a.jsxs(Ee,{to:"/app",className:"inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs uppercase tracking-wider transition-all shadow-xs",children:[a.jsx("span",{children:"Launch App"}),a.jsx(Hf,{className:"w-3.5 h-3.5 ml-1.5"})]})]})]}),a.jsx("main",{className:"flex-1 flex flex-col",children:a.jsx(Ce,{})}),a.jsx(Fa,{}),a.jsx(ps,{isOpen:t,onClick:()=>s(r=>!r)}),a.jsx(ms,{isOpen:t,onClose:()=>s(!1)})]})}const up=[{to:"/dashboard",label:"Dashboard",icon:Nn},{to:"/identity",label:"Identity & DID",icon:cp},{to:"/credentials",label:"Credentials",icon:qf},{to:"/assets",label:"Asset Vault",icon:ep},{to:"/zk",label:"ZK Proofs",icon:Bs},{to:"/access",label:"Access Control",icon:Qf},{to:"/recovery",label:"Social Recovery",icon:op},{to:"/audit",label:"Audit Trail",icon:Jf},{to:"/security",label:"Security Center",icon:ap}],hp=[{to:"/issuer",label:"Issuer Portal",icon:rp,role:"ISSUER"},{to:"/verifier",label:"Verifier Portal",icon:Kf,role:"VERIFIER"},{to:"/admin",label:"Admin Console",icon:ip,role:"ADMIN"},{to:"/public-verify",label:"Public Verifier",icon:Nn,role:null}];function fp({collapsed:n,setCollapsed:e,mobileOpen:t,setMobileOpen:s}){const r=Mt(),{user:i,account:o,signOut:c,isDemoUser:l}=tt(),d=di(),{data:h}=xo({watch:!0}),y=o?.persona||"HOLDER",v=(o?.onChainRoles||[]).map(k=>k.toUpperCase());u.useEffect(()=>{s(!1)},[r.pathname,s]);const S=i&&"displayName"in i&&i.displayName?i.displayName:i?.email?.split("@")[0]||"User",V=S.split(" ").map(k=>k[0]).join("").toUpperCase().slice(0,2)||"BU",W=k=>!!(!k||l||y===k||v.includes(k)),L=a.jsxs("div",{className:"flex flex-col h-full justify-between bg-[#FFFFFF] border-r border-[#ECFCCB] select-none",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between px-4 h-16 border-b border-[#F7FBEF]",children:[a.jsxs("div",{className:"flex items-center space-x-3 overflow-hidden",children:[a.jsx("img",{src:"/logos/bharosa-mark.png",alt:"Bharosa Logo",className:"w-8 h-8 object-contain shrink-0"}),!n&&a.jsxs("div",{className:"overflow-hidden",children:[a.jsx("div",{className:"flex items-center space-x-1.5",children:a.jsx("span",{className:"font-anton text-xl tracking-wider text-[#1A2E05] uppercase",children:"Bharosa"})}),a.jsx("div",{className:"flex items-center space-x-1",children:a.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider",children:y})})]})]}),a.jsx("button",{onClick:()=>e(!n),className:"hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] transition-colors",title:n?"Expand sidebar":"Collapse sidebar",children:n?a.jsx(Yf,{className:"w-4 h-4"}):a.jsx(Zf,{className:"w-4 h-4"})})]}),a.jsxs("nav",{className:"p-2 space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)]",children:[up.map(k=>{const ie=k.icon;return a.jsx(Ks,{to:k.to,className:({isActive:H})=>`flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${H?"bg-[#ECFCCB] text-[#1A2E05] shadow-xs":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:n?k.label:void 0,children:({isActive:H})=>a.jsxs(a.Fragment,{children:[H&&a.jsx("span",{className:"absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full"}),a.jsx(ie,{className:`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${H?"text-[#65A30D]":"text-[#8BA868]"} ${n?"mx-auto":"mr-3"}`}),!n&&a.jsx("span",{className:"truncate",children:k.label})]})},k.to)}),a.jsx("div",{className:"pt-3 pb-1",children:n?a.jsx("hr",{className:"border-[#ECFCCB] my-2 mx-2"}):a.jsx("p",{className:"px-3 text-[10px] font-bold text-[#8BA868] uppercase tracking-wider",children:"Portals & Ecosystem"})}),hp.filter(k=>W(k.role)).map(k=>{const ie=k.icon;return a.jsx(Ks,{to:k.to,className:({isActive:H})=>`flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${H?"bg-[#ECFCCB] text-[#1A2E05] shadow-xs":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:n?k.label:void 0,children:({isActive:H})=>a.jsxs(a.Fragment,{children:[H&&a.jsx("span",{className:"absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full"}),a.jsx(ie,{className:`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${H?"text-[#65A30D]":"text-[#8BA868]"} ${n?"mx-auto":"mr-3"}`}),!n&&a.jsx("span",{className:"truncate",children:k.label})]})},k.to)})]})]}),a.jsxs("div",{className:"p-3 border-t border-[#F7FBEF] space-y-2",children:[n?a.jsx("div",{className:"flex justify-center",title:"Network Online",children:a.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-[#65A30D]"})]})}):a.jsxs("div",{className:"px-2.5 py-1.5 rounded-xl bg-[#F7FBEF] border border-[#ECFCCB] flex items-center justify-between text-[11px] text-[#4D6B2A]",children:[a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),a.jsx("span",{className:"font-semibold text-[#1A2E05]",children:d===31337?"Hardhat Node":"Polygon Amoy"})]}),h?a.jsxs("span",{className:"font-mono text-[10px] text-[#65A30D]",children:["#",h.toString()]}):null]}),a.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB]",children:[a.jsxs("div",{className:"flex items-center space-x-2.5 overflow-hidden",children:[a.jsx("div",{className:"w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center shrink-0",children:V}),!n&&a.jsxs("div",{className:"overflow-hidden",children:[a.jsx("p",{className:"text-xs font-bold text-[#1A2E05] truncate",children:S}),a.jsx("p",{className:"text-[10px] text-[#4D6B2A] truncate font-mono",children:o?.walletAddress?`${o.walletAddress.slice(0,6)}...${o.walletAddress.slice(-4)}`:i?.email})]})]}),!n&&a.jsx("button",{onClick:()=>c(),className:"p-1.5 text-[#4D6B2A] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Sign Out",children:a.jsx(Da,{className:"w-4 h-4"})})]})]})]});return a.jsxs(a.Fragment,{children:[a.jsx("aside",{className:`hidden md:block sticky top-0 h-screen transition-all duration-300 z-30 shrink-0 ${n?"w-20":"w-64"}`,children:L}),t&&a.jsxs("div",{className:"fixed inset-0 z-50 md:hidden flex",children:[a.jsx("div",{className:"fixed inset-0 bg-[#1A2E05]/40 backdrop-blur-xs transition-opacity",onClick:()=>s(!1)}),a.jsx("div",{className:"relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200",children:L})]})]})}function pp(){const{address:n,isConnected:e}=ui(),{isDemoUser:t,activeDemoAccount:s,user:r}=tt(),i=di(),{switchChain:o,chains:c}=Io(),{openConnectModal:l}=Eo(),[d,h]=u.useState(!1),[y,v]=u.useState(!1),S=L=>{L.stopPropagation(),n&&(navigator.clipboard.writeText(n),h(!0),setTimeout(()=>h(!1),2e3))};if(t){const L=s?.name||r?.displayName||"Demo User",k=n||s?.walletAddress||"";return a.jsx("div",{className:"flex items-center space-x-1.5",children:a.jsxs("div",{onClick:S,className:"cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#ECFCCB] border border-[#84CC16] hover:bg-[#D9F99D] text-[#1A2E05] text-xs transition-all shadow-xs",title:`Click to copy demo signer address (${k})`,children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),a.jsxs("span",{className:"font-bold flex items-center gap-1 text-[11px]",children:[a.jsx(Bs,{className:"w-3 h-3 text-[#65A30D] fill-[#84CC16]"}),"Demo Wallet: ",L.split(" ")[0]]}),a.jsxs("span",{className:"hidden sm:inline font-mono text-[10px] text-[#4D6B2A]",children:["(",k?`${k.slice(0,4)}...${k.slice(-3)}`:"",")"]}),d?a.jsx(nn,{className:"w-3 h-3 text-[#65A30D]"}):a.jsx(ti,{className:"w-3 h-3 text-[#4D6B2A] group-hover:text-[#1A2E05] transition-colors"})]})})}if(!e||!n)return a.jsxs("button",{onClick:l,className:"inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-xs transition-all shadow-sm",children:[a.jsx(fs,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Connect Wallet"})]});const V=c.find(L=>L.id===i),W=V?V.name:`Chain ${i}`;return a.jsxs("div",{className:"relative flex items-center space-x-1.5",children:[a.jsxs("div",{className:"relative",children:[a.jsxs("button",{onClick:()=>v(L=>!L),className:"inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-[#ECFCCB] hover:bg-[#D9F99D] text-[#1A2E05] text-xs font-medium border border-[#D9F99D] transition-colors",title:"Switch Network",children:[a.jsx(np,{className:"w-3 h-3 text-[#65A30D]"}),a.jsx("span",{className:"hidden sm:inline max-w-[80px] truncate",children:W}),a.jsx(hs,{className:"w-3 h-3 text-[#4D6B2A]"})]}),y&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>v(!1)}),a.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-[#FFFFFF] border border-[#ECFCCB] rounded-xl shadow-lg p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100",children:[a.jsx("div",{className:"px-2 py-1 text-[10px] font-bold text-[#65A30D] uppercase tracking-wider",children:"Select Network"}),c.map(L=>a.jsxs("button",{onClick:()=>{o&&o({chainId:L.id}),v(!1)},className:`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-lg transition-colors ${L.id===i?"bg-[#ECFCCB] font-bold text-[#1A2E05]":"text-[#4D6B2A] hover:bg-[#F7FBEF] hover:text-[#1A2E05]"}`,children:[a.jsx("span",{className:"truncate",children:L.name}),L.id===i&&a.jsx(nn,{className:"w-3 h-3 text-[#65A30D]"})]},L.id))]})]})]}),a.jsxs("div",{onClick:S,className:"cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB] hover:border-[#84CC16] text-[#1A2E05] text-xs font-mono transition-all shadow-xs",title:"Click to copy address",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),a.jsxs("span",{className:"font-semibold",children:[n.slice(0,6),"...",n.slice(-4)]}),d?a.jsx(nn,{className:"w-3.5 h-3.5 text-[#65A30D]"}):a.jsx(ti,{className:"w-3.5 h-3.5 text-[#4D6B2A] group-hover:text-[#1A2E05] transition-colors"})]})]})}function mp(){const n=oi(),{user:e,account:t,signOut:s,isDemoUser:r,activeDemoAccount:i,signInWithDemo:o,refreshAccount:c}=tt(),{disconnect:l}=li(),[d,h]=u.useState(!1),[y,v]=u.useState(!1),[S,V]=u.useState(!1),W=u.useRef(null);u.useEffect(()=>{function $(I){W.current&&!W.current.contains(I.target)&&(h(!1),v(!1))}return document.addEventListener("mousedown",$),()=>document.removeEventListener("mousedown",$)},[]);const L=i?.name||e&&"displayName"in e&&e.displayName||e?.email?.split("@")[0]||"Bharosa User",k=L.split(" ").map($=>$[0]).join("").toUpperCase().slice(0,2)||"BU",ie=async()=>{h(!1),await s(),n("/login",{replace:!0})},H=()=>{l(),h(!1)},bt=async $=>{h(!1),v(!1),await o($.id),n("/dashboard",{replace:!0})},nt=async()=>{V(!0);try{await fetch(An("/demo/reset"),{method:"POST"}),await c()}catch($){console.error("Demo reset failed:",$)}finally{V(!1)}};return a.jsxs("div",{className:"relative",ref:W,children:[a.jsxs("button",{onClick:()=>h($=>!$),className:"flex items-center space-x-2 p-1 pl-1.5 rounded-full hover:bg-[#ECFCCB] transition-colors border border-transparent hover:border-[#D9F99D]","aria-label":"User profile menu",children:[a.jsx("div",{className:"w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs",children:k}),a.jsx(hs,{className:"w-3.5 h-3.5 text-[#4D6B2A] mr-1 hidden sm:block"})]}),d&&a.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100",children:[a.jsxs("div",{className:"p-3 border-b border-[#F7FBEF]",children:[a.jsx("p",{className:"text-xs font-bold text-[#1A2E05] truncate",children:L}),a.jsx("p",{className:"text-[11px] text-[#4D6B2A] truncate mt-0.5",children:e?.email}),a.jsxs("div",{className:"flex items-center space-x-1.5 mt-2",children:[a.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider",children:t?.persona||"HOLDER"}),r&&a.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#84CC16] text-[#1A2E05]",children:"Demo Signer"})]})]}),a.jsxs("div",{className:"py-1 border-b border-[#F7FBEF]",children:[a.jsxs("button",{onClick:()=>v(!y),className:"w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(Bs,{className:"w-3.5 h-3.5 text-[#65A30D] fill-[#84CC16]"}),a.jsx("span",{children:"Switch Demo User"})]}),a.jsx(hs,{className:`w-3.5 h-3.5 transition-transform ${y?"rotate-180":""}`})]}),y&&a.jsx("div",{className:"mt-1 space-y-1 p-1 bg-[#F7FBEF] rounded-xl max-h-48 overflow-y-auto",children:us.map($=>{const I=i?.id===$.id;return a.jsxs("button",{onClick:()=>bt($),className:`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${I?"bg-[#ECFCCB] font-bold text-[#1A2E05]":"hover:bg-[#FFFFFF] text-[#4D6B2A]"}`,children:[a.jsxs("div",{className:"overflow-hidden",children:[a.jsx("p",{className:"text-xs truncate",children:$.name}),a.jsx("p",{className:"text-[10px] opacity-75",children:$.role})]}),I&&a.jsx(nn,{className:"w-3.5 h-3.5 text-[#65A30D] shrink-0 ml-1"})]},$.id)})}),r&&t?.persona==="ADMIN"&&a.jsxs("button",{onClick:nt,disabled:S,className:"w-full mt-1 flex items-center px-3 py-1.5 text-[11px] font-semibold text-[#65A30D] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsx(sp,{className:`w-3.5 h-3.5 mr-2 ${S?"animate-spin":""}`}),S?"Resetting Demo State…":"Reset Demo Data"]})]}),a.jsxs("div",{className:"py-1",children:[a.jsxs(Ee,{to:"/identity",onClick:()=>h(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsx(Xf,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Identity & DID"]}),!r&&a.jsxs(Ee,{to:"/connect-wallet",onClick:()=>h(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsx(fs,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Manage Linked Key"]}),a.jsxs(Ee,{to:"/security",onClick:()=>h(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsx(La,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Security Center"]})]}),a.jsxs("div",{className:"pt-1 border-t border-[#F7FBEF]",children:[!r&&a.jsxs("button",{onClick:H,className:"w-full flex items-center px-3 py-2 text-xs text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors text-left",children:[a.jsx(fs,{className:"w-4 h-4 mr-2.5 text-stone-400"}),"Disconnect Wallet"]}),a.jsxs("button",{onClick:ie,className:"w-full flex items-center px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left font-medium",children:[a.jsx(Da,{className:"w-4 h-4 mr-2.5 text-red-500"}),"Sign Out"]})]})]})]})}const gp=[{id:"1",title:"Gasless Meta-Transactions Active",desc:"Biconomy / EIP-2771 Relayer is online and sponsoring your identity calls.",time:"2m ago",type:"relayer"},{id:"2",title:"Cryptographic DID Online",desc:"Your W3C DID document is synced to IPFS and pinned.",time:"1h ago",type:"success"},{id:"3",title:"Decentralized Audit Active",desc:"All smart contract invocations are signed and verifiable on-chain.",time:"3h ago",type:"info"}];function yp(){const[n,e]=u.useState(!1),[t,s]=u.useState(gp),r=u.useRef(null);u.useEffect(()=>{function c(l){r.current&&!r.current.contains(l.target)&&e(!1)}return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const i=t.length,o=()=>{s([])};return a.jsxs("div",{className:"relative",ref:r,children:[a.jsxs("button",{onClick:()=>e(c=>!c),className:"relative p-2 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors","aria-label":"Notifications",children:[a.jsx(Gf,{className:"w-4 h-4"}),i>0&&a.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#84CC16] ring-2 ring-[#FFFFFF]"})]}),n&&a.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-100",children:[a.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#F7FBEF]",children:[a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsx("span",{className:"text-xs font-bold text-[#1A2E05]",children:"Activity & Alerts"}),i>0&&a.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFCCB] text-[#65A30D]",children:i})]}),t.length>0&&a.jsx("button",{onClick:o,className:"text-[11px] text-[#65A30D] hover:underline font-medium",children:"Clear"})]}),a.jsx("div",{className:"max-h-72 overflow-y-auto py-2 divide-y divide-[#F7FBEF]",children:t.length===0?a.jsx("div",{className:"text-center py-6 text-xs text-[#4D6B2A]",children:"No new notifications"}):t.map(c=>a.jsx("div",{className:"py-2.5 px-1 first:pt-1 last:pb-1",children:a.jsxs("div",{className:"flex items-start space-x-2.5",children:[c.type==="relayer"?a.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:a.jsx(Ma,{className:"w-3.5 h-3.5 fill-[#84CC16]"})}):a.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:a.jsx(Nn,{className:"w-3.5 h-3.5"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-xs font-semibold text-[#1A2E05] truncate",children:c.title}),a.jsx("p",{className:"text-[11px] text-[#4D6B2A] mt-0.5 leading-relaxed",children:c.desc}),a.jsx("span",{className:"text-[10px] text-stone-400 mt-1 block",children:c.time})]})]})},c.id))})]})]})}const _p={"/dashboard":{title:"Dashboard",subtitle:"Self-Sovereign Identity Overview"},"/identity":{title:"Identity & DID",subtitle:"W3C DID Document & Cryptographic Keys"},"/credentials":{title:"Verifiable Credentials",subtitle:"Cryptographically Signed Attestations"},"/assets":{title:"Encrypted Asset Vault",subtitle:"Zero-Knowledge File & Secret Storage"},"/zk":{title:"Zero-Knowledge Proofs",subtitle:"Selective Disclosure & Privacy Verification"},"/access":{title:"Access Control",subtitle:"Decentralized Time-Bound Delegation"},"/recovery":{title:"Social Recovery",subtitle:"Multi-Guardian Key Restitution"},"/audit":{title:"Audit Trail",subtitle:"Immutable On-Chain Event History"},"/security":{title:"Security Center",subtitle:"Emergency Freeze & Anti-Tamper"},"/issuer":{title:"Issuer Portal",subtitle:"Accredited Credential Authoring"},"/verifier":{title:"Verifier Portal",subtitle:"Instant Verification Gateway"},"/admin":{title:"Admin Console",subtitle:"Protocol Governance & Parameters"},"/onboarding":{title:"Identity Onboarding",subtitle:"Generate DID & Cryptographic Keypair"},"/connect-wallet":{title:"Connect Wallet",subtitle:"Cryptographic Key Gate"}};function vp({onOpenMobileMenu:n}){const e=Mt(),[t,s]=u.useState(!0),r=_p[e.pathname]||{title:"Bharosa Protocol",subtitle:"Decentralized Trust Network"};return a.jsxs("header",{className:"sticky top-0 z-20 h-16 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#ECFCCB] px-4 sm:px-6 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("button",{onClick:n,className:"md:hidden p-2 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors","aria-label":"Open navigation drawer",children:a.jsx(tp,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"font-anton text-lg sm:text-xl tracking-wide text-[#1A2E05] uppercase leading-tight",children:r.title}),a.jsx("p",{className:"hidden sm:block text-[11px] text-[#4D6B2A] font-medium leading-none",children:r.subtitle})]})]}),a.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[a.jsxs("button",{onClick:()=>s(!t),className:`hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${t?"bg-[#ECFCCB] text-[#1A2E05] border-[#84CC16]":"bg-stone-100 text-stone-500 border-stone-200"}`,title:"Sponsored transactions via EIP-2771 Forwarder",children:[a.jsx(Ma,{className:`w-3.5 h-3.5 ${t?"text-[#65A30D] fill-[#84CC16]":"text-stone-400"}`}),a.jsx("span",{children:t?"Gasless Active":"Self-Pay Gas"})]}),a.jsx(yp,{}),a.jsx(pp,{}),a.jsx(mp,{})]})]})}function bp(){const[n,e]=u.useState(()=>localStorage.getItem("bharosa_sidebar_collapsed")==="true"),[t,s]=u.useState(!1),[r,i]=u.useState(!1);return u.useEffect(()=>{localStorage.setItem("bharosa_sidebar_collapsed",String(n))},[n]),a.jsxs("div",{className:"min-h-screen flex bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(fp,{collapsed:n,setCollapsed:e,mobileOpen:t,setMobileOpen:s}),a.jsxs("div",{className:"flex-1 flex flex-col min-w-0",children:[a.jsx(wn,{}),a.jsx(vp,{onOpenMobileMenu:()=>s(!0)}),a.jsx("main",{className:"flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl w-full mx-auto animate-in fade-in duration-150",children:a.jsx(Ce,{})}),a.jsx(Fa,{})]}),a.jsx(ps,{isOpen:r,onClick:()=>i(o=>!o)}),a.jsx(ms,{isOpen:r,onClose:()=>i(!1)})]})}function wp(){return a.jsxs("div",{className:"min-h-screen bg-[#F7FBEF] flex flex-col justify-between text-[#1A2E05]",children:[a.jsx(wn,{}),a.jsxs("header",{className:"p-4 sm:p-6 flex items-center justify-between max-w-6xl mx-auto w-full",children:[a.jsx(Ee,{to:"/",className:"flex items-center gap-3 group",children:a.jsx("img",{src:"/logos/bharosa-logo.png",alt:"Bharosa - भरोसा",className:"h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"})}),a.jsxs(Ee,{to:"/public-verify",className:"text-xs font-bold text-[#4D6B2A] hover:text-[#0C2518] transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/60",children:[a.jsx(Nn,{className:"w-3.5 h-3.5 text-[#84CC16]"})," Public Proof Verifier"]})]}),a.jsx("main",{className:"flex-1 flex items-center justify-center p-4 sm:p-6 my-4",children:a.jsx("div",{className:"w-full max-w-xl bg-white rounded-3xl border border-[#D9EBB5] shadow-lime p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200",children:a.jsx(Ce,{})})}),a.jsx("footer",{className:"p-4 text-center text-xs text-[#4D6B2A] border-t border-[#D9EBB5]/50",children:"Bharosa Sovereign Trust Protocol · Production-Grade Cryptographic Identity"})]})}function Kn({children:n}){const{user:e,loading:t,isDemoUser:s}=tt(),r=Mt();if(t)return a.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(Sn,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),a.jsx("p",{className:"text-sm font-medium",children:"Verifying Bharosa credentials..."})]});if(!e){const i=encodeURIComponent(r.pathname+r.search);return a.jsx(an,{to:`/login?returnTo=${i}`,replace:!0})}return!s&&"emailVerified"in e&&!e.emailVerified&&e.providerData?.some(o=>o.providerId==="password")&&r.pathname!=="/verify-email"?a.jsx(an,{to:"/verify-email",replace:!0}):n?a.jsx(a.Fragment,{children:n}):a.jsx(Ce,{})}function ni({children:n}){const{account:e,loading:t,isDemoUser:s}=tt(),{isConnected:r,address:i}=ui(),o=Mt();if(t)return a.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(Sn,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),a.jsx("p",{className:"text-sm font-medium",children:"Checking cryptographic wallet status..."})]});if(s&&e?.walletAddress)return n?a.jsx(a.Fragment,{children:n}):a.jsx(Ce,{});const c=!!e?.walletAddress,l=r&&i&&e?.walletAddress&&i.toLowerCase()===e.walletAddress.toLowerCase();if(!r||!c||!l){const d=encodeURIComponent(o.pathname+o.search);return a.jsx(an,{to:`/connect-wallet?returnTo=${d}`,replace:!0})}return n?a.jsx(a.Fragment,{children:n}):a.jsx(Ce,{})}function xp({children:n}){const{account:e,loading:t}=tt();return t?a.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(Sn,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),a.jsx("p",{className:"text-sm font-medium",children:"Resolving decentralized identity..."})]}):e?.didRegistered?n?a.jsx(a.Fragment,{children:n}):a.jsx(Ce,{}):a.jsx(an,{to:"/onboarding",replace:!0})}function Zn({allowedRoles:n,children:e}){const{account:t,loading:s}=tt();if(s)return null;const r=t?.persona?.toUpperCase()||"",i=(t?.onChainRoles||[]).map(c=>c.toUpperCase());return n.includes(r)||n.some(c=>i.includes(c.toUpperCase()))?e?a.jsx(a.Fragment,{children:e}):a.jsx(Ce,{}):a.jsx("div",{className:"flex-1 flex items-center justify-center p-8 bg-[#F7FBEF]",children:a.jsxs("div",{className:"max-w-md w-full bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-8 shadow-sm text-center",children:[a.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[#ECFCCB] flex items-center justify-center mx-auto mb-4 text-[#65A30D]",children:a.jsx(La,{className:"w-8 h-8"})}),a.jsx("h2",{className:"text-2xl font-bold font-anton text-[#1A2E05] tracking-wide mb-2 uppercase",children:"Access Restricted"}),a.jsxs("p",{className:"text-sm text-[#4D6B2A] mb-6 leading-relaxed",children:["This module requires verified credentials or privileges (",n.join(", "),"). Your current role is"," ",a.jsx("span",{className:"font-semibold text-[#1A2E05]",children:t?.persona||"HOLDER"}),"."]}),a.jsxs(Ee,{to:"/dashboard",className:"inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-sm transition-colors shadow-sm",children:[a.jsx(ja,{className:"w-4 h-4 mr-2"})," Return to Dashboard"]})]})})}const M=()=>a.jsxs("div",{className:"flex-1 min-h-[60vh] flex items-center justify-center p-16 text-sm text-[#4D6B2A]",children:[a.jsx(Sn,{className:"w-6 h-6 animate-spin mr-2 text-[#84CC16]"})," Loading Bharosa Protocol..."]}),Ip=u.lazy(()=>B(()=>import("./Landing-FDNQaI8w.js"),__vite__mapDeps([0,1,2,3,4,5]))),Yn=u.lazy(()=>B(()=>import("./PublicVerify-BE-EIwBU.js"),__vite__mapDeps([6,1,2,7,5,8,3,9,10,11]))),Ep=u.lazy(()=>B(()=>import("./Login-0j3XCa7o.js"),__vite__mapDeps([12,1,2,13,3,4,14,5]))),Cp=u.lazy(()=>B(()=>import("./SignUp-DvFPaN7K.js"),__vite__mapDeps([15,1,2,13,3,14,16,5]))),kp=u.lazy(()=>B(()=>import("./ForgotPassword-BJNWR_0b.js"),__vite__mapDeps([17,1,2,13,3,9,14,16,5]))),Tp=u.lazy(()=>B(()=>import("./VerifyEmail-B7vpk22z.js"),__vite__mapDeps([18,1,2,3,16,9,5]))),Ap=u.lazy(()=>B(()=>import("./ConnectWallet-C1qhZWEO.js"),__vite__mapDeps([19,1,2,5,3,9]))),Sp=u.lazy(()=>B(()=>import("./AppRedirect-CXC4S1xq.js"),__vite__mapDeps([20,1,2,5]))),Np=u.lazy(()=>B(()=>import("./Onboarding-CrvXqsgv.js"),__vite__mapDeps([21,1,2,5,7,22,3,9]))),Rp=u.lazy(()=>B(()=>import("./Dashboard-bjuKebgx.js"),__vite__mapDeps([23,1,2,7,5,22,3,24,25,26,27]))),Pp=u.lazy(()=>B(()=>import("./Identity-DbkoG3We.js"),__vite__mapDeps([28,1,2,7,5,22,3]))),Op=u.lazy(()=>B(()=>import("./Credentials-Di3Itj3h.js"),__vite__mapDeps([29,1,2,7,5,22,3,30,31,25]))),si=u.lazy(()=>B(()=>import("./Assets-s1l9K3jN.js"),__vite__mapDeps([32,1,2,3,7,5,33,9,30,10]))),jp=u.lazy(()=>B(()=>import("./Access-BmgdxWuy.js"),__vite__mapDeps([34,1,2,3,7,5,35,24,9,26,11,31]))),Dp=u.lazy(()=>B(()=>import("./ZK-Beryo0TE.js"),__vite__mapDeps([36,1,2,3,7,5,9,10,11]))),Lp=u.lazy(()=>B(()=>import("./Recovery-DQxuz5jR.js"),__vite__mapDeps([37,1,2,3,5,9]))),Mp=u.lazy(()=>B(()=>import("./AuditLog-CpyZma1L.js"),__vite__mapDeps([38,1,2,3,31,27,5]))),Fp=u.lazy(()=>B(()=>import("./SecurityCenter-CUsTIPkT.js"),__vite__mapDeps([39,1,2,3,7,5,40,31,35,9,26,11]))),Up=u.lazy(()=>B(()=>import("./Issuer-BpzWELP8.js"),__vite__mapDeps([41,1,2,3,7,5,22,8,14,9,27,33]))),Bp=u.lazy(()=>B(()=>import("./Verifier-BwCA3SzG.js"),__vite__mapDeps([42,1,2,3]))),Vp=u.lazy(()=>B(()=>import("./Admin-BBuiLeg0.js"),__vite__mapDeps([43,1,2,3,7,5,9,40,24]))),$p=u.lazy(()=>B(()=>import("./NotFound-Sm1evOF7.js"),__vite__mapDeps([44,1,2,3]))),zp=no([{element:a.jsx(dp,{}),children:[{path:"/",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Ip,{})})},{path:"/public-verify",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Yn,{})})},{path:"/verify",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Yn,{})})},{path:"/verify/:hash",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Yn,{})})}]},{path:"/login",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Ep,{})})},{element:a.jsx(wp,{}),children:[{path:"/signup",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Cp,{})})},{path:"/forgot-password",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(kp,{})})},{path:"/verify-email",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Tp,{})})}]},{path:"/app",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Sp,{})})},{element:a.jsx(Kn,{}),children:[{path:"/connect-wallet",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Ap,{})})}]},{element:a.jsx(Kn,{children:a.jsx(ni,{})}),children:[{path:"/onboarding",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Np,{})})}]},{element:a.jsx(Kn,{children:a.jsx(ni,{children:a.jsx(xp,{children:a.jsx(bp,{})})})}),children:[{path:"/dashboard",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Rp,{})})},{path:"/identity",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Pp,{})})},{path:"/credentials",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Op,{})})},{path:"/assets",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(si,{})})},{path:"/assets/:assetId",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(si,{})})},{path:"/access",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(jp,{})})},{path:"/zk",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Dp,{})})},{path:"/recovery",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Lp,{})})},{path:"/audit",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Mp,{})})},{path:"/security",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Fp,{})})},{path:"/issuer",element:a.jsx(Zn,{allowedRoles:["ISSUER","ADMIN"],children:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Up,{})})})},{path:"/verifier",element:a.jsx(Zn,{allowedRoles:["VERIFIER","ADMIN"],children:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Bp,{})})})},{path:"/admin",element:a.jsx(Zn,{allowedRoles:["ADMIN"],children:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx(Vp,{})})})}]},{path:"*",element:a.jsx(u.Suspense,{fallback:a.jsx(M,{}),children:a.jsx($p,{})})}],{future:{v7_relativeSplatPath:!0}});function Wp(){return a.jsx(so,{children:a.jsx(uc,{children:a.jsx(Bf,{children:a.jsx(ro,{router:zp,future:{v7_startTransition:!0}})})})})}var Vs={exports:{}},ut=typeof Reflect=="object"?Reflect:null,ri=ut&&typeof ut.apply=="function"?ut.apply:function(e,t,s){return Function.prototype.apply.call(e,t,s)},sn;ut&&typeof ut.ownKeys=="function"?sn=ut.ownKeys:Object.getOwnPropertySymbols?sn=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:sn=function(e){return Object.getOwnPropertyNames(e)};function Hp(n){console&&console.warn&&console.warn(n)}var Ua=Number.isNaN||function(e){return e!==e};function O(){O.init.call(this)}Vs.exports=O;Vs.exports.once=Zp;O.EventEmitter=O;O.prototype._events=void 0;O.prototype._eventsCount=0;O.prototype._maxListeners=void 0;var ii=10;function Rn(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(O,"defaultMaxListeners",{enumerable:!0,get:function(){return ii},set:function(n){if(typeof n!="number"||n<0||Ua(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");ii=n}});O.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};O.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Ua(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Ba(n){return n._maxListeners===void 0?O.defaultMaxListeners:n._maxListeners}O.prototype.getMaxListeners=function(){return Ba(this)};O.prototype.emit=function(e){for(var t=[],s=1;s<arguments.length;s++)t.push(arguments[s]);var r=e==="error",i=this._events;if(i!==void 0)r=r&&i.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var c=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw c.context=o,c}var l=i[e];if(l===void 0)return!1;if(typeof l=="function")ri(l,this,t);else for(var d=l.length,h=Ha(l,d),s=0;s<d;++s)ri(h[s],this,t);return!0};function Va(n,e,t,s){var r,i,o;if(Rn(t),i=n._events,i===void 0?(i=n._events=Object.create(null),n._eventsCount=0):(i.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),i=n._events),o=i[e]),o===void 0)o=i[e]=t,++n._eventsCount;else if(typeof o=="function"?o=i[e]=s?[t,o]:[o,t]:s?o.unshift(t):o.push(t),r=Ba(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=n,c.type=e,c.count=o.length,Hp(c)}return n}O.prototype.addListener=function(e,t){return Va(this,e,t,!1)};O.prototype.on=O.prototype.addListener;O.prototype.prependListener=function(e,t){return Va(this,e,t,!0)};function qp(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function $a(n,e,t){var s={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=qp.bind(s);return r.listener=t,s.wrapFn=r,r}O.prototype.once=function(e,t){return Rn(t),this.on(e,$a(this,e,t)),this};O.prototype.prependOnceListener=function(e,t){return Rn(t),this.prependListener(e,$a(this,e,t)),this};O.prototype.removeListener=function(e,t){var s,r,i,o,c;if(Rn(t),r=this._events,r===void 0)return this;if(s=r[e],s===void 0)return this;if(s===t||s.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,s.listener||t));else if(typeof s!="function"){for(i=-1,o=s.length-1;o>=0;o--)if(s[o]===t||s[o].listener===t){c=s[o].listener,i=o;break}if(i<0)return this;i===0?s.shift():Gp(s,i),s.length===1&&(r[e]=s[0]),r.removeListener!==void 0&&this.emit("removeListener",e,c||t)}return this};O.prototype.off=O.prototype.removeListener;O.prototype.removeAllListeners=function(e){var t,s,r;if(s=this._events,s===void 0)return this;if(s.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):s[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete s[e]),this;if(arguments.length===0){var i=Object.keys(s),o;for(r=0;r<i.length;++r)o=i[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=s[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function za(n,e,t){var s=n._events;if(s===void 0)return[];var r=s[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?Kp(r):Ha(r,r.length)}O.prototype.listeners=function(e){return za(this,e,!0)};O.prototype.rawListeners=function(e){return za(this,e,!1)};O.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):Wa.call(n,e)};O.prototype.listenerCount=Wa;function Wa(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}O.prototype.eventNames=function(){return this._eventsCount>0?sn(this._events):[]};function Ha(n,e){for(var t=new Array(e),s=0;s<e;++s)t[s]=n[s];return t}function Gp(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function Kp(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function Zp(n,e){return new Promise(function(t,s){function r(o){n.removeListener(e,i),s(o)}function i(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}qa(n,e,i,{once:!0}),e!=="error"&&Yp(n,r,{once:!0})})}function Yp(n,e,t){typeof n.on=="function"&&qa(n,"error",e,t)}function qa(n,e,t,s){if(typeof n.on=="function")s.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(i){s.once&&n.removeEventListener(e,r),t(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var rn=Vs.exports;const tm=io(rn);typeof rn.EventEmitter<"u"&&typeof rn.EventEmitter.defaultMaxListeners=="number"&&(rn.EventEmitter.defaultMaxListeners=100);const Jp=[1,10,56,137,8453,42161],ai=31337;if(Jp.includes(ai)){const n=`[CRITICAL SECURITY] DEMO_MODE cannot be enabled on mainnet chain ID ${ai}! Startup aborted.`;throw console.error(n),new Error(n)}const Ga=document.getElementById("root");if(!Ga)throw new Error("Root element #root not found in document");Jn.createRoot(Ga).render(a.jsx(ao.StrictMode,{children:a.jsx(Wp,{})}));const nm=Object.freeze(Object.defineProperty({__proto__:null,default:Co},Symbol.toStringTag,{value:"Module"}));export{ja as A,nn as C,us as D,Jf as F,Xf as K,Sn as L,tp as M,tm as N,sp as R,Nn as S,ap as T,cp as U,fs as W,Ma as Z,Bs as a,ep as b,Hf as c,R as d,ei as e,Da as f,La as g,Qf as h,op as i,qf as j,ti as k,Wf as l,ne as m,Zf as n,rc as o,Yf as p,ip as q,An as r,Z as s,rn as t,tt as u,nm as v};
