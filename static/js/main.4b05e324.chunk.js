(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,s){"use strict";s.r(t);var l=s(1),r=s.n(l),c=s(3),a=s.n(c),n=(s(8),s(0)),i=function(e){var t=e.itemStyle,s=e.faStyle,l=e.icon,r=e.link;return Object(n.jsx)("li",{className:t,children:Object(n.jsx)("a",{href:r,children:Object(n.jsx)("i",{className:"".concat(s," fa-").concat(l)})})})},o=function(e){var t=e.itemStyle;return Object(n.jsxs)("ul",{className:"bg-green-700 border-b-4 border-green-400  flex justify-end items-center py-2 xl:py-4 px-4 space-x-4 md:space-x-6 xl:space-x-8 2xl:space-x-12 md:text-lg xl:text-xl 2xl:text-3xl",children:[Object(n.jsx)(i,{itemStyle:t,faStyle:"fas",icon:"envelope",link:"#contact-form"}),Object(n.jsx)(i,{itemStyle:t,faStyle:"fab",icon:"github",link:"https://github.com/sethstrouf"}),Object(n.jsx)(i,{itemStyle:t,faStyle:"fab",icon:"linkedin",link:"https://www.linkedin.com/in/sethstrouf"}),Object(n.jsx)(i,{itemStyle:t,faStyle:"fas",icon:"file",link:"https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"})]})},x=function(e){var t=e.children;return Object(n.jsx)("h2",{className:"mt-12 mb-6 mx-4 border-b border-green-700 text-left  text-xl md:text-2xl xl:text-3xl",children:t})},m=function(){return Object(n.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),window.emailjs.sendForm("gmail_service","contact_template",e.target).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))},className:"my-12 py-6 md:py-8 xl:py-12 mx-auto bg-white shadow-lg rounded-lg text-gray-500 w-10/12 border md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-6/12 2xl:text-2xl",children:[Object(n.jsxs)("div",{className:"form-div",children:[Object(n.jsx)("label",{htmlFor:"user_name",children:"Name"}),Object(n.jsx)("input",{type:"text",name:"user_name",required:!0,className:"input-element"})]}),Object(n.jsxs)("div",{className:"form-div",children:[Object(n.jsx)("label",{htmlFor:"user_email",children:"Email"}),Object(n.jsx)("input",{type:"email",name:"user_email",required:!0,className:"input-element"})]}),Object(n.jsxs)("div",{className:"form-div",children:[Object(n.jsx)("label",{htmlFor:"message",children:"Message"}),Object(n.jsx)("textarea",{name:"message",required:!0,className:"input-element h-48"})]}),Object(n.jsx)("div",{className:"form-div",children:Object(n.jsx)("input",{type:"submit",value:"Send",className:"py-1 px-4 w-full rounded bg-green-400 hover:bg-green-300   font-bold md:py-2 md:px-6 md:text-xl xl:px-8 2xl:text-3xl text-gray-700"})})]})},d=function(e){var t=e.image,s=e.alt,l=e.summary,r=e.tech,c=e.pageUrl,a=e.codeUrl,i=e.optUrl,o=e.children;return Object(n.jsxs)("div",{className:"h-48 lg:h-60 xl:h-84 mx-auto grid grid-cols-12 grid-rows-6  w-11/12 sm:w-10/12 md:w-9/12 lg:w-9/12 bg-white rounded-md shadow-md overflow-hidden text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:shadow-xl hover:scale-105 transform",children:[Object(n.jsx)("div",{className:"col-span-4 row-span-6 aspect-w-2 aspect-h-3 border-r-2 border-gray-500 pr-2",children:Object(n.jsx)("a",{href:c,children:Object(n.jsx)("img",{src:"/img/".concat(t),alt:s,className:"object-cover h-full"})})}),Object(n.jsx)("div",{className:"col-span-8 row-span-1 text-xl flex justify-center items-center  sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl",children:Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:o})})}),Object(n.jsxs)("div",{className:"col-span-8 row-span-2 flex justify-center items-center ",children:[Object(n.jsx)("p",{children:l}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:i,className:"underline hover:text-gray-500  text-sm 2xl:text-xl",children:i})})]}),Object(n.jsx)("div",{className:"col-span-8 row-span-2 px-0.5 flex flex-col justify-center items-center",children:Object(n.jsx)("p",{children:Object(n.jsx)("em",{children:r})})}),Object(n.jsx)("div",{className:"col-span-4 row-span-1 flex justify-center items-center hover:bg-green-100 cursor-pointer text-green-700",children:Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:c,className:"font-bold",children:"Link to Site"})})}),Object(n.jsx)("div",{className:"col-span-4 row-span-1 flex justify-center items-center hover:bg-green-100 cursor-pointer text-green-700",children:Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:a,className:"font-bold",children:"Go to Code"})})})]})};function h(){return Object(n.jsxs)("div",{className:"min-h-screen m-auto bg-gray-100 text-gray-700 text-center typography",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)(o,{itemStyle:"text-gray-50 hover:text-green-200"}),Object(n.jsxs)("div",{className:"my-4 md:flex md:justify-center md:items-center  md:my-12 2xl:my-24",children:[Object(n.jsx)("div",{className:"pt-4 md:border-r-4 md:border-green-400 md:w-6/12  md:text-right md:py-12 2xl:py-16",children:Object(n.jsx)("h1",{className:"name text-4xl md:no-underline md:text-5xl md:pr-10 xl:text-7xl 2xl:text-9xl",children:Object(n.jsx)("strong",{children:"Hi, I'm Seth!"})})}),Object(n.jsx)("div",{className:"pt-1 md:w-6/12 md:text-left",children:Object(n.jsx)("p",{className:"text-xl md:pl-8 md:text-2xl xl:text-4xl 2xl:text-6xl",children:"a full-stack web developer"})})]}),Object(n.jsx)("p",{className:"md:text-lg xl:text-xl",children:Object(n.jsx)("a",{href:"https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing",className:"py-1 px-4 rounded bg-green-400 hover:bg-green-300   font-bold md:py-2 md:px-6 md:text-xl xl:px-8 2xl:text-3xl",children:"Resume"})})]}),Object(n.jsxs)("main",{children:[Object(n.jsx)(x,{children:"About"}),Object(n.jsx)("p",{className:"mx-12 text-left text-sm sm:text-base md:text-lg  lg:text-xl xl:text-2xl 2xl:text-3xl",children:"My two passions have always been music and programming. After 12 years of teaching, I'm transitioning into web development as my career. While I enjoy working in the full stack of web development, most of my experience is with Ruby on Rails and React."}),Object(n.jsx)(x,{children:"Projects"}),Object(n.jsxs)("div",{className:"flex flex-row flex-wrap py-12 px-2 gap-y-24 md:gap-y-36 xl:gap-y-48",children:[Object(n.jsx)(d,{image:"blog.png",alt:"Blog project",summary:"Recreation of a portfolio/blog built on SquareSpace",tech:"Ruby on Rails, Authentication/Authorization, AWS Image Hosting",pageUrl:"https://www.hannahbauer.me",codeUrl:"https://github.com/sethstrouf/blog",optUrl:"https://hannahbauer.com/",children:"Blog"}),Object(n.jsx)(d,{image:"memorycards.png",alt:"Memory cards project",summary:"A memory game!",tech:"React, Vanilla CSS, Vanilla JavaScript",pageUrl:"https://sethstrouf.github.io/memory-cards/",codeUrl:"https://github.com/sethstrouf/memory-cards",children:"Memory Cards"}),Object(n.jsx)(d,{image:"calculator.png",alt:"Calculator project",summary:"One of my first JS projects",tech:"Vanilla CSS, Vanilla JavaScript",pageUrl:"https://sethstrouf.github.io/calculator/",codeUrl:"https://github.com/sethstrouf/calculator",children:"Calculator"}),Object(n.jsx)(d,{image:"etchasketch.png",alt:"Etch a sketch project",summary:"Customizable grid size and colors",tech:"Vanilla CSS, Vanilla JavaScript",pageUrl:"https://sethstrouf.github.io/etch-a-sketch/",codeUrl:"https://github.com/sethstrouf/etch-a-sketch",children:"Etch-A-Sketch"}),Object(n.jsx)(d,{image:"rps.png",alt:"Rock, Paper, Scissors project",summary:"You vs. the computer",tech:"Vanilla CSS, Vanilla JavaScript",pageUrl:"https://sethstrouf.github.io/rock-paper-scissors/",codeUrl:"https://github.com/sethstrouf/rock-paper-scissors",children:"Rock Paper Scissors"})]}),Object(n.jsx)(x,{children:"Contact Me"}),Object(n.jsx)(m,{})]}),Object(n.jsx)("footer",{children:Object(n.jsx)("div",{className:"bg-green-700 mt-12 text-gray-50  border-t-4 border-green-400 py-1",children:Object(n.jsx)("p",{children:"\xa92021 Seth Strouf"})})})]})}a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))},8:function(e,t,s){}},[[10,1,2]]]);
//# sourceMappingURL=main.4b05e324.chunk.js.map