"use strict";(self.webpackChunkdoc_dvpt_inte=self.webpackChunkdoc_dvpt_inte||[]).push([[467],{2730:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=s(4848),t=s(8453);const i={sidebar_position:2},c="Canvas",r={id:"enonces-td/canvas",title:"Canvas",description:"Cr\xe9ation de graphiques en JS \xe0 l'aide de la balise HTML canvas",source:"@site/docs/enonces-td/canvas.md",sourceDirName:"enonces-td",slug:"/enonces-td/canvas",permalink:"/doc-dvpt-et-integration/docs/enonces-td/canvas",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SVG",permalink:"/doc-dvpt-et-integration/docs/enonces-td/svg"},next:{title:"Audio",permalink:"/doc-dvpt-et-integration/docs/enonces-td/audio"}},l={},o=[{value:"Pr\xe9sentation",id:"pr\xe9sentation",level:2},{value:"L&#39;\xe9l\xe9ment <code>&lt;canvas&gt;</code>",id:"l\xe9l\xe9ment-canvas",level:2},{value:"Syst\xe8me de coordonn\xe9es",id:"syst\xe8me-de-coordonn\xe9es",level:3},{value:"Dessiner sur le canvas en Javascript",id:"dessiner-sur-le-canvas-en-javascript",level:2},{value:"Formes de base",id:"formes-de-base",level:3},{value:"Animer le canvas",id:"animer-le-canvas",level:2},{value:"Divers",id:"divers",level:2},{value:"Manipulation des pixels pour changer les couleurs de l&#39;image",id:"manipulation-des-pixels-pour-changer-les-couleurs-de-limage",level:3},{value:"Augmenter la r\xe9solution du canvas",id:"augmenter-la-r\xe9solution-du-canvas",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"canvas",children:"Canvas"})}),"\n",(0,a.jsx)(n.p,{children:"Cr\xe9ation de graphiques en JS \xe0 l'aide de la balise HTML canvas"}),"\n",(0,a.jsx)(n.h2,{id:"pr\xe9sentation",children:"Pr\xe9sentation"}),"\n",(0,a.jsxs)(n.p,{children:["la balise HTML ",(0,a.jsx)(n.code,{children:"<canvas>"})," nous permet de cr\xe9er des images matricielles (compos\xe9es de pixels) avec l'aide de l'API Canvas en Javascript. On peut alors y dessiner des graphiques et y ajouter des animations."]}),"\n",(0,a.jsxs)(n.h2,{id:"l\xe9l\xe9ment-canvas",children:["L'\xe9l\xe9ment ",(0,a.jsx)(n.code,{children:"<canvas>"})]}),"\n",(0,a.jsxs)(n.p,{children:["La balise ",(0,a.jsx)(n.code,{children:"<canvas>"})," contiendra tous les \xe9l\xe9ments de l'image, ajout\xe9s en Javascript."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",metastring:'title="HTML"',children:'<canvas id="canvas" width="100" height="100"></canvas>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"syst\xe8me-de-coordonn\xe9es",children:"Syst\xe8me de coordonn\xe9es"}),"\n",(0,a.jsxs)(n.p,{children:["Comme le format ",(0,a.jsx)(n.code,{children:"<svg>"}),", le ",(0,a.jsx)(n.code,{children:"<canvas>"})," poss\xe8de un syst\xe8me de coordonn\xe9es."]}),"\n",(0,a.jsxs)(n.p,{children:["La balise poss\xe8de les attributs ",(0,a.jsx)(n.code,{children:"width"})," et ",(0,a.jsx)(n.code,{children:"height"})," pour d\xe9finir les dimensions du canvas. Par d\xe9faut, 1 unit\xe9 = 1 pixel."]}),"\n",(0,a.jsx)(n.p,{children:"Le point de coordonn\xe9es (0,0) se situe en haut \xe0 gauche du canvas."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<canvas id="canvas" width="100" height="100" style="width:400px;height:400px"></canvas>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="script.js"',children:'const canvas = document.getElementById("canvas");\nconst ctx = canvas.getContext("2d");\n\nctx.fillRect(50, 20, 10, 10);\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Syst\xe8me de coordonn\xe9es",src:s(3557).A+"",width:"417",height:"293"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Les \xe9l\xe9ments dessin\xe9s \xe0 l'ext\xe9rieur de l'espace du syst\xe8me de coordonn\xe9es seront coup\xe9s."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"dessiner-sur-le-canvas-en-javascript",children:"Dessiner sur le canvas en Javascript"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Pour afficher quelque chose, un script doit commencer par acc\xe9der au contexte de rendu pour pouvoir dessiner dessus."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Pour dessiner sur le canvas, on utilise un contexte de rendu en Javascript. C'est ensuite sur ce contexte que l'on va dessiner des formes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="Javascript"',children:'const canvas = document.getElementById("canvas");\nconst ctx = canvas.getContext("2d");\n\nctx.fillStyle = "blue";\nctx.fillRect(10, 10, 80, 80);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"formes-de-base",children:"Formes de base"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const canvas = document.getElementById("canvas");\nconst ctx = canvas.getContext("2d");\n\n// Rectangle\nctx.fillRect(10, 10, 80, 80);\n\n//Path\nctx.beginPath();\nctx.moveTo(125, 125);\nctx.lineTo(125, 45);\nctx.lineTo(45, 125);\nctx.closePath();\nctx.fill(); // ou ctx.stroke();\n\n// Cercle\nctx.beginPath();\nctx.arc(95, 50, 40, 0, 2 * Math.PI);\nctx.stroke();\n\n// Texte\nctx.font = "30px Arial";\nctx.fillText("Hello World", 10, 50); // ou ctx.strokeText("Hello World", 10, 50);\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes",children:"Voir la documentation compl\xe8te"})})}),"\n",(0,a.jsx)(n.h2,{id:"animer-le-canvas",children:"Animer le canvas"}),"\n",(0,a.jsxs)(n.p,{children:["On utilise ",(0,a.jsx)(n.code,{children:"requestAnimationFrame()"})," pour animer le canvas. Pour plus d'informations, voir la ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/doc-dvpt-et-integration/docs/notions-globales/misc/animations#requestanimationframe",children:"section sur requestAnimationFrame()"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const canvas = document.getElementById("canvas");\nconst ctx = canvas.getContext("2d");\n\nlet rectangleHeight = 0;\n\n//On cr\xe9e une fonction d\'initialisation\n// Cette fonction est utile si on a des \xe9l\xe9ments \xe0 initialiser avant de lancer l\'animation\nfunction init() {\n    window.requestAnimationFrame(draw);\n}\n\nfunction draw() {\n    //On r\xe9initialise/nettoie le canvas\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n    // dessine un rectangle et le fait grandir\n    ctx.fillRect(0, 0, 10, rectangleHeight);\n    rectangleHeight += 1;\n  \n    //on appelle requestAnimationFrame pour dessiner la prochaine frame\n    window.requestAnimationFrame(draw);\n}\n\ninit();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Pour savoir comment arr\xeater l'animation, regarder la section sur les ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/doc-dvpt-et-integration/docs/notions-globales/misc/animations#animation-avec-arr%C3%AAt-1",children:"animations avec arr\xeat"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Pour en savoir plus sur les animations en canvas : voir la documentation ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations",children:"basique"})})," ou ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations",children:"avanc\xe9e"})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"divers",children:"Divers"}),"\n",(0,a.jsx)(n.h3,{id:"manipulation-des-pixels-pour-changer-les-couleurs-de-limage",children:"Manipulation des pixels pour changer les couleurs de l'image"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas",children:"Documentation MDN"})})}),"\n",(0,a.jsx)(n.h3,{id:"augmenter-la-r\xe9solution-du-canvas",children:"Augmenter la r\xe9solution du canvas"}),"\n",(0,a.jsx)(n.p,{children:"Voici une fonction qui augmente la r\xe9solution du canvas en fonction de la r\xe9solution d'\xe9cran de l'utilisateur :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<canvas id="canvas" width="100" height="100"></canvas>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="script.js"',children:'function setCanvasToCorrectResolution (canvas, dpr) {\n    const rect = canvas.getBoundingClientRect();\n\n    // On change la taille du canvas par sa taille "r\xe9elle"\n    canvas.width = rect.width * dpr;\n    canvas.height = rect.height * dpr;\n    // on zoome le context pour que nos \xe9l\xe9ments du canvas soient \xe0 la bonne taille\n    canvas.getContext("2d").scale(dpr, dpr);\n    // On change la taille dessin\xe9 du canvas, la taille qui sera dans la page web\n    canvas.style.width = `${rect.width}px`;\n    canvas.style.height = `${rect.height}px`;\n};\n// r\xe9cup\xe8re le ratio de la r\xe9solution et la taille du canvas\nconst dpr = window.devicePixelRatio;\n\nconst canvas = document.getElementById("canvas");\nconst ctx = canvas.getContext("2d");\n\n//highlight-next-line\nsetCanvasToCorrectResolution(canvas, dpr);\n\n// Ajouter les \xe9l\xe9ments dans le canvas APRES avoir augment\xe9 la r\xe9solution\nctx.fillStyle = "green";\nctx.fillRect(0, 0, 100, 100);\n// (...)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3557:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/svg-canvas-coordinates-system-1fd06d032a22d4091f446363c2e7c692.svg"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var a=s(6540);const t={},i=a.createContext(t);function c(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);