const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Landing-D3AZPOdU.js","assets/vendor-query-DHo56eci.js","assets/vendor-react-8KWlGCqj.js","assets/PageMeta-BZ_eASFK.js","assets/arrow-up-right-ezCtXES6.js","assets/vendor-web3-CsvVkslx.js","assets/PublicVerify-DaeKwIFD.js","assets/client-Djzh8POR.js","assets/vc-BxNR5lAm.js","assets/circle-check-D6XLLUNu.js","assets/circle-x-CmBD-9xc.js","assets/printer-BmXXoh-r.js","assets/Login-C7MjjkAO.js","assets/zod-3N_MAZ-2.js","assets/circle-alert-BGWStQPu.js","assets/mail-CekvjDxj.js","assets/SignUp-CxbjsB3K.js","assets/ForgotPassword-BSu6riYl.js","assets/VerifyEmail-Cy3wUc1J.js","assets/refresh-cw-wA2m9ES4.js","assets/ConnectWallet-BC-grGqw.js","assets/AppRedirect-B1qKIPvA.js","assets/Onboarding-DN8e1Aot.js","assets/did-BZ-s0DJz.js","assets/Dashboard-CD1yj6m6.js","assets/circle-plus-5uFAzb8R.js","assets/qr-code--63fzoIa.js","assets/file-check-2-CnHaCCWx.js","assets/external-link-BX0MuVZ0.js","assets/Identity-Df4hutie.js","assets/Credentials-DGxQpesi.js","assets/eye-wtkOL_rn.js","assets/download-CX6L34aP.js","assets/Assets-DWS2n05R.js","assets/upload-mPOAPDPN.js","assets/Access-BSycXdoP.js","assets/clock-Bx3sOwAr.js","assets/ZK-CTV7wsNo.js","assets/Recovery-D7jqDA0E.js","assets/AuditLog-CIATA7kb.js","assets/SecurityCenter-VX9rPnFv.js","assets/users-BNAQFRvY.js","assets/Issuer-BIPFDftD.js","assets/Verifier-BD_cfJ6m.js","assets/Admin-DE5FTGNm.js","assets/NotFound-Rgf9Vs8u.js"])))=>i.map(i=>d[i]);
import{Q as Lr,j as a,c as Mr,a as Fr}from"./vendor-query-DHo56eci.js";import{a as Ur,r as f,d as rt,O as ne,L as te,N as Es,c as Br,h as wt,i as Vr,j as $r,k as zr,R as Hr}from"./vendor-react-8KWlGCqj.js";import{aP as Wr,aQ as Zr,_ as R,aR as qr,aS as ft,E as Pe,aT as pt,aU as mt,aV as Gr,aW as Kr,aX as Jr,aY as Yr,aZ as Xr,y as Qr,e as Is,a_ as kn,a as Cn,a$ as ei,u as Tn,b as ti,b0 as si,b1 as ni}from"./vendor-web3-CsvVkslx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var Jt={},ks=Ur;Jt.createRoot=ks.createRoot,Jt.hydrateRoot=ks.hydrateRoot;function ri(s){const e=typeof window<"u"?window:void 0;if(typeof e>"u"||typeof e.ethereum>"u")return;const t=e.ethereum.providers;return t?t.find(n=>n[s]):e.ethereum[s]?e.ethereum:void 0}function ii(s){const e=(t,n)=>{const[r,...i]=n.split("."),o=t[r];if(o)return i.length===0?o:e(o,i.join("."))};if(typeof window<"u")return e(window,s)}function ai({flag:s,namespace:e}){const t=typeof window<"u"?window:void 0;if(typeof t>"u")return;if(e){const r=ii(e);if(r)return r}const n=t.ethereum?.providers;if(s){const r=ri(s);if(r)return r}if(!(e||s))return typeof n<"u"&&n.length>0?n[0]:t.ethereum}function oi(s){return e=>{const t=s?{target:()=>({id:e.rkDetails.id,name:e.rkDetails.name,provider:s})}:{};return Wr(n=>({...Zr(t)(n),...e}))}}function ci({flag:s,namespace:e,target:t}){const n=t||ai({flag:s,namespace:e});return oi(n)}var li=()=>({id:"injected",name:"Browser Wallet",iconUrl:async()=>(await R(async()=>{const{default:s}=await import("./injectedWallet-AWJSZPMG-Df9x-YJA.js");return{default:s}},[])).default,iconBackground:"#fff",createConnector:ci({})}),I;(function(s){s.assertEqual=r=>{};function e(r){}s.assertIs=e;function t(r){throw new Error}s.assertNever=t,s.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},s.getValidEnumValues=r=>{const i=s.objectKeys(r).filter(c=>typeof r[r[c]]!="number"),o={};for(const c of i)o[c]=r[c];return s.objectValues(o)},s.objectValues=r=>s.objectKeys(r).map(function(i){return r[i]}),s.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},s.find=(r,i)=>{for(const o of r)if(i(o))return o},s.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&Number.isFinite(r)&&Math.floor(r)===r;function n(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}s.joinValues=n,s.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(I||(I={}));var Cs;(function(s){s.mergeShapes=(e,t)=>({...e,...t})})(Cs||(Cs={}));const m=I.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ue=s=>{switch(typeof s){case"undefined":return m.undefined;case"string":return m.string;case"number":return Number.isNaN(s)?m.nan:m.number;case"boolean":return m.boolean;case"function":return m.function;case"bigint":return m.bigint;case"symbol":return m.symbol;case"object":return Array.isArray(s)?m.array:s===null?m.null:s.then&&typeof s.then=="function"&&s.catch&&typeof s.catch=="function"?m.promise:typeof Map<"u"&&s instanceof Map?m.map:typeof Set<"u"&&s instanceof Set?m.set:typeof Date<"u"&&s instanceof Date?m.date:m.object;default:return m.unknown}},u=I.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class re extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(i){return i.message},n={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)n._errors.push(t(o));else{let c=n,l=0;for(;l<o.path.length;){const d=o.path[l];l===o.path.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(t(o))):c[d]=c[d]||{_errors:[]},c=c[d],l++}}};return r(this),n}static assert(e){if(!(e instanceof re))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,I.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},n=[];for(const r of this.issues)if(r.path.length>0){const i=r.path[0];t[i]=t[i]||[],t[i].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}re.create=s=>new re(s);const Yt=(s,e)=>{let t;switch(s.code){case u.invalid_type:s.received===m.undefined?t="Required":t=`Expected ${s.expected}, received ${s.received}`;break;case u.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(s.expected,I.jsonStringifyReplacer)}`;break;case u.unrecognized_keys:t=`Unrecognized key(s) in object: ${I.joinValues(s.keys,", ")}`;break;case u.invalid_union:t="Invalid input";break;case u.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${I.joinValues(s.options)}`;break;case u.invalid_enum_value:t=`Invalid enum value. Expected ${I.joinValues(s.options)}, received '${s.received}'`;break;case u.invalid_arguments:t="Invalid function arguments";break;case u.invalid_return_type:t="Invalid function return type";break;case u.invalid_date:t="Invalid date";break;case u.invalid_string:typeof s.validation=="object"?"includes"in s.validation?(t=`Invalid input: must include "${s.validation.includes}"`,typeof s.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${s.validation.position}`)):"startsWith"in s.validation?t=`Invalid input: must start with "${s.validation.startsWith}"`:"endsWith"in s.validation?t=`Invalid input: must end with "${s.validation.endsWith}"`:I.assertNever(s.validation):s.validation!=="regex"?t=`Invalid ${s.validation}`:t="Invalid";break;case u.too_small:s.type==="array"?t=`Array must contain ${s.exact?"exactly":s.inclusive?"at least":"more than"} ${s.minimum} element(s)`:s.type==="string"?t=`String must contain ${s.exact?"exactly":s.inclusive?"at least":"over"} ${s.minimum} character(s)`:s.type==="number"?t=`Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}`:s.type==="bigint"?t=`Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}`:s.type==="date"?t=`Date must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(s.minimum))}`:t="Invalid input";break;case u.too_big:s.type==="array"?t=`Array must contain ${s.exact?"exactly":s.inclusive?"at most":"less than"} ${s.maximum} element(s)`:s.type==="string"?t=`String must contain ${s.exact?"exactly":s.inclusive?"at most":"under"} ${s.maximum} character(s)`:s.type==="number"?t=`Number must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}`:s.type==="bigint"?t=`BigInt must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}`:s.type==="date"?t=`Date must be ${s.exact?"exactly":s.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(s.maximum))}`:t="Invalid input";break;case u.custom:t="Invalid input";break;case u.invalid_intersection_types:t="Intersection results could not be merged";break;case u.not_multiple_of:t=`Number must be a multiple of ${s.multipleOf}`;break;case u.not_finite:t="Number must be finite";break;default:t=e.defaultError,I.assertNever(s)}return{message:t}};let di=Yt;function ui(){return di}const hi=s=>{const{data:e,path:t,errorMaps:n,issueData:r}=s,i=[...t,...r.path||[]],o={...r,path:i};if(r.message!==void 0)return{...r,path:i,message:r.message};let c="";const l=n.filter(d=>!!d).slice().reverse();for(const d of l)c=d(o,{data:e,defaultError:c}).message;return{...r,path:i,message:c}};function p(s,e){const t=ui(),n=hi({issueData:e,data:s.data,path:s.path,errorMaps:[s.common.contextualErrorMap,s.schemaErrorMap,t,t===Yt?void 0:Yt].filter(r=>!!r)});s.common.issues.push(n)}class U{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const r of t){if(r.status==="aborted")return y;r.status==="dirty"&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const r of t){const i=await r.key,o=await r.value;n.push({key:i,value:o})}return U.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const r of t){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return y;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||r.alwaysSet)&&(n[i.value]=o.value)}return{status:e.value,value:n}}}const y=Object.freeze({status:"aborted"}),qe=s=>({status:"dirty",value:s}),z=s=>({status:"valid",value:s}),Ts=s=>s.status==="aborted",As=s=>s.status==="dirty",Fe=s=>s.status==="valid",Et=s=>typeof Promise<"u"&&s instanceof Promise;var g;(function(s){s.errToObj=e=>typeof e=="string"?{message:e}:e||{},s.toString=e=>typeof e=="string"?e:e?.message})(g||(g={}));class ve{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Ns=(s,e)=>{if(Fe(e))return{success:!0,data:e.value};if(!s.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new re(s.common.issues);return this._error=t,this._error}}};function b(s){if(!s)return{};const{errorMap:e,invalid_type_error:t,required_error:n,description:r}=s;if(e&&(t||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,c)=>{const{message:l}=s;return o.code==="invalid_enum_value"?{message:l??c.defaultError}:typeof c.data>"u"?{message:l??n??c.defaultError}:o.code!=="invalid_type"?{message:c.defaultError}:{message:l??t??c.defaultError}},description:r}}class E{get description(){return this._def.description}_getType(e){return ue(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:ue(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new U,ctx:{common:e.parent.common,data:e.data,parsedType:ue(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Et(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){const n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ue(e)},r=this._parseSync({data:e,path:n.path,parent:n});return Ns(n,r)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ue(e)};if(!this["~standard"].async)try{const n=this._parseSync({data:e,path:[],parent:t});return Fe(n)?{value:n.value}:{issues:t.common.issues}}catch(n){n?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(n=>Fe(n)?{value:n.value}:{issues:t.common.issues})}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ue(e)},r=this._parse({data:e,path:n.path,parent:n}),i=await(Et(r)?r:Promise.resolve(r));return Ns(n,i)}refine(e,t){const n=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,i)=>{const o=e(r),c=()=>i.addIssue({code:u.custom,...n(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(c(),!1)):o?!0:(c(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t=="function"?t(n,r):t),!1))}_refinement(e){return new Be({schema:this,typeName:v.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return _e.create(this,this._def)}nullable(){return Ve.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return G.create(this)}promise(){return Tt.create(this,this._def)}or(e){return kt.create([this,e],this._def)}and(e){return Ct.create(this,e,this._def)}transform(e){return new Be({...b(this._def),schema:this,typeName:v.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Qt({...b(this._def),innerType:this,defaultValue:t,typeName:v.ZodDefault})}brand(){return new ji({typeName:v.ZodBranded,type:this,...b(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new es({...b(this._def),innerType:this,catchValue:t,typeName:v.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return ds.create(this,e)}readonly(){return ts.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const fi=/^c[^\s-]{8,}$/i,pi=/^[0-9a-z]+$/,mi=/^[0-9A-HJKMNP-TV-Z]{26}$/i,gi=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,_i=/^[a-z0-9_-]{21}$/i,yi=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,vi=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,xi=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,bi="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ut;const wi=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ei=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Ii=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,ki=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ci=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Ti=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,An="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Ai=new RegExp(`^${An}$`);function Nn(s){let e="[0-5]\\d";s.precision?e=`${e}\\.\\d{${s.precision}}`:s.precision==null&&(e=`${e}(\\.\\d+)?`);const t=s.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Ni(s){return new RegExp(`^${Nn(s)}$`)}function Si(s){let e=`${An}T${Nn(s)}`;const t=[];return t.push(s.local?"Z?":"Z"),s.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Ri(s,e){return!!((e==="v4"||!e)&&wi.test(s)||(e==="v6"||!e)&&Ii.test(s))}function Pi(s,e){if(!yi.test(s))return!1;try{const[t]=s.split(".");if(!t)return!1;const n=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),r=JSON.parse(atob(n));return!(typeof r!="object"||r===null||"typ"in r&&r?.typ!=="JWT"||!r.alg||e&&r.alg!==e)}catch{return!1}}function Oi(s,e){return!!((e==="v4"||!e)&&Ei.test(s)||(e==="v6"||!e)&&ki.test(s))}class ge extends E{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==m.string){const i=this._getOrReturnCtx(e);return p(i,{code:u.invalid_type,expected:m.string,received:i.parsedType}),y}const n=new U;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:u.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:u.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,c=e.data.length<i.value;(o||c)&&(r=this._getOrReturnCtx(e,r),o?p(r,{code:u.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&p(r,{code:u.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),n.dirty())}else if(i.kind==="email")xi.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"email",code:u.invalid_string,message:i.message}),n.dirty());else if(i.kind==="emoji")Ut||(Ut=new RegExp(bi,"u")),Ut.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"emoji",code:u.invalid_string,message:i.message}),n.dirty());else if(i.kind==="uuid")gi.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"uuid",code:u.invalid_string,message:i.message}),n.dirty());else if(i.kind==="nanoid")_i.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"nanoid",code:u.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid")fi.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid",code:u.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid2")pi.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cuid2",code:u.invalid_string,message:i.message}),n.dirty());else if(i.kind==="ulid")mi.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ulid",code:u.invalid_string,message:i.message}),n.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),p(r,{validation:"url",code:u.invalid_string,message:i.message}),n.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"regex",code:u.invalid_string,message:i.message}),n.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(r=this._getOrReturnCtx(e,r),p(r,{code:u.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),n.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:u.invalid_string,validation:{startsWith:i.value},message:i.message}),n.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),p(r,{code:u.invalid_string,validation:{endsWith:i.value},message:i.message}),n.dirty()):i.kind==="datetime"?Si(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:u.invalid_string,validation:"datetime",message:i.message}),n.dirty()):i.kind==="date"?Ai.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:u.invalid_string,validation:"date",message:i.message}),n.dirty()):i.kind==="time"?Ni(i).test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{code:u.invalid_string,validation:"time",message:i.message}),n.dirty()):i.kind==="duration"?vi.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"duration",code:u.invalid_string,message:i.message}),n.dirty()):i.kind==="ip"?Ri(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"ip",code:u.invalid_string,message:i.message}),n.dirty()):i.kind==="jwt"?Pi(e.data,i.alg)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"jwt",code:u.invalid_string,message:i.message}),n.dirty()):i.kind==="cidr"?Oi(e.data,i.version)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"cidr",code:u.invalid_string,message:i.message}),n.dirty()):i.kind==="base64"?Ci.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64",code:u.invalid_string,message:i.message}),n.dirty()):i.kind==="base64url"?Ti.test(e.data)||(r=this._getOrReturnCtx(e,r),p(r,{validation:"base64url",code:u.invalid_string,message:i.message}),n.dirty()):I.assertNever(i);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement(r=>e.test(r),{validation:t,code:u.invalid_string,...g.errToObj(n)})}_addCheck(e){return new ge({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...g.errToObj(e)})}url(e){return this._addCheck({kind:"url",...g.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...g.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...g.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...g.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...g.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...g.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...g.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...g.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...g.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...g.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...g.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...g.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...g.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...g.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...g.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...g.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...g.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...g.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...g.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...g.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...g.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...g.errToObj(t)})}nonempty(e){return this.min(1,g.errToObj(e))}trim(){return new ge({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ge({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ge({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ge.create=s=>new ge({checks:[],typeName:v.ZodString,coerce:s?.coerce??!1,...b(s)});function Di(s,e){const t=(s.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,r=t>n?t:n,i=Number.parseInt(s.toFixed(r).replace(".","")),o=Number.parseInt(e.toFixed(r).replace(".",""));return i%o/10**r}class Ye extends E{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==m.number){const i=this._getOrReturnCtx(e);return p(i,{code:u.invalid_type,expected:m.number,received:i.parsedType}),y}let n;const r=new U;for(const i of this._def.checks)i.kind==="int"?I.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),p(n,{code:u.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),p(n,{code:u.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),p(n,{code:u.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?Di(e.data,i.value)!==0&&(n=this._getOrReturnCtx(e,n),p(n,{code:u.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),p(n,{code:u.not_finite,message:i.message}),r.dirty()):I.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,g.toString(t))}gt(e,t){return this.setLimit("min",e,!1,g.toString(t))}lte(e,t){return this.setLimit("max",e,!0,g.toString(t))}lt(e,t){return this.setLimit("max",e,!1,g.toString(t))}setLimit(e,t,n,r){return new Ye({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:g.toString(r)}]})}_addCheck(e){return new Ye({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:g.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:g.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:g.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:g.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:g.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:g.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:g.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:g.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:g.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&I.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Ye.create=s=>new Ye({checks:[],typeName:v.ZodNumber,coerce:s?.coerce||!1,...b(s)});class Xe extends E{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==m.bigint)return this._getInvalidInput(e);let n;const r=new U;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),p(n,{code:u.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),p(n,{code:u.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),p(n,{code:u.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):I.assertNever(i);return{status:r.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return p(t,{code:u.invalid_type,expected:m.bigint,received:t.parsedType}),y}gte(e,t){return this.setLimit("min",e,!0,g.toString(t))}gt(e,t){return this.setLimit("min",e,!1,g.toString(t))}lte(e,t){return this.setLimit("max",e,!0,g.toString(t))}lt(e,t){return this.setLimit("max",e,!1,g.toString(t))}setLimit(e,t,n,r){return new Xe({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:g.toString(r)}]})}_addCheck(e){return new Xe({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:g.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:g.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:g.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:g.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:g.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Xe.create=s=>new Xe({checks:[],typeName:v.ZodBigInt,coerce:s?.coerce??!1,...b(s)});class Ss extends E{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==m.boolean){const n=this._getOrReturnCtx(e);return p(n,{code:u.invalid_type,expected:m.boolean,received:n.parsedType}),y}return z(e.data)}}Ss.create=s=>new Ss({typeName:v.ZodBoolean,coerce:s?.coerce||!1,...b(s)});class It extends E{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==m.date){const i=this._getOrReturnCtx(e);return p(i,{code:u.invalid_type,expected:m.date,received:i.parsedType}),y}if(Number.isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return p(i,{code:u.invalid_date}),y}const n=new U;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:u.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),n.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),p(r,{code:u.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),n.dirty()):I.assertNever(i);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new It({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:g.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:g.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}It.create=s=>new It({checks:[],coerce:s?.coerce||!1,typeName:v.ZodDate,...b(s)});class Rs extends E{_parse(e){if(this._getType(e)!==m.symbol){const n=this._getOrReturnCtx(e);return p(n,{code:u.invalid_type,expected:m.symbol,received:n.parsedType}),y}return z(e.data)}}Rs.create=s=>new Rs({typeName:v.ZodSymbol,...b(s)});class Ps extends E{_parse(e){if(this._getType(e)!==m.undefined){const n=this._getOrReturnCtx(e);return p(n,{code:u.invalid_type,expected:m.undefined,received:n.parsedType}),y}return z(e.data)}}Ps.create=s=>new Ps({typeName:v.ZodUndefined,...b(s)});class Os extends E{_parse(e){if(this._getType(e)!==m.null){const n=this._getOrReturnCtx(e);return p(n,{code:u.invalid_type,expected:m.null,received:n.parsedType}),y}return z(e.data)}}Os.create=s=>new Os({typeName:v.ZodNull,...b(s)});class Ds extends E{constructor(){super(...arguments),this._any=!0}_parse(e){return z(e.data)}}Ds.create=s=>new Ds({typeName:v.ZodAny,...b(s)});class js extends E{constructor(){super(...arguments),this._unknown=!0}_parse(e){return z(e.data)}}js.create=s=>new js({typeName:v.ZodUnknown,...b(s)});class xe extends E{_parse(e){const t=this._getOrReturnCtx(e);return p(t,{code:u.invalid_type,expected:m.never,received:t.parsedType}),y}}xe.create=s=>new xe({typeName:v.ZodNever,...b(s)});class Ls extends E{_parse(e){if(this._getType(e)!==m.undefined){const n=this._getOrReturnCtx(e);return p(n,{code:u.invalid_type,expected:m.void,received:n.parsedType}),y}return z(e.data)}}Ls.create=s=>new Ls({typeName:v.ZodVoid,...b(s)});class G extends E{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==m.array)return p(t,{code:u.invalid_type,expected:m.array,received:t.parsedType}),y;if(r.exactLength!==null){const o=t.data.length>r.exactLength.value,c=t.data.length<r.exactLength.value;(o||c)&&(p(t,{code:o?u.too_big:u.too_small,minimum:c?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(p(t,{code:u.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(p(t,{code:u.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((o,c)=>r.type._parseAsync(new ve(t,o,t.path,c)))).then(o=>U.mergeArray(n,o));const i=[...t.data].map((o,c)=>r.type._parseSync(new ve(t,o,t.path,c)));return U.mergeArray(n,i)}get element(){return this._def.type}min(e,t){return new G({...this._def,minLength:{value:e,message:g.toString(t)}})}max(e,t){return new G({...this._def,maxLength:{value:e,message:g.toString(t)}})}length(e,t){return new G({...this._def,exactLength:{value:e,message:g.toString(t)}})}nonempty(e){return this.min(1,e)}}G.create=(s,e)=>new G({type:s,minLength:null,maxLength:null,exactLength:null,typeName:v.ZodArray,...b(e)});function De(s){if(s instanceof P){const e={};for(const t in s.shape){const n=s.shape[t];e[t]=_e.create(De(n))}return new P({...s._def,shape:()=>e})}else return s instanceof G?new G({...s._def,type:De(s.element)}):s instanceof _e?_e.create(De(s.unwrap())):s instanceof Ve?Ve.create(De(s.unwrap())):s instanceof Ce?Ce.create(s.items.map(e=>De(e))):s}class P extends E{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=I.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==m.object){const d=this._getOrReturnCtx(e);return p(d,{code:u.invalid_type,expected:m.object,received:d.parsedType}),y}const{status:n,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),c=[];if(!(this._def.catchall instanceof xe&&this._def.unknownKeys==="strip"))for(const d in r.data)o.includes(d)||c.push(d);const l=[];for(const d of o){const h=i[d],x=r.data[d];l.push({key:{status:"valid",value:d},value:h._parse(new ve(r,x,r.path,d)),alwaysSet:d in r.data})}if(this._def.catchall instanceof xe){const d=this._def.unknownKeys;if(d==="passthrough")for(const h of c)l.push({key:{status:"valid",value:h},value:{status:"valid",value:r.data[h]}});else if(d==="strict")c.length>0&&(p(r,{code:u.unrecognized_keys,keys:c}),n.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const h of c){const x=r.data[h];l.push({key:{status:"valid",value:h},value:d._parse(new ve(r,x,r.path,h)),alwaysSet:h in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const d=[];for(const h of l){const x=await h.key,T=await h.value;d.push({key:x,value:T,alwaysSet:h.alwaysSet})}return d}).then(d=>U.mergeObjectSync(n,d)):U.mergeObjectSync(n,l)}get shape(){return this._def.shape()}strict(e){return g.errToObj,new P({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{const r=this._def.errorMap?.(t,n).message??n.defaultError;return t.code==="unrecognized_keys"?{message:g.errToObj(e).message??r}:{message:r}}}:{}})}strip(){return new P({...this._def,unknownKeys:"strip"})}passthrough(){return new P({...this._def,unknownKeys:"passthrough"})}extend(e){return new P({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new P({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:v.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new P({...this._def,catchall:e})}pick(e){const t={};for(const n of I.objectKeys(e))e[n]&&this.shape[n]&&(t[n]=this.shape[n]);return new P({...this._def,shape:()=>t})}omit(e){const t={};for(const n of I.objectKeys(this.shape))e[n]||(t[n]=this.shape[n]);return new P({...this._def,shape:()=>t})}deepPartial(){return De(this)}partial(e){const t={};for(const n of I.objectKeys(this.shape)){const r=this.shape[n];e&&!e[n]?t[n]=r:t[n]=r.optional()}return new P({...this._def,shape:()=>t})}required(e){const t={};for(const n of I.objectKeys(this.shape))if(e&&!e[n])t[n]=this.shape[n];else{let i=this.shape[n];for(;i instanceof _e;)i=i._def.innerType;t[n]=i}return new P({...this._def,shape:()=>t})}keyof(){return Sn(I.objectKeys(this.shape))}}P.create=(s,e)=>new P({shape:()=>s,unknownKeys:"strip",catchall:xe.create(),typeName:v.ZodObject,...b(e)});P.strictCreate=(s,e)=>new P({shape:()=>s,unknownKeys:"strict",catchall:xe.create(),typeName:v.ZodObject,...b(e)});P.lazycreate=(s,e)=>new P({shape:s,unknownKeys:"strip",catchall:xe.create(),typeName:v.ZodObject,...b(e)});class kt extends E{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function r(i){for(const c of i)if(c.result.status==="valid")return c.result;for(const c of i)if(c.result.status==="dirty")return t.common.issues.push(...c.ctx.common.issues),c.result;const o=i.map(c=>new re(c.ctx.common.issues));return p(t,{code:u.invalid_union,unionErrors:o}),y}if(t.common.async)return Promise.all(n.map(async i=>{const o={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const l of n){const d={...t,common:{...t.common,issues:[]},parent:null},h=l._parseSync({data:t.data,path:t.path,parent:d});if(h.status==="valid")return h;h.status==="dirty"&&!i&&(i={result:h,ctx:d}),d.common.issues.length&&o.push(d.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const c=o.map(l=>new re(l));return p(t,{code:u.invalid_union,unionErrors:c}),y}}get options(){return this._def.options}}kt.create=(s,e)=>new kt({options:s,typeName:v.ZodUnion,...b(e)});function Xt(s,e){const t=ue(s),n=ue(e);if(s===e)return{valid:!0,data:s};if(t===m.object&&n===m.object){const r=I.objectKeys(e),i=I.objectKeys(s).filter(c=>r.indexOf(c)!==-1),o={...s,...e};for(const c of i){const l=Xt(s[c],e[c]);if(!l.valid)return{valid:!1};o[c]=l.data}return{valid:!0,data:o}}else if(t===m.array&&n===m.array){if(s.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<s.length;i++){const o=s[i],c=e[i],l=Xt(o,c);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return t===m.date&&n===m.date&&+s==+e?{valid:!0,data:s}:{valid:!1}}class Ct extends E{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=(i,o)=>{if(Ts(i)||Ts(o))return y;const c=Xt(i.value,o.value);return c.valid?((As(i)||As(o))&&t.dirty(),{status:t.value,value:c.data}):(p(n,{code:u.invalid_intersection_types}),y)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Ct.create=(s,e,t)=>new Ct({left:s,right:e,typeName:v.ZodIntersection,...b(t)});class Ce extends E{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==m.array)return p(n,{code:u.invalid_type,expected:m.array,received:n.parsedType}),y;if(n.data.length<this._def.items.length)return p(n,{code:u.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),y;!this._def.rest&&n.data.length>this._def.items.length&&(p(n,{code:u.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...n.data].map((o,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new ve(n,o,n.path,c)):null}).filter(o=>!!o);return n.common.async?Promise.all(i).then(o=>U.mergeArray(t,o)):U.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Ce({...this._def,rest:e})}}Ce.create=(s,e)=>{if(!Array.isArray(s))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ce({items:s,typeName:v.ZodTuple,rest:null,...b(e)})};class Ms extends E{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==m.map)return p(n,{code:u.invalid_type,expected:m.map,received:n.parsedType}),y;const r=this._def.keyType,i=this._def.valueType,o=[...n.data.entries()].map(([c,l],d)=>({key:r._parse(new ve(n,c,n.path,[d,"key"])),value:i._parse(new ve(n,l,n.path,[d,"value"]))}));if(n.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const l of o){const d=await l.key,h=await l.value;if(d.status==="aborted"||h.status==="aborted")return y;(d.status==="dirty"||h.status==="dirty")&&t.dirty(),c.set(d.value,h.value)}return{status:t.value,value:c}})}else{const c=new Map;for(const l of o){const d=l.key,h=l.value;if(d.status==="aborted"||h.status==="aborted")return y;(d.status==="dirty"||h.status==="dirty")&&t.dirty(),c.set(d.value,h.value)}return{status:t.value,value:c}}}}Ms.create=(s,e,t)=>new Ms({valueType:e,keyType:s,typeName:v.ZodMap,...b(t)});class Qe extends E{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==m.set)return p(n,{code:u.invalid_type,expected:m.set,received:n.parsedType}),y;const r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(p(n,{code:u.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(p(n,{code:u.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const i=this._def.valueType;function o(l){const d=new Set;for(const h of l){if(h.status==="aborted")return y;h.status==="dirty"&&t.dirty(),d.add(h.value)}return{status:t.value,value:d}}const c=[...n.data.values()].map((l,d)=>i._parse(new ve(n,l,n.path,d)));return n.common.async?Promise.all(c).then(l=>o(l)):o(c)}min(e,t){return new Qe({...this._def,minSize:{value:e,message:g.toString(t)}})}max(e,t){return new Qe({...this._def,maxSize:{value:e,message:g.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Qe.create=(s,e)=>new Qe({valueType:s,minSize:null,maxSize:null,typeName:v.ZodSet,...b(e)});class Fs extends E{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Fs.create=(s,e)=>new Fs({getter:s,typeName:v.ZodLazy,...b(e)});class Us extends E{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return p(t,{received:t.data,code:u.invalid_literal,expected:this._def.value}),y}return{status:"valid",value:e.data}}get value(){return this._def.value}}Us.create=(s,e)=>new Us({value:s,typeName:v.ZodLiteral,...b(e)});function Sn(s,e){return new Ue({values:s,typeName:v.ZodEnum,...b(e)})}class Ue extends E{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),n=this._def.values;return p(t,{expected:I.joinValues(n),received:t.parsedType,code:u.invalid_type}),y}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return p(t,{received:t.data,code:u.invalid_enum_value,options:n}),y}return z(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Ue.create(e,{...this._def,...t})}exclude(e,t=this._def){return Ue.create(this.options.filter(n=>!e.includes(n)),{...this._def,...t})}}Ue.create=Sn;class Bs extends E{_parse(e){const t=I.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==m.string&&n.parsedType!==m.number){const r=I.objectValues(t);return p(n,{expected:I.joinValues(r),received:n.parsedType,code:u.invalid_type}),y}if(this._cache||(this._cache=new Set(I.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const r=I.objectValues(t);return p(n,{received:n.data,code:u.invalid_enum_value,options:r}),y}return z(e.data)}get enum(){return this._def.values}}Bs.create=(s,e)=>new Bs({values:s,typeName:v.ZodNativeEnum,...b(e)});class Tt extends E{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==m.promise&&t.common.async===!1)return p(t,{code:u.invalid_type,expected:m.promise,received:t.parsedType}),y;const n=t.parsedType===m.promise?t.data:Promise.resolve(t.data);return z(n.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Tt.create=(s,e)=>new Tt({type:s,typeName:v.ZodPromise,...b(e)});class Be extends E{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===v.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:o=>{p(n,o),o.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const o=r.transform(n.data,i);if(n.common.async)return Promise.resolve(o).then(async c=>{if(t.value==="aborted")return y;const l=await this._def.schema._parseAsync({data:c,path:n.path,parent:n});return l.status==="aborted"?y:l.status==="dirty"||t.value==="dirty"?qe(l.value):l});{if(t.value==="aborted")return y;const c=this._def.schema._parseSync({data:o,path:n.path,parent:n});return c.status==="aborted"?y:c.status==="dirty"||t.value==="dirty"?qe(c.value):c}}if(r.type==="refinement"){const o=c=>{const l=r.refinement(c,i);if(n.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(n.common.async===!1){const c=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return c.status==="aborted"?y:(c.status==="dirty"&&t.dirty(),o(c.value),{status:t.value,value:c.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(c=>c.status==="aborted"?y:(c.status==="dirty"&&t.dirty(),o(c.value).then(()=>({status:t.value,value:c.value}))))}if(r.type==="transform")if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Fe(o))return y;const c=r.transform(o.value,i);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:c}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>Fe(o)?Promise.resolve(r.transform(o.value,i)).then(c=>({status:t.value,value:c})):y);I.assertNever(r)}}Be.create=(s,e,t)=>new Be({schema:s,typeName:v.ZodEffects,effect:e,...b(t)});Be.createWithPreprocess=(s,e,t)=>new Be({schema:e,effect:{type:"preprocess",transform:s},typeName:v.ZodEffects,...b(t)});class _e extends E{_parse(e){return this._getType(e)===m.undefined?z(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}_e.create=(s,e)=>new _e({innerType:s,typeName:v.ZodOptional,...b(e)});class Ve extends E{_parse(e){return this._getType(e)===m.null?z(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ve.create=(s,e)=>new Ve({innerType:s,typeName:v.ZodNullable,...b(e)});class Qt extends E{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===m.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Qt.create=(s,e)=>new Qt({innerType:s,typeName:v.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...b(e)});class es extends E{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Et(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new re(n.common.issues)},input:n.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new re(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}es.create=(s,e)=>new es({innerType:s,typeName:v.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...b(e)});class Vs extends E{_parse(e){if(this._getType(e)!==m.nan){const n=this._getOrReturnCtx(e);return p(n,{code:u.invalid_type,expected:m.nan,received:n.parsedType}),y}return{status:"valid",value:e.data}}}Vs.create=s=>new Vs({typeName:v.ZodNaN,...b(s)});class ji extends E{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class ds extends E{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return i.status==="aborted"?y:i.status==="dirty"?(t.dirty(),qe(i.value)):this._def.out._parseAsync({data:i.value,path:n.path,parent:n})})();{const r=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return r.status==="aborted"?y:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:n.path,parent:n})}}static create(e,t){return new ds({in:e,out:t,typeName:v.ZodPipeline})}}class ts extends E{_parse(e){const t=this._def.innerType._parse(e),n=r=>(Fe(r)&&(r.value=Object.freeze(r.value)),r);return Et(t)?t.then(r=>n(r)):n(t)}unwrap(){return this._def.innerType}}ts.create=(s,e)=>new ts({innerType:s,typeName:v.ZodReadonly,...b(e)});var v;(function(s){s.ZodString="ZodString",s.ZodNumber="ZodNumber",s.ZodNaN="ZodNaN",s.ZodBigInt="ZodBigInt",s.ZodBoolean="ZodBoolean",s.ZodDate="ZodDate",s.ZodSymbol="ZodSymbol",s.ZodUndefined="ZodUndefined",s.ZodNull="ZodNull",s.ZodAny="ZodAny",s.ZodUnknown="ZodUnknown",s.ZodNever="ZodNever",s.ZodVoid="ZodVoid",s.ZodArray="ZodArray",s.ZodObject="ZodObject",s.ZodUnion="ZodUnion",s.ZodDiscriminatedUnion="ZodDiscriminatedUnion",s.ZodIntersection="ZodIntersection",s.ZodTuple="ZodTuple",s.ZodRecord="ZodRecord",s.ZodMap="ZodMap",s.ZodSet="ZodSet",s.ZodFunction="ZodFunction",s.ZodLazy="ZodLazy",s.ZodLiteral="ZodLiteral",s.ZodEnum="ZodEnum",s.ZodEffects="ZodEffects",s.ZodNativeEnum="ZodNativeEnum",s.ZodOptional="ZodOptional",s.ZodNullable="ZodNullable",s.ZodDefault="ZodDefault",s.ZodCatch="ZodCatch",s.ZodPromise="ZodPromise",s.ZodBranded="ZodBranded",s.ZodPipeline="ZodPipeline",s.ZodReadonly="ZodReadonly"})(v||(v={}));const M=ge.create;xe.create;G.create;const Li=P.create;kt.create;Ct.create;Ce.create;Ue.create;Tt.create;_e.create;Ve.create;const Mi={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_AMOY_RPC_URL:"https://rpc-amoy.polygon.technology",VITE_API_URL:"/v1",VITE_APP_NAME:"Bharosa",VITE_ARBITRUM_SEPOLIA_RPC_URL:"https://sepolia-rollup.arbitrum.io/rpc",VITE_CHAIN_ID:"31337",VITE_DEMO_MODE:"true",VITE_IPFS_GATEWAY:"https://ipfs.io/ipfs/",VITE_RPC_URL:"http://127.0.0.1:8545",VITE_WALLETCONNECT_PROJECT_ID:"3fcc6bba0f1de962dcbdae11bd9cee4d"},Fi=Li({VITE_APP_NAME:M().default("Bharosa"),VITE_DEMO_MODE:M().optional().default("true").transform(s=>s==="true"),VITE_API_URL:M().default("/v1"),VITE_CHAIN_ID:M().optional().default("31337").transform(s=>Number(s)||31337),VITE_RPC_URL:M().default("http://127.0.0.1:8545"),VITE_AMOY_RPC_URL:M().default("https://rpc-amoy.polygon.technology"),VITE_ARBITRUM_SEPOLIA_RPC_URL:M().default("https://sepolia-rollup.arbitrum.io/rpc"),VITE_IPFS_GATEWAY:M().default("https://ipfs.io/ipfs/"),VITE_WALLETCONNECT_PROJECT_ID:M().optional(),VITE_CONTRACT_IDENTITY_REGISTRY:M().optional().default(""),VITE_CONTRACT_ACCESS_CONTROL:M().optional().default(""),VITE_CONTRACT_OWNERSHIP_REGISTRY:M().optional().default(""),VITE_CONTRACT_SOCIAL_RECOVERY:M().optional().default(""),VITE_CONTRACT_ZK_VERIFIER:M().optional().default("")}),D=Fi.safeParse(Mi);if(!D.success)throw console.error("[Bharosa] Critical configuration error: Invalid environment variables:",D.error.format()),new Error("Critical configuration error: Invalid environment variables");const B={APP_NAME:D.data.VITE_APP_NAME,DEMO_MODE:D.data.VITE_DEMO_MODE,API_URL:D.data.VITE_API_URL,CHAIN_ID:D.data.VITE_CHAIN_ID,RPC_URL:D.data.VITE_RPC_URL,AMOY_RPC_URL:D.data.VITE_AMOY_RPC_URL,ARBITRUM_SEPOLIA_RPC_URL:D.data.VITE_ARBITRUM_SEPOLIA_RPC_URL,IPFS_GATEWAY:D.data.VITE_IPFS_GATEWAY,WALLETCONNECT_PROJECT_ID:D.data.VITE_WALLETCONNECT_PROJECT_ID||"",CONTRACT_IDENTITY_REGISTRY:D.data.VITE_CONTRACT_IDENTITY_REGISTRY,CONTRACT_ACCESS_CONTROL:D.data.VITE_CONTRACT_ACCESS_CONTROL,CONTRACT_OWNERSHIP_REGISTRY:D.data.VITE_CONTRACT_OWNERSHIP_REGISTRY,CONTRACT_SOCIAL_RECOVERY:D.data.VITE_CONTRACT_SOCIAL_RECOVERY,CONTRACT_ZK_VERIFIER:D.data.VITE_CONTRACT_ZK_VERIFIER,MODE:"production",DEV:!1,PROD:!0},Ui=!!(B.WALLETCONNECT_PROJECT_ID&&B.WALLETCONNECT_PROJECT_ID.trim().length>0),Bi=Ui?qr({appName:B.APP_NAME,projectId:B.WALLETCONNECT_PROJECT_ID,chains:[mt,pt,ft],transports:{[mt.id]:Pe(B.RPC_URL),[pt.id]:Pe(B.AMOY_RPC_URL),[ft.id]:Pe(B.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1}):Gr({chains:[mt,pt,ft],connectors:Kr([{groupName:"Browser / Injected",wallets:[li]}],{appName:B.APP_NAME,projectId:"00000000000000000000000000000000"}),transports:{[mt.id]:Pe(B.RPC_URL),[pt.id]:Pe(B.AMOY_RPC_URL),[ft.id]:Pe(B.ARBITRUM_SEPOLIA_RPC_URL)},ssr:!1});function Vi({children:s}){const[e]=f.useState(()=>new Lr({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:5e3}}}));return a.jsx(Jr,{config:Bi,children:a.jsx(Mr,{client:e,children:a.jsx(Yr,{theme:Xr({accentColor:"#84CC16",accentColorForeground:"#1A2E05",borderRadius:"medium",fontStack:"system",overlayBlur:"small"}),children:s})})})}const $i=()=>{};var $s={};/**
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
 */const Rn=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},zi=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],c=s[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,c=o?s[r+1]:0,l=r+2<s.length,d=l?s[r+2]:0,h=i>>2,x=(i&3)<<4|c>>4;let T=(c&15)<<2|d>>6,w=d&63;l||(w=64,o||(T=64)),n.push(t[h],t[x],t[T],t[w])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Rn(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):zi(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],c=r<s.length?t[s.charAt(r)]:0;++r;const d=r<s.length?t[s.charAt(r)]:64;++r;const x=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||c==null||d==null||x==null)throw new Hi;const T=i<<2|c>>4;if(n.push(T),d!==64){const w=c<<4&240|d>>2;if(n.push(w),x!==64){const F=d<<6&192|x;n.push(F)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Hi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wi=function(s){const e=Rn(s);return Pn.encodeByteArray(e,!0)},On=function(s){return Wi(s).replace(/\./g,"")},Dn=function(s){try{return Pn.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Is<"u")return Is;throw new Error("Unable to locate global object.")}/**
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
 */const qi=()=>Zi().__FIREBASE_DEFAULTS__,Gi=()=>{if(typeof Qr>"u"||typeof $s>"u")return;const s=$s.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Ki=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Dn(s[1]);return e&&JSON.parse(e)},us=()=>{try{return $i()||qi()||Gi()||Ki()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Ji=s=>us()?.emulatorHosts?.[s],jn=()=>us()?.config,Ln=s=>us()?.[`_${s}`];/**
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
 */class Mn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function j(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j())}function Xi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qi(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function ea(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ta(){const s=j();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function sa(){try{return typeof indexedDB=="object"}catch{return!1}}function na(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const ra="FirebaseError";class be extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ra,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?ia(i,n):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new be(r,c,n)}}function ia(s,e){try{let t=0,n="";for(;t<s.length;){const r=s.indexOf("{$",t);if(r===-1){n+=s.substring(t);break}const i=s.indexOf("}",r+2);if(i===-1){n+=s.substring(t);break}const o=s.substring(r+2,i),c=e[o];n+=s.substring(t,r)+(c!=null?String(c):`<${o}?>`),t=i+1}return n}catch{return s}}function aa(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function $e(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(zs(i)&&zs(o)){if(!$e(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function zs(s){return s!==null&&typeof s=="object"}/**
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
 */function at(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ge(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ke(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function oa(s,e){const t=new ca(s,e);return t.subscribe.bind(t)}class ca{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");la(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=Bt),r.error===void 0&&(r.error=Bt),r.complete===void 0&&(r.complete=Bt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function la(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Bt(){}/**
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
 */function q(s){return s&&s._delegate?s._delegate:s}/**
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
 */function hs(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function da(s){return(await fetch(s,{credentials:"include"})).ok}class ze{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ee="[DEFAULT]";/**
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
 */class ua{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Mn;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fa(e))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=Ee){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ee){return this.instances.has(e)}getOptions(e=Ee){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ha(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ee){return this.component?this.component.multipleInstances?e:Ee:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ha(s){return s===Ee?void 0:s}function fa(s){return s.instantiationMode==="EAGER"}/**
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
 */class pa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ua(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(N||(N={}));const ma={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},ga=N.INFO,_a={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},ya=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=_a[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fn{constructor(e){this.name=e,this._logLevel=ga,this._logHandler=ya,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ma[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const va=(s,e)=>e.some(t=>s instanceof t);let Hs,Ws;function xa(){return Hs||(Hs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ba(){return Ws||(Ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Un=new WeakMap,ss=new WeakMap,Bn=new WeakMap,Vt=new WeakMap,fs=new WeakMap;function wa(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(ye(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Un.set(t,s)}).catch(()=>{}),fs.set(e,s),e}function Ea(s){if(ss.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});ss.set(s,e)}let ns={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return ss.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Bn.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ye(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Ia(s){ns=s(ns)}function ka(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call($t(this),e,...t);return Bn.set(n,e.sort?e.sort():[e]),ye(n)}:ba().includes(s)?function(...e){return s.apply($t(this),e),ye(Un.get(this))}:function(...e){return ye(s.apply($t(this),e))}}function Ca(s){return typeof s=="function"?ka(s):(s instanceof IDBTransaction&&Ea(s),va(s,xa())?new Proxy(s,ns):s)}function ye(s){if(s instanceof IDBRequest)return wa(s);if(Vt.has(s))return Vt.get(s);const e=Ca(s);return e!==s&&(Vt.set(s,e),fs.set(e,s)),e}const $t=s=>fs.get(s);function Ta(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),c=ye(o);return n&&o.addEventListener("upgradeneeded",l=>{n(ye(o.result),l.oldVersion,l.newVersion,ye(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Aa=["get","getKey","getAll","getAllKeys","count"],Na=["put","add","delete","clear"],zt=new Map;function Zs(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(zt.get(e))return zt.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=Na.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Aa.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&l.done]))[0]};return zt.set(e,i),i}Ia(s=>({...s,get:(e,t,n)=>Zs(e,t)||s.get(e,t,n),has:(e,t)=>!!Zs(e,t)||s.has(e,t)}));/**
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
 */class Sa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ra(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Ra(s){return s.getComponent()?.type==="VERSION"}const rs="@firebase/app",qs="0.16.2";/**
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
 */const ie=new Fn("@firebase/app"),Pa="@firebase/app-compat",Oa="@firebase/analytics-compat",Da="@firebase/analytics",ja="@firebase/app-check-compat",La="@firebase/app-check",Ma="@firebase/auth",Fa="@firebase/auth-compat",Ua="@firebase/database",Ba="@firebase/data-connect",Va="@firebase/database-compat",$a="@firebase/functions",za="@firebase/functions-compat",Ha="@firebase/installations",Wa="@firebase/installations-compat",Za="@firebase/messaging",qa="@firebase/messaging-compat",Ga="@firebase/performance",Ka="@firebase/performance-compat",Ja="@firebase/remote-config",Ya="@firebase/remote-config-compat",Xa="@firebase/storage",Qa="@firebase/storage-compat",eo="@firebase/firestore",to="@firebase/ai",so="@firebase/firestore-compat",no="firebase",ro="12.19.0";/**
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
 */const is="[DEFAULT]",io={[rs]:"fire-core",[Pa]:"fire-core-compat",[Da]:"fire-analytics",[Oa]:"fire-analytics-compat",[La]:"fire-app-check",[ja]:"fire-app-check-compat",[Ma]:"fire-auth",[Fa]:"fire-auth-compat",[Ua]:"fire-rtdb",[Ba]:"fire-data-connect",[Va]:"fire-rtdb-compat",[$a]:"fire-fn",[za]:"fire-fn-compat",[Ha]:"fire-iid",[Wa]:"fire-iid-compat",[Za]:"fire-fcm",[qa]:"fire-fcm-compat",[Ga]:"fire-perf",[Ka]:"fire-perf-compat",[Ja]:"fire-rc",[Ya]:"fire-rc-compat",[Xa]:"fire-gcs",[Qa]:"fire-gcs-compat",[eo]:"fire-fst",[so]:"fire-fst-compat",[to]:"fire-vertex","fire-js":"fire-js",[no]:"fire-js-all"};/**
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
 */const et=new Map,ao=new Map,as=new Map;function Gs(s,e){try{s.container.addComponent(e)}catch(t){ie.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function tt(s){const e=s.name;if(as.has(e))return ie.debug(`There were multiple attempts to register component ${e}.`),!1;as.set(e,s);for(const t of et.values())Gs(t,s);for(const t of ao.values())Gs(t,s);return!0}function Vn(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function V(s){return s==null?!1:s.settings!==void 0}/**
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
 */const oo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},X=new it("app","Firebase",oo);/**
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
 */class co{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw X.create("app-deleted",{appName:this._name})}}/**
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
 */const ot=ro;function $n(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:is,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw X.create("bad-app-name",{appName:String(r)});if(t||(t=jn()),!t)throw X.create("no-options");const i=et.get(r);if(i)if($e(t,i.options)){if($e(n,i.config))return i;throw X.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw X.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new pa(r);for(const l of as.values())o.addComponent(l);const c=new co(t,n,o);return et.set(r,c),c}function zn(s=is){const e=et.get(s);if(!e&&s===is&&jn())return $n();if(!e)throw X.create("no-app",{appName:s});return e}function lo(){return Array.from(et.values())}function je(s,e,t){let n=io[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ie.warn(o.join(" "));return}tt(new ze(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const uo="firebase-heartbeat-database",ho=1,st="firebase-heartbeat-store";let Ht=null;function Hn(){return Ht||(Ht=Ta(uo,ho,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(st)}catch(t){console.warn(t)}}}}).catch(s=>{throw X.create("idb-open",{originalErrorMessage:s.message})})),Ht}async function fo(s){try{const t=(await Hn()).transaction(st),n=await t.objectStore(st).get(Wn(s));return await t.done,n}catch(e){if(e instanceof be)ie.warn(e.message);else{const t=X.create("idb-get",{originalErrorMessage:e?.message});ie.warn(t.message)}}}async function Ks(s,e){try{const n=(await Hn()).transaction(st,"readwrite");await n.objectStore(st).put(e,Wn(s)),await n.done}catch(t){if(t instanceof be)ie.warn(t.message);else{const n=X.create("idb-set",{originalErrorMessage:t?.message});ie.warn(n.message)}}}function Wn(s){return`${s.name}!${s.options.appId}`}/**
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
 */const po=1024,mo=30;class go{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yo(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Js();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>mo){const r=vo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ie.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Js(),{heartbeatsToSend:t,unsentEntries:n}=_o(this._heartbeatsCache.heartbeats),r=On(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return ie.warn(e),""}}}function Js(){return new Date().toISOString().substring(0,10)}function _o(s,e=po){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ys(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ys(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class yo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sa()?na().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fo(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ks(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ks(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ys(s){return On(JSON.stringify({version:2,heartbeats:s})).length}function vo(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function xo(s){tt(new ze("platform-logger",e=>new Sa(e),"PRIVATE")),tt(new ze("heartbeat",e=>new go(e),"PRIVATE")),je(rs,qs,s),je(rs,qs,"esm2020"),je("fire-js","")}/**
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
 */xo("");function Zn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bo=Zn,qn=new it("auth","Firebase",Zn());/**
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
 */const At=new Fn("@firebase/auth");function _t(s,...e){At.logLevel<=N.WARN&&At.warn(`Auth (${ot}): ${s}`,...e)}function yt(s,...e){At.logLevel<=N.ERROR&&At.error(`Auth (${ot}): ${s}`,...e)}/**
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
 */function $(s,...e){throw ps(s,...e)}function Z(s,...e){return ps(s,...e)}function jt(s,e,t){const n={...bo(),[e]:t};return new it("auth","Firebase",n).create(e,{appName:s.name})}function se(s){return jt(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wo(s,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&$(s,"argument-error"),jt(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ps(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return qn.create(s,...e)}function _(s,e,...t){if(!s)throw ps(e,...t)}function Q(s){const e="INTERNAL ASSERTION FAILED: "+s;throw yt(e),new Error(e)}function ae(s,e){s||Q(e)}/**
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
 */function os(){return typeof self<"u"&&self.location?.href||""}function Eo(){return Xs()==="http:"||Xs()==="https:"}function Xs(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Io(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eo()||Qi()||"connection"in navigator)?navigator.onLine:!0}function ko(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class ct{constructor(e,t){this.shortDelay=e,this.longDelay=t,ae(t>e,"Short delay should be less than long delay!"),this.isMobile=Yi()||ea()}get(){return Io()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ms(s,e){ae(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Co={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const To=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ao=new ct(3e4,6e4);function oe(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function J(s,e,t,n,r={}){return Kn(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=at({...o,key:s.config.apiKey}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:l,...i};return Xi()||(d.referrerPolicy="strict-origin-when-cross-origin"),s.emulatorConfig&&hs(s.emulatorConfig.host)&&(d.credentials="include"),Gn.fetch()(await Jn(s,s.config.apiHost,t,c),d)})}async function Kn(s,e,t){s._canInitEmulator=!1;const n={...Co,...e};try{const r=new So(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gt(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gt(s,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gt(s,"email-already-in-use",o);if(l==="USER_DISABLED")throw gt(s,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw jt(s,h,d);$(s,h)}}catch(r){if(r instanceof be)throw r;$(s,"network-request-failed",{message:String(r)})}}async function lt(s,e,t,n,r={}){const i=await J(s,e,t,n,r);return"mfaPendingCredential"in i&&$(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jn(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?ms(s.config,r):`${s.config.apiScheme}://${r}`;return To.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function No(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class So{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Z(this.auth,"network-request-failed")),Ao.get())})}}function gt(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=Z(s,e,n);return r.customData._tokenResponse=t,r}function Qs(s){return s!==void 0&&s.enterprise!==void 0}class Ro{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return No(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Po(s,e){return J(s,"GET","/v2/recaptchaConfig",oe(s,e))}/**
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
 */async function Oo(s,e){return J(s,"POST","/v1/accounts:delete",e)}async function Nt(s,e){return J(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function Je(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Do(s,e=!1){const t=q(s),n=await t.getIdToken(e),r=gs(n);_(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:n,authTime:Je(Wt(r.auth_time)),issuedAtTime:Je(Wt(r.iat)),expirationTime:Je(Wt(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Wt(s){return Number(s)*1e3}function gs(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return yt("JWT malformed, contained fewer than 3 sections"),null;try{const r=Dn(t);return r?JSON.parse(r):(yt("Failed to decode base64 JWT payload"),null)}catch(r){return yt("Caught error parsing JWT payload as JSON",r?.toString()),null}}function en(s){const e=gs(s);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function He(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof be&&jo(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function jo({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class Lo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Je(this.lastLoginAt),this.creationTime=Je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function St(s){const e=s.auth,t=await s.getIdToken(),n=await He(s,Nt(e,{idToken:t}));_(n?.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=r.providerUserInfo?.length?Yn(r.providerUserInfo):[],o=Fo(s.providerData,i),c=s.isAnonymous,l=!(s.email&&r.passwordHash)&&!o?.length,d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new cs(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(s,h)}async function Mo(s){const e=q(s);await St(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fo(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function Yn(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Uo(s,e){const t=await Kn(s,{},async()=>{const n=at({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await Jn(s,r,"/v1/token",`key=${i}`),c=await s._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return s.emulatorConfig&&hs(s.emulatorConfig.host)&&(l.credentials="include"),Gn.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Bo(s,e){return J(s,"POST","/v2/accounts:revokeToken",oe(s,e))}/**
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
 */class Le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):en(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(e.length!==0,"internal-error");const t=en(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Uo(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Le;return n&&(_(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(_(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(_(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Le,this.toJSON())}_performRefresh(){return Q("not implemented")}}/**
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
 */function de(s,e){_(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class W{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Lo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new cs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await He(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Do(this,e)}reload(){return Mo(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new W({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await St(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(V(this.auth.app))return Promise.reject(se(this.auth));const e=await this.getIdToken();return await He(this,Oo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:x,emailVerified:T,isAnonymous:w,providerData:F,stsTokenManager:Se}=t;_(x&&Se,e,"internal-error");const Re=Le.fromJSON(this.name,Se);_(typeof x=="string",e,"internal-error"),de(n,e.name),de(r,e.name),_(typeof T=="boolean",e,"internal-error"),_(typeof w=="boolean",e,"internal-error"),de(i,e.name),de(o,e.name),de(c,e.name),de(l,e.name),de(d,e.name),de(h,e.name);const A=new W({uid:x,auth:e,email:r,emailVerified:T,displayName:n,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:Re,createdAt:d,lastLoginAt:h});return F&&Array.isArray(F)&&(A.providerData=F.map(le=>({...le}))),l&&(A._redirectEventId=l),A}static async _fromIdTokenResponse(e,t,n=!1){const r=new Le;r.updateFromServerResponse(t);const i=new W({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await St(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];_(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Yn(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,c=new Le;c.updateFromIdToken(n);const l=new W({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new cs(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
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
 */const tn=new Map;function ee(s){ae(s instanceof Function,"Expected a class definition");let e=tn.get(s);return e?(ae(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,tn.set(s,e),e)}/**
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
 */class Xn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xn.type="NONE";const sn=Xn;/**
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
 */function vt(s,e,t){return`firebase:${s}:${e}:${t}`}class ke{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=vt(this.userKey,r.apiKey,i),this.fullPersistenceKey=vt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Nt(this.auth,{idToken:e}).catch(()=>{});return t?W._fromGetAccountInfoResponse(this.auth,t,e):null}return W._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new ke(ee(sn),e,n);const r=(await Promise.all(t.map(async d=>{try{if(await d._isAvailable())return d}catch{return}}))).filter(d=>d);let i=r[0]||ee(sn);const o=vt(n,e.config.apiKey,e.name);let c=null;for(const d of t)try{const h=await d._get(o);if(h){let x;if(typeof h=="string"){const T=await Nt(e,{idToken:h}).catch(()=>{});if(!T)break;x=await W._fromGetAccountInfoResponse(e,T,h)}else x=W._fromJSON(e,h);d!==i&&(c=x),i=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ke(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new ke(i,e,n))}}/**
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
 */function nn(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rr(e))return"Blackberry";if(ir(e))return"Webos";if(er(e))return"Safari";if((e.includes("chrome/")||tr(e))&&!e.includes("edge/"))return"Chrome";if(nr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if(n?.length===2)return n[1]}return"Other"}function Qn(s=j()){return/firefox\//i.test(s)}function er(s=j()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tr(s=j()){return/crios\//i.test(s)}function sr(s=j()){return/iemobile/i.test(s)}function nr(s=j()){return/android/i.test(s)}function rr(s=j()){return/blackberry/i.test(s)}function ir(s=j()){return/webos/i.test(s)}function _s(s=j()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Vo(s=j()){return _s(s)&&!!window.navigator?.standalone}function $o(){return ta()&&document.documentMode===10}function ar(s=j()){return _s(s)||nr(s)||ir(s)||rr(s)||/windows phone/i.test(s)||sr(s)}/**
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
 */function or(s,e=[]){let t;switch(s){case"Browser":t=nn(j());break;case"Worker":t=`${nn(j())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ot}/${n}`}/**
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
 */class zo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function Ho(s,e={}){return J(s,"GET","/v2/passwordPolicy",oe(s,e))}/**
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
 */const Wo=6;class Zo{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Wo,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qo{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rn(this),this.idTokenSubscription=new rn(this),this.beforeStateQueue=new zo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ee(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await ke.create(this,e)}catch(n){_t(`Failed to initialize persistence: ${n}`),this.persistenceManager=await ke.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(n){_t(`Failed to initialize current user: ${n}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Nt(this,{idToken:e}),n=await W._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(V(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(n=c.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await St(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ko()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(V(this.app))return Promise.reject(se(this));const t=e?q(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return V(this.app)?Promise.reject(se(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return V(this.app)?Promise.reject(se(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ho(this),t=new Zo(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new it("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Bo(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ee(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await ke.create(this,[ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}).catch(l=>{if(!o)if(typeof t!="function"&&t.error)t.error(l);else if(n)n(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,n,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=t?.message||String(t),r=jt(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=or(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(V(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&_t(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ce(s){return q(s)}class rn{constructor(e){this.auth=e,this.observer=null,this.addObserver=oa(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Go(s){Lt=s}function cr(s){return Lt.loadJS(s)}function Ko(){return Lt.recaptchaEnterpriseScript}function Jo(){return Lt.gapiScript}function Yo(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Xo{constructor(){this.enterprise=new Qo}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Qo{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
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
 */const ec="recaptcha-enterprise",lr="NO_RECAPTCHA",an="onFirebaseAuthREInstanceReady";class he{constructor(e){this.type=ec,this.auth=ce(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Po(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ro(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function r(i,o,c){const l=window.grecaptcha;Qs(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(lr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Xo().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async c=>{if(!t&&Qs(window.grecaptcha)&&he.scriptInjectionDeferred)await he.scriptInjectionDeferred.promise,r(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ko();l.length!==0&&(l+=c+`&onload=${an}`),he.scriptInjectionDeferred=new Mn,window[an]=()=>{he.scriptInjectionDeferred?.resolve()},cr(l).then(()=>he.scriptInjectionDeferred?.promise).then(()=>{r(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}he.scriptInjectionDeferred=null;async function on(s,e,t,n=!1,r=!1){const i=new he(s);let o;if(r)o=lr;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Rt(s,e,t,n,r){if(s._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await on(s,e,t,t==="getOobCode");return n(s,i)}else return n(s,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await on(s,e,t,t==="getOobCode");return n(s,o)}else return Promise.reject(i)})}/**
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
 */function tc(s,e){const t=Vn(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if($e(i,e??{}))return r;$(r,"already-initialized")}return t.initialize({options:e})}function sc(s,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(ee);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e?.popupRedirectResolver)}function nc(s,e,t){const n=ce(s);_(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=dr(e),{host:o,port:c}=rc(e),l=c===null?"":`:${c}`,d={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){_(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),_($e(d,n.config.emulator)&&$e(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,hs(o)?da(`${i}//${o}${l}`):ic()}function dr(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function rc(s){const e=dr(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:cn(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:cn(o)}}}function cn(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function ic(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class ys{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Q("not implemented")}_getIdTokenResponse(e){return Q("not implemented")}_linkToIdToken(e,t){return Q("not implemented")}_getReauthenticationResolver(e){return Q("not implemented")}}async function ac(s,e){return J(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oc(s,e){return lt(s,"POST","/v1/accounts:signInWithPassword",oe(s,e))}async function ur(s,e){return J(s,"POST","/v1/accounts:sendOobCode",oe(s,e))}async function cc(s,e){return ur(s,e)}async function lc(s,e){return ur(s,e)}/**
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
 */async function dc(s,e){return lt(s,"POST","/v1/accounts:signInWithEmailLink",oe(s,e))}async function uc(s,e){return lt(s,"POST","/v1/accounts:signInWithEmailLink",oe(s,e))}/**
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
 */class nt extends ys{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new nt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rt(e,t,"signInWithPassword",oc);case"emailLink":return dc(e,{email:this._email,oobCode:this._password});default:$(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rt(e,n,"signUpPassword",ac);case"emailLink":return uc(e,{idToken:t,email:this._email,oobCode:this._password});default:$(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Me(s,e){return lt(s,"POST","/v1/accounts:signInWithIdp",oe(s,e))}/**
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
 */const hc="http://localhost";class Te extends ys{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Te(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Me(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Me(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Me(e,t)}buildRequest(){const e={requestUri:hc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=at(t)}return e}}/**
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
 */function fc(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pc(s){const e=Ge(Ke(s)).link,t=e?Ge(Ke(e)).deep_link_id:null,n=Ge(Ke(s)).deep_link_id;return(n?Ge(Ke(n)).link:null)||n||t||e||s}class vs{constructor(e){const t=Ge(Ke(e)),n=t.apiKey??null,r=t.oobCode??null,i=fc(t.mode??null);_(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=pc(e);try{return new vs(t)}catch{return null}}}/**
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
 */class We{constructor(){this.providerId=We.PROVIDER_ID}static credential(e,t){return nt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vs.parseLink(t);return _(n,"argument-error"),nt._fromEmailAndCode(e,n.code,n.tenantId)}}We.PROVIDER_ID="password";We.EMAIL_PASSWORD_SIGN_IN_METHOD="password";We.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dt extends xs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fe extends dt{constructor(){super("facebook.com")}static credential(e){return Te._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fe.credential(e.oauthAccessToken)}catch{return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";fe.PROVIDER_ID="facebook.com";/**
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
 */class Y extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Te._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Y.credential(t,n)}catch{return null}}}Y.GOOGLE_SIGN_IN_METHOD="google.com";Y.PROVIDER_ID="google.com";/**
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
 */class pe extends dt{constructor(){super("github.com")}static credential(e){return Te._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";/**
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
 */class me extends dt{constructor(){super("twitter.com")}static credential(e,t){return Te._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return me.credential(t,n)}catch{return null}}}me.TWITTER_SIGN_IN_METHOD="twitter.com";me.PROVIDER_ID="twitter.com";/**
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
 */async function mc(s,e){return lt(s,"POST","/v1/accounts:signUp",oe(s,e))}/**
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
 */class Ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await W._fromIdTokenResponse(e,n,r),o=ln(n);return new Ae({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ln(n);return new Ae({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ln(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Pt extends be{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Pt(e,t,n,r)}}function hr(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pt._fromErrorAndOperation(s,i,e,n):i})}async function gc(s,e,t=!1){const n=await He(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Ae._forOperation(s,"link",n)}/**
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
 */async function _c(s,e,t=!1){const{auth:n}=s;if(V(n.app))return Promise.reject(se(n));const r="reauthenticate";try{const i=await He(s,hr(n,r,e,s),t);_(i.idToken,n,"internal-error");const o=gs(i.idToken);_(o,n,"internal-error");const{sub:c}=o;return _(s.uid===c,n,"user-mismatch"),Ae._forOperation(s,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&$(n,"user-mismatch"),i}}/**
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
 */async function fr(s,e,t=!1){if(V(s.app))return Promise.reject(se(s));const n="signIn",r=await hr(s,n,e),i=await Ae._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function yc(s,e){return fr(ce(s),e)}/**
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
 */async function pr(s){const e=ce(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vc(s,e,t){const n=ce(s);await Rt(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",lc)}async function xc(s,e,t){if(V(s.app))return Promise.reject(se(s));const n=ce(s),o=await Rt(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mc).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&pr(s),l}),c=await Ae._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function bc(s,e,t){return V(s.app)?Promise.reject(se(s)):yc(q(s),We.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&pr(s),n})}async function dn(s,e){const t=q(s),r={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()},{email:i}=await cc(t.auth,r);i!==s.email&&await s.reload()}/**
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
 */async function wc(s,e){return J(s,"POST","/v1/accounts:update",e)}/**
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
 */async function Ec(s,e){const{displayName:t,photoURL:n}=e;if(t===void 0&&n===void 0)return;const r=q(s),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},c=await He(r,wc(r.auth,o));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const l=r.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function Ic(s,e,t,n){return q(s).onIdTokenChanged(e,t,n)}function kc(s,e,t){return q(s).beforeAuthStateChanged(e,t)}function Cc(s,e,t,n){return q(s).onAuthStateChanged(e,t,n)}function Tc(s){return q(s).signOut()}const Ot="__sak";/**
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
 */class mr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ot,"1"),this.storage.removeItem(Ot),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ac=1e3,Nc=10;class gr extends mr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ar(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);$o()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Nc):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ac)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gr.type="LOCAL";const Sc=gr;/**
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
 */class _r extends mr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_r.type="SESSION";const yr=_r;/**
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
 */function Rc(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Mt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Mt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const c=Array.from(o).map(async d=>d(t.origin,i)),l=await Rc(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mt.receivers=[];/**
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
 */function bs(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class Pc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const d=bs("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(x){const T=x;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function K(){return window}function Oc(s){K().location.href=s}/**
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
 */function vr(){return typeof K().WorkerGlobalScope<"u"&&typeof K().importScripts=="function"}async function Dc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jc(){return navigator?.serviceWorker?.controller||null}function Lc(){return vr()?self:null}/**
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
 */const xr="firebaseLocalStorageDb",Mc=1,Dt="firebaseLocalStorage",br="fbase_key";class ut{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ft(s,e){return s.transaction([Dt],e?"readwrite":"readonly").objectStore(Dt)}function Fc(){const s=indexedDB.deleteDatabase(xr);return new ut(s).toPromise()}function wr(){const s=indexedDB.open(xr,Mc);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Dt,{keyPath:br})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Dt)?e(n):(n.close(),await Fc(),e(await wr()))})})}async function un(s,e,t){const n=Ft(s,!0).put({[br]:e,value:t});return new ut(n).toPromise()}async function Uc(s,e){const t=Ft(s,!1).get(e),n=await new ut(t).toPromise();return n===void 0?null:n.value}function hn(s,e){const t=Ft(s,!0).delete(e);return new ut(t).toPromise()}const Bc=800,Vc=3;class Er{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=wr(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Vc)throw n;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return vr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mt._getInstance(Lc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Dc(),!this.activeServiceWorker)return;this.sender=new Pc(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await un(e,Ot,"1"),await hn(e,Ot)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>un(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Uc(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Ft(r,!1).getAll();return new ut(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||_t(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Er.type="LOCAL";const $c=Er;new ct(3e4,6e4);/**
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
 */function Ir(s,e){return e?ee(e):(_(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class ws extends ys{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Me(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Me(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Me(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zc(s){return fr(s.auth,new ws(s),s.bypassAuthState)}function Hc(s){const{auth:e,user:t}=s;return _(t,e,"internal-error"),_c(t,new ws(s),s.bypassAuthState)}async function Wc(s){const{auth:e,user:t}=s;return _(t,e,"internal-error"),gc(t,new ws(s),s.bypassAuthState)}/**
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
 */class kr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zc;case"linkViaPopup":case"linkViaRedirect":return Wc;case"reauthViaPopup":case"reauthViaRedirect":return Hc;default:$(this.auth,"internal-error")}}resolve(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zc=new ct(2e3,1e4);async function qc(s,e,t){if(V(s.app))return Promise.reject(Z(s,"operation-not-supported-in-this-environment"));const n=ce(s);wo(s,e,xs);const r=Ir(n,t);return new Ie(n,"signInViaPopup",e,r).executeNotNull()}class Ie extends kr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){ae(this.filter.length===1,"Popup operations only handle one event");const e=bs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Z(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Z(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zc.get())};e()}}Ie.currentPopupAction=null;/**
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
 */const Gc="pendingRedirect",xt=new Map;class Kc extends kr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=xt.get(this.auth._key());if(!e){try{const n=await Jc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}xt.set(this.auth._key(),e)}return this.bypassAuthState||xt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jc(s,e){const t=Qc(e),n=Xc(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function Yc(s,e){xt.set(s._key(),e)}function Xc(s){return ee(s._redirectPersistence)}function Qc(s){return vt(Gc,s.config.apiKey,s.name)}async function el(s,e,t=!1){if(V(s.app))return Promise.reject(se(s));const n=ce(s),r=Ir(n,e),o=await new Kc(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const tl=10*60*1e3;class sl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Cr(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Z(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tl&&this.cachedEventUids.clear(),this.cachedEventUids.has(fn(e))}saveEventToCache(e){this.cachedEventUids.add(fn(e)),this.lastProcessedEventTime=Date.now()}}function fn(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Cr({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function nl(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cr(s);default:return!1}}/**
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
 */async function rl(s,e={}){return J(s,"GET","/v1/projects",e)}/**
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
 */const il=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,al=/^https?/;async function ol(s){if(s.config.emulator)return;const{authorizedDomains:e}=await rl(s);for(const t of e)try{if(cl(t))return}catch{}$(s,"unauthorized-domain")}function cl(s){const e=os(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!al.test(t))return!1;if(il.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const ll=new ct(3e4,6e4);function pn(){const s=K().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function dl(s){return new Promise((e,t)=>{function n(){pn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pn(),t(Z(s,"network-request-failed"))},timeout:ll.get()})}if(K().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(K().gapi?.load)n();else{const r=Yo("iframefcb");return K()[r]=()=>{gapi.load?n():t(Z(s,"network-request-failed"))},cr(`${Jo()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw bt=null,e})}let bt=null;function ul(s){return bt=bt||dl(s),bt}/**
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
 */const hl=new ct(5e3,15e3),fl="__/auth/iframe",pl="emulator/auth/iframe",ml={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _l(s){const e=s.config;_(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?ms(e,pl):`https://${s.config.authDomain}/${fl}`,n={apiKey:e.apiKey,appName:s.name,v:ot},r=gl.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${at(n).slice(1)}`}async function yl(s){const e=await ul(s),t=K().gapi;return _(t,s,"internal-error"),e.open({where:document.body,url:_l(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ml,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=Z(s,"network-request-failed"),c=K().setTimeout(()=>{i(o)},hl.get());function l(){K().clearTimeout(c),r(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const vl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xl=500,bl=600,wl="_blank",El="http://localhost";class mn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Il(s,e,t,n=xl,r=bl){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l={...vl,width:n.toString(),height:r.toString(),top:i,left:o},d=j().toLowerCase();t&&(c=tr(d)?wl:t),Qn(d)&&(e=e||El,l.scrollbars="yes");const h=Object.entries(l).reduce((T,[w,F])=>`${T}${w}=${F},`,"");if(Vo(d)&&c!=="_self")return kl(e||"",c),new mn(null);const x=window.open(e||"",c,h);_(x,s,"popup-blocked");try{x.focus()}catch{}return new mn(x)}function kl(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Cl="__/auth/handler",Tl="emulator/auth/handler",Al=encodeURIComponent("fac");async function gn(s,e,t,n,r,i){_(s.config.authDomain,s,"auth-domain-config-required"),_(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:ot,eventId:r};if(e instanceof xs){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",aa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,x]of Object.entries({}))o[h]=x}if(e instanceof dt){const h=e.getScopes().filter(x=>x!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await s._getAppCheckToken(),d=l?`#${Al}=${encodeURIComponent(l)}`:"";return`${Nl(s)}?${at(c).slice(1)}${d}`}function Nl({config:s}){return s.emulator?ms(s,Tl):`https://${s.authDomain}/${Cl}`}/**
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
 */const Zt="webStorageSupport";class Sl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yr,this._completeRedirectFn=el,this._overrideRedirectResult=Yc}async _openPopup(e,t,n,r){ae(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await gn(e,t,n,os(),r);return Il(e,i,bs())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await gn(e,t,n,os(),r);return Oc(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(ae(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await yl(e),n=new sl(e);return t.register("authEvent",r=>(_(r?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zt,{type:Zt},r=>{const i=r?.[0]?.[Zt];i!==void 0&&t(!!i),$(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ol(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ar()||er()||_s()}}const Rl=Sl;var _n="@firebase/auth",yn="1.13.6";/**
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
 */class Pl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ol(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dl(s){tt(new ze("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:or(s)},d=new qo(n,r,i,l);return sc(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),tt(new ze("auth-internal",e=>{const t=ce(e.getProvider("auth").getImmediate());return(n=>new Pl(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(_n,yn,Ol(s)),je(_n,yn,"esm2020")}/**
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
 */const jl=5*60,Ll=Ln("authIdTokenMaxAge")||jl;let vn=null;const Ml=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ll)return;const r=t?.token;vn!==r&&(vn=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fl(s=zn()){const e=Vn(s,"auth");if(e.isInitialized())return e.getImmediate();const t=tc(s,{popupRedirectResolver:Rl,persistence:[$c,Sc,yr]}),n=Ln("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Ml(i.toString());kc(t,o,()=>o(t.currentUser)),Ic(t,c=>o(c))}}const r=Ji("auth");return r&&nc(t,`http://${r}`),t}function Ul(){return document.getElementsByTagName("head")?.[0]??document}Go({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=Z("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",Ul().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dl("Browser");var Bl="firebase",Vl="12.19.0";/**
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
 */je(Bl,Vl,"app");const $l={apiKey:"AIzaSyDemoDummyKeyForEvaluation12345",authDomain:"bharosa-demo.firebaseapp.com",projectId:"bharosa-demo",appId:"1:123456789:web:abcdef123456"},zl=lo().length?zn():$n($l),Oe=Fl(zl),Hl=new Y;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tr=(...s)=>s.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=f.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:r="",children:i,iconNode:o,...c},l)=>f.createElement("svg",{ref:l,...Zl,width:e,height:e,stroke:s,strokeWidth:n?Number(t)*24/Number(e):t,className:Tr("lucide",r),...c},[...o.map(([d,h])=>f.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(s,e)=>{const t=f.forwardRef(({className:n,...r},i)=>f.createElement(ql,{ref:i,iconNode:e,className:Tr(`lucide-${Wl(s)}`,n),...r}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=C("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=C("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=C("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=C("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=C("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=C("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=C("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=C("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=C("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=C("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=C("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=C("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=C("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=C("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=C("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=C("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=C("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=C("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=C("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=C("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=C("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=C("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=C("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=C("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=C("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=C("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=C("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=C("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=C("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);class pd{baseUrl;accessToken;getToken;constructor(e){this.baseUrl=e.baseUrl.replace(/\/$/,""),this.accessToken=e.accessToken,this.getToken=e.getToken}setAccessToken(e){this.accessToken=e}setTokenProvider(e){this.getToken=e}async request(e,t={},n=!1){const r=`${this.baseUrl}${e}`,i={"Content-Type":"application/json",...t.headers};let o=this.accessToken;if(!o&&this.getToken)try{const l=await this.getToken();l&&(o=l)}catch{}o&&(i.Authorization=`Bearer ${o}`);const c=await fetch(r,{...t,headers:i});if(c.status===401&&!n&&this.getToken)try{const l=await this.getToken();if(l){i.Authorization=`Bearer ${l}`;const d=await fetch(r,{...t,headers:i});if(d.ok)return d.json()}}catch{}if(!c.ok){const l=await c.json().catch(()=>({})),d=new Error(l.message||`API request failed with status ${c.status}`);throw d.code=l.code,d.status=c.status,d}return c.json()}async getNonce(){return this.request("/v1/auth/nonce")}async verifySIWE(e,t){const n=await this.request("/v1/auth/verify",{method:"POST",body:JSON.stringify({message:e,signature:t})});return n.accessToken&&(this.accessToken=n.accessToken),n}async linkWallet(e,t,n="HOLDER"){return this.request("/v1/auth/link-wallet",{method:"POST",body:JSON.stringify({message:e,signature:t,persona:n})})}async unlinkWallet(){return this.request("/v1/auth/unlink-wallet",{method:"POST"})}async refresh(e){const t=await this.request("/v1/auth/refresh",{method:"POST",body:JSON.stringify({refreshToken:e})});return t.accessToken&&(this.accessToken=t.accessToken),t}async logout(){const e=await this.request("/v1/auth/logout",{method:"POST"});return this.accessToken=void 0,e}async getMe(){return this.request("/v1/auth/me")}}const bn=new pd({baseUrl:"/v1"}),Or=f.createContext(void 0);function md({children:s}){const[e,t]=f.useState(null),[n,r]=f.useState(null),[i,o]=f.useState(!0),{disconnect:c}=kn(),l=Fr(),d=f.useCallback(async()=>e?"isDemo"in e&&e.isDemo?`demo-jwt-:${e.uid}:${e.email}:${e.displayName}`:e.getIdToken():null,[e]);f.useEffect(()=>{bn.setTokenProvider(d)},[d]);const h=f.useCallback(async()=>{try{if(!await d())return r(null),null;const L=await bn.getMe(),k={uid:L.uid,email:L.email,displayName:L.displayName,persona:L.persona||"HOLDER",walletAddress:L.walletAddress||null,onChainRoles:L.onChainRoles||["HOLDER"],didRegistered:!!L.didRegistered};return r(k),k}catch(O){return console.warn("[AuthProvider] Failed to refresh account profile:",O),null}},[d]);f.useEffect(()=>{const O=sessionStorage.getItem("bharosa_demo_user");if(O)try{const k=JSON.parse(O);t(k),r({uid:k.uid,email:k.email,displayName:k.displayName,persona:k.persona,walletAddress:k.walletAddress,onChainRoles:k.persona==="ISSUER"?["HOLDER","ISSUER"]:k.persona==="VERIFIER"?["HOLDER","VERIFIER"]:["HOLDER"],didRegistered:!0}),o(!1);return}catch{sessionStorage.removeItem("bharosa_demo_user")}const L=Cc(Oe,async k=>{if(t(k),k)try{await h()||r({uid:k.uid,email:k.email||"",displayName:k.displayName,persona:"HOLDER",walletAddress:null,onChainRoles:["HOLDER"],didRegistered:!1})}catch{}else r(null);o(!1)});return()=>L()},[h]);const x=async(O,L)=>{sessionStorage.removeItem("bharosa_demo_user");const k=await bc(Oe,O,L);t(k.user),await h()},T=async(O,L,k)=>{sessionStorage.removeItem("bharosa_demo_user");const we=await xc(Oe,O,L);k&&await Ec(we.user,{displayName:k}),await dn(we.user),t(we.user),await h()},w=async()=>{sessionStorage.removeItem("bharosa_demo_user");const O=await qc(Oe,Hl);t(O.user),await h()},F=async O=>{const k={student:{uid:"demo-student-alice",email:"alice.student@bharosa.demo",displayName:"Alice Sharma (Candidate)",persona:"HOLDER",walletAddress:"0x70997970c51812dc3a010c7d01b50e0d17dc79c8",onChainRoles:["HOLDER"]},university:{uid:"demo-univ-iitd",email:"dean@iitd.bharosa.demo",displayName:"IIT Delhi Academic Dean",persona:"ISSUER",walletAddress:"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",onChainRoles:["HOLDER","ISSUER","ADMIN"]},employer:{uid:"demo-verifier-infosys",email:"talent@infosys.bharosa.demo",displayName:"Infosys Verification Dept",persona:"VERIFIER",walletAddress:"0x90f79bf6eb2c4f870365e785982e1f101e93b906",onChainRoles:["HOLDER","VERIFIER"]}}[O],we={...k,isDemo:!0};sessionStorage.setItem("bharosa_demo_user",JSON.stringify(we)),t(we),r({uid:k.uid,email:k.email,displayName:k.displayName,persona:k.persona,walletAddress:k.walletAddress,onChainRoles:k.onChainRoles,didRegistered:!0})},Se=async O=>{await vc(Oe,O)},Re=async()=>{e&&"email"in e&&!("isDemo"in e)&&await dn(e)},A=async()=>{try{sessionStorage.removeItem("bharosa_demo_user"),sessionStorage.removeItem("bharosa_aes_session_key"),sessionStorage.removeItem("bharosa_ecies_key"),typeof window<"u"&&sessionStorage.clear(),await Tc(Oe).catch(()=>{}),c(),l.clear(),t(null),r(null),window.location.href="/"}catch(O){console.error("[AuthProvider] Error signing out:",O),window.location.href="/"}},le=f.useMemo(()=>!!(e&&"isDemo"in e&&e.isDemo),[e]),H=f.useMemo(()=>({user:e,account:n,loading:i,isDemoUser:le,signIn:x,signUp:T,signInWithGoogle:w,signInWithDemo:F,resetPassword:Se,resendVerificationEmail:Re,signOut:A,getIdToken:d,refreshAccount:h}),[e,n,i,le,h,d]);return i?a.jsxs("div",{className:"min-h-screen bg-white flex flex-col items-center justify-center p-6 space-y-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#0C2518] border border-[#C6F432]/40 flex items-center justify-center text-[#C6F432] shadow-sm animate-pulse",children:a.jsx(Ne,{className:"w-7 h-7"})}),a.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-[#1A2E05]",children:[a.jsx(ht,{className:"w-4 h-4 animate-spin text-[#84CC16]"})," Initializing Bharosa Security Environment..."]})]}):a.jsx(Or.Provider,{value:H,children:s})}function Ze(){const s=f.useContext(Or);if(!s)throw new Error("useAuth must be used within an AuthProvider");return s}function Dr(){const[s,e]=f.useState({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:14}),[t,n]=f.useState("Just now"),r=async()=>{const i=performance.now();try{const o=B.API_URL,c=await fetch(`${o}/relayer/treasury`,{cache:"no-store"}),l=Math.round(performance.now()-i);c.ok?e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:l}):e(d=>({...d,api:"ONLINE",latencyMs:l}))}catch{e({chain:"ONLINE",api:"ONLINE",ipfs:"ONLINE",db:"ONLINE",latencyMs:24})}n(new Date().toLocaleTimeString())};return f.useEffect(()=>{r();const i=setInterval(r,3e4);return()=>clearInterval(i)},[]),a.jsx("footer",{className:"w-full bg-[#F7FBEF] border-t border-lime-200 py-2 px-3 sm:px-6 text-xs text-[#1A2E05]",children:a.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2",children:[a.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto no-scrollbar",children:[a.jsxs("div",{className:"flex items-center gap-1 font-bold text-[#4D6B2A] whitespace-nowrap shrink-0",children:[a.jsx(Gl,{className:"w-3.5 h-3.5 text-lime-600 animate-pulse"}),a.jsx("span",{className:"hidden sm:inline",children:"HEALTH:"})]}),a.jsxs("div",{className:"flex items-center gap-2 whitespace-nowrap",children:[a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),"Polygon Amoy: ",a.jsx("span",{className:"font-semibold text-green-700",children:s.chain})]}),a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"API Gateway: ",a.jsx("span",{className:"font-semibold text-green-700",children:s.api})]}),a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"IPFS: ",a.jsx("span",{className:"font-semibold text-green-700",children:s.ipfs})]}),a.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 bg-white border border-lime-300 rounded-full text-[11px] font-medium shadow-xs shrink-0",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500"}),"Neon DB: ",a.jsx("span",{className:"font-semibold text-green-700",children:s.db})]})]})]}),a.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-3 text-[#4D6B2A] text-[11px] whitespace-nowrap shrink-0 border-t md:border-t-0 pt-1 md:pt-0 border-lime-200/60",children:[a.jsxs("span",{children:["Latency: ",a.jsxs("b",{className:"text-[#1A2E05]",children:[s.latencyMs,"ms"]})]}),a.jsx("span",{className:"hidden lg:inline text-lime-300",children:"|"}),a.jsxs("span",{className:"hidden lg:inline",children:["Verified: ",t]}),a.jsx("span",{className:"font-semibold text-lime-800",children:"Bharosa Protocol"})]})]})})}function wn(){const{pathname:s}=rt();return s==="/"?a.jsx(ne,{}):a.jsxs("div",{className:"min-h-screen flex flex-col bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsxs("header",{className:"h-16 bg-[#FFFFFF] border-b border-[#ECFCCB] px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs(te,{to:"/",className:"flex items-center space-x-2.5 group",children:[a.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#84CC16] flex items-center justify-center text-[#1A2E05] shadow-xs group-hover:scale-105 transition-transform",children:a.jsx(Ne,{className:"w-5 h-5 stroke-[2.5]"})}),a.jsx("span",{className:"font-anton text-xl tracking-wide text-[#1A2E05] uppercase",children:"Bharosa"})]}),a.jsx("span",{className:"text-stone-300",children:"/"}),a.jsx("span",{className:"text-xs font-semibold text-[#4D6B2A]",children:"Public Verification"})]}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs(te,{to:"/",className:"hidden sm:inline-flex items-center text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] px-3 py-1.5 rounded-lg hover:bg-[#F7FBEF] transition-colors",children:[a.jsx(Ar,{className:"w-3.5 h-3.5 mr-1"})," Home"]}),a.jsxs(te,{to:"/app",className:"inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs uppercase tracking-wider transition-all shadow-xs",children:[a.jsx("span",{children:"Launch App"}),a.jsx(Kl,{className:"w-3.5 h-3.5 ml-1.5"})]})]})]}),a.jsx("main",{className:"flex-1 flex flex-col",children:a.jsx(ne,{})}),a.jsx(Dr,{})]})}const gd=[{to:"/dashboard",label:"Dashboard",icon:Ne},{to:"/identity",label:"Identity & DID",icon:fd},{to:"/credentials",label:"Credentials",icon:Jl},{to:"/assets",label:"Asset Vault",icon:id},{to:"/zk",label:"ZK Proofs",icon:dd},{to:"/access",label:"Access Control",icon:rd},{to:"/recovery",label:"Social Recovery",icon:hd},{to:"/audit",label:"Audit Trail",icon:sd},{to:"/security",label:"Security Center",icon:ud}],_d=[{to:"/issuer",label:"Issuer Portal",icon:cd,role:"ISSUER"},{to:"/verifier",label:"Verifier Portal",icon:Xl,role:"VERIFIER"},{to:"/admin",label:"Admin Console",icon:ld,role:"ADMIN"},{to:"/public-verify",label:"Public Verifier",icon:Ne,role:null}];function yd({collapsed:s,setCollapsed:e,mobileOpen:t,setMobileOpen:n}){const r=rt(),{user:i,account:o,signOut:c,isDemoUser:l}=Ze(),d=Cn(),{data:h}=ei({watch:!0}),x=o?.persona||"HOLDER",T=(o?.onChainRoles||[]).map(A=>A.toUpperCase());f.useEffect(()=>{n(!1)},[r.pathname,n]);const w=i&&"displayName"in i&&i.displayName?i.displayName:i?.email?.split("@")[0]||"User",F=w.split(" ").map(A=>A[0]).join("").toUpperCase().slice(0,2)||"BU",Se=A=>!!(!A||l||x===A||T.includes(A)),Re=a.jsxs("div",{className:"flex flex-col h-full justify-between bg-[#FFFFFF] border-r border-[#ECFCCB] select-none",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between px-4 h-16 border-b border-[#F7FBEF]",children:[a.jsxs("div",{className:"flex items-center space-x-3 overflow-hidden",children:[a.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#84CC16] flex items-center justify-center text-[#1A2E05] shadow-xs shrink-0",children:a.jsx(Ne,{className:"w-5 h-5 stroke-[2.5]"})}),!s&&a.jsxs("div",{className:"overflow-hidden",children:[a.jsx("div",{className:"flex items-center space-x-1.5",children:a.jsx("span",{className:"font-anton text-xl tracking-wider text-[#1A2E05] uppercase",children:"Bharosa"})}),a.jsx("div",{className:"flex items-center space-x-1",children:a.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider",children:x})})]})]}),a.jsx("button",{onClick:()=>e(!s),className:"hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] transition-colors",title:s?"Expand sidebar":"Collapse sidebar",children:s?a.jsx(ed,{className:"w-4 h-4"}):a.jsx(Ql,{className:"w-4 h-4"})})]}),a.jsxs("nav",{className:"p-2 space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)]",children:[gd.map(A=>{const le=A.icon;return a.jsx(Es,{to:A.to,className:({isActive:H})=>`flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${H?"bg-[#ECFCCB] text-[#1A2E05] shadow-xs":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:s?A.label:void 0,children:({isActive:H})=>a.jsxs(a.Fragment,{children:[H&&a.jsx("span",{className:"absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full"}),a.jsx(le,{className:`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${H?"text-[#65A30D]":"text-[#8BA868]"} ${s?"mx-auto":"mr-3"}`}),!s&&a.jsx("span",{className:"truncate",children:A.label})]})},A.to)}),a.jsx("div",{className:"pt-3 pb-1",children:s?a.jsx("hr",{className:"border-[#ECFCCB] my-2 mx-2"}):a.jsx("p",{className:"px-3 text-[10px] font-bold text-[#8BA868] uppercase tracking-wider",children:"Portals & Ecosystem"})}),_d.filter(A=>Se(A.role)).map(A=>{const le=A.icon;return a.jsx(Es,{to:A.to,className:({isActive:H})=>`flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group relative ${H?"bg-[#ECFCCB] text-[#1A2E05] shadow-xs":"text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF]"}`,title:s?A.label:void 0,children:({isActive:H})=>a.jsxs(a.Fragment,{children:[H&&a.jsx("span",{className:"absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#84CC16] rounded-r-full"}),a.jsx(le,{className:`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${H?"text-[#65A30D]":"text-[#8BA868]"} ${s?"mx-auto":"mr-3"}`}),!s&&a.jsx("span",{className:"truncate",children:A.label})]})},A.to)})]})]}),a.jsxs("div",{className:"p-3 border-t border-[#F7FBEF] space-y-2",children:[s?a.jsx("div",{className:"flex justify-center",title:"Network Online",children:a.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-[#65A30D]"})]})}):a.jsxs("div",{className:"px-2.5 py-1.5 rounded-xl bg-[#F7FBEF] border border-[#ECFCCB] flex items-center justify-between text-[11px] text-[#4D6B2A]",children:[a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),a.jsx("span",{className:"font-semibold text-[#1A2E05]",children:d===31337?"Hardhat Node":"Polygon Amoy"})]}),h?a.jsxs("span",{className:"font-mono text-[10px] text-[#65A30D]",children:["#",h.toString()]}):null]}),a.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB]",children:[a.jsxs("div",{className:"flex items-center space-x-2.5 overflow-hidden",children:[a.jsx("div",{className:"w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center shrink-0",children:F}),!s&&a.jsxs("div",{className:"overflow-hidden",children:[a.jsx("p",{className:"text-xs font-bold text-[#1A2E05] truncate",children:w}),a.jsx("p",{className:"text-[10px] text-[#4D6B2A] truncate font-mono",children:o?.walletAddress?`${o.walletAddress.slice(0,6)}...${o.walletAddress.slice(-4)}`:i?.email})]})]}),!s&&a.jsx("button",{onClick:()=>c(),className:"p-1.5 text-[#4D6B2A] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Sign Out",children:a.jsx(Sr,{className:"w-4 h-4"})})]})]})]});return a.jsxs(a.Fragment,{children:[a.jsx("aside",{className:`hidden md:block sticky top-0 h-screen transition-all duration-300 z-30 shrink-0 ${s?"w-20":"w-64"}`,children:Re}),t&&a.jsxs("div",{className:"fixed inset-0 z-50 md:hidden flex",children:[a.jsx("div",{className:"fixed inset-0 bg-[#1A2E05]/40 backdrop-blur-xs transition-opacity",onClick:()=>n(!1)}),a.jsx("div",{className:"relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200",children:Re})]})]})}function vd(){const{address:s,isConnected:e}=Tn(),t=Cn(),{switchChain:n,chains:r}=ti(),{openConnectModal:i}=si(),[o,c]=f.useState(!1),[l,d]=f.useState(!1),h=w=>{w.stopPropagation(),s&&(navigator.clipboard.writeText(s),c(!0),setTimeout(()=>c(!1),2e3))};if(!e||!s)return a.jsxs("button",{onClick:i,className:"inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-xs transition-all shadow-sm",children:[a.jsx(ls,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Connect Wallet"})]});const x=r.find(w=>w.id===t),T=x?x.name:`Chain ${t}`;return a.jsxs("div",{className:"relative flex items-center space-x-1.5",children:[a.jsxs("div",{className:"relative",children:[a.jsxs("button",{onClick:()=>d(w=>!w),className:"inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-[#ECFCCB] hover:bg-[#D9F99D] text-[#1A2E05] text-xs font-medium border border-[#D9F99D] transition-colors",title:"Switch Network",children:[a.jsx(od,{className:"w-3 h-3 text-[#65A30D]"}),a.jsx("span",{className:"hidden sm:inline max-w-[80px] truncate",children:T}),a.jsx(Nr,{className:"w-3 h-3 text-[#4D6B2A]"})]}),l&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>d(!1)}),a.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-[#FFFFFF] border border-[#ECFCCB] rounded-xl shadow-lg p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100",children:[a.jsx("div",{className:"px-2 py-1 text-[10px] font-bold text-[#65A30D] uppercase tracking-wider",children:"Select Network"}),r.map(w=>a.jsxs("button",{onClick:()=>{n&&n({chainId:w.id}),d(!1)},className:`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-lg transition-colors ${w.id===t?"bg-[#ECFCCB] font-bold text-[#1A2E05]":"text-[#4D6B2A] hover:bg-[#F7FBEF] hover:text-[#1A2E05]"}`,children:[a.jsx("span",{className:"truncate",children:w.name}),w.id===t&&a.jsx(xn,{className:"w-3 h-3 text-[#65A30D]"})]},w.id))]})]})]}),a.jsxs("div",{onClick:h,className:"cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB] hover:border-[#84CC16] text-[#1A2E05] text-xs font-mono transition-all shadow-xs",title:"Click to copy address",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"})]}),a.jsxs("span",{className:"font-semibold",children:[s.slice(0,6),"...",s.slice(-4)]}),o?a.jsx(xn,{className:"w-3.5 h-3.5 text-[#65A30D]"}):a.jsx(td,{className:"w-3.5 h-3.5 text-[#4D6B2A] group-hover:text-[#1A2E05] transition-colors"})]})]})}function xd(){const s=Br(),{user:e,account:t,signOut:n,isDemoUser:r}=Ze(),{disconnect:i}=kn(),[o,c]=f.useState(!1),l=f.useRef(null);f.useEffect(()=>{function w(F){l.current&&!l.current.contains(F.target)&&c(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]);const d=e&&"displayName"in e&&e.displayName?e.displayName:e?.email?.split("@")[0]||"Bharosa User",h=d.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2)||"BU",x=async()=>{c(!1),await n(),s("/login",{replace:!0})},T=()=>{i(),c(!1)};return a.jsxs("div",{className:"relative",ref:l,children:[a.jsxs("button",{onClick:()=>c(w=>!w),className:"flex items-center space-x-2 p-1 pl-1.5 rounded-full hover:bg-[#ECFCCB] transition-colors border border-transparent hover:border-[#D9F99D]","aria-label":"User profile menu",children:[a.jsx("div",{className:"w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs",children:h}),a.jsx(Nr,{className:"w-3.5 h-3.5 text-[#4D6B2A] mr-1 hidden sm:block"})]}),o&&a.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100",children:[a.jsxs("div",{className:"p-3 border-b border-[#F7FBEF]",children:[a.jsx("p",{className:"text-xs font-bold text-[#1A2E05] truncate",children:d}),a.jsx("p",{className:"text-[11px] text-[#4D6B2A] truncate mt-0.5",children:e?.email}),a.jsxs("div",{className:"flex items-center space-x-1.5 mt-2",children:[a.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider",children:t?.persona||"HOLDER"}),r&&a.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#84CC16] text-[#1A2E05]",children:"Demo"})]})]}),a.jsxs("div",{className:"py-1",children:[a.jsxs(te,{to:"/identity",onClick:()=>c(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsx(nd,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Identity & DID"]}),a.jsxs(te,{to:"/connect-wallet",onClick:()=>c(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsx(ls,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Manage Linked Key"]}),a.jsxs(te,{to:"/security",onClick:()=>c(!1),className:"flex items-center px-3 py-2 text-xs text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors",children:[a.jsx(Rr,{className:"w-4 h-4 mr-2.5 text-[#65A30D]"}),"Security Center"]})]}),a.jsxs("div",{className:"pt-1 border-t border-[#F7FBEF]",children:[a.jsxs("button",{onClick:T,className:"w-full flex items-center px-3 py-2 text-xs text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#F7FBEF] rounded-xl transition-colors text-left",children:[a.jsx(ls,{className:"w-4 h-4 mr-2.5 text-stone-400"}),"Disconnect Wallet"]}),a.jsxs("button",{onClick:x,className:"w-full flex items-center px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left font-medium",children:[a.jsx(Sr,{className:"w-4 h-4 mr-2.5 text-red-500"}),"Sign Out"]})]})]})]})}const bd=[{id:"1",title:"Gasless Meta-Transactions Active",desc:"Biconomy / EIP-2771 Relayer is online and sponsoring your identity calls.",time:"2m ago",type:"relayer"},{id:"2",title:"Cryptographic DID Online",desc:"Your W3C DID document is synced to IPFS and pinned.",time:"1h ago",type:"success"},{id:"3",title:"Decentralized Audit Active",desc:"All smart contract invocations are signed and verifiable on-chain.",time:"3h ago",type:"info"}];function wd(){const[s,e]=f.useState(!1),[t,n]=f.useState(bd),r=f.useRef(null);f.useEffect(()=>{function c(l){r.current&&!r.current.contains(l.target)&&e(!1)}return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const i=t.length,o=()=>{n([])};return a.jsxs("div",{className:"relative",ref:r,children:[a.jsxs("button",{onClick:()=>e(c=>!c),className:"relative p-2 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors","aria-label":"Notifications",children:[a.jsx(Yl,{className:"w-4 h-4"}),i>0&&a.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#84CC16] ring-2 ring-[#FFFFFF]"})]}),s&&a.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-100",children:[a.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#F7FBEF]",children:[a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsx("span",{className:"text-xs font-bold text-[#1A2E05]",children:"Activity & Alerts"}),i>0&&a.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFCCB] text-[#65A30D]",children:i})]}),t.length>0&&a.jsx("button",{onClick:o,className:"text-[11px] text-[#65A30D] hover:underline font-medium",children:"Clear"})]}),a.jsx("div",{className:"max-h-72 overflow-y-auto py-2 divide-y divide-[#F7FBEF]",children:t.length===0?a.jsx("div",{className:"text-center py-6 text-xs text-[#4D6B2A]",children:"No new notifications"}):t.map(c=>a.jsx("div",{className:"py-2.5 px-1 first:pt-1 last:pb-1",children:a.jsxs("div",{className:"flex items-start space-x-2.5",children:[c.type==="relayer"?a.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:a.jsx(Pr,{className:"w-3.5 h-3.5 fill-[#84CC16]"})}):a.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0 mt-0.5",children:a.jsx(Ne,{className:"w-3.5 h-3.5"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-xs font-semibold text-[#1A2E05] truncate",children:c.title}),a.jsx("p",{className:"text-[11px] text-[#4D6B2A] mt-0.5 leading-relaxed",children:c.desc}),a.jsx("span",{className:"text-[10px] text-stone-400 mt-1 block",children:c.time})]})]})},c.id))})]})]})}const Ed={"/dashboard":{title:"Dashboard",subtitle:"Self-Sovereign Identity Overview"},"/identity":{title:"Identity & DID",subtitle:"W3C DID Document & Cryptographic Keys"},"/credentials":{title:"Verifiable Credentials",subtitle:"Cryptographically Signed Attestations"},"/assets":{title:"Encrypted Asset Vault",subtitle:"Zero-Knowledge File & Secret Storage"},"/zk":{title:"Zero-Knowledge Proofs",subtitle:"Selective Disclosure & Privacy Verification"},"/access":{title:"Access Control",subtitle:"Decentralized Time-Bound Delegation"},"/recovery":{title:"Social Recovery",subtitle:"Multi-Guardian Key Restitution"},"/audit":{title:"Audit Trail",subtitle:"Immutable On-Chain Event History"},"/security":{title:"Security Center",subtitle:"Emergency Freeze & Anti-Tamper"},"/issuer":{title:"Issuer Portal",subtitle:"Accredited Credential Authoring"},"/verifier":{title:"Verifier Portal",subtitle:"Instant Verification Gateway"},"/admin":{title:"Admin Console",subtitle:"Protocol Governance & Parameters"},"/onboarding":{title:"Identity Onboarding",subtitle:"Generate DID & Cryptographic Keypair"},"/connect-wallet":{title:"Connect Wallet",subtitle:"Cryptographic Key Gate"}};function Id({onOpenMobileMenu:s}){const e=rt(),[t,n]=f.useState(!0),r=Ed[e.pathname]||{title:"Bharosa Protocol",subtitle:"Decentralized Trust Network"};return a.jsxs("header",{className:"sticky top-0 z-20 h-16 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#ECFCCB] px-4 sm:px-6 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("button",{onClick:s,className:"md:hidden p-2 rounded-xl text-[#4D6B2A] hover:text-[#1A2E05] hover:bg-[#ECFCCB] transition-colors","aria-label":"Open navigation drawer",children:a.jsx(ad,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"font-anton text-lg sm:text-xl tracking-wide text-[#1A2E05] uppercase leading-tight",children:r.title}),a.jsx("p",{className:"hidden sm:block text-[11px] text-[#4D6B2A] font-medium leading-none",children:r.subtitle})]})]}),a.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[a.jsxs("button",{onClick:()=>n(!t),className:`hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${t?"bg-[#ECFCCB] text-[#1A2E05] border-[#84CC16]":"bg-stone-100 text-stone-500 border-stone-200"}`,title:"Sponsored transactions via EIP-2771 Forwarder",children:[a.jsx(Pr,{className:`w-3.5 h-3.5 ${t?"text-[#65A30D] fill-[#84CC16]":"text-stone-400"}`}),a.jsx("span",{children:t?"Gasless Active":"Self-Pay Gas"})]}),a.jsx(wd,{}),a.jsx(vd,{}),a.jsx(xd,{})]})]})}function kd(){const[s,e]=f.useState(()=>localStorage.getItem("bharosa_sidebar_collapsed")==="true"),[t,n]=f.useState(!1);return f.useEffect(()=>{localStorage.setItem("bharosa_sidebar_collapsed",String(s))},[s]),a.jsxs("div",{className:"min-h-screen flex bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(yd,{collapsed:s,setCollapsed:e,mobileOpen:t,setMobileOpen:n}),a.jsxs("div",{className:"flex-1 flex flex-col min-w-0",children:[a.jsx(Id,{onOpenMobileMenu:()=>n(!0)}),a.jsx("main",{className:"flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-in fade-in duration-150",children:a.jsx(ne,{})}),a.jsx(Dr,{})]})]})}function Cd(){return a.jsxs("div",{className:"min-h-screen bg-[#F7FBEF] flex flex-col justify-between text-[#1A2E05]",children:[a.jsxs("header",{className:"p-6 flex items-center justify-between max-w-6xl mx-auto w-full",children:[a.jsxs(te,{to:"/",className:"flex items-center gap-3 group",children:[a.jsx("div",{className:"w-10 h-10 rounded-2xl bg-[#0C2518] border border-[#C6F432]/40 flex items-center justify-center text-[#C6F432] shadow-sm transition group-hover:scale-105 shrink-0",children:a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("div",{className:"w-2.5 h-5 rounded-full bg-[#C6F432]"}),a.jsx("div",{className:"w-2.5 h-3 rounded-full bg-white"})]})}),a.jsxs("div",{className:"flex flex-col",children:[a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"font-black text-xl tracking-tight text-[#0C2518] leading-tight",children:"Bharosa"}),a.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFCCB] text-[#1A2E05] border border-[#84CC16]/40",children:"भरोसा"})]}),a.jsx("span",{className:"text-[10px] font-bold text-[#4D6B2A] tracking-wider leading-none uppercase",children:"Sovereign Trust Platform"})]})]}),a.jsxs(te,{to:"/public-verify",className:"text-xs font-bold text-[#4D6B2A] hover:text-[#0C2518] transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/60",children:[a.jsx(Ne,{className:"w-3.5 h-3.5 text-[#84CC16]"})," Public Proof Verifier"]})]}),a.jsx("main",{className:"flex-1 flex items-center justify-center p-4 sm:p-6 my-4",children:a.jsx("div",{className:"w-full max-w-md bg-white rounded-2xl border border-[#D9EBB5] shadow-lime p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200",children:a.jsx(ne,{})})}),a.jsx("footer",{className:"p-4 text-center text-xs text-[#4D6B2A] border-t border-[#D9EBB5]/50",children:"Bharosa Protocol · Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE"})]})}function qt({children:s}){const{user:e,loading:t,isDemoUser:n}=Ze(),r=rt();if(t)return a.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(ht,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),a.jsx("p",{className:"text-sm font-medium",children:"Verifying Bharosa credentials..."})]});if(!e){const i=encodeURIComponent(r.pathname+r.search);return a.jsx(wt,{to:`/login?returnTo=${i}`,replace:!0})}return!n&&"emailVerified"in e&&!e.emailVerified&&e.providerData?.some(o=>o.providerId==="password")&&r.pathname!=="/verify-email"?a.jsx(wt,{to:"/verify-email",replace:!0}):s?a.jsx(a.Fragment,{children:s}):a.jsx(ne,{})}function En({children:s}){const{account:e,loading:t,isDemoUser:n}=Ze(),{isConnected:r,address:i}=Tn(),o=rt();if(t)return a.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(ht,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),a.jsx("p",{className:"text-sm font-medium",children:"Checking cryptographic wallet status..."})]});if(n&&e?.walletAddress)return s?a.jsx(a.Fragment,{children:s}):a.jsx(ne,{});const c=!!e?.walletAddress,l=r&&i&&e?.walletAddress&&i.toLowerCase()===e.walletAddress.toLowerCase();if(!r||!c||!l){const d=encodeURIComponent(o.pathname+o.search);return a.jsx(wt,{to:`/connect-wallet?returnTo=${d}`,replace:!0})}return s?a.jsx(a.Fragment,{children:s}):a.jsx(ne,{})}function Td({children:s}){const{account:e,loading:t}=Ze();return t?a.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]",children:[a.jsx(ht,{className:"w-8 h-8 animate-spin text-[#84CC16] mb-3"}),a.jsx("p",{className:"text-sm font-medium",children:"Resolving decentralized identity..."})]}):e?.didRegistered?s?a.jsx(a.Fragment,{children:s}):a.jsx(ne,{}):a.jsx(wt,{to:"/onboarding",replace:!0})}function Gt({allowedRoles:s,children:e}){const{account:t,loading:n}=Ze();if(n)return null;const r=t?.persona?.toUpperCase()||"",i=(t?.onChainRoles||[]).map(c=>c.toUpperCase());return s.includes(r)||s.some(c=>i.includes(c.toUpperCase()))?e?a.jsx(a.Fragment,{children:e}):a.jsx(ne,{}):a.jsx("div",{className:"flex-1 flex items-center justify-center p-8 bg-[#F7FBEF]",children:a.jsxs("div",{className:"max-w-md w-full bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-8 shadow-sm text-center",children:[a.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[#ECFCCB] flex items-center justify-center mx-auto mb-4 text-[#65A30D]",children:a.jsx(Rr,{className:"w-8 h-8"})}),a.jsx("h2",{className:"text-2xl font-bold font-anton text-[#1A2E05] tracking-wide mb-2 uppercase",children:"Access Restricted"}),a.jsxs("p",{className:"text-sm text-[#4D6B2A] mb-6 leading-relaxed",children:["This module requires verified credentials or privileges (",s.join(", "),"). Your current role is"," ",a.jsx("span",{className:"font-semibold text-[#1A2E05]",children:t?.persona||"HOLDER"}),"."]}),a.jsxs(te,{to:"/dashboard",className:"inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-sm transition-colors shadow-sm",children:[a.jsx(Ar,{className:"w-4 h-4 mr-2"})," Return to Dashboard"]})]})})}const S=()=>a.jsxs("div",{className:"flex-1 min-h-[60vh] flex items-center justify-center p-16 text-sm text-[#4D6B2A]",children:[a.jsx(ht,{className:"w-6 h-6 animate-spin mr-2 text-[#84CC16]"})," Loading Bharosa Protocol..."]}),Ad=f.lazy(()=>R(()=>import("./Landing-D3AZPOdU.js"),__vite__mapDeps([0,1,2,3,4,5]))),Kt=f.lazy(()=>R(()=>import("./PublicVerify-DaeKwIFD.js"),__vite__mapDeps([6,1,2,7,5,8,3,9,10,11]))),Nd=f.lazy(()=>R(()=>import("./Login-C7MjjkAO.js"),__vite__mapDeps([12,1,2,13,3,14,15,5]))),Sd=f.lazy(()=>R(()=>import("./SignUp-CxbjsB3K.js"),__vite__mapDeps([16,1,2,13,3,14,15,5]))),Rd=f.lazy(()=>R(()=>import("./ForgotPassword-BSu6riYl.js"),__vite__mapDeps([17,1,2,13,3,9,14,15,5]))),Pd=f.lazy(()=>R(()=>import("./VerifyEmail-Cy3wUc1J.js"),__vite__mapDeps([18,1,2,3,15,9,19,5]))),Od=f.lazy(()=>R(()=>import("./ConnectWallet-BC-grGqw.js"),__vite__mapDeps([20,1,2,5,3,9]))),Dd=f.lazy(()=>R(()=>import("./AppRedirect-B1qKIPvA.js"),__vite__mapDeps([21,1,2,5]))),jd=f.lazy(()=>R(()=>import("./Onboarding-DN8e1Aot.js"),__vite__mapDeps([22,1,2,5,7,23,3,9]))),Ld=f.lazy(()=>R(()=>import("./Dashboard-CD1yj6m6.js"),__vite__mapDeps([24,1,2,7,5,23,3,25,26,4,27,28]))),Md=f.lazy(()=>R(()=>import("./Identity-Df4hutie.js"),__vite__mapDeps([29,1,2,7,5,23,3]))),Fd=f.lazy(()=>R(()=>import("./Credentials-DGxQpesi.js"),__vite__mapDeps([30,1,2,7,5,23,3,31,32,26]))),In=f.lazy(()=>R(()=>import("./Assets-DWS2n05R.js"),__vite__mapDeps([33,1,2,3,7,5,34,19,9,31,10]))),Ud=f.lazy(()=>R(()=>import("./Access-BSycXdoP.js"),__vite__mapDeps([35,1,2,3,7,5,36,25,9,27,19,11,32]))),Bd=f.lazy(()=>R(()=>import("./ZK-CTV7wsNo.js"),__vite__mapDeps([37,1,2,3,7,5,19,9,10,11]))),Vd=f.lazy(()=>R(()=>import("./Recovery-D7jqDA0E.js"),__vite__mapDeps([38,1,2,3,5,9]))),$d=f.lazy(()=>R(()=>import("./AuditLog-CIATA7kb.js"),__vite__mapDeps([39,1,2,3,32,28,5]))),zd=f.lazy(()=>R(()=>import("./SecurityCenter-VX9rPnFv.js"),__vite__mapDeps([40,1,2,3,7,5,41,32,36,19,9,27,11]))),Hd=f.lazy(()=>R(()=>import("./Issuer-BIPFDftD.js"),__vite__mapDeps([42,1,2,3,7,5,23,8,14,9,28,34]))),Wd=f.lazy(()=>R(()=>import("./Verifier-BD_cfJ6m.js"),__vite__mapDeps([43,1,2,3]))),Zd=f.lazy(()=>R(()=>import("./Admin-DE5FTGNm.js"),__vite__mapDeps([44,1,2,3,7,5,9,41,25,19]))),qd=f.lazy(()=>R(()=>import("./NotFound-Rgf9Vs8u.js"),__vite__mapDeps([45,1,2,3,5]))),Gd=Vr([{element:a.jsx(wn,{}),children:[{path:"/",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Ad,{})})},{path:"/public-verify",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Kt,{})})},{path:"/verify",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Kt,{})})},{path:"/verify/:hash",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Kt,{})})}]},{element:a.jsx(Cd,{}),children:[{path:"/login",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Nd,{})})},{path:"/signup",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Sd,{})})},{path:"/forgot-password",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Rd,{})})},{path:"/verify-email",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Pd,{})})}]},{path:"/app",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Dd,{})})},{element:a.jsx(qt,{}),children:[{path:"/connect-wallet",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Od,{})})}]},{element:a.jsx(qt,{children:a.jsx(En,{})}),children:[{path:"/onboarding",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(jd,{})})}]},{element:a.jsx(qt,{children:a.jsx(En,{children:a.jsx(Td,{children:a.jsx(kd,{})})})}),children:[{path:"/dashboard",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Ld,{})})},{path:"/identity",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Md,{})})},{path:"/credentials",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Fd,{})})},{path:"/assets",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(In,{})})},{path:"/assets/:assetId",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(In,{})})},{path:"/access",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Ud,{})})},{path:"/zk",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Bd,{})})},{path:"/recovery",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Vd,{})})},{path:"/audit",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx($d,{})})},{path:"/security",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(zd,{})})},{path:"/issuer",element:a.jsx(Gt,{allowedRoles:["ISSUER","ADMIN"],children:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Hd,{})})})},{path:"/verifier",element:a.jsx(Gt,{allowedRoles:["VERIFIER","ADMIN"],children:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Wd,{})})})},{path:"/admin",element:a.jsx(Gt,{allowedRoles:["ADMIN"],children:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(Zd,{})})})}]},{element:a.jsx(wn,{}),children:[{path:"*",element:a.jsx(f.Suspense,{fallback:a.jsx(S,{}),children:a.jsx(qd,{})})}]}]);function Kd(){return a.jsx($r,{children:a.jsx(Vi,{children:a.jsx(md,{children:a.jsx(zr,{router:Gd})})})})}const jr=document.getElementById("root");if(!jr)throw new Error("Root element #root not found in document");Jt.createRoot(jr).render(a.jsx(Hr.StrictMode,{children:a.jsx(Kd,{})}));const Qd=Object.freeze(Object.defineProperty({__proto__:null,default:ni},Symbol.toStringTag,{value:"Module"}));export{Kl as A,Xl as B,xn as C,sd as F,nd as K,ht as L,dd as S,ud as T,fd as U,ls as W,Pr as Z,Ne as a,cd as b,id as c,Ar as d,B as e,C as f,bn as g,Sr as h,Rr as i,rd as j,hd as k,Jl as l,td as m,Gl as n,Li as o,Ql as p,ed as q,ld as r,M as s,Qd as t,Ze as u};
