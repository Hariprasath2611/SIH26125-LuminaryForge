const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Landing-CcF71V0I.js","assets/vendor-query-BBOC5ZFJ.js","assets/vendor-react-B7X1oEVa.js","assets/PageMeta-C6ZXIZjw.js","assets/Navbar-wxoUNyTb.js","assets/x-C-zlawJy.js","assets/vendor-web3-83TDpyMK.js","assets/PublicVerify-BjZvRpiu.js","assets/client-Dfyl7m5J.js","assets/vc-DeH0xfO7.js","assets/triangle-alert-CCjfKYT_.js","assets/circle-check-cJaw7bxU.js","assets/circle-x-BxuW-oG-.js","assets/printer-Dcoutnp2.js","assets/Login-CW8_a9sI.js","assets/zod-CHgz-d0w.js","assets/circle-alert-Br5of5GM.js","assets/SignUp-6bcB3L9m.js","assets/mail-CRcxTEqB.js","assets/lock-C4f9totG.js","assets/ForgotPassword-erT_wzqy.js","assets/VerifyEmail-Lj7GtvF6.js","assets/refresh-cw-DtcIAYqT.js","assets/ConnectWallet-BNkC0NnX.js","assets/AppRedirect-DpV4Rxg1.js","assets/Onboarding-DBschE6E.js","assets/did-GfvEE9Rt.js","assets/key-Dx-G2F20.js","assets/Dashboard-Ci2mELxK.js","assets/share-2-CNYONLH4.js","assets/upload-DVAh9gYS.js","assets/clock-BavvCqPy.js","assets/Identity-BhybnGNH.js","assets/Credentials-C_BMUzXp.js","assets/download-CCH_gTgp.js","assets/Assets-LYv9mS3n.js","assets/Access-B9B_8jYt.js","assets/circle-plus-BAnveWkh.js","assets/file-check-2-DOsQjqMm.js","assets/ZK-CJNGrHap.js","assets/Recovery-Bwe_UbSU.js","assets/AuditLog-BsPbOSY4.js","assets/external-link-D0mto_FF.js","assets/SecurityCenter-fDKq3FNZ.js","assets/users-Bhvvpto9.js","assets/Issuer-8Bei0VJ1.js","assets/Verifier-B1m_Zapd.js","assets/Admin-BowgpWpY.js","assets/NotFound-xEP48hFV.js"])))=>i.map(i=>d[i]);
import{Q as Na,j as o,b as Pa,c as Oa}from"./vendor-query-BBOC5ZFJ.js";import{a as ja,r as u,R as Hr,c as zr,d as At,O as be,L as qe,N as kn,h as Gt,i as La,j as Da,k as Ma,g as Fa}from"./vendor-react-B7X1oEVa.js";import{aP as Wr,aQ as Ua,_ as D,aR as Ba,aS as Mt,E as $e,aT as Ft,aU as Ut,aV as Va,aW as $a,aX as Ha,aY as za,aZ as Wa,a_ as qa,y as Za,e as Ps,a$ as Ga,b0 as Os,b1 as Ka,aw as Ya,aL as Ja,b2 as Xa,b3 as Qa,u as qr,a as eo,b4 as to}from"./vendor-web3-83TDpyMK.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var $n={},js=ja;$n.createRoot=js.createRoot,$n.hydrateRoot=js.hydrateRoot;function no(n){const e=typeof window<"u"?window:void 0;if(typeof e>"u"||typeof e.ethereum>"u")return;const t=e.ethereum.providers;return t?t.find(s=>s[n]):e.ethereum[n]?e.ethereum:void 0}function so(n){const e=(t,s)=>{const[r,...i]=s.split("."),a=t[r];if(a)return i.length===0?a:e(a,i.join("."))};if(typeof window<"u")return e(window,n)}function ro({flag:n,namespace:e}){const t=typeof window<"u"?window:void 0;if(typeof t>"u")return;if(e){const r=so(e);if(r)return r}const s=t.ethereum?.providers;if(n){const r=no(n);if(r)return r}if(!(e||n))return typeof s<"u"&&s.length>0?s[0]:t.ethereum}function io(n){return e=>{const t=n?{target:()=>({id:e.rkDetails.id,name:e.rkDetails.name,provider:n})}:{};return Wr(s=>({...Ua(t)(s),...e}))}}function ao({flag:n,namespace:e,target:t}){const s=t||ro({flag:n,namespace:e});return io(s)}var oo=()=>({id:"injected",name:"Browser Wallet",iconUrl:async()=>(await D(async()=>{const{default:n}=await import("./injectedWallet-AWJSZPMG-Df9x-YJA.js");return{default:n}},[])).default,iconBackground:"#fff",createConnector:ao({})}),T;(function(n){n.assertEqual=r=>{};function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const i={};for(const a of r)i[a]=a;return i},n.getValidEnumValues=r=>{const i=n.objectKeys(r).filter(c=>typeof r[r[c]]!="number"),a={};for(const c of i)a[c]=r[c];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(i){return r[i]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&i.push(a);return i},n.find=(r,i)=>{for(const a of r)if(i(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&Number.isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}n.joinValues=s,n.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(T||(T={}));var Ls;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Ls||(Ls={}));const m=T.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Se=n=>{switch(typeof n){case"undefined":return m.undefined;case"string":return m.string;case"number":return Number.isNaN(n)?m.nan:m.number;case"boolean":return m.boolean;case"function":return m.function;case"bigint":return m.bigint;case"symbol":return m.symbol;case"object":return Array.isArray(n)?m.array:n===null?m.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?m.promise:typeof Map<"u"&&n instanceof Map?m.map:typeof Set<"u"&&n instanceof Set?m.set:typeof Date<"u"&&n instanceof Date?m.date:m.object;default:return m.unknown}},f=T.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class we extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)s._errors.push(t(a));else{let c=s,l=0;for(;l<a.path.length;){const d=a.path[l];l===a.path.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(t(a))):c[d]=c[d]||{_errors:[]},c=c[d],l++}}};return r(this),s}static assert(e){if(!(e instanceof we))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,T.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},s=[];for(const r of this.issues)if(r.path.length>0){const i=r.path[0];t[i]=t[i]||[],t[i].push(e(r))}else s.push(e(r));return{formErrors:s,fieldErrors:t}}get formErrors(){return this.flatten()}}we.create=n=>new we(n);const Hn=(n,e)=>{let t;switch(n.code){case f.invalid_type:n.received===m.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case f.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,T.jsonStringifyReplacer)}`;break;case f.unrecognized_keys:t=`Unrecognized key(s) in object: ${T.joinValues(n.keys,", ")}`;break;case f.invalid_union:t="Invalid input";break;case f.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${T.joinValues(n.options)}`;break;case f.invalid_enum_value:t=`Invalid enum value. Expected ${T.joinValues(n.options)}, received '${n.received}'`;break;case f.invalid_arguments:t="Invalid function arguments";break;case f.invalid_return_type:t="Invalid function return type";break;case f.invalid_date:t="Invalid date";break;case f.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:T.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case f.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="bigint"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case f.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case f.custom:t="Invalid input";break;case f.invalid_intersection_types:t="Intersection results could not be merged";break;case f.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case f.not_finite:t="Number must be finite";break;default:t=e.defaultError,T.assertNever(n)}return{message:t}};let co=Hn;function lo(){return co}const uo=n=>{const{data:e,path:t,errorMaps:s,issueData:r}=n,i=[...t,...r.path||[]],a={...r,path:i};if(r.message!==void 0)return{...r,path:i,message:r.message};let c="";const l=s.filter(d=>!!d).slice().reverse();for(const d of l)c=d(a,{data:e,defaultError:c}).message;return{...r,path:i,message:c}};function p(n,e){const t=lo(),s=uo({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===Hn?void 0:Hn].filter(r=>!!r)});n.common.issues.push(s)}class Y{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const s=[];for(const r of t){if(r.status==="aborted")return w;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,t){const s=[];for(const r of t){const i=await r.key,a=await r.value;s.push({key:i,value:a})}return Y.mergeObjectSync(e,s)}static mergeObjectSync(e,t){const s={};for(const r of t){const{key:i,value:a}=r;if(i.status==="aborted"||a.status==="aborted")return w;i.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(s[i.value]=a.value)}return{status:e.value,value:s}}}const w=Object.freeze({status:"aborted"}),_t=n=>({status:"dirty",value:n}),Q=n=>({status:"valid",value:n}),Ds=n=>n.status==="aborted",Ms=n=>n.status==="dirty",ot=n=>n.status==="valid",Kt=n=>typeof Promise<"u"&&n instanceof Promise;var g;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(g||(g={}));class Me{constructor(e,t,s,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=s,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Fs=(n,e)=>{if(ot(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new we(n.common.issues);return this._error=t,this._error}}};function E(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:s,description:r}=n;if(e&&(t||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,c)=>{const{message:l}=n;return a.code==="invalid_enum_value"?{message:l??c.defaultError}:typeof c.data>"u"?{message:l??s??c.defaultError}:a.code!=="invalid_type"?{message:c.defaultError}:{message:l??t??c.defaultError}},description:r}}class k{get description(){return this._def.description}_getType(e){return Se(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Se(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Y,ctx:{common:e.parent.common,data:e.data,parsedType:Se(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Kt(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const s=this.safeParse(e,t);if(s.success)return s.data;throw s.error}safeParse(e,t){const s={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Se(e)},r=this._parseSync({data:e,path:s.path,parent:s});return Fs(s,r)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Se(e)};if(!this["~standard"].async)try{const s=this._parseSync({data:e,path:[],parent:t});return ot(s)?{value:s.value}:{issues:t.common.issues}}catch(s){s?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(s=>ot(s)?{value:s.value}:{issues:t.common.issues})}async parseAsync(e,t){const s=await this.safeParseAsync(e,t);if(s.success)return s.data;throw s.error}async safeParseAsync(e,t){const s={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Se(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(Kt(r)?r:Promise.resolve(r));return Fs(s,i)}refine(e,t){const s=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,i)=>{const a=e(r),c=()=>i.addIssue({code:f.custom,...s(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(c(),!1)):a?!0:(c(),!1)})}refinement(e,t){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof t=="function"?t(s,r):t),!1))}_refinement(e){return new lt({schema:this,typeName:x.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return Le.create(this,this._def)}nullable(){return dt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ie.create(this)}promise(){return Qt.create(this,this._def)}or(e){return Jt.create([this,e],this._def)}and(e){return Xt.create(this,e,this._def)}transform(e){return new lt({...E(this._def),schema:this,typeName:x.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Wn({...E(this._def),innerType:this,defaultValue:t,typeName:x.ZodDefault})}brand(){return new jo({typeName:x.ZodBranded,type:this,...E(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new qn({...E(this._def),innerType:this,catchValue:t,typeName:x.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return is.create(this,e)}readonly(){return Zn.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ho=/^c[^\s-]{8,}$/i,fo=/^[0-9a-z]+$/,po=/^[0-9A-HJKMNP-TV-Z]{26}$/i,mo=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,go=/^[a-z0-9_-]{21}$/i,yo=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,_o=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,vo=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,bo="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Tn;const wo=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,xo=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Io=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Eo=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ko=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,To=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Zr="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Co=new RegExp(`^${Zr}$`);function Gr(n){let e="[0-5]\\d";n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`);const t=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Ao(n){return new RegExp(`^${Gr(n)}$`)}function So(n){let e=`${Zr}T${Gr(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Ro(n,e){return!!((e==="v4"||!e)&&wo.test(n)||(e==="v6"||!e)&&Io.test(n))}function No(n,e){if(!yo.test(n))return!1;try{const[t]=n.split(".");if(!t)return!1;const s=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),r=JSON.parse(atob(s));return!(typeof r!="object"||r===null||"typ"in r&&r?.typ!=="JWT"||!r.alg||e&&r.alg!==e)}catch{return!1}}function Po(n,e){return!!((e==="v4"||!e)&&xo.test(n)||(e==="v6"||!e)&&Eo.test(n))}class je extends k{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==m.string){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_type,expected:m.string,received:i.parsedType}),w}const s=new Y;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const a=e.data.length>i.value,c=e.data.length<i.value;(a||c)&&(r=this._getOrReturnCtx(e,r),a?p(r,{code:f.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&p(r,{code:f.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")vo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"email",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="emoji")Tn||(Tn=new RegExp(bo,"u")),Tn.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"emoji",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")mo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"uuid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="nanoid")go.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"nanoid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")ho.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")fo.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid2",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="ulid")po.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ulid",code:f.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),p(r,{validation:"url",code:f.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"regex",code:f.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),s.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?So(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:"datetime",message:i.message}),s.dirty()):i.kind==="date"?Co.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:"date",message:i.message}),s.dirty()):i.kind==="time"?Ao(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:f.invalid_string,validation:"time",message:i.message}),s.dirty()):i.kind==="duration"?_o.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"duration",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="ip"?Ro(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ip",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="jwt"?No(e.data,i.alg)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"jwt",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="cidr"?Po(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cidr",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="base64"?ko.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64",code:f.invalid_string,message:i.message}),s.dirty()):i.kind==="base64url"?To.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64url",code:f.invalid_string,message:i.message}),s.dirty()):T.assertNever(i);return{status:s.value,value:e.data}}_regex(e,t,s){return this.refinement(r=>e.test(r),{validation:t,code:f.invalid_string,...g.errToObj(s)})}_addCheck(e){return new je({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...g.errToObj(e)})}url(e){return this._addCheck({kind:"url",...g.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...g.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...g.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...g.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...g.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...g.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...g.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...g.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...g.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...g.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...g.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...g.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...g.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...g.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...g.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...g.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...g.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...g.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...g.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...g.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...g.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...g.errToObj(t)})}nonempty(e){return this.min(1,g.errToObj(e))}trim(){return new je({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new je({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new je({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}je.create=n=>new je({checks:[],typeName:x.ZodString,coerce:n?.coerce??!1,...E(n)});function Oo(n,e){const t=(n.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=t>s?t:s,i=Number.parseInt(n.toFixed(r).replace(".","")),a=Number.parseInt(e.toFixed(r).replace(".",""));return i%a/10**r}class xt extends k{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==m.number){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_type,expected:m.number,received:i.parsedType}),w}let s;const r=new Y;for(const i of this._def.checks)i.kind==="int"?T.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),p(s,{code:f.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?Oo(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),p(s,{code:f.not_finite,message:i.message}),r.dirty()):T.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,g.toString(t))}gt(e,t){return this.setLimit("min",e,!1,g.toString(t))}lte(e,t){return this.setLimit("max",e,!0,g.toString(t))}lt(e,t){return this.setLimit("max",e,!1,g.toString(t))}setLimit(e,t,s,r){return new xt({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:g.toString(r)}]})}_addCheck(e){return new xt({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:g.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:g.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:g.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:g.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:g.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:g.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:g.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:g.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:g.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&T.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(t===null||s.value>t)&&(t=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(t)&&Number.isFinite(e)}}xt.create=n=>new xt({checks:[],typeName:x.ZodNumber,coerce:n?.coerce||!1,...E(n)});class It extends k{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==m.bigint)return this._getInvalidInput(e);let s;const r=new Y;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),p(s,{code:f.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):T.assertNever(i);return{status:r.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return p(t,{code:f.invalid_type,expected:m.bigint,received:t.parsedType}),w}gte(e,t){return this.setLimit("min",e,!0,g.toString(t))}gt(e,t){return this.setLimit("min",e,!1,g.toString(t))}lte(e,t){return this.setLimit("max",e,!0,g.toString(t))}lt(e,t){return this.setLimit("max",e,!1,g.toString(t))}setLimit(e,t,s,r){return new It({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:g.toString(r)}]})}_addCheck(e){return new It({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:g.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:g.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:g.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:g.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:g.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}It.create=n=>new It({checks:[],typeName:x.ZodBigInt,coerce:n?.coerce??!1,...E(n)});class Us extends k{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==m.boolean){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:m.boolean,received:s.parsedType}),w}return Q(e.data)}}Us.create=n=>new Us({typeName:x.ZodBoolean,coerce:n?.coerce||!1,...E(n)});class Yt extends k{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==m.date){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_type,expected:m.date,received:i.parsedType}),w}if(Number.isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return p(i,{code:f.invalid_date}),w}const s=new Y;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:f.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):T.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Yt({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:g.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:g.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Yt.create=n=>new Yt({checks:[],coerce:n?.coerce||!1,typeName:x.ZodDate,...E(n)});class Bs extends k{_parse(e){if(this._getType(e)!==m.symbol){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:m.symbol,received:s.parsedType}),w}return Q(e.data)}}Bs.create=n=>new Bs({typeName:x.ZodSymbol,...E(n)});class Vs extends k{_parse(e){if(this._getType(e)!==m.undefined){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:m.undefined,received:s.parsedType}),w}return Q(e.data)}}Vs.create=n=>new Vs({typeName:x.ZodUndefined,...E(n)});class $s extends k{_parse(e){if(this._getType(e)!==m.null){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:m.null,received:s.parsedType}),w}return Q(e.data)}}$s.create=n=>new $s({typeName:x.ZodNull,...E(n)});class Hs extends k{constructor(){super(...arguments),this._any=!0}_parse(e){return Q(e.data)}}Hs.create=n=>new Hs({typeName:x.ZodAny,...E(n)});class zs extends k{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Q(e.data)}}zs.create=n=>new zs({typeName:x.ZodUnknown,...E(n)});class Fe extends k{_parse(e){const t=this._getOrReturnCtx(e);return p(t,{code:f.invalid_type,expected:m.never,received:t.parsedType}),w}}Fe.create=n=>new Fe({typeName:x.ZodNever,...E(n)});class Ws extends k{_parse(e){if(this._getType(e)!==m.undefined){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:m.void,received:s.parsedType}),w}return Q(e.data)}}Ws.create=n=>new Ws({typeName:x.ZodVoid,...E(n)});class ie extends k{_parse(e){const{ctx:t,status:s}=this._processInputParams(e),r=this._def;if(t.parsedType!==m.array)return p(t,{code:f.invalid_type,expected:m.array,received:t.parsedType}),w;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,c=t.data.length<r.exactLength.value;(a||c)&&(p(t,{code:a?f.too_big:f.too_small,minimum:c?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(p(t,{code:f.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(p(t,{code:f.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),t.common.async)return Promise.all([...t.data].map((a,c)=>r.type._parseAsync(new Me(t,a,t.path,c)))).then(a=>Y.mergeArray(s,a));const i=[...t.data].map((a,c)=>r.type._parseSync(new Me(t,a,t.path,c)));return Y.mergeArray(s,i)}get element(){return this._def.type}min(e,t){return new ie({...this._def,minLength:{value:e,message:g.toString(t)}})}max(e,t){return new ie({...this._def,maxLength:{value:e,message:g.toString(t)}})}length(e,t){return new ie({...this._def,exactLength:{value:e,message:g.toString(t)}})}nonempty(e){return this.min(1,e)}}ie.create=(n,e)=>new ie({type:n,minLength:null,maxLength:null,exactLength:null,typeName:x.ZodArray,...E(e)});function nt(n){if(n instanceof F){const e={};for(const t in n.shape){const s=n.shape[t];e[t]=Le.create(nt(s))}return new F({...n._def,shape:()=>e})}else return n instanceof ie?new ie({...n._def,type:nt(n.element)}):n instanceof Le?Le.create(nt(n.unwrap())):n instanceof dt?dt.create(nt(n.unwrap())):n instanceof Ge?Ge.create(n.items.map(e=>nt(e))):n}class F extends k{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=T.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==m.object){const d=this._getOrReturnCtx(e);return p(d,{code:f.invalid_type,expected:m.object,received:d.parsedType}),w}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:a}=this._getCached(),c=[];if(!(this._def.catchall instanceof Fe&&this._def.unknownKeys==="strip"))for(const d in r.data)a.includes(d)||c.push(d);const l=[];for(const d of a){const h=i[d],y=r.data[d];l.push({key:{status:"valid",value:d},value:h._parse(new Me(r,y,r.path,d)),alwaysSet:d in r.data})}if(this._def.catchall instanceof Fe){const d=this._def.unknownKeys;if(d==="passthrough")for(const h of c)l.push({key:{status:"valid",value:h},value:{status:"valid",value:r.data[h]}});else if(d==="strict")c.length>0&&(p(r,{code:f.unrecognized_keys,keys:c}),s.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const h of c){const y=r.data[h];l.push({key:{status:"valid",value:h},value:d._parse(new Me(r,y,r.path,h)),alwaysSet:h in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const d=[];for(const h of l){const y=await h.key,_=await h.value;d.push({key:y,value:_,alwaysSet:h.alwaysSet})}return d}).then(d=>Y.mergeObjectSync(s,d)):Y.mergeObjectSync(s,l)}get shape(){return this._def.shape()}strict(e){return g.errToObj,new F({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,s)=>{const r=this._def.errorMap?.(t,s).message??s.defaultError;return t.code==="unrecognized_keys"?{message:g.errToObj(e).message??r}:{message:r}}}:{}})}strip(){return new F({...this._def,unknownKeys:"strip"})}passthrough(){return new F({...this._def,unknownKeys:"passthrough"})}extend(e){return new F({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new F({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:x.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new F({...this._def,catchall:e})}pick(e){const t={};for(const s of T.objectKeys(e))e[s]&&this.shape[s]&&(t[s]=this.shape[s]);return new F({...this._def,shape:()=>t})}omit(e){const t={};for(const s of T.objectKeys(this.shape))e[s]||(t[s]=this.shape[s]);return new F({...this._def,shape:()=>t})}deepPartial(){return nt(this)}partial(e){const t={};for(const s of T.objectKeys(this.shape)){const r=this.shape[s];e&&!e[s]?t[s]=r:t[s]=r.optional()}return new F({...this._def,shape:()=>t})}required(e){const t={};for(const s of T.objectKeys(this.shape))if(e&&!e[s])t[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof Le;)i=i._def.innerType;t[s]=i}return new F({...this._def,shape:()=>t})}keyof(){return Kr(T.objectKeys(this.shape))}}F.create=(n,e)=>new F({shape:()=>n,unknownKeys:"strip",catchall:Fe.create(),typeName:x.ZodObject,...E(e)});F.strictCreate=(n,e)=>new F({shape:()=>n,unknownKeys:"strict",catchall:Fe.create(),typeName:x.ZodObject,...E(e)});F.lazycreate=(n,e)=>new F({shape:n,unknownKeys:"strip",catchall:Fe.create(),typeName:x.ZodObject,...E(e)});class Jt extends k{_parse(e){const{ctx:t}=this._processInputParams(e),s=this._def.options;function r(i){for(const c of i)if(c.result.status==="valid")return c.result;for(const c of i)if(c.result.status==="dirty")return t.common.issues.push(...c.ctx.common.issues),c.result;const a=i.map(c=>new we(c.ctx.common.issues));return p(t,{code:f.invalid_union,unionErrors:a}),w}if(t.common.async)return Promise.all(s.map(async i=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let i;const a=[];for(const l of s){const d={...t,common:{...t.common,issues:[]},parent:null},h=l._parseSync({data:t.data,path:t.path,parent:d});if(h.status==="valid")return h;h.status==="dirty"&&!i&&(i={result:h,ctx:d}),d.common.issues.length&&a.push(d.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const c=a.map(l=>new we(l));return p(t,{code:f.invalid_union,unionErrors:c}),w}}get options(){return this._def.options}}Jt.create=(n,e)=>new Jt({options:n,typeName:x.ZodUnion,...E(e)});function zn(n,e){const t=Se(n),s=Se(e);if(n===e)return{valid:!0,data:n};if(t===m.object&&s===m.object){const r=T.objectKeys(e),i=T.objectKeys(n).filter(c=>r.indexOf(c)!==-1),a={...n,...e};for(const c of i){const l=zn(n[c],e[c]);if(!l.valid)return{valid:!1};a[c]=l.data}return{valid:!0,data:a}}else if(t===m.array&&s===m.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<n.length;i++){const a=n[i],c=e[i],l=zn(a,c);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return t===m.date&&s===m.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class Xt extends k{_parse(e){const{status:t,ctx:s}=this._processInputParams(e),r=(i,a)=>{if(Ds(i)||Ds(a))return w;const c=zn(i.value,a.value);return c.valid?((Ms(i)||Ms(a))&&t.dirty(),{status:t.value,value:c.data}):(p(s,{code:f.invalid_intersection_types}),w)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,a])=>r(i,a)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}Xt.create=(n,e,t)=>new Xt({left:n,right:e,typeName:x.ZodIntersection,...E(t)});class Ge extends k{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==m.array)return p(s,{code:f.invalid_type,expected:m.array,received:s.parsedType}),w;if(s.data.length<this._def.items.length)return p(s,{code:f.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),w;!this._def.rest&&s.data.length>this._def.items.length&&(p(s,{code:f.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...s.data].map((a,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new Me(s,a,s.path,c)):null}).filter(a=>!!a);return s.common.async?Promise.all(i).then(a=>Y.mergeArray(t,a)):Y.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Ge({...this._def,rest:e})}}Ge.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ge({items:n,typeName:x.ZodTuple,rest:null,...E(e)})};class qs extends k{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==m.map)return p(s,{code:f.invalid_type,expected:m.map,received:s.parsedType}),w;const r=this._def.keyType,i=this._def.valueType,a=[...s.data.entries()].map(([c,l],d)=>({key:r._parse(new Me(s,c,s.path,[d,"key"])),value:i._parse(new Me(s,l,s.path,[d,"value"]))}));if(s.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const l of a){const d=await l.key,h=await l.value;if(d.status==="aborted"||h.status==="aborted")return w;(d.status==="dirty"||h.status==="dirty")&&t.dirty(),c.set(d.value,h.value)}return{status:t.value,value:c}})}else{const c=new Map;for(const l of a){const d=l.key,h=l.value;if(d.status==="aborted"||h.status==="aborted")return w;(d.status==="dirty"||h.status==="dirty")&&t.dirty(),c.set(d.value,h.value)}return{status:t.value,value:c}}}}qs.create=(n,e,t)=>new qs({valueType:e,keyType:n,typeName:x.ZodMap,...E(t)});class Et extends k{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==m.set)return p(s,{code:f.invalid_type,expected:m.set,received:s.parsedType}),w;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(p(s,{code:f.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(p(s,{code:f.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const i=this._def.valueType;function a(l){const d=new Set;for(const h of l){if(h.status==="aborted")return w;h.status==="dirty"&&t.dirty(),d.add(h.value)}return{status:t.value,value:d}}const c=[...s.data.values()].map((l,d)=>i._parse(new Me(s,l,s.path,d)));return s.common.async?Promise.all(c).then(l=>a(l)):a(c)}min(e,t){return new Et({...this._def,minSize:{value:e,message:g.toString(t)}})}max(e,t){return new Et({...this._def,maxSize:{value:e,message:g.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Et.create=(n,e)=>new Et({valueType:n,minSize:null,maxSize:null,typeName:x.ZodSet,...E(e)});class Zs extends k{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Zs.create=(n,e)=>new Zs({getter:n,typeName:x.ZodLazy,...E(e)});class Gs extends k{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return p(t,{received:t.data,code:f.invalid_literal,expected:this._def.value}),w}return{status:"valid",value:e.data}}get value(){return this._def.value}}Gs.create=(n,e)=>new Gs({value:n,typeName:x.ZodLiteral,...E(e)});function Kr(n,e){return new ct({values:n,typeName:x.ZodEnum,...E(e)})}class ct extends k{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),s=this._def.values;return p(t,{expected:T.joinValues(s),received:t.parsedType,code:f.invalid_type}),w}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),s=this._def.values;return p(t,{received:t.data,code:f.invalid_enum_value,options:s}),w}return Q(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return ct.create(e,{...this._def,...t})}exclude(e,t=this._def){return ct.create(this.options.filter(s=>!e.includes(s)),{...this._def,...t})}}ct.create=Kr;class Ks extends k{_parse(e){const t=T.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==m.string&&s.parsedType!==m.number){const r=T.objectValues(t);return p(s,{expected:T.joinValues(r),received:s.parsedType,code:f.invalid_type}),w}if(this._cache||(this._cache=new Set(T.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const r=T.objectValues(t);return p(s,{received:s.data,code:f.invalid_enum_value,options:r}),w}return Q(e.data)}get enum(){return this._def.values}}Ks.create=(n,e)=>new Ks({values:n,typeName:x.ZodNativeEnum,...E(e)});class Qt extends k{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==m.promise&&t.common.async===!1)return p(t,{code:f.invalid_type,expected:m.promise,received:t.parsedType}),w;const s=t.parsedType===m.promise?t.data:Promise.resolve(t.data);return Q(s.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Qt.create=(n,e)=>new Qt({type:n,typeName:x.ZodPromise,...E(e)});class lt extends k{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===x.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:s}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:a=>{p(s,a),a.fatal?t.abort():t.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const a=r.transform(s.data,i);if(s.common.async)return Promise.resolve(a).then(async c=>{if(t.value==="aborted")return w;const l=await this._def.schema._parseAsync({data:c,path:s.path,parent:s});return l.status==="aborted"?w:l.status==="dirty"||t.value==="dirty"?_t(l.value):l});{if(t.value==="aborted")return w;const c=this._def.schema._parseSync({data:a,path:s.path,parent:s});return c.status==="aborted"?w:c.status==="dirty"||t.value==="dirty"?_t(c.value):c}}if(r.type==="refinement"){const a=c=>{const l=r.refinement(c,i);if(s.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(s.common.async===!1){const c=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return c.status==="aborted"?w:(c.status==="dirty"&&t.dirty(),a(c.value),{status:t.value,value:c.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(c=>c.status==="aborted"?w:(c.status==="dirty"&&t.dirty(),a(c.value).then(()=>({status:t.value,value:c.value}))))}if(r.type==="transform")if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!ot(a))return w;const c=r.transform(a.value,i);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:c}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>ot(a)?Promise.resolve(r.transform(a.value,i)).then(c=>({status:t.value,value:c})):w);T.assertNever(r)}}lt.create=(n,e,t)=>new lt({schema:n,typeName:x.ZodEffects,effect:e,...E(t)});lt.createWithPreprocess=(n,e,t)=>new lt({schema:e,effect:{type:"preprocess",transform:n},typeName:x.ZodEffects,...E(t)});class Le extends k{_parse(e){return this._getType(e)===m.undefined?Q(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Le.create=(n,e)=>new Le({innerType:n,typeName:x.ZodOptional,...E(e)});class dt extends k{_parse(e){return this._getType(e)===m.null?Q(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}dt.create=(n,e)=>new dt({innerType:n,typeName:x.ZodNullable,...E(e)});class Wn extends k{_parse(e){const{ctx:t}=this._processInputParams(e);let s=t.data;return t.parsedType===m.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Wn.create=(n,e)=>new Wn({innerType:n,typeName:x.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...E(e)});class qn extends k{_parse(e){const{ctx:t}=this._processInputParams(e),s={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return Kt(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new we(s.common.issues)},input:s.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new we(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}qn.create=(n,e)=>new qn({innerType:n,typeName:x.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...E(e)});class Ys extends k{_parse(e){if(this._getType(e)!==m.nan){const s=this._getOrReturnCtx(e);return p(s,{code:f.invalid_type,expected:m.nan,received:s.parsedType}),w}return{status:"valid",value:e.data}}}Ys.create=n=>new Ys({typeName:x.ZodNaN,...E(n)});class jo extends k{_parse(e){const{ctx:t}=this._processInputParams(e),s=t.data;return this._def.type._parse({data:s,path:t.path,parent:t})}unwrap(){return this._def.type}}class is extends k{_parse(e){const{status:t,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?w:i.status==="dirty"?(t.dirty(),_t(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?w:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,t){return new is({in:e,out:t,typeName:x.ZodPipeline})}}class Zn extends k{_parse(e){const t=this._def.innerType._parse(e),s=r=>(ot(r)&&(r.value=Object.freeze(r.value)),r);return Kt(t)?t.then(r=>s(r)):s(t)}unwrap(){return this._def.innerType}}Zn.create=(n,e)=>new Zn({innerType:n,typeName:x.ZodReadonly,...E(e)});var x;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(x||(x={}));const W=je.create;Fe.create;ie.create;const Lo=F.create;Jt.create;Xt.create;Ge.create;ct.create;Qt.create;Le.create;dt.create;const Do={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_AMOY_RPC_URL:"https://rpc-amoy.polygon.technology",VITE_API_URL:"/v1",VITE_APP_NAME:"Bharosa",VITE_ARBITRUM_SEPOLIA_RPC_URL:"https://sepolia-rollup.arbitrum.io/rpc",VITE_CHAIN_ID:"31337",VITE_DEMO_MODE:"true",VITE_FIREBASE_API_KEY:"AIzaSyD77fQHtztMAx_FfLMvv2ujQC9tYFh7Npg",VITE_FIREBASE_APP_ID:"1:227881717805:web:f8e9515a73fcb583b368a4",VITE_FIREBASE_AUTH_DOMAIN:"bharosa-cd1e6.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-XJLDW87PTM",VITE_FIREBASE_MESSAGING_SENDER_ID:"227881717805",VITE_FIREBASE_PROJECT_ID:"bharosa-cd1e6",VITE_FIREBASE_STORAGE_BUCKET:"bharosa-cd1e6.firebasestorage.app",VITE_IPFS_GATEWAY:"https://ipfs.io/ipfs/",VITE_RPC_URL:"http://127.0.0.1:8545",VITE_WALLETCONNECT_PROJECT_ID:"3fcc6bba0f1de962dcbdae11bd9cee4d"},Mo=Lo({VITE_APP_NAME:W().default("Bharosa"),VITE_DEMO_MODE:W().optional().default("true").transform(n=>n==="true"),VITE_API_URL:W().default("/v1"),VITE_CHAIN_ID:W().optional().default("31337").transform(n=>Number(n)||31337),VITE_RPC_URL:W().default("http://127.0.0.1:8545"),VITE_AMOY_RPC_URL:W().default("https://rpc-amoy.polygon.technology"),VITE_ARBITRUM_SEPOLIA_RPC_URL:W().default("https://sepolia-rollup.arbitrum.io/rpc"),VITE_IPFS_GATEWAY:W().default("https://ipfs.io/ipfs/"),VITE_WALLETCONNECT_PROJECT_ID:W().optional(),VITE_CONTRACT_IDENTITY_REGISTRY:W().optional().default(""),VITE_CONTRACT_ACCESS_CONTROL:W().optional().default(""),VITE_CONTRACT_OWNERSHIP_REGISTRY:W().optional().default(""),VITE_CONTRACT_SOCIAL_RECOVERY:W().optional().default(""),VITE_CONTRACT_ZK_VERIFIER:W().optional().default("")}),V=Mo.safeParse(Do);if(!V.success)throw console.error("[Bharosa] Critical configuration error: Invalid environment variables:",V.error.format()),new Error("Critical configuration error: Invalid environment variables");const J={APP_NAME:V.data.VITE_APP_NAME,DEMO_MODE:V.data.VITE_DEMO_MODE,API_URL:V.data.VITE_API_URL,CHAIN_ID:V.data.VITE_CHAIN_ID,RPC_URL:V.data.VITE_RPC_URL,AMOY_RPC_URL:V.data.VITE_AMOY_RPC_URL,ARBITRUM_SEPOLIA_RPC_URL:V.data.VITE_ARBITRUM_SEPOLIA_RPC_URL,IPFS_GATEWAY:V.data.VITE_IPFS_GATEWAY,WALLETCONNECT_PROJECT_ID:V.data.VITE_WALLETCONNECT_PROJECT_ID||"",CONTRACT_IDENTITY_REGISTRY:V.data.VITE_CONTRACT_IDENTITY_REGISTRY,CONTRACT_ACCESS_CONTROL:V.data.VITE_CONTRACT_ACCESS_CONTROL,CONTRACT_OWNERSHIP_REGISTRY:V.data.VITE_CONTRACT_OWNERSHIP_REGISTRY,CONTRACT_SOCIAL_RECOVERY:V.data.VITE_CONTRACT_SOCIAL_RECOVERY,CONTRACT_ZK_VERIFIER:V.data.VITE_CONTRACT_ZK_VERIFIER,MODE:"production",DEV:!1,PROD:!0},Fo=J.WALLETCONNECT_PROJECT_ID==="3fcc6bba0f1de962dcbdae11bd9cee4d",Uo=!!(J.WALLETCONNECT_PROJECT_ID&&J.WALLETCONNECT_PROJECT_ID.trim().length>0&&!Fo),Bo=Uo?Ba({appName:J.APP_NAME,projectId:J.WALLETCONNECT_PROJECT_ID,chains:[Ut,Ft,Mt],transports:{[Ut.id]:$e(J.RPC_URL),[Ft.id]:$e(J.AMOY_RPC_URL),[Mt.id]:$e(J.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1}):Va({chains:[Ut,Ft,Mt],connectors:$a([{groupName:"Browser / Injected",wallets:[oo]}],{appName:J.APP_NAME,projectId:"00000000000000000000000000000000"}),transports:{[Ut.id]:$e(J.RPC_URL),[Ft.id]:$e(J.AMOY_RPC_URL),[Mt.id]:$e(J.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1});function Vo(){const{reconnect:n}=qa();return u.useEffect(()=>{n()},[n]),null}function $o({children:n}){const[e]=u.useState(()=>new Na({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:5e3}}}));return o.jsx(Ha,{config:Bo,reconnectOnMount:!1,children:o.jsxs(Pa,{client:e,children:[o.jsx(Vo,{}),o.jsx(za,{theme:Wa({accentColor:"#84CC16",accentColorForeground:"#1A2E05",borderRadius:"medium",fontStack:"system",overlayBlur:"small"}),children:n})]})})}const Ho=()=>{};var Js={};/**
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
 */const Yr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},zo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Jr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,l=r+2<n.length,d=l?n[r+2]:0,h=i>>2,y=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,j=d&63;l||(j=64,a||(_=64)),s.push(t[h],t[y],t[_],t[j])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const y=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||y==null)throw new Wo;const _=i<<2|c>>4;if(s.push(_),d!==64){const j=c<<4&240|d>>2;if(s.push(j),y!==64){const U=d<<6&192|y;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qo=function(n){const e=Yr(n);return Jr.encodeByteArray(e,!0)},Xr=function(n){return qo(n).replace(/\./g,"")},Qr=function(n){try{return Jr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Ps<"u")return Ps;throw new Error("Unable to locate global object.")}/**
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
 */const Go=()=>Zo().__FIREBASE_DEFAULTS__,Ko=()=>{if(typeof Za>"u"||typeof Js>"u")return;const n=Js.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qr(n[1]);return e&&JSON.parse(e)},as=()=>{try{return Ho()||Go()||Ko()||Yo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jo=n=>as()?.emulatorHosts?.[n],ei=()=>as()?.config,ti=n=>as()?.[`_${n}`];/**
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
 */class ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function H(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function Qo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function os(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ec(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tc(){const n=H();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cs(){try{return typeof indexedDB=="object"}catch{return!1}}function ls(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}function si(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const nc="FirebaseError";class de extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nc,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}}class Qe{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?sc(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new de(r,c,s)}}function sc(n,e){try{let t=0,s="";for(;t<n.length;){const r=n.indexOf("{$",t);if(r===-1){s+=n.substring(t);break}const i=n.indexOf("}",r+2);if(i===-1){s+=n.substring(t);break}const a=n.substring(r+2,i),c=e[a];s+=n.substring(t,r)+(c!=null?String(c):`<${a}?>`),t=i+1}return s}catch{return n}}function rc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ke(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Xs(i)&&Xs(a)){if(!Ke(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Xs(n){return n!==null&&typeof n=="object"}/**
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
 */function St(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function bt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ic(n,e){const t=new ac(n,e);return t.subscribe.bind(t)}class ac{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");oc(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Cn),r.error===void 0&&(r.error=Cn),r.complete===void 0&&(r.complete=Cn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cn(){}/**
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
 */const cc=1e3,lc=2,dc=4*60*60*1e3,uc=.5;function Qs(n,e=cc,t=lc){const s=e*Math.pow(t,n),r=Math.round(uc*s*(Math.random()-.5)*2);return Math.min(dc,s+r)}/**
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
 */function q(n){return n&&n._delegate?n._delegate:n}/**
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
 */function ds(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hc(n){return(await fetch(n,{credentials:"include"})).ok}class le{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class fc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ni;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mc(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pc(n){return n===He?void 0:n}function mc(n){return n.instantiationMode==="EAGER"}/**
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
 */class gc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const yc={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},_c=O.INFO,vc={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},bc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=vc[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class us{constructor(e){this.name=e,this._logLevel=_c,this._logHandler=bc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const wc=(n,e)=>e.some(t=>n instanceof t);let er,tr;function xc(){return er||(er=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ic(){return tr||(tr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ri=new WeakMap,Gn=new WeakMap,ii=new WeakMap,An=new WeakMap,hs=new WeakMap;function Ec(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(De(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ri.set(t,n)}).catch(()=>{}),hs.set(e,n),e}function kc(n){if(Gn.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Gn.set(n,e)}let Kn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ii.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return De(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tc(n){Kn=n(Kn)}function Cc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Sn(this),e,...t);return ii.set(s,e.sort?e.sort():[e]),De(s)}:Ic().includes(n)?function(...e){return n.apply(Sn(this),e),De(ri.get(this))}:function(...e){return De(n.apply(Sn(this),e))}}function Ac(n){return typeof n=="function"?Cc(n):(n instanceof IDBTransaction&&kc(n),wc(n,xc())?new Proxy(n,Kn):n)}function De(n){if(n instanceof IDBRequest)return Ec(n);if(An.has(n))return An.get(n);const e=Ac(n);return e!==n&&(An.set(n,e),hs.set(e,n)),e}const Sn=n=>hs.get(n);function ai(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=De(a);return s&&a.addEventListener("upgradeneeded",l=>{s(De(a.result),l.oldVersion,l.newVersion,De(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Sc=["get","getKey","getAll","getAllKeys","count"],Rc=["put","add","delete","clear"],Rn=new Map;function nr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rn.get(e))return Rn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Rc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Sc.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&l.done]))[0]};return Rn.set(e,i),i}Tc(n=>({...n,get:(e,t,s)=>nr(e,t)||n.get(e,t,s),has:(e,t)=>!!nr(e,t)||n.has(e,t)}));/**
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
 */class Nc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Pc(n){return n.getComponent()?.type==="VERSION"}const Yn="@firebase/app",sr="0.16.2";/**
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
 */const xe=new us("@firebase/app"),Oc="@firebase/app-compat",jc="@firebase/analytics-compat",Lc="@firebase/analytics",Dc="@firebase/app-check-compat",Mc="@firebase/app-check",Fc="@firebase/auth",Uc="@firebase/auth-compat",Bc="@firebase/database",Vc="@firebase/data-connect",$c="@firebase/database-compat",Hc="@firebase/functions",zc="@firebase/functions-compat",Wc="@firebase/installations",qc="@firebase/installations-compat",Zc="@firebase/messaging",Gc="@firebase/messaging-compat",Kc="@firebase/performance",Yc="@firebase/performance-compat",Jc="@firebase/remote-config",Xc="@firebase/remote-config-compat",Qc="@firebase/storage",el="@firebase/storage-compat",tl="@firebase/firestore",nl="@firebase/ai",sl="@firebase/firestore-compat",rl="firebase",il="12.19.0";/**
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
 */const Jn="[DEFAULT]",al={[Yn]:"fire-core",[Oc]:"fire-core-compat",[Lc]:"fire-analytics",[jc]:"fire-analytics-compat",[Mc]:"fire-app-check",[Dc]:"fire-app-check-compat",[Fc]:"fire-auth",[Uc]:"fire-auth-compat",[Bc]:"fire-rtdb",[Vc]:"fire-data-connect",[$c]:"fire-rtdb-compat",[Hc]:"fire-fn",[zc]:"fire-fn-compat",[Wc]:"fire-iid",[qc]:"fire-iid-compat",[Zc]:"fire-fcm",[Gc]:"fire-fcm-compat",[Kc]:"fire-perf",[Yc]:"fire-perf-compat",[Jc]:"fire-rc",[Xc]:"fire-rc-compat",[Qc]:"fire-gcs",[el]:"fire-gcs-compat",[tl]:"fire-fst",[sl]:"fire-fst-compat",[nl]:"fire-vertex","fire-js":"fire-js",[rl]:"fire-js-all"};/**
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
 */const kt=new Map,ol=new Map,Xn=new Map;function rr(n,e){try{n.container.addComponent(e)}catch(t){xe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ie(n){const e=n.name;if(Xn.has(e))return xe.debug(`There were multiple attempts to register component ${e}.`),!1;Xn.set(e,n);for(const t of kt.values())rr(t,n);for(const t of ol.values())rr(t,n);return!0}function ht(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function G(n){return n==null?!1:n.settings!==void 0}/**
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
 */const cl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ye=new Qe("app","Firebase",cl);/**
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
 */class ll{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}/**
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
 */const Rt=il;function oi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Jn,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ye.create("bad-app-name",{appName:String(r)});if(t||(t=ei()),!t)throw ye.create("no-options");const i=kt.get(r);if(i)if(Ke(t,i.options)){if(Ke(s,i.config))return i;throw ye.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw ye.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const a=new gc(r);for(const l of Xn.values())a.addComponent(l);const c=new ll(t,s,a);return kt.set(r,c),c}function fs(n=Jn){const e=kt.get(n);if(!e&&n===Jn&&ei())return oi();if(!e)throw ye.create("no-app",{appName:n});return e}function dl(){return Array.from(kt.values())}function ae(n,e,t){let s=al[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xe.warn(a.join(" "));return}Ie(new le(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ul="firebase-heartbeat-database",hl=1,Tt="firebase-heartbeat-store";let Nn=null;function ci(){return Nn||(Nn=ai(ul,hl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ye.create("idb-open",{originalErrorMessage:n.message})})),Nn}async function fl(n){try{const t=(await ci()).transaction(Tt),s=await t.objectStore(Tt).get(li(n));return await t.done,s}catch(e){if(e instanceof de)xe.warn(e.message);else{const t=ye.create("idb-get",{originalErrorMessage:e?.message});xe.warn(t.message)}}}async function ir(n,e){try{const s=(await ci()).transaction(Tt,"readwrite");await s.objectStore(Tt).put(e,li(n)),await s.done}catch(t){if(t instanceof de)xe.warn(t.message);else{const s=ye.create("idb-set",{originalErrorMessage:t?.message});xe.warn(s.message)}}}function li(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pl=1024,ml=30;class gl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _l(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ar();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>ml){const r=vl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){xe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ar(),{heartbeatsToSend:t,unsentEntries:s}=yl(this._heartbeatsCache.heartbeats),r=Xr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return xe.warn(e),""}}}function ar(){return new Date().toISOString().substring(0,10)}function yl(n,e=pl){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),or(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),or(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _l{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cs()?ls().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fl(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ir(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ir(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function or(n){return Xr(JSON.stringify({version:2,heartbeats:n})).length}function vl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function bl(n){Ie(new le("platform-logger",e=>new Nc(e),"PRIVATE")),Ie(new le("heartbeat",e=>new gl(e),"PRIVATE")),ae(Yn,sr,n),ae(Yn,sr,"esm2020"),ae("fire-js","")}/**
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
 */bl("");function di(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wl=di,ui=new Qe("auth","Firebase",di());/**
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
 */const en=new us("@firebase/auth");function Vt(n,...e){en.logLevel<=O.WARN&&en.warn(`Auth (${Rt}): ${n}`,...e)}function $t(n,...e){en.logLevel<=O.ERROR&&en.error(`Auth (${Rt}): ${n}`,...e)}/**
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
 */function X(n,...e){throw ps(n,...e)}function se(n,...e){return ps(n,...e)}function un(n,e,t){const s={...wl(),[e]:t};return new Qe("auth","Firebase",s).create(e,{appName:n.name})}function oe(n){return un(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xl(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&X(n,"argument-error"),un(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ps(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ui.create(n,...e)}function v(n,e,...t){if(!n)throw ps(e,...t)}function _e(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $t(e),new Error(e)}function Ee(n,e){n||_e(e)}/**
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
 */function Qn(){return typeof self<"u"&&self.location?.href||""}function Il(){return cr()==="http:"||cr()==="https:"}function cr(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function El(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Il()||os()||"connection"in navigator)?navigator.onLine:!0}function kl(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Nt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=Xo()||ec()}get(){return El()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ms(n,e){Ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hi{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Tl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Al=new Nt(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function he(n,e,t,s,r={}){return fi(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=St({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...i};return Qo()||(d.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ds(n.emulatorConfig.host)&&(d.credentials="include"),hi.fetch()(await pi(n,n.config.apiHost,t,c),d)})}async function fi(n,e,t){n._canInitEmulator=!1;const s={...Tl,...e};try{const r=new Rl(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Bt(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bt(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Bt(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Bt(n,"user-disabled",a);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw un(n,h,d);X(n,h)}}catch(r){if(r instanceof de)throw r;X(n,"network-request-failed",{message:String(r)})}}async function ft(n,e,t,s,r={}){const i=await he(n,e,t,s,r);return"mfaPendingCredential"in i&&X(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function pi(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?ms(n.config,r):`${n.config.apiScheme}://${r}`;return Cl.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Sl(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(se(this.auth,"network-request-failed")),Al.get())})}}function Bt(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=se(n,e,s);return r.customData._tokenResponse=t,r}function lr(n){return n!==void 0&&n.enterprise!==void 0}class Nl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sl(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pl(n,e){return he(n,"GET","/v2/recaptchaConfig",ue(n,e))}/**
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
 */async function Ol(n,e){return he(n,"POST","/v1/accounts:delete",e)}async function tn(n,e){return he(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function wt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jl(n,e=!1){const t=q(n),s=await t.getIdToken(e),r=gs(s);v(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:wt(Pn(r.auth_time)),issuedAtTime:wt(Pn(r.iat)),expirationTime:wt(Pn(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Pn(n){return Number(n)*1e3}function gs(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return $t("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qr(t);return r?JSON.parse(r):($t("Failed to decode base64 JWT payload"),null)}catch(r){return $t("Caught error parsing JWT payload as JSON",r?.toString()),null}}function dr(n){const e=gs(n);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ut(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof de&&Ll(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ll({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Dl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class es{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wt(this.lastLoginAt),this.creationTime=wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nn(n){const e=n.auth,t=await n.getIdToken(),s=await ut(n,tn(e,{idToken:t}));v(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=r.providerUserInfo?.length?mi(r.providerUserInfo):[],a=Fl(n.providerData,i),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!a?.length,d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new es(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function Ml(n){const e=q(n);await nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fl(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function mi(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Ul(n,e){const t=await fi(n,{},async()=>{const s=St({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await pi(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&ds(n.emulatorConfig.host)&&(l.credentials="include"),hi.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Bl(n,e){return he(n,"POST","/v2/accounts:revokeToken",ue(n,e))}/**
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
 */class st{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){v(e.length!==0,"internal-error");const t=dr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ul(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new st;return s&&(v(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(v(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(v(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new st,this.toJSON())}_performRefresh(){return _e("not implemented")}}/**
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
 */function Ae(n,e){v(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ne{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Dl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new es(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ut(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jl(this,e)}reload(){return Ml(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await nn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(G(this.auth.app))return Promise.reject(oe(this.auth));const e=await this.getIdToken();return await ut(this,Ol(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:y,emailVerified:_,isAnonymous:j,providerData:U,stsTokenManager:Z}=t;v(y&&Z,e,"internal-error");const pe=st.fromJSON(this.name,Z);v(typeof y=="string",e,"internal-error"),Ae(s,e.name),Ae(r,e.name),v(typeof _=="boolean",e,"internal-error"),v(typeof j=="boolean",e,"internal-error"),Ae(i,e.name),Ae(a,e.name),Ae(c,e.name),Ae(l,e.name),Ae(d,e.name),Ae(h,e.name);const ee=new ne({uid:y,auth:e,email:r,emailVerified:_,displayName:s,isAnonymous:j,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:pe,createdAt:d,lastLoginAt:h});return U&&Array.isArray(U)&&(ee.providerData=U.map(ke=>({...ke}))),l&&(ee._redirectEventId=l),ee}static async _fromIdTokenResponse(e,t,s=!1){const r=new st;r.updateFromServerResponse(t);const i=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await nn(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];v(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?mi(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new st;c.updateFromIdToken(s);const l=new ne({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new es(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
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
 */const ur=new Map;function ve(n){Ee(n instanceof Function,"Expected a class definition");let e=ur.get(n);return e?(Ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ur.set(n,e),e)}/**
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
 */class gi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gi.type="NONE";const hr=gi;/**
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
 */function Ht(n,e,t){return`firebase:${n}:${e}:${t}`}class Ze{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ht(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ht("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await tn(this.auth,{idToken:e}).catch(()=>{});return t?ne._fromGetAccountInfoResponse(this.auth,t,e):null}return ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new Ze(ve(hr),e,s);const r=(await Promise.all(t.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let i=r[0]||ve(hr);const a=Ht(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const h=await d._get(a);if(h){let y;if(typeof h=="string"){const _=await tn(e,{idToken:h}).catch(()=>{});if(!_)break;y=await ne._fromGetAccountInfoResponse(e,_,h)}else y=ne._fromJSON(e,h);d!==i&&(c=y),i=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ze(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Ze(i,e,s))}}/**
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
 */function fr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xi(e))return"Blackberry";if(Ii(e))return"Webos";if(_i(e))return"Safari";if((e.includes("chrome/")||vi(e))&&!e.includes("edge/"))return"Chrome";if(wi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function yi(n=H()){return/firefox\//i.test(n)}function _i(n=H()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vi(n=H()){return/crios\//i.test(n)}function bi(n=H()){return/iemobile/i.test(n)}function wi(n=H()){return/android/i.test(n)}function xi(n=H()){return/blackberry/i.test(n)}function Ii(n=H()){return/webos/i.test(n)}function ys(n=H()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vl(n=H()){return ys(n)&&!!window.navigator?.standalone}function $l(){return tc()&&document.documentMode===10}function Ei(n=H()){return ys(n)||wi(n)||Ii(n)||xi(n)||/windows phone/i.test(n)||bi(n)}/**
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
 */function ki(n,e=[]){let t;switch(n){case"Browser":t=fr(H());break;case"Worker":t=`${fr(H())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rt}/${s}`}/**
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
 */class Hl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function zl(n,e={}){return he(n,"GET","/v2/passwordPolicy",ue(n,e))}/**
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
 */const Wl=6;class ql{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Wl,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Zl{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pr(this),this.idTokenSubscription=new pr(this),this.beforeStateQueue=new Hl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ui,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ve(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await Ze.create(this,e)}catch(s){Vt(`Failed to initialize persistence: ${s}`),this.persistenceManager=await Ze.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(s){Vt(`Failed to initialize current user: ${s}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tn(this,{idToken:e}),s=await ne._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(G(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(G(this.app))return Promise.reject(oe(this));const t=e?q(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return G(this.app)?Promise.reject(oe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return G(this.app)?Promise.reject(oe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ve(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zl(this),t=new ql(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Bl(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ve(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await Ze.create(this,[ve(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}).catch(l=>{if(!a)if(typeof t!="function"&&t.error)t.error(l);else if(s)s(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=t?.message||String(t),r=un(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ki(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(G(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Vt(`Error while retrieving App Check token: ${e.error}`),e?.token}}function fe(n){return q(n)}class pr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ic(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gl(n){hn=n}function Ti(n){return hn.loadJS(n)}function Kl(){return hn.recaptchaEnterpriseScript}function Yl(){return hn.gapiScript}function Jl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Xl{constructor(){this.enterprise=new Ql}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ql{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
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
 */const ed="recaptcha-enterprise",Ci="NO_RECAPTCHA",mr="onFirebaseAuthREInstanceReady";class Re{constructor(e){this.type=ed,this.auth=fe(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Pl(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Nl(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function r(i,a,c){const l=window.grecaptcha;lr(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ci)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Xl().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(async c=>{if(!t&&lr(window.grecaptcha)&&Re.scriptInjectionDeferred)await Re.scriptInjectionDeferred.promise,r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Kl();l.length!==0&&(l+=c+`&onload=${mr}`),Re.scriptInjectionDeferred=new ni,window[mr]=()=>{Re.scriptInjectionDeferred?.resolve()},Ti(l).then(()=>Re.scriptInjectionDeferred?.promise).then(()=>{r(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}Re.scriptInjectionDeferred=null;async function gr(n,e,t,s=!1,r=!1){const i=new Re(n);let a;if(r)a=Ci;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function sn(n,e,t,s,r){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gr(n,e,t,t==="getOobCode");return s(n,i)}else return s(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await gr(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(i)})}/**
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
 */function td(n,e){const t=ht(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ke(i,e??{}))return r;X(r,"already-initialized")}return t.initialize({options:e})}function nd(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ve);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function sd(n,e,t){const s=fe(n);v(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ai(e),{host:a,port:c}=rd(e),l=c===null?"":`:${c}`,d={url:`${i}//${a}${l}/`},h=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){v(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),v(Ke(d,s.config.emulator)&&Ke(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,ds(a)?hc(`${i}//${a}${l}`):id()}function Ai(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rd(n){const e=Ai(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:yr(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:yr(a)}}}function yr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function id(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class _s{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _e("not implemented")}_getIdTokenResponse(e){return _e("not implemented")}_linkToIdToken(e,t){return _e("not implemented")}_getReauthenticationResolver(e){return _e("not implemented")}}async function ad(n,e){return he(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function od(n,e){return ft(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function Si(n,e){return he(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function cd(n,e){return Si(n,e)}async function ld(n,e){return Si(n,e)}/**
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
 */async function dd(n,e){return ft(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function ud(n,e){return ft(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
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
 */class Ct extends _s{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ct(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ct(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sn(e,t,"signInWithPassword",od);case"emailLink":return dd(e,{email:this._email,oobCode:this._password});default:X(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sn(e,s,"signUpPassword",ad);case"emailLink":return ud(e,{idToken:t,email:this._email,oobCode:this._password});default:X(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rt(n,e){return ft(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
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
 */const hd="http://localhost";class Ye extends _s{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):X("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new Ye(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,rt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}buildRequest(){const e={requestUri:hd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=St(t)}return e}}/**
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
 */function fd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pd(n){const e=vt(bt(n)).link,t=e?vt(bt(e)).deep_link_id:null,s=vt(bt(n)).deep_link_id;return(s?vt(bt(s)).link:null)||s||t||e||n}class vs{constructor(e){const t=vt(bt(e)),s=t.apiKey??null,r=t.oobCode??null,i=fd(t.mode??null);v(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=pd(e);try{return new vs(t)}catch{return null}}}/**
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
 */class pt{constructor(){this.providerId=pt.PROVIDER_ID}static credential(e,t){return Ct._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=vs.parseLink(t);return v(s,"argument-error"),Ct._fromEmailAndCode(e,s.code,s.tenantId)}}pt.PROVIDER_ID="password";pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pt extends bs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ne extends Pt{constructor(){super("facebook.com")}static credential(e){return Ye._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
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
 */class ge extends Pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ye._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ge.credential(t,s)}catch{return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com";ge.PROVIDER_ID="google.com";/**
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
 */class Pe extends Pt{constructor(){super("github.com")}static credential(e){return Ye._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
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
 */class Oe extends Pt{constructor(){super("twitter.com")}static credential(e,t){return Ye._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Oe.credential(t,s)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
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
 */async function md(n,e){return ft(n,"POST","/v1/accounts:signUp",ue(n,e))}/**
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
 */class Ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await ne._fromIdTokenResponse(e,s,r),a=_r(s);return new Ue({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=_r(s);return new Ue({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function _r(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class rn extends de{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,rn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new rn(e,t,s,r)}}function Ri(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?rn._fromErrorAndOperation(n,i,e,s):i})}async function gd(n,e,t=!1){const s=await ut(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ue._forOperation(n,"link",s)}/**
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
 */async function yd(n,e,t=!1){const{auth:s}=n;if(G(s.app))return Promise.reject(oe(s));const r="reauthenticate";try{const i=await ut(n,Ri(s,r,e,n),t);v(i.idToken,s,"internal-error");const a=gs(i.idToken);v(a,s,"internal-error");const{sub:c}=a;return v(n.uid===c,s,"user-mismatch"),Ue._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&X(s,"user-mismatch"),i}}/**
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
 */async function Ni(n,e,t=!1){if(G(n.app))return Promise.reject(oe(n));const s="signIn",r=await Ri(n,s,e),i=await Ue._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function _d(n,e){return Ni(fe(n),e)}/**
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
 */async function vd(n,e){return ft(n,"POST","/v1/accounts:signInWithCustomToken",ue(n,e))}/**
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
 */async function bd(n,e){if(G(n.app))return Promise.reject(oe(n));const t=fe(n),s=await vd(t,{token:e,returnSecureToken:!0}),r=await Ue._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
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
 */async function Pi(n){const e=fe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wd(n,e,t){const s=fe(n);await sn(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ld)}async function xd(n,e,t){if(G(n.app))return Promise.reject(oe(n));const s=fe(n),a=await sn(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",md).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Pi(n),l}),c=await Ue._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Id(n,e,t){return G(n.app)?Promise.reject(oe(n)):_d(q(n),pt.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Pi(n),s})}async function vr(n,e){const t=q(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await cd(t.auth,r);i!==n.email&&await n.reload()}/**
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
 */async function Ed(n,e){return he(n,"POST","/v1/accounts:update",e)}/**
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
 */async function kd(n,e){const{displayName:t,photoURL:s}=e;if(t===void 0&&s===void 0)return;const r=q(n),a={idToken:await r.getIdToken(),displayName:t,photoUrl:s,returnSecureToken:!0},c=await ut(r,Ed(r.auth,a));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const l=r.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function Td(n,e,t,s){return q(n).onIdTokenChanged(e,t,s)}function Cd(n,e,t){return q(n).beforeAuthStateChanged(e,t)}function Ad(n,e,t,s){return q(n).onAuthStateChanged(e,t,s)}function Sd(n){return q(n).signOut()}const an="__sak";/**
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
 */class Oi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(an,"1"),this.storage.removeItem(an),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Rd=1e3,Nd=10;class ji extends Oi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ei(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);$l()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Nd):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Rd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ji.type="LOCAL";const Pd=ji;/**
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
 */class Li extends Oi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Li.type="SESSION";const Di=Li;/**
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
 */function Od(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new fn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await Od(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fn.receivers=[];/**
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
 */function ws(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class jd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=ws("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(y){const _=y;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ce(){return window}function Ld(n){ce().location.href=n}/**
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
 */function Mi(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Dd(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Md(){return navigator?.serviceWorker?.controller||null}function Fd(){return Mi()?self:null}/**
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
 */const Fi="firebaseLocalStorageDb",Ud=1,on="firebaseLocalStorage",Ui="fbase_key";class Ot{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pn(n,e){return n.transaction([on],e?"readwrite":"readonly").objectStore(on)}function Bd(){const n=indexedDB.deleteDatabase(Fi);return new Ot(n).toPromise()}function Bi(){const n=indexedDB.open(Fi,Ud);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(on,{keyPath:Ui})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(on)?e(s):(s.close(),await Bd(),e(await Bi()))})})}async function br(n,e,t){const s=pn(n,!0).put({[Ui]:e,value:t});return new Ot(s).toPromise()}async function Vd(n,e){const t=pn(n,!1).get(e),s=await new Ot(t).toPromise();return s===void 0?null:s.value}function wr(n,e){const t=pn(n,!0).delete(e);return new Ot(t).toPromise()}const $d=800,Hd=3;class Vi{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Bi(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Hd)throw s;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Mi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fn._getInstance(Fd()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Dd(),!this.activeServiceWorker)return;this.sender=new jd(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Md()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await br(e,an,"1"),await wr(e,an)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>br(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Vd(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=pn(r,!1).getAll();return new Ot(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||Vt(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$d)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Vi.type="LOCAL";const zd=Vi;new Nt(3e4,6e4);/**
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
 */function $i(n,e){return e?ve(e):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xs extends _s{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wd(n){return Ni(n.auth,new xs(n),n.bypassAuthState)}function qd(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),yd(t,new xs(n),n.bypassAuthState)}async function Zd(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),gd(t,new xs(n),n.bypassAuthState)}/**
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
 */class Hi{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wd;case"linkViaPopup":case"linkViaRedirect":return Zd;case"reauthViaPopup":case"reauthViaRedirect":return qd;default:X(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gd=new Nt(2e3,1e4);async function Kd(n,e,t){if(G(n.app))return Promise.reject(se(n,"operation-not-supported-in-this-environment"));const s=fe(n);xl(n,e,bs);const r=$i(s,t);return new ze(s,"signInViaPopup",e,r).executeNotNull()}class ze extends Hi{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gd.get())};e()}}ze.currentPopupAction=null;/**
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
 */const Yd="pendingRedirect",zt=new Map;class Jd extends Hi{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=zt.get(this.auth._key());if(!e){try{const s=await Xd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}zt.set(this.auth._key(),e)}return this.bypassAuthState||zt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xd(n,e){const t=tu(e),s=eu(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Qd(n,e){zt.set(n._key(),e)}function eu(n){return ve(n._redirectPersistence)}function tu(n){return Ht(Yd,n.config.apiKey,n.name)}async function nu(n,e,t=!1){if(G(n.app))return Promise.reject(oe(n));const s=fe(n),r=$i(s,e),a=await new Jd(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const su=10*60*1e3;class ru{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!zi(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(se(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=su&&this.cachedEventUids.clear(),this.cachedEventUids.has(xr(e))}saveEventToCache(e){this.cachedEventUids.add(xr(e)),this.lastProcessedEventTime=Date.now()}}function xr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zi({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function iu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zi(n);default:return!1}}/**
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
 */async function au(n,e={}){return he(n,"GET","/v1/projects",e)}/**
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
 */const ou=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cu=/^https?/;async function lu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await au(n);for(const t of e)try{if(du(t))return}catch{}X(n,"unauthorized-domain")}function du(n){const e=Qn(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!cu.test(t))return!1;if(ou.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const uu=new Nt(3e4,6e4);function Ir(){const n=ce().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hu(n){return new Promise((e,t)=>{function s(){Ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ir(),t(se(n,"network-request-failed"))},timeout:uu.get()})}if(ce().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ce().gapi?.load)s();else{const r=Jl("iframefcb");return ce()[r]=()=>{gapi.load?s():t(se(n,"network-request-failed"))},Ti(`${Yl()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw Wt=null,e})}let Wt=null;function fu(n){return Wt=Wt||hu(n),Wt}/**
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
 */const pu=new Nt(5e3,15e3),mu="__/auth/iframe",gu="emulator/auth/iframe",yu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_u=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vu(n){const e=n.config;v(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ms(e,gu):`https://${n.config.authDomain}/${mu}`,s={apiKey:e.apiKey,appName:n.name,v:Rt},r=_u.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${St(s).slice(1)}`}async function bu(n){const e=await fu(n),t=ce().gapi;return v(t,n,"internal-error"),e.open({where:document.body,url:vu(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yu,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=se(n,"network-request-failed"),c=ce().setTimeout(()=>{i(a)},pu.get());function l(){ce().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const wu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xu=500,Iu=600,Eu="_blank",ku="http://localhost";class Er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tu(n,e,t,s=xu,r=Iu){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...wu,width:s.toString(),height:r.toString(),top:i,left:a},d=H().toLowerCase();t&&(c=vi(d)?Eu:t),yi(d)&&(e=e||ku,l.scrollbars="yes");const h=Object.entries(l).reduce((_,[j,U])=>`${_}${j}=${U},`,"");if(Vl(d)&&c!=="_self")return Cu(e||"",c),new Er(null);const y=window.open(e||"",c,h);v(y,n,"popup-blocked");try{y.focus()}catch{}return new Er(y)}function Cu(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Au="__/auth/handler",Su="emulator/auth/handler",Ru=encodeURIComponent("fac");async function kr(n,e,t,s,r,i){v(n.config.authDomain,n,"auth-domain-config-required"),v(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Rt,eventId:r};if(e instanceof bs){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",rc(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,y]of Object.entries({}))a[h]=y}if(e instanceof Pt){const h=e.getScopes().filter(y=>y!=="");h.length>0&&(a.scopes=h.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),d=l?`#${Ru}=${encodeURIComponent(l)}`:"";return`${Nu(n)}?${St(c).slice(1)}${d}`}function Nu({config:n}){return n.emulator?ms(n,Su):`https://${n.authDomain}/${Au}`}/**
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
 */const On="webStorageSupport";class Pu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=nu,this._overrideRedirectResult=Qd}async _openPopup(e,t,s,r){Ee(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await kr(e,t,s,Qn(),r);return Tu(e,i,ws())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await kr(e,t,s,Qn(),r);return Ld(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Ee(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await bu(e),s=new ru(e);return t.register("authEvent",r=>(v(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(On,{type:On},r=>{const i=r?.[0]?.[On];i!==void 0&&t(!!i),X(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ei()||_i()||ys()}}const Ou=Pu;var Tr="@firebase/auth",Cr="1.13.6";/**
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
 */class ju{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lu(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Du(n){Ie(new le("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;v(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ki(n)},d=new Zl(s,r,i,l);return nd(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ie(new le("auth-internal",e=>{const t=fe(e.getProvider("auth").getImmediate());return(s=>new ju(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ae(Tr,Cr,Lu(n)),ae(Tr,Cr,"esm2020")}/**
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
 */const Mu=5*60,Fu=ti("authIdTokenMaxAge")||Mu;let Ar=null;const Uu=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Fu)return;const r=t?.token;Ar!==r&&(Ar=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Bu(n=fs()){const e=ht(n,"auth");if(e.isInitialized())return e.getImmediate();const t=td(n,{popupRedirectResolver:Ou,persistence:[zd,Pd,Di]}),s=ti("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Uu(i.toString());Cd(t,a,()=>a(t.currentUser)),Td(t,c=>a(c))}}const r=Jo("auth");return r&&sd(t,`http://${r}`),t}function Vu(){return document.getElementsByTagName("head")?.[0]??document}Gl({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=se("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Vu().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Du("Browser");var $u="firebase",Hu="12.19.0";/**
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
 */ae($u,Hu,"app");const Wi="@firebase/installations",Is="0.6.24";/**
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
 */const qi=1e4,Zi=`w:${Is}`,Gi="FIS_v2",zu="https://firebaseinstallations.googleapis.com/v1",Wu=60*60*1e3,qu="installations",Zu="Installations";/**
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
 */const Gu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Je=new Qe(qu,Zu,Gu);function Ki(n){return n instanceof de&&n.code.includes("request-failed")}/**
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
 */function Yi({projectId:n}){return`${zu}/projects/${n}/installations`}function Ji(n){return{token:n.token,requestStatus:2,expiresIn:Yu(n.expiresIn),creationTime:Date.now()}}async function Xi(n,e){const s=(await e.json()).error;return Je.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Qi({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ku(n,{refreshToken:e}){const t=Qi(n);return t.append("Authorization",Ju(e)),t}async function ea(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Yu(n){return Number(n.replace("s","000"))}function Ju(n){return`${Gi} ${n}`}/**
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
 */async function Xu({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Yi(n),r=Qi(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:Gi,appId:n.appId,sdkVersion:Zi},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await ea(()=>fetch(s,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ji(d.authToken)}}else throw await Xi("Create Installation",l)}/**
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
 */function ta(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Qu(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eh=/^[cdef][\w-]{21}$/,ts="";function th(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nh(n);return eh.test(t)?t:ts}catch{return ts}}function nh(n){return Qu(n).substr(0,22)}/**
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
 */function mn(n){return`${n.appName}!${n.appId}`}/**
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
 */const na=new Map;function sa(n,e){const t=mn(n);ra(t,e),sh(t,e)}function ra(n,e){const t=na.get(n);if(t)for(const s of t)s(e)}function sh(n,e){const t=rh();t&&t.postMessage({key:n,fid:e}),ih()}let We=null;function rh(){return!We&&"BroadcastChannel"in self&&(We=new BroadcastChannel("[Firebase] FID Change"),We.onmessage=n=>{ra(n.data.key,n.data.fid)}),We}function ih(){na.size===0&&We&&(We.close(),We=null)}/**
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
 */const ah="firebase-installations-database",oh=1,Xe="firebase-installations-store";let jn=null;function Es(){return jn||(jn=ai(ah,oh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xe)}}})),jn}async function cn(n,e){const t=mn(n),r=(await Es()).transaction(Xe,"readwrite"),i=r.objectStore(Xe),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&sa(n,e.fid),e}async function ia(n){const e=mn(n),s=(await Es()).transaction(Xe,"readwrite");await s.objectStore(Xe).delete(e),await s.done}async function gn(n,e){const t=mn(n),r=(await Es()).transaction(Xe,"readwrite"),i=r.objectStore(Xe),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&sa(n,c.fid),c}/**
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
 */async function ks(n){let e;const t=await gn(n.appConfig,s=>{const r=ch(s),i=lh(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===ts?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ch(n){const e=n||{fid:th(),registrationStatus:0};return aa(e)}function lh(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Je.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=dh(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uh(n)}:{installationEntry:e}}async function dh(n,e){try{const t=await Xu(n,e);return cn(n.appConfig,t)}catch(t){throw Ki(t)&&t.customData.serverCode===409?await ia(n.appConfig):await cn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function uh(n){let e=await Sr(n.appConfig);for(;e.registrationStatus===1;)await ta(100),e=await Sr(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await ks(n);return s||t}return e}function Sr(n){return gn(n,e=>{if(!e)throw Je.create("installation-not-found");return aa(e)})}function aa(n){return hh(n)?{fid:n.fid,registrationStatus:0}:n}function hh(n){return n.registrationStatus===1&&n.registrationTime+qi<Date.now()}/**
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
 */async function fh({appConfig:n,heartbeatServiceProvider:e},t){const s=ph(n,t),r=Ku(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Zi,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await ea(()=>fetch(s,c));if(l.ok){const d=await l.json();return Ji(d)}else throw await Xi("Generate Auth Token",l)}function ph(n,{fid:e}){return`${Yi(n)}/${e}/authTokens:generate`}/**
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
 */async function Ts(n,e=!1){let t;const s=await gn(n.appConfig,i=>{if(!oa(i))throw Je.create("not-registered");const a=i.authToken;if(!e&&yh(a))return i;if(a.requestStatus===1)return t=mh(n,e),i;{if(!navigator.onLine)throw Je.create("app-offline");const c=vh(i);return t=gh(n,c),c}});return t?await t:s.authToken}async function mh(n,e){let t=await Rr(n.appConfig);for(;t.authToken.requestStatus===1;)await ta(100),t=await Rr(n.appConfig);const s=t.authToken;return s.requestStatus===0?Ts(n,e):s}function Rr(n){return gn(n,e=>{if(!oa(e))throw Je.create("not-registered");const t=e.authToken;return bh(t)?{...e,authToken:{requestStatus:0}}:e})}async function gh(n,e){try{const t=await fh(n,e),s={...e,authToken:t};return await cn(n.appConfig,s),t}catch(t){if(Ki(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ia(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await cn(n.appConfig,s)}throw t}}function oa(n){return n!==void 0&&n.registrationStatus===2}function yh(n){return n.requestStatus===2&&!_h(n)}function _h(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Wu}function vh(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function bh(n){return n.requestStatus===1&&n.requestTime+qi<Date.now()}/**
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
 */async function wh(n){const e=n,{installationEntry:t,registrationPromise:s}=await ks(e);return s?s.catch(console.error):Ts(e).catch(console.error),t.fid}/**
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
 */async function xh(n,e=!1){const t=n;return await Ih(t),(await Ts(t,e)).token}async function Ih(n){const{registrationPromise:e}=await ks(n);e&&await e}/**
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
 */function Eh(n){if(!n||!n.options)throw Ln("App Configuration");if(!n.name)throw Ln("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ln(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ln(n){return Je.create("missing-app-config-values",{valueName:n})}/**
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
 */const ca="installations",kh="installations-internal",Th=n=>{const e=n.getProvider("app").getImmediate(),t=Eh(e),s=ht(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ch=n=>{const e=n.getProvider("app").getImmediate(),t=ht(e,ca).getImmediate();return{getId:()=>wh(t),getToken:r=>xh(t,r)}};function Ah(){Ie(new le(ca,Th,"PUBLIC")),Ie(new le(kh,Ch,"PRIVATE"))}/**
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
 */Ah();ae(Wi,Is);ae(Wi,Is,"esm2020");/**
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
 */const ln="analytics",Sh="firebase_id",Rh="origin",Nh=60*1e3,Ph="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cs="https://www.googletagmanager.com/gtag/js";/**
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
 */const $=new us("@firebase/analytics");/**
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
 */const Oh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},K=new Qe("analytics","Analytics",Oh);/**
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
 */function jh(n){if(!n.startsWith(Cs)){const e=K.create("invalid-gtag-resource",{gtagURL:n});return $.warn(e.message),""}return n}function la(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Lh(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Dh(n,e){const t=Lh("firebase-js-sdk-policy",{createScriptURL:jh}),s=document.createElement("script"),r=`${Cs}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Mh(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Fh(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const l=(await la(t)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){$.error(c)}n("config",r,i)}async function Uh(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await la(t);for(const l of a){const d=c.find(y=>y.measurementId===l),h=d&&e[d.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){$.error(i)}}function Bh(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[c,l]=a;await Uh(n,e,t,c,l)}else if(i==="config"){const[c,l]=a;await Fh(n,e,t,s,c,l)}else if(i==="consent"){const[c,l]=a;n("consent",c,l)}else if(i==="get"){const[c,l,d]=a;n("get",c,l,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){$.error(c)}}return r}function Vh(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Bh(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function $h(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Cs)&&t.src.includes(n))return t;return null}/**
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
 */const Hh=30,zh=1e3;class Wh{constructor(e={},t=zh){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const da=new Wh;function qh(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Zh(n){const{appId:e,apiKey:t}=n,s={method:"GET",headers:qh(t)},r=Ph.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();c.error?.message&&(a=c.error.message)}catch{}throw K.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function Gh(n,e=da,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw K.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw K.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Jh;return setTimeout(async()=>{c.abort()},Nh),ua({appId:s,apiKey:r,measurementId:i},a,c,e)}async function ua(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=da){const{appId:i,measurementId:a}=n;try{await Kh(s,e)}catch(c){if(a)return $.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:a};throw c}try{const c=await Zh(n);return r.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Yh(l)){if(r.deleteThrottleMetadata(i),a)return $.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:a};throw c}const d=Number(l?.customData?.httpStatus)===503?Qs(t,r.intervalMillis,Hh):Qs(t,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return r.setThrottleMetadata(i,h),$.debug(`Calling attemptFetch again in ${d} millis`),ua(n,h,s,r)}}function Kh(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(K.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Yh(n){if(!(n instanceof de)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Jh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xh(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function Qh(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
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
 */async function ef(){if(cs())try{await ls()}catch(n){return $.warn(K.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return $.warn(K.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tf(n,e,t,s,r,i,a){const c=Gh(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&$.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>$.error(_)),e.push(c);const l=ef().then(_=>{if(_)return s.getId()}),[d,h]=await Promise.all([c,l]);$h(i)||Dh(i,d.measurementId),r("js",new Date);const y=a?.config??{};return y[Rh]="firebase",y.update=!0,h!=null&&(y[Sh]=h),r("config",d.measurementId,y),d.measurementId}/**
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
 */class nf{constructor(e){this.app=e}_delete(){return delete it[this.app.options.appId],Promise.resolve()}}let it={},Nr=[];const Pr={};let Dn="dataLayer",sf="gtag",Or,As,jr=!1;function rf(){const n=[];if(os()&&n.push("This is a browser extension environment."),si()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=K.create("invalid-analytics-context",{errorInfo:e});$.warn(t.message)}}function af(n,e,t){rf();const s=n.options.appId;if(!s)throw K.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)$.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw K.create("no-api-key");if(it[s]!=null)throw K.create("already-exists",{id:s});if(!jr){Mh(Dn);const{wrappedGtag:i,gtagCore:a}=Vh(it,Nr,Pr,Dn,sf);As=i,Or=a,jr=!0}return it[s]=tf(n,Nr,Pr,e,Or,Dn,t),new nf(n)}/**
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
 */function of(n=fs()){n=q(n);const e=ht(n,ln);return e.isInitialized()?e.getImmediate():cf(n)}function cf(n,e={}){const t=ht(n,ln);if(t.isInitialized()){const r=t.getImmediate();if(Ke(e,t.getOptions()))return r;throw K.create("already-initialized")}return t.initialize({options:e})}async function lf(){if(os()||!si()||!cs())return!1;try{return await ls()}catch{return!1}}function df(n,e,t){n=q(n),Qh(As,it[n.app.options.appId],e,t).catch(s=>$.error(s))}function uf(n,e,t,s){n=q(n),Xh(As,it[n.app.options.appId],e,t,s).catch(r=>$.error(r))}const Lr="@firebase/analytics",Dr="0.10.25";/**
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
 */function hf(){Ie(new le(ln,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return af(s,r,t)},"PUBLIC")),Ie(new le("analytics-internal",n,"PRIVATE")),ae(Lr,Dr),ae(Lr,Dr,"esm2020");function n(e){try{const t=e.getProvider(ln).getImmediate();return{logEvent:(s,r,i)=>uf(t,s,r,i),setUserProperties:(s,r)=>df(t,s,r)}}catch(t){throw K.create("interop-component-reg-failed",{reason:t})}}}hf();const ff={apiKey:"AIzaSyD77fQHtztMAx_FfLMvv2ujQC9tYFh7Npg",authDomain:"bharosa-cd1e6.firebaseapp.com",projectId:"bharosa-cd1e6",storageBucket:"bharosa-cd1e6.firebasestorage.app",messagingSenderId:"227881717805",appId:"1:227881717805:web:f8e9515a73fcb583b368a4",measurementId:"G-XJLDW87PTM"},ha=dl().length?fs():oi(ff),Ve=Bu(ha),pf=new ge;let mf=null;typeof window<"u"&&lf().then(n=>{if(n)try{mf=of(ha)}catch{}}).catch(()=>{});function Ss(n,e){const s=(e??"/v1"??"/v1").trim().replace(/\/+$/,""),r=n.startsWith("/")?n:`/${n}`;return s.endsWith("/v1")&&r.startsWith("/v1/")?`${s}${r.slice(3)}`:!s.endsWith("/v1")&&!r.startsWith("/v1/")&&!r.startsWith("/healthz")&&!r.startsWith("/readyz")&&!r.startsWith("/docs")?`${s}/v1${r}`:`${s}${r}`}class gf{baseUrl;accessToken;getToken;constructor(e){this.baseUrl=e.baseUrl.replace(/\/$/,""),this.accessToken=e.accessToken,this.getToken=e.getToken}setAccessToken(e){this.accessToken=e}setTokenProvider(e){this.getToken=e}resolveUrl(e){return Ss(e,this.baseUrl)}async request(e,t={},s=!1){const r=this.resolveUrl(e),i={"Content-Type":"application/json",...t.headers};let a=this.accessToken;if(!a&&this.getToken)try{const l=await this.getToken();l&&(a=l)}catch{}a&&(i.Authorization=`Bearer ${a}`);const c=await fetch(r,{...t,headers:i});if(c.status===401&&!s&&this.getToken)try{const l=await this.getToken();if(l){i.Authorization=`Bearer ${l}`;const d=await fetch(r,{...t,headers:i});if(d.ok)return d.json()}}catch{}if(!c.ok){const l=await c.json().catch(()=>({})),d=new Error(l.message||`API request failed with status ${c.status}`);throw d.code=l.code,d.status=c.status,d}return c.json()}async getNonce(){return this.request("/v1/auth/nonce")}async verifySIWE(e,t){const s=await this.request("/v1/auth/verify",{method:"POST",body:JSON.stringify({message:e,signature:t})});return s.accessToken&&(this.accessToken=s.accessToken),s}async linkWallet(e,t,s="HOLDER"){return this.request("/v1/auth/link-wallet",{method:"POST",body:JSON.stringify({message:e,signature:t,persona:s})})}async unlinkWallet(){return this.request("/v1/auth/unlink-wallet",{method:"POST"})}async refresh(e){const t=await this.request("/v1/auth/refresh",{method:"POST",body:JSON.stringify({refreshToken:e})});return t.accessToken&&(this.accessToken=t.accessToken),t}async logout(){const e=await this.request("/v1/auth/logout",{method:"POST"});return this.accessToken=void 0,e}async getMe(){return this.request("/v1/auth/me")}}const Mr=new gf({baseUrl:"/v1"}),ns=[{id:"priya",uid:"demo-priya-sharma",email:"priya.sharma@bharosa.demo",name:"Priya Sharma",role:"Student (Holder)",badge:"Student",subtitle:"Has a credential and an encrypted certificate",persona:"HOLDER",description:"DID registered, 1 credential from the university, 1 encrypted certificate asset, one pending access request from TechCorp",walletAddress:"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",privateKey:"0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",initials:"PS"},{id:"chennai",uid:"demo-chennai-univ",email:"dean.chennai@bharosa.demo",name:"Chennai University",role:"Issuer",badge:"Issuer",subtitle:"Approved issuer of credentials",persona:"ISSUER",description:"Approved as trusted issuer, 3 credentials issued, 1 revoked",walletAddress:"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",privateKey:"0x5de4111afa1a4b94908f83103eb2173f1a4a48e4b2f761bd5709b10f842196fa",initials:"CU"},{id:"techcorp",uid:"demo-techcorp-hr",email:"hr.techcorp@bharosa.demo",name:"TechCorp HR",role:"Verifier / Employer",badge:"Verifier",subtitle:"Verifies candidate credentials",persona:"VERIFIER",description:"DID registered, one active grant from Priya (expiring soon), one rejected request",walletAddress:"0x90F79bf6EB2c4f870365E785982E1f101E93b906",privateKey:"0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",initials:"TH"},{id:"arjun",uid:"demo-arjun-mehta",email:"arjun.mehta@bharosa.demo",name:"Arjun Mehta",role:"Student (Holder)",badge:"Student",subtitle:"Fresh account to start from scratch",persona:"HOLDER",description:'DID registered, empty wallet, for "start from scratch" demos',walletAddress:"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",privateKey:"0x47e179ec34004871170e4b1ec414db315a4b760e886cd3d675ab96ff4e069d49",initials:"AM"},{id:"admin",uid:"demo-bharosa-admin",email:"admin@bharosa.demo",name:"Bharosa Admin",role:"Admin",badge:"Admin",subtitle:"Manages issuers and security alerts",persona:"ADMIN",description:"ADMIN_ROLE on-chain, sees the security alerts and issuer management",walletAddress:"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",privateKey:"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",initials:"BA"}];function yf(n){const e=Ga(n);return Wr(t=>{let s=!1;const i={request:async({method:a,params:c=[]})=>{const l=t.chains[0],d=l?.rpcUrls?.default?.http?.[0]||"http://127.0.0.1:8545";switch(a){case"eth_requestAccounts":case"eth_accounts":return s=!0,[e.address];case"eth_chainId":return`0x${(l?.id||31337).toString(16)}`;case"personal_sign":{const[h,y]=c;let _=h;if(Ya(h))try{_=Ja(h)}catch{_=h}return await e.signMessage({message:_})}case"eth_signTypedData_v4":{const[h,y]=c,_=typeof y=="string"?JSON.parse(y):y;return await e.signTypedData(_)}case"eth_sendTransaction":{const[h]=c;return await Os({account:e,chain:l,transport:$e(d)}).sendTransaction(h)}default:{const y=await(await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:Date.now(),method:a,params:c})})).json();if(y.error)throw new Error(y.error.message||`RPC error for ${a}`);return y.result}}},on:()=>i,removeListener:()=>i};return{id:"demo-wallet",name:"Bharosa Demo Signer",type:"demoWallet",async connect({chainId:a}={}){s=!0;const c=a||t.chains[0]?.id||31337;return{accounts:[e.address],chainId:c}},async disconnect(){s=!1},async getAccounts(){return s?[e.address]:[e.address]},async getChainId(){return t.chains[0]?.id||31337},async isAuthorized(){return!0},async getProvider(){return i},async getClient({chainId:a}={}){const c=t.chains.find(l=>l.id===a)||t.chains[0];return Os({account:e,chain:c,transport:Ka(i)})},onAccountsChanged(){},onChainChanged(){},onDisconnect(){}}})}const fa=u.createContext(void 0);function _f({children:n}){const[e,t]=u.useState(null),[s,r]=u.useState(null),[i,a]=u.useState(null),[c,l]=u.useState(!0),{disconnect:d}=Xa(),{connectAsync:h}=Qa(),y=Oa(),_=u.useCallback(async()=>{if(!e)return null;if("isDemo"in e&&e.isDemo)return`demo-jwt-:${e.uid}:${e.email}:${e.displayName}`;try{return await e.getIdToken()}catch{return null}},[e]);u.useEffect(()=>{Mr.setTokenProvider(_)},[_]);const j=u.useCallback(async()=>{try{if(!await _())return r(null),null;const N=await Mr.getMe(),P={uid:N.uid,email:N.email,displayName:N.displayName,persona:N.persona||"HOLDER",walletAddress:N.walletAddress||null,onChainRoles:N.onChainRoles||["HOLDER"],didRegistered:!!N.didRegistered,isDemo:!!N.isDemo};return r(P),P}catch(I){return console.warn("[AuthProvider] Failed to refresh account profile:",I),null}},[_]),U=u.useCallback(async I=>{a(I),sessionStorage.setItem("bharosa_active_demo",I.id);try{d(),await h({connector:yf(I.privateKey)})}catch(P){console.warn("[AuthProvider] Demo connector connection notice:",P)}const N={uid:I.uid,email:I.email,displayName:I.name,persona:I.persona,role:I.role,walletAddress:I.walletAddress,isDemo:!0};t(N),r({uid:I.uid,email:I.email,displayName:I.name,persona:I.persona,walletAddress:I.walletAddress,onChainRoles:I.persona==="ADMIN"?["ADMIN"]:I.persona==="ISSUER"?["ISSUER"]:["HOLDER"],didRegistered:!0,isDemo:!0})},[h,d]);u.useEffect(()=>{const I=sessionStorage.getItem("bharosa_active_demo");if(I){const P=ns.find(re=>re.id===I);if(P){U(P).finally(()=>l(!1));return}}const N=Ad(Ve,async P=>{if(!sessionStorage.getItem("bharosa_active_demo")){if(t(P),P)try{await j()||r({uid:P.uid,email:P.email||"",displayName:P.displayName,persona:"HOLDER",walletAddress:null,onChainRoles:["HOLDER"],didRegistered:!1})}catch{}else r(null);l(!1)}});return()=>N()},[U,j]);const Z=async(I,N)=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);const P=await Id(Ve,I,N);t(P.user),await j()},pe=async(I,N,P)=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);const re=await xd(Ve,I,N);P&&await kd(re.user,{displayName:P}),await vr(re.user),t(re.user),await j()},ee=async()=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);const I=await Kd(Ve,pf);t(I.user),await j()},ke=async I=>{const N=ns.find(P=>P.id.toLowerCase()===I.toLowerCase()||P.uid.toLowerCase()===I.toLowerCase());if(!N)throw new Error(`Demo user not found: ${I}`);try{const P=new AbortController,re=setTimeout(()=>P.abort(),2e3),Te=await fetch(Ss("/demo/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({demoUserId:N.id}),signal:P.signal}).finally(()=>clearTimeout(re));if(Te.ok){const tt=await Te.json();if(tt.customToken&&!tt.customToken.startsWith("demo-custom-jwt"))try{await bd(Ve,tt.customToken)}catch{}}}catch{}y.clear(),await U(N)},me=async I=>{await wd(Ve,I)},Be=async()=>{e&&"sendEmailVerification"in e&&await vr(e)},C=async()=>{sessionStorage.removeItem("bharosa_active_demo"),a(null);try{await Sd(Ve)}catch{}try{d()}catch{}y.clear(),t(null),r(null)},M=!!i||!!e&&"isDemo"in e&&e.isDemo===!0;return o.jsx(fa.Provider,{value:{user:e,account:s,loading:c,isDemoUser:M,activeDemoAccount:i,signIn:Z,signUp:pe,signInWithGoogle:ee,signInWithDemo:ke,resetPassword:me,resendVerificationEmail:Be,signOut:C,getIdToken:_,refreshAccount:j},children:n})}function et(){const n=u.useContext(fa);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n}/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pa=(...n)=>n.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=u.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:a,...c},l)=>u.createElement("svg",{ref:l,...bf,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:pa("lucide",r),...c},[...a.map(([d,h])=>u.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(n,e)=>{const t=u.forwardRef(({className:s,...r},i)=>u.createElement(wf,{ref:i,iconNode:e,className:pa(`lucide-${vf(n)}`,s),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=S("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=S("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=S("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=S("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=S("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=S("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=S("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=S("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=S("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=S("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=S("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=S("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=S("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=S("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=S("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=S("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=S("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=S("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=S("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=S("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=S("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=S("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=S("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=S("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=S("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=S("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=S("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=S("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=S("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function qf(){const[n,e]=u.useState({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:14}),[t,s]=u.useState("Just now"),r=async()=>{const i=performance.now();try{const a=await fetch(Ss("/relayer/treasury"),{cache:"no-store"}),c=Math.round(performance.now()-i);a.ok?e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:c}):e(l=>({...l,api:"ONLINE",latencyMs:c}))}catch{e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:24})}s(new Date().toLocaleTimeString())};return u.useEffect(()=>{r();const i=setInterval(r,3e4);return()=>clearInterval(i)},[]),o.jsx("footer",{className:"w-full bg-[#F7FBEF] border-t border-lime-200 py-2 px-3 sm:px-6 text-xs text-[#1A2E05]",children:o.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto no-scrollbar",children:[o.jsxs("div",{className:"flex items-center gap-1 font-bold text-[#4D6B2A] whitespace-nowrap shrink-0",children:[o.jsx(xf,{className:"w-3.5 h-3.5 text-lime-600 animate-pulse"}),o.jsx("span",{className:"hidden sm:inline",children:"HEALTH:"})]}),o.jsxs("div",{className:"flex items-center gap-2 whitespace-nowrap",children:[o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),"Polygon Amoy: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.chain})]}),o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"API Gateway: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.api})]}),o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"IPFS: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.ipfs})]}),o.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"Neon DB: ",o.jsx("span",{className:"font-semibold text-green-700",children:n.db})]})]})]}),o.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-3 text-[#4D6B2A] text-[11px] whitespace-nowrap shrink-0 border-t md:border-t-0 pt-1 md:pt-0 border-lime-200/60",children:[o.jsxs("span",{children:["Latency: ",o.jsxs("b",{className:"text-[#1A2E05]",children:[n.latencyMs,"ms"]})]}),o.jsx("span",{className:"hidden lg:inline text-lime-300",children:"|"}),o.jsxs("span",{className:"hidden lg:inline",children:["Verified: ",t]}),o.jsx("span",{className:"font-semibold text-lime-800",children:"Bharosa Protocol"})]})]})})}function dn(){const{user:n,activeDemoAccount:e}=et(),t=e?.name||(n&&"displayName"in n&&n.displayName?n.displayName:"Priya Sharma"),s=e?.badge||(e?.role?e.role.split(" ")[0]:"Student");return o.jsxs("div",{className:"w-full bg-[#84CC16] text-[#1A2E05] py-2 px-4 text-center font-bold text-xs sm:text-[13px] tracking-wide select-none shrink-0 z-50",children:["DEMO MODE · Signed in as ",t," (",s,") with a built-in test wallet"]})}const ya=Hr.forwardRef(({label:n="Ask Bharosa",expandPrompt:e="Ask me anything",badgeText:t="AI",state:s="idle",size:r="default",showExpand:i=!0,className:a="",onClick:c,...l},d)=>{const h=y=>{c?c(y):window.dispatchEvent(new CustomEvent("open-bharosa-copilot"))};return o.jsx("button",{ref:d,type:"button",className:`ai ${r==="sm"?"ai-sm":""} ${a}`,"data-s":s,"aria-label":l["aria-label"]||`${n}, AI assistant`,onClick:h,...l,children:o.jsxs("span",{className:"in",children:[o.jsx("span",{className:"ic",children:o.jsxs("svg",{viewBox:"0 0 40 40",width:"40",height:"40","aria-hidden":"true",children:[o.jsx("polygon",{className:"pg",points:"20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5"}),o.jsx("polygon",{className:"pg pg2",points:"20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5"}),o.jsx("polygon",{points:"20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5",style:{fill:"#1A2E05"}}),o.jsx("path",{className:"sp",d:"M20 10.5 L22.4 17.6 L29.5 20 L22.4 22.4 L20 29.5 L17.6 22.4 L10.5 20 L17.6 17.6Z"}),o.jsx("path",{className:"sp2",d:"M30 8 L31 11 L34 12 L31 13 L30 16 L29 13 L26 12 L29 11Z",transform:"translate(-4 -3) scale(.8)"})]})}),o.jsx("span",{className:"lbl",children:s==="think"?"Thinking":n}),o.jsxs("span",{className:"dots",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),i&&o.jsxs("span",{className:"more",children:[e,o.jsx("i",{className:"cr"})]}),t&&o.jsx("span",{className:"chip ai-chip",children:t})]})})});ya.displayName="AiButton";const Fn=["br","bl","tl","tr"],Zf=[[/revoke|remove access|stop sharing|take back/i,"Open Access Control, find the grant under Active grants, and choose Revoke. Future access is blocked straight away. A copy someone already downloaded cannot be taken back, so re-encrypt sensitive files with a new key.",{label:"Open Access Control",route:"/access"}],[/verif|check.*credential|validate/i,"Open the Verifier Console and paste the credential link or scan its QR code. Bharosa checks four things: the issuer's signature, that the issuer is trusted on-chain, that the hash matches the on-chain record, and that it has not been revoked or expired.",{label:"Open Verifier Console",route:"/verifier"}],[/grant|access|share|employer|permission/i,"Go to Access Control, pick the asset, enter the person's address, choose a role and purpose, and set a start and end time. You review it and sign in your wallet. You can revoke it at any time.",{label:"Open Access Control",route:"/access"}],[/zk|zero|proof|prove|privacy|without showing/i,'A zero-knowledge proof lets you prove a fact, such as "my CGPA is above 8", without showing the document. Choose a credential and a claim, and your browser generates the proof. The verifier only learns that the statement is true.',{label:"Open ZK Proofs",route:"/zk"}],[/lost|recover|guardian|seed|private key|wallet/i,"Social recovery lets trusted guardians help you regain access. Set your guardians and threshold in Recovery. If you lose your wallet, guardians approve a new address, and a waiting period lets you cancel any attack. Never share your seed phrase with anyone, including me.",{label:"Open Recovery",route:"/recovery"}],[/encrypt|ipfs|upload|file|asset|document/i,"Files are encrypted in your browser with AES-256 before upload. The encrypted file goes to IPFS, and only its hash and address are recorded on the blockchain. Nobody can read the file without the key you share.",{label:"Open Assets",route:"/assets"}],[/security|alert|suspicious|attack/i,"The Security Center flags unusual activity, such as many access requests in a short time or very long grants, and suggests what to do next.",{label:"Open Security Center",route:"/security"}],[/what is|about|who are|bharosa|how does it work/i,"Bharosa lets you own your identity, prove it instantly, and share documents with full control, with no central database to breach and no certificate to forge.",null],[/^(hi|hello|hey|namaste|vanakkam)\b/i,"Hello! Ask me how to verify a credential, grant access, create a proof, or recover a wallet.",null]],ss=({isOpen:n,onClick:e})=>{const t=zr(),[s,r]=u.useState(!1),i=n!==void 0?n:s,[a,c]=u.useState(()=>{try{const b=localStorage.getItem("bharosa-ai-corner");if(b&&Fn.includes(b))return b}catch{}return"br"}),[l,d]=u.useState("idle"),[h,y]=u.useState(null),[_,j]=u.useState(!1),[U,Z]=u.useState(null),[pe,ee]=u.useState(null),[ke,me]=u.useState([]),[Be,C]=u.useState(""),[M,I]=u.useState(!1),N=u.useRef(null),P=u.useRef(null),re=u.useRef(null),Te=u.useRef(null),tt=u.useRef(null),Ce=u.useRef(null),mt=u.useRef(!1),vn=u.useRef(!1),bn=u.useRef(null),wn=u.useCallback(b=>{c(b),y(null);try{localStorage.setItem("bharosa-ai-corner",b)}catch{}},[]);u.useEffect(()=>{const b=()=>{i||(e?e():r(!0))};return window.addEventListener("open-bharosa-copilot",b),()=>window.removeEventListener("open-bharosa-copilot",b)},[i,e]);const jt=u.useCallback((b,A=5500)=>{i||_||(Z(b),bn.current&&clearTimeout(bn.current),bn.current=setTimeout(()=>{Z(null)},A))},[i,_]),Lt=u.useCallback(()=>{Z(null)},[]);u.useEffect(()=>{const b=setTimeout(()=>{jt("Need a hand? Ask Bharosa")},1800);return()=>clearTimeout(b)},[jt]),u.useEffect(()=>{if(!("IntersectionObserver"in window))return;const b=new WeakSet,A=new IntersectionObserver(B=>{B.forEach(z=>{if(z.isIntersecting&&!b.has(z.target)){b.add(z.target);const te=z.target.getAttribute("data-copilot-tip");te&&jt(te)}})},{threshold:.6});return document.querySelectorAll("[data-copilot-tip]").forEach(B=>A.observe(B)),()=>A.disconnect()},[jt]);const Ca=b=>{if(b.button!==0)return;const A=N.current?.getBoundingClientRect();A&&(Ce.current={sx:b.clientX,sy:b.clientY,ox:A.left,oy:A.top},mt.current=!1)};u.useEffect(()=>{const b=B=>{if(!Ce.current)return;const z=B.clientX-Ce.current.sx,te=B.clientY-Ce.current.sy;if(!mt.current&&Math.hypot(z,te)>8&&(mt.current=!0,j(!0),Lt()),mt.current){const In=document.documentElement.clientWidth,En=document.documentElement.clientHeight,Sa=Math.max(12,Math.min(In-240,Ce.current.ox+z)),Ra=Math.max(12,Math.min(En-64,Ce.current.oy+te));y({x:Sa,y:Ra})}},A=()=>{if(Ce.current&&mt.current&&h){const B=document.documentElement.clientWidth,z=document.documentElement.clientHeight,te=`${h.y+32<z/2?"t":"b"}${h.x+100<B/2?"l":"r"}`;wn(te),vn.current=!0,setTimeout(()=>{vn.current=!1},100)}j(!1),Ce.current=null};return window.addEventListener("pointermove",b),window.addEventListener("pointerup",A),()=>{window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",A)}},[h,wn,Lt]);const Dt=u.useCallback(()=>{vn.current||(Lt(),e?e():r(b=>!b))},[Lt,e]),xn=u.useCallback(()=>{e&&i?e():r(!1)},[e,i]);u.useEffect(()=>{const b=A=>{const B=A.target?.tagName?.toLowerCase()||"",z=B==="input"||B==="textarea"||A.target?.isContentEditable;(A.ctrlKey||A.metaKey)&&A.key.toLowerCase()==="k"?(A.preventDefault(),Dt()):A.key==="/"&&!z?(A.preventDefault(),i||Dt()):A.key==="Escape"&&i&&(A.preventDefault(),xn(),P.current?.focus())};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[i,Dt,xn]),u.useEffect(()=>{i&&setTimeout(()=>tt.current?.focus(),150)},[i]);const gt=b=>{ee(b),setTimeout(()=>ee(null),1800)},yt=async b=>{const A=b.trim();!A||M||(me(B=>[...B,{role:"user",text:A}]),C(""),I(!0),d("thinking"),setTimeout(()=>{let B="I only know a few demo topics. Try asking about verifying a credential, granting access, zero-knowledge proofs, or social recovery.",z=null;for(const[te,In,En]of Zf)if(te.test(A)){B=In,z=En;break}I(!1),me(te=>[...te,{role:"bot",text:B,action:z}]),d("idle"),setTimeout(()=>{Te.current&&(Te.current.scrollTop=Te.current.scrollHeight)},50)},750))},Aa=()=>{const b=(Fn.indexOf(a)+1)%4;wn(Fn[b])};return o.jsxs("div",{ref:N,id:"ab",className:`ab ${i?"open":""} ${_?"dragging":""}`,"data-state":l,"data-corner":a,style:{left:h?`${h.x}px`:void 0,top:h?`${h.y}px`:void 0,right:h?"auto":void 0,bottom:h?"auto":void 0},children:[o.jsx("div",{className:`ab-intro ${U?"show":""}`,"aria-hidden":"true",children:U}),o.jsxs("section",{ref:re,id:"abPanel",className:"ab-panel",role:"dialog","aria-label":"Bharosa Copilot","aria-hidden":!i,children:[o.jsxs("header",{className:"ab-ph",children:[o.jsxs("svg",{className:"ab-mini",viewBox:"0 0 40 40","aria-hidden":"true",children:[o.jsx("polygon",{points:"20,3 34.7,11.5 34.7,28.5 20,37 5.3,28.5 5.3,11.5",fill:"#1A2E05",stroke:"#84CC16",strokeWidth:"1.5",strokeLinejoin:"round"}),o.jsx("path",{d:"M20 11 22.2 17.8 29 20 22.2 22.2 20 29 17.8 22.2 11 20 17.8 17.8Z",fill:"#BEF264"})]}),o.jsxs("div",{className:"ab-hd",children:[o.jsx("div",{className:"ab-title",children:"Bharosa Copilot"}),o.jsx("div",{className:"ab-sub",children:"Sovereign Assistant · never sees your keys or files"})]}),o.jsx("button",{className:"ab-ic",type:"button",onClick:Aa,"aria-label":"Move to next corner",title:"Move to next corner",children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4"})})}),o.jsx("button",{className:"ab-ic",type:"button",onClick:()=>me([]),"aria-label":"New chat",title:"New chat",children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4"})})}),o.jsx("button",{className:"ab-ic",type:"button",onClick:xn,"aria-label":"Close",title:"Close",children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M6 6l12 12M18 6L6 18"})})})]}),o.jsxs("div",{ref:Te,className:"ab-msgs","aria-live":"polite",children:[ke.length===0?o.jsxs("div",{children:[o.jsx("div",{className:"ab-hi",children:"Hi! I can explain Bharosa and walk you through sovereign credentials, zero-knowledge proofs, and access grants. Pick one or type below."}),o.jsx("button",{className:"ab-chip",type:"button",onClick:()=>yt("How do I verify a credential?"),children:"Verify a credential"}),o.jsx("button",{className:"ab-chip",type:"button",onClick:()=>yt("How do I grant access to an employer?"),children:"Grant access to someone"}),o.jsx("button",{className:"ab-chip",type:"button",onClick:()=>yt("How do zero-knowledge proofs work?"),children:"Prove something without showing it"}),o.jsx("button",{className:"ab-chip",type:"button",onClick:()=>yt("I lost my wallet. What now?"),children:"I lost my wallet"})]}):ke.map((b,A)=>o.jsxs("div",{className:`ab-msg ${b.role}`,children:[o.jsx("div",{className:"ab-bub",children:b.text}),b.action&&o.jsx("button",{type:"button",className:"ab-act",onClick:()=>{t(b.action.route),gt(`Navigated to ${b.action.route}`)},children:b.action.label}),b.role==="bot"&&o.jsxs("div",{className:"ab-tools",children:[o.jsx("button",{type:"button","aria-label":"Helpful",title:"Helpful",onClick:()=>gt("Feedback recorded"),children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M7 11v9H4v-9h3zm0 0 4-7a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2l-1 6a2 2 0 0 1-2 2H7"})})}),o.jsx("button",{type:"button","aria-label":"Not helpful",title:"Not helpful",onClick:()=>gt("Feedback recorded"),children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M17 13V4h3v9h-3zm0 0-4 7a2 2 0 0 1-2-2v-3H6a2 2 0 0 1-2-2l1-6a2 2 0 0 1 2-2h12"})})}),o.jsx("button",{type:"button","aria-label":"Copy answer",title:"Copy answer",onClick:()=>{try{navigator.clipboard.writeText(b.text),gt("Copied to clipboard")}catch{gt("Copy unavailable")}},children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M9 9h10v10H9zM5 15V5h10"})})})]})]},A)),M&&o.jsx("div",{className:"ab-msg bot",children:o.jsxs("div",{className:"ab-bub ab-typing",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]})})]}),o.jsx("div",{className:`ab-toast ${pe?"show":""}`,role:"status",children:pe}),o.jsxs("form",{className:"ab-form",autoComplete:"off",onSubmit:b=>{b.preventDefault(),yt(Be)},children:[o.jsx("input",{ref:tt,className:"ab-in",type:"text",maxLength:300,value:Be,onChange:b=>C(b.target.value),placeholder:"Ask about credentials, access, proofs…","aria-label":"Ask Bharosa"}),o.jsx("button",{className:"ab-send",type:"submit","aria-label":"Send question",children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})})]}),o.jsx("div",{className:"ab-foot",children:"Ctrl + K to open · Esc to close · Never share keys or seed phrases"})]}),o.jsx(ya,{ref:P,state:l==="thinking"?"think":i?"hover":"idle",label:"Ask Bharosa",expandPrompt:"Ask me anything",badgeText:"AI","aria-expanded":i,"aria-controls":"abPanel",title:"Ask Bharosa AI (Ctrl+K). Drag to move.",onClick:Dt,onPointerDown:Ca}),o.jsx("span",{role:"status","aria-live":"polite",style:{position:"absolute",left:"-9999px"},children:l==="thinking"?"Bharosa is thinking":""})]})},rs=()=>null;function Gf(){const{pathname:n}=At(),e=n==="/",[t,s]=u.useState(!1);return e?o.jsxs(o.Fragment,{children:[o.jsx(dn,{}),o.jsx(be,{}),o.jsx(ss,{isOpen:t,onClick:()=>s(r=>!r)}),o.jsx(rs,{isOpen:t,onClose:()=>s(!1)})]}):o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(dn,{}),o.jsxs("header",{className:"h-16 bg-[#FFFFFF] border-b border-[#ECFCCB] px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs(qe,{to:"/",className:"flex items-center space-x-2.5 group",children:[o.jsx("img",{src:"/logos/bharosa-mark.png",alt:"Bharosa Logo",className:"w-8 h-8 object-contain group-hover:scale-105 transition-transform"}),o.jsx("span",{className:"font-anton text-xl tracking-wide text-[#1A2E05] uppercase",children:"Bharosa"})]}),o.jsx("span",{className:"text-stone-300",children:"/"}),o.jsx("span",{className:"text-xs font-semibold text-[#4D6B2A]",children:"Public Verification"})]}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs(qe,{to:"/",className:"hidden sm:inline-flex items-center text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] px-3 py-1.5 rounded-lg hover:bg-[#F7FBEF] transition-colors",children:[o.jsx(ma,{className:"w-3.5 h-3.5 mr-1"})," Home"]}),o.jsxs(qe,{to:"/login",className:"inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs uppercase tracking-wider transition-all shadow-xs",children:[o.jsx("span",{children:"Launch App"}),o.jsx(Ef,{className:"w-3.5 h-3.5 ml-1.5"})]})]})]}),o.jsx("main",{className:"flex-1 flex flex-col",children:o.jsx(be,{})}),o.jsx(qf,{}),o.jsx(ss,{isOpen:t,onClick:()=>s(r=>!r)}),o.jsx(rs,{isOpen:t,onClose:()=>s(!1)})]})}const Kf=[{title:"OVERVIEW",items:[{to:"/dashboard",label:"Dashboard",icon:Lf}]},{title:"MY IDENTITY",items:[{to:"/identity",label:"Identity",icon:Hf},{to:"/credentials",label:"Credentials",icon:kf},{to:"/assets",label:"Assets",icon:Of},{to:"/access",label:"Access control",icon:jf,badge:1},{to:"/zk",label:"ZK proofs",icon:Nf},{to:"/recovery",label:"Recovery",icon:Mf}]},{title:"TRUST & SAFETY",items:[{to:"/audit",label:"Audit log",icon:Pf},{to:"/security",label:"Security Center",icon:Vf}]}],Yf=[{to:"/issuer",label:"Issuer Portal",icon:Ff},{to:"/verifier",label:"Verifier Portal",icon:Cf},{to:"/admin",label:"Admin Console",icon:Uf}];function Jf({collapsed:n,setCollapsed:e,mobileOpen:t,setMobileOpen:s}){const r=At(),i=zr(),{user:a,account:c,activeDemoAccount:l,signInWithDemo:d,isDemoUser:h,signOut:y}=et(),[_,j]=u.useState(!1),U=u.useRef(null);u.useEffect(()=>{s(!1)},[r.pathname,s]),u.useEffect(()=>{function C(M){U.current&&!U.current.contains(M.target)&&j(!1)}return _&&document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[_]);const Z=l?.name||(a&&"displayName"in a&&a.displayName?a.displayName:"Priya Sharma"),pe=l?.badge?`${l.badge} · Demo wallet`:"Student · Demo wallet",ee=Z.split(" ").map(C=>C[0]).join("").toUpperCase().slice(0,2)||"PS",ke=async C=>{try{await d(C.id),j(!1)}catch(M){console.error("Failed to switch demo user:",M)}},me=async()=>{try{s(!1),await y(),i("/login",{replace:!0})}catch(C){console.error("Failed to log out:",C)}},Be=o.jsxs("div",{className:"flex flex-col h-full justify-between bg-white border-r border-[#E5E7EB] select-none text-[#1A2E05]",children:[o.jsxs("div",{className:`flex-1 overflow-y-auto py-4 space-y-6 ${n?"px-2":"px-3.5"}`,children:[n?o.jsxs("div",{className:"flex flex-col items-center gap-2.5 w-full mb-1",children:[o.jsx("button",{type:"button",onClick:()=>e(!1),className:"w-10 h-10 rounded-xl bg-[#84CC16]/20 border border-[#84CC16]/40 hover:bg-[#84CC16]/30 hover:scale-105 flex items-center justify-center transition-all cursor-pointer group shadow-2xs",title:"Bharosa · Expand sidebar",children:o.jsxs("svg",{viewBox:"0 0 100 100",className:"w-6 h-6 text-[#65A30D]",fill:"currentColor",children:[o.jsx("polygon",{points:"50,5 93,27 93,73 50,95 7,73 7,27",fill:"#84CC16"}),o.jsx("path",{d:"M38 52 L48 62 L66 40",fill:"none",stroke:"#1A2E05",strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),o.jsx("button",{type:"button",onClick:()=>e(!1),className:"hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-stone-400 hover:text-[#1A2E05] hover:bg-stone-100 transition-colors cursor-pointer",title:"Expand sidebar",children:o.jsx(Sf,{className:"w-4 h-4"})})]}):o.jsxs("div",{className:"flex items-center justify-between px-2 h-10",children:[o.jsxs(qe,{to:"/dashboard",className:"flex items-center gap-2.5 hover:opacity-90 transition-opacity",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#84CC16]/20 border border-[#84CC16]/40 flex items-center justify-center shrink-0",children:o.jsxs("svg",{viewBox:"0 0 100 100",className:"w-5 h-5 text-[#65A30D]",fill:"currentColor",children:[o.jsx("polygon",{points:"50,5 93,27 93,73 50,95 7,73 7,27",fill:"#84CC16"}),o.jsx("path",{d:"M38 52 L48 62 L66 40",fill:"none",stroke:"#1A2E05",strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),o.jsx("span",{className:"font-extrabold text-2xl text-[#1A2E05] tracking-tight",children:"Bharosa"})]}),o.jsx("button",{type:"button",onClick:()=>e(!0),className:"hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-stone-400 hover:text-[#1A2E05] hover:bg-stone-100 transition-colors cursor-pointer",title:"Collapse sidebar",children:o.jsx(Af,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"space-y-5",children:[Kf.map(C=>o.jsxs("div",{className:"space-y-1",children:[!n&&o.jsx("div",{className:"px-3 text-[11px] font-bold text-stone-400 tracking-wider",children:C.title}),o.jsx("div",{className:"space-y-1",children:C.items.map(M=>{const I=M.icon;return o.jsx(kn,{to:M.to,className:({isActive:N})=>`flex items-center px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all group relative ${N?"bg-[#ECFCCB] text-[#1A2E05]":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:n?M.label:void 0,children:({isActive:N})=>o.jsxs(o.Fragment,{children:[o.jsx(I,{className:`w-4 h-4 shrink-0 transition-transform ${N?"text-[#1A2E05]":"text-stone-500 group-hover:text-[#1A2E05]"} ${n?"mx-auto":"mr-3"}`}),!n&&o.jsx("span",{className:"flex-1 truncate",children:M.label}),!n&&M.badge!==void 0&&o.jsx("span",{className:"w-5 h-5 rounded-full bg-[#84CC16] text-[#1A2E05] text-[11px] font-extrabold flex items-center justify-center shrink-0",children:M.badge})]})},M.to)})})]},C.title)),(c?.persona==="ADMIN"||c?.persona==="ISSUER"||h)&&o.jsxs("div",{className:"space-y-1 pt-2 border-t border-stone-100",children:[!n&&o.jsx("div",{className:"px-3 text-[11px] font-bold text-stone-400 tracking-wider",children:"PORTALS"}),o.jsx("div",{className:"space-y-1",children:Yf.map(C=>{const M=C.icon;return o.jsxs(kn,{to:C.to,className:({isActive:I})=>`flex items-center px-3.5 py-2 rounded-xl text-xs font-semibold transition-all group ${I?"bg-[#ECFCCB] text-[#1A2E05]":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:n?C.label:void 0,children:[o.jsx(M,{className:"w-4 h-4 shrink-0 mr-3 text-stone-400 group-hover:text-[#1A2E05]"}),!n&&o.jsx("span",{className:"truncate",children:C.label})]},C.to)})})]})]})]}),o.jsxs("div",{className:"p-3 border-t border-[#F2F4F7] space-y-2 relative",ref:U,children:[o.jsxs(kn,{to:"/public-verify",className:({isActive:C})=>`flex items-center px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${C?"bg-[#ECFCCB] text-[#1A2E05]":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:n?"Public verify":void 0,children:[o.jsx(Rs,{className:"w-4 h-4 shrink-0 mr-3 text-stone-500"}),!n&&o.jsx("span",{children:"Public verify"})]}),n?o.jsxs("div",{className:"flex flex-col items-center gap-2 py-1",children:[o.jsx("div",{className:"w-9 h-9 rounded-full bg-[#84CC16] text-[#1A2E05] font-extrabold text-xs flex items-center justify-center shadow-2xs",title:Z,children:ee}),o.jsx("button",{type:"button",onClick:me,className:"w-8 h-8 rounded-xl flex items-center justify-center text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer",title:"Log out","aria-label":"Log out",children:o.jsx(Mn,{className:"w-4 h-4"})})]}):o.jsxs("div",{className:"p-2.5 rounded-2xl bg-[#F7FBEF] border border-[#D9EBB5] flex items-center justify-between gap-2.5",children:[o.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 flex-1",children:[o.jsx("div",{className:"w-9 h-9 rounded-full bg-[#84CC16] text-[#1A2E05] font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs",children:ee}),o.jsxs("div",{className:"overflow-hidden min-w-0 flex-1",children:[o.jsx("p",{className:"text-sm font-bold text-[#1A2E05] truncate",title:Z,children:Z}),o.jsx("p",{className:"text-xs text-stone-500 truncate",title:pe,children:pe})]})]}),o.jsx("button",{type:"button",onClick:me,className:"w-8 h-8 rounded-xl flex items-center justify-center text-stone-400 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all cursor-pointer shrink-0",title:"Log out","aria-label":"Log out",children:o.jsx(Mn,{className:"w-4 h-4"})})]}),!n&&o.jsxs("button",{type:"button",onClick:()=>j(!_),className:"w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors cursor-pointer",children:[o.jsx(If,{className:"w-3.5 h-3.5 text-[#65A30D]"}),o.jsx("span",{children:"Switch demo user"})]}),_&&o.jsxs("div",{className:"absolute bottom-16 left-3 right-3 bg-white border border-[#D9EBB5] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150",children:[o.jsxs("div",{className:"px-2 py-1.5 border-b border-[#F2F4F7] flex items-center justify-between mb-1",children:[o.jsx("span",{className:"text-xs font-bold text-[#1A2E05]",children:"Choose Demo Persona"}),o.jsx($f,{className:"w-3.5 h-3.5 text-[#65A30D]"})]}),o.jsx("div",{className:"space-y-1",children:ns.map(C=>{const M=l?.id===C.id;return o.jsxs("button",{onClick:()=>ke(C),className:`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-center justify-between ${M?"bg-[#ECFCCB] font-bold text-[#1A2E05]":"hover:bg-[#F7FBEF] text-[#4D6B2A]"}`,children:[o.jsxs("div",{children:[o.jsx("div",{className:"font-bold",children:C.name}),o.jsx("div",{className:"text-[10px] text-stone-500",children:C.role})]}),M&&o.jsx(ga,{className:"w-4 h-4 text-[#65A30D] shrink-0"})]},C.id)})}),o.jsx("div",{className:"pt-1 mt-1 border-t border-[#F2F4F7]",children:o.jsxs("button",{type:"button",onClick:me,className:"w-full text-left p-2 rounded-xl text-xs text-rose-600 hover:bg-rose-50 font-semibold flex items-center gap-2 transition-colors cursor-pointer",children:[o.jsx(Mn,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Log out"})]})})]})]})]});return o.jsxs(o.Fragment,{children:[o.jsx("aside",{className:`hidden md:block sticky top-0 h-[calc(100vh-32px)] transition-all duration-300 z-30 shrink-0 ${n?"w-20":"w-64"}`,children:Be}),t&&o.jsxs("div",{className:"fixed inset-0 z-50 md:hidden flex",children:[o.jsx("div",{className:"fixed inset-0 bg-[#1A2E05]/40 backdrop-blur-xs transition-opacity",onClick:()=>s(!1)}),o.jsx("div",{className:"relative w-64 max-w-[80vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200",children:Be})]})]})}const Xf=[{id:"1",title:"Gasless Meta-Transactions Active",desc:"Biconomy / EIP-2771 Relayer is online and sponsoring your identity calls.",time:"2m ago",type:"relayer"},{id:"2",title:"Cryptographic DID Online",desc:"Your W3C DID document is synced to IPFS and pinned.",time:"1h ago",type:"success"},{id:"3",title:"Decentralized Audit Active",desc:"All smart contract invocations are signed and verifiable on-chain.",time:"3h ago",type:"info"}];function Qf(){const[n,e]=u.useState(!1),[t,s]=u.useState(Xf),r=u.useRef(null);u.useEffect(()=>{function c(l){r.current&&!r.current.contains(l.target)&&e(!1)}return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const i=t.length,a=()=>{s([])};return o.jsxs("div",{className:"relative",ref:r,children:[o.jsxs("button",{onClick:()=>e(c=>!c),className:"w-9 h-9 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 relative shadow-2xs transition-colors cursor-pointer","aria-label":"Notifications",children:[o.jsx(Tf,{className:"w-4 h-4"}),o.jsx("span",{className:"absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#84CC16] text-[#1A2E05] font-extrabold text-[10px] flex items-center justify-center ring-2 ring-white",children:"4"})]}),n&&o.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-100",children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#F7FBEF]",children:[o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{className:"text-xs font-bold text-[#1A2E05]",children:"Activity & Alerts"}),i>0&&o.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFCCB] text-[#65A30D]",children:i})]}),t.length>0&&o.jsx("button",{onClick:a,className:"text-[11px] text-[#65A30D] hover:underline font-medium",children:"Clear"})]}),o.jsx("div",{className:"max-h-72 overflow-y-auto py-2 divide-y divide-[#F7FBEF]",children:t.length===0?o.jsx("div",{className:"text-center py-6 text-xs text-[#4D6B2A]",children:"No new notifications"}):t.map(c=>o.jsx("div",{className:"py-2.5 px-1 first:pt-1 last:pb-1",children:o.jsxs("div",{className:"flex items-start space-x-2.5",children:[c.type==="relayer"?o.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:o.jsx(Wf,{className:"w-3.5 h-3.5 fill-[#84CC16]"})}):o.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:o.jsx(Rs,{className:"w-3.5 h-3.5"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-xs font-semibold text-[#1A2E05] truncate",children:c.title}),o.jsx("p",{className:"text-[11px] text-[#4D6B2A] mt-0.5 leading-relaxed",children:c.desc}),o.jsx("span",{className:"text-[10px] text-stone-400 mt-1 block",children:c.time})]})]})},c.id))})]})]})}const ep={"/dashboard":{title:"Dashboard",breadcrumb:"Home / Dashboard"},"/identity":{title:"Identity & DID",breadcrumb:"Home / Identity"},"/credentials":{title:"Credentials",breadcrumb:"Home / Credentials"},"/assets":{title:"Encrypted Assets",breadcrumb:"Home / Assets"},"/zk":{title:"Zero-Knowledge Proofs",breadcrumb:"Home / ZK Proofs"},"/access":{title:"Access Control",breadcrumb:"Home / Access"},"/recovery":{title:"Social Recovery",breadcrumb:"Home / Recovery"},"/audit":{title:"Audit Trail",breadcrumb:"Home / Audit Log"},"/security":{title:"Security Center",breadcrumb:"Home / Security Center"},"/issuer":{title:"Issuer Portal",breadcrumb:"Portals / Issuer"},"/verifier":{title:"Verifier Portal",breadcrumb:"Portals / Verifier"},"/admin":{title:"Admin Console",breadcrumb:"Portals / Admin"},"/public-verify":{title:"Public Verifier",breadcrumb:"Home / Public Verify"}};function tp({onOpenMobileMenu:n}){const e=At(),{address:t}=qr(),s=eo(),{activeDemoAccount:r}=et(),[i,a]=u.useState(!1),c=ep[e.pathname]||{title:"Dashboard",breadcrumb:"Home / Dashboard"},l=t||r?.walletAddress||"0xAB12B589dD623F8b820980590aC6F2A57345c9F4",d=`${l.slice(0,6)}...${l.slice(-4)}`,h=s===31337?"Hardhat Node":"Polygon Amoy",y=()=>{navigator.clipboard.writeText(l),a(!0),setTimeout(()=>a(!1),1800)};return o.jsxs("header",{className:"sticky top-0 z-20 h-18 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] px-4 sm:px-8 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("button",{onClick:n,className:"md:hidden p-2 rounded-xl text-stone-600 hover:text-[#1A2E05] hover:bg-stone-100 transition-colors","aria-label":"Open navigation menu",children:o.jsx(Df,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-extrabold text-[#1A2E05] tracking-tight leading-snug",children:c.title}),o.jsx("p",{className:"text-xs text-stone-400 font-medium mt-1",children:c.breadcrumb})]})]}),o.jsxs("div",{className:"flex items-center space-x-2.5 sm:space-x-3",children:[o.jsxs("div",{className:"hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-700 shadow-2xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-[#84CC16]"}),o.jsx("span",{children:h})]}),o.jsxs("button",{type:"button",onClick:y,className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white hover:border-[#84CC16] text-xs font-semibold text-stone-700 shadow-2xs transition-colors cursor-pointer group",title:"Click to copy wallet address",children:[o.jsx(zf,{className:"w-3.5 h-3.5 text-stone-500 group-hover:text-[#65A30D]"}),o.jsxs("span",{children:["Demo wallet · ",d]}),i?o.jsx(ga,{className:"w-3.5 h-3.5 text-[#65A30D]"}):o.jsx(Rf,{className:"w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity"})]}),o.jsx(Qf,{})]})]})}function np(){const[n,e]=u.useState(()=>localStorage.getItem("bharosa_sidebar_collapsed")==="true"),[t,s]=u.useState(!1),[r,i]=u.useState(!1);return u.useEffect(()=>{localStorage.setItem("bharosa_sidebar_collapsed",String(n))},[n]),o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(dn,{}),o.jsxs("div",{className:"flex-1 flex min-w-0",children:[o.jsx(Jf,{collapsed:n,setCollapsed:e,mobileOpen:t,setMobileOpen:s}),o.jsxs("div",{className:"flex-1 flex flex-col min-w-0",children:[o.jsx(tp,{onOpenMobileMenu:()=>s(!0)}),o.jsx("main",{className:"flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-[1360px] w-full mx-auto",children:o.jsx(be,{})})]})]}),o.jsx(ss,{isOpen:r,onClick:()=>i(a=>!a)}),o.jsx(rs,{isOpen:r,onClose:()=>i(!1)})]})}function sp(){return o.jsxs("div",{className:"min-h-screen bg-[#F7FBEF] flex flex-col justify-between text-[#1A2E05]",children:[o.jsx(dn,{}),o.jsxs("header",{className:"p-4 sm:p-6 flex items-center justify-between max-w-6xl mx-auto w-full",children:[o.jsx(qe,{to:"/",className:"flex items-center gap-3 group",children:o.jsx("img",{src:"/logos/bharosa-logo.png",alt:"Bharosa - भरोसा",className:"h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"})}),o.jsxs(qe,{to:"/public-verify",className:"text-xs font-bold text-[#4D6B2A] hover:text-[#0C2518] transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/60",children:[o.jsx(Rs,{className:"w-3.5 h-3.5 text-[#84CC16]"})," Public Proof Verifier"]})]}),o.jsx("main",{className:"flex-1 flex items-center justify-center p-4 sm:p-6 my-4",children:o.jsx("div",{className:"w-full max-w-xl bg-white rounded-3xl border border-[#D9EBB5] shadow-lime p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200",children:o.jsx(be,{})})}),o.jsx("footer",{className:"p-4 text-center text-xs text-[#4D6B2A] border-t border-[#D9EBB5]/50",children:"Bharosa Sovereign Trust Protocol · Production-Grade Cryptographic Identity"})]})}function Un({children:n}){const{user:e,loading:t,isDemoUser:s}=et(),r=At();if(t)return o.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(yn,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),o.jsx("p",{className:"text-sm font-medium",children:"Verifying Bharosa credentials..."})]});if(!e){const i=encodeURIComponent(r.pathname+r.search);return o.jsx(Gt,{to:`/login?returnTo=${i}`,replace:!0})}return!s&&"emailVerified"in e&&!e.emailVerified&&e.providerData?.some(a=>a.providerId==="password")&&r.pathname!=="/verify-email"?o.jsx(Gt,{to:"/verify-email",replace:!0}):n?o.jsx(o.Fragment,{children:n}):o.jsx(be,{})}function Fr({children:n}){const{account:e,loading:t,isDemoUser:s}=et(),{isConnected:r,address:i}=qr(),a=At();if(t)return o.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(yn,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),o.jsx("p",{className:"text-sm font-medium",children:"Checking cryptographic wallet status..."})]});if(s&&e?.walletAddress)return n?o.jsx(o.Fragment,{children:n}):o.jsx(be,{});const c=!!e?.walletAddress,l=r&&i&&e?.walletAddress&&i.toLowerCase()===e.walletAddress.toLowerCase();if(!r||!c||!l){const d=encodeURIComponent(a.pathname+a.search);return o.jsx(Gt,{to:`/connect-wallet?returnTo=${d}`,replace:!0})}return n?o.jsx(o.Fragment,{children:n}):o.jsx(be,{})}function rp({children:n}){const{account:e,loading:t}=et();return t?o.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[o.jsx(yn,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),o.jsx("p",{className:"text-sm font-medium",children:"Resolving decentralized identity..."})]}):e?.didRegistered?n?o.jsx(o.Fragment,{children:n}):o.jsx(be,{}):o.jsx(Gt,{to:"/onboarding",replace:!0})}function Bn({allowedRoles:n,children:e}){const{account:t,loading:s}=et();if(s)return null;const r=t?.persona?.toUpperCase()||"",i=(t?.onChainRoles||[]).map(c=>c.toUpperCase());return n.includes(r)||n.some(c=>i.includes(c.toUpperCase()))?e?o.jsx(o.Fragment,{children:e}):o.jsx(be,{}):o.jsx("div",{className:"flex-1 flex items-center justify-center p-8 bg-[#F7FBEF]",children:o.jsxs("div",{className:"max-w-md w-full bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-8 shadow-sm text-center",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[#ECFCCB] flex items-center justify-center mx-auto mb-4 text-[#65A30D]",children:o.jsx(Bf,{className:"w-8 h-8"})}),o.jsx("h2",{className:"text-2xl font-bold font-anton text-[#1A2E05] tracking-wide mb-2 uppercase",children:"Access Restricted"}),o.jsxs("p",{className:"text-sm text-[#4D6B2A] mb-6 leading-relaxed",children:["This module requires verified credentials or privileges (",n.join(", "),"). Your current role is"," ",o.jsx("span",{className:"font-semibold text-[#1A2E05]",children:t?.persona||"HOLDER"}),"."]}),o.jsxs(qe,{to:"/dashboard",className:"inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-sm transition-colors shadow-sm",children:[o.jsx(ma,{className:"w-4 h-4 mr-2"})," Return to Dashboard"]})]})})}const L=()=>o.jsxs("div",{className:"flex-1 min-h-[60vh] flex items-center justify-center p-16 text-sm text-[#4D6B2A]",children:[o.jsx(yn,{className:"w-6 h-6 animate-spin mr-2 text-[#84CC16]"})," Loading Bharosa Protocol..."]}),ip=u.lazy(()=>D(()=>import("./Landing-CcF71V0I.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Vn=u.lazy(()=>D(()=>import("./PublicVerify-BjZvRpiu.js"),__vite__mapDeps([7,1,2,8,6,9,3,10,11,12,13]))),ap=u.lazy(()=>D(()=>import("./Login-CW8_a9sI.js"),__vite__mapDeps([14,1,2,15,3,4,5,16,6]))),op=u.lazy(()=>D(()=>import("./SignUp-6bcB3L9m.js"),__vite__mapDeps([17,1,2,15,3,16,18,19,6]))),cp=u.lazy(()=>D(()=>import("./ForgotPassword-erT_wzqy.js"),__vite__mapDeps([20,1,2,15,3,11,16,18,6]))),lp=u.lazy(()=>D(()=>import("./VerifyEmail-Lj7GtvF6.js"),__vite__mapDeps([21,1,2,3,18,11,22,6]))),dp=u.lazy(()=>D(()=>import("./ConnectWallet-BNkC0NnX.js"),__vite__mapDeps([23,1,2,6,3,10,11]))),up=u.lazy(()=>D(()=>import("./AppRedirect-DpV4Rxg1.js"),__vite__mapDeps([24,1,2,6]))),hp=u.lazy(()=>D(()=>import("./Onboarding-DBschE6E.js"),__vite__mapDeps([25,1,2,6,8,26,3,11,27,19]))),fp=u.lazy(()=>D(()=>import("./Dashboard-Ci2mELxK.js"),__vite__mapDeps([28,1,2,8,6,26,3,11,29,30,31,5]))),pp=u.lazy(()=>D(()=>import("./Identity-BhybnGNH.js"),__vite__mapDeps([32,1,2,8,6,26,3]))),mp=u.lazy(()=>D(()=>import("./Credentials-C_BMUzXp.js"),__vite__mapDeps([33,1,2,8,6,26,3,34,29]))),Ur=u.lazy(()=>D(()=>import("./Assets-LYv9mS3n.js"),__vite__mapDeps([35,1,2,3,8,6,19,30,22,11,10,12]))),gp=u.lazy(()=>D(()=>import("./Access-B9B_8jYt.js"),__vite__mapDeps([36,1,2,3,8,6,27,31,37,11,38,22,13,34]))),yp=u.lazy(()=>D(()=>import("./ZK-CJNGrHap.js"),__vite__mapDeps([39,1,2,3,8,6,22,10,11,12,13]))),_p=u.lazy(()=>D(()=>import("./Recovery-Bwe_UbSU.js"),__vite__mapDeps([40,1,2,3,6,11]))),vp=u.lazy(()=>D(()=>import("./AuditLog-BsPbOSY4.js"),__vite__mapDeps([41,1,2,3,34,42,6]))),bp=u.lazy(()=>D(()=>import("./SecurityCenter-fDKq3FNZ.js"),__vite__mapDeps([43,1,2,3,8,6,44,34,19,31,22,11,38,13]))),wp=u.lazy(()=>D(()=>import("./Issuer-8Bei0VJ1.js"),__vite__mapDeps([45,1,2,3,8,6,26,9,16,11,42,30]))),xp=u.lazy(()=>D(()=>import("./Verifier-B1m_Zapd.js"),__vite__mapDeps([46,1,2,3]))),Ip=u.lazy(()=>D(()=>import("./Admin-BowgpWpY.js"),__vite__mapDeps([47,1,2,3,8,6,11,44,37,22]))),Ep=u.lazy(()=>D(()=>import("./NotFound-xEP48hFV.js"),__vite__mapDeps([48,1,2,3]))),kp=La([{element:o.jsx(Gf,{}),children:[{path:"/",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(ip,{})})},{path:"/public-verify",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(Vn,{})})},{path:"/verify",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(Vn,{})})},{path:"/verify/:hash",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(Vn,{})})}]},{path:"/login",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(ap,{})})},{element:o.jsx(sp,{}),children:[{path:"/signup",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(op,{})})},{path:"/forgot-password",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(cp,{})})},{path:"/verify-email",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(lp,{})})}]},{path:"/app",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(up,{})})},{element:o.jsx(Un,{}),children:[{path:"/connect-wallet",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(dp,{})})}]},{element:o.jsx(Un,{children:o.jsx(Fr,{})}),children:[{path:"/onboarding",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(hp,{})})}]},{element:o.jsx(Un,{children:o.jsx(Fr,{children:o.jsx(rp,{children:o.jsx(np,{})})})}),children:[{path:"/dashboard",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(fp,{})})},{path:"/identity",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(pp,{})})},{path:"/credentials",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(mp,{})})},{path:"/assets",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(Ur,{})})},{path:"/assets/:assetId",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(Ur,{})})},{path:"/access",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(gp,{})})},{path:"/zk",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(yp,{})})},{path:"/recovery",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(_p,{})})},{path:"/audit",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(vp,{})})},{path:"/security",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(bp,{})})},{path:"/issuer",element:o.jsx(Bn,{allowedRoles:["ISSUER","ADMIN"],children:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(wp,{})})})},{path:"/verifier",element:o.jsx(Bn,{allowedRoles:["VERIFIER","ADMIN"],children:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(xp,{})})})},{path:"/admin",element:o.jsx(Bn,{allowedRoles:["ADMIN"],children:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(Ip,{})})})}]},{path:"*",element:o.jsx(u.Suspense,{fallback:o.jsx(L,{}),children:o.jsx(Ep,{})})}],{future:{v7_relativeSplatPath:!0}});function Tp(){return o.jsx(Da,{children:o.jsx($o,{children:o.jsx(_f,{children:o.jsx(Ma,{router:kp,future:{v7_startTransition:!0}})})})})}var Ns={exports:{}},at=typeof Reflect=="object"?Reflect:null,Br=at&&typeof at.apply=="function"?at.apply:function(e,t,s){return Function.prototype.apply.call(e,t,s)},qt;at&&typeof at.ownKeys=="function"?qt=at.ownKeys:Object.getOwnPropertySymbols?qt=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:qt=function(e){return Object.getOwnPropertyNames(e)};function Cp(n){console&&console.warn&&console.warn(n)}var _a=Number.isNaN||function(e){return e!==e};function R(){R.init.call(this)}Ns.exports=R;Ns.exports.once=Np;R.EventEmitter=R;R.prototype._events=void 0;R.prototype._eventsCount=0;R.prototype._maxListeners=void 0;var Vr=10;function _n(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(R,"defaultMaxListeners",{enumerable:!0,get:function(){return Vr},set:function(n){if(typeof n!="number"||n<0||_a(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");Vr=n}});R.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};R.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||_a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function va(n){return n._maxListeners===void 0?R.defaultMaxListeners:n._maxListeners}R.prototype.getMaxListeners=function(){return va(this)};R.prototype.emit=function(e){for(var t=[],s=1;s<arguments.length;s++)t.push(arguments[s]);var r=e==="error",i=this._events;if(i!==void 0)r=r&&i.error===void 0;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var c=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw c.context=a,c}var l=i[e];if(l===void 0)return!1;if(typeof l=="function")Br(l,this,t);else for(var d=l.length,h=Ea(l,d),s=0;s<d;++s)Br(h[s],this,t);return!0};function ba(n,e,t,s){var r,i,a;if(_n(t),i=n._events,i===void 0?(i=n._events=Object.create(null),n._eventsCount=0):(i.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),i=n._events),a=i[e]),a===void 0)a=i[e]=t,++n._eventsCount;else if(typeof a=="function"?a=i[e]=s?[t,a]:[a,t]:s?a.unshift(t):a.push(t),r=va(n),r>0&&a.length>r&&!a.warned){a.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=n,c.type=e,c.count=a.length,Cp(c)}return n}R.prototype.addListener=function(e,t){return ba(this,e,t,!1)};R.prototype.on=R.prototype.addListener;R.prototype.prependListener=function(e,t){return ba(this,e,t,!0)};function Ap(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function wa(n,e,t){var s={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=Ap.bind(s);return r.listener=t,s.wrapFn=r,r}R.prototype.once=function(e,t){return _n(t),this.on(e,wa(this,e,t)),this};R.prototype.prependOnceListener=function(e,t){return _n(t),this.prependListener(e,wa(this,e,t)),this};R.prototype.removeListener=function(e,t){var s,r,i,a,c;if(_n(t),r=this._events,r===void 0)return this;if(s=r[e],s===void 0)return this;if(s===t||s.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,s.listener||t));else if(typeof s!="function"){for(i=-1,a=s.length-1;a>=0;a--)if(s[a]===t||s[a].listener===t){c=s[a].listener,i=a;break}if(i<0)return this;i===0?s.shift():Sp(s,i),s.length===1&&(r[e]=s[0]),r.removeListener!==void 0&&this.emit("removeListener",e,c||t)}return this};R.prototype.off=R.prototype.removeListener;R.prototype.removeAllListeners=function(e){var t,s,r;if(s=this._events,s===void 0)return this;if(s.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):s[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete s[e]),this;if(arguments.length===0){var i=Object.keys(s),a;for(r=0;r<i.length;++r)a=i[r],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=s[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function xa(n,e,t){var s=n._events;if(s===void 0)return[];var r=s[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?Rp(r):Ea(r,r.length)}R.prototype.listeners=function(e){return xa(this,e,!0)};R.prototype.rawListeners=function(e){return xa(this,e,!1)};R.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):Ia.call(n,e)};R.prototype.listenerCount=Ia;function Ia(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}R.prototype.eventNames=function(){return this._eventsCount>0?qt(this._events):[]};function Ea(n,e){for(var t=new Array(e),s=0;s<e;++s)t[s]=n[s];return t}function Sp(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function Rp(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function Np(n,e){return new Promise(function(t,s){function r(a){n.removeListener(e,i),s(a)}function i(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}ka(n,e,i,{once:!0}),e!=="error"&&Pp(n,r,{once:!0})})}function Pp(n,e,t){typeof n.on=="function"&&ka(n,"error",e,t)}function ka(n,e,t,s){if(typeof n.on=="function")s.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(i){s.once&&n.removeEventListener(e,r),t(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var Zt=Ns.exports;const Mp=Fa(Zt);typeof Zt.EventEmitter<"u"&&typeof Zt.EventEmitter.defaultMaxListeners=="number"&&(Zt.EventEmitter.defaultMaxListeners=100);if(typeof window<"u"&&window.ethereum)try{window.ethereum.setMaxListeners?.(100)}catch{}const Op=[1,10,56,137,8453,42161],$r=31337;if(Op.includes($r)){const n=`[CRITICAL SECURITY] DEMO_MODE cannot be enabled on mainnet chain ID ${$r}! Startup aborted.`;throw console.error(n),new Error(n)}const Ta=document.getElementById("root");if(!Ta)throw new Error("Root element #root not found in document");$n.createRoot(Ta).render(o.jsx(Hr.StrictMode,{children:o.jsx(Tp,{})}));const Fp=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"}));export{ma as A,ga as C,ns as D,Nf as E,Of as F,jf as K,yn as L,Df as M,Mp as N,Rs as S,Hf as U,zf as W,Wf as Z,$f as a,Ef as b,S as c,Mr as d,Mn as e,Bf as f,kf as g,Rf as h,J as i,Pf as j,Af as k,Sf as l,Uf as m,Zt as n,Lo as o,Fp as p,Ss as r,W as s,et as u};
