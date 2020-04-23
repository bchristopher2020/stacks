(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),a=(r(0),r(128)),i={id:"breakpoints",title:"Breakpoints"},c={id:"breakpoints",title:"Breakpoints",description:"`Stacks`, similarly to `Braid` supports the `responsive props` format which allows you to specify an array of values for different screen sizes. Therefore, if you need to customize the spacing, number of columns, or alignments per screen size, then the `responsive props` are for you.",source:"@site/docs/breakpoints.md",permalink:"/stacks/docs/breakpoints",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/breakpoints.md",sidebar:"someSidebar",previous:{title:"Prerequisites",permalink:"/stacks/docs/prerequisites"},next:{title:"Stack",permalink:"/stacks/docs/stack"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Stacks"),", similarly to ",Object(a.b)("inlineCode",{parentName:"p"},"Braid")," supports the ",Object(a.b)("inlineCode",{parentName:"p"},"responsive props")," format which allows you to specify an array of values for different screen sizes. Therefore, if you need to customize the spacing, number of columns, or alignments per screen size, then the ",Object(a.b)("inlineCode",{parentName:"p"},"responsive props")," are for you."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"type ResponsiveProp<T> = T | Readonly<[T, T]> | Readonly<[T, T, T]>\n")),Object(a.b)("p",null,"There are three available breakpoints: ",Object(a.b)("inlineCode",{parentName:"p"},"mobile")," (default, ",Object(a.b)("inlineCode",{parentName:"p"},"Stacks")," components are mobile-first), ",Object(a.b)("inlineCode",{parentName:"p"},"tablet")," and ",Object(a.b)("inlineCode",{parentName:"p"},"desktop"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"type Breakpoint = 'mobile' | 'tablet' | 'desktop'\n")),Object(a.b)("p",null,"You can define custom breakpoints in the provider."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { StacksProvider } from '@mobily/stacks'\n\nconst App = () => {\n  return (\n    <StacksProvider spacing={4} breakpoints={{ tablet: 762, desktop: 992 }}>\n      \u2026\n    </StacksProvider>\n  )\n}\n")))}l.isMDXComponent=!0},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return r?o.a.createElement(m,c({ref:t},s,{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);