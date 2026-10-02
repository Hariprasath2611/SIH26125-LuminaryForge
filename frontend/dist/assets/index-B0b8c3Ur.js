const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Landing-CfBrSBB2.js","assets/vendor-query-DHo56eci.js","assets/vendor-react-8KWlGCqj.js","assets/PageMeta-BZ_eASFK.js","assets/circle-check-Bt2z_V-H.js","assets/hard-drive-BZ1mJF1h.js","assets/users-DgypQUnN.js","assets/file-check-2-a1YORE36.js","assets/vendor-web3-YVwmiLQB.js","assets/Landing-Bim3SSIv.css","assets/PublicVerify-ybWVZUHC.js","assets/client-CKeQX_rw.js","assets/vc-BrCP9JR7.js","assets/circle-x-CxJy7Gin.js","assets/printer-Leuo2L5W.js","assets/Login-DGaNYyGZ.js","assets/zod-3N_MAZ-2.js","assets/circle-alert-B7KJGskt.js","assets/SignUp-CRbhBvri.js","assets/mail-DPX469d2.js","assets/ForgotPassword-BOuGWMak.js","assets/VerifyEmail-C0roCYOH.js","assets/ConnectWallet-DbFijG6A.js","assets/AppRedirect-DjyGsbt1.js","assets/Onboarding-CdbAtY__.js","assets/did-DnqN9Be1.js","assets/Dashboard-D06SmByJ.js","assets/circle-plus-Ct0ua9kE.js","assets/qr-code-DbPx7wUW.js","assets/external-link-C2raWa2-.js","assets/Identity-Ca01SaLt.js","assets/Credentials-BJ8CW_fn.js","assets/eye-B8hVOq55.js","assets/download-9XHNyc4p.js","assets/Assets-DRDWhuEH.js","assets/upload-DYPzO91G.js","assets/Access-BfQyy1u5.js","assets/clock-CANwkSJd.js","assets/ZK-DyKEjrKH.js","assets/Recovery-C48iX_8o.js","assets/AuditLog-BqvRjpBM.js","assets/SecurityCenter-BZlFrvW6.js","assets/Issuer-D-w5WKJ9.js","assets/Verifier-BZd2oteN.js","assets/Admin-CN_voYx-.js","assets/NotFound-CYnESbK7.js"])))=>i.map(i=>d[i]);
import{Q as Gi,j as o,c as Zi,a as Ki}from"./vendor-query-DHo56eci.js";import{a as Ji,r as f,d as ft,O as me,L as pe,N as rs,c as Yi,h as St,i as Xi,j as Qi,k as ea,R as ta}from"./vendor-react-8KWlGCqj.js";import{aP as mr,aQ as na,_ as O,aR as sa,aS as vt,E as Oe,aT as wt,aU as bt,aV as ra,aW as ia,aX as aa,aY as oa,aZ as ca,y as la,e as is,a_ as da,a$ as as,b0 as ua,aw as ha,aL as fa,b1 as gr,b2 as pa,a as yr,b3 as ma,u as _r,b as ga,b4 as ya,b5 as _a}from"./vendor-web3-YVwmiLQB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var gn={},os=Ji;gn.createRoot=os.createRoot,gn.hydrateRoot=os.hydrateRoot;function va(n){const e=typeof window<"u"?window:void 0;if(typeof e>"u"||typeof e.ethereum>"u")return;const t=e.ethereum.providers;return t?t.find(s=>s[n]):e.ethereum[n]?e.ethereum:void 0}function wa(n){const e=(t,s)=>{const[r,...i]=s.split("."),a=t[r];if(a)return i.length===0?a:e(a,i.join("."))};if(typeof window<"u")return e(window,n)}function ba({flag:n,namespace:e}){const t=typeof window<"u"?window:void 0;if(typeof t>"u")return;if(e){const r=wa(e);if(r)return r}const s=t.ethereum?.providers;if(n){const r=va(n);if(r)return r}if(!(e||n))return typeof s<"u"&&s.length>0?s[0]:t.ethereum}function xa(n){return e=>{const t=n?{target:()=>({id:e.rkDetails.id,name:e.rkDetails.name,provider:n})}:{};return mr(s=>({...na(t)(s),...e}))}}function Ia({flag:n,namespace:e,target:t}){const s=t||ba({flag:n,namespace:e});return xa(s)}var Ea=()=>({id:"injected",name:"Browser Wallet",iconUrl:async()=>(await O(async()=>{const{default:n}=await import("./injectedWallet-AWJSZPMG-Df9x-YJA.js");return{default:n}},[])).default,iconBackground:"#fff",createConnector:Ia({})}),k;(function(n){n.assertEqual=r=>{};function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const i={};for(const a of r)i[a]=a;return i},n.getValidEnumValues=r=>{const i=n.objectKeys(r).filter(c=>typeof r[r[c]]!="number"),a={};for(const c of i)a[c]=r[c];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(i){return r[i]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&i.push(a);return i},n.find=(r,i)=>{for(const a of r)if(i(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&Number.isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}n.joinValues=s,n.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(k||(k={}));var cs;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(cs||(cs={}));const m=k.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),be=n=>{switch(typeof n){case"undefined":return m.undefined;case"string":return m.string;case"number":return Number.isNaN(n)?m.nan:m.number;case"boolean":return m.boolean;case"function":return m.function;case"bigint":return m.bigint;case"symbol":return m.symbol;case"object":return Array.isArray(n)?m.array:n===null?m.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?m.promise:typeof Map<"u"&&n instanceof Map?m.map:typeof Set<"u"&&n instanceof Set?m.set:typeof Date<"u"&&n instanceof Date?m.date:m.object;default:return m.unknown}},h=k.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ge extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)s._errors.push(t(a));else{let c=s,l=0;for(;l<a.path.length;){const d=a.path[l];l===a.path.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(t(a))):c[d]=c[d]||{_errors:[]},c=c[d],l++}}};return r(this),s}static assert(e){if(!(e instanceof ge))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,k.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},s=[];for(const r of this.issues)if(r.path.length>0){const i=r.path[0];t[i]=t[i]||[],t[i].push(e(r))}else s.push(e(r));return{formErrors:s,fieldErrors:t}}get formErrors(){return this.flatten()}}ge.create=n=>new ge(n);const yn=(n,e)=>{let t;switch(n.code){case h.invalid_type:n.received===m.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case h.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,k.jsonStringifyReplacer)}`;break;case h.unrecognized_keys:t=`Unrecognized key(s) in object: ${k.joinValues(n.keys,", ")}`;break;case h.invalid_union:t="Invalid input";break;case h.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${k.joinValues(n.options)}`;break;case h.invalid_enum_value:t=`Invalid enum value. Expected ${k.joinValues(n.options)}, received '${n.received}'`;break;case h.invalid_arguments:t="Invalid function arguments";break;case h.invalid_return_type:t="Invalid function return type";break;case h.invalid_date:t="Invalid date";break;case h.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:k.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case h.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="bigint"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case h.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case h.custom:t="Invalid input";break;case h.invalid_intersection_types:t="Intersection results could not be merged";break;case h.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case h.not_finite:t="Number must be finite";break;default:t=e.defaultError,k.assertNever(n)}return{message:t}};let Ca=yn;function ka(){return Ca}const Ta=n=>{const{data:e,path:t,errorMaps:s,issueData:r}=n,i=[...t,...r.path||[]],a={...r,path:i};if(r.message!==void 0)return{...r,path:i,message:r.message};let c="";const l=s.filter(d=>!!d).slice().reverse();for(const d of l)c=d(a,{data:e,defaultError:c}).message;return{...r,path:i,message:c}};function p(n,e){const t=ka(),s=Ta({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===yn?void 0:yn].filter(r=>!!r)});n.common.issues.push(s)}class q{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const s=[];for(const r of t){if(r.status==="aborted")return w;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,t){const s=[];for(const r of t){const i=await r.key,a=await r.value;s.push({key:i,value:a})}return q.mergeObjectSync(e,s)}static mergeObjectSync(e,t){const s={};for(const r of t){const{key:i,value:a}=r;if(i.status==="aborted"||a.status==="aborted")return w;i.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(s[i.value]=a.value)}return{status:e.value,value:s}}}const w=Object.freeze({status:"aborted"}),st=n=>({status:"dirty",value:n}),J=n=>({status:"valid",value:n}),ls=n=>n.status==="aborted",ds=n=>n.status==="dirty",Ke=n=>n.status==="valid",Nt=n=>typeof Promise<"u"&&n instanceof Promise;var g;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(g||(g={}));class Se{constructor(e,t,s,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=s,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const us=(n,e)=>{if(Ke(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new ge(n.common.issues);return this._error=t,this._error}}};function I(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:s,description:r}=n;if(e&&(t||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,c)=>{const{message:l}=n;return a.code==="invalid_enum_value"?{message:l??c.defaultError}:typeof c.data>"u"?{message:l??s??c.defaultError}:a.code!=="invalid_type"?{message:c.defaultError}:{message:l??t??c.defaultError}},description:r}}class C{get description(){return this._def.description}_getType(e){return be(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:be(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new q,ctx:{common:e.parent.common,data:e.data,parsedType:be(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Nt(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const s=this.safeParse(e,t);if(s.success)return s.data;throw s.error}safeParse(e,t){const s={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:be(e)},r=this._parseSync({data:e,path:s.path,parent:s});return us(s,r)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:be(e)};if(!this["~standard"].async)try{const s=this._parseSync({data:e,path:[],parent:t});return Ke(s)?{value:s.value}:{issues:t.common.issues}}catch(s){s?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(s=>Ke(s)?{value:s.value}:{issues:t.common.issues})}async parseAsync(e,t){const s=await this.safeParseAsync(e,t);if(s.success)return s.data;throw s.error}async safeParseAsync(e,t){const s={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:be(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(Nt(r)?r:Promise.resolve(r));return us(s,i)}refine(e,t){const s=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,i)=>{const a=e(r),c=()=>i.addIssue({code:h.custom,...s(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(c(),!1)):a?!0:(c(),!1)})}refinement(e,t){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof t=="function"?t(s,r):t),!1))}_refinement(e){return new Ye({schema:this,typeName:b.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return Te.create(this,this._def)}nullable(){return Xe.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ee.create(this)}promise(){return Dt.create(this,this._def)}or(e){return Pt.create([this,e],this._def)}and(e){return Ot.create(this,e,this._def)}transform(e){return new Ye({...I(this._def),schema:this,typeName:b.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new vn({...I(this._def),innerType:this,defaultValue:t,typeName:b.ZodDefault})}brand(){return new Ja({typeName:b.ZodBranded,type:this,...I(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new wn({...I(this._def),innerType:this,catchValue:t,typeName:b.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return On.create(this,e)}readonly(){return bn.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Aa=/^c[^\s-]{8,}$/i,Sa=/^[0-9a-z]+$/,Na=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Ra=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Pa=/^[a-z0-9_-]{21}$/i,Oa=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Da=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ja=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,La="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let tn;const Ma=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Fa=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Ua=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Ba=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Va=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,$a=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,vr="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",za=new RegExp(`^${vr}$`);function wr(n){let e="[0-5]\\d";n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`);const t=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Ha(n){return new RegExp(`^${wr(n)}$`)}function Wa(n){let e=`${vr}T${wr(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function qa(n,e){return!!((e==="v4"||!e)&&Ma.test(n)||(e==="v6"||!e)&&Ua.test(n))}function Ga(n,e){if(!Oa.test(n))return!1;try{const[t]=n.split(".");if(!t)return!1;const s=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),r=JSON.parse(atob(s));return!(typeof r!="object"||r===null||"typ"in r&&r?.typ!=="JWT"||!r.alg||e&&r.alg!==e)}catch{return!1}}function Za(n,e){return!!((e==="v4"||!e)&&Fa.test(n)||(e==="v6"||!e)&&Ba.test(n))}class ke extends C{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==m.string){const i=this._getOrReturnCtx(e);return p(i,{code:h.invalid_type,expected:m.string,received:i.parsedType}),w}const s=new q;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:h.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:h.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const a=e.data.length>i.value,c=e.data.length<i.value;(a||c)&&(r=this._getOrReturnCtx(e,r),a?p(r,{code:h.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&p(r,{code:h.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")ja.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"email",code:h.invalid_string,message:i.message}),s.dirty());else if(i.kind==="emoji")tn||(tn=new RegExp(La,"u")),tn.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"emoji",code:h.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")Ra.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"uuid",code:h.invalid_string,message:i.message}),s.dirty());else if(i.kind==="nanoid")Pa.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"nanoid",code:h.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")Aa.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid",code:h.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")Sa.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid2",code:h.invalid_string,message:i.message}),s.dirty());else if(i.kind==="ulid")Na.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ulid",code:h.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),p(r,{validation:"url",code:h.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"regex",code:h.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(r=this._getOrReturnCtx(e,r),p(r,{code:h.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),s.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:h.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:h.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?Wa(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:h.invalid_string,validation:"datetime",message:i.message}),s.dirty()):i.kind==="date"?za.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:h.invalid_string,validation:"date",message:i.message}),s.dirty()):i.kind==="time"?Ha(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:h.invalid_string,validation:"time",message:i.message}),s.dirty()):i.kind==="duration"?Da.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"duration",code:h.invalid_string,message:i.message}),s.dirty()):i.kind==="ip"?qa(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ip",code:h.invalid_string,message:i.message}),s.dirty()):i.kind==="jwt"?Ga(e.data,i.alg)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"jwt",code:h.invalid_string,message:i.message}),s.dirty()):i.kind==="cidr"?Za(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cidr",code:h.invalid_string,message:i.message}),s.dirty()):i.kind==="base64"?Va.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64",code:h.invalid_string,message:i.message}),s.dirty()):i.kind==="base64url"?$a.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64url",code:h.invalid_string,message:i.message}),s.dirty()):k.assertNever(i);return{status:s.value,value:e.data}}_regex(e,t,s){return this.refinement(r=>e.test(r),{validation:t,code:h.invalid_string,...g.errToObj(s)})}_addCheck(e){return new ke({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...g.errToObj(e)})}url(e){return this._addCheck({kind:"url",...g.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...g.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...g.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...g.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...g.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...g.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...g.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...g.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...g.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...g.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...g.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...g.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...g.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...g.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...g.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...g.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...g.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...g.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...g.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...g.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...g.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...g.errToObj(t)})}nonempty(e){return this.min(1,g.errToObj(e))}trim(){return new ke({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ke({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ke({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ke.create=n=>new ke({checks:[],typeName:b.ZodString,coerce:n?.coerce??!1,...I(n)});function Ka(n,e){const t=(n.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=t>s?t:s,i=Number.parseInt(n.toFixed(r).replace(".","")),a=Number.parseInt(e.toFixed(r).replace(".",""));return i%a/10**r}class ot extends C{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==m.number){const i=this._getOrReturnCtx(e);return p(i,{code:h.invalid_type,expected:m.number,received:i.parsedType}),w}let s;const r=new q;for(const i of this._def.checks)i.kind==="int"?k.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),p(s,{code:h.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:h.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:h.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?Ka(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),p(s,{code:h.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),p(s,{code:h.not_finite,message:i.message}),r.dirty()):k.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,g.toString(t))}gt(e,t){return this.setLimit("min",e,!1,g.toString(t))}lte(e,t){return this.setLimit("max",e,!0,g.toString(t))}lt(e,t){return this.setLimit("max",e,!1,g.toString(t))}setLimit(e,t,s,r){return new ot({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:g.toString(r)}]})}_addCheck(e){return new ot({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:g.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:g.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:g.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:g.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:g.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:g.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:g.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:g.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:g.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&k.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(t===null||s.value>t)&&(t=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ot.create=n=>new ot({checks:[],typeName:b.ZodNumber,coerce:n?.coerce||!1,...I(n)});class ct extends C{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==m.bigint)return this._getInvalidInput(e);let s;const r=new q;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:h.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:h.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),p(s,{code:h.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):k.assertNever(i);return{status:r.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return p(t,{code:h.invalid_type,expected:m.bigint,received:t.parsedType}),w}gte(e,t){return this.setLimit("min",e,!0,g.toString(t))}gt(e,t){return this.setLimit("min",e,!1,g.toString(t))}lte(e,t){return this.setLimit("max",e,!0,g.toString(t))}lt(e,t){return this.setLimit("max",e,!1,g.toString(t))}setLimit(e,t,s,r){return new ct({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:g.toString(r)}]})}_addCheck(e){return new ct({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:g.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:g.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:g.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:g.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:g.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ct.create=n=>new ct({checks:[],typeName:b.ZodBigInt,coerce:n?.coerce??!1,...I(n)});class hs extends C{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==m.boolean){const s=this._getOrReturnCtx(e);return p(s,{code:h.invalid_type,expected:m.boolean,received:s.parsedType}),w}return J(e.data)}}hs.create=n=>new hs({typeName:b.ZodBoolean,coerce:n?.coerce||!1,...I(n)});class Rt extends C{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==m.date){const i=this._getOrReturnCtx(e);return p(i,{code:h.invalid_type,expected:m.date,received:i.parsedType}),w}if(Number.isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return p(i,{code:h.invalid_date}),w}const s=new q;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:h.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:h.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):k.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Rt({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:g.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:g.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Rt.create=n=>new Rt({checks:[],coerce:n?.coerce||!1,typeName:b.ZodDate,...I(n)});class fs extends C{_parse(e){if(this._getType(e)!==m.symbol){const s=this._getOrReturnCtx(e);return p(s,{code:h.invalid_type,expected:m.symbol,received:s.parsedType}),w}return J(e.data)}}fs.create=n=>new fs({typeName:b.ZodSymbol,...I(n)});class ps extends C{_parse(e){if(this._getType(e)!==m.undefined){const s=this._getOrReturnCtx(e);return p(s,{code:h.invalid_type,expected:m.undefined,received:s.parsedType}),w}return J(e.data)}}ps.create=n=>new ps({typeName:b.ZodUndefined,...I(n)});class ms extends C{_parse(e){if(this._getType(e)!==m.null){const s=this._getOrReturnCtx(e);return p(s,{code:h.invalid_type,expected:m.null,received:s.parsedType}),w}return J(e.data)}}ms.create=n=>new ms({typeName:b.ZodNull,...I(n)});class gs extends C{constructor(){super(...arguments),this._any=!0}_parse(e){return J(e.data)}}gs.create=n=>new gs({typeName:b.ZodAny,...I(n)});class ys extends C{constructor(){super(...arguments),this._unknown=!0}_parse(e){return J(e.data)}}ys.create=n=>new ys({typeName:b.ZodUnknown,...I(n)});class Ne extends C{_parse(e){const t=this._getOrReturnCtx(e);return p(t,{code:h.invalid_type,expected:m.never,received:t.parsedType}),w}}Ne.create=n=>new Ne({typeName:b.ZodNever,...I(n)});class _s extends C{_parse(e){if(this._getType(e)!==m.undefined){const s=this._getOrReturnCtx(e);return p(s,{code:h.invalid_type,expected:m.void,received:s.parsedType}),w}return J(e.data)}}_s.create=n=>new _s({typeName:b.ZodVoid,...I(n)});class ee extends C{_parse(e){const{ctx:t,status:s}=this._processInputParams(e),r=this._def;if(t.parsedType!==m.array)return p(t,{code:h.invalid_type,expected:m.array,received:t.parsedType}),w;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,c=t.data.length<r.exactLength.value;(a||c)&&(p(t,{code:a?h.too_big:h.too_small,minimum:c?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(p(t,{code:h.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(p(t,{code:h.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),t.common.async)return Promise.all([...t.data].map((a,c)=>r.type._parseAsync(new Se(t,a,t.path,c)))).then(a=>q.mergeArray(s,a));const i=[...t.data].map((a,c)=>r.type._parseSync(new Se(t,a,t.path,c)));return q.mergeArray(s,i)}get element(){return this._def.type}min(e,t){return new ee({...this._def,minLength:{value:e,message:g.toString(t)}})}max(e,t){return new ee({...this._def,maxLength:{value:e,message:g.toString(t)}})}length(e,t){return new ee({...this._def,exactLength:{value:e,message:g.toString(t)}})}nonempty(e){return this.min(1,e)}}ee.create=(n,e)=>new ee({type:n,minLength:null,maxLength:null,exactLength:null,typeName:b.ZodArray,...I(e)});function We(n){if(n instanceof j){const e={};for(const t in n.shape){const s=n.shape[t];e[t]=Te.create(We(s))}return new j({...n._def,shape:()=>e})}else return n instanceof ee?new ee({...n._def,type:We(n.element)}):n instanceof Te?Te.create(We(n.unwrap())):n instanceof Xe?Xe.create(We(n.unwrap())):n instanceof Fe?Fe.create(n.items.map(e=>We(e))):n}class j extends C{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=k.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==m.object){const d=this._getOrReturnCtx(e);return p(d,{code:h.invalid_type,expected:m.object,received:d.parsedType}),w}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:a}=this._getCached(),c=[];if(!(this._def.catchall instanceof Ne&&this._def.unknownKeys==="strip"))for(const d in r.data)a.includes(d)||c.push(d);const l=[];for(const d of a){const u=i[d],y=r.data[d];l.push({key:{status:"valid",value:d},value:u._parse(new Se(r,y,r.path,d)),alwaysSet:d in r.data})}if(this._def.catchall instanceof Ne){const d=this._def.unknownKeys;if(d==="passthrough")for(const u of c)l.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(d==="strict")c.length>0&&(p(r,{code:h.unrecognized_keys,keys:c}),s.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const u of c){const y=r.data[u];l.push({key:{status:"valid",value:u},value:d._parse(new Se(r,y,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const d=[];for(const u of l){const y=await u.key,_=await u.value;d.push({key:y,value:_,alwaysSet:u.alwaysSet})}return d}).then(d=>q.mergeObjectSync(s,d)):q.mergeObjectSync(s,l)}get shape(){return this._def.shape()}strict(e){return g.errToObj,new j({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,s)=>{const r=this._def.errorMap?.(t,s).message??s.defaultError;return t.code==="unrecognized_keys"?{message:g.errToObj(e).message??r}:{message:r}}}:{}})}strip(){return new j({...this._def,unknownKeys:"strip"})}passthrough(){return new j({...this._def,unknownKeys:"passthrough"})}extend(e){return new j({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new j({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:b.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new j({...this._def,catchall:e})}pick(e){const t={};for(const s of k.objectKeys(e))e[s]&&this.shape[s]&&(t[s]=this.shape[s]);return new j({...this._def,shape:()=>t})}omit(e){const t={};for(const s of k.objectKeys(this.shape))e[s]||(t[s]=this.shape[s]);return new j({...this._def,shape:()=>t})}deepPartial(){return We(this)}partial(e){const t={};for(const s of k.objectKeys(this.shape)){const r=this.shape[s];e&&!e[s]?t[s]=r:t[s]=r.optional()}return new j({...this._def,shape:()=>t})}required(e){const t={};for(const s of k.objectKeys(this.shape))if(e&&!e[s])t[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof Te;)i=i._def.innerType;t[s]=i}return new j({...this._def,shape:()=>t})}keyof(){return br(k.objectKeys(this.shape))}}j.create=(n,e)=>new j({shape:()=>n,unknownKeys:"strip",catchall:Ne.create(),typeName:b.ZodObject,...I(e)});j.strictCreate=(n,e)=>new j({shape:()=>n,unknownKeys:"strict",catchall:Ne.create(),typeName:b.ZodObject,...I(e)});j.lazycreate=(n,e)=>new j({shape:n,unknownKeys:"strip",catchall:Ne.create(),typeName:b.ZodObject,...I(e)});class Pt extends C{_parse(e){const{ctx:t}=this._processInputParams(e),s=this._def.options;function r(i){for(const c of i)if(c.result.status==="valid")return c.result;for(const c of i)if(c.result.status==="dirty")return t.common.issues.push(...c.ctx.common.issues),c.result;const a=i.map(c=>new ge(c.ctx.common.issues));return p(t,{code:h.invalid_union,unionErrors:a}),w}if(t.common.async)return Promise.all(s.map(async i=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let i;const a=[];for(const l of s){const d={...t,common:{...t.common,issues:[]},parent:null},u=l._parseSync({data:t.data,path:t.path,parent:d});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:d}),d.common.issues.length&&a.push(d.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const c=a.map(l=>new ge(l));return p(t,{code:h.invalid_union,unionErrors:c}),w}}get options(){return this._def.options}}Pt.create=(n,e)=>new Pt({options:n,typeName:b.ZodUnion,...I(e)});function _n(n,e){const t=be(n),s=be(e);if(n===e)return{valid:!0,data:n};if(t===m.object&&s===m.object){const r=k.objectKeys(e),i=k.objectKeys(n).filter(c=>r.indexOf(c)!==-1),a={...n,...e};for(const c of i){const l=_n(n[c],e[c]);if(!l.valid)return{valid:!1};a[c]=l.data}return{valid:!0,data:a}}else if(t===m.array&&s===m.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<n.length;i++){const a=n[i],c=e[i],l=_n(a,c);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return t===m.date&&s===m.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class Ot extends C{_parse(e){const{status:t,ctx:s}=this._processInputParams(e),r=(i,a)=>{if(ls(i)||ls(a))return w;const c=_n(i.value,a.value);return c.valid?((ds(i)||ds(a))&&t.dirty(),{status:t.value,value:c.data}):(p(s,{code:h.invalid_intersection_types}),w)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,a])=>r(i,a)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}Ot.create=(n,e,t)=>new Ot({left:n,right:e,typeName:b.ZodIntersection,...I(t)});class Fe extends C{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==m.array)return p(s,{code:h.invalid_type,expected:m.array,received:s.parsedType}),w;if(s.data.length<this._def.items.length)return p(s,{code:h.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),w;!this._def.rest&&s.data.length>this._def.items.length&&(p(s,{code:h.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...s.data].map((a,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new Se(s,a,s.path,c)):null}).filter(a=>!!a);return s.common.async?Promise.all(i).then(a=>q.mergeArray(t,a)):q.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Fe({...this._def,rest:e})}}Fe.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Fe({items:n,typeName:b.ZodTuple,rest:null,...I(e)})};class vs extends C{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==m.map)return p(s,{code:h.invalid_type,expected:m.map,received:s.parsedType}),w;const r=this._def.keyType,i=this._def.valueType,a=[...s.data.entries()].map(([c,l],d)=>({key:r._parse(new Se(s,c,s.path,[d,"key"])),value:i._parse(new Se(s,l,s.path,[d,"value"]))}));if(s.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const l of a){const d=await l.key,u=await l.value;if(d.status==="aborted"||u.status==="aborted")return w;(d.status==="dirty"||u.status==="dirty")&&t.dirty(),c.set(d.value,u.value)}return{status:t.value,value:c}})}else{const c=new Map;for(const l of a){const d=l.key,u=l.value;if(d.status==="aborted"||u.status==="aborted")return w;(d.status==="dirty"||u.status==="dirty")&&t.dirty(),c.set(d.value,u.value)}return{status:t.value,value:c}}}}vs.create=(n,e,t)=>new vs({valueType:e,keyType:n,typeName:b.ZodMap,...I(t)});class lt extends C{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==m.set)return p(s,{code:h.invalid_type,expected:m.set,received:s.parsedType}),w;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(p(s,{code:h.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(p(s,{code:h.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const i=this._def.valueType;function a(l){const d=new Set;for(const u of l){if(u.status==="aborted")return w;u.status==="dirty"&&t.dirty(),d.add(u.value)}return{status:t.value,value:d}}const c=[...s.data.values()].map((l,d)=>i._parse(new Se(s,l,s.path,d)));return s.common.async?Promise.all(c).then(l=>a(l)):a(c)}min(e,t){return new lt({...this._def,minSize:{value:e,message:g.toString(t)}})}max(e,t){return new lt({...this._def,maxSize:{value:e,message:g.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}lt.create=(n,e)=>new lt({valueType:n,minSize:null,maxSize:null,typeName:b.ZodSet,...I(e)});class ws extends C{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}ws.create=(n,e)=>new ws({getter:n,typeName:b.ZodLazy,...I(e)});class bs extends C{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return p(t,{received:t.data,code:h.invalid_literal,expected:this._def.value}),w}return{status:"valid",value:e.data}}get value(){return this._def.value}}bs.create=(n,e)=>new bs({value:n,typeName:b.ZodLiteral,...I(e)});function br(n,e){return new Je({values:n,typeName:b.ZodEnum,...I(e)})}class Je extends C{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),s=this._def.values;return p(t,{expected:k.joinValues(s),received:t.parsedType,code:h.invalid_type}),w}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),s=this._def.values;return p(t,{received:t.data,code:h.invalid_enum_value,options:s}),w}return J(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Je.create(e,{...this._def,...t})}exclude(e,t=this._def){return Je.create(this.options.filter(s=>!e.includes(s)),{...this._def,...t})}}Je.create=br;class xs extends C{_parse(e){const t=k.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==m.string&&s.parsedType!==m.number){const r=k.objectValues(t);return p(s,{expected:k.joinValues(r),received:s.parsedType,code:h.invalid_type}),w}if(this._cache||(this._cache=new Set(k.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const r=k.objectValues(t);return p(s,{received:s.data,code:h.invalid_enum_value,options:r}),w}return J(e.data)}get enum(){return this._def.values}}xs.create=(n,e)=>new xs({values:n,typeName:b.ZodNativeEnum,...I(e)});class Dt extends C{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==m.promise&&t.common.async===!1)return p(t,{code:h.invalid_type,expected:m.promise,received:t.parsedType}),w;const s=t.parsedType===m.promise?t.data:Promise.resolve(t.data);return J(s.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Dt.create=(n,e)=>new Dt({type:n,typeName:b.ZodPromise,...I(e)});class Ye extends C{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===b.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:s}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:a=>{p(s,a),a.fatal?t.abort():t.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const a=r.transform(s.data,i);if(s.common.async)return Promise.resolve(a).then(async c=>{if(t.value==="aborted")return w;const l=await this._def.schema._parseAsync({data:c,path:s.path,parent:s});return l.status==="aborted"?w:l.status==="dirty"||t.value==="dirty"?st(l.value):l});{if(t.value==="aborted")return w;const c=this._def.schema._parseSync({data:a,path:s.path,parent:s});return c.status==="aborted"?w:c.status==="dirty"||t.value==="dirty"?st(c.value):c}}if(r.type==="refinement"){const a=c=>{const l=r.refinement(c,i);if(s.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(s.common.async===!1){const c=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return c.status==="aborted"?w:(c.status==="dirty"&&t.dirty(),a(c.value),{status:t.value,value:c.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(c=>c.status==="aborted"?w:(c.status==="dirty"&&t.dirty(),a(c.value).then(()=>({status:t.value,value:c.value}))))}if(r.type==="transform")if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!Ke(a))return w;const c=r.transform(a.value,i);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:c}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>Ke(a)?Promise.resolve(r.transform(a.value,i)).then(c=>({status:t.value,value:c})):w);k.assertNever(r)}}Ye.create=(n,e,t)=>new Ye({schema:n,typeName:b.ZodEffects,effect:e,...I(t)});Ye.createWithPreprocess=(n,e,t)=>new Ye({schema:e,effect:{type:"preprocess",transform:n},typeName:b.ZodEffects,...I(t)});class Te extends C{_parse(e){return this._getType(e)===m.undefined?J(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Te.create=(n,e)=>new Te({innerType:n,typeName:b.ZodOptional,...I(e)});class Xe extends C{_parse(e){return this._getType(e)===m.null?J(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Xe.create=(n,e)=>new Xe({innerType:n,typeName:b.ZodNullable,...I(e)});class vn extends C{_parse(e){const{ctx:t}=this._processInputParams(e);let s=t.data;return t.parsedType===m.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}vn.create=(n,e)=>new vn({innerType:n,typeName:b.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...I(e)});class wn extends C{_parse(e){const{ctx:t}=this._processInputParams(e),s={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return Nt(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new ge(s.common.issues)},input:s.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new ge(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}wn.create=(n,e)=>new wn({innerType:n,typeName:b.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...I(e)});class Is extends C{_parse(e){if(this._getType(e)!==m.nan){const s=this._getOrReturnCtx(e);return p(s,{code:h.invalid_type,expected:m.nan,received:s.parsedType}),w}return{status:"valid",value:e.data}}}Is.create=n=>new Is({typeName:b.ZodNaN,...I(n)});class Ja extends C{_parse(e){const{ctx:t}=this._processInputParams(e),s=t.data;return this._def.type._parse({data:s,path:t.path,parent:t})}unwrap(){return this._def.type}}class On extends C{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?w:i.status==="dirty"?(t.dirty(),st(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?w:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,t){return new On({in:e,out:t,typeName:b.ZodPipeline})}}class bn extends C{_parse(e){const t=this._def.innerType._parse(e),s=r=>(Ke(r)&&(r.value=Object.freeze(r.value)),r);return Nt(t)?t.then(r=>s(r)):s(t)}unwrap(){return this._def.innerType}}bn.create=(n,e)=>new bn({innerType:n,typeName:b.ZodReadonly,...I(e)});var b;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(b||(b={}));const V=ke.create;Ne.create;ee.create;const Ya=j.create;Pt.create;Ot.create;Fe.create;Je.create;Dt.create;Te.create;Xe.create;const Xa={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_AMOY_RPC_URL:"https://rpc-amoy.polygon.technology",VITE_API_URL:"/v1",VITE_APP_NAME:"Bharosa",VITE_ARBITRUM_SEPOLIA_RPC_URL:"https://sepolia-rollup.arbitrum.io/rpc",VITE_CHAIN_ID:"31337",VITE_DEMO_MODE:"true",VITE_FIREBASE_API_KEY:"AIzaSyD77fQHtztMAx_FfLMvv2ujQC9tYFh7Npg",VITE_FIREBASE_APP_ID:"1:227881717805:web:f8e9515a73fcb583b368a4",VITE_FIREBASE_AUTH_DOMAIN:"bharosa-cd1e6.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-XJLDW87PTM",VITE_FIREBASE_MESSAGING_SENDER_ID:"227881717805",VITE_FIREBASE_PROJECT_ID:"bharosa-cd1e6",VITE_FIREBASE_STORAGE_BUCKET:"bharosa-cd1e6.firebasestorage.app",VITE_IPFS_GATEWAY:"https://ipfs.io/ipfs/",VITE_RPC_URL:"http://127.0.0.1:8545",VITE_WALLETCONNECT_PROJECT_ID:"3fcc6bba0f1de962dcbdae11bd9cee4d"},Qa=Ya({VITE_APP_NAME:V().default("Bharosa"),VITE_DEMO_MODE:V().optional().default("true").transform(n=>n==="true"),VITE_API_URL:V().default("/v1"),VITE_CHAIN_ID:V().optional().default("31337").transform(n=>Number(n)||31337),VITE_RPC_URL:V().default("http://127.0.0.1:8545"),VITE_AMOY_RPC_URL:V().default("https://rpc-amoy.polygon.technology"),VITE_ARBITRUM_SEPOLIA_RPC_URL:V().default("https://sepolia-rollup.arbitrum.io/rpc"),VITE_IPFS_GATEWAY:V().default("https://ipfs.io/ipfs/"),VITE_WALLETCONNECT_PROJECT_ID:V().optional(),VITE_CONTRACT_IDENTITY_REGISTRY:V().optional().default(""),VITE_CONTRACT_ACCESS_CONTROL:V().optional().default(""),VITE_CONTRACT_OWNERSHIP_REGISTRY:V().optional().default(""),VITE_CONTRACT_SOCIAL_RECOVERY:V().optional().default(""),VITE_CONTRACT_ZK_VERIFIER:V().optional().default("")}),F=Qa.safeParse(Xa);if(!F.success)throw console.error("[Bharosa] Critical configuration error: Invalid environment variables:",F.error.format()),new Error("Critical configuration error: Invalid environment variables");const Z={APP_NAME:F.data.VITE_APP_NAME,DEMO_MODE:F.data.VITE_DEMO_MODE,API_URL:F.data.VITE_API_URL,CHAIN_ID:F.data.VITE_CHAIN_ID,RPC_URL:F.data.VITE_RPC_URL,AMOY_RPC_URL:F.data.VITE_AMOY_RPC_URL,ARBITRUM_SEPOLIA_RPC_URL:F.data.VITE_ARBITRUM_SEPOLIA_RPC_URL,IPFS_GATEWAY:F.data.VITE_IPFS_GATEWAY,WALLETCONNECT_PROJECT_ID:F.data.VITE_WALLETCONNECT_PROJECT_ID||"",CONTRACT_IDENTITY_REGISTRY:F.data.VITE_CONTRACT_IDENTITY_REGISTRY,CONTRACT_ACCESS_CONTROL:F.data.VITE_CONTRACT_ACCESS_CONTROL,CONTRACT_OWNERSHIP_REGISTRY:F.data.VITE_CONTRACT_OWNERSHIP_REGISTRY,CONTRACT_SOCIAL_RECOVERY:F.data.VITE_CONTRACT_SOCIAL_RECOVERY,CONTRACT_ZK_VERIFIER:F.data.VITE_CONTRACT_ZK_VERIFIER,MODE:"production",DEV:!1,PROD:!0},eo=!!(Z.WALLETCONNECT_PROJECT_ID&&Z.WALLETCONNECT_PROJECT_ID.trim().length>0),to=eo?sa({appName:Z.APP_NAME,projectId:Z.WALLETCONNECT_PROJECT_ID,chains:[bt,wt,vt],transports:{[bt.id]:Oe(Z.RPC_URL),[wt.id]:Oe(Z.AMOY_RPC_URL),[vt.id]:Oe(Z.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1}):ra({chains:[bt,wt,vt],connectors:ia([{groupName:"Browser / Injected",wallets:[Ea]}],{appName:Z.APP_NAME,projectId:"00000000000000000000000000000000"}),transports:{[bt.id]:Oe(Z.RPC_URL),[wt.id]:Oe(Z.AMOY_RPC_URL),[vt.id]:Oe(Z.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1});function no({children:n}){const[e]=f.useState(()=>new Gi({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:5e3}}}));return o.jsx(aa,{config:to,children:o.jsx(Zi,{client:e,children:o.jsx(oa,{theme:ca({accentColor:"#84CC16",accentColorForeground:"#1A2E05",borderRadius:"medium",fontStack:"system",overlayBlur:"small"}),children:n})})})}const so=()=>{};var Es={};/**
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
 */const xr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},ro=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ir={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,l=r+2<n.length,d=l?n[r+2]:0,u=i>>2,y=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,A=d&63;l||(A=64,a||(_=64)),s.push(t[u],t[y],t[_],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ro(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const y=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||y==null)throw new io;const _=i<<2|c>>4;if(s.push(_),d!==64){const A=c<<4&240|d>>2;if(s.push(A),y!==64){const L=d<<6&192|y;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class io extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ao=function(n){const e=xr(n);return Ir.encodeByteArray(e,!0)},Er=function(n){return ao(n).replace(/\./g,"")},Cr=function(n){try{return Ir.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof is<"u")return is;throw new Error("Unable to locate global object.")}/**
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
 */const co=()=>oo().__FIREBASE_DEFAULTS__,lo=()=>{if(typeof la>"u"||typeof Es>"u")return;const n=Es.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cr(n[1]);return e&&JSON.parse(e)},Dn=()=>{try{return so()||co()||lo()||uo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ho=n=>Dn()?.emulatorHosts?.[n],kr=()=>Dn()?.config,Tr=n=>Dn()?.[`_${n}`];/**
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
 */class Ar{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function po(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jn(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function go(){const n=B();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ln(){try{return typeof indexedDB=="object"}catch{return!1}}function Mn(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}function Sr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const yo="FirebaseError";class ie extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=yo,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ze.prototype.create)}}class ze{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?_o(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new ie(r,c,s)}}function _o(n,e){try{let t=0,s="";for(;t<n.length;){const r=n.indexOf("{$",t);if(r===-1){s+=n.substring(t);break}const i=n.indexOf("}",r+2);if(i===-1){s+=n.substring(t);break}const a=n.substring(r+2,i),c=e[a];s+=n.substring(t,r)+(c!=null?String(c):`<${a}?>`),t=i+1}return s}catch{return n}}function vo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ue(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Cs(i)&&Cs(a)){if(!Ue(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Cs(n){return n!==null&&typeof n=="object"}/**
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
 */function pt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function rt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function it(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wo(n,e){const t=new bo(n,e);return t.subscribe.bind(t)}class bo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");xo(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=nn),r.error===void 0&&(r.error=nn),r.complete===void 0&&(r.complete=nn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xo(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nn(){}/**
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
 */const Io=1e3,Eo=2,Co=4*60*60*1e3,ko=.5;function ks(n,e=Io,t=Eo){const s=e*Math.pow(t,n),r=Math.round(ko*s*(Math.random()-.5)*2);return Math.min(Co,s+r)}/**
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
 */function $(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function To(n){return(await fetch(n,{credentials:"include"})).ok}class re{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const De="[DEFAULT]";/**
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
 */class Ao{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ar;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(No(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:So(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function So(n){return n===De?void 0:n}function No(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ro{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ao(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const Po={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Oo=S.INFO,Do={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},jo=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Do[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Un{constructor(e){this.name=e,this._logLevel=Oo,this._logHandler=jo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Po[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Lo=(n,e)=>e.some(t=>n instanceof t);let Ts,As;function Mo(){return Ts||(Ts=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fo(){return As||(As=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nr=new WeakMap,xn=new WeakMap,Rr=new WeakMap,sn=new WeakMap,Bn=new WeakMap;function Uo(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ae(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Nr.set(t,n)}).catch(()=>{}),Bn.set(e,n),e}function Bo(n){if(xn.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});xn.set(n,e)}let In={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ae(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vo(n){In=n(In)}function $o(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(rn(this),e,...t);return Rr.set(s,e.sort?e.sort():[e]),Ae(s)}:Fo().includes(n)?function(...e){return n.apply(rn(this),e),Ae(Nr.get(this))}:function(...e){return Ae(n.apply(rn(this),e))}}function zo(n){return typeof n=="function"?$o(n):(n instanceof IDBTransaction&&Bo(n),Lo(n,Mo())?new Proxy(n,In):n)}function Ae(n){if(n instanceof IDBRequest)return Uo(n);if(sn.has(n))return sn.get(n);const e=zo(n);return e!==n&&(sn.set(n,e),Bn.set(e,n)),e}const rn=n=>Bn.get(n);function Pr(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Ae(a);return s&&a.addEventListener("upgradeneeded",l=>{s(Ae(a.result),l.oldVersion,l.newVersion,Ae(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ho=["get","getKey","getAll","getAllKeys","count"],Wo=["put","add","delete","clear"],an=new Map;function Ss(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(an.get(e))return an.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Wo.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ho.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&l.done]))[0]};return an.set(e,i),i}Vo(n=>({...n,get:(e,t,s)=>Ss(e,t)||n.get(e,t,s),has:(e,t)=>!!Ss(e,t)||n.has(e,t)}));/**
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
 */class qo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Go(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Go(n){return n.getComponent()?.type==="VERSION"}const En="@firebase/app",Ns="0.16.2";/**
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
 */const ye=new Un("@firebase/app"),Zo="@firebase/app-compat",Ko="@firebase/analytics-compat",Jo="@firebase/analytics",Yo="@firebase/app-check-compat",Xo="@firebase/app-check",Qo="@firebase/auth",ec="@firebase/auth-compat",tc="@firebase/database",nc="@firebase/data-connect",sc="@firebase/database-compat",rc="@firebase/functions",ic="@firebase/functions-compat",ac="@firebase/installations",oc="@firebase/installations-compat",cc="@firebase/messaging",lc="@firebase/messaging-compat",dc="@firebase/performance",uc="@firebase/performance-compat",hc="@firebase/remote-config",fc="@firebase/remote-config-compat",pc="@firebase/storage",mc="@firebase/storage-compat",gc="@firebase/firestore",yc="@firebase/ai",_c="@firebase/firestore-compat",vc="firebase",wc="12.19.0";/**
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
 */const Cn="[DEFAULT]",bc={[En]:"fire-core",[Zo]:"fire-core-compat",[Jo]:"fire-analytics",[Ko]:"fire-analytics-compat",[Xo]:"fire-app-check",[Yo]:"fire-app-check-compat",[Qo]:"fire-auth",[ec]:"fire-auth-compat",[tc]:"fire-rtdb",[nc]:"fire-data-connect",[sc]:"fire-rtdb-compat",[rc]:"fire-fn",[ic]:"fire-fn-compat",[ac]:"fire-iid",[oc]:"fire-iid-compat",[cc]:"fire-fcm",[lc]:"fire-fcm-compat",[dc]:"fire-perf",[uc]:"fire-perf-compat",[hc]:"fire-rc",[fc]:"fire-rc-compat",[pc]:"fire-gcs",[mc]:"fire-gcs-compat",[gc]:"fire-fst",[_c]:"fire-fst-compat",[yc]:"fire-vertex","fire-js":"fire-js",[vc]:"fire-js-all"};/**
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
 */const dt=new Map,xc=new Map,kn=new Map;function Rs(n,e){try{n.container.addComponent(e)}catch(t){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _e(n){const e=n.name;if(kn.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;kn.set(e,n);for(const t of dt.values())Rs(t,n);for(const t of xc.values())Rs(t,n);return!0}function et(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function H(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new ze("app","Firebase",Ic);/**
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
 */class Ec{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const mt=wc;function Or(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Cn,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ue.create("bad-app-name",{appName:String(r)});if(t||(t=kr()),!t)throw ue.create("no-options");const i=dt.get(r);if(i)if(Ue(t,i.options)){if(Ue(s,i.config))return i;throw ue.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw ue.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const a=new Ro(r);for(const l of kn.values())a.addComponent(l);const c=new Ec(t,s,a);return dt.set(r,c),c}function Vn(n=Cn){const e=dt.get(n);if(!e&&n===Cn&&kr())return Or();if(!e)throw ue.create("no-app",{appName:n});return e}function Cc(){return Array.from(dt.values())}function te(n,e,t){let s=bc[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ye.warn(a.join(" "));return}_e(new re(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kc="firebase-heartbeat-database",Tc=1,ut="firebase-heartbeat-store";let on=null;function Dr(){return on||(on=Pr(kc,Tc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ut)}catch(t){console.warn(t)}}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),on}async function Ac(n){try{const t=(await Dr()).transaction(ut),s=await t.objectStore(ut).get(jr(n));return await t.done,s}catch(e){if(e instanceof ie)ye.warn(e.message);else{const t=ue.create("idb-get",{originalErrorMessage:e?.message});ye.warn(t.message)}}}async function Ps(n,e){try{const s=(await Dr()).transaction(ut,"readwrite");await s.objectStore(ut).put(e,jr(n)),await s.done}catch(t){if(t instanceof ie)ye.warn(t.message);else{const s=ue.create("idb-set",{originalErrorMessage:t?.message});ye.warn(s.message)}}}function jr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Sc=1024,Nc=30;class Rc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Os();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Nc){const r=Dc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ye.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Os(),{heartbeatsToSend:t,unsentEntries:s}=Pc(this._heartbeatsCache.heartbeats),r=Er(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return ye.warn(e),""}}}function Os(){return new Date().toISOString().substring(0,10)}function Pc(n,e=Sc){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Ds(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ds(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Oc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ln()?Mn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ac(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ds(n){return Er(JSON.stringify({version:2,heartbeats:n})).length}function Dc(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function jc(n){_e(new re("platform-logger",e=>new qo(e),"PRIVATE")),_e(new re("heartbeat",e=>new Rc(e),"PRIVATE")),te(En,Ns,n),te(En,Ns,"esm2020"),te("fire-js","")}/**
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
 */jc("");function Lr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lc=Lr,Mr=new ze("auth","Firebase",Lr());/**
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
 */const jt=new Un("@firebase/auth");function It(n,...e){jt.logLevel<=S.WARN&&jt.warn(`Auth (${mt}): ${n}`,...e)}function Et(n,...e){jt.logLevel<=S.ERROR&&jt.error(`Auth (${mt}): ${n}`,...e)}/**
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
 */function K(n,...e){throw $n(n,...e)}function X(n,...e){return $n(n,...e)}function Wt(n,e,t){const s={...Lc(),[e]:t};return new ze("auth","Firebase",s).create(e,{appName:n.name})}function ne(n){return Wt(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mc(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&K(n,"argument-error"),Wt(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $n(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Mr.create(n,...e)}function v(n,e,...t){if(!n)throw $n(e,...t)}function he(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Et(e),new Error(e)}function ve(n,e){n||he(e)}/**
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
 */function Tn(){return typeof self<"u"&&self.location?.href||""}function Fc(){return js()==="http:"||js()==="https:"}function js(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Uc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fc()||jn()||"connection"in navigator)?navigator.onLine:!0}function Bc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class gt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ve(t>e,"Short delay should be less than long delay!"),this.isMobile=fo()||mo()}get(){return Uc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zn(n,e){ve(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Fr{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $c=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zc=new gt(3e4,6e4);function ae(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function oe(n,e,t,s,r={}){return Ur(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=pt({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...i};return po()||(d.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(d.credentials="include"),Fr.fetch()(await Br(n,n.config.apiHost,t,c),d)})}async function Ur(n,e,t){n._canInitEmulator=!1;const s={...Vc,...e};try{const r=new Wc(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw xt(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xt(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw xt(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw xt(n,"user-disabled",a);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Wt(n,u,d);K(n,u)}}catch(r){if(r instanceof ie)throw r;K(n,"network-request-failed",{message:String(r)})}}async function tt(n,e,t,s,r={}){const i=await oe(n,e,t,s,r);return"mfaPendingCredential"in i&&K(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Br(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?zn(n.config,r):`${n.config.apiScheme}://${r}`;return $c.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Hc(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(X(this.auth,"network-request-failed")),zc.get())})}}function xt(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=X(n,e,s);return r.customData._tokenResponse=t,r}function Ls(n){return n!==void 0&&n.enterprise!==void 0}class qc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Hc(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gc(n,e){return oe(n,"GET","/v2/recaptchaConfig",ae(n,e))}/**
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
 */async function Zc(n,e){return oe(n,"POST","/v1/accounts:delete",e)}async function Lt(n,e){return oe(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function at(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kc(n,e=!1){const t=$(n),s=await t.getIdToken(e),r=Hn(s);v(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:at(cn(r.auth_time)),issuedAtTime:at(cn(r.iat)),expirationTime:at(cn(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function cn(n){return Number(n)*1e3}function Hn(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Et("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cr(t);return r?JSON.parse(r):(Et("Failed to decode base64 JWT payload"),null)}catch(r){return Et("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Ms(n){const e=Hn(n);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qe(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ie&&Jc(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Jc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Yc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class An{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mt(n){const e=n.auth,t=await n.getIdToken(),s=await Qe(n,Lt(e,{idToken:t}));v(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=r.providerUserInfo?.length?Vr(r.providerUserInfo):[],a=Qc(n.providerData,i),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!a?.length,d=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new An(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Xc(n){const e=$(n);await Mt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qc(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Vr(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function el(n,e){const t=await Ur(n,{},async()=>{const s=pt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Br(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(l.credentials="include"),Fr.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tl(n,e){return oe(n,"POST","/v2/accounts:revokeToken",ae(n,e))}/**
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
 */class qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ms(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){v(e.length!==0,"internal-error");const t=Ms(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await el(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new qe;return s&&(v(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(v(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(v(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qe,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function we(n,e){v(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Y{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Yc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new An(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Qe(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kc(this,e)}reload(){return Xc(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Y({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(H(this.auth.app))return Promise.reject(ne(this.auth));const e=await this.getIdToken();return await Qe(this,Zc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:y,emailVerified:_,isAnonymous:A,providerData:L,stsTokenManager:G}=t;v(y&&G,e,"internal-error");const P=qe.fromJSON(this.name,G);v(typeof y=="string",e,"internal-error"),we(s,e.name),we(r,e.name),v(typeof _=="boolean",e,"internal-error"),v(typeof A=="boolean",e,"internal-error"),we(i,e.name),we(a,e.name),we(c,e.name),we(l,e.name),we(d,e.name),we(u,e.name);const E=new Y({uid:y,auth:e,email:r,emailVerified:_,displayName:s,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:P,createdAt:d,lastLoginAt:u});return L&&Array.isArray(L)&&(E.providerData=L.map(le=>({...le}))),l&&(E._redirectEventId=l),E}static async _fromIdTokenResponse(e,t,s=!1){const r=new qe;r.updateFromServerResponse(t);const i=new Y({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Mt(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];v(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Vr(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new qe;c.updateFromIdToken(s);const l=new Y({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new An(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
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
 */const Fs=new Map;function fe(n){ve(n instanceof Function,"Expected a class definition");let e=Fs.get(n);return e?(ve(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fs.set(n,e),e)}/**
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
 */class $r{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$r.type="NONE";const Us=$r;/**
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
 */function Ct(n,e,t){return`firebase:${n}:${e}:${t}`}class Me{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ct("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lt(this.auth,{idToken:e}).catch(()=>{});return t?Y._fromGetAccountInfoResponse(this.auth,t,e):null}return Y._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new Me(fe(Us),e,s);const r=(await Promise.all(t.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let i=r[0]||fe(Us);const a=Ct(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const u=await d._get(a);if(u){let y;if(typeof u=="string"){const _=await Lt(e,{idToken:u}).catch(()=>{});if(!_)break;y=await Y._fromGetAccountInfoResponse(e,_,u)}else y=Y._fromJSON(e,u);d!==i&&(c=y),i=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Me(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Me(i,e,s))}}/**
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
 */function Bs(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zr(e))return"Blackberry";if(Kr(e))return"Webos";if(Hr(e))return"Safari";if((e.includes("chrome/")||Wr(e))&&!e.includes("edge/"))return"Chrome";if(Gr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function zr(n=B()){return/firefox\//i.test(n)}function Hr(n=B()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wr(n=B()){return/crios\//i.test(n)}function qr(n=B()){return/iemobile/i.test(n)}function Gr(n=B()){return/android/i.test(n)}function Zr(n=B()){return/blackberry/i.test(n)}function Kr(n=B()){return/webos/i.test(n)}function Wn(n=B()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nl(n=B()){return Wn(n)&&!!window.navigator?.standalone}function sl(){return go()&&document.documentMode===10}function Jr(n=B()){return Wn(n)||Gr(n)||Kr(n)||Zr(n)||/windows phone/i.test(n)||qr(n)}/**
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
 */function Yr(n,e=[]){let t;switch(n){case"Browser":t=Bs(B());break;case"Worker":t=`${Bs(B())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mt}/${s}`}/**
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
 */class rl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function il(n,e={}){return oe(n,"GET","/v2/passwordPolicy",ae(n,e))}/**
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
 */const al=6;class ol{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??al,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cl{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vs(this),this.idTokenSubscription=new Vs(this),this.beforeStateQueue=new rl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fe(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await Me.create(this,e)}catch(s){It(`Failed to initialize persistence: ${s}`),this.persistenceManager=await Me.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(s){It(`Failed to initialize current user: ${s}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lt(this,{idToken:e}),s=await Y._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(H(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(H(this.app))return Promise.reject(ne(this));const t=e?$(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return H(this.app)?Promise.reject(ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return H(this.app)?Promise.reject(ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await il(this),t=new ol(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ze("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await tl(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fe(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await Me.create(this,[fe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}).catch(l=>{if(!a)if(typeof t!="function"&&t.error)t.error(l);else if(s)s(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=t?.message||String(t),r=Wt(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(H(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&It(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ce(n){return $(n)}class Vs{constructor(e){this.auth=e,this.observer=null,this.addObserver=wo(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ll(n){qt=n}function Xr(n){return qt.loadJS(n)}function dl(){return qt.recaptchaEnterpriseScript}function ul(){return qt.gapiScript}function hl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class fl{constructor(){this.enterprise=new pl}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class pl{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
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
 */const ml="recaptcha-enterprise",Qr="NO_RECAPTCHA",$s="onFirebaseAuthREInstanceReady";class xe{constructor(e){this.type=ml,this.auth=ce(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Gc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new qc(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function r(i,a,c){const l=window.grecaptcha;Ls(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Qr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fl().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(async c=>{if(!t&&Ls(window.grecaptcha)&&xe.scriptInjectionDeferred)await xe.scriptInjectionDeferred.promise,r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dl();l.length!==0&&(l+=c+`&onload=${$s}`),xe.scriptInjectionDeferred=new Ar,window[$s]=()=>{xe.scriptInjectionDeferred?.resolve()},Xr(l).then(()=>xe.scriptInjectionDeferred?.promise).then(()=>{r(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}xe.scriptInjectionDeferred=null;async function zs(n,e,t,s=!1,r=!1){const i=new xe(n);let a;if(r)a=Qr;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ft(n,e,t,s,r){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zs(n,e,t,t==="getOobCode");return s(n,i)}else return s(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await zs(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(i)})}/**
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
 */function gl(n,e){const t=et(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ue(i,e??{}))return r;K(r,"already-initialized")}return t.initialize({options:e})}function yl(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(fe);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function _l(n,e,t){const s=ce(n);v(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=ei(e),{host:a,port:c}=vl(e),l=c===null?"":`:${c}`,d={url:`${i}//${a}${l}/`},u=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){v(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),v(Ue(d,s.config.emulator)&&Ue(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Fn(a)?To(`${i}//${a}${l}`):wl()}function ei(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vl(n){const e=ei(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Hs(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Hs(a)}}}function Hs(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wl(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class qn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,t){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}async function bl(n,e){return oe(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xl(n,e){return tt(n,"POST","/v1/accounts:signInWithPassword",ae(n,e))}async function ti(n,e){return oe(n,"POST","/v1/accounts:sendOobCode",ae(n,e))}async function Il(n,e){return ti(n,e)}async function El(n,e){return ti(n,e)}/**
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
 */async function Cl(n,e){return tt(n,"POST","/v1/accounts:signInWithEmailLink",ae(n,e))}async function kl(n,e){return tt(n,"POST","/v1/accounts:signInWithEmailLink",ae(n,e))}/**
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
 */class ht extends qn{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ht(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ht(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ft(e,t,"signInWithPassword",xl);case"emailLink":return Cl(e,{email:this._email,oobCode:this._password});default:K(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ft(e,s,"signUpPassword",bl);case"emailLink":return kl(e,{idToken:t,email:this._email,oobCode:this._password});default:K(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ge(n,e){return tt(n,"POST","/v1/accounts:signInWithIdp",ae(n,e))}/**
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
 */const Tl="http://localhost";class Be extends qn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):K("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new Be(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ge(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ge(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ge(e,t)}buildRequest(){const e={requestUri:Tl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pt(t)}return e}}/**
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
 */function Al(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sl(n){const e=rt(it(n)).link,t=e?rt(it(e)).deep_link_id:null,s=rt(it(n)).deep_link_id;return(s?rt(it(s)).link:null)||s||t||e||n}class Gn{constructor(e){const t=rt(it(e)),s=t.apiKey??null,r=t.oobCode??null,i=Al(t.mode??null);v(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Sl(e);try{return new Gn(t)}catch{return null}}}/**
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
 */class nt{constructor(){this.providerId=nt.PROVIDER_ID}static credential(e,t){return ht._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Gn.parseLink(t);return v(s,"argument-error"),ht._fromEmailAndCode(e,s.code,s.tenantId)}}nt.PROVIDER_ID="password";nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yt extends Zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ie extends yt{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ie.PROVIDER_ID="facebook.com";/**
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
 */class de extends yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Be._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return de.credential(t,s)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
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
 */class Ee extends yt{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com";Ee.PROVIDER_ID="github.com";/**
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
 */class Ce extends yt{constructor(){super("twitter.com")}static credential(e,t){return Be._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ce.credential(t,s)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com";Ce.PROVIDER_ID="twitter.com";/**
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
 */async function Nl(n,e){return tt(n,"POST","/v1/accounts:signUp",ae(n,e))}/**
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
 */class Re{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Y._fromIdTokenResponse(e,s,r),a=Ws(s);return new Re({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Ws(s);return new Re({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Ws(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ut extends ie{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Ut(e,t,s,r)}}function ni(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ut._fromErrorAndOperation(n,i,e,s):i})}async function Rl(n,e,t=!1){const s=await Qe(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Re._forOperation(n,"link",s)}/**
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
 */async function Pl(n,e,t=!1){const{auth:s}=n;if(H(s.app))return Promise.reject(ne(s));const r="reauthenticate";try{const i=await Qe(n,ni(s,r,e,n),t);v(i.idToken,s,"internal-error");const a=Hn(i.idToken);v(a,s,"internal-error");const{sub:c}=a;return v(n.uid===c,s,"user-mismatch"),Re._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&K(s,"user-mismatch"),i}}/**
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
 */async function si(n,e,t=!1){if(H(n.app))return Promise.reject(ne(n));const s="signIn",r=await ni(n,s,e),i=await Re._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function Ol(n,e){return si(ce(n),e)}/**
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
 */async function Dl(n,e){return tt(n,"POST","/v1/accounts:signInWithCustomToken",ae(n,e))}/**
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
 */async function jl(n,e){if(H(n.app))return Promise.reject(ne(n));const t=ce(n),s=await Dl(t,{token:e,returnSecureToken:!0}),r=await Re._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
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
 */async function ri(n){const e=ce(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ll(n,e,t){const s=ce(n);await Ft(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",El)}async function Ml(n,e,t){if(H(n.app))return Promise.reject(ne(n));const s=ce(n),a=await Ft(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Nl).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ri(n),l}),c=await Re._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Fl(n,e,t){return H(n.app)?Promise.reject(ne(n)):Ol($(n),nt.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ri(n),s})}async function qs(n,e){const t=$(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await Il(t.auth,r);i!==n.email&&await n.reload()}/**
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
 */async function Ul(n,e){return oe(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Bl(n,e){const{displayName:t,photoURL:s}=e;if(t===void 0&&s===void 0)return;const r=$(n),a={idToken:await r.getIdToken(),displayName:t,photoUrl:s,returnSecureToken:!0},c=await Qe(r,Ul(r.auth,a));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const l=r.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function Vl(n,e,t,s){return $(n).onIdTokenChanged(e,t,s)}function $l(n,e,t){return $(n).beforeAuthStateChanged(e,t)}function zl(n,e,t,s){return $(n).onAuthStateChanged(e,t,s)}function Hl(n){return $(n).signOut()}const Bt="__sak";/**
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
 */class ii{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Wl=1e3,ql=10;class ai extends ii{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);sl()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ql):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Wl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ai.type="LOCAL";const Gl=ai;/**
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
 */class oi extends ii{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oi.type="SESSION";const ci=oi;/**
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
 */function Zl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Gt(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await Zl(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gt.receivers=[];/**
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
 */function Kn(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Kl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=Kn("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(y){const _=y;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function se(){return window}function Jl(n){se().location.href=n}/**
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
 */function li(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Yl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xl(){return navigator?.serviceWorker?.controller||null}function Ql(){return li()?self:null}/**
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
 */const di="firebaseLocalStorageDb",ed=1,Vt="firebaseLocalStorage",ui="fbase_key";class _t{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zt(n,e){return n.transaction([Vt],e?"readwrite":"readonly").objectStore(Vt)}function td(){const n=indexedDB.deleteDatabase(di);return new _t(n).toPromise()}function hi(){const n=indexedDB.open(di,ed);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Vt,{keyPath:ui})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Vt)?e(s):(s.close(),await td(),e(await hi()))})})}async function Gs(n,e,t){const s=Zt(n,!0).put({[ui]:e,value:t});return new _t(s).toPromise()}async function nd(n,e){const t=Zt(n,!1).get(e),s=await new _t(t).toPromise();return s===void 0?null:s.value}function Zs(n,e){const t=Zt(n,!0).delete(e);return new _t(t).toPromise()}const sd=800,rd=3;class fi{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=hi(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rd)throw s;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return li()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gt._getInstance(Ql()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Yl(),!this.activeServiceWorker)return;this.sender=new Kl(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Gs(e,Bt,"1"),await Zs(e,Bt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gs(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>nd(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Zt(r,!1).getAll();return new _t(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||It(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}fi.type="LOCAL";const id=fi;new gt(3e4,6e4);/**
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
 */function pi(n,e){return e?fe(e):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jn extends qn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ge(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ge(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ad(n){return si(n.auth,new Jn(n),n.bypassAuthState)}function od(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),Pl(t,new Jn(n),n.bypassAuthState)}async function cd(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),Rl(t,new Jn(n),n.bypassAuthState)}/**
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
 */class mi{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ad;case"linkViaPopup":case"linkViaRedirect":return cd;case"reauthViaPopup":case"reauthViaRedirect":return od;default:K(this.auth,"internal-error")}}resolve(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ld=new gt(2e3,1e4);async function dd(n,e,t){if(H(n.app))return Promise.reject(X(n,"operation-not-supported-in-this-environment"));const s=ce(n);Mc(n,e,Zn);const r=pi(s,t);return new je(s,"signInViaPopup",e,r).executeNotNull()}class je extends mi{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,je.currentPopupAction&&je.currentPopupAction.cancel(),je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){ve(this.filter.length===1,"Popup operations only handle one event");const e=Kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(X(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(X(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,je.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(X(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ld.get())};e()}}je.currentPopupAction=null;/**
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
 */const ud="pendingRedirect",kt=new Map;class hd extends mi{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=kt.get(this.auth._key());if(!e){try{const s=await fd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}kt.set(this.auth._key(),e)}return this.bypassAuthState||kt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fd(n,e){const t=gd(e),s=md(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function pd(n,e){kt.set(n._key(),e)}function md(n){return fe(n._redirectPersistence)}function gd(n){return Ct(ud,n.config.apiKey,n.name)}async function yd(n,e,t=!1){if(H(n.app))return Promise.reject(ne(n));const s=ce(n),r=pi(s,e),a=await new hd(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const _d=10*60*1e3;class vd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wd(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!gi(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(X(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_d&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ks(e))}saveEventToCache(e){this.cachedEventUids.add(Ks(e)),this.lastProcessedEventTime=Date.now()}}function Ks(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gi({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function wd(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gi(n);default:return!1}}/**
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
 */async function bd(n,e={}){return oe(n,"GET","/v1/projects",e)}/**
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
 */const xd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Id=/^https?/;async function Ed(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bd(n);for(const t of e)try{if(Cd(t))return}catch{}K(n,"unauthorized-domain")}function Cd(n){const e=Tn(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Id.test(t))return!1;if(xd.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const kd=new gt(3e4,6e4);function Js(){const n=se().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Td(n){return new Promise((e,t)=>{function s(){Js(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Js(),t(X(n,"network-request-failed"))},timeout:kd.get()})}if(se().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(se().gapi?.load)s();else{const r=hl("iframefcb");return se()[r]=()=>{gapi.load?s():t(X(n,"network-request-failed"))},Xr(`${ul()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw Tt=null,e})}let Tt=null;function Ad(n){return Tt=Tt||Td(n),Tt}/**
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
 */const Sd=new gt(5e3,15e3),Nd="__/auth/iframe",Rd="emulator/auth/iframe",Pd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Od=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dd(n){const e=n.config;v(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zn(e,Rd):`https://${n.config.authDomain}/${Nd}`,s={apiKey:e.apiKey,appName:n.name,v:mt},r=Od.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${pt(s).slice(1)}`}async function jd(n){const e=await Ad(n),t=se().gapi;return v(t,n,"internal-error"),e.open({where:document.body,url:Dd(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pd,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=X(n,"network-request-failed"),c=se().setTimeout(()=>{i(a)},Sd.get());function l(){se().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const Ld={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Md=500,Fd=600,Ud="_blank",Bd="http://localhost";class Ys{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vd(n,e,t,s=Md,r=Fd){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...Ld,width:s.toString(),height:r.toString(),top:i,left:a},d=B().toLowerCase();t&&(c=Wr(d)?Ud:t),zr(d)&&(e=e||Bd,l.scrollbars="yes");const u=Object.entries(l).reduce((_,[A,L])=>`${_}${A}=${L},`,"");if(nl(d)&&c!=="_self")return $d(e||"",c),new Ys(null);const y=window.open(e||"",c,u);v(y,n,"popup-blocked");try{y.focus()}catch{}return new Ys(y)}function $d(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const zd="__/auth/handler",Hd="emulator/auth/handler",Wd=encodeURIComponent("fac");async function Xs(n,e,t,s,r,i){v(n.config.authDomain,n,"auth-domain-config-required"),v(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:mt,eventId:r};if(e instanceof Zn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",vo(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,y]of Object.entries({}))a[u]=y}if(e instanceof yt){const u=e.getScopes().filter(y=>y!=="");u.length>0&&(a.scopes=u.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await n._getAppCheckToken(),d=l?`#${Wd}=${encodeURIComponent(l)}`:"";return`${qd(n)}?${pt(c).slice(1)}${d}`}function qd({config:n}){return n.emulator?zn(n,Hd):`https://${n.authDomain}/${zd}`}/**
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
 */const ln="webStorageSupport";class Gd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ci,this._completeRedirectFn=yd,this._overrideRedirectResult=pd}async _openPopup(e,t,s,r){ve(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Xs(e,t,s,Tn(),r);return Vd(e,i,Kn())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Xs(e,t,s,Tn(),r);return Jl(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(ve(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await jd(e),s=new vd(e);return t.register("authEvent",r=>(v(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ln,{type:ln},r=>{const i=r?.[0]?.[ln];i!==void 0&&t(!!i),K(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ed(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jr()||Hr()||Wn()}}const Zd=Gd;var Qs="@firebase/auth",er="1.13.6";/**
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
 */class Kd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yd(n){_e(new re("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;v(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yr(n)},d=new cl(s,r,i,l);return yl(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_e(new re("auth-internal",e=>{const t=ce(e.getProvider("auth").getImmediate());return(s=>new Kd(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),te(Qs,er,Jd(n)),te(Qs,er,"esm2020")}/**
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
 */const Xd=5*60,Qd=Tr("authIdTokenMaxAge")||Xd;let tr=null;const eu=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Qd)return;const r=t?.token;tr!==r&&(tr=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function tu(n=Vn()){const e=et(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gl(n,{popupRedirectResolver:Zd,persistence:[id,Gl,ci]}),s=Tr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=eu(i.toString());$l(t,a,()=>a(t.currentUser)),Vl(t,c=>a(c))}}const r=ho("auth");return r&&_l(t,`http://${r}`),t}function nu(){return document.getElementsByTagName("head")?.[0]??document}ll({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=X("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",nu().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yd("Browser");var su="firebase",ru="12.19.0";/**
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
 */te(su,ru,"app");const yi="@firebase/installations",Yn="0.6.24";/**
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
 */const _i=1e4,vi=`w:${Yn}`,wi="FIS_v2",iu="https://firebaseinstallations.googleapis.com/v1",au=60*60*1e3,ou="installations",cu="Installations";/**
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
 */const lu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ve=new ze(ou,cu,lu);function bi(n){return n instanceof ie&&n.code.includes("request-failed")}/**
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
 */function xi({projectId:n}){return`${iu}/projects/${n}/installations`}function Ii(n){return{token:n.token,requestStatus:2,expiresIn:uu(n.expiresIn),creationTime:Date.now()}}async function Ei(n,e){const s=(await e.json()).error;return Ve.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ci({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function du(n,{refreshToken:e}){const t=Ci(n);return t.append("Authorization",hu(e)),t}async function ki(n){const e=await n();return e.status>=500&&e.status<600?n():e}function uu(n){return Number(n.replace("s","000"))}function hu(n){return`${wi} ${n}`}/**
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
 */async function fu({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=xi(n),r=Ci(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:wi,appId:n.appId,sdkVersion:vi},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await ki(()=>fetch(s,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ii(d.authToken)}}else throw await Ei("Create Installation",l)}/**
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
 */function Ti(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function pu(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const mu=/^[cdef][\w-]{21}$/,Sn="";function gu(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=yu(n);return mu.test(t)?t:Sn}catch{return Sn}}function yu(n){return pu(n).substr(0,22)}/**
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
 */function Kt(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ai=new Map;function Si(n,e){const t=Kt(n);Ni(t,e),_u(t,e)}function Ni(n,e){const t=Ai.get(n);if(t)for(const s of t)s(e)}function _u(n,e){const t=vu();t&&t.postMessage({key:n,fid:e}),wu()}let Le=null;function vu(){return!Le&&"BroadcastChannel"in self&&(Le=new BroadcastChannel("[Firebase] FID Change"),Le.onmessage=n=>{Ni(n.data.key,n.data.fid)}),Le}function wu(){Ai.size===0&&Le&&(Le.close(),Le=null)}/**
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
 */const bu="firebase-installations-database",xu=1,$e="firebase-installations-store";let dn=null;function Xn(){return dn||(dn=Pr(bu,xu,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($e)}}})),dn}async function $t(n,e){const t=Kt(n),r=(await Xn()).transaction($e,"readwrite"),i=r.objectStore($e),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&Si(n,e.fid),e}async function Ri(n){const e=Kt(n),s=(await Xn()).transaction($e,"readwrite");await s.objectStore($e).delete(e),await s.done}async function Jt(n,e){const t=Kt(n),r=(await Xn()).transaction($e,"readwrite"),i=r.objectStore($e),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&Si(n,c.fid),c}/**
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
 */async function Qn(n){let e;const t=await Jt(n.appConfig,s=>{const r=Iu(s),i=Eu(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===Sn?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Iu(n){const e=n||{fid:gu(),registrationStatus:0};return Pi(e)}function Eu(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ve.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Cu(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ku(n)}:{installationEntry:e}}async function Cu(n,e){try{const t=await fu(n,e);return $t(n.appConfig,t)}catch(t){throw bi(t)&&t.customData.serverCode===409?await Ri(n.appConfig):await $t(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ku(n){let e=await nr(n.appConfig);for(;e.registrationStatus===1;)await Ti(100),e=await nr(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Qn(n);return s||t}return e}function nr(n){return Jt(n,e=>{if(!e)throw Ve.create("installation-not-found");return Pi(e)})}function Pi(n){return Tu(n)?{fid:n.fid,registrationStatus:0}:n}function Tu(n){return n.registrationStatus===1&&n.registrationTime+_i<Date.now()}/**
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
 */async function Au({appConfig:n,heartbeatServiceProvider:e},t){const s=Su(n,t),r=du(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:vi,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await ki(()=>fetch(s,c));if(l.ok){const d=await l.json();return Ii(d)}else throw await Ei("Generate Auth Token",l)}function Su(n,{fid:e}){return`${xi(n)}/${e}/authTokens:generate`}/**
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
 */async function es(n,e=!1){let t;const s=await Jt(n.appConfig,i=>{if(!Oi(i))throw Ve.create("not-registered");const a=i.authToken;if(!e&&Pu(a))return i;if(a.requestStatus===1)return t=Nu(n,e),i;{if(!navigator.onLine)throw Ve.create("app-offline");const c=Du(i);return t=Ru(n,c),c}});return t?await t:s.authToken}async function Nu(n,e){let t=await sr(n.appConfig);for(;t.authToken.requestStatus===1;)await Ti(100),t=await sr(n.appConfig);const s=t.authToken;return s.requestStatus===0?es(n,e):s}function sr(n){return Jt(n,e=>{if(!Oi(e))throw Ve.create("not-registered");const t=e.authToken;return ju(t)?{...e,authToken:{requestStatus:0}}:e})}async function Ru(n,e){try{const t=await Au(n,e),s={...e,authToken:t};return await $t(n.appConfig,s),t}catch(t){if(bi(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ri(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await $t(n.appConfig,s)}throw t}}function Oi(n){return n!==void 0&&n.registrationStatus===2}function Pu(n){return n.requestStatus===2&&!Ou(n)}function Ou(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+au}function Du(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function ju(n){return n.requestStatus===1&&n.requestTime+_i<Date.now()}/**
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
 */async function Lu(n){const e=n,{installationEntry:t,registrationPromise:s}=await Qn(e);return s?s.catch(console.error):es(e).catch(console.error),t.fid}/**
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
 */async function Mu(n,e=!1){const t=n;return await Fu(t),(await es(t,e)).token}async function Fu(n){const{registrationPromise:e}=await Qn(n);e&&await e}/**
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
 */function Uu(n){if(!n||!n.options)throw un("App Configuration");if(!n.name)throw un("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw un(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function un(n){return Ve.create("missing-app-config-values",{valueName:n})}/**
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
 */const Di="installations",Bu="installations-internal",Vu=n=>{const e=n.getProvider("app").getImmediate(),t=Uu(e),s=et(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},$u=n=>{const e=n.getProvider("app").getImmediate(),t=et(e,Di).getImmediate();return{getId:()=>Lu(t),getToken:r=>Mu(t,r)}};function zu(){_e(new re(Di,Vu,"PUBLIC")),_e(new re(Bu,$u,"PRIVATE"))}/**
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
 */zu();te(yi,Yn);te(yi,Yn,"esm2020");/**
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
 */const zt="analytics",Hu="firebase_id",Wu="origin",qu=60*1e3,Gu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ts="https://www.googletagmanager.com/gtag/js";/**
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
 */const U=new Un("@firebase/analytics");/**
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
 */const Zu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},W=new ze("analytics","Analytics",Zu);/**
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
 */function Ku(n){if(!n.startsWith(ts)){const e=W.create("invalid-gtag-resource",{gtagURL:n});return U.warn(e.message),""}return n}function ji(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ju(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Yu(n,e){const t=Ju("firebase-js-sdk-policy",{createScriptURL:Ku}),s=document.createElement("script"),r=`${ts}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Xu(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Qu(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const l=(await ji(t)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){U.error(c)}n("config",r,i)}async function eh(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await ji(t);for(const l of a){const d=c.find(y=>y.measurementId===l),u=d&&e[d.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){U.error(i)}}function th(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[c,l]=a;await eh(n,e,t,c,l)}else if(i==="config"){const[c,l]=a;await Qu(n,e,t,s,c,l)}else if(i==="consent"){const[c,l]=a;n("consent",c,l)}else if(i==="get"){const[c,l,d]=a;n("get",c,l,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){U.error(c)}}return r}function nh(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=th(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function sh(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ts)&&t.src.includes(n))return t;return null}/**
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
 */const rh=30,ih=1e3;class ah{constructor(e={},t=ih){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Li=new ah;function oh(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ch(n){const{appId:e,apiKey:t}=n,s={method:"GET",headers:oh(t)},r=Gu.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();c.error?.message&&(a=c.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function lh(n,e=Li,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw W.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw W.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new hh;return setTimeout(async()=>{c.abort()},qu),Mi({appId:s,apiKey:r,measurementId:i},a,c,e)}async function Mi(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=Li){const{appId:i,measurementId:a}=n;try{await dh(s,e)}catch(c){if(a)return U.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:a};throw c}try{const c=await ch(n);return r.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!uh(l)){if(r.deleteThrottleMetadata(i),a)return U.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:a};throw c}const d=Number(l?.customData?.httpStatus)===503?ks(t,r.intervalMillis,rh):ks(t,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return r.setThrottleMetadata(i,u),U.debug(`Calling attemptFetch again in ${d} millis`),Mi(n,u,s,r)}}function dh(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(W.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uh(n){if(!(n instanceof ie)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class hh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fh(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function ph(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
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
 */async function mh(){if(Ln())try{await Mn()}catch(n){return U.warn(W.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return U.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gh(n,e,t,s,r,i,a){const c=lh(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&U.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>U.error(_)),e.push(c);const l=mh().then(_=>{if(_)return s.getId()}),[d,u]=await Promise.all([c,l]);sh(i)||Yu(i,d.measurementId),r("js",new Date);const y=a?.config??{};return y[Wu]="firebase",y.update=!0,u!=null&&(y[Hu]=u),r("config",d.measurementId,y),d.measurementId}/**
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
 */class yh{constructor(e){this.app=e}_delete(){return delete Ze[this.app.options.appId],Promise.resolve()}}let Ze={},rr=[];const ir={};let hn="dataLayer",_h="gtag",ar,ns,or=!1;function vh(){const n=[];if(jn()&&n.push("This is a browser extension environment."),Sr()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=W.create("invalid-analytics-context",{errorInfo:e});U.warn(t.message)}}function wh(n,e,t){vh();const s=n.options.appId;if(!s)throw W.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)U.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Ze[s]!=null)throw W.create("already-exists",{id:s});if(!or){Xu(hn);const{wrappedGtag:i,gtagCore:a}=nh(Ze,rr,ir,hn,_h);ns=i,ar=a,or=!0}return Ze[s]=gh(n,rr,ir,e,ar,hn,t),new yh(n)}/**
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
 */function bh(n=Vn()){n=$(n);const e=et(n,zt);return e.isInitialized()?e.getImmediate():xh(n)}function xh(n,e={}){const t=et(n,zt);if(t.isInitialized()){const r=t.getImmediate();if(Ue(e,t.getOptions()))return r;throw W.create("already-initialized")}return t.initialize({options:e})}async function Ih(){if(jn()||!Sr()||!Ln())return!1;try{return await Mn()}catch{return!1}}function Eh(n,e,t){n=$(n),ph(ns,Ze[n.app.options.appId],e,t).catch(s=>U.error(s))}function Ch(n,e,t,s){n=$(n),fh(ns,Ze[n.app.options.appId],e,t,s).catch(r=>U.error(r))}const cr="@firebase/analytics",lr="0.10.25";/**
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
 */function kh(){_e(new re(zt,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return wh(s,r,t)},"PUBLIC")),_e(new re("analytics-internal",n,"PRIVATE")),te(cr,lr),te(cr,lr,"esm2020");function n(e){try{const t=e.getProvider(zt).getImmediate();return{logEvent:(s,r,i)=>Ch(t,s,r,i),setUserProperties:(s,r)=>Eh(t,s,r)}}catch(t){throw W.create("interop-component-reg-failed",{reason:t})}}}kh();const Th={apiKey:"AIzaSyD77fQHtztMAx_FfLMvv2ujQC9tYFh7Npg",authDomain:"bharosa-cd1e6.firebaseapp.com",projectId:"bharosa-cd1e6",storageBucket:"bharosa-cd1e6.firebasestorage.app",messagingSenderId:"227881717805",appId:"1:227881717805:web:f8e9515a73fcb583b368a4",measurementId:"G-XJLDW87PTM"},Fi=Cc().length?Vn():Or(Th),Pe=tu(Fi),Ah=new de;typeof window<"u"&&Ih().then(n=>{n&&bh(Fi)}).catch(()=>{});class Sh{baseUrl;accessToken;getToken;constructor(e){this.baseUrl=e.baseUrl.replace(/\/$/,""),this.accessToken=e.accessToken,this.getToken=e.getToken}setAccessToken(e){this.accessToken=e}setTokenProvider(e){this.getToken=e}async request(e,t={},s=!1){const r=`${this.baseUrl}${e}`,i={"Content-Type":"application/json",...t.headers};let a=this.accessToken;if(!a&&this.getToken)try{const l=await this.getToken();l&&(a=l)}catch{}a&&(i.Authorization=`Bearer ${a}`);const c=await fetch(r,{...t,headers:i});if(c.status===401&&!s&&this.getToken)try{const l=await this.getToken();if(l){i.Authorization=`Bearer ${l}`;const d=await fetch(r,{...t,headers:i});if(d.ok)return d.json()}}catch{}if(!c.ok){const l=await c.json().catch(()=>({})),d=new Error(l.message||`API request failed with status ${c.status}`);throw d.code=l.code,d.status=c.status,d}return c.json()}async getNonce(){return this.request("/v1/auth/nonce")}async verifySIWE(e,t){const s=await this.request("/v1/auth/verify",{method:"POST",body:JSON.stringify({message:e,signature:t})});return s.accessToken&&(this.accessToken=s.accessToken),s}async linkWallet(e,t,s="HOLDER"){return this.request("/v1/auth/link-wallet",{method:"POST",body:JSON.stringify({message:e,signature:t,persona:s})})}async unlinkWallet(){return this.request("/v1/auth/unlink-wallet",{method:"POST"})}async refresh(e){const t=await this.request("/v1/auth/refresh",{method:"POST",body:JSON.stringify({refreshToken:e})});return t.accessToken&&(this.accessToken=t.accessToken),t}async logout(){const e=await this.request("/v1/auth/logout",{method:"POST"});return this.accessToken=void 0,e}async getMe(){return this.request("/v1/auth/me")}}const dr=new Sh({baseUrl:"/v1"}),Nn=[{id:"priya",uid:"demo-priya-sharma",email:"priya.sharma@bharosa.demo",name:"Priya Sharma",role:"Student (Holder)",badge:"Student",subtitle:"Has a credential and an encrypted certificate",persona:"HOLDER",description:"DID registered, 1 credential from the university, 1 encrypted certificate asset, one pending access request from TechCorp",walletAddress:"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",privateKey:"0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",initials:"PS"},{id:"chennai",uid:"demo-chennai-univ",email:"dean.chennai@bharosa.demo",name:"Chennai University",role:"Issuer",badge:"Issuer",subtitle:"Approved issuer of credentials",persona:"ISSUER",description:"Approved as trusted issuer, 3 credentials issued, 1 revoked",walletAddress:"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",privateKey:"0x5de4111afa1a4b94908f83103eb2173f1a4a48e4b2f761bd5709b10f842196fa",initials:"CU"},{id:"techcorp",uid:"demo-techcorp-hr",email:"hr.techcorp@bharosa.demo",name:"TechCorp HR",role:"Verifier / Employer",badge:"Verifier",subtitle:"Verifies candidate credentials",persona:"VERIFIER",description:"DID registered, one active grant from Priya (expiring soon), one rejected request",walletAddress:"0x90F79bf6EB2c4f870365E785982E1f101E93b906",privateKey:"0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",initials:"TH"},{id:"arjun",uid:"demo-arjun-mehta",email:"arjun.mehta@bharosa.demo",name:"Arjun Mehta",role:"Student (Holder)",badge:"Student",subtitle:"Fresh account to start from scratch",persona:"HOLDER",description:'DID registered, empty wallet, for "start from scratch" demos',walletAddress:"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",privateKey:"0x47e179ec34004871170e4b1ec414db315a4b760e886cd3d675ab96ff4e069d49",initials:"AM"},{id:"admin",uid:"demo-bharosa-admin",email:"admin@bharosa.demo",name:"Bharosa Admin",role:"Admin",badge:"Admin",subtitle:"Manages issuers and security alerts",persona:"ADMIN",description:"ADMIN_ROLE on-chain, sees the security alerts and issuer management",walletAddress:"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",privateKey:"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",initials:"BA"}];function Nh(n){const e=da(n);return mr(t=>{let s=!1;const i={request:async({method:a,params:c=[]})=>{const l=t.chains[0],d=l?.rpcUrls?.default?.http?.[0]||"http://127.0.0.1:8545";switch(a){case"eth_requestAccounts":case"eth_accounts":return s=!0,[e.address];case"eth_chainId":return`0x${(l?.id||31337).toString(16)}`;case"personal_sign":{const[u,y]=c;let _=u;if(ha(u))try{_=fa(u)}catch{_=u}return await e.signMessage({message:_})}case"eth_signTypedData_v4":{const[u,y]=c,_=typeof y=="string"?JSON.parse(y):y;return await e.signTypedData(_)}case"eth_sendTransaction":{const[u]=c;return await as({account:e,chain:l,transport:Oe(d)}).sendTransaction(u)}default:{const y=await(await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:Date.now(),method:a,params:c})})).json();if(y.error)throw new Error(y.error.message||`RPC error for ${a}`);return y.result}}},on:()=>i,removeListener:()=>i};return{id:"demo-wallet",name:"Bharosa Demo Signer",type:"demoWallet",async connect({chainId:a}={}){s=!0;const c=a||t.chains[0]?.id||31337;return{accounts:[e.address],chainId:c}},async disconnect(){s=!1},async getAccounts(){return s?[e.address]:[e.address]},async getChainId(){return t.chains[0]?.id||31337},async isAuthorized(){return!0},async getProvider(){return i},async getClient({chainId:a}={}){const c=t.chains.find(l=>l.id===a)||t.chains[0];return as({account:e,chain:c,transport:ua(i)})},onAccountsChanged(){},onChainChanged(){},onDisconnect(){}}})}const Ui=f.createContext(void 0);function Rh({children:n}){const[e,t]=f.useState(null),[s,r]=f.useState(null),[i,a]=f.useState(null),[c,l]=f.useState(!0),{disconnect:d}=gr(),{connectAsync:u}=pa(),y=Ki(),_=f.useCallback(async()=>{if(!e)return null;if("isDemo"in e&&e.isDemo)return`demo-jwt-:${e.uid}:${e.email}:${e.displayName}`;try{return await e.getIdToken()}catch{return null}},[e]);f.useEffect(()=>{dr.setTokenProvider(_)},[_]);const A=f.useCallback(async()=>{try{if(!await _())return r(null),null;const D=await dr.getMe(),R={uid:D.uid,email:D.email,displayName:D.displayName,persona:D.persona||"HOLDER",walletAddress:D.walletAddress||null,onChainRoles:D.onChainRoles||["HOLDER"],didRegistered:!!D.didRegistered,isDemo:!!D.isDemo};return r(R),R}catch(x){return console.warn("[AuthProvider] Failed to refresh account profile:",x),null}},[_]),L=f.useCallback(async x=>{a(x),sessionStorage.setItem("bharosa_active_demo",x.id);try{d(),await u({connector:Nh(x.privateKey)})}catch(R){console.warn("[AuthProvider] Demo connector connection notice:",R)}const D={uid:x.uid,email:x.email,displayName:x.name,persona:x.persona,role:x.role,walletAddress:x.walletAddress,isDemo:!0};t(D),r({uid:x.uid,email:x.email,displayName:x.name,persona:x.persona,walletAddress:x.walletAddress,onChainRoles:x.persona==="ADMIN"?["ADMIN"]:x.persona==="ISSUER"?["ISSUER"]:["HOLDER"],didRegistered:!0,isDemo:!0})},[u,d]);f.useEffect(()=>{const x=sessionStorage.getItem("bharosa_active_demo");if(x){const R=Nn.find(Q=>Q.id===x);if(R){L(R).finally(()=>l(!1));return}}const D=zl(Pe,async R=>{if(!sessionStorage.getItem("bharosa_active_demo")){if(t(R),R)try{await A()||r({uid:R.uid,email:R.email||"",displayName:R.displayName,persona:"HOLDER",walletAddress:null,onChainRoles:["HOLDER"],didRegistered:!1})}catch{}else r(null);l(!1)}});return()=>D()},[L,A]);const G=async(x,D)=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);const R=await Fl(Pe,x,D);t(R.user),await A()},P=async(x,D,R)=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);const Q=await Ml(Pe,x,D);R&&await Bl(Q.user,{displayName:R}),await qs(Q.user),t(Q.user),await A()},E=async()=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);const x=await dd(Pe,Ah);t(x.user),await A()},le=async x=>{const D=Nn.find(R=>R.id.toLowerCase()===x.toLowerCase()||R.uid.toLowerCase()===x.toLowerCase());if(!D)throw new Error(`Demo user not found: ${x}`);try{const R=await fetch("/v1/demo/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({demoUserId:D.id})});if(R.ok){const Q=await R.json();if(Q.customToken&&!Q.customToken.startsWith("demo-custom-jwt"))try{await jl(Pe,Q.customToken)}catch{}}}catch{}y.clear(),await L(D)},z=async x=>{await Ll(Pe,x)},Qt=async()=>{e&&"sendEmailVerification"in e&&await qs(e)},en=async()=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);try{await Hl(Pe)}catch{}try{d()}catch{}y.clear(),t(null),r(null)},M=!!i||!!e&&"isDemo"in e&&e.isDemo===!0;return o.jsx(Ui.Provider,{value:{user:e,account:s,loading:c,isDemoUser:M,activeDemoAccount:i,signIn:G,signUp:P,signInWithGoogle:E,signInWithDemo:le,resetPassword:z,resendVerificationEmail:Qt,signOut:en,getIdToken:_,refreshAccount:A},children:n})}function He(){const n=f.useContext(Ui);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n}/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bi=(...n)=>n.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=f.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:a,...c},l)=>f.createElement("svg",{ref:l,...Oh,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:Bi("lucide",r),...c},[...a.map(([d,u])=>f.createElement(d,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(n,e)=>{const t=f.forwardRef(({className:s,...r},i)=>f.createElement(Dh,{ref:i,iconNode:e,className:Bi(`lucide-${Ph(n)}`,s),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=T("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=T("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=T("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=T("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=T("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=T("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=T("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=T("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=T("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=T("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=T("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=T("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=T("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=T("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=T("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=T("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=T("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=T("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=T("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=T("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=T("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=T("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=T("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=T("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=T("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=T("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=T("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=T("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=T("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Wi(){const[n,e]=f.useState({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:14}),[t,s]=f.useState("Just now"),r=async()=>{const i=performance.now();try{const a=Z.API_URL,c=await fetch(`${a}/relayer/treasury`,{cache:"no-store"}),l=Math.round(performance.now()-i);c.ok?e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:l}):e(d=>({...d,api:"ONLINE",latencyMs:l}))}catch{e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:24})}s(new Date().toLocaleTimeString())};return f.useEffect(()=>{r();const i=setInterval(r,3e4);return()=>clearInterval(i)},[]),o.jsx("footer",{className:"w-full bg-[#F7FBEF] border-t border-lime-200 py-2 px-3 sm:px-6 text-xs text-[#1A2E05]",children:o.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto no-scrollbar",children:[o.jsxs("div",{className:"flex items-center gap-1 font-bold text-[#4D6B2A] whitespace-nowrap shrink-0",children:[o.jsx(jh,{className:"w-3.5 h-3.5 text-lime-600 animate-pulse"}),o.jsx("span",{className:"hidden sm:inline",children:"HEALTH:"})]}),o.jsxs("div",{className:"flex items-center gap-2 whitespace-nowrap",children:[o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),"Polygon Amoy: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.chain})]}),o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"API Gateway: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.api})]}),o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"IPFS: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.ipfs})]}),o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"Neon DB: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.db})]})]})]}),o.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-3 text-[#4D6B2A] text-[11px] whitespace-nowrap shrink-0 border-t md:border-t-0 pt-1 md:pt-0 border-lime-200/60",children:[o.jsxs("span",{children:["Latency: ",o.jsxs("b",{className:"text-[#1A2E05]",children:[n.latencyMs,"ms"]})]}),o.jsx("span",{className:"hidden lg:inline text-lime-300",children:"|"}),o.jsxs("span",{className:"hidden lg:inline",children:["Verified: ",t]}),o.jsx("span",{className:"font-semibold text-lime-800",children:"Bharosa Protocol"})]})]})})}function Ht(){return null}function ef(){const{pathname:n}=ft();return n==="/"?o.jsxs(o.Fragment,{children:[o.jsx(Ht,{}),o.jsx(me,{})]}):o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(Ht,{}),o.jsxs("header",{className:"h-16 bg-[#FFFFFF] border-b border-[#ECFCCB] px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs(pe,{to:"/",className:"flex items-center space-x-2.5 group",children:[o.jsx("img",{src:"/logos/bharosa-mark.png",alt:"Bharosa Logo",className:"w-8 h-8 object-contain group-hover:scale-105 transition-transform"}),o.jsx("span",{className:"font-anton text-xl tracking-wide text-[#1A2E05] uppercase",children:"Bharosa"})]}),o.jsx("span",{className:"text-stone-300",children:"/"}),o.jsx("span",{className:"text-xs font-semibold text-[#4D6B2A]",children:"Public Verification"})]}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs(pe,{to:"/",className:"hidden sm:inline-flex items-center text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] px-3 py-1.5 rounded-lg hover:bg-[#F7FBEF] transition-colors",children:[o.jsx(Vi,{className:"w-3.5 h-3.5 mr-1"})," Home"]}),o.jsxs(pe,{to:"/app",className:"inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs uppercase tracking-wider transition-all shadow-xs",children:[o.jsx("span",{children:"Launch App"}),o.jsx(Lh,{className:"w-3.5 h-3.5 ml-1.5"})]})]})]}),o.jsx("main",{className:"flex-1 flex flex-col",children:o.jsx(me,{})}),o.jsx(Wi,{})]})}const tf=[{to:"/dashboard",label:"Dashboard",icon:Xt},{to:"/identity",label:"Identity & DID",icon:Qh},{to:"/credentials",label:"Credentials",icon:Mh},{to:"/assets",label:"Asset Vault",icon:Wh},{to:"/zk",label:"ZK Proofs",icon:ss},{to:"/access",label:"Access Control",icon:Hh},{to:"/recovery",label:"Social Recovery",icon:Xh},{to:"/audit",label:"Audit Trail",icon:$h},{to:"/security",label:"Security Center",icon:Yh}],nf=[{to:"/issuer",label:"Issuer Portal",icon:Kh,role:"ISSUER"},{to:"/verifier",label:"Verifier Portal",icon:Uh,role:"VERIFIER"},{to:"/admin",label:"Admin Console",icon:Jh,role:"ADMIN"},{to:"/public-verify",label:"Public Verifier",icon:Xt,role:null}];function sf({collapsed:n,setCollapsed:e,mobileOpen:t,setMobileOpen:s}){const r=ft(),{user:i,account:a,signOut:c,isDemoUser:l}=He(),d=yr(),{data:u}=ma({watch:!0}),y=a?.persona||"HOLDER",_=(a?.onChainRoles||[]).map(E=>E.toUpperCase());f.useEffect(()=>{s(!1)},[r.pathname,s]);const A=i&&"displayName"in i&&i.displayName?i.displayName:i?.email?.split("@")[0]||"User",L=A.split(" ").map(E=>E[0]).join("").toUpperCase().slice(0,2)||"BU",G=E=>!!(!E||l||y===E||_.includes(E)),P=o.jsxs("div",{className:"flex flex-col h-full justify-between bg-[#FFFFFF] border-r border-[#ECFCCB] select-none",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between px-4 h-16 border-b border-[#F7FBEF]",children:[o.jsxs("div",{className:"flex items-center space-x-3 overflow-hidden",children:[o.jsx("img",{src:"/logos/bharosa-mark.png",alt:"Bharosa Logo",className:"w-8 h-8 object-contain shrink-0"}),!n&&o.jsxs("div",{className:"overflow-hidden",children:[o.jsx("div",{className:"flex items-center space-x-1.5",children:o.jsx("span",{className:"font-anton text-xl tracking-wider text-[#1A2E05] uppercase",children:"Bharosa"})}),o.jsx("div",{className:"flex items-center space-x-1",children:o.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider",children:y})})]})]}),o.jsx("button",{onClick:()=>e(!n),className:"hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] transition-colors",title:n?"Expand sidebar":"Collapse sidebar",children:n?o.jsx(Vh,{className:"w-4 h-4"}):o.jsx(Bh,{className:"w-4 h-4"})})]}),o.jsxs("nav",{className:"p-2 space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)]",children:[tf.map(E=>{const le=E.icon;return o.jsx(rs,{to:E.to,className:({isActive:z})=>`flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${z?"bg-[#ECFCCB] text-[#1A2E05] shadow-xs":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:n?E.label:void 0,children:({isActive:z})=>o.jsxs(o.Fragment,{children:[z&&o.jsx("span",{className:"absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full"}),o.jsx(le,{className:`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${z?"text-[#65A30D]":"text-[#8BA868]"} ${n?"mx-auto":"mr-3"}`}),!n&&o.jsx("span",{className:"truncate",children:E.label})]})},E.to)}),o.jsx("div",{className:"pt-3 pb-1",children:n?o.jsx("hr",{className:"border-[#ECFCCB] my-2 mx-2"}):o.jsx("p",{className:"px-3 text-[10px] font-bold text-[#8BA868] uppercase tracking-wider",children:"Portals & Ecosystem"})}),nf.filter(E=>G(E.role)).map(E=>{const le=E.icon;return o.jsx(rs,{to:E.to,className:({isActive:z})=>`flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${z?"bg-[#ECFCCB] text-[#1A2E05] shadow-xs":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:n?E.label:void 0,children:({isActive:z})=>o.jsxs(o.Fragment,{children:[z&&o.jsx("span",{className:"absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full"}),o.jsx(le,{className:`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${z?"text-[#65A30D]":"text-[#8BA868]"} ${n?"mx-auto":"mr-3"}`}),!n&&o.jsx("span",{className:"truncate",children:E.label})]})},E.to)})]})]}),o.jsxs("div",{className:"p-3 border-t border-[#F7FBEF] space-y-2",children:[n?o.jsx("div",{className:"flex justify-center",title:"Network Online",children:o.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[o.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),o.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-[#65A30D]"})]})}):o.jsxs("div",{className:"px-2.5 py-1.5 rounded-xl bg-[#F7FBEF] border border-[#ECFCCB] flex items-center justify-between text-[11px] text-[#4D6B2A]",children:[o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsxs("span",{className:"relative flex h-2 w-2",children:[o.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),o.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),o.jsx("span",{className:"font-semibold text-[#1A2E05]",children:d===31337?"Hardhat Node":"Polygon Amoy"})]}),u?o.jsxs("span",{className:"font-mono text-[10px] text-[#65A30D]",children:["#",u.toString()]}):null]}),o.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB]",children:[o.jsxs("div",{className:"flex items-center space-x-2.5 overflow-hidden",children:[o.jsx("div",{className:"w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center shrink-0",children:L}),!n&&o.jsxs("div",{className:"overflow-hidden",children:[o.jsx("p",{className:"text-xs font-bold text-[#1A2E05] truncate",children:A}),o.jsx("p",{className:"text-[10px] text-[#4D6B2A] truncate font-mono",children:a?.walletAddress?`${a.walletAddress.slice(0,6)}...${a.walletAddress.slice(-4)}`:i?.email})]})]}),!n&&o.jsx("button",{onClick:()=>c(),className:"p-1.5 text-[#4D6B2A] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Sign Out",children:o.jsx($i,{className:"w-4 h-4"})})]})]})]});return o.jsxs(o.Fragment,{children:[o.jsx("aside",{className:`hidden md:block sticky top-0 h-screen transition-all duration-300 z-30 shrink-0 ${n?"w-20":"w-64"}`,children:P}),t&&o.jsxs("div",{className:"fixed inset-0 z-50 md:hidden flex",children:[o.jsx("div",{className:"fixed inset-0 bg-[#1A2E05]/40 backdrop-blur-xs transition-opacity",onClick:()=>s(!1)}),o.jsx("div",{className:"relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200",children:P})]})]})}function rf(){const{address:n,isConnected:e}=_r(),{isDemoUser:t,activeDemoAccount:s,user:r}=He(),i=yr(),{switchChain:a,chains:c}=ga(),{openConnectModal:l}=ya(),[d,u]=f.useState(!1),[y,_]=f.useState(!1),A=P=>{P.stopPropagation(),n&&(navigator.clipboard.writeText(n),u(!0),setTimeout(()=>u(!1),2e3))};if(t){const P=s?.name||r?.displayName||"Demo User",E=n||s?.walletAddress||"";return o.jsx("div",{className:"flex items-center space-x-1.5",children:o.jsxs("div",{onClick:A,className:"cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#ECFCCB] border border-[#84CC16] hover:bg-[#D9F99D] text-[#1A2E05] text-xs transition-all shadow-xs",title:`Click to copy demo signer address (${E})`,children:[o.jsxs("span",{className:"relative flex h-2 w-2",children:[o.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),o.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),o.jsxs("span",{className:"font-bold flex items-center gap-1 text-[11px]",children:[o.jsx(ss,{className:"w-3 h-3 text-[#65A30D] fill-[#84CC16]"}),"Demo Wallet: ",P.split(" ")[0]]}),o.jsxs("span",{className:"hidden sm:inline font-mono text-[10px] text-[#4D6B2A]",children:["(",E?`${E.slice(0,4)}...${E.slice(-3)}`:"",")"]}),d?o.jsx(At,{className:"w-3 h-3 text-[#65A30D]"}):o.jsx(ur,{className:"w-3 h-3 text-[#4D6B2A] group-hover:text-[#1A2E05] transition-colors"})]})})}if(!e||!n)return o.jsxs("button",{onClick:l,className:"inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-xs transition-all shadow-sm",children:[o.jsx(Pn,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Connect Wallet"})]});const L=c.find(P=>P.id===i),G=L?L.name:`Chain ${i}`;return o.jsxs("div",{className:"relative flex items-center space-x-1.5",children:[o.jsxs("div",{className:"relative",children:[o.jsxs("button",{onClick:()=>_(P=>!P),className:"inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-[#ECFCCB] hover:bg-[#D9F99D] text-[#1A2E05] text-xs font-medium border border-[#D9F99D] transition-colors",title:"Switch Network",children:[o.jsx(Gh,{className:"w-3 h-3 text-[#65A30D]"}),o.jsx("span",{className:"hidden sm:inline max-w-[80px] truncate",children:G}),o.jsx(Rn,{className:"w-3 h-3 text-[#4D6B2A]"})]}),y&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>_(!1)}),o.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-[#FFFFFF] border border-[#ECFCCB] rounded-xl shadow-lg p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100",children:[o.jsx("div",{className:"px-2 py-1 text-[10px] font-bold text-[#65A30D] uppercase tracking-wider",children:"Select Network"}),c.map(P=>o.jsxs("button",{onClick:()=>{a&&a({chainId:P.id}),_(!1)},className:`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-lg transition-colors ${P.id===i?"bg-[#ECFCCB] font-bold text-[#1A2E05]":"text-[#4D6B2A] hover:bg-[#F7FBEF] hover:text-[#1A2E05]"}`,children:[o.jsx("span",{className:"truncate",children:P.name}),P.id===i&&o.jsx(At,{className:"w-3 h-3 text-[#65A30D]"})]},P.id))]})]})]}),o.jsxs("div",{onClick:A,className:"cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB] hover:border-[#84CC16] text-[#1A2E05] text-xs font-mono transition-all shadow-xs",title:"Click to copy address",children:[o.jsxs("span",{className:"relative flex h-2 w-2",children:[o.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),o.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),o.jsxs("span",{className:"font-semibold",children:[n.slice(0,6),"...",n.slice(-4)]}),d?o.jsx(At,{className:"w-3.5 h-3.5 text-[#65A30D]"}):o.jsx(ur,{className:"w-3.5 h-3.5 text-[#4D6B2A] group-hover:text-[#1A2E05] transition-colors"})]})]})}function af(){const n=Yi(),{user:e,account:t,signOut:s,isDemoUser:r,activeDemoAccount:i,signInWithDemo:a,refreshAccount:c}=He(),{disconnect:l}=gr(),[d,u]=f.useState(!1),[y,_]=f.useState(!1),[A,L]=f.useState(!1),G=f.useRef(null);f.useEffect(()=>{function M(x){G.current&&!G.current.contains(x.target)&&(u(!1),_(!1))}return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const P=i?.name||e&&"displayName"in e&&e.displayName||e?.email?.split("@")[0]||"Bharosa User",E=P.split(" ").map(M=>M[0]).join("").toUpperCase().slice(0,2)||"BU",le=async()=>{u(!1),await s(),n("/login",{replace:!0})},z=()=>{l(),u(!1)},Qt=async M=>{u(!1),_(!1),await a(M.id),n("/dashboard",{replace:!0})},en=async()=>{L(!0);try{await fetch("/v1/demo/reset",{method:"POST"}),await c()}catch(M){console.error("Demo reset failed:",M)}finally{L(!1)}};return o.jsxs("div",{className:"relative",ref:G,children:[o.jsxs("button",{onClick:()=>u(M=>!M),className:"flex items-center space-x-2 p-1 pl-1.5 rounded-full hover:bg-[#ECFCCB] transition-colors border border-transparent hover:border-[#D9F99D]","aria-label":"User profile menu",children:[o.jsx("div",{className:"w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs",children:E}),o.jsx(Rn,{className:"w-3.5 h-3.5 text-[#4D6B2A] mr-1 hidden sm:block"})]}),d&&o.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100",children:[o.jsxs("div",{className:"p-3 border-b border-[#F7FBEF]",children:[o.jsx("p",{className:"text-xs font-bold text-[#1A2E05] truncate",children:P}),o.jsx("p",{className:"text-[11px] text-[#4D6B2A] truncate mt-0.5",children:e?.email}),o.jsxs("div",{className:"flex items-center space-x-1.5 mt-2",children:[o.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider",children:t?.persona||"HOLDER"}),r&&o.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#84CC16] text-[#1A2E05]",children:"Demo Signer"})]})]}),o.jsxs("div",{className:"py-1 border-b border-[#F7FBEF]",children:[o.jsxs("button",{onClick:()=>_(!y),className:"w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(ss,{className:"w-3.5 h-3.5 text-[#65A30D] fill-[#84CC16]"}),o.jsx("span",{children:"Switch Demo User"})]}),o.jsx(Rn,{className:`w-3.5 h-3.5 transition-transform ${y?"rotate-180":""}`})]}),y&&o.jsx("div",{className:"mt-1 space-y-1 p-1 bg-[#F7FBEF] rounded-xl max-h-48 overflow-y-auto",children:Nn.map(M=>{const x=i?.id===M.id;return o.jsxs("button",{onClick:()=>Qt(M),className:`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${x?"bg-[#ECFCCB] font-bold text-[#1A2E05]":"hover:bg-[#FFFFFF] text-[#4D6B2A]"}`,children:[o.jsxs("div",{className:"overflow-hidden",children:[o.jsx("p",{className:"text-xs truncate",children:M.name}),o.jsx("p",{className:"text-[10px] opacity-75",children:M.role})]}),x&&o.jsx(At,{className:"w-3.5 h-3.5 text-[#65A30D] shrink-0 ml-1"})]},M.id)})}),r&&t?.persona==="ADMIN"&&o.jsxs("button",{onClick:en,disabled:A,className:"w-full mt-1 flex items-center px-3 py-1.5 text-[11px] font-semibold text-[#65A30D] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[o.jsx(Zh,{className:`w-3.5 h-3.5 mr-2 ${A?"animate-spin":""}`}),A?"Resetting Demo State…":"Reset Demo Data"]})]}),o.jsxs("div",{className:"py-1",children:[o.jsxs(pe,{to:"/identity",onClick:()=>u(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[o.jsx(zh,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Identity & DID"]}),!r&&o.jsxs(pe,{to:"/connect-wallet",onClick:()=>u(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[o.jsx(Pn,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Manage Linked Key"]}),o.jsxs(pe,{to:"/security",onClick:()=>u(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[o.jsx(zi,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Security Center"]})]}),o.jsxs("div",{className:"pt-1 border-t border-[#F7FBEF]",children:[!r&&o.jsxs("button",{onClick:z,className:"w-full flex items-center px-3 py-2 text-xs text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors text-left",children:[o.jsx(Pn,{className:"w-4 h-4 mr-2.5 text-stone-400"}),"Disconnect Wallet"]}),o.jsxs("button",{onClick:le,className:"w-full flex items-center px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left font-medium",children:[o.jsx($i,{className:"w-4 h-4 mr-2.5 text-red-500"}),"Sign Out"]})]})]})]})}const of=[{id:"1",title:"Gasless Meta-Transactions Active",desc:"Biconomy / EIP-2771 Relayer is online and sponsoring your identity calls.",time:"2m ago",type:"relayer"},{id:"2",title:"Cryptographic DID Online",desc:"Your W3C DID document is synced to IPFS and pinned.",time:"1h ago",type:"success"},{id:"3",title:"Decentralized Audit Active",desc:"All smart contract invocations are signed and verifiable on-chain.",time:"3h ago",type:"info"}];function cf(){const[n,e]=f.useState(!1),[t,s]=f.useState(of),r=f.useRef(null);f.useEffect(()=>{function c(l){r.current&&!r.current.contains(l.target)&&e(!1)}return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const i=t.length,a=()=>{s([])};return o.jsxs("div",{className:"relative",ref:r,children:[o.jsxs("button",{onClick:()=>e(c=>!c),className:"relative p-2 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors","aria-label":"Notifications",children:[o.jsx(Fh,{className:"w-4 h-4"}),i>0&&o.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#84CC16] ring-2 ring-[#FFFFFF]"})]}),n&&o.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-100",children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#F7FBEF]",children:[o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{className:"text-xs font-bold text-[#1A2E05]",children:"Activity & Alerts"}),i>0&&o.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFCCB] text-[#65A30D]",children:i})]}),t.length>0&&o.jsx("button",{onClick:a,className:"text-[11px] text-[#65A30D] hover:underline font-medium",children:"Clear"})]}),o.jsx("div",{className:"max-h-72 overflow-y-auto py-2 divide-y divide-[#F7FBEF]",children:t.length===0?o.jsx("div",{className:"text-center py-6 text-xs text-[#4D6B2A]",children:"No new notifications"}):t.map(c=>o.jsx("div",{className:"py-2.5 px-1 first:pt-1 last:pb-1",children:o.jsxs("div",{className:"flex items-start space-x-2.5",children:[c.type==="relayer"?o.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:o.jsx(Hi,{className:"w-3.5 h-3.5 fill-[#84CC16]"})}):o.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:o.jsx(Xt,{className:"w-3.5 h-3.5"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-xs font-semibold text-[#1A2E05] truncate",children:c.title}),o.jsx("p",{className:"text-[11px] text-[#4D6B2A] mt-0.5 leading-relaxed",children:c.desc}),o.jsx("span",{className:"text-[10px] text-stone-400 mt-1 block",children:c.time})]})]})},c.id))})]})]})}const lf={"/dashboard":{title:"Dashboard",subtitle:"Self-Sovereign Identity Overview"},"/identity":{title:"Identity & DID",subtitle:"W3C DID Document & Cryptographic Keys"},"/credentials":{title:"Verifiable Credentials",subtitle:"Cryptographically Signed Attestations"},"/assets":{title:"Encrypted Asset Vault",subtitle:"Zero-Knowledge File & Secret Storage"},"/zk":{title:"Zero-Knowledge Proofs",subtitle:"Selective Disclosure & Privacy Verification"},"/access":{title:"Access Control",subtitle:"Decentralized Time-Bound Delegation"},"/recovery":{title:"Social Recovery",subtitle:"Multi-Guardian Key Restitution"},"/audit":{title:"Audit Trail",subtitle:"Immutable On-Chain Event History"},"/security":{title:"Security Center",subtitle:"Emergency Freeze & Anti-Tamper"},"/issuer":{title:"Issuer Portal",subtitle:"Accredited Credential Authoring"},"/verifier":{title:"Verifier Portal",subtitle:"Instant Verification Gateway"},"/admin":{title:"Admin Console",subtitle:"Protocol Governance & Parameters"},"/onboarding":{title:"Identity Onboarding",subtitle:"Generate DID & Cryptographic Keypair"},"/connect-wallet":{title:"Connect Wallet",subtitle:"Cryptographic Key Gate"}};function df({onOpenMobileMenu:n}){const e=ft(),[t,s]=f.useState(!0),r=lf[e.pathname]||{title:"Bharosa Protocol",subtitle:"Decentralized Trust Network"};return o.jsxs("header",{className:"sticky top-0 z-20 h-16 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#ECFCCB] px-4 sm:px-6 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("button",{onClick:n,className:"md:hidden p-2 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors","aria-label":"Open navigation drawer",children:o.jsx(qh,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"font-anton text-lg sm:text-xl tracking-wide text-[#1A2E05] uppercase leading-tight",children:r.title}),o.jsx("p",{className:"hidden sm:block text-[11px] text-[#4D6B2A] font-medium leading-none",children:r.subtitle})]})]}),o.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[o.jsxs("button",{onClick:()=>s(!t),className:`hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${t?"bg-[#ECFCCB] text-[#1A2E05] border-[#84CC16]":"bg-stone-100 text-stone-500 border-stone-200"}`,title:"Sponsored transactions via EIP-2771 Forwarder",children:[o.jsx(Hi,{className:`w-3.5 h-3.5 ${t?"text-[#65A30D] fill-[#84CC16]":"text-stone-400"}`}),o.jsx("span",{children:t?"Gasless Active":"Self-Pay Gas"})]}),o.jsx(cf,{}),o.jsx(rf,{}),o.jsx(af,{})]})]})}function uf(){const[n,e]=f.useState(()=>localStorage.getItem("bharosa_sidebar_collapsed")==="true"),[t,s]=f.useState(!1);return f.useEffect(()=>{localStorage.setItem("bharosa_sidebar_collapsed",String(n))},[n]),o.jsxs("div",{className:"min-h-screen flex bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(sf,{collapsed:n,setCollapsed:e,mobileOpen:t,setMobileOpen:s}),o.jsxs("div",{className:"flex-1 flex flex-col min-w-0",children:[o.jsx(Ht,{}),o.jsx(df,{onOpenMobileMenu:()=>s(!0)}),o.jsx("main",{className:"flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl w-full mx-auto animate-in fade-in duration-150",children:o.jsx(me,{})}),o.jsx(Wi,{})]})]})}function hf(){return o.jsxs("div",{className:"min-h-screen bg-[#F7FBEF] flex flex-col justify-between text-[#1A2E05]",children:[o.jsx(Ht,{}),o.jsxs("header",{className:"p-4 sm:p-6 flex items-center justify-between max-w-6xl mx-auto w-full",children:[o.jsx(pe,{to:"/",className:"flex items-center gap-3 group",children:o.jsx("img",{src:"/logos/bharosa-logo.png",alt:"Bharosa - भरोसा",className:"h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"})}),o.jsxs(pe,{to:"/public-verify",className:"text-xs font-bold text-[#4D6B2A] hover:text-[#0C2518] transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/60",children:[o.jsx(Xt,{className:"w-3.5 h-3.5 text-[#84CC16]"})," Public Proof Verifier"]})]}),o.jsx("main",{className:"flex-1 flex items-center justify-center p-4 sm:p-6 my-4",children:o.jsx("div",{className:"w-full max-w-xl bg-white rounded-3xl border border-[#D9EBB5] shadow-lime p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200",children:o.jsx(me,{})})}),o.jsx("footer",{className:"p-4 text-center text-xs text-[#4D6B2A] border-t border-[#D9EBB5]/50",children:"Bharosa Sovereign Trust Protocol · Production-Grade Cryptographic Identity"})]})}function fn({children:n}){const{user:e,loading:t,isDemoUser:s}=He(),r=ft();if(t)return o.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(Yt,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),o.jsx("p",{className:"text-sm font-medium",children:"Verifying Bharosa credentials..."})]});if(!e){const i=encodeURIComponent(r.pathname+r.search);return o.jsx(St,{to:`/login?returnTo=${i}`,replace:!0})}return!s&&"emailVerified"in e&&!e.emailVerified&&e.providerData?.some(a=>a.providerId==="password")&&r.pathname!=="/verify-email"?o.jsx(St,{to:"/verify-email",replace:!0}):n?o.jsx(o.Fragment,{children:n}):o.jsx(me,{})}function hr({children:n}){const{account:e,loading:t,isDemoUser:s}=He(),{isConnected:r,address:i}=_r(),a=ft();if(t)return o.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(Yt,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),o.jsx("p",{className:"text-sm font-medium",children:"Checking cryptographic wallet status..."})]});if(s&&e?.walletAddress)return n?o.jsx(o.Fragment,{children:n}):o.jsx(me,{});const c=!!e?.walletAddress,l=r&&i&&e?.walletAddress&&i.toLowerCase()===e.walletAddress.toLowerCase();if(!r||!c||!l){const d=encodeURIComponent(a.pathname+a.search);return o.jsx(St,{to:`/connect-wallet?returnTo=${d}`,replace:!0})}return n?o.jsx(o.Fragment,{children:n}):o.jsx(me,{})}function ff({children:n}){const{account:e,loading:t}=He();return t?o.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(Yt,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),o.jsx("p",{className:"text-sm font-medium",children:"Resolving decentralized identity..."})]}):e?.didRegistered?n?o.jsx(o.Fragment,{children:n}):o.jsx(me,{}):o.jsx(St,{to:"/onboarding",replace:!0})}function pn({allowedRoles:n,children:e}){const{account:t,loading:s}=He();if(s)return null;const r=t?.persona?.toUpperCase()||"",i=(t?.onChainRoles||[]).map(c=>c.toUpperCase());return n.includes(r)||n.some(c=>i.includes(c.toUpperCase()))?e?o.jsx(o.Fragment,{children:e}):o.jsx(me,{}):o.jsx("div",{className:"flex-1 flex items-center justify-center p-8 bg-[#F7FBEF]",children:o.jsxs("div",{className:"max-w-md w-full bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-8 shadow-sm text-center",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[#ECFCCB] flex items-center justify-center mx-auto mb-4 text-[#65A30D]",children:o.jsx(zi,{className:"w-8 h-8"})}),o.jsx("h2",{className:"text-2xl font-bold font-anton text-[#1A2E05] tracking-wide mb-2 uppercase",children:"Access Restricted"}),o.jsxs("p",{className:"text-sm text-[#4D6B2A] mb-6 leading-relaxed",children:["This module requires verified credentials or privileges (",n.join(", "),"). Your current role is"," ",o.jsx("span",{className:"font-semibold text-[#1A2E05]",children:t?.persona||"HOLDER"}),"."]}),o.jsxs(pe,{to:"/dashboard",className:"inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-sm transition-colors shadow-sm",children:[o.jsx(Vi,{className:"w-4 h-4 mr-2"})," Return to Dashboard"]})]})})}const N=()=>o.jsxs("div",{className:"flex-1 min-h-[60vh] flex items-center justify-center p-16 text-sm text-[#4D6B2A]",children:[o.jsx(Yt,{className:"w-6 h-6 animate-spin mr-2 text-[#84CC16]"})," Loading Bharosa Protocol..."]}),pf=f.lazy(()=>O(()=>import("./Landing-CfBrSBB2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),mn=f.lazy(()=>O(()=>import("./PublicVerify-ybWVZUHC.js"),__vite__mapDeps([10,1,2,11,8,12,3,4,13,14]))),mf=f.lazy(()=>O(()=>import("./Login-DGaNYyGZ.js"),__vite__mapDeps([15,1,2,16,3,17,8]))),gf=f.lazy(()=>O(()=>import("./SignUp-CRbhBvri.js"),__vite__mapDeps([18,1,2,16,3,17,19,8]))),yf=f.lazy(()=>O(()=>import("./ForgotPassword-BOuGWMak.js"),__vite__mapDeps([20,1,2,16,3,4,17,19,8]))),_f=f.lazy(()=>O(()=>import("./VerifyEmail-C0roCYOH.js"),__vite__mapDeps([21,1,2,3,19,4,8]))),vf=f.lazy(()=>O(()=>import("./ConnectWallet-DbFijG6A.js"),__vite__mapDeps([22,1,2,8,3,4]))),wf=f.lazy(()=>O(()=>import("./AppRedirect-DjyGsbt1.js"),__vite__mapDeps([23,1,2,8]))),bf=f.lazy(()=>O(()=>import("./Onboarding-CdbAtY__.js"),__vite__mapDeps([24,1,2,8,11,25,3,4]))),xf=f.lazy(()=>O(()=>import("./Dashboard-D06SmByJ.js"),__vite__mapDeps([26,1,2,11,8,25,3,27,28,7,29]))),If=f.lazy(()=>O(()=>import("./Identity-Ca01SaLt.js"),__vite__mapDeps([30,1,2,11,8,25,3]))),Ef=f.lazy(()=>O(()=>import("./Credentials-BJ8CW_fn.js"),__vite__mapDeps([31,1,2,11,8,25,3,32,33,28]))),fr=f.lazy(()=>O(()=>import("./Assets-DRDWhuEH.js"),__vite__mapDeps([34,1,2,3,11,8,35,5,4,32,13]))),Cf=f.lazy(()=>O(()=>import("./Access-BfQyy1u5.js"),__vite__mapDeps([36,1,2,3,11,8,37,27,4,7,14,33]))),kf=f.lazy(()=>O(()=>import("./ZK-DyKEjrKH.js"),__vite__mapDeps([38,1,2,3,11,8,4,13,14]))),Tf=f.lazy(()=>O(()=>import("./Recovery-C48iX_8o.js"),__vite__mapDeps([39,1,2,3,8,4]))),Af=f.lazy(()=>O(()=>import("./AuditLog-BqvRjpBM.js"),__vite__mapDeps([40,1,2,3,33,29,8]))),Sf=f.lazy(()=>O(()=>import("./SecurityCenter-BZlFrvW6.js"),__vite__mapDeps([41,1,2,3,11,8,6,33,37,4,7,14]))),Nf=f.lazy(()=>O(()=>import("./Issuer-D-w5WKJ9.js"),__vite__mapDeps([42,1,2,3,11,8,25,12,17,4,29,35]))),Rf=f.lazy(()=>O(()=>import("./Verifier-BZd2oteN.js"),__vite__mapDeps([43,1,2,3]))),Pf=f.lazy(()=>O(()=>import("./Admin-CN_voYx-.js"),__vite__mapDeps([44,1,2,3,11,8,4,6,27]))),Of=f.lazy(()=>O(()=>import("./NotFound-CYnESbK7.js"),__vite__mapDeps([45,1,2,3]))),Df=Xi([{element:o.jsx(ef,{}),children:[{path:"/",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(pf,{})})},{path:"/public-verify",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(mn,{})})},{path:"/verify",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(mn,{})})},{path:"/verify/:hash",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(mn,{})})}]},{path:"/login",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(mf,{})})},{element:o.jsx(hf,{}),children:[{path:"/signup",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(gf,{})})},{path:"/forgot-password",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(yf,{})})},{path:"/verify-email",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(_f,{})})}]},{path:"/app",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(wf,{})})},{element:o.jsx(fn,{}),children:[{path:"/connect-wallet",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(vf,{})})}]},{element:o.jsx(fn,{children:o.jsx(hr,{})}),children:[{path:"/onboarding",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(bf,{})})}]},{element:o.jsx(fn,{children:o.jsx(hr,{children:o.jsx(ff,{children:o.jsx(uf,{})})})}),children:[{path:"/dashboard",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(xf,{})})},{path:"/identity",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(If,{})})},{path:"/credentials",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Ef,{})})},{path:"/assets",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(fr,{})})},{path:"/assets/:assetId",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(fr,{})})},{path:"/access",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Cf,{})})},{path:"/zk",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(kf,{})})},{path:"/recovery",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Tf,{})})},{path:"/audit",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Af,{})})},{path:"/security",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Sf,{})})},{path:"/issuer",element:o.jsx(pn,{allowedRoles:["ISSUER","ADMIN"],children:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Nf,{})})})},{path:"/verifier",element:o.jsx(pn,{allowedRoles:["VERIFIER","ADMIN"],children:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Rf,{})})})},{path:"/admin",element:o.jsx(pn,{allowedRoles:["ADMIN"],children:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Pf,{})})})}]},{path:"*",element:o.jsx(f.Suspense,{fallback:o.jsx(N,{}),children:o.jsx(Of,{})})}]);function jf(){return o.jsx(Qi,{children:o.jsx(no,{children:o.jsx(Rh,{children:o.jsx(ea,{router:Df})})})})}const Lf=[1,10,56,137,8453,42161],pr=31337;if(Lf.includes(pr)){const n=`[CRITICAL SECURITY] DEMO_MODE cannot be enabled on mainnet chain ID ${pr}! Startup aborted.`;throw console.error(n),new Error(n)}const qi=document.getElementById("root");if(!qi)throw new Error("Root element #root not found in document");gn.createRoot(qi).render(o.jsx(ta.StrictMode,{children:o.jsx(jf,{})}));const Vf=Object.freeze(Object.defineProperty({__proto__:null,default:_a},Symbol.toStringTag,{value:"Module"}));export{Vi as A,At as C,Nn as D,$h as F,zh as K,Yt as L,qh as M,Zh as R,Xt as S,Yh as T,Qh as U,Pn as W,Hi as Z,ss as a,Wh as b,Lh as c,T as d,Z as e,dr as f,$i as g,zi as h,Hh as i,Xh as j,Mh as k,ur as l,jh as m,Bh as n,Ya as o,Vh as p,Jh as q,Rn as r,V as s,Vf as t,He as u};
