"use strict";(self.webpackChunkdoc_dvpt_inte=self.webpackChunkdoc_dvpt_inte||[]).push([[961],{2603:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=o(4848),a=o(8453);const t={sidebar_position:4},l="Manipulation de tableaux",r={id:"notions-globales/misc/manipulation-tableaux",title:"Manipulation de tableaux",description:"Utile pour r\xe9organiser des tableaux de donn\xe9es, comme des tableaux d'objets.",source:"@site/docs/notions-globales/misc/manipulation-tableaux.md",sourceDirName:"notions-globales/misc",slug:"/notions-globales/misc/manipulation-tableaux",permalink:"/doc-dvpt-et-integration/docs/notions-globales/misc/manipulation-tableaux",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Boucles",permalink:"/doc-dvpt-et-integration/docs/notions-globales/misc/boucles"},next:{title:"Clean Code",permalink:"/doc-dvpt-et-integration/docs/notions-globales/clean-code"}},i={},d=[{value:".map()",id:"map",level:2},{value:".filter()",id:"filter",level:2},{value:".sort()",id:"sort",level:2},{value:"Pour aller plus loin",id:"pour-aller-plus-loin",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"manipulation-de-tableaux",children:"Manipulation de tableaux"})}),"\n",(0,s.jsx)(n.p,{children:"Utile pour r\xe9organiser des tableaux de donn\xe9es, comme des tableaux d'objets."}),"\n",(0,s.jsx)(n.h2,{id:"map",children:".map()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Renvoie un nouveau tableau contenant les r\xe9sultats de l'appel de la fonction pass\xe9e en argument sur chaque \xe9l\xe9ment du tableau."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const personnages = ["Frodon","Sam","Gandalf"];\nconst personnagesModifies = personnages.map(perso => { `${perso} !` })\n// personnagesModifies = ["Frodon !","Sam !","Gandalf !"]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"filter",children:".filter()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Retourne un nouveau tableau contenant toutes les donn\xe9es du tableau remplissant les conditions d\xe9finies dans la fonction"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const personnages = ["Frodon","Sam","Gandalf"];\nconst personnagesFiltres = personnages.filter((mot) => mot.length <= 3);\n// personnagesFiltres = ["Sam"]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"sort",children:".sort()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Trie les \xe9l\xe9ments du tableau \xe0 m\xeame le tableau et renvoie le tableau."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const personnages = ["Frodon","Sam","Gandalf"];\npersonnages.sort();\n// personnages = ["Frodon","Gandalf","Sam"]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["On peut fournir une fonction \xe0 la m\xe9thode sort() pour pr\xe9ciser l'ordonnancement que l'on souhaite (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#syntaxe",children:"En savoir plus"})}),")"]}),"\n",(0,s.jsx)(n.p,{children:"Si aucune fonction n'est donn\xe9e en param\xe8tre \xe0 la fonction de comparaison, le tableau est tri\xe9 selon la valeur de point de code Unicode de chaque caract\xe8re."}),"\n",(0,s.jsx)(n.h2,{id:"pour-aller-plus-loin",children:"Pour aller plus loin"}),"\n",(0,s.jsxs)(n.p,{children:["La ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9thodes_des_instances",children:"documentation MDN"})})," r\xe9f\xe9rence toutes les m\xe9thodes que l'on peut appliquer sur les tableaux en Javascript."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var s=o(6540);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);