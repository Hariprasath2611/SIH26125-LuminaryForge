import{j as e}from"./vendor-query-BZEXoOgd.js";import{c as l,r as s,L as r}from"./vendor-react-B7X1oEVa.js";import{P as x}from"./PageMeta-De456g46.js";function d(){return e.jsxs("div",{className:"w-full max-w-3xl flex flex-col items-center justify-center relative select-none",children:[e.jsx("style",{children:`
        @keyframes carBounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-1.5px) rotate(-0.5deg); }
          50% { transform: translateY(1px) rotate(0.3deg); }
          75% { transform: translateY(-0.8px) rotate(-0.2deg); }
        }

        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes portalVortex {
          0% { transform: rotate(0deg) scale(1); opacity: 0.9; }
          50% { transform: rotate(180deg) scale(1.06); opacity: 1; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.9; }
        }

        @keyframes portalPulse {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(132, 204, 22, 0.7)); }
          50% { filter: drop-shadow(0 0 28px rgba(16, 185, 129, 0.95)); }
        }

        @keyframes dinoSprint {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(-1.5deg); }
          50% { transform: translateY(1px) rotate(1deg); }
          75% { transform: translateY(-3px) rotate(-0.5deg); }
        }

        @keyframes dinoLegLeft {
          0% { transform: rotate(20deg); }
          50% { transform: rotate(-25deg); }
          100% { transform: rotate(20deg); }
        }

        @keyframes dinoLegRight {
          0% { transform: rotate(-25deg); }
          50% { transform: rotate(20deg); }
          100% { transform: rotate(-25deg); }
        }

        @keyframes dinoTail {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-6deg); }
        }

        @keyframes dinoJaw {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes speedLine {
          0% { transform: translateX(120px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 0.9; }
          100% { transform: translateX(-160px); opacity: 0; }
        }

        @keyframes fireTrail {
          0%, 100% { opacity: 0.8; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.15); }
        }

        @keyframes sparkFlicker {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .anim-car { animation: carBounce 0.18s infinite ease-in-out; }
        .anim-wheel { animation: wheelSpin 0.35s infinite linear; transform-origin: center; }
        .anim-portal-vortex { animation: portalVortex 4s infinite linear; transform-origin: 395px 145px; }
        .anim-portal-glow { animation: portalPulse 2s infinite ease-in-out; }
        .anim-dino { animation: dinoSprint 0.36s infinite ease-in-out; }
        .anim-dino-leg-l { animation: dinoLegLeft 0.36s infinite ease-in-out; transform-origin: 585px 180px; }
        .anim-dino-leg-r { animation: dinoLegRight 0.36s infinite ease-in-out; transform-origin: 615px 178px; }
        .anim-dino-tail { animation: dinoTail 0.72s infinite ease-in-out; transform-origin: 670px 140px; }
        .anim-dino-jaw { animation: dinoJaw 0.72s infinite ease-in-out; transform-origin: 535px 105px; }
        .anim-fire { animation: fireTrail 0.22s infinite ease-in-out; transform-origin: right center; }
        .anim-spark { animation: sparkFlicker 0.12s infinite alternate; }
        .anim-speed-1 { animation: speedLine 0.7s infinite linear; }
        .anim-speed-2 { animation: speedLine 0.5s infinite linear 0.18s; }
        .anim-speed-3 { animation: speedLine 0.85s infinite linear 0.35s; }
        .anim-speed-4 { animation: speedLine 0.6s infinite linear 0.5s; }
      `}),e.jsxs("svg",{viewBox:"0 0 800 240",className:"w-full h-auto max-h-[34vh] sm:max-h-[38vh] overflow-visible",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"portalGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#84CC16",stopOpacity:"0.9"}),e.jsx("stop",{offset:"50%",stopColor:"#10B981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#ECFCCB",stopOpacity:"0.95"})]}),e.jsxs("linearGradient",{id:"fireGrad",x1:"100%",y1:"50%",x2:"0%",y2:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:"#F97316",stopOpacity:"0.95"}),e.jsx("stop",{offset:"40%",stopColor:"#FBBF24",stopOpacity:"0.85"}),e.jsx("stop",{offset:"100%",stopColor:"#84CC16",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"dinoBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#22C55E"}),e.jsx("stop",{offset:"60%",stopColor:"#15803D"}),e.jsx("stop",{offset:"100%",stopColor:"#14532D"})]}),e.jsxs("linearGradient",{id:"carBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#A7F3D0"}),e.jsx("stop",{offset:"50%",stopColor:"#6EE7B7"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]})]}),e.jsx("line",{x1:"20",y1:"210",x2:"780",y2:"210",stroke:"#E2E8F0",strokeWidth:"2.5",strokeDasharray:"14 10"}),e.jsxs("g",{className:"anim-speed-1",opacity:"0.6",children:[e.jsx("line",{x1:"320",y1:"90",x2:"220",y2:"90",stroke:"#84CC16",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("line",{x1:"500",y1:"65",x2:"430",y2:"65",stroke:"#10B981",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsxs("g",{className:"anim-speed-2",opacity:"0.5",children:[e.jsx("line",{x1:"280",y1:"125",x2:"180",y2:"125",stroke:"#84CC16",strokeWidth:"2.5",strokeLinecap:"round"}),e.jsx("line",{x1:"680",y1:"75",x2:"590",y2:"75",stroke:"#22C55E",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("g",{className:"anim-speed-3",opacity:"0.7",children:e.jsx("line",{x1:"360",y1:"170",x2:"270",y2:"170",stroke:"#65A30D",strokeWidth:"2",strokeLinecap:"round"})}),e.jsx("g",{className:"anim-speed-4",opacity:"0.4",children:e.jsx("line",{x1:"450",y1:"195",x2:"350",y2:"195",stroke:"#84CC16",strokeWidth:"2",strokeLinecap:"round"})}),e.jsxs("g",{className:"anim-portal-glow",children:[e.jsx("ellipse",{cx:"395",cy:"145",rx:"58",ry:"72",fill:"#ECFCCB",fillOpacity:"0.4"}),e.jsx("ellipse",{cx:"395",cy:"145",rx:"46",ry:"60",stroke:"#A3E635",strokeWidth:"3",opacity:"0.6",strokeDasharray:"12 6"}),e.jsxs("g",{className:"anim-portal-vortex",children:[e.jsx("ellipse",{cx:"395",cy:"145",rx:"36",ry:"50",stroke:"url(#portalGrad)",strokeWidth:"6"}),e.jsx("ellipse",{cx:"395",cy:"145",rx:"24",ry:"34",stroke:"#10B981",strokeWidth:"5",strokeDasharray:"8 4"}),e.jsx("ellipse",{cx:"395",cy:"145",rx:"14",ry:"20",fill:"#FFFFFF",fillOpacity:"0.85"}),e.jsx("path",{d:"M395 110 Q425 145 395 180",stroke:"#84CC16",strokeWidth:"3",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M375 145 Q395 125 415 145",stroke:"#ECFCCB",strokeWidth:"2.5",strokeLinecap:"round",fill:"none"})]}),e.jsx("path",{className:"anim-spark",d:"M360 120 L370 128 L362 135 L375 142",stroke:"#6EE7B7",strokeWidth:"2",fill:"none"}),e.jsx("path",{className:"anim-spark",d:"M428 130 L420 138 L430 146 L422 154",stroke:"#FDE047",strokeWidth:"2",fill:"none"})]}),e.jsxs("g",{className:"anim-car",children:[e.jsxs("g",{className:"anim-fire",children:[e.jsx("path",{d:"M190 206 L280 207 Q310 207 330 208 L280 209 Z",fill:"url(#fireGrad)"}),e.jsx("path",{d:"M110 206 L175 207 Q200 207 220 208 L175 209 Z",fill:"url(#fireGrad)",opacity:"0.8"})]}),e.jsx("ellipse",{cx:"140",cy:"208",rx:"75",ry:"5",fill:"#CBD5E1",opacity:"0.5"}),e.jsx("path",{d:"M60 192 L75 168 L105 165 L125 142 L185 142 L205 165 L225 174 L225 192 L215 198 L68 198 Z",fill:"url(#carBodyGrad)",stroke:"#064E3B",strokeWidth:"2.5",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 192 L62 182 L75 174 L105 170",stroke:"#047857",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"56",y:"180",width:"8",height:"14",rx:"2",fill:"#064E3B"}),e.jsx("rect",{x:"58",y:"182",width:"4",height:"4",rx:"1",fill:"#FEF08A"}),e.jsx("polygon",{points:"56,184 10,175 10,205 56,192",fill:"#FEF08A",fillOpacity:"0.25"}),e.jsx("path",{d:"M123 164 L138 145 L178 145 L198 164 Z",fill:"#D1FAE5",stroke:"#064E3B",strokeWidth:"2"}),e.jsx("line",{x1:"160",y1:"145",x2:"160",y2:"164",stroke:"#064E3B",strokeWidth:"2"}),e.jsx("rect",{x:"186",y:"134",width:"12",height:"10",rx:"2",fill:"#047857",stroke:"#064E3B",strokeWidth:"1.5"}),e.jsx("line",{x1:"192",y1:"134",x2:"192",y2:"126",stroke:"#064E3B",strokeWidth:"2"}),e.jsx("circle",{cx:"192",cy:"125",r:"2.5",fill:"#EF4444",className:"anim-spark"}),e.jsx("line",{x1:"72",y1:"184",x2:"220",y2:"184",stroke:"#064E3B",strokeWidth:"2"}),e.jsx("line",{x1:"74",y1:"188",x2:"218",y2:"188",stroke:"#84CC16",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(95, 196)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"14",fill:"#1E293B",stroke:"#0F172A",strokeWidth:"2"}),e.jsx("circle",{cx:"0",cy:"0",r:"9",fill:"#94A3B8"}),e.jsxs("g",{className:"anim-wheel",children:[e.jsx("circle",{cx:"0",cy:"0",r:"5",fill:"#475569"}),e.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"#0F172A",strokeWidth:"2"}),e.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"#0F172A",strokeWidth:"2"})]})]}),e.jsxs("g",{transform:"translate(190, 196)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"14",fill:"#1E293B",stroke:"#0F172A",strokeWidth:"2"}),e.jsx("circle",{cx:"0",cy:"0",r:"9",fill:"#94A3B8"}),e.jsxs("g",{className:"anim-wheel",children:[e.jsx("circle",{cx:"0",cy:"0",r:"5",fill:"#475569"}),e.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"#0F172A",strokeWidth:"2"}),e.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"#0F172A",strokeWidth:"2"})]})]})]}),e.jsxs("g",{children:[e.jsx("ellipse",{cx:"600",cy:"209",rx:"65",ry:"6",fill:"#CBD5E1",opacity:"0.5"}),e.jsxs("g",{className:"anim-dino",children:[e.jsx("g",{className:"anim-dino-tail",children:e.jsx("path",{d:"M660 145 Q710 135 750 115 Q730 145 680 162 Z",fill:"url(#dinoBodyGrad)",stroke:"#14532D",strokeWidth:"2.5",strokeLinejoin:"round"})}),e.jsx("path",{d:"M560 120 Q600 110 655 125 Q675 145 665 175 Q635 190 585 185 Q550 175 545 145 Q545 130 560 120 Z",fill:"url(#dinoBodyGrad)",stroke:"#14532D",strokeWidth:"2.5",strokeLinejoin:"round"}),e.jsx("path",{d:"M570 135 Q595 130 635 140 Q645 160 635 178 Q600 182 575 172 Z",fill:"#86EFAC",opacity:"0.35"}),e.jsx("path",{d:"M560 125 L550 95 Q545 80 520 78 L495 82 Q480 86 480 100 L482 114 Q492 120 525 120 L545 135 Z",fill:"url(#dinoBodyGrad)",stroke:"#14532D",strokeWidth:"2.5",strokeLinejoin:"round"}),e.jsx("polygon",{points:"488,114 492,120 496,114",fill:"#FFFFFF",stroke:"#14532D",strokeWidth:"1"}),e.jsx("polygon",{points:"498,114 502,120 506,114",fill:"#FFFFFF",stroke:"#14532D",strokeWidth:"1"}),e.jsx("polygon",{points:"508,114 512,120 516,114",fill:"#FFFFFF",stroke:"#14532D",strokeWidth:"1"}),e.jsxs("g",{className:"anim-dino-jaw",children:[e.jsx("path",{d:"M525 120 L488 120 Q485 130 500 134 L532 130 Z",fill:"#15803D",stroke:"#14532D",strokeWidth:"2"}),e.jsx("polygon",{points:"492,120 495,115 498,120",fill:"#FFFFFF"}),e.jsx("polygon",{points:"502,120 505,115 508,120",fill:"#FFFFFF"})]}),e.jsx("circle",{cx:"508",cy:"94",r:"5",fill:"#FEF08A",stroke:"#14532D",strokeWidth:"1.5"}),e.jsx("circle",{cx:"506.5",cy:"94",r:"2.5",fill:"#14532D"}),e.jsxs("g",{children:[e.jsx("path",{d:"M548 145 Q532 148 528 156",stroke:"#14532D",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("path",{d:"M528 156 L522 153",stroke:"#14532D",strokeWidth:"2.5",strokeLinecap:"round"}),e.jsx("path",{d:"M528 156 L522 158",stroke:"#14532D",strokeWidth:"2.5",strokeLinecap:"round"})]})]}),e.jsxs("g",{className:"anim-dino-leg-l",children:[e.jsx("path",{d:"M580 170 Q575 192 562 205 L550 205 Q565 200 580 170 Z",fill:"#15803D",stroke:"#14532D",strokeWidth:"2.5",strokeLinejoin:"round"}),e.jsx("polygon",{points:"550,205 540,207 554,203",fill:"#14532D"}),e.jsx("polygon",{points:"554,205 545,208 558,203",fill:"#14532D"})]}),e.jsxs("g",{className:"anim-dino-leg-r",children:[e.jsx("path",{d:"M625 170 Q628 194 645 204 L658 204 Q642 195 625 170 Z",fill:"#14532D",stroke:"#052E16",strokeWidth:"2.5",strokeLinejoin:"round"}),e.jsx("polygon",{points:"646,204 656,207 644,202",fill:"#052E16"}),e.jsx("polygon",{points:"650,204 660,208 648,202",fill:"#052E16"})]}),e.jsx("circle",{cx:"658",cy:"207",r:"4",fill:"#CBD5E1",className:"anim-spark",opacity:"0.6"}),e.jsx("circle",{cx:"664",cy:"205",r:"3",fill:"#CBD5E1",className:"anim-spark",opacity:"0.5"})]})]}),e.jsxs("div",{className:"mt-1 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#4D6B2A] bg-[#ECFCCB]/80 px-3.5 py-1 rounded-full border border-[#D9F99D] shadow-2xs",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-[#84CC16] animate-ping"}),e.jsx("span",{children:"88.0 MPH — Temporal Pursuit in Progress"})]})]})}function f(){const i=l(),[t,o]=s.useState(!1),[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"404 - Page Not Found | Bharosa Protocol",description:"The cryptographic resource or interface path you are navigating to could not be found."}),e.jsxs("main",{className:"h-screen h-[100dvh] w-full bg-white text-[#1A2E05] overflow-hidden flex flex-col justify-between items-center px-4 py-4 sm:py-6 relative font-sans selection:bg-[#84CC16] selection:text-[#1A2E05]",children:[e.jsx("svg",{className:"absolute top-6 left-8 sm:left-16 w-8 h-8 text-[#84CC16]/25 pointer-events-none select-none",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 7.5C5 6 8 8 10 9c2-1 5-3 7.5-1.5-.5 1.5-2 2-3.5 2 2 .5 3.5 1.5 4.5 3-2-.5-4-1-6-1-1.5 2-3 4-4.5 6 .5-2 1-4 1.5-6-2.5 0-4.5.5-6.5-1.5z"})}),e.jsx("svg",{className:"absolute top-10 right-8 sm:right-20 w-7 h-7 text-[#84CC16]/25 pointer-events-none select-none",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 7.5C5 6 8 8 10 9c2-1 5-3 7.5-1.5-.5 1.5-2 2-3.5 2 2 .5 3.5 1.5 4.5 3-2-.5-4-1-6-1-1.5 2-3 4-4.5 6 .5-2 1-4 1.5-6-2.5 0-4.5.5-6.5-1.5z"})}),e.jsx("header",{className:"shrink-0 pt-1",children:e.jsxs(r,{to:"/",className:"inline-flex items-center gap-2.5 group",children:[e.jsx("img",{src:"/logos/bharosa-mark.png",alt:"Bharosa Logo",className:"w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105"}),e.jsx("span",{className:"font-anton text-xl sm:text-2xl tracking-wide text-[#1A2E05] uppercase",children:"Bharosa"})]})}),e.jsxs("div",{className:"flex flex-col items-center justify-center text-center max-w-xl mx-auto shrink-0 my-auto px-2",children:[e.jsx("h1",{className:"font-anton text-7xl sm:text-8xl md:text-9xl text-[#1A2E05] tracking-tight leading-none select-none",children:"404"}),e.jsx("p",{className:"text-xs sm:text-sm text-[#4D6B2A] max-w-md mx-auto mt-2 mb-6 leading-relaxed font-medium",children:"It looks like you were traveling the decentralized web at exactly 88mph. While we work on powering your browser back to 1.21 Gigawatts, please visit the buttons below..."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-10",children:[e.jsx(r,{to:"/",className:"inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-extrabold text-xs uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",children:"Go to Home"}),e.jsx("button",{type:"button",onClick:()=>i(-1),className:"inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white hover:bg-[#F7FBEF] text-[#1A2E05] font-extrabold text-xs uppercase tracking-wider border border-[#D9F99D] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",children:"Previous Page"})]})]}),e.jsxs("div",{className:"w-full flex items-end justify-center shrink min-h-0 pb-1",children:[!a&&e.jsx("video",{src:"/videos/dino-chase.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onLoadedData:()=>o(!0),onError:()=>n(!0),className:`max-h-[32vh] sm:max-h-[38vh] w-auto object-contain select-none pointer-events-none rounded-xl ${t?"block":"hidden"}`}),!t&&e.jsx(d,{})]})]})]})}export{f as NotFoundPage,f as default};
