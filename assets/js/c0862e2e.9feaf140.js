"use strict";(self.webpackChunkdoc_dvpt_inte=self.webpackChunkdoc_dvpt_inte||[]).push([[992],{4558:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),a=i(8453);const r={sidebar_position:2},s="Animations",o={id:"notions-globales/misc/animations",title:"Animations",description:"Il existe plusieurs m\xe9thodes pour faire des animations en Javascript.",source:"@site/docs/notions-globales/misc/animations.md",sourceDirName:"notions-globales/misc",slug:"/notions-globales/misc/animations",permalink:"/doc-dvpt-et-integration/docs/notions-globales/misc/animations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Les objets",permalink:"/doc-dvpt-et-integration/docs/notions-globales/misc/objects"},next:{title:"Boucles",permalink:"/doc-dvpt-et-integration/docs/notions-globales/misc/boucles"}},l={},d=[{value:".animate()",id:"animate",level:2},{value:"JS + Utilisation de transition en CSS",id:"js--utilisation-de-transition-en-css",level:2},{value:".setInterval()",id:"setinterval",level:2},{value:"Animation infinie",id:"animation-infinie",level:3},{value:"Animation avec arr\xeat",id:"animation-avec-arr\xeat",level:3},{value:"requestAnimationFrame()",id:"requestanimationframe",level:2},{value:"Animation infinie",id:"animation-infinie-1",level:3},{value:"Animation avec arr\xeat",id:"animation-avec-arr\xeat-1",level:3}];function c(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"animations",children:"Animations"})}),"\n",(0,t.jsx)(n.p,{children:"Il existe plusieurs m\xe9thodes pour faire des animations en Javascript."}),"\n",(0,t.jsx)(n.h2,{id:"animate",children:".animate()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"animate()"})," permet d'animer un \xe9l\xe9ment jusqu'\xe0 une valeur finale."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const elementDOM = document.querySelector(\".element-a-animer\"); // width=0px par d\xe9faut\n\nconst valeurFinale = '200px';\n\nlet redimensionnementProgressif = elementDOM.animate({width:valeurFinale},1000);\n\n//Une fois l'animation termin\xe9e, on affecte la valeur finale de l'animation pour ne pas retrouver la valeur du d\xe9but\nredimensionnementProgressif.addEventListener('finish', function(){\n    elementDOM.style.width = valeurFinale;\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"js--utilisation-de-transition-en-css",children:"JS + Utilisation de transition en CSS"}),"\n",(0,t.jsxs)(n.p,{children:["Assez simple \xe0 mettre en place, comme ",(0,t.jsx)(n.code,{children:".animate()"}),", mais utiliser les transitions CSS nous permet de g\xe9rer l'easing de la transition pour un meilleur rendu visuel, en utilisant des transitions css avec cubic-bezier par exemple."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const elementDOM = document.querySelector(\".element-a-animer\"); // width=0px par d\xe9faut\n\nconst valeurFinale = '200px';\n\nelementDOM.style.transition = '2s cubic-bezier(.4,0,.2,1)';\nelementDOM.style.width = valeurFinale;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setinterval",children:".setInterval()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"setInterval()"})," permet d'ex\xe9cuter une fonction \xe0 interval r\xe9gulier, d'apr\xe8s le temps indiqu\xe9 (en ms).\nOn peut donc lui indiquer un temps qui ex\xe9cute les instructions 24 fois par seconde, pour avoir une animation fluide."]}),"\n",(0,t.jsx)(n.h3,{id:"animation-infinie",children:"Animation infinie"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const elementDOM = document.querySelector(\".element-a-animer\"); // width=0px par d\xe9faut\n\nlet largeur = 0;\n\nsetInterval(function () {\n    largeur += 1;\n    elementDOM.style.width = `${largeur}px`;\n}, 1000/24);\n// 1000/24 : il s'agit ici d'un interval de 24 frames par seconde\n"})}),"\n",(0,t.jsx)(n.h3,{id:"animation-avec-arr\xeat",children:"Animation avec arr\xeat"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"setInterval()"})," renvoie un id. On peut l'utiliser pour lancer l'animation, puis utiliser clearInterval pour arr\xeater l'animation correspondant \xe0 cet id."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const elementDOM = document.querySelector(".element-a-animer");\n\nlet nombreDeFrames = 0;\n\nconst intervalId = setInterval(function () {\n    nombreDeFrames++;\n    elementDOM.style.width = `${nombreDeFrames}px`;\n\n    //apr\xe8s 2 secondes, on arr\xeate l\'animation\n    if(nombreDeFrames >= 2*24) {\n        clearInterval(intervalId);\n    }\n}, 1000/24);\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"setInterval()"})," peut rapidement devenir gourmand en ressources, surtout si plusieurs ",(0,t.jsx)(n.code,{children:"setInterval()"})," sont utilis\xe9s en m\xeame temps. Si vous souhaitez en utiliser plusieurs, utilisez ",(0,t.jsx)(n.code,{children:"requestAnimationFrame()"})," \xe0 la place pour am\xe9liorer les performances."]})}),"\n",(0,t.jsx)(n.h2,{id:"requestanimationframe",children:"requestAnimationFrame()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"requestAnimationFrame()"})," indique au navigateur qu'on souhaite ex\xe9cuter une animation et demande que celui-ci ex\xe9cute une fonction sp\xe9cifique de mise \xe0 jour de l'animation, avant le prochain rafra\xeechissement \xe0 l'\xe9cran du navigateur."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Contrairement \xe0 ",(0,t.jsx)(n.code,{children:"setInterval()"}),", ici, c'est le navigateur qui a la main sur quand la prochaine mise \xe0 jour sera effectu\xe9e (en fonction du framerate de l'ordinateur et des ressources disponibles au moment de la demande de mise \xe0 jour)."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le navigateur peut optimiser l'animation, elle sera donc plus fluide"}),"\n",(0,t.jsx)(n.li,{children:"Dans les onglets inactifs, l'animation est mise en pause"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["C'est pour ces raisons de performance que ",(0,t.jsx)(n.code,{children:"requestAnimationFrame()"})," est la m\xe9thode \xe0 privil\xe9gier par rapport \xe0 setInterval(). ",(0,t.jsxs)(n.strong,{children:["Pour animer le ",(0,t.jsx)(n.code,{children:"<canvas>"})]})," par exemple, il est beaucoup plus courant d'utiliser ",(0,t.jsx)(n.code,{children:"requestAnimationFrame()"})," plut\xf4t que ",(0,t.jsx)(n.code,{children:"setInterval()"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"animation-infinie-1",children:"Animation infinie"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const elementDOM = document.querySelector(".element-a-animer");\n\nlet width = 0;\n\nfunction animation() {\n    width++;\n    elementDOM.style.width = `${width}px`;\n\n    // Demande \xe0 ex\xe9cuter de nouveau la fonction au prochain rafra\xeechissement de l\'\xe9cran\n    window.requestAnimationFrame(animation);\n}\n\nwindow.requestAnimationFrame(animation);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"animation-avec-arr\xeat-1",children:"Animation avec arr\xeat"}),"\n",(0,t.jsxs)(n.p,{children:["Comme avec ",(0,t.jsx)(n.code,{children:"setInterval()"}),", on peut utiliser l'id que renvoie ",(0,t.jsx)(n.code,{children:"window.requestAnimationFrame()"})," pour stopper l'animation avec ",(0,t.jsx)(n.code,{children:"window.cancelAnimationFrame(id)"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const elementDOM = document.querySelector(\".element-a-animer\");\n\nlet animationId;\nlet width = 0;\n\nfunction animation() {\n    width++;\n    elementDOM.style.width = `${width}px`;\n\n    // Si l'\xe9l\xe9ment a atteint 200px, on arr\xeate l'animation\n    if(width >= 200) {\n        window.cancelAnimationFrame(animationId);\n    }\n    else {\n        animationId = window.requestAnimationFrame(animation);\n    }\n}\n\nanimationId = window.requestAnimationFrame(animation);\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(6540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);